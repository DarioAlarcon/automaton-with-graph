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
                return false; 
            }
            this.currentState = transition.toState;
            console.log(symbol)
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
    new Transition("q0",  "q1",  'a'),
    new Transition("q1",  "q2",  'b'),
    new Transition("q2",  "q3",  'b'),
    new Transition("q3",  "q4",  'a'),
    new Transition("q4",  "q5",  'b'),
    new Transition("q5",  "q6",  'b'),
    new Transition("q6",  "q7",  'a'),
    new Transition("q7",  "q8",  'b'),
    new Transition("q8",  "q9",  'b'),
    new Transition("q9",  "q10", 'a'),
    new Transition("q2",  "q11", 'a'),
    new Transition("q11", "q12", 'b'),
    new Transition("q12", "q13", 'a'),
    new Transition("q13", "q14", 'b'),
    new Transition("q14", "q15", 'a'),
    new Transition("q5",  "q13", 'a'),
    new Transition("q12", "q6",  'b'),
    new Transition("q8",  "q15", 'a'),
    new Transition("q14", "q9",  'b'),
];

const states = [q0, q1, q2, q3, q4, q5, q6,q7,q8,q9,q10,q11,q12,q13,q14,q15,q16];
const initialState = states.find((state) => state.name === "q0");
const automaton = new Automaton(states, transitions, initialState);
function speakResult(isValidateWord){
    const synth = window.speechSynthesis;
    var text
    if(isValidateWord){
        text = "palabra válida"
    }else{
        text = "palabra rechazada"
    }
    const utterance = new SpeechSynthesisUtterance(text);
    
    utterance.volume = 1; 
    utterance.rate = 1;   
    utterance.pitch = 1;  
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
    newParagraph.classList.add('historial-tile'); 
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
    const container = document.getElementById('historial-list');
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
        processString(valorInput);
    });

    async function processString(wordToValidate) {
        automaton.currentState = initialState; 
        for (let index = 0; index < wordToValidate.length; index++) {
          const symbolSpan = document.getElementById('symbol-checking')
          const symbolOrderSpan = document.getElementById('symbol-checking-number')
          const symbol = wordToValidate[index];
          const symbolOrder = index + 1;
          const transition = automaton.transitions.find(
            (t) => t.fromState === automaton.currentState.name && t.symbol === symbol
          );
          showCurrentNodeGraph(automaton.currentState.name)
          
          //currentStateElement.innerText = automaton.currentState.name;
          await sleep(get_speed());
          symbolSpan.innerText = symbol;
          symbolOrderSpan.innerText = symbolOrder;
          if (transition) {
            //transitionElement.innerText = `${automaton.currentState.name} -> ${transition.toState}`;
            //currentStateElement.innerText = transition.toState;
            automaton.currentState = states.find(
              (state) => state.name === transition.toState
              );
            showCurrentNodeGraph(automaton.currentState.name)
          } else {
            //transitionElement.innerText = '';
            automaton.currentState = initialState; // Si no hay transición, regresamos al estado inicial
          }
      
          await sleep(get_speed());
      
          if (!transition) {
            //console.log(`La cadena "${wordToValidate}" es rechazada`);
            speakResult(false);
            createHistoryTile(wordToValidate, false);
            return;
          }
        }
      
        console.log(
          `La cadena "${wordToValidate}" es ${
            automaton.currentState.isAccepting ? "aceptada" : "rechazada"
          }`
        );
        
        speakResult(automaton.currentState.isAccepting);
        createHistoryTile(wordToValidate, automaton.currentState.isAccepting);
        
    }

    
    function get_speed(){
        const slider = document.getElementById("slider");
        const tiempoSeleccionado = parseFloat(slider.value) * 1000; 
        return tiempoSeleccionado;
    }
});

function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}


// Importa la biblioteca GoJS
//const go = require('gojs');

// Crea un objeto Diagram
const $ = go.GraphObject.make;

const myDiagram = $(go.Diagram, "myDiagram", {
    initialContentAlignment: go.Spot.Center,
    "undoManager.isEnabled": true
});

// Define un nodo con una propiedad de texto
myDiagram.nodeTemplate =
    $(go.Node, "Auto",
        new go.Binding("location", "loc", go.Point.parse).makeTwoWay(go.Point.stringify),
        $(go.Shape, "Circle", 
            { width: 30, height: 30, strokeWidth: 2 },
            {  fill:  "white" },
            new go.Binding("stroke", "color"),
            new go.Binding("fill", "isSelected", (s, obj) => s ? "#BEAEE2" : "white").ofObject()
            ),
        $(go.TextBlock,  // Vincula el TextBlock a la propiedad "name" del nodo
            { margin: 10 },  // Ajusta el margen para que el texto no se superponga al borde del nodo
            new go.Binding("text", "name")  // Vincula la propiedad "name" del nodo al texto del TextBlock
        )
    );

