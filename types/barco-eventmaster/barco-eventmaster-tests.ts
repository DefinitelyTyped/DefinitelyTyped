import * as EventMaster from 'barco-eventmaster';

const e2 = new EventMaster('10.0.0.1');

e2.listPresets(-1, -1, (err, presets) => {
    if (err !== null) {
        console.log('Current presets');
        console.log(presets);
    } else {
        console.log(err);
        throw new Error('Something went wrong with the event master request');
    }
});

e2.listSourceMainBackup();
e2.listSourceMainBackup(undefined, err => console.log(err || 'OK'));

e2.subscribe('10.0.0.69', 66000, ['AUXDestChanged', 'StillChanged']);
