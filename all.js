module.exports = {
    constants: require('./constants'),
    vectors: {
        toComponents: require('./vectors/toComponents')
    },
    angles: {
        degreesToRadians: require('./angles/degreesToRadians'),
        radiansToDegrees: require('./angles/radiansToDegrees')
    }
};