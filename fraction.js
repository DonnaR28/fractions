class Fraction{
  constructor(numerator, denominator){
    this.numerator = numerator
    this.denominator = denominator
  }
  find_compare(){
  
  }
}



// adding fractions
class AddTwoNumbers
{
  constructor(num1,num2){
  this.num1=num1;
  this.num2=num2;
  }
  
  add(){
    return this.num1 + this.num2;
  }
}
let addtwonumbers= new AddTwoNumbers(2,3);
let result=addtwonumbers.add();
console.log(result);
