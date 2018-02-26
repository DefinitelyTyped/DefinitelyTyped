// Type definitions for CKEditor
// Project: http://ckeditor.com/
// Definitions by: Thomas Wittwer <https://github.com/wittwert>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

// WORK-IN-PROGRESS: Any contribution support welcomed.
// See https://github.com/DefinitelyTyped/DefinitelyTyped/issues/1827 for more informations.
interface Window {
  CKEDITOR_BASEPATH: string;
}

declare namespace CKEDITOR {

    // Config options
    var disableAutoInline: boolean;
    var disableObjectResizing: boolean;
    var replaceClass: string;
    var skinName: string;

    // Properties
    var ALT: number;
    var CTRL: number;
    var DIALOG_RESIZE_BOTH: number;
    var DIALOG_RESIZE_HEIGHT: number;
    var DIALOG_RESIZE_NONE: number;
    var DIALOG_RESIZE_WIDTH: number;
	var DIALOG_STATE_IDLE: number;
	var DIALOG_STATE_BUSY: number;
    var ELEMENT_MODE_APPENDTO: number;
    var ELEMENT_MODE_INLINE: number;
    var ELEMENT_MODE_NONE: number;
    var ELEMENT_MODE_REPLACE: number;
    var END: number;
    var ENTER_BR: number;
    var ENTER_P: number;
    var EVENT_PHASE_AT_TARGET: number;
    var EVENT_PHASE_BUBBLING: number;
    var EVENT_PHASE_CAPTURING: number;
    var LINEUTILS_AFTER: number;
    var LINEUTILS_BEFORE: number;
    var LINEUTIS_INSIDE: number;
    var NODE_COMMENT: number;
    var NODE_DOCUMENT: number;
    var NODE_DOCUMENT_FRAGMENT: number;
    var NODE_ELEMENT: number;
    var NODE_TEXT: number;
	var POSITION_BEFORE_START: number;
	var POSITION_BEFORE_END: number;
	var POSITION_AFTER_START: number;
	var POSITION_AFTER_END: number;
    var SELECTION_ELEMENT: number;
    var SELECTION_NONE: number;
    var SELECTION_TEXT: number;
    var SHIFT: number;
    var SHRINK_ELEMENT: number;
    var SHRINK_TEXT: number;
    var START: number;
	var STYLE_BLOCK: string;
	var STYLE_INLINE: string;
	var STYLE_OBJECT: string;
    var TRISTATE_DISABLED: number;
    var TRISTATE_OFF: number;
    var TRISTATE_ON: number;
    var UI_BUTTON: string;
    var UI_MENUBUTTON: string;
    var UI_PANEL: string;
    var UI_PANELBUTTON: string;
    var UI_RICHCOMBO: string;
    var UI_SEPARATOR: string;
    var basePath: string;
    var currentInstance: editor;
    var document: dom.document;
    var env: environmentConfig;
    var instances: { [id: string]: editor | undefined };
    var loadFullCoreTimeout: number;
    var revision: string;
    var rnd: number;
    var status: string;
    var timestamp: string;
    var version: string;
    var config: config;


    // Methods
    function add(editor: editor): void;
    function addCss(css: string): void;
    function addTemplate(name: string, source: string): template;
    function appendTo(element: string, config?: config, data?: string): editor;
    function appendTo(element: HTMLElement, config?: config, data?: string): editor;
    function domReady(): void;
    function dialogCommand(dialogName: string): void;
    function editorConfig(config: config): void;
    function getCss(): string;
    function getTemplate(name: string): template;
    function getUrl(resource: string): string;
    function inline(element: string, instanceConfig?: config): editor;
    function inline(element: HTMLElement, instanceConfig?: config): editor;
    function inlineAll(): void;
    function loadFullCore(): void;
    function replace(element: string | HTMLTextAreaElement, config?: config): editor;
    function replaceAll(className?: string): void;
    function replaceAll(assertionFunction: (textarea: HTMLTextAreaElement, config: config) => boolean): void;

    type listenerRegistration = {
        removeListener: () => void;
    }

    namespace dom {

        interface bookmark {
            startNode: dom.node | string;
            endNode: dom.node | string;
            serializable: boolean;
            collapsed: boolean;
        }

        class comment {

            // Properties
            type: number;

            // Methods
            constructor(comment: string, ownerDocument?: document);
            constructor(comment: Object, ownerDocument?: document);
            getOuterHtml(): string;

        }


        class document extends domObject {

            // Properties
            type: number;

            // Methods
            constructor(domDocument: Object);
            appendStyleSheet(cssFileUrl: string): void;
            appendStyleText(cssStyleText: string): Object;
            createElement(name: string, attribsAndStyles?: { attributes: Object; styles: Object; }): element;
            createText(text: string): element;
            find(selector: string): nodeList;
            findOne(selector: string): element;
            focus(): void;
            getActive(): element;
            getBody(): element;
            getByAddress(address: any[], normalized?: boolean): node;
            getById(elementId: string): element;
            getDocumentElement(): element;
            getElementsByTag(tagName: string): nodeList;
            getHead(): element;
            getSelection(): selection;
            getWindow(): window;
            write(html: string): void;

        }


        class documentFragment {

            // Properties
            type: number;

            // Methods
            constructor(nodeOrDoc: Object);
            insertAfterNode(node: node): void;

        }


        class domObject extends event {

            // Properties
            $: HTMLElement;

            // Methods
            constructor(nativeDomObject: Object);
            clearCustomData(): void;
            equals(object: any): boolean;
            getCustomData(key: string): any;
            getPrivate(): any;
            getUniqueId(): number;
            removeAllListeners(): void;
            removeCustomData(key: string): Object;
            setCustomData(key: string, value: Object): domObject;

        }


        class element extends node {

            // Properties
            type: number;

            // Methods
            constructor(element: string, ownerDocument?: document);
            constructor(element: HTMLElement, ownerDocument?: document);
            addClass(className: string): void;
            append(node: node, toStart?: boolean): node;
            append(node: string, toStart?: boolean): node;
            appendBogus(force: boolean): void;
            appendHtml(html: string): void;
            appendText(text: string): node;
            breakParent(parent: element): void;
            contains(node: node): boolean;
            copyAttributes(dest: element, skipAttributes: Object): void;
            data(name: string): string;
            data(name: string, value: string): void;
            data(name: string, value: boolean): void;
            disableContextMenu(): void;
            find(selector: string): nodeList;
            findOne(selector: string): element;
            focus(defer?: boolean): void;
            focusNext(ignoreChildren?: boolean, indexToUse?: number): void;
            focusPrevious(ignoreChildren?: boolean, indexToUse?: number): void;
            forEach(callback: (node: node) => void, type?: number, skipRoot?: boolean): void;
            getAttribute(name: string): string;
            getBogus(): Object;
            getChild(indices: number): node;
            getChild(indices: number[]): node;
            getChildCount(): number;
            getChildren(): nodeList;
            getClientRect(): any;
            getComputedStyle(propertyName: string): string;
            getDirection(useComputed: boolean): string;
            getDocumentPosition(refDocument: document): position;
            getDtd(): any;
            getEditor(): editor;
            getElementsByTag(tagName: string): nodeList;
            getFirst(evaluator?: Function): node;
            getFrameDocument(): document;
            getHtml(): string;
            getId(): string;
            getLast(evaluator?: Function): node;
            getName(): string;
            getNameAtt(): string;
            getOuterHtml(): string;
            getPositionedAncestor(): element;
            getSize(type: string, isBorderBox: boolean): void;
            getStyle(name: string): string;
            getTabIndex(): number;
            getText(): string;
            getValue(): string;
            getWindow(): window;
            hasAttributes(): boolean;
            hasAttribute(name: string): boolean;
            hasClass(className: string): boolean;
            hide(): void;
            is(...name: string[]): boolean;
            is(name: any): boolean;
            isBlockBoundary(customNodeNames: Object): boolean;
            isEditable(textCursor?: boolean): boolean;
            isEmptyInlineRemoveable(): boolean;
            isIdentical(otherElement: element): boolean;
            isVisible(): boolean;
            mergeSiblings(inlineOnly?: boolean): void;
            moveChildren(target: element, toStart?: boolean): void;
            removeAttribute(name: string): void;
            removeAttributes(attributes?: string[]): void;
            removeClass(className: string): void;
            removeStyle(name: string): void;
            renameNode(newTag: string): void;
            scrollIntoParent(parent: element, alignToTop: boolean, hscroll: boolean): void;
            scrollIntoParent(parent: window, alignToTop: boolean, hscroll: boolean): void;
            scrollIntoView(alignToTop?: boolean): void;
            setAttribute(name: string, value: string): element;
            setAttributes(attributesPairs: Object): element;
            setHtml(html: string): string;
            setOpacity(opacity: number): void;
            setSize(type: string, size: number, isBorderBox: boolean): void;
            setState(state: number, base?: Object, useAria?: Object): void;
            setStyle(name: string, value: string): element;
            setStyles(stylesPair: Object): element;
            setText(text: string): string;
            setValue(value: string): element;
            show(): void;
            unselectable(): void;

