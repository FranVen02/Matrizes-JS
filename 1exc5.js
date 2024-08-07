let resposta = document.getElementById('resposta')

let vetor1 = []
let vetor2 = []
let vetor3 = []

function calc5(){

    let num1 = Number(document.getElementById('num1').value)
    let num2 = Number(document.getElementById('num2').value)
    let num3 = Number(document.getElementById('num3').value)
    let num4 = Number(document.getElementById('num4').value)
    let num5 = Number(document.getElementById('num5').value)
    let num6 = Number(document.getElementById('num6').value)
    let num7 = Number(document.getElementById('num7').value)
    let num8 = Number(document.getElementById('num8').value)
    let num9 = Number(document.getElementById('num9').value)
    let num10 = Number(document.getElementById('num10').value)


    vetor1[0] = num6
    vetor1[1] = num7
    vetor1[2] = num8
    vetor1[3] = num9
    vetor1[4] = num10

    vetor2[0] = num1
    vetor2[1] = num2
    vetor2[2] = num3
    vetor2[3] = num4
    vetor2[4] = num5

    for(i=0; i<5; i++){

        vetor3[i] = vetor1[i] + vetor2[i]

    }

    console.log('Resultado da soma:')
    console.table(vetor3)

    resposta.innerHTML = "O resultado da soma das matrizes digitadas é: " + vetor3

}
