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
    
    
  
