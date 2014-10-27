///<reference path='iscroll-zoom.d.ts' />

var iscroll = new IScroll('#wrapper', { zoomMin: 1, startZoom: 1, wheelAction: 'wheel' });

iscroll.zoom(2, 10, 20, 30);
