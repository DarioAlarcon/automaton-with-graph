document.addEventListener("DOMContentLoaded", function() {
    boton = document.getElementById("word-button");
    var input = document.getElementById("word-text");
    
    boton.addEventListener("click", function() {
        var valorInput = input.value;
        var expression = document.getElementById("word-checking")
        expression.innerText = valorInput
        input.value = ""
        print_letter(valorInput)
    });

    function print_letter(wordToValidate) {
        var speed = get_speed()
        for (var i = 0; i < wordToValidate.length; i++) {
            (function(index) {
                setTimeout(function() {
                    var letra = wordToValidate[index];
                    var symbol = document.getElementById("symbol-checking")
                    symbol.innerText = letra;
                }, i * speed); // Cambia el valor "100" para ajustar la velocidad de escritura
            })(i);
        }
    }

    function get_speed(){
        const slider = document.getElementById("slider");
        const tiempoSeleccionado = parseFloat(slider.value) * 1000; // Convierte a milisegundos
        return tiempoSeleccionado;
    }
});
