// Type definitions for CKEditor 4.9
// Project: https://ckeditor.com/ckeditor-4/, http://ckeditor.com
// Definitions by: Thomas Wittwer <https://github.com/wittwert>
//                 Stuart Long <https://github.com/stuartlong>
//                 Viktor Pegy <https://github.com/viktorpegy>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

// WORK-IN-PROGRESS: Any contribution support welcomed.
// See https://github.com/DefinitelyTyped/DefinitelyTyped/issues/1827 for more informations.

interface Window {
    CKEDITOR_BASEPATH?: string;
}

declare namespace CKEDITOR {
    // Config options
    var disableAutoInline: boolean;
    var replaceClass: string;
    var skinName: string;

    // Properties
    const ALT: number;
    const CTRL: number;
    const DATA_TRANSFER_CROSS_EDITORS: number;
    const DATA_TRANSFER_EXTERNAL: number;
    const DATA_TRANSFER_INTERNAL: number;
    const DIALOG_RESIZE_BOTH: number;
    const DIALOG_RESIZE_HEIGHT: number;
    const DIALOG_RESIZE_NONE: number;
    const DIALOG_RESIZE_WIDTH: number;
    const DIALOG_STATE_BUSY: number;
    const DIALOG_STATE_IDLE: number;
    const ELEMENT_MODE_APPENDTO: number;
    const ELEMENT_MODE_INLINE: number;
    const ELEMENT_MODE_NONE: number;
    const ELEMENT_MODE_REPLACE: number;
    const END: number;
    const ENLARGE_BLOCK_CONTENTS: number;
    const ENLARGE_ELEMENT: number;
    const ENLARGE_INLINE: number;
    const ENLARGE_LIST_ITEM_CONTENTS: number;
    const ENTER_BR: number;
    const ENTER_DIV: number;
    const ENTER_P: number;
    const EVENT_PHASE_AT_TARGET: number;
    const EVENT_PHASE_BUBBLING: number;
    const EVENT_PHASE_CAPTURING: number;
    const FILTER_SKIP_TREE: number;
    const LINEUTILS_AFTER: number;
    const LINEUTILS_BEFORE: number;
    const LINEUTIS_INSIDE: number;
    const MOUSE_BUTTON_LEFT: number;
    const MOUSE_BUTTON_MIDDLE: number;
    const MOUSE_BUTTON_RIGHT: number;
    const NODE_COMMENT: number;
    const NODE_DOCUMENT: number;
    const NODE_DOCUMENT_FRAGMENT: number;
    const NODE_ELEMENT: number;
    const NODE_TEXT: number;
    const POSITION_AFTER_END: number;
    const POSITION_AFTER_START: number;
    const POSITION_BEFORE_END: number;
    const POSITION_BEFORE_START: number;
    const POSITION_CONTAINS: number;
    const POSITION_DISCONNECTED: number;
    const POSITION_FOLLOWING: number;
    const POSITION_IDENTICAL: number;
    const POSITION_IS_CONTAINED: number;
    const POSITION_PRECEDING: number;
    const SELECTION_ELEMENT: number;
    const SELECTION_NONE: number;
    const SELECTION_TEXT: number;
    const SHIFT: number;
    const SHRINK_ELEMENT: number;
    const SHRINK_TEXT: number;
    const START: number;
    const STYLE_BLOCK: string;
    const STYLE_INLINE: string;
    const STYLE_OBJECT: string;
    const TRISTATE_DISABLED: number;
    const TRISTATE_OFF: number;
    const TRISTATE_ON: number;
    const UI_BUTTON: string;
    const UI_MENUBUTTON: string;
    const UI_PANEL: string;
    const UI_PANELBUTTON: string;
    const UI_RICHCOMBO: string;
    const UI_SEPARATOR: string;
    const VERBOSITY_ERROR: number;
    const VERBOSITY_WARN: number;

    var basePath: string;
    var currentInstance: editor;
    var document: dom.document;
    var instances: { [id: string]: editor };
    var loadFullCoreTimeout: number;
    var revision: string;
    var rnd: number;
    var status: string;
    var timestamp: string;
    var verbosity: number;
    var version: string;
    const config: config;

    // Methods
    function add(editor: editor): void;
    function addCss(css: string): void;
    function addTemplate(name: string, source: string): template;
    function appendTo(element: string | HTMLElement, config?: config, data?: string): editor;
    function domReady(): void;
    function editorConfig(config: config): void;
    function error(errorCode: string, additionalData?: any): void;
    function getCss(): string;
    function getTemplate(name: string): template;
    function getUrl(resource: string): string;
    function inline(element: string | HTMLElement, instanceConfig?: config): editor;
    function inlineAll(): void;
    function loadFullCore(): void;
    function replace(element: string | HTMLTextAreaElement, config?: config): editor;
    function replaceAll(className?: string): void;
    function replaceAll(assertionFunction: (textarea: HTMLTextAreaElement, config: config) => boolean): void;
    function warn(errorCode: string, additionalData?: any): void;

    // Event interface
    function capture(): void;
    function define(name: string, meta: { [key: string]: any }): void;
    function fire(eventName: string, data?: { [key: string]: any }, editor?: editor): any;
    function fireOnce(eventName: string, data?: { [key: string]: any }, editor?: editor): any;
    function hasListeners(eventName: string): boolean;
    function on(eventName: string, listenerFunction: (eventInfo: eventInfo) => void, scopeObj?: { [key: string]: any }, listenerData?: { [key: string]: any }, priority?: number): void;
    function once(eventName: string, listenerFunction: (eventInfo: eventInfo) => void, scopeObj?: { [key: string]: any }, listenerData?: { [key: string]: any }, priority?: number): void;
    function removeAllListeners(): void;
    function removeListener(eventName: string, listenerFunction: (eventInfo: eventInfo) => void): void;

    interface listenerRegistration {
        removeListener: () => void;
    }

    namespace dom {
        interface bookmark {
            startNode: dom.node | string;
            endNode: dom.node | string;
            serializable: boolean;
            collapsed: boolean;
        }

        interface bookmark2 {
            start: number[];
            end: number[];
            startOffset: number;
            endOffset: number;
            collapsed: boolean;
            normalized: boolean;
            is2: boolean;
        }

        class comment extends node {
            readonly type: number;

            constructor(comment: string | Node, ownerDocument?: document);
            getOuterHtml(): string;
        }

        class document extends domObject {
            readonly $: Document;
            readonly type: number;

            constructor(domDocument: { [key: string]: any });
            appendStyleSheet(cssFileUrl: string): void;
            appendStyleText(cssStyleText: string): CSSStyleSheet;
            createElement(name: string, attribsAndStyles?: { attributes?: { [key: string]: string }; styles?: { [key: string]: string }; }): element;
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

        class documentFragment extends node {
            readonly type: number;

            constructor(nodeOrDoc: { [key: string]: any });
            insertAfterNode(node: node): void;
        }

        class domObject extends CKEDITOR.event {
            readonly $: any;

            constructor(nativeDomObject: { [key: string]: any });
            clearCustomData(): void;
            equals(object: any): boolean;
            getCustomData(key: string): any;
            getPrivate(): any;
            getUniqueId(): number;
            removeAllListeners(): void;
            removeCustomData(key: string): any;
            setCustomData(key: string, value: any): domObject;
        }

        class element extends node {
            readonly $: HTMLElement;
            readonly type: number;

            constructor(element: string | HTMLElement, ownerDocument?: document);
            addClass(className: string): void;
            append(node: node | string, toStart?: boolean): node;
            appendBogus(force: boolean): void;
            appendHtml(html: string): void;
            appendText(text: string): node;
            breakParent(parent: element): void;
            contains(node: node): boolean;
            copyAttributes(dest: element, skipAttributes: { [key: string]: string }): void;
            data(name: string, value?: string | false): string;
            disableContextMenu(): void;
            find(selector: string): nodeList;
            findOne(selector: string): element;
            focus(defer?: boolean): void;
            focusNext(ignoreChildren?: boolean, indexToUse?: number): void;
            focusPrevious(ignoreChildren?: boolean, indexToUse?: number): void;
            forEach(callback: (node: node) => void, type?: number, skipRoot?: boolean): void;
            getAttribute(name: string): string;
            getBogus(): node | boolean;
            getChild(indices: number | number[]): node;
            getChildCount(): number;
            getChildren(): nodeList;
            getClientRect(): ClientRect;
            getComputedStyle(propertyName: string): string;
            getDirection(useComputed: boolean): string;
            getDocumentPosition(refDocument: document): position;
            getDtd(): dtdDefinition;
            getEditor(): editor;
            getElementsByTag(tagName: string): nodeList;
            getFirst(evaluator?: (node: node) => boolean): node;
            getFrameDocument(): document;
            getHtml(): string;
            getId(): string;
            getLast(evaluator?: (node: node) => boolean): node;
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
            isBlockBoundary(customNodeNames: { [tagName: string]: 1 }): boolean;
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
            scrollIntoParent(parent: element | window, alignToTop: boolean, hscroll: boolean): void;
            scrollIntoView(alignToTop?: boolean): void;
            setAttribute(name: string, value: string): element;
            setAttributes(attributesPairs: { [key: string]: string }): element;
            setHtml(html: string): string;
            setOpacity(opacity: number): void;
            setSize(type: string, size: number, isBorderBox: boolean): void;
            setState(state: number, base?: string, useAria?: boolean): void;
            setStyle(name: string, value: string): element;
            setStyles(stylesPair: { [key: string]: string }): element;
            setText(text: string): string;
            setValue(value: string): element;
            show(): void;
            unselectable(): void;

            // static method
            static clearAllMarkers(database: any): any;
            static clearMarkers(database: any, element: dom.element, removeFromDatabase: boolean): void;
            static createFromHtml(html: string): element;
            static get(element: string | HTMLElement | element): element;
            static setMarker(database: any, element: dom.element, name: string, value: any): dom.element;
        }

        class elementPath {
            readonly block: element;
            readonly blockLimit: element;
            readonly elements: element[];
            readonly lastElement: element;
            readonly root: element;

            constructor(startNode: element, root?: element);
            compare(otherPath: elementPath): boolean;
            contains(query: string | string[] | ((element: element) => boolean) | { [key: string]: any } | element, excludeRoot?: boolean, fromTop?: boolean): element;
            direction(): 'ltr' | 'rtl';
            isContextFor(tag: string): boolean;
        }

        class event {
            constructor(domEvent: Event);
            getKey(): number;
            getKeystroke(): number;
            preventDefault(stopPropagation?: boolean): void;
            stopPropagation(): void;
            getTarget(): node;
            getPhase(): number;
            getPhaseOffset(): position;
            on(eventName: string, listenerFunction: (eventInfo: eventInfo) => void, scopeObj?: any, listenerData?: any, priority?: number): { removeListener: () => void };
        }

        class iterator {
            readonly activeFilter: filter;
            enforceRealBlocks: boolean;
            enlargeBr: boolean;
            readonly filter: filter;
            forceBrBreak: boolean;
            readonly range: range;
            constructor(range: range);
            getNextParagraph(blockTag?: string): element;
        }

