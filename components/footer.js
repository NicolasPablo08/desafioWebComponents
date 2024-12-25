function footer(el) {
  const compFooterEl = document.createElement("div");
  compFooterEl.innerHTML = ` <div class="footer__container">
      <img src="./icons/mountan icon.svg" class="logo" />
      <div class="enlaces-container">
        <div class="enlaces-footer">
          <img src="./icons/footer-home.svg" class="enlace-img enlace-img-home" />
          <a href="./index.html" class="enlace-text enlace-url-home">Home</a>
        </div>
        <div class="enlaces-footer">
          <img src="./icons/footer-services.svg" class="enlace-img enlace-img-services" />
          <a href="./servicios.html" class="enlace-text enlace-url-services">Servicios</a>
        </div>
        <div class="enlaces-footer">
          <img src="./icons/footer-phone.svg " class="enlace-img enlace-img-contact" />
          <a href="./contacto.html" class="enlace-text enlace-url-contact">Contacto</a>
        </div>
      </div>
      <div class="redes">
        <a href="https://instagram.com" target="_blank"><img src="./icons/footer-instagram.svg" /></a>
        <a href="https://github.com" target="_blank"><img src="./icons/footer-github.svg" /></a>
        <a href="https://x.com" target="_blank"><img src="./icons/footer-twitter.svg" /></a>
      </div>
      <a href="https://apx.school" class="footer-text" target="_blank">©2024 - https://apx.school</a>
    </div>`;
  el.appendChild(compFooterEl);
}
