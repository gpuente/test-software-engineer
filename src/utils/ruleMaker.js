const config = require('../config/config');

// base values for increse/decrease prices
const {
  baseDecrease: BASE_DECREASE,
  baseIncrease: BASE_INCREASE,
  minPrice: MIN_VALUE,
  maxPrice: MAX_VALUE,
} = config;


/**
 * **Makes a custom object rule that decrease the price of a product when the sellIn is beetween the range days.**
 *The object returned has a 'test' method that check if should apply or not the rule, and a method 'exec' to apply the rule.
 *'test' method return true if the rule should be applied, and false if not.
 *'exec' method return the new price after apply the rule
 * @param {number} from - day from start range (inclusive)
 * @param {number} to - day to finish range (inclusive)
 * @param {number} times - increase the BASE_DECREASE * times
 * @param {boolean} forceLimit - force exec method to return the MIN_VALUE price
 */
const decreaseByRange = (from, to, times, forceLimit = false) => ({
  test: (day, price) => day <= from && day >= to,
  exec: price => {
    if (forceLimit) return MIN_VALUE;

    const result = price - (BASE_DECREASE * times);
    return result < MIN_VALUE ? MIN_VALUE : result;
  },
});




/**
 * **Makes a custom object rule that increase the price of a product when the sellIn is beetween the range days.**
 *The object returned has a 'test' method that check if should apply or not the rule, and a method 'exec' to apply the rule.
 *'test' method return true if the rule should be applied, and false if not.
 *'exec' method return the new price after apply the rule
 * @param {number} from - day from start range (inclusive)
 * @param {number} to - day to finish range (inclusive)
 * @param {number} times - increase the BASE_INCREASE * times
 * @param {boolean} forceLimit - force exec method to return the MAX_VALUE price
 */
const increaseByRange = (from, to, times, forceLimit = false) => ({
  test: (day, price) => day <= from && day >= to,
  exec: price => {
    if (forceLimit) return MAX_VALUE;

    const result = price + (BASE_INCREASE * times);
    return result > MAX_VALUE ? MAX_VALUE : result;
  },
});




module.exports = {
  decreaseByRange,
  increaseByRange,
};