        class node extends domObject {
            type: number;
            constructor(domNode: Node);
            appendTo(element: element): element;
            clone(includeChildren: boolean, cloneId: boolean): node;
            hasPrevious(): boolean;
            hasNext(): boolean;
            insertAfter(node: node): node;
            insertBefore(node: node): node;
            insertBeforeMe(node: node): node;
            getAddress(normalized?: boolean): number[];
            getAscendant(reference: string, includeSelf?: boolean): node;
            getCommonAncestor(node: node): void;
            getDocument(): document;
            getIndex(normalized?: boolean): number;
            getNext(evaluator?: (node: node) => boolean): node;
            getNextSourceNode(startFromSibling?: boolean, nodeType?: number, guard?: node | ((node: node) => boolean)): node;
            getParent(allowFragmentParent?: boolean): element;
            getParents(closerFirst?: boolean): node[];
            getPosition(otherNode: node): void;
            getPrevious(evaluator?: (node: node) => boolean): node;
            getPreviousSourceNode(startFromSibling?: boolean, nodeType?: number, guard?: node | ((node: node) => boolean)): node;
            hasAscendant(name: string, includeSelf: boolean): boolean;
            remove(preserveChildren?: boolean): node;
            replace(nodeToReplace: node): void;
            trim(): void;
            ltrim(): void;
            rtrim(): void;
            isReadOnly(): boolean;
        }

        class nodeList {
            constructor(nativeList: NodeList);
            count(): number;
            getItem(index: number): node;
            toArray(): node[];
        }

        class range {
            readonly collapsed: boolean;
            readonly document: document;
            readonly endContainer: element | text;
            readonly endOffset: number;
            readonly root: element;
            readonly startContainer: element | text;
            readonly startOffset: number;

            constructor(root: element | document);
            checkBoundaryOfElement(element: element, checkType: number): boolean;
            checkEndOfBlock(): boolean;
            checkReadOnly(): boolean;
            checkStartOfBlock(): boolean;
            clone(cloneId?: boolean): range;
            cloneContents(): documentFragment;
            collapse(toStart?: boolean): boolean;
            createBookmark(serializable?: boolean): bookmark;
            createBookmark2(normalized?: boolean): bookmark2;
            createIterator(): iterator;
            deleteContents(mergeThen?: boolean): void;
            endPath(): elementPath;
            enlarge(unit: number, excludeBrs?: boolean): void;
            extractContents(mergeThen?: boolean, cloneId?: boolean): documentFragment;
            fixBlock(isStart: boolean, blockTag: string): element;
            getBoundaryNodes(): { startNode: node; endNode: node; };
            getCommonAncestor(includeSelf?: boolean, ignoreTextNode?: boolean): element;
            getEnclosedNode(): node;
            getNextEditableNode(): element | text;
            getNextNode(evaluator?: (element: dom.element) => boolean, guard?: (element: dom.element) => boolean, boundary?: element): element;
            getPreviousEditableNode(): element | text;
            getPreviousNode(evaluator?: (element: dom.element) => boolean, guard?: (element: dom.element) => boolean, boundary?: element): element;
            getTouchedEndNode(): node;
            getTouchedStartNode(): node;
            insertNode(node: node): void;
            moveToBookmark(bookmark: bookmark | bookmark2): void;
            moveToClosestEditablePosition(element?: element, isMoveForward?: boolean): boolean;
            moveToElementEditEnd(target: element): boolean;
            moveToElementEditStart(target: element): boolean;
            moveToElementEditablePosition(element: element, isMoveToEnd: boolean): boolean;
            moveToPosition(node: node, position: number): void;
            moveToRange(range: range): void;
            optimize(): void;
            optimizeBookmark(): void;
            removeEmptyBlocksAtEnd(atEnd: boolean): void;
            scrollIntoView(): void;
            select(): selection;
            selectNodeContents(node: node): void;
            setEnd(endNode: node, endOffset: number): void;
            setEndAfter(node: node): void;
            setEndAt(node: node, position: number): void;
            setEndBefore(node: node): void;
            setStart(startNode: node, startOffset: number): void;
            setStartAfter(node: node): void;
            setStartAt(node: node, position: number): void;
            setStartBefore(node: node): void;
            shrink(mode: number, selectContents?: boolean, options?: boolean | shrinkOptions): void;
            splitBlock(cloneId?: boolean): void;
            splitElement(toSplit: element, cloneId?: boolean): element;
            startPath(): elementPath;
            trim(ignoreStart?: boolean, ignoreEnd?: boolean): void;

            static mergeRanges(ranges: range[]): range[];
        }

        interface shrinkOptions {
            shrinkOnBlockBoundary?: boolean;
            skipBogus?: boolean;
        }

        class rangeList {
            constructor(ranges?: range | range[]);
            createBokmarks(serializable?: boolean): bookmark[];
            createBookmarks2(normalized?: boolean): bookmark2[];
            createIterator(): rangeListIterator;
            moveToBookmarks(bookmarks: bookmark[]): void;
        }

        interface rangeListIterator {
            getNextRange(mergeConsequent?: boolean): range;
        }

        // see https://docs.com/ckeditor4/latest/api/CKEDITOR_dom_selection.html
        class selection {
            readonly FILLING_CHAR_SEQUENCE: string;
            readonly document: document;
            readonly isFake: boolean;
            readonly isLocked: boolean;
            readonly rev: number;
            readonly root: element;

            constructor(target: document | element | selection);
            createBookmarks(serializable: any): bookmark[];
            createBookmarks2(normalized: any): bookmark2[];
            fake(element: element, ariaLabel?: boolean): void;
            getCommonAncestor(): element;
            getNative(): Selection;
            getRanges(onlyEditables?: boolean): range[];
            getSelectedElement(): element;
            getSelectedText(): string;
            getStartElement(): element;
            getType(): number;
            isCollapsed(): boolean;
            isHidden(): boolean;
            isInTable(allowPartialSelection?: boolean): boolean;
            lock(): void;
            removeAllRanges(): void;
            reset(): void;
            scrollIntoView(): void;
            selectBookmarks(bookmarks: Array<bookmark | bookmark2>): selection;
            selectElement(element: element): void;
            selectRanges(ranges: range[]): void;
            unlock(restore: boolean): void;
        }

        class text extends node {
            readonly $: Text;
            readonly type: number;

            constructor(text: Text | string, ownerDocument?: document);
            getLength(): number;
            getText(): string;
            setText(text: string): void;
            split(offset: number): text;
            substring(indexA: number, indexB?: number): void;
        }

        class walker {
            evaluator: (node: node) => boolean;
            guard: (node: node, movingOut?: boolean) => boolean;

            static validEmptyBlockContainers: { [key: string]: any };

            constructor(range: range);
            checkBackward(): boolean;
            checkForward(): boolean;
            end(): void;
            lastBackward(): node;
            lastForward(): node;
            next(): node;
            previous(): node;
            reset(): void;

            static blockBoundary(customNodeNames: any): (node: node) => boolean;
            static bogus(isReject?: boolean): (node: node) => boolean;
            static bookmark(contentOnly?: boolean, isReject?: boolean): (node: node) => boolean;
            static editable(isReject?: boolean): (node: node) => boolean;
            static empty(isReject?: boolean): (node: node) => boolean;
            static ignored(isReject?: boolean): (node: node) => boolean;
            static invisible(isReject?: boolean): (node: node) => boolean;
            static listItemBoundary(): (node: node) => boolean;
            static nodeType(type: number, isReject?: boolean): (node: node) => boolean;
            static temp(isReject?: boolean): (node: node) => boolean;
            static whitespaces(isReject?: boolean): (node: node) => boolean;
        }

        interface position {
            x: number;
            y: number;
        }

        interface widthAndHeight {
            width: number;
            height: number;
        }

        class window extends domObject {
            constructor(domWindow: Window);
            focus(): void;
            getViewPaneSize(): widthAndHeight;
            getScrollPosition(): position;
            getFrame(): element;
        }
    }

    namespace ajax {
        function load(url: string, callback?: (data: any) => void): string;
        function loadXml(url: string, callback?: (data: any) => void): xml;
        function post(url: string, data: any, contentType?: string, callback?: (data: any) => void): void;
    }

    class command extends event implements commandDefinition {
        fakeKeystroke: number;
        previousState: number;
        state: number;
        uiItems: any[];

        // Methods
        constructor(editor: editor, commandDefinition: commandDefinition);
        checkAllowed(noCache: boolean): boolean;
        disable(): void;
        enable(): void;
        exec(data?: { [key: string]: any }): boolean;
        refresh(editor: editor, path: dom.elementPath): void;
        setState(newState: number): boolean;
        toggleState(): void;
    }

    interface commandDefinition {
        async?: boolean;
        canUndo?: boolean;
        context?: boolean;
        contextSensitive?: boolean;
        editorFocus?: boolean;
        fakeKeystroke?: number;
        modes?: { [key: string]: any };
        startDisabled?: boolean;
        readOnly?: boolean;
        exec(editor: editor, data?: any): boolean;
        refresh?(editor: editor, path: dom.elementPath): void;
    }

    // https://docs.com/ckeditor4/latest/api/CKEDITOR_config.html
    interface config {
        allowedContent?: boolean | filter.allowedContentRules;
        autoEmbed_widget?: string | ((url: string) => string);
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

        clipboard_defaultContentType?: 'html' | 'text';
        clipboard_notificationDuration?: number;
        cloudServices_tokenUrl?: string;
        cloudServices_uploadUrl?: string;
        codeSnippetGeshi_url?: string;
        codeSnippet_codeClass?: string;
        codeSnippet_languages?: { [key: string]: any };
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
        copyFormatting_allowRules?: string;
        copyFormatting_allowedContexts?: boolean | string[];
        copyFormatting_keystrokeCopy?: number;
        copyFormatting_keystrokePaste?: number;
        copyFormatting_outerCursor?: boolean;
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
        devtools_textCallback?: (editor: editor, dialog: dialog, element: dom.element, tabName: string) => string;
        dialog_backgroundCoverColor?: string;
        dialog_backgroundCoverOpacity?: number;
        dialog_buttonsOrder?: string;
        dialog_magnetDistance?: number;
        dialog_noConfirmCancel?: boolean;
        dialog_startupFocusTab?: boolean;
        disableNativeSpellChecker?: boolean;
        disableNativeTableHandles?: boolean;
        disableNativeObjectResizing?: boolean;
        disableNativeReadonlyStyling?: boolean;
        disallowedContent?: filter.disallowedContentRules;
        div_wrapTable?: boolean;
        docType?: string;

        easyimage_class?: string;
        easyimage_defaultStyle?: string;
        easyimage_styles?: { [key: string]: any };
        easyimage_toolbar?: string[] | string;
        emailProtection?: string;
        embed_provider?: string;
        emoji_emojiListUrl?: string;
        emoji_minChars?: number;
        enableContextMenu?: boolean;
        enableTabKeyTools?: boolean;
        enterMode?: number;
        entities?: boolean;
        entities_additional?: string;
        entities_greek?: boolean;
        entities_latin?: boolean;
        entities_processNumerical?: boolean | string;
        extraAllowedContent?: filter.allowedContentRules;
        extraPlugins?: string;

