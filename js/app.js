


//martes 11 de abril de 2023
//11:35:00
// Array de días de la semana
const daysOfWeek = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];

// Array de meses
const months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

function convertirHora(hora){
    switch(hora){
        case 1:
        case 13:
        return 1
        case 2:
        case 14:
        return 2
        case 3:
        case 15:
        return 3
        case 4:
        case 16:
        return 4
        case 5:
        case 17:
        return 5
        case 6:
        case 18:
        return 6
        case 7:
        case 19:
        return 7
        case 8:
        case 20:
        return 8
        case 9:
        case 21:
        return 9
        case 10:
        case 22:
        return 10
        case 11:
        case 23:
        return 11
        case 12:
        case 00:
        return 12
    }
}

let fechaActual = new Date()

function determinarTurno(){
    if (fechaActual.getHours() > 12){
        return 'PM'
    } else {
        return 'AM'}
}

function obtenerFecha(){
let fechaActual = new Date()
let fecha = document.querySelector('#fecha')
let hora = document.querySelector('#hora')
fecha.innerHTML=`${daysOfWeek[fechaActual.getDay()]} ${fechaActual.getDate()} de ${months[fechaActual.getMonth()]} del ${fechaActual.getFullYear()}`

hora.innerHTML = `${convertirHora(fechaActual.getHours())}:${fechaActual.getMinutes()}:${fechaActual.getSeconds()}:${Math.trunc(fechaActual.getMilliseconds()/100)} ${determinarTurno()} `
}
obtenerFecha()
setInterval(obtenerFecha,100)

  