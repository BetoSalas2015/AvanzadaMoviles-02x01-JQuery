function setGetHTML() {
    alert("Antes de cambiar, el contendo es:" + $("#divContent").html());
    $("#divContent").html("El contenido ha cambiado");
    alert("Después de cambiar, el contenido es: " + $("divContent").html());
}