/**
 * Some of the tests are based on examples found in the Chromium documentation or source.
 * @author Nikolai Ommundsen (niikoo {@link https://github.com/niikoo})
 * @author The Chromium Authors
 */

const runtime = chrome.app.runtime;
const cwindow = chrome.app.window;

// #region FORBIDDEN APIs
// Will give warnings via IntelliSense.

localStorage.getItem('hei');
document.open();
document.close();
document.write();
document.write('forbidden');

// #endregion

// #region Web APIs

///
/// HTML5 Audio
///

var audioCtx = new window.AudioContext(); // define audio context
// Webkit/blink browsers need prefix, Safari won't work without window.

var drawVisual; // requestAnimationFrame

var analyser = audioCtx.createAnalyser();
var distortion = audioCtx.createWaveShaper();
var gainNode = audioCtx.createGain();
var biquadFilter = audioCtx.createBiquadFilter();

navigator.mediaDevices.getUserMedia({ audio: true }).then((stream) => {
    const source = audioCtx.createMediaStreamSource(stream);
    source.connect(analyser);
    analyser.connect(distortion);
    distortion.connect(biquadFilter);
    biquadFilter.connect(gainNode);
    gainNode.connect(audioCtx.destination); // connecting the different audio graph nodes together
});

///
/// HTML5 Canvas
///

const canvas = document.createElement('canvas');
const ctx = canvas.getContext('2d');
if (ctx) {
    ctx.fillStyle = 'green';
    ctx.fillRect(10, 10, 100, 100);
}

///
/// Fullscreen API
///

const elem = document.createElement('video');
if (elem.requestFullscreen) {
    elem.requestFullscreen();
}

///
/// Geolocation API
///

window.onload = () => {
    navigator.geolocation.getCurrentPosition((position) => {
        console.log('lat', position.coords.latitude, 'lon', position.coords.longitude);
    });
};

// #endregion

// #region Manifest

const ManifestJSONTest1: chrome.runtime.Manifest = {
    manifest_version: 2,
    name: 'Sample Appview Embedded - modified for manifest test',
    description: '__MSG_appDescription__',
    version: '2.1',
    minimum_chrome_version: '33.0.1715.0',
    default_locale: 'en',
    file_browser_handlers: [
        {
            id: 'ReadOnly',
            default_title: 'Test read-only action.',
            default_icon: 'icon.png',
            file_filters: ['filesystem:*.xul'],
            file_access: ['read']
        },
        {
            id: 'ReadWrite',
            default_title: 'Test read-write action',
            default_icon: 'icon.png',
            file_filters: ['filesystem:*.tiff']
        }
    ],
    file_system_provider_capabilities: {
        configurable: false,
        multiple_mounts: true,
        source: 'network'
    },
    platforms: [{
        nacl_arch: 'x86-64',
        sub_package_path: '_platform_specific/x86-64/'
    }, {
        nacl_arch: 'x86-32',
        sub_package_path: '_platform_specific/x86-32/'
    }, {
        nacl_arch: 'arm',
        sub_package_path: '_platform_specific/arm/'
    }],
    permissions: [
        'https://www.google-analytics.com/*',
        'http://localhost:8080/*',
        'https://www.googleapis.com/*',
        'identity',
        'terminalPrivate',
        'app.window.alpha', 'app.window.shape',
        'experimental',
        'webview',
        'alarms',
        'storage',
        'videoCapture',
        'browser',
        'clipboardWrite',
        'usb',
        'metricsPrivate', 'networkingPrivate',
        'bluetooth',
        'unlimitedStorage',
        {
            fileSystem: ['write', 'retainEntries', 'directory']
        },
        'clipboardRead',
        'desktopCapture',
        'clipboardWrite',
        'pointerLock',
        '<all_urls>',
        'mdns',
        'gcm',
        'power',
        'cookies', 'tabs',
        'http://*/*',
        'https://*/*',
        'file:///*/*',
        'idle',
        'app.window.fullscreen',
        'app.window.fullscreen.overrideEsc',
        'contextMenus',
        'browser',
        'system.cpu', 'system.memory', 'system.storage', 'system.display',
        'notifications',
        '*://*/*',
        'accessibilityFeatures.read', 'accessibilityFeatures.modify',
        'tts',
        'fullscreen', 'alwaysOnTopWindows',
        'geolocation',
        'audioCapture',
        'hid',
        'metricsPrivate', 'nativeMessaging',
        'management', 'developerPrivate', 'activityLogPrivate',
        {
            mediaGalleries: ['read', 'allAutoDetected']
        },
        {
            socket: [
                'udp-send-to::*',
                'tcp-connect',
                'udp-send-to',
                'udp-bind',
                'udp-multicast-membership',
                'resolve-host',
                'network-state',
                'tcp-connect',
                'resolve-host',
                'network-state'
            ]
        },
        'tts',
        'syncFileSystem',
        {
            usbDevices: [{
                vendorId: 10168,
                productId: 493
            }]
        }
    ],
    storage: {
        managed_schema: 'schema.json'
    },
    author: {
        name: 'Your name here',
        email: 'Email@yourmail.com'
    },
    automation: {
        desktop: true
    },
    update_url: 'https://clients2.google.com/service/update2/crx',
    version_name: '10.0.12-stable',
    kiosk_enabled: true,
    offline_enabled: true,
    bluetooth: {
        low_energy: true,
        uuids: ['180f']
    },
    url_handlers: {
        wiki_article: {
            title: 'View Wikipedia article',
            matches: [
                '*://en.wikipedia.org/wiki/*'
            ]
        },
        mobile_wiki_article: {
            title: 'View Wikipedia article',
            matches: [
                '*://en.m.wikipedia.org/wiki/*'
            ]
        },
        google_drive_open: {
            matches: ['https://api.chromerestclient.com/GDrive.html*'],
            title: 'Open from Google Drive'
        }
    },
    sockets: {
        tcpServer: { listen: '' },
        tcp: { connect: ['*:5555', '*:5559'] },
        udp: { bind: ['*:5554', '*:5556'], multicastMembership: '', send: ['*:5554', '*:5556'] }
    },
    optional_permissions: [
        'debugger',
        'htt',
        'mdns',
        'app.window.fullscreen',
        'mdns',
        'debugger'
    ],
    webview: {
        partitions: [
            {
                'name': 'blockable',
                'accessible_resources': ['browser.css', 'blocked.css', 'blocked.html']
            },
            {
                'accessible_resources': ['player.*', 'migrate.*'],
                'name': 'player'
            }
        ]
    },
    externally_connectable: {
        id: ['*'],
        matches: ['https://gauth.fusionlabs.net/*']
    },
    commands: {
        cmdNew: {
            suggested_key: {
                default: 'Ctrl+Shift+1'
            },
            global: true,
            description: 'Create new window'
        },
        'new-team-login': {
            suggested_key: {
                default: 'Ctrl+Shift+Y',
                mac: 'Command+Shift+Y'
            },
            description: 'New team login'
        },
        reload: {
            suggested_key: {
                default: 'Ctrl+R'
            },
            description: 'Reload webview'
        }
    },
    sandbox: {
        content_security_policy: `sandbox allow-scripts allow-popups; script-src 'self' 'unsafe-inline' 'unsafe - eval' https://ssl.google-analytics.com/ga.js;`,
        pages: ['sandbox.html']
    },
    file_handlers: {
        image: {
            types: [
                'image/png',
                'image/jpeg'
            ]
        },
        text: {
            types: [
                'text/*'
            ],
            extensions: ['abap', 'as', 'ada', 'adb', 'ads', 'cfm', 'cfc', 'cfml', 'cs', 'css', 'dt', 'd', 'dot', 'ejs', 'erl', 'frt', 'ftl', 'html', 'erb', 'ini', 'jk', 'java', 'class', 'js', 'gs', 'javascript', 'jsoniq', 'json', 'jsp', 'jsx', 'lisp', 'ls', 'logic', 'make', 'makefile', 'mak', 'md', 'mysql', 'nix', 'm', 'php', 'inc', 'text', 'txt', 'log', 'ps1', 'rd', 'sass', 'scad', 'scala', 'scm', 'ss', 'scss', 'sh', 'sjs', 'sql', 'svg', 'tcl', 'tex', 'ts', 'vbs', 'vbe', 'vm', 'v', 'vhd', 'vhdl', 'xml', 'rss', 'atom', 'xhtml', 'yaml', 'yml', 'mcc']
        },
        any: {
            extensions: [
                'skrifa',
                'skrup'
            ]
        },
        cab: {
            extensions: ['cab'],
            types: ['application/x-cab']
        },
        cpio: {
            extensions: ['cpio', 'cpio.gz', 'cpio.bz2', 'cpio.xz'],
            types: ['application/x-cpio']
        },
        deb: {
            extensions: ['deb'],
            types: ['application/vnd.debian.binary-package']
        },
        gzip: {
            extensions: ['gz'],
            types: ['application/x-gzip']
        },
        iso: {
            extensions: ['iso'],
            types: ['application/x-iso9660-image']
        },
        lha: {
            extensions: ['lha', 'lzh'],
            types: ['application/x-lha', 'application/x-lzh', 'application/x-lzh-compressed']
        },
        lz4: {
            extensions: ['lz4'],
            types: ['application/x-lz4']
        },
        lzip: {
            extensions: ['lzip'],
            types: ['application/x-lzip']
        },
        lzop: {
            extensions: ['lzop'],
            types: ['application/x-lzop']
        },
        pax: {
            extensions: ['pax', 'pax.gz', 'pax.bz2', 'pax.xz'],
            types: ['application/x-pax']
        },
        rpm: {
            extensions: ['rpm'],
            types: ['application/x-rpm', 'application/x-redhat-package-manager']
        },
        tar: {
            extensions: ['gtar', 'tar', 'tgz', 'tbz2', 'txz', 'tz'],
            types: ['application/x-tar', 'application/x-gtar', 'application/x-gtar-compressed']
        },
        xz: {
            extensions: ['lzma', 'xz'],
            types: ['application/x-lzma', 'application/x-xz']
        },
        zip: {
            extensions: ['apk', 'crx', 'jar'],
            types: ['application/java-archive', 'application/x-chrome-extension']
        }
    },
    requirements: {
        '3D': {
            features: ['webgl']
        }
    },
    display_in_launcher: false,
    display_in_new_tab_page: false,
    key: 'FIMaMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCDJB6ZGcGxtlr/34s+TKgi84QiP7DMekqOjSUS2ubmbhchlM6CN9gYdGQ1aBI3TBXG3YaAu+XyutFA8M8NLLWc4OOGByW123aaa1DP6p67g8a+Ids/gX6cNSRnRHiDZXAd44ATxoN4OZjZJk9iQ26RIUjwX07bzntlI+frwwKCk4WQIDAQAB',
    oauth2: {
        // client_id below is specifc to the application key. Follow the
        // documentation to obtain one for your app.
        client_id: '1111111222333.apps.googleusercontent.com',
        scopes: ['https://www.googleapis.com/auth/plus.login']
    },
    app: {
        background: {
            scripts: ['angular.js', 'lodash.js', 'background.js']
        }
    },
    icons: {
        16: 'icon16.png',
        48: 'icon48.png',
        64: 'assets/icon-64x64.png',
        128: 'icon128.png'
    },
    action_handlers: ['new_note']
}

