var tasks = [];
var tagLista = document.getElementById('lista');
const btn = document.getElementById('btn');

btn.addEventListener('click', function(){
    var input = document.getElementById('input').value;
    tasks.push(input);
    mostra(input);
});

mostra = (_input) => {
    tagLista.innerHTML = '';
    for(let i = 0; i<tasks.length;i++){
        tagLista.innerHTML += `<li id="${tasks[i]}"> ${_input}<button onClick="elimina(${tasks[i]})">X</button> </lì>`
    }
    
};


elimina = (indice) => {
    tasks.splice(indice,1);
    mostra();
}






