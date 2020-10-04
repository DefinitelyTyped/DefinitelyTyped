import bcrypt from 'react-native-bcrypt';

bcrypt.compare("hello", bcrypt.hashSync("hello", bcrypt.genSaltSync()), (error, bool) => { });
bcrypt.compareSync("hello", bcrypt.hashSync("hello", bcrypt.genSaltSync()));
bcrypt.decodeBase64("..CA.uOD/eaGAOmJB.yMBv.", 16);
bcrypt.encodeBase64([0x00, 0x01, 0x02, 0x03, 0x04, 0x05, 0x06, 0x07, 0x08, 0x09, 0x0A, 0x0B, 0x0C, 0x0D, 0x0E, 0x0F, 0x10], 16)
bcrypt.genSalt(10, (error, salt) => { });
bcrypt.genSaltSync(10);
10 == bcrypt.getRounds(bcrypt.hashSync("hello", bcrypt.genSaltSync()));
bcrypt.getSalt(bcrypt.hashSync("hello", bcrypt.genSaltSync()));
bcrypt.hash("hello", 10, (error, hash) => { });
bcrypt.hashSync("hello", 10);
bcrypt.setRandomFallback((number) => [number]);