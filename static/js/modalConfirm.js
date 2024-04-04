function modalConfirm(id){
    const rightClick = document.getElementById('rightClick' + id);
    const modalConfirm = document.getElementById('modalConfirm' + id);

    modalConfirm.style.display = 'flex';
    rightClick.style.display = 'none';

    //Função pra fechar o modal
    document.addEventListener('mousedown', function fecharModal(e) {
        if (!modalConfirm.contains(e.target)) {
            modalConfirm.style.display = 'none';
            document.removeEventListener('mousedown', fecharModal);
        }
    });

}

function modalConfirmFechar(id){
    document.getElementById('modalConfirm' + id).style.display = 'none';

}

