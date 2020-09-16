import CipherBase = require("cipher-base");

const buf = new Buffer(1);

class CipherTest extends CipherBase {
    constructor() {
        super();
    }

    final() {
        return buf;
    }

    update(testBuffer: Buffer) {
        return testBuffer;
    }
}
