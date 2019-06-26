// Type definitions for jsdom-simulant 1.1
// Project: https://github.com/https://github.com/lukebayes/simulant/
// Definitions by: Dolan Murvihill <https://github.com/dmurvihill>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.4

export as namespace simulant;

export function fire(
    elementOrDocument: Element | Document,
    typeOrEvent: (keyof typeof EventType) | Event,
    params?: SimulantParams
): Event;

export enum EventType {
    abort = 'abort',
    error = 'error',
    resize = 'resize',
    scroll = 'scroll',
    select = 'select',
    unload = 'unload',
    afterprint = 'afterprint',
    beforeprint = 'beforeprint',
    cached = 'cached',
    canplay = 'canplay',
    canplaythrough = 'canplaythrough',
    change = 'change',
    chargingchange = 'chargingchange',
    chargingtimechange = 'chargingtimechange',
    checking = 'checking',
    close = 'close',
    dischargingtimechange = 'dischargingtimechange',
    DOMContentLoaded = 'DOMContentLoaded',
    downloading = 'downloading',
    durationchange = 'durationchange',
    emptied = 'emptied',
    ended = 'ended',
    fullscreenchange = 'fullscreenchange',
    fullscreenerror = 'fullscreenerror',
    input = 'input',
    invalid = 'invalid',
    levelchange = 'levelchange',
    loadeddata = 'loadeddata',
    loadedmetadata = 'loadedmetadata',
    noupdate = 'noupdate',
    obsolete = 'obsolete',
    offline = 'offline',
    online = 'online',
    open = 'open',
    orientationchange = 'orientationchange',
    pause = 'pause',
    pointerlockchange = 'pointerlockchange',
    pointerlockerror = 'pointerlockerror',
    play = 'play',
    playing = 'playing',
    ratechange = 'ratechange',
    readystatechange = 'readystatechange',
    reset = 'reset',
    seeked = 'seeked',
    seeking = 'seeking',
    stalled = 'stalled',
    submit = 'submit',
    success = 'success',
    suspend = 'suspend',
    timeupdate = 'timeupdate',
    updateready = 'updateready',
    visibilitychange = 'visibilitychange',
    volumechange = 'volumechange',
    waiting = 'waiting',
    animationend = 'animationend',
    animationiteration = 'animationiteration',
    animationstart = 'animationstart',
    audioprocess = 'audioprocess',
    beforeunload = 'beforeunload',
    beginEvent = 'beginEvent',
    endEvent = 'endEvent',
    repeatEvent = 'repeatEvent',
    blur = 'blur',
    focus = 'focus',
    focusin = 'focusin',
    focusout = 'focusout',
    click = 'click',
    contextmenu = 'contextmenu',
    dblclick = 'dblclick',
    mousedown = 'mousedown',
    mouseenter = 'mouseenter',
    mouseleave = 'mouseleave',
    mousemove = 'mousemove',
    mouseout = 'mouseout',
    mouseover = 'mouseover',
    mouseup = 'mouseup',
    show = 'show',
    compassneedscalibration = 'compassneedscalibration',
    userproximity = 'userproximity',
    complete = 'complete',
    compositionend = 'compositionend',
    compositionstart = 'compositionstart',
    compositionupdate = 'compositionupdate',
    copy = 'copy',
    cut = 'cut',
    paste = 'paste',
    devicelight = 'devicelight',
    devicemotion = 'devicemotion',
    deviceorientation = 'deviceorientation',
    deviceproximity = 'deviceproximity',
    drag = 'drag',
    dragend = 'dragend',
    dragenter = 'dragenter',
    dragleave = 'dragleave',
    dragover = 'dragover',
    dragstart = 'dragstart',
    drop = 'drop',
    gamepadconnected = 'gamepadconnected',
    gamepaddisconnected = 'gamepaddisconnected',
    hashchange = 'hashchange',
    keydown = 'keydown',
    keypress = 'keypress',
    keyup = 'keyup',
    loadend = 'loadend',
    loadstart = 'loadstart',
    progress = 'progress',
    timeout = 'timeout',
    message = 'message',
    pagehide = 'pagehide',
    pageshow = 'pageshow',
    popstate = 'popstate',
    storage = 'storage',
    SVGAbort = 'SVGAbort',
    SVGError = 'SVGError',
    SVGLoad = 'SVGLoad',
    SVGResize = 'SVGResize',
    SVGScroll = 'SVGScroll',
    SVGUnload = 'SVGUnload',
    SVGZoom = 'SVGZoom',
    touchcancel = 'touchcancel',
    touchend = 'touchend',
    touchenter = 'touchenter',
    touchleave = 'touchleave',
    touchmove = 'touchmove',
    touchstart = 'touchstart',
    transitionend = 'transitionend',
    wheel = 'wheel',
}

export interface SimulantParams {
    bubbles?: boolean;
    cancelable?: boolean;
    view?: Window;
    detail?: null;
    screenX?: number;
    screenY?: number;
    clientX?: number;
    clientY?: number;
    ctrlKey?: boolean;
    altKey?: boolean;
    shiftKey?: boolean;
    metaKey?: boolean;
    button?: number;
    relatedTarget?: null;
    locale?: string;
    oldURL?: string;
    newURL?: string;
    origin?: string;
    lastEventId?: string;
    source?: null;
    ports?: ReadonlyArray<MessagePort>;
    oldValue?: null;
    newValue?: null;
    url?: string;
    storageArea?: null;
    deltaX?: number;
    deltaY?: number;
    deltaZ?: number;
    deltaMode?: number;
}
