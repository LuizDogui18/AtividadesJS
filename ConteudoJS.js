function soma(a, b){
    return a+b;
}

function subtracao(a, b){
    return a-b;
}

function multiplicacao(a, b){
    return a * b;
}

function divisao(a, b){
    if(b === 0 ){
        return "Erro: Divisão por zero!!"
    }
    return a/b;
}

let resultado = divisao(10, 0);
console.log(resultado);

function numeroPar(numero){
    if(numero % 2 === 0){
        return "É número par";
    } else{
        return "Não é par";
    }
}

console.log(numeroPar(2))

function fatorial(num){
    if(num === 0 || num === 1){
        return 1;
    } else{
        return num* fatorial(num - 1);
    }
}

console.log(fatorial(5));

function somaPorIntervalo(begin, end){
    let sum = 0;
    for(let i = begin; i <= end; i++){
        sum +=i;
    }
    return sum;
}

console.log(somaPorIntervalo(1, 5));

function contarVogais(texto) {
    let contador = 0;
    const vogais = "aeiouAEIOU";
    
    for (let i = 0; i < texto.length; i++) {
        if (vogais.includes(texto[i])) {
            contador++;
        }
    }
    
    return contador;
}

console.log(contarVogais("javascript"))

