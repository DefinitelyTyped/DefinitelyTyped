// Type definitions for Titanium Mobile 3.5.0
// Project: http://www.appcelerator.com/
// Definitions by: Craig Younkins <https://github.com/cyounkins>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace Ti {
	export var apiName : string;
	export var bubbleParent : boolean;
	export var buildDate : string;
	export var buildHash : string;
	export var userAgent : string;
	export var version : string;
	export function addEventListener (name: string, callback: (...args : any[]) => any) : void;
	export function applyProperties (props: Dictionary<Object>) : void;
	export function createBuffer (params: CreateBufferArgs) : Ti.Buffer;
	export function fireEvent (name: string, event: Dictionary<Object>) : void;
	export function getApiName () : string;
	export function getBubbleParent () : boolean;
	export function getBuildDate () : string;
	export function getBuildHash () : string;
	export function getUserAgent () : string;
	export function getVersion () : string;
	export function include (name: string) : void;
	export function removeEventListener (name: string, callback: (...args : any[]) => any) : void;
	export function setBubbleParent (bubbleParent: boolean) : void;
	export function setUserAgent (userAgent: string) : void;
	export module XML {
		export var apiName : string;
		export var bubbleParent : boolean;
		export function addEventListener (name: string, callback: (...args : any[]) => any) : void;
		export function applyProperties (props: Dictionary<Object>) : void;
		export function fireEvent (name: string, event: Dictionary<Object>) : void;
		export function getApiName () : string;
		export function getBubbleParent () : boolean;
		export function parseString (xml: string) : Ti.XML.Document;
		export function removeEventListener (name: string, callback: (...args : any[]) => any) : void;
		export function serializeToString (node: Ti.XML.Node) : string;
		export function setBubbleParent (bubbleParent: boolean) : void;
		export interface Entity extends Ti.XML.Node {
			notationName : string;
			publicId : string;
			systemId : string;
			getNotationName () : string;
			getPublicId () : string;
			getSystemId () : string;
		}
		export interface Node extends Ti.Proxy {
			ATTRIBUTE_NODE : number;
			CDATA_SECTION_NODE : number;
			COMMENT_NODE : number;
			DOCUMENT_FRAGMENT_NODE : number;
			DOCUMENT_NODE : number;
			DOCUMENT_TYPE_NODE : number;
			ELEMENT_NODE : number;
			ENTITY_NODE : number;
			ENTITY_REFERENCE_NODE : number;
			NOTATION_NODE : number;
			PROCESSING_INSTRUCTION_NODE : number;
			TEXT_NODE : number;
			attributes : Ti.XML.NamedNodeMap;
			childNodes : Ti.XML.NodeList;
			firstChild : Ti.XML.Node;
			lastChild : Ti.XML.Node;
			localName : string;
			namespaceURI : string;
			nextSibling : Ti.XML.Node;
			nodeName : string;
			nodeType : number;
			nodeValue : string;
			ownerDocument : Ti.XML.Document;
			parentNode : Ti.XML.Node;
			prefix : string;
			previousSibling : Ti.XML.Node;
			text : string;
			textContent : string;
			appendChild (newChild: Ti.XML.Node) : Ti.XML.Node;
			cloneNode (deep: boolean) : Ti.XML.Node;
			getAttributes () : Ti.XML.NamedNodeMap;
			getChildNodes () : Ti.XML.NodeList;
			getFirstChild () : Ti.XML.Node;
			getLastChild () : Ti.XML.Node;
			getLocalName () : string;
			getNamespaceURI () : string;
			getNextSibling () : Ti.XML.Node;
			getNodeName () : string;
			getNodeType () : number;
			getNodeValue () : string;
			getOwnerDocument () : Ti.XML.Document;
			getParentNode () : Ti.XML.Node;
			getPrefix () : string;
			getPreviousSibling () : Ti.XML.Node;
			getText () : string;
			getTextContent () : string;
			hasAttributes () : boolean;
			hasChildNodes () : boolean;
			insertBefore (newChild: Ti.XML.Node, refChild: Ti.XML.Node) : Ti.XML.Node;
			isSupported (feature: string, version: string) : boolean;
			normalize () : void;
			removeChild (oldChild: Ti.XML.Node) : Ti.XML.Node;
			replaceChild (newChild: Ti.XML.Node, oldChild: Ti.XML.Node) : Ti.XML.Node;
			setLocalName (localName: string) : void;
			setNodeValue (nodeValue: string) : void;
			setPrefix (prefix: string) : void;
		}
		export enum EntityReference {

		}
		export interface CharacterData extends Ti.XML.Node {
			data : string;
			length : number;
			appendData (arg: string) : void;
			deleteData (offset: number, count: number) : void;
			getData () : string;
			getLength () : number;
			insertData (offset: number, arg: string) : void;
			replaceData (offset: number, count: number, arg: string) : void;
			setData (data: string) : void;
			substringData (offset: number, count: number) : string;
		}
		export interface DOMImplementation extends Ti.Proxy {
			createDocument (namespaceURI: string, qualifiedName: string, doctype: Ti.XML.DocumentType) : Ti.XML.Document;
			createDocumentType (qualifiedName: string, publicId: string, systemId: string) : Ti.XML.DocumentType;
			hasFeature (feature: string, version: string) : boolean;
		}
		export interface Document extends Ti.XML.Node {
			doctype : Ti.XML.DocumentType;
			documentElement : Ti.XML.Element;
			implementation : Ti.XML.DOMImplementation;
			createAttribute (name: string) : Ti.XML.Attr;
			createAttributeNS (namespaceURI: string, name: string) : Ti.XML.Attr;
			createCDATASection (data: string) : Ti.XML.CDATASection;
			createComment (data: string) : Ti.XML.Comment;
			createDocumentFragment () : Ti.XML.DocumentFragment;
			createElement (tagName: string) : Ti.XML.Element;
			createElementNS (namespaceURI: string, name: string) : Ti.XML.Element;
			createEntityReference (name: string) : Ti.XML.EntityReference;
			createProcessingInstruction (target: string, data: string) : Ti.XML.ProcessingInstruction;
			createTextNode (data: string) : Ti.XML.Text;
			getDoctype () : Ti.XML.DocumentType;
			getDocumentElement () : Ti.XML.Element;
			getElementById (elementId: string) : Ti.XML.Element;
			getElementsByTagName (tagname: string) : Ti.XML.NodeList;
			getElementsByTagNameNS (namespaceURI: string, localname: string) : Ti.XML.NodeList;
			getImplementation () : Ti.XML.DOMImplementation;
			importNode (importedNode: Ti.XML.Node, deep: boolean) : Ti.XML.Node;
		}
		export interface Attr extends Ti.XML.Node {
			name : string;
			ownerElement : Ti.XML.Element;
			specified : boolean;
			value : string;
			getName () : string;
			getOwnerElement () : Ti.XML.Element;
			getSpecified () : boolean;
			getValue () : string;
			setValue (value: string) : void;
		}
		export interface ProcessingInstruction extends Ti.Proxy {
			data : string;
			target : string;
			getData () : string;
			getTarget () : string;
			setData (data: string) : void;
		}
		export interface NamedNodeMap extends Ti.Proxy {
			length : number;
			getLength () : number;
			getNamedItem (name: string) : Ti.XML.Node;
			getNamedItemNS (namespaceURI: string, localName: string) : Ti.XML.Node;
			item (index: number) : Ti.XML.Node;
			removeNamedItem (name: string) : Ti.XML.Node;
			removeNamedItemNS (namespaceURI: string, localName: string) : Ti.XML.Node;
			setNamedItem (node: Ti.XML.Node) : Ti.XML.Node;
			setNamedItemNS (node: Ti.XML.Node) : Ti.XML.Node;
		}
		export enum CDATASection {

		}
		export interface Text extends Ti.XML.CharacterData {
			splitText (offset: number) : Ti.XML.Text;
		}
		export enum Comment {

		}
		export enum DocumentFragment {

		}
		export interface Notation extends Ti.Proxy {
			publicId : string;
			systemId : string;
			getPublicId () : string;
			getSystemId () : string;
		}
		export interface NodeList extends Ti.Proxy {
			length : number;
			getLength () : number;
			item (index: number) : Ti.XML.Node;
		}
		export interface DocumentType extends Ti.XML.Node {
			entities : Ti.XML.NamedNodeMap;
			internalSubset : string;
			name : string;
			notations : Ti.XML.NamedNodeMap;
			publicId : string;
			systemId : string;
			getEntities () : Ti.XML.NamedNodeMap;
			getInternalSubset () : string;
			getName () : string;
			getNotations () : Ti.XML.NamedNodeMap;
			getPublicId () : string;
			getSystemId () : string;
		}
		export interface Element extends Ti.XML.Node {
			tagName : string;
			getAttribute (name: string) : string;
			getAttributeNS (namespaceURI: string, localName: string) : string;
			getAttributeNode (name: string) : Ti.XML.Attr;
			getAttributeNodeNS (namespaceURI: string, localName: string) : Ti.XML.Attr;
			getElementsByTagName (name: string) : Ti.XML.NodeList;
			getElementsByTagNameNS (namespaceURI: string, localName: string) : Ti.XML.NodeList;
			getTagName () : string;
			hasAttribute (name: string) : boolean;
			hasAttributeNS (namespaceURI: string, localName: string) : boolean;
			removeAttribute (name: string) : void;
			removeAttributeNS (namespaceURI: string, localName: string) : void;
			removeAttributeNode (oldAttr: Ti.XML.Attr) : void;
			setAttribute (name: string, value: string) : void;
			setAttributeNS (namespaceURI: string, qualifiedName: string, value: string) : void;
			setAttributeNode (newAttr: Ti.XML.Attr) : Ti.XML.Attr;
			setAttributeNodeNS (newAttr: Ti.XML.Attr) : Ti.XML.Attr;
		}
	}
	export enum BlobStream {

	}
	export interface IOStream extends Ti.Proxy {
		close () : void;
		isReadable () : boolean;
		isWriteable () : boolean;
		read (buffer: Ti.Buffer, offset?: number, length?: number) : number;
		write (buffer: Ti.Buffer, offset?: number, length?: number) : number;
	}
	export module UI {
		export var ANIMATION_CURVE_EASE_IN : number;
		export var ANIMATION_CURVE_EASE_IN_OUT : number;
		export var ANIMATION_CURVE_EASE_OUT : number;
		export var ANIMATION_CURVE_LINEAR : number;
		export var AUTODETECT_ADDRESS : number;
		export var AUTODETECT_ALL : number;
		export var AUTODETECT_CALENDAR : number;
		export var AUTODETECT_LINK : number;
		export var AUTODETECT_NONE : number;
		export var AUTODETECT_PHONE : number;
		export var AUTOLINK_ALL : number;
		export var AUTOLINK_CALENDAR : number;
		export var AUTOLINK_EMAIL_ADDRESSES : number;
		export var AUTOLINK_MAP_ADDRESSES : number;
		export var AUTOLINK_NONE : number;
		export var AUTOLINK_PHONE_NUMBERS : number;
		export var AUTOLINK_URLS : number;
		export var BLEND_MODE_CLEAR : number;
		export var BLEND_MODE_COLOR : number;
		export var BLEND_MODE_COLOR_BURN : number;
		export var BLEND_MODE_COLOR_DODGE : number;
		export var BLEND_MODE_COPY : number;
		export var BLEND_MODE_DARKEN : number;
		export var BLEND_MODE_DESTINATION_ATOP : number;
		export var BLEND_MODE_DESTINATION_IN : number;
		export var BLEND_MODE_DESTINATION_OUT : number;
		export var BLEND_MODE_DESTINATION_OVER : number;
		export var BLEND_MODE_DIFFERENCE : number;
		export var BLEND_MODE_EXCLUSION : number;
		export var BLEND_MODE_HARD_LIGHT : number;
		export var BLEND_MODE_HUE : number;
		export var BLEND_MODE_LIGHTEN : number;
		export var BLEND_MODE_LUMINOSITY : number;
		export var BLEND_MODE_MULTIPLY : number;
		export var BLEND_MODE_NORMAL : number;
		export var BLEND_MODE_OVERLAY : number;
		export var BLEND_MODE_PLUS_DARKER : number;
		export var BLEND_MODE_PLUS_LIGHTER : number;
		export var BLEND_MODE_SATURATION : number;
		export var BLEND_MODE_SCREEN : number;
		export var BLEND_MODE_SOFT_LIGHT : number;
		export var BLEND_MODE_SOURCE_ATOP : number;
		export var BLEND_MODE_SOURCE_IN : number;
		export var BLEND_MODE_SOURCE_OUT : number;
		export var BLEND_MODE_XOR : number;
		export var EXTEND_EDGE_ALL : number;
		export var EXTEND_EDGE_BOTTOM : number;
		export var EXTEND_EDGE_LEFT : number;
		export var EXTEND_EDGE_NONE : number;
		export var EXTEND_EDGE_RIGHT : number;
		export var EXTEND_EDGE_TOP : number;
		export var FACE_DOWN : number;
		export var FACE_UP : number;
		export var FILL : string;
		export var INHERIT : string;
		export var INPUT_BORDERSTYLE_BEZEL : number;
		export var INPUT_BORDERSTYLE_LINE : number;
		export var INPUT_BORDERSTYLE_NONE : number;
		export var INPUT_BORDERSTYLE_ROUNDED : number;
		export var INPUT_BUTTONMODE_ALWAYS : number;
		export var INPUT_BUTTONMODE_NEVER : number;
		export var INPUT_BUTTONMODE_ONBLUR : number;
		export var INPUT_BUTTONMODE_ONFOCUS : number;
		export var KEYBOARD_APPEARANCE_ALERT : number;
		export var KEYBOARD_APPEARANCE_DEFAULT : number;
		export var KEYBOARD_ASCII : number;
		export var KEYBOARD_DECIMAL_PAD : number;
		export var KEYBOARD_DEFAULT : number;
		export var KEYBOARD_EMAIL : number;
		export var KEYBOARD_NAMEPHONE_PAD : number;
		export var KEYBOARD_NUMBERS_PUNCTUATION : number;
		export var KEYBOARD_NUMBER_PAD : number;
		export var KEYBOARD_PHONE_PAD : number;
		export var KEYBOARD_URL : number;
		export var LANDSCAPE_LEFT : number;
		export var LANDSCAPE_RIGHT : number;
		export var LIST_ACCESSORY_TYPE_CHECKMARK : number;
		export var LIST_ACCESSORY_TYPE_DETAIL : number;
		export var LIST_ACCESSORY_TYPE_DISCLOSURE : number;
		export var LIST_ACCESSORY_TYPE_NONE : number;
		export var LIST_ITEM_TEMPLATE_CONTACTS : number;
		export var LIST_ITEM_TEMPLATE_DEFAULT : number;
		export var LIST_ITEM_TEMPLATE_SETTINGS : number;
		export var LIST_ITEM_TEMPLATE_SUBTITLE : number;
		export var NOTIFICATION_DURATION_LONG : number;
		export var NOTIFICATION_DURATION_SHORT : number;
		export var PICKER_TYPE_COUNT_DOWN_TIMER : number;
		export var PICKER_TYPE_DATE : number;
		export var PICKER_TYPE_DATE_AND_TIME : number;
		export var PICKER_TYPE_PLAIN : number;
		export var PICKER_TYPE_TIME : number;
		export var PORTRAIT : number;
		export var RETURNKEY_DEFAULT : number;
		export var RETURNKEY_DONE : number;
		export var RETURNKEY_EMERGENCY_CALL : number;
		export var RETURNKEY_GO : number;
		export var RETURNKEY_GOOGLE : number;
		export var RETURNKEY_JOIN : number;
		export var RETURNKEY_NEXT : number;
		export var RETURNKEY_ROUTE : number;
		export var RETURNKEY_SEARCH : number;
		export var RETURNKEY_SEND : number;
		export var RETURNKEY_YAHOO : number;
		export var SIZE : string;
		export var TEXT_ALIGNMENT_CENTER : any;
		export var TEXT_ALIGNMENT_LEFT : any;
		export var TEXT_ALIGNMENT_RIGHT : any;
		export var TEXT_AUTOCAPITALIZATION_ALL : number;
		export var TEXT_AUTOCAPITALIZATION_NONE : number;
		export var TEXT_AUTOCAPITALIZATION_SENTENCES : number;
		export var TEXT_AUTOCAPITALIZATION_WORDS : number;
		export var TEXT_STYLE_BODY : string;
		export var TEXT_STYLE_CAPTION1 : string;
		export var TEXT_STYLE_CAPTION2 : string;
		export var TEXT_STYLE_FOOTNOTE : string;
		export var TEXT_STYLE_HEADLINE : string;
		export var TEXT_STYLE_SUBHEADLINE : string;
		export var TEXT_VERTICAL_ALIGNMENT_BOTTOM : any;
		export var TEXT_VERTICAL_ALIGNMENT_CENTER : any;
		export var TEXT_VERTICAL_ALIGNMENT_TOP : any;
		export var UNIT_CM : string;
		export var UNIT_DIP : string;
		export var UNIT_IN : string;
		export var UNIT_MM : string;
		export var UNIT_PX : string;
		export var UNKNOWN : number;
		export var UPSIDE_PORTRAIT : number;
		export var URL_ERROR_AUTHENTICATION : number;
		export var URL_ERROR_BAD_URL : number;
		export var URL_ERROR_CONNECT : number;
		export var URL_ERROR_FILE : number;
		export var URL_ERROR_FILE_NOT_FOUND : number;
		export var URL_ERROR_HOST_LOOKUP : number;
		export var URL_ERROR_REDIRECT_LOOP : number;
		export var URL_ERROR_SSL_FAILED : number;
		export var URL_ERROR_TIMEOUT : number;
		export var URL_ERROR_UNKNOWN : number;
		export var URL_ERROR_UNSUPPORTED_SCHEME : number;
		export var apiName : string;
		export var backgroundColor : string;
		export var backgroundImage : string;
		export var bubbleParent : boolean;
		export var currentTab : Ti.UI.Tab;
		export var currentWindow : Ti.UI.Window;
		export var orientation : number;
		export function addEventListener (name: string, callback: (...args : any[]) => any) : void;
		export function applyProperties (props: Dictionary<Object>) : void;
		export function convertUnits (convertFromValue: string, convertToUnits: number) : number;
		export function create2DMatrix (parameters?: MatrixCreationDict) : Ti.UI._2DMatrix;
		export function create3DMatrix (parameters?: Dictionary<Ti.UI._3DMatrix>) : Ti.UI._3DMatrix;
		export function createActivityIndicator (parameters?: Dictionary<Ti.UI.ActivityIndicator>) : Ti.UI.ActivityIndicator;
		export function createAlertDialog (parameters?: Dictionary<Ti.UI.AlertDialog>) : Ti.UI.AlertDialog;
		export function createAnimation (parameters?: Dictionary<Ti.UI.Animation>) : Ti.UI.Animation;
		export function createButton (parameters?: Dictionary<Ti.UI.Button>) : Ti.UI.Button;
		export function createButtonBar (parameters?: Dictionary<Ti.UI.ButtonBar>) : Ti.UI.ButtonBar;
		export function createCoverFlowView (parameters?: Dictionary<Ti.UI.CoverFlowView>) : Ti.UI.CoverFlowView;
		export function createDashboardItem (parameters?: Dictionary<Ti.UI.DashboardItem>) : Ti.UI.DashboardItem;
		export function createDashboardView (parameters?: Dictionary<Ti.UI.DashboardView>) : Ti.UI.DashboardView;
		export function createEmailDialog (parameters?: Dictionary<Ti.UI.EmailDialog>) : Ti.UI.EmailDialog;
		export function createImageView (parameters?: Dictionary<Ti.UI.ImageView>) : Ti.UI.ImageView;
		export function createLabel (parameters?: Dictionary<Ti.UI.Label>) : Ti.UI.Label;
		export function createListSection (parameters?: Dictionary<Ti.UI.ListSection>) : Ti.UI.ListSection;
		export function createListView (parameters?: Dictionary<Ti.UI.ListView>) : Ti.UI.ListView;
		export function createMaskedImage (parameters?: Dictionary<Ti.UI.MaskedImage>) : Ti.UI.MaskedImage;
		export function createNotification (parameters?: Dictionary<Ti.UI.Notification>) : Ti.UI.Notification;
		export function createOptionDialog (parameters?: Dictionary<Ti.UI.OptionDialog>) : Ti.UI.OptionDialog;
		export function createPicker (parameters?: Dictionary<Ti.UI.Picker>) : Ti.UI.Picker;
		export function createPickerColumn (parameters?: Dictionary<Ti.UI.PickerColumn>) : Ti.UI.PickerColumn;
		export function createPickerRow (parameters?: Dictionary<Ti.UI.PickerRow>) : Ti.UI.PickerRow;
		export function createProgressBar (parameters?: Dictionary<Ti.UI.ProgressBar>) : Ti.UI.ProgressBar;
		export function createRefreshControl (parameters?: Dictionary<Ti.UI.RefreshControl>) : Ti.UI.RefreshControl;
		export function createSMSDialog (parameters?: Dictionary<Ti.UI.SMSDialog>) : Ti.UI.SMSDialog;
		export function createScrollView (parameters?: Dictionary<Ti.UI.ScrollView>) : Ti.UI.ScrollView;
		export function createScrollableView (parameters?: Dictionary<Ti.UI.ScrollableView>) : Ti.UI.ScrollableView;
		export function createSearchBar (parameters?: Dictionary<Ti.UI.SearchBar>) : Ti.UI.SearchBar;
		export function createSlider (parameters?: Dictionary<Ti.UI.Slider>) : Ti.UI.Slider;
		export function createSwitch (parameters?: Dictionary<Ti.UI.Switch>) : Ti.UI.Switch;
		export function createTab (parameters?: Dictionary<Ti.UI.Tab>) : Ti.UI.Tab;
		export function createTabGroup (parameters?: Dictionary<Ti.UI.TabGroup>) : Ti.UI.TabGroup;
		export function createTabbedBar (parameters?: Dictionary<Ti.UI.TabbedBar>) : Ti.UI.TabbedBar;
		export function createTableView (parameters?: Dictionary<Ti.UI.TableView>) : Ti.UI.TableView;
		export function createTableViewRow (parameters?: Dictionary<Ti.UI.TableViewRow>) : Ti.UI.TableViewRow;
		export function createTableViewSection (parameters?: Dictionary<Ti.UI.TableViewSection>) : Ti.UI.TableViewSection;
		export function createTextArea (parameters?: Dictionary<Ti.UI.TextArea>) : Ti.UI.TextArea;
		export function createTextField (parameters?: Dictionary<Ti.UI.TextField>) : Ti.UI.TextField;
		export function createToolbar (parameters?: Dictionary<Ti.UI.Toolbar>) : Ti.UI.Toolbar;
		export function createView (parameters?: Dictionary<Ti.UI.View>) : Ti.UI.View;
		export function createWebView (parameters?: Dictionary<Ti.UI.WebView>) : Ti.UI.WebView;
		export function createWindow (parameters?: Dictionary<Ti.UI.Window>) : Ti.UI.Window;
		export function fireEvent (name: string, event: Dictionary<Object>) : void;
		export function getApiName () : string;
		export function getBackgroundColor () : string;
		export function getBackgroundImage () : string;
		export function getBubbleParent () : boolean;
		export function getCurrentTab () : Ti.UI.Tab;
		export function getCurrentWindow () : Ti.UI.Window;
		export function getOrientation () : number;
		export function removeEventListener (name: string, callback: (...args : any[]) => any) : void;
		export function setBackgroundColor (backgroundColor: string) : void;
		export function setBackgroundImage (backgroundImage: string) : void;
		export function setBubbleParent (bubbleParent: boolean) : void;
		export function setCurrentTab (currentTab: Ti.UI.Tab) : void;
		export function setOrientation (orientation: number) : void;
		export module iPad {
			export var POPOVER_ARROW_DIRECTION_ANY : number;
			export var POPOVER_ARROW_DIRECTION_DOWN : number;
			export var POPOVER_ARROW_DIRECTION_LEFT : number;
			export var POPOVER_ARROW_DIRECTION_RIGHT : number;
			export var POPOVER_ARROW_DIRECTION_UNKNOWN : number;
			export var POPOVER_ARROW_DIRECTION_UP : number;
			export var apiName : string;
			export var bubbleParent : boolean;
			export function addEventListener (name: string, callback: (...args : any[]) => any) : void;
			export function applyProperties (props: Dictionary<Object>) : void;
			export function createDocumentViewer (parameters?: Dictionary<Ti.UI.iPad.DocumentViewer>) : Ti.UI.iPad.DocumentViewer;
			export function createPopover (parameters?: Dictionary<Ti.UI.iPad.Popover>) : Ti.UI.iPad.Popover;
			export function createSplitWindow (parameters?: Dictionary<Ti.UI.iPad.SplitWindow>) : Ti.UI.iPad.SplitWindow;
			export function fireEvent (name: string, event: Dictionary<Object>) : void;
			export function getApiName () : string;
			export function getBubbleParent () : boolean;
			export function removeEventListener (name: string, callback: (...args : any[]) => any) : void;
			export function setBubbleParent (bubbleParent: boolean) : void;
			export interface SplitWindow extends Ti.UI.Window {
				detailView : Ti.UI.View;
				masterView : Ti.UI.View;
				showMasterInPortrait : boolean;
				getDetailView () : Ti.UI.View;
				getMasterView () : Ti.UI.View;
				getShowMasterInPortrait () : boolean;
				setShowMasterInPortrait (showMasterInPortrait: boolean) : void;
			}
			export interface DocumentViewer extends Ti.UI.View {
				setUrl (url: string) : void;
				show () : void;
			}
			export interface Popover extends Ti.Proxy {
				arrowDirection : number;
				contentView : Ti.UI.View;
				height : any;
				leftNavButton : any;
				passthroughViews : Array<Ti.UI.View>;
				rightNavButton : any;
				title : string;
				width : any;
				add () : void;
				getArrowDirection () : number;
				getContentView () : Ti.UI.View;
				getHeight () : any;
				getLeftNavButton () : any;
				getPassthroughViews () : Array<Ti.UI.View>;
				getRightNavButton () : any;
				getTitle () : string;
				getWidth () : any;
				hide (options: PopoverParams) : void;
				remove () : void;
				setArrowDirection (arrowDirection: number) : void;
				setContentView (contentView: Ti.UI.View) : void;
				setHeight (height: number) : void;
				setHeight (height: string) : void;
				setLeftNavButton (leftNavButton: any) : void;
				setPassthroughViews (passthroughViews: Array<Ti.UI.View>) : void;
				setRightNavButton (rightNavButton: any) : void;
				setTitle (title: string) : void;
				setWidth (width: number) : void;
				setWidth (width: string) : void;
				show (params: PopoverParams) : void;
			}
		}
		export module iOS {
			export var AD_SIZE_LANDSCAPE : string;
			export var AD_SIZE_PORTRAIT : string;
			export var ANIMATION_CURVE_EASE_IN : number;
			export var ANIMATION_CURVE_EASE_IN_OUT : number;
			export var ANIMATION_CURVE_EASE_OUT : number;
			export var ANIMATION_CURVE_LINEAR : number;
			export var ATTRIBUTE_BACKGROUND_COLOR : number;
			export var ATTRIBUTE_BASELINE_OFFSET : number;
			export var ATTRIBUTE_EXPANSION : number;
			export var ATTRIBUTE_FONT : number;
			export var ATTRIBUTE_FOREGROUND_COLOR : number;
			export var ATTRIBUTE_KERN : number;
			export var ATTRIBUTE_LETTERPRESS_STYLE : number;
			export var ATTRIBUTE_LIGATURE : number;
			export var ATTRIBUTE_LINK : number;
			export var ATTRIBUTE_OBLIQUENESS : number;
			export var ATTRIBUTE_SHADOW : number;
			export var ATTRIBUTE_STRIKETHROUGH_COLOR : number;
			export var ATTRIBUTE_STRIKETHROUGH_STYLE : number;
			export var ATTRIBUTE_STROKE_COLOR : number;
			export var ATTRIBUTE_STROKE_WIDTH : number;
			export var ATTRIBUTE_TEXT_EFFECT : number;
			export var ATTRIBUTE_UNDERLINES_STYLE : number;
			export var ATTRIBUTE_UNDERLINE_BY_WORD : number;
			export var ATTRIBUTE_UNDERLINE_COLOR : number;
			export var ATTRIBUTE_UNDERLINE_PATTERN_DASH : number;
			export var ATTRIBUTE_UNDERLINE_PATTERN_DASH_DOT : number;
			export var ATTRIBUTE_UNDERLINE_PATTERN_DASH_DOT_DOT : number;
			export var ATTRIBUTE_UNDERLINE_PATTERN_DOT : number;
			export var ATTRIBUTE_UNDERLINE_PATTERN_SOLID : number;
			export var ATTRIBUTE_UNDERLINE_STYLE_DOUBLE : number;
			export var ATTRIBUTE_UNDERLINE_STYLE_NONE : number;
			export var ATTRIBUTE_UNDERLINE_STYLE_SINGLE : number;
			export var ATTRIBUTE_UNDERLINE_STYLE_THICK : number;
			export var ATTRIBUTE_WRITING_DIRECTION : number;
			export var ATTRIBUTE_WRITING_DIRECTION_EMBEDDING : number;
			export var ATTRIBUTE_WRITING_DIRECTION_LEFT_TO_RIGHT : number;
			export var ATTRIBUTE_WRITING_DIRECTION_NATURAL : number;
			export var ATTRIBUTE_WRITING_DIRECTION_OVERRIDE : number;
			export var ATTRIBUTE_WRITING_DIRECTION_RIGHT_TO_LEFT : number;
			export var AUTODETECT_ADDRESS : number;
			export var AUTODETECT_ALL : number;
			export var AUTODETECT_CALENDAR : number;
			export var AUTODETECT_LINK : number;
			export var AUTODETECT_NONE : number;
			export var AUTODETECT_PHONE : number;
			export var BLEND_MODE_CLEAR : number;
			export var BLEND_MODE_COLOR : number;
			export var BLEND_MODE_COLOR_BURN : number;
			export var BLEND_MODE_COLOR_DODGE : number;
			export var BLEND_MODE_COPY : number;
			export var BLEND_MODE_DARKEN : number;
			export var BLEND_MODE_DESTINATION_ATOP : number;
			export var BLEND_MODE_DESTINATION_IN : number;
			export var BLEND_MODE_DESTINATION_OUT : number;
			export var BLEND_MODE_DESTINATION_OVER : number;
			export var BLEND_MODE_DIFFERENCE : number;
			export var BLEND_MODE_EXCLUSION : number;
			export var BLEND_MODE_HARD_LIGHT : number;
			export var BLEND_MODE_HUE : number;
			export var BLEND_MODE_LIGHTEN : number;
			export var BLEND_MODE_LUMINOSITY : number;
			export var BLEND_MODE_MULTIPLY : number;
			export var BLEND_MODE_NORMAL : number;
			export var BLEND_MODE_OVERLAY : number;
			export var BLEND_MODE_PLUS_DARKER : number;
			export var BLEND_MODE_PLUS_LIGHTER : number;
			export var BLEND_MODE_SATURATION : number;
			export var BLEND_MODE_SCREEN : number;
			export var BLEND_MODE_SOFT_LIGHT : number;
			export var BLEND_MODE_SOURCE_ATOP : number;
			export var BLEND_MODE_SOURCE_IN : number;
			export var BLEND_MODE_SOURCE_OUT : number;
			export var BLEND_MODE_XOR : number;
			export var CLIP_MODE_DEFAULT : number;
			export var CLIP_MODE_DISABLED : number;
			export var CLIP_MODE_ENABLED : number;
			export var COLLISION_MODE_ALL : number;
			export var COLLISION_MODE_BOUNDARY : number;
			export var COLLISION_MODE_ITEM : number;
			export var COLOR_GROUP_TABLEVIEW_BACKGROUND : string;
			export var COLOR_SCROLLVIEW_BACKGROUND : string;
			export var COLOR_UNDER_PAGE_BACKGROUND : string;
			export var COLOR_VIEW_FLIPSIDE_BACKGROUND : string;
			export var PUSH_MODE_CONTINUOUS : number;
			export var PUSH_MODE_INSTANTANEOUS : number;
			export var SCROLL_DECELERATION_RATE_FAST : number;
			export var SCROLL_DECELERATION_RATE_NORMAL : number;
			export var WEBVIEW_NAVIGATIONTYPE_BACK_FORWARD : number;
			export var WEBVIEW_NAVIGATIONTYPE_FORM_RESUBMITTED : number;
			export var WEBVIEW_NAVIGATIONTYPE_FORM_SUBMITTED : number;
			export var WEBVIEW_NAVIGATIONTYPE_LINK_CLICKED : number;
			export var WEBVIEW_NAVIGATIONTYPE_OTHER : number;
			export var WEBVIEW_NAVIGATIONTYPE_RELOAD : number;
			export var apiName : string;
			export var bubbleParent : boolean;
			export function addEventListener (name: string, callback: (...args : any[]) => any) : void;
			export function applyProperties (props: Dictionary<Object>) : void;
			export function create3DMatrix (parameters?: Dictionary<Ti.UI.iOS._3DMatrix>) : Ti.UI.iOS._3DMatrix;
			export function createAdView (parameters?: Dictionary<Ti.UI.iOS.AdView>) : Ti.UI.iOS.AdView;
			export function createAnchorAttachmentBehavior (parameters?: Dictionary<Ti.UI.iOS.AnchorAttachmentBehavior>) : Ti.UI.iOS.AnchorAttachmentBehavior;
			export function createAnimator (parameters?: Dictionary<Ti.UI.iOS.Animator>) : Ti.UI.iOS.Animator;
			export function createAttributedString (parameters?: Dictionary<Ti.UI.iOS.AttributedString>) : Ti.UI.iOS.AttributedString;
			export function createCollisionBehavior (parameters?: Dictionary<Ti.UI.iOS.CollisionBehavior>) : Ti.UI.iOS.CollisionBehavior;
			export function createCoverFlowView (parameters?: Dictionary<Ti.UI.iOS.CoverFlowView>) : Ti.UI.iOS.CoverFlowView;
			export function createDocumentViewer (parameters?: Dictionary<Ti.UI.iOS.DocumentViewer>) : Ti.UI.iOS.DocumentViewer;
			export function createDynamicItemBehavior (parameters?: Dictionary<Ti.UI.iOS.DynamicItemBehavior>) : Ti.UI.iOS.DynamicItemBehavior;
			export function createGravityBehavior (parameters?: Dictionary<Ti.UI.iOS.GravityBehavior>) : Ti.UI.iOS.GravityBehavior;
			export function createNavigationWindow (parameters?: Dictionary<Ti.UI.iOS.NavigationWindow>) : Ti.UI.iOS.NavigationWindow;
			export function createPushBehavior (parameters?: Dictionary<Ti.UI.iOS.PushBehavior>) : Ti.UI.iOS.PushBehavior;
			export function createSnapBehavior (parameters?: Dictionary<Ti.UI.iOS.SnapBehavior>) : Ti.UI.iOS.SnapBehavior;
			export function createTabbedBar (parameters?: Dictionary<Ti.UI.iOS.TabbedBar>) : Ti.UI.iOS.TabbedBar;
			export function createToolbar (parameters?: Dictionary<Ti.UI.iOS.Toolbar>) : Ti.UI.iOS.Toolbar;
			export function createTransitionAnimation (transition: transitionAnimationParam) : Ti.Proxy;
			export function createViewAttachmentBehavior (parameters?: Dictionary<Ti.UI.iOS.ViewAttachmentBehavior>) : Ti.UI.iOS.ViewAttachmentBehavior;
			export function fireEvent (name: string, event: Dictionary<Object>) : void;
			export function getApiName () : string;
			export function getBubbleParent () : boolean;
			export function removeEventListener (name: string, callback: (...args : any[]) => any) : void;
			export function setBubbleParent (bubbleParent: boolean) : void;
			export interface Animator extends Ti.Proxy {
				behaviors : Array<Ti.Proxy>;
				referenceView : Ti.UI.View;
				running : boolean;
				addBehavior (behavior: Ti.Proxy) : void;
				getBehaviors () : Array<Ti.Proxy>;
				getReferenceView () : Ti.UI.View;
				getRunning () : boolean;
				removeAllBehaviors () : void;
				removeBehavior (behavior: Ti.Proxy) : void;
				setBehaviors (behaviors: Array<Ti.Proxy>) : void;
				setReferenceView (referenceView: Ti.UI.View) : void;
				startAnimator () : void;
				stopAnimator () : void;
				updateItemUsingCurrentState (item: Ti.UI.View) : void;
			}
			export interface DynamicItemBehavior extends Ti.Proxy {
				allowsRotation : boolean;
				angularResistance : number;
				density : number;
				elasticity : number;
				friction : number;
				items : Array<Ti.UI.View>;
				resistance : number;
				addAngularVelocityForItem (item: Ti.UI.View, velocity: number) : void;
				addItem (item: Ti.UI.View) : void;
				addLinearVelocityForItem (item: Ti.UI.View, velocity: Point) : void;
				angularVelocityForItem (item: Ti.UI.View) : number;
				getAllowsRotation () : boolean;
				getAngularResistance () : number;
				getDensity () : number;
				getElasticity () : number;
				getFriction () : number;
				getItems () : Array<Ti.UI.View>;
				getResistance () : number;
				linearVelocityForItem (item: Ti.UI.View) : Point;
				removeItem (item: Ti.UI.View) : void;
				setAllowsRotation (allowsRotation: boolean) : void;
				setAngularResistance (angularResistance: number) : void;
				setDensity (density: number) : void;
				setElasticity (elasticity: number) : void;
				setFriction (friction: number) : void;
				setResistance (resistance: number) : void;
			}
			export interface SnapBehavior extends Ti.Proxy {
				damping : number;
				item : Ti.UI.View;
				snapPoint : Point;
				getDamping () : number;
				getItem () : Ti.UI.View;
				getSnapPoint () : Point;
				setDamping (damping: number) : void;
				setItem (item: Ti.UI.View) : void;
				setSnapPoint (snapPoint: Point) : void;
			}
			export interface GravityBehavior extends Ti.Proxy {
				angle : number;
				gravityDirection : Point;
				items : Array<Ti.UI.View>;
				magnitude : number;
				addItem (item: Ti.UI.View) : void;
				getAngle () : number;
				getGravityDirection () : Point;
				getItems () : Array<Ti.UI.View>;
				getMagnitude () : number;
				removeItem (item: Ti.UI.View) : void;
				setAngle (angle: number) : void;
				setGravityDirection (gravityDirection: Point) : void;
				setMagnitude (magnitude: number) : void;
			}
			export interface CollisionBehavior extends Ti.Proxy {
				boundaryIdentifiers : Array<BoundaryIdentifier>;
				collisionMode : number;
				items : Array<Ti.UI.View>;
				referenceInsets : ReferenceInsets;
				treatReferenceAsBoundary : boolean;
				addBoundary (boundary: BoundaryIdentifier) : void;
				addItem (item: Ti.UI.View) : void;
				getBoundaryIdentifiers () : Array<BoundaryIdentifier>;
				getCollisionMode () : number;
				getItems () : Array<Ti.UI.View>;
				getReferenceInsets () : ReferenceInsets;
				getTreatReferenceAsBoundary () : boolean;
				removeAllBoundaries () : void;
				removeBoundary (boundary: BoundaryIdentifier) : void;
				removeItem (item: Ti.UI.View) : void;
				setCollisionMode (collisionMode: number) : void;
				setReferenceInsets (referenceInsets: ReferenceInsets) : void;
				setTreatReferenceAsBoundary (treatReferenceAsBoundary: boolean) : void;
			}
			export interface Toolbar extends Ti.UI.View {
				barColor : string;
				borderBottom : boolean;
				borderTop : boolean;
				extendBackground : boolean;
				items : Array<Ti.UI.View>;
				translucent : boolean;
				getBarColor () : string;
				getBorderBottom () : boolean;
				getBorderTop () : boolean;
				getExtendBackground () : boolean;
				getItems () : Array<Ti.UI.View>;
				getTranslucent () : boolean;
				setBarColor (barColor: string) : void;
				setBorderBottom (borderBottom: boolean) : void;
				setBorderTop (borderTop: boolean) : void;
				setItems (items: Array<Ti.UI.View>) : void;
				setTranslucent (translucent: boolean) : void;
			}
			export interface ViewAttachmentBehavior extends Ti.Proxy {
				anchorItem : Ti.UI.View;
				anchorOffset : Point;
				damping : number;
				distance : number;
				frequency : number;
				item : Ti.UI.View;
				itemOffset : Point;
				getAnchorItem () : Ti.UI.View;
				getAnchorOffset () : Point;
				getDamping () : number;
				getDistance () : number;
				getFrequency () : number;
				getItem () : Ti.UI.View;
				getItemOffset () : Point;
				setAnchorItem (anchorItem: Ti.UI.View) : void;
				setAnchorOffset (anchorOffset: Point) : void;
				setDamping (damping: number) : void;
				setDistance (distance: number) : void;
				setFrequency (frequency: number) : void;
				setItem (item: Ti.UI.View) : void;
				setItemOffset (itemOffset: Point) : void;
			}
			export interface PushBehavior extends Ti.Proxy {
				active : boolean;
				angle : number;
				items : Array<Ti.UI.View>;
				magnitude : number;
				pushDirection : Point;
				pushMode : number;
				addItem (item: Ti.UI.View) : void;
				getActive () : boolean;
				getAngle () : number;
				getItems () : Array<Ti.UI.View>;
				getMagnitude () : number;
				getPushDirection () : Point;
				getPushMode () : number;
				removeItem (item: Ti.UI.View) : void;
				setActive (active: boolean) : void;
				setAngle (angle: number) : void;
				setMagnitude (magnitude: number) : void;
				setPushDirection (pushDirection: Point) : void;
				setPushMode (pushMode: number) : void;
			}
			export interface CoverFlowView extends Ti.UI.View {
				images : any;
				selected : number;
				getImages () : any;
				getSelected () : number;
				setImage (index: number, image: string) : void;
				setImage (image: Ti.Blob) : void;
				setImage (image: Ti.Filesystem.File) : void;
				setImage (index: number, image: CoverFlowImageType) : void;
				setImages (images: Array<String>) : void;
				setImages (images: Array<Ti.Blob>) : void;
				setImages (images: Array<Ti.Filesystem.File>) : void;
				setImages (images: Array<CoverFlowImageType>) : void;
				setSelected (selected: number) : void;
			}
			export interface DocumentViewer extends Ti.UI.View {
				name : string;
				url : string;
				getName () : string;
				getUrl () : string;
				hide (options?: DocumentViewerOptions) : void;
				setUrl (url: string) : void;
				show (options?: DocumentViewerOptions) : void;
			}
			export interface NavigationWindow extends Ti.UI.Window {
				window : Ti.UI.Window;
				closeWindow (window: Ti.UI.Window, options: Dictionary<Object>) : void;
				getWindow () : Ti.UI.Window;
				openWindow (window: Ti.UI.Window, options: Dictionary<Object>) : void;
			}
			export interface AttributedString extends Ti.Proxy {
				attributes : Array<Attribute>;
				text : string;
				addAttribute (attribute: Attribute) : void;
				getAttributes () : Array<Attribute>;
				getText () : string;
				setAttributes (attributes: Array<Attribute>) : void;
				setText (text: string) : void;
			}
			export interface AnchorAttachmentBehavior extends Ti.Proxy {
				anchor : Point;
				damping : number;
				distance : number;
				frequency : number;
				item : Ti.UI.View;
				offset : Point;
				getAnchor () : Point;
				getDamping () : number;
				getDistance () : number;
				getFrequency () : number;
				getItem () : Ti.UI.View;
				getOffset () : Point;
				setAnchor (anchor: Point) : void;
				setDamping (damping: number) : void;
				setDistance (distance: number) : void;
				setFrequency (frequency: number) : void;
				setItem (item: Ti.UI.View) : void;
				setOffset (offset: Point) : void;
			}
			export interface TabbedBar extends Ti.UI.View {
				index : number;
				labels : any;
				style : number;
				getIndex () : number;
				getLabels () : any;
				getStyle () : number;
				setIndex (index: number) : void;
				setLabels (labels: Array<String>) : void;
				setLabels (labels: Array<BarItemType>) : void;
				setStyle (style: number) : void;
			}
			export interface _3DMatrix extends Ti.Proxy {
				m11 : number;
				m12 : number;
				m13 : number;
				m14 : number;
				m21 : number;
				m22 : number;
				m23 : number;
				m24 : number;
				m31 : number;
				m32 : number;
				m33 : number;
				m34 : number;
				m41 : number;
				m42 : number;
				m43 : number;
				m44 : number;
				getM11 () : number;
				getM12 () : number;
				getM13 () : number;
				getM14 () : number;
				getM21 () : number;
				getM22 () : number;
				getM23 () : number;
				getM24 () : number;
				getM31 () : number;
				getM32 () : number;
				getM33 () : number;
				getM34 () : number;
				getM41 () : number;
				getM42 () : number;
				getM43 () : number;
				getM44 () : number;
				invert () : Ti.UI._3DMatrix;
				multiply (t2: Ti.UI._3DMatrix) : Ti.UI._3DMatrix;
				rotate (angle: number, x: number, y: number, z: number) : Ti.UI._3DMatrix;
				scale (sx: number, sy: number, sz: number) : Ti.UI._3DMatrix;
				setM11 (m11: number) : void;
				setM12 (m12: number) : void;
				setM13 (m13: number) : void;
				setM14 (m14: number) : void;
				setM21 (m21: number) : void;
				setM22 (m22: number) : void;
				setM23 (m23: number) : void;
				setM24 (m24: number) : void;
				setM31 (m31: number) : void;
				setM32 (m32: number) : void;
				setM33 (m33: number) : void;
				setM34 (m34: number) : void;
				setM41 (m41: number) : void;
				setM42 (m42: number) : void;
				setM43 (m43: number) : void;
				setM44 (m44: number) : void;
				translate (tx: number, ty: number, tz: number) : Ti.UI._3DMatrix;
			}
			export interface AdView extends Ti.UI.View {
				adSize : string;
				cancelAction () : void;
				getAdSize () : string;
				setAdSize (adSize: string) : void;
			}
		}
		export module iPhone {
			export var MODAL_PRESENTATION_CURRENT_CONTEXT : number;
			export var MODAL_PRESENTATION_FORMSHEET : number;
			export var MODAL_PRESENTATION_FULLSCREEN : number;
			export var MODAL_PRESENTATION_PAGESHEET : number;
			export var MODAL_TRANSITION_STYLE_COVER_VERTICAL : number;
			export var MODAL_TRANSITION_STYLE_CROSS_DISSOLVE : number;
			export var MODAL_TRANSITION_STYLE_FLIP_HORIZONTAL : number;
			export var MODAL_TRANSITION_STYLE_PARTIAL_CURL : number;
			export var apiName : string;
			export var appBadge : number;
			export var appSupportsShakeToEdit : boolean;
			export var bubbleParent : boolean;
			export var statusBarHidden : boolean;
			export var statusBarStyle : number;
			export function addEventListener (name: string, callback: (...args : any[]) => any) : void;
			export function applyProperties (props: Dictionary<Object>) : void;
			export function createNavigationGroup (parameters?: Dictionary<Ti.UI.iPhone.NavigationGroup>) : Ti.UI.iPhone.NavigationGroup;
			export function fireEvent (name: string, event: Dictionary<Object>) : void;
			export function getApiName () : string;
			export function getAppBadge () : number;
			export function getAppSupportsShakeToEdit () : boolean;
			export function getBubbleParent () : boolean;
			export function getStatusBarHidden () : boolean;
			export function getStatusBarStyle () : number;
			export function hideStatusBar (params?: hideStatusBarParams) : void;
			export function removeEventListener (name: string, callback: (...args : any[]) => any) : void;
			export function setAppBadge (appBadge: number) : void;
			export function setAppSupportsShakeToEdit (appSupportsShakeToEdit: boolean) : void;
			export function setBubbleParent (bubbleParent: boolean) : void;
			export function showStatusBar (params?: showStatusBarParams) : void;
			export enum ScrollIndicatorStyle {
				BLACK,
				DEFAULT,
				WHITE
			}
			export enum SystemButtonStyle {
				BAR,
				BORDERED,
				DONE,
				PLAIN
			}
			export enum ListViewStyle {
				GROUPED,
				PLAIN
			}
			export enum StatusBar {
				ANIMATION_STYLE_FADE,
				ANIMATION_STYLE_NONE,
				ANIMATION_STYLE_SLIDE,
				DEFAULT,
				GRAY,
				GREY,
				LIGHT_CONTENT,
				OPAQUE_BLACK,
				TRANSLUCENT_BLACK
			}
			export enum SystemButton {
				ACTION,
				ACTIVITY,
				ADD,
				BOOKMARKS,
				CAMERA,
				CANCEL,
				COMPOSE,
				CONTACT_ADD,
				DISCLOSURE,
				DONE,
				EDIT,
				FAST_FORWARD,
				FIXED_SPACE,
				FLEXIBLE_SPACE,
				INFO_DARK,
				INFO_LIGHT,
				ORGANIZE,
				PAUSE,
				PLAY,
				REFRESH,
				REPLY,
				REWIND,
				SAVE,
				SPINNER,
				STOP,
				TRASH
			}
			export enum TableViewStyle {
				GROUPED,
				PLAIN
			}
			export enum SystemIcon {
				BOOKMARKS,
				CONTACTS,
				DOWNLOADS,
				FAVORITES,
				FEATURED,
				HISTORY,
				MORE,
				MOST_RECENT,
				MOST_VIEWED,
				RECENTS,
				SEARCH,
				TOP_RATED
			}
			export enum ActivityIndicatorStyle {
				BIG,
				DARK,
				PLAIN
			}
			export enum ProgressBarStyle {
				BAR,
				DEFAULT,
				PLAIN
			}
			export enum ListViewSeparatorStyle {
				NONE,
				SINGLE_LINE
			}
			export enum RowAnimationStyle {
				BOTTOM,
				FADE,
				LEFT,
				NONE,
				RIGHT,
				TOP
			}
			export enum AnimationStyle {
				CURL_DOWN,
				CURL_UP,
				FLIP_FROM_LEFT,
				FLIP_FROM_RIGHT,
				NONE
			}
			export interface NavigationGroup extends Ti.UI.View {
				window : Ti.UI.Window;
				close (window: Ti.UI.Window, options: Dictionary<Object>) : void;
				getWindow () : Ti.UI.Window;
				open (window: Ti.UI.Window, options: Dictionary<Object>) : void;
			}
			export enum TableViewScrollPosition {
				BOTTOM,
				MIDDLE,
				NONE,
				TOP
			}
			export enum AlertDialogStyle {
				DEFAULT,
				LOGIN_AND_PASSWORD_INPUT,
				PLAIN_TEXT_INPUT,
				SECURE_TEXT_INPUT
			}
			export enum ListViewScrollPosition {
				BOTTOM,
				MIDDLE,
				NONE,
				TOP
			}
			export enum TableViewCellSelectionStyle {
				BLUE,
				GRAY,
				NONE
			}
			export enum ListViewCellSelectionStyle {
				BLUE,
				GRAY,
				NONE
			}
			export enum TableViewSeparatorStyle {
				NONE,
				SINGLE_LINE
			}
		}
		export interface TextArea extends Ti.UI.View {
			appearance : number;
			attributedString : Ti.UI.iOS.AttributedString;
			autoLink : number;
			autocapitalization : number;
			autocorrect : boolean;
			clearOnEdit : boolean;
			color : string;
			editable : boolean;
			ellipsize : boolean;
			enableReturnKey : boolean;
			font : Font;
			handleLinks : boolean;
			hintText : string;
			keyboardToolbar : any;
			keyboardToolbarColor : string;
			keyboardToolbarHeight : number;
			keyboardType : number;
			maxLength : number;
			returnKeyType : number;
			scrollable : boolean;
			scrollsToTop : boolean;
			selection : textAreaSelectedParams;
			suppressReturn : boolean;
			textAlign : any;
			value : string;
			verticalAlign : any;
			blur () : void;
			focus () : void;
			getAppearance () : number;
			getAttributedString () : Ti.UI.iOS.AttributedString;
			getAutoLink () : number;
			getAutocapitalization () : number;
			getAutocorrect () : boolean;
			getClearOnEdit () : boolean;
			getColor () : string;
			getEditable () : boolean;
			getEllipsize () : boolean;
			getEnableReturnKey () : boolean;
			getFont () : Font;
			getHandleLinks () : boolean;
			getHintText () : string;
			getKeyboardToolbar () : any;
			getKeyboardToolbarColor () : string;
			getKeyboardToolbarHeight () : number;
			getKeyboardType () : number;
			getMaxLength () : number;
			getReturnKeyType () : number;
			getScrollable () : boolean;
			getScrollsToTop () : boolean;
			getSelection () : textAreaSelectedParams;
			getSuppressReturn () : boolean;
			getTextAlign () : any;
			getValue () : string;
			getVerticalAlign () : any;
			hasText () : boolean;
			setAppearance (appearance: number) : void;
			setAttributedString (attributedString: Ti.UI.iOS.AttributedString) : void;
			setAutoLink (autoLink: number) : void;
			setAutocapitalization (autocapitalization: number) : void;
			setAutocorrect (autocorrect: boolean) : void;
			setClearOnEdit (clearOnEdit: boolean) : void;
			setColor (color: string) : void;
			setEditable (editable: boolean) : void;
			setEllipsize (ellipsize: boolean) : void;
			setEnableReturnKey (enableReturnKey: boolean) : void;
			setFont (font: Font) : void;
			setHandleLinks (handleLinks: boolean) : void;
			setHintText (hintText: string) : void;
			setKeyboardToolbar (keyboardToolbar: Array<Ti.UI.View>) : void;
			setKeyboardToolbar (keyboardToolbar: Ti.UI.iOS.Toolbar) : void;
			setKeyboardToolbarColor (keyboardToolbarColor: string) : void;
			setKeyboardToolbarHeight (keyboardToolbarHeight: number) : void;
			setKeyboardType (keyboardType: number) : void;
			setMaxLength (maxLength: number) : void;
			setReturnKeyType (returnKeyType: number) : void;
			setScrollable (scrollable: boolean) : void;
			setScrollsToTop (scrollsToTop: boolean) : void;
			setSelection (start: number, end: number) : void;
			setSuppressReturn (suppressReturn: boolean) : void;
			setTextAlign (textAlign: string) : void;
			setTextAlign (textAlign: number) : void;
			setValue (value: string) : void;
			setVerticalAlign (verticalAlign: number) : void;
			setVerticalAlign (verticalAlign: string) : void;
		}
		export interface View extends Ti.Proxy {
			accessibilityHidden : boolean;
			accessibilityHint : string;
			accessibilityLabel : string;
			accessibilityValue : string;
			anchorPoint : Point;
			animatedCenter : Point;
			backgroundColor : string;
			backgroundDisabledColor : string;
			backgroundDisabledImage : string;
			backgroundFocusedColor : string;
			backgroundFocusedImage : string;
			backgroundGradient : Gradient;
			backgroundImage : string;
			backgroundLeftCap : number;
			backgroundRepeat : boolean;
			backgroundSelectedColor : string;
			backgroundSelectedImage : string;
			backgroundTopCap : number;
			borderColor : string;
			borderRadius : number;
			borderWidth : number;
			bottom : any;
			center : Point;
			children : Array<Ti.UI.View>;
			clipMode : number;
			enabled : boolean;
			focusable : boolean;
			height : any;
			horizontalWrap : boolean;
			keepScreenOn : boolean;
			layout : string;
			left : any;
			opacity : number;
			overrideCurrentAnimation : boolean;
			pullBackgroundColor : string;
			rect : Dimension;
			right : any;
			size : Dimension;
			softKeyboardOnFocus : number;
			tintColor : any;
			top : any;
			touchEnabled : boolean;
			transform : any;
			viewShadowColor : string;
			viewShadowOffset : Point;
			viewShadowRadius : number;
			visible : boolean;
			width : any;
			zIndex : number;
			add (view: Ti.UI.View) : void;
			animate (animation: Ti.UI.Animation, callback: (...args : any[]) => any) : void;
			animate (animation: Dictionary<Ti.UI.Animation>, callback: (...args : any[]) => any) : void;
			convertPointToView (point: Point, destinationView: Ti.UI.View) : Point;
			finishLayout () : void;
			getAccessibilityHidden () : boolean;
			getAccessibilityHint () : string;
			getAccessibilityLabel () : string;
			getAccessibilityValue () : string;
			getAnchorPoint () : Point;
			getAnimatedCenter () : Point;
			getBackgroundColor () : string;
			getBackgroundDisabledColor () : string;
			getBackgroundDisabledImage () : string;
			getBackgroundFocusedColor () : string;
			getBackgroundFocusedImage () : string;
			getBackgroundGradient () : Gradient;
			getBackgroundImage () : string;
			getBackgroundLeftCap () : number;
			getBackgroundRepeat () : boolean;
			getBackgroundSelectedColor () : string;
			getBackgroundSelectedImage () : string;
			getBackgroundTopCap () : number;
			getBorderColor () : string;
			getBorderRadius () : number;
			getBorderWidth () : number;
			getBottom () : any;
			getCenter () : Point;
			getChildren () : Array<Ti.UI.View>;
			getClipMode () : number;
			getEnabled () : boolean;
			getFocusable () : boolean;
			getHeight () : any;
			getHorizontalWrap () : boolean;
			getKeepScreenOn () : boolean;
			getLayout () : string;
			getLeft () : any;
			getOpacity () : number;
			getOverrideCurrentAnimation () : boolean;
			getPullBackgroundColor () : string;
			getRect () : Dimension;
			getRight () : any;
			getSize () : Dimension;
			getSoftKeyboardOnFocus () : number;
			getTintColor () : string;
			getTop () : any;
			getTouchEnabled () : boolean;
			getTransform () : any;
			getViewShadowColor () : string;
			getViewShadowOffset () : Point;
			getViewShadowRadius () : number;
			getVisible () : boolean;
			getWidth () : any;
			getZIndex () : number;
			hide () : void;
			remove (view: Ti.UI.View) : void;
			removeAllChildren () : void;
			setAccessibilityHidden (accessibilityHidden: boolean) : void;
			setAccessibilityHint (accessibilityHint: string) : void;
			setAccessibilityLabel (accessibilityLabel: string) : void;
			setAccessibilityValue (accessibilityValue: string) : void;
			setAnchorPoint (anchorPoint: Point) : void;
			setBackgroundColor (backgroundColor: string) : void;
			setBackgroundDisabledColor (backgroundDisabledColor: string) : void;
			setBackgroundDisabledImage (backgroundDisabledImage: string) : void;
			setBackgroundFocusedColor (backgroundFocusedColor: string) : void;
			setBackgroundFocusedImage (backgroundFocusedImage: string) : void;
			setBackgroundGradient (backgroundGradient: Gradient) : void;
			setBackgroundImage (backgroundImage: string) : void;
			setBackgroundLeftCap (backgroundLeftCap: number) : void;
			setBackgroundRepeat (backgroundRepeat: boolean) : void;
			setBackgroundSelectedColor (backgroundSelectedColor: string) : void;
			setBackgroundSelectedImage (backgroundSelectedImage: string) : void;
			setBackgroundTopCap (backgroundTopCap: number) : void;
			setBorderColor (borderColor: string) : void;
			setBorderRadius (borderRadius: number) : void;
			setBorderWidth (borderWidth: number) : void;
			setBottom (bottom: number) : void;
			setBottom (bottom: string) : void;
			setCenter (center: Point) : void;
			setClipMode (clipMode: number) : void;
			setEnabled (enabled: boolean) : void;
			setFocusable (focusable: boolean) : void;
			setHeight (height: number) : void;
			setHeight (height: string) : void;
			setHorizontalWrap (horizontalWrap: boolean) : void;
			setKeepScreenOn (keepScreenOn: boolean) : void;
			setLayout (layout: string) : void;
			setLeft (left: number) : void;
			setLeft (left: string) : void;
			setOpacity (opacity: number) : void;
			setPullBackgroundColor (pullBackgroundColor: string) : void;
			setRight (right: number) : void;
			setRight (right: string) : void;
			setSoftKeyboardOnFocus (softKeyboardOnFocus: number) : void;
			setTintColor (tintColor: string) : void;
			setTop (top: number) : void;
			setTop (top: string) : void;
			setTouchEnabled (touchEnabled: boolean) : void;
			setTransform (transform: Ti.UI._2DMatrix) : void;
			setTransform (transform: Ti.UI._3DMatrix) : void;
			setViewShadowColor (viewShadowColor: string) : void;
			setViewShadowOffset (viewShadowOffset: Point) : void;
			setViewShadowRadius (viewShadowRadius: number) : void;
			setVisible (visible: boolean) : void;
			setWidth (width: number) : void;
			setWidth (width: string) : void;
			setZIndex (zIndex: number) : void;
			show () : void;
			startLayout () : void;
			toImage (callback?: (...args : any[]) => any, honorScaleFactor?: boolean) : Ti.Blob;
			updateLayout (params: Dictionary<Object>) : void;
		}
		export enum ActivityIndicatorStyle {
			BIG,
			BIG_DARK,
			DARK,
			PLAIN
		}
		export interface Switch extends Ti.UI.View {
			color : string;
			font : Font;
			onTintColor : string;
			style : number;
			textAlign : any;
			thumbTintColor : string;
			tintColor : string;
			title : string;
			titleOff : string;
			titleOn : string;
			value : boolean;
			verticalAlign : any;
			getColor () : string;
			getFont () : Font;
			getOnTintColor () : string;
			getStyle () : number;
			getTextAlign () : any;
			getThumbTintColor () : string;
			getTitle () : string;
			getTitleOff () : string;
			getTitleOn () : string;
			getValue () : boolean;
			getVerticalAlign () : any;
			setColor (color: string) : void;
			setFont (font: Font) : void;
			setOnTintColor (onTintColor: string) : void;
			setStyle (style: number) : void;
			setTextAlign (textAlign: string) : void;
			setTextAlign (textAlign: number) : void;
			setThumbTintColor (thumbTintColor: string) : void;
			setTitle (title: string) : void;
			setTitleOff (titleOff: string) : void;
			setTitleOn (titleOn: string) : void;
			setValue (value: boolean) : void;
			setVerticalAlign (verticalAlign: number) : void;
			setVerticalAlign (verticalAlign: string) : void;
		}
		export interface DashboardItem extends Ti.Proxy {
			badge : number;
			canDelete : boolean;
			image : any;
			selectedImage : any;
			getBadge () : number;
			getCanDelete () : boolean;
			getImage () : any;
			getSelectedImage () : any;
			setBadge (badge: number) : void;
			setCanDelete (canDelete: boolean) : void;
			setImage (image: string) : void;
			setImage (image: Ti.Blob) : void;
			setSelectedImage (selectedImage: string) : void;
			setSelectedImage (selectedImage: Ti.Blob) : void;
		}
		export interface Tab extends Ti.UI.View {
			active : boolean;
			activeIcon : string;
			activeIconIsMask : any;
			badge : string;
			icon : string;
			iconIsmask : any;
			title : string;
			titleid : string;
			window : Ti.UI.Window;
			close (window: Ti.UI.Window, options?: any) : void;
			getActive () : boolean;
			getActiveIcon () : string;
			getActiveIconIsMask () : boolean;
			getBadge () : string;
			getIcon () : string;
			getIconIsmask () : boolean;
			getTitle () : string;
			getTitleid () : string;
			getWindow () : Ti.UI.Window;
			open (window: Ti.UI.Window, options: any) : void;
			setActive (active: boolean) : void;
			setActiveIcon (activeIcon: string) : void;
			setActiveIconIsMask (activeIconIsMask: boolean) : void;
			setBadge (badge: string) : void;
			setIcon (icon: string) : void;
			setIconIsmask (iconIsmask: boolean) : void;
			setTitle (title: string) : void;
			setTitleid (titleid: string) : void;
			setWindow (window: Ti.UI.Window) : void;
		}
		export interface TableViewRow extends Ti.UI.View {
			className : string;
			color : string;
			editable : boolean;
			font : Font;
			hasCheck : boolean;
			hasChild : boolean;
			hasDetail : boolean;
			indentionLevel : number;
			leftImage : string;
			moveable : boolean;
			rightImage : string;
			selectedBackgroundColor : string;
			selectedBackgroundImage : string;
			selectedColor : string;
			selectionStyle : number;
			title : string;
			getClassName () : string;
			getColor () : string;
			getEditable () : boolean;
			getFont () : Font;
			getHasCheck () : boolean;
			getHasChild () : boolean;
			getHasDetail () : boolean;
			getIndentionLevel () : number;
			getLeftImage () : string;
			getMoveable () : boolean;
			getRightImage () : string;
			getSelectedBackgroundColor () : string;
			getSelectedBackgroundImage () : string;
			getSelectedColor () : string;
			getSelectionStyle () : number;
			getTitle () : string;
			setClassName (className: string) : void;
			setColor (color: string) : void;
			setEditable (editable: boolean) : void;
			setFont (font: Font) : void;
			setHasCheck (hasCheck: boolean) : void;
			setHasChild (hasChild: boolean) : void;
			setHasDetail (hasDetail: boolean) : void;
			setIndentionLevel (indentionLevel: number) : void;
			setLeftImage (leftImage: string) : void;
			setMoveable (moveable: boolean) : void;
			setRightImage (rightImage: string) : void;
			setSelectedBackgroundColor (selectedBackgroundColor: string) : void;
			setSelectedBackgroundImage (selectedBackgroundImage: string) : void;
			setSelectedColor (selectedColor: string) : void;
			setSelectionStyle (selectionStyle: number) : void;
			setTitle (title: string) : void;
		}
		export interface PickerRow extends Ti.UI.View {
			color : string;
			font : Font;
			fontSize : number;
			title : string;
			getColor () : string;
			getFont () : Font;
			getFontSize () : number;
			getTitle () : string;
			setColor (color: string) : void;
			setFont (font: Font) : void;
			setFontSize (fontSize: number) : void;
			setTitle (title: string) : void;
		}
		export interface ButtonBar extends Ti.UI.View {
			index : number;
			labels : any;
			style : number;
			getIndex () : number;
			getLabels () : any;
			getStyle () : number;
			setIndex (index: number) : void;
			setLabels (labels: Array<String>) : void;
			setLabels (labels: Array<BarItemType>) : void;
			setStyle (style: number) : void;
		}
		export interface Slider extends Ti.UI.View {
			disabledLeftTrackImage : string;
			disabledRightTrackImage : string;
			disabledThumbImage : string;
			highlightedLeftTrackImage : string;
			highlightedRightTrackImage : string;
			highlightedThumbImage : string;
			leftTrackImage : string;
			leftTrackLeftCap : number;
			leftTrackTopCap : number;
			max : number;
			maxRange : number;
			min : number;
			minRange : number;
			rightTrackImage : string;
			rightTrackLeftCap : number;
			rightTrackTopCap : number;
			selectedLeftTrackImage : string;
			selectedRightTrackImage : string;
			selectedThumbImage : string;
			thumbImage : any;
			value : string;
			getDisabledLeftTrackImage () : string;
			getDisabledRightTrackImage () : string;
			getDisabledThumbImage () : string;
			getHighlightedLeftTrackImage () : string;
			getHighlightedRightTrackImage () : string;
			getHighlightedThumbImage () : string;
			getLeftTrackImage () : string;
			getLeftTrackLeftCap () : number;
			getLeftTrackTopCap () : number;
			getMax () : number;
			getMaxRange () : number;
			getMin () : number;
			getMinRange () : number;
			getRightTrackImage () : string;
			getRightTrackLeftCap () : number;
			getRightTrackTopCap () : number;
			getSelectedLeftTrackImage () : string;
			getSelectedRightTrackImage () : string;
			getSelectedThumbImage () : string;
			getThumbImage () : any;
			getValue () : string;
			setDisabledLeftTrackImage (disabledLeftTrackImage: string) : void;
			setDisabledRightTrackImage (disabledRightTrackImage: string) : void;
			setDisabledThumbImage (disabledThumbImage: string) : void;
			setHighlightedLeftTrackImage (highlightedLeftTrackImage: string) : void;
			setHighlightedRightTrackImage (highlightedRightTrackImage: string) : void;
			setHighlightedThumbImage (highlightedThumbImage: string) : void;
			setLeftTrackImage (leftTrackImage: string) : void;
			setLeftTrackLeftCap (leftTrackLeftCap: number) : void;
			setLeftTrackTopCap (leftTrackTopCap: number) : void;
			setMax (max: number) : void;
			setMaxRange (maxRange: number) : void;
			setMin (min: number) : void;
			setMinRange (minRange: number) : void;
			setRightTrackImage (rightTrackImage: string) : void;
			setRightTrackLeftCap (rightTrackLeftCap: number) : void;
			setRightTrackTopCap (rightTrackTopCap: number) : void;
			setSelectedLeftTrackImage (selectedLeftTrackImage: string) : void;
			setSelectedRightTrackImage (selectedRightTrackImage: string) : void;
			setSelectedThumbImage (selectedThumbImage: string) : void;
			setThumbImage (thumbImage: string) : void;
			setThumbImage (thumbImage: Ti.Blob) : void;
			setValue (value: number, options?: Dictionary<Object>) : void;
		}
		export module Android {
			export var LINKIFY_ALL : number;
			export var LINKIFY_EMAIL_ADDRESSES : number;
			export var LINKIFY_MAP_ADDRESSES : number;
			export var LINKIFY_PHONE_NUMBERS : number;
			export var LINKIFY_WEB_URLS : number;
			export var OVER_SCROLL_ALWAYS : number;
			export var OVER_SCROLL_IF_CONTENT_SCROLLS : number;
			export var OVER_SCROLL_NEVER : number;
			export var PIXEL_FORMAT_A_8 : number;
			export var PIXEL_FORMAT_LA_88 : number;
			export var PIXEL_FORMAT_L_8 : number;
			export var PIXEL_FORMAT_OPAQUE : number;
			export var PIXEL_FORMAT_RGBA_4444 : number;
			export var PIXEL_FORMAT_RGBA_5551 : number;
			export var PIXEL_FORMAT_RGBA_8888 : number;
			export var PIXEL_FORMAT_RGBX_8888 : number;
			export var PIXEL_FORMAT_RGB_332 : number;
			export var PIXEL_FORMAT_RGB_565 : number;
			export var PIXEL_FORMAT_RGB_888 : number;
			export var PIXEL_FORMAT_TRANSLUCENT : number;
			export var PIXEL_FORMAT_TRANSPARENT : number;
			export var PIXEL_FORMAT_UNKNOWN : number;
			export var PROGRESS_INDICATOR_DETERMINANT : number;
			export var PROGRESS_INDICATOR_DIALOG : number;
			export var PROGRESS_INDICATOR_INDETERMINANT : number;
			export var PROGRESS_INDICATOR_STATUS_BAR : number;
			export var SOFT_INPUT_ADJUST_PAN : number;
			export var SOFT_INPUT_ADJUST_RESIZE : number;
			export var SOFT_INPUT_ADJUST_UNSPECIFIED : number;
			export var SOFT_INPUT_STATE_ALWAYS_HIDDEN : number;
			export var SOFT_INPUT_STATE_ALWAYS_VISIBLE : number;
			export var SOFT_INPUT_STATE_HIDDEN : number;
			export var SOFT_INPUT_STATE_UNSPECIFIED : number;
			export var SOFT_INPUT_STATE_VISIBLE : number;
			export var SOFT_KEYBOARD_DEFAULT_ON_FOCUS : number;
			export var SOFT_KEYBOARD_HIDE_ON_FOCUS : number;
			export var SOFT_KEYBOARD_SHOW_ON_FOCUS : number;
			export var SWITCH_STYLE_CHECKBOX : number;
			export var SWITCH_STYLE_TOGGLEBUTTON : number;
			export var WEBVIEW_LOAD_CACHE_ELSE_NETWORK : number;
			export var WEBVIEW_LOAD_CACHE_ONLY : number;
			export var WEBVIEW_LOAD_DEFAULT : number;
			export var WEBVIEW_LOAD_NO_CACHE : number;
			export var WEBVIEW_PLUGINS_OFF : number;
			export var WEBVIEW_PLUGINS_ON : number;
			export var WEBVIEW_PLUGINS_ON_DEMAND : number;
			export var apiName : string;
			export var bubbleParent : boolean;
			export function addEventListener (name: string, callback: (...args : any[]) => any) : void;
			export function applyProperties (props: Dictionary<Object>) : void;
			export function createProgressIndicator (parameters?: Dictionary<Ti.UI.Android.ProgressIndicator>) : Ti.UI.Android.ProgressIndicator;
			export function createSearchView (parameters?: Dictionary<Ti.UI.Android.SearchView>) : Ti.UI.Android.SearchView;
			export function fireEvent (name: string, event: Dictionary<Object>) : void;
			export function getApiName () : string;
			export function getBubbleParent () : boolean;
			export function hideSoftKeyboard () : void;
			export function openPreferences () : void;
			export function removeEventListener (name: string, callback: (...args : any[]) => any) : void;
			export function setBubbleParent (bubbleParent: boolean) : void;
			export interface SearchView extends Ti.UI.View {
				hintText : string;
				iconified : boolean;
				iconifiedByDefault : boolean;
				submitEnabled : boolean;
				value : string;
				blur () : void;
				focus () : void;
				getHintText () : string;
				getIconified () : boolean;
				getIconifiedByDefault () : boolean;
				getSubmitEnabled () : boolean;
				getValue () : string;
				setHintText (hintText: string) : void;
				setIconified (iconified: boolean) : void;
				setIconifiedByDefault (iconifiedByDefault: boolean) : void;
				setSubmitEnabled (submitEnabled: boolean) : void;
				setValue (value: string) : void;
			}
			export interface ProgressIndicator extends Ti.Proxy {
				cancelable : boolean;
				location : number;
				max : number;
				message : string;
				messageid : string;
				min : number;
				type : number;
				getCancelable () : boolean;
				getLocation () : number;
				getMax () : number;
				getMessage () : string;
				getMessageid () : string;
				getMin () : number;
				getType () : number;
				hide () : void;
				setCancelable (cancelable: boolean) : void;
				setLocation (location: number) : void;
				setMax (max: number) : void;
				setMessage (message: string) : void;
				setMessageid (messageid: string) : void;
				setMin (min: number) : void;
				setType (type: number) : void;
				show () : void;
			}
		}
		export interface DashboardView extends Ti.UI.View {
			columnCount : number;
			data : Array<Ti.UI.DashboardItem>;
			editable : boolean;
			rowCount : number;
			wobble : boolean;
			getColumnCount () : number;
			getData () : Array<Ti.UI.DashboardItem>;
			getEditable () : boolean;
			getRowCount () : number;
			getWobble () : boolean;
			setData (data: Array<Ti.UI.DashboardItem>) : void;
			setEditable (editable: boolean) : void;
			setWobble (wobble: boolean) : void;
			startEditing () : void;
			stopEditing () : void;
		}
		export interface ListItem extends Ti.Proxy {
			accessoryType : number;
			backgroundColor : string;
			backgroundGradient : Gradient;
			backgroundImage : string;
			canEdit : boolean;
			canMove : boolean;
			color : string;
			font : Font;
			height : any;
			image : string;
			itemId : string;
			searchableText : string;
			selectedBackgroundColor : string;
			selectedBackgroundGradient : Gradient;
			selectedBackgroundImage : string;
			selectionStyle : number;
			subtitle : string;
			title : string;
		}
		export interface AlertDialog extends Ti.Proxy {
			androidView : Ti.UI.View;
			buttonNames : Array<String>;
			cancel : number;
			message : string;
			messageid : string;
			ok : string;
			okid : string;
			persistent : boolean;
			style : number;
			title : string;
			titleid : string;
			getAndroidView () : Ti.UI.View;
			getButtonNames () : Array<String>;
			getCancel () : number;
			getMessage () : string;
			getOk () : string;
			getPersistent () : boolean;
			getStyle () : number;
			getTitle () : string;
			hide () : void;
			setAndroidView (androidView: Ti.UI.View) : void;
			setCancel (cancel: number) : void;
			setMessage (message: string) : void;
			setOk (ok: string) : void;
			setPersistent (persistent: boolean) : void;
			setStyle (style: number) : void;
			setTitle (title: string) : void;
			show () : void;
		}
		export interface _2DMatrix extends Ti.Proxy {
			a : number;
			b : number;
			c : number;
			d : number;
			tx : number;
			ty : number;
			getA () : number;
			getB () : number;
			getC () : number;
			getD () : number;
			getTx () : number;
			getTy () : number;
			invert () : Ti.UI._2DMatrix;
			multiply (t2: Ti.UI._2DMatrix) : Ti.UI._2DMatrix;
			rotate (angle: number, toAngle?: number) : Ti.UI._2DMatrix;
			scale (sx: number, sy: number, toSx?: number, toSy?: number) : Ti.UI._2DMatrix;
			setA (a: number) : void;
			setB (b: number) : void;
			setC (c: number) : void;
			setD (d: number) : void;
			setTx (tx: number) : void;
			setTy (ty: number) : void;
			translate (tx: number, ty: number) : Ti.UI._2DMatrix;
		}
		export interface TabbedBar extends Ti.UI.View {
			index : number;
			labels : any;
			style : number;
			getIndex () : number;
			getLabels () : any;
			getStyle () : number;
			setIndex (index: number) : void;
			setLabels (labels: Array<String>) : void;
			setLabels (labels: Array<BarItemType>) : void;
			setStyle (style: number) : void;
		}
		export interface Window extends Ti.UI.View {
			activity : Ti.Android.Activity;
			autoAdjustScrollViewInsets : boolean;
			backButtonTitle : string;
			backButtonTitleImage : any;
			barColor : string;
			barImage : string;
			exitOnClose : boolean;
			extendEdges : Array<Number>;
			flagSecure : boolean;
			fullscreen : boolean;
			hideShadow : boolean;
			includeOpaqueBars : boolean;
			leftNavButton : Ti.UI.View;
			leftNavButtons : Array<Ti.UI.View>;
			modal : boolean;
			navBarHidden : boolean;
			navTintColor : any;
			orientation : number;
			orientationModes : Array<Number>;
			rightNavButton : Ti.UI.View;
			rightNavButtons : Array<Ti.UI.View>;
			shadowImage : string;
			statusBarStyle : any;
			tabBarHidden : boolean;
			theme : string;
			title : string;
			titleAttributes : titleAttributesParams;
			titleControl : Ti.UI.View;
			titleImage : string;
			titlePrompt : string;
			titleid : string;
			titlepromptid : string;
			toolbar : Array<Object>;
			transitionAnimation : Ti.Proxy;
			translucent : boolean;
			url : string;
			windowFlags : number;
			windowPixelFormat : number;
			windowSoftInputMode : number;
			close (params?: Dictionary<Ti.UI.Animation>) : void;
			close (params?: closeWindowParams) : void;
			getActivity () : Ti.Android.Activity;
			getAutoAdjustScrollViewInsets () : boolean;
			getBackButtonTitle () : string;
			getBackButtonTitleImage () : any;
			getBarColor () : string;
			getBarImage () : string;
			getExitOnClose () : boolean;
			getExtendEdges () : Array<Number>;
			getFlagSecure () : boolean;
			getFullscreen () : boolean;
			getHideShadow () : boolean;
			getIncludeOpaqueBars () : boolean;
			getLeftNavButton () : Ti.UI.View;
			getLeftNavButtons () : Array<Ti.UI.View>;
			getModal () : boolean;
			getNavBarHidden () : boolean;
			getNavTintColor () : string;
			getOrientation () : number;
			getOrientationModes () : Array<Number>;
			getRightNavButton () : Ti.UI.View;
			getRightNavButtons () : Array<Ti.UI.View>;
			getShadowImage () : string;
			getStatusBarStyle () : number;
			getTabBarHidden () : boolean;
			getTheme () : string;
			getTitle () : string;
			getTitleAttributes () : titleAttributesParams;
			getTitleControl () : Ti.UI.View;
			getTitleImage () : string;
			getTitlePrompt () : string;
			getTitleid () : string;
			getTitlepromptid () : string;
			getToolbar () : Array<Object>;
			getTransitionAnimation () : Ti.Proxy;
			getTranslucent () : boolean;
			getUrl () : string;
			getWindowFlags () : number;
			getWindowPixelFormat () : number;
			getWindowSoftInputMode () : number;
			hideNavBar (options?: Dictionary<Object>) : void;
			hideTabBar () : void;
			open (params?: openWindowParams) : void;
			setAutoAdjustScrollViewInsets (autoAdjustScrollViewInsets: boolean) : void;
			setBackButtonTitle (backButtonTitle: string) : void;
			setBackButtonTitleImage (backButtonTitleImage: string) : void;
			setBackButtonTitleImage (backButtonTitleImage: Ti.Blob) : void;
			setBarColor (barColor: string) : void;
			setBarImage (barImage: string) : void;
			setExitOnClose (exitOnClose: boolean) : void;
			setExtendEdges (extendEdges: Array<Number>) : void;
			setFullscreen (fullscreen: boolean) : void;
			setHideShadow (hideShadow: boolean) : void;
			setIncludeOpaqueBars (includeOpaqueBars: boolean) : void;
			setLeftNavButton (leftNavButton: Ti.UI.View) : void;
			setLeftNavButtons (leftNavButtons: Array<Ti.UI.View>) : void;
			setModal (modal: boolean) : void;
			setNavBarHidden (navBarHidden: boolean) : void;
			setNavTintColor (navTintColor: string) : void;
			setOrientationModes (orientationModes: Array<Number>) : void;
			setRightNavButton (rightNavButton: Ti.UI.View) : void;
			setRightNavButtons (rightNavButtons: Array<Ti.UI.View>) : void;
			setShadowImage (shadowImage: string) : void;
			setStatusBarStyle (statusBarStyle: number) : void;
			setTabBarHidden (tabBarHidden: boolean) : void;
			setTitle (title: string) : void;
			setTitleAttributes (titleAttributes: titleAttributesParams) : void;
			setTitleControl (titleControl: Ti.UI.View) : void;
			setTitleImage (titleImage: string) : void;
			setTitlePrompt (titlePrompt: string) : void;
			setTitleid (titleid: string) : void;
			setTitlepromptid (titlepromptid: string) : void;
			setToolbar (items: Array<Object>, params?: windowToolbarParam) : void;
			setTransitionAnimation (transitionAnimation: Ti.Proxy) : void;
			setTranslucent (translucent: boolean) : void;
			setWindowPixelFormat (windowPixelFormat: number) : void;
			showNavBar (options?: Dictionary<Object>) : void;
		}
		export interface TextField extends Ti.UI.View {
			appearance : number;
			attributedHintText : Ti.UI.iOS.AttributedString;
			attributedString : Ti.UI.iOS.AttributedString;
			autoLink : number;
			autocapitalization : number;
			autocorrect : boolean;
			borderStyle : number;
			clearButtonMode : number;
			clearOnEdit : boolean;
			color : string;
			editable : boolean;
			ellipsize : boolean;
			enableReturnKey : boolean;
			font : Font;
			hintText : string;
			keyboardToolbar : any;
			keyboardToolbarColor : string;
			keyboardToolbarHeight : number;
			keyboardType : number;
			leftButton : any;
			leftButtonMode : number;
			leftButtonPadding : number;
			maxLength : number;
			minimumFontSize : number;
			paddingLeft : number;
			paddingRight : number;
			passwordMask : boolean;
			returnKeyType : number;
			rightButton : any;
			rightButtonMode : number;
			rightButtonPadding : number;
			selection : textFieldSelectedParams;
			suppressReturn : boolean;
			textAlign : any;
			value : string;
			verticalAlign : any;
			blur () : void;
			focus () : void;
			getAppearance () : number;
			getAttributedHintText () : Ti.UI.iOS.AttributedString;
			getAttributedString () : Ti.UI.iOS.AttributedString;
			getAutoLink () : number;
			getAutocapitalization () : number;
			getAutocorrect () : boolean;
			getBorderStyle () : number;
			getClearButtonMode () : number;
			getClearOnEdit () : boolean;
			getColor () : string;
			getEditable () : boolean;
			getEllipsize () : boolean;
			getEnableReturnKey () : boolean;
			getFont () : Font;
			getHintText () : string;
			getKeyboardToolbar () : any;
			getKeyboardToolbarColor () : string;
			getKeyboardToolbarHeight () : number;
			getKeyboardType () : number;
			getLeftButton () : any;
			getLeftButtonMode () : number;
			getLeftButtonPadding () : number;
			getMaxLength () : number;
			getMinimumFontSize () : number;
			getPaddingLeft () : number;
			getPaddingRight () : number;
			getPasswordMask () : boolean;
			getReturnKeyType () : number;
			getRightButton () : any;
			getRightButtonMode () : number;
			getRightButtonPadding () : number;
			getSelection () : textFieldSelectedParams;
			getSuppressReturn () : boolean;
			getTextAlign () : any;
			getValue () : string;
			getVerticalAlign () : any;
			hasText () : boolean;
			setAppearance (appearance: number) : void;
			setAttributedHintText (attributedHintText: Ti.UI.iOS.AttributedString) : void;
			setAttributedString (attributedString: Ti.UI.iOS.AttributedString) : void;
			setAutoLink (autoLink: number) : void;
			setAutocapitalization (autocapitalization: number) : void;
			setAutocorrect (autocorrect: boolean) : void;
			setBorderStyle (borderStyle: number) : void;
			setClearButtonMode (clearButtonMode: number) : void;
			setClearOnEdit (clearOnEdit: boolean) : void;
			setColor (color: string) : void;
			setEditable (editable: boolean) : void;
			setEllipsize (ellipsize: boolean) : void;
			setEnableReturnKey (enableReturnKey: boolean) : void;
			setFont (font: Font) : void;
			setHintText (hintText: string) : void;
			setKeyboardToolbar (keyboardToolbar: Array<Ti.UI.View>) : void;
			setKeyboardToolbar (keyboardToolbar: Ti.UI.iOS.Toolbar) : void;
			setKeyboardToolbarColor (keyboardToolbarColor: string) : void;
			setKeyboardToolbarHeight (keyboardToolbarHeight: number) : void;
			setKeyboardType (keyboardType: number) : void;
			setLeftButton (leftButton: any) : void;
			setLeftButtonMode (leftButtonMode: number) : void;
			setLeftButtonPadding (leftButtonPadding: number) : void;
			setMaxLength (maxLength: number) : void;
			setMinimumFontSize (minimumFontSize: number) : void;
			setPaddingLeft (paddingLeft: number) : void;
			setPaddingRight (paddingRight: number) : void;
			setPasswordMask (passwordMask: boolean) : void;
			setReturnKeyType (returnKeyType: number) : void;
			setRightButton (rightButton: any) : void;
			setRightButtonMode (rightButtonMode: number) : void;
			setRightButtonPadding (rightButtonPadding: number) : void;
			setSelection (start: number, end: number) : void;
			setSuppressReturn (suppressReturn: boolean) : void;
			setTextAlign (textAlign: string) : void;
			setTextAlign (textAlign: number) : void;
			setValue (value: string) : void;
			setVerticalAlign (verticalAlign: number) : void;
			setVerticalAlign (verticalAlign: string) : void;
		}
		export interface _3DMatrix extends Ti.Proxy {
			m11 : number;
			m12 : number;
			m13 : number;
			m14 : number;
			m21 : number;
			m22 : number;
			m23 : number;
			m24 : number;
			m31 : number;
			m32 : number;
			m33 : number;
			m34 : number;
			m41 : number;
			m42 : number;
			m43 : number;
			m44 : number;
			getM11 () : number;
			getM12 () : number;
			getM13 () : number;
			getM14 () : number;
			getM21 () : number;
			getM22 () : number;
			getM23 () : number;
			getM24 () : number;
			getM31 () : number;
			getM32 () : number;
			getM33 () : number;
			getM34 () : number;
			getM41 () : number;
			getM42 () : number;
			getM43 () : number;
			getM44 () : number;
			invert () : Ti.UI._3DMatrix;
			multiply (t2: Ti.UI._3DMatrix) : Ti.UI._3DMatrix;
			rotate (angle: number, x: number, y: number, z: number) : Ti.UI._3DMatrix;
			scale (sx: number, sy: number, sz: number) : Ti.UI._3DMatrix;
			setM11 (m11: number) : void;
			setM12 (m12: number) : void;
			setM13 (m13: number) : void;
			setM14 (m14: number) : void;
			setM21 (m21: number) : void;
			setM22 (m22: number) : void;
			setM23 (m23: number) : void;
			setM24 (m24: number) : void;
			setM31 (m31: number) : void;
			setM32 (m32: number) : void;
			setM33 (m33: number) : void;
			setM34 (m34: number) : void;
			setM41 (m41: number) : void;
			setM42 (m42: number) : void;
			setM43 (m43: number) : void;
			setM44 (m44: number) : void;
			translate (tx: number, ty: number, tz: number) : Ti.UI._3DMatrix;
		}
		export interface WebView extends Ti.UI.View {
			cacheMode : number;
			data : any;
			disableBounce : boolean;
			enableZoomControls : boolean;
			handlePlatformUrl : boolean;
			hideLoadIndicator : boolean;
			html : string;
			ignoreSslError : boolean;
			lightTouchEnabled : boolean;
			loading : boolean;
			onCreateWindow : (...args : any[]) => any;
			overScrollMode : number;
			pluginState : number;
			scalesPageToFit : boolean;
			scrollsToTop : boolean;
			showScrollbars : boolean;
			url : string;
			userAgent : string;
			willHandleTouches : boolean;
			canGoBack () : boolean;
			canGoForward () : boolean;
			evalJS (code: string) : string;
			getCacheMode () : number;
			getData () : any;
			getDisableBounce () : boolean;
			getEnableZoomControls () : boolean;
			getHandlePlatformUrl () : boolean;
			getHideLoadIndicator () : boolean;
			getHtml () : string;
			getIgnoreSslError () : boolean;
			getLightTouchEnabled () : boolean;
			getLoading () : boolean;
			getOnCreateWindow () : (...args : any[]) => any;
			getOverScrollMode () : number;
			getPluginState () : number;
			getScalesPageToFit () : boolean;
			getScrollsToTop () : boolean;
			getShowScrollbars () : boolean;
			getUrl () : string;
			getUserAgent () : string;
			getWillHandleTouches () : boolean;
			goBack () : void;
			goForward () : void;
			pause () : void;
			release () : void;
			reload () : void;
			repaint () : void;
			resume () : void;
			setBasicAuthentication (username: string, password: string) : void;
			setCacheMode (cacheMode: number) : void;
			setData (data: Ti.Blob) : void;
			setData (data: Ti.Filesystem.File) : void;
			setDisableBounce (disableBounce: boolean) : void;
			setEnableZoomControls (enableZoomControls: boolean) : void;
			setHandlePlatformUrl (handlePlatformUrl: boolean) : void;
			setHideLoadIndicator (hideLoadIndicator: boolean) : void;
			setHtml (html: any, options?: Dictionary<Object>) : void;
			setIgnoreSslError (ignoreSslError: boolean) : void;
			setLightTouchEnabled (lightTouchEnabled: boolean) : void;
			setLoading (loading: boolean) : void;
			setOnCreateWindow (onCreateWindow: (...args : any[]) => any) : void;
			setOverScrollMode (overScrollMode: number) : void;
			setPluginState (pluginState: number) : void;
			setScalesPageToFit (scalesPageToFit: boolean) : void;
			setScrollsToTop (scrollsToTop: boolean) : void;
			setShowScrollbars (showScrollbars: boolean) : void;
			setUrl (url: string) : void;
			setUserAgent (userAgent: string) : void;
			setWillHandleTouches (willHandleTouches: boolean) : void;
			stopLoading (hardStop: boolean) : void;
		}
		export interface Clipboard  {
			clearData (type?: string) : void;
			clearText () : void;
			getData (type: string) : any;
			getText () : string;
			hasData (type: string) : boolean;
			hasText () : any;
			setData (type: string, data: any) : void;
			setText (text: string) : void;
		}
		export interface ScrollableView extends Ti.UI.View {
			cacheSize : number;
			clipViews : boolean;
			currentPage : number;
			disableBounce : boolean;
			hitRect : Dimension;
			overScrollMode : number;
			overlayEnabled : boolean;
			pagingControlAlpha : number;
			pagingControlColor : string;
			pagingControlHeight : number;
			pagingControlOnTop : boolean;
			pagingControlTimeout : number;
			scrollingEnabled : boolean;
			showPagingControl : boolean;
			views : Array<Ti.UI.View>;
			addView (view: Ti.UI.View) : void;
			getCacheSize () : number;
			getClipViews () : boolean;
			getCurrentPage () : number;
			getDisableBounce () : boolean;
			getHitRect () : Dimension;
			getOverScrollMode () : number;
			getOverlayEnabled () : boolean;
			getPagingControlAlpha () : number;
			getPagingControlColor () : string;
			getPagingControlHeight () : number;
			getPagingControlOnTop () : boolean;
			getPagingControlTimeout () : number;
			getScrollingEnabled () : boolean;
			getShowPagingControl () : boolean;
			getViews () : Array<Ti.UI.View>;
			moveNext () : void;
			movePrevious () : void;
			removeView (view: number) : void;
			removeView (view: Ti.UI.View) : void;
			scrollToView (view: number) : void;
			scrollToView (view: Ti.UI.View) : void;
			setCacheSize (cacheSize: number) : void;
			setCurrentPage (currentPage: number) : void;
			setDisableBounce (disableBounce: boolean) : void;
			setHitRect (hitRect: Dimension) : void;
			setOverScrollMode (overScrollMode: number) : void;
			setOverlayEnabled (overlayEnabled: boolean) : void;
			setPagingControlAlpha (pagingControlAlpha: number) : void;
			setPagingControlColor (pagingControlColor: string) : void;
			setPagingControlHeight (pagingControlHeight: number) : void;
			setPagingControlOnTop (pagingControlOnTop: boolean) : void;
			setScrollingEnabled (scrollingEnabled: boolean) : void;
			setShowPagingControl (showPagingControl: boolean) : void;
			setViews (views: Array<Ti.UI.View>) : void;
		}
		export interface ListSection extends Ti.Proxy {
			footerTitle : string;
			footerView : Ti.UI.View;
			headerTitle : string;
			headerView : Ti.UI.View;
			items : Array<ListDataItem>;
			appendItems (dataItems: Array<ListDataItem>, animation?: ListViewAnimationProperties) : void;
			deleteItemsAt (itemIndex: number, count: number, animation?: ListViewAnimationProperties) : void;
			getFooterTitle () : string;
			getFooterView () : Ti.UI.View;
			getHeaderTitle () : string;
			getHeaderView () : Ti.UI.View;
			getItemAt (itemIndex: number) : ListDataItem;
			getItems () : Array<ListDataItem>;
			insertItemsAt (itemIndex: number, dataItems: Array<ListDataItem>, animation?: ListViewAnimationProperties) : void;
			replaceItemsAt (index: number, count: number, dataItems: Array<ListDataItem>, animation?: ListViewAnimationProperties) : void;
			setFooterTitle (footerTitle: string) : void;
			setFooterView (footerView: Ti.UI.View) : void;
			setHeaderTitle (headerTitle: string) : void;
			setHeaderView (headerView: Ti.UI.View) : void;
			setItems (dataItems: Array<ListDataItem>, animation?: ListViewAnimationProperties) : void;
			updateItemAt (index: number, dataItem: ListDataItem, animation?: ListViewAnimationProperties) : void;
		}
		export interface ScrollView extends Ti.UI.View {
			canCancelEvents : boolean;
			contentHeight : any;
			contentOffset : Dictionary<Object>;
			contentWidth : any;
			decelerationRate : number;
			disableBounce : boolean;
			horizontalBounce : boolean;
			maxZoomScale : number;
			minZoomScale : number;
			overScrollMode : number;
			scrollIndicatorStyle : number;
			scrollType : string;
			scrollingEnabled : boolean;
			scrollsToTop : boolean;
			showHorizontalScrollIndicator : boolean;
			showVerticalScrollIndicator : boolean;
			verticalBounce : boolean;
			zoomScale : number;
			getCanCancelEvents () : boolean;
			getContentHeight () : any;
			getContentOffset () : Dictionary<Object>;
			getContentWidth () : any;
			getDecelerationRate () : number;
			getDisableBounce () : boolean;
			getHorizontalBounce () : boolean;
			getMaxZoomScale () : number;
			getMinZoomScale () : number;
			getOverScrollMode () : number;
			getScrollIndicatorStyle () : number;
			getScrollType () : string;
			getScrollingEnabled () : boolean;
			getScrollsToTop () : boolean;
			getShowHorizontalScrollIndicator () : boolean;
			getShowVerticalScrollIndicator () : boolean;
			getVerticalBounce () : boolean;
			getZoomScale () : number;
			scrollTo (x: number, y: number) : void;
			scrollToBottom () : void;
			setCanCancelEvents (canCancelEvents: boolean) : void;
			setContentHeight (contentHeight: number) : void;
			setContentHeight (contentHeight: string) : void;
			setContentOffset (contentOffset: Dictionary<Object>, animated?: contentOffsetOption) : void;
			setContentWidth (contentWidth: number) : void;
			setContentWidth (contentWidth: string) : void;
			setDecelerationRate (decelerationRate: number) : void;
			setDisableBounce (disableBounce: boolean) : void;
			setHorizontalBounce (horizontalBounce: boolean) : void;
			setMaxZoomScale (maxZoomScale: number) : void;
			setMinZoomScale (minZoomScale: number) : void;
			setOverScrollMode (overScrollMode: number) : void;
			setScrollIndicatorStyle (scrollIndicatorStyle: number) : void;
			setScrollingEnabled (scrollingEnabled: boolean) : void;
			setScrollsToTop (scrollsToTop: boolean) : void;
			setShowHorizontalScrollIndicator (showHorizontalScrollIndicator: boolean) : void;
			setShowVerticalScrollIndicator (showVerticalScrollIndicator: boolean) : void;
			setVerticalBounce (verticalBounce: boolean) : void;
			setZoomScale (zoomScale: number, animated?: zoomScaleOption) : void;
		}
		export interface ListView extends Ti.UI.View {
			allowsSelection : boolean;
			canScroll : boolean;
			caseInsensitiveSearch : boolean;
			defaultItemTemplate : any;
			editing : boolean;
			footerDividersEnabled : boolean;
			footerTitle : string;
			footerView : Ti.UI.View;
			headerDividersEnabled : boolean;
			headerTitle : string;
			headerView : Ti.UI.View;
			keepSectionsInSearch : boolean;
			pruneSectionsOnEdit : boolean;
			pullView : Ti.UI.View;
			refreshControl : Ti.UI.RefreshControl;
			scrollIndicatorStyle : number;
			searchText : string;
			searchView : any;
			sectionCount : number;
			sectionIndexTitles : Array<ListViewIndexEntry>;
			sections : Array<Ti.UI.ListSection>;
			separatorColor : string;
			separatorInsets : Dictionary<Object>;
			separatorStyle : number;
			showVerticalScrollIndicator : boolean;
			style : number;
			templates : Dictionary<Object>;
			willScrollOnStatusTap : boolean;
			appendSection (section: Ti.UI.ListSection, animation?: ListViewAnimationProperties) : void;
			appendSection (section: Array<Ti.UI.ListSection>, animation?: ListViewAnimationProperties) : void;
			deleteSectionAt (sectionIndex: number, animation?: ListViewAnimationProperties) : void;
			deselectItem (sectionIndex: number, itemIndex: number) : void;
			getAllowsSelection () : boolean;
			getCanScroll () : boolean;
			getCaseInsensitiveSearch () : boolean;
			getDefaultItemTemplate () : any;
			getEditing () : boolean;
			getFooterDividersEnabled () : boolean;
			getFooterTitle () : string;
			getFooterView () : Ti.UI.View;
			getHeaderDividersEnabled () : boolean;
			getHeaderTitle () : string;
			getHeaderView () : Ti.UI.View;
			getKeepSectionsInSearch () : boolean;
			getPruneSectionsOnEdit () : boolean;
			getPullView () : Ti.UI.View;
			getRefreshControl () : Ti.UI.RefreshControl;
			getScrollIndicatorStyle () : number;
			getSearchText () : string;
			getSearchView () : any;
			getSectionCount () : number;
			getSectionIndexTitles () : Array<ListViewIndexEntry>;
			getSections () : Array<Ti.UI.ListSection>;
			getSeparatorColor () : string;
			getSeparatorInsets () : Dictionary<Object>;
			getSeparatorStyle () : number;
			getShowVerticalScrollIndicator () : boolean;
			getStyle () : number;
			getTemplates () : Dictionary<Object>;
			getWillScrollOnStatusTap () : boolean;
			insertSectionAt (sectionIndex: number, section: Ti.UI.ListSection, animation?: ListViewAnimationProperties) : void;
			insertSectionAt (sectionIndex: number, section: Array<Ti.UI.ListSection>, animation?: ListViewAnimationProperties) : void;
			replaceSectionAt (sectionIndex: number, section: Ti.UI.ListSection, animation: ListViewAnimationProperties) : void;
			scrollToItem (sectionIndex: number, itemIndex: number, animation?: ListViewAnimationProperties) : void;
			selectItem (sectionIndex: number, itemIndex: number) : void;
			setAllowsSelection (allowsSelection: boolean) : void;
			setCanScroll (canScroll: boolean) : void;
			setCaseInsensitiveSearch (caseInsensitiveSearch: boolean) : void;
			setContentInsets (edgeInsets: ListViewEdgeInsets, animated?: ListViewContentInsetOption) : void;
			setDefaultItemTemplate (defaultItemTemplate: string) : void;
			setDefaultItemTemplate (defaultItemTemplate: number) : void;
			setEditing (editing: boolean) : void;
			setFooterTitle (footerTitle: string) : void;
			setFooterView (footerView: Ti.UI.View) : void;
			setHeaderTitle (headerTitle: string) : void;
			setHeaderView (headerView: Ti.UI.View) : void;
			setKeepSectionsInSearch (keepSectionsInSearch: boolean) : void;
			setMarker (markerProps: ListViewMarkerProps) : void;
			setPruneSectionsOnEdit (pruneSectionsOnEdit: boolean) : void;
			setPullView (pullView: Ti.UI.View) : void;
			setRefreshControl (refreshControl: Ti.UI.RefreshControl) : void;
			setScrollIndicatorStyle (scrollIndicatorStyle: number) : void;
			setSearchText (searchText: string) : void;
			setSearchView (searchView: Ti.UI.SearchBar) : void;
			setSearchView (searchView: Ti.UI.Android.SearchView) : void;
			setSectionIndexTitles (sectionIndexTitles: Array<ListViewIndexEntry>) : void;
			setSections (sections: Array<Ti.UI.ListSection>) : void;
			setSeparatorColor (separatorColor: string) : void;
			setSeparatorInsets (separatorInsets: Dictionary<Object>) : void;
			setSeparatorStyle (separatorStyle: number) : void;
			setShowVerticalScrollIndicator (showVerticalScrollIndicator: boolean) : void;
			setWillScrollOnStatusTap (willScrollOnStatusTap: boolean) : void;
		}
		export interface TabGroup extends Ti.UI.View {
			activeTab : Ti.UI.Tab;
			activeTabBackgroundColor : string;
			activeTabBackgroundDisabledColor : string;
			activeTabBackgroundDisabledImage : string;
			activeTabBackgroundFocusedColor : string;
			activeTabBackgroundFocusedImage : string;
			activeTabBackgroundImage : string;
			activeTabBackgroundSelectedColor : string;
			activeTabBackgroundSelectedImage : string;
			activeTabIconTint : string;
			activity : Ti.Android.Activity;
			allowUserCustomization : boolean;
			barColor : string;
			editButtonTitle : string;
			exitOnClose : boolean;
			navBarHidden : boolean;
			navTintColor : any;
			shadowImage : string;
			tabDividerColor : string;
			tabDividerWidth : any;
			tabHeight : any;
			tabs : Array<Ti.UI.Tab>;
			tabsAtBottom : boolean;
			tabsBackgroundColor : string;
			tabsBackgroundDisabledColor : string;
			tabsBackgroundDisabledImage : string;
			tabsBackgroundFocusedColor : string;
			tabsBackgroundFocusedImage : string;
			tabsBackgroundImage : string;
			tabsBackgroundSelectedColor : string;
			tabsBackgroundSelectedImage : string;
			tabsTintColor : any;
			title : string;
			titleAttributes : titleAttributesParams;
			translucent : boolean;
			windowSoftInputMode : number;
			addTab (tab: Ti.UI.Tab) : void;
			close () : void;
			getActiveTab () : Ti.UI.Tab;
			getActiveTabBackgroundColor () : string;
			getActiveTabBackgroundDisabledColor () : string;
			getActiveTabBackgroundDisabledImage () : string;
			getActiveTabBackgroundFocusedColor () : string;
			getActiveTabBackgroundFocusedImage () : string;
			getActiveTabBackgroundImage () : string;
			getActiveTabBackgroundSelectedColor () : string;
			getActiveTabBackgroundSelectedImage () : string;
			getActiveTabIconTint () : string;
			getActivity () : Ti.Android.Activity;
			getAllowUserCustomization () : boolean;
			getBarColor () : string;
			getEditButtonTitle () : string;
			getExitOnClose () : boolean;
			getNavBarHidden () : boolean;
			getNavTintColor () : string;
			getShadowImage () : string;
			getTabDividerColor () : string;
			getTabDividerWidth () : any;
			getTabHeight () : any;
			getTabs () : Array<Ti.UI.Tab>;
			getTabsAtBottom () : boolean;
			getTabsBackgroundColor () : string;
			getTabsBackgroundDisabledColor () : string;
			getTabsBackgroundDisabledImage () : string;
			getTabsBackgroundFocusedColor () : string;
			getTabsBackgroundFocusedImage () : string;
			getTabsBackgroundImage () : string;
			getTabsBackgroundSelectedColor () : string;
			getTabsBackgroundSelectedImage () : string;
			getTabsTintColor () : string;
			getTitle () : string;
			getTitleAttributes () : titleAttributesParams;
			getTranslucent () : boolean;
			getWindowSoftInputMode () : number;
			open () : void;
			removeTab (tab: Ti.UI.Tab) : void;
			setActiveTab (indexOrObject: number) : void;
			setActiveTab (indexOrObject: Ti.UI.Tab) : void;
			setActiveTabBackgroundColor (activeTabBackgroundColor: string) : void;
			setActiveTabBackgroundDisabledColor (activeTabBackgroundDisabledColor: string) : void;
			setActiveTabBackgroundDisabledImage (activeTabBackgroundDisabledImage: string) : void;
			setActiveTabBackgroundFocusedColor (activeTabBackgroundFocusedColor: string) : void;
			setActiveTabBackgroundFocusedImage (activeTabBackgroundFocusedImage: string) : void;
			setActiveTabBackgroundImage (activeTabBackgroundImage: string) : void;
			setActiveTabBackgroundSelectedColor (activeTabBackgroundSelectedColor: string) : void;
			setActiveTabBackgroundSelectedImage (activeTabBackgroundSelectedImage: string) : void;
			setActiveTabIconTint (activeTabIconTint: string) : void;
			setAllowUserCustomization (allowUserCustomization: boolean) : void;
			setBarColor (barColor: string) : void;
			setEditButtonTitle (editButtonTitle: string) : void;
			setExitOnClose (exitOnClose: boolean) : void;
			setNavBarHidden (navBarHidden: boolean) : void;
			setNavTintColor (navTintColor: string) : void;
			setShadowImage (shadowImage: string) : void;
			setTabDividerColor (tabDividerColor: string) : void;
			setTabDividerWidth (tabDividerWidth: number) : void;
			setTabDividerWidth (tabDividerWidth: string) : void;
			setTabHeight (tabHeight: number) : void;
			setTabHeight (tabHeight: string) : void;
			setTabs (tabs: Array<Ti.UI.Tab>) : void;
			setTabsAtBottom (tabsAtBottom: boolean) : void;
			setTabsBackgroundColor (tabsBackgroundColor: string) : void;
			setTabsBackgroundDisabledColor (tabsBackgroundDisabledColor: string) : void;
			setTabsBackgroundDisabledImage (tabsBackgroundDisabledImage: string) : void;
			setTabsBackgroundFocusedColor (tabsBackgroundFocusedColor: string) : void;
			setTabsBackgroundFocusedImage (tabsBackgroundFocusedImage: string) : void;
			setTabsBackgroundImage (tabsBackgroundImage: string) : void;
			setTabsBackgroundSelectedColor (tabsBackgroundSelectedColor: string) : void;
			setTabsBackgroundSelectedImage (tabsBackgroundSelectedImage: string) : void;
			setTabsTintColor (tabsTintColor: string) : void;
			setTitle (title: string) : void;
			setTitleAttributes (titleAttributes: titleAttributesParams) : void;
			setTranslucent (translucent: boolean) : void;
		}
		export interface TableView extends Ti.UI.View {
			allowsSelection : boolean;
			allowsSelectionDuringEditing : boolean;
			data : any;
			editable : boolean;
			editing : boolean;
			filterAnchored : boolean;
			filterAttribute : string;
			filterCaseInsensitive : boolean;
			footerDividersEnabled : boolean;
			footerTitle : string;
			footerView : Ti.UI.View;
			headerDividersEnabled : boolean;
			headerPullView : Ti.UI.View;
			headerTitle : string;
			headerView : Ti.UI.View;
			hideSearchOnSelection : boolean;
			index : Array<TableViewIndexEntry>;
			maxRowHeight : number;
			minRowHeight : number;
			moveable : boolean;
			moving : boolean;
			overScrollMode : number;
			refreshControl : Ti.UI.RefreshControl;
			rowHeight : number;
			scrollIndicatorStyle : number;
			scrollable : boolean;
			scrollsToTop : boolean;
			search : any;
			searchAsChild : boolean;
			searchHidden : boolean;
			sectionCount : number;
			sections : Array<Ti.UI.TableViewSection>;
			separatorColor : string;
			separatorInsets : Dictionary<Object>;
			separatorStyle : number;
			showVerticalScrollIndicator : boolean;
			style : number;
			appendRow (row: Ti.UI.TableViewRow, animation?: TableViewAnimationProperties) : void;
			appendRow (row: Dictionary<Ti.UI.TableViewRow>, animation?: TableViewAnimationProperties) : void;
			appendRow (row: Array<Ti.UI.TableViewRow>, animation?: TableViewAnimationProperties) : void;
			appendRow (row: Array<Dictionary<Ti.UI.TableViewRow>>, animation?: TableViewAnimationProperties) : void;
			appendSection (section: Ti.UI.TableViewSection, animation?: TableViewAnimationProperties) : void;
			appendSection (section: Dictionary<Ti.UI.TableViewSection>, animation?: TableViewAnimationProperties) : void;
			appendSection (section: Array<Ti.UI.TableViewSection>, animation?: TableViewAnimationProperties) : void;
			appendSection (section: Array<Dictionary<Ti.UI.TableViewSection>>, animation?: TableViewAnimationProperties) : void;
			deleteRow (row: number, animation?: TableViewAnimationProperties) : void;
			deleteRow (row: Ti.UI.TableViewRow, animation?: TableViewAnimationProperties) : void;
			deleteSection (section: number, animation?: TableViewAnimationProperties) : void;
			deselectRow (row: number) : void;
			getAllowsSelection () : boolean;
			getAllowsSelectionDuringEditing () : boolean;
			getData () : any;
			getEditable () : boolean;
			getEditing () : boolean;
			getFilterAnchored () : boolean;
			getFilterAttribute () : string;
			getFilterCaseInsensitive () : boolean;
			getFooterDividersEnabled () : boolean;
			getFooterTitle () : string;
			getFooterView () : Ti.UI.View;
			getHeaderDividersEnabled () : boolean;
			getHeaderPullView () : Ti.UI.View;
			getHeaderTitle () : string;
			getHeaderView () : Ti.UI.View;
			getHideSearchOnSelection () : boolean;
			getIndex () : Array<TableViewIndexEntry>;
			getMaxRowHeight () : number;
			getMinRowHeight () : number;
			getMoveable () : boolean;
			getMoving () : boolean;
			getOverScrollMode () : number;
			getRefreshControl () : Ti.UI.RefreshControl;
			getRowHeight () : number;
			getScrollIndicatorStyle () : number;
			getScrollable () : boolean;
			getScrollsToTop () : boolean;
			getSearch () : any;
			getSearchAsChild () : boolean;
			getSearchHidden () : boolean;
			getSectionCount () : number;
			getSections () : Array<Ti.UI.TableViewSection>;
			getSeparatorColor () : string;
			getSeparatorInsets () : Dictionary<Object>;
			getSeparatorStyle () : number;
			getShowVerticalScrollIndicator () : boolean;
			getStyle () : number;
			insertRowAfter (index: number, row: Ti.UI.TableViewRow, animation?: TableViewAnimationProperties) : void;
			insertRowAfter (index: number, row: Dictionary<Ti.UI.TableViewRow>, animation?: TableViewAnimationProperties) : void;
			insertRowBefore (index: number, row: Ti.UI.TableViewRow, animation?: TableViewAnimationProperties) : void;
			insertRowBefore (index: number, row: Dictionary<Ti.UI.TableViewRow>, animation?: TableViewAnimationProperties) : void;
			insertSectionAfter (index: number, section: Ti.UI.TableViewSection, animation?: TableViewAnimationProperties) : void;
			insertSectionAfter (index: number, section: Dictionary<Ti.UI.TableViewSection>, animation?: TableViewAnimationProperties) : void;
			insertSectionBefore (index: number, section: Ti.UI.TableViewSection, animation?: TableViewAnimationProperties) : void;
			insertSectionBefore (index: number, section: Dictionary<Ti.UI.TableViewSection>, animation?: TableViewAnimationProperties) : void;
			scrollToIndex (index: number, animation?: TableViewAnimationProperties) : void;
			scrollToTop (top: number, animation?: TableViewAnimationProperties) : void;
			selectRow (row: number) : void;
			setAllowsSelection (allowsSelection: boolean) : void;
			setAllowsSelectionDuringEditing (allowsSelectionDuringEditing: boolean) : void;
			setContentInsets (edgeInsets: TableViewEdgeInsets, animated?: TableViewContentInsetOption) : void;
			setData (data: Array<Ti.UI.TableViewRow>, animation: TableViewAnimationProperties) : void;
			setData (data: Array<Dictionary<Ti.UI.TableViewRow>>, animation: TableViewAnimationProperties) : void;
			setData (data: Array<Ti.UI.TableViewSection>, animation: TableViewAnimationProperties) : void;
			setEditable (editable: boolean) : void;
			setEditing (editing: boolean) : void;
			setFilterAnchored (filterAnchored: boolean) : void;
			setFilterAttribute (filterAttribute: string) : void;
			setFilterCaseInsensitive (filterCaseInsensitive: boolean) : void;
			setFooterTitle (footerTitle: string) : void;
			setFooterView (footerView: Ti.UI.View) : void;
			setHeaderPullView (view: Ti.UI.View) : void;
			setHeaderTitle (headerTitle: string) : void;
			setHeaderView (headerView: Ti.UI.View) : void;
			setHideSearchOnSelection (hideSearchOnSelection: boolean) : void;
			setIndex (index: Array<TableViewIndexEntry>) : void;
			setMaxRowHeight (maxRowHeight: number) : void;
			setMinRowHeight (minRowHeight: number) : void;
			setMoveable (moveable: boolean) : void;
			setMoving (moving: boolean) : void;
			setOverScrollMode (overScrollMode: number) : void;
			setRefreshControl (refreshControl: Ti.UI.RefreshControl) : void;
			setRowHeight (rowHeight: number) : void;
			setScrollIndicatorStyle (scrollIndicatorStyle: number) : void;
			setScrollable (scrollable: boolean) : void;
			setScrollsToTop (scrollsToTop: boolean) : void;
			setSearch (search: Ti.UI.SearchBar) : void;
			setSearch (search: Ti.UI.Android.SearchView) : void;
			setSearchAsChild (searchAsChild: boolean) : void;
			setSearchHidden (searchHidden: boolean) : void;
			setSections (sections: Array<Ti.UI.TableViewSection>) : void;
			setSeparatorColor (separatorColor: string) : void;
			setSeparatorInsets (separatorInsets: Dictionary<Object>) : void;
			setSeparatorStyle (separatorStyle: number) : void;
			setShowVerticalScrollIndicator (showVerticalScrollIndicator: boolean) : void;
			setStyle (style: number) : void;
			updateRow (index: number, row: Ti.UI.TableViewRow, animation: TableViewAnimationProperties) : void;
			updateSection (index: number, section: Ti.UI.TableViewSection, animation: TableViewAnimationProperties) : void;
		}
		export interface Button extends Ti.UI.View {
			color : string;
			disabledColor : string;
			font : Font;
			image : any;
			selectedColor : string;
			shadowColor : string;
			shadowOffset : Dictionary<Object>;
			shadowRadius : number;
			style : number;
			systemButton : number;
			textAlign : any;
			title : string;
			titleid : string;
			verticalAlign : any;
			getColor () : string;
			getDisabledColor () : string;
			getFont () : Font;
			getImage () : any;
			getSelectedColor () : string;
			getShadowColor () : string;
			getShadowOffset () : Dictionary<Object>;
			getShadowRadius () : number;
			getStyle () : number;
			getSystemButton () : number;
			getTextAlign () : any;
			getTitle () : string;
			getTitleid () : string;
			getVerticalAlign () : any;
			setColor (color: string) : void;
			setDisabledColor (disabledColor: string) : void;
			setFont (font: Font) : void;
			setImage (image: string) : void;
			setImage (image: Ti.Blob) : void;
			setSelectedColor (selectedColor: string) : void;
			setShadowColor (shadowColor: string) : void;
			setShadowOffset (shadowOffset: Dictionary<Object>) : void;
			setShadowRadius (shadowRadius: number) : void;
			setStyle (style: number) : void;
			setSystemButton (systemButton: number) : void;
			setTextAlign (textAlign: string) : void;
			setTextAlign (textAlign: number) : void;
			setTitle (title: string) : void;
			setTitleid (titleid: string) : void;
			setVerticalAlign (verticalAlign: number) : void;
			setVerticalAlign (verticalAlign: string) : void;
		}
		export interface OptionDialog extends Ti.Proxy {
			androidView : Ti.UI.View;
			buttonNames : Array<String>;
			cancel : number;
			destructive : number;
			opaquebackground : boolean;
			options : Array<String>;
			persistent : boolean;
			selectedIndex : number;
			title : string;
			titleid : string;
			getAndroidView () : Ti.UI.View;
			getButtonNames () : Array<String>;
			getCancel () : number;
			getDestructive () : number;
			getOpaquebackground () : boolean;
			getOptions () : Array<String>;
			getPersistent () : boolean;
			getSelectedIndex () : number;
			getTitle () : string;
			getTitleid () : string;
			hide (params?: hideParams) : void;
			setAndroidView (androidView: Ti.UI.View) : void;
			setCancel (cancel: number) : void;
			setOpaquebackground (opaquebackground: boolean) : void;
			setPersistent (persistent: boolean) : void;
			setTitle (title: string) : void;
			setTitleid (titleid: string) : void;
			show (params?: showParams) : void;
		}
		export interface RefreshControl extends Ti.Proxy {
			tintColor : string;
			title : Ti.UI.iOS.AttributedString;
			beginRefreshing () : void;
			endRefreshing () : void;
			getTintColor () : string;
			getTitle () : Ti.UI.iOS.AttributedString;
			setTintColor (tintColor: string) : void;
			setTitle (title: Ti.UI.iOS.AttributedString) : void;
		}
		export interface EmailDialog extends Ti.Proxy {
			CANCELLED : number;
			FAILED : number;
			SAVED : number;
			SENT : number;
			barColor : string;
			bccRecipients : Array<String>;
			ccRecipients : Array<String>;
			html : boolean;
			messageBody : string;
			subject : string;
			toRecipients : Array<String>;
			addAttachment (attachment: Ti.Blob) : void;
			addAttachment (attachment: Ti.Filesystem.File) : void;
			getBarColor () : string;
			getBccRecipients () : Array<String>;
			getCcRecipients () : Array<String>;
			getHtml () : boolean;
			getMessageBody () : string;
			getSubject () : string;
			getToRecipients () : Array<String>;
			isSupported () : boolean;
			open (properties: any) : void;
			setBarColor (barColor: string) : void;
			setBccRecipients (bccRecipients: Array<String>) : void;
			setCcRecipients (ccRecipients: Array<String>) : void;
			setHtml (html: boolean) : void;
			setMessageBody (messageBody: string) : void;
			setSubject (subject: string) : void;
			setToRecipients (toRecipients: Array<String>) : void;
		}
		export interface CoverFlowView extends Ti.UI.View {
			images : any;
			selected : number;
			getImages () : any;
			getSelected () : number;
			setImage (index: number, image: string) : void;
			setImage (image: Ti.Blob) : void;
			setImage (image: Ti.Filesystem.File) : void;
			setImage (index: number, image: CoverFlowImageType) : void;
			setImages (images: Array<String>) : void;
			setImages (images: Array<Ti.Blob>) : void;
			setImages (images: Array<Ti.Filesystem.File>) : void;
			setImages (images: Array<CoverFlowImageType>) : void;
			setSelected (selected: number) : void;
		}
		export interface ImageView extends Ti.UI.View {
			animating : boolean;
			autorotate : boolean;
			decodeRetries : number;
			defaultImage : string;
			duration : number;
			enableZoomControls : boolean;
			hires : boolean;
			image : any;
			images : any;
			paused : boolean;
			preventDefaultImage : boolean;
			repeatCount : number;
			reverse : boolean;
			url : string;
			getAnimating () : boolean;
			getAutorotate () : boolean;
			getDecodeRetries () : number;
			getDefaultImage () : string;
			getDuration () : number;
			getEnableZoomControls () : boolean;
			getHires () : boolean;
			getImage () : any;
			getImages () : any;
			getPaused () : boolean;
			getPreventDefaultImage () : boolean;
			getRepeatCount () : number;
			getReverse () : boolean;
			getUrl () : string;
			pause () : void;
			resume () : void;
			setDecodeRetries (decodeRetries: number) : void;
			setDefaultImage (defaultImage: string) : void;
			setDuration (duration: number) : void;
			setEnableZoomControls (enableZoomControls: boolean) : void;
			setHires (hires: boolean) : void;
			setImage (image: string) : void;
			setImage (image: Ti.Blob) : void;
			setImage (image: Ti.Filesystem.File) : void;
			setImages (images: Array<String>) : void;
			setImages (images: Array<Ti.Blob>) : void;
			setImages (images: Array<Ti.Filesystem.File>) : void;
			setPreventDefaultImage (preventDefaultImage: boolean) : void;
			setRepeatCount (repeatCount: number) : void;
			setReverse (reverse: boolean) : void;
			setUrl (url: string) : void;
			start () : void;
			stop () : void;
			toBlob () : void;
		}
		export interface MaskedImage extends Ti.UI.View {
			image : string;
			mask : string;
			mode : number;
			tint : string;
			getImage () : string;
			getMask () : string;
			getMode () : number;
			getTint () : string;
			setImage (image: string) : void;
			setMask (mask: string) : void;
			setMode (mode: number) : void;
			setTint (tint: string) : void;
		}
		export interface ProgressBar extends Ti.UI.View {
			color : string;
			font : Font;
			max : number;
			message : string;
			min : number;
			style : number;
			value : number;
			getColor () : string;
			getFont () : Font;
			getMax () : number;
			getMessage () : string;
			getMin () : number;
			getStyle () : number;
			getValue () : number;
			setColor (color: string) : void;
			setFont (font: Font) : void;
			setMax (max: number) : void;
			setMessage (message: string) : void;
			setMin (min: number) : void;
			setStyle (style: number) : void;
			setValue (value: number) : void;
		}
		export module MobileWeb {
			export var apiName : string;
			export function addEventListener (name: string, callback: (...args : any[]) => any) : void;
			export function applyProperties (props: Dictionary<Object>) : void;
			export function createNavigationGroup (parameters?: Dictionary<Ti.UI.MobileWeb.NavigationGroup>) : Ti.UI.MobileWeb.NavigationGroup;
			export function fireEvent (name: string, event: Dictionary<Object>) : void;
			export function getApiName () : string;
			export function removeEventListener (name: string, callback: (...args : any[]) => any) : void;
			export enum TableViewSeparatorStyle {
				NONE,
				SINGLE_LINE
			}
			export interface NavigationGroup extends Ti.UI.View {
				navBarAtTop : boolean;
				window : Ti.UI.Window;
				close (window: Ti.UI.Window, options: Dictionary<Object>) : void;
				getNavBarAtTop () : boolean;
				getWindow () : Ti.UI.Window;
				open (window: Ti.UI.Window, options: Dictionary<Object>) : void;
				setNavBarAtTop (navBarAtTop: boolean) : void;
			}
		}
		export interface Label extends Ti.UI.View {
			attributedString : Ti.UI.iOS.AttributedString;
			autoLink : number;
			backgroundPaddingBottom : number;
			backgroundPaddingLeft : number;
			backgroundPaddingRight : number;
			backgroundPaddingTop : number;
			color : string;
			ellipsize : boolean;
			font : Font;
			highlightedColor : string;
			html : string;
			includeFontPadding : boolean;
			minimumFontSize : number;
			shadowColor : string;
			shadowOffset : Dictionary<Object>;
			shadowRadius : number;
			text : string;
			textAlign : any;
			textid : string;
			verticalAlign : any;
			wordWrap : boolean;
			getAttributedString () : Ti.UI.iOS.AttributedString;
			getAutoLink () : number;
			getBackgroundPaddingBottom () : number;
			getBackgroundPaddingLeft () : number;
			getBackgroundPaddingRight () : number;
			getBackgroundPaddingTop () : number;
			getColor () : string;
			getEllipsize () : boolean;
			getFont () : Font;
			getHighlightedColor () : string;
			getHtml () : string;
			getIncludeFontPadding () : boolean;
			getMinimumFontSize () : number;
			getShadowColor () : string;
			getShadowOffset () : Dictionary<Object>;
			getShadowRadius () : number;
			getText () : string;
			getTextAlign () : any;
			getTextid () : string;
			getVerticalAlign () : any;
			getWordWrap () : boolean;
			setAttributedString (attributedString: Ti.UI.iOS.AttributedString) : void;
			setAutoLink (autoLink: number) : void;
			setBackgroundPaddingBottom (backgroundPaddingBottom: number) : void;
			setBackgroundPaddingLeft (backgroundPaddingLeft: number) : void;
			setBackgroundPaddingRight (backgroundPaddingRight: number) : void;
			setBackgroundPaddingTop (backgroundPaddingTop: number) : void;
			setColor (color: string) : void;
			setEllipsize (ellipsize: boolean) : void;
			setFont (font: Font) : void;
			setHighlightedColor (highlightedColor: string) : void;
			setHtml (html: string) : void;
			setIncludeFontPadding (includeFontPadding: boolean) : void;
			setMinimumFontSize (minimumFontSize: number) : void;
			setShadowColor (shadowColor: string) : void;
			setShadowOffset (shadowOffset: Dictionary<Object>) : void;
			setShadowRadius (shadowRadius: number) : void;
			setText (text: string) : void;
			setTextAlign (textAlign: string) : void;
			setTextAlign (textAlign: number) : void;
			setTextid (textid: string) : void;
			setVerticalAlign (verticalAlign: number) : void;
			setVerticalAlign (verticalAlign: string) : void;
			setWordWrap (wordWrap: boolean) : void;
		}
		export interface SearchBar extends Ti.UI.View {
			autocapitalization : number;
			autocorrect : boolean;
			barColor : string;
			hintText : string;
			hinttextid : string;
			keyboardType : number;
			prompt : string;
			promptid : string;
			showBookmark : boolean;
			showCancel : boolean;
			value : string;
			blur () : void;
			focus () : void;
			getAutocapitalization () : number;
			getAutocorrect () : boolean;
			getBarColor () : string;
			getHintText () : string;
			getHinttextid () : string;
			getKeyboardType () : number;
			getPrompt () : string;
			getPromptid () : string;
			getShowBookmark () : boolean;
			getShowCancel () : boolean;
			getValue () : string;
			setAutocapitalization (autocapitalization: number) : void;
			setAutocorrect (autocorrect: boolean) : void;
			setBarColor (barColor: string) : void;
			setHintText (hintText: string) : void;
			setHinttextid (hinttextid: string) : void;
			setKeyboardType (keyboardType: number) : void;
			setPrompt (prompt: string) : void;
			setPromptid (promptid: string) : void;
			setShowBookmark (showBookmark: boolean) : void;
			setShowCancel (showCancel: boolean, animated?: Dictionary<Object>) : void;
			setValue (value: string) : void;
		}
		export interface SMSDialog extends Ti.Proxy {
			CANCELLED : number;
			FAILED : number;
			SENT : number;
			messageBody : string;
			toRecipients : Array<String>;
			getMessageBody () : string;
			getToRecipients () : Array<String>;
			isSupported () : boolean;
			open () : void;
			setMessageBody (messageBody: string) : void;
			setToRecipients (toRecipients: Array<String>) : void;
		}
		export interface TableViewSection extends Ti.Proxy {
			footerTitle : string;
			footerView : Ti.UI.View;
			headerTitle : string;
			headerView : Ti.UI.View;
			rowCount : number;
			rows : Array<Ti.UI.TableViewRow>;
			add (row: Ti.UI.TableViewRow) : void;
			getFooterTitle () : string;
			getFooterView () : Ti.UI.View;
			getHeaderTitle () : string;
			getHeaderView () : Ti.UI.View;
			getRowCount () : number;
			getRows () : Array<Ti.UI.TableViewRow>;
			remove (row: Ti.UI.TableViewRow) : void;
			rowAtIndex (index: number) : Ti.UI.TableViewRow;
			setFooterTitle (footerTitle: string) : void;
			setFooterView (footerView: Ti.UI.View) : void;
			setHeaderTitle (headerTitle: string) : void;
			setHeaderView (headerView: Ti.UI.View) : void;
		}
		export interface Animation extends Ti.Proxy {
			anchorPoint : Point;
			autoreverse : boolean;
			backgroundColor : string;
			bottom : number;
			center : any;
			color : string;
			curve : number;
			delay : number;
			duration : number;
			height : number;
			left : number;
			opacity : number;
			opaque : boolean;
			repeat : number;
			right : number;
			top : number;
			transform : any;
			transition : number;
			view : Ti.UI.View;
			visible : boolean;
			width : number;
			zIndex : number;
			getAnchorPoint () : Point;
			getAutoreverse () : boolean;
			getBackgroundColor () : string;
			getBottom () : number;
			getCenter () : any;
			getColor () : string;
			getCurve () : number;
			getDelay () : number;
			getDuration () : number;
			getHeight () : number;
			getLeft () : number;
			getOpacity () : number;
			getOpaque () : boolean;
			getRepeat () : number;
			getRight () : number;
			getTop () : number;
			getTransform () : any;
			getTransition () : number;
			getView () : Ti.UI.View;
			getVisible () : boolean;
			getWidth () : number;
			getZIndex () : number;
			setAnchorPoint (anchorPoint: Point) : void;
			setAutoreverse (autoreverse: boolean) : void;
			setBackgroundColor (backgroundColor: string) : void;
			setBottom (bottom: number) : void;
			setCenter (center: any) : void;
			setColor (color: string) : void;
			setCurve (curve: number) : void;
			setDelay (delay: number) : void;
			setDuration (duration: number) : void;
			setHeight (height: number) : void;
			setLeft (left: number) : void;
			setOpacity (opacity: number) : void;
			setOpaque (opaque: boolean) : void;
			setRepeat (repeat: number) : void;
			setRight (right: number) : void;
			setTop (top: number) : void;
			setTransform (transform: Ti.UI._2DMatrix) : void;
			setTransform (transform: Ti.UI._3DMatrix) : void;
			setTransition (transition: number) : void;
			setView (view: Ti.UI.View) : void;
			setVisible (visible: boolean) : void;
			setWidth (width: number) : void;
			setZIndex (zIndex: number) : void;
		}
		export interface Toolbar extends Ti.UI.View {
			barColor : string;
			borderBottom : boolean;
			borderTop : boolean;
			items : Array<Ti.UI.View>;
			translucent : boolean;
			getBarColor () : string;
			getBorderBottom () : boolean;
			getBorderTop () : boolean;
			getItems () : Array<Ti.UI.View>;
			getTranslucent () : boolean;
			setBarColor (barColor: string) : void;
			setBorderBottom (borderBottom: boolean) : void;
			setBorderTop (borderTop: boolean) : void;
			setItems (items: Array<Ti.UI.View>) : void;
			setTranslucent (translucent: boolean) : void;
		}
		export interface Notification extends Ti.UI.View {
			duration : number;
			horizontalMargin : number;
			message : string;
			verticalMargin : number;
			xOffset : number;
			yOffset : number;
			getDuration () : number;
			getHorizontalMargin () : number;
			getMessage () : string;
			getVerticalMargin () : number;
			getXOffset () : number;
			getYOffset () : number;
			setDuration (duration: number) : void;
			setHorizontalMargin (horizontalMargin: number) : void;
			setMessage (message: string) : void;
			setVerticalMargin (verticalMargin: number) : void;
			setXOffset (xOffset: number) : void;
			setYOffset (yOffset: number) : void;
		}
		export interface PickerColumn extends Ti.UI.View {
			font : Font;
			rowCount : number;
			rows : Array<Ti.UI.PickerRow>;
			selectedRow : Ti.UI.PickerRow;
			addRow (row: Ti.UI.PickerRow) : void;
			getFont () : Font;
			getRowCount () : number;
			getRows () : Array<Ti.UI.PickerRow>;
			getSelectedRow () : Ti.UI.PickerRow;
			removeRow (row: Ti.UI.PickerRow) : void;
			setFont (font: Font) : void;
			setSelectedRow (selectedRow: Ti.UI.PickerRow) : void;
		}
		export interface ActivityIndicator extends Ti.Proxy {
			bottom : any;
			color : string;
			font : Font;
			height : string;
			indicatorColor : string;
			indicatorDiameter : string;
			left : any;
			message : string;
			messageid : string;
			right : any;
			style : number;
			top : any;
			width : string;
			add () : void;
			getBottom () : any;
			getColor () : string;
			getFont () : Font;
			getHeight () : string;
			getIndicatorColor () : string;
			getIndicatorDiameter () : string;
			getLeft () : any;
			getMessage () : string;
			getMessageid () : string;
			getRight () : any;
			getStyle () : number;
			getTop () : any;
			getWidth () : string;
			hide () : void;
			remove () : void;
			setBottom (bottom: number) : void;
			setBottom (bottom: string) : void;
			setColor (color: string) : void;
			setFont (font: Font) : void;
			setHeight (height: string) : void;
			setIndicatorColor (indicatorColor: string) : void;
			setIndicatorDiameter (indicatorDiameter: string) : void;
			setLeft (left: number) : void;
			setLeft (left: string) : void;
			setMessage (message: string) : void;
			setMessageid (messageid: string) : void;
			setRight (right: number) : void;
			setRight (right: string) : void;
			setStyle (style: number) : void;
			setTop (top: number) : void;
			setTop (top: string) : void;
			setWidth (width: string) : void;
			show () : void;
		}
		export interface Picker extends Ti.UI.View {
			calendarViewShown : boolean;
			columns : Array<Ti.UI.PickerColumn>;
			countDownDuration : number;
			font : Font;
			format24 : boolean;
			locale : string;
			maxDate : Date;
			minDate : Date;
			minuteInterval : number;
			selectionIndicator : boolean;
			type : number;
			useSpinner : boolean;
			value : Date;
			visibleItems : number;
			add (data: Array<Ti.UI.PickerRow>) : void;
			add (data: Ti.UI.PickerRow) : void;
			add (data: Array<Ti.UI.PickerColumn>) : void;
			add (data: Ti.UI.PickerColumn) : void;
			getCalendarViewShown () : boolean;
			getColumns () : Array<Ti.UI.PickerColumn>;
			getCountDownDuration () : number;
			getFont () : Font;
			getFormat24 () : boolean;
			getLocale () : string;
			getMaxDate () : Date;
			getMinDate () : Date;
			getMinuteInterval () : number;
			getSelectedRow (index: number) : Ti.UI.PickerRow;
			getSelectionIndicator () : boolean;
			getType () : number;
			getUseSpinner () : boolean;
			getValue () : Date;
			getVisibleItems () : number;
			reloadColumn (column: Ti.UI.PickerColumn) : void;
			setCalendarViewShown (calendarViewShown: boolean) : void;
			setColumns (columns: Array<Ti.UI.PickerColumn>) : void;
			setCountDownDuration (countDownDuration: number) : void;
			setFont (font: Font) : void;
			setFormat24 (format24: boolean) : void;
			setLocale (locale: string) : void;
			setMaxDate (maxDate: Date) : void;
			setMinDate (minDate: Date) : void;
			setMinuteInterval (minuteInterval: number) : void;
			setSelectedRow (column: number, row: number, animated?: boolean) : void;
			setSelectionIndicator (selectionIndicator: boolean) : void;
			setType (type: number) : void;
			setUseSpinner (useSpinner: boolean) : void;
			setValue (date: any, suppressEvent: boolean) : Ti.UI.PickerRow;
			setVisibleItems (visibleItems: number) : void;
			showDatePickerDialog (dictObj: any) : void;
			showTimePickerDialog (dictObj: any) : void;
		}
	}
	export enum Module {

	}
	export interface API  {
		debug (message: Array<String>) : void;
		debug (message: string) : void;
		error (message: Array<String>) : void;
		error (message: string) : void;
		info (message: Array<String>) : void;
		info (message: string) : void;
		log (level: string, message: Array<String>) : void;
		log (level: string, message: string) : void;
		timestamp (message: Array<String>) : void;
		timestamp (message: string) : void;
		trace (message: Array<String>) : void;
		trace (message: string) : void;
		warn (message: Array<String>) : void;
		warn (message: string) : void;
	}
	export module Geolocation {
		export var ACCURACY_BEST : number;
		export var ACCURACY_BEST_FOR_NAVIGATION : number;
		export var ACCURACY_HIGH : number;
		export var ACCURACY_HUNDRED_METERS : number;
		export var ACCURACY_KILOMETER : number;
		export var ACCURACY_LOW : number;
		export var ACCURACY_NEAREST_TEN_METERS : number;
		export var ACCURACY_THREE_KILOMETERS : number;
		export var ACTIVITYTYPE_AUTOMOTIVE_NAVIGATION : string;
		export var ACTIVITYTYPE_FITNESS : string;
		export var ACTIVITYTYPE_OTHER : string;
		export var ACTIVITYTYPE_OTHER_NAVIGATION : string;
		export var AUTHORIZATION_ALWAYS : number;
		export var AUTHORIZATION_AUTHORIZED : number;
		export var AUTHORIZATION_DENIED : number;
		export var AUTHORIZATION_RESTRICTED : number;
		export var AUTHORIZATION_UNKNOWN : number;
		export var AUTHORIZATION_WHEN_IN_USE : number;
		export var ERROR_DENIED : number;
		export var ERROR_HEADING_FAILURE : number;
		export var ERROR_LOCATION_UNKNOWN : number;
		export var ERROR_NETWORK : number;
		export var ERROR_REGION_MONITORING_DELAYED : number;
		export var ERROR_REGION_MONITORING_DENIED : number;
		export var ERROR_REGION_MONITORING_FAILURE : number;
		export var ERROR_TIMEOUT : number;
		export var PROVIDER_GPS : string;
		export var PROVIDER_NETWORK : string;
		export var PROVIDER_PASSIVE : string;
		export var accuracy : number;
		export var activityType : number;
		export var apiName : string;
		export var bubbleParent : boolean;
		export var distanceFilter : number;
		export var frequency : number;
		export var hasCompass : boolean;
		export var headingFilter : number;
		export var lastGeolocation : string;
		export var locationServicesAuthorization : number;
		export var locationServicesEnabled : boolean;
		export var pauseLocationUpdateAutomatically : boolean;
		export var preferredProvider : string;
		export var purpose : string;
		export var showCalibration : boolean;
		export var trackSignificantLocationChange : boolean;
		export function addEventListener (name: string, callback: (...args : any[]) => any) : void;
		export function applyProperties (props: Dictionary<Object>) : void;
		export function fireEvent (name: string, event: Dictionary<Object>) : void;
		export function forwardGeocoder (address: string, callback: (...args : any[]) => any) : void;
		export function getAccuracy () : number;
		export function getActivityType () : number;
		export function getApiName () : string;
		export function getBubbleParent () : boolean;
		export function getCurrentHeading (callback: (...args : any[]) => any) : void;
		export function getCurrentPosition (callback: (...args : any[]) => any) : void;
		export function getDistanceFilter () : number;
		export function getFrequency () : number;
		export function getHasCompass () : boolean;
		export function getHeadingFilter () : number;
		export function getLastGeolocation () : string;
		export function getLocationServicesAuthorization () : number;
		export function getLocationServicesEnabled () : boolean;
		export function getPauseLocationUpdateAutomatically () : boolean;
		export function getPreferredProvider () : string;
		export function getPurpose () : string;
		export function getShowCalibration () : boolean;
		export function getTrackSignificantLocationChange () : boolean;
		export function removeEventListener (name: string, callback: (...args : any[]) => any) : void;
		export function reverseGeocoder (latitude: number, longitude: number, callback: (...args : any[]) => any) : void;
		export function setAccuracy (accuracy: number) : void;
		export function setActivityType (activityType: number) : void;
		export function setBubbleParent (bubbleParent: boolean) : void;
		export function setDistanceFilter (distanceFilter: number) : void;
		export function setFrequency (frequency: number) : void;
		export function setHeadingFilter (headingFilter: number) : void;
		export function setLocationServicesAuthorization (locationServicesAuthorization: number) : void;
		export function setPauseLocationUpdateAutomatically (pauseLocationUpdateAutomatically: boolean) : void;
		export function setPreferredProvider (preferredProvider: string) : void;
		export function setPurpose (purpose: string) : void;
		export function setShowCalibration (showCalibration: boolean) : void;
		export function setTrackSignificantLocationChange (trackSignificantLocationChange: boolean) : void;
		export module Android {
			export var apiName : string;
			export var bubbleParent : boolean;
			export var manualMode : boolean;
			export function addEventListener (name: string, callback: (...args : any[]) => any) : void;
			export function addLocationProvider (provider: Ti.Geolocation.Android.LocationProvider) : void;
			export function addLocationRule (rule: Ti.Geolocation.Android.LocationRule) : void;
			export function applyProperties (props: Dictionary<Object>) : void;
			export function createLocationProvider (parameters?: Dictionary<Ti.Geolocation.Android.LocationProvider>) : Ti.Geolocation.Android.LocationProvider;
			export function createLocationRule (parameters?: Dictionary<Ti.Geolocation.Android.LocationRule>) : Ti.Geolocation.Android.LocationRule;
			export function fireEvent (name: string, event: Dictionary<Object>) : void;
			export function getApiName () : string;
			export function getBubbleParent () : boolean;
			export function getManualMode () : boolean;
			export function removeEventListener (name: string, callback: (...args : any[]) => any) : void;
			export function removeLocationProvider (provider: Ti.Geolocation.Android.LocationProvider) : void;
			export function removeLocationRule (rule: Ti.Geolocation.Android.LocationRule) : void;
			export function setBubbleParent (bubbleParent: boolean) : void;
			export function setManualMode (manualMode: boolean) : void;
			export interface LocationProvider extends Ti.Proxy {
				minUpdateDistance : number;
				minUpdateTime : number;
				name : string;
				getMinUpdateDistance () : number;
				getMinUpdateTime () : number;
				getName () : string;
				setMinUpdateDistance (minUpdateDistance: number) : void;
				setMinUpdateTime (minUpdateTime: number) : void;
				setName (name: string) : void;
			}
			export interface LocationRule extends Ti.Proxy {
				accuracy : number;
				maxAge : number;
				minAge : number;
				name : string;
				getAccuracy () : number;
				getMaxAge () : number;
				getMinAge () : number;
				getName () : string;
				setAccuracy (accuracy: number) : void;
				setMaxAge (maxAge: number) : void;
				setMinAge (minAge: number) : void;
				setName (name: string) : void;
			}
		}
		export interface MobileWeb  {
			forwardGeocoderTimeout : number;
			locationTimeout : number;
			maximumHeadingAge : number;
			maximumLocationAge : number;
			reverseGeocoderTimeout : number;
			getForwardGeocoderTimeout () : number;
			getLocationTimeout () : number;
			getMaximumHeadingAge () : number;
			getMaximumLocationAge () : number;
			getReverseGeocoderTimeout () : number;
			setForwardGeocoderTimeout (forwardGeocoderTimeout: number) : void;
			setLocationTimeout (locationTimeout: number) : void;
			setMaximumHeadingAge (maximumHeadingAge: number) : void;
			setMaximumLocationAge (maximumLocationAge: number) : void;
			setReverseGeocoderTimeout (reverseGeocoderTimeout: number) : void;
		}
	}
	export interface Proxy  {
		apiName : string;
		bubbleParent : boolean;
		addEventListener (name: string, callback: (...args : any[]) => any) : void;
		applyProperties (props: Dictionary<Object>) : void;
		fireEvent (name: string, event: Dictionary<Object>) : void;
		getApiName () : string;
		getBubbleParent () : boolean;
		removeEventListener (name: string, callback: (...args : any[]) => any) : void;
		setBubbleParent (bubbleParent: boolean) : void;
	}
	export module Map {
		export var ANNOTATION_DRAG_STATE_CANCEL : number;
		export var ANNOTATION_DRAG_STATE_DRAG : number;
		export var ANNOTATION_DRAG_STATE_END : number;
		export var ANNOTATION_DRAG_STATE_NONE : number;
		export var ANNOTATION_DRAG_STATE_START : number;
		export var ANNOTATION_GREEN : number;
		export var ANNOTATION_PURPLE : number;
		export var ANNOTATION_RED : number;
		export var HYBRID_TYPE : number;
		export var SATELLITE_TYPE : number;
		export var STANDARD_TYPE : number;
		export var TERRAIN_TYPE : number;
		export var apiName : string;
		export var bubbleParent : boolean;
		export function addEventListener (name: string, callback: (...args : any[]) => any) : void;
		export function applyProperties (props: Dictionary<Object>) : void;
		export function createAnnotation (parameters?: Dictionary<Ti.Map.Annotation>) : Ti.Map.Annotation;
		export function createView (parameters?: Dictionary<Ti.Map.View>) : Ti.Map.View;
		export function fireEvent (name: string, event: Dictionary<Object>) : void;
		export function getApiName () : string;
		export function getBubbleParent () : boolean;
		export function removeEventListener (name: string, callback: (...args : any[]) => any) : void;
		export function setBubbleParent (bubbleParent: boolean) : void;
		export interface View extends Ti.UI.View {
			animated : boolean;
			annotations : Array<Ti.Map.Annotation>;
			hideAnnotationWhenTouchMap : boolean;
			latitudeDelta : number;
			longitudeDelta : number;
			mapType : number;
			region : MapRegionType;
			regionFit : boolean;
			userLocation : boolean;
			addAnnotation (annotation: Dictionary<Ti.Map.Annotation>) : void;
			addAnnotation (annotation: Ti.Map.Annotation) : void;
			addAnnotations (annotations: Array<Ti.Map.Annotation>) : void;
			addAnnotations (annotations: Array<Dictionary<Ti.Map.Annotation>>) : void;
			addRoute (route: MapRouteType) : void;
			deselectAnnotation (annotation: string) : void;
			deselectAnnotation (annotation: Ti.Map.Annotation) : void;
			getAnimate () : boolean;
			getAnimated () : boolean;
			getAnnotations () : Array<Ti.Map.Annotation>;
			getHideAnnotationWhenTouchMap () : boolean;
			getLatitudeDelta () : number;
			getLongitudeDelta () : number;
			getMapType () : number;
			getRegion () : MapRegionType;
			getRegionFit () : boolean;
			getUserLocation () : boolean;
			removeAllAnnotations () : void;
			removeAnnotation (annotation: string) : void;
			removeAnnotation (annotation: Ti.Map.Annotation) : void;
			removeAnnotations (annotations: Array<String>) : void;
			removeAnnotations (annotations: Array<Ti.Map.Annotation>) : void;
			removeRoute (route: MapRouteType) : void;
			selectAnnotation (annotation: string) : void;
			selectAnnotation (annotation: Ti.Map.Annotation) : void;
			setAnimate (animate: boolean) : void;
			setAnimated (animated: boolean) : void;
			setAnnotations (annotations: Array<Ti.Map.Annotation>) : void;
			setHideAnnotationWhenTouchMap (hideAnnotationWhenTouchMap: boolean) : void;
			setLocation (location: MapLocationType) : void;
			setMapType (mapType: number) : void;
			setRegion (region: MapRegionType) : void;
			setRegionFit (regionFit: boolean) : void;
			setUserLocation (userLocation: boolean) : void;
			zoom (level: number) : void;
		}
		export interface Annotation extends Ti.Proxy {
			animate : boolean;
			canShowCallout : boolean;
			centerOffset : Point;
			customView : Ti.UI.View;
			draggable : boolean;
			image : any;
			latitude : number;
			leftButton : any;
			leftView : Ti.UI.View;
			longitude : number;
			pinImage : string;
			pincolor : number;
			rightButton : any;
			rightView : Ti.UI.View;
			subtitle : string;
			subtitleid : string;
			title : string;
			titleid : string;
			getAnimate () : boolean;
			getCanShowCallout () : boolean;
			getCenterOffset () : Point;
			getCustomView () : Ti.UI.View;
			getDraggable () : boolean;
			getImage () : any;
			getLatitude () : number;
			getLeftButton () : any;
			getLeftView () : Ti.UI.View;
			getLongitude () : number;
			getPinImage () : string;
			getPincolor () : number;
			getRightButton () : any;
			getRightView () : Ti.UI.View;
			getSubtitle () : string;
			getSubtitleid () : string;
			getTitle () : string;
			getTitleid () : string;
			setAnimate (animate: boolean) : void;
			setCanShowCallout (canShowCallout: boolean) : void;
			setCenterOffset (centerOffset: Point) : void;
			setCustomView (customView: Ti.UI.View) : void;
			setDraggable (draggable: boolean) : void;
			setImage (image: string) : void;
			setImage (image: Ti.Blob) : void;
			setLatitude (latitude: number) : void;
			setLeftButton (leftButton: number) : void;
			setLeftButton (leftButton: string) : void;
			setLeftView (leftView: Ti.UI.View) : void;
			setLongitude (longitude: number) : void;
			setPinImage (pinImage: string) : void;
			setPincolor (pincolor: number) : void;
			setRightButton (rightButton: number) : void;
			setRightButton (rightButton: string) : void;
			setRightView (rightView: Ti.UI.View) : void;
			setSubtitle (subtitle: string) : void;
			setSubtitleid (subtitleid: string) : void;
			setTitle (title: string) : void;
			setTitleid (titleid: string) : void;
		}
	}
	export module Cloud {
		export var accessToken : string;
		export var apiName : string;
		export var bubbleParent : boolean;
		export var debug : boolean;
		export var expiresIn : number;
		export var ondatastream : (...args : any[]) => any;
		export var onsendstream : (...args : any[]) => any;
		export var sessionId : string;
		export var useSecure : boolean;
		export function applyProperties (props: Dictionary<Object>) : void;
		export function getAccessToken () : string;
		export function getApiName () : string;
		export function getBubbleParent () : boolean;
		export function getDebug () : boolean;
		export function getExpiresIn () : number;
		export function getOndatastream () : (...args : any[]) => any;
		export function getOnsendstream () : (...args : any[]) => any;
		export function getSessionId () : string;
		export function getUseSecure () : boolean;
		export function hasStoredSession () : boolean;
		export function retrieveStoredSession () : string;
		export function sendRequest (parameters: Dictionary<Object>, callback: (...args : any[]) => any) : void;
		export function setAccessToken (accessToken: string) : void;
		export function setBubbleParent (bubbleParent: boolean) : void;
		export function setDebug (debug: boolean) : void;
		export function setOndatastream (ondatastream: (...args : any[]) => any) : void;
		export function setOnsendstream (onsendstream: (...args : any[]) => any) : void;
		export function setSessionId (sessionId: string) : void;
		export function setUseSecure (useSecure: boolean) : void;
		export interface Objects  {
			create (parameters: Dictionary<Object>, callback: (...args : any[]) => any) : void;
			query (parameters?: Dictionary<Object>, callback?: (...args : any[]) => any) : void;
			remove (parameters: Dictionary<Object>, callback: (...args : any[]) => any) : void;
			show (parameters?: Dictionary<Object>, callback?: (...args : any[]) => any) : void;
			update (parameters: Dictionary<Object>, callback: (...args : any[]) => any) : void;
		}
		export interface SocialIntegrations  {
			externalAccountLink (parameters: Dictionary<Object>, callback: (...args : any[]) => any) : void;
			externalAccountLogin (parameters: Dictionary<Object>, callback: (...args : any[]) => any) : void;
			externalAccountUnlink (parameters: Dictionary<Object>, callback: (...args : any[]) => any) : void;
			searchFacebookFriends (callback: (...args : any[]) => any) : void;
		}
		export interface PushNotifications  {
			notify (parameters: Dictionary<Object>, callback: (...args : any[]) => any) : void;
			notifyTokens (parameters: Dictionary<Object>, callback: (...args : any[]) => any) : void;
			query (parameters: Dictionary<Object>, callback: (...args : any[]) => any) : void;
			queryChannels (parameters: Dictionary<Object>, callback: (...args : any[]) => any) : void;
			resetBadge (parameters: Dictionary<Object>, callback: (...args : any[]) => any) : void;
			setBadge (parameters: Dictionary<Object>, callback: (...args : any[]) => any) : void;
			showChannels (parameters: Dictionary<Object>, callback: (...args : any[]) => any) : void;
			subscribe (parameters: Dictionary<Object>, callback: (...args : any[]) => any) : void;
			subscribeToken (parameters: Dictionary<Object>, callback: (...args : any[]) => any) : void;
			unsubscribe (parameters: Dictionary<Object>, callback: (...args : any[]) => any) : void;
			unsubscribeToken (parameters: Dictionary<Object>, callback: (...args : any[]) => any) : void;
			updateSubscription (parameters: Dictionary<Object>, callback: (...args : any[]) => any) : void;
		}
		export interface Clients  {
			geolocate (parameters?: Dictionary<Object>, callback?: (...args : any[]) => any) : void;
		}
		export interface ACLs  {
			addUser (parameters: Dictionary<Object>, callback: (...args : any[]) => any) : void;
			checkUser (parameters: Dictionary<Object>, callback: (...args : any[]) => any) : void;
			create (parameters: Dictionary<Object>, callback: (...args : any[]) => any) : void;
			remove (parameters: Dictionary<Object>, callback: (...args : any[]) => any) : void;
			removeUser (parameters: Dictionary<Object>, callback: (...args : any[]) => any) : void;
			show (parameters: Dictionary<Object>, callback: (...args : any[]) => any) : void;
			update (parameters?: Dictionary<Object>, callback?: (...args : any[]) => any) : void;
		}
		export interface Users  {
			create (parameters: Dictionary<Object>, callback: (...args : any[]) => any) : void;
			login (parameters: Dictionary<Object>, callback: (...args : any[]) => any) : void;
			logout (callback: (...args : any[]) => any) : void;
			query (parameters?: Dictionary<Object>, callback?: (...args : any[]) => any) : void;
			remove (parameters: Dictionary<Object>, callback: (...args : any[]) => any) : void;
			requestResetPassword (parameters: Dictionary<Object>, callback: (...args : any[]) => any) : void;
			resendConfirmation (parameters: Dictionary<Object>, callback: (...args : any[]) => any) : void;
			search (parameters?: Dictionary<Object>, callback?: (...args : any[]) => any) : void;
			secureCreate (parameters?: Dictionary<CloudUsersSecureDialog>, callback?: (...args : any[]) => any) : void;
			secureLogin (parameters?: Dictionary<CloudUsersSecureDialog>, callback?: (...args : any[]) => any) : void;
			secureStatus () : boolean;
			show (parameters: Dictionary<Object>, callback: (...args : any[]) => any) : void;
			showMe (callback: (...args : any[]) => any) : void;
			update (parameters: Dictionary<Object>, callback: (...args : any[]) => any) : void;
		}
		export interface Messages  {
			create (parameters: Dictionary<Object>, callback: (...args : any[]) => any) : void;
			remove (parameters: Dictionary<Object>, callback: (...args : any[]) => any) : void;
			removeThread (parameters: Dictionary<Object>, callback: (...args : any[]) => any) : void;
			reply (parameters?: Dictionary<Object>, callback?: (...args : any[]) => any) : void;
			show (parameters: Dictionary<Object>, callback: (...args : any[]) => any) : void;
			showInbox (parameters: Dictionary<Object>, callback: (...args : any[]) => any) : void;
			showSent (parameters: Dictionary<Object>, callback: (...args : any[]) => any) : void;
			showThread (parameters: Dictionary<Object>, callback: (...args : any[]) => any) : void;
			showThreads (parameters: Dictionary<Object>, callback: (...args : any[]) => any) : void;
		}
		export interface Events  {
			create (parameters: Dictionary<Object>, callback: (...args : any[]) => any) : void;
			query (parameters?: Dictionary<Object>, callback?: (...args : any[]) => any) : void;
			queryOccurrences (parameters?: Dictionary<Object>, callback?: (...args : any[]) => any) : void;
			remove (parameters: Dictionary<Object>, callback: (...args : any[]) => any) : void;
			search (parameters?: Dictionary<Object>, callback?: (...args : any[]) => any) : void;
			searchOccurrences (parameters?: Dictionary<Object>, callback?: (...args : any[]) => any) : void;
			show (parameters?: Dictionary<Object>, callback?: (...args : any[]) => any) : void;
			showOccurrences (parameters?: Dictionary<Object>, callback?: (...args : any[]) => any) : void;
			update (parameters: Dictionary<Object>, callback: (...args : any[]) => any) : void;
		}
		export interface Reviews  {
			create (parameters: Dictionary<Object>, callback: (...args : any[]) => any) : void;
			query (parameters: Dictionary<Object>, callback: (...args : any[]) => any) : void;
			remove (parameters: Dictionary<Object>, callback: (...args : any[]) => any) : void;
			show (parameters: Dictionary<Object>, callback: (...args : any[]) => any) : void;
			update (parameters: Dictionary<Object>, callback: (...args : any[]) => any) : void;
		}
		export interface Chats  {
			create (parameters: Dictionary<Object>, callback: (...args : any[]) => any) : void;
			getChatGroups (parameters?: Dictionary<Object>, callback?: (...args : any[]) => any) : void;
			query (parameters: Dictionary<Object>, callback: (...args : any[]) => any) : void;
			queryChatGroups (parameters?: Dictionary<Object>, callback?: (...args : any[]) => any) : void;
			remove (parameters: Dictionary<Object>, callback: (...args : any[]) => any) : void;
		}
		export interface KeyValues  {
			append (parameters: Dictionary<Object>, callback: (...args : any[]) => any) : void;
			get (parameters: Dictionary<Object>, callback: (...args : any[]) => any) : void;
			increment (parameters: Dictionary<Object>, callback: (...args : any[]) => any) : void;
			remove (parameters: Dictionary<Object>, callback: (...args : any[]) => any) : void;
			set (parameters: Dictionary<Object>, callback: (...args : any[]) => any) : void;
		}
		export interface GeoFences  {
			create (parameters: Dictionary<Object>, callback: (...args : any[]) => any) : void;
			query (parameters?: Dictionary<Object>, callback?: (...args : any[]) => any) : void;
			remove (parameters: Dictionary<Object>, callback: (...args : any[]) => any) : void;
			update (parameters: Dictionary<Object>, callback: (...args : any[]) => any) : void;
		}
		export interface Checkins  {
			create (parameters: Dictionary<Object>, callback: (...args : any[]) => any) : void;
			query (parameters?: Dictionary<Object>, callback?: (...args : any[]) => any) : void;
			remove (parameters: Dictionary<Object>, callback: (...args : any[]) => any) : void;
			show (parameters: Dictionary<Object>, callback: (...args : any[]) => any) : void;
		}
		export interface Friends  {
			add (parameters: Dictionary<Object>, callback: (...args : any[]) => any) : void;
			approve (parameters: Dictionary<Object>, callback: (...args : any[]) => any) : void;
			remove (parameters: Dictionary<Object>, callback: (...args : any[]) => any) : void;
			requests (parameters: Dictionary<Object>, callback: (...args : any[]) => any) : void;
			search (parameters: Dictionary<Object>, callback: (...args : any[]) => any) : void;
		}
		export interface Files  {
			create (parameters: Dictionary<Object>, callback: (...args : any[]) => any) : void;
			query (parameters?: Dictionary<Object>, callback?: (...args : any[]) => any) : void;
			remove (parameters: Dictionary<Object>, callback: (...args : any[]) => any) : void;
			show (parameters: Dictionary<Object>, callback: (...args : any[]) => any) : void;
			update (parameters: Dictionary<Object>, callback: (...args : any[]) => any) : void;
		}
		export interface PushSchedules  {
			create (parameters: Dictionary<Object>, callback: (...args : any[]) => any) : void;
			query (parameters: Dictionary<Object>, callback: (...args : any[]) => any) : void;
			remove (parameters: Dictionary<Object>, callback: (...args : any[]) => any) : void;
		}
		export interface Likes  {
			create (parameters: Dictionary<Object>, callback: (...args : any[]) => any) : void;
			remove (parameters: Dictionary<Object>, callback: (...args : any[]) => any) : void;
		}
		export interface Photos  {
			create (parameters: Dictionary<Object>, callback: (...args : any[]) => any) : void;
			query (parameters?: Dictionary<Object>, callback?: (...args : any[]) => any) : void;
			remove (parameters: Dictionary<Object>, callback: (...args : any[]) => any) : void;
			search (parameters: Dictionary<Object>, callback: (...args : any[]) => any) : void;
			show (parameters: Dictionary<Object>, callback: (...args : any[]) => any) : void;
			update (parameters: Dictionary<Object>, callback: (...args : any[]) => any) : void;
		}
		export interface Statuses  {
			create (parameters: Dictionary<Object>, callback: (...args : any[]) => any) : void;
			delete (parameters: Dictionary<Object>, callback: (...args : any[]) => any) : void;
			query (parameters?: Dictionary<Object>, callback?: (...args : any[]) => any) : void;
			search (parameters: Dictionary<Object>, callback: (...args : any[]) => any) : void;
			show (parameters: Dictionary<Object>, callback: (...args : any[]) => any) : void;
			update (parameters: Dictionary<Object>, callback: (...args : any[]) => any) : void;
		}
		export interface PhotoCollections  {
			create (parameters: Dictionary<Object>, callback: (...args : any[]) => any) : void;
			remove (parameters: Dictionary<Object>, callback: (...args : any[]) => any) : void;
			search (parameters: Dictionary<Object>, callback: (...args : any[]) => any) : void;
			show (parameters: Dictionary<Object>, callback: (...args : any[]) => any) : void;
			showPhotos (parameters: Dictionary<Object>, callback: (...args : any[]) => any) : void;
			showSubCollections (parameters: Dictionary<Object>, callback: (...args : any[]) => any) : void;
			update (parameters: Dictionary<Object>, callback: (...args : any[]) => any) : void;
		}
		export interface Posts  {
			create (parameters: Dictionary<Object>, callback: (...args : any[]) => any) : void;
			query (parameters?: Dictionary<Object>, callback?: (...args : any[]) => any) : void;
			remove (parameters: Dictionary<Object>, callback: (...args : any[]) => any) : void;
			show (parameters: Dictionary<Object>, callback: (...args : any[]) => any) : void;
			update (parameters: Dictionary<Object>, callback: (...args : any[]) => any) : void;
		}
		export interface Emails  {
			send (parameters: Dictionary<Object>, callback: (...args : any[]) => any) : void;
		}
		export interface Places  {
			create (parameters: Dictionary<Object>, callback: (...args : any[]) => any) : void;
			query (parameters?: Dictionary<Object>, callback?: (...args : any[]) => any) : void;
			remove (parameters: Dictionary<Object>, callback: (...args : any[]) => any) : void;
			search (parameters?: Dictionary<Object>, callback?: (...args : any[]) => any) : void;
			show (parameters: Dictionary<Object>, callback: (...args : any[]) => any) : void;
			update (parameters: Dictionary<Object>, callback: (...args : any[]) => any) : void;
		}
	}
	export interface Blob extends Ti.Proxy {
		file : Ti.Filesystem.File;
		height : number;
		length : number;
		mimeType : string;
		nativePath : string;
		size : number;
		text : string;
		width : number;
		append (blob: Ti.Blob) : void;
		getFile () : Ti.Filesystem.File;
		getHeight () : number;
		getLength () : number;
		getMimeType () : string;
		getNativePath () : string;
		getSize () : number;
		getText () : string;
		getWidth () : number;
		imageAsCropped (options: Dictionary<ImageAsCroppedDict>) : Ti.Blob;
		imageAsResized (width: number, height: number) : Ti.Blob;
		imageAsThumbnail (size: number, borderSize?: number, cornerRadius?: number) : Ti.Blob;
		imageWithAlpha () : Ti.Blob;
		imageWithRoundedCorner (cornerSize: number, borderSize?: number) : Ti.Blob;
		imageWithTransparentBorder (size: number) : Ti.Blob;
		toString () : string;
	}
	export interface Codec  {
		BIG_ENDIAN : number;
		CHARSET_ASCII : string;
		CHARSET_ISO_LATIN_1 : string;
		CHARSET_UTF16 : string;
		CHARSET_UTF16BE : string;
		CHARSET_UTF16LE : string;
		CHARSET_UTF8 : string;
		LITTLE_ENDIAN : number;
		TYPE_BYTE : string;
		TYPE_DOUBLE : string;
		TYPE_FLOAT : string;
		TYPE_INT : string;
		TYPE_LONG : string;
		TYPE_SHORT : string;
		decodeNumber (options: DecodeNumberDict) : number;
		decodeString (options: DecodeStringDict) : string;
		encodeNumber (options: EncodeNumberDict) : number;
		encodeString (options: Dictionary<EncodeStringDict>) : number;
		getNativeByteOrder () : number;
	}
	export interface Locale  {
		currentCountry : string;
		currentLanguage : string;
		currentLocale : string;
		formatTelephoneNumber (number: string) : string;
		getCurrencyCode (locale: string) : string;
		getCurrencySymbol (currencyCode: string) : string;
		getCurrentCountry () : string;
		getCurrentLanguage () : string;
		getCurrentLocale () : string;
		getLocaleCurrencySymbol (locale: string) : string;
		getString (key: string, hint?: string) : string;
	}
	export module App {
		export var EVENT_ACCESSIBILITY_ANNOUNCEMENT : string;
		export var EVENT_ACCESSIBILITY_CHANGED : string;
		export var accessibilityEnabled : boolean;
		export var analytics : boolean;
		export var apiName : string;
		export var bubbleParent : boolean;
		export var copyright : string;
		export var deployType : string;
		export var description : string;
		export var disableNetworkActivityIndicator : boolean;
		export var forceSplashAsSnapshot : boolean;
		export var guid : string;
		export var id : string;
		export var idleTimerDisabled : boolean;
		export var installId : string;
		export var keyboardVisible : boolean;
		export var name : string;
		export var proximityDetection : boolean;
		export var proximityState : boolean;
		export var publisher : string;
		export var sessionId : string;
		export var url : string;
		export var version : string;
		export function addEventListener (name: string, callback: (...args : any[]) => any) : void;
		export function applyProperties (props: Dictionary<Object>) : void;
		export function fireEvent (name: string, event: Dictionary<Object>) : void;
		export function fireSystemEvent (eventName: string, param?: any) : void;
		export function getAccessibilityEnabled () : boolean;
		export function getAnalytics () : boolean;
		export function getApiName () : string;
		export function getArguments () : launchOptions;
		export function getBubbleParent () : boolean;
		export function getCopyright () : string;
		export function getDeployType () : string;
		export function getDescription () : string;
		export function getDisableNetworkActivityIndicator () : boolean;
		export function getForceSplashAsSnapshot () : boolean;
		export function getGuid () : string;
		export function getId () : string;
		export function getIdleTimerDisabled () : boolean;
		export function getInstallId () : string;
		export function getKeyboardVisible () : boolean;
		export function getName () : string;
		export function getProximityDetection () : boolean;
		export function getProximityState () : boolean;
		export function getPublisher () : string;
		export function getSessionId () : string;
		export function getUrl () : string;
		export function getVersion () : string;
		export function removeEventListener (name: string, callback: (...args : any[]) => any) : void;
		export function setBubbleParent (bubbleParent: boolean) : void;
		export function setDisableNetworkActivityIndicator (disableNetworkActivityIndicator: boolean) : void;
		export function setForceSplashAsSnapshot (forceSplashAsSnapshot: boolean) : void;
		export function setIdleTimerDisabled (idleTimerDisabled: boolean) : void;
		export function setProximityDetection (proximityDetection: boolean) : void;
		export module Android {
			export var R : Ti.App.Android.R;
			export var apiName : string;
			export var appVersionCode : number;
			export var appVersionName : string;
			export var bubbleParent : boolean;
			export var launchIntent : Ti.Android.Intent;
			export function addEventListener (name: string, callback: (...args : any[]) => any) : void;
			export function applyProperties (props: Dictionary<Object>) : void;
			export function fireEvent (name: string, event: Dictionary<Object>) : void;
			export function getApiName () : string;
			export function getAppVersionCode () : number;
			export function getAppVersionName () : string;
			export function getBubbleParent () : boolean;
			export function getLaunchIntent () : Ti.Android.Intent;
			export function removeEventListener (name: string, callback: (...args : any[]) => any) : void;
			export function setBubbleParent (bubbleParent: boolean) : void;
			export interface R {

			}
		}
		export module iOS {
			export var BACKGROUNDFETCHINTERVAL_MIN : number;
			export var BACKGROUNDFETCHINTERVAL_NEVER : number;
			export var EVENT_ACCESSIBILITY_LAYOUT_CHANGED : string;
			export var EVENT_ACCESSIBILITY_SCREEN_CHANGED : string;
			export var USER_NOTIFICATION_ACTIVATION_MODE_BACKGROUND : number;
			export var USER_NOTIFICATION_ACTIVATION_MODE_FOREGROUND : number;
			export var USER_NOTIFICATION_TYPE_ALERT : number;
			export var USER_NOTIFICATION_TYPE_BADGE : number;
			export var USER_NOTIFICATION_TYPE_NONE : number;
			export var USER_NOTIFICATION_TYPE_SOUND : number;
			export var apiName : string;
			export var applicationOpenSettingsURL : string;
			export var bubbleParent : boolean;
			export var currentUserNotificationSettings : UserNotificationSettings;
			export function addEventListener (name: string, callback: (...args : any[]) => any) : void;
			export function applyProperties (props: Dictionary<Object>) : void;
			export function cancelAllLocalNotifications () : void;
			export function cancelLocalNotification (id: number) : void;
			export function cancelLocalNotification (id: string) : void;
			export function createUserNotificationAction (parameters?: Dictionary<Ti.App.iOS.UserNotificationAction>) : Ti.App.iOS.UserNotificationAction;
			export function createUserNotificationCategory (parameters?: Dictionary<Ti.App.iOS.UserNotificationCategory>) : Ti.App.iOS.UserNotificationCategory;
			export function endBackgroundHandler (handlerID: string) : void;
			export function fireEvent (name: string, event: Dictionary<Object>) : void;
			export function getApiName () : string;
			export function getApplicationOpenSettingsURL () : string;
			export function getBubbleParent () : boolean;
			export function getCurrentUserNotificationSettings () : UserNotificationSettings;
			export function registerBackgroundService (params: Dictionary<Object>) : Ti.App.iOS.BackgroundService;
			export function registerUserNotificationSettings (params: UserNotificationSettings) : void;
			export function removeEventListener (name: string, callback: (...args : any[]) => any) : void;
			export function scheduleLocalNotification (params: NotificationParams) : Ti.App.iOS.LocalNotification;
			export function setBubbleParent (bubbleParent: boolean) : void;
			export function setMinimumBackgroundFetchInterval (fetchInterval: number) : void;
			export interface UserNotificationAction extends Ti.Proxy {
				activationMode : number;
				authenticationRequired : boolean;
				destructive : boolean;
				identifier : string;
				title : string;
				getActivationMode () : number;
				getAuthenticationRequired () : boolean;
				getDestructive () : boolean;
				getIdentifier () : string;
				getTitle () : string;
			}
			export interface LocalNotification extends Ti.Proxy {
				cancel () : void;
			}
			export interface UserNotificationCategory extends Ti.Proxy {
				actionsForDefaultContext : Array<Ti.App.iOS.UserNotificationAction>;
				actionsForMinimalContext : Array<Ti.App.iOS.UserNotificationAction>;
				identifier : string;
				getActionsForDefaultContext () : Array<Ti.App.iOS.UserNotificationAction>;
				getActionsForMinimalContext () : Array<Ti.App.iOS.UserNotificationAction>;
				getIdentifier () : string;
			}
			export interface BackgroundService extends Ti.Proxy {
				url : string;
				getUrl () : string;
				stop () : void;
				unregister () : void;
			}
		}
		export interface Properties  {
			getBool (property: string, _default?: boolean) : boolean;
			getDouble (property: string, _default?: number) : number;
			getInt (property: string, _default?: number) : number;
			getList (property: string, _default?: Array<Object>) : Array<Object>;
			getObject (property: string, _default?: any) : any;
			getString (property: string, _default?: string) : string;
			hasProperty (property: string) : boolean;
			listProperties () : Array<Object>;
			removeProperty (property: string) : void;
			setBool (property: string, value: boolean) : void;
			setDouble (property: string, value: number) : void;
			setInt (property: string, value: number) : void;
			setList (property: string, value: Array<Object>) : void;
			setObject (property: string, value: any) : void;
			setString (property: string, value: string) : void;
		}
		export interface Tizen  {
			categories : Array<String>;
			iconPath : string;
			id : string;
			installDate : Date;
			name : string;
			show : boolean;
			size : number;
			exit () : void;
			getCategories () : Array<String>;
			getIconPath () : string;
			getId () : string;
			getInstallDate () : Date;
			getName () : string;
			getShow () : boolean;
			getSize () : number;
			hide () : void;
		}
	}
	export module Android {
		export var ACTION_AIRPLANE_MODE_CHANGED : string;
		export var ACTION_ALL_APPS : string;
		export var ACTION_ANSWER : string;
		export var ACTION_ATTACH_DATA : string;
		export var ACTION_BATTERY_CHANGED : string;
		export var ACTION_BATTERY_LOW : string;
		export var ACTION_BATTERY_OKAY : string;
		export var ACTION_BOOT_COMPLETED : string;
		export var ACTION_BUG_REPORT : string;
		export var ACTION_CALL : string;
		export var ACTION_CALL_BUTTON : string;
		export var ACTION_CAMERA_BUTTON : string;
		export var ACTION_CHOOSER : string;
		export var ACTION_CLOSE_SYSTEM_DIALOGS : string;
		export var ACTION_CONFIGURATION_CHANGED : string;
		export var ACTION_CREATE_SHORTCUT : string;
		export var ACTION_DATE_CHANGED : string;
		export var ACTION_DEFAULT : string;
		export var ACTION_DELETE : string;
		export var ACTION_DEVICE_STORAGE_LOW : string;
		export var ACTION_DIAL : string;
		export var ACTION_EDIT : string;
		export var ACTION_GET_CONTENT : string;
		export var ACTION_GTALK_SERVICE_CONNECTED : string;
		export var ACTION_GTALK_SERVICE_DISCONNECTED : string;
		export var ACTION_HEADSET_PLUG : string;
		export var ACTION_INPUT_METHOD_CHANGED : string;
		export var ACTION_INSERT : string;
		export var ACTION_INSERT_OR_EDIT : string;
		export var ACTION_MAIN : string;
		export var ACTION_MANAGE_PACKAGE_STORAGE : string;
		export var ACTION_MEDIA_BAD_REMOVAL : string;
		export var ACTION_MEDIA_BUTTON : string;
		export var ACTION_MEDIA_CHECKING : string;
		export var ACTION_MEDIA_EJECT : string;
		export var ACTION_MEDIA_MOUNTED : string;
		export var ACTION_MEDIA_NOFS : string;
		export var ACTION_MEDIA_REMOVED : string;
		export var ACTION_MEDIA_SCANNER_FINISHED : string;
		export var ACTION_MEDIA_SCANNER_SCAN_FILE : string;
		export var ACTION_MEDIA_SCANNER_STARTED : string;
		export var ACTION_MEDIA_SHARED : string;
		export var ACTION_MEDIA_UNMOUNTABLE : string;
		export var ACTION_MEDIA_UNMOUNTED : string;
		export var ACTION_NEW_OUTGOING_CALL : string;
		export var ACTION_PACKAGE_ADDED : string;
		export var ACTION_PACKAGE_CHANGED : string;
		export var ACTION_PACKAGE_DATA_CLEARED : string;
		export var ACTION_PACKAGE_INSTALL : string;
		export var ACTION_PACKAGE_REMOVED : string;
		export var ACTION_PACKAGE_REPLACED : string;
		export var ACTION_PACKAGE_RESTARTED : string;
		export var ACTION_PICK : string;
		export var ACTION_PICK_ACTIVITY : string;
		export var ACTION_POWER_CONNECTED : string;
		export var ACTION_POWER_DISCONNECTED : string;
		export var ACTION_POWER_USAGE_SUMMARY : string;
		export var ACTION_PROVIDER_CHANGED : string;
		export var ACTION_REBOOT : string;
		export var ACTION_RUN : string;
		export var ACTION_SCREEN_OFF : string;
		export var ACTION_SCREEN_ON : string;
		export var ACTION_SEARCH : string;
		export var ACTION_SEARCH_LONG_PRESS : string;
		export var ACTION_SEND : string;
		export var ACTION_SENDTO : string;
		export var ACTION_SEND_MULTIPLE : string;
		export var ACTION_SET_WALLPAPER : string;
		export var ACTION_SHUTDOWN : string;
		export var ACTION_SYNC : string;
		export var ACTION_SYSTEM_TUTORIAL : string;
		export var ACTION_TIME_CHANGED : string;
		export var ACTION_TIME_TICK : string;
		export var ACTION_UID_REMOVED : string;
		export var ACTION_UMS_CONNECTED : string;
		export var ACTION_UMS_DISCONNECTED : string;
		export var ACTION_USER_PRESENT : string;
		export var ACTION_VIEW : string;
		export var ACTION_VOICE_COMMAND : string;
		export var ACTION_WALLPAPER_CHANGED : string;
		export var ACTION_WEB_SEARCH : string;
		export var CATEGORY_ALTERNATIVE : string;
		export var CATEGORY_BROWSABLE : string;
		export var CATEGORY_DEFAULT : string;
		export var CATEGORY_DEVELOPMENT_PREFERENCE : string;
		export var CATEGORY_EMBED : string;
		export var CATEGORY_FRAMEWORK_INSTRUMENTATION_TEST : string;
		export var CATEGORY_HOME : string;
		export var CATEGORY_INFO : string;
		export var CATEGORY_LAUNCHER : string;
		export var CATEGORY_MONKEY : string;
		export var CATEGORY_OPENABLE : string;
		export var CATEGORY_PREFERENCE : string;
		export var CATEGORY_SAMPLE_CODE : string;
		export var CATEGORY_SELECTED_ALTERNATIVE : string;
		export var CATEGORY_TAB : string;
		export var CATEGORY_TEST : string;
		export var CATEGORY_UNIT_TEST : string;
		export var DEFAULT_ALL : number;
		export var DEFAULT_LIGHTS : number;
		export var DEFAULT_SOUND : number;
		export var DEFAULT_VIBRATE : number;
		export var EXTRA_ALARM_COUNT : string;
		export var EXTRA_BCC : string;
		export var EXTRA_CC : string;
		export var EXTRA_DATA_REMOVED : string;
		export var EXTRA_DONT_KILL_APP : string;
		export var EXTRA_EMAIL : string;
		export var EXTRA_INTENT : string;
		export var EXTRA_KEY_EVENT : string;
		export var EXTRA_PHONE_NUMBER : string;
		export var EXTRA_REPLACING : string;
		export var EXTRA_SHORTCUT_ICON : string;
		export var EXTRA_SHORTCUT_ICON_RESOURCE : string;
		export var EXTRA_SHORTCUT_INTENT : string;
		export var EXTRA_SHORTCUT_NAME : string;
		export var EXTRA_STREAM : string;
		export var EXTRA_SUBJECT : string;
		export var EXTRA_TEMPLATE : string;
		export var EXTRA_TEXT : string;
		export var EXTRA_TITLE : string;
		export var EXTRA_UID : string;
		export var FILL_IN_ACTION : number;
		export var FILL_IN_CATEGORIES : number;
		export var FILL_IN_COMPONENT : number;
		export var FILL_IN_DATA : number;
		export var FILL_IN_PACKAGE : number;
		export var FLAG_ACTIVITY_BROUGHT_TO_FRONT : number;
		export var FLAG_ACTIVITY_CLEAR_TOP : number;
		export var FLAG_ACTIVITY_CLEAR_WHEN_TASK_RESET : number;
		export var FLAG_ACTIVITY_EXCLUDE_FROM_RECENTS : number;
		export var FLAG_ACTIVITY_FORWARD_RESULT : number;
		export var FLAG_ACTIVITY_LAUNCHED_FROM_HISTORY : number;
		export var FLAG_ACTIVITY_MULTIPLE_TASK : number;
		export var FLAG_ACTIVITY_NEW_TASK : number;
		export var FLAG_ACTIVITY_NO_ANIMATION : number;
		export var FLAG_ACTIVITY_NO_HISTORY : number;
		export var FLAG_ACTIVITY_NO_USER_ACTION : number;
		export var FLAG_ACTIVITY_PREVIOUS_IS_TOP : number;
		export var FLAG_ACTIVITY_REORDER_TO_FRONT : number;
		export var FLAG_ACTIVITY_RESET_TASK_IF_NEEDED : number;
		export var FLAG_ACTIVITY_SINGLE_TOP : number;
		export var FLAG_AUTO_CANCEL : number;
		export var FLAG_CANCEL_CURRENT : number;
		export var FLAG_DEBUG_LOG_RESOLUTION : number;
		export var FLAG_FROM_BACKGROUND : number;
		export var FLAG_GRANT_READ_URI_PERMISSION : number;
		export var FLAG_GRANT_WRITE_URI_PERMISSION : number;
		export var FLAG_INSISTENT : number;
		export var FLAG_NO_CLEAR : number;
		export var FLAG_NO_CREATE : number;
		export var FLAG_ONE_SHOT : number;
		export var FLAG_ONGOING_EVENT : number;
		export var FLAG_ONLY_ALERT_ONCE : number;
		export var FLAG_RECEIVER_REGISTERED_ONLY : number;
		export var FLAG_SHOW_LIGHTS : number;
		export var FLAG_UPDATE_CURRENT : number;
		export var NAVIGATION_MODE_STANDARD : number;
		export var NAVIGATION_MODE_TABS : number;
		export var PENDING_INTENT_FOR_ACTIVITY : number;
		export var PENDING_INTENT_FOR_BROADCAST : number;
		export var PENDING_INTENT_FOR_SERVICE : number;
		export var PENDING_INTENT_MAX_VALUE : number;
		export var R : Ti.Android.R;
		export var RESULT_CANCELED : number;
		export var RESULT_FIRST_USER : number;
		export var RESULT_OK : number;
		export var SCREEN_ORIENTATION_BEHIND : number;
		export var SCREEN_ORIENTATION_LANDSCAPE : number;
		export var SCREEN_ORIENTATION_NOSENSOR : number;
		export var SCREEN_ORIENTATION_PORTRAIT : number;
		export var SCREEN_ORIENTATION_SENSOR : number;
		export var SCREEN_ORIENTATION_UNSPECIFIED : number;
		export var SCREEN_ORIENTATION_USER : number;
		export var SHOW_AS_ACTION_ALWAYS : number;
		export var SHOW_AS_ACTION_COLLAPSE_ACTION_VIEW : number;
		export var SHOW_AS_ACTION_IF_ROOM : number;
		export var SHOW_AS_ACTION_NEVER : number;
		export var SHOW_AS_ACTION_WITH_TEXT : number;
		export var START_NOT_STICKY : number;
		export var START_REDELIVER_INTENT : number;
		export var STREAM_ALARM : number;
		export var STREAM_DEFAULT : number;
		export var STREAM_MUSIC : number;
		export var STREAM_NOTIFICATION : number;
		export var STREAM_RING : number;
		export var STREAM_SYSTEM : number;
		export var STREAM_VOICE_CALL : number;
		export var URI_INTENT_SCHEME : number;
		export var apiName : string;
		export var bubbleParent : boolean;
		export var currentActivity : Ti.Android.Activity;
		export var currentService : Ti.Android.Service;
		export function addEventListener (name: string, callback: (...args : any[]) => any) : void;
		export function applyProperties (props: Dictionary<Object>) : void;
		export function createBroadcastIntent (options: BroadcastIntentOptions) : Ti.Android.Intent;
		export function createBroadcastReceiver (parameters?: Dictionary<Ti.Android.BroadcastReceiver>) : Ti.Android.BroadcastReceiver;
		export function createIntent (parameters?: Dictionary<Ti.Android.Intent>) : Ti.Android.Intent;
		export function createIntentChooser (intent: Ti.Android.Intent, title: string) : Ti.Android.Intent;
		export function createNotification (parameters?: Dictionary<Ti.Android.Notification>) : Ti.Android.Notification;
		export function createPendingIntent (parameters?: Dictionary<Ti.Android.PendingIntent>) : Ti.Android.PendingIntent;
		export function createRemoteViews (parameters?: Dictionary<Ti.Android.RemoteViews>) : Ti.Android.RemoteViews;
		export function createService (intent: Ti.Android.Intent) : Ti.Android.Service;
		export function createServiceIntent (options: ServiceIntentOptions) : Ti.Android.Intent;
		export function fireEvent (name: string, event: Dictionary<Object>) : void;
		export function getApiName () : string;
		export function getBubbleParent () : boolean;
		export function getCurrentActivity () : Ti.Android.Activity;
		export function getCurrentService () : Ti.Android.Service;
		export function isServiceRunning (intent: Ti.Android.Intent) : boolean;
		export function registerBroadcastReceiver (broadcastReceiver: Ti.Android.BroadcastReceiver, actions: Array<String>) : void;
		export function removeEventListener (name: string, callback: (...args : any[]) => any) : void;
		export function setBubbleParent (bubbleParent: boolean) : void;
		export function startService (intent: Ti.Android.Intent) : void;
		export function stopService (intent: Ti.Android.Intent) : void;
		export function unregisterBroadcastReceiver (broadcastReceiver: Ti.Android.BroadcastReceiver) : void;
		export interface Intent extends Ti.Proxy {
			action : string;
			className : string;
			data : string;
			flags : number;
			packageName : string;
			type : string;
			url : string;
			addCategory (name: string) : void;
			addFlags (flags: number) : void;
			getAction () : string;
			getBlobExtra (name: string) : Ti.Blob;
			getBooleanExtra (name: string) : boolean;
			getClassName () : string;
			getData () : string;
			getDoubleExtra (name: string) : number;
			getFlags () : number;
			getIntExtra (name: string) : number;
			getLongExtra (name: string) : number;
			getPackageName () : string;
			getStringExtra (name: string) : string;
			getType () : string;
			getUrl () : string;
			hasExtra (name: string) : boolean;
			putExtra (name: string, value: any) : void;
			putExtraUri (name: string, value: string) : void;
			setFlags (flags: number) : void;
		}
		export interface Notification extends Ti.Proxy {
			audioStreamType : number;
			contentIntent : Ti.Android.PendingIntent;
			contentText : string;
			contentTitle : string;
			contentView : Ti.Android.RemoteViews;
			defaults : number;
			deleteIntent : Ti.Android.PendingIntent;
			flags : number;
			icon : any;
			ledARGB : number;
			ledOffMS : number;
			ledOnMS : number;
			number : number;
			sound : string;
			tickerText : string;
			when : any;
			getAudioStreamType () : number;
			getContentIntent () : Ti.Android.PendingIntent;
			getContentText () : string;
			getContentTitle () : string;
			getDefaults () : number;
			getDeleteIntent () : Ti.Android.PendingIntent;
			getFlags () : number;
			getIcon () : any;
			getLedARGB () : number;
			getLedOffMS () : number;
			getLedOnMS () : number;
			getNumber () : number;
			getSound () : string;
			getTickerText () : string;
			getWhen () : any;
			setAudioStreamType (audioStreamType: number) : void;
			setContentIntent (contentIntent: Ti.Android.PendingIntent) : void;
			setContentText (contentText: string) : void;
			setContentTitle (contentTitle: string) : void;
			setContentView (contentView: Ti.Android.RemoteViews) : void;
			setDefaults (defaults: number) : void;
			setDeleteIntent (deleteIntent: Ti.Android.PendingIntent) : void;
			setFlags (flags: number) : void;
			setIcon (icon: number) : void;
			setIcon (icon: string) : void;
			setLatestEventInfo (contentTitle: string, contentText: string, contentIntent: Ti.Android.PendingIntent) : void;
			setLedARGB (ledARGB: number) : void;
			setLedOffMS (ledOffMS: number) : void;
			setLedOnMS (ledOnMS: number) : void;
			setNumber (number: number) : void;
			setSound (sound: string) : void;
			setTickerText (tickerText: string) : void;
			setWhen (when: Date) : void;
			setWhen (when: number) : void;
		}
		export module Calendar {
			export var METHOD_ALERT : number;
			export var METHOD_DEFAULT : number;
			export var METHOD_EMAIL : number;
			export var METHOD_SMS : number;
			export var STATE_DISMISSED : number;
			export var STATE_FIRED : number;
			export var STATE_SCHEDULED : number;
			export var STATUS_CANCELED : number;
			export var STATUS_CONFIRMED : number;
			export var STATUS_TENTATIVE : number;
			export var VISIBILITY_CONFIDENTIAL : number;
			export var VISIBILITY_DEFAULT : number;
			export var VISIBILITY_PRIVATE : number;
			export var VISIBILITY_PUBLIC : number;
			export var allAlerts : Array<Ti.Android.Calendar.Alert>;
			export var allCalendars : Array<Ti.Android.Calendar.Calendar>;
			export var apiName : string;
			export var bubbleParent : boolean;
			export var selectableCalendars : Array<Ti.Android.Calendar.Calendar>;
			export function addEventListener (name: string, callback: (...args : any[]) => any) : void;
			export function applyProperties (props: Dictionary<Object>) : void;
			export function fireEvent (name: string, event: Dictionary<Object>) : void;
			export function getAllAlerts () : Array<Ti.Android.Calendar.Alert>;
			export function getAllCalendars () : Array<Ti.Android.Calendar.Calendar>;
			export function getApiName () : string;
			export function getBubbleParent () : boolean;
			export function getCalendarById (id: number) : Ti.Android.Calendar.Calendar;
			export function getSelectableCalendars () : Array<Ti.Android.Calendar.Calendar>;
			export function removeEventListener (name: string, callback: (...args : any[]) => any) : void;
			export function setBubbleParent (bubbleParent: boolean) : void;
			export interface Event extends Ti.Proxy {
				alerts : Array<Ti.Android.Calendar.Alert>;
				allDay : boolean;
				begin : Date;
				description : string;
				end : Date;
				extendedProperties : Dictionary<Object>;
				hasAlarm : boolean;
				hasExtendedProperties : boolean;
				id : string;
				location : string;
				reminders : Array<Ti.Android.Calendar.Reminder>;
				status : number;
				title : string;
				visibility : number;
				createAlert (data: Dictionary<Ti.Android.Calendar.Alert>) : Ti.Android.Calendar.Alert;
				createReminder (data: Dictionary<Ti.Android.Calendar.Reminder>) : Ti.Android.Calendar.Reminder;
				getAlerts () : Array<Ti.Android.Calendar.Alert>;
				getAllDay () : boolean;
				getBegin () : Date;
				getDescription () : string;
				getEnd () : Date;
				getExtendedProperties () : Dictionary<Object>;
				getExtendedProperty (name: string) : string;
				getHasAlarm () : boolean;
				getHasExtendedProperties () : boolean;
				getId () : string;
				getLocation () : string;
				getReminders () : Array<Ti.Android.Calendar.Reminder>;
				getStatus () : number;
				getTitle () : string;
				getVisibility () : number;
				setExtendedProperty (name: string, value: string) : void;
			}
			export interface Reminder extends Ti.Proxy {
				id : string;
				method : number;
				minutes : number;
				getId () : string;
				getMethod () : number;
				getMinutes () : number;
			}
			export interface Calendar extends Ti.Proxy {
				hidden : boolean;
				id : string;
				name : string;
				selected : boolean;
				createEvent (properties: Dictionary<Ti.Android.Calendar.Event>) : Ti.Android.Calendar.Event;
				getEventById (id: number) : Ti.Android.Calendar.Event;
				getEventsBetweenDates (date1: Date, date2: Date) : Array<Ti.Android.Calendar.Event>;
				getEventsInDate (year: number, month: number, day: number) : Array<Ti.Android.Calendar.Event>;
				getEventsInMonth (year: number, month: number) : Array<Ti.Android.Calendar.Event>;
				getEventsInYear (year: number) : Array<Ti.Android.Calendar.Event>;
				getHidden () : boolean;
				getId () : string;
				getName () : string;
				getSelected () : boolean;
			}
			export interface Alert extends Ti.Proxy {
				alarmTime : Date;
				begin : Date;
				end : Date;
				eventId : number;
				id : string;
				minutes : number;
				state : number;
				getAlarmTime () : Date;
				getBegin () : Date;
				getEnd () : Date;
				getEventId () : number;
				getId () : string;
				getMinutes () : number;
				getState () : number;
			}
		}
		export interface MenuItem extends Ti.Proxy {
			actionView : Ti.UI.View;
			actionViewExpanded : boolean;
			checkable : boolean;
			checked : boolean;
			enabled : boolean;
			groupId : number;
			icon : any;
			itemId : number;
			order : number;
			showAsAction : number;
			title : string;
			titleCondensed : string;
			visible : boolean;
			collapseActionView () : void;
			expandActionView () : void;
			getActionView () : Ti.UI.View;
			getGroupId () : number;
			getItemId () : number;
			getOrder () : number;
			getTitle () : string;
			getTitleCondensed () : string;
			isActionViewExpanded () : boolean;
			isCheckable () : boolean;
			isChecked () : boolean;
			isEnabled () : boolean;
			isVisible () : boolean;
			setActionView (actionView: Ti.UI.View) : void;
			setCheckable (checkable: boolean) : void;
			setChecked (enabled: boolean) : void;
			setEnabled (enabled: boolean) : void;
			setIcon (icon: number) : void;
			setIcon (icon: string) : void;
			setShowAsAction (showAsAction: number) : void;
			setTitle (title: string) : void;
			setTitleCondensed (titleCondensed: string) : void;
			setVisible (visible: boolean) : void;
		}
		export interface NotificationManager  {
			DEFAULT_ALL : number;
			DEFAULT_LIGHTS : number;
			DEFAULT_SOUND : number;
			DEFAULT_VIBRATE : number;
			FLAG_AUTO_CANCEL : number;
			FLAG_INSISTENT : number;
			FLAG_NO_CLEAR : number;
			FLAG_ONGOING_EVENT : number;
			FLAG_ONLY_ALERT_ONCE : number;
			FLAG_SHOW_LIGHTS : number;
			STREAM_DEFAULT : number;
			cancel (id: number) : void;
			cancelAll () : void;
			notify (id: number, notification: Ti.Android.Notification) : void;
		}
		export interface R extends Ti.Proxy {
			anim : any;
			array : any;
			attr : any;
			color : any;
			dimen : any;
			drawable : any;
			id : any;
			integer : any;
			layout : any;
			string : any;
			style : any;
			styleable : any;
		}
		export interface ActionBar extends Ti.Proxy {
			backgroundImage : string;
			displayHomeAsUp : boolean;
			homeButtonEnabled : boolean;
			icon : string;
			logo : string;
			navigationMode : number;
			onHomeIconItemSelected : (...args : any[]) => any;
			subtitle : string;
			title : string;
			getNavigationMode () : number;
			getSubtitle () : string;
			getTitle () : string;
			hide () : void;
			setBackgroundImage (backgroundImage: string) : void;
			setDisplayHomeAsUp (displayHomeAsUp: boolean) : void;
			setDisplayShowHomeEnabled (show: boolean) : void;
			setDisplayShowTitleEnabled (show: boolean) : void;
			setHomeButtonEnabled (homeButtonEnabled: boolean) : void;
			setIcon (icon: string) : void;
			setLogo (logo: string) : void;
			setNavigationMode (navigationMode: number) : void;
			setOnHomeIconItemSelected (onHomeIconItemSelected: (...args : any[]) => any) : void;
			setSubtitle (subtitle: string) : void;
			setTitle (title: string) : void;
			show () : void;
		}
		export interface BroadcastReceiver extends Ti.Proxy {
			onReceived : (...args : any[]) => any;
			url : string;
			getOnReceived () : (...args : any[]) => any;
			getUrl () : string;
			setOnReceived (onReceived: (...args : any[]) => any) : void;
			setUrl (url: string) : void;
		}
		export interface Menu extends Ti.Proxy {
			items : Array<Ti.Android.MenuItem>;
			add (options: any) : Ti.Android.MenuItem;
			clear () : void;
			close () : void;
			findItem (item: number) : Ti.Android.MenuItem;
			findItem (item: Ti.Android.MenuItem) : Ti.Android.MenuItem;
			getItem (index: number) : Ti.Android.MenuItem;
			getItems () : Array<Ti.Android.MenuItem>;
			hasVisibleItems () : boolean;
			removeGroup (groupId: number) : void;
			removeItem (itemId: number) : void;
			setGroupEnabled (groupId: number, enabled: boolean) : void;
			setGroupVisible (groupId: number, visible: boolean) : void;
			size () : number;
		}
		export interface Activity extends Ti.Proxy {
			actionBar : Ti.Android.ActionBar;
			intent : Ti.Android.Intent;
			onCreate : (...args : any[]) => any;
			onCreateOptionsMenu : (...args : any[]) => any;
			onDestroy : (...args : any[]) => any;
			onPause : (...args : any[]) => any;
			onPrepareOptionsMenu : (...args : any[]) => any;
			onRestart : (...args : any[]) => any;
			onResume : (...args : any[]) => any;
			onStart : (...args : any[]) => any;
			onStop : (...args : any[]) => any;
			requestedOrientation : number;
			finish () : void;
			getActionBar () : Ti.Android.ActionBar;
			getIntent () : Ti.Android.Intent;
			getOnCreate () : (...args : any[]) => any;
			getOnCreateOptionsMenu () : (...args : any[]) => any;
			getOnDestroy () : (...args : any[]) => any;
			getOnPause () : (...args : any[]) => any;
			getOnPrepareOptionsMenu () : (...args : any[]) => any;
			getOnRestart () : (...args : any[]) => any;
			getOnResume () : (...args : any[]) => any;
			getOnStart () : (...args : any[]) => any;
			getOnStop () : (...args : any[]) => any;
			getString (resourceId: number, format: any) : string;
			invalidateOptionsMenu () : void;
			openOptionsMenu () : void;
			sendBroadcast (intent: Ti.Android.Intent) : void;
			sendBroadcastWithPermission (intent: Ti.Android.Intent, receiverPermission?: string) : void;
			setOnCreate (onCreate: (...args : any[]) => any) : void;
			setOnCreateOptionsMenu (onCreateOptionsMenu: (...args : any[]) => any) : void;
			setOnDestroy (onDestroy: (...args : any[]) => any) : void;
			setOnPause (onPause: (...args : any[]) => any) : void;
			setOnPrepareOptionsMenu (onPrepareOptionsMenu: (...args : any[]) => any) : void;
			setOnRestart (onRestart: (...args : any[]) => any) : void;
			setOnResume (onResume: (...args : any[]) => any) : void;
			setOnStart (onStart: (...args : any[]) => any) : void;
			setOnStop (onStop: (...args : any[]) => any) : void;
			setRequestedOrientation (orientation: number) : void;
			setResult (resultCode: number, intent?: Ti.Android.Intent) : void;
			startActivity (intent: Ti.Android.Intent) : void;
			startActivityForResult (intent: Ti.Android.Intent, callback: (...args : any[]) => any) : void;
		}
		export interface Service extends Ti.Proxy {
			intent : Ti.Android.Intent;
			serviceInstanceId : number;
			getIntent () : Ti.Android.Intent;
			getServiceInstanceId () : number;
			start () : void;
			stop () : void;
		}
		export interface RemoteViews extends Ti.Proxy {
			layoutId : number;
			packageName : string;
			getLayoutId () : number;
			getPackageName () : string;
			setBoolean (viewId: number, methodName: string, value: boolean) : void;
			setChronometer (viewId: number, base: Date, format: string, started: boolean) : void;
			setDouble (viewId: number, methodName: string, value: number) : void;
			setImageViewResource (viewId: number, srcId: number) : void;
			setImageViewUri (viewId: number, uri: string) : void;
			setInt (viewId: number, methodName: string, value: number) : void;
			setOnClickPendingIntent (viewId: number, pendingIntent: Ti.Android.PendingIntent) : void;
			setProgressBar (viewId: number, max: number, progress: number, indeterminate: boolean) : void;
			setString (viewId: number, methodName: string, value: string) : void;
			setTextColor (viewId: number, color: number) : void;
			setTextViewText (viewId: number, text: string) : void;
			setUri (viewId: number, methodName: string, value: string) : void;
			setViewVisibility (viewId: number, visibility: number) : void;
		}
		export interface PendingIntent extends Ti.Proxy {
			flags : number;
			intent : Ti.Android.Intent;
			updateCurrentIntent : boolean;
			getFlags () : number;
			getIntent () : Ti.Android.Intent;
			getUpdateCurrentIntent () : boolean;
		}
	}
	export module Database {
		export var FIELD_TYPE_DOUBLE : number;
		export var FIELD_TYPE_FLOAT : number;
		export var FIELD_TYPE_INT : number;
		export var FIELD_TYPE_STRING : number;
		export var apiName : string;
		export var bubbleParent : boolean;
		export function addEventListener (name: string, callback: (...args : any[]) => any) : void;
		export function applyProperties (props: Dictionary<Object>) : void;
		export function fireEvent (name: string, event: Dictionary<Object>) : void;
		export function getApiName () : string;
		export function getBubbleParent () : boolean;
		export function install (path: string, dbName: string) : Ti.Database.DB;
		export function open (dbName: string) : Ti.Database.DB;
		export function removeEventListener (name: string, callback: (...args : any[]) => any) : void;
		export function setBubbleParent (bubbleParent: boolean) : void;
		export interface ResultSet extends Ti.Proxy {
			rowCount : number;
			validRow : boolean;
			close () : void;
			field (index: number, type?: number) : any;
			fieldByName (name: string, type?: number) : any;
			fieldCount () : number;
			fieldName (index: number) : string;
			getFieldCount () : number;
			getFieldName (index: number) : string;
			getRowCount () : number;
			getValidRow () : boolean;
			isValidRow () : boolean;
			next () : boolean;
		}
		export interface DB extends Ti.Proxy {
			file : Ti.Filesystem.File;
			lastInsertRowId : number;
			name : string;
			rowsAffected : number;
			close () : void;
			execute (sql: string, vararg?: string) : Ti.Database.ResultSet;
			execute (vararg?: Array<String>) : Ti.Database.ResultSet;
			execute (vararg?: any) : Ti.Database.ResultSet;
			execute (sql: string, vararg?: Array<Object>) : Ti.Database.ResultSet;
			getFile () : Ti.Filesystem.File;
			getLastInsertRowId () : number;
			getName () : string;
			getRowsAffected () : number;
			remove () : void;
			setLastInsertRowId (lastInsertRowId: number) : void;
			setName (name: string) : void;
			setRowsAffected (rowsAffected: number) : void;
		}
	}
	export module Contacts {
		export var AUTHORIZATION_AUTHORIZED : number;
		export var AUTHORIZATION_DENIED : number;
		export var AUTHORIZATION_RESTRICTED : number;
		export var AUTHORIZATION_UNKNOWN : number;
		export var CONTACTS_KIND_ORGANIZATION : number;
		export var CONTACTS_KIND_PERSON : number;
		export var CONTACTS_SORT_FIRST_NAME : number;
		export var CONTACTS_SORT_LAST_NAME : number;
		export var apiName : string;
		export var bubbleParent : boolean;
		export var contactsAuthorization : number;
		export function addEventListener (name: string, callback: (...args : any[]) => any) : void;
		export function applyProperties (props: Dictionary<Object>) : void;
		export function createGroup (parameters?: Dictionary<Ti.Contacts.Group>) : Ti.Contacts.Group;
		export function createPerson (parameters?: Dictionary<Ti.Contacts.Person>) : Ti.Contacts.Person;
		export function fireEvent (name: string, event: Dictionary<Object>) : void;
		export function getAllGroups () : Array<Ti.Contacts.Group>;
		export function getAllPeople (limit: number) : Array<Ti.Contacts.Person>;
		export function getApiName () : string;
		export function getBubbleParent () : boolean;
		export function getContactsAuthorization () : number;
		export function getGroupByID (id: number) : Ti.Contacts.Group;
		export function getPeopleWithName (name: string) : Array<Ti.Contacts.Person>;
		export function getPersonByID (id: number) : Ti.Contacts.Person;
		export function removeEventListener (name: string, callback: (...args : any[]) => any) : void;
		export function removeGroup (group: Ti.Contacts.Group) : void;
		export function removePerson (person: Ti.Contacts.Person) : void;
		export function requestAuthorization (callback: (...args : any[]) => any) : void;
		export function revert () : void;
		export function save (contacts: Array<Ti.Contacts.Person>) : void;
		export function setBubbleParent (bubbleParent: boolean) : void;
		export function showContacts (params: showContactsParams) : void;
		export module Tizen {
			export var apiName : string;
			export function addEventListener (name: string, callback: (...args : any[]) => any) : void;
			export function applyProperties (props: Dictionary<Object>) : void;
			export function fireEvent (name: string, event: Dictionary<Object>) : void;
			export function getAllPeople (callback: (...args : any[]) => any) : void;
			export function getApiName () : string;
			export function getPeopleWithName (name: string, callback: (...args : any[]) => any) : void;
			export function removeEventListener (name: string, callback: (...args : any[]) => any) : void;
			export interface Group  {
				members (group: Ti.Contacts.Group, callback: (...args : any[]) => any) : void;
				sortedMembers (sortBy: number, group: Ti.Contacts.Group, callback: (...args : any[]) => any) : void;
			}
		}
		export interface Group extends Ti.Proxy {
			name : string;
			recordId : number;
			add (person: Ti.Contacts.Person) : void;
			getName () : string;
			getRecordId () : number;
			members () : Array<Ti.Contacts.Person>;
			remove (person: Ti.Contacts.Person) : void;
			setName (name: string) : void;
			setRecordId (recordId: number) : void;
			sortedMembers (sortBy: number) : Array<Ti.Contacts.Person>;
		}
		export interface Person extends Ti.Proxy {
			address : Dictionary<Object>;
			birthday : string;
			created : string;
			date : Dictionary<Object>;
			department : string;
			email : Dictionary<Object>;
			firstName : string;
			firstPhonetic : string;
			fullName : string;
			id : number;
			image : Ti.Blob;
			instantMessage : Dictionary<Object>;
			jobTitle : string;
			kind : number;
			lastName : string;
			lastPhonetic : string;
			middleName : string;
			middlePhonetic : string;
			modified : string;
			nickname : string;
			note : string;
			organization : string;
			phone : Dictionary<Object>;
			prefix : string;
			recordId : number;
			relatedNames : Dictionary<Object>;
			suffix : string;
			url : Dictionary<Object>;
			getAddress () : Dictionary<Object>;
			getBirthday () : string;
			getCreated () : string;
			getDate () : Dictionary<Object>;
			getDepartment () : string;
			getEmail () : Dictionary<Object>;
			getFirstName () : string;
			getFirstPhonetic () : string;
			getFullName () : string;
			getId () : number;
			getImage () : Ti.Blob;
			getInstantMessage () : Dictionary<Object>;
			getJobTitle () : string;
			getKind () : number;
			getLastName () : string;
			getLastPhonetic () : string;
			getMiddleName () : string;
			getMiddlePhonetic () : string;
			getModified () : string;
			getNickname () : string;
			getNote () : string;
			getOrganization () : string;
			getPhone () : Dictionary<Object>;
			getPrefix () : string;
			getRecordId () : number;
			getRelatedNames () : Dictionary<Object>;
			getSuffix () : string;
			getUrl () : Dictionary<Object>;
			setAddress (address: Dictionary<Object>) : void;
			setBirthday (birthday: string) : void;
			setDate (date: Dictionary<Object>) : void;
			setDepartment (department: string) : void;
			setEmail (email: Dictionary<Object>) : void;
			setFirstName (firstName: string) : void;
			setFirstPhonetic (firstPhonetic: string) : void;
			setImage (image: Ti.Blob) : void;
			setInstantMessage (instantMessage: Dictionary<Object>) : void;
			setJobTitle (jobTitle: string) : void;
			setKind (kind: number) : void;
			setLastName (lastName: string) : void;
			setLastPhonetic (lastPhonetic: string) : void;
			setMiddleName (middleName: string) : void;
			setMiddlePhonetic (middlePhonetic: string) : void;
			setNickname (nickname: string) : void;
			setNote (note: string) : void;
			setOrganization (organization: string) : void;
			setPhone (phone: Dictionary<Object>) : void;
			setRecordId (recordId: number) : void;
			setRelatedNames (relatedNames: Dictionary<Object>) : void;
			setUrl (url: Dictionary<Object>) : void;
		}
	}
	export interface CloudPush  {
		SERVICE_DISABLED : number;
		SERVICE_INVALID : number;
		SERVICE_MISSING : number;
		SERVICE_VERSION_UPDATE_REQUIRED : number;
		SUCCESS : number;
		enabled : boolean;
		focusAppOnPush : boolean;
		showAppOnTrayClick : boolean;
		showTrayNotification : boolean;
		showTrayNotificationsWhenFocused : boolean;
		singleCallback : boolean;
		clearStatus () : void;
		getEnabled () : boolean;
		getFocusAppOnPush () : boolean;
		getShowAppOnTrayClick () : boolean;
		getShowTrayNotification () : boolean;
		getShowTrayNotificationsWhenFocused () : boolean;
		getSingleCallback () : boolean;
		isGooglePlayServicesAvailable () : number;
		retrieveDeviceToken (config: CloudPushNotificationConfig) : void;
		setEnabled (enabled: boolean) : void;
		setFocusAppOnPush (focusAppOnPush: boolean) : void;
		setShowAppOnTrayClick (showAppOnTrayClick: boolean) : void;
		setShowTrayNotification (showTrayNotification: boolean) : void;
		setShowTrayNotificationsWhenFocused (showTrayNotificationsWhenFocused: boolean) : void;
		setSingleCallback (singleCallback: boolean) : void;
	}
	export module Media {
		export var AUDIO_FILEFORMAT_3GP2 : number;
		export var AUDIO_FILEFORMAT_3GPP : number;
		export var AUDIO_FILEFORMAT_AIFF : number;
		export var AUDIO_FILEFORMAT_AMR : number;
		export var AUDIO_FILEFORMAT_CAF : number;
		export var AUDIO_FILEFORMAT_MP3 : number;
		export var AUDIO_FILEFORMAT_MP4 : number;
		export var AUDIO_FILEFORMAT_MP4A : number;
		export var AUDIO_FILEFORMAT_WAVE : number;
		export var AUDIO_FORMAT_AAC : number;
		export var AUDIO_FORMAT_ALAW : number;
		export var AUDIO_FORMAT_APPLE_LOSSLESS : number;
		export var AUDIO_FORMAT_ILBC : number;
		export var AUDIO_FORMAT_IMA4 : number;
		export var AUDIO_FORMAT_LINEAR_PCM : number;
		export var AUDIO_FORMAT_ULAW : number;
		export var AUDIO_HEADPHONES : number;
		export var AUDIO_HEADPHONES_AND_MIC : number;
		export var AUDIO_HEADSET_INOUT : number;
		export var AUDIO_LINEOUT : number;
		export var AUDIO_MICROPHONE : number;
		export var AUDIO_MUTED : number;
		export var AUDIO_RECEIVER_AND_MIC : number;
		export var AUDIO_SESSION_CATEGORY_AMBIENT : string;
		export var AUDIO_SESSION_CATEGORY_PLAYBACK : string;
		export var AUDIO_SESSION_CATEGORY_PLAY_AND_RECORD : string;
		export var AUDIO_SESSION_CATEGORY_RECORD : string;
		export var AUDIO_SESSION_CATEGORY_SOLO_AMBIENT : string;
		export var AUDIO_SESSION_MODE_AMBIENT : number;
		export var AUDIO_SESSION_MODE_PLAYBACK : number;
		export var AUDIO_SESSION_MODE_PLAY_AND_RECORD : number;
		export var AUDIO_SESSION_MODE_RECORD : number;
		export var AUDIO_SESSION_MODE_SOLO_AMBIENT : number;
		export var AUDIO_SESSION_OVERRIDE_ROUTE_NONE : number;
		export var AUDIO_SESSION_OVERRIDE_ROUTE_SPEAKER : number;
		export var AUDIO_SESSION_PORT_AIRPLAY : string;
		export var AUDIO_SESSION_PORT_BLUETOOTHA2DP : string;
		export var AUDIO_SESSION_PORT_BLUETOOTHHFP : string;
		export var AUDIO_SESSION_PORT_BLUETOOTHLE : string;
		export var AUDIO_SESSION_PORT_BUILTINMIC : string;
		export var AUDIO_SESSION_PORT_BUILTINRECEIVER : string;
		export var AUDIO_SESSION_PORT_BUILTINSPEAKER : string;
		export var AUDIO_SESSION_PORT_CARAUDIO : string;
		export var AUDIO_SESSION_PORT_HDMI : string;
		export var AUDIO_SESSION_PORT_HEADPHONES : string;
		export var AUDIO_SESSION_PORT_HEADSETMIC : string;
		export var AUDIO_SESSION_PORT_LINEIN : string;
		export var AUDIO_SESSION_PORT_LINEOUT : string;
		export var AUDIO_SESSION_PORT_USBAUDIO : string;
		export var AUDIO_SPEAKER : number;
		export var AUDIO_UNAVAILABLE : number;
		export var AUDIO_UNKNOWN : number;
		export var CAMERA_FLASH_AUTO : number;
		export var CAMERA_FLASH_OFF : number;
		export var CAMERA_FLASH_ON : number;
		export var CAMERA_FRONT : number;
		export var CAMERA_REAR : number;
		export var DEVICE_BUSY : number;
		export var MEDIA_TYPE_PHOTO : string;
		export var MEDIA_TYPE_VIDEO : string;
		export var MUSIC_MEDIA_GROUP_ALBUM : number;
		export var MUSIC_MEDIA_GROUP_ALBUM_ARTIST : number;
		export var MUSIC_MEDIA_GROUP_ARTIST : number;
		export var MUSIC_MEDIA_GROUP_COMPOSER : number;
		export var MUSIC_MEDIA_GROUP_GENRE : number;
		export var MUSIC_MEDIA_GROUP_PLAYLIST : number;
		export var MUSIC_MEDIA_GROUP_PODCAST_TITLE : number;
		export var MUSIC_MEDIA_GROUP_TITLE : number;
		export var MUSIC_MEDIA_TYPE_ALL : number;
		export var MUSIC_MEDIA_TYPE_ANY_AUDIO : number;
		export var MUSIC_MEDIA_TYPE_AUDIOBOOK : number;
		export var MUSIC_MEDIA_TYPE_MUSIC : number;
		export var MUSIC_MEDIA_TYPE_PODCAST : number;
		export var MUSIC_PLAYER_REPEAT_ALL : number;
		export var MUSIC_PLAYER_REPEAT_DEFAULT : number;
		export var MUSIC_PLAYER_REPEAT_NONE : number;
		export var MUSIC_PLAYER_REPEAT_ONE : number;
		export var MUSIC_PLAYER_SHUFFLE_ALBUMS : number;
		export var MUSIC_PLAYER_SHUFFLE_DEFAULT : number;
		export var MUSIC_PLAYER_SHUFFLE_NONE : number;
		export var MUSIC_PLAYER_SHUFFLE_SONGS : number;
		export var MUSIC_PLAYER_STATE_INTERRUPTED : number;
		export var MUSIC_PLAYER_STATE_PAUSED : number;
		export var MUSIC_PLAYER_STATE_PLAYING : number;
		export var MUSIC_PLAYER_STATE_SEEK_BACKWARD : number;
		export var MUSIC_PLAYER_STATE_SEEK_FORWARD : number;
		export var MUSIC_PLAYER_STATE_STOPPED : number;
		export var NO_CAMERA : number;
		export var NO_VIDEO : number;
		export var QUALITY_HIGH : number;
		export var QUALITY_LOW : number;
		export var QUALITY_MEDIUM : number;
		export var UNKNOWN_ERROR : number;
		export var VIDEO_CONTROL_DEFAULT : number;
		export var VIDEO_CONTROL_EMBEDDED : number;
		export var VIDEO_CONTROL_FULLSCREEN : number;
		export var VIDEO_CONTROL_HIDDEN : number;
		export var VIDEO_CONTROL_NONE : number;
		export var VIDEO_CONTROL_VOLUME_ONLY : number;
		export var VIDEO_FINISH_REASON_PLAYBACK_ENDED : number;
		export var VIDEO_FINISH_REASON_PLAYBACK_ERROR : number;
		export var VIDEO_FINISH_REASON_USER_EXITED : number;
		export var VIDEO_LOAD_STATE_PLAYABLE : number;
		export var VIDEO_LOAD_STATE_PLAYTHROUGH_OK : number;
		export var VIDEO_LOAD_STATE_STALLED : number;
		export var VIDEO_LOAD_STATE_UNKNOWN : number;
		export var VIDEO_MEDIA_TYPE_AUDIO : number;
		export var VIDEO_MEDIA_TYPE_NONE : number;
		export var VIDEO_MEDIA_TYPE_VIDEO : number;
		export var VIDEO_PLAYBACK_STATE_INTERRUPTED : number;
		export var VIDEO_PLAYBACK_STATE_PAUSED : number;
		export var VIDEO_PLAYBACK_STATE_PLAYING : number;
		export var VIDEO_PLAYBACK_STATE_SEEKING_BACKWARD : number;
		export var VIDEO_PLAYBACK_STATE_SEEKING_FORWARD : number;
		export var VIDEO_PLAYBACK_STATE_STOPPED : number;
		export var VIDEO_REPEAT_MODE_NONE : number;
		export var VIDEO_REPEAT_MODE_ONE : number;
		export var VIDEO_SCALING_ASPECT_FILL : number;
		export var VIDEO_SCALING_ASPECT_FIT : number;
		export var VIDEO_SCALING_MODE_FILL : number;
		export var VIDEO_SCALING_NONE : number;
		export var VIDEO_SOURCE_TYPE_FILE : number;
		export var VIDEO_SOURCE_TYPE_STREAMING : number;
		export var VIDEO_SOURCE_TYPE_UNKNOWN : number;
		export var VIDEO_TIME_OPTION_EXACT : number;
		export var VIDEO_TIME_OPTION_NEAREST_KEYFRAME : number;
		export var apiName : string;
		export var appMusicPlayer : Ti.Media.MusicPlayer;
		export var audioLineType : number;
		export var audioPlaying : boolean;
		export var audioSessionCategory : number;
		export var audioSessionMode : number;
		export var availableCameraMediaTypes : Array<Object>;
		export var availableCameras : Array<Number>;
		export var availablePhotoGalleryMediaTypes : Array<Object>;
		export var availablePhotoMediaTypes : Array<Object>;
		export var averageMicrophonePower : number;
		export var bubbleParent : boolean;
		export var cameraFlashMode : number;
		export var canRecord : boolean;
		export var currentRoute : RouteDescription;
		export var isCameraSupported : boolean;
		export var peakMicrophonePower : number;
		export var systemMusicPlayer : Ti.Media.MusicPlayer;
		export var volume : number;
		export function addEventListener (name: string, callback: (...args : any[]) => any) : void;
		export function applyProperties (props: Dictionary<Object>) : void;
		export function beep () : void;
		export function createAudioPlayer (parameters?: Dictionary<Ti.Media.AudioPlayer>) : Ti.Media.AudioPlayer;
		export function createAudioRecorder (parameters?: Dictionary<Ti.Media.AudioRecorder>) : Ti.Media.AudioRecorder;
		export function createItem (parameters?: Dictionary<Ti.Media.Item>) : Ti.Media.Item;
		export function createMusicPlayer (parameters?: Dictionary<Ti.Media.MusicPlayer>) : Ti.Media.MusicPlayer;
		export function createSound (parameters?: Dictionary<Ti.Media.Sound>) : Ti.Media.Sound;
		export function createVideoPlayer (parameters?: Dictionary<Ti.Media.VideoPlayer>) : Ti.Media.VideoPlayer;
		export function fireEvent (name: string, event: Dictionary<Object>) : void;
		export function getApiName () : string;
		export function getAppMusicPlayer () : Ti.Media.MusicPlayer;
		export function getAudioLineType () : number;
		export function getAudioPlaying () : boolean;
		export function getAudioSessionCategory () : number;
		export function getAudioSessionMode () : number;
		export function getAvailableCameraMediaTypes () : Array<Object>;
		export function getAvailableCameras () : Array<Number>;
		export function getAvailablePhotoGalleryMediaTypes () : Array<Object>;
		export function getAvailablePhotoMediaTypes () : Array<Object>;
		export function getAverageMicrophonePower () : number;
		export function getBubbleParent () : boolean;
		export function getCameraFlashMode () : number;
		export function getCanRecord () : boolean;
		export function getCurrentRoute () : RouteDescription;
		export function getIsCameraSupported () : boolean;
		export function getPeakMicrophonePower () : number;
		export function getSystemMusicPlayer () : Ti.Media.MusicPlayer;
		export function getVolume () : number;
		export function hideCamera () : void;
		export function hideMusicLibrary () : void;
		export function isMediaTypeSupported (source: string, type: string) : boolean;
		export function openMusicLibrary (options: MusicLibraryOptionsType) : void;
		export function openPhotoGallery (options: PhotoGalleryOptionsType) : void;
		export function previewImage (options: Dictionary<PreviewImageOptions>) : void;
		export function queryMusicLibrary (query: MediaQueryType) : Array<Ti.Media.Item>;
		export function removeEventListener (name: string, callback: (...args : any[]) => any) : void;
		export function requestAuthorization (callback: (...args : any[]) => any) : void;
		export function saveToPhotoGallery (media: Ti.Blob, callbacks: any) : void;
		export function saveToPhotoGallery (media: Ti.Filesystem.File, callbacks: any) : void;
		export function setAudioSessionCategory (audioSessionCategory: number) : void;
		export function setAudioSessionMode (audioSessionMode: number) : void;
		export function setAvailableCameraMediaTypes (availableCameraMediaTypes: Array<Object>) : void;
		export function setAvailablePhotoGalleryMediaTypes (availablePhotoGalleryMediaTypes: Array<Object>) : void;
		export function setAvailablePhotoMediaTypes (availablePhotoMediaTypes: Array<Object>) : void;
		export function setAverageMicrophonePower (averageMicrophonePower: number) : void;
		export function setBubbleParent (bubbleParent: boolean) : void;
		export function setCameraFlashMode (cameraFlashMode: number) : void;
		export function setOverrideAudioRoute (route: number) : void;
		export function showCamera (options: CameraOptionsType) : void;
		export function startMicrophoneMonitor () : void;
		export function stopMicrophoneMonitor () : void;
		export function switchCamera (camera: number) : void;
		export function takePicture () : void;
		export function takeScreenshot (callback: (...args : any[]) => any) : void;
		export function vibrate (pattern?: Array<Number>) : void;
		export interface Sound extends Ti.Proxy {
			STATE_BUFFERING : number;
			STATE_INITIALIZED : number;
			STATE_PAUSED : number;
			STATE_PLAYING : number;
			STATE_STARTING : number;
			STATE_STOPPED : number;
			STATE_STOPPING : number;
			STATE_WAITING_FOR_DATA : number;
			STATE_WAITING_FOR_QUEUE : number;
			allowBackground : boolean;
			duration : number;
			looping : boolean;
			paused : boolean;
			playing : boolean;
			time : number;
			url : string;
			volume : number;
			getDuration () : number;
			getTime () : number;
			getUrl () : string;
			getVolume () : number;
			isLooping () : boolean;
			isPaused () : boolean;
			isPlaying () : boolean;
			pause () : void;
			play () : void;
			release () : void;
			reset () : void;
			setLooping (looping: boolean) : void;
			setPaused (paused: boolean) : void;
			setTime (time: number) : void;
			setUrl (url: string) : void;
			setVolume (volume: number) : void;
			stop () : void;
		}
		export interface VideoPlayer extends Ti.UI.View {
			allowsAirPlay : boolean;
			autoplay : boolean;
			contentURL : string;
			currentPlaybackTime : number;
			duration : number;
			endPlaybackTime : number;
			fullscreen : boolean;
			initialPlaybackTime : number;
			loadState : number;
			media : any;
			mediaControlStyle : number;
			mediaTypes : number;
			movieControlMode : number;
			naturalSize : MovieSize;
			playableDuration : number;
			playbackState : number;
			playing : boolean;
			repeatMode : number;
			scalingMode : number;
			sourceType : number;
			url : any;
			useApplicationAudioSession : boolean;
			volume : number;
			cancelAllThumbnailImageRequests () : void;
			getAllowsAirPlay () : boolean;
			getAutoplay () : boolean;
			getContentURL () : string;
			getCurrentPlaybackTime () : number;
			getDuration () : number;
			getEndPlaybackTime () : number;
			getFullscreen () : boolean;
			getInitialPlaybackTime () : number;
			getLoadState () : number;
			getMediaControlStyle () : number;
			getMediaTypes () : number;
			getMovieControlMode () : number;
			getNaturalSize () : MovieSize;
			getPlayableDuration () : number;
			getPlaybackState () : number;
			getPlaying () : boolean;
			getRepeatMode () : number;
			getScalingMode () : number;
			getSourceType () : number;
			getUrl () : any;
			getUseApplicationAudioSession () : boolean;
			getVolume () : number;
			pause () : void;
			play () : void;
			release () : void;
			requestThumbnailImagesAtTimes (times: Array<Number>, option: number, callback: (...args : any[]) => any) : void;
			setAllowsAirPlay (allowsAirPlay: boolean) : void;
			setAutoplay (autoplay: boolean) : void;
			setBackgroundView (view: Ti.UI.View) : void;
			setContentURL (contentURL: string) : void;
			setCurrentPlaybackTime (currentPlaybackTime: number) : void;
			setDuration (duration: number) : void;
			setEndPlaybackTime (endPlaybackTime: number) : void;
			setFullscreen (fullscreen: boolean) : void;
			setInitialPlaybackTime (initialPlaybackTime: number) : void;
			setMedia (media: Ti.Blob) : void;
			setMedia (media: Ti.Filesystem.File) : void;
			setMedia (media: string) : void;
			setMediaControlStyle (mediaControlStyle: number) : void;
			setMediaTypes (mediaTypes: number) : void;
			setMovieControlMode (movieControlMode: number) : void;
			setNaturalSize (naturalSize: MovieSize) : void;
			setRepeatMode (repeatMode: number) : void;
			setScalingMode (scalingMode: number) : void;
			setSourceType (sourceType: number) : void;
			setUrl (url: string) : void;
			setUrl (url: Array<String>) : void;
			setUseApplicationAudioSession (useApplicationAudioSession: boolean) : void;
			setVolume (volume: number) : void;
			stop () : void;
			thumbnailImageAtTime (time: number, option: number) : Ti.Blob;
		}
		export interface AudioRecorder extends Ti.Proxy {
			compression : number;
			format : number;
			paused : boolean;
			recording : boolean;
			stopped : boolean;
			getCompression () : number;
			getFormat () : number;
			getPaused () : boolean;
			getRecording () : boolean;
			getStopped () : boolean;
			pause () : void;
			resume () : void;
			setCompression (compression: number) : void;
			setFormat (format: number) : void;
			start () : void;
			stop () : Ti.Filesystem.File;
		}
		export interface Item extends Ti.Proxy {
			albumArtist : string;
			albumTitle : string;
			albumTrackCount : number;
			albumTrackNumber : number;
			artist : string;
			artwork : Ti.Blob;
			composer : string;
			discCount : number;
			discNumber : number;
			genre : string;
			isCompilation : boolean;
			lyrics : string;
			mediaType : number;
			playCount : number;
			playbackDuration : number;
			podcastTitle : string;
			rating : number;
			skipCount : number;
			title : string;
			getAlbumArtist () : string;
			getAlbumTitle () : string;
			getAlbumTrackCount () : number;
			getAlbumTrackNumber () : number;
			getArtist () : string;
			getArtwork () : Ti.Blob;
			getComposer () : string;
			getDiscCount () : number;
			getDiscNumber () : number;
			getGenre () : string;
			getIsCompilation () : boolean;
			getLyrics () : string;
			getMediaType () : number;
			getPlayCount () : number;
			getPlaybackDuration () : number;
			getPodcastTitle () : string;
			getRating () : number;
			getSkipCount () : number;
			getTitle () : string;
		}
		export interface MusicPlayer extends Ti.Proxy {
			currentPlaybackTime : number;
			nowPlaying : Ti.Media.Item;
			playbackState : number;
			repeatMode : number;
			shuffleMode : number;
			volume : number;
			getCurrentPlaybackTime () : number;
			getNowPlaying () : Ti.Media.Item;
			getPlaybackState () : number;
			getRepeatMode () : number;
			getShuffleMode () : number;
			getVolume () : number;
			pause () : void;
			play () : void;
			seekBackward () : void;
			seekForward () : void;
			setCurrentPlaybackTime (currentPlaybackTime: number) : void;
			setQueue (queue: Ti.Media.Item) : void;
			setQueue (queue: Array<Ti.Media.Item>) : void;
			setQueue (queue: PlayerQueue) : void;
			setRepeatMode (repeatMode: number) : void;
			setShuffleMode (shuffleMode: number) : void;
			setVolume (volume: number) : void;
			skipToBeginning () : void;
			skipToNext () : void;
			skipToPrevious () : void;
			stop () : void;
			stopSeeking () : void;
		}
		export interface AudioPlayer extends Ti.Proxy {
			STATE_BUFFERING : number;
			STATE_INITIALIZED : number;
			STATE_PAUSED : number;
			STATE_PLAYING : number;
			STATE_STARTING : number;
			STATE_STOPPED : number;
			STATE_STOPPING : number;
			STATE_WAITING_FOR_DATA : number;
			STATE_WAITING_FOR_QUEUE : number;
			allowBackground : boolean;
			autoplay : boolean;
			bitRate : number;
			bufferSize : number;
			duration : number;
			idle : boolean;
			paused : boolean;
			playing : boolean;
			progress : number;
			state : number;
			time : number;
			url : string;
			volume : number;
			waiting : boolean;
			getAllowBackground () : boolean;
			getAutoplay () : boolean;
			getBitRate () : number;
			getBufferSize () : number;
			getDuration () : number;
			getIdle () : boolean;
			getPaused () : boolean;
			getPlaying () : boolean;
			getProgress () : number;
			getState () : number;
			getTime () : number;
			getUrl () : string;
			getVolume () : number;
			getWaiting () : boolean;
			isPaused () : boolean;
			isPlaying () : boolean;
			pause () : void;
			play () : void;
			release () : void;
			setBitRate (bitRate: number) : void;
			setBufferSize (bufferSize: number) : void;
			setPaused (paused: boolean) : void;
			setTime (time: number) : void;
			setUrl (url: string) : void;
			setVolume (volume: number) : void;
			start () : void;
			stateDescription (state: number) : string;
			stop () : void;
		}
		export interface Android  {
			scanMediaFiles (paths: Array<String>, mimeTypes: Array<String>, callback: (...args : any[]) => any) : void;
			setSystemWallpaper (image: Ti.Blob, scale: boolean) : void;
		}
	}
	export module Platform {
		export var BATTERY_STATE_CHARGING : number;
		export var BATTERY_STATE_FULL : number;
		export var BATTERY_STATE_UNKNOWN : number;
		export var BATTERY_STATE_UNPLUGGED : number;
		export var address : string;
		export var apiName : string;
		export var architecture : string;
		export var availableMemory : number;
		export var batteryLevel : number;
		export var batteryMonitoring : boolean;
		export var batteryState : number;
		export var bubbleParent : boolean;
		export var displayCaps : Ti.Platform.DisplayCaps;
		export var id : string;
		export var locale : string;
		export var macaddress : string;
		export var manufacturer : string;
		export var model : string;
		export var name : string;
		export var netmask : string;
		export var osname : string;
		export var ostype : string;
		export var processorCount : number;
		export var runtime : string;
		export var username : string;
		export var version : string;
		export function addEventListener (name: string, callback: (...args : any[]) => any) : void;
		export function applyProperties (props: Dictionary<Object>) : void;
		export function canOpenURL (url: string) : boolean;
		export function createUUID () : string;
		export function fireEvent (name: string, event: Dictionary<Object>) : void;
		export function getAddress () : string;
		export function getApiName () : string;
		export function getArchitecture () : string;
		export function getAvailableMemory () : number;
		export function getBatteryLevel () : number;
		export function getBatteryMonitoring () : boolean;
		export function getBatteryState () : number;
		export function getBubbleParent () : boolean;
		export function getDisplayCaps () : Ti.Platform.DisplayCaps;
		export function getId () : string;
		export function getLocale () : string;
		export function getMacaddress () : string;
		export function getManufacturer () : string;
		export function getModel () : string;
		export function getName () : string;
		export function getNetmask () : string;
		export function getOsname () : string;
		export function getOstype () : string;
		export function getProcessorCount () : number;
		export function getRuntime () : string;
		export function getUsername () : string;
		export function getVersion () : string;
		export function is24HourTimeFormat () : boolean;
		export function openURL (url: string) : boolean;
		export function removeEventListener (name: string, callback: (...args : any[]) => any) : void;
		export function setBatteryMonitoring (batteryMonitoring: boolean) : void;
		export function setBubbleParent (bubbleParent: boolean) : void;
		export interface DisplayCaps extends Ti.Proxy {
			density : string;
			dpi : number;
			logicalDensityFactor : number;
			platformHeight : number;
			platformWidth : number;
			xdpi : number;
			ydpi : number;
			getDensity () : string;
			getDpi () : number;
			getLogicalDensityFactor () : number;
			getPlatformHeight () : number;
			getPlatformWidth () : number;
			getXdpi () : number;
			getYdpi () : number;
		}
		export interface Android  {
			API_LEVEL : number;
			PHYSICAL_SIZE_CATEGORY_LARGE : number;
			PHYSICAL_SIZE_CATEGORY_NORMAL : number;
			PHYSICAL_SIZE_CATEGORY_SMALL : number;
			PHYSICAL_SIZE_CATEGORY_UNDEFINED : number;
			PHYSICAL_SIZE_CATEGORY_XLARGE : number;
			physicalSizeCategory : number;
			getPhysicalSizeCategory () : number;
		}
	}
	export interface Buffer extends Ti.Proxy {
		byteOrder : number;
		length : number;
		type : string;
		value : any;
		append (sourceBuffer: Ti.Buffer, sourceOffset?: number, sourceLength?: number) : number;
		clear () : void;
		clone (offset?: number, length?: number) : Ti.Buffer;
		copy (sourceBuffer: Ti.Buffer, offset: number, sourceOffset?: number, sourceLength?: number) : number;
		fill (fillByte: number, offset?: number, length?: number) : void;
		getByteOrder () : number;
		getLength () : number;
		getType () : string;
		getValue () : any;
		insert (sourceBuffer: Ti.Buffer, offset: number, sourceOffset?: number, sourceLength?: number) : number;
		release () : void;
		setLength (length: number) : void;
		toBlob () : Ti.Blob;
		toString () : string;
	}
	export enum BufferStream {

	}
	export module Calendar {
		export var AUTHORIZATION_AUTHORIZED : number;
		export var AUTHORIZATION_DENIED : number;
		export var AUTHORIZATION_RESTRICTED : number;
		export var AUTHORIZATION_UNKNOWN : number;
		export var AVAILABILITY_BUSY : number;
		export var AVAILABILITY_FREE : number;
		export var AVAILABILITY_NOTSUPPORTED : number;
		export var AVAILABILITY_TENTATIVE : number;
		export var AVAILABILITY_UNAVAILABLE : number;
		export var METHOD_ALERT : number;
		export var METHOD_DEFAULT : number;
		export var METHOD_EMAIL : number;
		export var METHOD_SMS : number;
		export var RECURRENCEFREQUENCY_DAILY : number;
		export var RECURRENCEFREQUENCY_MONTHLY : number;
		export var RECURRENCEFREQUENCY_WEEKLY : number;
		export var RECURRENCEFREQUENCY_YEARLY : number;
		export var SPAN_FUTUREEVENTS : number;
		export var SPAN_THISEVENT : number;
		export var STATE_DISMISSED : number;
		export var STATE_FIRED : number;
		export var STATE_SCHEDULED : number;
		export var STATUS_CANCELED : number;
		export var STATUS_CONFIRMED : number;
		export var STATUS_NONE : number;
		export var STATUS_TENTATIVE : number;
		export var VISIBILITY_CONFIDENTIAL : number;
		export var VISIBILITY_DEFAULT : number;
		export var VISIBILITY_PRIVATE : number;
		export var VISIBILITY_PUBLIC : number;
		export var allAlerts : Array<Ti.Calendar.Alert>;
		export var allCalendars : Array<Ti.Calendar.Calendar>;
		export var allEditableCalendars : Array<Ti.Calendar.Calendar>;
		export var apiName : string;
		export var bubbleParent : boolean;
		export var defaultCalendar : Ti.Calendar.Calendar;
		export var eventsAuthorization : number;
		export var selectableCalendars : Array<Ti.Calendar.Calendar>;
		export function addEventListener (name: string, callback: (...args : any[]) => any) : void;
		export function applyProperties (props: Dictionary<Object>) : void;
		export function fireEvent (name: string, event: Dictionary<Object>) : void;
		export function getAllAlerts () : Array<Ti.Calendar.Alert>;
		export function getAllCalendars () : Array<Ti.Calendar.Calendar>;
		export function getAllEditableCalendars () : Array<Ti.Calendar.Calendar>;
		export function getApiName () : string;
		export function getBubbleParent () : boolean;
		export function getCalendarById (id: string) : Ti.Calendar.Calendar;
		export function getDefaultCalendar () : Ti.Calendar.Calendar;
		export function getEventsAuthorization () : number;
		export function getSelectableCalendars () : Array<Ti.Calendar.Calendar>;
		export function removeEventListener (name: string, callback: (...args : any[]) => any) : void;
		export function requestEventsAuthorization (callback: (...args : any[]) => any) : void;
		export function setBubbleParent (bubbleParent: boolean) : void;
		export interface Calendar extends Ti.Proxy {
			hidden : boolean;
			id : string;
			name : string;
			selected : boolean;
			createEvent (properties: Dictionary<Ti.Calendar.Event>) : Ti.Calendar.Event;
			getEventById (id: number) : Ti.Calendar.Event;
			getEventsBetweenDates (date1: Date, date2: Date) : Array<Ti.Calendar.Event>;
			getEventsInDate (year: number, month: number, day: number) : Array<Ti.Calendar.Event>;
			getEventsInMonth (year: number, month: number) : Array<Ti.Calendar.Event>;
			getEventsInYear (year: number) : Array<Ti.Calendar.Event>;
			getHidden () : boolean;
			getId () : string;
			getName () : string;
			getSelected () : boolean;
		}
		export interface Reminder extends Ti.Proxy {
			id : string;
			method : number;
			minutes : number;
			getId () : string;
			getMethod () : number;
			getMinutes () : number;
		}
		export interface Event extends Ti.Proxy {
			alerts : Array<Ti.Calendar.Alert>;
			allDay : boolean;
			availability : number;
			begin : Date;
			description : string;
			end : Date;
			extendedProperties : Dictionary<Object>;
			hasAlarm : boolean;
			id : string;
			isDetached : boolean;
			location : string;
			notes : string;
			recurenceRule : Ti.Calendar.RecurrenceRule;
			recurenceRules : Array<Ti.Calendar.RecurrenceRule>;
			reminders : Array<Ti.Calendar.Reminder>;
			status : number;
			title : string;
			visibility : number;
			addRecurrenceRule (rule: Ti.Calendar.RecurrenceRule) : void;
			createAlert (data: Dictionary<Ti.Calendar.Alert>) : Ti.Calendar.Alert;
			createRecurenceRule (data: Dictionary<Ti.Calendar.RecurrenceRule>) : Ti.Calendar.RecurrenceRule;
			createReminder (data: Dictionary<Ti.Calendar.Reminder>) : Ti.Calendar.Reminder;
			getAlerts () : Array<Ti.Calendar.Alert>;
			getAllDay () : boolean;
			getAvailability () : number;
			getBegin () : Date;
			getDescription () : string;
			getEnd () : Date;
			getExtendedProperties () : Dictionary<Object>;
			getExtendedProperty (name: string) : string;
			getHasAlarm () : boolean;
			getId () : string;
			getIsDetached () : boolean;
			getLocation () : string;
			getNotes () : string;
			getRecurenceRule () : Ti.Calendar.RecurrenceRule;
			getRecurenceRules () : Array<Ti.Calendar.RecurrenceRule>;
			getReminders () : Array<Ti.Calendar.Reminder>;
			getStatus () : number;
			getTitle () : string;
			getVisibility () : number;
			refresh () : boolean;
			remove (span: number) : boolean;
			removeRecurenceRule (rule: Ti.Calendar.RecurrenceRule) : void;
			save (span: number) : boolean;
			setAlerts (alerts: Array<Ti.Calendar.Alert>) : void;
			setAllDay (allDay: boolean) : void;
			setBegin (begin: Date) : void;
			setEnd (end: Date) : void;
			setExtendedProperty (name: string, value: string) : void;
			setLocation (location: string) : void;
			setNotes (notes: string) : void;
			setRecurenceRule (recurenceRule: Ti.Calendar.RecurrenceRule) : void;
			setRecurenceRules (recurenceRules: Array<Ti.Calendar.RecurrenceRule>) : void;
			setTitle (title: string) : void;
		}
		export interface RecurrenceRule extends Ti.Proxy {
			calendarID : string;
			daysOfTheMonth : Array<Number>;
			daysOfTheWeek : daysOfTheWeekDictionary;
			daysOfTheYear : Array<Number>;
			end : recurrenceEndDictionary;
			frequency : number;
			interval : number;
			monthsOfTheYear : Array<Number>;
			setPositions : Array<Number>;
			weeksOfTheYear : Array<Number>;
			getCalendarID () : string;
			getDaysOfTheMonth () : Array<Number>;
			getDaysOfTheWeek () : daysOfTheWeekDictionary;
			getDaysOfTheYear () : Array<Number>;
			getEnd () : recurrenceEndDictionary;
			getFrequency () : number;
			getInterval () : number;
			getMonthsOfTheYear () : Array<Number>;
			getSetPositions () : Array<Number>;
			getWeeksOfTheYear () : Array<Number>;
		}
		export interface Alert extends Ti.Proxy {
			absoluteDate : Date;
			alarmTime : Date;
			begin : Date;
			end : Date;
			eventId : number;
			id : string;
			minutes : number;
			relativeOffset : number;
			state : number;
			getAbsoluteDate () : Date;
			getAlarmTime () : Date;
			getBegin () : Date;
			getEnd () : Date;
			getEventId () : number;
			getId () : string;
			getMinutes () : number;
			getRelativeOffset () : number;
			getState () : number;
			setAbsoluteDate (absoluteDate: Date) : void;
			setRelativeOffset (relativeOffset: number) : void;
		}
	}
	export module Filesystem {
		export var MODE_APPEND : number;
		export var MODE_READ : number;
		export var MODE_WRITE : number;
		export var apiName : string;
		export var applicationCacheDirectory : string;
		export var applicationDataDirectory : string;
		export var applicationDirectory : string;
		export var applicationSupportDirectory : string;
		export var bubbleParent : boolean;
		export var externalStorageDirectory : string;
		export var lineEnding : string;
		export var resRawDirectory : string;
		export var resourcesDirectory : string;
		export var separator : string;
		export var tempDirectory : string;
		export function addEventListener (name: string, callback: (...args : any[]) => any) : void;
		export function applyProperties (props: Dictionary<Object>) : void;
		export function createTempDirectory () : Ti.Filesystem.File;
		export function createTempFile () : Ti.Filesystem.File;
		export function fireEvent (name: string, event: Dictionary<Object>) : void;
		export function getApiName () : string;
		export function getApplicationCacheDirectory () : string;
		export function getApplicationDataDirectory () : string;
		export function getApplicationDirectory () : string;
		export function getApplicationSupportDirectory () : string;
		export function getBubbleParent () : boolean;
		export function getExternalStorageDirectory () : string;
		export function getFile (path: string, ...extraPaths: string[]) : Ti.Filesystem.File;
		export function getLineEnding () : string;
		export function getResRawDirectory () : string;
		export function getResourcesDirectory () : string;
		export function getSeparator () : string;
		export function getTempDirectory () : string;
		export function isExternalStoragePresent () : boolean;
		export function openStream (mode: number, path: string, ...extraPaths: string[]) : Ti.Filesystem.FileStream;
		export function removeEventListener (name: string, callback: (...args : any[]) => any) : void;
		export function setBubbleParent (bubbleParent: boolean) : void;
		export interface File extends Ti.Proxy {
			executable : boolean;
			hidden : boolean;
			name : string;
			nativePath : string;
			parent : Ti.Filesystem.File;
			readonly : boolean;
			remoteBackup : boolean;
			size : number;
			symbolicLink : boolean;
			writable : boolean;
			writeable : boolean;
			append (data: string) : boolean;
			append (data: Ti.Blob) : boolean;
			append (data: Ti.Filesystem.File) : boolean;
			copy (destinationPath: string) : boolean;
			createDirectory () : boolean;
			createFile () : boolean;
			createTimestamp () : number;
			deleteDirectory (recursive?: boolean) : boolean;
			deleteFile () : boolean;
			exists () : boolean;
			extension () : string;
			getDirectoryListing () : Array<String>;
			getExecutable () : boolean;
			getHidden () : boolean;
			getName () : string;
			getNativePath () : string;
			getParent () : any;
			getReadonly () : boolean;
			getRemoteBackup () : boolean;
			getSize () : number;
			getSymbolicLink () : boolean;
			getWritable () : boolean;
			getWriteable () : boolean;
			isDirectory () : boolean;
			isFile () : boolean;
			modificationTimestamp () : number;
			move (newpath: string) : boolean;
			open (mode: number) : Ti.Filesystem.FileStream;
			read () : Ti.Blob;
			rename (newname: string) : boolean;
			resolve () : string;
			setHidden (hidden: boolean) : void;
			setRemoteBackup (remoteBackup: boolean) : void;
			spaceAvailable () : number;
			write (data: string, append?: boolean) : boolean;
			write (data: Ti.Filesystem.File, append?: boolean) : boolean;
			write (data: Ti.Blob, append?: boolean) : boolean;
		}
		export enum FileStream {

		}
	}
	export module Network {
		export var INADDR_ANY : string;
		export var NETWORK_LAN : number;
		export var NETWORK_MOBILE : number;
		export var NETWORK_NONE : number;
		export var NETWORK_UNKNOWN : number;
		export var NETWORK_WIFI : number;
		export var NOTIFICATION_TYPE_ALERT : number;
		export var NOTIFICATION_TYPE_BADGE : number;
		export var NOTIFICATION_TYPE_NEWSSTAND : number;
		export var NOTIFICATION_TYPE_SOUND : number;
		export var PROGRESS_UNKNOWN : number;
		export var READ_MODE : number;
		export var READ_WRITE_MODE : number;
		export var SOCKET_CLOSED : number;
		export var SOCKET_CONNECTED : number;
		export var SOCKET_ERROR : number;
		export var SOCKET_INITIALIZED : number;
		export var SOCKET_LISTENING : number;
		export var TLS_VERSION_1_0 : number;
		export var TLS_VERSION_1_1 : number;
		export var TLS_VERSION_1_2 : number;
		export var WRITE_MODE : number;
		export var allHTTPCookies : Array<Ti.Network.Cookie>;
		export var apiName : string;
		export var bubbleParent : boolean;
		export var httpURLFormatter : (...args : any[]) => any;
		export var networkType : number;
		export var networkTypeName : string;
		export var online : boolean;
		export var remoteDeviceUUID : string;
		export var remoteNotificationTypes : Array<Number>;
		export var remoteNotificationsEnabled : boolean;
		export function addConnectivityListener (callback: (...args : any[]) => any) : void;
		export function addEventListener (name: string, callback: (...args : any[]) => any) : void;
		export function addHTTPCookie (cookie: Ti.Network.Cookie) : void;
		export function addSystemCookie (cookie: Ti.Network.Cookie) : void;
		export function applyProperties (props: Dictionary<Object>) : void;
		export function createBonjourBrowser (serviceType: string, domain: string, parameters?: Dictionary<Ti.Network.BonjourBrowser>) : Ti.Network.BonjourBrowser;
		export function createBonjourService (name: string, type: string, domain: string, parameters?: Dictionary<Ti.Network.BonjourService>) : Ti.Network.BonjourService;
		export function createCookie (parameters?: Dictionary<Ti.Network.Cookie>) : Ti.Network.Cookie;
		export function createHTTPClient (parameters?: Dictionary<Ti.Network.HTTPClient>) : Ti.Network.HTTPClient;
		export function createTCPSocket (hostName: string, port: number, mode: number, parameters: Dictionary<Ti.Network.TCPSocket>) : Ti.Network.TCPSocket;
		export function decodeURIComponent (value: string) : string;
		export function encodeURIComponent (value: string) : string;
		export function fireEvent (name: string, event: Dictionary<Object>) : void;
		export function getAllHTTPCookies () : Array<Ti.Network.Cookie>;
		export function getApiName () : string;
		export function getBubbleParent () : boolean;
		export function getHTTPCookies (domain: string, path: string, name: string) : Array<Ti.Network.Cookie>;
		export function getHTTPCookiesForDomain (domain: string) : Array<Ti.Network.Cookie>;
		export function getHttpURLFormatter () : (...args : any[]) => any;
		export function getNetworkType () : number;
		export function getNetworkTypeName () : string;
		export function getOnline () : boolean;
		export function getRemoteDeviceUUID () : string;
		export function getRemoteNotificationTypes () : Array<Number>;
		export function getRemoteNotificationsEnabled () : boolean;
		export function getSystemCookies (domain: string, path: string, name: string) : Array<Ti.Network.Cookie>;
		export function registerForPushNotifications (config: PushNotificationConfig) : void;
		export function removeAllHTTPCookies () : void;
		export function removeAllSystemCookies () : void;
		export function removeConnectivityListener (callback: (...args : any[]) => any) : void;
		export function removeEventListener (name: string, callback: (...args : any[]) => any) : void;
		export function removeHTTPCookie (domain: string, path: string, name: string) : void;
		export function removeHTTPCookiesForDomain (domain: string) : void;
		export function removeSystemCookie (domain: string, path: string, name: string) : void;
		export function setBubbleParent (bubbleParent: boolean) : void;
		export function setHttpURLFormatter (httpURLFormatter: (...args : any[]) => any) : void;
		export function unregisterForPushNotifications () : void;
		export interface TCPSocket extends Ti.Proxy {
			hostName : string;
			isValid : boolean;
			mode : number;
			port : number;
			stripTerminator : boolean;
			close () : void;
			connect () : void;
			getHostName () : string;
			getIsValid () : boolean;
			getMode () : number;
			getPort () : number;
			getStripTerminator () : boolean;
			listen () : void;
			setHostName (hostName: string) : void;
			setIsValid (isValid: boolean) : void;
			setMode (mode: number) : void;
			setPort (port: number) : void;
			setStripTerminator (stripTerminator: boolean) : void;
			write (data: any, sendTo: number) : void;
			write (data: string, sendTo: number) : void;
		}
		export module Socket {
			export var CLOSED : number;
			export var CONNECTED : number;
			export var ERROR : number;
			export var INITIALIZED : number;
			export var LISTENING : number;
			export var apiName : string;
			export var bubbleParent : boolean;
			export function addEventListener (name: string, callback: (...args : any[]) => any) : void;
			export function applyProperties (props: Dictionary<Object>) : void;
			export function createTCP (params?: Dictionary<Ti.Network.Socket.TCP>) : Ti.Network.Socket.TCP;
			export function createUDP (params?: Dictionary<Ti.Network.Socket.UDP>) : Ti.Network.Socket.UDP;
			export function fireEvent (name: string, event: Dictionary<Object>) : void;
			export function getApiName () : string;
			export function getBubbleParent () : boolean;
			export function removeEventListener (name: string, callback: (...args : any[]) => any) : void;
			export function setBubbleParent (bubbleParent: boolean) : void;
			export interface UDP extends Ti.IOStream {
				data : (...args : any[]) => any;
				error : (...args : any[]) => any;
				port : number;
				started : (...args : any[]) => any;
				getData () : (...args : any[]) => any;
				getError () : (...args : any[]) => any;
				getPort () : number;
				getStarted () : (...args : any[]) => any;
				sendBytes (port: number, host: string, data: Array<Number>) : void;
				sendString (port: number, host: string, data: string) : void;
				setData (data: (...args : any[]) => any) : void;
				setError (error: (...args : any[]) => any) : void;
				setPort (port: number) : void;
				setStarted (started: (...args : any[]) => any) : void;
				start (port: number) : void;
				stop () : void;
			}
			export interface TCP extends Ti.IOStream {
				accepted : (...args : any[]) => any;
				connected : (...args : any[]) => any;
				error : (...args : any[]) => any;
				host : string;
				listenQueueSize : number;
				port : number;
				state : number;
				timeout : number;
				accept (options: AcceptDict) : void;
				connect () : void;
				getAccepted () : (...args : any[]) => any;
				getConnected () : (...args : any[]) => any;
				getError () : (...args : any[]) => any;
				getHost () : string;
				getListenQueueSize () : number;
				getPort () : number;
				getState () : number;
				getTimeout () : number;
				listen () : void;
				setAccepted (accepted: (...args : any[]) => any) : void;
				setConnected (connected: (...args : any[]) => any) : void;
				setError (error: (...args : any[]) => any) : void;
				setHost (host: string) : void;
				setListenQueueSize (listenQueueSize: number) : void;
				setPort (port: number) : void;
				setTimeout (timeout: number) : void;
			}
		}
		export interface BonjourService extends Ti.Proxy {
			domain : string;
			isLocal : boolean;
			name : string;
			socket : any;
			type : string;
			getDomain () : string;
			getIsLocal () : boolean;
			getName () : string;
			getSocket () : any;
			getType () : string;
			publish (socket: any) : void;
			resolve (timeout: number) : void;
			setDomain (domain: string) : void;
			setIsLocal (isLocal: boolean) : void;
			setName (name: string) : void;
			setSocket (socket: any) : void;
			setType (type: string) : void;
			stop () : void;
		}
		export interface HTTPClient extends Ti.Proxy {
			DONE : number;
			HEADERS_RECEIVED : number;
			LOADING : number;
			OPENED : number;
			UNSENT : number;
			allResponseHeaders : string;
			autoEncodeUrl : boolean;
			autoRedirect : boolean;
			cache : boolean;
			connected : boolean;
			connectionType : string;
			domain : string;
			enableKeepAlive : boolean;
			file : string;
			location : string;
			ondatastream : (...args : any[]) => any;
			onerror : (...args : any[]) => any;
			onload : (...args : any[]) => any;
			onreadystatechange : (...args : any[]) => any;
			onsendstream : (...args : any[]) => any;
			password : string;
			readyState : number;
			responseData : Ti.Blob;
			responseText : string;
			responseXML : Ti.XML.Document;
			securityManager : SecurityManagerProtocol;
			status : number;
			statusText : string;
			timeout : number;
			tlsVersion : number;
			username : string;
			validatesSecureCertificate : boolean;
			withCredentials : boolean;
			abort () : void;
			addAuthFactory (scheme: string, factory: any) : void;
			addKeyManager (X509KeyManager: any) : void;
			addTrustManager (X509TrustManager: any) : void;
			clearCookies (host: string) : void;
			getAllResponseHeaders () : string;
			getAutoEncodeUrl () : boolean;
			getAutoRedirect () : boolean;
			getCache () : boolean;
			getConnected () : boolean;
			getConnectionType () : string;
			getDomain () : string;
			getEnableKeepAlive () : boolean;
			getFile () : string;
			getLocation () : string;
			getOndatastream () : (...args : any[]) => any;
			getOnerror () : (...args : any[]) => any;
			getOnload () : (...args : any[]) => any;
			getOnreadystatechange () : (...args : any[]) => any;
			getOnsendstream () : (...args : any[]) => any;
			getPassword () : string;
			getReadyState () : number;
			getResponseData () : Ti.Blob;
			getResponseHeader (name: string) : string;
			getResponseText () : string;
			getResponseXML () : Ti.XML.Document;
			getSecurityManager () : SecurityManagerProtocol;
			getStatus () : number;
			getStatusText () : string;
			getTimeout () : number;
			getTlsVersion () : number;
			getUsername () : string;
			getValidatesSecureCertificate () : boolean;
			getWithCredentials () : boolean;
			open (method: string, url: string, async?: boolean) : void;
			send (data?: any) : void;
			send (data?: string) : void;
			send (data?: Ti.Filesystem.File) : void;
			send (data?: Ti.Blob) : void;
			setAutoEncodeUrl (autoEncodeUrl: boolean) : void;
			setAutoRedirect (autoRedirect: boolean) : void;
			setCache (cache: boolean) : void;
			setDomain (domain: string) : void;
			setEnableKeepAlive (enableKeepAlive: boolean) : void;
			setFile (file: string) : void;
			setOndatastream (ondatastream: (...args : any[]) => any) : void;
			setOnerror (onerror: (...args : any[]) => any) : void;
			setOnload (onload: (...args : any[]) => any) : void;
			setOnreadystatechange (onreadystatechange: (...args : any[]) => any) : void;
			setOnsendstream (onsendstream: (...args : any[]) => any) : void;
			setPassword (password: string) : void;
			setRequestHeader (name: string, value: string) : void;
			setTimeout (timeout: number) : void;
			setTlsVersion (tlsVersion: number) : void;
			setUsername (username: string) : void;
			setValidatesSecureCertificate (validatesSecureCertificate: boolean) : void;
			setWithCredentials (withCredentials: boolean) : void;
		}
		export interface BonjourBrowser extends Ti.Proxy {
			domain : string;
			isSearching : boolean;
			serviceType : string;
			getDomain () : string;
			getIsSearching () : boolean;
			getServiceType () : string;
			search () : void;
			setDomain (domain: string) : void;
			setIsSearching (isSearching: boolean) : void;
			setServiceType (serviceType: string) : void;
			stopSearch () : void;
		}
		export interface Cookie extends Ti.Proxy {
			comment : string;
			domain : string;
			expiryDate : string;
			httponly : boolean;
			name : string;
			originalUrl : string;
			path : string;
			secure : boolean;
			value : string;
			version : number;
			getComment () : string;
			getDomain () : string;
			getExpiryDate () : string;
			getHttponly () : boolean;
			getName () : string;
			getOriginalUrl () : string;
			getPath () : string;
			getSecure () : boolean;
			getValue () : string;
			getVersion () : number;
			isValid () : boolean;
			setComment (comment: string) : void;
			setDomain (domain: string) : void;
			setExpiryDate (expiryDate: string) : void;
			setHttponly (httponly: boolean) : void;
			setOriginalUrl (originalUrl: string) : void;
			setPath (path: string) : void;
			setSecure (secure: boolean) : void;
			setValue (value: string) : void;
			setVersion (version: number) : void;
		}
	}
	export interface Yahoo  {
		yql (yql: string, callback: (...args : any[]) => any) : void;
	}
	export interface Gesture  {
		landscape : boolean;
		orientation : number;
		portrait : boolean;
		getLandscape () : boolean;
		getOrientation () : number;
		getPortrait () : boolean;
		isFaceDown () : boolean;
		isFaceUp () : boolean;
		isLandscape () : boolean;
		isPortrait () : boolean;
	}
	export interface Analytics  {
		lastEvent : string;
		addEvent (type: string, name: string, data?: any) : void;
		featureEvent (name: string, data?: any) : void;
		getLastEvent () : string;
		navEvent (from: string, to: string, name?: string, data?: any) : void;
		settingsEvent (name: string, data?: any) : void;
		timedEvent (name: string, start: Date, stop: Date, duration: number, data?: any) : void;
		userEvent (name: string, data?: any) : void;
	}
	export module Facebook {
		export var BUTTON_STYLE_NORMAL : number;
		export var BUTTON_STYLE_WIDE : number;
		export var accessToken : string;
		export var apiName : string;
		export var appid : string;
		export var bubbleParent : boolean;
		export var expirationDate : Date;
		export var forceDialogAuth : boolean;
		export var loggedIn : boolean;
		export var permissions : Array<String>;
		export var uid : string;
		export function addEventListener (name: string, callback: (...args : any[]) => any) : void;
		export function applyProperties (props: Dictionary<Object>) : void;
		export function authorize () : void;
		export function createLoginButton (parameters?: Dictionary<Ti.Facebook.LoginButton>) : Ti.Facebook.LoginButton;
		export function dialog (action: string, params: any, callback: (...args : any[]) => any) : void;
		export function fireEvent (name: string, event: Dictionary<Object>) : void;
		export function getAccessToken () : string;
		export function getApiName () : string;
		export function getAppid () : string;
		export function getBubbleParent () : boolean;
		export function getExpirationDate () : Date;
		export function getForceDialogAuth () : boolean;
		export function getLoggedIn () : boolean;
		export function getPermissions () : Array<String>;
		export function getUid () : string;
		export function logout () : void;
		export function removeEventListener (name: string, callback: (...args : any[]) => any) : void;
		export function request (method: string, params: any, callback: (...args : any[]) => any) : void;
		export function requestWithGraphPath (path: string, params: Dictionary<Object>, httpMethod: string, callback: (...args : any[]) => any) : void;
		export function setAccessToken (accessToken: string) : void;
		export function setAppid (appid: string) : void;
		export function setBubbleParent (bubbleParent: boolean) : void;
		export function setExpirationDate (expirationDate: Date) : void;
		export function setForceDialogAuth (forceDialogAuth: boolean) : void;
		export function setLoggedIn (loggedIn: boolean) : void;
		export function setPermissions (permissions: Array<String>) : void;
		export function setUid (uid: string) : void;
		export interface LoginButton extends Ti.UI.View {
			style : string;
			getStyle () : string;
			setStyle (style: string) : void;
		}
	}
	export enum Accelerometer {

	}
	export interface Utils  {
		base64decode (obj: string) : Ti.Blob;
		base64decode (obj: Ti.Blob) : Ti.Blob;
		base64encode (obj: string) : Ti.Blob;
		base64encode (obj: Ti.Blob) : Ti.Blob;
		base64encode (obj: Ti.Filesystem.File) : Ti.Blob;
		md5HexDigest (obj: string) : string;
		md5HexDigest (obj: Ti.Blob) : string;
		sha1 (obj: string) : string;
		sha1 (obj: Ti.Blob) : string;
		sha256 (obj: string) : string;
		sha256 (obj: Ti.Blob) : string;
	}
	export interface Event  {
		bubbles : boolean;
		cancelBubble : boolean;
		source : any;
		type : string;
	}
	export interface Stream  {
		MODE_APPEND : number;
		MODE_READ : number;
		MODE_WRITE : number;
		createStream (params: CreateStreamArgs) : Ti.IOStream;
		pump (inputStream: Ti.IOStream, handler: (...args : any[]) => any, maxChunkSize: number, isAsync?: boolean) : void;
		read (sourceStream: Ti.IOStream, buffer: Ti.Buffer, offset?: number, length?: number, resultsCallback?: (...args : any[]) => any) : void;
		readAll (sourceStream: Ti.IOStream, buffer?: Ti.Buffer, resultsCallback?: (...args : any[]) => any) : any;
		write (outputStream: Ti.IOStream, buffer: Ti.Buffer, offset?: number, length?: number, resultsCallback?: (...args : any[]) => any) : void;
		writeStream (inputStream: Ti.IOStream, outputStream: Ti.IOStream, maxChunkSize: number, resultsCallback?: (...args : any[]) => any) : void;
	}
}

