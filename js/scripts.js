function BankAccount() {
  this.currentId = 0;
  this.accounts = [];
}

BankAccount.prototype.assignId = function() {
  this.currentId += 1;
  return this.currentId;
}

BankAccount.prototype.addAccount = function(account) {
  account.id = this.assignId();
  this.accounts.push(account);
}

BankAccount.prototype.findAccount = function(id) {
  for (var i = 0; i < this.accounts.length; i++) {
    if (this.accounts[i]) {
      return this.accounts[i];
    }
  }
  return false;
}

function Account(accountName, initialAmount) {
  this.accountName = accountName;
  this.initialAmount = initialAmount;
}

Account.prototype.addDeposit = function(depositAmount) {
  this.initialAmount += depositAmount
  return this.initialAmount;
}

Account.prototype.subWithdraw = function(withdrawAmount) {
  this.initialAmount -= withdrawAmount
  return this.initialAmount;
}

// user logic
var bankAccount = new BankAccount();

$(document).ready(function() {
  $("form#account-setup").submit(function(e) {
    e.preventDefault();
    var userInputName = $("input#name").val();
    var firstDeposit = $("input#first-deposit").val();

    // have it create an id

    $("input#name").val("");
    $("input#first-deposit").val("");

    var personalAccount = new Account(userInputName, firstDeposit);
    bankAccount.addAccount(personalAccount);
    console.log(firstDeposit);

    $("#amount").empty().append(personalAccount.initialAmount);
    $("#user-account").show();
  })

  $("form#account-management").submit(function(e) {
    e.preventDefault();
    var deposit = $("input#deposit").val();
    var withdraw = $("input#withdraw").val();

    var personalAccount = new Account(userInputName, firstDeposit);
    $("#amount").empty().append(personalAccount.initialAmount.addDeposit(deposit));

  })
})
