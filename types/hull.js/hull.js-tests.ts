import hull = require('hull.js');

const numberPointSet = [[236, 126], [234, 115], [238, 109], [247, 102]];
const objectPointSet = [{ lng: -0.2067, lat: 51.4911 }, { lng: -0.2070, lat: 51.4915 }];

hull(numberPointSet);

hull(numberPointSet, 50);

hull(objectPointSet, 50, ['.lng', '.lat']);
