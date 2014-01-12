module.exports = {
    constants: require('./constants'),
    vectors: {
        toComponents: require('./vectors/toComponents'),
        fromComponents: require('./vectors/fromComponents'),
        addition: require('./vectors/addition'),
        scale: require('./vectors/scale')
    },
    angles: {
        degreesToRadians: require('./angles/degreesToRadians'),
        radiansToDegrees: require('./angles/radiansToDegrees')
    },
    numbers: {
        isPowerOfTwo: require('./numbers/isPowerOfTwo'),
        isNatural: require('./numbers/isNatural'),
        greatestCommonDivisor: require('./numbers/greatestCommonDivisor')
    }
};