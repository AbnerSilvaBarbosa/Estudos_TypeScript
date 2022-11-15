type TemNome = {nome: string}
type TemSobrenome = {sobrenome: string}
type TemIdade = {idade: number}

type Pessoa = TemNome & TemSobrenome & TemIdade // AND

const pessoa: Pessoa = {
    nome: "Abner",
    idade: 18,
    sobrenome: "Silva"
}

console.log(pessoa)