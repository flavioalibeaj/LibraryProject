if (typeof localStorage === "undefined" || localStorage == null) {
  var LocalStorage = require("node-localstorage").LocalStorage;
  localStorage = new LocalStorage("./storage");
}

const dummyData = {
  init: () => {
    let allBooks = [
      {
        title: "Titull 1",
        autor: "Autor 1",
      },
      {
        title: "Titull 2",
        autor: "Autor 2",
      },
      {
        title: "Titull 3",
        autor: "Autor 3",
      },
    ];

    let allAuthors = [
      {
        autor: "Autor 1",
        age: 30,
      },
      {
        autor: "Autor 2",
        age: 29,
      },
      {
        autor: "Autor 3",
        age: 34,
      },
    ];

    localStorage.setItem("books", JSON.stringify(allBooks));
    localStorage.setItem("authors", JSON.stringify(allAuthors));
  },
};

module.exports = dummyData;
