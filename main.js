var nome_user = '';
var mano = document.querySelector('span');

while(nome_Usuario == ''){//|| nome_user == null
nome_user = prompt('Qual é o seu nome?');
}

if(nome_user == null){ // se o nome for null o formulário irá ficar vazio
mano.textContent = 'user';
}else{
mano.textContent = nome_user;

}
