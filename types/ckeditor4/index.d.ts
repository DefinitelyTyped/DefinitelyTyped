// Type definitions for CKEditor 4.16
// Project: https://ckeditor.com/ckeditor-4/, http://ckeditor.com
// Definitions by: Thomas Wittwer <https://github.com/wittwert>
//                 Stuart Long <https://github.com/stuartlong>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

// WORK-IN-PROGRESS: Any contribution support welcomed.
// See https://github.com/DefinitelyTyped/DefinitelyTyped/issues/1827 for more informations.

interface Window {
    CKEDITOR_BASEPATH?: string | undefined;
}

declare namespace CKEDITOR {
    // Config options
    let disableAutoInline: boolean;
    let replaceClass: string;
    let skinName: string;

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

    const basePath: string;
    const currentInstance: editor;
    let document: dom.document;
    const instances: { [id: string]: editor };
    let loadFullCoreTimeout: number;
    const revision: string;
    const rnd: number;
    let status: 'unloaded' | 'basic_loaded' | 'basic_ready' | 'loaded';
    const timestamp: string;
    let verbosity: number;
    const version: string;
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
            startNode: node | string;
            endNode: node | string;
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
            createElement(name: string, attribsAndStyles?: { attributes?: { [key: string]: string } | undefined; styles?: { [key: string]: string } | undefined; }): element;
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
            static clearMarkers(database: any, element: element, removeFromDatabase: boolean): void;
            static createFromHtml(html: string): element;
            static get(element: string | HTMLElement | element): element;
            static setMarker(database: any, element: element, name: string, value: any): element;
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
            getNextNode(evaluator?: (element: element) => boolean, guard?: (element: element) => boolean, boundary?: element): element;
            getPreviousEditableNode(): element | text;
            getPreviousNode(evaluator?: (element: element) => boolean, guard?: (element: element) => boolean, boundary?: element): element;
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
            shrinkOnBlockBoundary?: boolean | undefined;
            skipBogus?: boolean | undefined;
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
        async?: boolean | undefined;
        canUndo?: boolean | undefined;
        context?: boolean | undefined;
        contextSensitive?: boolean | undefined;
        editorFocus?: boolean | undefined;
        fakeKeystroke?: number | undefined;
        modes?: { [key: string]: any } | undefined;
        startDisabled?: boolean | undefined;
        readOnly?: boolean | undefined;
        exec(editor: editor, data?: any): boolean;
        refresh?(editor: editor, path: dom.elementPath): void;
    }

    // https://docs.com/ckeditor4/latest/api/CKEDITOR_config.html
    interface config {
        allowedContent?: boolean | filter.allowedContentRules | undefined;
        autoEmbed_widget?: string | ((url: string) => string) | undefined;
        autoGrow_bottomSpace?: number | undefined;
        autoGrow_maxHeight?: number | undefined;
        autoGrow_minHeight?: number | undefined;
        autoGrow_onStartup?: boolean | undefined;
        autoUpdateElement?: boolean | undefined;

        baseFloatZIndex?: number | undefined;
        baseHref?: string | undefined;
        basicEntities?: boolean | undefined;
        blockedKeystrokes?: number[] | undefined;
        bodyClass?: string | undefined;
        bodyId?: string | undefined;
        browserContextMenuOnCtrl?: boolean | undefined;

        clipboard_defaultContentType?: 'html' | 'text' | undefined;
        clipboard_notificationDuration?: number | undefined;
        cloudServices_tokenUrl?: string | undefined;
        cloudServices_uploadUrl?: string | undefined;
        codeSnippetGeshi_url?: string | undefined;
        codeSnippet_codeClass?: string | undefined;
        codeSnippet_languages?: { [key: string]: any } | undefined;
        coceSnippet_theme?: string | undefined;
        colorButton_backStyle?: config.styleObject | undefined;
        colorButton_colors?: string | undefined;
        colorButton_colorsPerRow?: number | undefined;
        colorButton_enableAutomatic?: boolean | undefined;
        colorButton_enableMore?: boolean | undefined;
        colorButton_foreStyle?: config.styleObject | undefined;
        colorButton_normalizeBackground?: boolean | undefined;
        contentsCss?: string | string[] | undefined;
        contentsLangDirection?: string | undefined;
        contentsLanguage?: string | undefined;
        copyFormatting_allowRules?: string | undefined;
        copyFormatting_allowedContexts?: boolean | string[] | undefined;
        copyFormatting_keystrokeCopy?: number | undefined;
        copyFormatting_keystrokePaste?: number | undefined;
        copyFormatting_outerCursor?: boolean | undefined;
        coreStyles_bold?: config.styleObject | undefined;
        coreStyles_italic?: config.styleObject | undefined;
        coreStyles_strike?: config.styleObject | undefined;
        coreStyles_subscript?: config.styleObject | undefined;
        coreStyles_superscript?: config.styleObject | undefined;
        coreStyles_underline?: config.styleObject | undefined;
        customConfig?: string | undefined;

        dataIndentationChars?: string | undefined;
        defaultLanguage?: string | undefined;
        devtools_styles?: string | undefined;
        devtools_textCallback?: ((editor: editor, dialog: dialog, element: dom.element, tabName: string) => string) | undefined;
        dialog_backgroundCoverColor?: string | undefined;
        dialog_backgroundCoverOpacity?: number | undefined;
        dialog_buttonsOrder?: string | undefined;
        dialog_magnetDistance?: number | undefined;
        dialog_noConfirmCancel?: boolean | undefined;
        dialog_startupFocusTab?: boolean | undefined;
        disableNativeSpellChecker?: boolean | undefined;
        disableNativeTableHandles?: boolean | undefined;
        disableNativeObjectResizing?: boolean | undefined;
        disableNativeReadonlyStyling?: boolean | undefined;
        disallowedContent?: filter.disallowedContentRules | undefined;
        div_wrapTable?: boolean | undefined;
        docType?: string | undefined;

        easyimage_class?: string | undefined;
        easyimage_defaultStyle?: string | undefined;
        easyimage_styles?: { [key: string]: any } | undefined;
        easyimage_toolbar?: string[] | string | undefined;
        emailProtection?: string | undefined;
        embed_provider?: string | undefined;
        emoji_emojiListUrl?: string | undefined;
        emoji_minChars?: number | undefined;
        enableContextMenu?: boolean | undefined;
        enableTabKeyTools?: boolean | undefined;
        enterMode?: number | undefined;
        entities?: boolean | undefined;
        entities_additional?: string | undefined;
        entities_greek?: boolean | undefined;
        entities_latin?: boolean | undefined;
        entities_processNumerical?: boolean | string | undefined;
        extraAllowedContent?: filter.allowedContentRules | undefined;
        extraPlugins?: string | undefined;

        fileTools_defaultFileName?: string | undefined;
        fileTools_requestHeaders?: { [key: string]: any } | undefined;
        filebrowserBrowseUrl?: string | undefined;
        filebrowserFlashBrowseUrl?: string | undefined;
        filebrowserFlashUploadUrl?: string | undefined;
        filebrowserImageBrowseLinkUrl?: string | undefined;
        filebrowserImageBrowseUrl?: string | undefined;
        filebrowserImageUploadUrl?: string | undefined;
        filebrowserUploadMethod?: string | undefined;
        filebrowserUploadUrl?: string | undefined;
        filebrowserWindowFeatures?: string | undefined;
        filebrowserWindowHeight?: number | string | undefined;
        filebrowserWindowWidth?: number | string | undefined;
        fillEmptyBlocks?: boolean | ((element: htmlParser.element) => boolean) | undefined;
        find_highlight?: config.styleObject | undefined;
        flashAddEmbedTag?: boolean | undefined;
        flashConvertOnEdit?: boolean | undefined;
        flashEmbedTagOnly?: boolean | undefined;
        floatSpaceDockedOffsetX?: number | undefined;
        floatSpaceDockedOffsetY?: number | undefined;
        floatSpacePinnedOffsetX?: number | undefined;
        floatSpacePinnedOffsetY?: number | undefined;
        floatSpacePreferRight?: boolean | undefined;
        fontSize_defaultLabel?: string | undefined;
        fontSize_sizes?: string | undefined;
        fontSize_style?: config.styleObject | undefined;
        font_defaultLabel?: string | undefined;
        font_names?: string | undefined;
        font_style?: config.styleObject | undefined;
        forceEnterMode?: boolean | undefined;
        forcePasteAsPlainText?: boolean | undefined;
        forceSimpleAmpersand?: boolean | undefined;
        format_address?: config.styleObject | undefined;
        format_div?: config.styleObject | undefined;
        format_h1?: config.styleObject | undefined;
        format_h2?: config.styleObject | undefined;
        format_h3?: config.styleObject | undefined;
        format_h4?: config.styleObject | undefined;
        format_h5?: config.styleObject | undefined;
        format_h6?: config.styleObject | undefined;
        format_p?: config.styleObject | undefined;
        format_pre?: config.styleObject | undefined;
        format_tags?: string | undefined;
        fullPage?: boolean | undefined;

        grayt_autoStartup?: boolean | undefined;

        height?: string | number | undefined;
        htmlEncodeOutput?: boolean | undefined;

        ignoreEmptyParagraph?: boolean | undefined;
        image2_alignClasses?: string[] | undefined;
        image2_altRequired?: boolean | undefined;
        image2_captionedClass?: string | undefined;
        image2_disableResizer?: boolean | undefined;
        image2_prefillDimensions?: boolean | undefined;
        imageUploadUrl?: string | undefined;
        image_prefillDimensions?: boolean | undefined;
        image_previewText?: string | undefined;
        image_removeLinkByEmptyUrl?: boolean | undefined;
        indentClasses?: string[] | undefined;
        indentOffset?: number | undefined;
        indentUnit?: string | undefined;

        jqueryOverrideVal?: boolean | undefined;
        justifyClasses?: string[] | undefined;

        keystrokes?: Array<[number, string]> | undefined;

        language?: string | undefined;
        language_list?: string[] | undefined;
        linkJavaScriptLinksAllowed?: boolean | undefined;
        linkShowAdvancedTab?: boolean | undefined;
        linkShowTargetTab?: boolean | undefined;

        magicline_color?: string | undefined;
        magicline_everywhere?: boolean | undefined;
        magicline_holdDistance?: number | undefined;
        magicline_keystrokeNext?: number | undefined;
        magicline_keystrokePrevious?: number | undefined;
        magicline_tabuList?: string[] | undefined;
        magicline_triggerOffset?: number | undefined;
        mathJaxClass?: string | undefined;
        mathJaxLib?: string | undefined;
        menu_groups?: string | undefined;
        menu_subMenuDelay?: number | undefined;

        newpage_html?: string | undefined;
        notification_duration?: number | undefined;

        on?: editor.eventObject | undefined;

        pasteFilter?: string | undefined;
        pasteFromWordCleanupFile?: string | undefined;
        pasteFromWordNumberedHeadingToList?: boolean | undefined;
        pasteFromWordPromptCleanup?: boolean | undefined;
        pasteFromWordRemoveFontStyles?: boolean | undefined;
        pasteFromWordRemoveStyles?: boolean | undefined;
        pasteFromWord_heuristicsEdgeList?: boolean | undefined;
        pasteFromWord_inlineImages?: boolean | undefined;
        plugins?: string | undefined;
        protectedSource?: RegExp[] | undefined;

        readOnly?: boolean | undefined;
        removeButtons?: string | undefined;
        removeDialogTabs?: string | undefined;
        removeFormatAttributes?: string | undefined;
        removeFormatTags?: string | undefined;
        removePlugins?: string | undefined;
        resize_dir?: string | undefined;
        resize_enabled?: boolean | undefined;
        resize_maxHeight?: number | undefined;
        resize_maxWidth?: number | undefined;
        resize_minHeight?: number | undefined;
        resize_minWidth?: number | undefined;

        scayt_autoStartup?: boolean | undefined;
        scayt_contextCommands?: string | undefined;
        scayt_contextMenuItemsOrder?: string | undefined;
        scayt_customDictionaryIds?: string | undefined;
        scayt_customerId?: string | undefined;
        scayt_disableOptionsStorage?: string | string[] | undefined;
        scayt_elementsToIgnore?: string | undefined;
        scayt_handleCheckDirty?: string | undefined;
        scayt_handleUndoRedo?: string | undefined;
        scayt_ignoreAllCapsWords?: boolean | undefined;
        scayt_ignoreDomainNames?: boolean | undefined;
        scayt_ignoreWordsWithMixedCases?: boolean | undefined;
        scayt_ignoreWordsWithNumbers?: boolean | undefined;
        scayt_inlineModeImmediateMarkup?: boolean | undefined;
        scayt_maxSuggestions?: number | undefined;
        scayt_minWordLength?: number | undefined;
        scayt_moreSuggestions?: string | undefined;
        scayt_multiLanguageMode?: boolean | undefined;
        scayt_multiLanguageStyles?: { [key: string]: any } | undefined;
        scayt_sLang?: string | undefined;
        scayt_serviceHost?: string | undefined;
        scayt_servicePath?: string | undefined;
        scayt_servicePort?: string | undefined;
        scayt_serviceProtocol?: string | undefined;
        scayt_srcUrl?: string | undefined;
        scayt_uiTabs?: string | undefined;
        scayt_userDictionaryName?: string | undefined;

        sharedSpaces?: sharedSpace | undefined;
        shiftEnterMode?: number | undefined;
        skin?: string | undefined;
        smiley_columns?: number | undefined;
        smiley_descriptions?: string[] | undefined;
        smiley_images?: string[] | undefined;
        smiley_path?: string | undefined;
        sourceAreaTabSize?: number | undefined;
        specialChars?: Array<string | [string, string]> | undefined;
        startupFocus?: string | boolean | undefined;
        startupMode?: string | undefined;
        startupOutlineBlocks?: boolean | undefined;
        startupShowBorders?: boolean | undefined;
        stylesSet?: string | boolean | config.styleObject[] | undefined;
        stylesheetParser_skipSelectors?: RegExp | undefined;
        stylesheetParser_validSelectors?: RegExp | undefined;

        tabIndex?: number | undefined;
        tabSpaces?: number | undefined;
        templates?: string | undefined;
        templates_files?: { [key: string]: any } | undefined;
        templates_replaceContent?: boolean | undefined;
        title?: string | boolean | undefined;
        toolbar?: string | Array<string | string[] | { name: string, items?: string[] | undefined, groups?: string[] | undefined }> | null | undefined;
        toolbarCanCollapse?: boolean | undefined;
        toolbarGroupCycling?: boolean | undefined;
        toolbarGroups?: Array<toolbarGroups | string> | undefined;
        toolbarLocation?: string | undefined;
        toolbarStartupExpanded?: boolean | undefined;

        uiColor?: string | undefined;
        undoStackSize?: number | undefined;
        uploadUrl?: string | undefined;
        useComputedState?: boolean | undefined;

        width?: string | number | undefined;
        wsc_cmd?: string | undefined;
        wsc_customDictionaryIds?: string | undefined;
        wsc_customLoaderScript?: string | undefined;
        wsc_customerId?: string | undefined;
        wsc_height?: string | undefined;
        wsc_lang?: string | undefined;
        wsc_left?: string | undefined;
        wsc_top?: string | undefined;
        wsc_userDictionaryName?: string | undefined;
        wsc_width?: string | undefined;
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

        static add(name: string, dialogDefinition: string | ((editor: editor) => dialog.DialogDefinition)): void;
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
                disabled?: boolean | undefined;
            }

            interface checkbox extends uiElement {
                default?: string | undefined;
                validate?: (() => boolean) | undefined;
            }

            interface content {
                accessKey?: string | undefined;
                elements?: uiElement[] | undefined;
                id?: string | undefined;
                label?: string | undefined;
                title?: string | undefined;
            }

            interface file extends labeledElement {
                action?: string | undefined;
                size?: string | undefined;
                validate?: (() => boolean) | undefined;
            }

            interface fileButton extends uiElement {
                filebrowser?: string | undefined;
                for?: string | undefined;
                validate?: (() => boolean) | undefined;
            }

            interface hbox extends uiElement {
                children?: ui.dialog.uiElement[] | undefined;
                height?: number | undefined;
                padding?: number | undefined;
                validate?: (() => boolean) | undefined;
                widths?: number[] | undefined;
            }

            interface html extends uiElement {
                html?: string | undefined;
            }

            interface labeledElement extends uiElement {
                controlStyle?: string | undefined;
                inputStyle?: string | undefined;
                labelLayout?: string | undefined;
                labelStyle?: string | undefined;
                widths?: number[] | undefined;
            }

            interface radio extends labeledElement {
                default?: string | undefined;
                items?: string[] | string[][] | undefined;
                validate?: (() => boolean) | undefined;
            }

            interface select extends labeledElement {
                default?: string | undefined;
                items?: string[] | string[][] | undefined;
                multiple?: boolean | undefined;
                size?: number | undefined;
                validate?: (() => boolean) | undefined;
            }

            interface textarea extends labeledElement {
                bidi?: boolean | undefined;
                cols?: number | undefined;
                default?: string | undefined;
                rows?: number | undefined;
                validate?: (() => boolean) | undefined;
            }

            interface textInput extends labeledElement {
                bidi?: boolean | undefined;
                default?: string | undefined;
                maxLength?: number | undefined;
                size?: number | undefined;
                validate?: (() => boolean) | undefined;
            }

            interface uiElement {
                align?: string | undefined;
                className?: string | undefined;
                commit?: ((widget: plugins.widget) => void) | undefined;
                id?: string | undefined;
                label?: string | undefined;
                onHide?: ((elem: ui.dialog.uiElement) => void) | undefined;
                onLoad?: ((elem: ui.dialog.uiElement) => void) | undefined;
                onShow?: ((elem: ui.dialog.uiElement) => void) | undefined;
                requiredContent?: string | { [key: string]: any } | style | undefined;
                setup?: ((widget: plugins.widget) => void) | undefined;
                style?: string | undefined;
                title?: string | undefined;
                type?: string | undefined;
            }

            interface vbox extends uiElement {
                children?: ui.dialog.uiElement[] | undefined;
                expand?: boolean | undefined;
                heights?: number[] | undefined;
                padding?: number | undefined;
                styles?: string | undefined;
                width?: number[] | undefined;
            }
        }

        interface DialogDefinition {
            buttons?: definition.button[] | undefined;
            contents?: definition.content[] | undefined;
            height?: number | undefined;
            minHeight?: number | undefined;
            minWidth?: number | undefined;
            onCancel?: (() => void) | undefined;
            onLoad?: (() => void) | undefined;
            onOk?: (() => void) | undefined;
            onShow?: (() => void) | undefined;
            onHide?: (() => void) | undefined;
            resizable?: number | undefined;
            title?: string | undefined;
            width?: number | undefined;
        }
    }

    class dialogCommand {
        value: any;

        constructor(dialogName: string, ext?: { tabId?: string | undefined });
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

    let dtd: dtdDefinition;

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
        addMenuItem(name: string, definition?: MenuItemDefinition): void;
        addMenuItems(definitions: { [id: string]: MenuItemDefinition }): void;
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
        getMenuItem(name: string): MenuItemDefinition;
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
        setData(data: string, options?: { internal?: boolean | undefined; callback?: (() => void) | undefined; noSnapshot?: boolean | undefined; }): void;
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
            activeEnterModeChange?: ((evt: eventInfo) => void) | undefined;
            activeFilterChange?: ((evt: eventInfo) => void) | undefined;
            afterCommandExec?: ((evt: eventInfo) => void) | undefined;
            afterInsertHtml?: ((evt: eventInfo) => void) | undefined;
            afterPaste?: ((evt: eventInfo) => void) | undefined;
            afterPasteFromWord?: ((evt: eventInfo) => void) | undefined;
            afterSetData?: ((evt: eventInfo) => void) | undefined;
            afterUndoImage?: ((evt: eventInfo) => void) | undefined;
            ariaEditorHelpLabel?: ((evt: eventInfo) => void) | undefined;
            ariaWidget?: ((evt: eventInfo) => void) | undefined;
            autogrow?: ((evt: eventInfo) => void) | undefined;

            beforeCommandExec?: ((evt: eventInfo) => void) | undefined;
            beforeDestroy?: ((evt: eventInfo) => void) | undefined;
            beforeGetData?: ((evt: eventInfo) => void) | undefined;
            beforeModeUnload?: ((evt: eventInfo) => void) | undefined;
            beforeSetMode?: ((evt: eventInfo) => void) | undefined;
            beforeUndoImage?: ((evt: eventInfo) => void) | undefined;
            blur?: ((evt: eventInfo) => void) | undefined;

            change?: ((evt: eventInfo) => void) | undefined;
            configLoaded?: ((evt: eventInfo) => void) | undefined;
            contentDirChanged?: ((evt: eventInfo) => void) | undefined;
            contentDom?: ((evt: eventInfo) => void) | undefined;
            contentDomInvalidated?: ((evt: eventInfo) => void) | undefined;
            contentDomUnload?: ((evt: eventInfo) => void) | undefined;
            customConfigLoaded?: ((evt: eventInfo) => void) | undefined;

            dataFiltered?: ((evt: eventInfo) => void) | undefined;
            dataReady?: ((evt: eventInfo) => void) | undefined;
            destroy?: ((evt: eventInfo) => void) | undefined;
            dialogHide?: ((evt: eventInfo) => void) | undefined;
            dialogShow?: ((evt: eventInfo) => void) | undefined;
            dirChanged?: ((evt: eventInfo) => void) | undefined;
            doubleclick?: ((evt: eventInfo) => void) | undefined;
            dragend?: ((evt: eventInfo) => void) | undefined;
            dragstart?: ((evt: eventInfo) => void) | undefined;
            drop?: ((evt: eventInfo) => void) | undefined;

            elementsPathUpdate?: ((evt: eventInfo) => void) | undefined;

            fileUploadRequest?: ((evt: eventInfo) => void) | undefined;
            fileUploadResponse?: ((evt: eventInfo) => void) | undefined;
            floatingSpaceLayout?: ((evt: eventInfo) => void) | undefined;
            focus?: ((evt: eventInfo) => void) | undefined;

            getData?: ((evt: eventInfo) => void) | undefined;
            getSnapshot?: ((evt: eventInfo) => void) | undefined;

            insertElement?: ((evt: eventInfo) => void) | undefined;
            insertHtml?: ((evt: eventInfo) => void) | undefined;
            insertText?: ((evt: eventInfo) => void) | undefined;
            instanceReady?: ((evt: eventInfo) => void) | undefined;

            key?: ((evt: eventInfo) => void) | undefined;

            langLoaded?: ((evt: eventInfo) => void) | undefined;
            loadSnapshot?: ((evt: eventInfo) => void) | undefined;
            loaded?: ((evt: eventInfo) => void) | undefined;
            lockSnapshot?: ((evt: eventInfo) => void) | undefined;
            maximize?: ((evt: eventInfo) => void) | undefined;
            menuShow?: ((evt: eventInfo) => void) | undefined;
            mode?: ((evt: eventInfo) => void) | undefined;

            notificationHide?: ((evt: eventInfo) => void) | undefined;
            notificationShow?: ((evt: eventInfo) => void) | undefined;
            notificationUpdate?: ((evt: eventInfo) => void) | undefined;

            paste?: ((evt: eventInfo) => void) | undefined;
            pasteFromWord?: ((evt: eventInfo) => void) | undefined;
            pluginsLoaded?: ((evt: eventInfo) => void) | undefined;

            readOnly?: ((evt: eventInfo) => void) | undefined;
            removeFormatCleanup?: ((evt: eventInfo) => void) | undefined;
            required?: ((evt: eventInfo) => void) | undefined;
            resize?: ((evt: eventInfo) => void) | undefined;

            save?: ((evt: eventInfo) => void) | undefined;
            saveSnapshot?: ((evt: eventInfo) => void) | undefined;
            selectionChange?: ((evt: eventInfo) => void) | undefined;
            setData?: ((evt: eventInfo) => void) | undefined;
            stylesSet?: ((evt: eventInfo) => void) | undefined;

            template?: ((evt: eventInfo) => void) | undefined;
            toDataFormat?: ((evt: eventInfo) => void) | undefined;
            toHtml?: ((evt: eventInfo) => void) | undefined;

            unlockSnapshot?: ((evt: eventInfo) => void) | undefined;
            updateSnapshot?: ((evt: eventInfo) => void) | undefined;

            widgetDefinition?: ((evt: eventInfo) => void) | undefined;
        }
    }

    namespace env {
        const air: boolean;
        const chrome: boolean;
        const cssClass: string;
        const edge: boolean;
        const gecko: boolean;
        const hc: boolean;
        const hidpi: boolean;
        const iOS: boolean;
        const ie: boolean;
        const isCompatible: boolean;
        const mac: boolean;
        const needsBrFiller: boolean;
        const needsNbspFiller: boolean;
        const quirks: boolean;
        const safari: boolean;
        const version: number;
        const webkit: boolean;

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
        allowedContent?: filter.allowedContentRules | undefined;
        contentForms?: any;
        contentTransformations?: any;
        name?: string | undefined;
        requiredContent?: string | style | undefined;
        toFeature?: (() => feature) | undefined;
    }

    namespace fileTools {
        const isFileUploadSupported: boolean;

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
            additionalRequestParameters?: any;
            fileToElement?: ((pastedFile: any) => HTMLElement) | undefined;
            loadMethod?: 'load' | 'loadAndUpload' | 'upload' | undefined;
            loaderType?: any;
            onAbort?: (() => boolean) | undefined;
            onError?: (() => boolean) | undefined;
            onLoaded?: (() => boolean) | undefined;
            onUploaded?: (() => boolean) | undefined;
            onUploading?: (() => boolean) | undefined;
            replaceWith?: (() => any) | undefined;
            skipNotifications?: boolean | undefined;
            supportedTypes?: RegExp | undefined;
            uploadUrl?: string | undefined;
        }
    }

    namespace filter {
        type allowedContentRule = string | style | { [key: string]: any };
        type allowedContentRules = allowedContentRule | allowedContentRule[];
        type contentRule = string | style;
        type disallowedContentRules = string | { [key: string]: any };

        interface transformation {
            check?: string | undefined;
            element?: string | style | undefined;
            left?: ((element: htmlParser.element | style) => boolean) | undefined;
            right: (element: htmlParser.element, tools: string | transformationTools) => boolean;
        }

        const transformationTools: transformationTools;

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
        toDataFormat(html: string, options?: string | { context?: string | undefined, filter?: filter | undefined, enterMode?: number | undefined }): string;
        toHtml(data: string, options?: string | htmlDataProcessorOptions): string;
    }

    interface htmlDataProcessorOptions {
        context?: string | undefined;
        fixForBody?: boolean | undefined;
        filter?: filter | undefined;
        dontFilter?: boolean | undefined;
        enterMode?: number | undefined;
        protectedWhitespaces?: boolean | undefined;
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
            writeHtml(writer: basicWriter): void;
        }

        class comment extends node {
            type: number;
            value: string;

            constructor(value: string);
            filter(filter: filter): boolean;
            writeHtml(writer: basicWriter, filter?: filter): void;
        }

        class cssStyle {
            constructor(elementOrStyleText: element | string);
            populate(obj: element | dom.element | { [key: string]: any }): void;
        }

        class element extends node {
            attributes: { [name: string]: string };
            children: node[];
            name: string;
            type: number;

            constructor(name: string, attributes?: { [name: string]: string } | null);
            add(node: node, index?: number): void;
            addClass(className: string): void;
            clone(): element;
            filter(filter: filter): boolean;
            filterChildren(filter: filter): void;
            find(criteria: string | ((el: node) => boolean), recursive?: boolean): node[];
            forEach(callback: (node: node) => void | false, type?: number, skipRoot?: boolean): void;
            getFirst(condition: string | { [key: string]: string } | ((node: node) => boolean)): node;
            getHtml(): string;
            getOuterHtml(): string;
            hasClass(className: string): boolean;
            removeClass(className: string): void;
            replaceWithChildren(): void;
            setHtml(html: string): void;
            split(index: number): element;
            writeChildrenHtml(writer: basicWriter, filter?: filter): void;
            writeHtml(writer: basicWriter, filter?: filter): void;
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
            addRules(rules: filterRulesDefinition, options?: number | { priority?: number | undefined; applyToAll?: boolean | undefined; }): void;
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
            exec(currentValue: node | fragment | string): node | fragment | string;
            execOnName(currentName: string): string;
            findIndex(priority: number): number;
        }

        class fragment {
            children: node[];
            parent: fragment;
            readonly type: number;

            constructor();

            add(node: node, index?: number): void;
            filter(filter: filter): void;
            filterChildren(filter: filter, filterRoot?: boolean): void;
            forEach(callback: (node: node) => void | false, type?: number, skipRoot?: boolean): void;
            writeChildrenHtml(writer: basicWriter, filter?: filter, filterRoot?: boolean): void;
            writeHtml(writer: basicWriter, filter?: filter): void;

            static fromBBCode(source: string): fragment;
            static fromHtml(fragmentHtml: string, parent?: element | string, fixingBlock?: string | boolean): fragment | element;
        }

        class node {
            constructor();
            getAscendant(condition: string | { [name: string]: string } | ((node: element) => boolean)): element;
            getIndex(): number;
            insertAfter(node: node): void;
            insertBefore(node: node): void;
            remove(): node;
            replaceWith(node: node): void;
            wrapWith(wrapper: element): element;
        }

        type rule = ((value: node | fragment | string) => boolean) | [string, string];

        interface ruleOptions {
            applyToAll?: boolean | undefined;
            excludeNestedEditable?: boolean | undefined;
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
        const languages: { [code: string]: number };
        const rtl: { [code: string]: number };

        function detect(defaultLanguage: string, probeLanguage?: string): string;
        function load(languageCode: string, defaultLanguage: string, callback: (code: string, entries: any) => void): void;
    }

    namespace loader {
        const loadedScripts: string[];
        const scripts: string[];

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
        hidpi?: boolean | undefined;
        lang?: string | string[] | undefined;
        requires?: string | string[] | undefined;
        icons?: string | undefined;

        afterInit?(editor: editor): any;
        beforeInit?(editor: editor): any;
        init?(editor: editor): void;
        isSupportedEnvironment?(editor: editor): boolean;
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
                cssSelector?: string | undefined;
                priority?: number | undefined;
                widgets?: string[] | string | undefined;

                refresh?: ((editor: editor, path: dom.elementPath, selection: dom.selection) => dom.element) | undefined;
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
            let breakOnElements: string[];
            let elementsForInlineTransform: string[];
            let excludedAttributes: string[];
            let excludedAttributesFromInlineTransform: string[];
            let inlineBoundary: string[];
            let preservedElements: string[];

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
            const featuresDefinitions: { [key: string]: string };

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
                duration?: number | undefined;
                progress?: number | undefined;
                type?: type | undefined;
            }

            interface options extends optionsBase {
                message: string;
            }

            interface updateOptions extends optionsBase {
                message?: string | undefined;
                important?: boolean | undefined;
            }

            type type = 'info' | 'warning' | 'success' | 'progress';
        }

        class notificationAggregator extends event {
            readonly editor: editor;
            readonly notification: notification;

            constructor(editor: editor, message: string, singularMessage?: string);
            createTask(options?: { weight?: number | undefined }): notificationAggregator.task;
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
            const WRAPPER_CLASS_PREFIX: string;

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
                    allowedContent?: filter.allowedContentRules | undefined;
                    disallowedContent?: filter.disallowedContentRules | undefined;
                    pathName?: string | undefined;
                    selector?: string | undefined;
                }
            }

            class nestedEditable extends dom.element {
                readonly editor: editor;
                readonly enterMode: number;
                readonly filter: filter;
                readonly shiftEnterMode: number;

                constructor(editor: editor, element: dom.element, config: { filter?: filter | undefined });
                getData(): string;
                setData(data: string): void;
            }

            interface definition extends feature {
                button?: string | undefined;
                data?: ((evt: eventInfo) => void) | undefined;
                defaults?: { [key: string]: any } | undefined;
                dialog?: string | undefined;
                downcast?: string | ((element: htmlParser.element) => void) | undefined;
                downcasts?: { [key: string]: any } | undefined;
                draggable?: boolean | undefined;
                edit?: (() => void) | undefined;
                editables?: { [key: string]: any } | undefined;
                getLabel?: (() => any) | undefined;
                init?: (() => void) | undefined;
                inline?: boolean | undefined;
                insert?: (() => void) | undefined;
                mask?: boolean | undefined;
                parts?: { [key: string]: any } | undefined;
                pathName?: string | undefined;
                styleToAllowedContentRules?: ((style: style) => filter.allowedContentRules) | undefined;
                styleableElements?: string | undefined;
                template?: string | template | undefined;
                upcast?: string | ((element: htmlParser.element, data: any) => boolean) | undefined;
                upcastPriority?: number | undefined;
                upcasts?: { [key: string]: any } | undefined;
            }

            class repository extends event {
                readonly editor: editor;
                readonly focused: widget;
                readonly instances: { [id: string]: widget };
                readonly registered: { [name: string]: definition };
                readonly selected: widget[];
                readonly widgetHoldingFocusedEditable: widget;

                add(name: string, widgetDef: definition): void;
                addUpcastCallback(callback: (element: htmlParser.element, data: any) => boolean): void;
                checkSelection(): void;
                checkWidgets(options?: { initOnlyNew?: boolean | undefined; focusInited?: boolean | undefined }): void;
                del(widget: widget): void;
                destroy(widget: widget, offline?: boolean): void;
                destroyAll(offline?: boolean): void;
                finalizeCreation(container: any): void;
                getByElement(element: any, checkWrapperOnly: boolean): widget;
                initOn(element: dom.element, widgetDef?: string | definition, startupData?: { [key: string]: any }): widget;
                initOnAll(container?: dom.element): widget[];
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
            readonly definition: widget.definition;
            readonly editor: editor;
            readonly element: dom.element;
            readonly focusedEditable: widget.nestedEditable;
            readonly id: number;
            readonly inited: boolean;
            readonly ready: boolean;
            readonly repository: widget.repository;
            readonly wrapper: dom.element;

            constructor(widgetsRepo: widget.repository, id: number, element: dom.element, widgetDef: widget.definition, starupData?: any);

            addClass(className: string): void;
            applyStyle(style: style): void;
            checkStyleActive(style: style): boolean;
            destroy(offline?: boolean): void;
            destroyEditable(editableName: string, offline?: boolean): void;
            edit(): boolean;
            focus(): void;
            getClasses(): any;
            hasClass(className: string, Whether: boolean): void;
            initEditable(editableName: string, definition: widget.nestedEditable.definition): boolean;
            isInited(): boolean;
            isReady(): boolean;
            removeClass(className: string): void;
            removeStyle(style: style): void;
            setData(keyOrData: any, value: any): widget;
            setFocused(selected: boolean): widget;
            setSelected(selected: boolean): widget;
            updateDragHandlerPosition(): void;
        }

        function add(name: string, definition?: pluginDefinition): void;
        function addExternal(name: string, path: string, fileName?: string): void;
        function get(name: string): any;
        function getFilePath(name: string): string;
        function getPath(name: string): string;
        function load(name: string, callback: (plugins: string[]) => void, scope?: { [key: string]: any }): void;
        function setLang(pluginName: string, languageCode: string, languageEntries: any): void;
        const registered: { [key: string]: pluginDefinition };
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
        const icons: { [name: string]: { path: string } };
        // tslint:disable-next-line:no-duplicate-variable
        let name: string;
        let ua: { [name: string]: any };
        let ua_dialog: string;
        let ua_editor: string;

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
            attributes?: { [att: string]: string } | undefined;
            element?: string | undefined;
            name?: string | undefined;
            styles?: { [att: string]: string } | undefined;
            type?: string | number | undefined;
        }

        interface customHandler {
            type: string | number;
            setup?: ((style: definition) => void) | undefined;
            assignedTo?: number | undefined;
        }
    }

    class style {
        alwaysRemoveElement: boolean;
        includeReadonly: boolean;
        constructor(styleDefinition: style.definition, variableValues?: Record<string, string>);
        apply(editor: editor): void;
        applyToObject(element: dom.element, editor: editor): void;
        applyToRange(range: dom.range, editor: editor): void;
        buildPreview(label?: string): string;
        checkActive(elementPath: dom.elementPath, editor: editor): boolean;
        checkApplicable(elementPath: dom.elementPath, editor: editor, filter?: filter): boolean;
        checkElementMatch(element: dom.element, fullMatch: boolean, editor: editor): boolean;
        checkElementRemovable(element: dom.element, fullMatch: boolean, editor: editor): boolean;
        getDefinition(): style.definition;
        remove(editor: editor): void;
        removeFromRange(range: dom.range, editor: editor): void;
        toAllowedContentRules(editor?: editor): filter.allowedContentRules;
    }

    class styleCommand {
        constructor(style: style, ext?: any);
        exec(editor: editor): void;
    }

    const stylesSet: resourceManager;

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
        function defer<T extends ((...args: any[]) => any)>(fn: T, ...args: Parameters<T>): T;
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
        function isArray(object: any): object is unknown[];
        function isEmpty(object: { [key: string]: any }): boolean;
        function keystrokeToArray(lang: { [key: string]: any }, keystroke: number): { display: string[], aria: string[] };
        function keystrokeToString(lang: { [key: string]: any }, keystroke: number): { display: string, aria: string };
        function ltrim(str: string): string;
        function normalizeCssText(styleText: string, nativeNormalize: boolean): string;
        function normalizeHex(styleText: string): string;
        function objectCompare(left: { [key: string]: any }, right: { [key: string]: any }, onlyLef?: boolean): boolean;
        function objectKeys(obj: { [key: string]: any }): string[];
        function override<T extends ((...args: any[]) => any)>(originalFunction: T, functionBuilder: (originalFunction: T) => T): T;
        function parseCssText(styleText: string, normalize?: boolean, nativeNormalize?: boolean): { [key: string]: any };
        function prototypedCopy(source: { [key: string]: any }): { [key: string]: any };
        function removeFunction(ref: number): void;
        function repeat(str: string, times: number): string;
        function rtrim(str: string): string;
        function search<T>(array: T[], value: T | ((element: T) => boolean)): T;
        function setCookie(name: string, value: string): void;
        function setTimeout(func: (...args: any[]) => void, milliseconds?: number, scope?: { [key: string]: any }, args?: any, ownerWindow?: Window): number;
        function transformPlainTextToHtml(text: string, etnerMode: number): string;
        function trim(str: string): string;
        function tryThese(...fn: Array<(...args: any[]) => any>): any;
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
                    disabled?: boolean | undefined;
                }

                interface checkbox {
                    checked?: boolean | undefined;
                    validate?: (() => boolean) | undefined;
                    label?: string | undefined;
                }

                interface fieldSet {
                    label?: string | undefined;
                    children: any[];
                }

                interface file {
                    validate?: (() => boolean) | undefined;
                }

                interface fileButton {
                    for: string;
                    validate?: (() => boolean) | undefined;
                }

                interface hbox {
                    widths?: string[] | undefined;
                    height?: string | undefined;
                    padding?: string | undefined;
                    align?: string | undefined;
                }

                interface html {
                    html: string;
                }

                interface iframeElement {
                    src: string;
                    width: string;
                    height: string;
                    onContentLoad?: (() => void) | undefined;
                }

                interface labeledElement {
                    label: string;
                    labelLayout?: 'horizontal' | 'vertical' | undefined;
                    widths?: [string, string] | undefined;
                    role?: string | undefined;
                    includeLabel?: boolean | undefined;
                }

                interface radio {
                    default: any;
                    validate?: (() => boolean) | undefined;
                    items: Array<[string, string] | [string]>;
                }

                interface select {
                    default: any;
                    validate?: (() => boolean) | undefined;
                    items: Array<[string, string] | [string]>;
                    multiple?: boolean | undefined;
                    size?: number | undefined;
                }

                interface textarea {
                    rows?: number | undefined;
                    cols?: number | undefined;
                    default?: string | undefined;
                    validate?: (() => boolean) | undefined;
                }

                interface textInput {
                    default?: string | undefined;
                    validate?: (() => boolean) | undefined;
                    maxLength?: number | undefined;
                    size?: string | undefined;
                }

                interface uiElement {
                    id: string;
                    type: number;
                    title?: string | undefined;
                    hidden?: boolean | undefined;
                    className?: string | undefined;
                    style?: string | undefined;
                    accessKey?: string | undefined;
                }

                interface vbox {
                    width?: string | undefined;
                    heights?: string[] | undefined;
                    align?: string | undefined;
                    padding?: string | undefined;
                    expand?: boolean | undefined;
                }
            }

            class fieldset extends uiElement {
                constructor(dialog: dialog, childObjList: any[], childHtmlList: any[], htmlList: any[], elementDefinition: definitions.fieldSet);
            }

            class file extends labeledElement {
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

                getChild(indices: number): uiElement;
                getChild(indices: number[]): uiElement[];
            }

            class html extends uiElement {
                constructor(dialog: dialog, elementDefinition: definitions.html, htmlList: any[]);
            }

            class iframeElement extends uiElement {}

            class labeledElement extends uiElement {
                constructor(dialog: dialog, elementDefinition: definitions.labeledElement, htmlList: any[], contentHtml: () => string);

                getLabel(): string;
                setlabel(label: string): labeledElement;
            }

            class radio extends labeledElement {
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

            class textInput extends labeledElement {
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
                focus(): uiElement | undefined;
                getDialog(): dialog;
                getElement(): dom.element;
                getInputElement(): dom.element;
                getValue(): any;
                isChanged(): boolean;
                isEnabled(): boolean;
                isFocusable(): boolean;
                isVisible(): boolean;
                // tslint:disable-next-line:no-unnecessary-qualifier
                registerEvents(definition: CKEDITOR.dialog.definition.uiElement): uiElement;
                selectParentTab(): uiElement;
                setValue(value: any, noChangeEvent: boolean): uiElement | undefined;
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
            attach(element: dom.element, options?: dom.element | boolean | { focusElement?: dom.element | boolean | undefined, show?: boolean | undefined }): void;
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
                content?: string | undefined;
                title?: string | undefined;
            }

            interface templates {
                close?: template | undefined;
                content?: template | undefined;
                panel?: template | undefined;
                title?: template | undefined;
                triangle?: template | undefined;
                triangleInner?: template | undefined;
                triangleOuter?: template | undefined;
            }

            interface templateDefinitions {
                close?: string | undefined;
                content?: string | undefined;
                panel?: string | undefined;
                title?: string | undefined;
                triangle?: string | undefined;
                triangleInner?: string | undefined;
                triangleOuter?: string | undefined;
            }

            interface rect {
                height?: number | undefined;
                left?: number | undefined;
                top?: number | undefined;
                visible?: boolean | undefined;
                width?: number | undefined;
            }

            interface parts {
                close?: dom.element | undefined;
                content?: dom.element | undefined;
                panel?: dom.element | undefined;
                title?: dom.element | undefined;
                triangle?: dom.element | undefined;
                triangleInner?: dom.element | undefined;
                triangleOuter?: dom.element | undefined;
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
        name?: string | undefined;
        groups?: string[] | undefined;
    }

    namespace config {
        interface styleObject {
            name?: string | undefined;
            element: string;
            attributes?: { [key: string]: any } | undefined;
            styles?: { [key: string]: any } | undefined;
            overrides?: { [key: string]: any } | undefined;
        }
    }

    interface sharedSpace {
        top?: string | HTMLElement | null | undefined;
        bottom?: string | HTMLElement | null | undefined;
    }

    interface MenuItemDefinition {
        label: string;
        command: string;
        icon: string;
        group: string;
        order: number;
    }

    interface buttonDefinition {
        icon?: string | undefined;
        iconOffset?: number | undefined;
        label: string;
        command: string;
        toolbar: string;
    }
}
