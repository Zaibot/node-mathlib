module.exports = function(value, inLow, inHigh, outMin, outMax) {
  const value = (x - inLow) * (outMax - outMin) / (inHigh - inLow) + outMin;
  return value <= outMin ? outMin : value >= outMax ? outMax : value;
}
