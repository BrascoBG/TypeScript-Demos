function add(num1, num2, printResult, result) {
    var calcResult = num1 + num2;
    if (printResult) {
        console.log(result + calcResult);
    }
    else {
        throw new Error("Error");
    }
}
var showResult = true;
var result = "The result is: ";
add(2, 3, showResult, result);
