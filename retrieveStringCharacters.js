"use strict"

const _ = require('lodash');

module.exports = (s, n) => {
    
    if (!_.isString(s) || s.length === 0 || !_.isNumber(n) || n < 0)
        return null;

    if (n <= s.length) {
        
        let strArray = [];

        for (let i = 0; i < n; i++)
            strArray.push(s.charAt(i));
        
        return strArray;
    }

    else
        return null;
}