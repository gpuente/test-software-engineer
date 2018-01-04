class Product {
  constructor(name, sellIn, price) {
    this.name = name;
    this.sellIn = sellIn;
    this.price = price;
  }

  // Add a template rule to the object
  addRules(rules = []) {
    this.rules = rules;
  }

  // Apply the first rule loaded in the object that match with the coditions and decrease sellIn in 1. Return the current object
  // If object has not rules, the method only return the current object.
  applyRules() {
    if (!this.rules || this.rules.length === 0) return this;

    this.sellIn -= 1;
    const rule = this.rules.find((_rule) => (
      _rule.test(this.sellIn, this.price)
    ));

    if (rule) {
      this.price = rule.exec(this.price);
    }

    return this;
  }
}

  module.exports = Product;
