function inserirImagem(url) {
    document.body.style.backgroundImage = `url('./img/${url}.jpg')`;
}

function mudaImagem(horas) {
    const horaMinima = [6,9,11,16,18,19,0]
    const horaMaxima = [8,10,15,17,18,23,5]

    for (let i = 0; i < horaMaxima.length; i++) {
        if (horas >= horaMinima[i] && horas <= horaMaxima[i]) {
            inserirImagem(`hora${i}`)
        }        
    }
}

function checkTime(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}

function relogio() {
    const spanHora = window.document.getElementById('hora');
    const spanMinuto = window.document.getElementById('minuto');
    const spanSegundo = window.document.getElementById('segundo');

    let data = new Date();
    let hora = data.getHours();
    let min = data.getMinutes();
    let sec = data.getSeconds();

    hora = checkTime(hora);
    min = checkTime(min);
    sec = checkTime(sec);

    mudaImagem(hora);

    if (hora == 0) hora = 24 
    
    spanHora.innerHTML = hora;
    spanMinuto.innerHTML = min;
    spanSegundo.innerHTML = sec;

    setTimeout('relogio()',500);   
}

relogio();
    