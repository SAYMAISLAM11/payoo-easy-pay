document.getElementById("add-money-btn").addEventListener("click",
    function(){
        // bank account get 
        const bankAccount=getValueFromInput("add-money-bank")
        if(bankAccount == "Select a Bank"){
            alert("please select a bank")
            return;
        }

        // 2.get bank account number 
        const accno=getValueFromInput("add-money-num");
        // console.log(accno)
        if(accno.length !=11){
            alert("Invalid Number")
            return;
        }

        // 3.get amount 
        const amount= getValueFromInput("add-money-amount")
        const newBalance=getBalance() +Number(amount)
        console.log(newBalance)
        
        const pin= getValueFromInput("add-money-pin")
        if(pin === "1234"){
            alert(`Add money successfully from 
                ${bankAccount}
                 at
                  ${new Date()}`)
            setBalance(newBalance)

            //1. history container ke store kore niye asbo 
            const history= document.getElementById("history-container")
            // 2.new div create korbo 
            const newHistory=document.createElement("div")
            // 3.new div e html create korbo 
            newHistory.innerHTML=`
            <div class="transaction-card p-5 bg-base-100 ">Add money success from
             ${bankAccount} , Account No: ${accno} at ${new Date()}
            </div>
            `
            // 4.history container ke store kore append korbo 
            history.append(newHistory)

            return;
        }
        else{
            alert("Invalid Pin")
        }
        
    }
)



// document.getElementById("add-money-btn").addEventListener("click",
//     function(){
//         // 1.bank account get 
//         const bankAccount= getValueFromInput("add-money-bank");
//         if(bankAccount =="Select a Bank"){
//             alert("Please select a bank");
//             return;
//         }

//         // 2.get bank account number 
//         const accno=getValueFromInput("add-money-num");
//         if(accno.length != 11){
//             alert("Invalid number")
//             return;
//         }
//         // 3.get account 
//         const amount=getValueFromInput("add-money-amount");
//         const newBalance=getBalance() + Number(amount)
//         console.log(newBalance)


//     }
// )