function squareDigits(num) {
    let numbers = num.toString().split("")
    let powered = []
    
    numbers.forEach(function (item) {
        powered.push(Math.pow(parseInt(item), 2))
    })

    return powered.join("")

}