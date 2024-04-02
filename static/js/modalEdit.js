function edit(taskId) {
    const lista = document.getElementById("lista" + taskId);
    const modalEdit = document.getElementById("modalEdit" + taskId);
    const rightClick = document.getElementById('rightClick' + taskId);

    modalEdit.style.display = 'flex';
    lista.style.display = 'none';
    rightClick.style.display = 'none';

    document.addEventListener('mousedown', function fecharModal(e) {
        if (!modalEdit.contains(e.target)) {
            modalEdit.style.display = 'none';
            lista.style.display = 'flex';
            document.removeEventListener('mousedown', fecharModal);
        }
    });
}