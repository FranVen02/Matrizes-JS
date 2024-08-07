let resposta = document.getElementById('resposta')

function calc8(){

    let num1 = Number(document.getElementById('num1').value)
    let num2 = Number(document.getElementById('num2').value)
    let num3 = Number(document.getElementById('num3').value)
    let num4 = Number(document.getElementById('num4').value)
    let num5 = Number(document.getElementById('num5').value)

    console.log('Resultado da multiplicação:')
    console.table("Invertendo a matriz digitada, será: [", num5,", ", num4,", ", num3,", ", num2,", ", num1," ]")

    resposta.innerHTML = "Invertendo a matriz digitada, será: [" + num5 + ", "  + num4 + ", " + num3 + ", " + num2 + ", " + num1 + " ]"

}
