import { RNFetchBlob } from "rn-fetch-blob";

const BASE64_IMAGE_STRING = 'some base64 image';
const PATH_TO_THE_FILE = '/some/path.png';

// Download example: Fetch files that need authorization token
RNFetchBlob
    .fetch('GET', 'http://www.example.com/images/img1.png', { Authorization: 'Bearer access-token...' })
    .then(res => {
        const base64Str = res.base64();
        const text = res.text();
        const json = res.json();
    });

// Download to storage directly
RNFetchBlob
    .config({
        // add this option that makes response data to be stored as a file,
        // this is much more performant.
        fileCache: true,
    })
    .fetch('GET', 'http://www.example.com/file/example.zip', {
        // some headers ..
    })
    .then((res) => {
        // the temp file path
        console.log('The file saved to ', res.path());
    });

// Set Temp File Extension
RNFetchBlob
    .config({
        fileCache: true,
        // by adding this option, the temp files will have a file extension
        appendExt: 'png'
    })
    .fetch('GET', 'http://www.example.com/file/example.zip', {
        // some headers ..
    })
    .then((res) => {
        // the temp file path with file extension `png`
        console.log('The file saved to ', res.path());
        // Beware that when using a file path as Image source on Android,
        // you must prepend "file://"" before the file path
        // imageView = <Image source={{ uri : Platform.OS === 'android' ? 'file://' + res.path()  : '' + res.path() }}/>
    });

// Use Specific File Path
const dirs = RNFetchBlob.fs.dirs;
RNFetchBlob
    .config({
        // response data will be saved to this path if it has access right.
        path: dirs.DocumentDir + '/path-to-file.anything'
    })
    .fetch('GET', 'http://www.example.com/file/example.zip', {
        // some headers ..
    })
    .then((res) => {
        // the path should be dirs.DocumentDir + 'path-to-file.anything'
        console.log('The file saved to ', res.path());
    });

// Upload example : Dropbox files-upload API
RNFetchBlob.fetch('POST', 'https://content.dropboxapi.com/2/files/upload', {
    Authorization: "Bearer access-token...",
    'Dropbox-API-Arg': JSON.stringify({
        path: '/img-from-react-native.png',
        mode: 'add',
        autorename: true,
        mute: false
    }),
    'Content-Type': 'application/octet-stream',
    // here's the body you're going to send, should be a BASE64 encoded string
    // (you can use "base64"(refer to the library 'mathiasbynens/base64') APIs to make one).
    // The data will be converted to "byte array"(say, blob) before request sent.
}, BASE64_IMAGE_STRING)
    .then((res) => {
        console.log(res.text());
    })
    .catch((err) => {
        // error handling ..
    });

// Upload a file from storage
RNFetchBlob.fetch('POST', 'https://content.dropboxapi.com/2/files/upload', {
    // dropbox upload headers
    Authorization: "Bearer access-token...",
    'Dropbox-API-Arg': JSON.stringify({
        path: '/img-from-react-native.png',
        mode: 'add',
        autorename: true,
        mute: false
    }),
    'Content-Type': 'application/octet-stream',
    // Change BASE64 encoded data to a file path with prefix `RNFetchBlob-file://`.
    // Or simply wrap the file path with RNFetchBlob.wrap().
}, RNFetchBlob.wrap(PATH_TO_THE_FILE))
    .then((res) => {
        console.log(res.text());
    })
    .catch((err) => {
        // error handling ..
    });

