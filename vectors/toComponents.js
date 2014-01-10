module.exports = function(radians, magnitude){
    return [
        Math.cos(magnitude) * radians,
        Math.sin(magnitude) * radians
    ];
};