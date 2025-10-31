class ContaBancaria {
  #saldo;

  constructor() {
    this.#saldo = 0;
  }

  depositar(valor) {
    if (valor > 0) {
      this.#saldo += valor;
      console.log(`Depósito de R$${valor} realizado. Saldo atual: R$${this.#saldo}`);
    } else {
      console.log("Valor inválido para depósito.");
    }
  }

  sacar(valor) {
    if (valor <= 0) {
      console.log("Valor inválido para saque.");
    } else if (valor > this.#saldo) {
      console.log("Saldo insuficiente.");
    } else {
      this.#saldo -= valor;
      console.log(`Saque de R$${valor} realizado. Saldo atual: R$${this.#saldo}`);
    }
  }

  verSaldo() {
    console.log(`Saldo atual: R$${this.#saldo}`);
  }
}


const conta = new ContaBancaria();
conta.depositar(500);
conta.sacar(200);
conta.verSaldo();
conta.sacar(400);
