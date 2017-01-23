module.exports = function(value, inLow, inHigh, outMin, outMax) {
  const map = (value - inLow) * (outMax - outMin) / (inHigh - inLow) + outMin;
  return outMin < outMax
    ? map <= outMin ? outMin : map >= outMax ? outMax : map
    : map <= outMax ? outMax : map >= outMin ? outMin : map;
}
