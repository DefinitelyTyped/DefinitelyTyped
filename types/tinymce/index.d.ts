// Type definitions for TinyMCE 4.6
// Project: https://github.com/tinymce/tinymce, https://github.com/tinymce/tinymce-dist
// Definitions by: Martin Duparc <https://github.com/martinduparc>
//                 Poul Poulsen <https://github.com/iampoul>
//                 Nico Hartto <https://github.com/nicohartto>
//                 Tyler Romeo <https://github.com/Parent5446>
//                 Ashley Workman <https://github.com/CymruKakashi>
//                 Tagawa Hirotaka <https://github.com/wafuwafu13>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

// Work In Progress

/// <reference types="jquery" />

export const DOM: dom.DOMUtils;

export const PluginManager: AddOnManager;

export const ScriptLoader: dom.ScriptLoader;

export const ThemeManager: AddOnManager;

export const EditorManager: EditorManager;

export const baseURL: string;

export const activeEditor: Editor;

export function create(s: string, p: {}, root?: {}): void;

export function createNS(n: string, o: {}): {};

export function each(o: {}, cb: () => void, s?: {}): void;

export function explode(s: string, d: string): void;

export function grep(a: any[], f: () => void): any[];

export function inArray(item: any, arr: any[]): number;

export function is(obj: {}, type?: string): boolean;

export function isArray(obj: {}): boolean;

export function makeMap(items: any[], delim?: string, map?: {}): {};

export function map(array: any[], callback: () => void): any[];

export function resolve(n: string, o?: {}): {};

export function toArray(obj: {}): any[];

export function trim(s: string): string;

export function walk(o: {}, f: () => void, n?: string, s?: string): void;

export function init(settings: Settings): void;

export function triggerSave(): void;

export function get(id: string | number): Editor;

export interface Settings {
    base_url?: string | undefined;

    table_toolbar?: string | undefined;

    table_appearance_options?: boolean | undefined;

    table_clone_elements?: string | undefined;

    table_grid?: boolean | undefined;

    table_tab_navigation?: boolean | undefined;

    table_default_attributes?: object | string | undefined;

    table_default_styles?: object | string | undefined;

    table_sizing_mode?: 'fixed' | 'relative' | 'responsive' | 'auto' | undefined;

    table_class_list?: object[] | undefined;

    table_cell_class_list?: object[] | undefined;

    table_row_class_list?: object[] | undefined;

    table_advtab?: boolean | undefined;

    table_cell_advtab?: boolean | undefined;

    table_row_advtab?: boolean | undefined;

    table_resize_bars?: boolean | undefined;

    table_style_by_css?: boolean | undefined;

    auto_focus?: string | undefined;

    cache_suffix?: string | undefined;

    content_security_policy?: string | undefined;

    external_plugins?: {} | undefined;

    hidden_input?: boolean | undefined;

    paste_data_images?: boolean | undefined;

    paste_as_text?: boolean | undefined;

    paste_enable_default_filters?: boolean | undefined;

    paste_filter_drop?: boolean | undefined;

    paste_preprocess?(plugin: any, args: any): void;

    paste_postprocess?(plugin: any, args: any): void;

    paste_word_valid_elements?: string | undefined;

    paste_webkit_styles?: string | undefined;

    paste_retain_style_properties?: string | undefined;

    paste_merge_formats?: boolean | undefined;

    paste_convert_word_fake_lists?: boolean | undefined;

    paste_remove_styles_if_webkit?: boolean | undefined;

    pagebreak_separator?: string | undefined;

    pagebreak_split_block?: boolean | undefined;

    advlist_number_styles?: string | undefined;

    init_instance_callback?(editor: Editor): void;

    plugins?: string | string[] | undefined;

    selector?: string | undefined;

    setup?(edtor: Editor): void;

    target?: Element | undefined;

    branding?: boolean | undefined;

    color_picker_callback?(callback: (hexColor: string) => void, value: string): void;

    custom_ui_selector?: string | undefined;

    elementpath?: boolean | undefined;

    event_root?: boolean | undefined;

    fixed_toolbar_container?: string | undefined;

    height?: number | string | undefined;

    inline?: boolean | undefined;

