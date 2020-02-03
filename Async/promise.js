const posts = [{
        title: 'Post One',
        body: 'This is post one'
    },
    {
        title: 'Post Two',
        body: 'This is post two'
    },
]

function getPosts() {
    setTimeout(() => {
        let output = '';
        posts.forEach((post, index) => {
            output += `<li>${post.title}</li>`
        })
        document.body.innerHTML = output
    }, 1000)
}



// PROMISE
function createPost(post) {
    return new Promise((resolve, reject) =>{
        setTimeout(() => {
            posts.push(post)
            const error = false

            if(!error){
                resolve()
            }else{
                reject("Error : Something went wrong tho")
            }
        }, 2000)
    })
}

createPost({
    title: 'Post Promise',
    body: 'This is post Promise'
}).then({
    getPosts()
})



// USING PROMISE ALL
const promise1 = Promise.resolve("Promise 1")
const promise2 = "Promise 2"
const promise3 = new Promise(resolve=>{
    setTimeout(() => {
        resolve("Promise 3")
    }, 2000);
})

const promiseFetch = 
fetch('https://jsonplaceholder.typicode.com/todos/1')
.then(response => response.json())


Promise.all([promise1, promise2, promise3, promiseFetch])
.then(res => {
    console.log(res);
})
.catch(err => {
    console.log(err);
})



// ASYNC / AWAIT 
async function fetchData(url) {
    const res   = await fetch(url)
    const data  = await res.json()
    console.log(data);
}
fetchData('https://jsonplaceholder.typicode.com/users')
