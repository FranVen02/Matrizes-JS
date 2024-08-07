let resposta = document.getElementById('resposta')

function calc7(){

    let num1 = Number(document.getElementById('num1').value)
    let num2 = Number(document.getElementById('num2').value)
    let num3 = Number(document.getElementById('num3').value)
    let num4 = Number(document.getElementById('num4').value)
    let num5 = Number(document.getElementById('num5').value)
    let num6 = Number(document.getElementById('num6').value)
    let num7 = Number(document.getElementById('num7').value)
    let resultado = Number

    resultado = num1 + num2 + num3 + num4 + num5 + num6 + num7

    console.log('Resultado da soma interna:')
    console.log('[', num1, ' ,', num2,', ', num3,', ', num4,', ', num5,', ', num6,', ', num7,' ]')
    
    resposta.innerHTML = "O resultado da interna da matriz [" + num1 + " ," + num2 + ", " + num3 + ", " + num4 + ", " + num5 + ", " + num6 + ", " + num7 + " ] é: " + resultado

}
