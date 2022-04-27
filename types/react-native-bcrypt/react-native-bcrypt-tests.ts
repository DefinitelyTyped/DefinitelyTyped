import bcrypt from 'react-native-bcrypt';

const ROUND_NUMBER = 10;
const salt = bcrypt.genSaltSync(ROUND_NUMBER);
const hashedHello = bcrypt.hashSync("hello", salt);

bcrypt.compare("hello", hashedHello, (error, bool) => { });
bcrypt.compareSync("hello", hashedHello);
bcrypt.decodeBase64("..CA.uOD/eaGAOmJB.yMBv.", 16);
bcrypt.encodeBase64([0x00, 0x01, 0x02, 0x03, 0x04, 0x05, 0x06, 0x07, 0x08, 0x09, 0x0A, 0x0B, 0x0C, 0x0D, 0x0E, 0x0F, 0x10], 16);
bcrypt.genSalt(ROUND_NUMBER, (error, salt) => { });
ROUND_NUMBER === bcrypt.getRounds(hashedHello);
bcrypt.getSalt(hashedHello);
bcrypt.hash("hello", ROUND_NUMBER, (error, hash) => { });
bcrypt.setRandomFallback();
