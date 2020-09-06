function add(num1: number, num2: number, printResult: boolean, result: string) {
  let calcResult = num1 + num2;
  if (printResult) {
    console.log(result + calcResult);
  } else {
    throw new Error("Error");
  }
}

let showResult = true;
let result = "The result is: ";

add(2, 3, showResult, result);
