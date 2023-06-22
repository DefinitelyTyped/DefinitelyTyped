import * as EventMaster from 'barco-eventmaster';

const e2 = new EventMaster('10.0.0.1');

e2.listPresets(-1, -1, (err, presets) => {
    if (err !== null) {
    } else {
        // $ExpectType null
        err;
        throw new Error('Something went wrong with the event master request');
    }
});

e2.listSourceMainBackup();
e2.listSourceMainBackup(undefined, err => {
    if (err) return;

    // $ExpectType null
    err;
});

e2.subscribe('10.0.0.69', 66000, ['AUXDestChanged', 'StillChanged']);
