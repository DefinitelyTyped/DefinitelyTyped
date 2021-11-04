// Tests for i2c-bus/index.d.ts
// Project: https://github.com/fivdi/i2c-bus
// Definitions by: Jason Heard <https://github.com/101100>
//                 Kohei Watanabe <https://github.com/kou029w>

// Tests taken from documentation samples.

import { openPromisified, open, openSync } from 'i2c-bus';

const MCP9808_ADDR = 0x18;
const TEMP_REG = 0x05;

const toCelsius = (rawData: number) => {
    rawData = (rawData >> 8) + ((rawData & 0xff) << 8);
    let celsius = (rawData & 0x0fff) / 16;
    if (rawData & 0x1000) {
        celsius -= 256;
    }
    return celsius;
};

/**
 * Example 1 from the i2c-bus README file.
 */
function example1(): void {
    openPromisified(1)
        .then(i2c1 =>
            i2c1
                .readWord(MCP9808_ADDR, TEMP_REG)
                .then(rawData => console.log(toCelsius(rawData)))
                .then(_ => i2c1.close()),
        )
        .catch(console.log);
}

/**
 * Example 2 from the i2c-bus README file.
 */
function example2(): void {
    const wbuf = Buffer.from([TEMP_REG]);
    const rbuf = Buffer.alloc(2);

    openPromisified(1)
        .then(i2c1 =>
            i2c1
                .i2cWrite(MCP9808_ADDR, wbuf.length, wbuf)
                .then(_ => i2c1.i2cRead(MCP9808_ADDR, rbuf.length, rbuf))
                .then(data => console.log(toCelsius(data.buffer.readUInt16BE(0))))
                .then(_ => i2c1.close()),
        )
        .catch(console.log);
}

/**
 * Example 3 from the i2c-bus README file.
 */
function example3(): void {
    const i2c1 = open(1, err => {
        if (err) throw err;

        i2c1.readWord(MCP9808_ADDR, TEMP_REG, (err, rawData) => {
            if (err) throw err;

            console.log(toCelsius(rawData));

            i2c1.close(err => {
                if (err) throw err;
            });
        });
    });
}

/**
 * Example 4 from the i2c-bus README file.
 */
function example4(): void {
    const i2c1 = openSync(1);
    const rawData = i2c1.readWordSync(MCP9808_ADDR, TEMP_REG);
    console.log(toCelsius(rawData));
    i2c1.closeSync();
}
