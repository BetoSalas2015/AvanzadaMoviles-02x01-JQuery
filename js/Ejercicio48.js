$(document).ready(function() {
    $("#btnHide").click( function() {
        $("p").toggle("slow", function() {
            alert("Llamado desdes de que el elementom se mostró");
        });
    });
});