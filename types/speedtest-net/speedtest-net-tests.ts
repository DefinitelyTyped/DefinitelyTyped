import speedTest = require('speedtest-net');

speedTest().then(result => {
    result;
});

const cancel = speedTest.makeCancel();
const progress: speedTest.ProgressFunction = event => {
    if (!event) return;

    switch (event.type) {
        case 'config': {
            event.servers; // $ExpectType ServerData[]
            break;
        }
        case 'download': {
            event.timestamp; // $ExpectType Date
            break;
        }
        case 'log': {
            event.level; // $ExpectType string
            break;
        }
        case 'ping': {
            event.ping; // $ExpectType PingData
            break;
        }
        case 'result': {
            event.isp; // $ExpectType string
            break;
        }
        case 'testStart': {
            event.interface; // $ExpectType InterfaceData
            break;
        }
        case 'upload': {
            event.upload; // $ExpectType DownloadUploadData
            break;
        }
        default: {
            break;
        }
    }
};

speedTest({ acceptLicense: true, acceptGdpr: true, cancel, progress });