        fileTools_defaultFileName?: string;
        fileTools_requestHeaders?: { [key: string]: any };
        filebrowserBrowseUrl?: string;
        filebrowserFlashBrowseUrl?: string;
        filebrowserFlashUploadUrl?: string;
        filebrowserImageBrowseLinkUrl?: string;
        filebrowserImageBrowseUrl?: string;
        filebrowserImageUploadUrl?: string;
        filebrowserUploadMethod?: string;
        filebrowserUploadUrl?: string;
        filebrowserWindowFeatures?: string;
        filebrowserWindowHeight?: number | string;
        filebrowserWindowWidth?: number | string;
        fillEmptyBlocks?: boolean | ((element: htmlParser.element) => boolean);
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
        image2_altRequired?: boolean;
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

        keystrokes?: Array<[number, string]>;

        language?: string;
        language_list?: string[];
        linkJavaScriptLinksAllowed?: boolean;
        linkShowAdvancedTab?: boolean;
        linkShowTargetTab?: boolean;

        magicline_color?: string;
        magicline_everywhere?: boolean;
        magicline_holdDistance?: number;
        magicline_keystrokeNext?: number;
        magicline_keystrokePrevious?: number;
        magicline_tabuList?: string[];
        magicline_triggerOffset?: number;
        mathJaxClass?: string;
        mathJaxLib?: string;
        menu_groups?: string;
        menu_subMenuDelay?: number;

        newpage_html?: string;
        notification_duration?: number;

        on?: editor.eventObject;

        pasteFilter?: string;
        pasteFromWordCleanupFile?: string;
        pasteFromWordNumberedHeadingToList?: boolean;
        pasteFromWordPromptCleanup?: boolean;
        pasteFromWordRemoveFontStyles?: boolean;
        pasteFromWordRemoveStyles?: boolean;
        pasteFromWord_heuristicsEdgeList?: boolean;
        pasteFromWord_inlineImages?: boolean;
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
        scayt_multiLanguageStyles?: { [key: string]: any };
        scayt_sLang?: string;
        scayt_serviceHost?: string;
        scayt_servicePath?: string;
        scayt_servicePort?: string;
        scayt_serviceProtocol?: string;
        scayt_srcUrl?: string;
        scayt_uiTabs?: string;
        scayt_userDictionaryName?: string;

        sharedSpaces?: sharedSpace;
        shiftEnterMode?: number;
        skin?: string;
        smiley_columns?: number;
        smiley_descriptions?: string[];
        smiley_images?: string[];
        smiley_path?: string;
        sourceAreaTabSize?: number;
        specialChars?: Array<string | [string, string]>;
        startupFocus?: string | boolean;
        startupMode?: string;
        startupOutlineBlocks?: boolean;
        startupShowBorders?: boolean;
        stylesSet?: string | boolean | config.styleObject[];
        stylesheetParser_skipSelectors?: RegExp;
        stylesheetParser_validSelectors?: RegExp;

        tabIndex?: number;
        tabSpaces?: number;
        templates?: string;
        templates_files?: { [key: string]: any };
        templates_replaceContent?: boolean;
        title?: string | boolean;
        toolbar?: string | Array<string | string[] | { name: string, items?: string[], groups?: string[] }> | null;
        toolbarCanCollapse?: boolean;
        toolbarGroupCycling?: boolean;
        toolbarGroups?: Array<toolbarGroups | string>;
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
        wsc_height?: string;
        wsc_lang?: string;
        wsc_left?: string;
        wsc_top?: string;
        wsc_userDictionaryName?: string;
        wsc_width?: string;
    }

    interface dataProcessor {
        toDataFormat(html: string, fixForBody: string): void;
        toHtml(data: string, fixForBody?: string): void;
    }

    class dialog {
        readonly state: number;

        constructor(editor: editor, dialogName: string);

        addFocusable(element: dom.element, index?: number): void;
        addPage(contents: { [key: string]: any }): void;
        click(id: string): any;
        commitContent(): void;
        disableButton(id: string): void;
        enableButton(id: string): void;
        foreach(fn: () => void): dialog;
        getButton(id: string): ui.dialog.button;
        getContentElement(pageId: string, elementId: string): ui.dialog.uiElement;
        getElement(): dom.element;
        getName(): string;
        getPageCount(): number;
        getParentEditor(): editor;
        getPosition(): { [key: string]: any };
        getSelectedElement(): dom.element;
        getSize(): { [key: string]: any };
        getValueOf(pageId: string, elementId: string): any;
        hide(): void;
        hidePage(id: string): void;
        layout(): void;
        move(x: number, y: number, save: boolean): void;
        reset(): dialog;
        resize(width: number, height: number): void;
        selectPage(id: string): void;
        setState(state: number): void;
        setValueOf(pageId: string, elementId: string, value: any): void;
        setupContent(): void;
        show(): void;
        showPage(id: string): void;
        updateStyle(): void;

        static add(name: string, dialogDefinition: string | ((editor: editor) => dialog.IDialogDefinition)): void;
        static addIframe(name: string, title: string, minWidth: number, minHeight: number, onContentLoad?: () => void, userDefinition?: { [key: string]: any }): void;
        static addUIElement(typeName: string, builder: () => void): void;
        static cancelButton(): void;
        static exists(name: string | number): void; // NOTE: documentation says object, but it's an array accessor, so really a string or number will work
        static getCurrent(): dialog;
        static isTabEnabled(editor: editor, dialogName: string, tabName: string): boolean;
        static okButton(): void;
    }

    namespace dialog {
        namespace definition {
            interface button extends uiElement {
                disabled?: boolean;
            }

            interface checkbox extends uiElement {
                default?: string;
                validate?: () => boolean;
            }

            interface content {
                accessKey?: string;
                elements?: dialog.definition.uiElement[];
                id?: string;
                label?: string;
                title?: string;
            }

            interface file extends labeledElement {
                action?: string;
                size?: string;
                validate?: () => boolean;
            }

            interface fileButton extends uiElement {
                filebrowser?: string;
                for?: string;
                validate?: () => boolean;
            }

            interface hbox extends uiElement {
                children?: ui.dialog.uiElement[];
                height?: number;
                padding?: number;
                validate?: () => boolean;
                widths?: number[];
            }

            interface html extends uiElement {
                html?: string;
            }

            interface labeledElement extends uiElement {
                controlStyle?: string;
                inputStyle?: string;
                labelLayout?: string;
                labelStyle?: string;
                widths?: number[];
            }

            interface radio extends labeledElement {
                default?: string;
                items?: string[] | string[][];
                validate?: () => boolean;
            }

            interface select extends labeledElement {
                default?: string;
                items?: string[] | string[][];
                multiple?: boolean;
                size?: number;
                validate?: () => boolean;
            }

            interface textarea extends labeledElement {
                bidi?: boolean;
                cols?: number;
                default?: string;
                rows?: number;
                validate?: () => boolean;
            }

            interface textInput extends labeledElement {
                bidi?: boolean;
                default?: string;
                maxLength?: number;
                size?: number;
                validate?: () => boolean;
            }

            interface uiElement {
                align?: string;
                className?: string;
                commit?: (widget: plugins.widget) => void;
                id?: string;
                label?: string;
                onHide?: (elem: ui.dialog.uiElement) => void;
                onLoad?: (elem: ui.dialog.uiElement) => void;
                onShow?: (elem: ui.dialog.uiElement) => void;
                requiredContent?: string | { [key: string]: any } | style;
                setup?: (widget: plugins.widget) => void;
                style?: string;
                title?: string;
                type?: string;
            }

            interface vbox extends uiElement {
                children?: ui.dialog.uiElement[];
                expand?: boolean;
                heights?: number[];
                padding?: number;
                styles?: string;
                width?: number[];
            }
        }

        interface IDialogDefinition {
            buttons?: dialog.definition.button[];
            contents?: dialog.definition.content[];
            height?: number;
            minHeight?: number;
            minWidth?: number;
            onCancel?: () => void;
            onLoad?: () => void;
            onOk?: () => void;
            onShow?: () => void;
            onHide?: () => void;
            resizable?: number;
            title?: string;
            width?: number;
        }
    }

    class dialogCommand {
        value: any;

        constructor(dialogName: string, ext?: { tabId?: string });
    }

    interface dtdDefinition {
        [outerTagName: string]: { [innerTagName: string]: 1 };
        $block: { [tagName: string]: 1 };
        $blockLimit: { [tagName: string]: 1 };
        $cdata: { [tagName: string]: 1 };
        $editable: { [tagName: string]: 1 };
        $empty: { [tagName: string]: 1 };
        $inline: { [tagName: string]: 1 };
        $intermediate: { [tagName: string]: 1 };
        $list: { [tagName: string]: 1 };
        $listItem: { [tagName: string]: 1 };
        $nonBodyContent: { [tagName: string]: 1 };
        $nonEditable: { [tagName: string]: 1 };
        $object: { [tagName: string]: 1 };
        $removeEmpty: { [tagName: string]: 1 };
        $tabIndex: { [tagName: string]: 1 };
        $tableContent: { [tagName: string]: 1 };
        $transparent: { [tagName: string]: 1 };
    }

    var dtd: dtdDefinition;

    class editable extends dom.element {
        hasFocus: boolean;
        readonly status: string;

        constructor(editor: editor, element: HTMLElement | dom.element);
        attachClass(className: string): void;
        attachListener(obj: event | editable, eventName: string, listenerFunction: (ei: eventInfo) => void, scopeobj?: {}, listenerData?: any, priority?: number): listenerRegistration;
        changeAttr(attr: string, val: string): void;
        detach(): void;
        insertElement(element: dom.element, range?: dom.range): void;
        insertHtml(data: string, mode?: string, range?: dom.range): void;
        insertText(text: dom.text): void;
        isInline(): boolean;
        setReadOnly(isReadOnly: boolean): void;
    }

    class editor extends event {
        readonly activeEnterMode: number;
        readonly activeFilter: filter;
        readonly activeShiftEnterMode: number;
        readonly blockless: boolean;
        readonly config: config;
        readonly container: dom.element;
        readonly contextMenu: plugins.contextMenu;
        copyFormatting: plugins.copyformatting.state;
        dataProcessor: dataProcessor;
        readonly document: dom.document;
        readonly element: dom.element;
        readonly elementMode: number;
        readonly enterMode: number;
        readonly filter: filter;
        readonly focusManager: focusManager;
        readonly id: string;
        readonly keystrokeHandler: keystrokeHandler;
        readonly lang: any;
        readonly langCode: string;
        readonly mode: string;
        readonly name: string;
        readonly pasteFilter: filter;
        readonly plugins: any;
        readonly readOnly: boolean;
        readonly shiftEnterMode: number;
        readonly status: string;
        readonly tabIndex: number;
        readonly templates: any;
        readonly title: any;
        readonly toolbar: any;
        readonly ui: ui;
        readonly widgets: plugins.widget.repository;
        readonly window: dom.window;

