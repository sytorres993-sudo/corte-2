function departamento(){
departamentos= prompt("Que departamento necesita? a.Facturación b.Technical c.Ventas d.Quejas")

opcion=0
contacto=0

switch(departamentos){
    case "a":
        contacto= "+"+57+"_"+315+"_"+688+"_"+9752
        opcion="Facturación"
    break;
    case "b":
        contacto= "+"+57+"_"+398+"_"+985+"_"+1263
        opcion="Technical"
    break;
    case "c":
        contacto= "+"+57+"_"+398+"_"+975+"_"+6573
        opcion="Ventas"
    break;
    case "d":
        contacto= "+"+57+"_"+397+"_"+824+"_"+9617
        opcion="Quejas"
    break;
    default:
        alert("Dato invalido")
    return;
}
document.write("Eligió el departamento "+opcion+" comuniquese con este numero "+contacto)
} 
departamento();