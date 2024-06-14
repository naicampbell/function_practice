let nums = [1, 2, 3, 4, 5, 6]

//MAP
let double = function(num){
    return num * 2
}

let doubled_nums = nums.map(double)
console.log(doubled_nums)


//FILTER
let isEven = function(num){
    return num % 2 == 0
}

let even_numbers = nums.filter(isEven)
console.log(even_numbers)

//REDUCE

let reduceTotal = (total, currentValue) => total += currentValue

let arrayTotal = nums.reduce(reduceTotal, 0)
console.log(arrayTotal)

//REDUCE2

let amazonItems = [
    {name: "shoes", price: 200, quantity: 4},
    {name: "bags", price: 2000, quantity: 10},
    {name: "pens", price: 5, quantity: 1000},
    {name: "books", price: 30, quantity: 500}
]

function totalInventoryValue() {

    const getTotalItemValue = (accumulator, currentValue) => {
      return (accumulator += currentValue.price * currentValue.quantity);
    };
  
    INITIAL_VALUE = 0;
  
    const totalValue = amazonItems.reduce(getTotalItemValue, INITIAL_VALUE);
  
    console.log("totalValue: " + totalValue);
  }

totalInventoryValue()
