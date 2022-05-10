function calcular() {
    var data = new Date()
    var ano = data.getFullYear()
    var anoincial = window.document.getElementById('ano')
    var resul = window.document.getElementById('res')
   
    
    if (anoincial.value.length == 0 || anoincial.value > ano) {
        alert('informe os dados corretos')
    } else {
        var fsex = document.getElementsByName('sexo')
        var idade = ano - Number(anoincial.value)
        var genero 
        var img = document.createElement('img')
      

       
        if(fsex[0].checked){
            genero = 'masculino'
        }else{
            genero = 'feminiino'
        }
        resul.innerText = `  A idade calculada é de ${idade} anos e seu sexo e ${genero}`
    }
}