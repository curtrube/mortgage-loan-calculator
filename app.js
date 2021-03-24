'use strict';

const btnSubmit = document.getElementById('btn-calculate');

btnSubmit.addEventListener('click', function(event) {
  event.preventDefault();

  // Get input variables
  let principal = document.getElementById('loan-amount').value;
  let interestRate = document.getElementById('interest-rate').value;
  let mortgageLength = document.getElementById('mortgage-length').value;

  // Calculate monthly interest rate
  interestRate = (interestRate / 100) / 12;

  // Calculate length of mortgage in months
  mortgageLength = mortgageLength * 12;

  console.log(`Loan Amount: ${principal}`);
  console.log(`Monthly Interest Rate: ${interestRate}`);
  console.log(`Mortgage Length: ${mortgageLength} months`);

  // Calculate monthly mortgage payment
  let monthlyPayment = (principal * interestRate) / (1 - (Math.pow((1 + interestRate), mortgageLength * -1)));
  console.log(`Monthly Payment: ${monthlyPayment.toFixed(2)}`);
});
