decodeMorse = function(morseCode){
    words = morseCode.split("   ")
    letters = []
    sentence= []
    words.forEach(element => {
        letters.push(element.split(" "))
    });

    for (let word = 0; word < letters.length; word++) {
        const element = letters[word];
        for (let letter = 0; letter < element.length; letter++) {
            const el = element[letter]
            
        }
        
    }
    letters.join(" ")

    console.log(letters)

  }
  decodeMorse('.... . -.--   .--- ..- -.. .')