function newService(result) {
  const contenedor = document.querySelector(".services-card");
  const template = document.querySelector("#services-template");
  //console.log(data);

  for (const p of result) {
    const clone = document.importNode(template.content, true);

    const titleEl = clone.querySelector(".card-title");
    titleEl.textContent = p.fields.cardTitle;
    //console.log(p.fields.cardTitle);

    const textEl = clone.querySelector(".card-text");
    textEl.textContent = p.fields.cardText;
    //console.log(p.fields.cardText);

    const imageId = p.fields.cardImage.sys.id;
    //console.log(imageId);
    const imgEl = clone.querySelector(".card-img");
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
function presentacion(result) {
  //console.log(result.presentacionImage.sys.id);
  const titleEl = document.querySelector(".presentation-title");
  titleEl.textContent = result.presentacionTitle;

  const textEl = document.querySelector(".presentation-text");
  textEl.textContent = result.presentacionText;

  const imgEl = document.querySelector(".presentation-img");
  const imageId = result.presentacionImage.sys.id;
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
    });
}

function main() {
  //header.js
  const headerEl = document.querySelector(".home__header");
  header(headerEl);

  const botonAbrirVentanaEl = document.querySelector(".menu-button-open");
  const botonCerrarVentanaEl = document.querySelector(".menu-button-close");
  const ventanaEl = document.querySelector(".ventana");
  botonAbrirVentanaEl.addEventListener("click", (e) => {
    ventanaEl.style.display = "inherit";
  });
  botonCerrarVentanaEl.addEventListener("click", (e) => {
    ventanaEl.style.display = "none";
  });

  //contact.js
  const contactEl = document.querySelector(".home__contact");
  contact(contactEl);

  const form = document.querySelector(".contact__form");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const objetoData = Object.fromEntries(formData.entries());
    delete objetoData.name;
    const JsonForm = JSON.stringify(objetoData);
    console.log(JsonForm);
    fetch("https://apx.school/api/utils/email-to-student", {
      method: "post",
      headers: { "content-type": "application/json" },
      body: JsonForm,
    })
      .then((response) => response.json())
      .then((data) => console.log(data));
    form.reset();
  });

  //footer.js
  const footerIndexEl = document.querySelector(".home__footer");
  footer(footerIndexEl);

  //footer cambiamos en nombre, url e imagen del enlace home a portfolio
  const enlaceUrlHomeEl = document.querySelector(".enlace-url-home");
  enlaceUrlHomeEl.textContent = "Portfolio";
  enlaceUrlHomeEl.setAttribute("href", "./portfolio.html");
  const enlaceImageHomeEl = document.querySelector(".enlace-img-home");
  enlaceImageHomeEl.setAttribute("src", "./icons/footer-work.svg");

  //services
  fetch(
    "https://cdn.contentful.com/spaces/we1lial17vnf/environments/master/entries?access_token=1YdCVLWmcvC2tsAqbk0f1yybhENvRWYQwxkpeVcycnQ&content_type=services"
  )
    .then((response) => response.json())
    .then((data) => newService(data.items));

  //presentacion
  fetch(
    "https://cdn.contentful.com/spaces/we1lial17vnf/environments/master/entries?access_token=1YdCVLWmcvC2tsAqbk0f1yybhENvRWYQwxkpeVcycnQ&content_type=presentacion"
  )
    .then((response) => response.json())
    .then((data) => presentacion(data.items[0].fields));
}

main();
