function spinWords(s){
  //splits the string in to words
  let words = s.split(" ")
  let charsInWord = []

  //maps the length of words to words in a string
  words.forEach((item, i) => {
    let replacedItem = item.replace(/[!.]/gi, "")
    return charsInWord.push(replacedItem.split("").length)
  });

  //reverses words longer than 5 chars
 for (let i = 0; i < words.length; i++) {
   const element = words[i];
   if (charsInWord[i] >= 5) {
    let replacedItem = element.replace(/[!.]/gi, "")
    let splitString = replacedItem.split("")
    words[i] = splitString.reverse().join("")
   }
 }
  return words.join(" ")
}

spinWords("Welcome to my world!")
