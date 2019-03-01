const buttons = document.getElementById("buttons");
const task = document.getElementById("task");

buttons.addEventListener("click", add);
buttons.addEventListener("click", remove);
buttons.addEventListener("click", clear);

let displayedItems = [];

function render() {
  let template = "";

  if (displayedItems.length) {
    displayedItems.forEach(function(item, count) {
      template += item + ++count + "<br>";
    });
    task.innerHTML = template;
  } else {
    task.innerHTML = "No assignments";
  }
}

function add(event) {
  if (event.target.classList[0] === "add-button") {
    displayedItems.push("Task number ");
    render();
  }
}

function remove(event) {
  if (event.target.classList[0] === "remove-button") {
    displayedItems.pop();
    render();
  }
}

function clear(event) {
  if (event.target.classList[0] === "clear-button") {
    displayedItems.length = 0;
    render();
  }
}
