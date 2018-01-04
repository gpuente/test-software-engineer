# ComparaOnline Test Requirements Specification

### Solution description:
This project solve the problem proposed by ComparaOnline. The core code of this project is in **"/src/utils/ruleMaker.js"** and **"/src/utils/templateRules.js"**, here's a description:

 - ruleMaker.js: This module exports 2 functions, a function to create a rule for increase a price and a function to create a rule for decrease a price. A rule is an object that have a **test** property, that allows check if the rule must be applied and an **exec** property that apply the rule (increase or decrease the price as you previously defined). The rules are defined by a range of days, this is for test the sellIn and check for the right rule.
 - templateRules.js: This module exports a bunch of pre-configured rules that can be assigned directly to an Product object.

Another interesting file in the project is the **"/src/config/config.js"** that contains the price limit for te products and the base qty for decrease and increase a price.

This allows you change without effort the limits for price, or the base qty. Also, you can add as many rules as you need in the templateRules to add support for new products.

The class Product has a method to add a templete of rules to the object, so every Product object can recalculate itself with the rules defined for it.

### Scripts

 - **"npm start"**: runs the report
 - **"npm run start:json"**: runs the report in json format
 - **"npm test"**: run the test with coverage report

### Notes
Before run the project, please install the dependencies with **"npm install"**
