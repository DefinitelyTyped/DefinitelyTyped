

function fieldOfViewToProjectionMatrix(fov: VRFieldOfView, zNear: number, zFar: number) {
    var upTan = Math.tan(fov.upDegrees * Math.PI/180.0);
    var downTan = Math.tan(fov.downDegrees * Math.PI/180.0);
    var leftTan = Math.tan(fov.leftDegrees * Math.PI/180.0);
    var rightTan = Math.tan(fov.rightDegrees * Math.PI/180.0);
    var xScale = 2.0 / (leftTan + rightTan);
    var yScale = 2.0 / (upTan + downTan);

    var out = new Float32Array(16);
    out[0] = xScale;
    out[1] = 0.0;
    out[2] = 0.0;
    out[3] = 0.0;
    out[4] = 0.0;
    out[5] = yScale;
    out[6] = 0.0;
    out[7] = 0.0;
    out[8] = -((leftTan - rightTan) * xScale * 0.5);
    out[9] = ((upTan - downTan) * yScale * 0.5);
    out[10] = -(zNear + zFar) / (zFar - zNear);
    out[11] = -1.0;
    out[12] = 0.0;
    out[13] = 0.0;
    out[14] = -(2.0 * zFar * zNear) / (zFar - zNear);
    out[15] = 0.0;

    return out;
}

var hmd: VRDisplay;
var leftEyeParams = hmd.getEyeParameters("left");
var rightEyeParams = hmd.getEyeParameters("right");
var leftEyeRect = { width: leftEyeParams.renderWidth, height: leftEyeParams.renderHeight };
var rightEyeRect = { width: rightEyeParams.renderWidth, height: rightEyeParams.renderHeight };

var canvas: HTMLCanvasElement;
canvas.width = rightEyeParams.renderWidth * 2;
canvas.height = Math.max(leftEyeRect.height, rightEyeRect.height);

var gHMD: VRDisplay;

navigator.getVRDisplays().then(function(devices) {
    for (var i = 0; i < devices.length; ++i) {
        if (devices[i] instanceof VRDisplay) {
            gHMD = devices[i];
            break;
        }
    }
});