// #endregion

// #region chrome.alarms

chrome.alarms.create('name1', {
    delayInMinutes: 10
});
chrome.alarms.create('name2', {
    delayInMinutes: 10,
    periodInMinutes: 100
});
chrome.alarms.onAlarm.addListener((alarm) => {
    if (alarm.name === 'name1') {
        chrome.alarms.get('name1', (_alarm) => {
            if (alarm === _alarm) {
                chrome.alarms.getAll((alarms) => {
                    chrome.alarms.clear('name2');
                    chrome.alarms.clearAll();
                })
            }
        })
        return alarm.scheduledTime;
    }
});

// #endregion

// #region chrome.app.*

// Test enums
cwindow.WindowType.PANEL;
cwindow.State.FULLSCREEN;

chrome.app.runtime.onLaunched.addListener(function () {
    chrome.app.window.create('index.html', {
        'left': 10,
        'top': 10,
        'width': 400,
        'height': 500,
        'frame': 'none'
    }, (win) => {
        win.onClosed.addListener(() => { });
    });
});

const createOptions: chrome.app.CreateWindowOptions = {
    id: 'My Window',
    bounds: {
        left: 0,
        top: 0,
        width: 640,
        height: 480
    },
    resizable: true
};

//Create new window on app launch
chrome.app.runtime.onLaunched.addListener((launchData: chrome.app.runtime.LaunchData) => {
    chrome.app.window.create('app/url', createOptions, (created_window: chrome.app.AppWindow) => {
        return;
    });
});

chrome.app.runtime.onRestarted.addListener(() => { return; });

// retrieving windows
var currentWindow: chrome.app.AppWindow = chrome.app.window.current();
var otherWindow: chrome.app.AppWindow = chrome.app.window.get('some-string');
var allWindows: chrome.app.AppWindow[] = chrome.app.window.getAll();

// listening to window events
currentWindow.onBoundsChanged.addListener(() => { return; });
currentWindow.onClosed.addListener(() => { return; });
currentWindow.onFullscreened.addListener(() => { return; });
currentWindow.onMaximized.addListener(() => { return; });
currentWindow.onMinimized.addListener(() => { return; });
currentWindow.onRestored.addListener(() => { return; });

// check platform capabilities
var visibleEverywhere: boolean = chrome.app.window.canSetVisibleOnAllWorkspaces();

let serviceId: any = null;

const runApp = () => {
    var options: chrome.app.CreateWindowOptions = {
        id: 'Bluetooth Sample App',
        frame: 'none',
        alphaEnabled: true, // Permission: 'app.window.alpha'
        bounds: {
            'width': 1024,
            'height': 768
        }
    };

    chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
        if (request.serviceId) {
            serviceId = request.serviceId;
            console.log('Received registered service Id: ' + serviceId);
        }
    });

    chrome.app.window.create('test.html', options, (theWindow) => {
        // Test setShape as provided by the permission 'app.window.shape'
        theWindow.setShape([{ left: 100, top: 50, width: 50, height: 100 }]);
        theWindow.setShape([{ left: 100, top: 50, width: 50, height: 100 },
        { left: 200, top: 100, width: 50, height: 50 }]);
        theWindow.onClosed.addListener(() => {
            if (serviceId) {
                console.log('Unregistering service: ' + serviceId);
                chrome.bluetoothLowEnergy.unregisterService(serviceId, (status) => {
                    console.log('Unregister service status = ' + status);
                });
            }
        });
    });
}

chrome.app.runtime.onLaunched.addListener(runApp);
chrome.app.runtime.onRestarted.addListener(runApp);

// #endregion

// #region chrome.audio

chrome.audio.getDevices({}, (audioDeviceInfoList) => {
    for (let audioObj of audioDeviceInfoList) {
        console.log('ID: ' + audioObj.id);
        console.log('Audio Stream Type: ' + audioObj.streamType);
        console.log('Audio Device Name: ' + audioObj.deviceName);
    }
});

chrome.app.runtime.onEmbedRequested.addListener((request) => {
    if (request === undefined || request.data === undefined) {
        return false;
    }
    if (typeof request.data === 'object') {
        request.deny();
    }
});

chrome.app.runtime.onLaunched.addListener(() => {
    chrome.app.window.create('index.html', {
        id: 'test',
        innerBounds: {
            width: 900,
            height: 1280,
        },
    });
});
// #endregion

// #region chrome.bluetooth*

