import {person} from "./interface"

export class Pessoa implements person{

    constructor(nome:string , idade:number){
        this.nome = nome,
        this.idade = idade

    }

    nome: string
    idade: number

    getNome(): string {
        return this.nome
    }

    getIdade(): number {
        return this.idade
        
    }

}