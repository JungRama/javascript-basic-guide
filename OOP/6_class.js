class Book{
    constructor(title, author, year){
        this.title = title
        this.author = author
        this.year = year
    }

    getSummary(){
        return `${this.title} written by ${this.author} in ${this.year}`
    }

    static topBookStore(){
        return 'Static Function'
    }
}

// USE BOOK CLASS
const book1 = new Book('Book One', 'John Doe', 2018)
console.log(book1.getSummary())

// CALL STATIC FUNCTION
console.log(Book.topBookStore());
