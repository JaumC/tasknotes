function edit(taskId) {
    const lista = document.getElementById("lista" + taskId);
    const modalEdit = document.getElementById("modalEdit" + taskId);
    const rightClick = document.getElementById('rightClick' + taskId);
    const inputEdit = document.getElementById("inputEdit" + taskId);

    //Abertura/Fechamento dos modals
    modalEdit.style.display = 'flex';
    lista.style.display = 'none';
    rightClick.style.display = 'none';

    //Para transferir o foco para o final do input 
    inputEdit.focus();
    inputEdit.selectionStart = inputEdit.selectionEnd = inputEdit.value.length;

    //Fechar ao clicar fora
    document.addEventListener('mousedown', function fecharModal(e) {
        if (!modalEdit.contains(e.target)) {
            modalEdit.style.display = 'none';
            lista.style.display = 'flex';
            document.removeEventListener('mousedown', fecharModal);
        }
    });

}
