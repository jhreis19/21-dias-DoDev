let nome = ""
let idade = 0
let altura = 0
let peso = 0

nome = prompt("digite seu nome")
idade = parseInt(prompt("digite sua idade"))
altura = parseInt(prompt("digite sua altura"))
peso = parseInt(prompt("digite seu peso"))

let anoNasc = 0
anoNasc = 2023 - idade

let imc
imc = peso / (altura * altura)

console.log("Olá " + nome + ", você tem" + idade + "anos, nasceu em " + anoNasc + ", tem " + altura + " de altura, pesa " + peso + "kg e seu IMC é " + imc + "kg/m²")