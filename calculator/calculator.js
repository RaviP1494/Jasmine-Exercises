window.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById("calc-form");
  if (form) {
    setupInitialValues();
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      update();
    });
  }
});

function getCurrentUIValues() {
  return {
    amount: +(document.getElementById("loan-amount").value),
    years: +(document.getElementById("loan-years").value),
    rate: +(document.getElementById("loan-rate").value),
  }
}

// Get the inputs from the DOM.
// Put some default values in the inputs
// Call a function to calculate the current monthly payment
function setupInitialValues() {
  let defaultValues = { amount: 10000, years: 5, rate: 2 };
  document.querySelector('#loan-amount').value = defaultValues.amount;
  document.querySelector('#loan-years').value = defaultValues.years;
  document.querySelector('#loan-rate').value = defaultValues.rate;
  let monthly = calculateMonthlyPayment(defaultValues)
  updateMonthly(monthly);
}

// Get the current values from the UI
// Update the monthly payment
function update() {
  let values = getCurrentUIValues();
  let monthly = calculateMonthlyPayment(values);
  updateMonthly(monthly);
}

// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.
function calculateMonthlyPayment(values) {
  let a = values.amount;
  let m = values.years * 12;
  let r = values.rate / 12;
  let payment = a * r / (1 - Math.pow(1 + r, -(m)));
  return (Math.round(payment * 100) / 100).toString();
}

// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly(monthly) {
  document.querySelector('#monthly-payment').innerText = monthly;
}
