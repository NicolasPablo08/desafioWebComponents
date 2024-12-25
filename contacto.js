function main() {
  //header
  const headerContactoEl = document.querySelector(".contacto__header");
  header(headerContactoEl);

  //header cambiamos el nombre y url del boton contacto a index (home)
  const buttonContactoHeaderEl = document.querySelector(".enlaces-contact");
  buttonContactoHeaderEl.textContent = "Home";
  buttonContactoHeaderEl.setAttribute("href", "./index.html");

  const buttonContactoHeaderExtendsEl = document.querySelector(".header-contacto");
  buttonContactoHeaderExtendsEl.textContent = "Home";
  buttonContactoHeaderExtendsEl.setAttribute("href", "./index.html");

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

  //contact
  const contactContactoEl = document.querySelector(".contacto__contact");
  contact(contactContactoEl);

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
  });

  //footer
  const footerContactoEl = document.querySelector(".contacto__footer");
  footer(footerContactoEl);

  //footer cambiamos en nombre, url e imagen del enlace home a portfolio
  const enlaceUrlContactEl = document.querySelector(".enlace-url-contact");
  enlaceUrlContactEl.textContent = "Portfolio";
  enlaceUrlContactEl.setAttribute("href", "./portfolio.html");
  const enlaceImageContactEl = document.querySelector(".enlace-img-contact");
  enlaceImageContactEl.setAttribute("src", "./icons/footer-work.svg");
}
main();
