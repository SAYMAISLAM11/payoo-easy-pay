document.getElementById("tran-money-btn").addEventListener("click",
    function(){
         // 1.get agent num and validation
         const tranNum=getValueFromInput("tran-num")
         if(tranNum.length != 11){
            alert("Invalid Number");
            return;
        }

          // 2.get amount,validation 
          const tranAmount=getValueFromInput("tran-amount")

        //    3.get current balance
        const currentBalance=getBalance("balance")

        // 4.calculate new balance 
        const newBalance=currentBalance-Number(tranAmount)

        if(newBalance<0){
            alert("Invalid Balance");
            return;
        }

        // 5.get pin and verify 
         const tranPin=getValueFromInput("tran-pin")

         if(tranPin === "1234"){
            // 5.1.true->alart->get balance
            alert("Transfer money Successfully")
               console.log("New Balance:",newBalance)
               setBalance(newBalance);


                //1. history container ke store kore niye asbo 
            const history= document.getElementById("history-container")
            // 2.new div create korbo 
            const newHistory=document.createElement("div")
            // 3.new div e html create korbo 
            newHistory.innerHTML=`
            <div class="transaction-card p-5 bg-base-100 ">Transfer ${tranAmount} Taka success to
             ${tranAmount} at ${new Date()}
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



