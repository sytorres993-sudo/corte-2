function lavadora(){

opcion= prompt("que tipo de lavado le gustaria? a.Rapido b.normal c.pesado d.delicado")

precio=0
duracion=0

switch(opcion){
    case "a":
        duracion=30+"min"
        precio=5
    break;
    case "b":
        duracion=45+"min"
        precio=7
    break;
    case "c":
        duracion=60+"min"
        precio=10
    break;
    case "d":
        duracion=40
        precio=8
    break;
    default:
        alert("Dato invalido")
        return;
}

document.write("seleccionó opcion " + opcion + " la duracion es de " + duracion + " y el precio es de " + precio.toLocaleString("en-US", {style: "currency", currency: "USD"}))

}
lavadora();