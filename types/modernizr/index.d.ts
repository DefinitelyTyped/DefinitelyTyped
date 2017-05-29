// Type definitions for Modernizr 3.3
// Project: http://modernizr.com/
// Definitions by: Boris Yankov <https://github.com/borisyankov/>, Theodore Brown <https://github.com/theodorejb/>, Leon Yu <https://github.com/leonyu/>, Luca Trazzi <https://github.com/lucax88x/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

interface AudioBoolean {
    ogg: string;
    mp3: string;
    wav: string;
    m4a: string;
}

interface VideoBoolean {
    ogg: string;
    h264: string;
    webm: string;
}

interface InputBoolean {
    autocomplete: boolean;
    autofocus: boolean;
    list: boolean;
    placeholder: boolean;
    max: boolean;
    min: boolean;
    multiple: boolean;
    pattern: boolean;
    required: boolean;
    step: boolean;
}

interface InputTypesBoolean {
    color: boolean;
    date: boolean;
    datetime: boolean;
    "datetime-local": boolean;
    email: boolean;
    month: boolean;
    number: boolean;
    range: boolean;
    search: boolean;
    tel: boolean;
    time: boolean;
    url: boolean;
    week: boolean;
}

interface CssColumnsBoolean extends Boolean {
    breakafter: boolean;
    breakbefore: boolean;
    breakinside: boolean;
    fill: boolean;
    gap: boolean;
    rule: boolean;
    rulecolor: boolean;
    rulestyle: boolean;
    rulewidth: boolean;
    span: boolean;
    width: boolean;
}

interface FlashBoolean extends Boolean {
    blocked: boolean;
}

interface IndexeddbBoolean extends Boolean {
    deletedatabase: boolean;
}

interface WebglextensionsBoolean extends Boolean {
    ANGLE_instanced_arrays: boolean;
    EXT_blend_minmax: boolean;
    EXT_disjoint_timer_query: boolean;
    EXT_frag_depth: boolean;
    EXT_sRGB: boolean;
    EXT_shader_texture_lod: boolean;
    EXT_texture_filter_anisotropic: boolean;
    OES_element_index_uint: boolean;
    OES_standard_derivatives: boolean;
    OES_texture_float: boolean;
    OES_texture_float_linear: boolean;
    OES_texture_half_float: boolean;
    OES_texture_half_float_linear: boolean;
    OES_vertex_array_object: boolean;
    WEBGL_compressed_texture_etc1: boolean;
    WEBGL_compressed_texture_s3tc: boolean;
    WEBGL_debug_renderer_info: boolean;
    WEBGL_debug_shaders: boolean;
    WEBGL_depth_texture: boolean;
    WEBGL_draw_buffers: boolean;
    WEBGL_lose_context: boolean;
    WEBKIT_EXT_texture_filter_anisotropic: boolean;
    WEBKIT_WEBGL_compressed_texture_s3tc: boolean;
    WEBKIT_WEBGL_depth_texture: boolean;
    WEBKIT_WEBGL_lose_context: boolean;
}

interface WebpBoolean extends Boolean {
    alpha: boolean;
    animation: boolean;
    lossless: boolean;
}

interface DatauriBoolean extends Boolean {
    over32kb: boolean;
}

interface FeatureDetects {
    // Documented

