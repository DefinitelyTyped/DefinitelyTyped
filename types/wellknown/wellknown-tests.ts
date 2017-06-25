import * as wellknown from './index';
wellknown.parse("POINT(1 2)");
const geoJson: {} = {
    coordinates: [1, 2],
    type: "Point"
};
wellknown.stringify(geoJson);
