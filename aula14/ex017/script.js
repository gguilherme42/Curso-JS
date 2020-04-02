function calcular() {
    var ntxt = document.querySelector('input#numero')
    var texto = document.querySelector('div#t')
    var n = Number.parseInt(ntxt.value)
    var r = 0
    for (var m = 0; m <= 10; m++) {
        r = n * m
        texto.innerHTML += `${n} x ${m} = ${r} </br>`
    }
}