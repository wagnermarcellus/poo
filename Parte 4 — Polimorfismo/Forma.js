class Forma {
  calcularArea() {
    return 0;
  }
}

class Quadrado extends Forma {
  constructor(lado) {
    super();
    this.lado = lado;
  }

  calcularArea() {
    return this.lado * this.lado;
  }
}

class Retangulo extends Forma {
  constructor(largura, altura) {
    super();
    this.largura = largura;
    this.altura = altura;
  }

  calcularArea() {
    return this.largura * this.altura;
  }
}

class Circulo extends Forma {
  constructor(raio) {
    super();
    this.raio = raio;
  }

  calcularArea() {
    return Math.PI * this.raio ** 2;
  }
}

// Teste
const formas = [
  new Quadrado(4),
  new Retangulo(5, 10),
  new Circulo(3),
];

for (const f of formas) {
  console.log(`Área: ${f.calcularArea().toFixed(2)}`);
}
