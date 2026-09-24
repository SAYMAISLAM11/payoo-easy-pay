document.getElementById("cashout-btn").addEventListener("click",
    function(){
         // 1.get agent num and validation
         const cashoutNum=getValueFromInput("cashout-number")
         if(cashoutNum.length != 11){
            alert("Invalid Number");
            return;
        }

          // 2.get amount,validation 
          const cashoutAmount=getValueFromInput("cashout-amount")

        //    3.get current balance
        const currentBalance=getBalance("balance")

        // 4.calculate new balance 
        const newBalance=currentBalance-Number(cashoutAmount)

        if(newBalance<0){
            alert("Invalid Balance");
            return;
        }

        // 5.get pin and verify 
         const cashoutPin=getValueFromInput("cashout-pin")

         if(cashoutPin === "1234"){
            // 5.1.true->alart->get balance
            alert("Cash Out successfull.")
               console.log("New Balance:",newBalance)
               setBalance(newBalance);


                //1. history container ke store kore niye asbo 
            const history= document.getElementById("history-container")
            // 2.new div create korbo 
            const newHistory=document.createElement("div")
            // 3.new div e html create korbo 
            newHistory.innerHTML=`

            <div class="transaction-card p-5 bg-base-100 ">Cashout ${cashoutAmount} success to
             ${cashoutAmount} at ${new Date()}
            </div>
            `
            // 4.history container ke store kore append korbo 
            history.append(newHistory)

        }
        else{
            // 5.2.false->error->return 
            alert("Invalid Pin");
            return;
        }
     
    }
)



// document.getElementById("cashout-btn").addEventListener("click",
//     function(event){
//         // 1.get agent num and validation
//         const cashoutNumInput=document.getElementById("cashout-number");
//         const cashoutNum=cashoutNumInput.value;
//         console.log(cashoutNum)
//         if(cashoutNum.length != 11){
//             alert("Invalid Number");
//             return;
//         }

//         // 2.get amount,validation 
//         const cashoutAmountInput=document.getElementById("cashout-amount");
//         const cashoutAmount=cashoutAmountInput.value;
//         console.log(cashoutAmount)

//         // 3.get current balance
//         const balanceElement=document.getElementById("balance");
//         const balance=balanceElement.innerText;
//         console.log(balance)

//         // 4.calculate new balance 
//         const newBalance=Number(balance)-Number(cashoutAmount)

//         if(newBalance<0){
//             alert("Invalid Balance");
//             return;
//         }
     

//         // 5.get pin and verify 
//         const cashoutPinInput=document.getElementById("cashout-pin");
//         const cashoutPin=cashoutPinInput.value;
//         if(cashoutPin === "1234"){
//             // 5.1.true->alart->get balance
//             alert("Cash Out Successfully")
//                console.log("New Balance:",newBalance)
//                balanceElement.innerText=newBalance;
//         }
//         else{
//             // 5.2.false->error->return 
//             alert("Invalid Pin");
//             return;
//         }
        
//     }
// )