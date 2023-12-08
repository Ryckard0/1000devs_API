const { soma, divisao } = require('../utils/math')

test('Should return a sum of two numbers', () => {
    expect(soma(10, 2)).toBe(12)
})

describe('Teste de divisao', () => {
    test('Deve retornar a divisao de dois numeros', () => {
        expect(divisao(10, 2)).toBe(5)
    })
})

test('Espera uma divisao por zero', () => {
    expect(() => {
        divisao(10, 0)
    }).toThrow(Error)
    //expect(divisao(10, 1)).toThrow(Error)
})

test('Espera divisao de numero e letra', () => {
    expect(() => {
        divisao('A', 2)
    }).toThrow(TypeError)
})

