document.getElementById("bonus-btn").addEventListener("click",
    function(){

        
        const pin= getValueFromInput("bonus-pin")
        if(pin === "0000"){
            alert(`Bonus Money successfully.
                 Date: ${new Date()}`)

            //1. history container ke store kore niye asbo 
            const history= document.getElementById("history-container")
            // 2.new div create korbo 
            const newHistory=document.createElement("div")
            // 3.new div e html create korbo 
            newHistory.innerHTML=`
            <div class="transaction-card p-5 bg-base-100 ">Bonus money successfully paid. Date: ${new Date()}
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



