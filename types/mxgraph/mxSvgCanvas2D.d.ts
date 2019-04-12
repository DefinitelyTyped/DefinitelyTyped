/**
 * Copyright (c) 2006-2015, JGraph Ltd
 * Copyright (c) 2006-2015, Gaudenz Alder
 */
/**
 * Class: mxSvgCanvas2D
 *
 * Extends <mxAbstractCanvas2D> to implement a canvas for SVG. This canvas writes all
 * calls as SVG output to the given SVG root node.
 *
 * (code)
 * var svgDoc = mxUtils.createXmlDocument();
 * var root = (svgDoc.createElementNS != null) ?
 * 		svgDoc.createElementNS(mxConstants.NS_SVG, 'svg') : svgDoc.createElement('svg');
 *
 * if (svgDoc.createElementNS == null)
 * {
 *   root.setAttribute('xmlns', mxConstants.NS_SVG);
 *   root.setAttribute('xmlns:xlink', mxConstants.NS_XLINK);
 * }
 * else
 * {
 *   root.setAttributeNS('http://www.w3.org/2000/xmlns/', 'xmlns:xlink', mxConstants.NS_XLINK);
 * }
 *
 * var bounds = graph.getGraphBounds();
 * root.setAttribute('width', (bounds.x + bounds.width + 4) + 'px');
 * root.setAttribute('height', (bounds.y + bounds.height + 4) + 'px');
 * root.setAttribute('version', '1.1');
 *
 * svgDoc.appendChild(root);
 *
 * var svgCanvas = new mxSvgCanvas2D(root);
 * (end)
 *
 * A description of the public API is available in <mxXmlCanvas2D>.
 *
 * To disable anti-aliasing in the output, use the following code.
 *
 * (code)
 * graph.view.canvas.ownerSVGElement.setAttribute('shape-rendering', 'crispEdges');
 * (end)
 *
 * Or set the respective attribute in the SVG element directly.
 *
 * Constructor: mxSvgCanvas2D
 *
 * Constructs a new SVG canvas.
 *
 * Parameters:
 *
 * root - SVG container for the output.
 * styleEnabled - Optional boolean that specifies if a style section should be
 * added. The style section sets the default font-size, font-family and
 * stroke-miterlimit globally. Default is false.
 */

declare namespace mxgraph {
	export class mxSvgCanvas2D extends mxAbstractCanvas2D {

		constructor(root: Element, styleEnabled?: boolean);

		/**
		 * Variable: root
		 *
		 * Reference to the container for the SVG content.
		 */
		root: Element;

		/**
		 * Variable: gradients
		 *
		 * Local cache of gradients for quick lookups.
		 */
		gradients: Element[];

		/**
		 * Variable: defs
		 *
		 * Reference to the defs section of the SVG document. Only for export.
		 */
		defs: Element;

		/**
		 * Variable: styleEnabled
		 *
		 * Stores the value of styleEnabled passed to the constructor.
		 */
		styleEnabled: boolean;

		/**
		 * Variable: node
		 *
		 * Holds the current DOM node.
		 */
		node: Element;

		/**
		 * Variable: matchHtmlAlignment
		 *
		 * Specifies if plain text output should match the vertical HTML alignment.
		 * Defaul is true.
		 */
		matchHtmlAlignment: boolean;

		/**
		 * Variable: textEnabled
		 *
		 * Specifies if text output should be enabled. Default is true.
		 */
		textEnabled: boolean;

		/**
		 * Variable: foEnabled
		 *
		 * Specifies if use of foreignObject for HTML markup is allowed. Default is true.
		 */
		foEnabled: boolean;

		/**
		 * Variable: foAltText
		 *
		 * Specifies the fallback text for unsupported foreignObjects in exported
		 * documents. Default is '[Object]'. If this is set to null then no fallback
		 * text is added to the exported document.
		 */
		foAltText: string;

		/**
		 * Variable: foOffset
		 *
		 * Offset to be used for foreignObjects.
		 */
		foOffset: number;

		/**
		 * Variable: textOffset
		 *
		 * Offset to be used for text elements.
		 */
		textOffset: number;

