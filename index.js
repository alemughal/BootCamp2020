function api() {
    return new Promise((resolve, reject) => {
        let data = fetch('https://jsonplaceholder.typicode.com/todos/3')
        resolve(data)
        reject("Data not getting")
    })
}

api()
    .then((data) => {
        return data.json()
    })
    .then((people) => {
        console.log(people)
    })
    .catch((error) => {
        console.log(error)
    })



async function newFunction() {
   await console.log(Promise.resolve("Hello World"))
}

newFunction()