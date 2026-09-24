function getValueFromInput(id){
    const input=document.getElementById(id);
    const value=input.value;
    // console.log(value)
    return value;
}

function getBalance(){
    const balanceElement=document.getElementById("balance");
    const balance=balanceElement.innerText;
    console.log("current balance:",Number(balance))
    return Number(balance)
}

function setBalance(value){
     const balanceElement=document.getElementById("balance");
     balanceElement.innerText=value;
}

function showOnly(id){
    const addmoney=document.getElementById("add-money");
    const cashout= document.getElementById("cash-out")
    const history=document.getElementById("history")
    const transfer=document.getElementById("transfer-money")
    const bonus=document.getElementById("bonus-money")
    const bill=document.getElementById("bill-money")
    // console.log(`add- ${addmoney}, Cashout- ${cashout}`)

    addmoney.classList.add("hidden")
    cashout.classList.add("hidden")
    history.classList.add("hidden")
    transfer.classList.add("hidden")
    bonus.classList.add("hidden")
    bill.classList.add("hidden")

    // id wala element show koro 
    const selected= document.getElementById(id);
    selected.classList.remove("hidden")
}