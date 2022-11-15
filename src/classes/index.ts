type Colaborador = string[]

export class Empresa {
    constructor(nome: string){
        this.nome = nome
    }

    public readonly nome:string
    private readonly colaboradores:Colaborador = []

    public getNome() : string{
        return this.nome
    }

    public setColaboradores(colaboradores:Colaborador) : void{
        this.colaboradores.push(...colaboradores)

    }

    public getColaboradores() : Colaborador{
        return this.colaboradores
    }


    
}

let array : Colaborador = ['Microsoft','Google','Amazon']

const empresa1 = new Empresa('NOT')
empresa1.setColaboradores(array)

console.log(empresa1.getColaboradores())

