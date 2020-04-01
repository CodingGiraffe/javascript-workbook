'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
//make function to find first vowel
function findFirstVowel(word) {
//make variable with vowels for loop to search for
  const vowel = ["a", "e", "i", "o", "u"];
//make a loop to go through each letter of each word
  for (let i = 0; i < word.length; i++) {
//set new variable to find vowels 
    let firstVowel = vowel.indexOf(word[i]);
  
  console.log(firstVowel);
//make condition of how to act if a word does or does not have a vowel
  if (vowel.indexOf(word[i]) !== -1) {
  return i;
      }
    }
  }

//make a varible for pig latin word
const pigLatin = (word)  => {
//trim and lowercase input
  word = word.toLowerCase().trim();
//set loop to search for first vowel in a word
  let firstVowel = findFirstVowel(word);
  //set conditions to split word and add "ay" at the end
  if (firstVowel > 0) {
  return word.substring(firstVowel) + word.substring(0, firstVowel) + "ay";
  } else {
  return word + "yay";
    }
  }


const getPrompt = () => {
  rl.question('word ', (answer) => {
    console.log( pigLatin(answer) );
    getPrompt();
  });
}

// Tests

if (typeof describe === 'function') {

  describe('#pigLatin()', () => {
    it('should translate a simple word', () => {
      assert.equal(pigLatin('car'), 'arcay');
      assert.equal(pigLatin('dog'), 'ogday');
    });
    it('should translate a complex word', () => {
      assert.equal(pigLatin('create'), 'eatecray');
      assert.equal(pigLatin('valley'), 'alleyvay');
    });
    it('should attach "yay" if word begins with vowel', () => {
      assert.equal(pigLatin('egg'), 'eggyay');
      assert.equal(pigLatin('emission'), 'emissionyay');
    });
    it('should lowercase and trim word before translation', () => {
      assert.equal(pigLatin('HeLlO '), 'ellohay');
      assert.equal(pigLatin(' RoCkEt'), 'ocketray');
    });
  });
} else {

  getPrompt();

}
