function mostrar()
{
var precio 
var descuento
precio =prompt("ingrese el precio aqui ");
descuento =prompt("ingrese su descuento aqui ")
document.getElementById("elPrecioFinal").value=precio-(precio*descuento/100)
}
