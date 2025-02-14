
const studentFullName = "Ajay";
//console.log(studentFullName)
const studentNumber = 1196304;
//console.log(studentNumber)
const mySelf= `${studentFullName}-${studentNumber}`;
console.log(mySelf);


const headerContent = document.querySelector("h1");
headerContent.classList.add("headingPrimary");
headerContent.innerHTML = `${studentFullName} - ${studentNumber}`;
console.log(headerContent.innerHTML);