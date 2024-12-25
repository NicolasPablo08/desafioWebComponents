let todosItems = []; // Array para almacenar todos los items de Contentful
let cantidadMostrar = 3; // Cantidad inicial de items a mostrar

function newWork(result) {
  const contenedor = document.querySelector(".works-cards");
  const template = document.querySelector("#works-template");
  //console.log(result);
  contenedor.innerHTML = ""; // Limpiar el contenedor antes de agregar los elementos

  // Mostrar los elementos desde 0 a cantidadMostrar
  const itemsParaMostrar = result.slice(0, cantidadMostrar);

  for (const p of itemsParaMostrar) {
    const clone = document.importNode(template.content, true);
    //console.log(p);

    const titleEl = clone.querySelector(".card__work-title");
    titleEl.textContent = p.fields.workTitle;
    //console.log(p.fields.workTitle);

    const textEl = clone.querySelector(".card__work-text");
    textEl.textContent = p.fields.workText;
    //console.log(p.fields.workText);

    const imageId = p.fields.workImage.sys.id;
    //console.log(imageId);
    const imgEl = clone.querySelector(".card__work-img");
    fetch(`https://cdn.contentful.com/spaces/we1lial17vnf/assets/${imageId}`, {
      method: "GET",
      headers: {
        Authorization: "Bearer 1YdCVLWmcvC2tsAqbk0f1yybhENvRWYQwxkpeVcycnQ",
      },
    })
      .then((resp) => resp.json())
      .then((dat) => {
        const imageUrl = "https:" + dat.fields.file.url;
        imgEl.setAttribute("src", imageUrl);
        //console.log(imageUrl);
      });

    contenedor.appendChild(clone);
  }
}

function main() {
  //header
  const headerPortfolioEl = document.querySelector(".portfolio__header");
  header(headerPortfolioEl);

  //header cambiamos el nombre y url del boton portfolio a index (home)
  const buttonPortfolioHeaderEl = document.querySelector(".enlaces-portfolio");
  buttonPortfolioHeaderEl.textContent = "Home";
  buttonPortfolioHeaderEl.setAttribute("href", "./index.html");

  const buttonPortfolioHeaderExtendsEl = document.querySelector(".header-portfolio");
  buttonPortfolioHeaderExtendsEl.textContent = "Home";
  buttonPortfolioHeaderExtendsEl.setAttribute("href", "./index.html");

  //header menu desplegable
  const botonAbrirVentanaEl = document.querySelector(".menu-button-open");
  const botonCerrarVentanaEl = document.querySelector(".menu-button-close");
  const ventanaEl = document.querySelector(".ventana");
  botonAbrirVentanaEl.addEventListener("click", (e) => {
    ventanaEl.style.display = "inherit";
  });
  botonCerrarVentanaEl.addEventListener("click", (e) => {
    ventanaEl.style.display = "none";
  });

  //footer
  const footerPortfolioEl = document.querySelector(".portfolio__footer");
  footer(footerPortfolioEl);

  //trabajos
  fetch(
    "https://cdn.contentful.com/spaces/we1lial17vnf/environments/master/entries?access_token=1YdCVLWmcvC2tsAqbk0f1yybhENvRWYQwxkpeVcycnQ&content_type=cardsWorks"
  )
    .then((response) => response.json())
    .then((data) => {
      todosItems = data.items; // Guardar todos los items
      newWork(todosItems); // Mostrar solo los primeros 3
    });

  // Evento para el botón
  const buttonVerMenos = document.querySelector(".card__work-button-menos");
  const buttonVerMas = document.querySelector(".card__work-button-mas");
  buttonVerMas.addEventListener("click", () => {
    cantidadMostrar = todosItems.length; // Cambiar a mostrar todos los items
    newWork(todosItems); // mostrar todos los items al hacer clic
    buttonVerMas.style.display = "none";
    buttonVerMenos.style.display = "inherit";
  });
  buttonVerMenos.addEventListener("click", () => {
    cantidadMostrar = 3; //
    newWork(todosItems.slice(0, cantidadMostrar)); // Muestra del item 0 al 3 o el valor que almacene cantidadMostrar
    buttonVerMas.style.display = "inherit";
    buttonVerMenos.style.display = "none";
  });
}
main();
