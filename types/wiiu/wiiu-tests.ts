

var state = window.wiiu.gamepad.update();
if( !state.isEnabled || !state.isDataValid ){
    console.log('gyro X:' + state.gyroX.toString() + ' Y:' + state.gyroY.toString() + ' Z:' + state.gyroZ.toString());
    console.log('angle X:' + state.angleX.toString() + ' Y:' + state.angleY.toString() + ' Z:' + state.angleZ.toString());
    console.log('dirX X:' + state.dirXx.toString() + ' Y:' + state.dirXy.toString() + ' Z:' + state.dirXz.toString());
    console.log('dirY X:' + state.dirYx.toString() + ' Y:' + state.dirYy.toString() + ' Z:' + state.dirYz.toString());
    console.log('dirZ X:' + state.dirZx.toString() + ' Y:' + state.dirZy.toString() + ' Z:' + state.dirZz.toString());
    console.log('acc X:' + state.accX.toString() + ' Y:' + state.accY.toString() + ' Z:' + state.accZ.toString());
    console.log('LStick axis X:' + state.lStickX.toString() + ' Y:' + state.lStickY.toString());
    console.log('RStick axis X:' + state.rStickX.toString() + ' Y:' + state.rStickY.toString());

    if(state.hold & window.wiiu.Button.A){
        console.log('pushing A button');
    }

    if( state.tpTouch && state.tpValidity == window.wiiu.TPValidity.VALID ){
        console.log("touch X:" + state.contentX.toString() + " Y:" + state.contentY.toString());
    }
}

document.getElementById('video').addEventListener('wiiu_videoplayer_end', (e) => {
    console.log(e);
    console.log('VideoPlayer end');
});

if(window.wiiu.videoplayer.viewMode == 0){
    window.wiiu.videoplayer.viewMode = 1;
}
window.wiiu.videoplayer.end();

window.addEventListener('wiiu_imageview_start', (e) => {
    console.log(e);
    console.log('ImageViewer start');
});
window.addEventListener('wiiu_imageview_end', (e) => {
    console.log(e);
    console.log('ImageViewer end');
});
window.addEventListener('wiiu_imageview_change_viewmode', (e) => {
    console.log(e);
    console.log('ImageViewer change viewmode');
    if(window.wiiu.imageview.viewMode == 1){
        window.wiiu.imageview.viewMode = 0;
    }
});
window.addEventListener('wiiu_imageview_change_content', (e) => {
    console.log(e);
    console.log('ImageViewer change content');
});
window.addEventListener('wiiu_imageview_error', (e) => {
    console.log(e);
    console.log('ImageViewer error');
    console.log(window.wiiu.imageview.getErrorCode());
});
