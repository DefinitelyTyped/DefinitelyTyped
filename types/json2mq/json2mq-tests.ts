import * as json2mq from 'json2mq';

json2mq({ screen: true });  // -> 'screen'

json2mq({ handheld: false });  // -> 'not handheld'

json2mq({ minWidth: 100, maxWidth: 200 });
// -> '(min-width: 100px) and (max-width: 200px)'

json2mq({ minWidth: 100, maxWidth: '20em' });
// -> '(min-width: 100px) and (max-width: 20em)'

json2mq([{ screen: true, minWidth: 100 }, { handheld: true, orientation: 'landscape' }]);
// -> 'screen and (min-width: 100px), handheld and (orientation: landscape)'

json2mq({ all: true, monochrome: true });
// -> 'all and monochrome'

// Test QueryObject
const mediaQuery: json2mq.QueryObject = {
    screen: true,
    monochrome: false,
    maxWidth: 200,
    minHeight: '10rem',
};
