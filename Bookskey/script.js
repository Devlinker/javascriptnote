//selecting popup box popup overlay button

var popupoverlay = document.querySelector(".popup-overlay")
var popupbox = document.querySelector(".popup-box")
var addpopupbutton = document.getElementById("add-popup-button")

addpopupbutton.addEventListener("click",function(){
    popupoverlay.style.display = "block"
    popupbox.style.display = "block"
})

//selecting cancelpopup

var cancelpopup = document.getElementById("cancel-popup")

cancelpopup.addEventListener("click",function(event){
    event.preventDefault()
    popupoverlay.style.display = "none"
    popupbox.style.display = "none"
})


//selecting container, add-book, book-title-input, book-author-input, book-description-input

//var container = document.querySelector(".container")
//var addbook = document.getElementById("add-book")
//var booktitleinput = document.getElementById("book-title-input")
//var bookauthorinput = document.getElementById("book-author-input")
//var bookdescriptioninput = document.getElementById("book-description-input")

//addbook.addEventListener("click",function(event){
    //event.preventDefault()
    //var div = document.createElement("div")
    //div.setAttribute("class","book-container")
    //div.innerHTML = `<h2>${booktitleinput.value}</h2>`
    //container.append(div)
    //popupoverlay.style.display = "none"
    //popupbox.style.display = "none"


//})



/*var container = document.querySelector(".container");
var addbook = document.getElementById("add-book");
var booktitleinput = document.getElementById("book-title-input");
var bookauthorinput = document.getElementById("book-author-input");
var bookdescriptioninput = document.getElementById("book-description-input");

// Assuming popupoverlay and popupbox are defined somewhere
var popupoverlay = document.getElementById("popup-overlay");
var popupbox = document.getElementById("popup-box");

addbook.addEventListener("click", function(event){
    event.preventDefault();
    
    // Create the book container div
    var div = document.createElement("div");
    div.setAttribute("class", "book-container");
    
    // Set the inner HTML of the book container
    div.innerHTML = `
        <h2>${booktitleinput.value}</h2>
        <h3>Author: ${bookauthorinput.value}</h3>
        <p>${bookdescriptioninput.value}</p>
    `;
    
    // Append the new book container to the main container
    container.append(div);
    
    // Hide the popup
    popupoverlay.style.display = "none";
    popupbox.style.display = "none";
})  

*/