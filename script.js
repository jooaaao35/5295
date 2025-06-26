alert("comando para mostrar um texto na tela");
alert("ele é limitado ao cique no ok pelo usuário");
alert("não é possivel configurar sem tempo de permanencia na tela");

let chute;
let idade;
let nome;

nome = console.log(prompt("digite seu nome:"));


let entrada = prompt("Digite um número inteiro:");
let numero = parselnt(entrada);

if(Number.isInteger(numero)){
    console.log("Obrigado! Você digitou um inteiro.");
} else {
    console.log("Por favor, digite um número inteiro válido");
}