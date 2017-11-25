// Type definitions for hyperscript
// Project: https://github.com/dominictarr/hyperscript
// Definitions by: Mike Linkovich <https://github.com/spacejack>, Justin Firth <https://github.com/jmfirth>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.2

declare module 'hyperscript' {

	interface HyperScript {
		/** Creates an Element */
		<T extends keyof HTMLElementTagNameMap >(tagName: T, attrs?: Object, ...children: any[]): HTMLElementTagNameMap [T];
		<T extends keyof SVGElementTagNameMap >(tagName: T, attrs?: Object, ...children: any[]): SVGElementTagNameMap [T];
		<T extends Element>(tagName: string, attrs?: Object, ...children: any[]): T;
		/** Cleans up any event handlers created by this hyperscript context */
		cleanup(): void;
		/** Creates a new hyperscript context */
		context(): HyperScript;
	}

	const h: HyperScript;
	export = h;

	interface SVGElementTagNameMap {
		"circle": SVGCircleElement;
		"clippath": SVGClipPathElement;
		"defs": SVGDefsElement;
		"desc": SVGDescElement;
		"ellipse": SVGEllipseElement;
		"feblend": SVGFEBlendElement;
		"fecolormatrix": SVGFEColorMatrixElement;
		"fecomponenttransfer": SVGFEComponentTransferElement;
		"fecomposite": SVGFECompositeElement;
		"feconvolvematrix": SVGFEConvolveMatrixElement;
		"fediffuselighting": SVGFEDiffuseLightingElement;
		"fedisplacementmap": SVGFEDisplacementMapElement;
		"fedistantlight": SVGFEDistantLightElement;
		"feflood": SVGFEFloodElement;
		"fefunca": SVGFEFuncAElement;
		"fefuncb": SVGFEFuncBElement;
		"fefuncg": SVGFEFuncGElement;
		"fefuncr": SVGFEFuncRElement;
		"fegaussianblur": SVGFEGaussianBlurElement;
		"feimage": SVGFEImageElement;
		"femerge": SVGFEMergeElement;
		"femergenode": SVGFEMergeNodeElement;
		"femorphology": SVGFEMorphologyElement;
		"feoffset": SVGFEOffsetElement;
		"fepointlight": SVGFEPointLightElement;
		"fespecularlighting": SVGFESpecularLightingElement;
		"fespotlight": SVGFESpotLightElement;
		"fetile": SVGFETileElement;
		"feturbulence": SVGFETurbulenceElement;
		"filter": SVGFilterElement;
		"foreignobject": SVGForeignObjectElement;
		"g": SVGGElement;
		"image": SVGImageElement;
		"line": SVGLineElement;
		"lineargradient": SVGLinearGradientElement;
		"marker": SVGMarkerElement;
		"mask": SVGMaskElement;
		"metadata": SVGMetadataElement;
		"path": SVGPathElement;
		"pattern": SVGPatternElement;
		"polygon": SVGPolygonElement;
		"polyline": SVGPolylineElement;
		"radialgradient": SVGRadialGradientElement;
		"rect": SVGRectElement;
		"stop": SVGStopElement;
		"svg": SVGSVGElement;
		"switch": SVGSwitchElement;
		"symbol": SVGSymbolElement;
		"text": SVGTextElement;
		"textpath": SVGTextPathElement;
		"tspan": SVGTSpanElement;
		"use": SVGUseElement;
		"view": SVGViewElement;
	}
}
