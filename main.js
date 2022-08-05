let price = 0;
let amount = 0;
let result = 0;

document.getElementById("button-first").addEventListener("click", function() {
    
    if(document.getElementById("price-number-first").value == "" || document.getElementById("amount-number-first").value == "") {
        document.getElementById("result-number-first").value = " ";
        document.getElementById("error-first").value = "値段と量を入力してください";

    } else if(document.getElementById("amount-number-first").value == 0) {
        document.getElementById("result-number-first").value = " ";
        document.getElementById("error-first").value = "量を0にすることはできません";
  
    }else if(document.getElementById("unit-first").value == "g") {
        price = document.getElementById("price-number-first").value;
        amount = document.getElementById("amount-number-first").value;
        result = price / amount;
        document.getElementById("result-number-first").value = result;
        document.getElementById("error-first").value = " ";
        
    } else if(document.getElementById("unit-first").value == "kg") {
        price = document.getElementById("price-number-first").value;
        amount = document.getElementById("amount-number-first").value;
        result = price / amount;
        document.getElementById("result-number-first").value = result / 1000;
        document.getElementById("error-first").value = " ";

    }
    
});

document.getElementById("button-second").addEventListener("click", function() {
    
    if(document.getElementById("price-number-second").value == "" || document.getElementById("amount-number-second").value == "") {
        document.getElementById("result-number-second").value = " ";
        document.getElementById("error-second").value = "値段と量を入力してください";

    } else if(document.getElementById("amount-number-second").value == 0) {
        document.getElementById("result-number-second").value = " ";
        document.getElementById("error-second").value = "量を0にすることはできません";
  
    }else if(document.getElementById("unit-second").value == "g") {
        price = document.getElementById("price-number-second").value;
        amount = document.getElementById("amount-number-second").value;
        result = price / amount;
        document.getElementById("result-number-second").value = result;
        document.getElementById("error-second").value = " ";
        
    } else if(document.getElementById("unit-second").value == "kg") {
        price = document.getElementById("price-number-second").value;
        amount = document.getElementById("amount-number-second").value;
        result = price / amount;
        document.getElementById("result-number-second").value = result / 1000;
        document.getElementById("error-second").value = " ";

    }
    
});

document.getElementById("button-third").addEventListener("click", function() {
    
    if(document.getElementById("price-number-third").value == "" || document.getElementById("amount-number-third").value == "") {
        document.getElementById("result-number-third").value = " ";
        document.getElementById("error-third").value = "値段と量を入力してください";

    } else if(document.getElementById("amount-number-third").value == 0) {
        document.getElementById("result-number-third").value = " ";
        document.getElementById("error-third").value = "量を0にすることはできません";
  
    }else if(document.getElementById("unit-third").value == "g") {
        price = document.getElementById("price-number-third").value;
        amount = document.getElementById("amount-number-third").value;
        result = price / amount;
        document.getElementById("result-number-third").value = result;
        document.getElementById("error-third").value = " ";
        
    } else if(document.getElementById("unit-third").value == "kg") {
        price = document.getElementById("price-number-third").value;
        amount = document.getElementById("amount-number-third").value;
        result = price / amount;
        document.getElementById("result-number-third").value = result / 1000;
        document.getElementById("error-third").value = " ";

    }
    
});
