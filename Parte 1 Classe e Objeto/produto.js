class Produto {
  constructor(nome, preco, estoque) {
    this.nome = nome;
    this.preco = preco;
    this.estoque = estoque;
  }

  vender(quantidade) {
    if (quantidade <= 0) {
      console.log("Quantidade inválida para venda.");
    } else if (quantidade > this.estoque) {
      console.log("Estoque insuficiente.");
    } else {
      this.estoque -= quantidade;
      console.log(`Venda realizada. Estoque atual: ${this.estoque}`);
    }
  }

  repor(quantidade) {
    if (quantidade > 0) {
      this.estoque += quantidade;
      console.log(`Estoque atualizado: ${this.estoque}`);
    } else {
      console.log("Quantidade inválida para reposição.");
    }
  }
}

const produto = new Produto("Mouse", 100, 10);
produto.vender(3);
produto.repor(5);