// BLUETOOTH
// BLUETOOTH SOCKET
// BLUETOOTH LE
// Based on https://github.com/GoogleChrome/chrome-app-samples/blob/master/samples/ioio/main.js

var kUUID = '00001101-0000-1000-8000-00805f9b34fb';
var level = 1;
var pin = 0;
var buffer = new ArrayBuffer(4);
var view = new Uint8Array(buffer);

// Set the level of pin0 to level
// constants taken from here:
// https://github.com/ytai/ioio/wiki/
view[2] = 4;
view[3] = pin << 2 | level;
level = (level == 0) ? 1 : 0;

var connectToDevice = (result: chrome.bluetooth.Device[]) => {
    if (chrome.runtime.lastError) {
        console.log('Error searching for a device to connect to.');
        return;
    }
    if (result.length == 0) {
        console.log('No devices found to connect to.');
        return;
    }
    for (const device of result) {
        console.log('Connecting to device: ' + device.name + ' @ ' + device.address);
        chrome.bluetoothSocket.create((socket) => {
            chrome.bluetoothSocket.connect(
                socket.socketId,
                device.address, kUUID,
                () => connectCallback(socket))
        });
    }
};

var connectCallback = (socket: chrome.sockets.CreateInfo) => {
    if (socket) {
        console.log('Connected!  Socket ID is: ' + socket.socketId + ' on service ');
        // Set pin0 as output.
        var buffer = new ArrayBuffer(2);
        var view = new Uint8Array(buffer);
        // constants taken from here:
        // https://github.com/ytai/ioio/wiki/
        view[0] = 3;
        view[1] = pin << 2 | 2;
        chrome.bluetoothSocket.send(socket.socketId, buffer,
            (bytes) => {
                if (chrome.runtime.lastError) {
                    console.log('Write error: ' + chrome.runtime.lastError.message);
                } else {
                    console.log('wrote ' + bytes + ' bytes');
                }
            });
    } else {
        console.log('Failed to connect.');
    }
};


chrome.bluetooth.getAdapterState((adapter) => {
    console.log('Adapter ' + adapter.address + ': ' + adapter.name);
});

chrome.bluetooth.getDevices((devices) => {
    for (const device of devices) {
        console.log(device.address);
    }
});

chrome.bluetooth.onDeviceAdded.addListener((device) => {
    let uuid = '0000180d-0000-1000-8000-00805f9b34fb';
    if (!device.uuids || device.uuids.indexOf(uuid) < 0)
        return;

    // The device has a service with the desired UUID.
    chrome.bluetoothLowEnergy.connect(device.address, () => {
        if (chrome.runtime.lastError) {
            console.log('Failed to connect: ' + chrome.runtime.lastError.message);
            return;
        }
        // Connected! Do stuff...
    });
});

const uuid = '1105';

chrome.bluetooth.getDevices((devices) => {
    chrome.bluetoothSocket.create((createInfo) => {
        chrome.bluetoothSocket.connect(createInfo.socketId,
            devices[0].address, uuid, () => {
                if (chrome.runtime.lastError) {
                    console.log('Connection failed: ' + chrome.runtime.lastError.message);
                } else {
                    chrome.bluetoothSocket.send(createInfo.socketId, new ArrayBuffer(4096), (bytes_sent) => {
                        if (chrome.runtime.lastError) {
                            console.log('Send failed: ' + chrome.runtime.lastError.message);
                        } else {
                            console.log('Sent ' + bytes_sent + ' bytes')
                        }
                    });
                }
            });
        chrome.bluetoothSocket.onReceive.addListener((receiveInfo) => {
            if (receiveInfo.socketId != createInfo.socketId)
                return;
            // receiveInfo.data is an ArrayBuffer.
        });
    });
});

// #endregion

// #region chrome.browser

chrome.browser.openTab({ url: 'https://github.com' });
chrome.browser.openTab({ url: 'https://github.com' }, () => { });

// #endregion

// #region chrome.certificateProvider

const requestId = 555;
chrome.certificateProvider.requestPin({ signRequestId: requestId }, (codeVal) => {
    if (codeVal) {
        return codeVal.userInput;
    }
});

chrome.certificateProvider.stopPinRequest({ signRequestId: requestId }, () => {
    if (chrome.runtime.lastError) {
        console.error('Error:', chrome.runtime.lastError);
    }
});

chrome.certificateProvider.onCertificatesRequested.addListener((certifictes, callback) => {
    for (const cert of certifictes) {
        if (cert.supportedHashes !== undefined && cert.certificate !== undefined) {
            cert.supportedHashes.map(hash => {
                return [hash, cert.certificate];
            });
        }
    }
});

chrome.certificateProvider.onSignDigestRequested.addListener((signRequest, signCallback) => {
    if (signRequest.hash == 'SHA1') {
        signCallback(signRequest.certificate);
    }
});

// #endregion

// #region chrome.clipboard

const copyTextData = (text: string) => {
    var input = document.getElementById('copy_text') as HTMLInputElement || new HTMLInputElement();
    input.value = text;
    input.focus();
    input.select();
    if (document.execCommand('Copy'))
        return true;
}
copyTextData('FooBar');
copyTextData('GitHub');

function setImageDataClipboard(
    imageUrl: string,
    imageType: chrome.clipboard.ImageType,
    additionalItems?: chrome.clipboard.AdditionalItems) {
    var oReq = new XMLHttpRequest();
    oReq.open('GET', imageUrl, true);
    oReq.responseType = 'arraybuffer';
    oReq.onload = (oEvent) => {
        var arrayBuffer = oReq.response;
        if (arrayBuffer) {
            if (additionalItems) {
                chrome.clipboard.setImageData(arrayBuffer, imageType, additionalItems,
                    () => {
                        return;
                    });
            } else {
                chrome.clipboard.setImageData(arrayBuffer, imageType);
            }
        } else {
            console.error('Failed to load the image file');
        }
    };
    oReq.send(undefined);
}

setImageDataClipboard('/icon1.png', 'png');
setImageDataClipboard('/test.jpg', 'jpeg');
setImageDataClipboard('/redirect_target.gif', 'jpeg');
setImageDataClipboard('/redirect_target.jpg', 'jpeg', {
    data: '<p>Lorem Ipsum...</p>',
    type: 'textHtml'
});

// #endregion

// #region chrome.contextMenus

chrome.contextMenus.ACTION_MENU_TOP_LEVEL_LIMIT;

chrome.contextMenus.onClicked.addListener((info) => {
    const isChecked = info.checked;
    if (!document.hasFocus() && isChecked) {
        return;
    }
});

// #endregion

// #region chrome.desktopCapture

chrome.desktopCapture.chooseDesktopMedia(['screen', 'window', 'tab'], () => { });
chrome.desktopCapture.chooseDesktopMedia([chrome.desktopCapture.DesktopCaptureSourceType.AUDIO], () => { });

// #endregion

// #region chrome.dns

chrome.dns.resolve('github.com', (info) => {
    console.log([info.resultCode === 0, info.address]);
});

// #endregion

// #region chrome.documentScan

chrome.documentScan.scan({
    maxImages: 100,
    mimeTypes: ['image/jpeg']
}, (results) => {
    results.dataUrls.map(urlData => {
        var scannedImage = document.createElement('img');
        scannedImage.title = 'Mime type: ' + results.mimeType;
        scannedImage.src = urlData;
    });
});

// #endregion

// #region chrome.enterprise.*
// ENTERPRISE - DEVICE ATTRIBUTES

const deviceAttr = chrome.enterprise.deviceAttributes;

if (deviceAttr.getDirectoryDeviceId && deviceAttr.getDeviceAssetId) {
    if (deviceAttr.getDeviceSerialNumber && deviceAttr.getDeviceAnnotatedLocation) {
        void deviceAttr.getDirectoryDeviceId;
        void deviceAttr.getDeviceAssetId;
        void deviceAttr.getDeviceSerialNumber;
        void deviceAttr.getDeviceAnnotatedLocation;
        console.log('API OK :)');
    }
}

