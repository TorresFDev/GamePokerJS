// let usuario = prompt("Ingrese Nombre del Jugador")

// while(usuario !== "facundo"){
//     if (usuario === "facundo"){
//         alert("Bienvenido Facundo")
//     }else{
//         alert("usted no es facundo por favor ingrese su nombre")
//         usuario === prompt("Ingrese Nombre del Jugador")
//         break
//         }
// }


// const cartas = ["As-Diamantes","2-Diamantes","3-Diamantes","4-Diamantes","5-Diamantes","6-Diamantes","7-Diamantes","8-Diamantes","9-Diamantes","10-Diamantes","J-Diamantes","Q-Diamantes","K-Diamantes","As-Corazones","2-Corazones","3-Corazones","4-Corazones","5-Corazones","6-Corazones","7-Corazones","8-Corazones","9-Corazones","10-Corazones","J-Corazones","Q-Corazones","K-Corazones","As-Picas","2-Picas","3-Picas","4-Picas","5-Picas","6-Picas","7-Picas","8-Picas","9-Picas","10-Picas","J-Picas","Q-Picas","K-Picas","As-Trebol","2-Trebol","3-Trebol","4-Trebol","5-Trebol","6-Trebol","7-Trebol","8-Trebol","9-Trebol","10-Trebol","J-Trebol","Q-Trebol","K-Trebol"]

// function barajarCartas(){
//     cartas.sort(()=> Math.random()- 0.5)
//     return cartas;
//  }
//  const baraja = barajarCartas(cartas)
//  console.log(cartas)

// function cartasAleatorias(cartas) {
//     for (let i = 0; i <= 1; i++) {
//         let seleccionarCarta = Math.floor(Math.random() * cartas.length);
//         console.log(`${usuario } tiene: ${cartas[seleccionarCarta]}`);
//     }
// }
// cartasAleatorias(cartas)

// function croupier(cartas) {
//     for (let i = 0; i <= 4; i++) {
//         let seleccionarCarta = Math.floor(Math.random() * cartas.length);
//         console.log("el croupier a sacado las siguienttes cartas : " + cartas[seleccionarCarta]);
//     }
// }
// croupier(cartas)

// let usuario = prompt("Ingrese Nombre del Jugador")

// while(usuario !== "facundo"){
//     if (usuario === "facundo"){
//         alert("Bienvenido Facundo")
//     }else{
//         alert("usted no es facundo por favor ingrese su nombre")
//         usuario === prompt("Ingrese Nombre del Jugador")
//         break
//         }
// }

// const cartas = ["As-Diamantes","2-Diamantes","3-Diamantes","4-Diamantes","5-Diamantes","6-Diamantes","7-Diamantes","8-Diamantes","9-Diamantes","10-Diamantes","J-Diamantes","Q-Diamantes","K-Diamantes","As-Corazones","2-Corazones","3-Corazones","4-Corazones","5-Corazones","6-Corazones","7-Corazones","8-Corazones","9-Corazones","10-Corazones","J-Corazones","Q-Corazones","K-Corazones","As-Picas","2-Picas","3-Picas","4-Picas","5-Picas","6-Picas","7-Picas","8-Picas","9-Picas","10-Picas","J-Picas","Q-Picas","K-Picas","As-Trebol","2-Trebol","3-Trebol","4-Trebol","5-Trebol","6-Trebol","7-Trebol","8-Trebol","9-Trebol","10-Trebol","J-Trebol","Q-Trebol","K-Trebol"]
// class Jugador{
    //     constructor(nombre,apellido,edad,email,genero,alias,fichas){
        //     this.nombre = nombre
        //     this.apellido = apellido
        //     this.edad = edad
        //     this.email = email
        //     this.genero = genero
        //     this.alias = alias
        //     this.fichas=fichas
        // }}
        // const jugador2 = new Jugador ( "pedro", "picapiedra",29, "pepe@gmail.com", "masculino", "pedrito", 1500)
        // console.log(jugador2)
        
        
        // class Mazo{
            //     constructor(cartas){
                //         this.cartas = cartas;
                //     }
                
                //     barajarCartas(){
                    //     cartas.sort(()=> Math.random()- 0.5)
                    //         return cartas;
                    //     }

                    //     repartir(cartas) {
                        //     for (let i = 0; i <= 4; i++) {
                            //     let seleccionarCarta = Math.floor(Math.random() * cartas.length);
                            //     console.log("el croupier a sacado las siguienttes cartas : " + cartas[seleccionarCarta]);
                            //     }
                            //     }
                            // }
                            
                            
                            // const Mazo1 = new Mazo(cartas)
                            // console.log(Mazo1.barajarCartas())
                            
