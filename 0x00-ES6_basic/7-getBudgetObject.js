/* Modify the following function’s budget object to simply use the keyname instead. */

export default function getBudgetObject (income, gdp, capita) {
// previous object
	// const budget = {
	//   income: income,
	//   gdp: gdp,
	//   capita: capita,
	// };

	//   new object
	const budget = {
	income,
	gdp,
	capita
	};

	return budget;
}
