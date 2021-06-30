let romanNumeralHashMap = {
    "I": 1,
    "V": 5,
    "X": 10,
    "L": 50,
    "C": 100,
    "D": 500,
    "M": 1000,
}

function solution(roman) {

    let total = 0

    var numerals = roman.split('')

    for (let i = 0; i < numerals.length; i++) {

        let currentValue = romanNumeralHashMap[numerals[i]]
        let nextValue = romanNumeralHashMap[numerals[i + 1]]

        if (currentValue < nextValue) 
        {
            total -= currentValue
        } else 
        {
            total += currentValue
        }
    }

    return total
}

console.time("Test 1")
solution('XXI') // 21
console.timeEnd("Test 1")

console.time("Test 2")
solution('I') // 1
console.timeEnd("Test 2")

console.time("Test 3")
solution('IV') // 4
console.timeEnd("Test 3")

console.time("Test 4")
solution('MMVIII') // 2008
console.timeEnd("Test 4")

console.time("Test 5")
solution('MDCLXVI') // 1666
console.timeEnd("Test 5")