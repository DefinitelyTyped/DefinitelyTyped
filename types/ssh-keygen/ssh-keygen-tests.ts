import keygen from 'ssh-keygen';

const result1 = keygen();

const result2 = keygen({
    location: './test.pem',
});

const result3 = keygen(
    {
        location: './test.pem',
    },
    (err, out) => {},
);

// @ts-expect-error
const result4 = keygen({}, {});
