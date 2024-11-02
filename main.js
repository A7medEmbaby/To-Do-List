    // Select elements from the DOM
    const taskInput = document.getElementById('taskInput'); // Input field for task
    const addButton = document.getElementById('addButton'); // Button to add task
    const taskList = document.getElementById('taskList'); // List to display tasks

    // Add an event listener to the "Add Task" button
    addButton.addEventListener('click', () => {
      // Get the text entered in the input field
      const taskText = taskInput.value;

      // Check if the input is not empty before adding the task
      if (taskText.trim() === "") {
        alert("Please enter a task.");
        return;
      }

      // Create a new list item for the task
      const taskItem = document.createElement('li');
      taskItem.textContent = taskText; // Set the task text as the content of the list item

      // Create a delete button for each task
      const deleteButton = document.createElement('button');
      deleteButton.textContent = 'Delete'; // Set the text of the delete button

      // Add an event listener to the delete button to remove the task when clicked
      deleteButton.addEventListener('click', () => {
        taskList.removeChild(taskItem); // Remove the task item from the list
      });

      // Append the delete button to the task item
      taskItem.appendChild(deleteButton);

      // Append the task item to the task list
      taskList.appendChild(taskItem);

      // Clear the input field after adding the task
      taskInput.value = '';
    });
