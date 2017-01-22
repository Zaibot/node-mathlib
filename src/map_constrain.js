module.exports = function(value, inLow, inHigh, outMin, outMax) {
  const map = (x - inLow) * (outMax - outMin) / (inHigh - inLow) + outMin;
  return map <= outMin ? outMin : map >= outMax ? outMax : map;
}
