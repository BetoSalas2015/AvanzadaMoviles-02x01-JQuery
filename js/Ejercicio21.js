function divInsertBefore() {
    $("#divInsertBefore").before("<div style= 'color: grey'> Este texto fue insertado con el método before() </div>");

    $("<div style= 'color: green'> Este texto fue insertado con el método insertBefore() </div>").insertBefore($("#divInsertBefore"));
};