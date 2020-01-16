function BankAccount(accountName, initialAmount) {
  this.accountName = accountName;
  this.initialAmount = initialAmount;
}

BankAccount.prototype.addDeposit = function(depositAmount) {
  this.initialAmount += depositAmount
  return this.initialAmount;
}

BankAccount.prototype.subWithdraw = function(withdrawAmount) {
  this.initialAmount -= withdrawAmount
  return this.initialAmount;
}

// user logic
$(document).ready(function() {
  $("form#account-setup").submit(function(e) {
    e.preventDefault();
    var userInputName = $("input#name").val();
    var firstDeposit = $("input#first-deposit").val();

    $("input#name").val("");
    $("input#first-deposit").val("");

    var personalAccount = new BankAccount(userInputName, firstDeposit);
    console.log(firstDeposit);
    $("#amount").append(personalAccount.initialAmount);
    $("#user-account").show();
  })

  $("form#account-management").submit(function(e) {
    e.preventDefault();
    var deposit = $("input#deposit").val();
    var withdraw = $("input#withdraw").val();

  })
})
