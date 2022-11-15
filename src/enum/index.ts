enum Cores{
    Vermelho, // 0
    Azul, // 1
    Amarelo // 2
}

console.log(Cores.Vermelho) // valor
console.log(Cores[0]) // atributo

enum Cores2{
    Vermelho = 100, // 100
    Azul = 10, // 10
    Amarelo = 20 // 20
}

console.log(Cores2[100])