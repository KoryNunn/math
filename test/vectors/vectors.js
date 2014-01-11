/**
    Vector tests
*/

var grape = require('grape'),
    math = require('../../');

grape('Vector component deconstruction', function(t){
    t.plan(2);

    var actual = math.vectors.toComponents(2, math.constants.pi / 6 /* 30 degrees */);

    t.equal(actual.x, Math.sqrt(3));
    t.equal(actual.y, 1.0);
});