    ambientlight: boolean;
    applicationcache: boolean;
    audio: AudioBoolean;
    batteryapi: boolean;
    blobconstructor: boolean;
    canvas: boolean;
    canvastext: boolean;
    contenteditable: boolean;
    contextmenu: boolean;
    cookies: boolean;
    cors: boolean;
    cryptography: boolean;
    customprotocolhandler: boolean;
    customevent: boolean;
    dart: boolean;
    dataview: boolean;
    emoji: boolean;
    eventlistener: boolean;
    exiforientation: boolean;
    flash: false | FlashBoolean;
    forcetouch: boolean;
    fullscreen: boolean;
    gamepads: boolean;
    geolocation: boolean;
    hashchange: boolean;
    hiddenscroll: boolean;
    history: boolean;
    htmlimports: boolean;
    ie8compat: boolean;
    indexeddb: false | IndexeddbBoolean;
    indexeddbblob: boolean;
    input: InputBoolean;
    search: boolean;
    inputtypes: InputTypesBoolean;
    intl: boolean;
    json: boolean;
    ligatures: boolean;
    olreversed: boolean;
    mathml: boolean;
    notification: boolean;
    pagevisibility: boolean;
    performance: boolean;
    pointerevents: boolean;
    pointerlock: boolean;
    postmessage: boolean;
    proximity: boolean;
    queryselector: boolean;
    quotamanagement: boolean;
    requestanimationframe: boolean;
    serviceworker: boolean;
    svg: boolean;
    templatestrings: boolean;
    touchevents: boolean;
    typedarrays: boolean;
    unicoderange: boolean;
    unicode: boolean;
    userdata: boolean;
    vibrate: boolean;
    video: VideoBoolean;
    vml: boolean;
    webintents: boolean;
    animation: boolean;
    webgl: boolean;
    websockets: boolean;
    xdomainrequest: boolean;
    adownload: boolean;
    audioloop: boolean;
    audiopreload: boolean;
    webaudio: boolean;
    lowbattery: boolean;
    canvasblending: boolean;
    todataurljpeg: boolean;
    todataurlpng: boolean;
    todataurlwebp: boolean;
    canvaswinding: boolean;
    getrandomvalues: boolean;
    cssall: boolean;
    cssanimations: boolean;
    appearance: boolean;
    backdropfilter: boolean;
    backgroundblendmode: boolean;
    backgroundcliptext: boolean;
    bgpositionshorthand: boolean;
    bgpositionxy: boolean;
    bgrepeatspace: boolean;
    bgrepeatround: boolean;
    backgroundsize: boolean;
    bgsizecover: boolean;
    borderimage: boolean;
    borderradius: boolean;
    boxshadow: boolean;
    boxsizing: boolean;
    csscalc: boolean;
    checked: boolean;
    csschunit: boolean;
    csscolumns: false | CssColumnsBoolean;
    cubicbezierrange: boolean;
    "display-runin": boolean;
    displaytable: boolean;
    ellipsis: boolean;
    cssescape: boolean;
    cssexunit: boolean;
    cssfilters: boolean;
    flexbox: boolean;
    flexboxlegacy: boolean;
    flexboxtweener: boolean;
    flexwrap: boolean;
    fontface: boolean;
    generatedcontent: boolean;
    cssgradients: boolean;
    csshairline: boolean;
    hsla: boolean;
    csshyphens: boolean;
    softhyphens: boolean;
    softhyphensfind: boolean;
    cssinvalid: boolean;
    lastchild: boolean;
    cssmask: boolean;
    mediaqueries: boolean;
    multiplebgs: boolean;
    nthchild: boolean;
    objectfit: boolean;
    opacity: boolean;
    overflowscrolling: boolean;
    csspointerevents: boolean;
    csspositionsticky: boolean;
    csspseudoanimations: boolean;
    csspseudotransitions: boolean;
    cssreflections: boolean;
    regions: boolean;
    cssremunit: boolean;
    cssresize: boolean;
    rgba: boolean;
    cssscrollbar: boolean;
    scrollsnappoints: boolean;
    shapes: boolean;
    siblinggeneral: boolean;
    subpixelfont: boolean;
    supports: boolean;
    target: boolean;
    textalignlast: boolean;
    textshadow: boolean;
    csstransforms: boolean;
    csstransforms3d: boolean;
    preserve3d: boolean;
    csstransitions: boolean;
    userselect: boolean;
    cssvalid: boolean;
    cssvhunit: boolean;
    cssvmaxunit: boolean;
    cssvminunit: boolean;
    cssvwunit: boolean;
    willchange: boolean;
    wrapflow: boolean;
    classlist: boolean;
    createelementattrs: boolean;
    "createelement-attrs": boolean;
    dataset: boolean;
    documentfragment: boolean;
    hidden: boolean;
    microdata: boolean;
    mutationobserver: boolean;
    bdi: boolean;
    datalistelem: boolean;
    details: boolean;
    outputelem: boolean;
    picture: boolean;
    progressbar: boolean;
    meter: boolean;
    ruby: boolean;
    template: boolean;
    time: boolean;
    texttrackapi: boolean;
    track: boolean;
    unknownelements: boolean;
    es5array: boolean;
    es5date: boolean;
    es5function: boolean;
    es5object: boolean;
    es5: boolean;
    strictmode: boolean;
    es5string: boolean;
    es5syntax: boolean;
    es5undefined: boolean;
    es6array: boolean;
    es6collections: boolean;
    contains: boolean;
    generators: boolean;
    es6math: boolean;
    es6number: boolean;
    es6object: boolean;
    promises: boolean;
    es6string: boolean;
    devicemotion: boolean;
    deviceorientation: boolean;
    oninput: boolean;
    filereader: boolean;
    filesystem: boolean;
    capture: boolean;
    fileinput: boolean;
    directory: boolean;
    formattribute: boolean;
    localizednumber: boolean;
    placeholder: boolean;
    requestautocomplete: boolean;
    formvalidation: boolean;
    sandbox: boolean;
    seamless: boolean;
    srcdoc: boolean;
    apng: boolean;
    imgcrossorigin: boolean;
    jpeg2000: boolean;
    jpegxr: boolean;
    sizes: boolean;
    srcset: boolean;
    webpalpha: boolean;
    webpanimation: boolean;
    webplossless: boolean;
    webp: false | WebpBoolean;
    inputformaction: boolean;
    inputformenctype: boolean;
    inputformmethod: boolean;
    inputformtarget: boolean;
    beacon: boolean;
    lowbandwidth: boolean;
    eventsource: boolean;
    fetch: boolean;
    xhrresponsetypearraybuffer: boolean;
    xhrresponsetypeblob: boolean;
    xhrresponsetypedocument: boolean;
    xhrresponsetypejson: boolean;
    xhrresponsetypetext: boolean;
    xhrresponsetype: boolean;
    xhr2: boolean;
    scriptasync: boolean;
    scriptdefer: boolean;
    speechrecognition: boolean;
    speechsynthesis: boolean;
    localstorage: boolean;
    sessionstorage: boolean;
    websqldatabase: boolean;
    stylescoped: boolean;
    svgasimg: boolean;
    svgclippaths: boolean;
    svgfilters: boolean;
    svgforeignobject: boolean;
    inlinesvg: boolean;
    smil: boolean;
    textareamaxlength: boolean;
    bloburls: boolean;
    datauri: false | DatauriBoolean;
    urlparser: boolean;
    videoautoplay: boolean;
    videoloop: boolean;
    videopreload: boolean;
    webglextensions: false | WebglextensionsBoolean;
    datachannel: boolean;
    getusermedia: boolean;
    peerconnection: boolean;
    websocketsbinary: boolean;
    atobbtoa: boolean;
    framed: boolean;
    matchmedia: boolean;
    blobworkers: boolean;
    dataworkers: boolean;
    sharedworkers: boolean;
    transferables: boolean;
    webworkers: boolean;

