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
        processContact(data.results)
    })
    console.log("Request sent off...")
}

function processContact(contacts) {
    console.log("the contacts are =", contacts)
    contacts.forEach(function(person) {

            console.log("Updating the HTML for posts = ", contacts, "this is inside the for each =", person)
            let postsUl = document.getElementById("posts")
        
            let postLi = document.createElement("li")
            postLi.innerText = person.name.first + " " + person.name.last
            postsUl.appendChild(postLi)
        
            let userPic = person.picture.thumbnail
            console.log(userPic)
            let userPicSpan = document.createElement("span")
            userPicSpan.innerText = "   - " + userPic
            postLi.append(userPicSpan)

            document.getElementById("info").addEventListener('click', function () {
            let moreInfo = "Gender = " + person.gender + ", Age = " + person.dob.age + ", Email = " + person.email
            console.log("adding more info =", moreInfo)
            this.append(moreInfo)
            })

        })
    }
