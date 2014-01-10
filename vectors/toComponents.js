module.exports = function(magnitude, angle /* radians */) {
    return {
      x: Math.cos(angle) * magnitude,
      y: Math.sin(angle) * magnitude
    };
};