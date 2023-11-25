// Main js file for the App

// delete books

const list = document.querySelector('#book-list ul');
list.addEventListener('click', (e) => {
  if (e.target.className == 'delete') {
    const li = e.target.parentElement;
    list.removeChild(li);
  }
});

// *************** FORMS

// add book-list

const addForm = document.forms['add-book'];

addForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const val = addForm.querySelector('input[type="text"]').value;
  // console.log(val)

  // ************* CREATE ELEMENT
  const li = document.createElement('li');
  const bookName = document.createElement('span');
  const deleteBtn = document.createElement('span');

  // add content
  deleteBtn.textContent = 'delete';
  bookName.textContent = val;

  // ************ CHANGING STYLES & CLASSES
  // add classes name
  bookName.classList.add('name');
  deleteBtn.classList.add('delete');

  // append to DOM span --- > li----> ul
  li.appendChild(bookName);
  li.appendChild(deleteBtn);
  list.appendChild(li);
});

// ************* CHECKBOX EVENTS

// hide books

const hideBox = document.querySelector('#hide');
const label = document.querySelector('label');

hideBox.addEventListener('change', (e) => {
  if (hideBox.checked) {
    list.style.display = 'none';
    label.textContent = 'Show all books';
  } else {
    list.style.display = 'initial';
    label.textContent = 'Hide all books';
  }
});

// ***************** CREATING A SEARCH FILTER

const searchbBar = document.forms['search-book'].querySelector('input');

searchbBar.addEventListener('keyup', (e) => {
  const term = e.target.value.toLowerCase();
  const books = list.getElementsByTagName('li');
  Array.from(books).forEach((book) => {
    const title = book.firstElementChild.textContent;

    if (title.toLowerCase().indexOf(term) != -1) {
      book.style.display = 'block';
    } else {
      book.style.display = 'none';
    }
  });
});

// ***************** CREATING TABBED CONTENT
// tabbed content

const tabs = document.querySelector('.tabs');
const panels = document.querySelectorAll('.panel');

tabs.addEventListener('click', (e) => {
  const targetPanel = document.querySelector(e.target.dataset.target);

  panels.forEach((panel) => {
    if (panel == targetPanel) {
      panel.classList.add('active');
    } else {
      panel.classList.remove('active');
    }
  });
});