declare class Dictionary<Object>  {

}

declare class BarItemType  {
	accessibilityLabel : string;
	enabled : boolean;
	image : any;
	title : string;
	width : number;
}

declare class MatrixCreationDict  {
	anchorPoint : Dictionary<Object>;
	rotate : number;
	scale : number;
}

declare class TableViewIndexEntry  {
	index : number;
	title : string;
}

declare class FacebookRESTResponsev1  {
	error : string;
	method : string;
	result : string;
	success : boolean;
}

declare class titleAttributesParams  {
	color : string;
	font : Font;
	shadow : shadowDict;
}

declare class MapRegionType  {
	latitude : number;
	latitudeDelta : number;
	longitude : number;
	longitudeDelta : number;
}

declare class CropRectType  {
	height : number;
	width : number;
	x : number;
	y : number;
}

declare class LocationResults extends ErrorResponse {
	coords : LocationCoordinates;
	provider : LocationProviderDict;
}

declare class ErrorResponse  {
	code : number;
	error : string;
	success : boolean;
}

declare class CloudPushNotificationsQueryResponse extends CloudResponse {
	subscriptions : Array<Dictionary<Object>>;
}

declare class CloudResponse  {
	code : number;
	error : boolean;
	message : string;
	meta : Dictionary<Object>;
	success : boolean;
}

