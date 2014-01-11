/**
    Vector tests
*/

var grape = require('grape'),
    math = require('../../'),
    helpers = require('../helpers');

grape('Vector component deconstruction', function(t){
    t.plan(2);

    var thirtyDegrees = math.constants.pi / 6;
    var actual = math.vectors.toComponents(2,  thirtyDegrees);

    t.closeTo(actual.x, Math.sqrt(3));
    t.closeTo(actual.y, 1.0);
});