chrome.enterprise.deviceAttributes.getDirectoryDeviceId((deviceId) => {
    return deviceId.substring(0, deviceId.length - 1);
})
chrome.enterprise.deviceAttributes.getDeviceSerialNumber((sn) => console.log(sn.trim()));
chrome.enterprise.deviceAttributes.getDeviceAssetId((assetId) => console.log(assetId.toLowerCase()));
chrome.enterprise.deviceAttributes.getDeviceAnnotatedLocation((loc) => loc.charAt(0));


// ENTERPRISE - PLATFORM KEYS

if (chrome.enterprise.platformKeys.getTokens as any) {
    if (chrome.enterprise.platformKeys.importCertificate as any) {
        if (chrome.enterprise.platformKeys.removeCertificate as any) {
            console.log('API Present');
        }
    }
}
const tokenId = 'tokenid....';
chrome.enterprise.platformKeys.importCertificate(tokenId, new ArrayBuffer(8), () => { });
chrome.enterprise.platformKeys.getCertificates(tokenId, (certificates) => {
    certificates.map((cert) => {
        chrome.enterprise.platformKeys.removeCertificate(tokenId, cert, () => { });
    });
});
chrome.enterprise.platformKeys.getTokens((tokens) => {
    const algorithm = {
        name: 'RSASSA-PKCS1-v1_5',
        // RsaHashedKeyGenParams
        modulusLength: 2048,
        publicExponent:
            new Uint8Array([0x01, 0x00, 0x01]),  // Equivalent to 65537
        hash: {
            name: 'SHA-1',
        }
    };
    tokens.map(token => {
        token.subtleCrypto.generateKey(algorithm, false, ['sign']).then((val) => {

        })
    });
});

// #endregion chrome.enterprise

// #region chrome.Event

const e = new chrome.Event(); // Used const instead of class to be able to return the interface
e.addListener(() => { });

// #endregion

// #region chrome.fileBrowserHandler
// File Browser Handle

chrome.fileBrowserHandler.onExecute.addListener((id, details) => {
    chrome.fileBrowserHandler.selectFile(
        {
            suggestedName: 'some_file_name.txt',
            allowedFileExtensions: ['txt', 'html']
        },
        (result) => {
            console.log(result.entry);
        });
});

// #endregion

// #region chrome.fileSystem
// FILE SYSTEM
// https://developer.chrome.com/apps/fileSystem

((): void => {
    var accepts: chrome.fileSystem.AcceptOptions[] = [
        { mimeTypes: ['text/*'], extensions: ['js', 'css', 'txt', 'html', 'xml', 'tsv', 'csv', 'rtf'] }
    ];
    var chooseOption: chrome.fileSystem.ChooseEntryOptions = {
        type: 'openFile',
        suggestedName: 'foo.txt',
        accepts: accepts,
        acceptsAllTypes: false,
        acceptsMultiple: false
    };
    chrome.fileSystem.chooseEntry(chooseOption, (entry) => {
        chrome.fileSystem.getDisplayPath(entry, (displayPath: string) => { });

        var retainedId = chrome.fileSystem.retainEntry(entry);
        chrome.fileSystem.isRestorable(retainedId, (isRestorable: boolean) => {
            if (isRestorable) {
                chrome.fileSystem.restoreEntry(retainedId, (restoredEntry: Entry) => { });
            }
        });

        chrome.fileSystem.getWritableEntry(entry, (writableEntry: Entry) => { });
        chrome.fileSystem.isWritableEntry(entry, (isWritable: boolean) => { });
    });
})();
chrome.app.runtime.onLaunched.addListener(() => {
    chrome.app.window.create('index.html', { width: 100, height: 100 },
        win => {
            var fs = win.contentWindow.chrome.fileSystem;
            fs.chooseEntry({ type: 'saveFile' }, (entry) => {
                fs.getWritableEntry(entry, (writableEntry) => {
                    var id = fs.retainEntry(entry);
                    chrome.storage.local.set({ id: id }, () => {
                    });
                });
            });
        });
});

// #endregion

// #region chrome.gcm

const gcmMessage = {} as chrome.gcm.OutgoingMessage;
gcmMessage.data = {
    /*goog: 'any', should not be allowed, and it is not :) */
    test: true
};
const eventHandler = (message: chrome.gcm.IncomingMessage) => {
    console.log('From: ', message.from, 'collapseKey:', message.collapseKey);
    return message.data['google'];
}
chrome.gcm.onMessage.addListener(eventHandler);
chrome.gcm.onMessage.removeListener(eventHandler);
chrome.gcm.onMessagesDeleted.addListener(() => { });
chrome.gcm.onSendError.addListener((error) => { console.error(error.detail, error.errorMessage, error.messageId); });

// #endregion

// #region chrome.hid

chrome.hid.getDevices({}, () => { });
chrome.hid.onDeviceAdded.addListener(() => { });
chrome.hid.onDeviceRemoved.addListener(() => { });

chrome.hid.getDevices({
    filters: [
        { vendorId: 5 }
    ]
}, (devices) => {
    const productId = devices[0].productId;
    chrome.hid.getUserSelectedDevices((selectedDevices) => {
        const hmm = selectedDevices.productId == productId ? selectedDevices.vendorId : selectedDevices.maxFeatureReportSize;
    });
    chrome.hid.connect(devices[0].deviceId, (connectInfo) => {
        if (!connectInfo) {
            console.warn('Unable to connect to device.');
        }
        const connection = connectInfo.connectionId;
    });
    chrome.hid.getUserSelectedDevices({ 'multiple': false },
        (devices) => {
            if (chrome.runtime.lastError != undefined) {
                console.warn('chrome.hid.getUserSelectedDevices error: ' +
                    chrome.runtime.lastError.message);
                return;
            }
        });
});

// #endregion

// #region chrome.i18n

chrome.i18n.getMessage('click_here', ['string1', 'string2']);

// #endregion

// #region chrome.identity

chrome.identity.getAuthToken({ interactive: true }, (token) => {
    if (chrome.runtime.lastError) {
        return;
    }
    chrome.identity.removeCachedAuthToken({ token: token }, () => { });
});

// #endregion

// #region chrome.idle

chrome.idle.onStateChanged.addListener((newState) => {
    if (newState === 'active') {
        return true;
    }
});
chrome.idle.queryState(60, (state) => {
    return state === 'idle';
});
chrome.idle.setDetectionInterval(20);

// #endregion

// #region chrome.instanceID

chrome.instanceID.getCreationTime((creationTime) => {
    if (creationTime === 0) {
        return true;
    }
});
chrome.instanceID.getID((instanceId) => {
    if (instanceId) {
        chrome.instanceID.getCreationTime((creationTime) => {
            if (creationTime !== 0) {
                chrome.instanceID.getToken(
                    { 'authorizedEntity': '1', 'scope': 'GCM', 'options': { 'foo': '1' } },
                    (token) => {
                        return token;
                    });
            }
        })
    }
})

// #endregion

// #region chrome.management

chrome.management.getSelf((result) => {
    chrome.management.getPermissionWarningsByManifest(
        JSON.stringify(chrome.runtime.getManifest()),
        (warnings) => {
            console.log(warnings.join('\r\n'));
        });
    if (result.isApp) {
        return 'Of course!';
    } else {
        chrome.management.uninstallSelf({
            showConfirmDialog: false
        }, () => console.log('Goodbye'));
    }
});
// #endregion

// #region chrome.mdns
chrome.mdns.onServiceList.addListener(
    () => { },
    { 'serviceType': 'definitelyTyped._tcp.local' });
chrome.mdns.onServiceList.addListener(function (services) {
    chrome.mdns.forceDiscovery(() => { return chrome.mdns.MAX_SERVICE_INSTANCES_PER_EVENT === 2048; });
}, { 'serviceType': '_googlecast._tcp.local' });
// #endregion

