//document.addEventListener('DOMContentLoaded', function (){})

const list = document.querySelector('#book-list ul');

//Removing Books from dom
list.addEventListener('click', function(e) {
    if (e.target.className == "delete") {
        const li = e.target.parentElement;
        list.removeChild(li);
    }
})

//Add books-list
const addForms = document.forms['add-book'];
addForms.addEventListener('submit', function(e) {
    e.preventDefault();

    const value = addForms.querySelector('input[type="text"]').value;
    
    
    //Create Elements
    const li = document.createElement('li');
    const bookName = document.createElement('span');
    const deleteBtn = document.createElement('span');

    //add Content
    deleteBtn.textContent = 'delete';
    bookName.textContent = value;

    //add Classes
    bookName.classList.add('name');
    deleteBtn.classList.add('delete');

    //append to Document
    li.appendChild(bookName);
    li.appendChild(deleteBtn);
    list.appendChild(li);
})


// Hide Books
const hideBox = document.querySelector('#hide');
hideBox.addEventListener('change', function(e) {
    if(hideBox.checked) {
        list.style.display = "none";
    } else {
        list.style.display = "initial"; 
    }
})

// filter Books
const searchBar = document.forms['search-books'].querySelector('input');
searchBar.addEventListener('keyup', function(e) {
    const term = e.target.value.toLowerCase();
    const books = list.getElementsByTagName('li');
    Array.from(books).forEach(function(book){
        const title = book.firstElementChild.textContent;
        if (title.toLowerCase().indexOf(term) != -1) {
            book.style.display = "block";   
        } else {
            book.style.display = "none";
        }

    })
})

// Tabbed-Content
const tabs = document.querySelector('.tabs');
const panels = document.querySelectorAll('.panel');
tabs.addEventListener('click', function(e){
    if (e.target.tagName == "LI") {
        const targetPanel = document.querySelector(e.target.dataset.target);
        panels.forEach(function(panel){
            if(panel == targetPanel) {
                panel.classList.add('active');
            } else {
                panel.classList.remove('active');
            }
        })
    }
})