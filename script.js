const inputBox = document.getElementById("input-box");
const listaContainer = document.getElementById("lista-container");

function addTask() {
    if (inputBox.value === '') {
        alert("Você precisa escrever alguma coisa!");
    } else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listaContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = "";
    saveData();
}

listaContainer.addEventListener("click", function (e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData(); 
    }
    else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData(); 
    }
}, false);

function saveData() {
    localStorage.setItem("data", listaContainer.innerHTML);
}

function showTask() {
    listaContainer.innerHTML = localStorage.getItem("data") || '';
}

window.onload = showTask; 

function changePlaceholder() {
    if (window.innerWidth <= 768) {
        inputBox.setAttribute("placeholder", "Seu Texto");
    } else {
        inputBox.setAttribute("placeholder", "Adicione seu texto");
    }
}

window.addEventListener("load", changePlaceholder);
window.addEventListener("resize", changePlaceholder);