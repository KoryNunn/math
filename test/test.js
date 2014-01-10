var grape = require('grape'),
    math = require('../');

grape('Degrees to radians', function(t){
    t.plan(1);

    t.equal(math.angles.degreesToRadians(360), math.constants.radiansInACircle);
});