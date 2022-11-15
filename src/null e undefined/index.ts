export let x:any;

if(typeof x === 'undefined'){
    x = 20
    console.log(x * 2)
}

function createPerson(firstName: string, lastName?: string) :{
    // type anotacion
    firstName: string;
    lastName?: string;

}{
    //body of function
    return{
        firstName,
        lastName
    }
}
