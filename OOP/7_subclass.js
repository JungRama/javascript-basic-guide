class Book{
    constructor(title, author, year){
        this.title = title
        this.author = author
        this.year = year
    }

    getSummary(){
        return `${this.title} written by ${this.author} in ${this.year}`
    }

}

const book1 = new Book('Book One', 'John Doe', 2018)
console.log(book1.getSummary())

// SUB CLASS
class Magazine extends Book{
    constructor(title, author, year, price){
        super(title, author, year)
        this.price = price
    }
}

const mg1 = new Magazine('Playboy', 'Maya', '2019', '$30')
console.log(mg1, mg1.getSummary());
