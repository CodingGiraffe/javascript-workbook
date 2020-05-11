'use strict'

console.log("loading script.js file")

window.onload = function() {
    console.log("window loaded")
    getPosts()
}

let getPosts = function() {
    console.log("Inside the post method, about to make a fetch request")
    let fetchPromise = fetch('https://robohash.org/?set=set2')

    let dataPromise = fetchPromise.then(function(response) {
        console.log("The packaging of the amazon item has arrived", response)
        return response.json()
    })

    dataPromise.then(function(data) {
        console.log("We have opened the packaging and the item/data is here! data =", data)
    })
    console.log("Request sent off...")
}
