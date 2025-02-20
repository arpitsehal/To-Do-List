const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
const themeToggle = document.getElementById("theme-toggle");

// Add new task
function addTask() {
    if (inputBox.value.trim() === '') {
        alert("You must write something!");
        return;
    }

    let li = document.createElement("li");
    li.textContent = inputBox.value.trim();

    let span = document.createElement("span");
    span.innerHTML = "<i class='fas fa-trash-alt'></i>";
    li.appendChild(span);

    listContainer.appendChild(li);
    inputBox.value = "";
    saveData();
}


// Toggle task checked status
listContainer.addEventListener("click", function (e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
    } else if (e.target.tagName === "I" || e.target.tagName === "SPAN") {
        e.target.closest("li").remove();
    }
    saveData();
}, false);


// Save task data to localStorage
function saveData() {
    let tasks = [];
    document.querySelectorAll("#list-container li").forEach((li) => {
        let taskText = li.childNodes[0].textContent.trim(); // Get only the text, ignoring the icon
        tasks.push({ text: taskText, completed: li.classList.contains("checked") });
    });
    localStorage.setItem("tasks", JSON.stringify(tasks));
}


// Show tasks on page load
function showTask() {
    let storedTasks = localStorage.getItem("tasks");
    if (storedTasks) {
        let tasks = JSON.parse(storedTasks);
        tasks.forEach(task => {
            let li = document.createElement("li");
            li.textContent = task.text; // Set text content
            if (task.completed) li.classList.add("checked");

            let span = document.createElement("span");
            span.innerHTML = "<i class='fas fa-trash-alt'></i>";
            li.appendChild(span);

            listContainer.appendChild(li);
        });
    }
}


// Dark mode toggle functionality
function toggleTheme() {
    document.body.classList.toggle("dark-mode");
    const isDarkMode = document.body.classList.contains("dark-mode");
    themeToggle.innerHTML = isDarkMode ? "🌞" : "🌙"; // Toggle button text (moon/sun)
}

showTask();
const footerText = document.querySelector("footer p");
const currentYear = new Date().getFullYear();