    insert_button_items?: string | undefined;

    insert_toolbar?: string | undefined;

    max_height?: number | undefined;

    max_width?: number | undefined;

    menu?: settings.Menu | undefined;

    menubar?: string | boolean | undefined;

    min_height?: number | string | undefined;

    min_width?: number | string | undefined;

    preview_styles?: boolean | string | undefined;

    removed_menuitems?: string | undefined;

    resize?: boolean | string | undefined;

    selection_toolbar?: string | undefined;

    skin_url?: string | undefined;

    skin?: false | string | undefined;

    statusbar?: boolean | undefined;

    theme_url?: string | undefined;

    theme?: string | undefined;

    toolbar?: boolean | string | string[] | undefined;

    width?: number | string | undefined;

    body_class?: string | undefined;

    body_id?: string | undefined;

    content_css?: string | string[] | undefined;

    content_style?: string | undefined;

    inline_boundaries?: boolean | undefined;

    inline_boundaries_selector?: boolean | undefined;

    visual_anchor_class?: string | undefined;

    visual_table_class?: string | undefined;

    visual?: boolean | undefined;

    allow_conditional_comments?: boolean | undefined;

    allow_html_in_named_anchor?: boolean | undefined;

    allow_unsafe_link_target?: boolean | undefined;

    convert_fonts_to_spans?: boolean | undefined;

    custom_elements?: string | undefined;

    doctype?: string | undefined;

    element_format?: string | undefined;

    encoding?: string | undefined;

    entities?: string | undefined;

    entity_encoding?: string | undefined;

    extended_valid_elements?: string | undefined;

    fix_list_elements?: boolean | undefined;

    force_hex_style_colors?: boolean | undefined;

    forced_root_block?: string | undefined;

    forced_root_block_attrs?: {} | undefined;

    invalid_elements?: string | undefined;

    invalid_styles?: string | {} | undefined;

    keep_styles?: boolean | undefined;

    protect?: RegExp[] | undefined;

    remove_trailing_brs?: boolean | undefined;

    schema?: string | undefined;

    valid_children?: string | undefined;

    valid_classes?: string | {} | undefined;

    valid_elements?: string | undefined;

    valid_styles?: {} | undefined;

    block_formats?: string | undefined;

    font_formats?: string | undefined;

    fontsize_formats?: string | undefined;

    formats?: {} | undefined;

    removeFormat?: Array<{}> | undefined;

    indentation?: string | undefined;

    style_formats?: Array<{}> | undefined;

    style_formats_autohide?: boolean | undefined;

    style_formats_merge?: boolean | undefined;

    browser_spellcheck?: boolean | undefined;

    gecko_spellcheck?: boolean | undefined;

    automatic_uploads?: boolean | undefined;

    file_browser_callback?(field_name: string, url: string, type: string, win: Window): void;

    file_browser_callback_types?: string | undefined;

    file_picker_callback?(callback: (filename: string, metadata: {}) => void, valud: string, meta: {}): void;

    file_picker_types?: string | undefined;

    images_dataimg_filter?(img: HTMLImageElement): void;

    images_reuse_filename?: boolean | undefined;

    images_upload_base_path?: string | undefined;

    images_upload_credentials?: boolean | undefined;

    images_upload_handler?(blobInfo: any, success: (msg: string) => void, failure: (msg: string) => void): void;

    images_upload_url?: string | undefined;

    directionality?: string | undefined;

    language?: string | undefined;

    language_url?: string | undefined;

    allow_script_urls?: boolean | undefined;

    convert_urls?: boolean | undefined;

    document_base_url?: string | undefined;

    relative_urls?: boolean | undefined;

    remove_script_host?: boolean | undefined;

    urlconverter_callback?(url: string, node: HTMLElement, on_save: boolean, name: string): void;

    anchor_bottom?: string | undefined;

    anchor_top?: string | undefined;

    br_in_pre?: boolean | undefined;

    custom_undo_redo_levels?: number | undefined;

    end_container_on_empty_block?: boolean | undefined;

    nowrap?: boolean | undefined;

    object_resizing?: boolean | string | undefined;

    type_ahead_urls?: boolean | undefined;

