  // Slider code:
  var continueOn = false;

  $(function() {

  	$("#slider-range-max").slider({
  		range: "max",
  		min: 1,
  		max: 50,
  		value: 25,
  		slide: function(event, ui) {
  			$("#amount").val(ui.value);
  		}
  	});
  	$("#amount").val($("#slider-range-max").slider("value"));
  	$("#slider").slider({
  		range: "min",
  		min: 1,
  		max: 30,
  		value: 5,
  		slide: function(event, ui) {
  			$("#amountBreak").val(ui.value);
  		}
  	});
  	$("#amountBreak").val($("#slider").slider("value"));

  	// Clock code:
  	// initialise:
  	var topLoaderRunning = false;
  	var stopPressed = false;
  	var timeLeftMins = $("#amount").val() - 1; // minus one minute as we add 60 seconds
  	var timeLeftSecs = 60;
  	var totalTime = $("#amount").val() * 60;
  	var whatLeft;


  	var stopAudio = new Audio('sound/Transformers-change.mp3');
	var resetAudio = new Audio('sound/Transforming-sound.mp3');
  	// check for changes of the slider
  	$("#slider-range-max").slider({
  		change: function(event, ui) {

  		}
  	});
  	$("#slider-range-max").on("slidechange", function(event, ui) {
  		timeLeftSecs = 60;
  	});

  	var $topLoader = $("#topLoader").percentageLoader({
  		width: 256,
  		height: 256,
  		controllable: true,
  		progress: 0.5,
  		onProgressUpdate: function(val) {
  			this.setValue(Math.round(val * 100.0) + '');
  		}
  	});


  	/* Some browsers may load in assets asynchronously. If you are using the percentage
  	 * loader as soon as you create it (i.e. within the same execution block) you may want to
  	 * wrap it in the below `ready` function to ensure its correct operation
  	 */


  	$topLoader.percentageLoader({
  		onready: function() {
  			$("#startTimerBtn").click(function() {
  				if (topLoaderRunning) {
  					return;
  				}
  				if (onBreak) {

  					return breakTime(false);
  				}

  				topLoaderRunning = true;

  				//if (!stopPressed) {
  				// check for updates or changes
  				timeLeftMins = $("#amount").val() - 1;
  				totalTime = $("#amount").val() * 60;
  				//}
  				// reset if was pressed:
  				stopPressed = false;

  				var animateFunc = function() {
  					if (stopPressed) return;
  					timeLeftSecs -= 1;
  					if ((timeLeftMins * 60 + timeLeftSecs) === 0) {

  						$topLoader.percentageLoader({
  							progress: 100
  						});
  						// format seconds                
  						$topLoader.percentageLoader({
  							value: ("00:00")
  						});
  						// Time for a break...
  						return breakTime(true);
  					}
  					var currentTimeTaken = totalTime - (timeLeftMins * 60 + timeLeftSecs);
  					$topLoader.percentageLoader({
  						progress: currentTimeTaken / totalTime
  					});
  					// format seconds
  					var secondsLeftTxt = timeLeftSecs < 10 ? "0" + timeLeftSecs : timeLeftSecs;
  					$topLoader.percentageLoader({
  						value: (timeLeftMins + ":" + secondsLeftTxt)
  					});
  					document.title = "Time left: " + timeLeftMins + ":" + secondsLeftTxt;
  					if (timeLeftSecs > 0) {
  						setTimeout(animateFunc, 1000);
  					} else {

  						if (timeLeftMins > 0) {
  							timeLeftMins -= 1;
  							timeLeftSecs = 59;
  							setTimeout(animateFunc, 1000);
  						} else {
  							timeLeftSecs = 59;

  						}

  						topLoaderRunning = false;
  						// Play audio

  						return;


  					}

  				};


  				setTimeout(animateFunc, 1000);
  			});



  		}
  	});

  	$("#stopTimer").click(function() {
  		stopPressed = true;
  		if (topLoaderRunning) {
  			topLoaderRunning = false;
  			stopAudio.play();
  		}  		
  	});

  	$("#resetTimer").click(function() {
  		resetClock();
  		
  	});

	function resetClock() {
		stopPressed = true;
  		timeLeftMins = $("#amount").val() - 1; // minus one minute as we add 60 seconds
  		timeLeftSecs = 60;
  		totalTime = $("#amount").val() * 60;
  		topLoaderRunning = false;
  		$topLoader.percentageLoader({
  			value: (timeLeftMins + 1 + ":00")
  		});
  		$topLoader = $("#topLoader").percentageLoader({
  			width: 256,
  			height: 256,
  			controllable: true,
  			progress: 0.0,
  			onProgressUpdate: function(val) {
  				this.setValue(0 + '');
  			}
  		});
  		document.title = "Pomodoro Clock";
  		minsBreak = $("#amountBreak").val();
  		secsBreak = 0;
  		$("#breakTimeLeft").html('0:00');
  		if (onBreak) onBreak = false;
		resetAudio.play();
	}




  	var onBreak = false;
  	var breakAudio = new Audio('sound/Warning-sound4x.mp3');
  	var minsBreak = 0
  	var secsBreak = 0;

  	function breakTime(makeSound) {
  		if (onBreak) {
  			// update existing break time
  			var breakTimeLeft = $("#breakTimeLeft").text().split(':');
  			minsBreak = Number(breakTimeLeft[0]);
  			secsBreak = Number(breakTimeLeft[1]);
  			var secsBreakTxt = secsBreak < 10 ? "0" + secsBreak : secsBreak;
  			$("#breakTimeLeft").html(minsBreak + ":" + secsBreakTxt);
  			document.title = "Break time: " + minsBreak + ":" + secsBreakTxt;
  		} else {
  			minsBreak = $("#amountBreak").val();
  			secsBreak = 60;
  			$("#breakTimeLeft").html(minsBreak + ":00");
  		}
  		onBreak = true;
  		if (makeSound) breakAudio.play();
  		stopPressed = false;


  		var animateBreakClock = function() {
  			if (stopPressed) return;
  			secsBreak -= 1;
  			if (secsBreak === 0) {
  				// stop break
  				if (minsBreak === 0) {
  					$("#breakTimeLeft").html('0:00');
  					// try resetting				
					resetClock();
  					return;
  				}
  				minsBreak -= 1;
  				secsBreak = 60;
  			}
  			var brkSecsLeftTxt = secsBreak < 10 ? "0" + secsBreak : secsBreak;
  			if (secsBreak === 60) brkSecsLeftTxt = "00";
  			$("#breakTimeLeft").html(minsBreak + ":" + brkSecsLeftTxt);


  			if (secsBreak > 0) {
  				setTimeout(animateBreakClock, 1000);
  			} else {
  				if (minsBreak > 0) {
  					minsBreak -= 1;
  					secsBreak = 59;
  					setTimeout(animateBreakClock, 1000);
  				} else {
  					// end of break
  					$("#breakTimeLeft").html('0:00');
  					secsBreak = 59;
  					
  				}


  			}


  		}
  		// this will start it counting down initially
  		if (makeSound) minsBreak -= 1;
  		setTimeout(animateBreakClock, 1000);

  		$("#stopTimer").click(function() {
  			stopPressed = true;
  			topLoaderRunning = false;
  		});
  	}

  });
