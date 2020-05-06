'use strict'

console.log("loading script.js file")

window.onload = function() {
    console.log("window loaded")
    getPosts()
}

let getPosts = function() {
    console.log("Inside the post method, about to make a fetch request")
    let fetchPromise = fetch('https://randomuser.me/api/?results=10')

    let dataPromise = fetchPromise.then(function(response) {
        console.log("The packaging of the amazon item has arrived", response)
        return response.json()
    })

    dataPromise.then(function(data) {
        console.log("We have opened the packaging and the item/data is here! data =", data)
        data.results.forEach(updateHtml)
    })
    console.log("Request sent off...")
}

let updateHtml = function(post) {
    console.log("Updating the HTML for posts = ", post)
    let postsUl = document.getElementById("posts")

    let postLi = document.createElement("li")
    postLi.innerText = name.first
    postsUl.appendChild(postLi)

    let userName = name.first + "" + name.last
    console.log(userName)
    let userNameSpan = document.createElement("span")
    userNameSpan.innerText = "   - by " +userName
    postLi.append(userNameSpan)

    fetch('https://randomuser.me/api/?results=10'+userName)
    .then(function(response) {
        return response.json()
    })
    .then(function(data) {
        userNameSpan.innerText = "     - by"+data.results.name
    })
}