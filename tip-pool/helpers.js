
// accepts 'tipAmt', 'billAmt', 'tipPercent' and sums total from allPayments objects
function sumPaymentTotal(type) {
  let total = 0;

  for (let key in allPayments) {
    let payment = allPayments[key];

    total += Number(payment[type]);
  }

  return total;
}

// converts the bill and tip amount into a tip percent
function calculateTipPercent(billAmt, tipAmt) {
  return Math.round(100 / (billAmt / tipAmt));
}

// expects a table row element, appends a newly created td element from the value
function appendTd(tr, value) {
  let newTd = document.createElement('td');
  newTd.innerText = value;

  tr.append(newTd);
}

function appendDeleteButton(tr) {
  let newDelBtn = document.createElement('td');
  newDelBtn.innerText = 'X';
  tr.append(newDelBtn);
  newDelBtn.addEventListener('click', deleteTr);

  function deleteTr(e) {
    let id = e.target.parentElement.getAttribute('id');
    if (parseInt(e.target.parentElement.firstElementChild.innerText[1]) === NaN) {
      delete allServers[id];
    }
    else {
      delete allPayments[id];
    }
    e.target.parentElement.remove();
  }
}