            //static method
            static clearAllMarkers(database: Object): Object;
            static clearMarkers(database: Object, element: Object, removeFromDatabase: Object): void;
            static createFromHtml(html: string): element;
            static get(element: string): element;
            static get(element: any): element;
            static setMarker(database: Object, element: Object, name: Object, value: Object): domObject;

        }


        class elementPath {
            constructor(startNode: element, root: element);
			constructor(startNode: element);
            block: element;
            blockLimit: element;
            root: element;
            elements: element[];
            compare(otherPath: elementPath): boolean;
            contains(query: string, excludeRoot?: boolean, fromTop?: boolean): element;
            contains(query: string[], excludeRoot?: boolean, fromTop?: boolean): element;
            contains(query: (element: element) => boolean, excludeRoot?: boolean, fromTop?: boolean): element;
            contains(query: Object, excludeRoot?: boolean, fromTop?: boolean): element;
            contains(query: element, excludeRoot?: boolean, fromTop?: boolean): element;
            isContextFor(tag: string): boolean;
            direction(): string;
        }


        class range {
            constructor(root: element);
            constructor(root: document);
            startContainer: any;
            startOffset: number;
            endContainer: any;
            endOffset: number;
            collapsed: boolean;
            isDocRoot: boolean;
            document: document;
            root: element;
            clone(): range;
            collapse(toStart?: boolean): boolean;
            cloneContents(): documentFragment;
            deleteContents(mergeThen?: boolean): void;
            extractContents(mergeThen?: boolean): documentFragment;
            createBookmark(serializable?: boolean): bookmark;
            createBookmark2(normalized: boolean): Object;
            createIterator(): iterator;
            moveToBookmark(bookmark: Object): void;
            getBoundaryNodes(): { startNode: node; endNode: node; };
            getCommonAncestor(includeSelf: boolean, ignoreTextNode: boolean): element;
            optimize(): void;
            optimizeBookmark(): void;
            trim(ignoreStart?: boolean, ignoreEnd?: boolean): void;
            enlarge(unit: number, excludeBrs?: boolean): void;
            shrink(mode: number, selectContents: boolean): void;
            insertNode(node: node): void;
            moveToPosition(node: node, position: Object): void;
            moveToRange(range: range): void;
            selectNodeContents(node: node): void;
            setStart(startNode: node, startOffset: number): void;
            setEnd(endNode: node, endOffset: number): void;
            setStartAfter(node: node): void;
            setStartBefore(node: node): void;
            setStartAt(node: node, position: number): void;
            setEndAt(node: node, position: number): void;
            fixBlock(isStart: boolean, blockTag: Object): Object;
			select(): selection;
            splitBlock(blockTag: Object): Object;
            splitElement(toSplit: element): element;
            removeEmptyBlocksAtEnd(atEnd: boolean): void;
            startPath(): elementPath;
            endPath(): elementPath;
            checkBoundaryOfElement(element: element, checkType: number): boolean;
            checkStartOfBlock(): boolean;
            checkEndOfBlock(): boolean;
            getPreviousNode(evaluator: Function, guard: Function, boundary: element): element;
            getNextNode(evaluator: Function, guard: Function, boundary: element): element;
            checkReadOnly(): boolean;
            moveToElementEditablePosition(element: element, isMoveToEnd: boolean): boolean;
            movetoClosestEditablePosition(element: element, isMoveToEnd: boolean): boolean;
            moveToElementEditStart(target: Object): boolean;
            moveToElementEditEnd(target: Object): boolean;
            getEnclosedNode(): node;
            getTouchedStartNode(): node;
            getTouchedEndNode(): node;
            getNextEditableNode(): Object;
            getPreviousEditableNode(): Object;
            scrollIntoView(): void;
        }


        interface rangeListIterator {

        }

        class selection {
            document: document;
            isFake: boolean;
            isLocked: boolean;
            rev: number;
            root: element;
            constructor(target: document);
            constructor(target: element);
            constructor(target: selection);
            createBookmarks(serializable: Object): any[];
            createBookmarks2(normalized?: Object): any[];
            fake(element: element): void;
            getCommonAncestor(): element;
            getNative(): Object;
            getRanges(onlyEditables?: boolean): any[];
            getSelectedElement(): element;
            getSelectedText(): string;
            getStartElement(): element;
            getType(): number;
            isHidden(): boolean;
            lock(): void;
            removeAllRanges(): void;
            reset(): void;
            scrollIntoView(): void;
            selectBookmarks(bookmarks: any[]): selection;
            selectElement(element: element): void;
            selectRanges(ranges: any[]): void;
            unlock(restore: Object): void;
        }


        class rangeList {
            constructor(ranges: range[]);
            constructor(range: range);
            createIterator(): rangeListIterator;
            createBokmark(serializable: boolean): Object[];
            createBookmark2(normalized: boolean): Object[];
            moveToBookmark(bookmarks: Object[]): void;
        }


        class iterator {
            constructor(range: range);
            getNextParagraph(blockTag?: string): element;
            activeFilter: filter;
            enforceRealBlocks: boolean;
            enlargeBr: boolean;
            filter: filter;
        }


        class node extends domObject {
            constructor(domNode: Node);
            appendTo(element: element): element;
            clone(includeChildren: boolean, cloneId: boolean): node;
            hasPrevious(): boolean;
            hasNext(): boolean;
            insertAfter(node: node): node;
            insertBefore(node: node): node;
            insertBeforeMe(node: node): node;
            getAddress(normalized: boolean): Object[];
            getDocument(): document;
            getIndex(normalized?: boolean): number;
            getNextSourceNode(startFromSibling: Object, nodeType: Object, guard: Object): void;
            getPreviousSourceNode(startFromSibling: Object, nodeType: Object, guard: Object): void;
            getPrevious(evaluator?: Function): node;
            getNext(evaluator?: Function): node;
            getParent(allowFragmentParent?: boolean): element;
            getParents(closerFirst?: boolean): node[];
            getCommonAncestor(node: Object): void;
            getPosition(otherNode: Object): void;
            getAscendant(reference: string, includeSelf?: boolean): node;
            hasAscendant(name: Object, includeSelf: any): boolean;
            move(preserveChildren?: boolean): node;
            replace(nodeToReplace: node): void;
            trim(): void;
            ltrim(): void;
            rtrim(): void;
            isReadOnly(): boolean;
        }


        class nodeList {
            constructor(nativeList: Object);
            count(): number;
            getItem(index: number): node;
        }


        class event {
            constructor(domEvent: Event);
            getKey(): number;
            getKeystroke(): number;
            preventDefault(stopPropagation: boolean): void;
            stopPropagation(): void;
            getTarget(): node;
            getPhase(): number;
            getPhaseOffset(): position;
            on(eventName: string, listenerFunction: (eventInfo: eventInfo) => void, scopeObj?: Object, listenerData?: Object, priority?: number): Object;
        }


        interface position {
            x: number;
            y: number;
        }


        interface widthAndHeight {
            width: number;
            height: number;
        }


