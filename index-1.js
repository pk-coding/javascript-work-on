// -------------------------------------------------------------------------------------
// Zajęcia nr 1 - 08.04.2025 r.
// -------------------------------------------------------------------------------------

console.log(
  "-------------------- Początek pierwszych zajęć :) --------------------"
);

// Zadanie nr 1 - wyświetl w konsoli "Hello World :)":

console.log("Hello World :)");

// Zadanie nr 2 - dodatnia czy ujemna:

const checkNumber = (number1) => {
  const resum = number1 % 2 === 0 && number1 >= 0;
  return resum;
};
const checkNumberResult = checkNumber(-44);
const assignValue = checkNumberResult ? "dodatnia lub równa zero" : "ujemna";
console.log(assignValue);

// Zadanie nr 3 - BMI:

const countBMI = (weight, height) => {
  const bmiValue = weight / height ** 2;

  if (bmiValue < 18.5) {
    return "niedowaga";
  } else if (bmiValue >= 25) {
    return "nadwaga";
  } else {
    return "odpowiednia waga";
  }
};
console.log(countBMI(80, 1.8));

// Zadania nr 4 - zadanie z obiektem user:

const testUser = {
  isActive: true,
  role: "admin",
  blocked: false,
  balance: 80,
  order: 3,
};
const product = { price: 100, quantity: 5 };

const accessLogin = (user, product) => {
  const succesLogin = user.isActive && user.role === "admin" && !user.blocked;
  const fundsForPurchase = user.balance - product.price >= 0 ? true : false;
  const productAvailability = product.quantity - user.order >= 0 ? true : false;
  if (succesLogin) {
    console.log("Uzyskano dostęp :)");
    if (productAvailability) {
      console.log("Produkt dostępny w tej ilości.");
    } else {
      console.log("Brak produktu na magazynie w takiej ilości.");
    }
    if (fundsForPurchase) {
      console.log("Możesz kupić ten produkt.");
    } else {
      console.log("Brak środków na zakup tego produktu.");
    }
  } else if (blocked) {
    console.log("Użytkownik zablokowany.");
  } else {
    console.log("Brak dostępu.");
  }
};

accessLogin(testUser, product);

// Zadanie 5 - dodaj wartość z tablicy w pętli for i while:

const numbersArray = [2, 5, 7, 2];
let sum1 = 0;
let sum2 = 0;

for (let i = 0; i < numbersArray.length; i++) {
  sum1 += numbersArray[i];
}
console.log("Pętla for:", sum1);

let i = 0;
while (i < numbersArray.length) {
  sum2 += numbersArray[i];
  i++;
}
console.log("Pętla while:", sum2);

// Zadanie nr 6 - sprawdż czy wartość jest / nie jest podzielna przez 2:

const checkDivisibilityBy2 = (checkingNumber) => {
  if (checkingNumber % 2 === 0) {
    return "Liczba jest podzielna.";
  } else {
    return "Liczba jest nie podzielna.";
  }
};
console.log(checkDivisibilityBy2(-2));
console.log(checkDivisibilityBy2(-1));
console.log(checkDivisibilityBy2(0));
console.log(checkDivisibilityBy2(1));
console.log(checkDivisibilityBy2(2));

// Zadanie nr 7 - walidacja usera:

let user1 = { name: "", email: "mail@mail.pl" };
let user2 = { name: "a", mail: "mail@mail.pl" };
let user3 = { name: "abcd", email: "" };
let user4 = { name: "abcd", email: "mail" };
let user5 = { name: "abcd", email: "mail@mail.com" };

const validateUser = (user) => {
  if (!user.name) {
    return "Brak nazwy usera.";
  } else if (user.name.length < 2) {
    return "Nazwa usera musi mieć minimum dwa znaki.";
  } else if (!user.email) {
    return "Nie podano adresu email.";
  } else if (!user.email.includes("@")) {
    return "Adres email jest nie prawidłowy.";
  } else {
    return "Dane poprawne.";
  }
};
console.log(validateUser(user1));
console.log(validateUser(user2));
console.log(validateUser(user3));
console.log(validateUser(user4));
console.log(validateUser(user5));

// Zadanie nr 8 - koszyk zakupów:

const cart = [
  { id: 1, name: "product_1", price: 50 },
  { id: 2, name: "product_2", price: 100 },
  { id: 3, name: "product_3", price: 50 },
  { id: 4, name: "product_4", price: 200 },
  { id: 5, name: "product_5", price: 10 },
  { id: 6, name: "product_6", price: 150 },
  { id: 7, name: "product_7", price: 300 },
  { id: 8, name: "product_8", price: 250 },
];

const calculatePriceAndDiscount = (productsInCart) => {
  let priceOfProducts = 0;
  let bonus = 0;
  for (let i = 0; i < productsInCart.length; i++) {
    priceOfProducts += productsInCart[i].price;
  }
  if (priceOfProducts > 500) {
    bonus = priceOfProducts * 0.1;
  }
  console.log("Cena produktów:", priceOfProducts);
  console.log(
    "Cena produktów jest większa niż 500 dlatego jest bonus 10% który wynosi:",
    bonus
  );
};
calculatePriceAndDiscount(cart);

// -------------------------------------------------------------------------------------
// Koniec zajęć.
// -------------------------------------------------------------------------------------

console.log(
  "-------------------- Koniec pierwszych zajęć :) --------------------"
);
