declare const div: HTMLDivElement;

const input = document.createElement('input');
// $ExpectType Autocomplete
const autoComplete = new AMap.Autocomplete();
// $ExpectType Autocomplete
new AMap.Autocomplete({});
// $ExpectType Autocomplete
new AMap.Autocomplete({
    type: 'type',
    city: 'city',
    datatype: 'all',
    citylimit: true,
    input: 'input',
    output: 'output',
    outPutDirAuto: true
});
// $ExpectType Autocomplete
new AMap.Autocomplete({
    type: 'type',
    city: 'city',
    datatype: 'all',
    citylimit: true,
    input,
    output: div,
    outPutDirAuto: true
});

autoComplete.search('keyword', (status, result) => {
    const temp: 'error' | 'complete' | 'no_data' = status;
    if (typeof result !== 'string') {
        // $ExpectType number
        result.count;
        // $ExpectType string
        result.info;
        // $ExpectType Tip[]
        result.tips;
        {
            const tip = result.tips[0];
            // $ExpectType string
            tip.adcode;
            // $ExpectType string
            tip.address;
            // $ExpectType any[]
            tip.city;
            // $ExpectType string
            tip.district;
            // $ExpectType string
            tip.id;
            // $ExpectType LngLat
            tip.location;
            // $ExpectType string
            tip.name;
            // $ExpectType string
            tip.typecode;
        }
    } else {
        // $ExpectType string
        result;
    }
});

// $ExpectType void
autoComplete.setType();
// $ExpectType void
autoComplete.setType('type');

// $ExpectType void
autoComplete.setCity();
// $ExpectType void
autoComplete.setCity('city');

// $ExpectType void
autoComplete.setCityLimit(false);

autoComplete.on('complete', (event: AMap.Autocomplete.EventMap['complete']) => {
    // $ExpectType "complete"
    event.type;
    // $ExpectType string
    event.info;
    if ('tips' in event) {
        // $ExpectType number
        event.count;
        // $ExpectType Tip[]
        event.tips;
    }
});

autoComplete.on('error', (event: AMap.Autocomplete.EventMap['error']) => {
    // $ExpectType "error"
    event.type;
    // $ExpectType string
    event.info;
});

autoComplete.on('select', (event: AMap.Autocomplete.EventMap['select']) => {
    // $ExpectType "select"
    event.type;
    // $ExpectType Tip
    event.tip;
});

autoComplete.on('choose', (event: AMap.Autocomplete.EventMap['choose']) => {
    // $ExpectType "choose"
    event.type;
    // $ExpectType Tip
    event.tip;
});