        class text extends node {
            constructor(text: Text, ownerDocument?: document);
            constructor(text: string, ownerDocument?: document);
            type: number;
            getLength(): number;
            getText(): string;
            setText(text: string): void;
            split(offset: number): text;
            substring(indexA: number, indexB: number): void;
        }


        class window extends domObject {
            constructor(domWindow: Object);
            focus(): void;
            getViewPaneSize(): widthAndHeight;
            getScrollPosition(): position;
            getFrame(): element;
        }


        class walker {
            constructor(range: range);
            end(): void;
            next(): node;
            previous(): node;
            checkForward(): boolean;
            checkBackward(): boolean;
            lastForward(): node;
            lastBackward(): node;
            reset(): void;
            //static methods till the end
            blockBoundary(customNodeNames: Object): Function;
            listItemBoundary(): Function;
            bookmark(contentOnly?: boolean, isReject?: boolean): Function;
            whitespaces(isReject?: boolean): Function;
            invisible(isReject?: boolean): Function;
            nodeType(type: number, isReject?: boolean): Function;
            bogus(isReject?: boolean): Function;
            temp(isReject?: boolean): Function;
            ignored(isReject?: boolean): Function;
            editable(isReject?: boolean): Function;
        }

    }


    namespace ajax {

        // Methods
        function load(url: string, callback?: Function): string;
        function loadXml(url: string, callback?: Function): xml;

    }


    interface xml {

    }


    class command extends event {

        // Properties
        contextSensitive: boolean;
        editorFocus: boolean;
        modes: any;
        previousState: number;
        state: number;
        uiItems: any[];

        // Methods
        constructor(editor: editor, commandDefinition: commandDefinition);
        checkAllowed(noCache: boolean): boolean;
        disable(): void;
        enable(): void;
        exec(data?: Object): boolean;
        refresh(editor: editor, path: dom.elementPath): void;
        setState(newState: number): boolean;
        toggleState(): void;

    }


    class focusManager {
        // Properties
        currentActive: dom.domObject;
        hasFocus: boolean;

        // Methods
        constructor(editor: editor);
        focus(currentActive?: dom.element): void;
        lock(): void;
        unlock(): void;
        blur(noDelay?: boolean): void;
        add(element: dom.element, isCapture: boolean): void;
        remove(element: dom.element): void;
    }

    interface keystrokeHandler {

    }

    interface toolbarGroups {
        name?: string;
        groups?: string[];
    }

    namespace config {
        interface styleObject {
            name?: string;
            element: string;
            attributes?: Object;
            styles?: Object;
            overrides?: Object;
        }
    }

    // Currently very incomplete. See here for all options that should be included:
    // http://docs.ckeditor.com/#!/api/CKEDITOR.config-cfg-fileTools_defaultFileName
    interface config {
        allowedContent?: boolean | string | Object | CKEDITOR.style;
        autoEmbed_widget?: string | Function;
        autoGrow_bottomSpace?: number;
        autoGrow_maxHeight?: number;
        autoGrow_minHeight?: number;
        autoGrow_onStartup?: boolean;
        autoUpdateElement?: boolean;

        baseFloatZIndex?: number;
        baseHref?: string;
        basicEntities?: boolean;
        blockedKeystrokes?: number[];
        bodyClass?: string;
        bodyId?: string;
        browserContextMenuOnCtrl?: boolean;

        clipboard_defaultContentType?: string; // html | text
        clipboard_notificationDuration?: number;
        codeSnippet_codeClass?: string;
        codeSnippet_languages?: Object;
        coceSnippet_theme?: string;
        colorButton_backStyle?: config.styleObject;
        colorButton_colors?: string;
        colorButton_colorsPerRow?: number;
        colorButton_enableAutomatic?: boolean;
        colorButton_enableMore?: boolean;
        colorButton_foreStyle?: config.styleObject;
        colorButton_normalizeBackground?: boolean;
        contentsCss?: string | string[];
        contentsLangDirection?: string;
        contentsLanguage?: string;
        coreStyles_bold?: config.styleObject;
        coreStyles_italic?: config.styleObject;
        coreStyles_strike?: config.styleObject;
        coreStyles_subscript?: config.styleObject;
        coreStyles_superscript?: config.styleObject;
        coreStyles_underline?: config.styleObject;
        customConfig?: string;

        dataIndentationChars?: string;
        defaultLanguage?: string;
        devtools_styles?: string;
        devtools_textCallback?: Function;
        dialog_backgroundCoverColor?: string;
        dialog_backgroundCoverOpacity?: number;
        dialog_buttonsOrder?: string;
        dialog_magnetDistance?: number;
        dialog_noConfirmCancel?: boolean;
        dialog_startupFocusTab?: boolean;
        disableNativeSpellChecker?: boolean;
        disableNativeTableHandles?: boolean;
        disableNativeObjectResizing?: boolean;
        disableNativeReadonlySTyling?: boolean;
        disallowedContent?: string | Object; // Documentation calls it CKEDITOR.filter.disallowedContentRules, but it is just a non-governed object or string.
        div_wrapTable?: boolean;
        docType?: string;

        emailProtection?: string;
        embed_provider?: string;
        enableTabKeyTools?: boolean;
        enterMode?: number;
        entities?: boolean;
        entities_additional?: string;
        entities_greek?: boolean;
        entities_latin?: boolean;
        entities_processNumerical?: boolean | string;
        extraAllowedContent?: string | Object;
        extraPlugins?: string;

        fileTools_defaultFileName?: string;
        filebrowserBrowseUrl?: string;
        filebrowserFlashBrowseUrl?: string;
        filebrowserFlashUploadUrl?: string;
        filebrowserImageBrowseLinkUrl?: string;
        filebrowserImageBrowseUrl?: string;
        filebrowserImageUploadUrl?: string;
        filebrowserUploadUrl?: string;
        filebrowserWindowFeatures?: string;
        filebrowserWindowHeight?: number | string;
        filebrowserWindowWidth?: number | string;
        fillEmptyBlocks?: boolean | Function;
        find_highlight?: config.styleObject;
        flashAddEmbedTag?: boolean;
        flashConvertOnEdit?: boolean;
        flashEmbedTagOnly?: boolean;
        floatSpaceDockedOffsetX?: number;
        floatSpaceDockedOffsetY?: number;
        floatSpacePinnedOffsetX?: number;
        floatSpacePinnedOffsetY?: number;
        floatSpacePreferRight?: boolean;
        fontSize_defaultLabel?: string;
        fontSize_sizes?: string;
        fontSize_style?: config.styleObject;
        font_defaultLabel?: string;
        font_names?: string;
        font_style?: config.styleObject;
        forceEnterMode?: boolean;
        forcePasteAsPlainText?: boolean;
        forceSimpleAmpersand?: boolean;
        format_address?: config.styleObject;
        format_div?: config.styleObject;
        format_h1?: config.styleObject;
        format_h2?: config.styleObject;
        format_h3?: config.styleObject;
        format_h4?: config.styleObject;
        format_h5?: config.styleObject;
        format_h6?: config.styleObject;
        format_p?: config.styleObject;
        format_pre?: config.styleObject;
        format_tags?: string;
        fullPage?: boolean;

        grayt_autoStartup?: boolean;

        height?: string | number;
        htmlEncodeOutput?: boolean;

        ignoreEmptyParagraph?: boolean;
        image2_alignClasses?: string[];
        image2_captionedClass?: string;
        image2_disableResizer?: boolean;
        image2_prefillDimensions?: boolean;
        imageUploadUrl?: string;
        image_prefillDimensions?: boolean;
        image_previewText?: string;
        image_removeLinkByEmptyUrl?: boolean;
        indentClasses?: string[];
        indentOffset?: number;
        indentUnit?: string;

        jqueryOverrideVal?: boolean;
        justifyClasses?: string[];

        keystrokes?: any[]; // Number, string pair really... silly structure... they should fix this.

        language?: string;
        language_list?: string[];
        linkJavaScriptLinksAllowed?: boolean;
        linkShowAdvancedTab?: boolean;
        linkShowTargetTab?: boolean;

