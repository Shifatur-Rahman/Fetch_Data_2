function loading() {
  fetch(`https://jsonplaceholder.typicode.com/users`)
    .then((res) => res.json())
    .then((data) => displayData(data));
}

let text = document.getElementById("text");
let submit = document.getElementById("submit");
let box = document.getElementById("box");
submit.addEventListener("click", loading);

function displayData(data) {
  if (text.value != "") {
    for (let singleData of data) {
      if (singleData.name == text.value) {
        let li = document.createElement("li");
        li.classList.add("list");
        li.innerHTML = `
  
    <h3> ID: ${singleData.id} </h3>
    <h3> Name : ${singleData.name}  </h3>
    <h4> Email: ${singleData.email}  </h4>
    <h4> City: ${singleData.address.city}  </h4>
    <h5> About: Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature.  </h5>
  
        `;
        box.appendChild(li);
      } else {
        console.log("not valid input");
      }
    }
  } else {
    alert("please enter your id");
  }
}
