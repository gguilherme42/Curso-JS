function carregar() {
    var msg = document.querySelector('div#msg')
    var img = document.querySelector('img#imagem')
    var data = new Date()
    var hora = data.getHours()
    var min = data.getMinutes()
    msg.innerHTML = `Horário: ${hora}:${min}`
    if (hora >= 0 && hora <= 12) {
        // BOM DIA
        img.src = 'fotomanha.png'
        document.body.style.backgroundColor = '#dcd8d7'
    } else if (hora <= 18) {
        // BOA TARDE
        img.src = 'fototarde.png'
        document.body.style.backgroundColor = '#808795'
    } else {
        // BOA NOITE
        img.src = 'fotonoite.png'
        document.body.style.backgroundColor = '#015460'
    }
}