// Variaveis

let vitorias = 60
let derrotas = 20

let saldoVitorias = saldoRankeadas(vitorias,derrotas)
let nivel = calcularRank(saldoVitorias)


// Mensagem

console.log("O Herói tem de saldo de " + saldoVitorias + " está no nível de " + nivel)


// Funções

function saldoRankeadas(vitorias,derrotas){
    resultado = vitorias - derrotas
    return resultado
}

function calcularRank(saldoVitorias){
    let rank = "Ferro"

    if(saldoVitorias < 10){
        rank = "Ferro"
    
    } else if(saldoVitorias >= 10 && saldoVitorias < 20){
        rank = "Bronze"
    
    } else if(saldoVitorias >= 20 && saldoVitorias < 50){
        rank = "Prata"
    
    } else if(saldoVitorias >= 50 && saldoVitorias < 80){
        rank = "Ouro"
    
    } else if(saldoVitorias >= 80 && saldoVitorias < 90){
        rank = "Diamante"
    
    } else if(saldoVitorias >= 90 && saldoVitorias < 100){
        rank = "Lendário"
    
    } else if(saldoVitorias >= 100){
        rank = "Imortal"
    
    }

    return rank
}