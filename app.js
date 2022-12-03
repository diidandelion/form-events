const form = document.querySelector("#shelterForm");
const input = document.querySelector("#item");
const list = document.querySelector("#list");
form.addEventListener("submit", function (e) {
    e.preventDefault();
    const newItem = document.createElement('li');
    newItem.innerText = input.value; 
    list.appendChild(newItem);
    input.value = "";
})