// Multipart/form-data example: Post form data with file and data
RNFetchBlob.fetch('POST', 'http://www.example.com/upload-form', {
    Authorization: "Bearer access-token",
    otherHeader: "foo",
    'Content-Type': 'multipart/form-data',
}, [
        // element with property `filename` will be transformed into `file` in form data
        { name: 'avatar', filename: 'avatar.png', data: BASE64_IMAGE_STRING },
        // custom content type
        { name: 'avatar-png', filename: 'avatar-png.png', type: 'image/png', data: BASE64_IMAGE_STRING },
        // part file from storage
        { name: 'avatar-foo', filename: 'avatar-foo.png', type: 'image/foo', data: RNFetchBlob.wrap(PATH_TO_THE_FILE) },
        // elements without property `filename` will be sent as plain text
        { name: 'name', data: 'user' },
        {
            name: 'info', data: JSON.stringify({
                mail: 'example@example.com',
                tel: '12345678'
            })
        },
    ]).then((resp) => {
        // ...
    }).catch((err) => {
        // ...
    });

RNFetchBlob.fetch('POST', 'http://www.example.com/upload-form', {
    Authorization: "Bearer access-token",
    otherHeader: "foo",
    // this is required, otherwise it won't be process as a multipart/form-data request
    'Content-Type': 'multipart/form-data',
}, [
        // append field data from file path
        {
            name: 'avatar',
            filename: 'avatar.png',
            // Change BASE64 encoded data to a file path with prefix `RNFetchBlob-file://`.
            // Or simply wrap the file path with RNFetchBlob.wrap().
            data: RNFetchBlob.wrap(PATH_TO_THE_FILE)
        },
        {
            name: 'ringtone',
            filename: 'ring.mp3',
            // use custom MIME type
            type: 'application/mp3',
            // upload a file from asset is also possible in version >= 0.6.2
            data: RNFetchBlob.wrap(RNFetchBlob.fs.asset('default-ringtone.mp3'))
        },
        // elements without property `filename` will be sent as plain text
        { name: 'name', data: 'user' },
        {
            name: 'info', data: JSON.stringify({
                mail: 'example@example.com',
                tel: '12345678'
            })
        },
    ]).then((resp) => {
        // ...
    }).catch((err) => {
        // ...
    });

// Upload/Download progress
RNFetchBlob.fetch('POST', 'http://www.example.com/upload', {
    // ... some headers,
    'Content-Type': 'octet-stream'
}, BASE64_IMAGE_STRING)
    // listen to upload progress event
    .uploadProgress((written, total) => {
        console.log('uploaded', written / total);
    })
    // listen to download progress event
    .progress((received, total) => {
        console.log('progress', received / total);
    })
    .then((resp) => {
        // ...
    })
    .catch((err) => {
        // ...
    });

RNFetchBlob.fetch('POST', 'http://www.example.com/upload', {
    // ... some headers,
    'Content-Type': 'octet-stream'
}, BASE64_IMAGE_STRING)
    // listen to upload progress event, emit every 250ms
    .uploadProgress({ interval: 250 }, (written, total) => {
        console.log('uploaded', written / total);
    })
    // listen to download progress event, every 10%
    .progress({ count: 10 }, (received, total) => {
        console.log('progress', received / total);
    })
    .then((resp) => {
        // ...
    })
    .catch((err) => {
        // ...
    });

// Cancel Request
const task = RNFetchBlob.fetch('GET', 'http://example.com/file/1');
task.then(() => {
})
    // handle request cancelled rejection
    .catch((err) => {
        console.log(err);
    });
// cancel the request, the callback function is optional
task.cancel((err: any) => {
});

// Media Scanner
RNFetchBlob
    .config({
        // DCIMDir is in external storage
        path: dirs.DCIMDir + '/music.mp3'
    })
    .fetch('GET', 'http://example.com/music.mp3')
    .then((res) => RNFetchBlob.fs.scanFile([{ path: res.path(), mime: 'audio/mpeg' }]))
    .then(() => {
        // scan file success
    })
    .catch((err) => {
        // scan file error
    });

// Download Manager
RNFetchBlob
    .config({
        addAndroidDownloads: {
            useDownloadManager: true, // <-- this is the only thing required
            // Optional, override notification setting (default to true)
            notification: false,
            // Optional, but recommended since android DownloadManager will fail when
            // the url does not contains a file extension, by default the mime type will be text/plain
            mime: 'text/plain',
            description: 'File downloaded by download manager.'
        }
    })
    .fetch('GET', 'http://example.com/file/somefile')
    .then((resp) => {
        // the path of downloaded file
        resp.path();
    });

