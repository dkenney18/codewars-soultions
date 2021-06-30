const reducer = (accumulator, current) => console.log(accumulator + current.price);

const shoppingList = function (items) { 
    let total = 0

    for (i in items) {
        total += items[i].price
    }

    return total
  };


console.log(shoppingList([ { itemName : 'Bread', price : 11.00 }, { itemName : 'Milk', price : 7.00 }, { itemName : 'Cheese', price : 19.50 }]))
  