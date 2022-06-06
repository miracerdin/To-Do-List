const input = document.getElementById("input");
const button = document.getElementById("button");
const list = document.getElementsByClassName("list")[0];
const removeBtn = `<button> REMOVE</button>`;

button.addEventListener("click", addtToList);

input.addEventListener("keypress", function (event) {
  // If the user presses the "Enter" key on the keyboard
  if (event.key === "Enter") {
    // Cancel the default action, if needed

    addtToList();
    // Trigger the button element with a click
  }
});

list.addEventListener("click", (e) => {
  if (e.target.innerText == "REMOVE") {
    e.target.parentElement.remove();
  }
});

function addtToList() {
  if (input.value != "") {
    let element = document.createElement("div");
    element.classList.add("altdiv");
    element.innerHTML = `<span>➡  </span>
    <p>${input.value}</p><button class = "rmvBtn"> REMOVE</button>`;
    list.appendChild(element);
    input.value = "";
    const parag = document.querySelector("p");
    let counter = 0;
    parag.addEventListener("click", (e) => {
      counter++;
      if (counter % 2 == 1) {
        parag.classList.add("checked");
      } else {
        parag.classList.remove("checked");
      }
    });
  } else {
    alert("Please give me a to do.");
  }
}
