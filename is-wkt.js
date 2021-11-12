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
  "ENGINEERINGCRS"
];

function isWKT(str) {
  // clean any blank spaces in beginning
  str = str.trim();

  if (str.startsWith("PROJCS[") || str.startsWith("GEOGCS[")) {
    for (let i = 0; i < keywords.length; i++) {
      const kw = keywords[i];
      if (str.indexOf(kw) !== -1) {
        return true;
      }
    }
  } else {
    return false;
  }
}

if (typeof module === "object") module.exports = isWKT;
if (typeof self === "object") self.isWKT = isWKT;
if (typeof window === "object") window.isWKT = isWKT;
