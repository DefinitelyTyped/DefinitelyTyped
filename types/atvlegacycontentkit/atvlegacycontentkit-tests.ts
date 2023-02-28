function genericFunctions() {
    atv._debugDumpControllerStack();
    atv.appStoreReceipt();
    const interval = atv.setInterval(test => console.log('test'), 1000, 'test3');
    atv.clearInterval(interval);
    const timeout = atv.setTimeout(test => console.log('test', test), 1000, 'test2');
    atv.clearTimeout(timeout);

    atv.logout();
    atv.localtime(new Date(), 'yyyy');

    if (atv.nowPlaying) {
        atv.nowPlaying.currentAsset;
        atv.nowPlaying.showNowPlaying();
    }

    atv.showMoreInfo();

    console.log(atv.uuid());
}

atv.config.doesJavaScriptLoadRoot = true;
atv.config['test'] = 'Test';

function crypto() {
    console.log(atv.crypto.MD5('test'));
    console.log(atv.crypto.SHA1('test'));
    console.log(atv.crypto.SHA224('test'));
    console.log(atv.crypto.SHA256('test'));
    console.log(atv.crypto.SHA384('test'));
    console.log(atv.crypto.SHA512('test'));
}

function device() {
    console.info(atv.device.displayName);
    console.info(atv.device.idForVendor);
    console.log(atv.device.isInRetailDemoMode);
    console.log(atv.device.language);
    console.warn(atv.device.preferredVideoFormat);
    console.error(atv.device.preferredVideoPreviewFormat);
    console.dir(atv.device.screenFrame);
    console.log(
        atv.device.screenFrame.height,
        atv.device.screenFrame.width,
        atv.device.screenFrame.x,
        atv.device.screenFrame.y,
    );
    console.log(atv.device.softwareVersion);
    console.log(atv.device.storeFrontCountryCode);
    console.log(atv.device.udid);
}

function documentTest() {
    document.evaluateXPath('[id=test]');
    document.getElementById('test');
    document.makeElementNamed('test');
    document.ownerDocument.rootElement;
    document.rootElement.parent;
    document.serializeToString();
}

function elementTest() {
    document.rootElement.appendChild(document.makeElementNamed('test'));
    document.rootElement.childElements;
    document.rootElement.getAttribute('test');
    document.rootElement.getElementByName('test');
    document.rootElement.getElementsByName('test');
    document.rootElement.insertChildAfter(document.makeElementNamed('test2'), document.rootElement.childElements[0]);
    document.rootElement.insertChildBefore(document.makeElementNamed('test3'), document.rootElement.childElements[0]);
    document.rootElement.ownerDocument.rootElement;
    document.rootElement.parent.ownerDocument;
    document.rootElement.removeAttribute('test');
    document.rootElement.removeFromParent();
    document.rootElement.replaceChild(document.rootElement.childElements[0], document.makeElementNamed('test4'));
    document.rootElement.setAttribute('test', 'test');
    console.log(document.rootElement.tagName);
    console.log(document.rootElement.textContent);
}

function domView() {
    const domView = new atv.DOMView();
    domView.onUnload = () => console.log('unload');
    domView.load(atv.parseXML('<atv><body></body></atv>'));
    domView.unload();
}

