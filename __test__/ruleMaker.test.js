const helpers = require('../src/utils/ruleMaker');
const congif = require('../src/config/config');

describe('Helpers TEST', () => {
  const decObj = helpers.decreaseByRange(10, 0, 3);
  const incObj = helpers.increaseByRange(10, 0, 2);

  test('decreaseByRange should return an object', () => {
    expect(typeof decObj).toBe('object');
    expect(decObj).toHaveProperty('test');
    expect(decObj).toHaveProperty('exec');
  });


  test('increaseByRange should return an object', () => {
    expect(typeof incObj).toBe('object');
    expect(incObj).toHaveProperty('test');
    expect(incObj).toHaveProperty('exec');
  });


  test('decreaseObject.test should return true when a day is inside the range', () => {
    expect(decObj.test(10)).toBe(true);
    expect(decObj.test(5)).toBe(true);
    expect(decObj.test(0)).toBe(true);
  });


  test('decreaseObject.test should return false when a day is outside the range', () => {
    expect(decObj.test(11)).toBe(false);
    expect(decObj.test(-1)).toBe(false);
    expect(decObj.test(50)).toBe(false);
  });


  test('increaseObject.test should return true when a day is inside the range', () => {
    expect(incObj.test(10)).toBe(true);
    expect(incObj.test(5)).toBe(true);
    expect(incObj.test(0)).toBe(true);
  });


  test('increaseObject.test should return false when a day is outside the range', () => {
    expect(incObj.test(11)).toBe(false);
    expect(incObj.test(-1)).toBe(false);
    expect(incObj.test(50)).toBe(false);
  });


  test('decreaseObject.exec should decrease price by (baseDecrease * times)', () => {
    const obj1 = helpers.decreaseByRange(10, 0, 3);
    const obj2 = helpers.decreaseByRange(10, 0, 1);

    const price1 = 50;
    const price2 = 40;

    const decreaseBy3 = obj1.exec(price1);
    const decreaseBy1 = obj2.exec(price2);

    expect(price1 - (congif.baseDecrease * 3)).toBe(decreaseBy3);
    expect(price2 - (congif.baseDecrease * 1)).toBe(decreaseBy1);
  });


  test('increaseObject.exec should increase price by (baseIncrease * times)', () => {
    const obj1 = helpers.increaseByRange(10, 0, 3);
    const obj2 = helpers.increaseByRange(10, 0, 1);

    const price1 = 22;
    const price2 = 40;

    const increaseBy3 = obj1.exec(price1);
    const increaseBy1 = obj2.exec(price2);

    expect(price1 + (congif.baseIncrease * 3)).toBe(increaseBy3);
    expect(price2 + (congif.baseIncrease * 1)).toBe(increaseBy1);
  });


  test('decreaseObject.exec should not return a price less than minPrice', () => {
    const newPrice = decObj.exec(congif.minPrice);
    expect(newPrice).toBe(congif.minPrice);
  })


  test('increaseObject.exec should not return a price greather than maxPrice', () => {
    const newPrice = incObj.exec(congif.maxPrice);
    expect(newPrice).toBe(congif.maxPrice);
  })


  test('decreaseObject.exec should return always the min price', () => {
    const obj = helpers.decreaseByRange(10, 1, 1, true);
    const newPrice = obj.exec(40);
    expect(newPrice).toBe(congif.minPrice);
  });


  test('increaseObject.exec should return always the max price', () => {
    const obj = helpers.increaseByRange(10, 1, 1, true);
    const newPrice = obj.exec(40);
    expect(newPrice).toBe(congif.maxPrice);
  });
});
