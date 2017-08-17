//backend
//converts word to pig latin
function toPigLatin(word){
  //if first letter is y treat as consanant logic
  if (word.charAt(0) === "y"){
    word = word.slice(1, word.length) + "y"
    word = consanantLogic(word);
    return word;
  //if first letter is a vowel use vowel logic
  }else if (isVowel(word.charAt(0))) {
    word = vowelLogic(word);
    return word;
  //if first letter is consanant use consanant logic
  }else if (!isVowel(word.charAt(0))){
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
//logic for if the first letter is a consanant
function consanantLogic(word){
  var frontConsanants = "";
  //loop through word until the first vowel, adding all the consanants to frontConsanant
  for (var i=0; i<word.length; i++){
    if(!isVowel(word.charAt(i))){
      frontConsanants += word.charAt(i);
    //special exception for moving u if it follows q
    }else if(word.charAt(i)==="u" && frontConsanants.charAt(frontConsanants.length-1) === "q") {
      frontConsanants += word.charAt(i);
    //After first vowel slice off the front and add frontConsanants
    }else{
      word = word.slice(i, word.length) + frontConsanants + "ay";
      return word;
    }
  }
}


//front end
$(document).ready(function(){
  $("#pigLatinForm").submit(function(event){
    event.preventDefault();
    //save user input a string
    var string = $("#stringInput").val();
    //convert string into an array of words with lower case
    var arrayOfWords = string.toLowerCase().split(" ");
    //convert into pig latin using back end logic
    var pigLatin = arrayOfWords.map(toPigLatin);
    //display pig latin on screen
    $("#result").text(pigLatin.join(" "));
  });
});
