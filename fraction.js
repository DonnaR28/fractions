class Fraction{
  constructor(numerator, denominator){
    this.numerator = numerator
    this.denominator = denominator
  }
  find_compare(){
  
  }
}


const prompt=require('prompt-sync')();
class Fraction {
  constructor(nominator,denominator) {
    this.nominator=nominator;
    this.denominator=denominator;
  }
}
function input() {
  const one = new Fraction(parseFloat(prompt("enter the nominator ")), parseFloat(prompt("enter the denominator ")));
  const two = new Fraction(parseFloat(prompt("enter the nominator ")), parseFloat(prompt("enter the denominator ")));
  return[one,two];
}

function subtraction(one,two) {
  let subtract=(one.nominator*two.denominator-two.nominator*one.denominator)/one.denominator*two.denominator;
  return subtract;
}
function division(one,two) {
  let quotient=one.nominator*two.denominator/two.nominator*one.denominator;
  return quotient;
}
function output(quotient,subtract){
  console.log("the quotient of the fractions is",quotient);
  console.log("the subtraction of the fractions results in",subtract);
}
function main(){
  let [one,two]=input();
  let subtract=subtraction(one,two);
  let quotient=division(one,two);
  output(quotient,subtract);
}
main()
