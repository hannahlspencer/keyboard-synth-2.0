var audio_context = window.AudioContext || window.webkitAudioContext;

var context = new audio_context();
var oscillator;
var soundOn = false;
var filter = context.createBiquadFilter();
var num = 0;

 var keyboard = {
     lowF:174.61,
     lowFsharp:185.00,
     lowG:196.00,
     lowGsharp:207.65,
     lowA:220.00,
     lowAsharp:233.08,
     lowB:246.94,

     middleC:261.63,
     middleCsharp:277.18,

     midD:293.66,
     midDsharp:311.12,
     midE:329.63,

     midF:349.23,
     midFsharp:369.99,

     midG:391.99,
     midGsharp:415.30,

     midA:440.00,
     midAsharp:466.16,
     midB:493.88,

     highC:523.25,
     highCsharp:554.36,

     highD:587.33,
     highDsharp:622.25,
     highE:659.25,

     highF:698.45,
     highFsharp:739.98,

     highG:783.99,
     highGsharp:830.60,

     highA:880.00,
     highAsharp:932.32,
     highB:987.76
 };

function setNote(key) {

	//turn oscillator on and off
  if(key == "Enter"){
	  if (soundOn == false) {
	    oscillator = context.createOscillator();
		  oscillator.connect(filter);
		  filter.connect(context.destination);
		  oscillator.connect(context.destination);
		  oscillator.frequency.value = 600;
		  soundOn = true;
		  oscillator.frequency.value = 600;
		  filter.frequency.value = 100;
	    oscillator.start();
	  } else {
		  soundOn = false;
		  oscillator.stop();
	  }

  }

	if(key == "0") {
	    if (num < 3) {
		  num++;
	    } else {
		  num = 0;
	    }
		var cycle = ["sawtooth", "sine", "square", "triangle"];
		oscillator.type = cycle[num];
	}

  $('.whiteKey_active').removeClass('whiteKey_active');
  $('.blackKey_active').removeClass('blackKey_active');
    //first row of white notes
    if (key == "`") {
      oscillator.frequency.value = keyboard.lowF;
      document.getElementById("lowF").classList.add("whiteKey_active");
    }

    if (key == "z") {
      oscillator.frequency.value = keyboard.lowG;
      document.getElementById("lowG").classList.add("whiteKey_active");
    }

    if (key == "x") {
      oscillator.frequency.value = keyboard.lowA;
      document.getElementById("lowA").classList.add("whiteKey_active");
    }
    if (key == "c") {
      oscillator.frequency.value = keyboard.lowB;
      document.getElementById("lowB").classList.add("whiteKey_active");
    }
    if (key == "v") {
      oscillator.frequency.value = keyboard.middleC;
      document.getElementById("middleC").classList.add("whiteKey_active");
    }
    if (key == "b") {
      oscillator.frequency.value = keyboard.midD;
      document.getElementById("midD").classList.add("whiteKey_active");
    }
    if (key == "n") {
      oscillator.frequency.value = keyboard.midE;
      document.getElementById("midE").classList.add("whiteKey_active");
    }
    if (key == "m") {
      oscillator.frequency.value = keyboard.midF;
      document.getElementById("midF").classList.add("whiteKey_active");
    }
    if (key == ",") {
      oscillator.frequency.value = keyboard.midG;
      document.getElementById("midG").classList.add("whiteKey_active");
    }
    if (key == ".") {
      oscillator.frequency.value = keyboard.midA;
      document.getElementById("midA").classList.add("whiteKey_active");
    }
    if (key == "/") {
      oscillator.frequency.value = keyboard.midB;
      document.getElementById("midB").classList.add("whiteKey_active");
    }

    //first row of black notes
    if (key == "a") {
      oscillator.frequency.value = keyboard.lowFsharp;
      document.getElementById("lowFsharp").classList.add("blackKey_active");
    }
    if (key == "s") {
      oscillator.frequency.value = keyboard.lowGsharp;
      document.getElementById("lowGsharp").classList.add("blackKey_active");
    }
    if (key == "d") {
      oscillator.frequency.value = keyboard.lowAsharp;
      document.getElementById("lowAsharp").classList.add("blackKey_active");
    }
    if (key == "g") {
      oscillator.frequency.value = keyboard.middleCsharp;
      document.getElementById("middleCsharp").classList.add("blackKey_active");
    }
    if (key == "h") {
      oscillator.frequency.value = keyboard.midDsharp;
      document.getElementById("midDsharp").classList.add("blackKey_active");
    }
    if (key == "k") {
      oscillator.frequency.value = keyboard.midFsharp;
      document.getElementById("midFsharp").classList.add("blackKey_active");
    }
    if (key == "l") {
      oscillator.frequency.value = keyboard.midGsharp;
      document.getElementById("midGsharp").classList.add("blackKey_active");
    }
    if (key == ";") {
      oscillator.frequency.value = keyboard.midAsharp;
      document.getElementById("midAsharp").classList.add("blackKey_active");
    }

    //second row of white notes
    if (key == "q") {
      oscillator.frequency.value = keyboard.highC;
      document.getElementById("highC").classList.add("whiteKey_active");
    }
    if (key == "w") {
      oscillator.frequency.value = keyboard.highD;
      document.getElementById("highD").classList.add("whiteKey_active");
    }
    if (key == "e") {
      oscillator.frequency.value = keyboard.highE;
      document.getElementById("highE").classList.add("whiteKey_active");
    }
    if (key == "r") {
      oscillator.frequency.value = keyboard.highF;
      document.getElementById("highF").classList.add("whiteKey_active");
    }
    if (key == "t") {
      oscillator.frequency.value = keyboard.highG;
      document.getElementById("highG").classList.add("whiteKey_active");
    }
    if (key == "y") {
      oscillator.frequency.value = keyboard.highA;
      document.getElementById("highA").classList.add("whiteKey_active");
    }
    if (key == "u") {
      oscillator.frequency.value = keyboard.highB;
      document.getElementById("highB").classList.add("whiteKey_active");
    }
	  //plays C6 (not currently used)
	  if(key == "i") {
		  oscillator.frequency.value = 1046.50;
	  }

    //second row of black notes
    if (key == "2") {
      oscillator.frequency.value = keyboard.highCsharp;
      pressNote("highCsharp", "blackKey_active");
    }
    if (key == "3") {
      oscillator.frequency.value = keyboard.highDsharp;
      pressNote("highDsharp", "blackKey_active");
    }
    if (key == "4") {
      oscillator.frequency.value = keyboard.highFsharp;
      pressNote("highFsharp", "blackKey_active");
    }
    if (key == "5") {
      oscillator.frequency.value = keyboard.highGsharp;
      pressNote("highGsharp", "blackKey_active");
    }
    if (key == "6") {
      oscillator.frequency.value = keyboard.highAsharp;
      pressNote("highAsharp", "blackKey_active");
    }
}

function pressNote(note, keyClass) {
  document.getElementById(note).classList.add(keyClass);
}