        constructor(instanceConfig?: config, element?: dom.element, mode?: number);
        addCommand(commandName: string, commandDefinition: commandDefinition): void;
        addContentsCss(cssPath: string): void;
        addFeature(feature: feature): boolean;
        addMenuGroup(name: string, order?: number): void;
        addMenuItem(name: string, definition?: IMenuItemDefinition): void;
        addMenuItems(definitions: { [id: string]: IMenuItemDefinition }): void;
        addMode(mode: string, exec: () => void): void;
        addRemoveFormatFilter(func: (element: dom.element) => boolean): void;
        applyStyle(style: style): void;
        attachStyleStateChange(style: style, callback: (state: number) => void): void;
        checkDirty(): boolean;
        createFakeElement(realElement: dom.element, className: string, realElementType: string, isResizable: boolean): void;
        createFakeParserElement(realElement: dom.element, className: string, realElementType: string, isResizable: boolean): void;
        createRange(): dom.range;
        destroy(noUpdate?: boolean): void;
        editable(elementOrEditable?: dom.element | editable): editable;
        elementPath(startNode?: dom.node): dom.elementPath;
        execCommand(commandName: string, data?: any): boolean;
        extractSelectedHtml(toString?: boolean, removeEmptyBlock?: boolean): dom.documentFragment | string | void;
        focus(): void;
        forceNextSelectionCheck(): void;
        getClipboardData(callbackOrOptions: { title: string } | ((data: any) => void), callback: (data: any) => void): void;
        getColorFromDialog(callback: (color: string) => void, scope?: { [key: string]: any }): void;
        getCommand(commandName: string): command;
        getCommandKeystroke(command: command | string): number | null;
        getData(internal?: boolean): string;
        getMenuItem(name: string): IMenuItemDefinition;
        getResizable(forContents: boolean): dom.element;
        getSelectedHtml(toString?: false): dom.documentFragment;
        getSelectedHtml(toString: true): string;
        getSelectedHtml(toString?: boolean): dom.documentFragment | string;
        getSelection(forceRealSelection?: boolean): dom.selection;
        getSnapshot(): string;
        getStylesSet(callback: (stylesDefinitions: style.definition[]) => void): void;
        getUiColor(): string;
        insertElement(element: dom.element): void;
        insertHtml(html: string, mode?: string, range?: dom.range): void;
        insertText(text: string): void;
        loadSnapshot(snapshot: any): void;
        lockSelection(sel?: dom.selection): boolean;
        openDialog(dialogName: string, callback: () => void): dialog;
        popup(url: string, width?: number | string, height?: number | string, options?: string): void;
        removeMenuItem(name: string): void;
        removeStyle(style: style): void;
        resetDirty(): void;
        resetUndo(): void;
        resize(width: number | string, height: number | string, isContentHeight?: boolean, resizeInner?: boolean): void;
        restoreRealElement(fakeElement: dom.element): dom.element;
        selectionChange(checkNow?: boolean): void;
        setActiveEnterMode(enterMode: number, shiftEnterMode: number): void;
        setActiveFilter(filter: filter): void;
        setData(data: string, options?: { internal?: boolean; callback?: () => void; noSnapshot?: boolean; }): void;
        setKeystroke(keystroke: number, behavior: string | boolean): void;
        setKeystroke(keystroke: Array<[number, string | boolean]>): void;
        setMode(newMode: string, callback: () => void): void;
        setReadOnly(isReadOnly?: boolean): void;
        setUiColor(color: string): void;
        showNotification(message: string, type: plugins.notification.type, progressOrDuration: number): plugins.notification;
        unlockSelection(restore?: boolean): void;
        updateElement(): void;
    }

    namespace editor {
        interface eventObject {
            activeEnterModeChange?: (evt: eventInfo) => void;
            activeFilterChange?: (evt: eventInfo) => void;
            afterCommandExec?: (evt: eventInfo) => void;
            afterInsertHtml?: (evt: eventInfo) => void;
            afterPaste?: (evt: eventInfo) => void;
            afterPasteFromWord?: (evt: eventInfo) => void;
            afterSetData?: (evt: eventInfo) => void;
            afterUndoImage?: (evt: eventInfo) => void;
            ariaEditorHelpLabel?: (evt: eventInfo) => void;
            ariaWidget?: (evt: eventInfo) => void;
            autogrow?: (evt: eventInfo) => void;

            beforeCommandExec?: (evt: eventInfo) => void;
            beforeDestroy?: (evt: eventInfo) => void;
            beforeGetData?: (evt: eventInfo) => void;
            beforeModeUnload?: (evt: eventInfo) => void;
            beforeSetMode?: (evt: eventInfo) => void;
            beforeUndoImage?: (evt: eventInfo) => void;
            blur?: (evt: eventInfo) => void;

            change?: (evt: eventInfo) => void;
            configLoaded?: (evt: eventInfo) => void;
            contentDirChanged?: (evt: eventInfo) => void;
            contentDom?: (evt: eventInfo) => void;
            contentDomInvalidated?: (evt: eventInfo) => void;
            contentDomUnload?: (evt: eventInfo) => void;
            customConfigLoaded?: (evt: eventInfo) => void;

            dataFiltered?: (evt: eventInfo) => void;
            dataReady?: (evt: eventInfo) => void;
            destroy?: (evt: eventInfo) => void;
            dialogHide?: (evt: eventInfo) => void;
            dialogShow?: (evt: eventInfo) => void;
            dirChanged?: (evt: eventInfo) => void;
            doubleclick?: (evt: eventInfo) => void;
            dragend?: (evt: eventInfo) => void;
            dragstart?: (evt: eventInfo) => void;
            drop?: (evt: eventInfo) => void;

            elementsPathUpdate?: (evt: eventInfo) => void;

            fileUploadRequest?: (evt: eventInfo) => void;
            fileUploadResponse?: (evt: eventInfo) => void;
            floatingSpaceLayout?: (evt: eventInfo) => void;
            focus?: (evt: eventInfo) => void;

            getData?: (evt: eventInfo) => void;
            getSnapshot?: (evt: eventInfo) => void;

            insertElement?: (evt: eventInfo) => void;
            insertHtml?: (evt: eventInfo) => void;
            insertText?: (evt: eventInfo) => void;
            instanceReady?: (evt: eventInfo) => void;

            key?: (evt: eventInfo) => void;

            langLoaded?: (evt: eventInfo) => void;
            loadSnapshot?: (evt: eventInfo) => void;
            loaded?: (evt: eventInfo) => void;
            lockSnapshot?: (evt: eventInfo) => void;
            maximize?: (evt: eventInfo) => void;
            menuShow?: (evt: eventInfo) => void;
            mode?: (evt: eventInfo) => void;

            notificationHide?: (evt: eventInfo) => void;
            notificationShow?: (evt: eventInfo) => void;
            notificationUpdate?: (evt: eventInfo) => void;

            paste?: (evt: eventInfo) => void;
            pasteFromWord?: (evt: eventInfo) => void;
            pluginsLoaded?: (evt: eventInfo) => void;

            readOnly?: (evt: eventInfo) => void;
            removeFormatCleanup?: (evt: eventInfo) => void;
            required?: (evt: eventInfo) => void;
            resize?: (evt: eventInfo) => void;

            save?: (evt: eventInfo) => void;
            saveSnapshot?: (evt: eventInfo) => void;
            selectionChange?: (evt: eventInfo) => void;
            setData?: (evt: eventInfo) => void;
            stylesSet?: (evt: eventInfo) => void;

            template?: (evt: eventInfo) => void;
            toDataFormat?: (evt: eventInfo) => void;
            toHtml?: (evt: eventInfo) => void;

            unlockSnapshot?: (evt: eventInfo) => void;
            updateSnapshot?: (evt: eventInfo) => void;

            widgetDefinition?: (evt: eventInfo) => void;
        }
    }

    namespace env {
        var air: boolean;
        var chrome: boolean;
        var cssClass: string;
        var edge: boolean;
        var gecko: boolean;
        var hc: boolean;
        var hidpi: boolean;
        var iOS: boolean;
        var ie: boolean;
        var isCompatible: boolean;
        var mac: boolean;
        var needsBrFiller: boolean;
        var needsNbspFiller: boolean;
        var quirks: boolean;
        var safari: boolean;
        var version: number;
        var webkit: boolean;

        function secure(): boolean;
    }

    class event {
        static useCapture: boolean;

        constructor();
        capture(): void;
        define(name: string, meta: { [key: string]: any }): void;
        fire(eventName: string, data?: { [key: string]: any }, editor?: editor): any;
        fireOnce(eventName: string, data?: { [key: string]: any }, editor?: editor): any;
        hasListeners(eventName: string): boolean;
        on(eventName: string, listenerFunction: (eventInfo: eventInfo) => void, scopeObj?: { [key: string]: any } | null, listenerData?: any, priority?: number): listenerRegistration;
        once(eventName: string, listenerFunction: (eventInfo: eventInfo) => void, scopeObj?: { [key: string]: any } | null, listenerData?: any, priority?: number): listenerRegistration;
        removeAllListeners(): void;
        removeListener(eventName: string, listenerFunction: (eventInfo: eventInfo) => void): void;

        static implementOn(targetObject: { [key: string]: any }): void;
    }

    interface eventInfo {
        data: any;
        editor: editor;
        listenerData: any;
        name: string;
        sender: { [key: string]: any };

        cancel(): void;
        removeListener(): void;
        stop(): void;
    }

    interface feature {
        allowedContent?: filter.allowedContentRules;
        contentForms?: any;
        contentTransformations?: any;
        name?: string;
        requiredContent?: string | style;
        toFeature?: () => feature;
    }

    namespace fileTools {
        var isFileUploadSupported: boolean;

        function addUploadWidget(editor: editor, name: string, def: uploadWidgetDefinition): void;
        function bindNotification(editor: editor, fileLoader: fileLoader): void;
        function getUploadUrl(config: { [key: string]: any }, type?: string): string;
        function isTypeSupported(file: Blob, supportedTypes: RegExp): boolean;
        function markElement(element: dom.element, widgetName: string, loaderId: number): void;

        class fileLoader extends event {
            readonly data: string;
            readonly file: Blob;
            readonly fileName: string;
            readonly id: number;
            readonly loaded: number;
            readonly message: string;
            readonly reader: FileReader;
            readonly responseData: any;
            status: string;
            readonly total: number;
            readonly uploadTotal: number;
            readonly uploadUrl: string;
            readonly uploaded: string;
            readonly url: string;
            readonly xhr: XMLHttpRequest;

            constructor(editor: editor, fileOrData: Blob | string, fileName?: string);
            abort(): void;
            isFinished(): boolean;
            load(): void;
            loadAndUpload(url: string, additionalRequestParameters?: any): void;
            update(): void;
            upload(url: string, additionalRequestParameters?: any): void;
        }

        class uploadRepository extends event {
            readonly loaders: fileLoader[];

