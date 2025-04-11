// -------------------------------------------------------------------------------------
// Zajęcia nr 2 - 10.04.2025 r.
// -------------------------------------------------------------------------------------

console.log(
  "-------------------- Początek drugich zajęć :) --------------------"
);

// Zadanie nr 1 - zmiana koloru czcionki:

const message = document.querySelector("#message");
const changeBtn = document.querySelector("#changeBtn");

const changeColor = () => {
  message.textContent = "Hello World";
  message.style.color = "red";
};

changeBtn.addEventListener("click", changeColor);

// Zadanie nr 2 - dodanie wartości inputu do listy w DOM:

const itemInput = document.querySelector("#itemInput");
const itemList = document.querySelector("#itemList");
const addBtn = document.querySelector("#addBtn");

const addInputValueToDOM = () => {
  if (itemInput.value != "") {
    const itemListValue = itemInput.value;
    const createLi = document.createElement("li");
    createLi.textContent = itemListValue;
    itemList.appendChild(createLi);
    itemInput.value = "";
  }
};

addBtn.addEventListener("click", addInputValueToDOM);

// Zadanie nr 3 - licznik:

const result = document.querySelector("#result");
const initialValue = 0;
result.textContent = initialValue;
const counterIncrease = document.querySelector("#counterIncrease");
const counterDecrease = document.querySelector("#counterDecrease");
let resultValue = Number(result.textContent);

const inreaseValue = () => {
  resultValue += 1;
  result.textContent = resultValue;
};

const decreaseValue = () => {
  resultValue -= 1;
  result.textContent = resultValue;
};

counterIncrease.addEventListener("click", inreaseValue);
counterDecrease.addEventListener("click", decreaseValue);

// Zadanie nr 4 - tryb jasny/ciemny:

const themeToggle = document.querySelector("#themeToggle");

const changeThemeToogle = () => {
  let isLight = document.body.classList.contains("light");
  if (isLight) {
    document.body.classList.replace("light", "dark");
    themeToggle.textContent = "Tryb jasny";
  } else {
    document.body.classList.replace("dark", "light");
    themeToggle.textContent = "Tryb ciemny";
  }
  localStorage.setItem("theme", document.body.classList[0]);
};

const savedTheme = () => {
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "light" || savedTheme === "dark") {
    document.body.classList.add(savedTheme);
    document.body.classList.remove(savedTheme === "light" ? "dark" : "light");
    themeToggle.textContent =
      savedTheme === "light" ? "Tryb ciemny" : "Tryb jasny";
  } else {
    document.body.classList.add("light");
    themeToggle.textContent = "Tryb ciemny";
  }
};

themeToggle.addEventListener("click", changeThemeToogle);
document.addEventListener("DOMContentLoaded", savedTheme);

// Zadanie nr 5 - licznik wejść na stronę:

const visitCounterResult = document.querySelector("#visitCounterResult");
const getVisitCounter = localStorage.getItem("visitCounter");
let updateVisitCounter = getVisitCounter;

const displayCounterOfVisit = () => {
  if (getVisitCounter === null) {
    localStorage.setItem("visitCounter", 1);
    visitCounterResult.textContent = 1 + " raz.";
  } else {
    updateVisitCounter++;
    localStorage.setItem("visitCounter", updateVisitCounter);
    visitCounterResult.textContent = updateVisitCounter + " razy.";
  }
};

window.addEventListener("DOMContentLoaded", displayCounterOfVisit);

// Listy - przykłady:

const testList = [9, 2, 4, 7];
testList.forEach((el) => console.log(el * 2));
const mappedList = testList.map((el) => el * 3);
console.log(mappedList);
const filteredList = testList.filter((el) => el % 2 === 0);
console.log(filteredList);
const foundElment = testList.find((el) => el % 2 === 0);
console.log(foundElment);
const foundIndex = testList.findIndex((el) => el % 2 === 0);
const some = testList.some((el) => el % 2 === 0);
console.log(some);
const every = testList.every((el) => el % 2 === 0);
console.log(every);
const sort = testList.sort((a, b) => a - b);
console.log(sort);
const includes = testList.includes(2);
console.log(includes);
const reduce = testList.reduce((acc, val) => acc + val, 1);
console.log(reduce);

// Zadanie nr 6 - zadania z listy:

const list2 = [-3, 5, 6];
const negativeValues = list2.some((el) => el < 0);
console.log(negativeValues);

const namesList = ["Ania", "Hania", "Frania"];
const nameListReduce = namesList.reduce((acc, val, index) => {
  if (index < namesList.length - 1) {
    return acc + val + " , ";
  } else {
    return acc + val;
  }
}, "");
console.log(nameListReduce);

const testList3 = [4, 7, 13, 456];
const foundEl = testList3.find((el) => el > 10);
console.log(foundEl);

const objectList = [{ age: 18 }, { age: 24 }, { age: 10 }, { age: 5 }];
const filterObjectList = objectList.filter((el) => el.age > 10);
console.log(filterObjectList);

// -------------------------------------------------------------------------------------
// Koniec zajęć.
// -------------------------------------------------------------------------------------

console.log(
  "-------------------- Koniec drugich zajęć :) --------------------"
);
