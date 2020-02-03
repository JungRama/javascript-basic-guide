// Object Of Protos
const bookProtos = {
    getSummary(){
        return `${this.title} written by ${this.author} in ${this.year}`
    },
    getAge(){
        const old = new Date().getFullYear() - this.year
        return `The ${this.title} old is ${old}yr old`
    }
}

// const book1 = Object.create(bookProtos) // using bookprotos as the prototype
// sign the data 1-1
// book1.title = "Book One"
// book1.author = "John Doe"
// book1.year = "2013"

const book1 = Object.create(bookProtos, {
    title : {value : "Book One"},
    author : {value : "Janie"},
    year : {value : "2019"},
})


console.log(book1);