            constructor(editor: editor);
            create(fileOrData: Blob | string, fileName: string, loaderType?: any): fileLoader;
            isFinished(): boolean;
        }

        interface uploadWidgetDefinition extends plugins.widget.definition {
            additionalRequestParameters: any;
            fileToElement: (pastedFile: any) => HTMLElement;
            loadMethod: string;
            loaderType: any;
            onAbort: () => boolean;
            onError: () => boolean;
            onLoaded: () => boolean;
            onUploaded: () => boolean;
            onUploading: () => boolean;
            replaceWith: () => any;
            skipNotifications: boolean;
            supportedTypes: string;
            uploadUrl: string;
        }
    }

    module filter {
        type allowedContentRule = string | style | { [key: string]: any };
        type allowedContentRules = allowedContentRule | allowedContentRule[];
        type contentRule = string | style;
        type disallowedContentRules = string | { [key: string]: any };

        interface transformation {
            check?: string;
            element?: string | style;
            left?: (element: htmlParser.element | style) => boolean;
            right: (element: htmlParser.element, tools: string | filter.transformationTools) => boolean;
        }

        var transformationTools: transformationTools;

        interface transformationTools {
            alignmentToAttribute(element: htmlParser.element): void;
            alignmentToStyle(element: htmlParser.element): void;
            lengthToAttribute(element: htmlParser.element, styleName: string, attrName?: string): void;
            lengthToStyle(element: htmlParser.element, styleName: string, attrName?: string): void;
            matchesTyle(element: htmlParser.element, style: style): void;
            sizeToAttribute(element: htmlParser.element): void;
            sizeToStyle(element: htmlParser.element): void;
            splitBorderShorthand(element: htmlParser.element): void;
            splitMarginShorthand(element: htmlParser.element): void;
            transform(element: htmlParser.element, form: style | string): void;
        }
    }

    class filter {
        readonly allowedContent: filter.allowedContentRules[];
        readonly customConfig: boolean;
        readonly disabled: boolean;
        readonly disallowedContent: any[];
        readonly editor: editor;
        readonly elementCallbacks: Array<(element: htmlParser.element) => number>;
        readonly id: number;

        static instances: { [id: string]: filter };

        constructor(editorOrRules: editor | filter.allowedContentRules);
        addContentForms(forms: any[]): void;
        addElementCallback(callback: (element: htmlParser.element) => number): void;
        addFeature(feature: feature): boolean;
        addTransformations(transformations: Array<Array<string | filter.transformation>>): void;
        allow(newRules: filter.allowedContentRules, featureName?: string, overrideCustom?: boolean): boolean;
        applyTo(fragment: htmlParser.fragment | htmlParser.element, toHtml?: boolean, transformOnly?: boolean, enterMode?: number): boolean;
        check(test: filter.contentRule, applyTransformations?: boolean, strictCheck?: boolean): boolean;
        checkFeature(feature: feature): boolean;
        clone(): filter;
        destroy(): void;
        disable(): void;
        disallow(newRules: filter.disallowedContentRules): void;
        getAllowedEnterMode(defaultMode: number, reverse?: boolean): number;
    }

    class focusManager {
        currentActive: dom.domObject;
        hasFocus: boolean;

        constructor(editor: editor);
        add(element: dom.element, isCapture: boolean): void;
        blur(noDelay?: boolean): void;
        focus(currentActive?: dom.element): void;
        lock(): void;
        remove(element: dom.element): void;
        unlock(): void;
    }

    class htmlDataProcessor implements dataProcessor {
        dataFilter: htmlParser.filter;
        htmlFilter: htmlParser.filter;
        writer: htmlParser.basicWriter;

        constructor(editor: editor);
        toDataFormat(html: string, options?: string | { context?: string, filter?: filter, enterMode?: number }): string;
        toHtml(data: string, options?: string | htmlDataProcessorOptions): string;
    }

    interface htmlDataProcessorOptions {
        context?: string;
        fixForBody?: boolean;
        filter?: filter;
        dontFilter?: boolean;
        enterMode?: number;
        protectedWhitespaces?: boolean;
    }

    namespace htmlParser {
        class basicWriter {
            constructor();
            attribute(attName: string, attValue: string): void;
            closeTag(tagName: string): void;
            comment(comment: string): void;
            getHtml(reset: boolean): string;
            openTag(tagName: string, attributes: { [key: string]: string }): void;
            openTagClose(tagName: string, isSelfClose: boolean): void;
            reset(): void;
            text(text: string): void;
            write(data: string): void;
        }

        class cdata extends node {
            constructor(value: string);
            type: number;
            writeHtml(writer: htmlParser.basicWriter): void;
        }

        class comment extends node {
            type: number;
            value: string;

            constructor(value: string);
            filter(filter: filter): boolean;
            writeHtml(writer: htmlParser.basicWriter, filter?: htmlParser.filter): void;
        }

        class cssStyle {
            constructor(elementOrStyleText: htmlParser.element | string);
            populate(obj: htmlParser.element | dom.element | { [key: string]: any }): void;
        }

        class element extends node {
            attributes: { [name: string]: string };
            children: htmlParser.node[];
            name: string;
            type: number;

            constructor(name: string, attributes: { [name: string]: string });
            add(node: node, index?: number): void;
            addClass(className: string): void;
            clone(): element;
            filter(filter: htmlParser.filter): boolean;
            filterChildren(filter: htmlParser.filter): void;
            find(criteria: string | ((el: htmlParser.node) => boolean), recursive?: boolean): htmlParser.node[];
            forEach(callback: (node: htmlParser.node) => void | false, type?: number, skipRoot?: boolean): void;
            getFirst(condition: string | { [key: string]: string } | ((node: htmlParser.node) => boolean)): htmlParser.node;
            getHtml(): string;
            getOuterHtml(): string;
            hasClass(className: string): boolean;
            removeClass(className: string): void;
            replaceWithChildren(): void;
            setHtml(html: string): void;
            split(index: number): htmlParser.element;
            writeChildrenHtml(writer: htmlParser.basicWriter, filter?: htmlParser.filter): void;
            writeHtml(writer: htmlParser.basicWriter, filter?: htmlParser.filter): void;
        }

        class filter {
            attributeNameRules: filterRulesGroup;
            attributesRules: { [name: string]: filterRulesGroup };
            commentRules: filterRulesGroup;
            elementNameRules: filterRulesGroup;
            elementsRules: { [name: string]: filterRulesGroup };
            id: number;
            rootRules: filterRulesGroup;
            textRules: filterRulesGroup;

            constructor(rules?: filterRulesDefinition);
            addRules(rules: filterRulesDefinition, options?: number | { priority?: number; applyToAll?: boolean; }): void;
            applyTo(node: node): void;
        }

        interface filterRulesDefinition {
            elementNames?: any;
            attributeNames?: any;
            elements?: any;
            attributes?: any;
            text?: any;
            comment?: any;
            root?: any;
        }

        class filterRulesGroup {
            rules: Array<{ value: rule, priority: number, option: ruleOptions }>;

            add(rule: rule, priority: number, options: ruleOptions): void;
            addMany(rules: Array<{ [key: string]: any }>, priority: number, options: ruleOptions): void;
            exec(currentValue: htmlParser.node | htmlParser.fragment | string): htmlParser.node | htmlParser.fragment | string;
            execOnName(currentName: string): string;
            findIndex(priority: number): number;
        }

        class fragment {
            children: htmlParser.node[];
            parent: htmlParser.fragment;
            readonly type: number;

            constructor();

            add(node: htmlParser.node, index?: number): void;
            filter(filter: htmlParser.filter): void;
            filterChildren(filter: htmlParser.filter, filterRoot?: boolean): void;
            forEach(callback: (node: htmlParser.node) => void | false, type?: number, skipRoot?: boolean): void;
            writeChildrenHtml(writer: basicWriter, filter?: htmlParser.filter, filterRoot?: boolean): void;
            writeHtml(writer: basicWriter, filter?: htmlParser.filter): void;

            static fromBBCode(source: string): htmlParser.fragment;
            static fromHtml(fragmentHtml: string, parent?: htmlParser.element | string, fixingBlock?: string | boolean): fragment | htmlParser.element;
        }

        class node {
            constructor();
            getAscendant(condition: string | { [name: string]: string } | ((node: htmlParser.element) => boolean)): element;
            getIndex(): number;
            insertAfter(node: node): void;
            insertBefore(node: node): void;
            remove(): node;
            replaceWith(node: node): void;
            wrapWith(wrapper: element): element;
        }

        type rule = ((value: htmlParser.node | htmlParser.fragment | string) => boolean) | [string, string];

        interface ruleOptions {
            applyToAll?: boolean;
            excludeNestedEditable?: boolean;
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
        setRules(tagName: string, rules: { [key: string]: any }): void;
    }

    class keystrokeHandler {
        blockedKeystrokes: { [key: number]: string | boolean };
        keystrokes: { [key: number]: string | boolean };

        constructor(editor: editor);

        attach(domObject: dom.domObject): void;
    }

    namespace lang {
        var languages: { [code: string]: number };
        var rtl: { [code: string]: number };

        function detect(defaultLanguage: string, probeLanguage?: string): string;
        function load(languageCode: string, defaultLanguage: string, callback: (code: string, entries: any) => void): void;
    }

    namespace loader {
        var loadedScripts: string[];
        var scripts: string[];

        function load(scriptName: string, defer?: boolean): void;
        function loadPending(): void;
    }

    class menu {
        constructor();

        add(item: any): void;
        addListener(listenerFn: (startElement: dom.element, selection: dom.selection, path: dom.elementPath) => any): void;
        findItemByCommandName(commandName: string): { item: any, element: dom.element };
        hide(returnFocus?: boolean): void;
        removeAll(): void;
        show(offsetParent: dom.element, corner?: number, offsetX?: number, offsetY?: number): void;
    }

    interface pluginDefinition {
        hidpi?: boolean;
        lang?: string | string[];
        requires?: string | string[];

        afterInit?(editor: editor): any;
        beforeInit?(editor: editor): any;
        init?(editor: editor): void;
        onLoad?(): any;
    }

    namespace plugins {
        namespace cloudservices {
            class cloudServicesLoader extends fileTools.fileLoader {
                customToken: string;

                constructor(editor: editor, fileOrData: Blob | string, fileName?: string, token?: string);
                loadAndUpload(url?: string, additionalRequestParameters?: any): void;
                upload(url?: string, additionalRequestParameters?: any): void;
            }
        }

        class autoEmbed {
            getWidgetDefinition(editor: editor, url: string): widget.definition;
        }

        namespace balloontoolbar {
            const PRIORITY: { [pri: string]: number };

            class context {
                editor: editor;
                options: contextDefinition;
                toolbar: ui.balloonToolbar;

                constructor(editor: editor, options: contextDefinition);
                destroy(): void;
                hide(): void;
                refresh(): void;
                show(pointedElement?: dom.element): void;
            }

            interface contextDefinition {
                cssSelector?: string;
                priority?: number;
                widgets?: string[] | string;

