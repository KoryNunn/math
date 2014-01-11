/**
 ## Vector scaling - increase the magnitude of the vector, without affecting the direction##

 addition(A - one polar vector, k - a scalar, some constant amount to scale by)

 returns {magnitude, direction expressed as an angle in radians}

 Real world example:

 - (2D) Increasing the force applied to an object, without changing the angle.

 */

module.exports = function(A, k) {
    return {
        magnitude: A.magnitude * k,
        direction: A.direction
    };
};
