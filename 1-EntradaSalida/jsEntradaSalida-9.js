/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
var sueldo;
var resultado;
var calculo;
var calculo2;

sueldo = parseInt(document.getElementById("sueldo").value);
calculo = sueldo * 10 /100;
calculo2 = sueldo + calculo;
resultado = parseInt(document.getElementById("resultado")value + calculo2 );
 
	
}
