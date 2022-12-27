/*-------------global variables - variaveis globais--------------------*/
const alt1= document.querySelector("#alternative1");//alternative 1 - alternativa 1 (html element - elemento html)
const alt2= document.querySelector("#alternative2");//alternative 2 - alternativa 2 (html element - elemento html)
const alt3= document.querySelector("#alternative3");//alternative 3 - alternativa 3 (html element - elemento html)
const alt4= document.querySelector("#alternative4");//alternative 4 - alternativa 4 (html element - elemento html)
const title = document.querySelector("#title");//title h1 - título h1 (html element - elemento html)
const score = document.querySelector("#score");//score - pontuação (html element - elemento html)
const counter = document.querySelector("#counter");//counter - contador (html element - elemento html)
const list = document.querySelector("#list");//list - lista (html element - elemento html)
const claps = new Audio('claps.mp3');//audio object hit - objeto de audio - acerto
const fail = new Audio('fail.mp3');//audio object fail - objeto audio - erro
let click=0;//question number - número da questão
let scoreValue=0;//scoreValue - pontos

//database in array format - banco de dados dentro de um array - lenght=21 - tamanho=21
const questions =[
    {
        question: "Quanto é 1 + 1?",
        alternatives: [
            {option: "1", correct: false},
            {option: "2", correct: true},
            {option: "3", correct: false},
            {option: "4", correct: false},
        ]
    },

    {
        question: "Quanto é 2 + 2?",
        alternatives: [
            {option: "1", correct: false},
            {option: "2", correct: false},
            {option: "3", correct: false},
            {option: "4", correct: true},
        ]
    },
    {
        question: "Qual país foi o primeiro a conseguir pisar na lua?",
        alternatives: [
            {option: "Rússia", correct: false},
            {option: "Estados Unidos",correct: true},
            {option:"China",correct: false},
            {option:"Alemanha",correct: false},
        ]
    },
    {
        question: "Qual o menor osso do corpo humano?",
        alternatives: [
            {option: "Estribo", correct: true},
            {option: "Tíbia",correct: false},
            {option:"Femur",correct: false},
            {option:"Martelo",correct: false},
        ]
    },
    {
        question: "Entre as guerras abaixo, qual foi travada apenas entre França e Inglaterra?",
        alternatives: [
            {option: "Guerra da Coreia", correct: false},
            {option: "Primeira guerra mundial",correct: false},
            {option:"Guerra do Vietnã",correct: false},
            {option:"Guerra dos Cem anos",correct: true},
        ]
    },
    {
        question: "O bioma Tundra está presente em qual parte do mundo?",
        alternatives: [
            {option: "Apenas no leste", correct: false},
            {option: "Perto da linha do equador",correct: false},
            {option:"Nos polos",correct:true},
            {option:"Nos trópicos",correct: false},
        ]
    },
    {
        question: "Segundo a segunda lei de Newton, ao multiplicarmos uma massa pela aceleração, obtemos:",
        alternatives: [
            {option: "velocidade", correct: false},
            {option: "gravidade",correct: false},
            {option:"distância",correct:false},
            {option:"força",correct: true},
        ]
    },

    {
        question: "Quem deu início a formação das leis trabalhistas no Brasil?",
        alternatives: [
            {option: "Lula", correct: false},
            {option: "José Sarney",correct: false},
            {option:"Fernando Collor",correct:false},
            {option:"Getúlio Vargas",correct: true},
        ]
    },

    {
        question: "Quantas patas tem um caranguejo que não é deficiente?",
        alternatives: [
            {option: "6", correct: false},
            {option: "10",correct: true},
            {option:"8",correct:false},
            {option:"4",correct: false},
        ]
    },

    {
        question: "Qual é a capital do Belize?",
        alternatives: [
            {option: "Betultucã", correct: false},
            {option: "Lagos",correct: false},
            {option:"Cidade do Belize",correct:false},
            {option:"Belmopã",correct: true},
        ]
    },

    {
        question: "Qual a sigla do carbono na tabela periódica?",
        alternatives: [
            {option: "Ca", correct: false},
            {option: "C",correct: true},
            {option:"Ag",correct:false},
            {option:"Co",correct: false},
        ]
    },
    {
        question: "Quantos dias tem uma novena?",
        alternatives: [
            {option: "90", correct: false},
            {option: "9",correct: true},
            {option:"900",correct:false},
            {option:"19",correct: false},
        ]
    },
    {
        question: "Qual desses países da Ásia tem o maior percentual da população islãmica?",
        alternatives: [
            {option: "Laos", correct: false},
            {option: "Malásia",correct: true},
            {option:"Índia",correct:false},
            {option:"Butão",correct: false},
        ]
    },

    {
        question: "No governo de qual presidente ocorreu o Plano Real?",
        alternatives: [
            {option: "Itamar Franco", correct: true},
            {option: "Fernando Collor",correct: false},
            {option:"Gaspar Dutra",correct:false},
            {option:"Fernando Henrique",correct: false},
        ]
    },

    {
        question: "Como se diz terça-feira em espanhol?",
        alternatives: [
            {option: "Jueves", correct: false},
            {option: "Lunes",correct: false},
            {option:"Martes",correct:true},
            {option:"Miércoles",correct: false},
        ]
    },

    {
        question: "Qual desses tem o maior território?",
        alternatives: [
            {option: "Rep. Dem. Congo", correct: false},
            {option: "Ucrânia",correct: false},
            {option:"Colômbia",correct:false},
            {option:"Cazaquistão",correct: true},
        ]
    },
    {
        question: "Qual desses comandos fecha uma janela no computador?",
        alternatives: [
            {option: "Control+Alt+Del", correct: false},
            {option: "Alt+F4",correct: true},
            {option:"Alt+F5",correct:false},
            {option:"Control+Z",correct: false},
        ]
    },
    {
        question: "O que é comemorado no Brasil, no dia 15 de novembro?",
        alternatives: [
            {option: "Independência", correct: false},
            {option: "Descobrimento",correct: false},
            {option:"Dia da Bandeira",correct:false},
            {option:"Proclamação da República",correct: true},
        ]
    },

    {
        question: "Carlos e Maria têm 5 filhos. Lala, Lelê, Lili, Lola e...",
        alternatives: [
            {option: "Malu", correct: false},
            {option: "João",correct: true},
            {option:"Maria II",correct:false},
            {option:"Lulu",correct: false},
        ]
    },
    {
        question: "Como se escreve 367 em algarismos romanos?",
        alternatives: [
            {option: "CCIL", correct: false},
            {option: "CCCLXVII",correct: true},
            {option:"DCLXVII",correct:false},
            {option:"CCCLIX",correct: false},
        ]
    },

    {
        question: "A história é divida em antes e depois de:",
        alternatives: [
            {option: "Jesus Cristo", correct: true},
            {option: "Newton",correct: false},
            {option:"Sócrates",correct:false},
            {option:"Platão",correct: false},
        ]
    },
]
//inicial screen - para a tela inicial
nextQuestion();
renderScore();

