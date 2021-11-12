# is-wkt
Small Library to Check if a String is Probably [Well-Known Text](https://en.wikipedia.org/wiki/Well-known_text_representation_of_coordinate_reference_systems)

# background
Most of the algorithm and the code is taken from the [testWKT](https://github.com/proj4js/proj4js/blob/315398ea924c3169a257e3cf9796bc3d120039ee/lib/parseCode.js#L12) function in [proj4js](https://github.com/proj4js/proj4js) whose license is found [here](https://github.com/proj4js/proj4js/blob/master/LICENSE.md).

# install
```bash
npm install is-wkt
```

# usage
```js
import isWKT from "is-wkt";

isWKT(`PROJCS["WGS 84 / Pseudo-Mercator",GEOGCS["WGS 84",DATUM["WGS_1984",SPHEROID["WGS 84",6378137,298.257223563,AUTHORITY["EPSG","7030"]],AUTHORITY["EPSG","6326"]],PRIMEM["Greenwich",0,AUTHORITY["EPSG","8901"]],UNIT["degree",0.0174532925199433,AUTHORITY["EPSG","9122"]],AUTHORITY["EPSG","4326"]],PROJECTION["Mercator_1SP"],PARAMETER["central_meridian",0],PARAMETER["scale_factor",1],PARAMETER["false_easting",0],PARAMETER["false_northing",0],UNIT["metre",1,AUTHORITY["EPSG","9001"]],AXIS["X",EAST],AXIS["Y",NORTH],EXTENSION["PROJ4","+proj=merc +a=6378137 +b=6378137 +lat_ts=0.0 +lon_0=0.0 +x_0=0.0 +y_0=0 +k=1.0 +units=m +nadgrids=@null +wktext  +no_defs"],AUTHORITY["EPSG","3857"]]`);
// true

isWKT("+proj=merc +a=6378137 +b=6378137 +lat_ts=0.0 +lon_0=0.0 +x_0=0.0 +y_0=0 +k=1.0 +units=m +nadgrids=@null +wktext  +no_defs");
// false
```
