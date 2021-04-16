"use strict"

const _ = require('lodash');

module.exports = (num) => {
    
    if (!_.isNumber(num)){
        return false;  
    }

    if (num % 2 === 0){
        return true;
    } else {
        return false;
    }
 
};