// #region chrome.mediaGalleries

chrome.fileSystem.getVolumeList((volumes) => {
    chrome.fileSystem.requestFileSystem({
        volumeId: volumes[0].volumeId
    }, (fs) => {
        const mData = chrome.mediaGalleries.getMediaFileSystemMetadata(fs);
        chrome.mediaGalleries.addGalleryWatch(mData.galleryId, (result) => {
            if (result.success) {
                console.log('Media gallery id', result.galleryId);
            }
        });
    });
});

// #endregion

// #region chrome.networking.config

const filter: chrome.networking.config.NetworkInfoFilterHexSSID = {
    HexSSID: '11:11:11:11:11:00'
}

chrome.networking.config.setNetworkFilter([filter], () => { });
chrome.networking.config.finishAuthentication(filter.HexSSID || '', 'rejected');

// #endregion

// #region chrome.networking.onc

const TLSFormatExample = {
    NetworkConfigurations: {
            GUID: '{00f79111-51e0-e6e0-76b3b55450d80a1b}',
            Name: 'MyTTLSNetwork',
            Type: 'WiFi',
            WiFi: {
                AutoConnect: false,
                EAP: {
                    ClientCertPattern: {
                        EnrollmentURI: [
                            'http://fetch-my-certificate.com'
                        ],
                        IssuerCARef: [
                            '{6ed8dce9-64c8-d568-d225d7e467e37828}'
                        ]
                    },
                    'ClientCertType': 'Pattern',
                    'Outer': 'EAP-TLS',
                    'ServerCARef': '{6ed8dce9-64c8-d568-d225d7e467e37828}',
                    'UseSystemCAs': true
                },
                'HiddenSSID': false,
                'SSID': 'MyTTLSNetwork',
                'Security': 'WPA-EAP'
            }
        } as chrome.networking.onc.NetworkConfigProperties
}

chrome.networking.onc.getNetworks({ 'networkType': 'All' }, (networkList) => {
    console.log('Length of Network list: ' + networkList.length);
    for (let networkObj of networkList) {
        console.log('GUID: ' + networkObj.GUID);
        console.log('Connectable: ' + networkObj.Connectable);
        if (networkObj.WiFi) {
            // WiFi active :)
            console.log('Wifi BSID: ' + networkObj.WiFi.BSSID);
            const state = networkObj.WiFi.TetheringState;
        }
        chrome.networking.onc.setProperties(networkObj.GUID || '', {
            WiFi: {
                Passphrase: 'Can be set :) but not get?'
            }
        })
        // Test that we can't get passphrase
        chrome.networking.onc.getProperties(networkObj.GUID || '', (props) => {
            const WiFiResult = props.WiFi;
        });
        chrome.networking.onc.getState(networkObj.GUID || '', (state) => {
            const wifiState = state.WiFi || {};
            return wifiState.TetheringState;
        });
        chrome.networking.onc.getManagedProperties(networkObj.GUID || '', (result) => {
            const wifiResult = result.WiFi;
            if (wifiResult !== undefined) {
                const managed = wifiResult.HexSSID;
                if (managed !== undefined) {
                    return managed.UserPolicy;
                }
            }
        });
    }
});

// #endregion

// #region chrome.notifications

let nID: string;

chrome.notifications.create({
    type: 'basic',
    iconUrl: 'stay_hydrated.png',
    title: 'Time to Hydrate',
    message: 'Everyday I\'m Guzzlin\'!',
    buttons: [
        { title: 'Keep it Flowing.' }
    ],
    priority: 0
}, (notificationId) => {
    nID = notificationId;
    chrome.notifications.update(nID, {
        title: 'Updated title'
    });
    chrome.notifications.onButtonClicked.addListener((_id, buttonIndex) => {
        if (buttonIndex === 0) {
            chrome.notifications.clear(nID, function () { });
        }
    });
});

// #endregion

// #region chrome.platformKeys
var data = {
    trusted_l1_leaf_cert: 'l1_leaf.der',
    trusted_l1_interm_cert: 'l1_interm.der',
    trusted_l2_leaf_cert: 'l2_leaf.der',
    client_1: 'client_1.der',
    client_2: 'client_2.der',
    client_1_spki: 'client_1_spki.der',
    client_1_issuer_dn: {
        buffer: new ArrayBuffer(16)
    },
    raw_data: 'data',
    signature_nohash_pkcs: 'signature_nohash_pkcs',
    signature_client1_sha1_pkcs: 'signature_client1_sha1_pkcs',
    signature_client2_sha1_pkcs: 'signature_client2_sha1_pkcs',
};
function requestCA1(): chrome.platformKeys.ClientCertificateRequest {
    return {
        certificateTypes: [],
        certificateAuthorities: [data.client_1_issuer_dn.buffer]
    };
}
chrome.platformKeys.selectClientCertificates(
    { interactive: false, request: requestCA1() },
    (matches) => {
    });

const requestECDSA: chrome.platformKeys.ClientCertificateRequest = {
    certificateTypes: ['ecdsaSign'],
    certificateAuthorities: []
};
chrome.platformKeys.selectClientCertificates(
    { interactive: false, request: requestECDSA },
    (matches) => {
        return matches.length;
    });

if (chrome.platformKeys.subtleCrypto &&
    chrome.platformKeys.subtleCrypto() &&
    chrome.platformKeys.subtleCrypto().sign &&
    chrome.platformKeys.subtleCrypto().exportKey) {
    void chrome.platformKeys.subtleCrypto().sign;
    void chrome.platformKeys.subtleCrypto().exportKey;
    console.log('Subtle crypto working (Y)')
}

var keyParams = {
    // Algorithm names are case-insensitive.
    name: 'RSASSA-Pkcs1-V1_5',
    hash: { name: 'sha-1' }
};
chrome.platformKeys.getKeyPair(
    data.client_1_issuer_dn.buffer, keyParams,
    (publicKey, privateKey) => {
        let expectedAlgorithm = {
            modulusLength: 2048,
            name: 'RSASSA-PKCS1-v1_5',
            publicExponent: new Uint8Array([0x01, 0x00, 0x01]),
            hash: { name: 'SHA-1' }
        };

        if (expectedAlgorithm === publicKey.algorithm &&
            privateKey &&
            expectedAlgorithm === privateKey.algorithm) {
            if (publicKey.type === 'public' && privateKey.type === 'private') {
                console.log('All okay!');
            }
        }
        chrome.platformKeys.subtleCrypto()
            .exportKey('spki', publicKey)
            .then((actualPublicKeySpki) => {
                if (new ArrayBuffer(100) === actualPublicKeySpki) {
                    return false;
                }
            });
    });
var details = {
    serverCertificateChain: [data.client_1_issuer_dn.buffer],
    hostname: 'l1_leaf'
};
chrome.platformKeys.verifyTLSServerCertificate(
    details, (result) => {
        return result.trusted;
    });
// #endregion

// #region chrome.permissions

chrome.permissions.request({ permissions: ['storage'] }, (granted) => {
    return granted && 'It was granted';
});

chrome.permissions.getAll((permissions) => {
    if (chrome.runtime.lastError || !permissions.permissions) {
        return;
    }
    for (const permission of permissions.permissions) {
        if (permission === 'alarms') {
            return 'I knew it!';
        }
        chrome.permissions.remove({ permissions: [permission] }, (removed) => {
            return removed ? 'It was removed' : 'It was not removed';
        });
    }
    chrome.permissions.contains({ origins: ['chrome://favicon/'] }, (doIHaveIt) => doIHaveIt ? 'yes' : 'neh');
    chrome.permissions.request(
        { permissions: ['audio'] },
        () => { });
});

// #endregion

// #region chrome.power

chrome.power.requestKeepAwake(chrome.power.Level.DISPLAY);
chrome.power.requestKeepAwake('display');

