function modalConfirm(id, index){
    const rightClick = document.getElementById('rightClick' + id);
    const modalConfirmExcluir = document.getElementById('modalConfirmExcluir' + id);
    const modalConfirmLimpeza = document.getElementById('modalConfirmLimpeza' + id);


    if(index == 0){
        modalConfirmExcluir.style.display = 'flex';
        
    }else if(index == 1){
        modalConfirmLimpeza.style.display = 'flex';
    }
    rightClick.style.display = 'none';

    //Função pra fechar o modal
    document.addEventListener('mousedown', function fecharModalExcluir(e1) {
        if (!modalConfirmExcluir.contains(e1.target)) {
            modalConfirmExcluir.style.display = 'none';
            document.removeEventListener('mousedown', fecharModalExcluir);
        }
    });
    document.addEventListener('mousedown', function fecharModalLimpeza(e2) {
        if (!modalConfirmLimpeza.contains(e2.target)) {
            modalConfirmLimpeza.style.display = 'none';
            document.removeEventListener('mousedown', fecharModalLimpeza);
        }
    });

}

function modalConfirmFechar(id){
    document.getElementById('modalConfirm' + id).style.display = 'none';

}