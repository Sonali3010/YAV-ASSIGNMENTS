const submitButton = document.getElementById("button");
const listOfPeople = [];
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
    localStorage.setItem("userDetails" + emailId, JSON.stringify(object));
    console.log( JSON.stringify(object));
    
    listOfPeople.push(object);
    var ul = document.getElementById("listOfPeople");
    var li = document.createElement("li");
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
    console.log(object);
  }
});