// #endregion

// #region chrome.runtime

chrome.runtime.onMessageExternal.addListener((request, sender, sendResponse) => {
    sendResponse({
        'result': 'Ops, I don\'t understand this message'
    });
});
chrome.runtime.sendMessage(
    chrome.runtime.id,
    { myCustomMessage: 'tra laa la' },
    null,
    (response: any) => {
        console.log('Response: ' + JSON.stringify(response));
    }
);

chrome.runtime.getPackageDirectoryEntry((pentry) => {
    pentry.getFile('manifest.json', undefined, (file) => {
        return file.name;
    }, err => console.error(err));
});

chrome.runtime.reload();
chrome.runtime.restart();
chrome.runtime.restartAfterDelay(10);
chrome.runtime.restartAfterDelay(10, () => {
    console.log('This is a callback!');
});
chrome.runtime.requestUpdateCheck((status, details) => {
    if (status === chrome.runtime.RequestUpdateCheckStatus.THROTTLED) {
        if (details !== undefined) {
            console.log(details.version);
        } else {
            console.log('Unknown');
        }
    }
});
const os = chrome.runtime.PlatformOs.ANDROID;
if (os === 'android') {
    console.log('Enum ok');
}
const appId = chrome.runtime.id;

// #endregion

// #region chrome.signedInDevices

const dumpDevices = (devices: chrome.signedInDevices.DeviceInfo[]) => {
    for (const device of devices) {
        if (device.type === 'desktop_or_laptop') {
            console.log(device.name, device.chromeVersion);
        }
    }
}
chrome.signedInDevices.onDeviceInfoChange.addListener(dumpDevices);
chrome.signedInDevices.get(false, dumpDevices);

// #endregion

// #region chrome.sockets
// SOCKETS
// https://developer.chrome.com/apps/sockets_tcp

function testSystemNetwork() {
    chrome.system.network.getNetworkInterfaces((networkInterfaces) => {
        var iface: chrome.system.network.NetworkInterface;
        for (var i in networkInterfaces) {
            iface = networkInterfaces[i];
        }
    });
}

function test_socketsTcp(): void {
    var socketId: chrome.integer = 0;
    var properties: chrome.sockets.SocketProperties = {};
    var buffer: ArrayBuffer = new ArrayBuffer(256);

    // create
    chrome.sockets.tcp.create((info) => {
        socketId = info.socketId;
    });

    chrome.sockets.tcp.create(properties, (info) => {
        socketId = info.socketId;
    });

    // update
    chrome.sockets.tcp.update(socketId, properties);
    chrome.sockets.tcp.update(socketId, properties, () => { });

    // setPaused
    chrome.sockets.tcp.setPaused(socketId, true);
    chrome.sockets.tcp.setPaused(socketId, true, () => { });

    // setKeepAlive
    chrome.sockets.tcp.setKeepAlive(socketId, true, (result) => { });
    chrome.sockets.tcp.setKeepAlive(socketId, true, 0, (result) => { });

    // setNoDelay
    chrome.sockets.tcp.setNoDelay(socketId, true, (result) => { });

    // connect
    chrome.sockets.tcp.connect(socketId, '192.168.0.1', 8080, (result) => { });

    // disconnect
    chrome.sockets.tcp.disconnect(socketId);
    chrome.sockets.tcp.disconnect(socketId, () => { });

    // send
    chrome.sockets.tcp.send(socketId, buffer, (info: chrome.sockets.SendInfo) => { });

    // close
    chrome.sockets.tcp.close(socketId);
    chrome.sockets.tcp.close(socketId, () => { });

    // getInfo
    chrome.sockets.tcp.getInfo(socketId, (info: chrome.sockets.SocketInfo) => { });

    // getSockets
    chrome.sockets.tcp.getSockets((infos: chrome.sockets.SocketInfo[]) => { });
}

function test_socketsTcpEvents(): void {
    chrome.sockets.tcp.onReceive.addListener((info: chrome.sockets.ReceiveEventArgs) => { });
    chrome.sockets.tcp.onReceiveError.addListener((info: chrome.sockets.ReceiveErrorEventArgs) => { });
}

function testSocketsTcpTypes(): void {
    // SocketProperties
    var properties: chrome.sockets.SocketProperties;

    properties = {
    };

    properties = {
        persistent: true,
        name: 'test',
        bufferSize: 1024
    };

    // SocketInfo
    var socketInfo: chrome.sockets.SocketInfo;

    socketInfo = {
        socketId: 1,
        persistent: true,
        paused: true,
        connected: false
    };

    socketInfo.name = 'test';
    socketInfo.bufferSize = 1024;
    socketInfo.localAddress = '192.168.0.2';
    socketInfo.localPort = 8000;
    socketInfo.peerAddress = '192.168.0.3';
    socketInfo.peerPort = 1000;
}

// https://developer.chrome.com/apps/sockets_udp
function test_socketsUdp(): void {
    var socketId: chrome.integer = 0
    var properties: chrome.sockets.SocketProperties = {};
    var buffer: ArrayBuffer = new ArrayBuffer(256);

    // create
    chrome.sockets.udp.create((info) => {
        socketId = info.socketId;
    });

    chrome.sockets.udp.create(properties, (info) => {
        socketId = info.socketId;
    });

    // update
    chrome.sockets.udp.update(socketId, properties);
    chrome.sockets.udp.update(socketId, properties, () => { });

    // setPaused
    chrome.sockets.udp.setPaused(socketId, true);
    chrome.sockets.udp.setPaused(socketId, true, () => { });

    // bind
    chrome.sockets.udp.bind(socketId, '0.0.0.0', 8080, (result) => { });

    // send
    chrome.sockets.udp.send(socketId, buffer, '172.21.0.1', 10080, (info: chrome.sockets.SendInfo) => { });

    // close
    chrome.sockets.udp.close(socketId);
    chrome.sockets.udp.close(socketId, () => { });

    // getInfo
    chrome.sockets.udp.getInfo(socketId, (info: chrome.sockets.SocketInfo) => { });

    // getSockets
    chrome.sockets.udp.getSockets((infos: chrome.sockets.SocketInfo[]) => { });

    // joinGroup
    chrome.sockets.udp.joinGroup(socketId, '224.0.0.1', (result) => { });

    // leaveGroup
    chrome.sockets.udp.leaveGroup(socketId, '224.0.0.1', (result) => { });

    // setMulticastTimeToLive
    chrome.sockets.udp.setMulticastTimeToLive(socketId, 100, (result) => { });

    // setMulticastLoopbackMode
    chrome.sockets.udp.setMulticastLoopbackMode(socketId, true, (result) => { });

    // getJoinedGroups
    chrome.sockets.udp.getJoinedGroups(socketId, (groups: string[]) => { });
}

function test_socketsUdpEvents(): void {
    chrome.sockets.udp.onReceive.addListener((info: chrome.sockets.ReceiveEventArgs) => { });
    chrome.sockets.udp.onReceiveError.addListener((info: chrome.sockets.ReceiveErrorEventArgs) => { });
}

function testSocketsUdpTypes(): void {
    // SocketProperties
    var properties: chrome.sockets.SocketProperties;

    properties = {
    };

    properties = {
        persistent: true,
        name: 'test',
        bufferSize: 1024
    };

    // SocketInfo
    var socketInfo: chrome.sockets.SocketInfo;

    socketInfo = {
        socketId: 1,
        persistent: true,
        paused: true,
        connected: true,
    };

    socketInfo.name = 'test';
    socketInfo.bufferSize = 1024;
    socketInfo.localAddress = '192.168.0.2';
    socketInfo.localPort = 8000;
}

