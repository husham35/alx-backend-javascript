/* Rewrite the function appendToEachArrayValue to use ES6’s for...of operator. And don’t forget that var is not ES6-friendly. */
// previous function
// export default function appendToEachArrayValue(array, appendString) {
//   for (var idx in array) {
//     var value = array[idx];
//     array[idx] = appendString + value;
//   }

//   return array;
// }
export default function appendToEachArrayValue (array, appendString) {
	const newArr = [];
	for (const value of array) {
		newArr.push(appendString + value);
	}
	return newArr;
}