RNFetchBlob.config({
    fileCache: true,
    // android only options, these options be a no-op on IOS
    addAndroidDownloads: {
        // Show notification when response data transmitted
        notification: true,
        // Title of download notification
        title: 'Great ! Download Success ! :O ',
        // File description (not notification description)
        description: 'An image file.',
        mime: 'image/png',
        // Make the file scannable  by media scanner
        mediaScannable: true,
    }
})
    .fetch('GET', 'http://example.com/image1.png');

const android = RNFetchBlob.android;

// Open Downloaded File with Intent
RNFetchBlob.config({
    addAndroidDownloads: {
        useDownloadManager: true,
        title: 'awesome.apk',
        description: 'An APK that will be installed',
        mime: 'application/vnd.android.package-archive',
        mediaScannable: true,
        notification: true,
    }
})
    .fetch('GET', `http://www.example.com/awesome.apk`)
    .then((res) => {
        android.actionViewIntent(res.path(), 'application/vnd.android.package-archive');
        // Or show an image in image viewer
        android.actionViewIntent(res.path(), 'image/png');
    });

// File Stream
let data = '';
RNFetchBlob.fs.readStream(
    // file path
    PATH_TO_THE_FILE,
    // encoding, should be one of `base64`, `utf8`, `ascii`
    'base64',
    // (optional) buffer size, default to 4096 (4095 for BASE64 encoded data)
    // when reading file in BASE64 encoding, buffer size must be multiples of 3.
    4095)
    .then((ifstream) => {
        ifstream.open();
        ifstream.onData((chunk) => {
            // when encoding is `ascii`, chunk will be an array contains numbers
            // otherwise it will be a string
            data += chunk;
        });
        ifstream.onError((err) => {
            console.log('oops', err);
        });
        ifstream.onEnd(() => {
            // <Image source={{ uri : 'data:image/png,base64' + data }}
        });
    });

RNFetchBlob.fs.writeStream(
    PATH_TO_THE_FILE,
    // encoding, should be one of `base64`, `utf8`, `ascii`
    'utf8',
    // should data append to existing content ?
    true)
    .then((ofstream) => {
        ofstream.write('foo');
        ofstream.write('bar');
        ofstream.close();
    });

// Cache File Management
// remove file using RNFetchblobResponse.flush() object method
RNFetchBlob
    .config({ fileCache: true })
    .fetch('GET', 'http://example.com/download/file')
    .then((res) => {
        // remove cached file from storage
        res.flush();
    });

// remove file by specifying a path
RNFetchBlob.fs
    .unlink('some-file-path')
    .then(() => {
        // ...
    });

RNFetchBlob.config({
    fileCache: true
})
    .fetch('GET', 'http://example.com/download/file')
    .then((res) => {
        // set session of a response
        res.session('foo');
    });

RNFetchBlob.config({
    // you can also set session beforehand
    session: 'foo',
    fileCache: true
})
    .fetch('GET', 'http://example.com/download/file')
    .then((res) => {
        // ...
    });

// or put an existing file path to the session
RNFetchBlob.session('foo').add('some-file-path');
// remove a file path from the session
RNFetchBlob.session('foo').remove('some-file-path');
// list paths of a session
RNFetchBlob.session('foo').list();
// remove all files in a session
RNFetchBlob.session('foo').dispose().then(() => {
});

// Transfer Encoding
RNFetchBlob.fetch('POST', 'http://example.com/upload', { 'Transfer-Encoding': 'Chunked' }, 'bodyData');

// Self-Signed SSL Server
RNFetchBlob.config({
    trusty: true
});

RNFetchBlob.fs
    .df()
    .then(res => {
        console.log(res);
    })
    .catch(err => {
        // error handling ..
    });
