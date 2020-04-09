'use strict'



//add button

let addButton = document.getElementById("addButton");
addButton.addEventListener('click', function() {
    console.log("clicked the add button");
//read the value from the input box
let inputElement = document.getElementById('inputText');
let todoText = inputElement.value;
inputElement.value = '';

//create an li element
let li = document.createElement('li');


//create a span element
let span = document.createElement('span');
span.innerText = todoText;

//create a delete
let deleteButton = document.createElement('button');
//update the inner text of the delete button
deleteButton.innerText = 'delete';
// add a class to the delete button
deleteButton.classList.add('delete');

//add the li to the button of the ul element
let ul = document.querySelector('ul');
ul.appendChild(li)

//add the span and the delete button as children of the newly created li
li.appendChild(span);
setupSpanEvent(span);
li.appendChild(deleteButton);
setupDeleteEvent(deleteButton);

})
//add eventlistner to all delete buttons

let allDeletes = document.querySelectorAll('.delete');
for(let i = 0; i < allDeletes.length; i++) {
    let deleteButton = allDeletes[i];
    setupDeleteEvent(deleteButton);
}
    

function setupDeleteEvent(deleteButton) {
        deleteButton.addEventListener('click', function(){
            console.log("Delete got clicked, parent li is", deleteButton.parentElement);
            let parentLi = deleteButton.parentElement;
            parentLi.remove();
    });
}











//when span is clicked class done should be added
//class done should be added to it
let allSpans = document.querySelectorAll("span");
//console.log("All Spans:", allSpans)
for(let i=0; i < allSpans.length; i++) {
    let span = allSpans[i];
   setupSpanEvent(span);
}
    


//this function adds click event to span

function setupSpanEvent(span) {
    span.addEventListener('click', function() {
        console.log("this span got clicked", span);
        span.classList.toggle("done")
    })
}