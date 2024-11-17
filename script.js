const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
const themeToggle = document.getElementById("theme-toggle");

// Add new task
function addTask() {
    if (inputBox.value === '') {
        alert("You must write something!");
    } else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);

        let span = document.createElement("span");
        span.innerHTML = "<i class='fas fa-trash-alt'></i>"; // Trash can icon
        li.appendChild(span);

        // Animation when task is added
        li.classList.add('fade-in');
        
        // Save task to localStorage
        saveData();
    }
    inputBox.value = "";
}

// Toggle task checked status
listContainer.addEventListener("click", function(e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData();
    } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData();
    }
}, false);

// Save task data to localStorage
function saveData() {
    localStorage.setItem("data", listContainer.innerHTML);
}

// Show tasks on page load
function showTask() {
    listContainer.innerHTML = localStorage.getItem("data");
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
footerText.innerHTML = `© ${currentYear} Made with ❤️ by YourName.`;