    autosave_ask_before_unload?: boolean | undefined;

    autosave_interval?: string | undefined;

    autosave_prefix?: string | undefined;

    autosave_restore_when_empty?: boolean | undefined;

    autosave_retention?: string | undefined;

    imagetools_cors_hosts?: string[] | undefined;

    imagetools_proxy?: string | undefined;

    imagetools_toolbar?: string | undefined;

    imagetools_api_key?: string | undefined;

    spellchecker_rpc_url?: string | undefined;

    spellchecker_language?: string | undefined;

    spellchecker_languages?: string | undefined;

    spellchecker_dialog?: boolean | undefined;

    spellchecker_whitelist?: string[] | undefined;

    spellchecker_on_load?: boolean | undefined;

    spellchecker_active?: boolean | undefined;
}

export namespace settings {
    interface Menu {
        file?: MenuItem | undefined;
        edit?: MenuItem | undefined;
        insert?: MenuItem | undefined;
        view?: MenuItem | undefined;
        format?: MenuItem | undefined;
        table?: MenuItem | undefined;
        tools?: MenuItem | undefined;
    }

    interface MenuItem {
        title: string;
        items: string;
    }
}

export interface AddOnManager {
    add(id: string, addOn: (editor: Editor, url: string) => void): Theme | Plugin;

    addComponents(pluginName: string, scripts: string[]): void;

    get(name: string): Theme | Plugin;

    load(name: string, addOnUrl: string, success?: () => void, scope?: {}, failure?: () => void): void;

    requireLangPack(name: string, languages?: string): void;
}

export class Editor extends util.Observable {
    constructor(id: string, settings: Settings, editorManager: EditorManager);

    $: dom.DomQuery;

    baseURI: util.URI;

    contentCSS: string[];

    contentStyles: string[];

    documentBaseURI: util.URI;

    dom: dom.DOMUtils;

    formatter: Formatter;

    id: string;

    initialized: boolean;

    notificationManager: notificationManager;

    parser: html.DomParser;

    schema: html.Schema;

    selection: dom.Selection;

    serializer: dom.Serializer;

    settings: Settings;

    theme: Theme;

    undoManager: UndoManager;

    windowManager: WindowManager;

    addButton(name: string, settings: {}): void;

    addCommand(name: string, callback: (ui: boolean, value: {}) => boolean, scope?: {}): void;

    addContextToolbar(predicate: ((el: Node) => boolean) | string, items: string): void;

    addMenuItem(name: string, settings: {}): void;

    addQueryStateHandler(name: string, callback: () => boolean, scope?: {}): void;

    addQueryValueHandler(name: string, callback: () => {}, scope?: {}): void;

    addShortcut(pattern: string, desc: string, cmdFunc: string, sc?: {}): boolean;

    addSidebar(name: string, settings: {}): void;

    addVisual(elm?: Element): void;

    convertURL(url: string, name: string, elm: string): string;

    destroy(automatic?: boolean): void;

    execCallback(name: string): {};

    execCommand(cmd: string, ui?: boolean, value?: any, args?: {}): void;

    focus(skipFocus: boolean): void;

    getBody(): HTMLBodyElement;

    getContainer(): Element;

    getContent(args?: {}): string;

    getContentAreaContainer(): Element;

    getDoc(): Document;

    getElement(): Element;

    getLang(name: string, defaultVal?: string): void;

    getParam(name: string, defaultVal?: string, type?: string): string;

    getWin(): Window;

    hasEventListeners(name: string): boolean;

    hide(): void;

    init(): void;

    insertContent(content: string, args?: {}): void;

    isDirty(): boolean;

    isHidden(): boolean;

    load(args?: {}): string;

    nodeChanged(args?: {}): void;

    queryCommandState(cmd: string): boolean;

    queryCommandSupported(cmd: string): boolean;

    queryCommandValue(cmd: string): {};

    remove(): void;

    render(): void;

    save(args: {}): string;

    setContent(content: string, args?: {}): string;

    setDirty(state: boolean): void;

    setMode(mode: string): void;

    setProgressState(state: boolean, time: number): boolean;

    show(): void;

    translate(text: string): string;

