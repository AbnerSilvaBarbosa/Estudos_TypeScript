const dadosCliente: [number,string] = [1,'Abner'];
const dadosCliente1: [number,string,string?] = [1,'Abner','Silva'];
const dadosCliente2: [number,string,...number[]] = [1,'Abner'];

// so pode ser lido, não é possuivel alterar os seus valores
const dadosCliente3: readonly [number,string] = [1,'Abner'];

dadosCliente[0] = 100
dadosCliente[1] = 'Rogerio'

console.log(dadosCliente)

// readonly array
const array: ReadonlyArray<string> = ['Abner','Silva']