var videoFiles = [ "1.mp4", "2.mp4", "3.mp4"
];

var player;
var playerSource = document.createElement( "source" );

document.addEventListener("DOMContentLoaded", function() {
	initialise();
}, false);

// abouve set up script

function generateThumbnail( video ) {

	var canvas = document.createElement( "canvas" );
	var container = document.getElementById( "thumb-container" );
	var width = container.clientWidth;
	var height = container.clientHeight;

	canvas.width = ( width / 3 );
	canvas.height = height;
	canvas.getContext( "2d" ).drawImage( video, 0, 0, canvas.width, canvas.height );

	var image = document.createElement( "img" );
	image.src = canvas.toData();
	return image;
}

// above takes a video object and returns an image object for the thumbnail creation.

// below automatically generate thumbnails as video is loaded.

function initialise() {
	player = doucument.getElementById( "player" );
	player.appendChild( playerSource );
	player.controls = false;

	videoFiles.forEach( function( file ) {
		var thumbSource = document.createElement( "source" );
		thumbSource.src = file;

		var thumbVideo = document.createElement( "video" );
		thumbVideo.addEventListener( "loadeddata", function() {
			var container = document.getElementById( "thumb-container" );
			var image = generateThumbnail( thumbVideo );
			container.appendChild( image );
		}, false);
		thumbVideo.appendChild( thumbSource );
	});
}

