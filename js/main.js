let btn = document.querySelector(".btn");
let form = document.querySelector("form");
let firstnameContainer = document.querySelector(".firstnameContainer");
let lastnameContainer = document.querySelector(".lastnameContainer");
let degreeContainer = document.querySelector(".degreeContainer");
let clockContainer = document.querySelector(".clockContainer");
let taxContainer = document.querySelector(".taxContainer");
let closeBtn = document.querySelector(".closeBtn");
let calcBtn = document.querySelector(".calc");
let answer = document.querySelector(".answer");

form.classList.add("none");
btn.addEventListener("click", function () {
  form.classList.remove("none");
  let firstnameLbl = document.createElement("label");
  firstnameLbl.for = "firstname";
  firstnameLbl.textContent = "Firstname :";
  firstnameContainer.insertAdjacentElement("beforeend", firstnameLbl);

  let firstnameInput = document.createElement("input");
  firstnameInput.type = "text";
  firstnameInput.name = "firstname";
  firstnameInput.id = "firstname";
  firstnameContainer.insertAdjacentElement("afterbegin", firstnameInput);

  let lastnameLbl = document.createElement("label");
  lastnameLbl.for = "lastname";
  lastnameLbl.textContent = "Lastname :";
  lastnameContainer.insertAdjacentElement("beforeend", lastnameLbl);

  let lastnameInput = document.createElement("input");
  lastnameInput.type = "text";
  lastnameInput.name = "lastname";
  lastnameInput.id = "lastname";
  lastnameContainer.insertAdjacentElement("afterbegin", lastnameInput);

  let degreeLbl = document.createElement("label");
  degreeLbl.for = "degree";
  degreeLbl.textContent = "Degree :";
  degreeContainer.insertAdjacentElement("beforeend", degreeLbl);

  let DegreeSelect = document.createElement("select");
  DegreeSelect.name = "degree";
  DegreeSelect.id = "degree";
  degreeContainer.insertAdjacentElement("beforeend", DegreeSelect);

  let option1 = document.createElement("option");
  option1.value = "Diploma";
  option1.textContent = "Diploma";

  let option2 = document.createElement("option");
  option2.value = "Bachelor";
  option2.textContent = "Bachelor";

  let option3 = document.createElement("option");
  option3.value = "Master";
  option3.textContent = "Master";

  let option4 = document.createElement("option");
  option4.value = "Phd";
  option4.textContent = "Phd";
  DegreeSelect.append(option1, option2, option3, option4);

  let clockLbl = document.createElement("label");
  clockLbl.for = "clock";
  clockLbl.textContent = "Clock :   ";
  clockContainer.insertAdjacentElement("beforeend", clockLbl);

  let clockInput = document.createElement("input");
  clockInput.type = "number";
  clockInput.name = "clock";
  clockInput.id = "clock";
  clockContainer.insertAdjacentElement("afterbegin", clockInput);
  //  console.dir(clockInput)

  let taxLbl = document.createElement("label");
  taxLbl.for = "tax";
  taxLbl.textContent = "Tax :    ";
  taxContainer.insertAdjacentElement("beforeend", taxLbl);

  let taxInput = document.createElement("input");
  taxInput.type = "number";
  taxInput.name = "tax";
  taxInput.id = "tax";
  taxContainer.insertAdjacentElement("afterbegin", taxInput);
  btn.classList.add("disable");
  closeBtn.addEventListener("click", function () {
    form.classList.add("none");

    btn.classList.remove("disable");
  });

  calcBtn.addEventListener("click", function (e) {
    e.preventDefault();
    let tax = parseFloat(taxInput.value.replace("%", "")) || 0;
    function calcSalary(clockInput, taxInput, price) {
      let salary = clockInput * price;
      let newtax = (salary * taxInput) / 100;
      let pureSalary = salary - newtax;
      return pureSalary;
    }

    function salary(DegreeSelect, clockInput, taxInput) {
      switch (DegreeSelect) {
        case "Diploma":
          return calcSalary(clockInput, taxInput, 100000);
        case "Bachelor":
          return calcSalary(clockInput, taxInput, 150000);
        case "Master":
          return calcSalary(clockInput, taxInput, 200000);
        case "Phd":
          return calcSalary(clockInput, taxInput, 300000);
        default:
          return 0;
      }
    }

    let result = salary(DegreeSelect.value, Number(clockInput.value), tax);

    let print = `<h2>Mr/Mrs ${firstname.value} ${lastname.value}, your salary is ${result} Rials</h2>`;
    answer.innerHTML = print;
  });
});
