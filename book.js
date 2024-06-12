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