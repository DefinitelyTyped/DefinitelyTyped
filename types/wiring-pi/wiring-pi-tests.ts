import * as wpi from 'wiring-pi';

console.log(wpi.VERSION);

// Setup
let ret: number = wpi.wiringPiSetup();
ret = wpi.wiringPiSetupGpio();
ret = wpi.wiringPiSetupPhys();
ret = wpi.wiringPiSetupSys();
ret = wpi.setup('wpi');
// Core functions
wpi.pinModeAlt(1, wpi.FSEL_ALT0);
wpi.pinMode(2, wpi.INPUT);
wpi.pullUpDnControl(2, wpi.PUD_UP);
let read: number = wpi.digitalRead(2);
wpi.pinMode(3, wpi.OUTPUT);
wpi.digitalWrite(3, wpi.HIGH);
wpi.pinMode(4, wpi.PWM_OUTPUT);
wpi.pwmWrite(4, 1023);
ret = wpi.gertboardAnalogSetup(5);
read = wpi.analogRead(5);
wpi.analogWrite(6, 100);
read = wpi.pulseIn(2, read);
wpi.delay(2);
wpi.delayMicroseconds(3);
ret = wpi.millis();
ret = wpi.micros();
// Interupts
wpi.wiringPiISR(2, wpi.INT_EDGE_BOTH, (delta: number) => console.log(delta));
wpi.wiringPiISRCancel(2);
// Raspberry Pi hardware specific functions
ret = wpi.piBoardRev();
let boardId: wpi.PiBoardId = wpi.piBoardId();
console.log(boardId.model === wpi.PI_MODEL_BP);
console.log(boardId.rev === wpi.PI_VERSION_2);
console.log(boardId.maker === wpi.PI_MAKER_SONY);
let pin: number = wpi.wpiPinToGpio(9);
pin = wpi.physPinToGpio(9);
wpi.setPadDrive(1, 7);
ret = wpi.getAlt(1);
wpi.digitalWriteByte(9);
wpi.pwmSetMode(wpi.PWM_MODE_MS);
wpi.pwmSetRange(100);
wpi.pwmSetClock(2);
wpi.pwmToneWrite(6, 1024);
wpi.gpioClockSet(6, 1024);
// I2C
let fd: number = wpi.wiringPiI2CSetup(2);
fd = wpi.wiringPiI2CSetupInterface('/dev/i2c-2', 2);
read = wpi.wiringPiI2CRead(fd);
ret = wpi.wiringPiI2CWrite(fd, read);
read = wpi.wiringPiI2CReadReg8(fd, 2);
read = wpi.wiringPiI2CReadReg16(fd, 2);
ret = wpi.wiringPiI2CWriteReg8(fd, 2, read);
ret = wpi.wiringPiI2CWriteReg16(fd, 2, read);
wpi.wiringPiI2CClose(fd);
// SPI
fd = wpi.wiringPiSPIGetFd(2);
fd = wpi.wiringPiSPISetup(2, 32000000);
fd = wpi.wiringPiSPISetupMode(2, 32000000, 3);
let buff: Buffer = new Buffer("spi data");
ret = wpi.wiringPiSPIDataRW(2, buff);
console.log(buff.toString());
wpi.wiringPiSPIClose(fd);
// Serial
fd = wpi.serialOpen('/dev/AMA0', 9600);
wpi.serialFlush(fd);
wpi.serialPutChar(fd, 'i'.charCodeAt(0));
wpi.serialPuts(fd, 'serial data');
wpi.serialPrintf(fd, 'more');
read = wpi.serialDataAvail(fd);
read = wpi.serialGetchar(fd);
wpi.serialClose(fd);
// Shift
ret = wpi.shiftIn(7, 8, wpi.MSBFIRST);
wpi.shiftOut(7, 8, wpi.LSBFIRST, ret);
// Soft PWM
wpi.pinMode(9, wpi.SOFT_PWM_OUTPUT);
ret = wpi.softPwmCreate(9, 100, 100);
wpi.softPwmWrite(9, 98);
wpi.softPwmStop(9);
// Soft Servo
ret = wpi.softServoSetup(10, 11, 12, 13, 14, 14, 16, 17);
wpi.softServoWrite(10, 100);
// Soft Tone
wpi.pinMode(18, wpi.SOFT_TONE_OUTPUT);
ret = wpi.softToneCreate(18);
wpi.softToneWrite(18, 98);
wpi.softToneStop(18);