        magicline_color?: string
        magicline_everywhere?: boolean;
        magicline_holdDistance?: number;
        magicline_keystrokeNext?: number;
        magicline_keystrokePrevious?: number;
        magicline_tabuList?: string[];
        magicline_triggerOffset?: number;
        mathJaxLib?: string;
        menu_groups?: string;
        menu_subMenuDelay?: string;

        newpage_html?: string;
        notification_duration?: number;

        on?: editor.eventObject;

        pasteFilter?: string;
        pasteFromWordCleanupFile?: string;
        pasteFromWordNumberedHeadingToList?: boolean;
        pasteFromWordPromptCleanup?: boolean;
        pasteFromWordRemoveFontStyles?: boolean;
        pasteFromWorkRemoveStyles?: boolean;
        plugins?: string;
        protectedSource?: RegExp[];

        readOnly?: boolean;
        removeButtons?: string;
        removeDialogTabs?: string;
        removeFormatAttributes?: string;
        removeFormatTags?: string;
        removePlugins?: string;
        resize_dir?: string;
        resize_enabled?: boolean;
        resize_maxHeight?: number;
        resize_maxWidth?: number;
        resize_minHeight?: number;
        resize_minWidth?: number;

        scayt_autoStartup?: boolean;
        scayt_contextCommands?: string;
        scayt_contextMenuItemsOrder?: string;
        scayt_customDictionaryIds?: string;
        scayt_customerId?: string;
        scayt_disableOptionsStorage?: string | string[];
        scayt_elementsToIgnore?: string;
        scayt_handleCheckDirty?: string;
        scayt_handleUndoRedo?: string;
        scayt_ignoreAllCapsWords?: boolean;
        scayt_ignoreDomainNames?: boolean;
        scayt_ignoreWordsWithMixedCases?: boolean;
        scayt_ignoreWordsWithNumbers?: boolean;
        scayt_inlineModeImmediateMarkup?: boolean;
        scayt_maxSuggestions?: number;
        scayt_minWordLength?: number;
        scayt_moreSuggestions?: string;
        scayt_multiLanguageMode?: boolean;
        scayt_multiLanguageStyles?: Object;
        scayt_sLang?: string;
        scayt_serviceHost?: string;
        scayt_servicePath?: string;
        scayt_servicePort?: string;
        scayt_serviceProtocol?: string;
        scayt_srcUrl?: string;
        scayt_uiTabs?: string;
        scayt_userDictionaryName?: string;

        sharedSpaces?: CKEDITOR.sharedSpace;
        shiftEnterMode?: number;
        skin?: string;
        smiley_columns?: number;
        smiley_descriptions?: string[];
        smiley_images?: string[];
        smiley_path?: string;
        sourceAreaTabSize?: number;
        specialChars?: any[]; // Seems to be an array of a string, or a two-element string-array
        startupFocus?: boolean;
        startupMode?: string;
        startupOutlineBlocks?: boolean;
        startupShowBorders?: boolean;
        stylesSet?: string | boolean | config.styleObject[];
        stylesheetParser_skipSelectors?: RegExp;
        stylesheetParser_validSelectors?: RegExp;

        tabIndex?: number;
        tabSpaces?: number;
        templates?: string;
        templates_files?: Object;
        templates_replaceContent?: boolean;
        title?: string | boolean;
		toolbar?: string | (string | string[] | { name: string, items?: string[], groups?: string[] })[] | null;
        toolbarCanCollapse?: boolean;
        toolbarGroupCycling?: boolean;
        toolbarGroups?: (toolbarGroups | string)[];
        toolbarLocation?: string;
        toolbarStartupExpanded?: boolean;

        uiColor?: string;
        undoStackSize?: number;
        uploadUrl?: string;
        useComputedState?: boolean;

        width?: string | number;
        wsc_cmd?: string;
        wsc_customDictionaryIds?: string;
        wsc_customLoaderScript?: string;
        wsc_customerId?: string;
        wsc_lang?: string;
        wsc_userDictionaryName?: string;
    }


    interface feature {

    }


    interface sharedSpace {
        top?: string | HTMLElement;
        bottom?: string | HTMLElement;
    }

    module skin {
		var icons: { [name: string]: { path: string } };
		function addIcon(name: string, path: string, offset?: number, bgsize?: string): void;
	}

    class style {
		constructor(something: { element: string, attributes: { [att: string]: string } });
		applyToRange(range: Range, editor: editor): void;
	}

    interface editable extends dom.element {
		hasFocus: boolean;
		attachListener(obj: event | editable, eventName: string, listenerFunction: (ei: eventInfo) => void,
			scopeobj?: {}, listenerData?: any, priority?: number): listenerRegistration;
    }


    class menu {
        constructor();
        add(item: any): void;
        addListener(listenerFn: (startElement: dom.element, selection: dom.selection, path: dom.elementPath) => any): void;
        hide(returnFocus?: boolean): void;
        removeAll(): void;
        show(offsetParent: dom.element, corner?: number, offsetX?: number, offsetY?: number): void;
    }


    namespace plugins {

        class contextMenu extends menu {
            constructor(editor: editor);
            addTarget(element: dom.element, nativeContextMenuOnCtrl?: boolean): void;
            open(offsetParent: dom.element, corner?: number, offsetX?: number, offsetY?: number): void;
        }


        namespace link {
            var emptyAnchorFix: boolean;
            var fakeAnchor: boolean;
            var synAnchorSelector: boolean;
            function getEditorAnchors(editor: editor): dom.element[];
            function getSelectedLink(editor: editor): dom.elementPath;
            function tryRestoreFakeAnchor(editor: editor, element: dom.element): dom.element;
        }


        namespace widget {

            namespace nestedEditable {
                interface definition {
                    allowedContent?: any;
                    pathName?: string;
                    selector?: string;
                }
            }

            class nestedEditable extends CKEDITOR.dom.element {
                editor: CKEDITOR.editor;
                enterMode: number;
                filter: CKEDITOR.filter;
                shiftEnterMode: number;

                constructor(editor: CKEDITOR.editor, element: CKEDITOR.dom.element, config: { filter?: CKEDITOR.filter });
                getData(): string;
                setData(data: string): void;
            }


            interface definition {
                allowedContent?: any;
                button?: string;
                contentForms?: Object;
                contentTransformations?: Object;
                data?: Object | Function;
                defaults?: Object;
                dialog?: string;
                downcast?: string | Function;
                downcasts?: Object;
                draggable?: boolean;
                edit?: Function;
                editables?: Object;
                init?: Function;
                inline?: boolean;
                insert?: Function;
                mask?: boolean;
                name?: string;
                parts?: Object;
                pathName?: string;
                requiredContent?: string | CKEDITOR.style;
                styleToAllowedContentRules?: Function;
                styleableElements?: string;
                template?: string | CKEDITOR.template;
                upcast?: string | Function;
                upcastPriority?: number;
                upcasts?: Object;

                toFeature?(): CKEDITOR.feature;
            }

            class repository {
                add(name: string, widgetDef: CKEDITOR.plugins.widget.definition): void;
                addUpcastCallback(callback: Function): void;
                capture(): void;
                checkSelection(): void;
                checkWidgets(options?: { initOnlyNew?: boolean; focusInited?: boolean }): void;
                define(name: string, meta?: { errorProof?: boolean }): void;
                del(widget: CKEDITOR.plugins.widget): void;
                destroy(widget: CKEDITOR.plugins.widget, offline?: boolean): void;
                destroyAll(offline?: boolean): void;
                finalizeCreation(container: any): void;
				focused: widget;
                fire(eventName: string, data: Object, editor: editor): any; // should be boolean | Object
                getByElement(element: any, checkWrapperOnly: boolean): CKEDITOR.plugins.widget;
                hasListeners(eventName: string): boolean;
                initOn(element: dom.element, widgetDef?: CKEDITOR.plugins.widget.definition, startupData?: Object): CKEDITOR.plugins.widget;
                initOn(element: dom.element, widgetDef?: string, startupData?: Object): CKEDITOR.plugins.widget;
                initOnAll(container?: dom.element): CKEDITOR.plugins.widget[];
                instances: { [id: string]: widget };
                on(eventName: string, listenerFunction: Function, scopeObj?: Object, listenerData?: Object, priority?: number): any;
                once(): void;
                parseElementClasses(classes: string): any;
                removeAllListeners(eventName: string, listenerFunction: Function): void;
                wrapElement(element: any, widgetName?: string): any;
            }
        }

