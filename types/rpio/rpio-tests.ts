rpio.init({gpiomem: false});    /* Use /dev/mem for i²c/PWM/SPI */
rpio.init({mapping: 'gpio'});   /* Use the GPIOxx numbering */

/* Configure P11 as input with the internal pulldown resistor enabled */
rpio.open(11, rpio.INPUT, rpio.PULL_DOWN);

/* Configure P12 as output with the initiate state set high */
rpio.open(12, rpio.OUTPUT, rpio.HIGH);

/* Configure P13 as output, but leave it in its initial undefined state */
rpio.open(13, rpio.OUTPUT);

rpio.mode(12, rpio.INPUT);      /* Switch P12 back to input mode */

console.log('Pin 12 = %d', rpio.read(12));

var buf = new Buffer(10000);

/* Read the value of Pin 12 10,000 times in a row, storing the values in buf */
rpio.readbuf(12, buf);

rpio.write(13, rpio.HIGH);

/* Write 1 0 1 0 1 0 1 0 to Pin 13 */
var buf = new Buffer(8).fill(rpio.LOW);
buf[0] = buf[2] = buf[4] = buf[6] = rpio.HIGH;
rpio.writebuf(13, buf);

var curpad = rpio.readpad(rpio.PAD_GROUP_0_27);

var slew = ((curpad & rpio.PAD_SLEW_UNLIMITED) == rpio.PAD_SLEW_UNLIMITED);
var hysteresis = ((curpad & rpio.PAD_HYSTERESIS) == rpio.PAD_HYSTERESIS);
var drive = (curpad & 0x7);

/* Disable input hysteresis but retain other current settings. */
var control = rpio.readpad(rpio.PAD_GROUP_0_27);
control &= ~rpio.PAD_HYSTERESIS;
rpio.writepad(rpio.PAD_GROUP_0_27, control);

rpio.pud(11, rpio.PULL_UP);
rpio.pud(12, rpio.PULL_DOWN);

function nuke_button(pin: number)
{
    console.log('Nuke button on pin %d pressed', pin);

    /* No need to nuke more than once. */
    rpio.poll(pin, null);
}

function regular_button(pin: number)
{
    /* Watch pin 11 forever. */
    console.log('Button event on pin %d, is now %d', pin, rpio.read(pin));
}

/*
 * Pin 11 watches for both high and low transitions.  Pin 12 only watches for
 * high transitions (e.g. the nuke button is pushed).
 */
rpio.poll(11, regular_button);
rpio.poll(12, nuke_button, rpio.POLL_HIGH);

rpio.poll(12, null, rpio.POLL_HIGH);

rpio.close(11);

rpio.i2cBegin();

rpio.i2cSetSlaveAddress(0x20);

rpio.i2cSetBaudRate(100000);    /* 100kHz */
rpio.i2cSetClockDivider(2500);  /* 250MHz / 2500 = 100kHz */

var txbuf = new Buffer([0x0b, 0x0e, 0x0e, 0x0f]);
var rxbuf = new Buffer(32);

rpio.i2cWrite(txbuf);           /* Sends 4 bytes */
rpio.i2cRead(rxbuf, 16);        /* Reads 16 bytes */

rpio.i2cEnd();

rpio.open(12, rpio.PWM); /* Use pin 12 */

rpio.pwmSetClockDivider(64);    /* Set PWM refresh rate to 300kHz */

rpio.pwmSetRange(12, 1024);

rpio.pwmSetData(12, 512);

rpio.spiBegin();           /* Switch GPIO7-GPIO11 to SPI mode */

rpio.spiSetCSPolarity(0, rpio.HIGH);    /* Set CE0 high to activate */

rpio.spiSetClockDivider(128);   /* Set SPI speed to 1.95MHz */

rpio.spiTransfer(txbuf, rxbuf, txbuf.length);

rpio.spiWrite(txbuf, txbuf.length);

rpio.spiEnd();

rpio.sleep(1);          /* Sleep for n seconds */
rpio.msleep(1);         /* Sleep for n milliseconds */
rpio.usleep(1);         /* Sleep for n microseconds */
