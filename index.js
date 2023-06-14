var toDoForm = document.querySelector('form'); 
var listItemsArray = []

toDoForm.onsubmit = function(e) {
    e.preventDefault()                                     //prevent default action from happening 
    var taskInput = document.querySelector('input');        //variable for input 
    var task = taskInput.value.trim();                      // variable for the value of the input
    listItemsArray.push(task);                              // push the array to the value of the input
   
    if (task === '') {                              // if value of input is empty, then nothing will add // prevent adding blanks
        return;
    }

    var bulletPoints = document.getElementById('todo-list');             // Creating variable for  <ul> with that ID 

    // Creating elements for HTML without modifying HTML

    var li = document.createElement("li");          
    var button = document.createElement("button");
    var taskText = document.createTextNode(task); 

    // Connecting the created HTML elements - from most outer to most inner: <ul> connecting to <li>, then <li> connecting to <button>, and then <button> connecting to the textnode where the value is being entered in

    bulletPoints.appendChild(li);
    li.appendChild(button);
    button.appendChild(taskText);

    
    // Using mouse click counts, it can detects the number of mouse clicks on each of the item listed

    var mouseClickCount = 0;
    button.addEventListener('click', function() {                       // adding event listener to let the program knows what do to with the button
      mouseClickCount++;
      console.log(listItemsArray)
      if (mouseClickCount === 1) {                                      // with 1 click, the item will be crossed-out
        button.style.textDecoration = 'line-through';
      } else if (mouseClickCount === 2) {                                 // with the second click, the <li> button will be remove so the item will be taken off the list
        var index = listItemsArray.indexOf(task);                        // index = the specific index of a task from the array 
        if (index !== -1) {                                              // if the index is not on the list
            listItemsArray.splice(index,1);                             // then the index will be removed (splice) from the array                                
        }
        li.remove();                                                    // li button is removed
      }
    });

console.log(bulletPoints)
taskInput.value = ''                                                // to clear out the value or item being entered after it is added, a reset 
}






//Isues need to be fixed:
    // Add multiple todos 
    // Remove todos from middle of the list


