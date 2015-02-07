window.addEventListener("keydown", keyPress, false);

var sounds = {};
var images = {};
var image_path = {};

sounds[49] = document.getElementById('fightsong_sound');
images[49] = document.getElementById('fightsong_img');
image_path[49] = 'images/prezbo.png';

var playHistory = [];

function keyPress(e) {
	if(e.keyCode=='48'){
    	playBack();
	}
    else{
    	playKey(e);
    	playHistory.push(e.keyCode);
    	alert(playHistory);
	}
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

