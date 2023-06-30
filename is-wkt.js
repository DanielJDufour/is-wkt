// keywords are from proj4js
const keywords = [
  "PROJECTEDCRS",
  "PROJCRS",
  "GEOGCS",
  "GEOCCS",
  "PROJCS",
  "LOCAL_CS",
  "GEODCRS",
  "GEODETICCRS",
  "GEODETICDATUM",
  "ENGCRS",
  "ENGINEERINGCRS",
  "PRIMEM",
  "DATUM"
];

function isWKT(str) {
  // clean any blank spaces in beginning
  str = str.trim();

  if (
    str.startsWith("PROJCS[") ||
    str.startsWith("PROJCRS[") ||
    str.startsWith("GEOGCS[") ||
    str.startsWith("GEOGCRS[")
  ) {
    for (let i = 0; i < keywords.length; i++) {
      const kw = keywords[i];
      if (str.includes(kw + "[")) {
        return true;
      }
    }
  } else {
    return false;
  }
}

if (typeof define === "function" && define.amd) {
  define(function () {
    return isWKT;
  });
}

if (typeof module === "object") {
  module.exports = isWKT;
  module.exports.default = isWKT;
}
if (typeof self === "object") self.isWKT = isWKT;
if (typeof window === "object") window.isWKT = isWKT;
