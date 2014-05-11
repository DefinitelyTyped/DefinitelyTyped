/////////////////////////////////////////////////////////////////////
// Lib.d.ts browser specific fixes necessary for these tests to work : 
/////////////////////////////////////////////////////////////////////
interface CSSStyleDeclaration {
    WebkitFilter: string;
}
interface Document {
    pointerLockElement: any;
    mozPointerLockElement: any;
    webkitPointerLockElement: any;
    fullscreenElement: any;
    mozFullscreenElement: any;
    mozFullScreenElement: any;
    webkitFullscreenElement: any;
}
interface HTMLElement {
    requestPointerLock: any;
    mozRequestPointerLock: any;
    webkitRequestPointerLock: any;
    requestFullScreen: any;
    requestFullscreen: any;
    mozRequestFullScreen: any;
    mozRequestFullscreen: any;
    webkitRequestFullscreen: any;
}

/////////////////////////////////////////////////////////////
// https://github.com/mrdoob/three.js/tree/master/examples
//////////////////////////////////////////////////////////////

declare var Stats: any;
declare var TWEEN: any;
declare var Detector: any;
declare var Qrcode: any;
declare var ImprovedNoise: any;


declare module THREE {
    var AnaglyphEffect: any;
    var AWDLoader: any;
    var PDBLoader: any;
    var CSS3Renderer: any;
    var CSS3DSprite: any;
    var CSS3DRenderer: any;
    var CSS3DObject: any;
    var DotScreenShader: any;
    var TrackballControls: any;
    var FlyControls: any;
    var RenderPass: any;
    var FilmPass: any;
    var EffectComposer: any;
    var OrbitControls: any;
    var PathControls: any;
    var PointerLockControls: any;
    var RGBShiftShader: any;
    var RollControls: any;
    var FirstPersonControls: any;
    var SVGRenderer: any;
    var SoftwareRenderer: any;
    var UVsDebug: any;
    var UVsUtils: any;
    var Curves: any;
    var ParametricGeometries: any;
    var BinaryLoader: any;
    var OculusRiftEffect: any;
    var SubdivisionModifier: any;
    var TessellateModifier: any;
    var ExplodeModifier: any;
    var RenderPass: any;
    var BloomPass: any;
    var FilmPass: any;
    var ShaderPass: any;
    var FXAAShader: any;
    var CopyShader: any;
    var ColladaLoader: any;
    var CTMLoader: any;
    var VTKLoader: any;
    var STLLoader: any;
    var OBJLoader: any;
    var ColladaLoader: any;
    var UTF8Loader: any;
    var UnpackDepthRGBAShader: any;
}

