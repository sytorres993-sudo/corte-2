function recompensas(){

let nivel = parseInt(prompt("Ingrese su nivel actual (1-5)"))
let recompensa=0

switch(nivel){
    case 1:
        recompensa=100
    break;
    case 2:
        recompensa=200
    break;
    case 3:
        recompensa=300
    break;
    case 4:
        recompensa=400
    break;
    case 5:
        recompensa=500
    break;
    default:
        alert("Datos invalidos")
        return;
}

document.write("obtuviste"+recompensa+"puntos!")

do{
    document.write("obtuviste"+recompensa+"puntos!");
    contador++
}while (contador<nivel);

}

recompensas();