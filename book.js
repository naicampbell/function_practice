let inventory = [];

function createBook(title, author, genre, chapters, pages) {
    const newBook = {
        title: title,
        author: author,
        genre: genre,
        chapter: chapters,
        pages: pages,
    };
    inventory.push(newBook)
}

function checkInventory() {
    console.log(inventory)
}

createBook("book title", "dylan foley", "horror", 12, 257);
createBook("spongebob book", "Dr. Bob", "comedy", 10, 155);
console.log(checkInventory());


///// New Stuff
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 25, 50, 75, 100]
let sum = arr.reduce((total, currentValue => total + currentValue, 0))



// Inventory array of objects
 inventory = [
    { id: 1, name: 'Laptop', quantity: 4, price: 1000 },
    { id: 2, name: 'Monitor', quantity: 10, price: 150 },
    { id: 3, name: 'Mouse', quantity: 50, price: 20 },
    { id: 4, name: 'Keyboard', quantity: 30, price: 40 },
    { id: 5, name: 'Phone', quantity: 5, price: 600 },
 ]

function printItemNames() {
    inventory.forEach(item => console.log(item.name));
}


// quantity < 10 = Low
function showLowQuantity() {
    console.log("delete this to complete this function");
}

function itemNamesToUppercase() {
    console.log("delete this to complete this function");
}

function totalInventoryValue() {
    console.log("delete this to complete this function");
}

// Testing functions
printItemNames();
showLowQuantity();
itemNamesToUppercase();
totalInventoryValue();
