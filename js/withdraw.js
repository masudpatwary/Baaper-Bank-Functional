document.getElementById("btn-withdraw").addEventListener("click", function () {
  const newWithdraw = getInputFieldValueById("withdraw-new");
  const previousWithdraw = getTextElementValueById("withdraw-total");
  const totalWithDraw = previousWithdraw + newWithdraw;
  setElementValueById("withdraw-total", totalWithDraw);

  const totalPreviousBalance = getTextElementValueById("balance-total");
  const currentBalance = totalPreviousBalance - newWithdraw;
  setElementValueById("balance-total", currentBalance);
});