    uploadImages(callback: () => void): Promise<any>;
}

export interface EditorCommands {
    addCommands(command_list: {}, type?: string): void;

    execCommand(command: string, ui?: boolean, value?: {}, args?: {}): boolean;

    queryCommandState(command: string): boolean | number;

    queryCommandSupported(command: string): boolean;

    queryCommandValue(command: string): {};
}

export interface EditorManager extends util.Observable {
    $: dom.DomQuery;

    activeEditor: Editor;

    baseURI: util.URI;

    baseURL: string;

    documentBaseURL: string;

    editors: Editor[];

    i18n: {};

    majorVersion: string;

    minorVersion: string;

    releaseDate: string;

    suffix: string;

    add(editor: Editor): Editor;

    addI18n(code: string, items: {}): void;

    createEditor(id: string, settings: {}): Editor;

    execCommand(cmd: string, ui?: boolean, value?: string): boolean;

    get(id: string): Editor;

    init(settings: Settings): Promise<Editor>;

    overrideDefaults(defaultSettings: {}): void;

    remove(selector: Editor): Editor;

    setActive(editor: Editor): void;

    translate(text: string): string;

    triggerSave(): void;
}

export interface Env {
    android: boolean;

    ceFalse: boolean;

    contentEditable: boolean;

    documentMode: boolean;

    fileApi: boolean;

    gecko: boolean;

    iOS: boolean;

    ie: boolean;

    mac: boolean;

    noCaretAfter: boolean;

    opera: boolean;

    range: boolean;

    transparentSrc: boolean;

    webKit: boolean;
}

export namespace Events {
    interface Event {
        type: string;

        target: string;

        isDefaultPrevented(): boolean;

        isImmediatePropagationStopped(): boolean;

        isPropagationStopped(): boolean;

        preventDefault(): void;

        stopImmediatePropagation(): void;

        stopPropagation(): void;
    }

    interface FocusBlurEvent extends Event {
        blurredEditor: Editor;
    }

    interface ContentEvent extends Event {
        format: string;

        set: boolean;

        content: string;
    }

    interface ProcessEvent extends Event {
        content: string;

        forced_root_block: string;

        format: string;

        get: boolean;

        get_inner: boolean;

        node: Node;

        selection: true;
    }

    interface NodeChangeEvent extends Event {
        element: Node;

        parents: Node[];

        selectionChange: boolean;
    }

    interface UndoRedoEvent extends Event {
        level: {};
    }

    interface ChangeEvent extends Event {
        lastLevel: {};

        level: {};
    }

    interface CommandEvent extends Event {
        command: string;

        ui: boolean;

        value: string;
    }
}

export class FocusManager {
    constructor();
    static isEditorUIElement(elm: Element): boolean;
}

export interface Formatter {
    apply(name: string, vars?: {}, node?: html.Node): void;

    canApply(name: string): boolean;

    formatChanged(formats: string, callback: () => void, similar: boolean): void;

    get(name?: string): any[] | {};

    getCssText(format: string): string;

    match(name: string, vars?: {}, node?: html.Node): boolean;

    matchAll(names: any[], vars?: {}): any[];

    matchNode(node: html.Node, name: string, vars: {}, similar: boolean): {};

    register(name: {}, format?: {}): void;

    remove(name: string, vars?: {}, node?: html.Node): void;

    toggle(name: string, vars?: {}, node?: html.Node): void;

    unregister(name: string): void;
}

export class Formatter implements Formatter {
    constructor(ed: Editor);
}

export interface Shortcuts {
    add(pattern: string, desc: string, cmdFunc: () => void | string, scope?: {}): boolean;

    remove(pattern: string): boolean;
}

export interface Theme {
    renderUI(obj: {}): {};
}

export interface UndoManager {
    add(level?: {}, event?: Event): {};

    beforeChange(): void;

    clear(): void;

    extra(callback1: () => void, callback2: () => void): void;

    hasRedo(): boolean;

    hasUndo(): boolean;

    ignore(callback: () => void): void;

    redo(): {};

    transact(callback: () => void): {};

    undo(): {};
}

export interface WindowManager {
    alert(message: string, callback: () => void, scope?: {}): void;

