class Bank{
    constructor(balance){
        this.balance = balance
    }
    withdraw(amount) {
        //guard clause
        if(this.balance - amount <= 0){
            console.log('could not withdraw')
            console.log({balance : this.balance})
            return
        }
        this.balance -= amount
        console.log('withdraw', `${amount}`)
        console.log({balance : this.balance})
    }
    deposit(amount) {
        this.balance += amount
        console.log('deposited', `${amount}`)
        console.log({balance : this.balance})
    }
}

const qaziChecking = new Bank(0)
const depositButton = document.getElementById('deposit')
const withdrawButton = document.getElementById('withdraw')
const amountInput = document.getElementById('amount')
const balance = document.getElementById('balance')

depositButton.onclick = () =>{
    const amount = Number(amountInput.value)
    qaziChecking.deposit(amount)
    balance.innerText = 'Balance: ${qaziChecking.balance}'
}
withdrawButton.onclick = () =>{
    const amount = Number(amountInput.value)
    qaziChecking.withdraw(amount)
    balance.innerText = 'Balance: ${querySelector.balance}'
}