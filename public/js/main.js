let outputP;
let genButton;
let traceryResult;
let year;
let month;

let weather;
let sea;
let duty;
let act;


function setup() { 
  noCanvas();
  // var myCanvas = createCanvas(windowWidth, 300);
  // myCanvas.parent("sketch");
  background(255);
  textAlign(LEFT, TOP);
  textSize(24);
  // genButton = createButton("New Page");
  // genButton.position(40, 0)
  // genButton.mousePressed(generate);
  // genButton.mousePressed(randomYear);
  outputP = createP("");
  
} 

function draw() { 
  switch (weather){
    case "1":
      weather1();
      break;
    case "2":
      weather2();
  }

  switch (sea){
    case 1:
      sea1();
      break;
    case 2:
      sea2();
      break;
    case 3:
      sea3();
      break;
    case 4:
      sea4();
      break;

  }
}

function randomYear(){
  year = parseInt(random(1800, 1900));
  document.getElementById("year").innerHTML = year;
}

function randomMonth(){
  month = random(["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"]);
  document.getElementById("month").innerHTML = month;
}

function generate() {
  var grammar = tracery.createGrammar(grammarSource);
  grammar.addModifiers(tracery.baseEngModifiers);
  var output = grammar.flatten("#origin#");
  // outputP.html(output);
  document.getElementById("journal").innerHTML = output;
  // let tracery = new Tracery(grammarSource);
  // // Generate a string using the 'origin' rule
  // traceryResult = tracery.createString("origin")

  weather = grammar.flatten('#weather_v#');
  sea = grammar.flatten('#sea_v#');
  duty = grammar.flatten('#duty_v#');
  act = grammar.flatten('#act_v#');

  // export {weather, sea, duty, act};
  console.log("weather", weather);
  console.log("sea", sea);

  if (sea == 1){
    sea1();
  }else if (sea == 2){
    sea2()
  }else if (sea == 3){
    sea3()
  }else if (sea == 4){
    sea4()
  }

  // if (weather == 1){
  //   w1();}
  // }else if (sea == 2){
  //   // sea2()
  // }else if (sea == 3){
  //   sea3()
  // }else if (sea == 4){
  //   sea4()
  // }
}



// cut and paste your grammar below (as the value for variable "grammarSource")
var grammarSource = {
  "origin": "#[#setTime#][#setWeather#][#setSea#][#setDuty#][#setAct#]diary#",
  "setTime": [
    "[time: in the dawn][time_v: 1]", "[time: at noon][time_v:2]", "[time: at dusk][time_v: 3]", "[time: in the night time][time_v:4]"
    ],
  "setWeather": [
    "[weather: Moderate breeze South these 24 hours with rain showers.][weather_v: 1]",
    "[weather: Fresh to moderate breeze N.W. first part of 24 hours. Last part of 24 hours light variable winds light rain showers during 24 hours.][weather_v: 2]",
    "[weather: Strong breeze to light Gale East these 24 hours with clear fine weather during 24 hours.][weather_v: 3]",
    "[weather: Light South wind with light rain showers first part of 24 hours. Last part of 24 hours light variable winds, cloudy but dry.][weather_v: 4]",
  ],
  "setSea":[
    "[sea: Sea smooth.][sea_v: 1]",
    "[sea: Sea moderately smooth.][sea_v: 2]",
    "[sea: Sea rough.][sea_v: 3]",
    "[sea: Sea very rough.][sea_v: 4]"
  ],
  "setDuty":[
    "[duty: General duties for the day.][duty_v: 1]",
    "[duty: Keeper went to port on important business.][duty_v: 2]",
    "[duty: Keeper putting wood in 2nd Asst cellar.][duty_v: 3]"
  ],
  "setAct": [
    "[act: Keepers went fishing.][act_v: 1]",
    "[act: Keepers cleaning illuminating apparatus today.][act_v: 2]",
    "[act: Keeper returned to the station at 1.30 P.M.][act_v: 3]"
  ],

  "diary": [ "#weather.capitalize# #sea# #duty# #act#"  
  ]
};

// function keyPressed() {
//   if (key == "a"){
//   if (Tone.Transport.state == "started") {
//     Tone.Transport.pause();
//   } else {
//     Tone.Transport.start();
//   }
// }
// }

