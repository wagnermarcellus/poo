class Pessoa {
  constructor(nome, idade) {
    this.nome = nome;
    this.idade = idade;
  }

  apresentar() {
    console.log(`Olá, eu sou ${this.nome}, tenho ${this.idade} anos.`);
  }
}

class Aluno extends Pessoa {
  #notas;

  constructor(nome, idade, matricula, curso) {
    super(nome, idade);
    this.matricula = matricula;
    this.curso = curso;
    this.#notas = [];
  }

  adicionarNota(nota) {
    if (nota >= 0 && nota <= 10) {
      this.#notas.push(nota);
    } else {
      console.log("Nota inválida.");
    }
  }

  calcularMedia() {
    if (this.#notas.length === 0) return 0;
    const soma = this.#notas.reduce((acc, n) => acc + n, 0);
    return soma / this.#notas.length;
  }

  apresentar() {
    console.log(`Sou o aluno ${this.nome}, curso ${this.curso}, média: ${this.calcularMedia().toFixed(2)}`);
  }
}

class Professor extends Pessoa {
  constructor(nome, idade, disciplina) {
    super(nome, idade);
    this.disciplina = disciplina;
  }

  apresentar() {
    console.log(`Sou o professor ${this.nome}, leciono ${this.disciplina}.`);
  }
}

class Turma {
  constructor(codigo, professor) {
    this.codigo = codigo;
    this.professor = professor;
    this.alunos = [];
  }

  adicionarAluno(aluno) {
    this.alunos.push(aluno);
  }

  listarTurma() {
    console.log(`Turma ${this.codigo} — Professor: ${this.professor.nome}`);
    this.alunos.forEach(a => a.apresentar());
  }
}

// Teste
const prof = new Professor("João", 45, "Matemática");
const aluno1 = new Aluno("Ana", 20, "A001", "Engenharia");
const aluno2 = new Aluno("Bruno", 22, "A002", "Engenharia");

aluno1.adicionarNota(9);
aluno1.adicionarNota(8);
aluno2.adicionarNota(7);
aluno2.adicionarNota(6);

const turma = new Turma("T101", prof);
turma.adicionarAluno(aluno1);
turma.adicionarAluno(aluno2);
turma.listarTurma();
