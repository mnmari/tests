"use strict"

// parâmetros: dois arrays

// primeiro array não é um array
// segundo array não é um array
// primeiro array vazio, retorna o segundo array ordenado
// segundo array vazio, retorna o primeiro array ordenado
// os dois arrays não estão vazios
// array está concatenado
// array final está ordenado do menor pro maior

const assert = require('assert');
const concatSort = require('../concatSort');

suite('concatSort', () => {
    suite('Array is not a valid array', () => {
        test('Should return null if array A is not valid.', () => {
            assert.strictEqual(concatSort(2, [2, 3, 4]), null);
        })

        test('Should return null if array B is not valid.', () => {
            assert.strictEqual(concatSort([2, 3, 4], 2), null);
        })
    })

    suite('An array is empty', () => {
        test('Should return array B sorted if array A is empty', () => {
            assert.deepStrictEqual(concatSort([],[9, 5, 3]), [3, 5, 9]);
        })
        
        test('Should return array A sorted if array B is empty', () => {
            assert.deepStrictEqual(concatSort([9, 5, 3],[]), [3, 5, 9]);
        })
    })

  suite('Arrays are not empty', () => {
        test('Should return the final array concattened', () => {
            assert.deepStrictEqual(concatSort([1, 2],[5, 9]), [1, 2, 5, 9]);
        })
        
        test('Should return the final array sorted from the lowest to the highest number', () => {
            assert.deepStrictEqual(concatSort([2, 1],[9, 5]), [1, 2, 5, 9]);
        })
    })
})