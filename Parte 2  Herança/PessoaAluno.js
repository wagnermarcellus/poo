class Pessoa {
  constructor(nome, idade) {
    this.nome = nome;
    this.idade = idade;
  }

  cumprimentar() {
    console.log(`Olá, meu nome é ${this.nome} e tenho ${this.idade} anos.`);
  }
}

class Aluno extends Pessoa {
  constructor(nome, idade, curso) {
    super(nome, idade);
    this.curso = curso;
  }

  cumprimentar() {
    console.log(`Oi, sou ${this.nome}, tenho ${this.idade} anos e estudo ${this.curso}.`);
  }
}

// Teste
const pessoa = new Pessoa("Carlos", 40);
const aluno = new Aluno("Marina", 21, "Engenharia de Software");

pessoa.cumprimentar();
aluno.cumprimentar();
