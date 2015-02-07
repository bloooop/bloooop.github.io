window.addEventListener("keydown", keyPress, false);

var sounds = {};
var images = {};
var image_path = {};

var minIndex = 32;
var maxIndex = 57;
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

sounds[54] = document.getElementById('shoes_sound');
images[54] = document.getElementById('shoes_img');
image_path[54] = 'images/6_shoes.png';

sounds[55] = document.getElementById('opera_sound');
images[55] = document.getElementById('opera_img');
image_path[55] = 'images/7_operasinger.png';

sounds[56] = document.getElementById('trash_sound');
images[56] = document.getElementById('trash_img');
image_path[56] = 'images/8_trash.png';

sounds[57] = document.getElementById('whistle_sound');
images[57] = document.getElementById('whistle_img');
image_path[57] = 'images/9_whistle.png';

sounds[65] = document.getElementById('number_sound');
images[65] = document.getElementById('number_img');
image_path[65] = 'images/a_number.png';

sounds[66] = document.getElementById('tswift_sound');
images[66] = document.getElementById('tswift_img');
image_path[66] = 'images/b_tswift.png';

sounds[67] = document.getElementById('cow_sound');
images[67] = document.getElementById('cow_img');
image_path[67] = 'images/c_cow.png';

sounds[68] = document.getElementById('ew_sound');
images[68] = document.getElementById('ew_img');
image_path[68] = 'images/d_ew.png';

sounds[69] = document.getElementById('santa_sound');
images[69] = document.getElementById('santa_img');
image_path[69] = 'images/e_santa.png';

sounds[70] = document.getElementById('hallelujah_sound');
images[70] = document.getElementById('hallelujah_img');
image_path[70] = 'images/f_hallelujah.png';

sounds[71] = document.getElementById('cricket_sound');
images[71] = document.getElementById('cricket_img');
image_path[71] = 'images/g_cricketchirp.png';

sounds[72] = document.getElementById('car_sound');
images[72] = document.getElementById('car_img');
image_path[72] = 'images/h_car.png';

sounds[73] = document.getElementById('ken_sound');
images[73] = document.getElementById('ken_img');
image_path[73] = 'images/i_ken.png';

sounds[74] = document.getElementById('jeff_sound');
images[74] = document.getElementById('jeff_img');
image_path[74] = 'images/j_jeff.png';

sounds[75] = document.getElementById('burp_sound');
images[75] = document.getElementById('burp_img');
image_path[75] = 'images/k_burp.png';

sounds[76] = document.getElementById('harp_sound');
images[76] = document.getElementById('harp_img');
image_path[76] = 'images/l_harp.png';

sounds[77] = document.getElementById('cat_sound');
images[77] = document.getElementById('cat_img');
image_path[77] = 'images/m_cat.png';

sounds[78] = document.getElementById('21_sound');
images[78] = document.getElementById('21_img');
image_path[78] = 'images/n_21.png';

sounds[79] = document.getElementById('anna_sound');
images[79] = document.getElementById('anna_img');
image_path[79] = 'images/o_anna.png';

sounds[80] = document.getElementById('baby_sound');
images[80] = document.getElementById('baby_img');
image_path[80] = 'images/p_baby.png';

sounds[81] = document.getElementById('spongebob_sound');
images[81] = document.getElementById('spongebob_img');
image_path[81] = 'images/q_spongebob.png';

sounds[82] = document.getElementById('honey_sound');
images[82] = document.getElementById('honey_img');
image_path[82] = 'images/r_honey.png';

sounds[83] = document.getElementById('mean_sound');
images[83] = document.getElementById('mean_img');
image_path[83] = 'images/s_mean.png';

sounds[84] = document.getElementById('beyonce_sound');
images[84] = document.getElementById('beyonce_img');
image_path[84] = 'images/t_beyonce.png';

sounds[85] = document.getElementById('obama_sound');
images[85] = document.getElementById('obama_img');
image_path[85] = 'images/u_obama.png';

sounds[86] = document.getElementById('miley_sound');
images[86] = document.getElementById('miley_img');
image_path[86] = 'images/v_miley.png';

sounds[87] = document.getElementById('interview_sound');
images[87] = document.getElementById('interview_img');
image_path[87] = 'images/w_interview.png';

sounds[88] = document.getElementById('justin_sound');
images[88] = document.getElementById('justin_img');
image_path[88] = 'images/x_justin.png';

sounds[89] = document.getElementById('nemo_sound');
images[89] = document.getElementById('nemo_img');
image_path[89] = 'images/y_nemo.png';

sounds[90] = document.getElementById('morgan_sound');
images[90] = document.getElementById('morgan_img');
image_path[90] = 'images/z_morgan.png';


var playHistory = [];

function keyPress(e) {
    playKey(e.keyCode);
    playHistory.push(e.keyCode);
}

function playKey(code){
	sounds[code].play();
    clearImages();
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
    },sounds[playHistory[index]].duration*1000 + 500);
}

function clearHistory(){
	playHistory = [];
}

function clearImages(){
    for(var i = minIndex; i <= maxIndex; i++){
        if(images[i]!=null){
            images[i].src = '';
        }
    }
}
