"use strict";
/*
***** BEFORE CODE *****
let bankAccount = {
    money: 2000,
    deposit(value) {
        this.money += value;
    }
};

let myself = {
    name: 'Max',
    bankAccount: bankAccount,
    hobbies: [ 'Sports', 'Cooking' ]
};

myself.bankAccount.deposit(3000);
console.log(myself);
*/
var bankAccount = {
    money: 2000,
    deposit: function (value) {
        this.money += value;
    }
};
var myself = {
    bankAccount: bankAccount,
    name: 'Max',
    hobbies: ['Sports', 'Cooking']
};
myself.bankAccount.deposit(3000);
console.log(myself);
