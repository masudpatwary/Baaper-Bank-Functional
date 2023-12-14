document.getElementById("btn-diposit").addEventListener("click", function () {
  const newDipositTotalAmount = getInputFieldValueById("new-diposit");
  const totalPreviousDiposit = getTextElementValueById("diposit-total");
  const totalDiposit = newDipositTotalAmount + totalPreviousDiposit;
  setElementValueById("diposit-total", totalDiposit);

  const previousBalance = getTextElementValueById("balance-total");
  const totalBalance = previousBalance + newDipositTotalAmount;
  setElementValueById("balance-total", totalBalance);
});
