document.getElementById("btn-login").addEventListener("click",
    function(event){


    //1. get mobile num input 
    const numInput=document.getElementById("num-input");
    const contactNum=numInput.value;
    console.log(contactNum)


    //2. get user pin 
    const pinInput=document.getElementById("pin-input");
    const pinNum=pinInput.value;
    console.log(pinNum)


    //3. num and pin match 
    if(contactNum =="01300313542" && pinNum=="1234"){

        //4. if true-> alart->homepage 
        alert("Login successfully ")
        
        // window.location.replace("/home.html")
        window.location.assign("/home.html")
    }
    else{
        //5. if false -> alart -> return 
        alert("Login Failed");
        return;

    }

    }
)