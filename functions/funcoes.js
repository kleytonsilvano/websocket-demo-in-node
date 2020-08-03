function subtrair(n1, n2) {
    if(isNumber(n1,n2)) {
        return Number(n1) - Number(n2);
    }
}

function adicionar(n1, n2) {
    if(isNumber(n1,n2)) {
        return Number(n1) + Number(n2);
    }
}

function dividir(n1, n2) {
    if(isNumber(n1,n2)) {
        return Number(n1) / Number(n2);
    }
}

function multiplicar(n1, n2) {
    if(isNumber(n1,n2)) {
        return Number(n1) * Number(n2);
    }
}

function isNumber(n1, n2) {
    if(!isNaN(n1, n2)) {
        return Error("Erro de operação: Valor de entrada inválido");
    }
    return true;
}

module.exports = {
    subtrair: subtrair,
    adicionar: adicionar,
    multiplicar: multiplicar,
    dividir: dividir
};