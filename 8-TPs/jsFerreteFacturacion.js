/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
	var precio1
    var precio2
    var precio3
    var suma
    var PrecioFinal
    precio1 =parseInt(document.getElementById("PrecioUno").value);
    precio2 =parseInt(document.getElementById("PrecioDos").value);
    precio3 =parseInt(document.getElementById("PrecioTres").value);
    suma = precio1 + precio2 +precio3;
    alert("Su suma es "+ suma);


}
function Promedio () 
{   var precio1
    var precio2
    var precio3
    var promedio
	precio1 =parseInt(document.getElementById("PrecioUno").value);
    precio2 =parseInt(document.getElementById("PrecioDos").value);
    precio3 =parseInt(document.getElementById("PrecioTres").value);
    promedio = (precio1 + precio2 + precio3)/3
    alert("Su promedio es "+ promedio);
}
function PrecioFinal () 
{
    var precio1
    var precio2
    var precio3
    var preciofinal;
    precio1 =parseInt(document.getElementById("PrecioUno").value);
    precio2 =parseInt(document.getElementById("PrecioDos").value);
    precio3 =parseInt(document.getElementById("PrecioTres").value);
    preciofinal = (precio1 + precio2 + precio3)*1.21;
    alert("Su precio final es " + preciofinal);
}