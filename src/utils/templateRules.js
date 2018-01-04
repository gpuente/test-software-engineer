const helpers = require('./ruleMaker');

const { increaseByRange, decreaseByRange } = helpers;


/*
  Here i defined a template rules that should use every prouct object
*/

const defaultRules = [
  decreaseByRange(Infinity, 0, 1), // From [∞,0] (days) decrease price - (BASE_DECREASE * 1)
  decreaseByRange(-1, -Infinity, 2), // From [-1,-∞] (days) decrease price - (BASE_DECREASE * 2)
];



const fullCoverageRules = [
  increaseByRange(Infinity, 0, 1), // From [∞,0] (days) increase price + (BASE_INCREASE * 1)
  increaseByRange(-1, -Infinity, 2), // From [-1,-∞] (days) increase price + (BASE_INCREASE * 2)
];


const specialFullCoverageRules = [
  increaseByRange(Infinity, 10, 1), // From [∞,10] (days) increase price + (BASE_INCREASE * 1)
  increaseByRange(9, 5, 2), // From [9,5] (days) increase price + (BASE_INCREASE * 2)
  increaseByRange(4, 0, 3), // From [4,0] (days) increase price + (BASE_INCREASE * 3)
  decreaseByRange(-1, -Infinity, 0, true), // From [-1,-∞] (days) decrease price to MIN_VALUE
];


const superSaleRules = [
  decreaseByRange(Infinity, 0, 2), // From [∞,0] (days) decrease price - (BASE_DECREASE * 2)
  decreaseByRange(-1, -Infinity, 4), // From [-1,-∞] (days) decrease price - (BASE_DECREASE * 4)
];


const noRules = []; // No rules template


module.exports = {
  defaultRules,
  fullCoverageRules,
  specialFullCoverageRules,
  superSaleRules,
  noRules,
};