    close(): void;

    confirm(message: string, callback: () => void, scope?: {}): void;

    getParams(): {};

    getWindows(): Window[];

    open(args: {}, params: {}): void;

    setParams(params: {}): void;
}

export interface notificationManager {
    close(): void;

    getNotifications(): Array<{}>;

    open(args?: {}): void;
}

export namespace ui {
    interface ControlSettings {
        menu: Menu;
    }

    interface Collection {}

    interface Container {
        add(items: any): Collection;
        items(): Collection;
    }

    interface Moveable {
        moveRel(elm: Node, rel: string): Control;
    }

    interface FloatPanel extends Control, Moveable {}

    interface Menu extends FloatPanel, Control, Container {}

    interface Factory {
        create(settings: any): Control;
    }

    class Control {
        constructor();

        $el: JQuery;
        on(name: string, callback: string): Control;
        tooltip(): Control;
        settings: ControlSettings;
        disabled(state: boolean): void;
        active(state: boolean): void;
    }
}

export namespace dom {
    interface BookmarkManager {
        getBookmark(type?: number, normalized?: boolean): {};

        isBookmarkNode(node: HTMLElement): boolean;

        moveToBookmark(bookmark: {}): boolean;
    }

    interface DOMUtils {
        add<T>(parentElm: string, name: string, attrs?: {}, html?: string, create?: boolean): Element | T[];

        addClass<T>(elm: string, cls: string): string | T[];

        addStyle(cssText: string): void;

        bind(target: Element, name: string, func: () => void, scope?: {}): () => void;

        create(name: string, attrs?: {}, html?: string): Element;

        createFragment(html: string): DocumentFragment;

        createHTML(name: string, attrs?: {}, html?: string): string;

        createRng(): Range;

        decode(s: string): string;

        destroy(): void;

        encode(text: string): string;

        findCommonAncestor(a: Element, b: Element): Element;

        fire(target: Node, name: string, evt: {}): Event;

        get(n: string): Element;

        getAttrib(elm: string, name: string, defaultVal: string): string;

        getAttribs(elm?: HTMLElement): NodeList;

        getNext(node: Node, selector: string): Node;

        getOuterHTML(elm: string): string;

        getParent(node: Node, selector: any, root?: Node): Node;

        getParents<T>(node: Node, selector: () => void, root?: Node): T[];

        getPos(elm: Element, rootElm?: Element): {};

        getPrev(node: Node, selector: string): Node;

        getRect(elm: Element): {};

        getRoot(): Element;

        getSize(elm: Element): {};

        getStyle(elm: string, name: string, computed: boolean): string;

        getViewPort(win?: Window): {};

        hasClass(elm: string, cls: string): boolean;

        hide(elm: string): void;

        insertAfter<T>(node: Element, referenceNode: Element): Element | T[];

        is(elm: Node, selector: string): boolean;

        isBlock(node: Node): boolean;

        isEmpty(elements?: {}): boolean;

        isHidden(elm: string): boolean;

        loadCSS(url: string): void;

        nodeIndex(node: Node, normalized?: boolean): number;

        parseStyle(cssText: string): {};

        remove<T>(node: string | Element, keepChildren?: boolean): Element | T[];

        removeAllAttribs(e: Element): void;

        removeClass<T>(elm: string, cls: string): string | T[];

        rename(elm: Element, name: string): Element;

        replace(newElm: Element, oldElm: Element, keepChildren?: boolean): void;

        run<T>(elm: string, func: () => void, scope?: {}): {} | T[];

        select<T>(selector: string, scope?: {}): T[];

        serializeStyle(styles: {}, name?: string): string;

        setAttrib(elm: Element, name: string, value: string): void;

        setAttribs(elm: Element, attrs: {}): void;

        setHTML(elm: Element, html: string): void;

        setOuterHTML(elm: Element, html: {}): void;

        setStyle(elm: string, name: string, value: string): void;

        setStyles(elm: Element, styles: {}): void;

        show(elm: string): void;

        split(parentElm: Element, splitElm: Element, replacementElm?: Element): Element;

        toHex(rgbVal: string): string;

