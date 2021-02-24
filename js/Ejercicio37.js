function setGetHTML() {
    alert("Antes de cambiar, el contendo es:" + $("#divContent").text());
    $("#divContent").text("El contenido ha cambiado");
    alert("Después de cambiar, el contenido es: " + $("divContent").text());
}