declare enum CloudPushNotificationsResponse {

}

declare class textFieldSelectedParams  {
	length : number;
	location : number;
}

declare class recurrenceEndDictionary  {
	endDate : Date;
	occurrenceCount : number;
}

declare namespace Global {
	export function L (key: string, hint?: string) : string;
	export function alert (message: string) : void;
	export function clearInterval (timerId: number) : void;
	export function clearTimeout (timerId: number) : void;
	export function decodeURIComponent (encodedURI: string) : string;
	export function encodeURIComponent (string: string) : string;
	export function require (moduleId: string) : any;
	export function setInterval (_function: (...args : any[]) => any, delay: number) : number;
	export function setTimeout (_function: (...args : any[]) => any, delay: number) : number;
	export interface console  {
		debug (message: any) : void;
		error (message: any) : void;
		info (message: any) : void;
		log (message: any) : void;
		warn (message: any) : void;
	}
	export interface String  {
		format (formatString: string, value: string) : string;
		format (formatString: string, value: number) : string;
		formatCurrency (value: number) : string;
		formatDate (date: Date, format?: string) : string;
		formatDecimal (value: number, locale?: string, pattern?: string) : string;
		formatTime (date: Date, format?: string) : string;
	}
	export interface JSON  {
		parse (text: string, reviver: (...args : any[]) => any) : any;
		stringify (value: any, replacer?: (...args : any[]) => any, space?: number) : string;
		stringify (value: any, replacer?: Array<String>, space?: string) : string;
		stringify (value: any, replacer?: Array<String>, space?: number) : string;
		stringify (value: any, replacer?: (...args : any[]) => any, space?: string) : string;
	}
}

