import {Usuario} as './Usuarios.js';

type Palabra = string;
type pista = string;
type Postulacion = [Palabra, pista];

function generarNumeroAleatorioUnico(): number {
    const timestamp = Date.now(); // Obtener la marca de tiempo actual en milisegundos
    const aleatorio = Math.floor(Math.random() * 1000000); // Generar un número aleatorio entre 0 y 999999
    const numeroUnico = timestamp + aleatorio; // Combinar la marca de tiempo con el número aleatorio
    return numeroUnico;
}

class Partida{
    
    // Propiedades generales
    ID: number;

    // Propiedades temporales
    Palabra: Palabra;
    Postula: Postulacion;
    CantLetras: number;
    Postulante: Usuario;
    Adivinadores: Usuario[];


    
    // Constructor de la clase
    constructor(EligePalabra: Usuario ,Adivinadores: Usuario[]) {
        this.Postulante = EligePalabra;
        this.CantLetras = 0;
        this.Adivinadores = Adivinadores;
        this.ID = generarNumeroAleatorioUnico();
    }

    setPalabra(p : Palabra){
        this.Palabra = p;
    }

    addLetra(){
        this.CantLetras++;
    }

    getLetra(posicion : number):string{
        // Verificar si la posición es válida
        if (posicion < 0 || posicion >= this.Palabra.length) {
            return null; // Devuelve null si la posición está fuera de rango
        }

        return this.Palabra.charAt(posicion); // Devuelve la letra en la posición especificada

    }


}
