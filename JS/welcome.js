user = [];
fetch("https://userdata-api.onrender.com")
  .then((res) => res.json())
  .then((data) => user.push(...data))
  .then(() => render())
const chatBox = document.querySelector(".chat-box");




function createList(item) {
  let listItem = document.createElement("li");
  listItem.innerHTML = `<i class="fa fa-long-arrow-right"></i> Welcome, <span>${item.id}</span> to our server &nbsp<span class ="time">${item.date}</span>`;
  chatBox.appendChild(listItem);
}
function render() {
  user.forEach((item) => createList(item));
}