// https://developer.chrome.com/apps/sockets_tcpServer
function test_socketsTcpServer(): void {
    var socketId: chrome.integer = 0;
    var properties: chrome.sockets.tcpServer.SocketProperties = {};
    var buffer: ArrayBuffer = new ArrayBuffer(256);

    // create
    chrome.sockets.tcpServer.create((info) => {
        socketId = info.socketId;
    });

    chrome.sockets.tcpServer.create(properties, (info) => {
        socketId = info.socketId;
    });

    // update
    chrome.sockets.tcpServer.update(socketId, properties);
    chrome.sockets.tcpServer.update(socketId, properties, () => { });

    // setPaused
    chrome.sockets.tcpServer.setPaused(socketId, true);
    chrome.sockets.tcpServer.setPaused(socketId, true, () => { });

    // listen
    chrome.sockets.tcpServer.listen(socketId, '0.0.0.0', 80, (result) => { });
    chrome.sockets.tcpServer.listen(socketId, '0.0.0.0', 80, 128, (result) => { });

    // disconnect
    chrome.sockets.tcp.disconnect(socketId);
    chrome.sockets.tcp.disconnect(socketId, () => { });

    // close
    chrome.sockets.udp.close(socketId);
    chrome.sockets.udp.close(socketId, () => { });

    // getInfo
    chrome.sockets.udp.getInfo(socketId, (info: chrome.sockets.SocketInfo) => { });

    // getSockets
    chrome.sockets.tcp.getSockets((infos: chrome.sockets.SocketInfo[]) => { });
}

function test_socketsTcpServerEvents(): void {
    chrome.sockets.tcpServer.onAccept.addListener((info: chrome.sockets.AcceptEventArgs) => { });
    chrome.sockets.tcpServer.onAcceptError.addListener((info: chrome.sockets.AcceptErrorEventArgs) => { });
}

function testSocketsTcpServerTypes(): void {
    // SocketProperties
    var properties: chrome.sockets.tcpServer.SocketProperties;

    properties = {
    };

    properties = {
        persistent: true,
        name: 'test'
    };

    // SocketInfo
    var socketInfo: chrome.sockets.tcpServer.SocketInfo;

    socketInfo = {
        socketId: 1,
        persistent: true,
        paused: true
    };

    socketInfo.name = 'test';
    socketInfo.localAddress = '192.168.0.2';
    socketInfo.localPort = 8000;
}

chrome.sockets.udp.create({}, (createInfo) => {
    chrome.sockets.udp.bind(createInfo['socketId'], '192.168.1.22', 0,
        (result) => {
            ((result >= 0) ? createInfo['socketId'] : null);
        });
});

// #endregion

// #region chrome.storage

// LOCAL
chrome.storage.local.clear();
chrome.storage.local.clear(() => { });
chrome.storage.local.get('test', () => { });
chrome.storage.local.get(() => { });
chrome.storage.local.getBytesInUse((bytesInUse) => {
    return (bytesInUse > 100);
});
chrome.storage.local.set({ data: 'example' }, () => { console.log('done'); });

// SYNC
chrome.storage.sync.clear();
chrome.storage.sync.clear(() => { });
chrome.storage.sync.get('test', () => { });
chrome.storage.sync.get(() => { });
chrome.storage.sync.getBytesInUse((bytesInUse) => {
    return (bytesInUse > 100);
});
chrome.storage.sync.set({ data: 'example' }, () => { console.log('done'); });

// MANAGED
chrome.storage.managed.get('test', () => { });
chrome.storage.managed.get(() => { });
chrome.storage.managed.getBytesInUse((bytesInUse) => {
    return (bytesInUse > 100);
});
// chrome.storage.managed.set({ data: 'example' }, () => { console.log('done'); }); // Should not be allowed

// EVENT
chrome.storage.onChanged.addListener((changes, areaName) => {
    if (changes.length > 0) {
        return areaName === 'managed';
    }
});

// #endregion

// #region chrome.syncFileSystem

chrome.syncFileSystem.getConflictResolutionPolicy((policy) => {
    if (policy === 'manual') {
        chrome.syncFileSystem.requestFileSystem((fs) => {
            if (fs.root.isFile) {
                throw new Error('It was a file!');
            }
        });
    }
});
// #endregion

// #region chrome.system.*

function getPowerSourceInfo() {
    chrome.system.powerSource.getPowerSourceInfo(info => {
        if (info === undefined) {
            return true;
        }
        if (info.length === 1 && info[0].type !== chrome.system.powerSource.PowerSourceType.mains) {
            return false;
        }
    });
}

function onPowerChanged() {
    chrome.system.powerSource.onPowerChanged.addListener(info => {
        if (info[0].active) {
            return true;
        }
    });
    chrome.system.powerSource.requestStatusUpdate();
}

async function getCpuInfo() {
    function logCpuInfo(cpuInfo: chrome.system.cpu.CpuInfo) {
        console.log('numOfProcessors: ', cpuInfo.numOfProcessors);
        console.log('archName: ', cpuInfo.archName);
        console.log('modelName: ', cpuInfo.modelName);
        console.log('features: ', cpuInfo.features);
        console.log('# Processors');
        cpuInfo.processors.forEach((processor) => {
            console.log('## Usage');
            console.log('user: ', processor.usage.user);
            console.log('kernel: ', processor.usage.kernel);
            console.log('idle: ', processor.usage.idle);
            console.log('total: ', processor.usage.total);
        });
    }

    chrome.system.cpu.getInfo(cpuInfo => {
        logCpuInfo(cpuInfo);
    });

    const cpuInfo = await chrome.system.cpu.getInfo();
    logCpuInfo(cpuInfo);
}

// #endregion

// #region chrome.tts

chrome.tts.isSpeaking((isSpeaking) => {
    if (!isSpeaking) {
        chrome.tts.speak('This is the typings calling!',
            {
                volume: 10,
            });
    }
});

// #endregion

// #region chrome.usb

const devices: { [key: string]: chrome.usb.Device } = {};
chrome.usb.onDeviceAdded.addListener((device) => {
    devices[device.device] = device;
});
chrome.usb.onDeviceRemoved.addListener((device) => {
    // tslint:disable-next-line:no-dynamic-delete
    delete devices[device.device];
});
chrome.usb.getUserSelectedDevices({
    'multiple': false
}, (selected_devices) => {
    if (chrome.runtime.lastError != undefined) {
        console.warn('chrome.usb.getUserSelectedDevices error: ' + chrome.runtime.lastError.message);
        return;
    }
});

// #endregion

// #region chrome.virtualKeyboard
chrome.virtualKeyboard.restrictFeatures(
    {
        autoCompleteEnabled: false,
        autoCorrectEnabled: false,
        spellCheckEnabled: false,
        voiceInputEnabled: false,
        handwritingEnabled: false
    },
    (update) => {
        if (update.autoCompleteEnabled = false) {
            return true;
        }
    }
);
// #endregion

// #region chrome.vpnProvider

const vpnParams = {
    address: '127.0.0.1/32',
    mtu: '1500',
    exclusionList: ['127.0.0.1/32'],
    inclusionList: ['0.0.0.0/0'],
    dnsServers: ['1.1.1.1', '1.0.0.1', '8.8.8.8'],
    reconnect: true
};
chrome.vpnProvider.onConfigCreated.addListener((id, name, data) => {
    console.log('Connected: ', id.toLowerCase(), name.toUpperCase(), JSON.stringify(data));
});
chrome.vpnProvider.createConfig('Local VPN', (id) => {
    chrome.vpnProvider.setParameters(vpnParams, () => {
        if (chrome.runtime.lastError) {
            chrome.vpnProvider.notifyConnectionStateChanged('failure');
            throw chrome.runtime.lastError;
        }
        chrome.vpnProvider.notifyConnectionStateChanged('connected', () => {
            chrome.vpnProvider.onPacketReceived.addListener(data => {
                return data.byteLength > 0 ? data : undefined;
            });
            chrome.vpnProvider.onConfigRemoved.addListener(id => id.toUpperCase());
            chrome.vpnProvider.onPlatformMessage.addListener((id, message) => {
                if (typeof id === 'string') {
                    return message === 'connected';
                }
            });
            chrome.vpnProvider.onUIEvent.addListener((event, id) => {
                if (event === 'showAddDialog') {
                    return id;
                }
            });
        });
    });
});
// #endregion