function fullScreenMediaBrowser() {
    const mediaBrowser = new atv.FullScreenMediaBrowser();
    mediaBrowser.type = 'commentsScreenOnly';

    mediaBrowser.onLoadMetadata = (photoId) => {
        // Do nothing
        console.log('on load metadata ' + photoId);
        mediaBrowser.updateMetadata(photoId, {
            liked: true,
            likeStatus: 'liked this',
            comments: [{ text: 'Test comment', footer: 'Test footer' }],
        });
    };

    mediaBrowser.onItemSelection = (photoId) => {
        console.log('item selected ' + photoId);
    };

    mediaBrowser.onMarkCommentsAsViewed = (photoID) => {
        console.log('mark comments viewed ' + photoID);
    };

    mediaBrowser.onLikeSelection = (photoId, metadata) => {
        console.log('on like selection ' + photoId);
        metadata['liked'] = !metadata['liked'];
        metadata['likeStatus'] = metadata['liked'] ? 'you like this.' : 'like';
        mediaBrowser.updateMetadataLiked(photoId, metadata);
    };

    mediaBrowser.show(
        [
            {
                type: 'photo',
                id: 'test',
                caption: 'test 2',
                assets: [
                    {
                        src: 'https://samples-appletv.shea.nz/img/purple.png?t=4',
                    },
                    {
                        src: 'https://samples-appletv.shea.nz/img/green.png?t=4',
                    },
                ],
                badges: [
                    {
                        type: 'commentsBadge',
                        style: 'unreadComment',
                    },
                ],
            },
            {
                type: 'video',
                id: 'test2',
                caption: 'test 43',
                previewImages: [
                    {
                        src: 'https://samples-appletv.shea.nz/img/green.png?t=4',
                    },
                ],
                badges: [
                    {
                        type: 'commentsBadge',
                        style: 'readComment',
                    },
                ],
            },
        ],
        0,
    );
}

function imageView() {
    const imageView = new atv.ImageView();
    imageView.addAnimation(
        {
            type: 'BasicAnimation',
            animationDidStart: () => console.log('start'),
            animationDidStop: () => console.log('end'),
            additive: false,
            autoreverses: true,
            beginTime: 0,
            byValue: 1,
            cumulative: false,
            duration: 10,
            fadeInDuration: 2,
            fadeOutDuration: 2,
            fillMode: 'both',
            fromValue: 0,
            keyPath: 'opacity',
            removedOnCompletion: true,
            repeatCount: 1,
            repeatDuration: 1,
            speed: 1,
            timeOffset: 10,
            toValue: 1,
        },
        'test',
    );
    imageView.backgroundColor = { red: 0, green: 0, blue: 1, alpha: 0.5 };
    imageView.frame = { width: 10, height: 10, x: 1, y: 1 };
    imageView.loadImageAtURL('https://avatars.githubusercontent.com/u/3637556');
    imageView.removeAnimation('test');
    imageView.removeAllAnimations();
    imageView.subviews = [new atv.ImageView()];
}

function exitApp() {
    atv.unloadPage();
    atv.exitApp();
}

function pages() {
    atv.loadAndSwapPlist({});
    atv.loadAndSwapURL('http://example.com', 'GET', { Test: 'Test' }, 'test');
    atv.loadAndSwapXML(atv.parseXML('<atv></atv>'), success => console.log(success));
    atv.loadPlist('');
    atv.loadURL('https://google.com');
    atv.loadXML(atv.parseXML('<atv></atv>'), s => console.log(s));
    atv.parsePlist('');
    atv.parseXML('<atv></atv>');
}

function localStorage() {
    atv.localStorage['Test'] = 'test';
    console.assert(atv.localStorage['Test'] != null, atv.localStorage.getItem('Test'));
    atv.localStorage.removeItem('Test');
    atv.localStorage.clear();

    atv.sessionStorage['Test'] = 'test';
    console.assert(atv.sessionStorage['Test'] != null, atv.sessionStorage.getItem('Test'));
    atv.sessionStorage.removeItem('Test');
    atv.sessionStorage.clear();
}

atv.onPageLoad = p => console.log(p);
atv.onPageUnload = p => console.log(p);
atv.onPageBuried = p => console.log(p);
atv.onPageExhumed = p => console.log(p);
atv.onAppEntry = () => console.log('app entry');
atv.onAppExit = () => console.log('app exit');

atv.onScreensaverPhotosSelectionEntry = () => {
    atv.setScreensaverPhotosCollection({
        id: 'sample', // The name sent to the server to load more images
        name: 'Sample 2', // The name shown to users on in the screensaver settings menu
        type: 'collection', // Must be set to 'collection'
    });
    console.log('screensaver selection entry');
};

atv.onScreensaverPhotosSelectionExit = () => console.log('Screensaver exit');

