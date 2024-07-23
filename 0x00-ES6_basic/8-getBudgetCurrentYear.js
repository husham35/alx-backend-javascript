/* Rewrite the getBudgetForCurrentYear function to use ES6 computed property names on the budget object */
// previous function
// function getCurrentYear() {
//   const date = new Date();
//   return date.getFullYear();
// }

// export default function getBudgetForCurrentYear(income, gdp, capita) {
//   const budget = {};

//   budget[`income-${getCurrentYear()}`] = income;
//   budget[`gdp-${getCurrentYear()}`] = gdp;
//   budget[`capita-${getCurrentYear()}`] = capita;

//   return budget;
// }
function getCurrentYear () {
	const date = new Date();
	return date.getFullYear();
}

export default function getBudgetForCurrentYear (income, gdp, capita) {
	return {
		[`income-${getCurrentYear()}`]: income,
		[`gdp-${getCurrentYear()}`]: gdp,
		[`capita-${getCurrentYear()}`]: capita
	};
}
