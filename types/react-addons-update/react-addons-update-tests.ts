import update from 'react-addons-update';

// $ExpectError
update({});

const newData = update(
    {},
    {
        x: { y: { z: { $set: 7 } } },
    }
);
