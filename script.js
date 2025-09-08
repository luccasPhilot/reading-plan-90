document.addEventListener("DOMContentLoaded", () => {
  const readingPlanData = [
    { day: "04/08", chapters: "Gênesis 1-13" },
    { day: "05/08", chapters: "Gênesis 14-27" },
    { day: "06/08", chapters: "Gênesis 28-40" },
    { day: "07/08", chapters: "Gênesis 41-50, Êxodo 1-2" },
    { day: "08/08", chapters: "Êxodo 3-16" },
    { day: "09/08", chapters: "Êxodo 17-29" },
    { day: "10/08", chapters: "Êxodo 30-40, Levítico 1" },
    { day: "11/08", chapters: "Levítico 2-14" },
    { day: "12/08", chapters: "Levítico 15-27" },
    { day: "13/08", chapters: "Números 1-13" },
    { day: "14/08", chapters: "Números 14-27" },
    { day: "15/08", chapters: "Números 28-36, Dt 1-2" },
    { day: "16/08", chapters: "Deuteronômio 3-17" },
    { day: "17/08", chapters: "Deuteronômio 18-34" },
    { day: "18/08", chapters: "Josué 1-13" },
    { day: "19/08", chapters: "Josué 14-24" },
    { day: "20/08", chapters: "Juízes 1-12" },
    { day: "21/08", chapters: "Juízes 13-21, Rute 1-4" },
    { day: "22/08", chapters: "1 Samuel 1-13" },
    { day: "23/08", chapters: "1 Samuel 14-31" },
    { day: "24/08", chapters: "2 Samuel 1-14" },
    { day: "25/08", chapters: "2 Samuel 15-24, 1 Reis 1-2" },
    { day: "26/08", chapters: "1 Reis 3-16" },
    { day: "27/08", chapters: "1 Reis 17-22, 2 Reis 1-6" },
    { day: "28/08", chapters: "2 Reis 7-21" },
    { day: "29/08", chapters: "2 Reis 22-25, 1 Cr 1-5" },
    { day: "30/08", chapters: "1 Crônicas 6-19" },
    { day: "31/08", chapters: "1 Crônicas 20-29, 2 Cr 1-2" },
    { day: "01/09", chapters: "2 Crônicas 3-17" },
    { day: "02/09", chapters: "2 Crônicas 18-36" },
    { day: "03/09", chapters: "Esdras 1-10" },
    { day: "04/09", chapters: "Neemias 1-13" },
    { day: "05/09", chapters: "Ester 1-10, Jó 1-2" },
    { day: "06/09", chapters: "Jó 3-20" },
    { day: "07/09", chapters: "Jó 21-37" },
    { day: "08/09", chapters: "Jó 38-42, Salmos 1-3" },
    { day: "09/09", chapters: "Salmos 4-21" },
    { day: "10/09", chapters: "Salmos 22-40" },
    { day: "11/09", chapters: "Salmos 41-59" },
    { day: "12/09", chapters: "Salmos 60-78" },
    { day: "13/09", chapters: "Salmos 79-97" },
    { day: "14/09", chapters: "Salmos 98-118" },
    { day: "15/09", chapters: "Salmos 119" },
    { day: "16/09", chapters: "Salmos 120-139" },
    { day: "17/09", chapters: "Salmos 140-150, Pv 1-2" },
    { day: "18/09", chapters: "Provérbios 3-19" },
    { day: "19/09", chapters: "Provérbios 20-31" },
    { day: "20/09", chapters: "Eclesiastes 1-12, Ct 1-4" },
    { day: "21/09", chapters: "Cânticos 5-8, Isaías 1-9" },
    { day: "22/09", chapters: "Isaías 10-24" },
    { day: "23/09", chapters: "Isaías 25-39" },
    { day: "24/09", chapters: "Isaías 40-55" },
    { day: "25/09", chapters: "Isaías 56-66, Jeremias 1-2" },
    { day: "26/09", chapters: "Jeremias 3-17" },
    { day: "27/09", chapters: "Jeremias 18-32" },
    { day: "28/09", chapters: "Jeremias 33-52" },
    { day: "29/09", chapters: "Lamentações 1-5, Ez 1-6" },
    { day: "30/09", chapters: "Ezequiel 7-20" },
    { day: "01/10", chapters: "Ezequiel 21-33" },
    { day: "02/10", chapters: "Ezequiel 34-48" },
    { day: "03/10", chapters: "Daniel 1-12" },
    { day: "04/10", chapters: "Oséias 1-14, Joel 1-3" },
    { day: "05/10", chapters: "Amós 1-9, Obadias 1" },
    { day: "06/10", chapters: "Jonas 1-4, Miquéias 1-7" },
    { day: "07/10", chapters: "Naum 1-3, Hc 1-3, Sf 1-3" },
    { day: "08/10", chapters: "Ageu 1-2, Zacarias 1-9" },
    { day: "09/10", chapters: "Zacarias 10-14, MI 1-4" },
    { day: "10/10", chapters: "Mateus 1-13" },
    { day: "11/10", chapters: "Mateus 14-28" },
    { day: "12/10", chapters: "Marcos 1-16" },
    { day: "13/10", chapters: "Lucas 1-8" },
    { day: "14/10", chapters: "Lucas 9-16" },
    { day: "15/10", chapters: "Lucas 17-24" },
    { day: "16/10", chapters: "João 1-11" },
    { day: "17/10", chapters: "João 12-21" },
    { day: "18/10", chapters: "Atos 1-12" },
    { day: "19/10", chapters: "Atos 13-28" },
    { day: "20/10", chapters: "Romanos 1-16" },
    { day: "21/10", chapters: "1 Coríntios 1-16" },
    { day: "22/10", chapters: "2 Coríntios 1-13" },
    { day: "23/10", chapters: "Gálatas 1-6, Efésios 1-6" },
    { day: "24/10", chapters: "Filipenses 1-4, CI 1-4" },
    { day: "25/10", chapters: "1 Ts 1-5, 2 Ts 1-3, 1 Tm 1-6" },
    { day: "26/10", chapters: "2 Tm 1-4, Tito 1-3, Fm" },
    { day: "27/10", chapters: "Hebreus 1-13" },
    { day: "28/10", chapters: "Tiago 1-5, 1 Pedro 1-5" },
    { day: "29/10", chapters: "2 Pedro 1-3, 1 João 1-5" },
    { day: "30/10", chapters: "2 Jo, 3 Jo, Judas, Ap 1-7" },
    { day: "31/10", chapters: "Apocalipse 8-14" },
    { day: "01/11", chapters: "Apocalipse 15-20" },
    { day: "02/11", chapters: "Apocalipse 21-22" },
  ];

  const bibleBooksData = [
    // Antigo Testamento
    { name: "Gênesis", author: "Moisés", category: "Pentateuco" },
    { name: "Êxodo", author: "Moisés", category: "Pentateuco" },
    { name: "Levítico", author: "Moisés", category: "Pentateuco" },
    { name: "Números", author: "Moisés", category: "Pentateuco" },
    { name: "Deuteronômio", author: "Moisés", category: "Pentateuco" },
    { name: "Josué", author: "Josué", category: "Históricos" },
    {
      name: "Juízes",
      author: "Samuel (tradicionalmente)",
      category: "Históricos",
    },
    {
      name: "Rute",
      author: "Samuel (tradicionalmente)",
      category: "Históricos",
    },
    { name: "1 Samuel", author: "Samuel, Gade, Natã", category: "Históricos" },
    { name: "2 Samuel", author: "Gade, Natã", category: "Históricos" },
    {
      name: "1 Reis",
      author: "Jeremias (tradicionalmente)",
      category: "Históricos",
    },
    {
      name: "2 Reis",
      author: "Jeremias (tradicionalmente)",
      category: "Históricos",
    },
    {
      name: "1 Crônicas",
      author: "Esdras (tradicionalmente)",
      category: "Históricos",
    },
    {
      name: "2 Crônicas",
      author: "Esdras (tradicionalmente)",
      category: "Históricos",
    },
    { name: "Esdras", author: "Esdras", category: "Históricos" },
    { name: "Neemias", author: "Neemias", category: "Históricos" },
    { name: "Ester", author: "Desconhecido", category: "Históricos" },
    {
      name: "Jó",
      author: "Desconhecido (possivelmente Moisés ou Jó)",
      category: "Poéticos e de Sabedoria",
    },
    {
      name: "Salmos",
      author: "Davi, Asafe, filhos de Corá, outros",
      category: "Poéticos e de Sabedoria",
    },
    {
      name: "Provérbios",
      author: "Salomão, Agur, Lemuel",
      category: "Poéticos e de Sabedoria",
    },
    {
      name: "Eclesiastes",
      author: "Salomão",
      category: "Poéticos e de Sabedoria",
    },
    {
      name: "Cânticos dos Cânticos",
      author: "Salomão",
      category: "Poéticos e de Sabedoria",
    },
    { name: "Isaías", author: "Isaías", category: "Profetas Maiores" },
    { name: "Jeremias", author: "Jeremias", category: "Profetas Maiores" },
    { name: "Lamentações", author: "Jeremias", category: "Profetas Maiores" },
    { name: "Ezequiel", author: "Ezequiel", category: "Profetas Maiores" },
    { name: "Daniel", author: "Daniel", category: "Profetas Maiores" },
    { name: "Oséias", author: "Oséias", category: "Profetas Menores" },
    { name: "Joel", author: "Joel", category: "Profetas Menores" },
    { name: "Amós", author: "Amós", category: "Profetas Menores" },
    { name: "Obadias", author: "Obadias", category: "Profetas Menores" },
    { name: "Jonas", author: "Jonas", category: "Profetas Menores" },
    { name: "Miquéias", author: "Miquéias", category: "Profetas Menores" },
    { name: "Naum", author: "Naum", category: "Profetas Menores" },
    { name: "Habacuque", author: "Habacuque", category: "Profetas Menores" },
    { name: "Sofonias", author: "Sofonias", category: "Profetas Menores" },
    { name: "Ageu", author: "Ageu", category: "Profetas Menores" },
    { name: "Zacarias", author: "Zacarias", category: "Profetas Menores" },
    { name: "Malaquias", author: "Malaquias", category: "Profetas Menores" },
    // Novo Testamento
    { name: "Mateus", author: "Mateus", category: "Evangelhos" },
    { name: "Marcos", author: "Marcos", category: "Evangelhos" },
    { name: "Lucas", author: "Lucas", category: "Evangelhos" },
    { name: "João", author: "João", category: "Evangelhos" },
    { name: "Atos dos Apóstolos", author: "Lucas", category: "Histórico (NT)" },
    { name: "Romanos", author: "Paulo", category: "Epístolas Paulinas" },
    { name: "1 Coríntios", author: "Paulo", category: "Epístolas Paulinas" },
    { name: "2 Coríntios", author: "Paulo", category: "Epístolas Paulinas" },
    { name: "Gálatas", author: "Paulo", category: "Epístolas Paulinas" },
    { name: "Efésios", author: "Paulo", category: "Epístolas Paulinas" },
    { name: "Filipenses", author: "Paulo", category: "Epístolas Paulinas" },
    { name: "Colossenses", author: "Paulo", category: "Epístolas Paulinas" },
    {
      name: "1 Tessalonicenses",
      author: "Paulo",
      category: "Epístolas Paulinas",
    },
    {
      name: "2 Tessalonicenses",
      author: "Paulo",
      category: "Epístolas Paulinas",
    },
    { name: "1 Timóteo", author: "Paulo", category: "Epístolas Paulinas" },
    { name: "2 Timóteo", author: "Paulo", category: "Epístolas Paulinas" },
    { name: "Tito", author: "Paulo", category: "Epístolas Paulinas" },
    { name: "Filemom", author: "Paulo", category: "Epístolas Paulinas" },
    {
      name: "Hebreus",
      author: "Desconhecido (tradicionalmente Paulo)",
      category: "Epístolas Gerais",
    },
    { name: "Tiago", author: "Tiago", category: "Epístolas Gerais" },
    { name: "1 Pedro", author: "Pedro", category: "Epístolas Gerais" },
    { name: "2 Pedro", author: "Pedro", category: "Epístolas Gerais" },
    { name: "1 João", author: "João", category: "Epístolas Gerais" },
    { name: "2 João", author: "João", category: "Epístolas Gerais" },
    { name: "3 João", author: "João", category: "Epístolas Gerais" },
    { name: "Judas", author: "Judas", category: "Epístolas Gerais" },
    { name: "Apocalipse", author: "João", category: "Profético (NT)" },
  ];

  const container = document.getElementById("reading-plan-container");
  const STORAGE_KEY = "readingProgress";
  const modal = document.getElementById("books-modal");
  const showBooksBtn = document.getElementById("show-books-btn");
  const closeBtn = document.querySelector(".close-btn");
  const booksListContainer = document.getElementById("books-list-container");

  // Carrega o progresso salvo no localStorage
  function loadProgress() {
    const progress = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
    const checkboxes = document.querySelectorAll(".checkbox");
    checkboxes.forEach((checkbox, index) => {
      if (progress[index]) {
        checkbox.checked = true;
        checkbox.closest(".reading-item").classList.add("completed");
      }
    });
  }

  // Salva o progresso atual no localStorage
  function saveProgress() {
    const checkboxes = document.querySelectorAll(".checkbox");
    const progress = Array.from(checkboxes).map((cb) => cb.checked);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
  }

  // Gera os itens do plano de leitura na página
  function renderPlan() {
    readingPlanData.forEach((item, index) => {
      // Cria o elemento principal do item
      const itemDiv = document.createElement("div");
      itemDiv.classList.add("reading-item");

      const numberSpan = document.createElement("span");
      numberSpan.classList.add("reading-number");
      numberSpan.textContent = `${index + 1}.`;

      // Cria o checkbox
      const checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      checkbox.id = `day-${index}`;
      checkbox.classList.add("checkbox");

      // Cria a data
      const daySpan = document.createElement("span");
      daySpan.classList.add("reading-day");
      daySpan.textContent = item.day;

      // Cria o texto da leitura
      const textSpan = document.createElement("span");
      textSpan.classList.add("reading-text");
      textSpan.textContent = item.chapters;

      // Adiciona um evento ao checkbox para salvar e mudar o estilo
      checkbox.addEventListener("change", () => {
        itemDiv.classList.toggle("completed", checkbox.checked);
        saveProgress();
      });

      // Monta o elemento e o adiciona ao container
      itemDiv.appendChild(numberSpan);
      itemDiv.appendChild(checkbox);
      itemDiv.appendChild(daySpan);
      itemDiv.appendChild(textSpan);
      container.appendChild(itemDiv);
    });
  }

  function renderBooksList() {
    // Agrupa os livros por categoria
    const groupedBooks = bibleBooksData.reduce((acc, book) => {
      const category = book.category;
      if (!acc[category]) {
        acc[category] = [];
      }
      acc[category].push(book);
      return acc;
    }, {});

    booksListContainer.innerHTML = ""; // Limpa o container

    // Cria o HTML para cada categoria e seus livros
    for (const category in groupedBooks) {
      const categoryDiv = document.createElement("div");
      categoryDiv.classList.add("category-group");

      const title = document.createElement("h3");
      title.classList.add("category-title");
      title.textContent = category;
      categoryDiv.appendChild(title);

      groupedBooks[category].forEach((book) => {
        const bookDiv = document.createElement("div");
        bookDiv.classList.add("book-item");

        const nameSpan = document.createElement("span");
        nameSpan.classList.add("book-name");
        nameSpan.textContent = book.name;

        const authorSpan = document.createElement("span");
        authorSpan.classList.add("book-author");
        authorSpan.textContent = book.author;

        bookDiv.appendChild(nameSpan);
        bookDiv.appendChild(authorSpan);
        categoryDiv.appendChild(bookDiv);
      });

      booksListContainer.appendChild(categoryDiv);
    }
  }

  // Eventos para controlar o modal
  showBooksBtn.addEventListener("click", () => {
    modal.style.display = "block";
  });

  closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
  });

  window.addEventListener("click", (event) => {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  });

  // Inicia o processo
  renderPlan();
  renderBooksList();
  loadProgress();
});
