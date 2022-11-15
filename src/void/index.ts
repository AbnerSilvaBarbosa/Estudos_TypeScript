function semRetorno(...args:string[]) : void {
    console.log(args.join(' '))
}

const pessoa = {
    nome:"abner",
    sobrenome:"silva",

    exibirNome(): void {
        console.log(this.nome + " " + this.sobrenome);
    },
}

//semRetorno('abner','teste')
pessoa.exibirNome();

export {pessoa}