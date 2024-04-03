function modalConfirm(id){
    const rightClick = document.getElementById('rightClick' + id);
    const modalConfirm = document.getElementById('modalConfirm' + id);

    modalConfirm.style.display = 'flex';
    rightClick.style.display = 'none';
    
}

function modalConfirmFechar(id){
    const modalConfirm = document.getElementById('modalConfirm' + id);
    modalConfirm.style.display = 'none';
}