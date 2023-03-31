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
    nickname? : string, //este es opcional
    //sayHi: () => string; // metodo que retorna un string
    sayHi(): string;
}

const thomas:Person = {
    first: "Thomas",
     last: "hardy", 
     nickname: "Hardy", 
     id: 12312,
    sayHi: () => {return 'hello'}}

//si intento cambiar los atributos despues no me va a dejar cambiar el id, el resto si

interface Product {
    name: string,
    price: number,
    applyDiscount(discount: number):number;
}

const shoes: Product = {
    name: 'BLue Suede Shoes',
    price: 100,
    applyDiscount(amount: number) {
        const newPrice =  this.price * (1-amount)
        this.price = newPrice;
        return this.price;
    }
}

interface Dog {
    name: string,
    age:number
}


interface Dog {
    breed: string,
    bark() :string;
}

const elton : Dog = {
    name: 'elton',
    age : 0.5,
    breed : 'beagle',
    bark() {
        return "woof!"
    }
}