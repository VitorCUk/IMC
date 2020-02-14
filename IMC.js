/* Desafios para fortalecer alguns conceitos, entre eles:

Variáveis;
Condicionais;
Operadores. /*

/* Cálculo de IMC
Crie um programa para calcular o IMC e nível de obesidade de uma pessoa.

Comece criando constantes para armazenar o nome, peso, altura e sexo de uma pessoa, por exemplo: */


var nome = "Vitor"
var peso = 83
var altura = 1.70

/* A partir desses dados armazene em uma constante chamada imc o cálculo do índice de massa corporal definido pela fórmula abaixo: */

var imc = peso / (altura * altura);
console.log(imc)
    /* resultado - 28.719723183391007 */

/*  Baseado no valor obtido através desse cálculo exiba as seguintes mensagens:

SE o IMC maior ou igual a 30: Carlos você está acima do peso;
SE o IMC menor que 29.9: Carlos você não está acima do peso; */

if (imc > 30) {
    console.log(`${nome}, está a cima do peso`)
} else {
    console.log(`${nome}, está a baixo do peso`)
}