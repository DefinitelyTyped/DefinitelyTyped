// Type definitions for three.js (Detector.js)
// Project: https://github.com/mrdoob/three.js/blob/master/examples/js/Detector.js
// Definitions by: Satoru Kimura <https://github.com/gyohk>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

interface DetectorStatic {
	canvas: boolean;
	webgl: boolean;
	workers: boolean;
	fileapi: boolean;
	
	getWebGLErrorMessage(): HTMLElement;
	addGetWebGLMessage(parameters?: {id?: string; parent?: HTMLElement}): void;
}

declare var Detector: DetectorStatic;
