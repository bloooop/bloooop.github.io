window.addEventListener("keydown", keyPress, false);
window.addEventListener("mousedown", mouseClick);

var sounds = {};
var images = {};
var image_path = {};

sounds[32] = document.getElementById('bloop_sound');
images[32] = document.getElementById('bloop_img');
image_path[32] = 'images/space_bloop.png';

sounds[48] = document.getElementById('fart_sound');
images[48] = document.getElementById('fart_img');
image_path[48] = 'images/0_fart.png';

sounds[49] = document.getElementById('fightsong_sound');
images[49] = document.getElementById('fightsong_img');
image_path[49] = 'images/1_prezbo.png';

sounds[50] = document.getElementById('furelise_sound');
images[50] = document.getElementById('furelise_img');
image_path[50] = 'images/2_furelise.png';

sounds[51] = document.getElementById('scream_sound');
images[51] = document.getElementById('scream_img');
image_path[51] = 'images/3_scream.png';

sounds[52] = document.getElementById('baymax_sound');
images[52] = document.getElementById('baymax_img');
image_path[52] = 'images/4_baymax.png';

sounds[53] = document.getElementById('minion_sound');
images[53] = document.getElementById('minion_img');
image_path[53] = 'images/5_minion.png';

sounds[54] = document.getElementById('basketball_sound');
images[54] = document.getElementById('basketball_img');
image_path[54] = 'images/6_basketball.png';

sounds[55] = document.getElementById('opera_sound');
images[55] = document.getElementById('opera_img');
image_path[55] = 'images/7_operasinger.png';

sounds[56] = document.getElementById('triangle_sound');
images[56] = document.getElementById('triangle_img');
image_path[56] = 'images/8_triangle.png';

sounds[57] = document.getElementById('whistle_sound');
images[57] = document.getElementById('whistle_img');
image_path[57] = 'images/9_whistle.png';

var playHistory = [];

function keyPress(e) {
    playKey(e);
    playHistory.push(e.keyCode);
}

function playKey(e)
{
	sounds[e.keyCode].play();
    setTimeout(function(){
    	images[e.keyCode].src='';
    },sounds[e.keyCode].duration*1000)
    images[e.keyCode].src=image_path[e.keyCode];
}

function playAgain(code){
	sounds[code].play();
    setTimeout(function(){
    	images[code].src='';
    },sounds[code].duration*1000)
    images[code].src=image_path[code];
}

function playBack() {
	for (var i = 0; i < playHistory.length; i++){
		playAgain(playHistory[i]);
	}
}

function mouseClick(){
	playBack();
}
