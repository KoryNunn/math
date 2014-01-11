/**
 ## Vector addition - add two vectors expressed in polar notation ##

 addition(A - one polar vector, B - one polar vector)

 returns {magnitude, direction expressed as an angle in radians}

 Real world example:

 - (2D) Adding two vectors to produce a third vector that describes the total magnitude and direction.

 - Can be used to apply two forces on one object to get a combined vector

 */

var fromComponents = require('./fromComponents'),
    toComponents = require('./toComponents');

module.exports = function(A, B) {
    var aComponents = toComponents(A.magnitude, A.direction);
    var bComponents = toComponents(B.magnitude, B.direction);

    return fromComponents(aComponents.x + bComponents.x, aComponents.y + bComponents.y);
};
