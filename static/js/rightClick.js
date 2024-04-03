function rightClick(event, id) {
    var modal = document.getElementById('rightClick' + id);
    event.preventDefault();
    var x = event.clientX;

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