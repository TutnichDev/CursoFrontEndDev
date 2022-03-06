class Tarjeta {
  constructor(texto1, texto2, img) {
    this.texto1 = texto1;
    this.texto2 = texto2;
    this.imgUrl = img;
  }

  iniciarTarjeta() {
    let box = document.createElement("div");
    box.innerHTML = `         <section> 
        <div class="card">
          <img
            src="${this.imgUrl}"
            alt=""
          />
          <div class="texto">
            <p>${this.texto1}</p>
            <p>${this.texto2}</p>
          </div>
        </div>
      </section>
      `;
    document.body.appendChild(box);
  }
}

let tarjeta1 = new Tarjeta(
  "holis",
  "soy",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Chess_piece_-_Black_pawn.JPG/170px-Chess_piece_-_Black_pawn.JPG"
);
tarjeta1.iniciarTarjeta();

