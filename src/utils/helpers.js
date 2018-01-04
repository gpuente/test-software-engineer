const Product = require('../lib/Product/Product');

// A helper function that allows create a new Product and add it rules
// (This step is needed if you don't want change the constructor for Product Class)
const configNewProdut = (name, sellIn, price, rules) => {
  const product = new Product(name, sellIn, price);
  product.addRules(rules);
  return product;
}


// Return a string with product information as report
const printAsReport = (products = [], day = 0) => {
  const template = `-------- Day ${day} --------\nname, sellIn, price\n{products}\n`;

  const prods = products.reduce((result, prod) => {
    result += `${prod.name}, ${prod.sellIn}, ${prod.price}\n`;
    return result;
  }, '');

  return template.replace('{products}', prods);
}


// Return a object of products as json report
const printAsJson = (products = [], day = 0) => {
  const prods = products.map((prod) => ({
    name: prod.name,
    sellIn: prod.sellIn,
    price: prod.price,
  }));

  const object = {
    ['day'+day]: prods,
  };

  return object;
}


// Execute a rutine for n days for products and returns the report
const daysFlow = (days, carInsurance, format) => {
  const prods = carInsurance.products;
  const isJson = format === 'json';
  let result = isJson ? printAsJson(prods, 0) : printAsReport(prods, 0);

  for (i = 1; i <= days; i++) {
    if (isJson) {
      const dayObject = printAsJson(carInsurance.updatePrice(), i);
      Object.assign(result, dayObject);
    } else {
      result += printAsReport(carInsurance.updatePrice(), i);
    }
  }

  return result;
}

module.exports = {
  configNewProdut,
  daysFlow,
}
