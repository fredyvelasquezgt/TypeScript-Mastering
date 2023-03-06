//Functions parameters

// //no es una regla colocar anotaciones pero es recomendado
// function square(num) { //esta funcion es ANY, no se va a fijar en lo que yo le pase
//     return num * num;
// }


//Esta funcion esta mejor construida
function square (num: number) {
    return num*num;
}

//Esta es otra version mejor construida
// function greet (person: string) {
//     return `Hi there ${person}`
// }

square(3)
greet("Juan")

//Puedo tener varios parametros media vez le ponga su tipado


const doSomething = (person: string, age: number, isFunny: boolean) => {

}

doSomething("Juan", 12, true) //cuando llene aqui me van a salir errores si lo hago mal
//tengo que pasarle los params en el orden correcto

// Trabajando con los parametros default

//asi es como hago que mi funcion tenga un parametro por default
//aqui tambien pongo el tipo de cosa que me va a retonar, esto me ayuda a evitar errores
function greet(person: string = "stranger") : string {
    return `hi there ${person}`
}

//las dos de abajo funcionan porque le puedo pasar nada porque ya tengo 
//algo seteado o solo le paso algo de tipo string
greet()
greet("Tony")

//TS para establecer el tipo de dato que retorna

//le digo que tiene que retornar un numero, es para mi y para otros desarrolladores 
function square2(num: number) : number {
    return num * num
}

square2(2)

//esta funcion puede retornar varios tipos de datos
function rando (num: number) {
    if(Math.random() < 0.5) {
        return num.toString();
    }
    return num;
}

//ejemplo con arrow function - el tipo de return va despues de los parentesis

const add = (x: number, y: number) : number => {
    return x+y;
}

//anonymous functions

const colors = ["red", "orange", "yellow"]

//no tengo que especificar el tipo de datos que es color, porque sabe el contexto del array
colors.map(color => {
    return color.toLowerCase()
})

function blah(color) {
}


//void - se usa mas que todo con functions que no retornan nada
// se usa para decir que una funcion no deberia de retornar nada
// si la funcion retorna algo me va a avisar porque no se supone que haga eso

function printTwite(msg: string) : void {
    console.log(msg)
    console.log(msg)
}

// never - return type for a function
// con never la function no se termina de ejecutar
// se usa para funciones que retornan una expection o que nunca se ejecutan

function makeError(msg: string) : never {
    throw new Error(msg)
}

function gameLoop() : never {
    while(true) {
        console.log("game loop running")
    }

    //return true esto da error
}

