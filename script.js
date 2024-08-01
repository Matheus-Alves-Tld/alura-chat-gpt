const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Assim que saiu do trabalho você se depara com uma pessoa que não conhece, e nunca viu na vida. Essa pessoa te pede para ir até a casa dela ajudá-la. Qual sua resposta?",
        alternativas: [
            {
                texto: "Sim, eu posso ir com prazer!",
                afirmacao: "No começo ficou um pouco receoso, mas mudou de ideia e decidiu ir até a casa dela ajudá-la."
            },
            {
                texto: "Não te conheço, mas posso ajudar!",
                afirmacao: "Vai por compaixão e empatia pelo próximo."
            }
        ]
    },
    {
        enunciado: "Você vai até a casa dessa pessoa para ajudar e quando chega vê uma pessoa deitada no chão desmaiada, o que você faz?",
        alternativas: [
            {
                texto: "Você chama a ambulância e espera até a chegada dela para encaminhá-la até o hospital.",
                afirmacao: "A ambulância chegou rápido e conseguiu levá-la para o hospital."
            },
            {
                texto: "Você coloca essa pessoa dentro do carro e leva ela até o hospital.",
                afirmacao: "Apesar da dificulade no começo, você conseguiu colocar ela no carro e foi a caminho do hospital."
            }
        ]
    },
    {
        enunciado: "A pessoa acorda no meio do caminho e pergunta quem é você? O que aconteceu?",
        alternativas: [
            {
                texto: "Você se apresenta com calma.",
                afirmacao: "Demonstra calma no momento e tranquiliza a pessoa."
            },
            {
                texto: "Demonstra desespero por a pessoa acordar.",
                afirmacao: "Você fica sem reação ao ver a pessoa acordar, e diz que ela desmaiou e chegando no hospital explicaria."
            }
        ]
    },
    {
        enunciado: "Você leva ela até o hospital, e depois ela pergunta o que aconteceu?",
        alternativas: [
            {
                texto: "Você fala o que realmente aconteceu.",
                afirmacao: "Ela desmaiou por conta da pressão."
            },
            {
                texto: "Você decide não preocupar a pessoa, e diz algo mais tranquilo.",
                afirmacao: "Você diz se preocupar muito com ela, então ameniza a situação"
            }
        ]
    },
    {
        enunciado: "Alguns anos se passam, e vocẽs se conhecem melhor, então você decide criar coragem e chama ela pra sair, pois quer lhe contar algo importante",
        alternativas: [
            {
                texto: "Você leva ela em um jardim de flores, e apesar do receio pergunta se ela quer se casar com você.",
                afirmacao: "Ela aceita viver uma vida ao lado dele."
            },
            {
                texto: "Você leva ela em um restaurante, e apesar do receio pergunta se ela quer se casar com você.",
                afirmacao: "Ela recusa, porém diz que quer te conhecer melhor antes de aceitar essa proposta."
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "O rumo da história foi...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
