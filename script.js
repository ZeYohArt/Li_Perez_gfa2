function sum(){
    var n1 = (parseFloat(document.getElementById("n1").value));
    var n2 = (parseFloat(document.getElementById("n2").value));
    var sum = n1 + n2;
    document.getElementById("footer").innerHTML = "The sum of "+ n1 +" and "+ n2 +" is "+ sum +".";
}

function difference(){
    var n1 = (parseFloat(document.getElementById("n1").value));
    var n2 = (parseFloat(document.getElementById("n2").value));
    var difference = n1 - n2;
    document.getElementById("footer").innerHTML = "The difference of "+ n1 +" and "+ n2 +" is "+ difference +".";
}

function product(){
    var n1 = (parseFloat(document.getElementById("n1").value));
    var n2 = (parseFloat(document.getElementById("n2").value));
    var product = n1 * n2;
    document.getElementById("footer").innerHTML = "The product of "+ n1 +" and "+ n2 +" is "+ product +".";
}

function quotient(){
    var n1 = (parseFloat(document.getElementById("n1").value));
    var n2 = (parseFloat(document.getElementById("n2").value));
    var quotient = n1 / n2;
    document.getElementById("footer").innerHTML = "The quotient of "+ n1 +" and "+ n2 +" is "+ quotient +".";
}

function remainder(){
    var n1 = (parseFloat(document.getElementById("n1").value));
    var n2 = (parseFloat(document.getElementById("n2").value));
    var remainder = n1 % n2;
    document.getElementById("footer").innerHTML = "The remainder of "+ n1 +" divided by "+ n2 +" is "+ remainder +".";
}

/* Bootstrap JS was also used for this assessment */