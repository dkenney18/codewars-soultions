function worries(str) {
    greeting = "Stop worrying, everything will be all right!"
    if (str == "Making last-minute changes") 
    {
        return greeting
    } 
    else if (str == "Sitting in a dark room and shaking" ) 
    {
        return greeting
    } 
    else if (str == "Crying" ) 
    {
        return greeting
    }
    else if (str == "Laughing hysterically" ) 
    {
        return greeting
    }


    return "Do you really care?"
}

console.log(
    worries("Making last-minute changes")
)

console.log(
    worries("Sitting in a dark room and shaking")
)

console.log(
    worries("Crying")
)

console.log(
    worries("Laughing hysterically")
)

console.log(
    worries("")
)