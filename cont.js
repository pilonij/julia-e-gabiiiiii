const botoes = document.querySelectorAll('.objetivos');
console.log(botoes.length);



for(let i = 0; i<botoes.length;i++) {

console.log(i);
botoes[i].classList.add('ativo');
//botoes[0].classList.remove('ativo');
}



