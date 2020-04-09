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
      //set conditions to split word and add "ay" at the end or "yay" to end if no vowel
      if (firstVowel > 0) {
      return word.substring(firstVowel) + word.substring(0, firstVowel) + "ay";
      } else {
      return word + "yay";
        }
      }


      function handleClick() {
        let input = document.getElementById("word");
        let word = input.value;
        // console.log("word :", word);
        
        let translation = pigLatin(word);
        // console.log("translation", translation);
        
        let translateWord = document.getElementById("translateWord");
        translateWord.innerText = translation;
        }
    
    
      
    