import {
    activeWindow,
    app,
    appReady,
    chromeVersion,
    electronVersion,
    fixPathForAsarUnpack,
    is,
    platform,
    runJS
} from 'electron-util';

app.app; // $ExpectType any
app.BrowserWindow; // $ExpectType any
app.dialog; // $ExpectType any

is.macos; // $ExpectType boolean
is.linux; // $ExpectType boolean
is.windows; // $ExpectType boolean
is.main; // $ExpectType boolean
is.renderer; // $ExpectType boolean
is.development; // $ExpectType boolean
is.usingAsar; // $ExpectType boolean
is.macAppStore; // $ExpectType boolean
is.windowsStore; // $ExpectType boolean

appReady; // $ExpectType Promise<void>
electronVersion; // $ExpectType string
chromeVersion; // $ExpectType string

// $ExpectType string
platform({
    macos: 'm',
    windows: 'w',
    linux: 'l',
    default: ''
});

activeWindow(); // $ExpectType any
runJS(''); // $ExpectType Promise<any>
fixPathForAsarUnpack('file://test.txt'); // $ExpectType string