		/**
		 * Variable: imageOffset
		 *
		 * Offset to be used for image elements.
		 */
		imageOffset: number;

		/**
		 * Variable: strokeTolerance
		 *
		 * Adds transparent paths for strokes.
		 */
		strokeTolerance: number;

		/**
		 * Variable: minStrokeWidth
		 *
		 * Minimum stroke width for output.
		 */
		minStrokeWidth: number;

		/**
		 * Variable: refCount
		 *
		 * Local counter for references in SVG export.
		 */
		refCount: number;

		/**
		 * Variable: blockImagePointerEvents
		 *
		 * Specifies if a transparent rectangle should be added on top of images to absorb
		 * all pointer events. Default is false. This is only needed in Firefox to disable
		 * control-clicks on images.
		 */
		blockImagePointerEvents: boolean;

		/**
		 * Variable: lineHeightCorrection
		 *
		 * Correction factor for <mxConstants.LINE_HEIGHT> in HTML output. Default is 1.
		 */
		lineHeightCorrection: number;

		/**
		 * Variable: pointerEventsValue
		 *
		 * Default value for active pointer events. Default is all.
		 */
		pointerEventsValue: string;

		/**
		 * Variable: fontMetricsPadding
		 *
		 * Padding to be added for text that is not wrapped to account for differences
		 * in font metrics on different platforms in pixels. Default is 10.
		 */
		fontMetricsPadding: number;

		/**
		 * Variable: cacheOffsetSize
		 *
		 * Specifies if offsetWidth and offsetHeight should be cached. Default is true.
		 * This is used to speed up repaint of text in <updateText>.
		 */
		cacheOffsetSize: boolean;

		/**
		 * Function: format
		 *
		 * Rounds all numbers to 2 decimal points.
		 */
		format(value: number): number;

		/**
		 * Function: getBaseUrl
		 *
		 * Returns the URL of the page without the hash part. This needs to use href to
		 * include any search part with no params (ie question mark alone). This is a
		 * workaround for the fact that window.location.search is empty if there is
		 * no search string behind the question mark.
		 */
		getBaseUrl(): string;

		/**
		 * Function: reset
		 *
		 * Returns any offsets for rendering pixels.
		 */
		reset(): void;

		/**
		 * Function: createStyle
		 *
		 * Creates the optional style section.
		 */
		createStyle(x?: any): HTMLElement;

		/**
		 * Function: createElement
		 *
		 * Private helper function to create SVG elements
		 */
		createElement(tagName: string, namespace: string): HTMLElement;

		/**
		 * Function: getAlternateContent
		 *
		 * Returns the alternate content for the given foreignObject.
		 */
		createAlternateContent(fo, x: number, y: number, w: number, h: number, str: string, align: string, valign: string, wrap: string, format: string, overflow: string, clip: string, rotation: number);

		/**
		 * Function: createGradientId
		 *
		 * Private helper function to create SVG elements
		 */
		createGradientId(start: string, end: string, alpha1: string, alpha2: string, direction: string): string;

		/**
		 * Function: getSvgGradient
		 *
		 * Private helper function to create SVG elements
		 */
		getSvgGradient(start: string, end: string, alpha1: string, alpha2: string, direction: string): Element;

		/**
		 * Function: createSvgGradient
		 *
		 * Creates the given SVG gradient.
		 */
		createSvgGradient(start: string, end: string, alpha1: string, alpha2: string, direction: string): Element;

		/**
		 * Function: addNode
		 *
		 * Private helper function to create SVG elements
		 */
		addNode(filled: boolean, stroked: boolean): Element;

		/**
		 * Function: updateFill
		 *
		 * Transfers the stroke attributes from <state> to <node>.
		 */
		updateFill(): void;

		/**
		 * Function: getCurrentStrokeWidth
		 *
		 * Returns the current stroke width (>= 1), ie. max(1, this.format(this.state.strokeWidth * this.state.scale)).
		 */
		getCurrentStrokeWidth(): number;

		/**
		 * Function: updateStroke
		 *
		 * Transfers the stroke attributes from <state> to <node>.
		 */
		updateStroke(): void;

		/**
		 * Function: updateStrokeAttributes
		 *
		 * Transfers the stroke attributes from <state> to <node>.
		 */
		updateStrokeAttributes(): void;

