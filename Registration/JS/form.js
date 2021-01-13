const submitButton = document.getElementById("button");
const listOfPeople = [];
let stringifiedDetailsOfPeople, detailsOfPeople;
const url = "https://crudcrud.com/api/b01f16c0351542b98abb82bc7011a88f";

document.addEventListener("DOMContentLoaded", () => {
  console.log("Inside DOM..");
  localStorage.getItem(stringifiedDetailsOfPeople);
});

document.addEventListener("click", () => {
  const name = document.getElementById("name").value;
  const phone = document.getElementById("phone").value;
  const emailId = document.getElementById("emailId").value;
  const date = document.getElementById("date").value;
  const time = document.getElementById("time").value;

  if ( emailId.length > 0 && name.length > 0 && phone.length > 0 && date.length > 0 && time.length > 0 ) {
    const object = {
      name: name,
      phone: phone,
      emailId: emailId, //unique
      date: date,
      time: time
    };
    localStorage.setItem("userDetails" + emailId, JSON.stringify(object)); //for setting in local storage
    console.log( JSON.stringify(object));
    listOfPeople.push(object);
  
  
  var keys = Object.keys(localStorage), //taking out all the keys that are there in the local storage
  i = keys.length; //6
  console.log("keys", keys);
  // 6 to 0
  while (i--) {
    //i==2
    if (keys[i].match(/userDetails/g)) {
      //we only care about keys that start with userDetails
      //this is called regex matching
      stringifiedDetailsOfPeople = localStorage.getItem(keys[i]);
      console.log("stringifiedDetailsOfPeople", stringifiedDetailsOfPeople);
      detailsOfPeople = JSON.parse(stringifiedDetailsOfPeople);
      console.log("details", detailsOfPeople);

      addNewLineElement(detailsOfPeople);
    }
  }
  //  addNewLineElement(object);
  }
});



function addNewLineElement(object) {
  const ul = document.getElementById("listOfPeople");
  const li = document.createElement("li");
  li.appendChild(
    document.createTextNode(
      object.name +
        " " +
        object.phone +
        " " +
        object.emailId +
        " " +
        object.date +
        " " +
        object.time
    )
  );
  ul.appendChild(li);
 
  }
