function squareRootMe(sqrt){
    
    //DON'T USE MATH LIBRARY.
      
    //Your code here!
    let number = 0
    let count = 0
    
    while (number != sqrt) {
    number = count * count
    count += 1
    }
      
    return count - 1
  }

  console.log(squareRootMe(5476))