// Añade tres nodos al grafo con textos diferentes
myDiagram.model.addNodeData({ key: "_",  name: "" , color: "transparent", loc: "-1100 -10" });
myDiagram.model.addNodeData({ key: "q0",  name: "q0" , color: "purple", loc: "-1030 -10" });
myDiagram.model.addNodeData({ key: "q1",  name: "q1" , color: "red",   loc: "-960 -10"  });
myDiagram.model.addNodeData({ key: "q2",  name: "q2" , color: "purple", loc: "-890 -10"  });
myDiagram.model.addNodeData({ key: "q3",  name: "q3" , color: "purple", loc: "-820 -10"  });
myDiagram.model.addNodeData({ key: "q4",  name: "q4" , color: "red",   loc: "-750 -10"  });
myDiagram.model.addNodeData({ key: "q5",  name: "q5" , color: "purple", loc: "-680 -10"  });
myDiagram.model.addNodeData({ key: "q6",  name: "q6" , color: "purple", loc: "-610 -10"  });
myDiagram.model.addNodeData({ key: "q7",  name: "q7" , color: "red",   loc: "-540 -10"  });
myDiagram.model.addNodeData({ key: "q8",  name: "q8" , color: "purple", loc: "-470 -10"  });
myDiagram.model.addNodeData({ key: "q9",  name: "q9" , color: "purple", loc: "-400 -10"  });
myDiagram.model.addNodeData({ key: "q10", name: "q10", color: "red",   loc: "-330 -10"     });
myDiagram.model.addNodeData({ key: "q11", name: "q11", color: "red",   loc: "-855 50"   });
myDiagram.model.addNodeData({ key: "q12", name: "q12", color: "purple", loc: "-785 100"  });
myDiagram.model.addNodeData({ key: "q13", name: "q13", color: "red",   loc: "-715 150"  });
myDiagram.model.addNodeData({ key: "q14", name: "q14", color: "purple", loc: "-645 200"  });
myDiagram.model.addNodeData({ key: "q15", name: "q15", color: "red",   loc: "-575 250"  });
// Define un enlace
myDiagram.linkTemplate =
    $(go.Link,
        $(go.Shape, { stroke: "grey" }),
        $(go.Shape, { toArrow: "Standard" }),
        $(go.Panel, "Auto",  // visual hint that the user can do something with this link label
          $(go.Shape,  // the label background, which becomes transparent around the edges
            {
              fill: $(go.Brush, "Radial",
                { 0: "rgb(240, 240, 240)", 0.3: "rgb(240, 240, 240)", 1: "rgba(240, 240, 240, 0)" }),
              stroke: null
            }),
          $(go.TextBlock, "",  // the label text
            {
              textAlign: "center",
              font: "10pt helvetica, arial, sans-serif",
              stroke: "black",
              margin: 4, // editing the text automatically updates the model data
            },
            new go.Binding("text", "text").makeTwoWay()),
          // The GraphObject.segmentOffset property is what the LinkLabelDraggingTool modifies.
          // This TwoWay binding saves any changes to the same named property on the link data.
          new go.Binding("segmentOffset", "segmentOffset", go.Point.parse).makeTwoWay(go.Point.stringify)
        )
            
    );

// Añade enlaces al grafo
myDiagram.model.addLinkData({ from: "_",  to: "q0"  });
myDiagram.model.addLinkData({ from: "q0",  to: "q1"  , text: "a"});
myDiagram.model.addLinkData({ from: "q1",  to: "q2"  , text: "b"});
myDiagram.model.addLinkData({ from: "q2",  to: "q3"  , text: "b"});
myDiagram.model.addLinkData({ from: "q3",  to: "q4"  , text: "a"});
myDiagram.model.addLinkData({ from: "q4",  to: "q5"  , text: "b"});
myDiagram.model.addLinkData({ from: "q5",  to: "q6"  , text: "b"});
myDiagram.model.addLinkData({ from: "q6",  to: "q7"  , text: "a"});
myDiagram.model.addLinkData({ from: "q7",  to: "q8"  , text: "b"});
myDiagram.model.addLinkData({ from: "q8",  to: "q9"  , text: "b"});
myDiagram.model.addLinkData({ from: "q9",  to: "q10" , text: "a"});
myDiagram.model.addLinkData({ from: "q2",  to: "q11" , text: "a"});
myDiagram.model.addLinkData({ from: "q11", to: "q12" , text: "b"});
myDiagram.model.addLinkData({ from: "q12", to: "q13" , text: "a"});
myDiagram.model.addLinkData({ from: "q13", to: "q14" , text: "b"});
myDiagram.model.addLinkData({ from: "q14", to: "q15" , text: "a"});
myDiagram.model.addLinkData({ from: "q12", to: "q6"  , text: "b"});
myDiagram.model.addLinkData({ from: "q5",  to: "q13" , text: "a"});
myDiagram.model.addLinkData({ from: "q14", to: "q9"  , text: "b"});
myDiagram.model.addLinkData({ from: "q8",  to: "q15" , text: "a"});




async function showCurrentNodeGraph(key){
    const currentNode = myDiagram.findNodeForKey(key);
    currentNode.isSelected = true
    await sleep(1000)
    currentNode.isSelected = false
}