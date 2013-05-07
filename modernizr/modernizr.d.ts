// Type definitions for Modernizr 2.6.2
// Project: http://modernizr.com/
// Definitions by: Boris Yankov <https://github.com/borisyankov/>
// Definitions: https://github.com/borisyankov/DefinitelyTyped


interface AudioBool {
    ogg: bool;
    mp3: bool;
    wav: bool;
    m4a: bool;
}

interface VideoBool {
    ogg: bool;
    h264: bool;
    webm: bool;
}

interface InputBool {
    autocomplete: bool;
    autofocus: bool;
    list: bool;
    placeholder: bool;
    max: bool;
    min: bool;
    multiple: bool;
    pattern: bool;
    required: bool;
    step: bool;
}

interface InputTypesBool {
    search: bool;
    tel: bool;
    url: bool;
    email: bool;
    datetime: bool;
    date: bool;
    month: bool;
    week: bool;
    time: bool;
    datetimelocal: bool;
    number: bool;
    range: bool;
    color: bool;
}

interface ModernizrStatic {
    fontface: bool;
    backgroundsize: bool;
    borderimage: bool;
    borderradius: bool;
    boxshadow: bool;
    flexbox: bool;
    hsla: bool;
    multiplebgs: bool;
    opacity: bool;
    rgba: bool;
    textshadow: bool;
    cssanimations: bool;
    csscolumns: bool;
    generatedcontent: bool;
    cssgradients: bool;
    cssreflections: bool;
    csstransforms: bool;
    csstransforms3d: bool;
    csstransitions: bool;
    applicationcache: bool;
    canvas: bool;
    canvastext: bool;
    draganddrop: bool;
    hashchange: bool;
    history: bool;
    audio: AudioBool;
    video: VideoBool;
    indexeddb: bool;
    input: InputBool;
    inputtypes: InputTypesBool;
    localstorage: bool;
    postmessage: bool;
    sessionstorage: bool;
    websockets: bool;
    websqldatabase: bool;
    webworkers: bool;
    geolocation: bool;
    inlinesvg: bool;
    smil: bool;
    svg: bool;
    svgclippaths: bool;
    touch: bool;
    webgl: bool;

    load(resources: Array);
    load(resourceObject: any);
    load(resourceString: string);

    prefixed(): bool;
    prefixed(property: string): bool;
    prefixed(property: string, obj: any, element?: any): bool;

    mq(mediaQuery: string): bool;

    addTest(feature: string, test: () => any);
    addTest(feature: string, test: bool);
    addTest(feature: any);

    testStyles(rule: string, callback: (element, rule) => bool, nodes?: number, testnames?: string[]): bool;
    testProp(property: string): bool;
    testAllProps(property: string, prefix?: string): bool;
    testAllProps(property: string, obj: any, element: any): bool;

    hasEvent(eventName: string, element?: any): bool;
}

declare var Modernizr: ModernizrStatic;
