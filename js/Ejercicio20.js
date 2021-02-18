function divInsertAfter() {
    $("#divInsertAfter").after("<div style= 'color: grey'> Este texto fue insertado con el método after() </div>");

    $("<div style= 'color: green'> Este texto fue insertado con el método insertAfter() </div>").insertAfter($("#divInsertAfter"));
};