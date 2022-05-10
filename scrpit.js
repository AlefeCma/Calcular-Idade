function conta() {
    var ini = document.getElementById('nmrinicio')
    var fim = document.getElementById('nnmrfinal')
    var pass = document.getElementById('pass')
    var rest = document.getElementById('res')
    if (ini.value.length == 0 || fim.value.length == 0 || pass.value.length == 0) {
        window.alert('verifique os dados novamente')
    } else {
        rest.innerHTML = "contando: "
        var inicio = Number (ini.value)
        var f = Number(fim.value)
        var passe = Number(pass.value)
        for (var c = inicio; c < f; c+= passe ) {            
            rest.innerHTML+= "👉"+ c
        }
       
    }
}