function header(el) {
  const compHeaderEl = document.createElement("div");
  compHeaderEl.innerHTML = `<div class="header__container">
    <img src="./icons/mountan icon.svg" class="logo" />
    <div class="menu">
      <button class="menu-button-open">
        <img src="./icons/Group-menu.svg" class="button-format" />
      </button>
      <div class="ventana">
        <div class="ventana-content">
          <button class="menu-button-close">
            <img src="./icons/menu-close -vector.svg" />
          </button>
          <div class="enlaces-menu">
            <a href="./portfolio.html" class="enlaces-portfolio">Portfolio</a>
            <a href="./servicios.html" class="enlaces-services">Servicios</a>
            <a href="./contacto.html" class="enlaces-contact">Contacto</a>
          </div>
        </div>
      </div>
    </div>
    <div class="enlaces">
      <a href="./portfolio.html" class="header-portfolio">Portfolio</a>
      <a href="./servicios.html" class="header-servicios">Servicios</a>
      <a href="./contacto.html" class="header-contacto">Contacto</a>
    </div>
  </div>`;
  el.appendChild(compHeaderEl);
}
