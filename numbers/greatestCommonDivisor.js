/**
    ## Greatest common divisor ##

        greatestCommonDivisor(anyInteger)

    returns a natural number

    Real world example:

    - Find the largest number that divides two numbers without a remainder

*/

module.exports = function gcd(a, b) {
    if (a < 0) {
        a = -a;
    }

    if (b < 0) {
      b = -b;  
    }
    
    if (b > a) {
        var temp = a; a = b; b = temp;
    }
    
    while (true) {
        a %= b;
        
        if (a == 0) {
            return b;
        }
        
        b %= a;
        
        if (b == 0) {
            return a;
        }
    }
};