                refresh?: (editor: editor, path: dom.elementPath, selection: dom.selection) => dom.element;
            }

            class contextManager {
                editor: editor;

                constructor(editor: editor);
                add(context: context): void;
                check(selection?: dom.selection): void;
                create(options: contextDefinition): context;
                destroy(): void;
                hide(): void;
            }
        }

        namespace clipboard {
            const isCustomCopyCutSupported: boolean;
            const isCustomDataTypesSupported: boolean;
            const isFileApiSupported: boolean;
            const mainPasteEvent: string;

            function addPasteButton(editor: editor, name: string, definition: { [key: string]: any }): void;
            function canClipboardApiBeTrusted(dataTransfer: dataTransfer, editor: editor): boolean;
            function getDropTarget(editor: editor): dom.domObject;
            function getRangeAtDropPosition(domEvent: Event, editor: editor): dom.range;
            function initDragDataTransfer(evt?: dom.event, editor?: editor): void;
            function initPasteDataTransfer(evt?: dom.event, sourceEditor?: editor): void;
            function preventDefaultDropOnElement(element: dom.element): void;
            function resetDragDataTransfer(): void;

            class dataTransfer {
                readonly $: DataTransfer;
                readonly id: string;
                readonly sourceEditor: editor;

                constructor(nativeDataTransfer?: DataTransfer, editor?: editor);
                cacheData(): void;
                getData(type: string, getNative?: boolean): string;
                getFile(i: number): File;
                getFilesCount(): number;
                getTransferType(targetEditor: editor): number;
                isEmpty(): boolean;
                setData(type: string, value: string): void;
                storeId(): void;
            }

            class fallbackDataTransfer {
                constructor(dataTransfer: dataTransfer);
                getData(type: string, getNative?: boolean): string;
                isRequired(): boolean;
                setData(type: string, value: string): string;
            }
        }

        namespace condesnippet {
            function setHighlighter(highlighter: highlighter): void;

            class highlighter {
                highlighter: (code: string, lang: string, callback: (highlightedCode: string) => void) => void;
                init: (ready: () => void) => void;
                languages: { [lang: string]: string };
                readonly queue: Array<(code: string, lang: string, callback: (highlightedCode: string) => void) => void>;
                readonly ready: boolean;

                highlight(code: string, lang: string, callback: (highlightedCode: string) => void): void;
            }
        }

        class contextMenu extends menu {
            constructor(editor: editor);
            addTarget(element: dom.element, nativeContextMenuOnCtrl?: boolean): void;
            open(offsetParent: dom.element, corner?: number, offsetX?: number, offsetY?: number): void;
        }

        namespace copyformatting {
            var breakOnElements: string[];
            var elementsForInlineTransform: string[];
            var excludedAttributes: string[];
            var excludedAttributesFromInlineTransform: string[];
            var inlineBoundary: string[];
            var preservedElements: string[];

            class state extends event {
                editor: editor;
                filter: filter;
                sticky: boolean;
                styles: style[];

                constructor(editor: editor);
            }
        }

        namespace easyimage {}

        namespace embedBase {
            function createWidgetBaseDefinition(editor: editor): baseDefinition;

            interface baseDefinition extends widget.definition {
                providerUrl: template;
                urlRegExp: RegExp;

                getErrorMessage(messageTypeOrMessage: string, url?: string, suffix?: string): string;
                isUrlValid(url: string): boolean;
                loadContent(url: string, callback?: () => void, errorCallback?: (error: string) => void, noNotifications?: boolean): request;
            }

            interface request {
                callback: () => void;
                errorCallback: (error: string) => void;
                response: { [key: string]: string };
                task: notificationAggregator.task;
                url: string;

                cancel(): void;
            }
        }

        namespace image2 {
            function checkHasNaturalRatio(image: dom.element): boolean;
            function getLinkAttributesGetter(): (editor: editor, data: { [key: string]: string }) => { set: { [tag: string]: string }, removed: string[] };
            function getLinkAttributesParser(): (editor: editor, element: dom.element) => { [key: string]: string };
            function getNatural(image: dom.element): { [key: string]: string };
        }

        namespace imagebase {
            var featuresDefinitions: { [key: string]: string };

            function addFeature(editor: editor, name: string, definition: imageWidgetDefinition): imageWidgetDefinition;
            function addImageWidget(editor: editor, name: string, definition: imageWidgetDefinition): void;

            interface imageWidgetDefinition extends widget.definition {
                features: string[];
                upcast: string;
            }

            class progressBar extends progressReporter {
                bar: dom.element;
                constructor();
            }

            class progressReporter {
                wrapper: dom.element;

                constructor(wrapperHtml?: string);
                aborted(): void;
                bindLoader(loader: fileTools.fileLoader): void;
                done(): void;
                failed(): void;
                remove(): void;
                updated(progress: number): void;
            }
        }

        namespace indent {
            function registerCommands(editor: editor, commands: { [key: string]: command }): void;

            class genericDefinition implements commandDefinition {
                async: boolean;
                canUndo: boolean;
                context: boolean;
                contextSensitive: boolean;
                editorFocus: boolean;
                fakeKeystroke: number;
                readonly isIndent: boolean;
                modes: { [key: string]: any };
                readOnly: boolean;
                startDisabled: boolean;

                exec(editor: editor, data?: any): boolean;
                refresh?(editor: editor, path: dom.elementPath): void;
            }

            class specificDefinition {
                database: { [key: string]: any };
                readonly enterBr: boolean;
                readonly indentKey: { [key: string]: any };
                readonly isIndent: boolean;
                readonly jobs: { [priority: string]: { refresh: (editor: editor, path: dom.elementPath) => number, exec: (editor: editor) => boolean } };
                readonly relatedGlobal: { [key: string]: any };

                execJob(editor: editor, priority: number): boolean;
                getContext(node: dom.elementPath): dom.element;
                refreshJob(editor: editor, priority: number): number;
            }
        }

        namespace indentList {
            function firstItemInPath(query: string | string[] | { [tagName: string]: any } | dom.element | ((element: dom.element) => boolean)): boolean;
        }

        namespace link {
            // DEPRECATED 4.3.3
            const emptyAnchorFix: boolean;

            // DEPRECATED 4.3.3
            const fakeAnchor: boolean;

            // DEPRECATED 4.3.3
            const synAnchorSelector: boolean;

            function getEditorAnchors(editor: editor): dom.element[];
            function getLinkAttributes(editor: editor, data: { [key: string]: any }): { set: { [key: string]: string }, removed: string[] };
            function getSelectedLink(editor: editor, returnMultiple?: boolean): dom.element | dom.element[];
            function parseLinkAttributes(editor: editor, element: dom.element): { [key: string]: any };
            function showDisplayTextForElement(element: dom.element, editor: editor): boolean;
            function tryRestoreFakeAnchor(editor: editor, element: dom.element): dom.element;
        }

        class list {
            arrayToList(listArray: any, database: any, paragraphMode: any, dir: any): void;
            listToArray(listNode: any, database: any, baseArray: any, baseIndentLevel: any, grandparentNode: any): void;
        }

        class notification {
            readonly area: notification.area;
            readonly duration: number;
            readonly editor: editor;
            readonly element: dom.element;
            readonly id: number;
            readonly message: string;
            readonly progress: number;
            readonly type: notification.type;

            constructor(editor: editor, options: notification.options);
            hide(): void;
            isVisible(): boolean;
            show(): void;
            update(options: notification.updateOptions): void;
        }

        namespace notification {
            interface area {
                readonly editor: editor;
                readonly element: dom.element;
                readonly notifications: notification[];

                add(notification: notification): void;
                remove(notification: notification): void;
            }

            interface optionsBase {
                duration?: number;
                progress?: number;
                type?: type;
            }

            interface options extends optionsBase {
                message: string;
            }

            interface updateOptions extends optionsBase {
                message?: string;
                important?: boolean;
            }

            type type = 'info' | 'warning' | 'success' | 'progress';
        }

        class notificationAggregator extends event {
            readonly editor: editor;
            readonly notification: notification;

            constructor(editor: editor, message: string, singularMessage?: string);
            createTask(options?: { weight?: number }): notificationAggregator.task;
            getDoneTaskCount(): number;
            getPercentage(): number;
            getTaskCount(): number;
            isFinished(): boolean;
            update(): void;
        }

        namespace notificationAggregator {
            class task extends event {
                constructor(weight?: number);
                cancel(): void;
                done(): void;
                isCanceled(): boolean;
                isDone(): boolean;
                update(weight: number): void;
            }
        }

        namespace pastefromword {
            class lists {
                numbering: lists.numbering;
            }

            namespace lists {
                class numbering {
                    getStyle(marker: string): string;
                    toNumber(marker: string, markerType: string): number;
                }
            }

            class styles {
                pushStylesLower(element: htmlParser.element, exceptions: { [style: string]: boolean }, wrapText?: boolean): boolean;
            }
        }

        namespace tableselection {
            function getCellsBetween(first: dom.element, last: dom.element): dom.element[];
        }

        namespace widget {
            var WRAPPER_CLASS_PREFIX: string;

            function getNestedEditable(guard: dom.element, node: dom.node): dom.element;
            function isDomDragHandler(node: dom.node): boolean;
            function isDomDragHandlerContainer(node: dom.node): boolean;
            function isDomNestedEditable(node: dom.node): boolean;
            function isDomWidget(node: dom.node): boolean;
            function isDomWidgetElement(node: dom.node): boolean;
            function isDomWidgetWrapper(node: dom.node): boolean;
            function isParserWidgetElement(node: dom.node): boolean;
            function isParserWidgetWrapper(node: dom.node): boolean;

            namespace nestedEditable {
                interface definition {
                    allowedContent?: filter.allowedContentRules;
                    disallowedContent?: filter.disallowedContentRules;
                    pathName?: string;
                    selector?: string;
                }
            }

            class nestedEditable extends dom.element {
                readonly editor: editor;
                readonly enterMode: number;
                readonly filter: filter;
                readonly shiftEnterMode: number;

                constructor(editor: editor, element: dom.element, config: { filter?: filter });
                getData(): string;
                setData(data: string): void;
            }

            interface definition extends feature {
                button?: string;
                data?: (evt: eventInfo) => void;
                defaults?: { [key: string]: any };
                dialog?: string;
                downcast?: string | ((element: htmlParser.element) => void);
                downcasts?: { [key: string]: any };
                draggable?: boolean;
                edit?: () => void;
                editables?: { [key: string]: any };
                getLabel?: () => any;
                init?: () => void;
                inline?: boolean;
                insert?: () => void;
                mask?: boolean;
                parts?: { [key: string]: any };
                pathName?: string;
                styleToAllowedContentRules?: (style: style) => filter.allowedContentRules;
                styleableElements?: string;
                template?: string | template;
                upcast?: string | ((element: htmlParser.element, data: any) => boolean);
                upcastPriority?: number;
                upcasts?: { [key: string]: any };
            }

            class repository extends event {
                readonly editor: editor;
                readonly focused: widget;
                readonly instances: { [id: string]: widget };
                readonly registered: { [name: string]: definition };
                readonly selected: widget[];
                readonly widgetHoldingFocusedEditable: widget;

