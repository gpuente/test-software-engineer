// Import class
const CarInsurance = require('./lib/CarInsurance/CarInsurance');

// Import helpers
const helpers = require('./utils/helpers');
const { daysFlow, configNewProdut} = helpers;

// Import templates for rules
const templateRules = require('./utils/templateRules');

const {
  defaultRules,
  fullCoverageRules,
  specialFullCoverageRules,
  superSaleRules,
  noRules,
} = templateRules;


// Array of products
const productsAtDayZero = [
  configNewProdut('Medium Coverage', 10, 20, defaultRules),
  configNewProdut('Full Coverage', 2, 0, fullCoverageRules),
  configNewProdut('Low Coverage', 5, 7, defaultRules),
  configNewProdut('Mega Coverage', 0, 80, noRules),
  configNewProdut('Mega Coverage', -1, 80, noRules),
  configNewProdut('Special Full Coverage', 15, 20, specialFullCoverageRules),
  configNewProdut('Special Full Coverage', 10, 49, specialFullCoverageRules),
  configNewProdut('Special Full Coverage', 5, 49, specialFullCoverageRules),
  configNewProdut('Super Sale', 3, 6, superSaleRules),
];


// I create an new instance of CarInsurance and add the array of products
const carInsurance = new CarInsurance(productsAtDayZero);
const format = process.env.FORMAT;

console.log(daysFlow(30, carInsurance, format));



