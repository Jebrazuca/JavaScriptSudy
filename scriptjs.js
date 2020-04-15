
/*
var nome = "Jefferson";
var idade = 15;
var peso = 92.6;
var humano = true;

var alunos = ["Gabriel", "Douglas", "Michael"];

var aluno = {
    nome: "Jamal",
    idade: 6,
    peso: 22.5,
}
*/

/*

// Testes de Funções e Condicionais

function CalculoMedia(nota1, nota2, nota3, nota4) {
    var media = (nota1 + nota2 + nota3 + nota4) / 4;

    if (media >= 7) {
        return "Aprovado";
    } else if (media >= 5) {
        return "Recuperação"
    } else {
        return "Reprovado"
    } 
    

}

    function RetornaSexo(sexo) {
        switch(sexo) {
            case "M":
                return "Masculino";
            case "F":
                return "Feminino";
            default:
                return "Outro";
        }
    }

var sexo = RetornaSexo("Fasdasf");
var media = CalculoMedia(6, 6, 7, 6);

console.log(media)
console.log(sexo)
*/

// Exemplo de Condições Ternarias, Condição simples na mesma linha

var sexo = "M";

var retorno = (sexo === "M") ? "Masculino" : "Feminino";


console.log(retorno);


// Mostrando funcionamento do TimeOut e setInterval
/*
function MostrarAlgo() {
    console.log("Mostrando alguma coisa.")
}

function MostrandoOutraCoisa() {
    console.log("Tempo Expirado")
}
setInterval(MostrarAlgo, 2000);
setTimeout(MostrandoOutraCoisa, 5000);
*/


function mostraAlerta() {
    alert("Botão foi clicado!!!")
}

// Trabalhando com a DOM

var inputElement = document.querySelector("input[id=nome]");
var bntElement = document.querySelector("button");

    bntElement.onclick = function() {
        var text = inputElement.value;
        alert(text);
    }


    // Alterando e criando pelo JS estrutura do HTML e CSS

    var linkElement = document.createElement('a');
    linkElement.setAttribute('href', 'https://www.youtube.com/?gl=BR&hl=pt');
    linkElement.setAttribute('tittle', "Jeff's Site");

    var textElement = document.createTextNode("Acessar ao Site agora!");
    linkElement.appendChild(textElement);

    var containerElement = document.querySelector('#app');
    containerElement.appendChild(linkElement);

    var inputElement = document.querySelector('#nome');
    //containerElement.removeChild(inputElement);


    // Exemplo CSS no JS
    var boxElement = document.querySelector('.box');

    boxElement.style.width = 100;
    boxElement.style.height = 100;
    boxElement.style.backgroundColor = '#f999';