// CLASES

class Mazo {
  constructor(cartas = nuevoMazo()) {
    this.cartas = cartas;
  }
}

class Carta {
  contructor(simbolo, valor) {
    this.simbolo = simbolo;
    this.valor = valor;
  }
}

class Jugador {
  constructor(alias, fichas) {
    this.alias = alias;
    this.fichas = fichas;
  }
}

// VARIABLES - ARRAYS
const simbolos = ["-Corazones", "-Trebol", "-Picas", "-Diamantes"];
const valores = [
  "A",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "J",
  "Q",
  "K",
];
let combinations = [];

const mazo = new Mazo();

let cantMax = 51;

// FUNCIONES PRINCIPALES

function nuevoMazo() {
  simbolos.flatMap((p) =>
    valores.map((e) => combinations.push({ combination: e + p }))
  );
}

function mezclar() {
  combinations.sort(() => Math.random() - 0.5);
  return combinations;
}

function cartaCroupier() {
  let randCard = between(0, cantMax) - 5;
  let manoCroupier = [];
  manoCroupier.push(combinations.splice(randCard, 5));
  cantMax = -5;
  return manoCroupier;
}

function cartaJuadores() {
  let randCard = between(0, cantMax) - 2;
  let manoJugador = [];
  manoJugador.push(combinations.splice(randCard, 2));
  cantMax = -2;
  return manoJugador;
}

// FUNCIONES AUX
function between(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

//Codigo para el formulario,validaciones simples uso de sweet alert.
document.getElementById("form").addEventListener("submit", (e) => {
  e.preventDefault();

  const nombre = document.getElementById("nombre").value.toLowerCase();
  const apellido = document.getElementById("apellido").value.toLowerCase();
  const edad = document.getElementById("edad").value;
  const email = document.getElementById("email").value.toLowerCase();
  const password = document.getElementById("password");
  const divForm = document.getElementById("formRegistro");
  const divInicio = document.getElementById("divInicio");
  const cantidadJugadores = Number(
    document.getElementById("cantidadJugadores").value
  );

  if (
    nombre.value ||
    apellido.value ||
    edad.value ||
    email.value ||
    password.value
  ) {
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Registro Completo",
      showConfirmButton: false,
      timer: 1500,
    });

    divForm.remove();

    const usuario = {
      nombre,
      apellido,
    };

    console.log(usuario);
    console.log(usuario.nombre);
    localStorage.setItem("usuario", JSON.stringify(usuario));

    const nombreInicio = document.createElement("h2");
    const botonSi = document.createElement("button");
    const botonSalir = document.createElement("button");

    nombreInicio.className = "nombreInicio";
    nombreInicio.innerText = `${usuario.nombre} quieres empezar a jugar?`;
    botonSi.innerText = `SI`;
    botonSalir.innerText = `SALIR`;

    divInicio.append(nombreInicio);
    divInicio.append(botonSi);
    divInicio.append(botonSalir);

    botonSalir.onclick = () => {
      window.location.href = "https://github.com/TorresFDev";
    };

    //Comienzo de codigo de juego

    //inicio del juego al tocar el boton SI
    botonSi.onclick = () => {
      mezclar();
      divInicio.remove();

      const jugadoresActivos = [];
      for (i = 0; i < cantidadJugadores; i++) {
        jugadoresActivos.push(new Jugador(`Jugador${i + 1}`, 2000));
        jugadoresActivos[i].manoJugador = cartaJuadores();
        console.log(jugadoresActivos[i].manoJugador);
      }
      console.log(jugadoresActivos);

      console.log("cartaCroupier", cartaCroupier());
    };
  }
});

// VALIDAR
function validarEscaleraColor(jugador) {
    /* 
    EXTRAES CARTAS DE MANOJUGADOR
    ORDENAS LAS CARTAS
    VES QUE SIGAN UN PATRON 1 2 3 4 5
    USAR EXPRESIONES REGEX 
    
    */
}

validarEscaleraColor(jugadoresActivos[0])
