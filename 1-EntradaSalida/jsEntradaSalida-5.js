/*Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function mostrar()
{	
	var nombre;
    var dato;
    nombre = document.getElementById("elNombre").value;
    dato = document.getElementById("laEdad").value;
alert("usted se llama " + nombre + "y tiene " + dato );
}