        toggleClass(elm: Element, cls: string, state?: string): void;

        unbind<T>(target: Element, name: string, func: () => void): boolean | T[];

        uniqueId(prefix?: string): string;
    }

    class DOMUtils implements DOMUtils {
        constructor(doc: Document, settings?: {});
    }

    interface DomQuery {
        add<T>(items: T[], sort?: boolean): DomQuery;

        addClass(className: string): DomQuery;

        after(content: string): DomQuery;

        append(content: string): DomQuery;

        appendTo(val: string): DomQuery;

        attr(name: string, value?: string): DomQuery | string;

        before(content: string): DomQuery;

        children(node: Element | string): DomQuery;

        clone(): DomQuery;

        closest(selector: string): DomQuery;

        contents(node: Element | string): DomQuery;

        css(name: string, value?: string): DomQuery | string;

        each(callback: () => void): DomQuery;

        each(obj: {}, callback: () => void): void;

        empty(): DomQuery;

        eq(index: number): DomQuery;

        extend(target: {}, object: {}): {};

        filter(selector: string): DomQuery;

        find(selector: string): DomQuery;

        first(): DomQuery;

        grep<T>(array: T[], callback: () => void): T[];

        hasClass(className: string): boolean;

        hide(): DomQuery;

        html(value?: string): DomQuery | string;

        inArray<T>(item: {}, array: T[]): number;

        is(selector: string): boolean;

        isArray(array: {}): boolean;

        last(): DomQuery;

        makeArray<T>(object: {}): T[];

        next(node: Element | string): DomQuery;

        nextUntil(node: Element | string, until: string): DomQuery;

        off(name?: string, callback?: () => void): DomQuery;

        offset(offset?: {}): {} | DomQuery;

        on(name: string, callback: () => void): DomQuery;

        parent(node: Element | string): DomQuery;

        parents(node: Element | string): DomQuery;

        parentsUntil(node: Element | string, until: string): DomQuery;

        prepend(content: string): DomQuery;

        prependTo(val: string): DomQuery;

        prev(node: Element | string): DomQuery;

        prevUntil(node: Element | string, until: string): DomQuery;

        remove(): DomQuery;

        removeAttr(name: string): DomQuery | string;

        removeClass(className: string): DomQuery;

        replaceWith(content: string): DomQuery;

        show(): DomQuery;

        slice(start: number, end?: number): DomQuery;

        text(value?: string): DomQuery | string;

        toArray<T>(): T[];

        toggleClass(className: string, state?: boolean): DomQuery;

        trigger(name: string): DomQuery;

        trim(str: string): string;

        unwrap(): DomQuery;

        wrap(content: string): DomQuery;

        wrapAll(content: string): DomQuery;

        wrapInner(content: string): DomQuery;
    }

    class DomQuery implements DomQuery {
        constructor(selector?: string, context?: Document);
    }

    interface EventUtils {
        bind(target: {}, names: string, callback: () => void, scope: {}): () => void;

        clean(target: {}): EventUtils;

        fire(target: {}, name: string, args?: {}): EventUtils;

        unbind(target: {}, names?: string, callback?: () => void): EventUtils;
    }

    interface RangeUtils {
        compareRanges(rng1: Range, rng2: Range): boolean;

        getCaretRangeFromPoint(clientX: number, clientY: number, doc: Document): Range;
    }

    interface ScriptLoader {
        add(url: string, success?: () => void, scope?: {}, failure?: () => void): void;

        isDone(url: string): boolean;

        load(url: string, callback1?: () => void, callback2?: () => void): void;

        loadQueue(success?: () => void, failure?: () => void, scope?: {}): void;

        loadScripts(scripts: string[], callback1?: () => void, scope?: {}, callback2?: () => void): void;

        markDone(url: string): void;
    }

    interface Selection {
        collapse(toStart?: boolean): void;

        getBookmark(type?: number, normalized?: boolean): {};

        getContent(args?: {}): string;

        getEnd(real?: boolean): Element;

        getNode(): Element;

        getRng(): Range;

        getSel(): Selection;

        getStart(real?: boolean): Element;

        isCollapsed(): boolean;

        moveToBookmark(bookmark: {}): boolean;

