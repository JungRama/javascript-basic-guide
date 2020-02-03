// Var   = Global Variable
// Let   = Block Scoped Variable
// Const = Cant change the value of variable, use UPPERCASE when use this

var x = 5
const ROW = 1

if(true){
    let x = 10
    console.log(x)
}

x = 15;
console.log(x)


// FAT ARROW FUNCTION ----------------------------

// OLD JS
function name() {
   console.log('OLDJS')
}

// ES6
var nameES6 = ((a,b)=>{
    console.log(a+b)
})(2,3) // ADDING () in last will automatic run the function

// ES6 -> THIS
var thisES6 = ((e)=>{
    console.log(this) // will get the root
    console.log(e.target) // will get the item or element
})
let button = document.querySelector('.button-fun')
button.addEventListener('click', thisES6)



// OBJECT LITERAL ----------------------------
let someField = "hobby"

let obj = {
    name : 'jung',
    "age" : 18,
    [someField]: "Writing",
    getAll() {
        return this.name + 'With Age : ' + this.age
    }
}
console.log(obj)

console.log(obj.name)
console.log(obj[someField])
console.log(obj["age"])
console.log(obj.getAll())



// REST OPERATOR  ----------------------------
function sumUp(...toAdd) { // using this 3 dots make it to be an array
    for (let index = 0; index <= toAdd.length; index++) {
        return toAdd[index]
    }    
}
console.log(sumUp(100,10,20)) 
 


// FOR of LOOP   ----------------------------
let forObj = [1 , 2, 3, "Rama"]
for (const item of forObj) {
    console.log(item)
} 



// TEMPLATE LITERALE   ----------------------------
let nameTL = "Jung Rama"
let desc = `My Name Is ${nameTL}`
console.log(desc)



// DESCTRUTURING   ----------------------------
let data = {
    myName : "Jung Rama",
    myAge : 18,
    myHobby : "Eat"
}

let {myName, myAge, myHobby} = data
console.log(`${myName} age is ${myAge} love to ${myHobby}`)

// SWAPING
let a = 5
let b = 10
[b, a] = [a, b]
