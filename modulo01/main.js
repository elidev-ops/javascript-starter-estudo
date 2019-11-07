// Exercicio 01
var endereco = {
    rua: "Rua dos pinheiros",  
    numero: 1293,  
    bairro: "Centro",  
    cidade: "São Paulo",  
    uf: "SP"
};

console.log('O usuário mora em '+endereco.bairro+' / '+endereco.uf+', no bairro '+endereco.bairro+', na rua '+endereco.rua+' comnº '+endereco.numero+'.');

// Exercicio 02
function pares(x, y) {
    if(x % 2 === 0) {
        return x;
    } else if(y % 2 ==0) {
        return y;
    }
}

console.log(pares(32, 321));

// Exercicio 03
var skills = [
    "Javascript", 
    "ReactJS", 
    "React Native"
];

function temHabilidade(skill) {
    var pos = skill.indexOf('Javascript');
    if(pos >= 0) {
        return true;
    } else {
        return false;
    }
}

console.log(temHabilidade(skills));

function experiencia(anos) {
    switch (anos) {
        case 1:
            return 'Iniciante'
            break;
        case 3:
            return 'Intermediario'
            break;
        case 6:
            return 'Avancado'
            break;
        case 7:
            return 'Master'
            break;
        default:
            break;
    }
}

var anosEstudos = 7;
console.log(experiencia(anosEstudos));

// Exercicio 05
var usuarios = [  
    {    
        nome: "Diego",    
        habilidades: ["Javascript", "ReactJS", "Redux"]  
    },  
    {    
        nome: "Gabriel",    
        habilidades: ["VueJS", "Ruby on Rails", "Elixir"]  
    }
];

for(usuario of usuarios) {
    console.log('O '+usuario.nome + ' possui as habilidades: ' +usuario.habilidades.join(", "));
}