type Idade = number;

type CorRGB = 'Vermelho' | 'Verde' |'Azul'

type Pessoa = {
    name:string,
    age:Idade,
    salario:number,
    corPreferida? : CorRGB
}

let abner:Pessoa = {
    name:"abner",
    age:12,
    salario: 2000,
    corPreferida: 'Azul'
}

console.log(abner)

function testeTipo(pessoa : Pessoa, cor : CorRGB){
    console.log(pessoa.name)
    console.log(cor)
}


export default 1
