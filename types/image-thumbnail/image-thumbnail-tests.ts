import { createReadStream } from 'fs';
import imageThumbnail = require('image-thumbnail');

imageThumbnail({ uri: '' }); // $ExpectType Promise<Buffer>
imageThumbnail({ uri: '' }, { responseType: 'base64' }); // $ExpectType Promise<string>

imageThumbnail(''); // $ExpectType Promise<Buffer>
imageThumbnail('', { responseType: 'base64' }); // $ExpectType Promise<string>

imageThumbnail(Buffer.from([])); // $ExpectType Promise<Buffer>
imageThumbnail(Buffer.from([]), { responseType: 'base64' }); // $ExpectType Promise<string>

imageThumbnail(createReadStream('')); // $ExpectType Promise<Buffer>
imageThumbnail(createReadStream(''), { responseType: 'base64' }); // $ExpectType Promise<string>