declare class CloudGeoFenceResponse extends CloudResponse {
	geo_fences : Array<Dictionary<Object>>;
}

declare class ServiceIntentOptions  {
	startMode : number;
	url : string;
}

declare class AcceptedCallbackArgs  {
	inbound : Ti.Network.Socket.TCP;
	socket : Ti.Network.Socket.TCP;
}

declare class HeadingData  {
	accuracy : number;
	magneticHeading : number;
	timestamp : number;
	trueHeading : number;
	x : number;
	y : number;
	z : number;
}

declare class FacebookGraphResponsev1  {
	error : string;
	path : string;
	result : string;
	success : boolean;
}

declare class textAreaSelectedParams  {
	length : number;
	location : number;
}

declare class ThumbnailResponse extends ErrorResponse {
	image : Ti.Blob;
	time : number;
}

declare class Dimension  {
	height : number;
	width : number;
	x : number;
	y : number;
}

declare class ReadCallbackArgs extends ErrorResponse {
	bytesProcessed : number;
	errorDescription : string;
	errorState : number;
	source : Ti.IOStream;
}

declare class CloudACLsCheckResponse extends CloudResponse {
	permission : Dictionary<Object>;
}

declare class ViewTemplate  {
	bindId : string;
	childTemplates : Array<ViewTemplate>;
	events : Dictionary<Object>;
	properties : Dictionary<Object>;
	type : string;
}

