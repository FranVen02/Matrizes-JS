let resposta = document.getElementById('resposta')

let vetor = [1, 2, 3, 4, 5]
let vetor2 = []

function calc1(){

    console.log('Multiplicação de fatores')

    for(i=0; i<5; i++){

        vetor2[i] = vetor[i] * 3

    }

    console.log('Resultado da multiplicação:')
    console.table(vetor2)

    resposta.innerHTML = "O resultado da multiplicação por três da matriz: [1, 2, 3, 4, 5] é: " + vetor2

}