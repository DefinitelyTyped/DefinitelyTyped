import * as mime from 'mime-types';

mime.lookup('json');             // 'application/json'
mime.lookup('.md');              // 'text/x-markdown'
mime.lookup('file.html');        // 'text/html'
mime.lookup('folder/file.js');   // 'application/javascript'
mime.lookup('folder/.htaccess'); // false

mime.lookup('cats'); // false
mime.contentType('markdown');  // 'text/x-markdown; charset=utf-8'
mime.contentType('file.json'); // 'application/json; charset=utf-8'

// from a full path
mime.contentType('.json'); // 'application/json; charset=utf-8'

mime.extension('application/octet-stream'); // 'bin'

mime.charset('text/x-markdown'); // 'UTF-8'
