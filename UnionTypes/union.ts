// Union Types

//me ayuda a espeficiar si algo acepta una cosa o la otra
//puedo darle a un valor muchos tipos

//let age1: number = 25;

//con el union puedo hacer las siguients cosas:
let age1: number | string | boolean = 21;
age1 = 23;
age1 = "24";

type Point2 = {
    x: number,
    y: number
};

type Loc = {
    lat: number,
    long: number
};

let coordinates: Point2 | Loc = {x: 1, y: 2};
coordinates = {lat: 323, long: 312}

//Union Type with functions

//function que acepta algunos parametros de type number o string
function printAge (age: number | string) : void{
    console.log(`you are ${age} years old`)
}

//function que tiene union types para un parametro o parametros en el que solo se trabaje con un tipo
//uso typeof para saber el tipo de dato que estoy manejando

function calculateTax(price: number | string, tax: number) {
    if(typeof price === "string") {
        price = parseFloat(price.replace("$", ""))
    } 
    return price * tax
}

//creo un array vacio
//const stuff: any[] = [1,2,3,4, true, "hola"]

//array con union types
const stuff: (number | string)[] = [1,2,3, "das"]

const coordss: (Point2 | Loc )[] = []

//Literal Types

let zero: 0 = 0;

//me permite restringir lo que puede o no ser una variable

let mood: "Happy" | "Sad" = "Happy";
mood = "Sad";


type DayOfWeek = "Monday" | "Tuesday" | "Wednesday" | "Thursday";

let today : DayOfWeek = "Monday";

