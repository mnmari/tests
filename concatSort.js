"use strict"

const _ = require('lodash');

module.exports = (A, B) => {
    
    if (!_.isArray(A) || !_.isArray(B))
        return null;

    return A.concat(B).sort();

}