//Função para retornar o cookie do csrf
function getCookie(name) {
    let cookieValue = null;
    if (document.cookie && document.cookie !== '') {
        const cookies = document.cookie.split(';');
        for (let i = 0; i < cookies.length; i++) {
            const cookie = cookies[i].trim();
            // Procura pelo token CSRF
            if (cookie.substring(0, name.length + 1) === (name + '=')) {
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                break;
            }
        }
    }
    return cookieValue;
}

//Função que envia o estado dos checkboxes para o BACKEND
function updateCheck(id, isChecked){   
    const csrftoken = getCookie('csrftoken'); 

    fetch('/checkbox/' + id, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-CSRFToken': csrftoken
        },
        body: JSON.stringify({id: id, checkbox: isChecked})

    })
    .then(response => {
        if (response.ok) {
            window.location.reload();
        }
    }
)};
