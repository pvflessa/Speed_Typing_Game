window.addEventListener('load',init)

//Variables

let time = 5;
let score = 0;
let isPlaying

//DOM elements
const wordInput = document.querySelector('#wordInput')
const currentWord = document.querySelector('#currentWord')
const scoreDispaly = document.querySelector('#score')
const timeDispaly = document.querySelector('#time')
const message = document.querySelector('#message')
const seconds = document.querySelector('#seconds')


const words  = [
  'accolade',
  'acrimony',
  'boondoggle',
  'brusque',
  'cacophony',
  'capricious' ,
  'cloying',
  'dichotomy',
  'disheveled',
  'elan',
  'ennui',
  'epitome',
  'equivocate',
  'fastidious',
  'euphemism',
  'fiasco',
  'gregarious',
  'idiosyncratic',
  'insidious',
  'kitsch',
  'malinger',
  'minimalist',
  'nirvana',
  'oblivion',
  'ostracize',
  'paradox',
  'precocious',
  'revel',
  'spartan',
  'stigma',
  'stoic'
]

//Initialize Game

function init(){
  //Load Word From The Array
  showWord(words)
  //Call Countdown every second
  setInterval(countdown, 1000)
  //Check game status
  setInterval(checkStatus,50)
  //Start matching on word input
  wordInput.addEventListener('input', startMatch)
  //Display the seconds
  seconds.innerHTML = time


}





//Pick a random word and display it

function showWord(words){
  //generate random array index
  const randomIndex = Math.floor(Math.random()*words.length)
  //output random word
  currentWord.innerHTML = words[randomIndex]
}

//Countdown timer

function countdown(){
  //Make sure time is not run out
  if(time > 0){
    //Decrise the time
    time --

  }else if (time === 0) {
    isPlaying =false
  }
  //Show time
  timeDispaly.innerHTML= time
}

//check game status

function checkStatus(){
  if(!isPlaying && time === 0){
    message.innerHTML = 'Game Over'
    message.className = 'error'
    score =-1
  }
}

function startMatch(){
  if(matchWords()){

    isPlaying = true
    time = 6
    showWord(words)
    wordInput.value =''
    score++

  }

  if(score === -1){
    scoreDispaly.innerHTML = 0
  }else{scoreDispaly.innerHTML = score}
}


//Match currentWord to wordInput

function matchWords(){
  if(wordInput.value === currentWord.innerHTML){
    message.innerHTML = 'Correct'
    message.className = 'success'
    return true
  }else{
    message.innerHTML = ''
    return false
  }
}


























//Pick a random word and display it
