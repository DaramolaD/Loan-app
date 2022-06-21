
// listen for submit

document.getElementById('loan-form').addEventListener('submit', computeResults);

function computeResults(e) {
  //UI 
  
  const UIamount = document.getElementById('amount').value;
  const UIinterest = document.getElementById('interest').value;
  const UIyears = document.getElementById('years').value;
  
  // Calculate 
  const principal = parseFloat(UIamount);
  const calculateInterest = parseFloat(UIinterest) / 100 / 12;
  const calculatedPayment = parseFloat(UIyears) * 12;
  
  // Calculate monthly payment
  const x = Math.pow( 1 + calculateInterest, calculatedPayment);
  const monthly = ( principal * x * calculateInterest) / ( x - 1);
  const monthlyPayment = monthly.toFixed(2);
  
  // compute Interest
  
  const totalInterest = (monthly * calculatedPayment - principal).toFixed(2);
  
  // compute Total Payment
  
  const totalPayment = (monthly * calculatedPayment).toFixed(2);
  
  // show results
  
  document.getElementById('monthlyPayment').innerHTML = '$' + monthlyPayment;
  
  document.getElementById('totalInterest').innerHTML = '%' + totalInterest;
  
  document.getElementById('totalPayment').innerHTML = '$' + totalPayment;
  
  e.preventDefault();
}

