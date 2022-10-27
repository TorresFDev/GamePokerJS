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

let usuario = prompt("Ingrese Nombre del Jugador")

while(usuario !== "facundo"){
    if (usuario === "facundo"){
        alert("Bienvenido Facundo")
    }else{
        alert("usted no es facundo por favor ingrese su nombre")
        usuario === prompt("Ingrese Nombre del Jugador")
        break
        }
}

const cartas = ["As-Diamantes","2-Diamantes","3-Diamantes","4-Diamantes","5-Diamantes","6-Diamantes","7-Diamantes","8-Diamantes","9-Diamantes","10-Diamantes","J-Diamantes","Q-Diamantes","K-Diamantes","As-Corazones","2-Corazones","3-Corazones","4-Corazones","5-Corazones","6-Corazones","7-Corazones","8-Corazones","9-Corazones","10-Corazones","J-Corazones","Q-Corazones","K-Corazones","As-Picas","2-Picas","3-Picas","4-Picas","5-Picas","6-Picas","7-Picas","8-Picas","9-Picas","10-Picas","J-Picas","Q-Picas","K-Picas","As-Trebol","2-Trebol","3-Trebol","4-Trebol","5-Trebol","6-Trebol","7-Trebol","8-Trebol","9-Trebol","10-Trebol","J-Trebol","Q-Trebol","K-Trebol"]
class Jugador{
    constructor(nombre,apellido,edad,email,genero,alias,fichas){
    this.nombre = nombre
    this.apellido = apellido
    this.edad = edad
    this.email = email
    this.genero = genero
    this.alias = alias
    this.fichas=fichas
}}
const jugador2 = new Jugador ( "pedro", "picapiedra",29, "pepe@gmail.com", "masculino", "pedrito", 1500)
console.log(jugador2)

// function barajarCartas(){
//     cartas.sort(()=> Math.random()- 0.5)
//     return cartas;
//  }
//  const baraja = barajarCartas(cartas)
//  console.log(cartas)

class Croupier{
    constructor(mezclar){
        this.mezclar = mezclar;
    }barajarCartas(){
    cartas.sort(()=> Math.random()- 0.5)
        return cartas;
        }
}
const Croupier1 = new Croupier(cartas)
console.log(Croupier1.barajarCartas())