const botoes = document.querySelectorAll('.objetivos');
const textos = document.querySelectorAll('.aba-conteudo');




for (let i = 0; i < botoes.length; i++) {

    console.log(i);
    botoes[i].onclick = function () {
        for (let j = 0; j < botoes.length; j++) {
            botoes[j].classList.remove('ativo');
            textos[j].classList.remove('ativa');
        }
        botoes[i].classList.add('ativo');
        textos[i].classList.add('ativa');
    }
}
const contadores = document.querySelectorAll('.contador');
let tempoAtual = new Date();
let tempoObjetivo1 = new Date ('2024-04-19T00:00:00');
let tempoFinal = tempoObjetivo1 - tempoAtual;
let segundos = tempoFinal/1000;
let minutos = segundos/60;
let horas = minutos/60;
let dias = horas/24;

contadores[0].textContent = dias +"dias" + horas + "horas" + minutos + "minutos" + segundos + "segundos";



