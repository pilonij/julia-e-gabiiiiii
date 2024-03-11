let numeroSecreto =Math.floor(Math.random() * 10);
console.log(numeroSecreto);

let chute = prompt('Escolha um número 0 a 10');

while(chute == ''|| chute == null){
    chute = prompt('Escolha um número 0 a 10');
}

if(numeroSecreto == chute)
    alert('Parabéns, você acertou!!!');

else{
alert('Tenta de novo, você errou');

}