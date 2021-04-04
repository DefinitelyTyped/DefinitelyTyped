import fbdl = require('fbdl-core');

fbdl.download('https://www.facebook.com/alanwalkermusic/videos/277641643524720'); // $ExpectType Promise<internal.Readable>

fbdl.getInfo('https://example.com'); // $ExpectError
