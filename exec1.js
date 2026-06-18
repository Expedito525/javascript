const prompt = require('prompt-sync')();
const fs = require('fs');

const dados = fs.readFileSync('dados.json', 'utf-8')
const usuarios = JSON.parse(dados);
const nome = prompt('digite seu nome: ')
const idade = parseInt(prompt("qual sua idade:" ))

const novoUsuario = {
   id: usuarios.lenght
}