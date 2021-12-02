import formatcoords = require('formatcoords');

const coords = {
    floats: formatcoords(-35.282, 149.128684),
    floatslonlat: formatcoords(149.128684, -35.282, true),
    array: formatcoords([-35.282, 149.128684]),
    arraylonlat: formatcoords([149.128684, -35.282], true),
    string: formatcoords('-35.282000, 149.128684'),
    latlon: formatcoords({ lat: -35.282, lng: 149.128684 }),
};

for (const key in coords) {
    const coord = coords[key as keyof typeof coords];
    coord.east;
    coord.north;

    const { latValues, lonValues } = coord;
    const latAndLonValues = { latValues, lonValues };
    for (const latOrLonKey in latAndLonValues) {
        const latOrLonValues = latAndLonValues[latOrLonKey as keyof typeof latAndLonValues];
        latOrLonValues.initValue;
        latOrLonValues.degrees;
        latOrLonValues.degreesInt;
        latOrLonValues.degreesFrac;
        latOrLonValues.secondsTotal;
        latOrLonValues.minutes;
        latOrLonValues.minutesInt;
        latOrLonValues.seconds;
    }

    coord.format();
    coord.format('Ff');
    coord.format('f');
    coord.format('-D M s', ', ');
    coord.format('-D M s', { latLonSeparator: ', ' });
    coord.format('DD MM ss X', { latLonSeparator: ' - ', decimalPlaces: 0 });
    coord.format({ decimalPlaces: 0 });
}