        select(node: Element, content?: boolean): Element;

        selectorChanged(selector: string, callback: () => void): void;

        setContent(content: string, args?: {}): void;

        setCursorLocation(node?: Node, offset?: number): void;

        setNode(elm: Element): Element;

        setRng(rng: Range, forward?: boolean): void;
    }

    class Selection implements Selection {
        constructor(dom: DOMUtils, win: Window, editor: Editor, serializer: Serializer);
    }

    interface Serializer {
        addAttributeFilter(callback: () => void): void;

        addNodeFilter(callback: () => void): void;

        addRules(rules: string): void;

        addTempAttr(name: string): void;

        serialize(node: HTMLElement, args: {}): void;

        setRules(rules: string): void;
    }

    class Serializer implements Serializer {
        constructor(settings: {}, editor?: Editor);
    }

    interface TreeWalker {
        current(): html.Node;

        next(): html.Node;

        prev(): html.Node;
    }

    class TreeWalker implements TreeWalker {
        constructor(startNode: html.Node, rootNode: html.Node);
    }
}

export namespace geom {
    interface Rect {
        clamp(rect: Rect, clampRect: Rect, fixedSize: boolean): Rect;

        create(x: number, y: number, w: number, h: number): Rect;

        findBestRelativePosition(rect: Rect, targetRect: Rect, constrainRect: Rect, rels: any[]): void;

        fromClientRect(clientRect: ClientRect): Rect;

        inflate(rect: Rect, w: number, h: number): Rect;

        intersect(rect: Rect, cropRect: Rect): Rect;

        relativePosition(rect: Rect, targetRect: Rect, rel: string): void;
    }
}

export namespace html {
    interface DomParser {
        addAttributeFilter(attributes: string, callback: () => void): void;

        addNodeFilter(attributes: string, callback: () => void): void;

        filterNode(node: Node): Node;

        parse(html: string, args?: {}): Node;
    }

    class DomParser implements DomParser {
        constructor(settings: {}, schema: Schema);
    }

    interface Entities {
        decode(text: string): string;

        encodeAllRaw(text: string): string;

        encodeNamed(text: string, attr?: boolean, entities?: {}): string;

        encodeNumeric(text: string, attr?: boolean): string;

        encodeRaw(text: string, attr?: boolean): string;

        getEncodeFunc(name: string, entities?: string): () => void;
    }

    interface Node {
        append(node: Node): Node;

        attr(name: string, value?: string): string | Node;

        clone(): Node;

        create(name: string, attrs: {}): void;

        empty(): Node;

        getAll(name: string): Node[];

        insert(node: Node, ref_node: Node, before?: boolean): Node;

        isEmpty(elements: {}): boolean;

        remove(): Node;

        replace(node: Node): Node;

        unwrap(): void;

        walk(prev?: boolean): Node;

        wrap(wrapperNode: Node): Node;
    }

    class Node implements Node {
        constructor(name: string, type: number);
    }

    interface SaxParser {
        parse(html: string): void;
    }

    class SaxParser implements SaxParser {
        constructor(settings: {}, schema: Schema);
    }

    interface Schema {
        addCustomElements(custom_elements: string): void;

        addValidChildren(valid_children: string): void;

        addValidElements(valid_elements: string): void;

        getBlockElements(): { [name: string]: {} };

        getBoolAttrs(): { [name: string]: {} };

        getCustomElements(): { [name: string]: {} };

        getElementRule(name: string): {};

        getInvalidStyles(): void;

        getMoveCaretBeforeOnEnterElements(): { [name: string]: {} };

        getNonEmptyElements(): { [name: string]: {} };

        getSelfClosingElements(): { [name: string]: {} };

        getShortEndedElements(): { [name: string]: {} };

        getSpecialElements(): { [name: string]: {} };

        getTextBlockElements(): { [name: string]: {} };

        getTextInlineElements(): { [name: string]: {} };

        getValidClasses(): void;

        getValidStyles(): void;

        getWhiteSpaceElements(): { [name: string]: {} };

        isValid(name: string, attr?: string): boolean;

        isValidChild(name: string, child: string): boolean;

