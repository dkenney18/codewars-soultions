var numbers = {
    "one": 1,
    "two": 2,
    "three": 3,
    "four": 4,
    "five": 5,
    "six": 6,
    "seven": 7,
    "eight": 8,
    "nine": 9,
    "ten": 10,
    "eleven": 11,
    "twelve": 12,
    "thirteen": 13,
    "fourteen": 14,
    "fifteen": 15,
    "sixteen": 16,
    "seventeen": 17,
    "eighteen": 18,
    "nineteen": 19,
    "twenty": 20,
    "thirty": 30,
    "forty": 40,
    "fifty": 50,
    "sixty": 60,
    "seventy": 70,
    "eighty": 80,
    "ninty": 90
}

var placevalue = {
    "hundred": 100,
    "thousand": 1000,
    "million": 1000000,
    "billion": 1000000000,
    'trillion': 1000000000000
}

function parseInt(string) {
    words = string.split(/\band\b|\b-\b|\s/gmi)
    console.log(words)
    var result = ""
    for (let i = 0; i < words.length; i++) {
        if (words[i] == placevalue[words[i]]) {
           result += (numbers[words[i - 1]] * placevalue[words[i]])
        }
        result += numbers[words[i]]
    }
    return result
}





console.log(parseInt('one'))
console.log(parseInt('twenty'))
console.log(parseInt('two hundred forty-six'))
console.log(parseInt("seven hundred eighty-three thousand nine hundred and nineteen"))
console.log(parseInt("seven hundred eighty-three thousand nine hundred nineteen"))
