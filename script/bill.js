document.getElementById("bill-btn").addEventListener("click",
    function(){
        //1. bank account get 
        const bankAccount=getValueFromInput("bill-bank")
        if(bankAccount == "Select Back"){
            alert("please select a bank")
            return;
        }

        // 2.get bank account number 
        const accno=getValueFromInput("bill-num");
        // console.log(accno)
        if(accno.length !=11){
            alert("Invalid Number")
            return;
        }

        // 3.get amount 
        const amount= getValueFromInput("bill-amount")
        const newBalance=getBalance() - Number(amount)
        console.log(newBalance)
        
        const pin= getValueFromInput("bill-pin")
        if(pin === "1234"){
            alert(`Bill Pay successfully from 
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
            <div class="transaction-card p-5 bg-base-100 ">Bill Pay success from
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

