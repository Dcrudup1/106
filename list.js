function saveTask() {
    const title = $("#title").val();
    const description = $("#description").val();
    const color = $("#color").val();
    const startDate = $("#start-date").val();
    const budget = $("#budget").val();
    const status = $("#status").val();

    if (title.trim() !== "") {
    const taskObject = {
        title: title,
        description: description,
        color: color,
        startDate: startDate,
        budget: budget,
        status: status
    };

      // Add logic to save the task on the server using HTTP requests
      // You might want to use AJAX or another method for this

    console.log("Task to be saved:", taskObject);

      // Clear the input fields
    $("#title, #description, #color, #start-date, #budget, #status").val("");

      // Display the task on the screen
    displayTask(taskObject);
    } else {
    alert("Please enter a valid task title.");
    }
}

function displayTask(task) {
    const taskList = $("#list");
    const taskItem = $("<div>").addClass("task-item");
    
    const title = $("<h2>").text(task.title);
    const description = $("<p>").text(task.description);
    const color = $("<div>").addClass("color-box").css("background-color", task.color);
    const startDate = $("<p>").text("Start Date: " + task.startDate);
    const budget = $("<p>").text("Budget: " + task.budget);
    const status = $("<p>").text("Status: " + task.status);

    taskItem.append(title, description, color, startDate, budget, status);
    taskList.append(taskItem);
}

function displayAllTasks() {

    const sampleTasks = [
    { title: "Task 1", description: "Description 1", color: "#ffcc00", startDate: "2023-01-01T12:00", budget: 1000, status: "New" },
    { title: "Task 2", description: "Description 2", color: "#3399ff", startDate: "2023-02-01T12:00", budget: 1500, status: "In Progress" },
    ];

    sampleTasks.forEach(displayTask);
}
function clearAllTasks() {
    $(".task-item").remove();
}


function init() {
    $("#btn-save").click(saveTask);
    $("#btnClearAll").click(clearAllTasks);

    displayAllTasks();
}

window.onload = init;