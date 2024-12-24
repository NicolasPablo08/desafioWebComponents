function newService(result) {
  const contenedor = document.querySelector(".works-cards");
  const template = document.querySelector("#services-template");
  //console.log(data);

  for (const p of result) {
    const clone = document.importNode(template.content, true);

    const titleEl = clone.querySelector(".card__work-title");
    titleEl.textContent = p.fields.cardTitle;
    //console.log(p.fields.cardTitle);

    const textEl = clone.querySelector(".card__work-text");
    textEl.textContent = p.fields.cardText;
    //console.log(p.fields.cardText);

    const imageId = p.fields.cardImage.sys.id;
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
  const headerServiciosEl = document.querySelector(".servicios__header");
  header(headerServiciosEl);

  //header cambiamos el nombre y url del boton servicios a index (home)
  const buttonServiciosHeaderEl = document.querySelector(".enlaces-services");
  buttonServiciosHeaderEl.textContent = "Home";
  buttonServiciosHeaderEl.setAttribute("href", "./index.html");

  const buttonServiciosHeaderExtendsEl = document.querySelector(".header-servicios");
  buttonServiciosHeaderExtendsEl.textContent = "Home";
  buttonServiciosHeaderExtendsEl.setAttribute("href", "./index.html");

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
  const footerServiciosEl = document.querySelector(".servicios__footer");
  footer(footerServiciosEl);

  //footer cambiamos en nombre, url e imagen del enlace servicios a portfolio
  const enlaceUrlServiciosEl = document.querySelector(".enlace-url-services");
  enlaceUrlServiciosEl.textContent = "Portfolio";
  enlaceUrlServiciosEl.setAttribute("href", "./portfolio.html");
  const enlaceImageServiciosEl = document.querySelector(".enlace-img-services");
  enlaceImageServiciosEl.setAttribute("src", "/icons/footer-work.svg");

  //services
  fetch(
    "https://cdn.contentful.com/spaces/we1lial17vnf/environments/master/entries?access_token=1YdCVLWmcvC2tsAqbk0f1yybhENvRWYQwxkpeVcycnQ&content_type=services"
  )
    .then((response) => response.json())
    .then((data) => newService(data.items));
}
main();
