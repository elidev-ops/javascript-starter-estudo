// Exercicio 01
function checarIdade(idade) {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            if(idade >= 18) {
                resolve();
            } else {
                reject();
            }
        }, 2000);
    });
}

checarIdade(20)
    .then(function() {
        console.log('Maior que 18');
    })
    .catch(function() {
        console.log('Menor que 18');
    });

// Exercicio 02-03
var ul = document.querySelector('ul');
var user = document.querySelector('input[name=user]');
var btn = document.querySelector('button');

var buscarUser = function(user) {
    return new Promise(function(resolve, reject) {
        ul.innerHTML = '';
        loading();
        var xhr = new XMLHttpRequest();
        xhr.open('GET', 'https://api.github.com/users/'+user+'/repos');
        xhr.send(null);
        xhr.onreadystatechange = function() {
            if(xhr.readyState === 4) {
                if(xhr.status === 200) {
                    ul.innerHTML = '';
                    resolve(JSON.parse(xhr.responseText));
                    loading(false);
                } else {
                    ul.innerHTML = '';
                    reject('Usuários não cadastrado');
                    loading(false);
                }
            }
        }
    });
}

function loading(val = true) {
    var carregando = document.createElement('span');
    carregando.appendChild(document.createTextNode('Carregando...'));
    var load = document.querySelector('span');
    if(val === true) {
        ul.appendChild(carregando);
    } else {
        load.remove();
    }
}

function loadList(response) {
    for(repo of response) {
        var li = document.createElement('li');
        var liText = document.createTextNode(repo.name);
        li.appendChild(liText);
        ul.appendChild(li);
    }
}


btn.onclick = function() {
buscarUser(user.value)
    .then(function(response) {
        loadList(response);
    })
    .catch(function(error) {
        ul.appendChild(document.createTextNode(error));
    });
    user.value = '';
}
