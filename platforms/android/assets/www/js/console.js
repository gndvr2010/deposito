(function () {
    var old = console.log;

    console.log = function (message) {
        if (typeof message == 'object') {
            $("#texto").val($("#texto").val()+(JSON && JSON.stringify ? JSON.stringify(message) : message));
        } else {
            $("#texto").val($("#texto").val()+message);
        }
    }
})();
