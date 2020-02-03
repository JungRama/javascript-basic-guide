// BOOK
function Book(title, author, year) {
    this.title = title
    this.author = author
    this.year = year
}

// GET SUMMARY
Book.prototype.getSummary = function () {
    return `${this.title} written by ${this.author} in ${this.year}`
}
 
// MAGAZINE
function Magazine(title, author, year, price) {
    // INHERITENCE A BOOK
    Book.call(this, title, author, year)
    this.price = price;
}

// GET BOOK PROTOTYPE
Magazine.prototype = Object.create(Book.prototype) 

// USE MAGAZINE PROTOTYPE => default using book prototype
// Magazine.prototype = Magazine

const mg1 = new Magazine('Playboy', 'Maya', '2019', '$30')
console.log(mg1.getSummary());
 