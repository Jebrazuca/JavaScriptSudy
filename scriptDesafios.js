// Desafio 1


var endereco = {
    rua: "Jair Rosa Pinto",
    numero: 31,
    bairro: "Jaragua",
    cidade: "São Paulo",
    uf: "SP"
}


function RetornaValor () {
    return console.log("O usuário mora em " + Object.values(endereco));
}

console.log(RetornaValor());



//desafio 3

var skil = ["JavaScrpit", "ReactJS", "React Native"];


function temHabilidade(x) {
    if (x.indexOf("JavaScript") !== -1) {
        return ("Não Possui esta habilidade!");
    } else {
        return ("Possui esta habilidade!");
    }
}



console.log(temHabilidade(skil));


// Desafio 4

function experiencia(anos) {
    if (anos <= 1) {
        return "Você ainda é Iniciante!";
    } else if ( anos <= 3){
        return "Esta no nível Intermediário!";
    } else if (anos <= 6){
        return "Parabéns, Você tem conhecimento Avançado!";
    } else {
        return "Sensacional, Você é o Jedi Master!!!"
    }
}


var anosdeEstudo = 5;


console.log(experiencia(anosdeEstudo));


// Desafio 5

var usuarios = [
    {
        nome: "Diego",
        habilidades: ["JavaScript", "ReactJS", "Redux"]
    },
    {
        nome: "Gabriel",
        habilidades: ["VueJS", "Ruby on Rails", "Elixir"]
    }
]



function mostrarUsuarios() {
    for (let [k, val] of usuarios) {
        console.log(val[k]);
    }
}

console.log(mostrarUsuarios());