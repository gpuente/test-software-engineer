class CarInsurance {
    constructor(products = []) {
      this.products = products;
    }
  
    // Apply rules for each product and return products property;
    updatePrice() {
      this.products.forEach(product => product.applyRules());
  
      return this.products;
    }
  }
  
  module.exports = CarInsurance;
  