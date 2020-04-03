function contador() {
    var inicio = document.querySelector('input#txtinicio')
    var fim = document.querySelector('input#txtfim')
    var passo = document.querySelector('input#txtpasso')
    var res = document.querySelector('div#res')
    // Teste para o início
    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        alert('ERRO! Verifique se os dados foram digitados.')
        res.innerHTML = 'Não é possível contar.'
    } else {
        res.innerHTML = 'Contando: <br>'
        var i = Number.parseInt(inicio.value)
        var f = Number.parseInt(fim.value)
        var p = Number.parseInt(passo.value)
        // Se passo igual à zero
        if (p == 0) {
            p = 1
        // Se passo negativo
        } else if (p < 0) {
            p *= -1
        }
        // Contagem decrescente
        if (f <= i) {
            for (var c = i; c >= f; c -= p) {
                res.innerHTML += `${c}..`
            }
        // Contagem crescente
        } else {
            for (var c = i; c <= f; c += p) {
                res.innerHTML += `${c}..`
            } 
        }
        res.innerHTML += `\u{1F6A9}` 
    }
}
