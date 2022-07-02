
import * as piSPI from 'pi-spi';

var spi:piSPI.SPI = piSPI.initialize("test");
var b:Buffer = new Buffer("Hello, World!");
var cb = function(error:Error, data:Buffer):void { };

spi.bitOrder(piSPI.order.LSB_FIRST);
spi.bitOrder(piSPI.order.MSB_FIRST);
console.log(spi.bitOrder());


spi.dataMode(piSPI.mode.CPHA);
spi.dataMode(piSPI.mode.CPOL);
console.log(spi.dataMode());


spi.clockSpeed(4e6);
console.log(spi.clockSpeed());


spi.write(b, cb);
spi.read(13, cb);

spi.transfer(b, cb);
spi.transfer(b, 13, cb);

spi.close((error:Error):void => {});
