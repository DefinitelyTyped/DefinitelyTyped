import { I2C } from 'raspi-i2c';

const i2c = new I2C();

i2c.read(1, 1, (err, data) => {});
i2c.read(1, 1, 1, (err, data) => {});

i2c.readSync(1, 1);
i2c.readSync(1, 1, 1);

i2c.readByte(1, (err, data) => {});
i2c.readByte(1, 1, (err, data) => {});

i2c.readByteSync(1);
i2c.readByteSync(1, 1);

i2c.readWord(1, (err, data) => {});
i2c.readWord(1, 1, (err, data) => {});

const buf = Buffer.alloc(1);

i2c.write(1, buf, (err) => {});
i2c.write(1, 1, buf, (err) => {});

i2c.writeSync(1, buf);
i2c.writeSync(1, 1, buf);

i2c.writeByte(1, 1, (err) => {});
i2c.writeByte(1, 1, 1, (err) => {});

i2c.writeByteSync(1, 1);
i2c.writeByteSync(1, 1, 1);

i2c.writeWord(1, 1, (err) => {});
i2c.writeWord(1, 1, 1, (err) => {});

i2c.writeWordSync(1, 1);
i2c.writeWordSync(1, 1, 1);