// #region chrome.wallpaper
chrome.wallpaper.setWallpaper({
    url: 'chrome://favicon/iconurl/https://www.google.com/favicon.ico',
    layout: 'CENTER_CROPPED',
    filename: 'test_wallpaper'
}, (thumbnail) => {
    const imageUrl = thumbnail;
});
chrome.wallpaper.setWallpaper({
    layout: chrome.wallpaper.WallpaperLayout.STRETCH,
    filename: 'test_wallpaper2'
}, () => { });
// #endregion

// #region chrome.webViewRequest & WebView

let wve = document.createElement('webview');
wve = new WebView() || new window.WebView();
wve.name = 'test';
wve.src = 'https://github.com/DefinitelyTyped';
wve.allowtransparency = true;
wve.autosize = 'on';
wve.partition = 'persist:githubwebview';
wve.addEventListener('close', () => {
    return;
});
wve.addEventListener('consolemessage', (ev) => {
    if (ev.level === 2) {
        const msg = ev.message;
    }
});
wve.addEventListener('dialog', (ev) => {
    ev.dialog.ok('Hello World!');
});
wve.addEventListener('loadstart', (ev) => {
    if (ev.isTopLevel) {
        return ev.url;
    }
    return;
});
wve.addEventListener('zoomchange', (ev) => {
    return ev.newzoomFactor || ev.oldzoomFactor;
});
wve.addEventListener('loadredirect', (ev) => {
    return ev.newUrl || ev.oldUrl;
});

onload = () => {
    const WEBVIEW_SRC = 'data:text/html,<body>One</body>';
    var webview = document.getElementById('foo') as HTMLWebViewElement;
    webview.style.width = '600px';
    webview.style.height = '400px';
    webview.src = WEBVIEW_SRC;
    const indicator = document.createElement('span');
    if (indicator) {
        var loadstart = () => {
            indicator.innerText = 'loading...';
        }
        var loadstop = () => {
            indicator.innerText = '';
        }
        webview.addEventListener('loadstart', loadstart);
        webview.addEventListener('loadstop', loadstop);
    }
    webview.addEventListener('consolemessage', (e) => {
        console.log('g: ' + e.message);
    });
    webview.executeScript(
        { code: "document.querySelector('img').src" }, (results) => {
            if (!results || !results.length) {
                return false;
            }
        });
    webview.focus();
    var blob = new Blob(['<html><body>Blob content</body></html>'],
        { type: 'text/html' });
    var blobURL = URL.createObjectURL(blob);
    webview.src = blobURL;
    webview.onloadstop = null;
    const rule = {
        conditions: [
            new chrome.webViewRequest.RequestMatcher(
                {
                    url: { urlContains: 'guest' }
                }
            )
        ],
        actions: [
            new chrome.webViewRequest.CancelRequest()
        ]
    };
    webview.request.onRequest.addRules([rule]);
    webview.addEventListener('loadabort', (e) => {
        e.preventDefault();
        return e.reason === 'ERR_ABORTED';
    });
    webview.onloadcommit = (e) => {
        if (e.url.indexOf('html') !== -1) {
            return true;
        }
    };
    webview.getZoom((zoomFactor) => {
        webview.setZoom(3.14 * zoomFactor, () => {
            webview.getZoomMode((zoomMode) => {
                if (zoomMode === 'disabled') {
                    return true;
                }
            });
        });
    });
    webview.insertCSS({ code: '' }, () => { });
    webview.loadDataWithBaseUrl("data:text/html;base64,PGh0bWw+CiAgVGhpcyBpcy" +
        "BhIHRlc3QuPGJyPgogIDxpbWcgc3JjPSJ0ZXN0LmJtcCI+PGJyPgo8L2h0bWw+Cg==",
        'https://github.com/',
        'chrome://favicon');
    document.body.appendChild(webview);
    webview.onconsolemessage = () => { };
    webview.onloadstop = () => {
        webview.request.onCompleted.addListener((details) => {
            if (details.url) {
                return true;
            }
        }, { urls: ['<all_urls>'] });
    };
    webview.setAttribute('src', WEBVIEW_SRC);
    webview.partition = 'partitionFromManifest';
    webview.removeAttribute('src');
    webview.insertCSS({ code: '' }, () => {

    });
}

wve.request.onBeforeRequest.addListener(
    (details) => { return { cancel: true }; },
    { urls: ['*://www.evil.com/*'] },
    ['blocking']);

const rule: chrome.webViewRequest.OnRequestRule = {
    conditions: [
        // new chrome.webViewRequest.CancelRequest(), // This is incompatible - should break it :)
        new chrome.webViewRequest.RequestMatcher({ url: { hostSuffix: 'example.com' } })
    ],
    actions: [
        new chrome.webViewRequest.CancelRequest(),
        new chrome.webViewRequest.IgnoreRules({
            'lowerPriorityThan': 1000
        }),
        new chrome.webViewRequest.SendMessageToExtension({
            'message': JSON.stringify({
                'type': 'error',
                'action': 'cancelled'
            })
        })
    ]
};

new chrome.webViewRequest.RequestMatcher({
    'url': { 'urlMatches': '.*' },
    'resourceType': [
        'image'
    ]
});

new chrome.webViewRequest.RedirectRequest({ redirectUrl: 'http://127.0.0.1' });

new chrome.webViewRequest.RedirectByRegEx({
    'from': '^.*:\/\/([^/]*)[^#?]*\/([^#?]*)([#?].*)?$',
    'to': 'http://dummyimage.com/xga/000/0f0.png&text=BLOCKED:$1/.../$2'
});

new chrome.webViewRequest.RequestMatcher({
    'url': { 'hostSuffix': 'dummyimage.com' }
});

wve.request.onRequest.addRules([rule]);

function CreateWebViewAndGuest() {
    var webview = new WebView();
    webview.allowtransparency = true;
    webview.allowscaling = true;
    var onLoadStop = (e: WebView.Events.LoadStopEvent) => {
        webview.removeEventListener('loadstop', onLoadStop);
        webview.removeEventListener('loadabort', onLoadAbort);
    };
    webview.addEventListener('loadstop', onLoadStop);

    const onLoadAbort = (e: WebView.Events.LoadAbortEvent) => {
        webview.removeEventListener('loadstop', onLoadStop);
        webview.removeEventListener('loadabort', onLoadAbort);
    };

    webview.src = 'data:text/html,<!DOCTYPE html>\n' +
        '<style>\n' +
        'select {\n' +
        '  position: absolute;\n' +
        '  top: 9px;\n' +
        '  left: 9px;\n' +
        '  height: 25px;\n' +
        '  width: 80px;\n' +
        '}\n' +
        '</style>\n' +
        '<html>\n' +
        '  <body>\n' +
        '    <select>\n' +
        '      <option selected>Apple</option>\n' +
        '      <option>Orange</option>\n' +
        '      <option>Banana</option>\n' +
        '    </select>\n' +
        '  </body>\n' +
        '</html>\n';

    return webview;
}

onload = () => {
    var webview = CreateWebViewAndGuest();
    document.body.appendChild(webview);
};

// #endregion

// #region Embedding & AppView
chrome.app.runtime.onEmbedRequested.addListener((request) => {
    request.allow('foobar.html');
});
// Creates an <appview> element.
let appview = document.createElement('appview');
appview = new AppView() || new window.AppView();
// Appends the element to the document body.
document.body.appendChild(appview);
// Connects the appview to appToEmbed.
appview.connect('id of app');
document.appendChild(appview);
//#endregion

// #region HTMLElement correctly subtypes Element in TS3.1.
const htmlElement = document.querySelector('zzzzzz') as HTMLElement;
//#endregion


