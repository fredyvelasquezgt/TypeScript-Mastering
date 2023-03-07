//Type Arrays

//aqui declaro un type de array vacio, si agrego algo me va a dar error
//const activeUsers: [] = []

//abajo solo puedo agregar strings en mi array
const activeUsers: string[]  = []
activeUsers.push("Tony")

//este array solo soporta numeros
const ageList: number[] = [45, 12, 12]

//otro forma de hacer tipado

const bools: Array<boolean> = []
const boos: boolean[] = []

//no solo puedo trabajar con tipos primitivos

type Points = {
    x: number,
    y: number
}

const coords : Points[] = []
coords.push({x: 23, y:43})


//multidimensional arrays

//2d array
const board: string[][] = [["X", "O" ,"X"], ["X", "O" ,"X"], ["X", "O" ,"X"]]
