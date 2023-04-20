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
    
    
  

