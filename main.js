                    
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


