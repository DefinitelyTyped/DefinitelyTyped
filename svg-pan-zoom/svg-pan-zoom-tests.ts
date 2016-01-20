/// <reference path="svg-pan-zoom.d.ts" />

var svgPanZoomOptions : SvgPanZoom.OptionConfig = {
    panEnabled: true // enable or disable panning (default enabled)
    , controlIconsEnabled: false // insert icons to give user an option in addition to mouse events to control pan/zoom (default disabled)
    , zoomEnabled: true // enable or disable zooming (default enabled)
    , dblClickZoomEnabled: true // enable or disable zooming by double clicking (default enabled)
    , zoomScaleSensitivity: 0.2 // Zoom sensitivity
    , minZoom: 0.5 // Minimum Zoom level
    , maxZoom: 10 // Maximum Zoom level
    , fit: true // enable or disable viewport fit in SVG (default true)
    , center: true // enable or disable viewport centering in SVG (default true)
    , beforeZoom: null
    , onZoom: function(){}
    , beforePan: null
    , onPan: function(){}
    , refreshRate: 60 // in hz
};

var panZoomTiger: SvgPanZoom.ISvgPanZoom = svgPanZoom('#demo-tiger');

var svgElement = document.querySelector('#demo-tiger');
panZoomTiger = svgPanZoom(svgElement);

panZoomTiger = svgPanZoom('#demo-tiger', {
    panEnabled: true
    , controlIconsEnabled: false
    , zoomEnabled: true
    , dblClickZoomEnabled: true
    , zoomScaleSensitivity: 0.2
    , minZoom: 0.5
    , maxZoom: 10
    , fit: true
    , center: true
    , refreshRate: 'auto'
    , beforeZoom: function(){}
    , onZoom: function(){}
    , beforePan: function(){}
    , onPan: function(){}
});

// Pan to rendered point x = 50, y = 50
panZoomTiger.pan({x: 50, y: 50});

// Pan by x = 50, y = 50 of rendered pixels
panZoomTiger.panBy({x: 50, y: 50});

// Set zoom level to 2
panZoomTiger.zoom(2);

// Zoom by 130%
panZoomTiger.zoomBy(1.3);

// Set zoom level to 2 at point
panZoomTiger.zoomAtPoint(2, {x: 50, y: 50});

// Zoom by 130% at point
panZoomTiger.zoomAtPointBy(1.3, {x: 50, y: 50});

panZoomTiger.zoomIn();
panZoomTiger.zoomOut();
panZoomTiger.resetZoom();

panZoomTiger.enablePan();
panZoomTiger.disablePan();

panZoomTiger.enableZoom();
panZoomTiger.disableZoom();

panZoomTiger.fit();
panZoomTiger.center();

panZoomTiger.resize(); // update SVG cached size and controls positions
panZoomTiger.fit(true); // dropCache and fit
panZoomTiger.center(true); // dropCache and center

delete panZoomTiger;