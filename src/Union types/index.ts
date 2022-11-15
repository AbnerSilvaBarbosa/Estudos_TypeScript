function addOrConcat(a: number | string, b: number | string): number | string  {
    if (typeof (a) === 'number' && typeof (b) === 'number') {
        return a + b;
    }

    if (typeof (a) === 'string' && typeof (b) === 'string') {
        return a + b;
    }

    
    return "É necessário as variaveis serem do mesmo tipo!!!!!";
    
}

console.log(addOrConcat(10, 20))
console.log(addOrConcat('Ola ','Abner'))