class Animal {
  emitirSom() {
    console.log("Som genérico de animal");
  }
}

class Cachorro extends Animal {
  emitirSom() {
    console.log("Au au!");
  }
}

class Gato extends Animal {
  emitirSom() {
    console.log("Miau!");
  }
}

// Teste com polimorfismo
const animais = [new Cachorro(), new Gato(), new Animal()];

for (const a of animais) {
  a.emitirSom();
}