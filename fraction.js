class Fraction {
  constructor(num, den) {
    this.num = num;
    this.den = den;
  }

  getDecimal() {
    return this.num / this.den;
  }

  compareTo(otherFraction) {
    const commonDenominator = this.den * otherFraction.den;
    const newFraction1 = new Fraction(
      this.num * otherFraction.den,
      commonDenominator
    );
    const newFraction2 = new Fraction(
      otherFraction.num * this.den,
      commonDenominator
    );
    if (newFraction1.num > newFraction2.num) {
      return 1;
    } else if (newFraction1.num < newFraction2.num) {
      return -1;
    } else {
      return 0;
    }
  }
}




// adding fractions
class AddTwoNumbers
{
  constructor(num1,num2){
  this.num1=num1;
  this.num2=num2;
  }


//Multiplication
const prompt=require('prompt-sync')();
class Fraction {
  constructor(numerator, denominator) {
    this.numerator = numerator;
    this.denominator = denominator;
  }

  static fromInput() {
    const numerator = parseInt(prompt("Enter numerator:"));
    const denominator = parseInt(prompt("Enter denominator:"));
    return new Fraction(numerator, denominator);
  }

  multiply(other) {
    const numerator = this.numerator * other.numerator;
    const denominator = this.denominator * other.denominator;
    return new Fraction(numerator, denominator);
  }
}

const fraction1 = Fraction.fromInput();
const fraction2 = Fraction.fromInput();

const product = fraction1.multiply(fraction2);
console.log(`Product: ${product.numerator}/${product.denominator}`);


  add(){
    return this.num1 + this.num2;
  }
}
let addtwonumbers= new AddTwoNumbers(2,3);
let result=addtwonumbers.add();
console.log(result);

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

function output(fraction1, fraction2){
  let compare = fraction1.compareTo(fraction2){
    if(compare == 1){
      return `${fraction1.num}/${fraction1.den} is greater `;
    }
    eles if(compare == -1){
    return `${fraction2.num}/${fraction2.den}  is greater`;
    }
    else{
      return `${fraction1.num}/${fraction1.den} is equal ${fraction2.num}/${fraction2.den}`;
    }
  }
  
  let largest = output(fraction1, fraction2);
  console.log(largest)

