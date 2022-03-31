/* If you're feeling fancy you can add interactivity 
    to your site with Javascript */

// global constants
const clueHoldTime = 1000; //how long to hold each clue's light/sound
const cluePauseTime = 333; //how long to pause in between clues
const nextClueWaitTime = 1000; //how long to wait before starting playback of the clue sequence
// ^ why do we need this

// Global Variables 
// do I need to add to array?
var pattern = [1, 3, 2, 4, 3, 5, 6, 7, 2, 1];
var progress = 0;
var gamePlaying = false;
var volume = 0.5; // must be between 0.0 and 1.0
var tonePlaying = false;
var guessCounter = 0; // keeps track of where user is in clueseq



function startGame(){
    //initialize game variables
    progress = 0;
    gamePlaying = true;
  // swap the Start and Stop buttons, to unhide stop
document.getElementById("startBtn").classList.add("hidden");
document.getElementById("stopBtn").classList.remove("hidden");
  playClueSequence();
}



function stopGame(){
    //initialize game variables
    progress = 0;
    gamePlaying = false;
  // swap the Start and Stop buttons, to unhide start
document.getElementById("stopBtn").classList.add("hidden");
document.getElementById("startBtn").classList.remove("hidden");
}




// Sound Synthesis Functions (C D E F) top = C# & D#
const freqMap = {
  1: 261.6,
  2: 293.7,
  3: 329.6,
  4: 349.2,
  5: 392,
  6: 440,
  7: 493.9,
}

// takes a button num and length of time and plays tone for that length
function playTone(btn,len){ 
  o.frequency.value = freqMap[btn]
  g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
  context.resume()
  tonePlaying = true
  setTimeout(function(){
    stopTone()
  },len)
}

function startTone(btn){
  if(!tonePlaying){
    context.resume()
    o.frequency.value = freqMap[btn]
    g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
    context.resume()
    tonePlaying = true
  }
}
function stopTone(){
  g.gain.setTargetAtTime(0,context.currentTime + 0.05,0.025)
  tonePlaying = false
}

// Page Initialization
// Init Sound Synthesizer
var AudioContext = window.AudioContext || window.webkitAudioContext 
var context = new AudioContext()
var o = context.createOscillator()
var g = context.createGain()
g.connect(context.destination)
g.gain.setValueAtTime(0,context.currentTime)
o.connect(g)
o.start(0)

// lighting or clearing a button;
// takes a button and concatenates it with the arguement (a num) passed to it
// and then adds the class "lit" to it's HTML element
function lightButton(btn){
  document.getElementById("button"+btn).classList.add("lit")
}
function clearButton(btn){
  document.getElementById("button"+btn).classList.remove("lit")
}

// fn for playing a single clue

function playSingleClue(btn){
  if(gamePlaying){
    lightButton(btn);
    playTone(btn,clueHoldTime);
    setTimeout(clearButton,clueHoldTime,btn); // built-in fn for future call
    // notice that we don't include an arguement list in parantheses??
  }
}

// calls playSingleClue
function playClueSequence(){
  context.resume()
  guessCounter = 0;
  let delay = nextClueWaitTime; //set delay to initial wait time
  for(let i=0;i<=progress;i++){ // for each clue that is revealed so far
    console.log("play single clue: " + pattern[i] + " in " + delay + "ms")
    setTimeout(playSingleClue,delay,pattern[i]) // executes once, calls fn after an X # of ms (delay)
    // pattern[i] here is the parameter for playSingleClue
    delay += clueHoldTime 
    delay += cluePauseTime;
    
  }
}

// called if user loses game
function loseGame(){
  stopGame();
  alert("Game Over. You lost."); // built-in fn
}

function winGame(){
  stopGame();
  alert("Congratulations, you won!"); // built-in fn
}

function guess(btn){
  console.log("user guessed: " + btn);
  if(!gamePlaying){
    return;
  }
  if(pattern[guessCounter] == btn) {
    if (guessCounter == progress){
      if (progress == pattern.length - 1){
        // GAME OVER: WIN!
        winGame();
        
      } else{
        // Pattern is correct, add next segment
        progress++;
        playClueSequence();
      } 
    }else{
      // we check the next guess
      guessCounter++;
    }
  }
  
  else{
    //Guess was incorrect
    //GAME OVER: LOSE!
    loseGame();  
  }
}

  /* (if (= btn pattern[i])
        (if (= (length of sequence) (length of # guesses))
            (if (= (- (length of seq) 1) (length of # guesses))
                winGame
                (and (progress++) (playClueSeq)))
            guessCounter++)
          loseGame)
            
        
  */

