
let elInp = document.querySelector("#inp");
let elBtn = document.querySelector(".form_btn");
let elClen = document.querySelector(".form_clear");
let elListt = document.querySelector(".list");

elBtn.addEventListener("click", function (evt) {
  evt.preventDefault();

  let firstName = elInp.value.trim();

  if (firstName == "" || firstName.length < 3 || firstName.length > 20) {
    
    elInp.style.borderColor = "red";
    return
  }
  elInp.style.borderColor = "black";

  let newLi = document.createElement("li");
  let newP1 = document.createElement("p");
  newP1.textContent = `Product name: ${firstName}`; 
  newLi.append(newP1);

  elListt.append(newLi);

})  