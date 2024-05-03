var weatherSynth = new Tone.PolySynth(4, Tone.FMSynth).toMaster();
// console.log(synth);

var dutySynth = new Tone.PolySynth(3, Tone.AMSynth).toMaster();

let wave = new Tone.Player("./public/assets/waveloop.wav");
// wave.autostart = true;
wave.loop = true;
wave.toMaster();
wave.volume.value = 10;

// let bird = new Tone.Player("sound/quietbird");
// bird.loop = true;
// bird.toMaster();
// bird.volume.value = 6;

let loaded = false;

function sea1(){
    wave.playbackRate = 0.5;
}

function sea2(){
    wave.playbackRate = 1;
}

function sea3(){
    wave.playbackRate = 5;
}

function sea4(){
    wave.playbackRate = 20;
}

// function w1(){
//     bird.start();
// }

function keyPressed(){
    // sea3();
    if (key == " "){
        if (wave.state == "started") {
            wave.stop();
          } else {
            wave.start();
           
          }
        }
    // wave.start();
    console.log(wave.playbackRate)
    }



