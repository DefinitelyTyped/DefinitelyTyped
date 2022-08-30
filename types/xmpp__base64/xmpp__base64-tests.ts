import { encode, decode } from '@xmpp/base64';

encode('foo'); // $ExpectType string
decode('foo'); // $ExpectType string