declare class CloudChatsResponse extends CloudResponse {
	chats : Array<Dictionary<Object>>;
}

declare class MediaQueryType  {
	albumArtist : any;
	albumTitle : any;
	artist : any;
	composer : any;
	genre : any;
	grouping : number;
	isCompilation : any;
	mediaType : any;
	title : any;
}

declare class WebAPIError  {
	code : number;
	message : string;
	name : string;
}

declare class DocumentViewerOptions  {
	animated : boolean;
	view : Ti.UI.View;
}

declare class ListViewAnimationProperties  {
	animated : boolean;
	animationStyle : number;
	position : number;
}

declare class CloudPushSchedulesResponse extends CloudResponse {
	push_schedules : Array<Object>;
}

declare class DataCallbackArgs  {
	address : string;
	bytesData : Array<Number>;
	port : string;
	stringData : string;
}

declare class CloudPushNotificationErrorArg  {
	error : string;
}

declare class ScreenshotResult  {
	media : Ti.Blob;
}

declare class YQLResponse extends ErrorResponse {
	data : any;
	message : string;
}

declare class ForwardGeocodeResponse extends ErrorResponse {
	accuracy : number;
	address : string;
	city : string;
	country : string;
	countryCode : string;
	country_code : string;
	displayAddress : string;
	latitude : string;
	longitude : string;
	postalCode : string;
	region1 : string;
	region2 : string;
	street : string;
	street1 : string;
}

