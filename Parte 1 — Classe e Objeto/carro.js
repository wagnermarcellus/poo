
class Carro {
  constructor(marca, modelo, ano) {
    this.marca = marca;
    this.modelo = modelo;
    this.ano = ano;
  }

  descrever() {
    console.log(`Este carro é um ${this.marca} ${this.modelo} de ${this.ano}.`);
  }
}


const carro1 = new Carro("Toyota", "Corolla", 2022);
const carro2 = new Carro("Honda", "Civic", 2023);

carro1.descrever();
carro2.descrever();
