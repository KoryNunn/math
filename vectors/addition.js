/**
 ## Vector addition - add two vectors expressed in polar notation ##

 addition(vectorA - one polar vector, vectorB - one polar vector)

 returns {magnitude, direction expressed as an angle in radians}

 Real world example:

 - (2D) Adding two vectors to produce a third vector that describes the total magnitude and direction.

 - Can be used to apply two forces on one object to get a combined vector

 */

var fromComponents = require('./fromComponents'),
    toComponents = require('./toComponents');

module.exports = function(vectorA, vectorB) {
    var aComponents = toComponents(vectorA.magnitude, vectorA.direction);
    var bComponents = toComponents(vectorB.magnitude, vectorB.direction);

    return fromComponents(aComponents.x + bComponents.x, aComponents.y + bComponents.y);
};
