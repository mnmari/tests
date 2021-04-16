"use strict"

const isEven = require('../main');
const assert = require('assert');

suite('isEven', () => {
    suite('validParameter', () => {
        test('Should return true if number is even', () => {
            assert.strictEqual(isEven(2), true);
        })

        test('Should return false if number is odd', () => {
            assert.strictEqual(isEven(3), false);
        })
    })

    suite('invalidParameter', () => {
        test('Should return false if it\'s not a number', () => {
            assert.strictEqual(isEven('betinho'), false);
        })
    })
}) 
