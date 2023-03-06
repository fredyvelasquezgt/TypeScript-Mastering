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
function greet (person: string) {
    return `Hi there ${person}`
}

square(3)
greet("Juan")

//Puedo tener varios parametros

const doSomething = (person: string, age: number, isFunny: boolean) => {

}

doSomething("Juan", 12, true) //cuando llene aqui me van a salir errores si lo hago mal


// Trabajando con los parametros default
