function Bola(context) {
  this.context = context;
  this.x = 0;
  this.y = 0;
  this.velocidadeX = 0;
  this.velocidadeY = 0;

  // Atributos de desenho padrão
  this.cor = "black";
  this.raio = 10;
}

Bola.prototype = {
  atualizar: function () {
    let ctx = this.context;
    if (this.x < this.raio || this.x > ctx.canvas.width - this.raio)
      this.velocidadeX *= -1;
    if (this.y < this.raio || this.y > ctx.canvas.height - this.raio)
      this.velocidadeY *= -1;
    this.x += this.velocidadeX;
    this.y += this.velocidadeY;
  },
  desenhar: function () {
    let ctx = this.context;

    // Guardar configurações atuais do contexto
    ctx.save();
    // Configurar o contexto de acordo com a bola
    ctx.fillStyle = this.cor;
    // Desenhar
    ctx.beginPath();

    ctx.arc(this.x, this.y, this.raio, 0, Math.PI * 2, false);
    // Pinta a forma na tela
    ctx.fill();
    ctx.restore();
  },
};
