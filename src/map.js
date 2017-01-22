module.exports = function(value, inLow, inHigh, outLow, outHigh) {
  return (x - inLow) * (outHigh - outLow) / (inHigh - inLow) + outLow;
}
