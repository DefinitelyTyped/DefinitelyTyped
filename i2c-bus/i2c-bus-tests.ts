// Tests for i2c-bus/index.d.ts
// Project: https://github.com/fivdi/i2c-bus
// Definitions by: Jason Heard <https://github.com/101100>

// Tests taken from documentation samples.

import { I2cBus, open, openSync } from "i2c-bus";
import * as asnc from "async";


function toCelsius(rawTemp: number): number {
    const halfDegrees = ((rawTemp & 0xff) << 1) + (rawTemp >> 15);

    if ((halfDegrees & 0x100) === 0) {
        return halfDegrees / 2; // Temp +ve
    }

    return -((~halfDegrees & 0xff) / 2); // Temp -ve
}


/**
 * Example 1 from the i2c-bus README file.
 */
function example1(): void {
    const i2c1 = openSync(1);

    const DS1621_ADDR = 0x48,
        CMD_ACCESS_CONFIG = 0xac,
        CMD_READ_TEMP = 0xaa,
        CMD_START_CONVERT = 0xee;

    // Enter one shot mode (this is a non volatile setting)
    i2c1.writeByteSync(DS1621_ADDR, CMD_ACCESS_CONFIG, 0x01);

    // Wait while non volatile memory busy
    while (i2c1.readByteSync(DS1621_ADDR, CMD_ACCESS_CONFIG) & 0x10) {
    }

    // Start temperature conversion
    i2c1.sendByteSync(DS1621_ADDR, CMD_START_CONVERT);

    // Wait for temperature conversion to complete
    while ((i2c1.readByteSync(DS1621_ADDR, CMD_ACCESS_CONFIG) & 0x80) === 0) {
    }

    // Display temperature
    const rawTemp = i2c1.readWordSync(DS1621_ADDR, CMD_READ_TEMP);
    console.log("temp: " + toCelsius(rawTemp));

    i2c1.closeSync();
}


/**
 * Example 2 from the i2c-bus README file.
 */
function example2(): void {
    let i2c1: I2cBus;

    const DS1621_ADDR = 0x48,
        CMD_ACCESS_CONFIG = 0xac,
        CMD_READ_TEMP = 0xaa,
        CMD_START_CONVERT = 0xee;

    async.series([
        cb => {
            i2c1 = open(1, cb);
        },
        cb => {
            // Enter one shot mode (this is a non volatile setting)
            i2c1.writeByte(DS1621_ADDR, CMD_ACCESS_CONFIG, 0x01, cb);
        },
        cb => {
            // Wait while non volatile memory busy
            (function read(): void {
                i2c1.readByte(DS1621_ADDR, CMD_ACCESS_CONFIG, (err, config) => {
                    if (err) return cb(err);
                    if (config & 0x10) return read();
                    cb(undefined);
                });
            }());
        },
        cb => {
            // Start temperature conversion
            i2c1.sendByte(DS1621_ADDR, CMD_START_CONVERT, cb);
        },
        cb => {
            // Wait for temperature conversion to complete
            (function read(): void {
                i2c1.readByte(DS1621_ADDR, CMD_ACCESS_CONFIG, (err, config) => {
                    if (err) return cb(err);
                    if ((config & 0x80) === 0) return read();
                    cb(undefined);
                });
            }());
        },
        cb => {
            // Display temperature
            i2c1.readWord(DS1621_ADDR, CMD_READ_TEMP, (err, rawTemp) => {
                if (err) return cb(err);
                console.log("temp: " + toCelsius(rawTemp));
                cb(undefined);
            });
        },
        cb => {
            i2c1.close(cb);
        }
    ], err => {
        if (err) throw err;
    });
}


/**
 * Example 3 from the i2c-bus README file.
 */
function example3(): void {
    let i2c1: I2cBus;

    const DS1621_ADDR = 0x48,
        DS1621_CMD_ACCESS_TH = 0xa1;

    const TSL2561_ADDR = 0x39,
        TSL2561_CMD = 0x80,
        TSL2561_REG_ID = 0x0a;

    i2c1 = open(1, err => {
        if (err) throw err;

        function readTempHigh(): void {
            i2c1.readWord(DS1621_ADDR, DS1621_CMD_ACCESS_TH, (err, tempHigh) => {
                if (err) throw err;
                console.log("temp: " + tempHigh);
                // read another temperature
                readTempHigh();
            });
        }

        readTempHigh();

        function readId(): void {
            i2c1.readByte(TSL2561_ADDR, TSL2561_CMD | TSL2561_REG_ID, (err, id) => {
                if (err) throw err;
                console.log("id: " + id);
                // read another ID
                readId();
            });
        }

        readId();
    });
}