declare class CloudEventsResponse extends CloudResponse {
	events : Array<Dictionary<Object>>;
}

declare class ReadyStatePayload  {
	readyState : number;
}

declare class ErrorCallbackArgs  {
	errorCode : number;
	socket : Ti.Network.Socket.TCP;
}

declare class FailureResponse {
	code: Number;
	error: string;
	success: boolean;
}

declare class WriteCallbackArgs extends ErrorResponse {
	bytesProcessed : number;
	errorDescription : string;
	errorState : number;
	source : Ti.IOStream;
}

declare class CloudPushNotificationSuccessArg  {
	deviceToken : string;
}

declare class MapLocationType  {
	animate : boolean;
	latitude : number;
	latitudeDelta : number;
	longitude : number;
	longitudeDelta : number;
	regionFit : boolean;
}

declare class DecodeStringDict  {
	charset : string;
	length : number;
	position : number;
	source : Ti.Buffer;
}

declare class ListViewContentInsetOption  {
	animated : boolean;
	duration : number;
}

declare class RouteDescription  {
	inputs : Array<Object>;
	outputs : Array<Object>;
}

declare class CreateStreamArgs  {
	mode : number;
	source : any;
}

declare enum ContactsAuthorizationResponse {

}

declare class CloudCheckinsResponse extends CloudResponse {
	checkins : Array<Dictionary<Object>>;
}

