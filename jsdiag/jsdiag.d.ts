// Type definitions for MindFusion.Diagramming for JavaScript V2.7
// Project: http://www.mindfusion.eu/javascript-diagram.html
// Definitions by: MindFusion <http://www.mindfusion.eu>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

// Copyright (c) 2016, MindFusion LLC - Bulgaria.

declare namespace MindFusion
{
	/** The base type of classes that define arguments passed to event handler functions. */
	class EventArgs
	{
	}
}
declare namespace MindFusion.Graphs
{
	/** Defines values that specify how automatic layout algorithms align links to anchor points. */
	enum Anchoring
	{
		/** Anchor points are ignored. */
		Ignore = 0,
		/** Links are aligned to their original anchor points. */
		Keep = 1,
		/** Links are aligned to new anchor points, depending on the positions of graph nodes after a layout is applied. */
		Reassign = 2
	}
	/** Specifies placement of graph connected components relatively to each other. */
	enum MultipleGraphsPlacement
	{
		/** Indicates that subgraphs should be placed in a column. */
		Vertical = 0,
		/** Indicates that subgraphs should be placed in a row. */
		Horizontal = 1
	}
	/** Specifies in what direction to place nodes processed by a layout algorithm. */
	enum LayoutDirection
	{
		/** Indicates a top-to-bottom layout direction. */
		TopToBottom = 0,
		/** Indicates a left-to-right layout direction. */
		LeftToRight = 1,
		/** Indicates a bottom-to-top layout direction. */
		BottomToTop = 2,
		/** Indicates a right-to-left layout direction. */
		RightToLeft = 3
	}
	/** Specifies the shape of the diagram links after they are laid out. */
	enum TreeLayoutLinkType
	{
		/** Indicates that links will be arranged to point to the centers of the related nodes. */
		Default = 0,
		/** Indicates that links will be attached to the middles of the adjoining node sides. */
		Straight = 1,
		/** Indicates that links will be arranged as cascading and attached to the middles of the adjoining node sides. */
		Cascading = 2
	}
	/** Base class for automatic layout algorithms. */
	class Layout
	{
		/** Indicates how to align links to the anchor points of nodes. */
		anchoring: Anchoring;
		/** Indicates whether to treat each Group of nodes as a single vertex in the arranged graph. */
		keepGroupLayout: boolean;
		/** Indicates how multiple independent graphs in the diagram should be positioned relatively to each other. */
		multipleGraphsPlacement: MultipleGraphsPlacement;
	}
	/** Implements algorithms for arranging tree structures. */
	class TreeLayout extends Layout
	{
		/** Initializes a new instance of the TreeLayout class. */
		constructor();
		/** The space to leave between adjacent levels of the tree. */
		levelDistance: number;
		/** The space to leave between adjacent nodes on the same level. */
		nodeDistance: number;
		/** Indicates whether to keep the root node at its original position. */
		keepRootPosition: boolean;
		/** The orientation of the arranged graph. */
		direction: LayoutDirection;
		/** The type of the links in the arranged tree. */
		linkType: TreeLayoutLinkType;
		/** Indicates whether the 'assistant' trait is regarded when performing the layout. */
		enableAssistants: boolean;
		/** Indicates whether 'assistant' nodes on the same side of a single parent are arranged as close to each other as possible. */
		compactAssistants: boolean;
	}
	/** Implements algorithms for arranging tree structures. */
	class BorderedTreeLayout extends Layout
	{
		/** Initializes a new instance of the BorderedTreeLayout class. */
		constructor();
		/** The space to leave between adjacent levels of the tree. */
		levelDistance: number;
		/** The space to leave between adjacent nodes on the same level. */
		nodeDistance: number;
		/** Indicates whether to keep the root node at its original position. */
		keepRootPosition: boolean;
		/** The orientation of the arranged graph. */
		direction: LayoutDirection;
		/** The type of the links in the arranged tree. */
		linkType: TreeLayoutLinkType;
	}
	/** This algorithm assigns diagram nodes to distinct horizontal or vertical layers. */
	class LayeredLayout extends Layout
	{
		/** Initializes a new instance of the LayeredLayout class. */
		constructor();
		/** The desired distance between layer axis lines. */
		layerDistance: number;
		/** The desired distance between adjacent nodes in a layer. */
		nodeDistance: number;
		/** The orientation of the arranged graph. */
		direction: LayoutDirection;
		/** The number of iterations to perform when untwining the layout. */
		siftingRounds: number;
	}
	/** Implements the Spring-Embedder graph layout algorithm. */
	class SpringLayout extends Layout
	{
		/** Initializes a new instance of the SpringLayout class. */
		constructor();
		/** The desired distance between nodes. */
		nodeDistance: number;
		/** The number of iterations to run the layout routine. */
		iterations: number;
	}
	/** FractalLayout is a tree layout algorithm that places child nodes symmetrically around their parent node. */
	class FractalLayout extends Layout
	{
		/** Initializes a new instance of the FractalLayout class. */
		constructor();
		/** Indicates how to align links to the anchor points of nodes. */
		anchoring: Anchoring;
		/** Indicates whether to treat each Group of nodes as a single vertex in the arranged graph. */
		keepGroupLayout: boolean;
		/** Specifies the node that should be placed at the center of the tree. */
		root: MindFusion.Diagramming.DiagramNode;
		/** Indicates how multiple independent graphs in the diagram should be positioned relatively to each other. */
		multipleGraphsPlacement: MultipleGraphsPlacement;
	}
	/** Performs tree-map layout on a graph. */
	class TreeMapLayout extends Layout
	{
		/** Initializes a new instance of the TreeMapLayout class. */
		constructor();
		/** Indicates whether the layout should attempt to keep the dimension ratio of nodes closer to 1. */
		squarify: boolean;
		/** The distance between adjacent nodes. */
		padding: number;
		/** The padding inside containers. */
		containerPadding: number;
		/** The rectangle in which the layout will try to arrange nodes. */
		layoutArea: MindFusion.Drawing.Rect;
	}
}
declare namespace MindFusion.Drawing
{
	/** Represents units of measure. */
	enum GraphicsUnit
	{
		/** Specifies display units (1/100 inch) as the unit of measure. */
		Display = 1,
		/** Specifies device pixels as the unit of measure. */
		Pixel = 2,
		/** Specifies printer's points (1/72 inch) as the unit of measure. */
		Point = 3,
		/** Specifies inches as the unit of measure. */
		Inch = 4,
		/** Specifies document units (1/300 inch) as the unit of measure. */
		Document = 5,
		/** Specifies millimeters as the unit of measure. */
		Millimeter = 6,
		/** Specifies device-independent pixels (1/96 inch) as the unit of measure. */
		WpfPoint = 7,
		/** Specifies percents as the unit of measure. */
		Percent = 8,
		/** Specifies centimeters as the unit of measure. */
		Centimeter = 9
	}
	/** Specifies font style attributes. */
	enum FontStyle
	{
		/** Normal text. */
		Regular = 0,
		/** Bold text. */
		Bold = 1,
		/** Italic text. */
		Italic = 2,
		/** Underlined text. */
		Underline = 4
	}
	/** Represents a font. */
	class Font
	{
		/** Initializes a new instance of the Font class with the specified attributes.
		 * @param name The font name.
		 * @param size The font size.
		 * @param bold true if this font is bold, otherwise false.
		 * @param italic true if this font is italic, otherwise false.
		 * @param underline true if this font is underlined, otherwise false.
		*/
		constructor(name: string, size: number, bold: boolean, italic: boolean, underline: boolean);
		/** The font name. */
		name: string;
		/** The font size. */
		size: number;
		/** true if this font is bold, otherwise false. */
		bold: boolean;
		/** true if this font is italic, otherwise false. */
		italic: boolean;
		/** true if this font is underlined, otherwise false. */
		underline: boolean;
	}
	/** Describes the thickness of a rectangular frame. */
	class Thickness
	{
		/** Initializes a new instance of the Thickness class with the specified widths.
		 * @param left Specifies the width of the left side of the frame.
		 * @param top Specifies the width of the top side of the frame.
		 * @param right Specifies the width of the right side of the frame.
		 * @param bottom Specifies the width of the bottom side of the frame.
		*/
		constructor(left: number, top: number, right: number, bottom: number);
		/** The width of the left side of the frame. */
		left: number;
		/** The width of the top side of the frame. */
		top: number;
		/** The width of the right side of the frame. */
		right: number;
		/** The width of the bottom side of the frame. */
		bottom: number;
	}
	/** Represents a rectangle. */
	class Rect
	{
		/** Initializes a new instance of the Rect class.
		 * @param x The X-coordinate of the top left corner of the rectangle.
		 * @param y The Y-coordinate of the top left corner of the rectangle.
		 * @param width The width of the rectangle.
		 * @param height The height of the rectangle.
		*/
		constructor(x: number, y: number, width: number, height: number);
		/** The X-coordinate of the top left corner of the rectangle. */
		x: number;
		/** The Y-coordinate of the top left corner of the rectangle. */
		y: number;
		/** The width of the rectangle. */
		width: number;
		/** The height of the rectangle. */
		height: number;
	}
	/** Represents the size of 2D object. */
	class Size
	{
		/** Initializes a new instance of the Size class with the specified width and height.
		 * @param width Specifies object's width.
		 * @param height Specifies object's height.
		*/
		constructor(width: number, height: number);
		/** The object's width. */
		width: number;
		/** The object's height. */
		height: number;
	}
	/** Represents a point. */
	class Point
	{
		/** Initializes a new instance of the Point class with the specified X and Y coordinates.
		 * @param x The X-coordinate of the Point.
		 * @param y The Y-coordinate of the Point.
		*/
		constructor(x: number, y: number);
		/** The X-coordinate of the Point. */
		x: number;
		/** The Y-coordinate of the Point. */
		y: number;
	}
	/** Specifies the dash pattern of lines. */
	enum DashStyle
	{
		/** Specifies a solid line. */
		Solid = 0,
		/** Specifies a line consisting of dashes. */
		Dash = 1,
		/** Specifies a line consisting of dots. */
		Dot = 2,
		/** Specifies a dash-dot pattern. */
		DashDot = 3,
		/** Specifies a dash-dot-dot pattern. */
		DashDotDot = 4
	}
	/** The Canvas class wraps the HTML5 Canvas element. */
	class Canvas
	{
		/** Gets the underlying Canvas element's bounds. */
		getBounds(): Rect;
		/** Sets the underlying Canvas element's bounds. */
		setBounds(value: Rect): void;
		/** Gets the unit of measure used for logical coordinates. */
		getMeasureUnit(): GraphicsUnit;
		/** Sets the unit of measure used for logical coordinates. */
		setMeasureUnit(value: GraphicsUnit): void;
		/** Gets the zoom factor. */
		getZoomFactor(): number;
		/** Sets the zoom factor. */
		setZoomFactor(value: number): void;
		/** Transforms a point from client to document coordinates.
		 * @param point The point to transform.
		 * @return The transformed point.
		*/
		clientToDoc(point: Point): Point;
		/** Transforms a point from document to client coordinates.
		 * @param point The point to transform.
		 * @return The transformed point.
		*/
		docToClient(point: Point): Point;
	}
}
declare namespace MindFusion.Diagramming
{
	/** Represents an item in the diagram document. All classes representing diagram elements derive from DiagramItem. */
	class DiagramItem
	{
		constructor(parent: Diagram);
		/** Serializes this item into a JSON string.
		 * @return A string containing the item's JSON representation.
		*/
		toJson(): string;
		/** Deserializes this item from a JSON string.
		 * @param json A string created by the toJson method.
		*/
		fromJson(json: string): void;
		/** Loads property values from specified XML element.
		 * @param xmlElement An XML DOM element that contains the item's serialized content.
		 * @param context An object providing contextual information about the serialization process and some helper serialization methods.
		*/
		loadFromXml(xmlElement: any, context: XmlPersistContext): void;
		/** Gets the parent diagram.
		 * @return Gets the Diagram this DiagramItem belongs to.
		*/
		getParent(): Diagram;
		/** Gets a string containing the DiagramItem's text. */
		getText(): string;
		/** Sets a string containing the DiagramItem's text. */
		setText(value: string): void;
		/** Gets a string specifying the color of the text of this item. */
		getTextColor(): string;
		/** Sets a string specifying the color of the text of this item. */
		setTextColor(value: string): void;
		/** Gets a string specifying the color of the text outline of this item. */
		getTextStroke(): string;
		/** Sets a string specifying the color of the text outline of this item. */
		setTextStroke(value: string): void;
		/** Gets the width of the text outline of this item. */
		getTextStrokeThickness(): number;
		/** Sets the width of the text outline of this item. */
		setTextStrokeThickness(value: number): void;
		/** Gets the spacing between the item boundaries and its text. */
		getTextPadding(): MindFusion.Drawing.Thickness;
		/** Sets the spacing between the item boundaries and its text. */
		setTextPadding(value: MindFusion.Drawing.Thickness): void;
		/** Gets the font used to render this item's text. */
		getFont(): MindFusion.Drawing.Font;
		/** Sets the font used to render this item's text. */
		setFont(value: MindFusion.Drawing.Font): void;
		/** Gets an object that specifies how to paint the interior of the DiagramItem. */
		getBrush(): any;
		/** Sets an object that specifies how to paint the interior of the DiagramItem. */
		setBrush(value: any): void;
		/** Gets a string specifying the color used to stroke the item's frame. */
		getStroke(): string;
		/** Sets a string specifying the color used to stroke the item's frame. */
		setStroke(value: string): void;
		/** Gets the line width applied when stroking the item's frame. */
		getStrokeThickness(): number;
		/** Sets the line width applied when stroking the item's frame. */
		setStrokeThickness(value: number): void;
		/** Gets the line dash pattern applied when stroking the item's frame. */
		getStrokeDashStyle(): MindFusion.Drawing.DashStyle;
		/** Sets the line dash pattern applied when stroking the item's frame. */
		setStrokeDashStyle(value: MindFusion.Drawing.DashStyle): void;
		/** Gets a custom value associated with this item. */
		getTag(): any;
		/** Sets a custom value associated with this item. */
		setTag(value: any): void;
		/** Gets a custom value associated with this item. */
		getId(): any;
		/** Sets a custom value associated with this item. */
		setId(value: any): void;
		/** Gets the tooltip text that should be displayed when the mouse hovers over this item. */
		getTooltip(): string;
		/** Sets the tooltip text that should be displayed when the mouse hovers over this item. */
		setTooltip(value: string): void;
		/** Gets a value indicating whether the position of this item should not be changed by automatic layout methods. */
		getIgnoreLayout(): boolean;
		/** Sets a value indicating whether the position of this item should not be changed by automatic layout methods. */
		setIgnoreLayout(value: boolean): void;
		/** Gets an object containing properties of the node, used by some layout algorithms.
		 * @return An object containing the layout properties.
		*/
		getLayoutTraits(): any;
		/** Gets the z-order position of the object. */
		getZIndex(): number;
		/** Sets the z-order position of the object. */
		setZIndex(value: number): void;
		/** Gets a value indicating whether a diagram item is selected. */
		getSelected(): boolean;
		/** Sets a value indicating whether a diagram item is selected. */
		setSelected(value: boolean): void;
		/** Gets the hyperlink associated with this diagram item. */
		getHyperLink(): string;
		/** Sets the hyperlink associated with this diagram item. */
		setHyperLink(value: string): void;
		/** Gets a value indicating whether this item is visible. */
		getVisible(): boolean;
		/** Sets a value indicating whether this item is visible. */
		setVisible(value: boolean): void;
		/** Gets a value indicating whether users are allowed to modify this item. */
		getLocked(): boolean;
		/** Sets a value indicating whether users are allowed to modify this item. */
		setLocked(value: boolean): void;
		/** Gets the color used to draw the shadow of this item. */
		getShadowColor(): string;
		/** Sets the color used to draw the shadow of this item. */
		setShadowColor(value: string): void;
		/** Gets the horizontal offset of the item's shadow. */
		getShadowOffsetX(): number;
		/** Sets the horizontal offset of the item's shadow. */
		setShadowOffsetX(value: number): void;
		/** Gets the vertical offset of the item's shadow. */
		getShadowOffsetY(): number;
		/** Sets the vertical offset of the item's shadow. */
		setShadowOffsetY(value: number): void;
		/** Gets the style associated with this item. */
		getStyle(): Style;
		/** Sets the style associated with this item. */
		setStyle(value: Style): void;
	}
	/** DiagramNode is an abstract base class from which the ShapeNode, TableNode and ControlNode classes derive. DiagramNode instances can represent graph vertices, nodes in organizational or flow diagrams, entities in ER diagrams, and so on. */
	class DiagramNode extends DiagramItem
	{
		/** Initializes a new instance of the DiagramNode class.
		 * @param parent A Diagram instance whose default node attributes are copied to this node.
		*/
		constructor(parent: Diagram);
		/** Gets the incoming links collection of this node.
		 * @return An array containing incoming DiagramLink objects.
		*/
		getIncomingLinks(): Array<DiagramLink>;
		/** Gets the outgoing links collection of this node.
		 * @return An array containing outgoing DiagramLink objects.
		*/
		getOutgoingLinks(): Array<DiagramLink>;
		/** Gets a value indicating whether users are allowed to draw incoming links to this node. */
		getAllowIncomingLinks(): boolean;
		/** Sets a value indicating whether users are allowed to draw incoming links to this node. */
		setAllowIncomingLinks(value: boolean): void;
		/** Gets a value indicating whether users are allowed to draw outgoing links from this node. */
		getAllowOutgoingLinks(): boolean;
		/** Sets a value indicating whether users are allowed to draw outgoing links from this node. */
		setAllowOutgoingLinks(value: boolean): void;
		/** Gets the angle at which this node is rotated. */
		getRotationAngle(): number;
		/** Sets the angle at which this node is rotated. */
		setRotationAngle(value: number): void;
		/** Gets the rectangle that defines the position of the diagram node. */
		getBounds(): MindFusion.Drawing.Rect;
		/** Sets the rectangle that defines the position of the diagram node. */
		setBounds(value: MindFusion.Drawing.Rect): void;
		/** Gets the kinds of modifications that end-users are permitted to perform on the node. */
		getEnabledHandles(): AdjustmentHandles;
		/** Sets the kinds of modifications that end-users are permitted to perform on the node. */
		setEnabledHandles(value: AdjustmentHandles): void;
		/** Gets a value indicating how the node adjustment handles behave and what do they look like. */
		getHandlesStyle(): HandlesStyle;
		/** Sets a value indicating how the node adjustment handles behave and what do they look like. */
		setHandlesStyle(value: HandlesStyle): void;
		/** Gets a value indicating whether this node is considered an obstacle by the link-routing algorithm. */
		getObstacle(): boolean;
		/** Sets a value indicating whether this node is considered an obstacle by the link-routing algorithm. */
		setObstacle(value: boolean): void;
		/** Gets a value indicating whether users are allowed to expand or collapse the tree branch that starts at this node. */
		getExpandable(): boolean;
		/** Sets a value indicating whether users are allowed to expand or collapse the tree branch that starts at this node. */
		setExpandable(value: boolean): void;
		/** Gets a value indicating whether the tree branch that starts at this node is expanded or collapsed. */
		getExpanded(): boolean;
		/** Sets a value indicating whether the tree branch that starts at this node is expanded or collapsed. */
		setExpanded(value: boolean): void;
		/** Gets the anchor points to which links are attached when connected to the node. */
		getAnchorPattern(): AnchorPattern;
		/** Sets the anchor points to which links are attached when connected to the node. */
		setAnchorPattern(value: AnchorPattern): void;
		/** Attaches this node to the specified master node so that when the master is moved, the attached node follows it.
		 * @param node A DiagramNode instance specifying the master node.
		*/
		attachTo(node: DiagramNode): void;
		/** Detaches this node from its current master node. */
		detach(): void;
		/** Attaches the specified subordinate node to this node, so that when this node is moved, the subordinate follows it.
		 * @param subordinate A DiagramNode instance specifying the node that should be attached.
		*/
		attach(subordinate: DiagramNode): void;
		/** Returns the node to which this node is attached.
		 * @return A DiagramNode reference specifying the node to which this node has been previously attached via the attach or attachTo method.
		*/
		getMasterNode(): DiagramNode;
		/** Returns the nodes attached to this node.
		 * @return An array of nodes attached to this node via the attach or attachTo methods.
		*/
		getAttachedNodes(): Array<DiagramNode>;
		/** Gets an array containing all effects applied to this node.
		 * @return An array containing all node effects.
		*/
		getEffects(): Array<NodeEffect>;
		/** Gets a value indicating whether this node displays a delete button. */
		getShowDeleteButton(): boolean;
		/** Sets a value indicating whether this node displays a delete button. */
		setShowDeleteButton(value: boolean): void;
	}
	/** Represents a link between two diagram nodes. */
	class DiagramLink extends DiagramItem
	{
		/** Initializes a new instance of the DiagramLink class between the specified nodes using the specified diagram link as a prototype.
		 * @param parent The Diagram from which to obtain default values for the link properties.
		 * @param origin The origin node of the new link.
		 * @param destination The destination node of the new link.
		*/
		constructor(parent: Diagram, origin: DiagramNode, destination: DiagramNode);
		/** Gets the type of link segments and how they are positioned relatively to each other. */
		getShape(): LinkShape;
		/** Sets the type of link segments and how they are positioned relatively to each other. */
		setShape(value: LinkShape): void;
		/** Gets the control points of this link. */
		getControlPoints(): Array<MindFusion.Drawing.Point>;
		/** Sets the control points of this link. */
		setControlPoints(value: Array<MindFusion.Drawing.Point>): void;
		/** Gets the link's text placement and orientation. */
		getTextStyle(): LinkTextStyle;
		/** Sets the link's text placement and orientation. */
		setTextStyle(value: LinkTextStyle): void;
		/** Gets the link's text alignment. */
		getTextAlignment(): Alignment;
		/** Sets the link's text alignment. */
		setTextAlignment(value: Alignment): void;
		/** Gets the origin node of this DiagramLink. */
		getOrigin(): DiagramNode;
		/** Sets the origin node of this DiagramLink. */
		setOrigin(value: DiagramNode): void;
		/** Gets the destination node of this DiagramLink. */
		getDestination(): DiagramNode;
		/** Sets the destination node of this DiagramLink. */
		setDestination(value: DiagramNode): void;
		/** Gets the origin table row of this DiagramLink. */
		getOriginIndex(): number;
		/** Sets the origin table row of this DiagramLink. */
		setOriginIndex(value: number): void;
		/** Gets the destination table row of this DiagramLink. */
		getDestinationIndex(): number;
		/** Sets the destination table row of this DiagramLink. */
		setDestinationIndex(value: number): void;
		/** Updates the link's internal state after the link's control points have been changed. */
		updateFromPoints(): void;
		/** Gets the first control point of this link. */
		getStartPoint(): MindFusion.Drawing.Point;
		/** Sets the first control point of this link. */
		setStartPoint(value: MindFusion.Drawing.Point): void;
		/** Gets the last control point of this link. */
		getEndPoint(): MindFusion.Drawing.Point;
		/** Sets the last control point of this link. */
		setEndPoint(value: MindFusion.Drawing.Point): void;
		/** Gets the shape to display at the beginning of this link. */
		getBaseShape(): Shape;
		/** Sets the shape to display at the beginning of this link. */
		setBaseShape(value: Shape): void;
		/** Gets the size of the shape displayed at the beginning of this link. */
		getBaseShapeSize(): number;
		/** Sets the size of the shape displayed at the beginning of this link. */
		setBaseShapeSize(value: number): void;
		/** Gets the shape to display at the end of this link. */
		getHeadShape(): Shape;
		/** Sets the shape to display at the end of this link. */
		setHeadShape(value: Shape): void;
		/** Gets the size of the shape displayed at the end of this link. */
		getHeadShapeSize(): number;
		/** Sets the size of the shape displayed at the end of this link. */
		setHeadShapeSize(value: number): void;
		/** Gets an object that specifies how to paint the interior of the link's base shape. */
		getBaseBrush(): any;
		/** Sets an object that specifies how to paint the interior of the link's base shape. */
		setBaseBrush(value: any): void;
		/** Gets an object that specifies how to paint the interior of the link's arrowhead shape. */
		getHeadBrush(): any;
		/** Sets an object that specifies how to paint the interior of the link's arrowhead shape. */
		setHeadBrush(value: any): void;
		/** Routes this link, regardless of whether the link's AutoRoute flag is enabled. */
		route(): void;
		/** Gets a value indicating whether a link should avoid nodes by going the shortest path from its origin to its destination without crossing any other nodes. */
		getAutoRoute(): boolean;
		/** Sets a value indicating whether a link should avoid nodes by going the shortest path from its origin to its destination without crossing any other nodes. */
		setAutoRoute(value: boolean): void;
		/** Gets a value indicating whether a link automatically adjusts its end points' positions in order to keep pointing to the centers of nodes that it connects. */
		getDynamic(): boolean;
		/** Sets a value indicating whether a link automatically adjusts its end points' positions in order to keep pointing to the centers of nodes that it connects. */
		setDynamic(value: boolean): void;
		/** Adds a new label to this link.
		 * @param text The label's text.
		 * @return A LinkLabel instance.
		*/
		addLabel(text: string): LinkLabel;
		/** Removes the specified label from this link.
		 * @param label A LinkLabel instance.
		*/
		removeLabel(label: LinkLabel): void;
	}
	/** ShapeNode instances are diagram nodes that represent geometric shapes. */
	class ShapeNode extends DiagramNode
	{
		/** Initializes a new instance of the ShapeNode class with default values supplied from the specified Diagram.
		 * @param parent The Diagram from which to obtain default values for the node properties.
		*/
		constructor(parent: Diagram);
		/** Gets a value indicating whether text is rotated when the node is rotated. */
		getRotateText(): boolean;
		/** Sets a value indicating whether text is rotated when the node is rotated. */
		setRotateText(value: boolean): void;
		/** Gets a value indicating whether the image is rotated when the node is rotated. */
		getRotateImage(): boolean;
		/** Sets a value indicating whether the image is rotated when the node is rotated. */
		setRotateImage(value: boolean): void;
		/** Gets the HTMLImageElement displayed inside this node. */
		getImage(): any;
		/** Sets the HTMLImageElement displayed inside this node. */
		setImage(value: any): void;
		/** Gets the alignment for the image of this node. */
		getImageAlign(): ImageAlign;
		/** Sets the alignment for the image of this node. */
		setImageAlign(value: ImageAlign): void;
		/** Gets a value indicating whether this shape node is transparent. */
		getTransparent(): boolean;
		/** Sets a value indicating whether this shape node is transparent. */
		setTransparent(value: boolean): void;
		/** Gets a reference to the node's geometric shape definition. */
		getShape(): Shape;
		/** Sets a reference to the node's geometric shape definition. */
		setShape(value: Shape): void;
		/** Gets the URL of the image displayed in this ShapeNode. */
		getImageLocation(): string;
		/** Sets the URL of the image displayed in this ShapeNode. */
		setImageLocation(value: string): void;
		/** Gets the Base64-encoded data of the image displayed in this ShapeNode. */
		getImageContent(): string;
		/** Sets the Base64-encoded data of the image displayed in this ShapeNode. */
		setImageContent(value: string): void;
		/** Gets how the text should be aligned inside the ShapeNode's bounding rectangle. */
		getTextAlignment(): Alignment;
		/** Sets how the text should be aligned inside the ShapeNode's bounding rectangle. */
		setTextAlignment(value: Alignment): void;
		/** Gets how the text should be vertically aligned inside the ShapeNode's bounding rectangle. */
		getLineAlignment(): Alignment;
		/** Sets how the text should be vertically aligned inside the ShapeNode's bounding rectangle. */
		setLineAlignment(value: Alignment): void;
		/** Gets a value indicating whether styled text rendering is enabled. */
		getEnableStyledText(): boolean;
		/** Sets a value indicating whether styled text rendering is enabled. */
		setEnableStyledText(value: boolean): void;
		/** Makes the shape node big enough to display its text without clipping.
		 * @param fit One of the FitSize enumeration values.
		 * @return true if the node is resized successfully; otherwise, false.
		*/
		resizeToFitText(fit: FitSize): boolean;
	}
	/** Represents a set of items selected in the diagram document. */
	class Selection
	{
		/** A list of all selected diagram items. */
		items: Array<DiagramItem>;
		/** A list of selected nodes. */
		nodes: Array<DiagramNode>;
		/** A list of selected links. */
		links: Array<DiagramLink>;
		/** Adds an item to this Selection.
		 * @param item The item to add.
		*/
		addItem(item: DiagramItem): void;
		/** Removes an item from this Selection.
		 * @param item The item to remove.
		 * @return true if the item was found and removed from selection, or false otherwise.
		*/
		removeItem(item: DiagramItem): boolean;
		/** Removes all items from the selection. */
		clear(): void;
	}
	/** Represents a cell of a TableNode. */
	class Cell
	{
		/** Initializes a new instance of the Cell class. */
		constructor();
		/** Gets a string containing the cell's text. */
		getText(): string;
		/** Sets a string containing the cell's text. */
		setText(value: string): void;
		/** Gets how the text should be aligned inside the cell's bounding rectangle. */
		getTextAlignment(): Alignment;
		/** Sets how the text should be aligned inside the cell's bounding rectangle. */
		setTextAlignment(value: Alignment): void;
		/** Gets how the text should be vertically aligned inside the cell's bounding rectangle. */
		getLineAlignment(): Alignment;
		/** Sets how the text should be vertically aligned inside the cell's bounding rectangle. */
		setLineAlignment(value: Alignment): void;
		/** Gets the HTMLImageElement displayed inside this cell. */
		getImage(): any;
		/** Sets the HTMLImageElement displayed inside this cell. */
		setImage(value: any): void;
		/** Gets the alignment for the image of this cell. */
		getImageAlign(): ImageAlign;
		/** Sets the alignment for the image of this cell. */
		setImageAlign(value: ImageAlign): void;
		/** Gets the URL of the image displayed inside this cell. */
		getImageLocation(): string;
		/** Sets the URL of the image displayed inside this cell. */
		setImageLocation(value: string): void;
		/** Gets the Base64-encoded data of the image displayed inside this cell. */
		getImageContent(): string;
		/** Sets the Base64-encoded data of the image displayed inside this cell. */
		setImageContent(value: string): void;
		/** Gets the font used to render this cell's text. */
		getFont(): MindFusion.Drawing.Font;
		/** Sets the font used to render this cell's text. */
		setFont(value: MindFusion.Drawing.Font): void;
		/** Gets an object that specifies how to paint the interior of this cell. */
		getBrush(): any;
		/** Sets an object that specifies how to paint the interior of this cell. */
		setBrush(value: any): void;
		/** Gets A string value identifying the color of the text. */
		getTextColor(): string;
		/** Sets A string value identifying the color of the text. */
		setTextColor(value: string): void;
		/** Gets the number of columns spanned by this cell. */
		getColumnSpan(): number;
		/** Sets the number of columns spanned by this cell. */
		setColumnSpan(value: number): void;
		/** Gets the number of rows spanned by this cell. */
		getRowSpan(): number;
		/** Sets the number of rows spanned by this cell. */
		setRowSpan(value: number): void;
	}
	/** TableNode instances are diagram nodes that can be used to display tabular or list data. */
	class TableNode extends DiagramNode
	{
		/** Initializes a new instance of the TableNode class with default values supplied from the specified Diagram.
		 * @param parent The Diagram from which to obtain default values for the node properties.
		*/
		constructor(parent: Diagram);
		/** Returns a reference to the cell located at the specified column and row of this table.
		 * @param col An integer value specifying the index of a table's column.
		 * @param row An integer value specifying the index of a table's row.
		 * @return A Cell instance representing the specified cell.
		*/
		getCell(col: number, row: number): Cell;
		/** Returns a reference to the column with specified index
		 * @param col An integer value specifying the index of a table's column.
		 * @return A Column instance representing the specified cell.
		*/
		getColumn(col: number): Column;
		/** Returns a reference to the row with specified index
		 * @param row An integer value specifying the index of a table's row.
		 * @return A Row instance representing the specified cell.
		*/
		getRow(row: number): Row;
		/** Sets the height of specified row.
		 * @param row An integer value specifying the index of a table's row.
		 * @param value The row's height.
		*/
		setRowHeight(row: number, value: number): void;
		/** Sets the width of specified column.
		 * @param col An integer value specifying the index of a table's column.
		 * @param value The column's width.
		*/
		setColumnWidth(col: number, value: number): void;
		/** Gets the shape of the table's outline. */
		getShape(): SimpleShape;
		/** Sets the shape of the table's outline. */
		setShape(value: SimpleShape): void;
		/** Gets the height of the table's caption area. */
		getCaptionHeight(): number;
		/** Sets the height of the table's caption area. */
		setCaptionHeight(value: number): void;
		/** Gets the style of the cell frame lines. */
		getCellFrameStyle(): CellFrameStyle;
		/** Sets the style of the cell frame lines. */
		setCellFrameStyle(value: CellFrameStyle): void;
		/** Gets a value indicating whether drawing a link from/to this table should connect a row of the table, or the whole table as an integral entity. */
		getConnectionStyle(): ConnectionStyle;
		/** Sets a value indicating whether drawing a link from/to this table should connect a row of the table, or the whole table as an integral entity. */
		setConnectionStyle(value: ConnectionStyle): void;
		/** Changes the number of columns and rows in this table.
		 * @param columns An integer value specifying the new number of columns.
		 * @param rows An integer value specifying the new number of rows.
		*/
		redimTable(columns: number, rows: number): void;
		/** Deletes the specified column.
		 * @param col An integer value specifying which column to delete.
		*/
		deleteColumn(col: number): void;
		/** Inserts a new column at the specified position.
		 * @param col An integer value specifying the position within the table's list of columns where the new column should be inserted.
		*/
		insertColumn(col: number): void;
		/** Deletes the specified row.
		 * @param row An integer value specifying which row to delete.
		*/
		deleteRow(row: number): void;
		/** Inserts a new row at the specified position.
		 * @param row Inserts a new row at the specified position.
		*/
		insertRow(row: number): void;
		/** Adds a new column to the table. */
		addColumn(): any;
		/** Adds a new row to the table. */
		addRow(): any;
		/** Gets a value indicating whether the user is allowed to scroll the table rows. */
		getScrollable(): boolean;
		/** Sets a value indicating whether the user is allowed to scroll the table rows. */
		setScrollable(value: boolean): void;
		/** Gets an object that specifies how to fill the caption bar. */
		getCaptionBackBrush(): any;
		/** Sets an object that specifies how to fill the caption bar. */
		setCaptionBackBrush(value: any): void;
		/** Gets the font used to render the table's caption text. */
		getCaptionFont(): MindFusion.Drawing.Font;
		/** Sets the font used to render the table's caption text. */
		setCaptionFont(value: MindFusion.Drawing.Font): void;
		/** Gets a value indicating whether styled text rendering is enabled. */
		getEnableStyledText(): boolean;
		/** Sets a value indicating whether styled text rendering is enabled. */
		setEnableStyledText(value: boolean): void;
		/** Gets a value indicating whether users are allowed to resize table columns. */
		getAllowResizeColumns(): boolean;
		/** Sets a value indicating whether users are allowed to resize table columns. */
		setAllowResizeColumns(value: boolean): void;
		/** Gets a value indicating whether users are allowed to resize table rows. */
		getAllowResizeRows(): boolean;
		/** Sets a value indicating whether users are allowed to resize table rows. */
		setAllowResizeRows(value: boolean): void;
	}
	/** SvgContent represents the markup code of an SVG drawing. */
	class SvgContent
	{
		/** Initializes a new instance of the SvgContent class. */
		constructor();
		/** Loads SVG code from the specified file.
		 * @param url A string specifying the SVG file location.
		*/
		parse(url: string): void;
		/** Loads SVG code from the specified string.
		 * @param svg A string containing the SVG markup code.
		*/
		parseSvg(svg: string): void;
	}
	/** SvgNode instances are diagram nodes that can render SVG drawings. */
	class SvgNode extends ShapeNode
	{
		/** Initializes a new instance of the SvgNode class with default values supplied from the specified Diagram.
		 * @param parent The Diagram from which to obtain default values for the node properties.
		*/
		constructor(parent: Diagram);
		/** Gets an SvgContent instance representing the SVG drawing rendered in this node. */
		getContent(): SvgContent;
		/** Sets an SvgContent instance representing the SVG drawing rendered in this node. */
		setContent(value: SvgContent): void;
	}
	/** ContainerNode instances are diagram nodes that can contain other nodes. */
	class ContainerNode extends DiagramNode
	{
		/** Initializes a new instance of the ContainerNode class with default values supplied from the specified Diagram.
		 * @param parent The Diagram from which to obtain default values for the node properties.
		*/
		constructor(parent: Diagram);
		/** Adds a node to this container.
		 * @param node The node that should be added to this container.
		*/
		add(node: DiagramNode): void;
		/** Removes a node from this container.
		 * @param node The node that should be removed from this container.
		*/
		remove(node: DiagramNode): void;
		/** Gets a value indicating whether child items should be clipped by container boundaries. */
		getClipChildren(): boolean;
		/** Sets a value indicating whether child items should be clipped by container boundaries. */
		setClipChildren(value: boolean): void;
		/** Gets the shape of the container's outline. */
		getShape(): SimpleShape;
		/** Sets the shape of the container's outline. */
		setShape(value: SimpleShape): void;
		/** Gets the height of the container's caption area. */
		getCaptionHeight(): number;
		/** Sets the height of the container's caption area. */
		setCaptionHeight(value: number): void;
		/** Resizes the container making it big enough to contain its child nodes.
		 * @param allowShrink true to allow setting smaller size than current one, or false otherwise.
		 * @param margin Specifies the size of margin space around child nodes.
		*/
		resizeToFitChildren(allowShrink: boolean, margin: number): void;
		/** Gets a value indicating whether users are allowed to fold this container. */
		getFoldable(): boolean;
		/** Sets a value indicating whether users are allowed to fold this container. */
		setFoldable(value: boolean): void;
		/** Gets a value indicating whether the container is folded. */
		getFolded(): boolean;
		/** Sets a value indicating whether the container is folded. */
		setFolded(value: boolean): void;
		/** Gets a value indicating whether users are allowed to add child nodes to this container. */
		getAllowAddChildren(): boolean;
		/** Sets a value indicating whether users are allowed to add child nodes to this container. */
		setAllowAddChildren(value: boolean): void;
		/** Gets a value indicating whether users are allowed to remove child nodes from the container. */
		getAllowRemoveChildren(): boolean;
		/** Sets a value indicating whether users are allowed to remove child nodes from the container. */
		setAllowRemoveChildren(value: boolean): void;
		/** Arranges the container's children using the specified layout algorithm.
		 * @param layout An instance of Layout -derived class representing the algorithm to apply.
		*/
		arrange(layout: MindFusion.Graphs.Layout): void;
	}
	/** A FreeFormNode collects all points from users' mouse or touch input and displays them as node's outline. */
	class FreeFormNode extends DiagramNode
	{
		/** Initializes a new instance of the FreeFormNode class.
		 * @param parent A Diagram instance whose default node attributes are copied to this node.
		*/
		constructor(parent: Diagram);
		/** Gets a value indicating whether the node's shape is closed. */
		getClosed(): boolean;
		/** Sets a value indicating whether the node's shape is closed. */
		setClosed(value: boolean): void;
		/** Gets the node's outline points. */
		getPoints(): Array<MindFusion.Drawing.Point>;
		/** Sets the node's outline points. */
		setPoints(value: Array<MindFusion.Drawing.Point>): void;
	}
	/** The Diagram class represents a flow diagram. */
	class Diagram extends MindFusion.Drawing.Canvas
	{
		/** Initializes a new instance of the Diagram class.
		 * @param element The Canvas DOM Element this Diagram is associated with.
		*/
		constructor(element: any);
		/** Creates and initializes a new Diagram associated with specified Canvas DOM element.
		 * @param element The Canvas DOM element that the Diagram should be attached to.
		 * @return A Diagram instance.
		*/
		static create(element: any): Diagram;
		/** Gets a Factory instance that lets you add programmatically new items to the diagram.
		 * @return A Factory instance
		*/
		getFactory(): Factory;
		/** Registers a single event listener with the Diagram.
		 * @param eventName The name of the event; a member of the Events class.
		 * @param handler Represents the method that will handle the event specified with eventName.
		*/
		addEventListener(eventName: string, handler: any): void;
		/** Removes a single event listener attached to the Diagram.
		 * @param eventName The name of the event; a member of the Events class.
		 * @param handler Represents the method that will handle the event specified with eventName.
		*/
		removeEventListener(eventName: string, handler: any): void;
		/** Gets a value indicating whether in-place editing of the text of objects is enabled. */
		getAllowInplaceEdit(): boolean;
		/** Sets a value indicating whether in-place editing of the text of objects is enabled. */
		setAllowInplaceEdit(value: boolean): void;
		/** Gets a value that specifies what action should be performed when the user hits the Del key. */
		getDelKeyAction(): DelKeyAction;
		/** Sets a value that specifies what action should be performed when the user hits the Del key. */
		setDelKeyAction(value: DelKeyAction): void;
		/** Gets The object used for painting the background. */
		getBackBrush(): any;
		/** Sets The object used for painting the background. */
		setBackBrush(value: any): void;
		/** Gets the default shape of shape nodes. */
		getDefaultShape(): Shape;
		/** Sets the default shape of shape nodes. */
		setDefaultShape(value: Shape): void;
		/** Gets an array of Shape objects used to replace FreeFormNode instances with ShapeNode ones when Behavior is set to LinkFreeShapes or DrawFreeShapes. */
		getFreeFormTargets(): Array<Shape>;
		/** Sets an array of Shape objects used to replace FreeFormNode instances with ShapeNode ones when Behavior is set to LinkFreeShapes or DrawFreeShapes. */
		setFreeFormTargets(value: Array<Shape>): void;
		/** Gets the maximum distance between first and last points of a FreeFormNode for which the node's outline is closed automatically. */
		getAutoCloseDistance(): number;
		/** Sets the maximum distance between first and last points of a FreeFormNode for which the node's outline is closed automatically. */
		setAutoCloseDistance(value: number): void;
		/** Gets the radius around dragged free-form adjustment handle in which other points of FreeFormNode are modified too. */
		getFreeFormAttractDistance(): number;
		/** Sets the radius around dragged free-form adjustment handle in which other points of FreeFormNode are modified too. */
		setFreeFormAttractDistance(value: number): void;
		/** Gets the default fill of shape nodes. */
		getShapeBrush(): any;
		/** Sets the default fill of shape nodes. */
		setShapeBrush(value: any): void;
		/** Gets the default fill of links. */
		getLinkBrush(): any;
		/** Sets the default fill of links. */
		setLinkBrush(value: any): void;
		/** Gets the initial shape assigned to new links. */
		getLinkShape(): LinkShape;
		/** Sets the initial shape assigned to new links. */
		setLinkShape(value: LinkShape): void;
		/** Gets the shape displayed as head of new links. */
		getLinkHeadShape(): Shape;
		/** Sets the shape displayed as head of new links. */
		setLinkHeadShape(value: Shape): void;
		/** Gets the shape displayed at the base of new links. */
		getLinkBaseShape(): Shape;
		/** Sets the shape displayed at the base of new links. */
		setLinkBaseShape(value: Shape): void;
		/** Gets the default size of arrowheads. */
		getLinkHeadShapeSize(): number;
		/** Sets the default size of arrowheads. */
		setLinkHeadShapeSize(value: number): void;
		/** Gets the default size of the base shape of new links. */
		getLinkBaseShapeSize(): number;
		/** Sets the default size of the base shape of new links. */
		setLinkBaseShapeSize(value: number): void;
		/** Gets a value indicating how the background image is positioned relatively to diagram's boundaries. */
		getBackgroundImageAlign(): ImageAlign;
		/** Sets a value indicating how the background image is positioned relatively to diagram's boundaries. */
		setBackgroundImageAlign(value: ImageAlign): void;
		/** Gets the URL of the Image painted as diagram's background. */
		getBackgroundImageUrl(): string;
		/** Sets the URL of the Image painted as diagram's background. */
		setBackgroundImageUrl(value: string): void;
		/** Gets the Base64-encoded data of the background image. */
		getBackgroundImageContent(): string;
		/** Sets the Base64-encoded data of the background image. */
		setBackgroundImageContent(value: string): void;
		/** Begins in-place editing of the specified object.
		 * @param item The Diagram element whose text should be edited.
		 * @param point A Point specifying where the in-place edit box should appear.
		*/
		beginEdit(item: any, point: MindFusion.Drawing.Point): void;
		/** Exits the in-place editing mode and either accepts or rejects the changes made to the item's text.
		 * @param accept true to accept changes made to text; false to reject them.
		*/
		endEdit(accept: boolean): void;
		/** Returns the array of all items in this diagram.
		 * @return Array of all DiagramItem instances in the diagram.
		*/
		getItems(): Array<DiagramItem>;
		/** Returns the array of all nodes in this diagram.
		 * @return Array of all DiagramNode instances in the diagram.
		*/
		getNodes(): Array<DiagramNode>;
		/** Returns the array of all links in this diagram.
		 * @return Array of all DiagramLink instances in the diagram.
		*/
		getLinks(): Array<DiagramLink>;
		/** Removes all items from the diagram. */
		clearAll(): void;
		/** Adds an item to the Diagram.
		 * @param item The item to add.
		*/
		addItem(item: DiagramItem): void;
		/** Removes the specified item from the Diagram.
		 * @param item The item to be removed.
		*/
		removeItem(item: DiagramItem): void;
		/** Returns an array of all diagram items found at the specified location.
		 * @param point A Point instance identifying a diagram location.
		 * @return Array of the DiagramItems found at the given location, or null if no items have been found. The items are sorted according to their Z-index.
		*/
		getItemsAt(point: MindFusion.Drawing.Point): Array<DiagramItem>;
		/** Returns an array of all DiagramNodes found at the specified location.
		 * @param point A Point instance identifying a diagram location.
		 * @return Array of the DiagramNodes found at the given location, or null if no nodes have been found. The returned nodes are sorted according to their Z-index.
		*/
		getNodesAt(point: MindFusion.Drawing.Point): Array<DiagramNode>;
		/** Returns an array of all DiagramLinks found at the specified location.
		 * @param point A Point instance identifying a diagram location.
		 * @return Array of the DiagramLinks found at the given location, or null if no links have been found. The returned links are sorted according to their Z-index.
		*/
		getLinksAt(point: MindFusion.Drawing.Point): Array<DiagramLink>;
		/** Finds and returns the topmost DiagramItem found at the specified location.
		 * @param point A Point instance identifying a diagram location.
		 * @return The topmost DiagramItem found at the given location or null if no DiagramItem has been found.
		*/
		getItemAt(point: MindFusion.Drawing.Point): DiagramItem;
		/** Finds and returns the topmost DiagramNode found at the specified location.
		 * @param point A Point instance identifying a diagram location.
		 * @return The topmost DiagramNode found at the given location or null if no DiagramNode has been found.
		*/
		getNodeAt(point: MindFusion.Drawing.Point): DiagramNode;
		/** Finds and returns the topmost DiagramLink found at the specified location.
		 * @param point A Point instance identifying a diagram location.
		 * @return The topmost DiagramLink found at the given location or null if no DiagramLink has been found.
		*/
		getLinkAt(point: MindFusion.Drawing.Point): DiagramLink;
		/** Returns the node nearest to the specified point.
		 * @param point A point in the diagram.
		 * @param maxDistance The maximum distance from the point at which to look for nodes.
		 * @param ignored A node that should be ignored.
		 * @return The DiagramNode nearest to the specified point.
		*/
		getNearestNode(point: MindFusion.Drawing.Point, maxDistance: number, ignored: DiagramNode): DiagramNode;
		/** Serializes the diagram into a JSON string.
		 * @return A string containing the diagram's JSON representation.
		*/
		toJson(): string;
		/** Deserializes the diagram from a JSON string.
		 * @param json A string created by the toJson method.
		*/
		fromJson(json: string): void;
		/** Saves the diagram to an XML file.
		 * @param url A URL specifying where the diagram's XML should be posted to.
		*/
		saveToXml(url: string): void;
		/** Loads the diagram from an XML file.
		 * @param fileUrl The URL of an XML file where the data should be read from.
		*/
		loadFromXml(fileUrl: string): void;
		/** Encodes the diagram contents into an XML or JSON string.
		 * @param format A member of the SaveToStringFormat enumeration.
		 * @return A string containing the diagram's serialized representation.
		*/
		saveToString(format: SaveToStringFormat): string;
		/** Loads diagram contents from specified XML or JSON string.
		 * @param str A string containing the serialized diagram contents.
		*/
		loadFromString(str: string): void;
		/** Gets a value indicating whether the diagram has changed since loading it. */
		getDirty(): boolean;
		/** Sets a value indicating whether the diagram has changed since loading it. */
		setDirty(value: boolean): void;
		/** Copies the current selection of items to the clipboard.
		 * @param systemClipboard true to copy to the system clipboard, or false otherwise. The default value is false.
		*/
		copyToClipboard(systemClipboard: boolean): void;
		/** Pastes diagram items from the clipboard.
		 * @param offsetX Horizontal offset of pasted items from their original positions.
		 * @param offsetY Vertical offset of pasted items from their original positions.
		 * @param systemClipboard true to paste from the system clipboard, or false otherwise. The default value is false.
		 * @param unconnectedLinks true to allow pasting arrows whose origin or destination node has not been copied; otherwise, false. The default value is false.
		*/
		pasteFromClipboard(offsetX: number, offsetY: number, systemClipboard: boolean, unconnectedLinks: boolean): void;
		/** Cuts the currently selected items to the clipboard.
		 * @param systemClipboard true to copy to the system clipboard, or false otherwise. The default value is false.
		*/
		cutToClipboard(systemClipboard: boolean): void;
		/** Gets the font for text displayed by diagram items. */
		getFont(): MindFusion.Drawing.Font;
		/** Sets the font for text displayed by diagram items. */
		setFont(value: MindFusion.Drawing.Font): void;
		/** Resizes the document scrollable area so that it fits all diagram items.
		 * @param margin Resizes the document scrollable area so that it fits all diagram items.
		*/
		resizeToFitItems(margin: number): void;
		/** Resize the document extents so that the specified item is contained within.
		 * @param item The item to be contained.
		*/
		resizeToFitItem(item: DiagramItem): void;
		/** Returns the smallest rectangle that bounds all diagram items.
		 * @return A Rect instance specifying the smallest rectangle that bounds all diagram items.
		*/
		getContentBounds(): MindFusion.Drawing.Rect;
		/** Scrolls the diagram to the specified point.
		 * @param x A number specifying the new horizontal scroll position in the current unit of measure.
		 * @param y A number specifying the new vertical scroll position in the current unit of measure.
		*/
		scrollTo(x: number, y: number): void;
		/** Gets the diagram's horizontal scroll position. */
		getScrollX(): number;
		/** Sets the diagram's horizontal scroll position. */
		setScrollX(value: number): void;
		/** Gets the diagram's vertical scroll position. */
		getScrollY(): number;
		/** Sets the diagram's vertical scroll position. */
		setScrollY(value: number): void;
		/** Returns the visible portion of the diagram area.
		 * @return A Rect instance specifying the viewport coordinates.
		*/
		getViewport(): MindFusion.Drawing.Rect;
		/** Sets the zoom factor, preserving the on-screen position of the specified diagram point.
		 * @param zoomFactor The new zoom factor.
		 * @param pivotPoint A Point instance specifying the zoom center.
		*/
		setZoomFactorPivot(zoomFactor: number, pivotPoint: MindFusion.Drawing.Point): void;
		/** Zooms and scrolls the view to fit the specified document rectangle in the Diagram's visible area.
		 * @param rect A Rect instance specifying the viewport position and size.
		*/
		zoomToRect(rect: MindFusion.Drawing.Rect): void;
		/** Zooms the view to fit the document contents in the Diagram client area. */
		zoomToFit(): void;
		/** Gets the default value for the Dynamic property of new links. */
		getDynamicLinks(): boolean;
		/** Sets the default value for the Dynamic property of new links. */
		setDynamicLinks(value: boolean): void;
		/** Gets the active diagram element.
		 * @return The active item; null if no item is active.
		*/
		getActiveItem(): DiagramItem;
		/** Gets how users can start modifying diagram items. */
		getModificationStart(): ModificationStart;
		/** Sets how users can start modifying diagram items. */
		setModificationStart(value: ModificationStart): void;
		/** Gets a value indicating whether links should avoid nodes by going the shortest path from their origin to their destination without crossing any other nodes. */
		getRouteLinks(): boolean;
		/** Sets a value indicating whether links should avoid nodes by going the shortest path from their origin to their destination without crossing any other nodes. */
		setRouteLinks(value: boolean): void;
		/** Gets the minimal distance between nodes and auto-routed links. */
		getRouteMargin(): number;
		/** Sets the minimal distance between nodes and auto-routed links. */
		setRouteMargin(value: number): void;
		/** Routes all links in the diagram in such a way they do not cross nodes. */
		routeAllLinks(): void;
		/** Gets a Selection instance that represents the selection of items in this diagram.
		 * @return An instance of the Selection class representing the current selection.
		*/
		getSelection(): Selection;
		/** Gets a value indicating whether multiple selected nodes can be resized simultaneously. */
		getAllowMultipleResize(): boolean;
		/** Sets a value indicating whether multiple selected nodes can be resized simultaneously. */
		setAllowMultipleResize(value: boolean): void;
		/** Gets a value indicating whether users are allowed to draw links that are not connected to any node. */
		getAllowUnconnectedLinks(): boolean;
		/** Sets a value indicating whether users are allowed to draw links that are not connected to any node. */
		setAllowUnconnectedLinks(value: boolean): void;
		/** Gets the default placement and orientation for links' text. */
		getLinkTextStyle(): LinkTextStyle;
		/** Sets the default placement and orientation for links' text. */
		setLinkTextStyle(value: LinkTextStyle): void;
		/** Gets the size of adjustment handles that appear around selected items. */
		getAdjustmentHandlesSize(): number;
		/** Sets the size of adjustment handles that appear around selected items. */
		setAdjustmentHandlesSize(value: number): void;
		/** Gets a value indicating whether adjustment handles are painted when they are disabled. */
		getShowDisabledHandles(): boolean;
		/** Sets a value indicating whether adjustment handles are painted when they are disabled. */
		setShowDisabledHandles(value: boolean): void;
		/** Gets a value indicating whether and when anchor point marks are displayed. */
		getShowAnchors(): ShowAnchors;
		/** Sets a value indicating whether and when anchor point marks are displayed. */
		setShowAnchors(value: ShowAnchors): void;
		/** Gets a value indicating how the control responds to user actions. */
		getBehavior(): Behavior;
		/** Sets a value indicating how the control responds to user actions. */
		setBehavior(value: Behavior): void;
		/** Gets a value indicating whether the alignment grid is visible. */
		getShowGrid(): boolean;
		/** Sets a value indicating whether the alignment grid is visible. */
		setShowGrid(value: boolean): void;
		/** Gets a value indicating whether the diagram items should be aligned to a grid. */
		getAlignToGrid(): boolean;
		/** Sets a value indicating whether the diagram items should be aligned to a grid. */
		setAlignToGrid(value: boolean): void;
		/** Gets the color of the grid points. */
		getGridColor(): string;
		/** Sets the color of the grid points. */
		setGridColor(value: string): void;
		/** Gets the horizontal distance between adjacent grid points. */
		getGridSizeX(): number;
		/** Sets the horizontal distance between adjacent grid points. */
		setGridSizeX(value: number): void;
		/** Gets the vertical distance between adjacent grid points. */
		getGridSizeY(): number;
		/** Sets the vertical distance between adjacent grid points. */
		setGridSizeY(value: number): void;
		/** Gets the horizontal offset of the first point of the alignment grid. */
		getGridOffsetX(): number;
		/** Sets the horizontal offset of the first point of the alignment grid. */
		setGridOffsetX(value: number): void;
		/** Gets the vertical offset of the first point of the alignment grid. */
		getGridOffsetY(): number;
		/** Sets the vertical offset of the first point of the alignment grid. */
		setGridOffsetY(value: number): void;
		/** Gets the visual style of the alignment grid. */
		getGridStyle(): GridStyle;
		/** Sets the visual style of the alignment grid. */
		setGridStyle(value: GridStyle): void;
		/** Gets the size of shapes used to represent grid points. */
		getGridPointSize(): number;
		/** Sets the size of shapes used to represent grid points. */
		setGridPointSize(value: number): void;
		/** Returns a point of the alignment grid nearest to the one passed as an argument.
		 * @param point A point specified in diagram coordinates.
		 * @return A point from the alignment grid.
		*/
		alignPointToGrid(point: MindFusion.Drawing.Point): MindFusion.Drawing.Point;
		/** Gets a value indicating whether the lane grid is visible. */
		getShowLaneGrid(): boolean;
		/** Sets a value indicating whether the lane grid is visible. */
		setShowLaneGrid(value: boolean): void;
		/** Gets a value indicating the link direction in which tree branches are expanded. */
		getExpandOnIncoming(): boolean;
		/** Sets a value indicating the link direction in which tree branches are expanded. */
		setExpandOnIncoming(value: boolean): void;
		/** Gets a value indicating whether newly created nodes can be collapsed and expanded by users. */
		getNodesExpandable(): boolean;
		/** Sets a value indicating whether newly created nodes can be collapsed and expanded by users. */
		setNodesExpandable(value: boolean): void;
		/** Gets the style associated with this diagram. */
		getStyle(): Style;
		/** Sets the style associated with this diagram. */
		setStyle(value: Style): void;
		/** Gets the theme associated with this diagram. */
		getTheme(): Theme;
		/** Sets the theme associated with this diagram. */
		setTheme(value: Theme): void;
		/** Gets custom data associated with this diagram. */
		getTag(): any;
		/** Sets custom data associated with this diagram. */
		setTag(value: any): void;
		/** Gets a value indicating whether virtual scroll mode is enabled. */
		getVirtualScroll(): boolean;
		/** Sets a value indicating whether virtual scroll mode is enabled. */
		setVirtualScroll(value: boolean): void;
		/** Gets the delay in milliseconds before a tooltip is shown. */
		getTooltipDelay(): number;
		/** Sets the delay in milliseconds before a tooltip is shown. */
		setTooltipDelay(value: number): void;
		/** Gets a value specifying how far from a link a click is still considered a hit. */
		getLinkHitDistance(): number;
		/** Sets a value specifying how far from a link a click is still considered a hit. */
		setLinkHitDistance(value: number): void;
		/** Gets a value indicating how to render the intersection points where two links cross each other. */
		getLinkCrossings(): LinkCrossings;
		/** Sets a value indicating how to render the intersection points where two links cross each other. */
		setLinkCrossings(value: LinkCrossings): void;
		/** Gets the radius length of decorations displayed at link intersection points. */
		getCrossingRadius(): number;
		/** Sets the radius length of decorations displayed at link intersection points. */
		setCrossingRadius(value: number): void;
		/** Gets a value indicating whether the joints between segments of Polyline and Cascading links should be rounded. */
		getRoundedLinks(): boolean;
		/** Sets a value indicating whether the joints between segments of Polyline and Cascading links should be rounded. */
		setRoundedLinks(value: boolean): void;
		/** Gets the radius of joint arcs of rounded links' segments. */
		getRoundedLinksRadius(): number;
		/** Sets the radius of joint arcs of rounded links' segments. */
		setRoundedLinksRadius(value: number): void;
		/** Gets a value indicating whether the document area should be resized automatically so it fits the diagram contents. */
		getAutoResize(): AutoResize;
		/** Sets a value indicating whether the document area should be resized automatically so it fits the diagram contents. */
		setAutoResize(value: AutoResize): void;
		/** Gets a value indicating whether auto scrolling of the document area is enabled. */
		getAutoScroll(): boolean;
		/** Sets a value indicating whether auto scrolling of the document area is enabled. */
		setAutoScroll(value: boolean): void;
		/** Gets the size of the auto scroll zone near the edges of the control. */
		getScrollZoneSize(): number;
		/** Sets the size of the auto scroll zone near the edges of the control. */
		setScrollZoneSize(value: number): void;
		/** Gets the amount by which to auto-scroll the view when the mouse leaves the view boundaries while drawing. */
		getAutoScrollAmount(): number;
		/** Sets the amount by which to auto-scroll the view when the mouse leaves the view boundaries while drawing. */
		setAutoScrollAmount(value: number): void;
		/** Gets a value indicating whether the magnifier tool is currently enabled. */
		getMagnifierEnabled(): boolean;
		/** Sets a value indicating whether the magnifier tool is currently enabled. */
		setMagnifierEnabled(value: boolean): void;
		/** Gets the zoom factor of the magnifier tool. */
		getMagnifierFactor(): number;
		/** Sets the zoom factor of the magnifier tool. */
		setMagnifierFactor(value: number): void;
		/** Gets the width of the magnifier tool. */
		getMagnifierWidth(): number;
		/** Sets the width of the magnifier tool. */
		setMagnifierWidth(value: number): void;
		/** Gets the height of the magnifier tool. */
		getMagnifierHeight(): number;
		/** Sets the height of the magnifier tool. */
		setMagnifierHeight(value: number): void;
		/** Gets the thickness of the magnifier frame. */
		getMagnifierFrameThickness(): number;
		/** Sets the thickness of the magnifier frame. */
		setMagnifierFrameThickness(value: number): void;
		/** Gets a value indicating whether to enhance the effect of a magnifier lense by using a gradient shading. */
		getMagnifierShading(): boolean;
		/** Sets a value indicating whether to enhance the effect of a magnifier lense by using a gradient shading. */
		setMagnifierShading(value: boolean): void;
		/** Gets a reference to the geometric shape definition of the magnifier tool. */
		getMagnifierShape(): Shape;
		/** Sets a reference to the geometric shape definition of the magnifier tool. */
		setMagnifierShape(value: Shape): void;
		/** Gets the color of the magnifier tool's frame. */
		getMagnifierFrameColor(): string;
		/** Sets the color of the magnifier tool's frame. */
		setMagnifierFrameColor(value: string): void;
		/** Gets the color of the magnifier tool's secondary frame. */
		getMagnifierSecondaryFrameColor(): string;
		/** Sets the color of the magnifier tool's secondary frame. */
		setMagnifierSecondaryFrameColor(value: string): void;
		/** Gets an object that allows changing the function of keyboard modifier keys such as Ctrl and Alt.
		 * @return An instance of the ModifierKeyActions class.
		*/
		getModifierKeyActions(): ModifierKeyActions;
		/** Gets a combination of flags that specify what actions can be performed via the left mouse button. */
		getLeftButtonActions(): MouseButtonActions;
		/** Sets a combination of flags that specify what actions can be performed via the left mouse button. */
		setLeftButtonActions(value: MouseButtonActions): void;
		/** Gets a combination of flags that specify what actions can be performed via the middle mouse button. */
		getMiddleButtonActions(): MouseButtonActions;
		/** Sets a combination of flags that specify what actions can be performed via the middle mouse button. */
		setMiddleButtonActions(value: MouseButtonActions): void;
		/** Gets a combination of flags that specify what actions can be performed via the right mouse button. */
		getRightButtonActions(): MouseButtonActions;
		/** Sets a combination of flags that specify what actions can be performed via the right mouse button. */
		setRightButtonActions(value: MouseButtonActions): void;
		/** Gets true if undo is enabled, otherwise false. */
		getUndoEnabled(): boolean;
		/** Sets true if undo is enabled, otherwise false. */
		setUndoEnabled(value: boolean): void;
		/** Gets the horizontal offset of diagram items' shadows. */
		getShadowOffsetX(): number;
		/** Sets the horizontal offset of diagram items' shadows. */
		setShadowOffsetX(value: number): void;
		/** Gets the vertical offset of diagram items' shadows. */
		getShadowOffsetY(): number;
		/** Sets the vertical offset of diagram items' shadows. */
		setShadowOffsetY(value: number): void;
		/** Gets a value specifying how diagram items' shadows should be rendered. */
		getShadowsStyle(): ShadowsStyle;
		/** Sets a value specifying how diagram items' shadows should be rendered. */
		setShadowsStyle(value: ShadowsStyle): void;
		/** Gets the location of a shape library file containing custom shape definitions. */
		getShapeLibraryLocation(): string;
		/** Sets the location of a shape library file containing custom shape definitions. */
		setShapeLibraryLocation(value: string): void;
		/** Rearranges link labels whose AutoArrange property is enabled. */
		arrangeLinkLabels(): void;
		/** Undoes an action saved in the command history. */
		undo(): void;
		/** Executes again an action saved in the command history. */
		redo(): void;
		/** Gets an array containing all effects applied to the nodes of this diagram.
		 * @return An array containing all node effects.
		*/
		getNodeEffects(): Array<NodeEffect>;
		/** Arranges the diagram using the specified layout algorithm.
		 * @param layout An instance of Layout -derived class representing the algorithm to apply.
		*/
		arrange(layout: MindFusion.Graphs.Layout): void;
	}
	/** Identifies the adjustment handles of a node. */
	enum AdjustmentHandles
	{
		/** Specifies that none of the selection handles can be used to modify a node. */
		None = 0,
		/** The top-left handle is enabled and can be used to resize the node. */
		ResizeTopLeft = 1,
		/** The top-right handle is enabled and can be used to resize the node. */
		ResizeTopRight = 2,
		/** The bottom-right handle is enabled and can be used to resize the node. */
		ResizeBottomRight = 4,
		/** The bottom-left handle is enabled and can be used to resize the node. */
		ResizeBottomLeft = 8,
		/** The top-center handle is enabled and can be used to resize the node vertically. */
		ResizeTopCenter = 16,
		/** The middle-right handle is enabled and can be used to resize the node horizontally. */
		ResizeMiddleRight = 32,
		/** The bottom-center handle is enabled and can be used to resize the node vertically. */
		ResizeBottomCenter = 64,
		/** The middle-left handle is enabled and can be used to resize the node horizontally. */
		ResizeMiddleLeft = 128,
		/** The center selection handle is enabled and can be used to move the node. */
		Move = 256,
		/** The rotation handle is enabled and can be used to rotate the node. */
		Rotate = 512,
		/** All selection handles are enabled and can be used to modify the node. */
		All = 1023
	}
	/** Defines values that specify how the component responds to actions performed by the user. */
	enum Behavior
	{
		/** Objects can be selected and modified. New objects cannot be created. */
		Modify = 0,
		/** Drawing with the mouse creates ShapeNode instances. */
		DrawShapes = 1,
		/** Drawing started over a node creates a DiagramLink. Otherwise a lasso rectangle is displayed allowing the selection of items. */
		DrawLinks = 2,
		/** A mode that is suitable for creating flowcharts and process diagrams. Drawing over empty document area creates a ShapeNode instance. Drawing started over a node creates a DiagramLink. */
		LinkShapes = 3,
		/** A mode that is suitable for creating entity-relationship diagrams. Drawing over empty document area creates a TableNode instance. Drawing started over a node creates a DiagramLink. */
		LinkTables = 4,
		/** Drawing with the mouse creates TableNode instances. */
		DrawTables = 5,
		/** The control ignores users actions with the mouse, but raises the appropriate mouse events. This mode allows applications to implement their own mouse-drawing behavior, disabling the default response to users actions. */
		DoNothing = 8,
		/** Drawing with the mouse creates instances of the type assigned to CustomNodeType. */
		Custom = 9,
		/** Drawing with the mouse creates ContainerNode instances. */
		DrawContainers = 10,
		/** Drawing over empty document area creates a ContainerNode instance. Drawing started over a node creates a DiagramLink. */
		LinkContainers = 11,
		/** Dragging with depressed mouse button pans the view. */
		Pan = 12,
		/** Drawing with the mouse creates SvgNode instances. */
		DrawSvgNodes = 15,
		/** Drawing over empty document area creates an SvgNode instance. Drawing started over a node creates a DiagramLink. */
		LinkSvgNodes = 16,
		/** Allow only selection of existing items. Modifying them or drawing new ones is disabled. */
		SelectOnly = 17
	}
	/** Specifies whether links should connect to a node or its rows. */
	enum ConnectionStyle
	{
		/** Links should connect to the table node when drawn interactively. */
		Node = 0,
		/** Links should connect to one of the table's rows when drawn interactively. */
		Rows = 1
	}
	/** Specifies the type of action performed when the user presses the DEL key. */
	enum DelKeyAction
	{
		/** Indicates that nothing happens. */
		None = 0,
		/** Indicates that only the ActiveItem is deleted. */
		DeleteActiveItem = 1,
		/** Indicates that all selected items are deleted. */
		DeleteSelectedItems = 2
	}
	/** Enumerates possible shadows-drawing styles. */
	enum ShadowsStyle
	{
		/** There are no shadows drawn. */
		None = 0,
		/** All shadows are drawn at the lowest z-level, and appear to be on one level. */
		OneLevel = 1,
		/** Every shadows is drawn just under its object, possibly covering other objects. */
		ZOrder = 2
	}
	/** Defines the possible values for Shape property of tables and containers. */
	enum SimpleShape
	{
		/** Node's shape is a rectangle. */
		Rectangle = 0,
		/** Node's shape is a rounded rectangle. */
		RoundedRectangle = 1
	}
	/** Specifies the style of the cells' frame lines. */
	enum CellFrameStyle
	{
		/** Table cells have no border. */
		None = 0,
		/** The border of table cells is a simple line. */
		Simple = 1,
		/** The border has 3D appearance. */
		System3D = 2
	}
	/** Identifies the visual style of frames and handles drawn around selected nodes. */
	enum HandlesStyle
	{
		/** There is no visible difference between selected and unselected node. */
		Invisible = 0,
		/** If selected, the node is drawn with square modification handles. */
		SquareHandles = 1,
		/** If selected, a node is drawn with a dashed frame. The frame enables resizing the node. The center of the node allows moving it and the edge area enables creating links. */
		DashFrame = 2,
		/** If selected, the item is drawn with hatched frame. Modifications can be done as with DashFrame. */
		HatchFrame = 3,
		/** If selected, a node is drawn with both hatched frame and modification handles. The frame enable moving the node, and the handles enable resizing. Links are created from any point of the interior. */
		HatchHandles = 4,
		/** Looks like HatchHandles, but allows moving the node from the interior area. Links are created from the points near the edge. */
		HatchHandles2 = 5,
		/** Behaves like HatchHandles2, but paints the selection frame using a denser brush pattern. */
		HatchHandles3 = 6,
		/** If a node is selected, it can be only moved. Best used with ModificationStart set to AutoHandles. */
		MoveOnly = 7,
		/** Any point of the interior of a node enables moving the node, except a small area in the center that allows creating links. Best used with ModificationStart set to AutoHandles. */
		EasyMove = 8,
		/** Square resize handles are drawn around a selected node. There isn't a move handle in the center as with the SquareHandles style, but nodes can be moved by dragging their interior or caption areas. Links can be created by drawing from near the edges of a node. */
		SquareHandles2 = 9,
		/** The control raises the drawAdjustmentHandles and hitTestAdjustmentHandles events to let your application perform custom drawing and hit testing of selection handles. */
		Custom = 10,
		/** There aren't any selection handles displayed. The selected node can be only moved, but not resized. */
		InvisibleMove = 11,
		/** Corner resize handles are round, remaining handles are square. */
		RoundAndSquare = 12,
		/** Corner resize handles are round, remaining handles are square. In addition, there is a dashed frame drawn around selected nodes. */
		RoundAndSquare2 = 13
	}
	/** Specifies available styles for the segments of links. */
	enum LinkShape
	{
		/** The segments of a link are Bézier curves. */
		Bezier = 0,
		/** The segments of a link are straight lines. */
		Polyline = 1,
		/** The segments of a link are alternating horizontal and vertical lines, orthogonal to each other. */
		Cascading = 2
	}
	/** Specifies the position and alignment of links' labels. */
	enum LinkTextStyle
	{
		/** The text is displayed horizontally above the middle link segment or control point, depending on whether there are an odd or even number of segments. */
		Center = 0,
		/** The text is displayed rotated at the same angle as the segment where the text is placed. A long enough segment from the middle link segments is chosen for that purpose. */
		Rotate = 1,
		/** The text follows the longest link segment and is displayed centered at the segment's middle point. */
		OverLongestSegment = 2,
		/** The label text starts from the first point of the link and follows the path defined by the link segments. This style is useful for displaying long text. */
		Follow = 3,
		/** The text is displayed horizontally above the middle link segment. If there are an even number of segments, the label is drawn over the longer from the two segments adjacent to the middle control point. */
		MiddleSegment = 4,
		/** The text is displayed rotated at the same angle as the segment where the text is placed. A long enough segment from the middle link segments is chosen for that purpose. */
		MiddleSegmentRotated = 5
	}
	/** Specifies what actions can be associated with the middle and right mouse buttons. */
	enum MouseButtonActions
	{
		/** Do not associate any action with the button. */
		None = 0,
		/** Pans the view if the mouse is dragged while the button is pressed down. */
		Pan = 1,
		/** Cancels the current drawing operation. */
		Cancel = 2,
		/** Starts a multiple selection operation. */
		Select = 4,
		/** Draw new items or modify existing items. */
		Draw = 8,
		/** Magnifies the items under the mouse while the button is pressed down. */
		Magnify = 16
	}
	/** Specifies the alignment of text relative to its layout rectangle. */
	enum Alignment
	{
		/** The text is drawn in the near corner of the layout rectangle. */
		Near = 0,
		/** The text is drawn in the center of the layout rectangle. */
		Center = 1,
		/** The text is drawn in the far corner of the layout rectangle. */
		Far = 2
	}
	/** Specifies general layout orientation. */
	enum Orientation
	{
		/** Choose orientation automatically. */
		Auto = 0,
		/** Specifies horizonal orientation. */
		Horizontal = 1,
		/** Specifies vertical orientation. */
		Vertical = 2
	}
	/** Defines values that indicate how to render link intersection points. */
	enum LinkCrossings
	{
		/** No special indication for link intersection points. */
		Straight = 0,
		/** An arc is drawn at the intersection point of two links. It connects the segments of the link at higher Z position and goes over the link at lower Z. */
		Arcs = 1,
		/** The intersection segments of links at lower Z position are cut by links at higher Z position. */
		Cut = 2
	}
	/** Specifies how the user can start modifying an item. */
	enum ModificationStart
	{
		/** Only selected objects can be modified. */
		SelectedOnly = 0,
		/** Adjustment handles appear automatically around the object under mouse pointer letting users start modification without selecting it first. */
		AutoHandles = 1
	}
	/** Defines in which directions automatic resizing can enlarge the diagram scrollable area. */
	enum AutoResize
	{
		/** Do not enlarge the diagram area automatically. */
		None = 0,
		/** Enlarge the diagram area to the right and down if an item is moved outside the boundaries in these directions. */
		RightAndDown = 1,
		/** Enlarge the diagram area in any direction if an item is moved outside the boundaries. */
		AllDirections = 2
	}
	/** Defines the actions that can be assigned to a modifier key such as CTRL or ALT. */
	enum ModifierKeyAction
	{
		/** Specifies that a modifier key does not have any specific function assigned to it. */
		None = 0,
		/** Pan the view if the mouse is dragged while the modifier key is pressed down. */
		Pan = 1,
		/** Start drawing a selection rectangle if the mouse is dragged while a modifier key is pressed down. Toggle the selection if an item is clicked while the key is down. */
		Select = 2,
		/** While the modifier key is pressed down, dragging the mouse starts creating a new item or drawing a selection rectangle instead of modifying a selected item. Otherwise, dragging the mouse could start modification of the selected item. */
		OverrideBehavior = 3,
		/** Magnifies the diagram objects under the mouse while the modifier key is pressed down. */
		Magnify = 4
	}
	/** Specifies in what format to save the diagram when generating a string using the saveToString method. */
	enum SaveToStringFormat
	{
		/** Indicates JSON format. */
		Json = 0,
		/** Indicates XML format. */
		Xml = 1
	}
	/** Maps keyboard modifier keys to special actions in MindFusion.Diagramming such as panning and drawing selection rectangle. */
	class ModifierKeyActions
	{
		/** Gets the action triggered by the CTRL key. */
		getControl(): ModifierKeyAction;
		/** Sets the action triggered by the CTRL key. */
		setControl(value: ModifierKeyAction): void;
		/** Gets the action triggered by the SHIFT key. */
		getShift(): ModifierKeyAction;
		/** Sets the action triggered by the SHIFT key. */
		setShift(value: ModifierKeyAction): void;
		/** Gets the action triggered by the ALT key. */
		getAlt(): ModifierKeyAction;
		/** Sets the action triggered by the ALT key. */
		setAlt(value: ModifierKeyAction): void;
	}
	class XmlPersistContext
	{
	}
	/** Provides shortcut methods for creating and adding instances of the standard item types. */
	class Factory
	{
		/** Creates a new ShapeNode instance and adds it to the nodes collection of the underlying diagram.
		 * @param x The x-coordinate of the upper-left corner of the new node.
		 * @param y The y-coordinate of the upper-left corner of the new node.
		 * @param width The width of the new node.
		 * @param height The height of the new node.
		 * @return The newly created ShapeNode instance.
		*/
		createShapeNode(x: number, y: number, width: number, height: number): ShapeNode;
		/** Creates a new TableNode instance and adds it to the nodes collection of the underlying diagram.
		 * @param x The x-coordinate of the upper-left corner of the new node.
		 * @param y The y-coordinate of the upper-left corner of the new node.
		 * @param width The width of the new node.
		 * @param height The height of the new node.
		 * @return The newly created TableNode instance.
		*/
		createTableNode(x: number, y: number, width: number, height: number): TableNode;
		/** Creates a new ContainerNode instance and adds it to the nodes collection of the underlying diagram.
		 * @param x The x-coordinate of the upper-left corner of the new node.
		 * @param y The y-coordinate of the upper-left corner of the new node.
		 * @param width The width of the new node.
		 * @param height The height of the new node.
		 * @return The newly created ContainerNode instance.
		*/
		createContainerNode(x: number, y: number, width: number, height: number): ContainerNode;
		/** Creates a new SvgNode instance and adds it to the nodes collection of the underlying diagram.
		 * @param x The x-coordinate of the upper-left corner of the new node.
		 * @param y The y-coordinate of the upper-left corner of the new node.
		 * @param width The width of the new node.
		 * @param height The height of the new node.
		 * @return The newly created SvgNode instance.
		*/
		createSvgNode(x: number, y: number, width: number, height: number): SvgNode;
		/** Creates a new DiagramLink instance between the specified nodes and adds it to the links collection of the underlying diagram.
		 * @param origin The origin node.
		 * @param destination The destination node.
		 * @return The newly created DiagramLink instance.
		*/
		createDiagramLink(origin: DiagramNode, destination: DiagramNode): DiagramLink;
	}
	/** Represents a set of appearance properties whose values can be inherited from parent objects if not set locally for an item. */
	class Style
	{
		/** Initializes a new instance of the Style class. */
		constructor();
		/** Gets the brush used to fill the interior of diagram items. */
		getBrush(): any;
		/** Sets the brush used to fill the interior of diagram items. */
		setBrush(value: any): void;
		/** Gets the brush used to fill the diagram background. */
		getBackBrush(): any;
		/** Sets the brush used to fill the diagram background. */
		setBackBrush(value: any): void;
		/** Gets the color used to stroke the frame of diagram items. */
		getStroke(): string;
		/** Sets the color used to stroke the frame of diagram items. */
		setStroke(value: string): void;
		/** Gets the line width applied when stroking the frame of diagram items. */
		getStrokeThickness(): number;
		/** Sets the line width applied when stroking the frame of diagram items. */
		setStrokeThickness(value: number): void;
		/** Gets the line dash pattern applied when stroking the frame of diagram items. */
		getStrokeDashStyle(): MindFusion.Drawing.DashStyle;
		/** Sets the line dash pattern applied when stroking the frame of diagram items. */
		setStrokeDashStyle(value: MindFusion.Drawing.DashStyle): void;
		/** Gets the color used to draw text of diagram items. */
		getTextColor(): string;
		/** Sets the color used to draw text of diagram items. */
		setTextColor(value: string): void;
		/** Gets the name of the font used to draw text of diagram items. */
		getFontName(): string;
		/** Sets the name of the font used to draw text of diagram items. */
		setFontName(value: string): void;
		/** Gets the size of the font used to draw text of diagram items. */
		getFontSize(): number;
		/** Sets the size of the font used to draw text of diagram items. */
		setFontSize(value: number): void;
		/** Gets the style of the font used to draw text of diagram items. */
		getFontStyle(): MindFusion.Drawing.FontStyle;
		/** Sets the style of the font used to draw text of diagram items. */
		setFontStyle(value: MindFusion.Drawing.FontStyle): void;
		/** Gets the color used to draw shadows of diagram items. */
		getShadowColor(): string;
		/** Sets the color used to draw shadows of diagram items. */
		setShadowColor(value: string): void;
		/** Gets a list containing all effects applied to the nodes of this diagram. */
		getNodeEffects(): Array<NodeEffect>;
		/** Sets a list containing all effects applied to the nodes of this diagram. */
		setNodeEffects(value: Array<NodeEffect>): void;
	}
	/** Represents a set of Style objects whose properties are used to render items of a specific type in the current diagram. */
	class Theme
	{
		/** Initializes a new instance of the Theme class. */
		constructor();
		/** A dictionary object that maps item type identifiers to Style objects. */
		styles: any;
	}
	/** Represents geometric shapes defined via series of arc, line and Bezier segments. */
	class Shape
	{
		/** Gets the id of this Shape.
		 * @return The id.
		*/
		getId(): string;
		/** Returns a reference to the shape with the specified string identifier.
		 * @param id The identifier of the shape to return.
		 * @return A reference to the Shape with the specified identifier or a null if there is no such shape.
		*/
		static fromId(id: string): Shape;
	}
	/** Represents a label displayed by a DiagramLink. New labels can be added to a link by calling its addLabel method. */
	class LinkLabel
	{
		/** Initializes a new instance of the LinkLabel class.
		 * @param link The DiagramLink that displays this label.
		 * @param text The label's text.
		*/
		constructor(link: DiagramLink, text: string);
		/** Positions this label relatively to the specified link segment.
		 * @param segment The segment index.
		 * @param dx Horizontal offset from the segment center.
		 * @param dy Vertical offset from the segment center.
		*/
		setSegmentPosition(segment: number, dx: number, dy: number): void;
		/** Positions this label relatively to the specified control point.
		 * @param controlPoint The control point index.
		 * @param dx Horizontal offset from the control point.
		 * @param dy Vertical offset from the control point.
		*/
		setControlPointPosition(controlPoint: number, dx: number, dy: number): void;
		/** Positions this label relatively to the link length.
		 * @param lengthFactor A value between 0 and 1 specifying the position of the label relatively to the link's length.
		*/
		setLinkLengthPosition(lengthFactor: number): void;
		/** Gets a value indicating whether the label can be auto arranged. */
		getAutoArrange(): boolean;
		/** Sets a value indicating whether the label can be auto arranged. */
		setAutoArrange(value: boolean): void;
		/** Gets a string specifying the color of this label's text. */
		getTextColor(): string;
		/** Sets a string specifying the color of this label's text. */
		setTextColor(value: string): void;
		/** Gets the font used to render this label's text. */
		getFont(): MindFusion.Drawing.Font;
		/** Sets the font used to render this label's text. */
		setFont(value: MindFusion.Drawing.Font): void;
		/** Gets the label's text. */
		getText(): string;
		/** Sets the label's text. */
		setText(value: string): void;
		/** Gets the label's horizontal alignment. */
		getHorizontalAlign(): Alignment;
		/** Sets the label's horizontal alignment. */
		setHorizontalAlign(value: Alignment): void;
		/** Gets the label's vertical alignment. */
		getVerticalAlign(): Alignment;
		/** Sets the label's vertical alignment. */
		setVerticalAlign(value: Alignment): void;
		/** Gets the label's margin. */
		getMargin(): MindFusion.Drawing.Thickness;
		/** Sets the label's margin. */
		setMargin(value: MindFusion.Drawing.Thickness): void;
		/** Gets the brush used to draw the label's background. */
		getBrush(): any;
		/** Sets the brush used to draw the label's background. */
		setBrush(value: any): void;
	}
	/** Represents a set of anchor points, which specify the exact locations where links are allowed to connect to nodes. */
	class AnchorPattern
	{
		/** Initializes a new instance of the AnchorPattern class.
		 * @param points Contains the initial set of AnchorPoint instances for the new pattern.
		 * @param patternId A unique identifier for this anchor pattern.
		*/
		constructor(points: Array<AnchorPoint>, patternId?: string);
		/** Gets the collection of anchor points in this pattern. */
		getPoints(): Array<AnchorPoint>;
		/** Sets the collection of anchor points in this pattern. */
		setPoints(value: Array<AnchorPoint>): void;
		/** Gets the AnchorPattern's unique identifier.
		 * @return The AnchorPattern id.
		*/
		getId(): string;
		/** Returns a reference to the anchor pattern with the specified string identifier.
		 * @param id A string identifying an AnchorPattern instance.
		 * @return The AnchorPattern object whose Id is equal to the id parameter.
		*/
		static fromId(id: string): AnchorPattern;
		/** Incoming links can connect with the top and left middle points; outgoing links can start from the right and bottom middle points. */
		static decision2In2Out: AnchorPattern;
		/** Incoming links connect to the top middle point; outgoing links can start from the other middle points. */
		static decision1In3Out: AnchorPattern;
		/** The middle point of a node's bounding rectangle left side is anchor for incoming links; that on the right side - for outgoing ones. */
		static leftInRightOut: AnchorPattern;
		/** The middle point of a node's bounding rectangle top side is anchor for incoming links; that on the bottom - for outgoing ones. */
		static topInBottomOut: AnchorPattern;
	}
	/** Specifies the position and alignment of a picture in a node, or that of the background image. */
	enum ImageAlign
	{
		/** The image is centered in the node or diagram. */
		Center = 0,
		/** The image is resized to fit the size of the object or the component's client area. */
		Fit = 1,
		/** The image is stretched to fill the object or the component's client area. */
		Stretch = 2,
		/** The image is tiled to cover the node or the diagram. */
		Tile = 3,
		/** The image is aligned to the top left corner of the node or the diagram. */
		TopLeft = 4,
		/** The image is aligned to the bottom left corner of the node or the diagram. */
		BottomLeft = 5,
		/** The image is aligned to the top right corner of the node or the diagram. */
		TopRight = 6,
		/** The image is aligned to the bottom right corner of the node or the diagram. */
		BottomRight = 7,
		/** The image is centered horizontally and aligned to the top side. */
		TopCenter = 8,
		/** The image is centered horizontally and aligned to the bottom side. */
		BottomCenter = 9,
		/** The image is centered vertically and aligned to the left-hand side. */
		MiddleLeft = 10,
		/** The image is centered vertically and aligned to the right-hand side. */
		MiddleRight = 11
	}
	/** Specifies how the ResizeToFitText method should resize a node. */
	enum FitSize
	{
		/** The original width of the node should remain intact. */
		KeepWidth = 0,
		/** The original height of the node should remain intact. */
		KeepHeight = 1,
		/** Allow changing both the width and height of a node, but keep the original width/height ratio if possible. */
		KeepRatio = 2
	}
	/** Defines values that specify the visual style of the alignment grid. */
	enum GridStyle
	{
		/** The grid is painted as a matrix of points. */
		Points = 0,
		/** The grid is represented as a series of crossing horizontal and vertical lines. */
		Lines = 1,
		/** The grid is painted as a matrix of crosses. */
		Crosses = 2
	}
	/** Specifies how table columns' width is set. */
	enum ColumnStyle
	{
		/** The column has fixed unchangeable width. */
		FixedWidth = 0,
		/** The column's width changes when the table is resized. */
		AutoWidth = 1
	}
	/** Represents a row of a TableNode. */
	class Row
	{
		height: number;
	}
	/** Represents a column of a TableNode. */
	class Column
	{
		width: number;
		columnStyle: ColumnStyle;
	}
	/** Specifies the visual style of anchor point marks. */
	enum MarkStyle
	{
		/** No visual indication for the anchor point. */
		None = 0,
		/** Anchor point marked with a cross. */
		Cross = 1,
		/** Anchor point marked with an 'X'. */
		X = 2,
		/** Anchor point marked with a circle. */
		Circle = 3,
		/** Anchor point marked with a rectangle. */
		Rectangle = 4
	}
	/** Specifies when anchors points should be displayed. */
	enum ShowAnchors
	{
		/** Anchor point marks are always painted. */
		Always = 0,
		/** Anchor point marks are never painted. */
		Never = 1,
		/** Anchor point marks are shown for the node under the mouse cursor. */
		Auto = 2,
		/** Anchor point marks are painted for the selected node. */
		Selected = 4
	}
	/** Represents a location in a node to which links are allowed to connect. */
	class AnchorPoint
	{
		/** Initializes a new instance of the AnchorPoint class.
		 * @param x The horizontal position of the anchor point expressed as percentage of node's width.
		 * @param y The vertical position of the anchor point expressed as percentage of node's height.
		 * @param allowIncoming Specifies whether incoming links can anchor to this point.
		 * @param allowOutgoing Specifies whether outgoing links can anchor to this point.
		 * @param style Defines how the anchor point is marked visually.
		 * @param color Defines the color with which the anchor mark is painted.
		 * @param size Defines the size of the anchor mark.
		*/
		constructor(x: number, y: number, allowIncoming: boolean, allowOutgoing: boolean, style?: MarkStyle, color?: string, size?: number);
		/** Gets the horizontal position of this point expressed as percentage of a node's width. */
		getX(): number;
		/** Sets the horizontal position of this point expressed as percentage of a node's width. */
		setX(value: number): void;
		/** Gets the vertical position of this point expressed as percentage of a node's height. */
		getY(): number;
		/** Sets the vertical position of this point expressed as percentage of a node's height. */
		setY(value: number): void;
		/** Gets the column index of a cell with which this anchor point is associated. */
		getColumn(): number;
		/** Sets the column index of a cell with which this anchor point is associated. */
		setColumn(value: number): void;
		/** Gets whether incoming links can be connected to this point. */
		getAllowIncoming(): boolean;
		/** Sets whether incoming links can be connected to this point. */
		setAllowIncoming(value: boolean): void;
		/** Gets whether this point accepts outgoing connections. */
		getAllowOutgoing(): boolean;
		/** Sets whether this point accepts outgoing connections. */
		setAllowOutgoing(value: boolean): void;
		/** Gets the appearance of the anchor point mark. */
		getMarkStyle(): MarkStyle;
		/** Sets the appearance of the anchor point mark. */
		setMarkStyle(value: MarkStyle): void;
		/** Gets the color of the anchor point mark. */
		getColor(): string;
		/** Sets the color of the anchor point mark. */
		setColor(value: string): void;
		/** Gets user-defined data associated with the anchor point. */
		getTag(): any;
		/** Sets user-defined data associated with the anchor point. */
		setTag(value: any): void;
		/** Gets tooltip text that should be displayed when the mouse hovers over an anchor point mark. */
		getToolTip(): string;
		/** Sets tooltip text that should be displayed when the mouse hovers over an anchor point mark. */
		setToolTip(value: string): void;
		/** Gets the size of the anchor point mark. */
		getSize(): number;
		/** Sets the size of the anchor point mark. */
		setSize(value: number): void;
	}
	/** Represents the base class of all visual effects that can be applied to the nodes in a Diagram. */
	class NodeEffect
	{
	}
	/** Represents a glass-like visual effect. */
	class GlassEffect extends NodeEffect
	{
		/** Initializes a new instance of the GlassEffect class. */
		constructor();
		/** Gets the type of the glass effect. */
		getType(): GlassEffectType;
		/** Sets the type of the glass effect. */
		setType(value: GlassEffectType): void;
		/** Gets a string specifying the glow color name or hexadecimal value. The default value is white. */
		getGlowColor(): string;
		/** Sets a string specifying the glow color name or hexadecimal value. The default value is white. */
		setGlowColor(value: string): void;
		/** Gets a value indicating whether the glow portion of the effect should be painted with the stroke color of the respective node. */
		getUsePenAsGlow(): boolean;
		/** Sets a value indicating whether the glow portion of the effect should be painted with the stroke color of the respective node. */
		setUsePenAsGlow(value: boolean): void;
		/** Gets a string specifying the reflection color name or hexadecimal value. The default value is white. */
		getReflectionColor(): string;
		/** Sets a string specifying the reflection color name or hexadecimal value. The default value is white. */
		setReflectionColor(value: string): void;
	}
	/** Adds semitransparency to the node and emphasizes its outline by adding a shade and an inner stroke. */
	class AeroEffect extends NodeEffect
	{
		/** Initializes a new instance of the AeroEffect class. */
		constructor();
		/** Gets the opacity to apply to the node's background. A floating point value between 0 and 1. */
		getOpacity(): number;
		/** Sets the opacity to apply to the node's background. A floating point value between 0 and 1. */
		setOpacity(value: number): void;
		/** Gets A string specifying the shade color name or hexadecimal value. The default value is black. */
		getShadeColor(): string;
		/** Sets A string specifying the shade color name or hexadecimal value. The default value is black. */
		setShadeColor(value: string): void;
		/** Gets A string specifying the inner outline's color name or hexadecimal value. The default value is white. */
		getInnerOutlineColor(): string;
		/** Sets A string specifying the inner outline's color name or hexadecimal value. The default value is white. */
		setInnerOutlineColor(value: string): void;
	}
	/** Specifies the type of a GlassEffect node effect. */
	enum GlassEffectType
	{
		/** Indicates a glass effect with soft radial glow at the bottom and a sharp reflection at the top. */
		Type1 = 0,
		/** Indicates a glass effect with linear glow at the bottom and sharp reflection at the top. */
		Type2 = 1,
		/** Indicates a glass effect with radial glow at the bottom and smooth reflection and emphasized outline at the top. */
		Type3 = 2,
		/** Indicates a glass effect with sharp reflection at the top and soft glow at the left and right sides. */
		Type4 = 3
	}
	/** Defines all events raised by the Diagram component. */
	class Events
	{
		/** Raised when the user starts drawing a new link, just after the DiagramLink instance is created. */
		static initializeLink: string;
		/** Raised when the user starts drawing a new node, just after the DiagramNode instance is created. */
		static initializeNode: string;
		/** Raised when the user clicks a link. The event handlers get a LinkEventArgs instance that contains data about this event. */
		static linkClicked: string;
		/** Raised when the user draws a new link. The event handlers get a LinkEventArgs instance that contains data about this event. */
		static linkCreated: string;
		/** Raised when a link is deleted, either programmatically or by the user. The event handlers get a LinkEventArgs instance that contains data about this event. */
		static linkDeleted: string;
		/** Raised when the user double-clicks a link. The event handlers get a LinkEventArgs instance that contains data about this event. */
		static linkDoubleClicked: string;
		/** Raised when the user moves any control point of a link. The event handlers get a LinkEventArgs instance that contains data about this event. */
		static linkModified: string;
		/** Raised when the mouse pointer hovers over a link. Event handlers get a LinkEventArgs instance that contains data about this event. */
		static linkPointed: string;
		/** Raised when the user edits the text of a link. The event handlers get a LinkEventArgs instance that contains data about this event. */
		static linkTextEdited: string;
		/** Raised when the user clicks a node. The event handlers get a NodeEventArgs instance that contains data about this event. */
		static nodeClicked: string;
		/** Raised when the user draws a new node. The event handlers get a NodeEventArgs instance that contains data about this event. */
		static nodeCreated: string;
		/** Raised when a node is deleted, either programmatically or by the user. The event handlers get a NodeEventArgs instance that contains data about this event. */
		static nodeDeleted: string;
		/** Raised when the user double-clicks a node. The event handlers get a NodeEventArgs instance that contains data about this event. */
		static nodeDoubleClicked: string;
		/** Raised when the user moves or resizes a node. The event handlers get a NodeEventArgs instance that contains data about this event. */
		static nodeModified: string;
		/** Raised when the mouse pointer hovers over a node. The event handlers get a NodeEventArgs instance that contains data about this event. */
		static nodePointed: string;
		/** Raised when the user edits the text of a node. The event handlers get a NodeEventArgs instance that contains data about this event. */
		static nodeTextEdited: string;
		/** A validation event raised while the user is drawing a new link. The event handlers get a LinkEventArgs instance that contains data about this event. */
		static linkCreating: string;
		/** Raised when the user tries to delete a link, this event lets you cancel the operation. The event handlers get a LinkEventArgs instance that contains data about this event. */
		static linkDeleting: string;
		/** A validation event raised while the user is modifying a link. The event handlers get a LinkEventArgs instance that contains data about this event. */
		static linkModifying: string;
		/** A validation event raised while the user is drawing a new node. The event handlers get a NodeEventArgs instance that contains data about this event. */
		static nodeCreating: string;
		/** Raised when the user tries to delete a node, this event lets you cancel the operation. The event handlers get a NodeEventArgs instance that contains data about this event. */
		static nodeDeleting: string;
		/** A validation event raised while the user is moving or resizing a node. The event handlers get a NodeEventArgs instance that contains data about this event. */
		static nodeModifying: string;
		/** Raised when the user adds a node to a ContainerNode. */
		static containerChildAdded: string;
		/** A validation event raised to let you prevent users from adding child nodes to a container. */
		static containerChildAdding: string;
		/** A validation event raised to let you prevent users from removing child nodes from a container. */
		static containerChildRemoving: string;
		/** Raised when the user removes a node from a ContainerNode. */
		static containerChildRemoved: string;
		/** Raised when the user folds a container by clicking the arrow-up button in the container's caption area. */
		static containerFolded: string;
		/** Raised when the user unfolds a container by clicking the arrow-down button in the container's caption area. */
		static containerUnfolded: string;
		/** Raised when a user expands a tree branch by clicking the [+] button of an Expandable node. The event handlers get a NodeEventArgs instance that contains data about this event. */
		static treeExpanded: string;
		/** Raised when a user collapses a tree branch by clicking the [-] button of an Expandable node. The event handlers get a NodeEventArgs instance that contains data about this event. */
		static treeCollapsed: string;
		/** A validation event raised while the user is moving or resizing multiple items. The event handlers get a NodeEventArgs instance that contains data about this event. */
		static selectionModifying: string;
		/** Raised when the diagram has been repainted. */
		static repaint: string;
		/** Raised when the size of the diagram canvas has changed. */
		static sizeChanged: string;
		/** Raised when a node is selected, either programmatically or by the user. The event handlers get a NodeEventArgs instance that contains data about this event. */
		static nodeSelected: string;
		/** Raised when a node is deselected, either programmatically or by the user. The event handlers get a NodeEventArgs instance that contains data about this event. */
		static nodeDeselected: string;
		/** Raised when a link is selected, either programmatically or by the user. The event handlers get a LinkEventArgs instance that contains data about this event. */
		static linkSelected: string;
		/** Raised when a link is deselected, either programmatically or by the user. The event handlers get a LinkEventArgs instance that contains data about this event. */
		static linkDeselected: string;
		/** Raised when the control is loaded. */
		static controlLoaded: string;
		/** Raised to hit-test custom adjustment handles. */
		static hitTestAdjustmentHandles: string;
		/** Raised to draw custom adjustment handles. */
		static drawAdjustmentHandles: string;
		/** Raised when the user clicks the diagram at a point where no items are located. Event handlers get a DiagramEventArgs instance that contains data about this event. */
		static clicked: string;
		/** Raised when entering inplace-edit mode. Event handlers get an InplaceEditEventArgs instance that contains data about this event. */
		static enterInplaceEditMode: string;
		/** Raised when leaving inplace-edit mode. Event handlers get an InplaceEditEventArgs instance that contains data about this event. */
		static leaveInplaceEditMode: string;
		/** Raised to let you create a custom inplace editor control. Event handlers get an InplaceEditEventArgs instance that contains data about this event. */
		static createEditControl: string;
		/** Raised when the user edits the text of a table cell. The event handlers get a CellEventArgs instance that contains data about this event. */
		static cellTextEdited: string;
		/** Raised when the used edits the text of a grid cell. The event handlers get a CellEventArgs instance that contains data about this event. */
		static laneGridCellTextEdited: string;
		/** Raised when the Tag or Id of a diagram item must be deserialized from XML format. */
		static deserializeTag: string;
		/** Raised when the user resizes a column in a table interactively. */
		static tableColumnResizing: string;
		/** Raised when the user finishes resizing a column in a table. */
		static tableColumnResized: string;
		/** Raised when the user resizes a row in a table interactively. */
		static tableRowResizing: string;
		/** Raised when the user finishes resizing a row in a table. */
		static tableRowResized: string;
		/** Raised when a node has been pasted from the clipboard. */
		static nodePasted: string;
		/** Raised when a link has been pasted from the clipboard. */
		static linkPasted: string;
	}
	/** The base type of event-arguments objects passed to DiagramItem -related events. */
	class ItemEventArgs extends MindFusion.EventArgs
	{
		/** Gets the current mouse pointer position.
		 * @return A Point instance.
		*/
		getMousePosition(): MindFusion.Drawing.Point;
		/** Gets which mouse button has been pressed.
		 * @return An integer mouse button id.
		*/
		getMouseButton(): number;
		/** Get the adjustment handle being moved by the user.
		 * @return One of the AdjustmentHandles enumeration values.
		*/
		getAdjustmentHandle(): AdjustmentHandles;
		/** Gets the text that has just been entered by the user.
		 * @return A string specifying the new text of the node.
		*/
		getNewText(): string;
		/** Gets the original text of the node.
		 * @return A string specifying the old text of the node.
		*/
		getOldText(): string;
		/** Gets the canvas rendering context.
		 * @return A CanvasRenderingContext2D used to draw on the Canvas element.
		*/
		getContext(): any;
		/** Gets a value indicating whether to allow the current operation. */
		getCancel(): boolean;
		/** Sets a value indicating whether to allow the current operation. */
		setCancel(value: boolean): void;
		/** Immediately cancels current user interaction. */
		cancelDrag(): void;
	}
	/** Contains the arguments passed to handlers of node-related events. */
	class NodeEventArgs extends ItemEventArgs
	{
		/** Gets the node for which the event was raised.
		 * @return An instance of the DiagramNode class.
		*/
		getNode(): DiagramNode;
		/** Gets the container a node has been added to or removed from.
		 * @return A ContainerNode instance.
		*/
		getContainer(): ContainerNode;
	}
	/** Contains the arguments passed to handlers of link-related events. */
	class LinkEventArgs extends ItemEventArgs
	{
		/** Gets the link for which the event was raised.
		 * @return A DiagramLink instance.
		*/
		getLink(): DiagramLink;
	}
	/** Contains the arguments passed to handlers of selection-related events. */
	class SelectionEventArgs extends MindFusion.EventArgs
	{
		/** Gets the current mouse pointer position.
		 * @return A Point instance.
		*/
		getMousePosition(): MindFusion.Drawing.Point;
		/** Get the adjustment handle being moved by the user.
		 * @return One of the AdjustmentHandles enumeration values.
		*/
		getAdjustmentHandle(): AdjustmentHandles;
		/** Gets a value indicating whether to allow the current operation. */
		getCancel(): boolean;
		/** Sets a value indicating whether to allow the current operation. */
		setCancel(value: boolean): void;
		/** Immediately cancels current user interaction. */
		cancelDrag(): void;
	}
	/** Contains the arguments passed to handlers of global diagram events such as clicked. */
	class DiagramEventArgs extends MindFusion.EventArgs
	{
		/** Gets the current mouse pointer position.
		 * @return A Point instance.
		*/
		getMousePosition(): MindFusion.Drawing.Point;
		/** Gets which mouse button has been pressed.
		 * @return An integer mouse button id.
		*/
		getMouseButton(): number;
	}
	/** Contains the arguments passed to handlers of inplace edit -related events. */
	class InplaceEditEventArgs extends MindFusion.EventArgs
	{
		/** Gets a reference to the item being edited.
		 * @return A DiagramItem instance.
		*/
		getItem(): DiagramItem;
		/** Gets the DOM Element used to edit the item's text. */
		getControl(): any;
		/** Sets the DOM Element used to edit the item's text. */
		setControl(value: any): void;
		/** Gets the bounds of the item being edited.
		 * @return A Rect instance.
		*/
		getBounds(): MindFusion.Drawing.Rect;
	}
	/** Contains the arguments passed to handlers of table cell -related events. */
	class CellEventArgs extends MindFusion.EventArgs
	{
		/** Gets the cell related to the event.
		 * @return A Cell instance.
		*/
		getCell(): Cell;
		/** Gets which mouse button has been pressed.
		 * @return An integer mouse button id.
		*/
		getMouseButton(): number;
		/** Gets the text that has just been entered by the user.
		 * @return A string specifying the new text of the cell.
		*/
		getNewText(): string;
		/** Gets the original text of the cell.
		 * @return A string specifying the old text of the cell.
		*/
		getOldText(): string;
		/** Gets the canvas rendering context.
		 * @return A CanvasRenderingContext2D used to draw on the Canvas element.
		*/
		getContext(): any;
		/** Gets a value indicating whether the event has been handled. */
		getHandled(): boolean;
		/** Sets a value indicating whether the event has been handled. */
		setHandled(value: boolean): void;
		/** Gets a value indicating whether to allow the current operation. */
		getCancel(): boolean;
		/** Sets a value indicating whether to allow the current operation. */
		setCancel(value: boolean): void;
	}
	/** Contains the arguments passed to handlers of table row and column resizing -related events. */
	class CellValidationEventArgs extends CellEventArgs
	{
		/** Cancels the resize of the table's row or column. */
		cancelDrag(): void;
	}
	/** Contains the arguments passed to the serializeTag and deserializeTag event handlers. */
	class SerializeTagEventArgs extends MindFusion.EventArgs
	{
		/** Gets the object whose property is being serialized or deserialized. */
		getObject(): any;
		/** Gets the tag value being serialized or deserialized. */
		getTag(): any;
		/** Sets the tag value being serialized or deserialized. */
		setTag(value: any): void;
		/** Gets the XML element where the tag value should be serialized to or deserialized from. */
		getElement(): any;
		/** Gets an XmlPersistContext object providing helper read and write methods for various value types. */
		getContext(): XmlPersistContext;
		/** Gets the name of the property being serialized. */
		getPropertyName(): string;
		/** Gets a value indicating whether the event has been handled. */
		getHandled(): boolean;
		/** Sets a value indicating whether the event has been handled. */
		setHandled(value: boolean): void;
	}
	/** A list-box control that hosts DiagramNodes and supports dragging them to the Diagram control. */
	class NodeListView extends MindFusion.Drawing.Canvas
	{
		/** Initializes a new instance of the NodeListView class.
		 * @param element The Canvas DOM Element this NodeListView is associated with.
		*/
		constructor(element: any);
		/** Creates and initializes a new NodeListView associated with specified Canvas DOM element.
		 * @param element The Canvas DOM element that the NodeListView should be attached to.
		 * @return A NodeListView instance.
		*/
		static create(element: any): NodeListView;
		/** Removes all items from the NodeListView. */
		clearAll(): void;
		/** Adds a node to the NodeListView.
		 * @param node The node to add.
		 * @param caption The caption to display for the node.
		*/
		addNode(node: DiagramNode, caption: string): void;
		/** Gets the nodes contained in this NodeListView.
		 * @return An array of all DiagramNodes in this NodeListView.
		*/
		getNodes(): Array<DiagramNode>;
		/** Gets the default size of the nodes in the list view. */
		getDefaultNodeSize(): MindFusion.Drawing.Size;
		/** Sets the default size of the nodes in the list view. */
		setDefaultNodeSize(value: MindFusion.Drawing.Size): void;
		/** Gets the default size of the icons in the list view. */
		getIconSize(): MindFusion.Drawing.Size;
		/** Sets the default size of the icons in the list view. */
		setIconSize(value: MindFusion.Drawing.Size): void;
		/** Gets the orientation of the nodes' layout. */
		getOrientation(): Orientation;
		/** Sets the orientation of the nodes' layout. */
		setOrientation(value: Orientation): void;
		/** Gets the space left between NodeListView borders and its contents. */
		getPadding(): number;
		/** Sets the space left between NodeListView borders and its contents. */
		setPadding(value: number): void;
		/** Gets the location of a shape library file containing custom shape definitions. */
		getShapeLibraryLocation(): string;
		/** Sets the location of a shape library file containing custom shape definitions. */
		setShapeLibraryLocation(value: string): void;
	}
}
