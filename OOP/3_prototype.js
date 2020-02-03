// Prototype

function Book(title, author, year) {
    this.title = title
    this.author = author
    this.year = year
}
// GET SUMMARY
Book.prototype.getSummary = function () {
    return `${this.title} written by ${this.author} in ${this.year}`
}
// GET AGE
Book.prototype.getAge = function () {
    const old = new Date().getFullYear() - this.year
    return `The ${this.title} old is ${old}yr old`
}
// REVISE
Book.prototype.revise = function (newAuthor) {
   this.author = newAuthor; 
}


const book1 = new Book('Book One', 'John Doe', 2018)
console.log(book1.getSummary())

const book2 = new Book('Book Two', 'Jane Doe', 2017)
console.log(book2.getAge())
// REVISE
book2.revise("Makoto Shinkai")
console.log(book2);
