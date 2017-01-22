module.exports = function(value, inLow, inHigh, outMin, outMax) {
  const map = (value - inLow) * (outMax - outMin) / (inHigh - inLow) + outMin;
  return map <= outMin ? outMin : map >= outMax ? outMax : map;
}
