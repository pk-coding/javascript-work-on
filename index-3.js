// -------------------------------------------------------------------------------------
// Zajęcia nr 3 - 14.04.2025 r.
// -------------------------------------------------------------------------------------

console.log(
  "-------------------- Początek trzecich zajęć :) --------------------"
);

// Zadanie nr 1 - pobieranie i obsługa danych z wykorzystaniem fetch:

const dataLoading = document.querySelector("#loading");
const errorMessage = document.querySelector("#error-message");
const usersContainer = document.querySelector("#users-container");

dataLoading.style.display = "block";

fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => {
    if (!response.ok) {
      if (response.status === 404) {
        errorMessage.textContent = "Nie ma takiego adresu.";
        throw new Error("Nie ma takiego adresu.");
      } else if (response.status === 500) {
        errorMessage.textContent = "Błąd serwera.";
        throw new Error("Błąd serwera.");
      } else {
        errorMessage.textContent = `Błąd HTTP: ${response.status}`;
        throw new Error(`HTTP error status: ${response.status}`);
      }
    }
    return response.json();
  })
  .then((jsonData) => {
    if (jsonData && jsonData.length > 0) {
      for (let i = 0; i < jsonData.length; i++) {
        const createPar = document.createElement("p");
        createPar.textContent = "Pętla for: " + jsonData[i].name;
        usersContainer.appendChild(createPar);
      }
      jsonData.forEach((user) => {
        const createPar = document.createElement("p");
        createPar.textContent = "Pętla forEach: " + user.name;
        usersContainer.appendChild(createPar);
      });
    }
  })
  .catch((error) => {
    console.error(error);
    if (!errorMessage.textContent) {
      errorMessage.textContent = "Wystąpił błąd sieciowy.";
    }
  })
  .finally(() => {
    dataLoading.style.display = "none";
  });

// Zadanie nr 2 - funkcja pobierająca wszystkie posty z fetch:

const fetchPostsTitles = () => {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Wystąpił błąd ze statusem.");
      } else {
        return response.json();
      }
    })
    .then((posts) => {
      posts.forEach((post) => console.log("fetch:", post.title));
    })
    .catch((error) => {
      throw new Error("Wystąpił błąd sieciowy.");
    });
};

// Zadanie nr 3 - funkcja pobierająca wszystklie posty z axios:

const axiosPostsTitles = () => {
  axios
    .get("https://jsonplaceholder.typicode.com/posts")
    .then((response) => {
      response.data.forEach((post) => console.log("axios:", post.title));
    })
    .catch((error) => {
      throw new Error("Wystąpił błąd sieciowy.");
    });
};

// Zadanie nr 4 - funkcja pobierająca wszystkie posty z async/await:

const fetchPostsAsync = async () => {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/posts"
  );
  response.data.forEach((post) => console.log("Async:", post.title));
};

// Zadanie nr 5 - funkcja pobierająca posty usera o podanym Id z fetch:

const fetchUserPosts = (userId) => {
  fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Wystąpił błąd ze statusem.");
      } else {
        return response.json();
      }
    })
    .then((posts) => {
      posts.forEach((post) =>
        console.log(`fetch user ID ${userId} posts:\n${post.body}`)
      );
    })
    .catch((error) => {
      throw new Error("Wystąpił błąd sieciowy.");
    });
};

// Zadanie nr 6 - funkcja pobierająca posty usera o podanym Id z axios:

const axioshUserPosts = (userId) => {
  axios
    .get(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
    .then((response) => {
      response.data.forEach((post) =>
        console.log(`axios user ID ${userId} posts:\n${post.body}`)
      );
    })
    .catch((error) => {
      throw new Error("Wystąpił błąd sieciowy.");
    });
};

// Zadanie nr 7 - wysyłanie danych z formularza z fetch:

const postFormFetch = document.querySelector("#postFormFetch");
const messageDivFetch = document.querySelector("#messageDivFetch");

function handleFetchPostSubmit(e) {
  e.preventDefault();

  const title = postFormFetch.elements.title.value;
  const body = postFormFetch.elements.body.value;

  fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      title,
      body,
      UserId: 1,
    }),
  })
    .then((response) => {
      if (response.ok) {
        messageDivFetch.textContent = "Zapisano dane";
      } else {
        messageDivFetch.textContent = "Nie zapisano danych";
      }
      return response.json(); // jeśli potrzebujesz danych z odpowiedzi
    })
    .catch((error) => {
      messageDivFetch.textContent = `Błąd: ${error.message}`;
    });
}
postFormFetch.addEventListener("submit", handleFetchPostSubmit);

// Zadanie nr 7 - wysyłanie danych z formularza z axios:

const postFormAxios = document.querySelector("#postFormAxios");
const messageDivAxios = document.querySelector("#messageDivAxios");

function handleAxiosPostSubmit(e) {
  e.preventDefault();

  const title = postFormAxios.elements.title.value;
  const body = postFormAxios.elements.body.value;

  axios
    .post("https://jsonplaceholder.typicode.com/posts", {
      title,
      body,
      UserId: 1,
    })
    .then((response) => {
      if (response.status === 200 || response.status === 201) {
        messageDivAxios.textContent = "Zapisano dane";
      } else {
        messageDivAxios.textContent = "Nie zapisano danych";
      }
    })
    .catch((error) => {
      messageDivAxios.textContent = `Błąd: ${error.message}`;
    });
}
postFormAxios.addEventListener("submit", handleAxiosPostSubmit);

// Zadanie nr 8 - wysyłanie danych z formularza z async/await:

const postFormAsyncAwait = document.querySelector("#postFormAsyncAwait");
const messageDivAsyncAwait = document.querySelector("#messageDivAsyncAwait");

async function handleAsyncAwaitPostSubmit(e) {
  e.preventDefault();

  try {
    const title = postFormAsyncAwait.elements.title.value;
    const body = postFormAsyncAwait.elements.body.value;

    const response = await axios.post(
      "https://jsonplaceholder.typicode.com/posts",
      {
        title,
        body,
        UserId: 1,
      }
    );

    if (response.status === 200 || response.status === 201) {
      messageDivAsyncAwait.textContent = "Zapisano dane";
    } else {
      messageDivAsyncAwait.textContent = "Nie zapisano danych";
    }
  } catch (error) {
    messageDivAsyncAwait.textContent = `Błąd: ${error.message}`;
  }
}
postFormAsyncAwait.addEventListener("submit", handleAsyncAwaitPostSubmit);

// -------------------------------------------------------------------------------------
// Koniec zajęć.
// -------------------------------------------------------------------------------------

const manageAllAsyncFunctions = () => {
  const allAsyncFunctions = [
    fetchPostsTitles(),
    axiosPostsTitles(),
    fetchPostsAsync(),
    fetchUserPosts(1),
    axioshUserPosts(1),
  ];
  Promise.all(allAsyncFunctions).then(() => {
    console.log(
      "-------------------- Koniec trzecich zajęć :) --------------------"
    );
  });
};
manageAllAsyncFunctions();
