

function incrementFunction(){

    var element = document.getElementById('doplus').innerHTML;
    // var value = element.innerHTML;

    ++element;
    
      document.getElementById('doplus').innerHTML = element;


}


function decrementFunction(){

    var element = document.getElementById('doplus').innerHTML;
    // var value = element.innerHTML;

    --element;
    
      document.getElementById('doplus').innerHTML = element;


}


function divideFunction(){

    var element = document.getElementById('doplus').innerHTML;
  

       var divide = element/2;

    //    console.log(divide); 

      document.getElementById('doplus').innerHTML = divide;


}

function multiplyFunction(){

    var element = document.getElementById('doplus').innerHTML;
  

       var multiply = element*2;

    //    console.log(divide); 

      document.getElementById('doplus').innerHTML = multiply;


}

