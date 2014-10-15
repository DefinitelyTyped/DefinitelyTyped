// Type definitions for CKEditor
// Project: http://ckeditor.com/
// Definitions by: Ondrej Sevcik <https://github.com/ondrejsevcik/>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

// WORK-IN-PROGRESS: Any contribution support welcomed.
// See https://github.com/borisyankov/DefinitelyTyped/issues/1827 for more informations.
declare module CKEDITOR {

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
    var SELECTION_ELEMENT: number;
    var SELECTION_NONE: number;
    var SELECTION_TEXT: number;
    var SHIFT: number;
    var SHRINK_ELEMENT: number;
    var SHRINK_TEXT: number;
    var START: number;
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
    var instances: editor[];
    var loadFullCoreTimeout: number;
    var revision: string;
    var rnd: number;
    var status: string;
    var timestamp: string;
    var version: string;


    // Methods
    function add(editor: editor): void;
    function addCss(css: string): void;
    function addTemplate(name: string, source: string): template;
    function appendTo(element: string, config?: config, data?: string): editor;
    function appendTo(element: HTMLTextAreaElement, config?: config, data?: string): editor;
    function domReady(): void;
    function editorConfig(config: config): void;
    function getCss(): string;
    function getTemplate(name: string): template;
    function getUrl(resource: string): string;
    function inline(element: string, instanceConfig?: config): editor;
    function inline(element: HTMLTextAreaElement, instanceConfig?: config): editor;
    function inlineAll(): void;
    function loadFullCore(): void;
    function replace(element: string, config?: config): editor;
    function replace(element: HTMLTextAreaElement, config?: config): editor;
    function replaceAll(className?: string): void;
    function replaceAll(assertionFunction: (textarea: HTMLTextAreaElement, config: config) => boolean): void;


    module dom {

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
            block: element;
            blockLimit: element;
            root: element;
            elements: element[];
            compare(otherPath: elementPath): boolean;
            contains(query: string, excludeRoot: boolean, fromTop: boolean): element;
            contains(query: string[], excludeRoot: boolean, fromTop: boolean): element;
            contains(query: (element: element) => boolean, excludeRoot: boolean, fromTop: boolean): element;
            contains(query: Object, excludeRoot: boolean, fromTop: boolean): element;
            contains(query: element, excludeRoot: boolean, fromTop: boolean): element;
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
            collapse(toStart?: boolean): Boolean;
            cloneContents(): documentFragment;
            deleteContents(mergeThen?: boolean): void;
            extractContents(mergeThen?: boolean): documentFragment;
            createBookmark(serializable: boolean): Object;
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
            enforceRealBlocks: Boolean;
            enlargeBr: Boolean;
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


    module ajax {

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


    interface focusManager {

    }

    interface keystrokeHandler {

    }


    interface config {
        startupMode?: string;
        removeButtons?: string;
        toolbar?: any;
        skin?: string;
        language?: string;
        plugins?: string;
        font_names?: string;
        font_defaultLabel?: string;
        fontSize_sizes?: string;
        fontSize_defaultLabel?: string;
        colorButton_enableMore?: boolean;
        colorButton_colors?: string;
        startupFocus?: boolean;
        on?: any;
    }


    interface feature {

    }


    interface style {

    }


    interface editable {

    }


    class menu {
        constructor();
        add(item: any): void;
        addListener(listenerFn: (startElement: dom.element, selection: dom.selection, path: dom.elementPath) => any): void;
        hide(returnFocus?: boolean): void;
        removeAll(): void;
        show(offsetParent: dom.element, corner?: number, offsetX?: number, offsetY?: number): void;
    }


    module plugins {

        class contextMenu extends menu {
            constructor(editor: editor);
            addTarget(element: dom.element, nativeContextMenuOnCtrl?: boolean): void;
            open(offsetParent: dom.element, corner?: number, offsetX?: number, offsetY?: number): void;
        }


        module link {
            var emptyAnchorFix: boolean;
            var fakeAnchor: boolean;
            var synAnchorSelector: boolean;
            function getEditorAnchors(editor: editor): dom.element[];
            function getSelectedLink(editor: editor): dom.elementPath;
            function tryRestoreFakeAnchor(editor: editor, element: dom.element): dom.element;
        }


