"use strict"

// Fazer com TDD, uma função que recebe uma string s e um número n e retorna um array com os primeiros n caracteres de s.
// Exemplo: função('batata', 3) deve retornar ['b','a','t']

// s é uma string
// s é uma string vazia
// n é um número inteiro positivo
// n não é maior do que o tamanho da string
// retornou o array esperado

const assert = require('assert');
const retrieveStringCharacters = require('../retrieveStringCharacters');

suite('retrieveStringCharacters', () => {
    suite('String is not valid.', () => {
        test('Should return null if the string is empty.', () => {
            assert.strictEqual(retrieveStringCharacters('', 3), null);
        })
    }) 

    suite('Number is not valid.', () => {
        test('Should return null if the number n is not a number.', () => {
            assert.strictEqual(retrieveStringCharacters('betinho', 'a'), null);
        })

        test('Should return null if the number n is not a positive integer.', () => {
            assert.strictEqual(retrieveStringCharacters('betinho', -2), null);
        })

        test('Should return null if the number n is higher than the string length.', () => {
            assert.strictEqual(retrieveStringCharacters('betinho', 10), null);
        })
    }) 

    suite('String s is valid and number n is a positive integer.', () => {
        test('Should return the final array.', () => {
            assert.deepStrictEqual(retrieveStringCharacters('betinho', 3), ['b', 'e', 't']);
        })
    }) 


})