function clearAll() {
  if (confirm("Do u really want to clear the entire list ?")) {
    localStorage.clear();
    update();
  } else {
    alert("Press the button again and press yes in the alert");
  }
}
function getAndUpdate() {
  console.log("addoingnbjn");
  tit = document.getElementById("title").value;
  desc = document.getElementById("Description").value;
  if (localStorage.getItem("itemsJson") == null) {
    itemsJsonArray = [];
    itemsJsonArray.push([tit, desc]);
    localStorage.setItem("itemsJson", JSON.stringify(itemsJsonArray));
  } else {
    itemsJsonArraySTR = localStorage.getItem("itemsJson");
    itemsJsonArray = JSON.parse(itemsJsonArraySTR);
    itemsJsonArray.push([tit, desc]);
    localStorage.setItem("itemsJson", JSON.stringify(itemsJsonArray));
  }
  update();
}
function update() {
  {
    if (localStorage.getItem("itemsJson") == null) {
      itemsJsonArray = [];
      localStorage.setItem("itemsJson", JSON.stringify(itemsJsonArray));
    } else {
      itemsJsonArraySTR = localStorage.getItem("itemsJson");
      itemsJsonArray = JSON.parse(itemsJsonArraySTR);
    }
    //populating the table
    let tableBody = document.getElementById("tableBody");
    let str = "";
    itemsJsonArray.forEach((element, index) => {
      str += `
            <tr>
              <th scope="row">${index + 1}</th>
              <td>${element[0]}</td>
              <td>${element[1]}</td>
              <td>
                <button type="button" class="btn btn-danger btn-sm" onclick = "deleted(${index})">
                  Delete
                </button>
              </td>
            </tr>
          `;
    });
    tableBody.innerHTML = str;
  }
}
add = document.getElementById("add");
add.addEventListener("click", getAndUpdate);
update();
function deleted(itemIndex) {
  console.log("delete", itemIndex);
  itemsJsonArraySTR = localStorage.getItem("itemsJson");
  itemsJsonArray = JSON.parse(itemsJsonArraySTR);
  itemsJsonArray.splice(itemIndex, 1);
  localStorage.setItem("itemsJson", JSON.stringify(itemsJsonArray));
  itemsJsonArray.splice(itemIndex, 1);
  update();
}
