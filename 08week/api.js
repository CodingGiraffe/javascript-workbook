'use strict'

console.log("loading script.js file")

window.onload = function() {
    console.log("window loaded")
    getJokes()
}

let getJokes = function() {
    console.log("Inside the post method, about to make a fetch request")
    let fetchPromise = fetch('https://api.chucknorris.io/jokes/random')

    let dataPromise = fetchPromise.then(function(response) {
        console.log("The packaging of the amazon item has arrived", response)
        return response.json()
    })

    dataPromise.then(function(data) {
        console.log("We have opened the packaging and the item/data is here! data =", data)
        processInfo(data)
    })
    console.log("Request sent off...")
}

function processInfo(jokeInfo) {
    console.log("the contacts are =", jokeInfo)

    let postsUl = document.getElementById("posts")
    let chuckJokes = document.createElement("h2")

    chuckJokes.innerText = jokeInfo.value
    console.log(chuckJokes)
    postsUl.appendChild(chuckJokes)

    let chuckPic = document.createElement("img")
    chuckPic.setAttribute("src", jokeInfo.icon_url)
    postsUl.appendChild(chuckPic)
}

    
