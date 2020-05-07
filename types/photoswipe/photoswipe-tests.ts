import PhotoSwipeUI_Default = require('photoswipe/dist/photoswipe-ui-default');
import PhotoSwipe = require('photoswipe');

function test_defaultUI() {
    var items: PhotoSwipeUI_Default.Item[] = [
        {
            src: "path/to/image.jpg",
            w: 100,
            h: 200,
        },
        {
            src: "path/to/image2.jpg",
            w: 1000,
            h: 2000,
        },
        {
            src: "path/to/image3.jpg",
            w: 1000,
            h: 2000,

            msrc: "path/to/image3-thumb.jpg"
        },
        {
            html: "<h1>Hello World</h1>",
        },
    ];

    var options: PhotoSwipe.Options = {
        index: 3,
        getThumbBoundsFn: function(index) {
            return {x: 100, y: 100, w: 100};
        },
        showAnimationDuration: 333,
        hideAnimationDuration: 333,
        showHideOpacity: false,
        bgOpacity: 1,
        spacing: 0.12,
        allowNoPanText: true,
        maxSpreadZoom: 2,
        getDoubleTapZoom: function(isMouseClick, item) {
            if (isMouseClick) {
                return 1;
            } else {
                return item.initialZoomLevel < 0.7 ? 1 : 1.5;
            }
        },
        loop: true,
        pinchToClose: true,
        closeOnScroll: true,
        closeOnVerticalDrag: true,
        mouseUsed: false,
        escKey: true,
        arrowKeys: true,
        history: true,
        galleryUID: 3,
        errorMsg: '<div class="pswp__error-msg"><a href="%url%" target="_blank">The image</a> could not be loaded.</div>',
        preload: [1, 1],
        mainClass: "",
        getNumItemsFn: () => { return 2; },
        focus: true,
        isClickableElement: function(el) {
            return el.tagName === 'A';
        },
        mainScrollEndFriction: 0.35,
        panEndFriction: 0.35,
        modal: true
    };

    var photoSwipe: PhotoSwipe<PhotoSwipeUI_Default.Options>;
    var uiOptions: PhotoSwipeUI_Default.Options = {
        barsSize: {top: 44, bottom: 'auto'},
        timeToIdle: 4000,
        timeToIdleOutside: 1000,
        loadingIndicatorDelay: 1000,
        addCaptionHTMLFn: function(item, captionEl, isFake) {
            if (!item.title) {
                (<HTMLElement> captionEl.children[0]).innerHTML = '';
                return false;
            }
            (<HTMLElement> captionEl.children[0]).innerHTML = item.title;
            return true;
        },
        closeEl: true,
        captionEl: true,
        fullscreenEl: true,
        zoomEl: true,
        shareEl: true,
        counterEl: true,
        arrowEl: true,
        preloaderEl: true,
        tapToClose: false,
        tapToToggleControls: true,
        clickToCloseNonZoomable: true,
        closeElClasses: ['item', 'caption', 'zoom-wrap', 'ui', 'top-bar'],
        indexIndicatorSep: ' / ',
        shareButtons: [
            {id: 'facebook', label: 'Share on Facebook', url: 'https://www.facebook.com/sharer/sharer.php?u='},
            {id: 'twitter', label: 'Tweet', url: 'https://twitter.com/intent/tweet?text=&url='},
            {id: 'pinterest', label: 'Pin it', url: 'http://www.pinterest.com/pin/create/button/?url=&media=&description='},
            {id: 'download', label: 'Download image', url: '', download: true}
        ],
        getImageURLForShare: function( shareButtonData ) {
            // `shareButtonData` - object from shareButtons array
            //
            // `pswp` is the gallery instance object,
            // you should define it by yourself
            //
            return photoSwipe.currItem.src || '';
        },
        getPageURLForShare: function( shareButtonData ) {
            return window.location.href;
        },
        getTextForShare: function( shareButtonData ) {
            return (<PhotoSwipeUI_Default.Item> photoSwipe.currItem).title || '';
        },
        parseShareButtonOut: function(shareButtonData, shareButtonOut) {
            return shareButtonOut;
        }
    };

    var pswpElement = document.getElementById("gallery");
    photoSwipe = new PhotoSwipe<PhotoSwipeUI_Default.Options>(pswpElement, PhotoSwipeUI_Default, items, uiOptions);

}