    // Undocumented - usually aliases or new features

    "atob-btoa": boolean;
    "battery-api": boolean;
    "blob-constructor": boolean;
    "display-table": boolean;
    "input-formaction": boolean;
    "input-formenctype": boolean;
    "input-formtarget": boolean;
    "object-fit": boolean;
    crypto: boolean;
    displayrunin: boolean;
    fileinputdirectory: boolean;
    hairline: boolean;
    inputsearchevent: boolean;
    raf: boolean;
    webanimations: boolean;
}

interface Dictionary<T> {
    [key: string]: T;
}

interface ModernizrAPI {
    on(feature: string, cb: (result: boolean) => any): void;

    addTest(feature: string, test: (() => boolean) | boolean): ModernizrStatic;
    addTest(feature: Dictionary<any>): ModernizrStatic;

    atRule(prop: string): boolean;

    _domPrefixes: string[];

    hasEvent(eventName: string, element?: EventTarget): boolean;

    mq(mq: string): boolean;

    prefixed(prop: string): string;
    prefixed(prop: string, obj: EventTarget, element?: boolean): any;

    prefixedCSS(prop: string): string;

    prefixedCSSValue(prop: string, value: string): boolean;

    _prefixes: string[];

    testAllProps(prop: string, value?: string, skipValueTest?: boolean): boolean;

    testProp(prop: string, value?: string, useValue?: boolean): boolean;

    testStyles(rule: string, callback: (elem: HTMLDivElement, rule: string) => void, nodes?: number, testnames?: string[]): boolean;
}

interface ModernizrStatic extends ModernizrAPI, FeatureDetects { }

declare var Modernizr: ModernizrStatic;
declare module "Modernizr" {
    export = Modernizr;
}
