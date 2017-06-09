

/* require hashids */
import Hashids from 'hashids';

/* creating class object */
var hashids = new Hashids("this is my salt");

/* encoding several numbers into one id */
var id = hashids.encode(1337, 5, 77, 12345678);
id = hashids.encode(1337);
id = hashids.encode(45, 434, 1313, 99);

/* decoding that id */
var numbers = hashids.decode(id);
numbers.length > 0 ? true : false;

hashids = new Hashids("this is my salt", 0, "abcdefgh123456789");
hashids = new Hashids("this is my salt", 8);