function test_photoSwipeMethods() {
    var photoSwipe: PhotoSwipe<PhotoSwipeUI_Default.Options>;

    photoSwipe.init();

    alert(photoSwipe.currItem.src);
    alert(photoSwipe.viewportSize.x);
    photoSwipe.ui.init();
    photoSwipe.bg.style.borderStyle = "1px solid red";
    photoSwipe.container.style.borderStyle = "1px solid red";
    photoSwipe.options.timeToIdle = 2000;
    alert(photoSwipe.getCurrentIndex() === 3);
    alert(photoSwipe.getZoomLevel() === 1);
    alert(photoSwipe.isDragging());

    photoSwipe.goTo(9);
    photoSwipe.next();
    photoSwipe.prev();

    photoSwipe.updateSize(true);

    photoSwipe.close();
    photoSwipe.zoomTo(2,
                      { x: 250, y: 250 },
                      2000,
                      (x) => { return x*x*(3-2*x); },
                      (zoomValue) => { console.log("zoom value is now" + zoomValue); });
    photoSwipe.applyZoomPan(1, 0, 0);

    photoSwipe.items[photoSwipe.getCurrentIndex()].src = "new/path/to/image.jpg";
    photoSwipe.invalidateCurrItems();
}

function test_photoSwipeEvents() {
    var photoSwipe: PhotoSwipe<PhotoSwipeUI_Default.Options>;

    photoSwipe.listen('beforeChange', () => {});
    photoSwipe.listen('afterChange', () => {});
    photoSwipe.listen('beforeChange', () => {});
    photoSwipe.listen('imageLoadComplete', (idx: number, item: PhotoSwipeUI_Default.Item) => {
        item.w *= 2;
    });
    photoSwipe.listen('resize', () => {});
    photoSwipe.listen('gettingData', (idx: number, item: PhotoSwipeUI_Default.Item) => {
        item.title = "abc";
    });
    photoSwipe.listen('mouseUsed', () => {});
    photoSwipe.listen('initialZoomIn', () => {});
    photoSwipe.listen('initialZoomInEnd', () => {});
    photoSwipe.listen('initialZoomOut', () => {});
    photoSwipe.listen('initialZoomOutEnd', () => {});
    photoSwipe.listen('parseVerticalMargin', (item: PhotoSwipeUI_Default.Item) => {
        item.vGap.top = 20;
        item.vGap.bottom = 40;
    });
    photoSwipe.listen('close', () => {});
    photoSwipe.listen('unbindEvents', () => {});
    photoSwipe.listen('destroy', () => {});
    photoSwipe.listen('preventDragEvent', (e: MouseEvent, isDown: boolean, preventObj: {prevent: boolean}) => {
        if (e.x > 50 && isDown) {
            preventObj.prevent = true;
        }
    });

    photoSwipe.listen('foo', (a, b, c) => {
        alert(a + b + c);
    });
    photoSwipe.shout('foo', 1, 2, 3);
}

function test_customUI() {
    var pswpElement = document.getElementById("gallery2");
    var myPhotoSwipe = new PhotoSwipe<MyUIOptions>(pswpElement, MyUI, [], {
        bgOpacity: 0,
        index: 3,
        foo: 123,
        bar: "abc"
    });
}

interface MyUIOptions extends PhotoSwipe.Options {
    foo: number;
    bar: string;
}

class MyUI implements PhotoSwipe.UI<MyUIOptions> {
    constructor(pswp: PhotoSwipe<MyUIOptions>, framework: PhotoSwipe.UIFramework) {
        // dummy
    }

    init() {
        // dummy
    }
}
