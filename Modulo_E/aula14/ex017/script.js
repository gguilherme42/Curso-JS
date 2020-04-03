function calcular() {
    var ntxt = document.querySelector('input#txtnumero')
    var texto = document.querySelector('select#seltab')
    if (ntxt.value.length == 0) {
        alert('Digite um número.')
    } else {
        var n = Number.parseInt(ntxt.value)
        // Limpando o select
        texto.innerHTML = ''
        for (var m = 0; m <= 10; m++) {
            // Crição do elemento option
            var item = document.createElement('option')
            item.innerText = `${n} x ${m} = ${n * m}`
            texto.appendChild(item)
        }
    }
}