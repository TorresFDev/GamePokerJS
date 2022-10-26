let usuario = prompt("Ingrese Nombre del Jugador")

while(usuario !== "facundo"){
    if (usuario === "facundo"){
        alert("Bienvenido Facundo")
    }else{
        alert("usted no es facundo por favor ingrese su nombre")
        usuario === prompt("Ingrese Nombre del Jugador")}
}


const cartas = ["As-Diamantes","2-Diamantes","3-Diamantes","4-Diamantes","5-Diamantes","6-Diamantes","7-Diamantes","8-Diamantes","9-Diamantes","10-Diamantes","J-Diamantes","Q-Diamantes","K-Diamantes","As-Corazones","2-Corazones","3-Corazones","4-Corazones","5-Corazones","6-Corazones","7-Corazones","8-Corazones","9-Corazones","10-Corazones","J-Corazones","Q-Corazones","K-Corazones","As-Picas","2-Picas","3-Picas","4-Picas","5-Picas","6-Picas","7-Picas","8-Picas","9-Picas","10-Picas","J-Picas","Q-Picas","K-Picas","As-Trebol","2-Trebol","3-Trebol","4-Trebol","5-Trebol","6-Trebol","7-Trebol","8-Trebol","9-Trebol","10-Trebol","J-Trebol","Q-Trebol","K-Trebol"]

function barajarCartas(){
    cartas.sort(()=> Math.random()- 0.5)
    return cartas;
 }
 const baraja = barajarCartas(cartas)
 console.log(cartas)

function cartasAleatorias(cartas) {
    for (let i = 0; i <= 1; i++) {
        let seleccionarCarta = Math.floor(Math.random() * cartas.length);
        console.log(cartas[seleccionarCarta]);
    }
}
cartasAleatorias(cartas)



