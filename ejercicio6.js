function planes(){
plan= prompt("Que plan desea adquirir? a.Básico b.Intermedio c.Premium")
velocidad=0
precio=0
VariaPlanes=0

switch(plan){
    case "a":
        velocidad=10+"MB"
        precio=15
        VariaPlanes="Básico"
    break;
    case "b":
        velocidad=50+"MB"
        precio=30
        VariaPlanes="Intermedio"
    break;
    case "c":
        velocidad=100+"MB"
        precio=50
        VariaPlanes="Premium"
    break;
    default:
        alert("Datos invalidos")
    return;
}
document.write("Elegiste el plan "+VariaPlanes+" con velocidad de "+velocidad+" y un precio de "+precio.toLocaleString("en-US", {style:"currency", currency:"USD"}))
}
planes ();