        setValidElements(valid_elements: string): void;
    }

    class Schema implements Schema {
        constructor(settings: {});
    }

    interface Serializer {
        serialize(node: Node): string;
    }

    class Serializer implements Serializer {
        constructor(settings: {}, schema: Schema);
    }

    interface Styles {
        parse(css: string): {};

        serialize(styles: {}, elementName: string): string;

        toHex(color: string): string;
    }

    interface Writer {
        cdata(text: string): void;

        doctype(text: string): void;

        end(name: string): void;

        getContent(): string;

        pi(name: string, text: string): void;

        reset(): void;

        start(name: string, attrs?: any[], empty?: boolean): void;

        text(text: string, raw: boolean): void;
    }

    class Writer implements Writer {
        constructor(settings: {});
    }
}

export namespace util {
    interface Color {
        parse(value: {}): Color;

        toHex(): string;

        toHsv(): {};

        toRgb(): {};
    }

    class Color implements Color {
        constructor(value: string | {});
    }

    interface Delay {
        clearInterval(interval: number): void;

        clearTimeout(timeout: number): void;

        debounce(callback: () => void, time: number): () => void;

        requestAnimationFrame(callback: () => void, element?: HTMLElement): void;

        setEditorInterval(callback: () => void, time: number): number;

        setEditorTimeout(editor: Editor, callback: () => void, time: number): number;

        setInterval(callback: () => void, time: number): number;

        setTimeout(callback: () => void, time: number): number;
    }

    interface EventDispatcher {
        fire(name: string, args?: {}): {};

        has(name: string): boolean;

        isNative(name: string): boolean;

        off(name: string, callback?: () => void): {};

        on(name: string, callback: () => void, first?: boolean): {};

        once(name: string, callback: () => void, first: boolean): {};
    }

    interface i18n {
        rtl: boolean;

        add(code: string, items: Array<{}>): void;

        getCode(): string;

        setCode(newCode: string): void;

        translate(text: string): string;
    }

    interface JSON {
        parse(s: string): {};

        serialize(obj: {}, quote?: string): string;
    }

    interface JSONRequest {
        send(args: {}): void;

        sendRPC(o: {}): void;
    }

    interface LocalStorage {
        length: number;

        clear(): void;

        getItem(key: string): string;

        key(index: number): string;

        removeItem(key: string): void;

        setItem(key: string, value: string): void;
    }

    class Observable {
        fire(name: string, args?: {}, bubble?: boolean): {};

        hasEventListeners(name: string): boolean;

        off(name?: string, callback?: () => void): {};

        on(name: string, callback: (event: any) => void, first?: boolean): {};

        once(name: string, callback: (event: any) => void): {};
    }

    interface Tools {
        create(s: string, p: {}, root?: {}): void;

        createNS(n: string, o?: {}): {};

        each(o: {}, cb: () => void, s?: {}): void;

        explode(s: string, d: string): void;

        grep<T>(a: T[], f: () => void): T[];

        inArray<T>(item: T, arr: T[]): number;

        is(obj: {}, type: string): boolean;

        isArray(obj: {}): boolean;

        makeMap<T>(items: T[], delim?: string, map?: {}): {};

        map<T, S>(array: T[], callback: (c: T) => S): S[];

        resolve(n: string, o?: {}): {};

        toArray<T>(obj: {}): T[];

        trim(s: string): string;

        walk(o: {}, f: () => void, n?: string, s?: string): void;
    }

    interface URI {
        getURI(noProtoHost: boolean): URI;

        isSameOrigin(uri: URI): boolean;

        setPath(path: string): void;

        toAbsPath(base: string, path: string): void;

        toAbsolute(uri: string, noHost: boolean): string;

        toRelPath(base: string, path: string): void;

        toRelative(uri: string): string;
    }

    class URI implements URI {
        constructor(url: string, settings?: {});
    }

    interface XHR {
        fire(name: string, args?: {}, bubble?: boolean): {};

        hasEventListeners(name: string): boolean;

        off(name?: string, callback?: () => void): {};

        on(name: string, callback: () => void, first?: boolean): {};

        once(name: string, callback: () => void): {};

        send(settings: {}): void;
    }
}
