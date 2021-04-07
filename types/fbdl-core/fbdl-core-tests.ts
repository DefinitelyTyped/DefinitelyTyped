import fbdl = require('fbdl-core');
import { Readable } = require('stream');

fbdl.download('https://www.facebook.com/alanwalkermusic/videos/277641643524720'); // $ExpectType Promise<Readable>

fbdl.getInfo('https://example.com'); // $ExpectError
