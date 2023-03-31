//Interfaces

//tiene casi el mismo proposito que los type aliases, pero con syntaxis diferente

// las podemos usar para crear tipos modulares reusables que describen la forma de los objetos

//SOLO EN OBJETOS

interface Point {
    x: number,
    y: number
}

const pt: Point = {x:123, y: 1234}


//read only and optional interface properties

interface Person {
    readonly id: number, //el read only hace que no me deje cambiar el valor
    first: string,
    last: string,
    nickname? : string //este es opcional
    sayHi: () => string; // metodo que retorna un string
}

const thomas:Person = {
    first: "Thomas",
     last: "hardy", 
     nickname: "Hardy", 
     id: 12312,
    sayHi: () => {return 'hello'}}

//si intento cambiar los atributos despues no me va a dejar cambiar el id, el resto si