        class widget implements CKEDITOR.plugins.widget.definition {
            allowedContent: any;
            button: string;
            contentForms: any;
            contentTransformations: any;
            data: any;
            dataReady: boolean;
            defaults: any;
            definition: CKEDITOR.plugins.widget.definition;
            dialog: string;
            downcast: string | Function;
            downcasts: any;
            draggable: boolean;
            editables: any;
            editor: CKEDITOR.editor;
            element: CKEDITOR.dom.element;
            focusedEditable: CKEDITOR.plugins.widget.nestedEditable
            id: number;
            init: Function;
            inited: boolean;
            inline: boolean;
            insert: Function;
            mask: boolean;
            name: string;
            parts: any;
            pathName: string;
            ready: boolean;
            repository: CKEDITOR.plugins.widget.repository;
            requiredContent: string | CKEDITOR.style;
            styleToAllowedContentRules: Function;
            styleableElements: string;
            template: CKEDITOR.template;
            upcast: string | Function;
            upcastPriority: number;
            upcasts: any;
            wrapper: CKEDITOR.dom.element;

            constructor(widgetsRepo: CKEDITOR.plugins.widget.repository, id: number, element: CKEDITOR.dom.element, widgetDef: CKEDITOR.plugins.widget.definition, starupData?: Object);

            addClass(className: string): void;
            applyStyle(style: CKEDITOR.style): void;
            capture(): void;
            checkStyleActive(style: CKEDITOR.style): boolean;
            define(name: string, meta: { errorProof?: boolean }): void;
            destroy(offline?: boolean): void;
            destroyEditable(editableName: string, offline?: boolean): void;
            edit(): boolean;
            fire(eventName: string, data?: Object, editor?: CKEDITOR.editor): any;
            fireOnce(eventName: string, data?: Object, editor?: CKEDITOR.editor): any;
            focus(): void;
            getClasses(): any;
            hasClass(className: string, Whether: boolean): void;
            hasListeners(eventName: string): boolean;
            initEditable(editableName: string, definition: CKEDITOR.plugins.widget.nestedEditable.definition): boolean;
            isInited(): boolean;
            isReady(): boolean;
            on(eventName: string, listenerFunction: Function,
                scopeObj?: Object, listenerData?: Object, priority?: number): any;
            once(): void;
            removeAllListeners(): void;
            removeClass(className: string): void;
            removeListener(eventName: string, listenerFunction: Function): void;
            removeStyle(style: CKEDITOR.style): void;
            setData(keyOrData: string | Object, value: Object): CKEDITOR.plugins.widget;
            setFocused(selected: boolean): CKEDITOR.plugins.widget;
            setSelected(selected: boolean): CKEDITOR.plugins.widget;
            toFeature(): CKEDITOR.feature;
            updateDragHandlerPosition(): void;
        }

        interface IPluginDefinition {
            hidpi?: boolean;
            lang?: string | string[];
            requires?: string | string[];
            afterInit?(editor: editor): any;
            beforeInit?(editor: editor): any;
            init?(editor: editor): void;
            onLoad?(): any;
            icons?: string;
        }

        function add(name: string, definition: IPluginDefinition): void;
        function add(name: string): void;
        function addExternal(name: string, path: string, fileName: string): void;
        function get(name: string): any;
        function getFilePath(name: string): string;
        function getPath(name: string): string;
        function load(name: string, callback: Function, scope?: Object): void;
        function setLang(pluginName: string, languageCode: string, languageEntries: any): void;

    }

    interface IMenuItemDefinition {
        label:string,
        command:string,
		icon: string
        group:string,
        order:number
    }

    class editor extends event {
        activeEnterMode: number;
        activeFilter: filter;
        activeShiftEnterMode: number;
        blockless: boolean;
        config: config;
        container: dom.element;
        contextMenu: plugins.contextMenu;
        dataProcessor: dataProcessor;
        document: dom.document;
        element: dom.element;
        elementMode: number;
        enterMode: number;
        filter: filter;
        focusManager: focusManager;
        id: string;
        keystrokeHandler: keystrokeHandler;
        lang: any;
        langCode: string;
        mode: string;
        name: string;
        plugins: any;
        readOnly: boolean;
        shiftEnterMode: number;
        status: string;
        tabIndex: number;
        templates: any;
        title: any;
        toolbar: any;
        ui: ui;
        widgets: plugins.widget.repository;
        window: dom.window;
        constructor(instanceConfig?: Object, element?: dom.element, mode?: number);
        addCommand(commandName: string, commandDefinition: commandDefinition): void;
        addFeature(feature: feature): boolean;
        addMenuGroup(name: string, order?: number): void;
        addMenuItem(name: string, definition?: IMenuItemDefinition): void;
        addMenuItems(definitions: {[id:string]:IMenuItemDefinition}): void;
        addMode(mode: string, exec: () => void): void;
        addRemoveFormatFilter(func: Function): void;
        applyStyle(style: style): void;
        attachStyleStateChange(style: style, callback: Function): void;
        checkDirty(): boolean;
        commands:any;
        createFakeElement(realElement: Object, className: Object, realElementType: Object, isResizable: Object): void;
        createFakeParserElement(realElement: Object, className: Object, realElementType: Object, isResizable: Object): void;
        createRange(): dom.range;
        destroy(noUpdate?: boolean): void;
		editable(): editable | null;
        editable(elementOrEditable: dom.element): void;
        editable(elementOrEditable: editable): void;
        elementPath(startNode?: dom.node): dom.elementPath;
        execCommand(commandName: string, data?: Object): boolean;
        focus(): void;
        forceNextSelectionCheck(): void;
        getClipboardData(options: Object, callback: Function): void;
        getColorFromDialog(callback: Function, scope?: Object): void;
        getCommand(commandName: string): command;
        getData(noEvents?: Object): string;
        getMenuItem(name: string): Object;
        getResizable(forContents: boolean): dom.element;
        getSelection(forceRealSelection?: boolean): dom.selection;
        getSnapshot(): string;
        getStylesSet(callback: Function): void;
        getUiColor(): string;
        insertElement(element: dom.element): void;
        insertHtml(html: string, mode?: string): void;
        insertText(text: string): void;
        loadSnapshot(snapshot: Object): void;
        lockSelection(sel?: dom.selection): boolean;
        openDialog(dialogName: string, callback: Function): dialog;
        popup(url: string, width?: number, height?: number, options?: string): void;
        popup(url: string, width?: string, height?: number, options?: string): void;
        popup(url: string, width?: number, height?: string, options?: string): void;
        popup(url: string, width?: string, height?: string, options?: string): void;
        removeMenuItem(name: string): void;
        removeStyle(style: style): void;
        resetDirty(): void;
        resetUndo(): void;
        resize(width: number, height: number, isContentHeight?: boolean, resizeInner?: boolean): void;
        resize(width: string, height: number, isContentHeight?: boolean, resizeInner?: boolean): void;
        resize(width: number, height: string, isContentHeight?: boolean, resizeInner?: boolean): void;
        resize(width: string, height: string, isContentHeight?: boolean, resizeInner?: boolean): void;
        restoreRealElement(fakeElement: Object): dom.element;
        selectionChange(checkNow?: boolean): void;
        setActiveEnterMode(enterMode: number, shiftEnterMode: number): void;
        setActiveFilter(filter: filter): void;
        setData(data: string, options?: { internal?: boolean; callback?: Function; noSnapshot?: boolean; }): void;
        setKeystroke(keystroke: number, behavior?: string): void;
        setKeystroke(keystroke: any[], behavior?: string): void;
        setKeystroke(keystroke: number, behavior?: boolean): void;
        setKeystroke(keystroke: any[], behavior?: boolean): void;
        setMode(newMode: string, callback: Function): void;
        setReadOnly(isReadOnly?: boolean): void;
        setUiColor(color: string): void;
        unlockSelection(restore?: boolean): void;
        updateElement(): void;
    }

