const languages = {
    en: {
        textInput: 'Enter your word',
        buttomText: 'Go!',
        aboutRegularExpression: 'Our regular expression is: a(abUabb)^3',
        historyTittle: 'History',
        spanishOption: 'Spanish',
        englishOption: 'English',
        frenchOption: 'French',
    },
    es: {
        textInput: 'Ingresa tu palabra',
        buttomText: '¡Vamos!',
        aboutRegularExpression: 'Nuestra expresión regular es: a(abUabb)^3',
        historyTittle: 'Historial',
        spanishOption: 'Español',
        englishOption: 'Ingles',
        frenchOption: 'Frances',
    },
    fr: {
        textInput: 'Entrez votre mot',
        buttomText: 'Allons-y!',
        aboutRegularExpression: 'notre expression régulière est: a(abUabb)^3',
        historyTittle: 'Histoire',
        spanishOption: 'Espagnol',
        englishOption: 'Anglais',
        frenchOption: 'Français',
    },
};

function changeLanguage(language) {
    const currentLanguage = languages[language];
    document.getElementById('word-text').placeholder = currentLanguage.textInput;
    document.getElementById('word-button').textContent = currentLanguage.buttomText;
    document.getElementById('English').textContent = currentLanguage.englishOption;
    document.getElementById('Spanish').textContent = currentLanguage.spanishOption;
    document.getElementById('French').textContent = currentLanguage.frenchOption;
    document.getElementById('historyTittle').textContent = currentLanguage.historyTittle;
    document.getElementById('regularExpressionInfo').textContent = currentLanguage.aboutRegularExpression;
}

changeLanguage('en');

selectLanguage = document.getElementById('languanges-select')
selectLanguage.addEventListener('change', function () {
    selectedLanguage = selectLanguage.value;
    changeLanguage(selectedLanguage);
})


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
                }, i * speed);
            })(i);
        }
    }

    function get_speed(){
        const slider = document.getElementById("slider");
        const tiempoSeleccionado = parseFloat(slider.value) * 1000; 
        return tiempoSeleccionado;
    }
});
