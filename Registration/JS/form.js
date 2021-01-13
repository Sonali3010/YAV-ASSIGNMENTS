const submitButton = document.getElementById("button");
const listOfPeople = [];
let stringifiedDetailsOfPeople, detailsOfPeople;

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
    //console.log( JSON.stringify(object));
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
    //  console.log("stringifiedDetailsOfPeople", stringifiedDetailsOfPeople);
      detailsOfPeople = JSON.parse(stringifiedDetailsOfPeople);
      //console.log("details", detailsOfPeople);

     addNewLineElement(detailsOfPeople);
    }
  }
 //addNewLineElement(object);
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
  const a1 = document.createElement("input");
  a1.id = "b1";
  a1.type = "button";
  a1.value = "Edit";
  a1.addEventListener("click", () => {
    console.log(object.name);
    localStorage.setItem("name",li.getElementById("name"));
    localStorage.setItem("email",li.getElementById("email"));
  });
  a1.className = "edit";
  a1.style.border = "2px solid green";
  console.log(a1);
  li.appendChild(a1);

  const a2 = document.createElement("input");
  a2.type = "button";
  a2.value = "delete";
  a2.addEventListener("click", () => {
    li.remove();
  });
  a2.className = "delete";
  a2.style.border = "2px solid red";
  console.log(a2);
  li.appendChild(a2);
  console.log(li);

  ul.appendChild(li);


  }
