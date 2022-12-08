declare namespace CKEDITOR {
    interface CKEditorStatic {
        readonly dom: typeof dom
    }
    namespace dom {
        interface bookmark {
            startNode: node | string
            endNode: node | string
            serializable: boolean
            collapsed: boolean
        }

        interface bookmark2 {
            start: number[]
            end: number[]
            startOffset: number
            endOffset: number
            collapsed: boolean
            normalized: boolean
            is2: boolean
        }

        interface shrinkOptions {
            shrinkOnBlockBoundary?: boolean | undefined
            skipBogus?: boolean | undefined
        }

        interface rangeListIterator {
            getNextRange(mergeConsequent?: boolean): range
        }

        interface position {
            x: number
            y: number
        }

        interface widthAndHeight {
            width: number
            height: number
        }

        /** https://ckeditor.com/docs/ckeditor4/latest/api/CKEDITOR_dom_comment.html */
        class comment extends node {
            readonly type: number

            constructor(comment: string | Node, ownerDocument?: document)

            getOuterHtml(): string
        }

        /** https://ckeditor.com/docs/ckeditor4/latest/api/CKEDITOR_dom_document.html */
        class document extends domObject<Document> {
            readonly type: number

            constructor(domDocument: Document)

            appendStyleSheet(cssFileUrl: string): void

            appendStyleText(cssStyleText: string): CSSStyleSheet

            createElement(
                name: string,
                attribsAndStyles?: {
                    attributes?: { [key: string]: string } | undefined
                    styles?: { [key: string]: string } | undefined
                }
            ): element

            createText(text: string): element

            find(selector: string): nodeList<HTMLElement>

            findOne(selector: string): element

            focus(): void

            getActive(): element

            getBody(): element

            getByAddress(address: unknown[], normalized?: boolean): node

            getById(elementId: string): element

            getDocumentElement(): element

            getElementsByTag(tagName: string): nodeList<HTMLElement>

            getHead(): element

            getSelection(): selection

            getWindow(): window

            write(html: string): void
        }

        /** https://ckeditor.com/docs/ckeditor4/latest/api/CKEDITOR_dom_documentFragment.html */
        class documentFragment<
            T extends Event | EventTarget = Node
        > extends node {
            readonly type: number

            constructor(nodeOrDoc: T)

            insertAfterNode(node: node): void
        }

        /** https://ckeditor.com/docs/ckeditor4/latest/api/CKEDITOR_dom_domObject.html */
        class domObject<
            T extends Event | EventTarget = Node
        > extends CKEDITOR.event {
            readonly $: T

            constructor(nativeDomObject: T)

            clearCustomData(): void

            equals(object: unknown): boolean

            getCustomData(key: string): unknown

            getPrivate(): { [key: string]: unknown }

            getUniqueId(): number

            removeAllListeners(): void

            removeCustomData(key: string): unknown

            setCustomData(key: string, value: unknown): domObject
        }

        /** https://ckeditor.com/docs/ckeditor4/latest/api/CKEDITOR_dom_element.html */
        class element extends node<HTMLElement> {
            readonly type: number

            constructor(element: string | HTMLElement, ownerDocument?: document)

            addClass(className: string): void

            append(node: node | string, toStart?: boolean): node

            appendBogus(force: boolean): void

            appendHtml(html: string): void

            appendText(text: string): node

            breakParent(parent: element): void

            contains(node: node): boolean

            copyAttributes(
                dest: element,
                skipAttributes: { [key: string]: string }
            ): void

            data(name: string, value?: string | false): string

            disableContextMenu(): void

            find(selector: string): nodeList<HTMLElement>

            findOne(selector: string): element

            focus(defer?: boolean): void

            focusNext(ignoreChildren?: boolean, indexToUse?: number): void

            focusPrevious(ignoreChildren?: boolean, indexToUse?: number): void

            forEach(
                callback: (node: node) => void,
                type?: number,
                skipRoot?: boolean
            ): void

            getAttribute(name: string): string

            getBogus(): node | boolean

            getChild(indices: number | number[]): node

            getChildCount(): number

            getChildren(): nodeList

            getClientRect(): ClientRect

            getComputedStyle(propertyName: string): string

            getDirection(useComputed: boolean): string

            getDocumentPosition(refDocument: document): dom.position

            getDtd(): dtdDefinition

            getEditor(): editor

            getElementsByTag(tagName: string): nodeList

            getFirst(evaluator?: (node: node) => boolean): node

            getFrameDocument(): document

            getHtml(): string

            getId(): string

            getLast(evaluator?: (node: node) => boolean): node

            getName(): string

            getNameAtt(): string

            getOuterHtml(): string

            getPositionedAncestor(): element

            getSize(type: string, isBorderBox: boolean): void

            getStyle(name: string): string

            getTabIndex(): number

            getText(): string

            getValue(): string

            getWindow(): window

            hasAttributes(): boolean

            hasAttribute(name: string): boolean

            hasClass(className: string): boolean

            hide(): void

            is(...name: string[]): boolean
            is(name: unknown): boolean

            isBlockBoundary(customNodeNames: { [tagName: string]: 1 }): boolean

            isEditable(textCursor?: boolean): boolean

            isEmptyInlineRemoveable(): boolean

            isIdentical(otherElement: element): boolean

            isVisible(): boolean

            mergeSiblings(inlineOnly?: boolean): void

            moveChildren(target: element, toStart?: boolean): void

            removeAttribute(name: string): void

            removeAttributes(attributes?: string[]): void

            removeClass(className: string): void

            removeStyle(name: string): void

            renameNode(newTag: string): void

            scrollIntoParent(
                parent: element | window,
                alignToTop: boolean,
                hscroll: boolean
            ): void

            scrollIntoView(alignToTop?: boolean): void

            setAttribute(name: string, value: string): element

            setAttributes(attributesPairs: { [key: string]: string }): element

            setHtml(html: string): string

            setOpacity(opacity: number): void

            setSize(type: string, size: number, isBorderBox: boolean): void

            setState(state: number, base?: string, useAria?: boolean): void

            setStyle(name: string, value: string): element

            setStyles(stylesPair: { [key: string]: string }): element

            setText(text: string): string

            setValue(value: string): element

            show(): void

            unselectable(): void

            // static method
            static clearAllMarkers(database: unknown): unknown

            static clearMarkers(
                database: unknown,
                element: element,
                removeFromDatabase: boolean
            ): void

            static createFromHtml(html: string): element

            static get(element: string | HTMLElement | element): element

            static setMarker(
                database: unknown,
                element: element,
                name: string,
                value: unknown
            ): element
        }

        /** https://ckeditor.com/docs/ckeditor4/latest/api/CKEDITOR_dom_elementPath.html */
        class elementPath {
            readonly block: element
            readonly blockLimit: element
            readonly elements: element[]
            readonly lastElement: element
            readonly root: element

            constructor(startNode: element, root?: element)

            compare(otherPath: elementPath): boolean

            contains(
                query:
                    | string
                    | string[]
                    | ((element: element) => boolean)
                    | { [key: string]: unknown }
                    | element,
                excludeRoot?: boolean,
                fromTop?: boolean
            ): element

            direction(): 'ltr' | 'rtl'

            isContextFor(tag: string): boolean
        }

        /** https://ckeditor.com/docs/ckeditor4/latest/api/CKEDITOR_dom_event.html */
        class event<
            T extends Event | EventTarget = Event,
            U extends node<Event | EventTarget> = node<T>
        > {
            readonly $: T

            constructor(domEvent: Event)

            getKey(): number

            getKeystroke(): number

            getPageOffset(): dom.position

            preventDefault(stopPropagation?: boolean): void

            stopPropagation(): void

            getTarget(): U

            getPhase(): number

            on(
                eventName: string,
                listenerFunction: (eventInfo: eventInfo) => void,
                scopeObj?: unknown,
                listenerData?: unknown,
                priority?: number
            ): { removeListener: () => void }
        }

        /** https://ckeditor.com/docs/ckeditor4/latest/api/CKEDITOR_dom_iterator.html */
        class iterator {
            readonly activeFilter: filter
            enforceRealBlocks: boolean
            enlargeBr: boolean
            readonly filter: filter
            forceBrBreak: boolean
            readonly range: range

            constructor(range: range)

            getNextParagraph(blockTag?: string): element
        }

        /** https://ckeditor.com/docs/ckeditor4/latest/api/CKEDITOR_dom_node.html */
        class node<T extends Event | EventTarget = Node> extends domObject<T> {
            type: number

            constructor(domNode: T)

            appendTo(element: element): element

            clone(includeChildren: boolean, cloneId: boolean): node<T>

            hasPrevious(): boolean

            hasNext(): boolean

            insertAfter(node: node): node

            insertBefore(node: node): node

            insertBeforeMe(node: node): node

            getAddress(normalized?: boolean): number[]

            getAscendant(reference: string, includeSelf?: boolean): node

            getCommonAncestor(node: node): void

            getDocument(): document

            getIndex(normalized?: boolean): number

            getNext(evaluator?: (node: node) => boolean): node

            getNextSourceNode(
                startFromSibling?: boolean,
                nodeType?: number,
                guard?: node | ((node: node) => boolean)
            ): node

            getParent(allowFragmentParent?: boolean): element

            getParents(closerFirst?: boolean): node[]

            getPosition(otherNode: node): void

            getPrevious(evaluator?: (node: node) => boolean): node

            getPreviousSourceNode(
                startFromSibling?: boolean,
                nodeType?: number,
                guard?: node | ((node: node) => boolean)
            ): node

            hasAscendant(name: string, includeSelf: boolean): boolean

            remove(preserveChildren?: boolean): node

            replace(nodeToReplace: node): void

            trim(): void

            ltrim(): void

            rtrim(): void

            isReadOnly(): boolean
        }

        /** https://ckeditor.com/docs/ckeditor4/latest/api/CKEDITOR_dom_nodeList.html */
        class nodeList<T extends Node = Node> {
            constructor(nativeList: NodeList)

            count(): number

            getItem(index: number): node<T>

            toArray(): node<T>[]
        }

        /** https://ckeditor.com/docs/ckeditor4/latest/api/CKEDITOR_dom_range.html */
        class range {
            readonly collapsed: boolean
            readonly document: document
            readonly endContainer: element | text
            readonly endOffset: number
            readonly root: element
            readonly startContainer: element | text
            readonly startOffset: number

            constructor(root: element | document)

            checkBoundaryOfElement(element: element, checkType: number): boolean

            checkEndOfBlock(): boolean

            checkReadOnly(): boolean

            checkStartOfBlock(): boolean

            clone(cloneId?: boolean): range

            cloneContents(): documentFragment

            collapse(toStart?: boolean): boolean

            createBookmark(serializable?: boolean): dom.bookmark

            createBookmark2(normalized?: boolean): dom.bookmark2

            createIterator(): iterator

            deleteContents(mergeThen?: boolean): void

            endPath(): elementPath

            enlarge(unit: number, excludeBrs?: boolean): void

            extractContents(
                mergeThen?: boolean,
                cloneId?: boolean
            ): documentFragment

            fixBlock(isStart: boolean, blockTag: string): element

            getBoundaryNodes(): { startNode: node; endNode: node }

            getCommonAncestor(
                includeSelf?: boolean,
                ignoreTextNode?: boolean
            ): element

            getEnclosedNode(): node

            getNextEditableNode(): element | text

            getNextNode(
                evaluator?: (element: element) => boolean,
                guard?: (element: element) => boolean,
                boundary?: element
            ): element

            getPreviousEditableNode(): element | text

            getPreviousNode(
                evaluator?: (element: element) => boolean,
                guard?: (element: element) => boolean,
                boundary?: element
            ): element

            getTouchedEndNode(): node

            getTouchedStartNode(): node

            insertNode(node: node): void

            moveToBookmark(bookmark: dom.bookmark | dom.bookmark2): void

            moveToClosestEditablePosition(
                element?: element,
                isMoveForward?: boolean
            ): boolean

            moveToElementEditEnd(target: element): boolean

            moveToElementEditStart(target: element): boolean

            moveToElementEditablePosition(
                element: element,
                isMoveToEnd: boolean
            ): boolean

            moveToPosition(node: node, position: number): void

            moveToRange(range: range): void

            optimize(): void

            optimizeBookmark(): void

            removeEmptyBlocksAtEnd(atEnd: boolean): void

            scrollIntoView(): void

            select(): selection

            selectNodeContents(node: node): void

            setEnd(endNode: node, endOffset: number): void

            setEndAfter(node: node): void

            setEndAt(node: node, position: number): void

            setEndBefore(node: node): void

            setStart(startNode: node, startOffset: number): void

            setStartAfter(node: node): void

            setStartAt(node: node, position: number): void

            setStartBefore(node: node): void

            shrink(
                mode: number,
                selectContents?: boolean,
                options?: boolean | dom.shrinkOptions
            ): void

            splitBlock(cloneId?: boolean): void

            splitElement(toSplit: element, cloneId?: boolean): element

            startPath(): elementPath

            trim(ignoreStart?: boolean, ignoreEnd?: boolean): void

            static mergeRanges(ranges: range[]): range[]
        }

        /** https://ckeditor.com/docs/ckeditor4/latest/api/CKEDITOR_dom_rangeList.html */
        class rangeList {
            constructor(ranges?: range | range[])

            createBokmarks(serializable?: boolean): dom.bookmark[]

            createBookmarks2(normalized?: boolean): dom.bookmark2[]

            createIterator(): dom.rangeListIterator

            moveToBookmarks(bookmarks: dom.bookmark[]): void
        }

        /** https://ckeditor.com/docs/ckeditor4/latest/api/CKEDITOR_dom_selection.html */
        class selection {
            readonly FILLING_CHAR_SEQUENCE: string
            readonly document: document
            readonly isFake: boolean
            readonly isLocked: boolean
            readonly rev: number
            readonly root: element

            constructor(target: document | element | selection)

            createBookmarks(serializable: unknown): dom.bookmark[]

            createBookmarks2(normalized: unknown): dom.bookmark2[]

            fake(element: element, ariaLabel?: boolean): void

            getCommonAncestor(): element

            getNative(): Selection

            getRanges(onlyEditables?: boolean): range[]

            getSelectedElement(): element

            getSelectedText(): string

            getStartElement(): element

            getType(): number

            isCollapsed(): boolean

            isHidden(): boolean

            isInTable(allowPartialSelection?: boolean): boolean

            lock(): void

            removeAllRanges(): void

            reset(): void

            scrollIntoView(): void

            selectBookmarks(
                bookmarks: Array<dom.bookmark | dom.bookmark2>
            ): selection

            selectElement(element: element): void

            selectRanges(ranges: range[]): void

            unlock(restore: boolean): void
        }

        /** https://ckeditor.com/docs/ckeditor4/latest/api/CKEDITOR_dom_text.html */
        class text extends node<Text> {
            readonly type: number

            constructor(text: Text | string, ownerDocument?: document)

            getLength(): number

            getText(): string

            setText(text: string): void

            split(offset: number): text

            substring(indexA: number, indexB?: number): void
        }

        /** https://ckeditor.com/docs/ckeditor4/latest/api/CKEDITOR_dom_walker.html */
        class walker {
            evaluator: (node: node) => boolean
            guard: (node: node, movingOut?: boolean) => boolean

            static validEmptyBlockContainers: { [key: string]: unknown }

            constructor(range: range)

            checkBackward(): boolean

            checkForward(): boolean

            end(): void

            lastBackward(): node

            lastForward(): node

            next(): node

            previous(): node

            reset(): void

            static blockBoundary(
                customNodeNames: unknown
            ): (node: node) => boolean

            static bogus(isReject?: boolean): (node: node) => boolean

            static bookmark(
                contentOnly?: boolean,
                isReject?: boolean
            ): (node: node) => boolean

            static editable(isReject?: boolean): (node: node) => boolean

            static empty(isReject?: boolean): (node: node) => boolean

            static ignored(isReject?: boolean): (node: node) => boolean

            static invisible(isReject?: boolean): (node: node) => boolean

            static listItemBoundary(): (node: node) => boolean

            static nodeType(
                type: number,
                isReject?: boolean
            ): (node: node) => boolean

            static temp(isReject?: boolean): (node: node) => boolean

            static whitespaces(isReject?: boolean): (node: node) => boolean
        }

        /** https://ckeditor.com/docs/ckeditor4/latest/api/CKEDITOR_dom_window.html */
        class window extends domObject {
            constructor(domWindow: Window)

            focus(): void

            getViewPaneSize(): dom.widthAndHeight

            getScrollPosition(): dom.position

            getFrame(): element
        }
    }
}
