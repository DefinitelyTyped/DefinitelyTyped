declare const $env: {
    app: 1;
    today: 2;
    action: 4;
    safari: 8;
    notification: 16;
    keyboard: 32;
    siri: 64;
    widget: 128;
    all: 255;
};

declare const $align: {
    left: 0;
    center: 1;
    right: 2;
    justified: 3;
    natural: 4;
};

declare const $contentMode: {
    scaleToFill: 0;
    scaleAspectFit: 1;
    scaleAspectFill: 2;
    redraw: 3;
    center: 4;
    top: 5;
    bottom: 6;
    left: 7;
    right: 8;
};

declare const $btnType: {
    custom: 0;
    system: 1;
    disclosure: 2;
    infoLight: 3;
    infoDark: 4;
    contactAdd: 5;
};

declare const $alertActionType: {
    default: 0;
    cancel: 1;
    destructive: 2;
};

declare const $zero: {
    point: { x: 0; y: 0 };
    size: { width: 0; height: 0 };
    rect: { x: 0; y: 0; width: 0; height: 0 };
    insets: { top: 0; left: 0; bottom: 0; right: 0 };
};

declare const $layout: {
    fill: (make: MASConstraintMaker, view: AllUIView) => void;
    fillSafeArea: (make: MASConstraintMaker, view: AllUIView) => void;
    center: (make: MASConstraintMaker, view: AllUIView) => void;
};

declare const $lineCap: {
    butt: 0;
    round: 1;
    square: 2;
};

declare const $lineJoin: {
    miter: 0;
    round: 1;
    bevel: 2;
};

declare const $mediaType: {
    image: "public.image";
    jpeg: "public.jpeg";
    jpeg2000: "public.jpeg-2000";
    tiff: "public.tiff";
    pict: "com.apple.pict";
    gif: "com.compuserve.gif";
    png: "public.png";
    icns: "com.apple.icns";
    bmp: "com.microsoft.bmp";
    ico: "com.microsoft.ico";
    raw: "public.camera-raw-image";
    live: "com.apple.live-photo";
    movie: "public.movie";
    video: "public.video";
    audio: "public.audio";
    mov: "com.apple.quicktime-movie";
    mpeg: "public.mpeg";
    mpeg2: "public.mpeg-2-video";
    mp3: "public.mp3";
    mp4: "public.mpeg-4";
    avi: "public.avi";
    wav: "com.microsoft.waveform-audio";
    midi: "public.midi-audio";
};

declare const $imgPicker: {
    quality: {
        high: 0;
        medium: 1;
        low: 2;
        r640x480: 3;
        r1280x720: 4;
        r960x540: 5;
    };
    captureMode: {
        photo: 0;
        video: 1;
    };
    device: {
        rear: 0;
        front: 1;
    };
    flashMode: {
        off: -1;
        auto: 0;
        on: 1;
    };
};

declare const $kbType: {
    default: 0;
    ascii: 1;
    nap: 2;
    url: 3;
    number: 4;
    phone: 5;
    namePhone: 6;
    email: 7;
    decimal: 8;
    twitter: 9;
    search: 10;
    asciiPhone: 11;
};

declare const $assetMedia: {
    type: {
        unknown: 0;
        image: 1;
        video: 2;
        audio: 3;
    };
    subType: {
        none: 0;
        panorama: 1;
        hdr: 2;
        screenshot: 4;
        live: 8;
        depthEffect: 16;
        streamed: 65536;
        highFrameRate: 131072;
        timelapse: 2621448;
    };
};

declare const $pageSize: {
    letter: 0;
    governmentLetter: 1;
    legal: 2;
    juniorLegal: 3;
    ledger: 4;
    tabloid: 5;
    A0: 6;
    A1: 7;
    A2: 8;
    A3: 9;
    A4: 10;
    A5: 11;
    A6: 12;
    A7: 13;
    A8: 14;
    A9: 15;
    A10: 16;
    B0: 17;
    B1: 18;
    B2: 19;
    B3: 20;
    B4: 21;
    B5: 22;
    B6: 23;
    B7: 24;
    B8: 25;
    B9: 26;
    B10: 27;
    C0: 28;
    C1: 29;
    C2: 30;
    C3: 31;
    C4: 32;
    C5: 33;
    C6: 34;
    C7: 35;
    C8: 36;
    C9: 37;
    C10: 38;
    custom: 52;
};

declare const $UIEvent: {
    touchDown: 1;
    touchDownRepeat: 2;
    touchDragInside: 4;
    touchDragOutside: 8;
    touchDragEnter: 16;
    touchDragExit: 32;
    touchUpInside: 64;
    touchUpOutside: 128;
    touchCancel: 256;
    valueChanged: 22;
    primaryActionTriggered: 23;
    editingDidBegin: 26;
    editingChanged: 27;
    editingDidEnd: 28;
    editingDidEndOnExit: 29;
    allTouchEvents: 0x00000fff;
    allEditingEvents: 0x000f0000;
    applicationReserved: 0x0f000000;
    systemReserved: 0xf0000000;
    allEvents: 0xffffffff;
};

declare const $stackViewAxis: {
    horizontal: 0;
    vertical: 1;
};

declare const $stackViewDistribution: {
    fill: 0;
    fillEqually: 1;
    fillProportionally: 2;
    equalSpacing: 3;
    equalCentering: 4;
};

declare const $stackViewAlignment: {
    fill: 0;
    leading: 1;
    top: 1;
    firstBaseline: 2;
    center: 3;
    trailing: 4;
    bottom: 4;
    lastBaseline: 5;
};

declare const $stackViewSpacing: {
    useDefault: number;
    useSystem: number;
};

declare const $popoverDirection: {
    up: 1;
    down: 2;
    left: 4;
    right: 8;
    any: 15;
};

declare const $scrollDirection: {
    vertical: 0;
    horizontal: 1;
};

declare const $blurStyle: {
    // Additional Styles
    extraLight: 0;
    light: 1;
    dark: 2;
    extraDark: 3;
    regular: 4;
    prominent: 5;
    // Adaptable Styles (iOS 13)
    ultraThinMaterial: 6;
    thinMaterial: 7;
    material: 8;
    thickMaterial: 9;
    chromeMaterial: 10;
    // Light Styles (iOS 13)
    ultraThinMaterialLight: 11;
    thinMaterialLight: 12;
    materialLight: 13;
    thickMaterialLight: 14;
    chromeMaterialLight: 15;
    // Dark Styles (iOS 13)
    ultraThinMaterialDark: 16;
    thinMaterialDark: 17;
    materialDark: 18;
    thickMaterialDark: 19;
    chromeMaterialDark: 20;
};

declare const $widgetFamily: {
    small: 0;
    medium: 1;
    large: 2;
    xLarge: 3; // iPadOS 15

    // iOS 16 lock screen sizes
    // BUG: Up to version 2.32.0, $widget.family actually returns 6, 7, and 8
    // for the circular, rectangular, and inline variants, respectively.
    accessoryCircular: 5;
    accessoryRectangular: 6;
    accessoryInline: 7;
};

declare const NSDictionary: any;
declare const NSMutableDictionary: any;
declare const NSArray: any;
declare const NSMutableArray: any;
declare const NSSet: any;
declare const NSMutableSet: any;
declare const NSString: any;
declare const NSMutableString: any;
declare const NSMutableData: any;
declare const NSNumber: any;
declare const NSURL: any;
declare const NSEnumerator: any;