        module widget {
            class repository {

            }
        }

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
        plugins: Object;
        readOnly: boolean;
        shiftEnterMode: number;
        status: string;
        tabIndex: number;
        templates: Object;
        title: any;
        toolbar: Object;
        ui: ui;
        widgets: plugins.widget.repository;
        window: dom.window;
        constructor(instanceConfig?: Object, element?: dom.element, mode?: number);
        addCommand(commandName: string, commandDefinition: commandDefinition): void;
        addFeature(feature: feature): boolean;
        addMenuGroup(name: string, order?: number): void;
        addMenuItem(name: string, definition?: any): void;
        addMenuItems(definitions: any[]): void;
        addMode(mode: string, exec: () => void): void;
        addRemoveFormatFilter(func: Function): void;
        applyStyle(style: style): void;
        attachStyleStateChange(style: style, callback: Function): void;
        checkDirty(): boolean;
        createFakeElement(realElement: Object, className: Object, realElementType: Object, isResizable: Object): void;
        createFakeParserElement(realElement: Object, className: Object, realElementType: Object, isResizable: Object): void;
        createRange(): dom.range;
        destroy(noUpdate?: boolean): void;
        editable(elementOrEditable: dom.element): void;
        editable(elementOrEditable: editable): void;
        elementPath(startNode?: dom.node): dom.elementPath;
        execCommand(commandName: string, data?: Object): boolean;
        focus(): void;
        forceNextSelectionCheck(): void;
        getClipboardData(options: Object, callback: Function): void;
        getColorFromDialog(callback: Function, scope?: Object): void;
        getCommand(commandName: string): command;
        getData(noEvents: Object): string;
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
        setData(data: string, callback: Function, internal: boolean): void;
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


    class filter {

    }


    interface template {

    }


    interface dataProcessor {
        toDataFormat(html: string, fixForBody: string): void;
        toHtml(data: string, fixForBody?: string): void;
    }


    class event {
        constructor();
        useCapture: boolean;
        capture(): void;
        define(name: string, meta: Object): void;
        fire(eventName: string, data?: Object, editor?: editor): any;
        fireOnce(eventName: string, data?: Object, editor?: editor): any;
        hasListeners(eventName: string): boolean;
        on(eventName: string, listenerFunction: (eventInfo: eventInfo) => void, scopeObj?: Object, listenerData?: Object, priority?: number): void;
        once(eventName: string, listenerFunction: (eventInfo: eventInfo) => void, scopeObj?: Object, listenerData?: Object, priority?: number): void;
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
        refresh? (editor: editor, path: dom.elementPath): void;
    }


    class dtd {

    }


    class ui extends event {
        constructor(editor: editor);
        add(name: string, type: Object, definition: Object): void;
        addButton(name: string, definition: dialog.definition.button): void;
        addHandler(type: Object, handler: Object): void;
    }


    module dialog {

        module definition {

            interface button extends uiElement {
                disabled?: boolean;
                label?: string;
            }


            interface uiElement {
                align?: string;
                className?: string;
                commit?: Function;
                id?: string;
                onHide?: Function;
                onLoad?: Function;
                requiredcontent?: any;
                setup?: Function;
                style?: string;
                title?: string;
                type?: string;
            }

        }

    }


    module htmlParser {

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
            elementsRules: Object;
            attributesRules: Object;
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
            exec(currentValue: Object): Object;
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
            writeHtml(writer: basicWriter, filter: filter): void;
        }


        class element extends node {
            constructor(name: string, attributes: Object);
            name: string;
            attributes: Object;
            children: Object[];
            type: number;
            add(node: node): number;
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
            children: Object[];
            parent: Object;
            type: number;
            fromHtml(fragmentHtml: string, parent?: element, fixingBlock?: string): void;
            fromHtml(fragmentHtml: string, parent?: string, fixingBlock?: string): void;
            fromHtml(fragmentHtml: string, parent?: element, fixingBlock?: boolean): void;
            fromHtml(fragmentHtml: string, parent?: string, fixingBlock?: boolean): void;
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


    interface dialog {
        addFocusable(element: CKEDITOR.dom.element, index: number): void;
    }

}