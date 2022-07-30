const input = document.getElementById("input");
const button = document.getElementById("button");
const list = document.getElementsByClassName("list")[0];
const removeBtn = `<button> REMOVE</button>`;
let index = 0;

const startConf = () => {
  //baslangıç
  const todos = localStorage.getItem("todos");
  // if (!todos) {
  //   localStorage.setItem("todos", JSON.stringify([]));
  // console.log(todos);
  // } else {
  let datalist = JSON.parse(localStorage.getItem("todos")) || []; // dataliste eğer json parse içi doluysa yani true ise aktar ama yoksa [] yi aktar demek || oluyor.

  datalist.forEach((e) => {
    //? her bir todo objesini destructor yaptık
    const { id, text, date } = e;
    let element = document.createElement("div");
    element.classList.add("altdiv");
    element.innerHTML = `<input class="box" type = "checkbox"   />
    <p>${text}</p><div class="date">${date}<button class = "rmvBtn"> REMOVE</button></div>`;
    list.appendChild(element);
  });
  // }
};

startConf();

button.addEventListener("click", addtToList);

input.addEventListener("keypress", function (event) {
  // If the user presses the "Enter" key on the keyboard
  if (event.keyCode === 13) {
    addtToList();
  }
});

list.addEventListener("click", (e) => {
  if (e.target.innerText == "REMOVE") {
    if (
      e.target.parentElement.previousElementSibling.classList.contains(
        "checked"
      )
    ) {
      console.log(e.target.parentElement);
      e.target.parentElement.parentElement.remove();
      let datalist = JSON.parse(localStorage.getItem("todos"));
      let remove = datalist.filter(
        (x) => x.text != e.target.parentElement.previousElementSibling.innerText
      );
      localStorage.setItem("todos", JSON.stringify(remove));
    } else {
      alert("Please complete your task");
    }
  } else if (e.target.classList.contains("box")) {
    e.target.nextElementSibling.classList.toggle("checked");
  }
});

function addtToList() {
  if (input.value != "") {
    let date = new Date(); //this five line part for adding date
    let options = {
      weekday: "short",
      year: "numeric",
      month: "2-digit",
      day: "numeric",
    };
    let shortDate = date.toLocaleDateString("en", options);

    let element = document.createElement("div");
    element.classList.add("altdiv");
    element.innerHTML = `<input class="box" type = "checkbox"   />
    <p>${input.value}</p><div class="date">${shortDate}<button class = "rmvBtn"> REMOVE</button></div>`;
    // localStorage.setItem(index, input.value);
    let id1 = Math.floor(Math.random() * 10);
    let datalist = JSON.parse(localStorage.getItem("todos"));
    miro();

    function miro() {
      if (datalist.length > 0) {
        let arr = datalist.filter((x) => x.id == id1);
        if (arr.length != 0) {
          id1 = Math.floor(Math.random() * 10);
          return miro();
        } else {
          return id1;
        }
      }
      return id1;
    }
    let template = {
      id: id1,
      text: input.value,
      date: shortDate,
    };

    datalist.push(template);
    console.log(datalist);

    localStorage.setItem("todos", JSON.stringify(datalist));
    console.log(datalist);

    list.appendChild(element);

    input.value = "";
  } else {
    alert("Please give me a to do.");
  }
}

const box = document.querySelectorAll(".box");
// console.log(box);

// const checkBoxes = document.querySelectorAll("input[type='checkbox']:checked");
// console.log(checkBoxes);


