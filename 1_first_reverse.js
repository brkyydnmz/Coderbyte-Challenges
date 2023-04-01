function FirstReverse(str) {
    var backwardString = "";
    var splitString = str.split("");
    for(var i = splitString.length-1 ; i >=0; i--){  //-1 because array starts with 0. "HELLO" [0,1,2,3,4] 
        backwardString += splitString[i];
    }
    return backwardString;
}


console.log(FirstReverse("Hello"));  //OUTPUT: OLLEH

// 2nd Answer TOO SHORT

function FirstReverse(str){return str.split("").reverse().join("");}