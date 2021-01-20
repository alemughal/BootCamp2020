function check () {
    return new Promise ((resolve, reject) =>{
        setTimeout(function () {
            resolve("Resolve")
            reject("Reject")
        }, 2000)
    })
}
check()

.then(data => {
    console.log(data)
})
.catch(err=> {
    console.log(err)
})

