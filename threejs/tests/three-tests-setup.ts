/////////////////////////////////////////////////////////////
// https://github.com/mrdoob/three.js/tree/master/examples
//////////////////////////////////////////////////////////////

/// <reference path="../../stats/stats.d.ts" />
/// <reference path="../../dat-gui/dat-gui.d.ts" />
/// <reference path="../detector.d.ts" />
/// <reference path="../three-canvasrenderer.d.ts" />
/// <reference path="../three-css3drenderer.d.ts" />
/// <reference path="../three-projector.d.ts" />
/// <reference path="../three-orbitcontrols.d.ts" />
/// <reference path="../three-trackballcontrols.d.ts" />
/// <reference path="../three-effectcomposer.d.ts" />
/// <reference path="../three-renderpass.d.ts" />
/// <reference path="../three-shaderpass.d.ts" />
/// <reference path="../three-copyshader.d.ts" />

declare module THREE {
    var AWDLoader: any;
    var FlyControls: any;
    var BloomPass: any;
    var DotScreenShader: Shader;
    var RGBShiftShader: Shader;
    var FXAAShader: Shader;
}
