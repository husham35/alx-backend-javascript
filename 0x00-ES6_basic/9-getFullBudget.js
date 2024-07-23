/* Rewrite getFullBudgetObject to use ES6 method properties in the fullBudget object */

// previous function
// export default function getFullBudgetObject(income, gdp, capita) {
//   const budget = getBudgetObject(income, gdp, capita);
//   const fullBudget = {
//     ...budget,
//     getIncomeInDollars: function (income) {
//       return `$${income}`;
//     },
//     getIncomeInEuros: function (income) {
//       return `${income} euros`;
//     },
//   };

//   return fullBudget;
// }

import getBudgetObject from './7-getBudgetObject';

export default function getFullBudgetObject (income, gdp, capita) {
  const budget = getBudgetObject(income, gdp, capita);
  const fullBudget = {
    ...budget,
    getIncomeInDollars: (income) => `$${income}`,
    getIncomeInEuros: (income) => `${income} euros`
  };

  return fullBudget;
}
