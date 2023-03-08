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