function addMe(){
    const addvalue = document.getElementById("inputTheValue").value;
    if (addvalue.trim() !== "") {
        const listItem = document.createElement("li");
        listItem.innerHTML = `
            <span>${addvalue}</span>
            <button onclick="deleteTask(this)" class="delete-button">Delete</button>
        `;
        document.getElementById("displayValue").appendChild(listItem);
    }

    const colorChange = document.getElementById("container");
    colorChange.style.color = "#b90d93";
}

function deleteTask(buttonElement) {
    const listItem = buttonElement.parentElement;
    listItem.remove();
    const colorChange = document.getElementById("container");
    colorChange.style.color = "black";
}

function sortTasks() {
    const list = document.getElementById("displayValue");
    const items = Array.from(list.getElementsByTagName("li"));
    
    items.sort(function(a, b) {
        const textA = a.textContent.toLowerCase();
        const textB = b.textContent.toLowerCase();
        return textA.localeCompare(textB);
    });
    
    // Clear the list
    while (list.firstChild) {
        list.removeChild(list.firstChild);
    }
    
    // Append sorted items back to the list
    for (const item of items) {
        list.appendChild(item);
    }
}






