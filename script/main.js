function inserirImagem(url) {
    document.body.style.backgroundImage = `url('./img/${url}')`;
}

function mudaImagem(horas) {
    if (horas >= 6 && horas < 12) {
        inserirImagem('morning-sun_6-8.jpg');  

        if (horas > 8 && horas < 11) {
            inserirImagem('morning-sun_9-10.jpg');
        } else if (horas >= 11) {
            inserirImagem('morning-sun_11-15.jpg');
        }
    } else if (horas >= 12 && horas < 18) {
        inserirImagem('morning-sun_11-15.jpg');
        
        if (horas > 15 && horas < 17) {
            inserirImagem('afternoon-sunshine_15-17.jpg');            
        } else if (horas >= 17){
            inserirImagem('afternoon-sunshine_17-18.jpg');
        }
    } else if (horas >= 17 && horas < 24) {
        inserirImagem('afternoon-sunshine_1-18.jpg');
        
        if (horas > 18 && horas < 23) {
            inserirImagem('night_19-22.jpg');
        }
    } else {
        inserirImagem('night_23-5.jpg');
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
    
    spanHora.innerHTML = hora;
    spanMinuto.innerHTML = min;
    spanSegundo.innerHTML = sec;

    setTimeout('relogio()',500);   
}

relogio();
    