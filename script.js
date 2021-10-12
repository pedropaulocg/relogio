function relogio(){
    var rel = new Date()
    var hr = rel.getHours()
    var min = rel.getMinutes()
    var seg = rel.getSeconds()
    var geral = document.getElementById('principal')

    var horas = hr + ':' + min + ':' + seg
    geral.innerText = (horas)
    if(hr>12){
        document.getElementById('background1').id= 'background2'
    }
}

var tempo = setInterval(relogio,1000)