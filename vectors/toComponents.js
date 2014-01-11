/**
    ## Vector to Components ##

        toComponents(magnatude, angle in radians)

    returns x,y

    Real world example:

    convert an angle and a distance into a difference in x,y

*/

module.exports = function(magnitude, angle) {
    return {
      x: Math.cos(angle) * magnitude,
      y: Math.sin(angle) * magnitude
    };
};
