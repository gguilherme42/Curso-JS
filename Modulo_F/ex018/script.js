let txtn = document.querySelector('input#txtnumero')
let selista = document.querySelector('select#txtlista')
let res = document.querySelector('div#res')
let valores = []


function isNumero(n){
    if (Number.parseInt(n) >= 0 && Number.parseInt(n) <= 100) {
        return true
    } else {
        return false
    }
}

function inLista(n, l) {
    if (l.indexOf(n) != -1 ) {
        return true
    } else {
        return false
    }
}

function adicionar() {
    if (isNumero(txtn.value) && !inLista(txtn.value, valores)) {
        valores.push(txtn.value)
        let item = document.createElement('option')
        item.innerText = `Número: ${txtn.value}`
        selista.appendChild(item)
        // Limpando resultado
        res.innerHTML = ''
    } else {
        alert('Valor inválido ou repetido!')
    }
    txtn.value = ''
    txtn.focus()
}


function finalizar() {
    if (valores.length == 0) {
        alert('Adiciona valores para finalizar!')
    } else {

        let tot = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0
        for (let c in valores) {
            soma += Number(valores[c])
            if (valores[c] > maior) {
                maior = valores[c]
            }
            if (c < maior) {
                menor = valores[c]
            }
            
        }

        media = soma / tot

        res.innerHTML = ''
        res.innerHTML = `<p>Total de números: ${tot} </p>`
        res.innerHTML += `<p>Maior número: ${maior} </p>`
        res.innerHTML += `<p>Menor número: ${menor} </p>`
        res.innerHTML += `<p>Soma: ${soma} </p>`
        res.innerHTML += `<p>Média: ${media.toFixed(2)} </p>`
    }
}

