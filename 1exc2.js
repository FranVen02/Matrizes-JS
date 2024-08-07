let resposta = document.getElementById('resposta')

let vetor = []
let vetor2 = []

function calc2(){

    let num1 = Number(document.getElementById('num1').value)
    let num2 = Number(document.getElementById('num2').value)
    let num3 = Number(document.getElementById('num3').value)
    let num4 = Number(document.getElementById('num4').value)
    let num5 = Number(document.getElementById('num5').value)


    vetor[0] = num1
    vetor[1] = num2
    vetor[2] = num3
    vetor[3] = num4
    vetor[4] = num5

    for(i=0; i<5; i++){

        vetor2[i] = vetor[i] * 3

    }

    console.log('Resultado da multiplicação:')
    console.table(vetor2)

    resposta.innerHTML = "O resultado da multiplicação por três da matriz digitada é: " + vetor2

}