atv.onExecuteQuery = (query, callback) => {
    query.filters.forEach(f => console.log(f.operation, f.property, f.value));
    console.log(query, query.length, query.shuffle);

    callback.success([
        {
            id: 'test',
            type: 'photo',
            assets: [{ width: 10, height: 10, src: 'https://avatars.githubusercontent.com/u/3637556' }],
        },
    ]);
    callback.failure('test');
};

atv.onLogout = () => console.log('logout');

atv.getItmsLink = () => {
    console.log('itms link');
    return 'test';
};

atv.onAuthenticate = (username, password, callback) => {
    console.log(username, password);
    callback.success();
    callback.failure('test');
};

atv.onOpenURL = options => {
    console.log(options.openURL);
};

atv.onGenerateRequest = request => {
    request.url = 'https://example.com';
    request.setRequestHeader('Test12', 'test');
};

function pinEntry() {
    const pinEntry = new atv.PINEntry();
    pinEntry.title = 'Title';
    pinEntry.prompt = 'Prompt';
    pinEntry.initialPINCode = 'ABC13';
    pinEntry.numDigits = 6;
    pinEntry.userEditable = true;
    pinEntry.hideDigits = true;
    pinEntry.onSubmit = value => console.log(value);
    pinEntry.onCancel = () => console.log('cancel');
    pinEntry.show();
}

function player() {
    if (atv.player) {
        console.log(
            atv.player.states.FastForwarding,
            atv.player.states.Loading,
            atv.player.states.Paused,
            atv.player.states.Rewinding,
            atv.player.states.Playing,
            atv.player.states.Stopped,
        );
        console.log(
            atv.player.events.FFwd,
            atv.player.events.Pause,
            atv.player.events.Play,
            atv.player.events.Rew,
            atv.player.events.SkipFwd,
            atv.player.events.SwipBack,
        );
        console.log(atv.player.asset);
        atv.player.changeToAsset(atv.parseXML('<atv></atv>').rootElement);
        atv.player.convertGrossToNetTime(10);
        atv.player.convertNetToGrossTime(10);
        console.log(atv.player.currentItem);
        console.log(atv.player.currentPlaybackDate, atv.player.currentPlaybackRate);
        console.log(atv.player.eventGroups);
        console.log(atv.player.interstitials);
        atv.player.observeTimedMetadataKeys();
        atv.player.play();
        atv.setTimeout(() => atv.player.stop(), 10000);
        atv.setTimeout(() => atv.player.stopWithReason('Test', 'Test 2'), 10000);
    }
}

if (atv.player) {
    atv.player.willStartPlaying = () => console.log('will start playing');
    atv.player.currentAssetChanged = () => console.log('current asset changed');
    atv.player.loadMoreAssets = callback => {
        console.log('load more');
        callback.success(null);
        callback.failure('test');
    };
    atv.player.onStartBuffering = p => console.log(p);
    atv.player.onBufferSufficientToPlay = () => console.log('sufficent');
    atv.player.onPlaybackError = error => console.log(error);
    atv.player.onQualityOfServiceReport = q => console.log(q.accessLog, q.errorLog);
    atv.player.playerStateChanged = s => console.log(s);
    atv.player.playerWillSeekToTime = time => {
        console.log(time);
        return time;
    };
    atv.player.playerShouldHandleEvent = (event, p) => {
        console.log(event, p);
        return true;
    };
    atv.player.playerDateDidChange = d => console.log(d);
    atv.player.playerTimeDidChange = t => console.log(t);
    atv.player.didStopPlaying = () => console.log('stop');
    atv.player.onTransportControlsDisplayed = d => console.log(d);
    atv.player.onTransportControlsHidden = d => console.log(d);
    atv.player.didSelectAudioTrack = a => console.log(a);
    atv.player.didSelectSubtitleTrack = s => console.log(s, s.bcp47, s.cc, s.forced, s.name, s.sdh, s.subtitle);
    atv.player.onTimedMetdataChanged = m =>
        console.log(
            m,
            m.dataValue,
            m.dateValue,
            m.duration,
            m.extraAttributes,
            m.key,
            m.numberValue,
            m.startDate,
            m.stringValue,
            m.time,
            m.value,
        );
    atv.player.loadRelatedContent = (u, c) => {
        console.log(u);
        c.success(null);
        c.failure();
    };
}

