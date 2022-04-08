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
