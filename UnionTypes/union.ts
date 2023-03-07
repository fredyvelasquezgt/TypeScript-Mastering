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