declare class CreateBufferArgs  {
	byteOrder : number;
	length : number;
	type : string;
	value : any;
}

declare class CloudPushNotificationConfig  {
	error : (...args : any[]) => any;
	success : (...args : any[]) => any;
}

declare class CloudReviewsResponse extends CloudResponse {
	reviews : Array<Dictionary<Object>>;
}

declare class Point  {
	x : number;
	y : number;
}

declare class CloudPhotosResponse extends CloudResponse {
	photos : Array<Dictionary<Object>>;
}

declare class PushNotificationConfig  {
	callback : (...args : any[]) => any;
	error : (...args : any[]) => any;
	success : (...args : any[]) => any;
	types : Array<Number>;
}

declare class MapRouteType  {
	color : string;
	name : string;
	points : Array<MapPointType>;
	width : number;
}

declare class AcceptDict  {
	error : (...args : any[]) => any;
	timeout : number;
}

declare class MediaQueryInfoType  {
	exact : boolean;
	value : any;
}

declare class PumpCallbackArgs extends ErrorResponse {
	buffer : Ti.Buffer;
	bytesProcessed : number;
	errorDescription : string;
	errorState : number;
	source : Ti.IOStream;
	totalBytesProcessed : number;
}

declare class MusicLibraryOptionsType  {
	allowMultipleSelections : boolean;
	animated : boolean;
	autohide : boolean;
	cancel : (...args : any[]) => any;
	error : (...args : any[]) => any;
	mediaTypes : any;
	success : (...args : any[]) => any;
}

