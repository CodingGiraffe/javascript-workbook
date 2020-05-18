'use strict'

let words = [
    "javascript",
    "monkey",
    "amazing",
    "pancake",
    "galvainze",
    "cohort",
    "concatenate",
    "iteration",
    "index",
    "code",
    "angular",
    "react",
    "python"
    ];
    let pickWord = function () {
        // Return a random word
        return words[Math.floor(Math.random() * words.length)]
    }

    let setupAnswerArray = function (word) {
        // Return the answer array
        for(let i = 0; i < word.length; i++) {
          return  answerArray[i] = "_"
        }
    } 
    
let word = pickWord()
let answerArray = setupAnswerArray(word)
let remainingLetters = word.length
// let pickWord = function () {
//     // Return a random word
//     return words[Math.floor(Math.random() * words.length)]
// }

// let setupAnswerArray = function (word) {
//     // Return the answer array
//     for(let i = 0; i < word.length; i++) {
//       return  answerArray[i] = "_"
//     }
// } 

let showPlayerProgess = function (answerArray) {
    //Use alert to show the player their progress
    console.log(answerArray.join(" "))
}

let getGuess = function () {
    // Use prompt to get a guess
    let guess = console.log("Guess a letter, or click cancel to stop playing")
}

let updateGameState = function (guess, word, answerArray) {
    // Update answerArray and return a number showing how many times the guess appears in the word so remainingLetters can be updated
    if (guess === null) {
        return false
    } else if (guess.length !== 1) {
        console.log("Please enter a single letter")
    } else {
        //update the state with the guess
        for (let j=0; j < word.length; j++) {
            if (word[j] === guess) {
                answerArray[j] = guess; remainingLetters--
            }
      }
    }
}

let showAnswerAndCongratulatePlayer = function (answerArray) {
    console.log(answerArray.join(" "))
    console.log("Good work! The answer was" + word)
    };

while (remainingLetters > 0) {
    showPlayerProgess(answerArray)
    let guess = getGuess()
    if (guess === null) {
        break
    } else if (guess.length !== 1) {
        alert("Please enter a single letter")
    } else {
        let correctGuesses = updateGameState(guess, word, answerArray)
        remainingLetters -= correctGuesses
    }
}

showAnswerAndCongratulatePlayer(answerArray)