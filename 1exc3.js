let resposta = document.getElementById('resposta')

let vetor = [1, 2, 3, 4, 5]
let vetor2 = []

function calc3(){

    console.log('Soma de fatores')

    for(i=0; i<5; i++){

        vetor2[i] = vetor[i] + 7

    }

    console.log('Resultado da soma:')
    console.table(vetor2)

    resposta.innerHTML = "O resultado da soma por 7 da matriz: [1, 2, 3, 4, 5] é: " + vetor2

}