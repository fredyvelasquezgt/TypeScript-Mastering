let movieTitle: string = "Amadeus";
movieTitle = "Arrival";
movieTitle = 9;
movieTitle.toUpperCase() // busca mi metodo

let numCatLives: number = 9;
numCatLives += 1;
numCatLives = "zero" // no me deja

let gameOver: boolean = false;
gameOver = true;
gameOver = "true" // no me deja

// Type Inference - A veces TS infiere el tipo de datos que estoy usando y no lo tengo que especificar

let tvShow = "Show";
tvShow = "Show2";
tvShow = false;

let isFunny = false;
isFunny = true;
isFunny = "asd";

// The ANY type - no es una buena idea a menos que no haya de otra
//Todos los checks se van. No es recomendado usarlo en todo momento pero a veces me voy a topar con el

let thing: any = "hello";
thing = 1;
thing = false;
thing()

let things = "hello";
thing.saddfdf()


//Caso en donde no necesito fijar un TYPE

const movies = ["1", "2", "3", "4"]
let foundMovie; // es una variable pero no le di ninguna anotacion

for(let movie of movies) {
    if(movie == "1") {
        foundMovie = "1";
    }
}

//Pero el punto de TS es usar el tipado, por eso evito usar el ANY

foundMovie();
foundMovie = 1;
foundMovie.asdf()



