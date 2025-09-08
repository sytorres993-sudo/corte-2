function boletas(){
tipos=prompt("Que tipo de boleta quiere? a.General b.VIP c.Platinum d.Niño")
precio=0
tipo=0

switch(tipos){
    case "a":
        precio=20
        tipo="General"
    break;
    case "b":
        precio=50
        tipo="VIP"
    break;
    case "c":
        precio=100
        tipo="Platinum"
    break;
    case "d":
        precio=10
        tipo="Niño"
    break;
    default:
        alert("Dato invalido")
    return;
}

document.write("elegiste la boleta de "+tipo+" el precio a pagar es de "+precio.toLocaleString("en-US", {style:"currency", currency:"USD"}))
}
boletas();