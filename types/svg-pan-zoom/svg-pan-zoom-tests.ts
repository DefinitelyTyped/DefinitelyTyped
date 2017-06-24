var svgPanZoomOptions : SvgPanZoom.Options = {
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

var panZoomTiger: SvgPanZoom.Instance = svgPanZoom('#demo-tiger');

var svgElement = <SVGElement>document.querySelector('#demo-tiger');
panZoomTiger = svgPanZoom(svgElement);

panZoomTiger = svgPanZoom('#demo-tiger', {
    panEnabled: true
    , controlIconsEnabled: false
    , zoomEnabled: true
    , dblClickZoomEnabled: true
    , mouseWheelZoomEnabled: true
    , preventMouseEventsDefault: true
    , zoomScaleSensitivity: 0.2
    , minZoom: 0.5
    , maxZoom: 10
    , fit: true
    , contain: false
    , center: true
    , refreshRate: 'auto'
    , beforeZoom: function(oldScale, newScale){ return true; }
    , onZoom: function(newScale){}
    , beforePan: function(oldPan, newPan){ return {x: true, y: true}; }
    , customEventsHandler: null
    , eventsListenerElement: null
});

/**
 * PAN
 */
// Pan to rendered point x = 50, y = 50
panZoomTiger.pan({x: 50, y: 50});

// Pan by x = 50, y = 50 of rendered pixels
panZoomTiger.panBy({x: 50, y: 50});

panZoomTiger.getPan();

panZoomTiger.resetPan();

panZoomTiger.enablePan();
panZoomTiger.disablePan();

panZoomTiger.isPanEnabled();

/**
 * ZOOM
 */
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

panZoomTiger.getZoom();

panZoomTiger.resetZoom();

panZoomTiger.enableZoom();
panZoomTiger.disableZoom();

panZoomTiger.isZoomEnabled();

/**
 * controls
 */
panZoomTiger.enableControlIcons();
panZoomTiger.disableControlIcons();
panZoomTiger.isControlIconsEnabled();

panZoomTiger.enableDblClickZoom();
panZoomTiger.disableDblClickZoom();
panZoomTiger.isDblClickZoomEnabled();

panZoomTiger.enableMouseWheelZoom();
panZoomTiger.disableMouseWheelZoom();
panZoomTiger.isMouseWheelZoomEnabled();

panZoomTiger.center();
panZoomTiger.fit();
panZoomTiger.contain();

panZoomTiger.resize(); // update SVG cached size and controls positions
panZoomTiger.updateBBox();

panZoomTiger.fit().center(); // can chain method

panZoomTiger.destroy(); // destroy instance
