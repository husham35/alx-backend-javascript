function calculateNumber(type, a, b) {
  const numA = Math.round(a);
  const numB = Math.round(b);
  let c = 0;
  switch (type) {
    case 'SUM':
      c = numA + numB;
      break;
    case 'SUBTRACT':
      c = numA - numB;
      break;
    case 'DIVIDE':
      if (numB === 0) {
            c = "Error";
      } else {
            c = numA / numB;
      }
      break;
  }
  return c;
}

module.exports = calculateNumber;