                add(name: string, widgetDef: plugins.widget.definition): void;
                addUpcastCallback(callback: (element: htmlParser.element, data: any) => boolean): void;
                checkSelection(): void;
                checkWidgets(options?: { initOnlyNew?: boolean; focusInited?: boolean }): void;
                del(widget: plugins.widget): void;
                destroy(widget: plugins.widget, offline?: boolean): void;
                destroyAll(offline?: boolean): void;
                finalizeCreation(container: any): void;
                getByElement(element: any, checkWrapperOnly: boolean): plugins.widget;
                initOn(element: dom.element, widgetDef?: string | plugins.widget.definition, startupData?: { [key: string]: any }): plugins.widget;
                initOnAll(container?: dom.element): plugins.widget[];
                parseElementClasses(classes: string): any;
                wrapElement(element: any, widgetName?: string): any;
            }

            class widgetselection {
                addFillers(editable: editable): boolean;
                removeFillers(editable: editable): void;
            }
        }

        class widget extends event implements widget.definition {
            readonly dataReady: boolean;
            readonly definition: plugins.widget.definition;
            readonly editor: editor;
            readonly element: dom.element;
            readonly focusedEditable: plugins.widget.nestedEditable;
            readonly id: number;
            readonly inited: boolean;
            readonly ready: boolean;
            readonly repository: plugins.widget.repository;
            readonly wrapper: dom.element;

            constructor(widgetsRepo: plugins.widget.repository, id: number, element: dom.element, widgetDef: plugins.widget.definition, starupData?: any);

            addClass(className: string): void;
            applyStyle(style: style): void;
            checkStyleActive(style: style): boolean;
            destroy(offline?: boolean): void;
            destroyEditable(editableName: string, offline?: boolean): void;
            edit(): boolean;
            focus(): void;
            getClasses(): any;
            hasClass(className: string, Whether: boolean): void;
            initEditable(editableName: string, definition: plugins.widget.nestedEditable.definition): boolean;
            isInited(): boolean;
            isReady(): boolean;
            removeClass(className: string): void;
            removeStyle(style: style): void;
            setData(keyOrData: any, value: any): plugins.widget;
            setFocused(selected: boolean): plugins.widget;
            setSelected(selected: boolean): plugins.widget;
            updateDragHandlerPosition(): void;
        }

        function add(name: string, definition?: pluginDefinition): void;
        function addExternal(name: string, path: string, fileName?: string): void;
        function get(name: string): any;
        function getFilePath(name: string): string;
        function getPath(name: string): string;
        function load(name: string, callback: (plugins: string[]) => void, scope?: { [key: string]: any }): void;
        function setLang(pluginName: string, languageCode: string, languageEntries: any): void;
        var registered: { [key: string]: pluginDefinition };
    }

    class resourceManager {
        basePath: string;
        externals: { [key: string]: any };
        fileName: string;
        loaded: { [key: string]: any };
        registered: { [key: string]: any };

        constructor(basePath: string, fileName: string);
        add(name: string, definition?: pluginDefinition): void;
        addExternal(names: string, path: string, fileName?: string): void;
        get(name: string): pluginDefinition;
        getFilePath(name: string): string;
        getPath(name: string): string;
        load(name: string | string[], callback: (loaded: string[]) => void, scope?: { [key: string]: any }): void;
    }

    // see https://docs.com/ckeditor4/latest/api/CKEDITOR_scriptLoader.html
    namespace scriptLoader {
        function load(scriptUrls: string | string[], callback: (succeededUrls: boolean | string[], failedUrls: string[]) => void, scope?: any, showBusy?: boolean): void;
        function queue(scriptUrl: string, callback?: (succeeded: boolean) => void): void;
    }

    namespace skin {
        var icons: { [name: string]: { path: string } };
        // tslint:disable-next-line:no-duplicate-variable
        var name: string;
        var ua: { [name: string]: any };
        var ua_dialog: string;
        var ua_editor: string;

        function addIcon(name: string, path: string, offset?: number, bgsize?: string): void;
        function chameleon(editor: string, part: string): void;
        function getIconStyle(name: string, rtl?: boolean, overridePath?: number, overrideBgsize?: string): any;
        function getPath(part: string): any;
        function loadPart(part: string, fn: () => void): void;
        function path(): string;
    }

    namespace style {
        function addCustomHandler(defintion: customHandler): style;
        function getStyleText(style: definition): string;

        namespace customHandlers {
            class widget extends style {
                group: any[];
                widget: string;
                checkElement(element: dom.element): boolean;
                getClassesArray(): string[];
                getDefintion(): definition;
                removeStylesFromSameGroup(editor: editor): boolean;
            }
        }

        interface definition {
            attributes?: { [att: string]: string };
            element: string;
            name?: string;
            styles?: { [att: string]: string };
            type?: string | number;
        }

        interface customHandler {
            type: string | number;
            setup?: (style: definition) => void;
            assignedTo?: number;
        }
    }

    class style {
        alwaysRemoveElement: boolean;
        includeReadonly: boolean;
        constructor(styleDefinition: style.definition, variableValues: any);
        apply(editor: editor): void;
        applyToObject(element: dom.element, editor: editor): void;
        applyToRange(range: dom.range, editor: editor): void;
        buildPreview(label?: string): string;
        checkActive(elementPath: dom.elementPath, editor: editor): boolean;
        checkApplicable(elementPath: dom.elementPath, editor: editor, filter?: filter): boolean;
        checkElementMatch(element: dom.element, fullMatch: boolean, editor: editor): boolean;
        checkElementRemovable(element: dom.element, fullMatch: boolean, editor: editor): boolean;
        getDefintion(): style.definition;
        remove(editor: editor): void;
        removeFromRange(range: dom.range, editor: editor): void;
        toAllowedContentRules(editor?: editor): filter.allowedContentRules;
    }

    class styleCommand {
        constructor(style: style, ext?: any);
        exec(editor: editor): void;
    }

    var stylesSet: resourceManager;

    class template {
        readonly source: string;

        constructor(source: string);
        output(data: any, buffer?: any[]): string | number;
    }

    namespace tools {
        function addFunction(fn: () => any, scope?: any): number;
        function arrayCompare(arrayA: any[], arrayB: any[]): boolean;
        function clone(source: { [key: string]: any }): { [key: string]: any };
        function copy(source: { [key: string]: any }): { [key: string]: any };
        function createClass(definition: { [key: string]: any }): any;
        function cssStyleToDomStyle(cssName: string): string;
        function cssVendorPrefix(property: string, value: string, asString?: boolean): { [cssClass: string]: string | number };
        function defer<T extends Function>(fn: T): T;
        function enableHtml5Elements(doc: Document | DocumentFragment, withAppend?: boolean): void;
        function escapeCss(selector: string): string;
        function eventsBuffer(minInterval: number, output: () => void, scopeObj: any): { input: () => void, reset: () => void };
        function extend(target: { [key: string]: any }, source: { [key: string]: any }, overwrite: boolean, properties: { [key: string]: any }): { [key: string]: any };
        function fixDomain(): boolean;
        function genKey(subKey: string): string;
        function getCookie(name: string): string;
        function getCsrfToken(): string;
        function getIndex<T>(array: T[], compareFunction: (element: T) => boolean): number;
        function getMouseButton(evt: dom.event): boolean;
        function getNextId(): string;
        function getNextNumber(): number;
        function getUniqueId(): string;
        function htmlDecode(text: string): string;
        function htmlDecodeAttr(text: string): string;
        function htmlEncode(text: string): string;
        function htmlEncodeAttr(text: string): string;
        function indexOf<T>(array: T[], value: T | ((el: T) => boolean)): number;
        function isArray<T>(object: any): object is T[];
        function isEmpty(object: { [key: string]: any }): boolean;
        function keystrokeToArray(lang: { [key: string]: any }, keystroke: number): { display: string[], aria: string[] };
        function keystrokeToString(lang: { [key: string]: any }, keystroke: number): { display: string, aria: string };
        function ltrim(str: string): string;
        function normalizeCssText(styleText: string, nativeNormalize: boolean): string;
        function normalizeHex(styleText: string): string;
        function objectCompare(left: { [key: string]: any }, right: { [key: string]: any }, onlyLef?: boolean): boolean;
        function objectKeys(obj: { [key: string]: any }): string[];
        function override<T extends Function>(originalFunction: T, functionBuilder: (originalFunction: T) => T): T;
        function parseCssText(styleText: string, normalize?: boolean, nativeNormalize?: boolean): { [key: string]: any };
        function prototypedCopy(source: { [key: string]: any }): { [key: string]: any };
        function removeFunction(ref: number): void;
        function repeat(str: string, times: number): string;
        function rtrim(str: string): string;
        function search<T>(array: T[], value: T | ((element: T) => boolean)): T;
        function setCookie(name: string, value: string): void;
        function setTimeout(func: Function, milliseconds?: number, scope?: { [key: string]: any }, args?: any, ownerWindow?: Window): number;
        function transformPlainTextToHtml(text: string, etnerMode: number): string;
        function trim(str: string): string;
        function tryThese(fn: Function[]): any;
        function writeCssText(styles: { [key: string]: any }, sort?: boolean): string;

        namespace array {
            function every<T>(array: T[], fn: (value: T, index: number, array: T[]) => boolean, thisArg?: { [key: string]: any }): boolean;
            function filter<T>(array: T[], fn: (value: T, index: number, array: T[]) => boolean, thisArg?: { [key: string]: any }): T[];
            function forEach<T>(array: T[], fn: (value: T, index: number, array: T[]) => void, thisArg?: { [key: string]: any }): void;
            function isArray(object: any): boolean;
            function map<T, K>(array: T[], fn: (value: T) => K, thisArg?: { [key: string]: any }): K[];
            function reduce<T, K>(array: T[], fn: (accumulator: K, a: T, index: number, array: T[]) => K, initial: K, thisArg?: { [key: string]: any }): K;
        }

        namespace object {
            function findKey(obj: { [key: string]: any }, value: any): string;
            function merge(obj1: { [key: string]: any }, obj2: { [key: string]: any }): { [key: string]: any };
        }

        namespace style {
            namespace parse {
                function background(value: string): { color: string, unprocessed: string };
                function border(value: string): { width: string, style: string, color: string };
                function margin(value: string): { top: number, right: number, bottom: number, left: number };
            }
        }
    }

    class ui extends event {
        constructor(editor: editor);
        add(name: string, type: { [key: string]: any }, definition: { [key: string]: any }): void;
        addButton(name: string, definition: buttonDefinition): void;
        addHandler(type: { [key: string]: any }, handler: { [key: string]: any }): void;
        addRichCombo(name: string, definition: { [key: string]: any }): void;
        addToolbarGroup(name: string, previous: number | string, subgroupOf?: string): void;
        create(name: string): { [key: string]: any };
        get(name: string): { [key: string]: any };
        space(name: string): dom.element;
        spaceId(name: string): string;
    }

