//backend
//converts word to pig latin
function toPigLatin(word){
  //if first letter is y treat as consanant logic
  if (word.charAt(0) === "y"){
    return word;
  //if first letter is a vowel use vowel logic
  }else if (isVowel(word.charAt(0))) {
    word = vowelLogic(word);
    return word;
  //if first letter is consanant use consanant logic
  }else if (isVowel(word.charAt(0))){
    word = consanantLogic(word);
    return word;
  }
};
// checks if letter is a vowel and returns true if is a vowel and false a consanant
function isVowel(letter){
  var vowel = ["a", "e", "i", "o", "u", "y"];
  for(var i=0; i<vowel.length; i++){
    if (vowel[i] === letter){
      return true;
    }
  }return false;
}
//logic for if the first letter is a vowel
function vowelLogic(word){
  word = word +"way";
  return word;
}
function consanantLogic(word){
  
}

//front end
$(document).ready(function(){
  $("#pigLatinForm").submit(function(event){
    event.preventDefault();
    //save user input a string
    var english = $("#stringInput").val();
    //convert string into an array of words with lower case
    var arrayOfWords = english.toLowerCase().split(" ");
    //convert into pig latin using back end logic
    var pigLatin = arrayOfWords.map(toPigLatin);
    //display pig latin on screen
    $("#result").text(pigLatin.join(" "));
  });
});
