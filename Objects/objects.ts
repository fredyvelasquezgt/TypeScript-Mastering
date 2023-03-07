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



// let coordinate : {x: number , y: number} = {x: 34, y: 2}

// function randomCoordinate() : {x: number, y: number} {
//     return {x: Math.random() , y: Math.random()};
// }

//printName({first: "Juan" , last: "Jagger" , age: 473})

//Create Type Aliases

// es una forma de reusar un type y darle nombre

// let point : {x: number , y: number} = {x: 34, y: 2}

// function randomCoordinate() : Point {
//     return {x: Math.random() , y: Math.random()};
// }

// function doublePoint (point: Point): Point{
//     return {x: point.x * 2 , y: point.y * 2 }
// }

// //si quiero crear un type:

// type Point = {
//     x: number,
//     y: number;
// }

type MyNum = number;
let age : MyNum = 23423;

// nested objects

type Song = {
    title: string, 
    artist: string, 
    numStreams: number, 
    credits: 
        {producer:string, 
        writer:string}
}

function calculatePayout (song: Song) : number {
    return song.numStreams * 0.033
}

function printSong(song: Song) : void {
    console.log(`${song.title}`)
}

//esto lo puedo pasar de tipo Song
const mySong: Song = {
    title: "Imaginandote",
    artist : "DY, Reykon",
    numStreams : 123124,
    credits: {
        producer: "Mosty",
        writer: "Bull Nene"
    }
}

//cuando llamo la funcion le tengo que pasar segun el tipado que defini antes
calculatePayout(mySong)

//optional properties

//de momento solo he pedido cosas NECESARIAS, TS se queja si no le paso lo que me pide

let point : {x: number , y: number} = {x: 34, y: 2}

function randomCoordinate() : Point {
    return {x: Math.random() , y: Math.random()};
}

function doublePoint (point: Point): Point{
    return {x: point.x * 2 , y: point.y * 2 }
}

//si quiero crear un type:

type Point = {
    x: number,
    y: number,
    z? : number //esto hace que sea opcional
}

const myPoint : Point = {x:1 , y: 2} // no se queja porque z es opcional