//onclick in alternatives check which right or wrong - ao clicar checa se foi a alternativa certa ou errada
function quote(id){
    var text;
    var state;
    switch (id){
        case "alternative1":
            text = questions[click].alternatives[0];
        break;
        case "alternative2":
            text = questions[click].alternatives[1];
        break;
        case "alternative3":
            text = questions[click].alternatives[2];
        break;
        case "alternative4":
            text = questions[click].alternatives[3];
        break;
    }
    state = text.correct;
    check(state,id);
}

//check function - função para checar se uma alternativa é certa ou errada
function check(state){
    if(state==true){
        scoreValue++;
        claps.play();
    }else{
        fail.play();
    }
    renderScore();
    finished();
}

//nextquestion function - renderizar próxima questão na tela
function nextQuestion(){
    title.innerText = questions[click].question;
    alt1.innerText = questions[click].alternatives[0].option;
    alt2.innerText = questions[click].alternatives[1].option;
    alt3.innerText = questions[click].alternatives[2].option;
    alt4.innerText = questions[click].alternatives[3].option;
}

//renderscore function - renderiza a pontuação e em qual questão está
function renderScore(){
    score.innerText = `Pontos: ${scoreValue}`;
    counter.innerText = `${click}/${questions.length}`;   
}

//check if the quiz were finished - checa se já chegou ao final
function finished(){
    if(click>=questions.length){
        list.style.display = 'none';
        title.innerText = "Reiniciar";
        title.style.cursor = "pointer";
        renderScore();
        title.addEventListener("click", ()=>{
            document.location.reload(true);
        })
    }else{
        nextQuestion();
        renderScore();
    }
}

//hear if it clicked - fica ouvindo para ver se algumas alternativa foi clicada
list.addEventListener("click", (element)=>{
    quote(element.target.id);
    click++;
    finished();
})