const teste1 = [12, 3, 20, 42, 45, 10]
const teste2 = [3, 5, 7, 13, 2467]
const teste3 = []

/*Objetivo: Praticar o uso de loops para iterar sobre um array e realizar uma operação simples "COM FUNÇÕES".
Descrição: Crie uma função chamada somaArray que recebe um array de números como argumento. A função deve iterar 
sobre cada elemento do array e retornar a soma de todos os números. */

const resultado = document.querySelector("#somaResult");
const filtro = document.querySelector("#pares");
const maiorNum = document.querySelector("#maior")

const btnSomar = document.querySelector("#btnSoma");

function somaArray(array){
    let soma = 0
    for (let i in array) {
        soma += array[i]
    }
    console.log(soma); //<- para verificar se a função funciona corretamente    
    resultado.innerHTML = soma;
};

btnSomar.addEventListener("click", (e)=>{
    e.preventDefault()

    const arraySoma = document.getElementById("somar").value;
    const valoresSoma = arraySoma.split(",").map(item => Number(item.trim()))

    somaArray(valoresSoma)
})

/*Objetivo: Praticar a criação de funções, o uso de loops, a lógica condicional e a manipulação de arrays 
(criando um novo array). "COM FUNÇÕES"
Descrição: Crie uma função chamada filtrarNumerosPares que recebe um array de números como argumento.
A função deve retornar um novo array contendo apenas os números pares do array original. 
Se não houver números pares, a função deve retornar um array vazio. */

function filtrarNumerosPares(array){
    let numPares = []
    for (let i in array){
        if (array[i] % 2 == 0){
            numPares.push(array[i])
        }
    }
    console.log(numPares);
    filtro.innerHTML = numPares
}

filtrarNumerosPares(teste1) //Array(4) [ 12, 20, 42, 10 ]
filtrarNumerosPares(teste2) //Array []

/*Objetivo: Praticar a criação de funções, o uso de loops e a lógica condicional para encontrar um valor específico em um array. "COM FUNÇÕES"
Descrição: Crie uma função chamada encontrarMaiorNumero que recebe um array de números como argumento. 
A função deve iterar sobre o array e retornar o maior número encontrado. Se o array estiver vazio, a função deve retornar undefined. */

function encontrarMaiorNumero(array){
    let maior = array[0]
    for(let i in array){
        if (array[i] > maior){
            maior = array[i]
        }
    }
    console.log(maior);
    maiorNum.innerHTML = maior
}

encontrarMaiorNumero(teste3) //undefined
encontrarMaiorNumero(teste1) //45

/*Objetivo: Praticar a criação de funções e a lógica condicional para adicionar e remover itens específicos em um array. "COM FUNÇÕES"
Descrição: Crie duas funções, uma chamada pegar fila, e outra mostrar fila e outra atender pessoa.
No programa vocês precisam criar um array que irá representar a fila e uma das funções ao ser chamada deve adicionar um número no array , 
mas dentro dessa função deve haver um condicional para verificar o número caso ele seja maior que 65 o número deve ir para o início do array 
e essa função deve chamar a função mostrar fila assim que ela adicionar no array, a outra função deve remover um item do início do array para 
atender a pessoa, e como bônus podem incluir uma função desistir da fila onde essa outra função bônus receberá o número (posição da fila) 
e remover o item. */

function pegarFila(fila, num){
    if (num >= 65){
        fila.unshift(num);
    } else {
        fila.push(num)
    }
    mostrarFila(fila)
}

function mostrarFila(fila){
    console.log(fila);
}

function atenderPessoa(fila){
    fila.shift();
    console.log(fila);
}

function desistirFila(fila, num){
    fila.splice(num, 1);
    console.log(fila);
}

pegarFila(teste1, 47)
pegarFila(teste1, 87)