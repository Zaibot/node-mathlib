module.exports = function(value, inLow, inHigh, outLow, outHigh) {
  return (value - inLow) * (outHigh - outLow) / (inHigh - inLow) + outLow;
}
