'use strict'

class BankAccount {
    constructor(accountNumber, owner){
        this.accountNumber = accountNumber
        this.owner = owner
        this.transactions = []
        this.accountBalance = 0
    }

    balance() {
        for(let i = 0; i < this.transactions.length; i++){
        this.accountBalance += this.transactions[i] 
        return this.transactions
    }
}


    deposit(amt) {
        this.accountBalance = this.accountBalance + amt

        if (amt > 0) {
        return this.transactions.push(this.accountBalance);
        } else (amt < 0)
        return false
    }

    charge(payee, amt) {
        if (amt < this.accountBalance) {
        return this.transactions.push(payee, amt)
        } else (amt > this.accountBalance)
        return false
    }
}

class Transaction {
    constructor(amount, payee) { 
        this.amount = amount
        this.payee = payee
        this.date = Date()
    }
}

class SavingsAccount extends BankAccount {
    constructor(accountNumber, owner, interestRate) {
        super(accountNumber, owner, transactions, interestRate)
        this.interestRate = .15
    }

    accrueInterest() {
        let interest = balance() * this.interestRate;
        return this.transactions.push(interest)
    }
}

let acct1 = new BankAccount("5553429", "John Doe");

console.log(acct1.accountNumber);  // 5553429
console.log(acct1.owner); // John Doe
console.log(acct1.balance()) // 0

acct1.deposit(100)
console.log(acct1.balance()) // 100

acct1.deposit(-200)  // should not be allowed
console.log(acct1.balance()) // 100

acct1.charge("Target", 30.50)
acct1.charge("FreeBirds", 15.15)
console.log(acct1.balance())  //54.35

acct1.charge("Diamond Shop", 1000) // should not be allowed
console.log(acct1.balance())  //54.35

acct1.charge("Targe", -20) //refund
console.log(acct1.balance())  //74.35