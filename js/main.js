let elForm = document.querySelector(".form");
let elInp = document.querySelector("#inp");
let check = document.querySelector("#check");
let elBtn = document.querySelector(".form_btn");
let elClen = document.querySelector(".form_clear");
let elImg = document.querySelector(".form_img");
let elListt = document.querySelector(".list");
let arrowNan = [];

elBtn.addEventListener("click", function (evt) {
  evt.preventDefault();

  let firstName = elInp.value.trim();

  if (firstName == "" || firstName.length < 3 || firstName.length > 15) {
    elInp.style.borderColor = "red";
    elImg.style = "filter: invert(13%) sepia(90%) saturate(6913%) hue-rotate(0deg) brightness(100%) contrast(112%);";
    placeholder.style.Color = "red";
    return
  }
  elInp.style.borderColor = "#757575";
  elImg.style = "filter: invert(52%) sepia(4%) saturate(25%) hue-rotate(315deg) brightness(85%) contrast(74%);";
  
  
  arrowNan.push(firstName);

  for (let firstName of arrowNan) {
    newLi = document.createElement("li");
    newP1 = document.createElement("p");
    newP1.textContent = `Product name: ${firstName}`; 
  }

  newLi.prepend(newP1);
  elListt.prepend(newLi);

  elInp.value = null;
})  

elClen.addEventListener("click", (evt) => {
  evt.preventDefault();
  elListt.innerHTML = "";
})