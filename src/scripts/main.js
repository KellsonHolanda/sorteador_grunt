document.addEventListener('DOMContentLoaded', function(){
    document.getElementById('sorteio').addEventListener('submit', function(evento){
        evento.preventDefault();
        let numeroMaximo = document.getElementById('numeroMax').value;
        numeroMaximo = parseInt(numeroMaximo);

        let numeroAleatorio = Math.random() * numeroMaximo;
        document.getElementById ('valor').innerText = Math.round(numeroAleatorio);

        document.querySelector('.resultado').style.display = 'block';
    })
})