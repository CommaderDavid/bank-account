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

function Account() {
  this.initialAmount;
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
var personalAccount = new Account();

$(document).ready(function() {
  $("form#account-setup").submit(function(e) {
    e.preventDefault();
    var userInputName = $("input#name").val();
    var firstDeposit = parseInt($("input#first-deposit").val());


    $("input#name").val("");
    $("input#first-deposit").val("");

    personalAccount.initialAmount = firstDeposit;
    bankAccount.addAccount(personalAccount);

    $("#amount").empty().append(personalAccount.initialAmount);
    $("#user-account").show();
  })

  $("form#account-management").submit(function(e) {
    e.preventDefault();
    var deposit = parseInt($("input#deposit").val());
    var withdraw = parseInt($("input#withdraw").val());
    console.log(typeof(personalAccount.initialAmount));

    $("input#deposit").val("");
    $("input#withdraw").val("");

    personalAccount.addDeposit(deposit);
    console.log(personalAccount.initialAmount);
    personalAccount.subWithdraw(withdraw);
    console.log(personalAccount.initialAmount);
    $("#amount").empty().append(personalAccount.initialAmount);

  })
})
