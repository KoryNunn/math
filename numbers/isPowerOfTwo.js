/**
    ## Is power of Two ##

        isPowerOfTwo(naturalNumber as an integer)

    returns boolean

    Real world example:

    - Test if a series of bits needs padding.

    - Efficently test the outout of a function that should only return values that are powers of two (say memory sizes)

*/

module.exports = function isPowerOfTwo(naturalNumber) {
    return (naturalNumber & (naturalNumber - 1)) === 0;
};

