function rot13(str) {
    const chars = str.split("")
    const ascii = []
    const encodedMessage = []
    const message = []
    chars.forEach(element => {
        ascii.push(element.charCodeAt())
    });

    for (let char = 0; char < ascii.length; char++) {
        var element = ((ascii[char] - 122) % (122-65) + 13)
        encodedMessage.push(Math.abs(element + (element - 65)))
    }

    for (let char = 0; char < encodedMessage.length; char++) {
        message.push(String.fromCharCode(message[char]))
    }

    console.log(message.join())

}


rot13("This is my first ROT13 excercise!")