    namespace editor {
        interface eventObject {
            activeEnterModeChange?: (evt: CKEDITOR.eventInfo) => void;
            activeFilterChange?: (evt: CKEDITOR.eventInfo) => void;
            afterCommandExec?: (evt: CKEDITOR.eventInfo) => void;
            afterInsertHtml?: (evt: CKEDITOR.eventInfo) => void;
            afterPaste?: (evt: CKEDITOR.eventInfo) => void;
            afterPasteFromWord?: (evt: CKEDITOR.eventInfo) => void;
            afterSetData?: (evt: CKEDITOR.eventInfo) => void;
            afterUndoImage?: (evt: CKEDITOR.eventInfo) => void;
            ariaEditorHelpLabel?: (evt: CKEDITOR.eventInfo) => void;
            ariaWidget?: (evt: CKEDITOR.eventInfo) => void;
            autogrow?: (evt: CKEDITOR.eventInfo) => void;

            beforeCommandExec?: (evt: CKEDITOR.eventInfo) => void;
            beforeDestroy?: (evt: CKEDITOR.eventInfo) => void;
            beforeGetData?: (evt: CKEDITOR.eventInfo) => void;
            beforeModeUnload?: (evt: CKEDITOR.eventInfo) => void;
            beforeSetMode?: (evt: CKEDITOR.eventInfo) => void;
            beforeUndoImage?: (evt: CKEDITOR.eventInfo) => void;
            blur?: (evt: CKEDITOR.eventInfo) => void;

            change?: (evt: CKEDITOR.eventInfo) => void;
            configLoaded?: (evt: CKEDITOR.eventInfo) => void;
            contentDirChanged?: (evt: CKEDITOR.eventInfo) => void;
            contentDom?: (evt: CKEDITOR.eventInfo) => void;
            contentDomInvalidated?: (evt: CKEDITOR.eventInfo) => void;
            contentDomUnload?: (evt: CKEDITOR.eventInfo) => void;
            customConfigLoaded?: (evt: CKEDITOR.eventInfo) => void;

            dataFiltered?: (evt: CKEDITOR.eventInfo) => void;
            dataReady?: (evt: CKEDITOR.eventInfo) => void;
            destroy?: (evt: CKEDITOR.eventInfo) => void;
            dialogHide?: (evt: CKEDITOR.eventInfo) => void;
            dialogShow?: (evt: CKEDITOR.eventInfo) => void;
            dirChanged?: (evt: CKEDITOR.eventInfo) => void;
            doubleclick?: (evt: CKEDITOR.eventInfo) => void;
            dragend?: (evt: CKEDITOR.eventInfo) => void;
            dragstart?: (evt: CKEDITOR.eventInfo) => void;
            drop?: (evt: CKEDITOR.eventInfo) => void;

            elementsPathUpdate?: (evt: CKEDITOR.eventInfo) => void;

            fileUploadRequest?: (evt: CKEDITOR.eventInfo) => void;
            fileUploadResponse?: (evt: CKEDITOR.eventInfo) => void;
            floatingSpaceLayout?: (evt: CKEDITOR.eventInfo) => void;
            focus?: (evt: CKEDITOR.eventInfo) => void;

            getData?: (evt: CKEDITOR.eventInfo) => void;
            getSnapshot?: (evt: CKEDITOR.eventInfo) => void;

            insertElement?: (evt: CKEDITOR.eventInfo) => void;
            insertHtml?: (evt: CKEDITOR.eventInfo) => void;
            insertText?: (evt: CKEDITOR.eventInfo) => void;
            instanceReady?: (evt: CKEDITOR.eventInfo) => void;

            key?: (evt: CKEDITOR.eventInfo) => void;

            langLoaded?: (evt: CKEDITOR.eventInfo) => void;
            loadSnapshot?: (evt: CKEDITOR.eventInfo) => void;
            loaded?: (evt: CKEDITOR.eventInfo) => void;
            lockSnapshot?: (evt: CKEDITOR.eventInfo) => void;
            maximize?: (evt: CKEDITOR.eventInfo) => void;
            menuShow?: (evt: CKEDITOR.eventInfo) => void;
            mode?: (evt: CKEDITOR.eventInfo) => void;

            notificationHide?: (evt: CKEDITOR.eventInfo) => void;
            notificationShow?: (evt: CKEDITOR.eventInfo) => void;
            notificationUpdate?: (evt: CKEDITOR.eventInfo) => void;

            paste?: (evt: CKEDITOR.eventInfo) => void;
            pasteFromWord?: (evt: CKEDITOR.eventInfo) => void;
            pluginsLoaded?: (evt: CKEDITOR.eventInfo) => void;

            readOnly?: (evt: CKEDITOR.eventInfo) => void;
            removeFormatCleanup?: (evt: CKEDITOR.eventInfo) => void;
            required?: (evt: CKEDITOR.eventInfo) => void;
            resize?: (evt: CKEDITOR.eventInfo) => void;

            save?: (evt: CKEDITOR.eventInfo) => void;
            saveSnapshot?: (evt: CKEDITOR.eventInfo) => void;
            selectionChange?: (evt: CKEDITOR.eventInfo) => void;
            setData?: (evt: CKEDITOR.eventInfo) => void;
            stylesSet?: (evt: CKEDITOR.eventInfo) => void;

            template?: (evt: CKEDITOR.eventInfo) => void;
            toDataFormat?: (evt: CKEDITOR.eventInfo) => void;
            toHtml?: (evt: CKEDITOR.eventInfo) => void;

            unlockSnapshot?: (evt: CKEDITOR.eventInfo) => void;
            updateSnapshot?: (evt: CKEDITOR.eventInfo) => void;

            widgetDefinition?: (evt: CKEDITOR.eventInfo) => void;
        }
    }

    interface eventInfo {
        data: any;
        editor: editor;
        listenerData: any;
        name: string;
        sender: any;
        cancel(): void;
        removeListener(): void;
        stop(): void;
    }

	module filter {
		interface allowedContentRules {

		}
	}

    class filter {
		allow(newRules: CKEDITOR.filter.allowedContentRules, featureName?: string, overrideCustom?: boolean): boolean;

    }

    interface buttonDefinition {
        icon?: string;
        iconOffset?: number;
        label : string;
        command : string;
        toolbar : string;
    }

    interface template {

    }


    interface dataProcessor {
        toDataFormat(html: string, fixForBody: string): void;
        toHtml(data: string, fixForBody?: string): void;
    }

    class htmlDataProcessor {
        dataFilter: htmlParser.filter;
        htmlFilter: htmlParser.filter;
        writer: htmlParser.basicWriter;

        constructor(editor: editor);
        toDataFormat(html: string, options?: Object): string;
        toHtml(data: string, options?: Object): string;
    }


    class event {
        constructor();
        useCapture: boolean;
        capture(): void;
        define(name: string, meta: Object): void;
        fire(eventName: string, data?: Object, editor?: editor): any;
        fireOnce(eventName: string, data?: Object, editor?: editor): any;
        hasListeners(eventName: string): boolean;
        on(eventName: string, listenerFunction: (eventInfo: eventInfo) => void, scopeObj?: Object | null, listenerData?: Object | null, priority?: number): listenerRegistration;
        once(eventName: string, listenerFunction: (eventInfo: eventInfo) => void, scopeObj?: Object | null, listenerData?: Object | null, priority?: number): listenerRegistration;
        removeAllListeners(): void;
        removeListener(eventName: string, listenerFunction: (eventInfo: eventInfo) => void): void;
        static implementOn(targetObject: Object): void;
    }


    interface commandDefinition {
        async?: boolean;
        canUndo?: boolean;
        context?: boolean;
        contextSensitive?: boolean;
        editorFocus?: boolean;
        modes?: Object;
        startDisabled?: boolean;
        exec(editor: editor, data?: Object): boolean;
        readOnly?: boolean;
        refresh?(editor: editor, path: dom.elementPath): void;
    }


