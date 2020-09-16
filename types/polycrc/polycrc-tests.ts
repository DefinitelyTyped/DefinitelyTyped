import * as polycrc from 'polycrc';

const crc1 = new polycrc.CRC(1, 0x01, 0x00, 0x00, false);
const crc6 = new polycrc.CRC(6, 0x2f, 0x00, 0x00, false);
const crc8 = new polycrc.CRC(8, 0x07, 0x00, 0x00, false);
const crc10 = new polycrc.CRC(10, 0x233, 0x0000, 0x0000, false);
const crc16 = new polycrc.CRC(16, 0x8005, 0x0000, 0x0000, true);
const crc24 = new polycrc.CRC(24, 0x864cfb, 0xb704ce, 0x000000, false);
const crc32 = new polycrc.CRC(32, 0x04c11db7, 0xffffffff, 0xffffffff, true);
const crc32c = new polycrc.CRC(32, 0x1edc6f41, 0xffffffff, 0xffffffff, true);

polycrc.crc(16, 0x04c11db7, 0x00000000, 0xffffffff, false)(Buffer.from('0203', 'hex'));
polycrc.crc(32, 0x04c11db7, 0x00000000, 0xffffffff, false)(Buffer.from('0203', 'hex'));

crc16.calculate(Buffer.from('0203', 'hex'));
crc32.calculate(Buffer.from('0203', 'hex'));
