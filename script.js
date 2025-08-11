const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Você está saindo de um show de rock e ouve falar sobre uma IA que compõe músicas automaticamente. O que você pensa?",
        alternativas: [
            {
                texto: "Isso vai acabar com a alma do rock!",
                afirmacao: "Você decide montar uma banda underground para manter vivo o espírito do rock clássico."
            },
            {
                texto: "Isso pode ser uma revolução na música!",
                afirmacao: "Você começa a criar faixas misturando IA com riffs de guitarra e ganha destaque no YouTube."
            }
        ]
    },
    {
        enunciado: "Um dragão aparece no palco durante o festival Rock in Code. Ele oferece a você um pendrive com a IA mais poderosa já criada. O que você faz?",
        alternativas: [
            {
                texto: "Aceita com orgulho e promete usá-la apenas para o bem.",
                afirmacao: "Agora você é conhecido como 'O Guardião Digital do Rock'."
            },
            {
                texto: "Recusa, pois acredita que o verdadeiro poder está na criatividade humana.",
                afirmacao: "Você se torna uma lenda do rock por manter a música 100% autêntica e manual."
            }
        ]
    },
    {
        enunciado: "Um colega de banda usou IA para escrever toda a nova letra. E agora?",
        alternativas: [
            {
                texto: "Deixa pra lá, o som ficou animal!",
                afirmacao: "A música vira hit, mas a banda se divide entre arte e tecnologia."
            },
            {
                texto: "Decide reescrever a letra com a alma de um verdadeiro roqueiro.",
                afirmacao: "A nova versão conquista os corações dos fãs raiz do rock'n roll."
            }
        ]
    }
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

function mostraAlternativas() {
    for (const alternativa of perguntaAtual.alternativas) {
        const botao = document.createElement("button");
        botao.textContent = alternativa.texto;
        botao.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botao);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    historiaFinal += opcaoSelecionada.afirmacao + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "🧨 Final da sua jornada rockeira:";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
