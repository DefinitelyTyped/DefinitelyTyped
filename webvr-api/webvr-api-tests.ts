/// <reference path="./webvr-api.d.ts" />

function fieldOfViewToProjectionMatrix(fov: WebVRApi.VRFieldOfView, zNear: number, zFar: number) {
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

var hmd: HMDVRDevice;
var leftEyeParams = hmd.getEyeParameters("left");
var rightEyeParams = hmd.getEyeParameters("right");
var leftEyeRect = leftEyeParams.renderRect;
var rightEyeRect = rightEyeParams.renderRect;

var canvas: HTMLCanvasElement;
canvas.width = rightEyeRect.x + rightEyeRect.width;
canvas.height = Math.max(leftEyeRect.y + leftEyeRect.height, rightEyeRect.y + rightEyeRect.height);

var gHMD: WebVRApi.VRDevice;
var gPositionSensor: WebVRApi.VRDevice;

navigator.getVRDevices().then(function(devices) {
    for (var i = 0; i < devices.length; ++i) {
        if (devices[i] instanceof HMDVRDevice) {
            gHMD = devices[i];
            break;
        }
    }

    if (gHMD) {
        for (var i = 0; i < devices.length; ++i) {
            if (devices[i] instanceof PositionSensorVRDevice &&
                devices[i].hardwareUnitId == gHMD.hardwareUnitId) {
                gPositionSensor = devices[i];
                break;
            }
        }
    }
});
