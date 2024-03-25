function modalConfirm(id){
    const rightClick = document.getElementById('rightClick' + id)
    const modal = document.getElementById('modalConfirm' + id)
    modal.style.display = 'flex';
    rightClick.style.display = 'none';
}

function modalConfirmFechar(id){
    const modal = document.getElementById('modalConfirm' + id)
    modal.style.display = 'none';
}