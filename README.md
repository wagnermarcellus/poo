# poo-exercicios-js
Lista de Exercícios — Programação Orientada a Objetos (POO)
Lista de Exercícios — Programação Orientada a Objetos (POO)
Tema: Classe, Herança, Encapsulamento e Polimorfismo · Linguagem: JavaScript

🔹 Parte 1 — Classe e Objeto
Crie uma classe Carro com os atributos marca, modelo e ano.
Adicione o método descrever() que imprime no console: “Este carro é um Toyota Corolla de 2022”.
Instancie dois objetos diferentes e teste o método.
Crie uma classe Produto com os atributos nome, preco e estoque.
Implemente os métodos vender(quantidade) e repor(quantidade) para alterar o estoque.
Teste os métodos simulando uma venda e uma reposição.
🔹 Parte 2 — Herança
Crie uma classe Pessoa com os atributos nome e idade e o método cumprimentar().
Crie uma classe Aluno que herda de Pessoa e adiciona o atributo curso.
Sobrescreva o método cumprimentar() para incluir o curso na saudação.
Crie uma classe Animal com o método emitirSom().
Crie subclasses Cachorro e Gato, cada uma sobrescrevendo o método com sons diferentes.
Crie um array de animais e chame emitirSom() para todos — observe o polimorfismo.
🔹 Parte 3 — Encapsulamento
Crie uma classe ContaBancaria com o atributo privado #saldo.
Implemente métodos depositar(valor), sacar(valor) e verSaldo().
Teste depósitos e saques inválidos (valores negativos ou saldo insuficiente).
Crie uma classe Usuario com atributos privados #senha e #email.
Adicione métodos setSenha(novaSenha) e autenticar(senhaInformada).
Garanta que a senha tenha ao menos 6 caracteres antes de ser aceita.
🔹 Parte 4 — Polimorfismo
Crie uma classe Funcionario com o método calcularSalario().
Crie subclasses FuncionarioHorista e FuncionarioAssalariado que implementem o método de forma distinta.
Crie um array com diferentes funcionários e mostre o salário de cada um.
Crie uma classe Forma com o método calcularArea().
Crie subclasses Quadrado, Retangulo e Circulo, cada uma com seu cálculo próprio.
Crie um array de formas e exiba a área de cada uma.
🔹 Parte 5 — Integração dos Conceitos
Desafio Final: Crie um mini-sistema de gestão de alunos com as classes:

Pessoa — nome, idade
Aluno — herda de Pessoa, adiciona matrícula, curso e notas[]
Professor — herda de Pessoa, adiciona disciplina
Turma — código, alunos[], professor
Regras:

A classe Aluno deve permitir adicionar notas e calcular média.
Use encapsulamento para proteger as notas.
Implemente polimorfismo no método apresentar() (comportamento diferente para Aluno e Professor).
🎯 Capacidade
Aplicar linguagem de programação por meio do ambiente integrado de desenvolvimento (IDE), desenvolvendo soluções orientadas a objetos com foco em clareza, modularidade e reutilização de código.

📦 Entrega da Atividade
Todos os exercícios e códigos devem ser:

Organizados e comentados em arquivos .js individuais.
Publicados em um repositório público no GitHub.
O link do repositório deve ser enviado ao professor via AVA.
💡 Sugestão: Nomeie o repositório como poo-exercicios-js para manter o padrão.



poo-exercicios-js/
│
├── parte1/
│   ├── Carro.js
│   └── Produto.js
│
├── parte2/
│   ├── PessoaAluno.js
│   └── Animal.js
│
├── parte3/
│   ├── ContaBancaria.js
│   └── Usuario.js
│
├── parte4/
│   ├── Funcionario.js
│   └── Forma.js
│
└── parte5/
    └── SistemaAlunos.js