		/**
		 * Function: createDashPattern
		 *
		 * Creates the SVG dash pattern for the given state.
		 */
		createDashPattern(scale: number): Number[];

		/**
		 * Function: createTolerance
		 *
		 * Creates a hit detection tolerance shape for the given node.
		 */
		createTolerance(node: Element): Element;

		/**
		 * Function: createShadow
		 *
		 * Creates a shadow for the given node.
		 */
		createShadow(node: Element): Element;

		/**
		 * Function: setLink
		 *
		 * Experimental implementation for hyperlinks.
		 */
		setLink(link: string): void;

		/**
		 * Function: rotate
		 *
		 * Sets the rotation of the canvas. Note that rotation cannot be concatenated.
		 */
		rotate(theta: number, flipH: boolean, flipV: boolean, cx: number, cy: number): void;

		/**
		 * Function: begin
		 *
		 * Extends superclass to create path.
		 */
		begin(): void;

		/**
		 * Function: rect
		 *
		 * Private helper function to create SVG elements
		 */
		rect(x: number, y: number, w: number, h: number): void;

		/**
		 * Function: roundrect
		 *
		 * Private helper function to create SVG elements
		 */
		roundrect(x: number, y: number, w: number, h: number, dx: number, dy: number): void;

		/**
		 * Function: ellipse
		 *
		 * Private helper function to create SVG elements
		 */
		ellipse(x: number, y: number, w: number, h: number): void;

		/**
		 * Function: image
		 *
		 * Private helper function to create SVG elements
		 */
		image(x: number, y: number, w: number, h: number, src: string, aspect: boolean, flipH: boolean, flipV: boolean);

		/**
		 * Function: convertHtml
		 *
		 * Converts the given HTML string to XHTML.
		 */
		convertHtml(val: string): string;

		/**
		 * Function: createDiv
		 *
		 * Private helper function to create SVG elements
		 */
		createDiv(str: string, align: string, valign: string, style: string, overflow: string): HTMLElement;

		/**
		 * Invalidates the cached offset size for the given node.
		 */
		invalidateCachedOffsetSize(node: Element): void;

		/**
		 * Updates existing DOM nodes for text rendering. LATER: Merge common parts with text function below.
		 */
		updateText(x: number, y: number, w: number, h: number, align: string, valign: string, wrap: string, overflow: string, clip: string, rotation: number, node: Element): void;

		/**
		 * Function: text
		 *
		 * Paints the given text. Possible values for format are empty string for plain
		 * text and html for HTML markup. Note that HTML markup is only supported if
		 * foreignObject is supported and <foEnabled> is true. (This means IE9 and later
		 * does currently not support HTML text as part of shapes.)
		 */
		text(x: number, y: number, w: number, h: number, str: string, align: string, valign: string, wrap: string, format: string, overflow: string, clip: string, rotation: number, dir: string): void;

		/**
		 * Function: createClip
		 *
		 * Creates a clip for the given coordinates.
		 */
		createClip(x: number, y: number, w: number, h: number): Element;

		/**
		 * Function: text
		 *
		 * Paints the given text. Possible values for format are empty string for
		 * plain text and html for HTML markup.
		 */
		plainText(x: number, y: number, w: number, h: number, str: string, align: string, valign: string, wrap: string, overflow: string, clip: string, rotation: number, dir: string): void;

		/**
		 * Function: updateFont
		 *
		 * Updates the text properties for the given node. (NOTE: For this to work in
		 * IE, the given node must be a text or tspan element.)
		 */
		updateFont(node: Element): void;

		/**
		 * Function: addTextBackground
		 *
		 * Background color and border
		 */
		addTextBackground(node: Element, str: string, x: number, y: number, w: number, h: number, align: string, valign: string, overflow: string): void;

		/**
		 * Function: stroke
		 *
		 * Paints the outline of the current path.
		 */
		stroke(): void;

		/**
		 * Function: fill
		 *
		 * Fills the current path.
		 */
		fill(): void;

		/**
		 * Function: fillAndStroke
		 *
		 * Fills and paints the outline of the current path.
		 */
		fillAndStroke(): void;
	}
}