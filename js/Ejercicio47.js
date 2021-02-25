$(document).ready(function() {
    $("#btnShow").click( function() {
        $("p").show("slow", function() {
            alert("Llamado desdes de que el elementom se mostró");
        });
    });
});