function contact(el) {
  const compContactEl = document.createElement("div");
  compContactEl.innerHTML = ` <div class="contact__container">
      <h2 class="contact__title">Escribime</h2>
      <form class="contact__form" action="">
        <label class="name"
          ><h3 class="form-subtitle">Nombre</h3>
          <input
            type="text"
            class="form-input"
            placeholder="Tu nombre"
            name="name"
        /></label>
        <label class="email"
          ><h3 class="form-subtitle">Email</h3>
          <input
            type="email"
            class="form-input"
            placeholder="tu@mail.com"
            name="to"
        /></label>
        <label class="message"
          ><h3 class="form-subtitle">Mensaje</h3>
          <textarea id="" class="form-textarea" name="message"></textarea>
        </label>
        <div>
          <button class="form-button">
            <h3>Enviar</h3>
            <img src="/icons/button-enviar-icon.svg" class="button-icon" />
          </button>
        </div>
      </form>
    </div>`;
  el.appendChild(compContactEl);
}
