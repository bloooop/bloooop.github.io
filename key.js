window.addEventListener("keydown", keyPress, false);

var sounds = {};
var images = {};
var image_path = {};

sounds[49] = document.getElementById('fightsong_sound');
images[49] = document.getElementById('fightsong_img');
image_path[49] = 'images/prezbo.png';

var history = new Array();

function keyPress(e) {
    play(e);
    history.push(e.keyCode);
}

function play(e)
{
	sounds[e.keyCode].play();
    setTimeout(function(){
    	images[e.keyCode].src='';
    },3500)
    images[e.keyCode].src=image_path[e.keyCode];
}

function playBack() {
	for (var i = 0; i < history.length; i++){
		play(history[i]);
	}
}