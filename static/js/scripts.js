function AbrirM(taskId) {
    var task = document.getElementById("taskName" + taskId);
    task.innerText = 'aa';

}

function FecharM(taskId) {
    var modal = document.getElementById("modal" + taskId);
    modal.style.display = 'none';

}

function checkIt(id){    
    const checado = document.getElementById("checked" + id);
    checado.style.display = 'flex';

}

function uncheckIt(id){    
    const checado = document.getElementById("checked" + id);
    checado.style.display = 'none';
    
}
