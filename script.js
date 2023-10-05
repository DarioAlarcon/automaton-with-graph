class State {
    constructor(name, isAccepting) {
        this.name = name;
        this.isAccepting = isAccepting;
    }
}

class Transition {
    constructor(fromState, toState, symbol) {
        this.fromState = fromState;
        this.toState = toState;
        this.symbol = symbol;
    }
}

class Automaton {
    constructor(states, transitions, initialState) {
        this.states = states;
        this.transitions = transitions;
        this.currentState = initialState;
    }

    processInput(input) {
        for (var i = 0; i < input.length; i++) {
            const symbol = input[i];
            const transition = this.transitions.find(t => t.fromState === this.currentState && t.symbol === symbol);
            if (!transition) {
                this.currentState=q0
                return false; // Transición no definida
            }
            this.currentState = transition.toState;
        }
        var result= this.currentState.isAccepting;
        this.currentState=q0
         return result;
    }
}


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

const q0  = new State('q0', false);
const q1  = new State('q1', true);
const q2  = new State('q2', false);
const q3  = new State('q3', false);
const q4  = new State('q4', true);
const q5  = new State('q5', false);
const q6  = new State('q6', false);
const q7  = new State('q7', true);
const q8  = new State('q8', false);
const q9  = new State('q9', false);
const q10 = new State('q10', true);
const q11 = new State('q11', true);
const q12 = new State('q12', false);
const q13 = new State('q13', true);
const q14 = new State('q14', false);
const q15 = new State('q15', true);
const q16 = new State('q16', false)

const transitions = [
    new Transition(q0, q1, 'a'),
    new Transition(q1, q2, 'b'),
    new Transition(q2, q3, 'b'),
    new Transition(q3, q4, 'a'),
    new Transition(q4, q5, 'b'),
    new Transition(q5, q6, 'b'),
    new Transition(q6, q7, 'a'),
    new Transition(q7, q8, 'b'),
    new Transition(q8, q9, 'b'),
    new Transition(q9, q10, 'a'),
    new Transition(q2, q11, 'a'),
    new Transition(q11, q12, 'b'),
    new Transition(q12, q13, 'a'),
    new Transition(q13, q14, 'b'),
    new Transition(q14, q15, 'a'),
    new Transition(q5, q13, 'a'),
    new Transition(q12, q6, 'b'),
    new Transition(q8, q15, 'a'),
    new Transition(q14, q9, 'b'),
];

const synth = window.speechSynthesis;
const states = [q0, q1, q2];
const automaton = new Automaton(states, transitions, q0);

//^0
var input1 = 'a'; 
console.log(`La cadena "${input1}" es ${automaton.processInput(input1) ? 'aceptada' : 'rechazada'}`);
//^1
var input1 = 'aba'; 
console.log(`La cadena "${input1}" es ${automaton.processInput(input1) ? 'aceptada' : 'rechazada'}`);
var input2 = 'abba'; 
console.log(`La cadena "${input2}" es ${automaton.processInput(input2) ? 'aceptada' : 'rechazada'}`);
//^2
var input1 = 'ababa'; 
console.log(`La cadena "${input1}" es ${automaton.processInput(input1) ? 'aceptada' : 'rechazada'}`);
var input1 = 'ababba'; 
console.log(`La cadena "${input1}" es ${automaton.processInput(input1) ? 'aceptada' : 'rechazada'}`);
var input1 = 'abbaba'; 
console.log(`La cadena "${input1}" es ${automaton.processInput(input1) ? 'aceptada' : 'rechazada'}`);
var input1 = 'abbabba'; 
console.log(`La cadena "${input1}" es ${automaton.processInput(input1) ? 'aceptada' : 'rechazada'}`);
//^2
var input1 = 'abababa'; 
console.log(`La cadena "${input1}" es ${automaton.processInput(input1) ? 'aceptada' : 'rechazada'}`);
var input1 = 'abababba'; 
console.log(`La cadena "${input1}" es ${automaton.processInput(input1) ? 'aceptada' : 'rechazada'}`);
var input1 = 'ababbaba'; 
console.log(`La cadena "${input1}" es ${automaton.processInput(input1) ? 'aceptada' : 'rechazada'}`);
var input1 = 'ababbabba'; 
console.log(`La cadena "${input1}" es ${automaton.processInput(input1) ? 'aceptada' : 'rechazada'}`);
var input1 = 'abbababa'; 
console.log(`La cadena "${input1}" es ${automaton.processInput(input1) ? 'aceptada' : 'rechazada'}`);
var input1 = 'abbababba'; 
console.log(`La cadena "${input1}" es ${automaton.processInput(input1) ? 'aceptada' : 'rechazada'}`);
var input1 = 'abbabbaba'; 
console.log(`La cadena "${input1}" es ${automaton.processInput(input1) ? 'aceptada' : 'rechazada'}`);
var input1 = 'abbabbabba'; 
console.log(`La cadena "${input1}" es ${automaton.processInput(input1) ? 'aceptada' : 'rechazada'}`);


function speakResult(isValidateWord){
    var text
    if(isValidateWord){
        text = "palabra válida"
    }else{
        text = "palabra rechazada"
    }
    const utterance = new SpeechSynthesisUtterance(text);
    
    utterance.volume = 1; // Volumen (0 a 1)
    utterance.rate = 1;   // Velocidad (0.1 a 10)
    utterance.pitch = 1;  // Tono (0 a 2)
    synth.speak(utterance);
}


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

function createHistoryTileItem(userWord){
    const newParagraph = document.createElement('p');
    newParagraph.classList.add('historial-tile'); // Agrega la clase "historial-tile"
    newParagraph.textContent = userWord;
    return newParagraph;
}

function createHistoryTileSpan(isValidate){
    const newSpan = document.createElement('span');
    if(isValidate){
        newSpan.classList.add('w-validated');
        newSpan.textContent = 'V'
    }else{
        newSpan.classList.add('w-rejected');
        newSpan.textContent = 'R'
    };
    return newSpan;
}

function insertSpanInParagraph(paragraph, span){
    paragraph.appendChild(span);
}

function insertParagraphIntoDOM(paragraph){
    const container = document.getElementById('historial-list'); // Obtén el contenedor donde deseas insertar
    container.appendChild(paragraph);
}

function createHistoryTile(userWord, isValidate){
    var historyTile = createHistoryTileItem(userWord);
    var historyTileSpan = createHistoryTileSpan(isValidate);
    insertSpanInParagraph(historyTile,historyTileSpan);
    insertParagraphIntoDOM(historyTile)
}

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
        console.log(`La cadena "${valorInput}" es ${automaton.processInput(valorInput) ? 'aceptada' : 'rechazada'}`);
        speakResult(automaton.processInput(valorInput))
        createHistoryTile(valorInput,automaton.processInput(valorInput) )
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
