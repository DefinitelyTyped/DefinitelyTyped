import Drift = require('drift-zoom');
import { Options } from 'drift-zoom';

const options: Options = {
    namespace: null,
    showWhitespaceAtEdges: false,
    containInline: false,
    inlineOffsetX: 0,
    inlineOffsetY: 0,
    inlineContainer: document.body,
    sourceAttribute: 'data-zoom',
    zoomFactor: 3,
    paneContainer: document.body,
    inlinePane: 375,
    handleTouch: true,
    onShow: null,
    onHide: null,
    injectBaseStyles: true,
    hoverDelay: 0,
    touchDelay: 0,
    hoverBoundingBox: false,
    touchBoundingBox: false,
    boundingBoxContainer: document.body,
    passive: true,
};
// $ExpectType Drift
const drift = new Drift(document.querySelector('img')!, {
    paneContainer: document.querySelector('p')!,
});

drift.destroy();
drift.disable();
drift.enable();
drift.isShowing; // $ExpectType boolean
drift.setZoomImageURL('url');
drift.zoomFactor = 2;
