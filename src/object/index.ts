const objetoA: {
    chaveA: string,
    chaveB: string,
    chaveC?: string,
    [key: string] : unknown;
} = {
    chaveA: "Valor A",
    chaveB: "Valor B", 
}

objetoA.chaveC = "Nova chave";


console.log(objetoA)