function popupMenu() {
    const p = new atv.PopupMenu();
    p.load(atv.parseXML('<atv></atv>'), s => console.log(s));
    p.cancel();
}

function proxyDocument() {
    const p = new atv.ProxyDocument();
    p.onCancel = () => console.log('cancel');
    p.show();
    p.loadPlist('');
    p.loadURL('https://example.com', 'GET', { Test: 'test' }, 'test');
    p.loadXML(atv.parseXML('<atv></atv>'));
    p.cancel();
}

function ratingControl() {
    const r = new atv.RatingControl();
    r.rating = 1;
    r.title = 'title';
    r.hasUserSetRating = false;
    r.onRate = r => console.log(r);
    r.onCancel = () => console.log('cancel');
    r.show();
}

function sharedCredentials() {
    console.log(atv.sharedCredentials, atv.sharedCredentials?.password, atv.sharedCredentials?.username);
}

if (atv.secureKeyDelivery) {
    atv.secureKeyDelivery.cancelAllRequests = () => console.log('cancel all');
    atv.secureKeyDelivery.fetchAssetID = (uri, callback) => {
        console.log(uri);
        callback.success('', true);
        callback.failure('test');
    };
    atv.secureKeyDelivery.fetchCertificate = (uri, callback) => {
        console.log(uri);
        callback.success('');
        callback.failure('test');
    };
    atv.secureKeyDelivery.fetchKey = (uri, r, call) => {
        console.log(uri, r);
        call.success('');
        call.failure('test 2');
    };
}

function storeFront() {
    const req = new atv.SKProductsRequest(['test']);
    req.onProductsRequestDidReceiveResponse = res => {
        console.log(res, res.invalidProductIdentifiers, res.products);
        res.products.forEach(p =>
            console.log(
                p.localizedDescription,
                p.localizedPrice,
                p.localizedTitle,
                p.price,
                p.priceLocale,
                p.priceLocale.localeIdentifier,
                p.productIdentifier,
            ),
        );
    };
    req.onRequestDidFinish = () => console.log('finish');
    req.onRequestDidFailWithError = error =>
        console.log(error, error.code, error.error, error.message, error.transaction);
    req.start();
    req.cancel();

    const obs: SKPaymentTransactionObserver = {
        updatedTransactions: t => {
            console.log(t);
            t.forEach(tr =>
                console.log(
                    tr.originalTransaction,
                    tr.payment,
                    tr.transactionDate,
                    tr.transactionIdentifier,
                    tr.transactionReceipt,
                    tr.transactionState,
                ),
            );
        },
        removedTransactions: t => {
            console.log(t);
            t.forEach(tr =>
                console.log(
                    tr.originalTransaction,
                    tr.payment,
                    tr.transactionDate,
                    tr.transactionIdentifier,
                    tr.transactionReceipt,
                    tr.transactionState,
                ),
            );
        },
        restoreCompletedTransactionsFailedWithError: e => {
            console.log(e, e.code, e.error, e.message, e.transaction);
        },
        restoreCompletedTransactionsFinished: () => {
            console.log('Restore');
        },
    };
    atv.SKDefaultPaymentQueue.addTransactionObserver(obs);
    const payment = {
        product: {
            localizedPrice: '$0.00',
            localizedDescription: 'test',
            localizedTitle: 'test 2',
            price: 0,
            productIdentifier: 'test',
            priceLocale: { localeIdentifier: '' },
        },
        quantity: 1,
        requestParameters: {},
    };
    atv.SKDefaultPaymentQueue.addPayment(payment);
    console.log(atv.SKDefaultPaymentQueue.canMakePayments);
    atv.SKDefaultPaymentQueue.finishTransaction({
        payment,
        transactionDate: new Date(),
        transactionIdentifier: '',
        transactionReceipt: {},
        transactionState: atv.SKPaymentTransactionStatePurchased,
    });

    console.log(
        atv.SKPaymentTransactionStateDeferred,
        atv.SKPaymentTransactionStateFailed,
        atv.SKPaymentTransactionStatePurchased,
        atv.SKPaymentTransactionStatePurchasing,
        atv.SKPaymentTransactionStateRestored,
    );

    atv.SKDefaultPaymentQueue.removeTransactionObserver(obs);
    atv.SKDefaultPaymentQueue.restoreCompletedTransactions();
    atv.SKDefaultPaymentQueue.restoreCompletedTransactionsWithApplicationUsername();

    console.log(atv.SKDefaultPaymentQueue.transactions);
    if (atv.SKDefaultPaymentQueue.transactions != null) {
        atv.SKDefaultPaymentQueue.transactions.forEach(tr =>
            console.log(
                tr.originalTransaction,
                tr.payment,
                tr.transactionDate,
                tr.transactionIdentifier,
                tr.transactionReceipt,
                tr.transactionState,
            ),
        );
    }

    console.log(
        atv.SKErrorUnknown,
        atv.SKErrorClientInvalid,
        atv.SKErrorPaymentCancelled,
        atv.SKErrorPaymentInvalid,
        atv.SKErrorPaymentNotAllowed,
        atv.SKErrorStoreProductNotAvailable,
    );

    const receipt = new atv.SKReceiptRefreshRequest({});
    receipt.onRequestDidFailWithError = e => console.log(e, e.code, e.error, e.message, e.transaction);
    receipt.onRequestDidFinish = () => console.log('finish');
    receipt.start();
    receipt.cancel();

    console.log(atv.SKReceiptPropertyIsExpired, atv.SKReceiptPropertyIsRevoked, atv.SKReceiptPropertyIsVolumePurchase);
}

