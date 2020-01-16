function BankAccount(accountName, initialAmount, depositAmount, withdrawAmount) {
  this.accountName = accountName;
  this.initialAmount = initialAmount;
  this.depositAmount = depositAmount;
  this.withdrawAmount = withdrawAmount;
}

BankAccount.prototype.addDeposit = function() {
  this.initialAmount += this.depositAmount
}

BankAccount.prototype.subWithdraw = function() {
  this.initialAmount -= this.withdrawAmount
}

// user logic
$(document).ready(function() {
  $("form#account-setup").submit(function(e) {
    e.preventDefault();
    var userInputName = $("input#name").val();
    var firstDeposit = $("input#first-deposit").val();

  })

  $("form#account-management").submit(function(e) {
    e.preventDefault();
    var deposit = $("input#deposit").val();
    var withdraw = $("input#withdraw").val();
    
  })
})
