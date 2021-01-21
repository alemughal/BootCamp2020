// Callbacks Functions

function myFirst() {
    myDisplayer("Hello");
}

function mySecond() {
    myDisplayer("Goodbye");
}

myFirst();
mySecond();


// Asynchronous Javascript

function asynchronous() {
    setTimeout(function () { myFunction("I love You !!!"); }, 3000);

    function myFunction(value) {
        document.getElementById("demo").innerHTML = value;
    }
}

asynchronous()

// Promise (then, catch)

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

// Async, Await

async function newFunction() {
    await console.log(Promise.resolve("Hello World"))
}

newFunction()