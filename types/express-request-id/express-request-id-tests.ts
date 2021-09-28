import * as expressRequestId from 'express-request-id';

const options: expressRequestId.Options = {
    uuidVersion: 'v4',
    setHeader: false,
    headerName: 'X-Request-Id',
    attributeName: 'id',
};

expressRequestId();
expressRequestId({});
expressRequestId(options);
expressRequestId({
    msecs: new Date('10-05-1990'),
    nsecs: 0,
    clockseq: 0,
    node: [0, 0, 0, 0, 0, 0],
});
