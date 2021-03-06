// Back end
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
var personalAccount = new Account();

$(document).ready(function() {
  $("form#account-setup").submit(function(e) {
    e.preventDefault();
    var userInputName = $("input#name").val();
    var firstDeposit = parseInt($("input#first-deposit").val());


    $("input#name").val("");
    $("input#first-deposit").val("");

    personalAccount.initialAmount = firstDeposit;
    // bankAccount.addAccount(personalAccount);

    $("#amount").empty().append(personalAccount.initialAmount);
    $("#user-account").show();
  })

  $("form#account-management").submit(function(e) {
    e.preventDefault();
    var deposit = parseInt($("input#deposit").val());
    var withdraw = parseInt($("input#withdraw").val());

    $("input#deposit").val("");
    $("input#withdraw").val("");

    personalAccount.addDeposit(deposit);
    personalAccount.subWithdraw(withdraw);

    $("#amount").empty().append(personalAccount.initialAmount);
  })
})
