const teste1 = [12, 3, 20, 42, 45, 10] //essas constantes serão excluidas assim que o código ficar interativo.
const teste2 = [3, 5, 7, 13, 2467]
const teste3 = []

const resultado = document.querySelector("#somaResult"); //campos de exibição de resultados no HTML
const filtro = document.querySelector("#pares");
const maiorNume = document.querySelector("#maiorNu")

//constantes de botões abaixo
const btnSomar = document.querySelector("#btnSoma"); 
const btnFiltrar = document.querySelector("#btnFiltro")
const btnMaior = document.querySelector("#btnMaior")

//As constantes a seguir são para o exercicio 4, que simula uma fila com números
const showFila = document.querySelector("#filaAqui")

//botões abaixo
const btnPegarFila = document.querySelector("#btnPegarFila")
const btnAtender = document.querySelector("#btnAtender")
const btnDesistir = document.querySelector("#btnDesistir")

/*Objetivo: Praticar o uso de loops para iterar sobre um array e realizar uma operação simples "COM FUNÇÕES".
Descrição: Crie uma função chamada somaArray que recebe um array de números como argumento. A função deve iterar 
sobre cada elemento do array e retornar a soma de todos os números. */

function somaArray(array){
    let soma = 0 //declaração de variável para armazenar a soma solicitada
    for (let i in array) { //para cada item na array recebida como argumento:
        soma += array[i]   //soma dito item na variável soma.
    }
    console.log(soma); //<- para verificar se a função funciona corretamente    
    resultado.innerHTML = soma; //exibe o resultado na página
};

btnSomar.addEventListener("click", (e)=>{ //funcionalidade para o devido botão da função
    e.preventDefault()

    const arraySoma = document.getElementById("somar").value; //pega o valor da array inserida
    const valoresSoma = arraySoma.split(",").map(item => Number(item.trim())) //converte o valor para uma array de números com a ajuda do método de mapa; separa cada item a partir da vírgula

    somaArray(valoresSoma) //executa a função criada
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

btnFiltrar.addEventListener("click", (e)=>{
    e.preventDefault()

    const arrayFiltro = document.getElementById("filtrar").value;
    const valoresFiltro = arrayFiltro.split(",").map(item => Number(item.trim()))

    filtrarNumerosPares(valoresFiltro)
})

/*Objetivo: Praticar a criação de funções, o uso de loops e a lógica condicional para encontrar um valor específico em um array. "COM FUNÇÕES"
Descrição: Crie uma função chamada encontrarMaiorNumero que recebe um array de números como argumento. 
A função deve iterar sobre o array e retornar o maior número encontrado. Se o array estiver vazio, a função deve retornar undefined. */

function encontrarMaiorNumero(array){
    let maiorN = array[0]
    for(let i in array){
        if (array[i] > maiorN){
            maiorN = array[i]
        }
    }
    console.log(maiorN);
    maiorNume.innerHTML = maiorN
}

btnMaior.addEventListener("click", (e)=>{
    e.preventDefault()

    const arrayMaior = document.getElementById("maior").value
    const valoresMaior = arrayMaior.split(",").map(item => Number(item.trim()))

    encontrarMaiorNumero(valoresMaior)
})

/*Objetivo: Praticar a criação de funções e a lógica condicional para adicionar e remover itens específicos em um array. "COM FUNÇÕES"
Descrição: Crie duas funções, uma chamada pegar fila, e outra mostrar fila e outra atender pessoa.
No programa vocês precisam criar um array que irá representar a fila e uma das funções ao ser chamada deve adicionar um número no array , 
mas dentro dessa função deve haver um condicional para verificar o número caso ele seja maior que 65 o número deve ir para o início do array 
e essa função deve chamar a função mostrar fila assim que ela adicionar no array, a outra função deve remover um item do início do array para 
atender a pessoa, e como bônus podem incluir uma função desistir da fila onde essa outra função bônus receberá o número (posição da fila) 
e remover o item. */

function mostrarFila(fila){
    console.log(fila);
    showFila.innerHTML = fila
}

function pegarFila(fila, num){
    if (num >= 65){
        fila.unshift(num);
    } else {
        fila.push(num)
    }
    mostrarFila(fila)
}

function atenderPessoa(fila){
    fila.shift();
    mostrarFila(fila)
}

function desistirFila(fila, num){
    fila.splice(num, 1);
    mostrarFila(fila)
}

btnPegarFila.addEventListener("click", (e)=>{
    e.preventDefault()

    const arrayFila = document.getElementById("fila").value
    pegarFila()
})

btnAtender.addEventListener("click", (e)=>{
    e.preventDefault()

    atenderPessoa()
})

btnDesistir.addEventListener("click", (e)=>{
    e.preventDefault()

    desistirFila()
})

pegarFila(teste1, 47)
pegarFila(teste1, 87)