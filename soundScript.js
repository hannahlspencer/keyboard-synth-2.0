var audio_context = window.AudioContext || window.webkitAudioContext;  
  
  var context = new audio_context();
  var oscillator;
  var soundOn = false;
  var filter = context.createBiquadFilter();
  var num = 0;
  
 
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
		
    //first row of white notes
	//plays f
	if (key == "\\") {
      oscillator.frequency.value = 174.61;
    }
	//plays g
	if (key == "z") {
      oscillator.frequency.value = 196.00;
    }
	//plays a
	if (key == "x") {
      oscillator.frequency.value = 220.00;
    }
	//plays b
	if (key == "c") {
      oscillator.frequency.value = 246.94;
    }
    //plays middle c
    if (key == "v") {
      oscillator.frequency.value = 261.63;
    }
    //plays d
    if (key == "b") {
      oscillator.frequency.value = 293.66;
    }
    //plays e
    if (key == "n") {
      oscillator.frequency.value = 329.63;
    }
    //plays f
    if (key == "m") {
      oscillator.frequency.value = 349.23;
    }
    //plays g
    if (key == ",") {
      oscillator.frequency.value = 391.99;
    }
    //plays a
    if (key == ".") {
      oscillator.frequency.value = 440.00;
    }
    //plays b
    if (key == "/") {
      oscillator.frequency.value = 493.88;
    }

    
    //first row of black notes
	//plays f#
    if (key == "a") {
      oscillator.frequency.value = 185.00;
    }
	//plays g#
    if (key == "s") {
      oscillator.frequency.value = 207.65;
    }
	//plays a#
    if (key == "d") {
      oscillator.frequency.value = 233.08;
    }
    //plays c#
    if (key == "g") {
      oscillator.frequency.value = 277.18;
    }
    //plays d#/;;
    if (key == "h") {
      oscillator.frequency.value = 311.12;
    }
    //plays f#
    if (key == "k") {
      oscillator.frequency.value = 369.99;
    }
    //plays g#
    if (key == "l") {
      oscillator.frequency.value = 415.30;
    }
    //plays a#
    if (key == ";") {
      oscillator.frequency.value = 466.16;
    }
    
    //second row of white notes
    //plays c
    if (key == "q") {
      oscillator.frequency.value = 523.25;
    }
    //plays d
    if (key == "w") {
      oscillator.frequency.value = 587.33;
    }
    //plays e
    if (key == "e") {
      oscillator.frequency.value = 659.25;
    }
    //plays f
    if (key == "r") {
      oscillator.frequency.value = 698.45;
    }
    //plays g
    if (key == "t") {
      oscillator.frequency.value = 783.99;
    }
    //plays a
    if (key == "y") {
      oscillator.frequency.value = 880.00;
    }
    //plays b
    if (key == "u") {
      oscillator.frequency.value = 987.76;
    }
	//plays C6
	if(key == "i") {
		oscillator.frequency.value = 1046.50;
	}
    
    //second row of black notes
    //plays c#
    if (key == "2") {
      oscillator.frequency.value = 554.36;
    }
    //plays d#
    if (key == "3") {
      oscillator.frequency.value = 622.25;
    }
    //plays f#
    if (key == "4") {
      oscillator.frequency.value = 739.98;
    }
    //plays g#
    if (key == "5") {
      oscillator.frequency.value = 830.60;
    }
    //plays a#
    if (key == "6") {
      oscillator.frequency.value = 932.32;
    }
  }
