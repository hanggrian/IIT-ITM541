const billTotal = document.getElementById('bill-total');
const tipPercentage = document.getElementById('tip-percentage');
const tipPercentage2 = document.getElementById('tip-percentage2');
const tipAmount = document.getElementById('tip-amount');
const totalBillWithTip = document.getElementById('total-bill-with-tip');

// field will reset to 0 when input mismatches
billTotal.addEventListener('change', function() {
  billTotal.value = parseFloat(billTotal.value) || 0;
  calculate();
});

// two-way value binding, field will reset to old value when input mismatches
tipPercentage2.value = tipPercentage.value;
tipPercentage.addEventListener('change', function() {
  tipPercentage2.value = tipPercentage.value;
  calculate();
});
tipPercentage2.addEventListener('change', function() {
  var oldValue = tipPercentage.value;
  var newValue = parseInt(tipPercentage2.value) || undefined;
  if (newValue !== undefined && newValue >= 0 && newValue <= 100) {
    tipPercentage.value = newValue;
  } else {
    tipPercentage.value = oldValue;
    tipPercentage2.value = oldValue;
  }
  calculate();
});

// disable the input fields
tipAmount.disabled = true;
totalBillWithTip.disabled = true;

/**
 * Listener action for all enabled input fields and sliders.
 */
function calculate() {
  const bill = parseFloat(billTotal.value) || undefined;
  const tip = parseInt(tipPercentage.value) || undefined;
  if (bill == undefined || tip == undefined) {
    tipAmount.value = '-'
    totalBillWithTip.value = '-';
    return;
  }

  const tipAmountValue = bill * tip / 100;
  const totalBillWithTipValue = bill + tipAmountValue;

  tipAmount.value = Number(tipAmountValue.toFixed(2));
  totalBillWithTip.value = Number(totalBillWithTipValue.toFixed(2));
}
