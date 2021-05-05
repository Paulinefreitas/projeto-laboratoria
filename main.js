let quizz = prompt("Gostaria de inicar o Quizz? Responda com sim ou não");
console.log(quizz); 

if (quizz.toLowerCase() == "não") {
    alert("Então tchau!");
  }


// como faz para finalizar o programa?

let nome = prompt("Qual seu nome?");
console.log (nome);
var mensagemNome = document.getElementById("mensagem");
mensagemNome.innerHTML = "Olá, " + nome + "!";

let pergunta1 = prompt("O que você precisa fazer para se prevenir? Digite a letra escolhida: A) Usar máscara e álcool em gel; B) Encontrar os amigos no final de semana e C) Não usar máscara ");
console.log(pergunta1);
if (pergunta1.toUpperCase() == "A") {
    var mensagem1 = document.getElementById("respostacerta");
    mensagem1.innerHTML = "Pergunta 1"
}
else if (pergunta1.toUpperCase() != "A") {
    var mensagem1 = document.getElementById("respostaerrada");
    mensagem1.innerHTML = "Pergunta 1"
}

let pergunta2 = prompt("Qual o tipo de máscara você deve usar? Digite a letra escolhida: A) Máscara de papel; B) Máscara de trico; C) Máscara cirúrgica ou algodão");
console.log(pergunta2);
if (pergunta2.toUpperCase() == "C") {
    var mensagem2 = document.getElementById("respostacerta");
    mensagem2.innerHTML = "Pergunta 2";
}
else if (pergunta2.toUpperCase() != "C") {
    var mensagem2 = document.getElementById("respostaerrada");
    mensagem2.innerHTML = "Pergunta 2";
}
    

let pergunta3 = prompt("Ao perceber que tem sintomas de Covid-19, o que você deve fazer? Digite a letra escolhida: A) Ir ao hospital; B) Perguntar a um amigo qual remédio tomar; C) Pesquisar no Google qual remédio tomar");
console.log(pergunta3);
if (pergunta3.toUpperCase() == "A") {
    var mensagem3 = document.getElementById("respostacerta");
    mensagem3.innerHTML = "Pergunta 3";
}
else if (pergunta3.toUpperCase() != "A") {
    var mensagem3 = document.getElementById("respostaerrada");
    mensagem3.innerHTML = "Pergunta 3"}

alert ("Você concluiu o Quizz! Veja o seu resultado abaixo.");