declare const map: AMap.Map;

// $ExpectType ControlBar
new AMap.ControlBar();
// $ExpectType ControlBar
const controlBar = new AMap.ControlBar({
    position: {
        left: 'left',
        right: 'right',
        top: 'top',
        bottom: 'bottom'
    },
    showZoomBar: true,
    showControlButton: true
});

// $ExpectType void
controlBar.show();

// $ExpectType void
controlBar.hide();

map.addControl(controlBar);