    class dtd {

    }


    class ui extends event {
        constructor(editor: editor);
        add(name: string, type: Object, definition: Object): void;
        addButton(name: string, definition: buttonDefinition): void;
        addHandler(type: Object, handler: Object): void;
    }

    class environmentConfig  {
        air : boolean;
        chrome : boolean;
        cssClass : string;
        edge : boolean;
        gecko : boolean;
        hc : boolean;
        hidpi : boolean;
        iOS : boolean;
        ie : boolean;
        isCompatible : boolean;
        mac : boolean;
        needsBrFiller : boolean;
        needsNbspFiller : boolean;
        quirks : boolean;
        safari : boolean;
        version : number;
        webkit : boolean;
        secure( ) : boolean;
    }

    namespace ui {
        namespace dialog {
            class uiElement {
                eventProcessors: any;

                constructor(dialog: CKEDITOR.dialog, elementDefinition: CKEDITOR.dialog.definition.uiElement, htmlList: any[], nodeNameArg?: Function | string, stylesArg?: Function | Object, attributesArg?: Function | Object, contentsArg?: Function | string); // Not sure that the htmlList array type is right.

                accessKeyDown(dialog: CKEDITOR.dialog, key: string): void;
                accessKeyUp(dialog: CKEDITOR.dialog, key: string): void;
                disable(): void;
                enable(): void;
                focus(): CKEDITOR.ui.dialog.uiElement;
                getDialog(): CKEDITOR.dialog;
                getElement(): CKEDITOR.dom.element;
                getInputElement(): CKEDITOR.dom.element;
                getValue(): any;
                isChanged(): boolean;
                isEnabled(): boolean;
                isFocusable(): boolean;
                isVisible(): boolean;
                registerEvents(definition: CKEDITOR.dialog.definition.uiElement): CKEDITOR.ui.dialog.uiElement;
                selectParentTab(): CKEDITOR.ui.dialog.uiElement;
                setValue(value: Object, noChangeEvent: boolean): CKEDITOR.ui.dialog.uiElement;

                // Change event?
            }


            class button extends uiElement {
                constructor(dialog: CKEDITOR.dialog, elementDefinition: CKEDITOR.dialog.definition.uiElement, htmlList: any[]);

                accessKeyDown(): void;
                accessKeyUp(): void;
                click(): any;
            }


            class checkbox extends uiElement {
                constructor(dialog: CKEDITOR.dialog, elementDefinition: CKEDITOR.dialog.definition.uiElement, htmlList: any[]);

                accessKeyUp(): void;
                getInputElement(): CKEDITOR.dom.element;
                getValue(): boolean;
                setValue(checked: boolean, noChangeEvent: boolean): any; // returns void according to doc, but cannot override base class like that
            }


            class fieldset extends uiElement {
                constructor(dialog: CKEDITOR.dialog, childObjList: any[], childHtmlList: any[], htmlList: any[], elementDefinition: CKEDITOR.dialog.definition.uiElement);
            }


            class file extends CKEDITOR.ui.dialog.labeledElement {
                constructor(dialog: CKEDITOR.dialog, elementDefinition: CKEDITOR.dialog.definition.uiElement, htmlList: any[]);

                getAction(): string;
                getInputElement(): CKEDITOR.dom.element;
                registerEvents(definition: Object): CKEDITOR.ui.dialog.file;
                reset(): void;
                setInitValue(): void;
                submit(): CKEDITOR.ui.dialog.file;
            }


            class fileButton extends CKEDITOR.ui.dialog.button {
                constructor(dialog: CKEDITOR.dialog, elementDefinition: CKEDITOR.dialog.definition.uiElement, htmlList: any[]);

                // formLoaded event ??
            }


            class hbox extends uiElement {
                constructor(dialog: CKEDITOR.dialog, childObjList: any[], childHtmlList: any[], htmlList: any[], elementDefinition: CKEDITOR.dialog.definition.uiElement);

                getChild(indices: number): CKEDITOR.ui.dialog.uiElement;
                getChild(indices: number[]): CKEDITOR.ui.dialog.uiElement[];
            }


            class html extends uiElement {
                constructor(dialog: CKEDITOR.dialog, elementDefinition: CKEDITOR.dialog.definition.uiElement, htmlList: any[]);

            }


            class iframeElement extends uiElement {

            }


            class labeledElement extends uiElement {
                constructor(dialog: CKEDITOR.dialog, elementDefinition: CKEDITOR.dialog.definition.uiElement, htmlList: any[], contentHtml: Function);

                getLabel(): string;
                setlabel(label: string): CKEDITOR.ui.dialog.labeledElement;
            }


            class radio extends CKEDITOR.ui.dialog.labeledElement {
                constructor(dialog: CKEDITOR.dialog, elementDefinition: CKEDITOR.dialog.definition.uiElement, htmlList: any[]);

                accessKeyUp(): void;
                getValue(): string;
                setValue(value: string, noChangeEvent: boolean): any; // returns void according to doc, but cannot override base class like that
            }


            class select extends uiElement {
                constructor(dialog: CKEDITOR.dialog, elementDefinition: CKEDITOR.dialog.definition.uiElement, htmlList: any[]);

                add(label: string, value?: string, indexedDB?: number): CKEDITOR.ui.dialog.select;
                clear(): CKEDITOR.ui.dialog.select;
                getInputElement(): CKEDITOR.dom.element;
                remove(index: number): CKEDITOR.ui.dialog.select;
            }


            class textarea extends CKEDITOR.ui.dialog.labeledElement {
                constructor(dialog: CKEDITOR.dialog, elementDefinition: CKEDITOR.dialog.definition.uiElement, htmlList: any[]);
            }


            class textInput extends CKEDITOR.ui.dialog.labeledElement {
                constructor(dialog: CKEDITOR.dialog, elementDefinition: CKEDITOR.dialog.definition.uiElement, htmlList: any[]);

                accessKeyUp(): void;
                focus(): any; // returns void according to doc, but cannot override base class like that
                getDirectionMarker(): string;
                getInputElement(): CKEDITOR.dom.element;
                getValue(): string;
                select(): void;
                setDirectionMarker(dir: string): void;
                setValue(value: string, noChangeEvent: boolean): CKEDITOR.ui.dialog.textInput;
            }
        }
    }

    class dialog {
        state: number;

        constructor(editor: Object, dialogName: string);

        addFocusable(element: CKEDITOR.dom.element, index?: number): void;
        addPage(contents: Object): void;
        click(id: string): Object;
        commitContent(): void;
        diableButton(id: string): void;
        enableButton(id: string): void;
        foreach(fn: Function): CKEDITOR.dialog;
        getButton(id: string): CKEDITOR.ui.dialog.button;
        getContentElement(pageId: string, elementId: string): CKEDITOR.ui.dialog.uiElement;
        getElement(): CKEDITOR.dom.element;
        getName(): string;
        getPageCount(): number;
        getParentEditor(): CKEDITOR.editor;
        getPosition(): Object;
        getSelectedElement(): CKEDITOR.dom.element;
        getSize(): Object;
        getValueOf(pageId: string, elementId: string): Object;
        hide(): void;
        hidePage(id: string): void;
        layout(): void;
        move(x: number, y: number, save: boolean): void;
        reset(): CKEDITOR.dialog;
        resize(width: number, height: number): void;
        selectPage(id: string): void;
        setState(state: number): void;
        setValueOf(pageId: string, elementId: string, value: Object): void;
        setupContent(): void;
        show(): void;
        showPage(id: string): void;
        updateStyle(): void;

        // NOTE: Static methods are added to dialog module
    }


    namespace dialog {

        namespace definition {

            interface button extends uiElement {
                disabled?: boolean;
                label?: string;
            }


            interface checkbox extends uiElement {
                default?: string;
                label?: string;
                validate?: Function;
            }


            interface content {
                accessKey?: string;
                elements?: CKEDITOR.dialog.definition.uiElement[];
                id?: string;
                label?: string;
                title?: string;
            }


            interface file extends labeledElement {
                action?: string;
                size?: string;
                validate?: Function;
            }


