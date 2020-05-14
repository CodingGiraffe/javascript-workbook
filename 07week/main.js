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
        
            let userPic = document.createElement("img")
            console.log(userPic)
            userPic.setAttribute("src", person.picture.thumbnail)
            postsUl.appendChild(userPic)

            document.getElementById("info").addEventListener('click', function () {
            let ulInfo = document.getElementById("info")
            
            // Name
            let liName = document.createElement("li");
            liName.innerText = person.name.first + " " + person.name.last + " ";
            ulInfo.appendChild(liName);

            // Phone
            let liHomePhone = document.createElement("li");
            liHomePhone.innerText = "Home: " + person.phone;
            ulInfo.appendChild(liHomePhone);

            // Cell
            let liCellPhone = document.createElement("li");
            liCellPhone.innerText = "Cell: " + person.cell;
            ulInfo.appendChild(liCellPhone);

            // Email
            let liEmail = document.createElement("li");
            liEmail.innerText = "Email: " + person.email;
            ulInfo.appendChild(liEmail);

            // Birthday
            let liDOB = document.createElement("li");
            liDOB.innerText = "Birthday: " + person.dob.date;
            ulInfo.appendChild(liDOB);


            
            })

        })
    }
