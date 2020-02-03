// Constructor

function Book(title, author, year) {
    this.title = title
    this.author = author
    this.year = year

    this.getSummary = (()=>{
        return `${this.title} written by ${this.author} in ${this.year}`
    })
}

const book1 = new Book('Book One', 'John Doe', 2018)
console.log(book1.getSummary())

const book2 = new Book('Book Two', 'Jane Doe', 2019)
console.log(book2)
