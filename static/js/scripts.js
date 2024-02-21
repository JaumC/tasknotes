function AbrirM(taskId) {
    var modal = document.getElementById("modal" + taskId)
    modal.style.display = 'block'
}

function FecharM(taskId) {
    var modal = document.getElementById("modal" + taskId)
    modal.style.display = 'none'
}