document.getElementById('form').addEventListener('submit', (e) => {
    e.preventDefault();
 
 
const nombre = document.getElementById('nombre').value.toLowerCase();
const apellido = document.getElementById('apellido').value.toLowerCase();
const edad = document.getElementById('edad').value;
const email = document.getElementById('email').value.toLowerCase();
const password = document.getElementById('password');
 
const expReg = /^\s+$/;
const expRegEmail =  !(/^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/.test(email));
 
    if(nombre == "" || nombre.lenght == 0 || nombre.lenght < 6 || expReg.test(nombre)){
        Swal.fire({
            position: 'center',
            icon: 'error',
            title: 'El campo nombre no es valido',
            showConfirmButton: false,
            timer: 1000
          })
        document.getElementById('nombre')
        return false;
    }
 
    else if(apellido == "" || apellido.lenght == 0 || expReg.test(apellido)){
        Swal.fire({
            position: 'center',
            icon: 'error',
            title: 'El campo apellido no es valido',
            showConfirmButton: false,
            timer: 1000
          })
        document.getElementById('apellido')
        return false;
    }
    else if (edad == "" || edad== 0 || isNaN(edad) ){
        Swal.fire({
            position: 'center',
            icon: 'error',
            title: 'El campo edad no es valido.',
            showConfirmButton: false,
            timer: 1000
          })
        document.getElementById('edad')
        return false;
    }
    else if(expRegEmail){
        Swal.fire({
            position: 'center',
            icon: 'error',
            title: 'El campo email no es valido',
            showConfirmButton: false,
            timer: 1000
          })
        document.getElementById('email')
        return false;
    }
    else{
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Se ha registrado con EXITO',
            showConfirmButton: false,
            timer: 1500
          })
        document.getElementById('nombre').value="";
        document.getElementById('apellido').value="";
        document.getElementById('edad').value="";
        document.getElementById('email').value="";
        document.getElementById('password').value="";
    }
    })


const simbolos = ["-Corazones", "-Trebol", "-Picas", "-Diamantes"]
const valores = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"]
const combinations = []

class Mazo {
    constructor(cartas = nuevoMazo()){
    this.cartas=cartas}
}

class Carta{
    contructor(simbolo,valor){
        this.simbolo = simbolo
        this.valor = valor
    }
}

class Jugador{
    constructor(nombre,apellido,alias,fichas){
    this.nombre= nombre
    this.apellido= apellido
    this.alias= alias
    this.fichas = fichas
    }
}

const jugador1 = new Jugador( "Pedro", "Picapiedras", "Pedrito", 2000)
console.log(jugador1)




function mezclar(){
    combinations.sort(()=> Math.random()- 0.5)
    return combinations
}

function nuevoMazo(){
    simbolos.flatMap(p =>
        valores.map(e=>combinations.push({combination: e + p})))
}

const mazo = new Mazo()
console.log (mezclar())


function cartaJuadores(){
   manoJugador = combinations.slice(1,3)
   return (manoJugador)
}

function cartaCroupier(){
    manoCroupier = combinations.slice(8,13)
    return (manoCroupier)
}

console.log(cartaJuadores())
console.log(cartaCroupier())

function empezarJuego(){

}


