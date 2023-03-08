//Tuples - Como un array pero mas estricto en cuanto a su capacidad
//estan fijas en su capacidad y en su tipo
const stuffff : string[] = ["as" , "asd", "as"]

//forma correcta de crear un tuple, tengo que seguir el orden: 
const color: [number, number, number] = [255, 0 , 255];

//usar multiples tipos, aqui el orden si importa:

//creo una tupla que almacena el formato de una request
type HTTPResponse = [number, string];

const goodRes: HTTPResponse = [200, "OK"]
//goodRes[0] = "200"; no puedo hacer esto

//las tuplas no me deniegan el permiso de hacer push despues de la declaracion

goodRes.push(123)

//las tuplas casi no se usan tanto pero es buena saberlas


// {
//     code: 200,
//     msg: "OK"
// }

//puedo hacer un array de http responses - lo de abajo es un array de tuples
const responses: HTTPResponse[] = [[404, "not found"], [200, "OK"]]



//ENUMS

//me permiten definir un set de constantes con nombre
//a las constantes les podemos pasar un valor numero o strings

//estos son los 4 estados que acepto, me ahorra tener varias variables
//puedo usar mi set por todo mi codigo y asi re utilizar
// enum OrderStatus {
//     PENDING,
//     SHIPPED,
//     DELIVERED,
//     RETURNED
// }

// const myStatus = OrderStatus.DELIVERED;

// function isDelivered(status: OrderStatus) {
//     return status === OrderStatus.DELIVERED
// }

// isDelivered(OrderStatus.RETURNED)

//puedo asignar un valor a mis constantes
enum OrderStatus {
    PENDING,
    SHIPPED,
    DELIVERED,
    RETURNED
}

const myStatus = OrderStatus.DELIVERED;

function isDelivered(status: OrderStatus) {
    return status === OrderStatus.DELIVERED
}

isDelivered(OrderStatus.RETURNED)

enum ArrowKeys {
    UP = "up",
    DOWN = "down",
    LEFT = "left",
    RIGTH= "rigth"
}

