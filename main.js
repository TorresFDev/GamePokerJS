//Codigo para el formulario,validaciones simples uso de sweet alert.
document.getElementById('form').addEventListener('submit', (e) => {
    e.preventDefault();
    
    
    const nombre = document.getElementById('nombre').value.toLowerCase();
    const apellido = document.getElementById('apellido').value.toLowerCase();
    const edad = document.getElementById('edad').value;
    const email = document.getElementById('email').value.toLowerCase();
    const password = document.getElementById('password');
    const divForm = document.getElementById('formRegistro');
    const divInicio = document.getElementById('divInicio');

        

        if(nombre.value || apellido.value || edad.value || email.value || password.value)
        
            Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Registro Completo',
            showConfirmButton: false,
            timer: 1500
            })

            {const usuario = {
                nombre: nombre.value,
                apellido: apellido.value,
            }
            
            localStorage.setItem('usuario', JSON.stringify(usuario))



                divForm.remove()
                
                const nombreInicio = document.createElement('h2')
                const botonSi = document.createElement ('button')
                const botonSalir = document.createElement ('button')
                
                
                nombreInicio.className = 'nombreInicio'
                nombreInicio.innerText=`${usuario.nombre} quieres empezar a jugar?` 
                botonSi.innerText=`SI`
                botonSalir.innerText=`SALIR`
                
                divInicio.append(nombreInicio)
                divInicio.append(botonSi)
                divInicio.append(botonSalir)
                

//Comienzo de codigo de juego

const simbolos = ["-Corazones", "-Trebol", "-Picas", "-Diamantes"]
const valores = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"]
const combinations = []


botonSalir.onclick=() => {
    window.location.href="https://github.com/TorresFDev"
}

//inicio del juego al tocar el boton SI
botonSi.onclick = () =>{
            
    class Mazo {
        constructor(cartas = nuevoMazo()){
            this.cartas=cartas}
        }

    class Carta{
        contructor(simbolo,valor){
            this.simbolo = simbolo
            this.valor = valor
        }}

    class Jugador{
        constructor(nombre,apellido,alias,fichas){
            this.nombre= nombre
            this.apellido= apellido
            this.alias= alias
            this.fichas = fichas
        }}

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

    function cartaCroupier(){
        manoCroupier = combinations.slice(8,13)
        return (manoCroupier)
            }

        console.log(cartaCroupier())
            
        divInicio.remove()


    function cartaJuadores(){
        manoJugador = combinations.slice(1,3)
        return (manoJugador)}
        
        console.log(cartaJuadores())
}
}}

)
