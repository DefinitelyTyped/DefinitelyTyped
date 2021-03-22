import * as MD5 from 'react-native-md5';

MD5.hex_md5('abcdefg');

MD5.str_md5('hijklmn');

MD5.b64_hmac_md5('key', 'raw_data');

MD5.hex_hmac_md5('salt', Date.now().toString());
