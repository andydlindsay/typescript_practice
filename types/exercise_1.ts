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

// Refactored to include explicit type declarations
type BankAccount = {
    money: number,
    deposit: (value: number) => void
};

const bankAccount: BankAccount = {
    money: 2000,
    deposit(value: number): void {
        this.money += value;
    }
};

const myself: {
    bankAccount: BankAccount,
    name: string,
    hobbies: string[]
} = {
    bankAccount,
    name: 'Max',
    hobbies: [ 'Sports', 'Cooking' ]
};

myself.bankAccount.deposit(3000);
console.log(myself);
