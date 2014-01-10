/**
    Vector to Components:

    toComponents(magnatude, angle in degrees)

    returns x,y
*/

module.exports = function(magnitude, angle) {
    return {
      x: Math.cos(angle) * magnitude,
      y: Math.sin(angle) * magnitude
    };
};