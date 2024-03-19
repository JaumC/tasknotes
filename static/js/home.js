function AbrirM(taskId) {
    var lista = document.getElementById("lista" + taskId);
    var modal = document.getElementById("modal" + taskId);
    modal.style.display = 'flex';
    lista.style.display = 'none';

}

function FecharM(taskId) {
    var modal = document.getElementById("modal" + taskId);
    var lista = document.getElementById("lista" + taskId);
    modal.style.display = 'none';
    lista.style.display = 'flex';

}

function checkIt(id){    
    const checado = document.getElementById("checked" + id);
    const unchecado = document.getElementById("unchecked" + id);
    checado.style.display = 'flex';
    unchecado.style.display = 'none';

}

function uncheckIt(id){    
    const checado = document.getElementById("checked" + id);
    const unchecado = document.getElementById("unchecked" + id);
    checado.style.display = 'none';
    unchecado.style.display = 'flex';
    
}
