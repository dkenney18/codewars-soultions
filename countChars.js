function count (string) { 

    let uniqueChars = String.prototype.concat(...new Set(string))

    let objects = {}

    uniqueChars.split("").forEach(
        function(char) { objects[char] = (string.split(char).length - 1)}
    )

   return (string == "") ? {} : objects
}

console.log(count("aba"))