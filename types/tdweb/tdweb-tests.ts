import TdClient, { TdError, TdObject } from 'tdweb';

function isError(data: TdObject | TdError): data is TdError {
    return data['@type'] === 'error';
}

// Create instance with default options
new TdClient({});

// Testing custom config
const client = new TdClient({
    onUpdate: (update) => {
        const type = update['@type']; // $ExpectType string
    },
    instanceName: 'tdweb',
    isBackground: false,
    logVerbosityLevel: 3,
    jsLogVerbosityLevel: 'debug',
    useDatabase: true,
    readOnly: false,
    mode: 'auto',
});

client.send({ '@type': 'getMe', '@extra': 'foo' }).then((data) => {
    const type = data['@type']; // $ExpectType string
    const extra = data['@extra']; // $ExpectType string | undefined

    if (isError(data)) {
        const code = data.code; // $ExpectType number
        const message = data.message; // $ExpectType string
    } else {
        const bar = data.bar;
    }
});
