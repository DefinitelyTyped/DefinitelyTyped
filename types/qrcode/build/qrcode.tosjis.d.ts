import toSJISFunc = require('../helper/to-sjis');

declare global {
    namespace QRCode {
        const toSJIS: typeof toSJISFunc;
    }
}
