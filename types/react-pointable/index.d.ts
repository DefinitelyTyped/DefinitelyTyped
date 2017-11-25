// Type definitions for react-pointable 1.1
// Project: https://github.com/MilllerTime/react-pointable
// Definitions by: Stefan Fochler <https://github.com/istefo>
//                 Dibyo Majumdar <https://github.com/mdibyo>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

import * as React from 'react';

export type TouchAction = 'auto' | 'none' | 'pan-x' | 'pan-y' | 'manipulation';

export interface PointableProps extends React.HTMLAttributes<Element>, React.SVGAttributes<Element> {
    tagName?: keyof HTMLElementTagNameMap | keyof SVGElementTagNameMap;
    touchAction?: TouchAction;
    elementRef?(el: HTMLElement|SVGElement): void;
    onPointerMove?(evt: PointerEvent): void;
    onPointerDown?(evt: PointerEvent): void;
    onPointerUp?(evt: PointerEvent): void;
    onPointerOver?(evt: PointerEvent): void;
    onPointerOut?(evt: PointerEvent): void;
    onPointerEnter?(evt: PointerEvent): void;
    onPointerLeave?(evt: PointerEvent): void;
    onPointerCancel?(evt: PointerEvent): void;
}

export default class Pointable extends React.Component<PointableProps> {
    static defaultProps: {
        tagName: 'div',
        touchAction: 'auto'
    };
}

declare global {
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
