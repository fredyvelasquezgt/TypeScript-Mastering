//Esto es un objeto normal

const dog = {
    name: "Elton",
    breed: "beagle",
    age: 0.5
}

//Puedo tipar un objecto para una funcion
// que tipo de objecto espera la funcion


//esta funcion espera un objecto y le paso el tipado del objeto
function printName(person: {first: string, last: string}) : void {
    console.log(`${person.first} ${person.last}`)
}

printName({first: "Juan", last: "Garcia"})