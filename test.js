const test = require("flug");
const isWKT = require("./is-wkt");

test("id 3857 wkt", ({ eq }) => {
  const str = `PROJCS["WGS 84 / Pseudo-Mercator",GEOGCS["WGS 84",DATUM["WGS_1984",SPHEROID["WGS 84",6378137,298.257223563,AUTHORITY["EPSG","7030"]],AUTHORITY["EPSG","6326"]],PRIMEM["Greenwich",0,AUTHORITY["EPSG","8901"]],UNIT["degree",0.0174532925199433,AUTHORITY["EPSG","9122"]],AUTHORITY["EPSG","4326"]],PROJECTION["Mercator_1SP"],PARAMETER["central_meridian",0],PARAMETER["scale_factor",1],PARAMETER["false_easting",0],PARAMETER["false_northing",0],UNIT["metre",1,AUTHORITY["EPSG","9001"]],AXIS["X",EAST],AXIS["Y",NORTH],EXTENSION["PROJ4","+proj=merc +a=6378137 +b=6378137 +lat_ts=0.0 +lon_0=0.0 +x_0=0.0 +y_0=0 +k=1.0 +units=m +nadgrids=@null +wktext  +no_defs"],AUTHORITY["EPSG","3857"]]`;
  const result = isWKT(str);
  eq(result, true);
});

test("proj4js string", ({ eq }) => {
  const str = `+proj=merc +a=6378137 +b=6378137 +lat_ts=0.0 +lon_0=0.0 +x_0=0.0 +y_0=0 +k=1.0 +units=m +nadgrids=@null +wktext  +no_defs`;
  const result = isWKT(str);
  eq(result, false);
});

test("multi-line string", ({ eq }) => {
  const str = `GEOGCRS["WGS 84",
  DATUM["World Geodetic System 1984",
      ELLIPSOID["WGS 84",6378137,298.257223563,
          LENGTHUNIT["metre",1]]],
  PRIMEM["Greenwich",0,
      ANGLEUNIT["degree",0.0174532925199433]],
  CS[ellipsoidal,2],
      AXIS["geodetic latitude (Lat)",north,
          ORDER[1],
          ANGLEUNIT["degree",0.0174532925199433]],
      AXIS["geodetic longitude (Lon)",east,
          ORDER[2],
          ANGLEUNIT["degree",0.0174532925199433]],
  ID["EPSG",4326]]`;
  eq(isWKT(str), true);
});