    namespace ui {
        namespace dialog {
            class button extends uiElement {
                constructor(dialog: dialog, elementDefinition: definitions.button, htmlList: any[]);

                accessKeyDown(): void;
                accessKeyUp(): void;
                click(): any;
            }

            class checkbox extends uiElement {
                constructor(dialog: dialog, elementDefinition: definitions.checkbox, htmlList: any[]);

                accessKeyUp(): void;
                getValue(): boolean;
                setValue(checked: boolean, noChangeEvent: boolean): undefined;
            }

            namespace definitions {
                interface button {
                    label: string;
                    disabled?: boolean;
                }

                interface checkbox {
                    checked?: boolean;
                    validate?: () => boolean;
                    label?: string;
                }

                interface fieldSet {
                    label?: string;
                    children: any[];
                }

                interface file {
                    validate?: () => boolean;
                }

                interface fileButton {
                    for: string;
                    validate?: () => boolean;
                }

                interface hbox {
                    widths?: string[];
                    height?: string;
                    padding?: string;
                    align?: string;
                }

                interface html {
                    html: string;
                }

                interface iframeElement {
                    src: string;
                    width: string;
                    height: string;
                    onContentLoad?: () => void;
                }

                interface labeledElement {
                    label: string;
                    labelLayout?: 'horizontal' | 'vertical';
                    widths?: [string, string];
                    role?: string;
                    includeLabel?: boolean;
                }

                interface radio {
                    default: any;
                    validate?: () => boolean;
                    items: Array<[string, string] | [string]>;
                }

                interface select {
                    default: any;
                    validate?: () => boolean;
                    items: Array<[string, string] | [string]>;
                    multiple?: boolean;
                    size?: number;
                }

                interface textarea {
                    rows?: number;
                    cols?: number;
                    default?: string;
                    validate?: () => boolean;
                }

                interface textInput {
                    default?: string;
                    validate?: () => boolean;
                    maxLength?: number;
                    size?: string;
                }

                interface uiElement {
                    id: string;
                    type: number;
                    title?: string;
                    hidden?: boolean;
                    className?: string;
                    style?: string;
                    accessKey?: string;
                }

                interface vbox {
                    width?: string;
                    heights?: string[];
                    align?: string;
                    padding?: string;
                    expand?: boolean;
                }
            }

            class fieldset extends uiElement {
                constructor(dialog: dialog, childObjList: any[], childHtmlList: any[], htmlList: any[], elementDefinition: definitions.fieldSet);
            }

            class file extends ui.dialog.labeledElement {
                constructor(dialog: dialog, elementDefinition: definitions.file, htmlList: any[]);

                getAction(): string;
                registerEvents(definition: { [key: string]: any }): file;
                reset(): void;
                setInitValue(): void;
                submit(): file;
            }

            class fileButton extends button {
                constructor(dialog: dialog, elementDefinition: definitions.fileButton, htmlList: any[]);
            }

            class hbox extends uiElement {
                constructor(dialog: dialog, childObjList: any[], childHtmlList: any[], htmlList: any[], elementDefinition: definitions.hbox);

                getChild(indices: number): ui.dialog.uiElement;
                getChild(indices: number[]): ui.dialog.uiElement[];
            }

            class html extends uiElement {
                constructor(dialog: dialog, elementDefinition: definitions.html, htmlList: any[]);
            }

            class iframeElement extends uiElement {}

            class labeledElement extends uiElement {
                constructor(dialog: dialog, elementDefinition: definitions.labeledElement, htmlList: any[], contentHtml: () => string);

                getLabel(): string;
                setlabel(label: string): ui.dialog.labeledElement;
            }

            class radio extends ui.dialog.labeledElement {
                constructor(dialog: dialog, elementDefinition: definitions.radio, htmlList: any[]);

                accessKeyUp(): void;
                getValue(): string;
                setValue(value: string, noChangeEvent: boolean): undefined;
            }

            class select extends uiElement {
                constructor(dialog: dialog, elementDefinition: definitions.select, htmlList: any[]);

                add(label: string, value?: string, indexedDB?: number): select;
                clear(): select;
                remove(index: number): select;
            }

            class textarea extends labeledElement {
                constructor(dialog: dialog, elementDefinition: definitions.textarea, htmlList: any[]);
            }

            class textInput extends ui.dialog.labeledElement {
                constructor(dialog: dialog, elementDefinition: definitions.textInput, htmlList: any[]);

                accessKeyUp(): void;
                focus(): undefined;
                getDirectionMarker(): string;
                getValue(): string;
                select(): void;
                setDirectionMarker(dir: string): void;
                setValue(value: string, noChangeEvent: boolean): textInput;
            }

            class uiElement {
                eventProcessors: any;

                // Not sure that the htmlList array type is right.
                constructor(
                    dialog: dialog,
                    elementDefinition: definitions.uiElement,
                    htmlList: any[],
                    nodeNameArg?: () => string | string,
                    stylesArg?: () => { [key: string]: any } | { [key: string]: any },
                    attributesArg?: () => { [key: string]: any } | { [key: string]: any },
                    contentsArg?: () => { [key: string]: any } | string
                );

                accessKeyDown(dialog: dialog, key: string): void;
                accessKeyUp(dialog: dialog, key: string): void;
                disable(): void;
                enable(): void;
                focus(): ui.dialog.uiElement | undefined;
                getDialog(): dialog;
                getElement(): dom.element;
                getInputElement(): dom.element;
                getValue(): any;
                isChanged(): boolean;
                isEnabled(): boolean;
                isFocusable(): boolean;
                isVisible(): boolean;
                registerEvents(definition: CKEDITOR.dialog.definition.uiElement): ui.dialog.uiElement;
                selectParentTab(): ui.dialog.uiElement;
                setValue(value: any, noChangeEvent: boolean): ui.dialog.uiElement | undefined;
            }

            class vbox extends hbox {
                constructor(dialog: dialog, childObjList: any[], childHtmlList: any[], htmlList: any[], elementDefinition: definitions.vbox);
            }
        }

        class balloonPanel {
            activeShowListeners: { [id: number]: { removeListener: listenerRegistration } };
            editor: editor;
            focusables: { [id: number]: dom.element };
            height: string;
            parts: balloonPanel.parts;
            rect: balloonPanel.rect;
            showListeners: { [id: number]: () => listenerRegistration };
            templateDefinitions: balloonPanel.templateDefinitions;
            templates: balloonPanel.templates;
            triangleHeight: number;
            triangleMinDistance: number;
            triangleWidth: number;
            width: number;

            activeShowListener(id: number): void;
            activateShowListeners(): void;
            addShowListener(listener: () => listenerRegistration): listenerRegistration;
            attach(element: dom.element, options?: dom.element | boolean | { focusElement?: dom.element | boolean, show?: boolean }): void;
            blur(): void;
            build(): void;
            deactivateShowListener(id: number): void;
            deregisterFocusable(element: dom.element): void;
            destroy(): void;
            getHeight(): number;
            getWidth(): number;
            hide(): void;
            move(top: number, left: number): void;
            registerFocusable(element: dom.element): void;
            removeShowListener(id: number): void;
            resize(width: number, height: number): void;
            setTitle(title: string): void;
            setTriangle(side: 'left' | 'right' | 'top' | 'bottom'): void;
            show(): void;
        }

        namespace balloonPanel {
            interface definition {
                content?: string;
                title?: string;
            }

            interface templates {
                close?: template;
                content?: template;
                panel?: template;
                title?: template;
                triangle?: template;
                triangleInner?: template;
                triangleOuter?: template;
            }

            interface templateDefinitions {
                close?: string;
                content?: string;
                panel?: string;
                title?: string;
                triangle?: string;
                triangleInner?: string;
                triangleOuter?: string;
            }

            interface rect {
                height?: number;
                left?: number;
                top?: number;
                visible?: boolean;
                width?: number;
            }

            interface parts {
                close?: dom.element;
                content?: dom.element;
                panel?: dom.element;
                title?: dom.element;
                triangle?: dom.element;
                triangleInner?: dom.element;
                triangleOuter?: dom.element;
            }
        }

        class balloonToolbar {
            constructor(editor: editor, definition: { [key: string]: any });
            addItem(name: string, element: button | richCombo): void;
            addItems(elements: { [itemName: string]: button | richCombo }): void;
            deleteItem(name: string): void;
            destroy(): void;
            getItem(name: string): button | richCombo;
            hide(): void;
            refresh(): void;
            show(): void;
        }

        class button {
            static readonly handler: handlerDefinition<button>;

            constructor(definition: { [key: string]: any });
            getState(): number;
            render(editor: editor, output: string[]): void;
            setState(state: number): void;
            toFeature(editor: editor): feature;
        }

        class floatPanel {
            constructor(editor: editor, parentElement: dom.element, definition: { [key: string]: any }, level: number);
            addBlock(name: string, block: { [key: string]: any }): void;
            addListBlock(name: string, multiSelect: boolean): void;
            allowBlur(allow: boolean): void;
            blur(): void;
            focus(): void;
            getBlock(name: string): panel.block;
            hide(returnFocus: boolean): void;
            hideChild(restoreFocus: boolean): void;
            reposition(): void;
            showAsChild(panel: floatPanel, blckName: string, offsetParent: dom.element, corner: number, offsetX?: number, offsetY?: number): void;
            showBlock(name: string, offsetParent: dom.element, corner: number, offsetX?: number, offsetY?: number, callback?: () => void): void;
        }

        class handlerDefinition<T> {
            contentsElement: dom.element;
            create(definition: { [key: string]: any }): T;
        }

        class menuButton extends button {}

        class panel {
            constructor(document: dom.document, definition: { [key: string]: any });
            addBlock(name: string, block: { [key: string]: any }): void;
            getBlock(name: string): panel.block;
            render(editor: editor, output?: string[]): void;
            showBlock(name: string): void;
        }

        namespace panel {
            class block {
                getItems(): dom.nodeList;
                markItem(index: number): void;
            }

            const handler: handlerDefinition<panel>;
        }

        class panelButton extends button {}

        class richCombo {
            static readonly handler: handlerDefinition<richCombo>;
            render(editor: editor, output: string[]): void;
        }
    }

    class xml {
        baseXml: any;

        constructor(xmlObjectOrData: any);
        getInnerXml(xpath: string, contextNode?: any): string;
        selectNodes(xpath: string, contextNode?: any): any[];
        selectSingleNode(xpath: string, contextNode?: any): any;
    }

    interface toolbarGroups {
        name?: string;
        groups?: string[];
    }

    namespace config {
        interface styleObject {
            name?: string;
            element: string;
            attributes?: { [key: string]: any };
            styles?: { [key: string]: any };
            overrides?: { [key: string]: any };
        }
    }

    interface sharedSpace {
        top?: string | HTMLElement;
        bottom?: string | HTMLElement;
    }

    interface IMenuItemDefinition {
        label: string;
        command: string;
        icon: string;
        group: string;
        order: number;
    }

    interface buttonDefinition {
        icon?: string;
        iconOffset?: number;
        label: string;
        command: string;
        toolbar: string;
    }
}
