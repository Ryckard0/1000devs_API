function soma(a, b) {
    return a + b;
}

const divisao = (dividendo, divisor) => {
    if (typeof (dividendo) !== 'number' || typeof (divisor) !== 'number')
        throw new TypeError('Os valores de entrada não são numericos')

    result = dividendo / divisor

    if (result == Infinity)
        throw new Error('Não permitido divisão por zero')

    return result
}

module.exports ={
    soma,
    divisao
}