            interface fileButton extends uiElement {
                filebrowser?: string;
                for?: string;
                label?: string;
                styles?: string;
            }


            interface hbox extends uiElement {
                children?: CKEDITOR.ui.dialog.uiElement[];
                height?: number;
                padding?: number;
                validate?: Function;
                widths?: number[];
            }


            interface html extends uiElement {
                html?: string;
            }


            interface labeledElement extends uiElement {
                controlStyle?: string;
                inputStyle?: string;
                label?: string;
                labelLayout?: string;
                labelStyle?: string;
                widths?: number[];
            }


            interface radio extends labeledElement {
                default?: string;
                items?: string[] | (string[])[];
                validate?: Function;
            }



            interface select extends labeledElement {
                default?: string;
                items?: string[] | (string[])[];
                multiple?: boolean;
                size?: number;
                validate?: Function;
            }



            interface textarea extends labeledElement {
                bidi?: boolean;
                cols?: number;
                default?: string;
                rows?: number;
                validate?: Function;
            }


            interface textInput extends labeledElement {
                bidi?: boolean;
                default?: string;
                maxLength?: number;
                size?: number;
                validate?: Function;
            }


            interface uiElement {
                align?: string;
                className?: string;
                commit?: (widget: CKEDITOR.plugins.widget) => void;
                id?: string;
                onHide?: (elem: CKEDITOR.ui.dialog.uiElement) => void;
                onLoad?: (elem: CKEDITOR.ui.dialog.uiElement) => void;
                onShow?: (elem: CKEDITOR.ui.dialog.uiElement) => void;
                requiredcontent?: string | Object | CKEDITOR.style;
                setup?: (widget: CKEDITOR.plugins.widget) => void;
                style?: string;
                title?: string;
                type?: string;
            }


            interface vbox extends uiElement {
                children?: CKEDITOR.ui.dialog.uiElement[];
                expand?: boolean;
                heights?: number[];
                padding?: number;
                styles?: string;
                width?: number[];
            }
        }

        interface IDialogDefinition {
            buttons?: CKEDITOR.dialog.definition.button[];
            contents?: CKEDITOR.dialog.definition.content[];
            height?: number;
            minHeight?: number;
            minWidth?: number;
            onCancel?: Function;
            onLoad?: Function;
            onOk?: Function;
            onShow?: Function;
            resizable?: number;
            title?: string;
            width?: number;
        }

        function add(name: string, path: string): void;
        function add(name: string, dialogDefinition: (editor: CKEDITOR.editor) => IDialogDefinition): void;
        function addIframe(name: string, title: string, minWidth: number, minHeight: number, onContentLoad?: Function, userDefinition?: Object): void;
        function addUIElement(typeName: string, builder: Function): void;
        function cancelButton(): void;
        function exists(name: string | number): void; // NOTE: documentation says object, but it's an array accessor, so really a string or number will work
        function getCurrent(): CKEDITOR.dialog;
        function isTabEnabled(editor: CKEDITOR.editor, dialogName: string, tabName: string): boolean;
        function okButton(): void;
    }


    namespace htmlParser {

        class basicWriter {
            constructor();
            openTag(tagName: string, attributes: Object): void;
            openTagClose(tagName: string, isSelfClose: boolean): void;
            attribute(attName: string, attValue: string): void;
            closeTag(tagName: string): void;
            text(text: string): void;
            comment(comment: string): void;
            write(data: string): void;
            reset(): void;
            getHtml(reset: boolean): string;
        }


        class node {
            constructor();
            remove(preserveChildren?: boolean): node;
            replaceWith(node: node): void;
            insertAfter(node: node): void;
            insertBefore(node: node): void;
            getAscendant(condition: string): element;
            getAscendant(condition: Object): element;
            getAscendant(condition: Function): element;
            wrapWith(wrapper: element): element;
            getIndex(): number;
        }


        class filter {
            constructor(rules?: filterRulesDefinition);
            id: number;
            elementNameRules: filterRulesGroup;
            attributeNameRules: filterRulesGroup;
            elementsRules: any;
            attributesRules: any;
            textRules: filterRulesGroup;
            commentRules: filterRulesGroup;
            rootRules: filterRulesGroup;
            addRules(rules: filterRulesDefinition, options?: number): void;
            addRules(rules: filterRulesDefinition, options?: { priority?: number; applyToAll?: boolean; }): void;
            applyTo(node: node): void;
        }


        interface filterRulesDefinition {

        }


        class filterRulesGroup {
            rules: Object[];
            add(rule: Function, priority: number, options: Object): void;
            add(rule: Object[], priority: number, options: Object): void;
            addMany(rules: Object[], priority: number, options: Object): void;
            findIndex(priority: number): number;
            exec(currentValue: Object): any;
            execOnName(currentName: string): string;
        }


        class cdata extends node {
            constructor(value: string);
            type: number;
            writeHtml(writer: basicWriter): void;
        }


        class comment extends node {
            constructor(value: string);
            type: number;
            filter(filter: filter): boolean;
            value: string;
            writeHtml(writer: basicWriter, filter: filter): void;
        }


        class element extends node {
            constructor(name: string, attributes: Object);
            name: string;
            attributes: any;
            children: any[];
            type: number;
            add(node: node): number;
			add(node: node, index: number): void;
            clone(): element;
            filter(filter: filter): boolean;
            filterChildren(filter: filter): void;
            writeHtml(writer: basicWriter, filter: filter): void;
            writeChildrenHtml(writer: basicWriter, filter: filter): void;
            replaceWithChildren(): void;
            forEach(callback: (node: node, type?: number) => boolean): void;
            getFirst(condition: string): node;
            getFirst(condition: Object): node;
            getFirst(condition: Function): node;
            getHtml(): string;
            setHtml(html: string): void;
            getOuterHtml(): string;
            split(index: number): element;
            removeClass(className: string): void;
            hasClass(className: string): boolean;
        }


        class fragment {
            constructor();
            children: any[];
            parent: any;
            type: number;
            static fromHtml(fragmentHtml: string): fragment;
            static fromHtml(fragmentHtml: string, parent?: element, fixingBlock?: string): fragment | element;
            static fromHtml(fragmentHtml: string, parent: null, fixingBlock?: string): fragment;
            static fromHtml(fragmentHtml: string, parent?: string, fixingBlock?: string): fragment | element;
            static fromHtml(fragmentHtml: string, parent?: element, fixingBlock?: boolean): fragment | element;
            static fromHtml(fragmentHtml: string, parent?: string, fixingBlock?: boolean): fragment | element;
            add(node: node, index?: number): void;
            filter(filter: filter): void;
            filterChildren(filter: filter, filterRoot?: boolean): void;
            writeHtml(writer: basicWriter, filter?: filter): void;
            writeChildrenHtml(writer: basicWriter, filter?: filter, filterRoot?: boolean): void;
            forEach(callback: (node: node, type?: number) => boolean, type?: number, skipRoot?: boolean): void;
        }


        class cssStyle {
            constructor(element: element);
            constructor(styleText: string);
            populate(obj: element): void;
            populate(obj: dom.element): void;
            populate(obj: Object): void;
        }


        class text extends node {
            constructor(value: string);
            type: number;
            filter(filter: filter): boolean;
            writeHtml(writer: basicWriter, filter?: filter): void;
        }

    }

    class htmlWriter extends htmlParser.basicWriter {
        indentationChars: string;
        lineBreakChars: string;
        selfClosingEnd: string;

        indentation(): void;
        lineBreak(): void;
        setRules(tagName: string, rules: Object): void;
    }


    namespace tools {
        var callFunction: Function;
        function enableHtml5Elements(doc: Object, withAppend?: Boolean): void;
        function parseCssText(styleText: string, normalize?: Boolean, nativeNormalize?: Boolean): { [key: string]: string }
        function writeCssText(style: { [key: string]: string }, sort?: Boolean): string;
    }


    namespace lang {
        var languages: any;
        var rtl: any;

        function load(languageCode: string, defaultLanguage: string, callback: Function): void;
        function detect(defaultLanguage: string, probeLanguage: string): string;
    }
}
