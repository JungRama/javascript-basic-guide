const book1 = {
    title : 'Book One',
    author : 'John Doe',
    year : '2013',
    getSummary(){
        return `${this.title} written by ${this.author} in ${this.year}`
    }
}

console.log(book1.getSummary());
