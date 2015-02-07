window.addEventListener("keydown", keyPress, false);

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

sounds[65] = document.getElementById('chimes_sound');
images[65] = document.getElementById('chimes_img');
image_path[65] = 'images/a_clockchimes.png';

sounds[66] = document.getElementById('tswift_sound');
images[66] = document.getElementById('tswift_img');
image_path[66] = 'images/b_tswift.png';

sounds[67] = document.getElementById('moo_sound');
images[67] = document.getElementById('moo_img');
image_path[67] = 'images/c_moo.png';

sounds[68] = document.getElementById('rain_sound');
images[68] = document.getElementById('rain_img');
image_path[68] = 'images/d_rain.png';

sounds[69] = document.getElementById('santa_sound');
images[69] = document.getElementById('santa_img');
image_path[69] = 'images/e_santa.png';

sounds[70] = document.getElementById('hallelujah_sound');
images[70] = document.getElementById('hallelujah_img');
image_path[70] = 'images/f_hallelujah.png';

sounds[71] = document.getElementById('cricket_sound');
images[71] = document.getElementById('cricket_img');
image_path[71] = 'images/g_cricketchirp.png';


var playHistory = [];

function keyPress(e) {
    playKey(e.keyCode);
    playHistory.push(e.keyCode);
}

function playKey(code){
	sounds[code].play();
    setTimeout(function(){
    	images[code].src='';
    },sounds[code].duration*1000)
    images[code].src=image_path[code];
}

function playBack() {
	var index = 0;
    var stopId;
    playKey(playHistory[index]);
    stopId = setInterval(function(){
        index++;
        if(index >= playHistory.length){
            clearInterval(stopId)
        }
        if(index < playHistory.length){
            playKey(playHistory[index]);
        }
    },sounds[playHistory[index]].duration*1000 + 1000);
}

function clearHistory(){
	playHistory = [];
}

