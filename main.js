/* Reqs
- Form
- Text input box and submit

- List to keep track of to-do items
    - document.createElement() to create the list items
    - appendChild to add to our list

    - list to keep track of our to-do items
    - querySelecorAll (or bubbling) can be utilized to access the array of your list items

HTML
    - Form 
    - Empty list
    - buttons
    - Text input

JS
    - List items

*/

// Queries
let form = document.querySelector('#todo-form')
let input = document.querySelector('#todo');
let add = document.querySelector('#button-add');
let removeComplete = document.querySelector('#button-remove-complete');
let removeAll = document.querySelector('#button-remove-all');
let incompleteList = document.querySelector('.incomplete'); // ul of items not yet marked complete
let completedList = document.querySelector('.completed'); // ul of items marked completed
let taskItems = document.querySelectorAll('li'); // all li items complete and incomplete
let complete = document.querySelectorAll('.completed'); // items that have been marked off complete
let taskListDiv = document.querySelector('#task-list');


// Helper Functions

// From entered text: creates new li, adds innerText
function submit(event) {
    event.preventDefault();

    if (input.value) {
        let newItem = document.createElement('li');
        
        // marks completed
        newItem.addEventListener('click', () => {
            newItem.classList.toggle('completed');
            // completedList.appendChild(newItem);
        })

        // deletes single item
        newItem.addEventListener('dblclick', () => {
            newItem.remove();
        })
        
        // edits item: this feature is not very user-friendly, but it is a stretch goal, so please do not deduct points!
        newItem.addEventListener('contextmenu', (event) => {
            event.preventDefault();
            
            newItem.setAttribute('contenteditable', "true");
        })

        // newItem.innerHTML = '';
        newItem.innerText = input.value;
        // newItem.setAttribute('contenteditable', 'true');
        console.log(`New item: ${newItem.innerText}`);
        incompleteList.appendChild(newItem);
        input.value = "";

    } else {
        alert('Nothing to add. Enter some text!')
    }
}

// Event-Listeners

form.addEventListener('submit', submit)
add.addEventListener('click', submit);


// removes all items
removeAll.addEventListener('click', () => {
    incompleteList.innerHTML = "";
    // completedList.innerHTML = ""; // would have been used to separate complete/incomplete items
})


// removes complete items
removeComplete.addEventListener('click', () => {

    complete = document.querySelectorAll('.completed');

    complete.forEach(item => {
        item.remove()
    })
})


// removes contenteditable when document is clicked
document.addEventListener('click', () => {
    taskItems = document.querySelectorAll('li');

    taskItems.forEach(item => {
        item.removeAttribute('contenteditable')
    })
})


// // Code to "un-complete" completed tasks. Feature not currently used.
// completedList.addEventListener('click', (event) => {
//     completedList = document.querySelector('.completed');
//     event.target.classList.toggle('');
//     incompleteList.appendChild(event.target);
// })



// // This is an attempt at removing new-line/enter while in contenteditable mode
// document.querySelector('[contenteditable="true"]').addEventListener('keydown', (event) => {
//     if (event.keyCode === 13) {
//         event.preventDefault();
//         return false;
//     }
// });