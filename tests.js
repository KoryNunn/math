var constants = require('./constants'),
    degreesToRadians = require('./angles/degreesToRadians')
    radiansToDegrees = require('./angles/radiansToDegrees'),
    vectorToComponents = require('./vectors/toComponents');

degreesToRadians
constants

degreesToRadians(360) === constants.radiansInACircle

radiansToDegrees(constants.pi) === 180


// testing component deconstruction
var vectorComponentsResult = vectorToComponents(2, constants.pi / 6 /* 30 degrees */);


vectorComponentsResult
vectorComponentsResult.x === Math.sqrt(3);
vectorComponentsResult.y === 1;