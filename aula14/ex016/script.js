function contador() {
    var inicio = document.querySelector('input#txtinicio')
    var fim = document.querySelector('input#txtfim')
    var passo = document.querySelector('inputtxt#passo')
    var res = document.querySelector('div#res')
    // Teste para o início
    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        alert('ERRO! Verifique se os dados foram digitados.')
    } else {
        res.innerHTML = 'Contando: '
        var i = Number.parseInt(inicio.value)
        var f = Number.parseInt(fim.value)
        var p = Number.parseInt(passo.value)
        for (var c = i; c <= f; c += p) {
            res.innerHTML += `${c}..`
        }   
    }
}