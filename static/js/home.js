function direito(event, id) {
    var modal = document.getElementById('rightClick' + id);
    event.preventDefault();
    var x = event.clientX;
    var y = event.clientY;

    var notasElement = document.getElementById('lista' + id);
    var notasRect = notasElement.getBoundingClientRect();
    var notasBottom = notasRect.bottom + window.scrollY;

    modal.style.display = 'flex';
    modal.style.left = (x - 100) + 'px';
    modal.style.top = notasBottom + 'px';

    document.addEventListener('mousedown', function fecharModal(e) {
        if (!modal.contains(e.target)) {
            modal.style.display = 'none';
            document.removeEventListener('mousedown', fecharModal);
        }
    });
}

function AbrirM(taskId) {
    var lista = document.getElementById("lista" + taskId);
    var modal = document.getElementById("modal" + taskId);
    var click = document.getElementById('rightClick' + taskId);
    modal.style.display = 'flex';
    lista.style.display = 'none';
    click.style.display = 'none';

    document.addEventListener('mousedown', function fecharModal(e) {
        if (!modal.contains(e.target)) {
            modal.style.display = 'none';
            lista.style.display = 'flex';
            document.removeEventListener('mousedown', fecharModal);
        }
    });

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