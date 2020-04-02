function verifica(){
    var tano = document.querySelector('input#txtano')
    var data = new Date()
    var anoatual = data.getFullYear()
    var res = document.querySelector('div#res')
    if (tano.value.length == 0 || Number.parseInt(tano.value) > anoatual) {
       alert('Verifique os dados e tente novamente.')
    } else {
        var sex = document.getElementsByName('radiosex')
        var s = ''
        // Calcal-se a idade depois do campo estar digitado corretamente.
        var idade = anoatual - Number(tano.value)
        // Criando imagem dinâmicamente
        var img = document.createElement('img')
        // Adicionando id para o elemento criado
        img.setAttribute('id', 'foto')
        if (sex[0].checked) {
            s = 'Homem'
            if (idade >=0 && idade <= 10) {
                // BEBẼ
                img.setAttribute('src', 'fotobebe.png')
            } else if (idade <= 21) {
                // JOVEM
                img.setAttribute('src', 'fotocrianca.png')

            } else if (idade <= 55) {
                // ADULTO
                img.setAttribute('src', 'fotohomem.png')

            } else {
                // IDOSO
                img.setAttribute('src', 'fotoidoso.png')

            }
        } else {
            s = 'Mulher'
            if (idade >=0 && idade <= 10) {
                // BEBẼ
                img.setAttribute('src', 'fotobebe.png')
            } else if (idade <= 21) {
                // JOVEM
                img.setAttribute('src', 'fotomenina.png')

            } else if (idade <= 55) {
                // ADULTA
                img.setAttribute('src', 'fotomulher.png')

            } else {
                // IDOSA
                img.setAttribute('src', 'fotoidosa.png')

            }
        }
        // Centralizando: 
        res.style.textAlign = 'center';
        res.innerHTML = `${s} com ${idade} anos.</br>`
        res.appendChild(img)
    }
}
