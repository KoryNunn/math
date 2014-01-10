module.exports = {
    constants: require('./constants'),
    vectors: {
        toComponents: require('./vectors/toComponents')
    },
    angles: {
        toComponents: require('./angles/degreesToRadians'),
        toComponents: require('./angles/radiansToDegrees')
    }
};