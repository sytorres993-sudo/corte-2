function descuentosDias(){

dia = prompt("Que dia de la semana comprará? lunes-domingo").toLowerCase();
descuento=0

switch(dia){
    case "lunes":
        dia="Lunes"
        descuento="10%"
    break;
    case "miercoles":
        dia="miercoles"
        descuento="15%"
    break;
    case "viernes":
        dia="Viernes"
        descuento="20%"
    break;
    default:
        dia=(dia)
        descuento="sin descuento"
    break;
}
document.write("elegiste el dia "+dia+" el descuento es= "+descuento)
}
descuentosDias();