declare class shadowDict  {
	blurRadius : number;
	color : string;
	offset : Dictionary<Object>;
}

declare class launchOptions  {
	launchOptionsLocationKey : boolean;
	source : string;
	url : string;
}

declare class WriteStreamCallbackArgs extends ErrorResponse {
	bytesProcessed : number;
	errorDescription : string;
	errorState : number;
	fromStream : Ti.IOStream;
	toStream : Ti.IOStream;
}

declare class CloudChatGroupsResponse extends CloudResponse {
	chat_groups : Array<Dictionary<Object>>;
}

declare class CloudPhotoCollectionsPhotosResponse extends CloudResponse {
	photos : Array<Dictionary<Object>>;
}

declare class DecodeNumberDict  {
	byteOrder : number;
	position : number;
	source : Ti.Buffer;
	type : string;
}

declare class ConnectedCallbackArgs  {
	socket : Ti.Network.Socket.TCP;
}

declare class CloudPhotoCollectionsResponse extends CloudResponse {
	collections : Array<Dictionary<Object>>;
}

declare class CloudObjectsResponse extends CloudResponse {
	classname : Array<Dictionary<Object>>;
}

declare class PopoverParams  {
	animated : boolean;
	rect : Dimension;
	view : Ti.UI.View;
}

declare class MediaScannerResponse  {
	path : string;
	uri : string;
}

declare class CloudPushNotificationsQueryChannelResponse extends CloudResponse {
	push_channels : Array<String>;
}

declare class CloudPostsResponse extends CloudResponse {
	posts : Array<Dictionary<Object>>;
}

declare class CloudSocialIntegrationsResponse extends CloudResponse {
	users : Array<Dictionary<Object>>;
}

declare class APSConnectionDelegate  {

}

declare class CameraOptionsType  {
	allowEditing : boolean;
	animated : boolean;
	arrowDirection : number;
	autohide : boolean;
	autorotate : boolean;
	cancel : (...args : any[]) => any;
	error : (...args : any[]) => any;
	inPopOver : boolean;
	mediaTypes : Array<String>;
	overlay : Ti.UI.View;
	popoverView : Ti.UI.View;
	saveToPhotoGallery : boolean;
	showControls : boolean;
	success : (...args : any[]) => any;
	transform : Ti.UI._2DMatrix;
	videoMaximumDuration : number;
	videoQuality : number;
}

declare class ListViewIndexEntry  {
	index : number;
	title : string;
}

declare class CloudStreamProgress  {
	progress : number;
	url : string;
}

declare class MusicLibraryResponseType  {
	items : Array<Ti.Media.Item>;
	representative : Ti.Media.Item;
	types : number;
}

declare class CloudEventOccurrencesResponse extends CloudResponse {
	event_occurrences : Array<Dictionary<Object>>;
}

declare class CloudUsersResponse extends CloudResponse {
	users : Array<Dictionary<Object>>;
}

declare class TableViewContentInsetOption  {
	animated : boolean;
	duration : number;
}

declare class CloudFriendRequestsResponse extends CloudResponse {
	friend_requests : Array<Dictionary<Object>>;
}

declare class CloudACLsResponse extends CloudResponse {
	acls : Array<Dictionary<Object>>;
}

declare class ListViewMarkerProps  {
	itemIndex : number;
	sectionIndex : number;
}

declare class EventsAuthorizationResponse  {
	code : number;
	error : string;
	success : boolean;
}

declare class PlayerQueue  {
	items : Array<Ti.Media.Item>;
}

declare class CoverFlowImageType  {
	height : number;
	image : any;
	width : number;
}

declare class BroadcastIntentOptions  {
	action : string;
	className : string;
	data : string;
	flags : number;
	packageName : string;
	url : string;
}

declare class CloudUsersSecureResponse extends CloudResponse {
	accessToken : string;
	expiresIn : number;
}

declare class CloudClientsResponse extends CloudResponse {
	ip_address : string;
	location : Dictionary<Object>;
}

declare class PushNotificationErrorArg  {
	type : string;
}

declare class CloudStatusesResponse extends CloudResponse {
	statuses : Array<Dictionary<Object>>;
}

declare class windowToolbarParam  {
	animated : boolean;
	barColor : string;
	tintColor : string;
	translucent : boolean;
}

declare class GeocodedAddress  {
	address : string;
	city : string;
	country : string;
	countryCode : string;
	country_code : string;
	displayAddress : string;
	latitude : string;
	longitude : string;
	postalCode : string;
	region1 : string;
	region2 : string;
	street : string;
	street1 : string;
	zipcode : string;
}

declare class ContactsCallbackArgs extends ErrorResponse {
	data : Array<Ti.Contacts.Person>;
}

declare class zoomScaleOption  {
	animated : boolean;
}

declare class LocationCoordinates  {
	accuracy : number;
	altitude : number;
	altitudeAccuracy : number;
	heading : number;
	latitude : number;
	longitude : number;
	speed : number;
	timestamp : number;
}

declare class ActivityResult  {
	intent : Ti.Android.Intent;
	requestCode : number;
	resultCode : number;
}

declare class CloudUsersSecureDialog  {
	title : string;
}

declare class CloudFriendsResponse extends CloudResponse {
	users : Array<Dictionary<Object>>;
}

declare class PhotoGalleryOptionsType  {
	allowEditing : boolean;
	animated : boolean;
	arrowDirection : number;
	autohide : boolean;
	cancel : (...args : any[]) => any;
	error : (...args : any[]) => any;
	mediaTypes : Array<String>;
	popoverView : Ti.UI.View;
	success : (...args : any[]) => any;
}

declare class NotificationParams  {
	alertAction : string;
	alertBody : string;
	alertLaunchImage : string;
	badge : number;
	category : string;
	date : Date;
	repeat : string;
	sound : string;
	timezone : string;
	userInfo : Dictionary<Object>;
}

declare enum SuccessResponse {

}

declare class daysOfTheWeekDictionary  {
	daysOfWeek : number;
	week : number;
}

declare class Modules  {

}

declare class ReferenceInsets  {
	bottom : number;
	left : number;
	right : number;
	top : number;
}

declare class hideStatusBarParams  {
	animated : boolean;
	animationStyle : number;
}

declare class PreviewImageOptions  {
	error : (...args : any[]) => any;
	image : Ti.Blob;
	success : (...args : any[]) => any;
}

declare class ListDataItem  {
	properties : Dictionary<Ti.UI.ListItem>;
	template : any;
}

declare class ItemTemplate  {
	childTemplates : Array<ViewTemplate>;
	events : Dictionary<Object>;
	properties : Dictionary<Ti.UI.ListItem>;
}

declare class MovieSize  {
	height : number;
	width : number;
}

declare class CameraMediaItemType  {
	cropRect : CropRectType;
	media : Ti.Blob;
	mediaType : string;
}

declare class HeadingResponse extends ErrorResponse {
	heading : HeadingData;
}

declare class ListViewEdgeInsets  {
	bottom : number;
	left : number;
	right : number;
	top : number;
}

declare class BoundaryIdentifier  {
	identifier : string;
	point1 : Point;
	point2 : Point;
}

declare enum CloudEmailsResponse {

}

declare class GradientColorRef  {
	color : string;
	offset : number;
}

declare class Font  {
	fontFamily : string;
	fontSize : any;
	fontStyle : string;
	fontWeight : string;
	textStyle : string;
}

declare class CloudPlacesResponse extends CloudResponse {
	places : Array<Dictionary<Object>>;
}

declare class EncodeNumberDict  {
	byteOrder : number;
	dest : Ti.Buffer;
	position : number;
	source : number;
	type : string;
}

declare class showContactsParams  {
	animated : boolean;
	cancel : (...args : any[]) => any;
	fields : Array<String>;
	selectedPerson : (...args : any[]) => any;
	selectedProperty : (...args : any[]) => any;
}

declare class LocationProviderDict  {
	accuracy : number;
	name : string;
	power : number;
}

declare class FacebookDialogResponsev1  {
	cancelled : boolean;
	error : string;
	result : string;
	success : boolean;
}

declare class CloudFilesResponse extends CloudResponse {
	files : Array<Dictionary<Object>>;
}

declare class hideParams  {
	animated : boolean;
}

declare class SecurityManagerProtocol  {
	connectionDelegateForUrl (url: any) : APSConnectionDelegate;
	getKeyManagers (proxy: any) : Array<Object>;
	getTrustManagers (proxy: any) : Array<Object>;
	willHandleURL (url: any) : boolean;
}

declare class openWindowParams  {
	activityEnterAnimation : number;
	activityExitAnimation : number;
	animated : boolean;
	bottom : any;
	fullscreen : boolean;
	height : any;
	left : any;
	modal : boolean;
	modalStyle : number;
	modalTransitionStyle : number;
	navBarHidden : boolean;
	right : any;
	top : any;
	transition : number;
	width : any;
}

declare class Gradient  {
	backfillEnd : boolean;
	backfillStart : boolean;
	colors : any;
	endPoint : Point;
	endRadius : number;
	startPoint : Point;
	startRadius : number;
	type : string;
}

declare class showStatusBarParams  {
	animated : boolean;
	animationStyle : number;
}

declare class transitionAnimationParam  {
	duration : number;
	tranistionTo : Ti.UI.Animation;
	transitionFrom : Ti.UI.Animation;
}

declare class MapPointType  {
	latitude : number;
	longitude : number;
}

declare class CloudKeyValuesResponse extends CloudResponse {
	keyvalues : Array<Dictionary<Object>>;
}

declare class TableViewEdgeInsets  {
	bottom : number;
	left : number;
	right : number;
	top : number;
}

declare class ReverseGeocodeResponse extends ErrorResponse {
	places : Array<GeocodedAddress>;
}

declare class contentOffsetOption  {
	animated : boolean;
}

declare class Attribute  {
	range : Array<Number>;
	type : number;
	value : number;
}

declare class PushNotificationSuccessArg  {
	deviceToken : string;
	type : string;
}

declare class PushNotificationData  {
	data : Dictionary<Object>;
	inBackground : boolean;
}

declare class closeWindowParams  {
	activityEnterAnimation : number;
	activityExitAnimation : number;
	animated : boolean;
}

declare class CloudLikesResponse extends CloudResponse {
	likes : Array<Dictionary<Object>>;
}

declare class showParams  {
	animated : boolean;
	rect : Dimension;
	view : Ti.UI.View;
}

declare class PreviewImageError  {
	message : string;
}

declare class CloudMessagesResponse extends CloudResponse {
	messages : Array<Dictionary<Object>>;
}

declare class CloudPushNotificationsShowChannelResponse extends CloudResponse {
	devices : Dictionary<Object>;
}

declare class ImageAsCroppedDict  {
	height : number;
	width : number;
	x : number;
	y : number;
}

declare class UserNotificationSettings  {
	categories : Array<Ti.App.iOS.UserNotificationCategory>;
	types : Array<Number>;
}

declare class TableViewAnimationProperties  {
	animated : boolean;
	animationStyle : number;
	position : number;
}

declare enum MediaAuthorizationResponse {

}

declare class EncodeStringDict  {
	charset : string;
	dest : Ti.Buffer;
	destPosition : number;
	source : string;
	sourceLength : number;
	sourcePosition : number;
}
