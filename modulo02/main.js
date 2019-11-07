// Exercicio 01
var btnElement = document.querySelector('button');

/* btnElement.onclick = function() {
    var quadrado = document.createElement('div');
    quadrado.style.width = '100px';
    quadrado.style.height = '100px';
    quadrado.style.backgroundColor = '#c00';
    document.querySelector('body').appendChild(quadrado);
    // E02
    quadrado.onmouseover = function() {
        var newColor = getRandomColor();
        quadrado.style.backgroundColor = newColor;
    }
} */

// Exercicio 02
function getRandomColor() {
    var letters = "0123456789ABCDEF";
    var color = "#";
    for(i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() *16)];
    }
    return color;
}

// Exercicio 03
var ul = document.querySelector('ul');
var nomes = ["Diego", "Gabriel", "Lucas"];
for(nome of nomes) {
    var li = document.createElement('li');
    var liText = document.createTextNode(nome);
    li.appendChild(liText);
    ul.appendChild(li);
}

// Exercicio 04
var input = document.querySelector('input[name=nome]');
btnElement.onclick = function() {
    var nome = input.value;
    nomes.push(nome);
    render();
    input.value = '';
}

function render() {
    ul.innerHTML = '';
    for(nome of nomes) {
        var li = document.createElement('li');
        var liText = document.createTextNode(nome);
        li.appendChild(liText);
        ul.appendChild(li);
    }
}