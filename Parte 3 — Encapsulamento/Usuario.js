class Usuario {
  #email;
  #senha;

  constructor(email, senha) {
    this.#email = email;
    this.setSenha(senha);
  }

  setSenha(novaSenha) {
    if (novaSenha.length >= 6) {
      this.#senha = novaSenha;
      console.log("Senha atualizada com sucesso!");
    } else {
      console.log("A senha deve ter ao menos 6 caracteres.");
    }
  }

  autenticar(senhaInformada) {
    if (senhaInformada === this.#senha) {
      console.log("Usuário autenticado com sucesso!");
    } else {
      console.log("Senha incorreta.");
    }
  }
}

// Teste
const usuario = new Usuario("user@email.com", "12345");
usuario.setSenha("abcdef");
usuario.autenticar("abcdef");
usuario.autenticar("12345");
