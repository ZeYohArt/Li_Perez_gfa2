function sum(n1, n2){
    var sum = n1 + n2;
    document.getElementById("footer").innerHTML = "The sum of "+ n1 +" and "+ n2 +" is "+ sum +".";
}

function difference(n1, n2){
    var difference = n1 - n2;
    document.getElementById("footer").innerHTML = "The difference of "+ n1 +" and "+ n2 +" is "+ difference +".";
}

function product(n1, n2){
    var product = n1 * n2;
    document.getElementById("footer").innerHTML = "The product of "+ n1 +" and "+ n2 +" is "+ product +".";
}

function quotient(n1, n2){
    var quotient = n1 / n2;
    document.getElementById("footer").innerHTML = "The quotient of "+ n1 +" and "+ n2 +" is "+ quotient +".";
}

function remainder(n1, n2){
    var remainder = n1 % n2;
    document.getElementById("footer").innerHTML = "The remainder of "+ n1 +" divided by "+ n2 +" is "+ remainder +".";
}

/* Bootstrap JS was also used for this assessment */