function slideShow() {
    atv.slideShow.onExit = p => console.log(p);
    const photos: MediaBrowserPhoto[] = [
        {
            id: 'test',
            type: 'photo',
            assets: [{ width: 10, height: 10, src: 'https://avatars.githubusercontent.com/u/3637556?s=200&v=4' }],
        },
    ];
    atv.slideShow.showSettings(photos);
    atv.slideShow.run(0, photos);
}

function textEntry() {
    const textEntry = new atv.TextEntry();
    textEntry.type = 'emailAddress';
    textEntry.title = 'Title';
    textEntry.instructions = 'Instructions';
    textEntry.label = 'Label';
    textEntry.footnote = 'Footnote';
    textEntry.defaultValue = 'Default Value';
    textEntry.image = 'https://avatars.githubusercontent.com/u/3637556?s=200&v=4';
    textEntry.defaultToAppleID = true;
    textEntry.onSubmit = v => console.log(v);
    textEntry.onCancel = () => console.log('cancel');
    textEntry.show();
}

function textView() {
    const imageView = new atv.TextView();
    imageView.addAnimation(
        {
            type: 'BasicAnimation',
            animationDidStart: () => console.log('start'),
            animationDidStop: () => console.log('end'),
            additive: false,
            autoreverses: true,
            beginTime: 0,
            byValue: 1,
            cumulative: false,
            duration: 10,
            fadeInDuration: 2,
            fadeOutDuration: 2,
            fillMode: 'both',
            fromValue: 0,
            keyPath: 'opacity',
            removedOnCompletion: true,
            repeatCount: 1,
            repeatDuration: 1,
            speed: 1,
            timeOffset: 10,
            toValue: 1,
        },
        'test',
    );
    imageView.backgroundColor = { red: 0, green: 0, blue: 1, alpha: 0.5 };
    imageView.frame = { width: 10, height: 10, x: 1, y: 1 };
    imageView.attributedString = {
        string: 'Test',
        attributes: {
            color: { red: 0, green: 1, blue: 1, alpha: 0.5 },
            pointSize: 20,
            breakMode: 'word-wrap',
            weight: 'light',
            alignment: 'center',
        },
    };
    imageView.removeAnimation('test');
    imageView.removeAllAnimations();
    imageView.subviews = [new atv.ImageView()];
}
