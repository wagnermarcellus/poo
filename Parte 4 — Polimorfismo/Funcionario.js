class Funcionario {
  calcularSalario() {
    return 0;
  }
}

class FuncionarioHorista extends Funcionario {
  constructor(valorHora, horasTrabalhadas) {
    super();
    this.valorHora = valorHora;
    this.horasTrabalhadas = horasTrabalhadas;
  }

  calcularSalario() {
    return this.valorHora * this.horasTrabalhadas;
  }
}

class FuncionarioAssalariado extends Funcionario {
  constructor(salarioMensal) {
    super();
    this.salarioMensal = salarioMensal;
  }

  calcularSalario() {
    return this.salarioMensal;
  }
}

// Teste
const funcionarios = [
  new FuncionarioHorista(50, 160),
  new FuncionarioAssalariado(5000),
];

for (const f of funcionarios) {
  console.log(`Salário: R$${f.calcularSalario()}`);
}
