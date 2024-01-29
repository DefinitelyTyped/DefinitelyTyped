declare namespace CKEDITOR {
    interface CKEditorStatic {
        readonly dom: domStatic;
    }

    interface domStatic {
        comment: { new(comment: string | Node, ownerDocument?: dom.document): dom.comment };
        document: { new(domDocument: Document): dom.document };
        documentFragment: { new<T extends Event | EventTarget = Node>(nodeOrDoc: T): dom.documentFragment<T> };
        domObject: { new<T extends Event | EventTarget = Node>(nativeDomObject: T): dom.domObject<T> };
        element: {
            new(element: string | HTMLElement, ownerDocument?: dom.document): dom.element;
            // static method
            clearAllMarkers(database: unknown): unknown;

            clearMarkers(database: unknown, element: dom.element, removeFromDatabase: boolean): void;

            createFromHtml(html: string): dom.element;

            get(element: string | HTMLElement | dom.element): dom.element;

            setMarker(database: unknown, element: dom.element, name: string, value: unknown): dom.element;
        };
        elementPath: { new(startNode: dom.element, root?: dom.element): dom.elementPath };
        event: {
            new(domEvent: Event | EventTarget): dom.event<Event | EventTarget, dom.node<Event | EventTarget>>;
        };
        iterator: { new(range: dom.range): dom.iterator };
        node: { new(domNode: Event | EventTarget): dom.node<Event | EventTarget> };
        nodeList: { new(nativeList: NodeList): dom.nodeList<Event | EventTarget> };
        range: {
            new(root: dom.element | dom.document): dom.range;
            mergeRanges(ranges: dom.range[]): dom.range[];
        };
        rangeList: { new(ranges?: dom.range | dom.range[]): dom.rangeList };
        selection: { new(target: dom.document | dom.element | dom.selection): dom.selection };
        text: { new(text: Text | string, ownerDocument?: dom.document): dom.text };
        walker: {
            new(range: dom.range): dom.walker;
            validEmptyBlockContainers: { [key: string]: unknown };
            blockBoundary(customNodeNames: unknown): (node: dom.node) => boolean;

            bogus(isReject?: boolean): (node: dom.node) => boolean;

            bookmark(contentOnly?: boolean, isReject?: boolean): (node: dom.node) => boolean;

            editable(isReject?: boolean): (node: dom.node) => boolean;

            empty(isReject?: boolean): (node: dom.node) => boolean;

            ignored(isReject?: boolean): (node: dom.node) => boolean;

            invisible(isReject?: boolean): (node: dom.node) => boolean;

            listItemBoundary(): (node: dom.node) => boolean;

            nodeType(type: number, isReject?: boolean): (node: dom.node) => boolean;

            temp(isReject?: boolean): (node: dom.node) => boolean;

            whitespaces(isReject?: boolean): (node: dom.node) => boolean;
        };
        window: { new(domWindow: Window): dom.window };
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

        interface shrinkOptions {
            shrinkOnBlockBoundary?: boolean | undefined;
            skipBogus?: boolean | undefined;
        }

        interface rangeListIterator {
            getNextRange(mergeConsequent?: boolean): range;
        }

        interface position {
            x: number;
            y: number;
        }

        interface widthAndHeight {
            width: number;
            height: number;
        }

        /** https://ckeditor.com/docs/ckeditor4/latest/api/CKEDITOR_dom_comment.html */
        interface comment<T extends Event | EventTarget = Node> extends node<T> {
            readonly type: number;
            getOuterHtml(): string;
        }

        /** https://ckeditor.com/docs/ckeditor4/latest/api/CKEDITOR_dom_document.html */
        interface document extends domObject<Document> {
            readonly type: number;

            appendStyleSheet(cssFileUrl: string): void;

            appendStyleText(cssStyleText: string): CSSStyleSheet;

            createElement(
                name: string,
                attribsAndStyles?: {
                    attributes?: { [key: string]: string } | undefined;
                    styles?: { [key: string]: string } | undefined;
                },
            ): element;

            createText(text: string): element;

            find(selector: string): nodeList<HTMLElement>;

            findOne(selector: string): element;

            focus(): void;

            getActive(): element;

            getBody(): element;

            getByAddress(address: unknown[], normalized?: boolean): node;

            getById(elementId: string): element;

            getDocumentElement(): element;

            getElementsByTag(tagName: string): nodeList<HTMLElement>;

            getHead(): element;

            getSelection(): selection;

            getWindow(): window;

            write(html: string): void;
        }

        /** https://ckeditor.com/docs/ckeditor4/latest/api/CKEDITOR_dom_documentFragment.html */
        interface documentFragment<T extends Event | EventTarget = Node> extends node<T> {
            readonly type: number;

            insertAfterNode(node: node): void;
        }

        /** https://ckeditor.com/docs/ckeditor4/latest/api/CKEDITOR_dom_domObject.html */
        interface domObject<T extends Event | EventTarget = Node> extends CKEDITOR.event {
            readonly $: T;

            clearCustomData(): void;

            equals(object: unknown): boolean;

            getCustomData(key: string): unknown;

            getPrivate(): { [key: string]: unknown };

            getUniqueId(): number;

            removeAllListeners(): void;

            removeCustomData(key: string): unknown;

            setCustomData(key: string, value: unknown): domObject;
        }

        /** https://ckeditor.com/docs/ckeditor4/latest/api/CKEDITOR_dom_element.html */
        interface element extends node<HTMLElement> {
            readonly type: number;

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

            find(selector: string): nodeList<HTMLElement>;

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
            is(name: unknown): boolean;

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
        }

        /** https://ckeditor.com/docs/ckeditor4/latest/api/CKEDITOR_dom_elementPath.html */
        interface elementPath {
            readonly block: element;
            readonly blockLimit: element;
            readonly elements: element[];
            readonly lastElement: element;
            readonly root: element;

            compare(otherPath: elementPath): boolean;

            contains(
                query: string | string[] | ((element: element) => boolean) | { [key: string]: unknown } | element,
                excludeRoot?: boolean,
                fromTop?: boolean,
            ): element;

            direction(): "ltr" | "rtl";

            isContextFor(tag: string): boolean;
        }

        /** https://ckeditor.com/docs/ckeditor4/latest/api/CKEDITOR_dom_event.html */
        interface event<T extends Event | EventTarget = Event, U extends node<Event | EventTarget> = node<T>> {
            readonly $: T;

            getKey(): number;

            getKeystroke(): number;

            getPageOffset(): position;

            preventDefault(stopPropagation?: boolean): void;

            stopPropagation(): void;

            getTarget(): U;

            getPhase(): number;

            on(
                eventName: string,
                listenerFunction: (
                    eventInfo: eventInfo<
                        | domObject<Event | EventTarget>
                        | event<Event | EventTarget>
                        | eventData
                    >,
                ) => void,
                scopeObj?: unknown,
                listenerData?: unknown,
                priority?: number,
            ): { removeListener: () => void };
        }

        /** https://ckeditor.com/docs/ckeditor4/latest/api/CKEDITOR_dom_iterator.html */
        interface iterator {
            readonly activeFilter: filter;
            enforceRealBlocks: boolean;
            enlargeBr: boolean;
            readonly filter: filter;
            forceBrBreak: boolean;
            readonly range: range;

            getNextParagraph(blockTag?: string): element;
        }

        /** https://ckeditor.com/docs/ckeditor4/latest/api/CKEDITOR_dom_node.html */
        interface node<T extends Event | EventTarget = Node> extends domObject<T> {
            type: number;

            appendTo(element: element): element;

            clone(includeChildren: boolean, cloneId: boolean): node<T>;

            hasPrevious(): boolean;

            hasNext(): boolean;

            insertAfter(node: node<Event | EventTarget>): node<Event | EventTarget>;

            insertBefore(node: node<Event | EventTarget>): node<Event | EventTarget>;

            insertBeforeMe(node: node<Event | EventTarget>): node<Event | EventTarget>;

            getAddress(normalized?: boolean): number[];

            getAscendant(reference: string, includeSelf?: boolean): node<Event | EventTarget>;

            getCommonAncestor(node: node<Event | EventTarget>): void;

            getDocument(): document;

            getIndex(normalized?: boolean): number;

            getNext(evaluator?: (node: node<Event | EventTarget>) => boolean): node<Event | EventTarget>;

            getNextSourceNode(
                startFromSibling?: boolean,
                nodeType?: number,
                guard?: node<Event | EventTarget> | ((node: node<Event | EventTarget>) => boolean),
            ): node<Event | EventTarget>;

            getParent(allowFragmentParent?: boolean): element;

            getParents(closerFirst?: boolean): node[];

            getPosition(otherNode: node): void;

            getPrevious(evaluator?: (node: node) => boolean): node;

            getPreviousSourceNode(
                startFromSibling?: boolean,
                nodeType?: number,
                guard?: node<Event | EventTarget> | ((node: node<Event | EventTarget>) => boolean),
            ): node<Event | EventTarget>;

            hasAscendant(name: string, includeSelf: boolean): boolean;

            remove(preserveChildren?: boolean): node;

            replace(nodeToReplace: node): void;

            trim(): void;

            ltrim(): void;

            rtrim(): void;

            isReadOnly(): boolean;
        }

        /** https://ckeditor.com/docs/ckeditor4/latest/api/CKEDITOR_dom_nodeList.html */
        interface nodeList<T extends Event | EventTarget = Node> {
            count(): number;

            getItem(index: number): node<T>;

            toArray(): Array<node<T>>;
        }

        /** https://ckeditor.com/docs/ckeditor4/latest/api/CKEDITOR_dom_range.html */
        interface range {
            readonly collapsed: boolean;
            readonly document: document;
            readonly endContainer: element | text;
            readonly endOffset: number;
            readonly root: element;
            readonly startContainer: element | text;
            readonly startOffset: number;

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

            getBoundaryNodes(): { startNode: node; endNode: node };

            getCommonAncestor(includeSelf?: boolean, ignoreTextNode?: boolean): element;

            getEnclosedNode(): node;

            getNextEditableNode(): element | text;

            getNextNode(
                evaluator?: (element: element) => boolean,
                guard?: (element: element) => boolean,
                boundary?: element,
            ): element;

            getPreviousEditableNode(): element | text;

            getPreviousNode(
                evaluator?: (element: element) => boolean,
                guard?: (element: element) => boolean,
                boundary?: element,
            ): element;

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
        }

        /** https://ckeditor.com/docs/ckeditor4/latest/api/CKEDITOR_dom_rangeList.html */
        interface rangeList {
            createBokmarks(serializable?: boolean): bookmark[];

            createBookmarks2(normalized?: boolean): bookmark2[];

            createIterator(): rangeListIterator;

            moveToBookmarks(bookmarks: bookmark[]): void;
        }

        /** https://ckeditor.com/docs/ckeditor4/latest/api/CKEDITOR_dom_rect.html */
        interface rect {
            bottom: number;
            height: number;
            left: number;
            right: number;
            top: number;
            width: number;
            x: number;
            y: number;
        }

        /** https://ckeditor.com/docs/ckeditor4/latest/api/CKEDITOR_dom_selection.html */
        interface selection {
            readonly FILLING_CHAR_SEQUENCE: string;
            readonly document: document;
            readonly isFake: boolean;
            readonly isLocked: boolean;
            readonly rev: number;
            readonly root: element;

            createBookmarks(serializable: unknown): bookmark[];

            createBookmarks2(normalized: unknown): bookmark2[];

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

        /** https://ckeditor.com/docs/ckeditor4/latest/api/CKEDITOR_dom_text.html */
        interface text extends node<Text> {
            readonly type: number;

            getLength(): number;

            getText(): string;

            setText(text: string): void;

            split(offset: number): text;

            substring(indexA: number, indexB?: number): void;
        }

        /** https://ckeditor.com/docs/ckeditor4/latest/api/CKEDITOR_dom_walker.html */
        interface walker {
            evaluator: (node: node) => boolean;
            guard: (node: node, movingOut?: boolean) => boolean;

            checkBackward(): boolean;

            checkForward(): boolean;

            end(): void;

            lastBackward(): node;

            lastForward(): node;

            next(): node;

            previous(): node;

            reset(): void;
        }

        /** https://ckeditor.com/docs/ckeditor4/latest/api/CKEDITOR_dom_window.html */
        interface window extends domObject<Window> {
            focus(): void;

            getViewPaneSize(): widthAndHeight;

            getScrollPosition(): position;

            getFrame(): element;
        }
    }
}
