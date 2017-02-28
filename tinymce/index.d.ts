// Type definitions for TinyMCE 4.5
// Project: https://github.com/tinymce/tinymce
// Definitions by: Martin Duparc <https://github.com/martinduparc/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

// Work In Progress

declare module TinyMce {

  export interface Static extends TinyMce.EditorManager {

    DOM: TinyMce.dom.DOMUtils;

    PluginManager: TinyMce.AddOnManager;

    ScriptLoader: TinyMce.dom.ScriptLoader;

    ThemeManager: TinyMce.AddOnManager;

    create(s: String, p: Object, root?: Object): void;

    createNS(n: String, o: Object): Object;

    each(o: Object, cb: () => void, s?: Object): void;

    explode(s: String, d: String): void;

    grep(a: Array<any>, f: () => void): Array<any>;

    inArray(item: any, arr: Array<any>): Number;

    is(obj: Object, type?: String): Boolean;

    isArray(obj: Object): Boolean;

    makeMap(items: Array<any>, delim?: String, map?: Object): Object;

    map(array: Array<any>, callback: () => void): Array<any>;

    resolve(n: String, o?: Object): Object;

    toArray(obj: Object): Array<any>;

    trim(s: String): String;

    walk(o: Object, f: () => void, n?: String, s?: String): void;
  }

  export interface Settings {

    auto_focus?: String;

    cache_suffix?: String;

    content_security_policy?: String;

    external_plugins?: Object;

    hidden_input?: Boolean;

    init_instance_callback?: (editor: TinyMce.Editor) => void;

    plugins?: String;

    selector?: String;

    setup?: (edtor: TinyMce.Editor) => void;

    target?: Element;

    color_picker_callback?: (callback: (hexColor: String) => void, value: String) => void;

    elementpath?: Boolean;

    event_root?: Boolean;

    fixed_toolbar_container?: String;

    height?: number;

    inline?: Boolean;

    insert_button_items?: String;

    insert_toolbar?: String;

    max_height?: number;

    max_width?: number;

    menu?: settings.Menu;

    menubar?: String | Boolean;

    min_height?: number;

    min_width?: number;

    preview_styles?: Boolean | String;

    removed_menuitems?: String;

    resize?: Boolean | String;

    selection_toolbar?: String;

    skin_url?: String;

    skin?: String;

    statusbar?: Boolean;

    theme_url?: String;

    theme?: String;

    toolbar?: Boolean | String | String[];

    width?: Number;

    body_class?: String;

    body_id?: String;

    content_css?: String;

    content_style?: String;

    visual_anchor_class?: String;

    visual_table_class?: String;

    visual?: Boolean;

    allow_conditional_comments?: Boolean;

    allow_html_in_named_anchor?: Boolean;

    allow_unsafe_link_target?: Boolean;

    convert_fonts_to_spans?: Boolean;

    custom_elements?: String;

    doctype?: String;

    element_format?: String;

    encoding?: String;

    entities?: String;

    entity_encoding?: String;

    extended_valid_elements?: String;

    fix_list_elements?: Boolean;

    force_hex_style_colors?: Boolean;

    forced_root_block?: String;

    forced_root_block_attrs?: Object;

    invalid_elements?: String;

    invalid_styles?: String | Object;

    keep_styles?: Boolean;

    protect?: Array<RegExp>;

    remove_trailing_brs?: Boolean;

    schema?: String;

    valid_children?: String;

    valid_classes?: String | Object;

    valid_elements?: String;

    valid_styles?: Object;

    block_formats?: String;

    font_formats?: String;

    fontsize_formats?: String;

    formats?: Object;

    removeFormat?: Array<Object>;

    indentation?: String;

    style_formats?: Array<Object>;

    style_formats_autohide?: Boolean;

    style_formats_merge?: Boolean;

    browser_spellcheck?: Boolean;

    gecko_spellcheck?: Boolean;

    automatic_uploads?: Boolean;

    file_browser_callback?: (field_name: String, url: String, type: String, win: Window) => void;

    file_browser_callback_types?: String;

    file_picker_callback?: (callback: (filename: String, metadata: Object) => void, valud: String, meta: Object) => void;

    file_picker_types?: String;

    images_dataimg_filter?: (img: any) => void;

    images_reuse_filename?: Boolean;

    images_upload_base_path?: String;

    images_upload_credentials?: Boolean;

    images_upload_handler?: (blobInfo: any, success: (msg: String) => void, failure: (msg: String) => void) => void;

    images_upload_url?: String;

    directionality?: String;

    language?: String;

    language_url?: String;

    allow_script_urls?: Boolean;

    convert_urls?: Boolean;

    document_base_url?: String;

    relative_urls?: Boolean;

    remove_script_host?: Boolean;

    urlconverter_callback?: (url: String, node: HTMLElement, on_save: Boolean, name: String) => void;

    anchor_bottom?: String;

    anchor_top?: String;

    br_in_pre?: Boolean;

    custom_undo_redo_levels?: Number;

    end_container_on_empty_block?: Boolean;

    nowrap?: Boolean;

    object_resizing?: Boolean | String;

    type_ahead_urls?: Boolean;

  }

  export namespace settings {

    export interface Menu {
      file: MenuItem;
      edit: MenuItem;
      insert: MenuItem;
      view: MenuItem;
      format: MenuItem;
      table: MenuItem;
      tools: MenuItem;
    }

    export interface MenuItem {
      title: String;
      items: String;
    }
  }

  export interface AddOnManager {

    add(id: String, addOn: (editor: TinyMce.Editor, url: String) => void): Theme | Plugin;

    addComponents(pluginName: String, scripts: Array<String>): void;

    get(name: String): Theme | Plugin;

    load(name: String, addOnUrl: String, success?: () => void, scope?: Object, failure?: () => void): void;

    requireLangPack(name: String, languages?: String): void;
  }

  export interface Editor extends util.Observable {

    $: dom.DomQuery;

    baseURI: util.URI;

    contentCSS: Array<String>;

    contentStyles: Array<String>;

    documentBaseURI: util.URI;

    dom: dom.DOMUtils;

    formatter: Formatter;

    id: String;

    initialized: Boolean;

    notificationManager: notificationManager;

    parser: html.DomParser;

    schema: html.Schema;

    selection: dom.Selection;

    serializer: dom.Serializer;

    settings: Settings;

    theme: Theme;

    undoManager: UndoManager;

    WindowManager: WindowManager;

    addButton(name: String, settings: Object): void;

    addCommand(name: String, callback: (ui: Boolean, value: Object) => Boolean, scope?: Object): void;

    addContextToolbar(predicate: () => void, items: String): void;

    addMenuItem(name: String, settings: Object): void;

    addQueryStateHandler(name: String, callback: () => Boolean, scope?: Object): void;

    addQueryValueHandler(name: String, callback: () => Object, scope?: Object): void;

    addShortcut(pattern: String, desc: String, cmdFunc: String, sc?: Object): Boolean;

    addSidebar(name: String, settings: Object): void;

    addVisual(elm?: Element): void;

    convertURL(url: String, name: String, elm: String): String;

    destroy(automatic?: Boolean): void;

    execCallback(name: String): Object;

    execCommand(cmd: String, ui: Boolean, value?: any, args?: Object): void;

    focus(skipFocus: Boolean): void;

    getBody(): HTMLBodyElement;

    getContainer(): Element;

    getContent(args?: Object): String;

    getContentAreaContainer(): Element;

    getDoc(): Document;

    getElement(): Element;

    getLang(name: String, defaultVal?: String): void;

    getParam(name: String, defaultVal?: String, type?: String): String;

    getWin(): Window;

    hasEventListeners(name: String): Boolean;

    hide(): void;

    init(): void;

    insertContent(content: String, args?: Object): void;

    isDirty(): Boolean;

    isHidden(): Boolean;

    load(args?: Object): String;

    nodeChanged(args?: Object): void;

    queryCommandState(cmd: String): Boolean;

    queryCommandSupported(cmd: String): Boolean;

    queryCommandValue(cmd: string): Object;

    remove(): void;

    render(): void;

    save(args: Object): String;

    setContent(content: String, args?: Object): String;

    setDirty(state: Boolean): void;

    setMode(mode: String): void;

    setProgressState(state: Boolean, time: Number): Boolean;

    show(): void;

    translate(text: String): String;

    uploadImages(callback: () => void): util.Promise<any>;
  }

  export interface EditorCommands {

    addCommands(command_list: Object, type?: String): void;

    execCommand(command: String, ui?: Boolean, value?: Object, args?: Object): Boolean;

    queryCommandState(command: String): Boolean | Number;

    queryCommandSupported(command: String): Boolean;

    queryCommandValue(command: String): Object;
  }

  export interface EditorManager extends util.Observable {

    $: dom.DomQuery;

    activeEditor: TinyMce.Editor;

    baseURI: TinyMce.util.URI;

    baseURL: String;

    documentBaseURL: String;

    editors: Array<TinyMce.Editor>;

    i18n: Object;

    majorVersion: String;

    minorVersion: String;

    releaseDate: String;

    suffix: String;

    add(editor: TinyMce.Editor): TinyMce.Editor;

    addI18n(code: String, items: Object): void;

    createEditor(id: String, settings: Object): TinyMce.Editor;

    execCommand(cmd: String, ui?: Boolean, value?: String): Boolean;

    get(id: String): TinyMce.Editor;

    init(settings: Settings): Promise<Editor>;

    overrideDefaults(defaultSettings: Object): void;

    remove(selector: TinyMce.Editor): TinyMce.Editor;

    setActive(editor: TinyMce.Editor): void;

    translate(text: String): String;

    triggerSave(): void;
  }

  export interface EditorObservable extends util.Observable { }

  export interface Env {

    android: Boolean;

    ceFalse: Boolean;

    contentEditable: Boolean;

    documentMode: Boolean;

    fileApi: Boolean;

    gecko: Boolean;

    iOS: Boolean;

    ie: Boolean;

    mac: Boolean;

    noCaretAfter: Boolean;

    opera: Boolean;

    range: Boolean;

    transparentSrc: Boolean;

    webKit: Boolean;
  }

  export namespace Events {

    export interface Event {

      type: string;

      target: string;

      isDefaultPrevented(): Boolean;

      isImmediatePropagationStopped(): Boolean;

      isPropagationStopped(): Boolean;

      preventDefault(): void;

      stopImmediatePropagation(): void;

      stopPropagation(): void;
    }

    export interface FocusBlurEvent extends Event {

      blurredEditor: Editor;
    }

    export interface ContentEvent extends Event {

      format: string;

      set: boolean;

      content: string;
    }

    export interface ProcessEvent extends Event {

      content: string;

      forced_root_block: string;

      format: string;

      get: boolean;

      get_inner: boolean;

      node: Node;

      selection: true;
    }

    export interface NodeChangeEvent extends Event {

      element: Node;

      parents: Node[];

      selectionChange: boolean;
    }

    export interface UndoRedoEvent extends Event {

      level: Object;
    }

    export interface ChangeEvent extends Event {

      lastLevel: Object;

      level: Object;
    }

    export interface CommandEvent extends Event {

      command: string;

      ui: boolean;

      value: string;
    }
  }

  export interface FocusManager {

    new (editorManager: TinyMce.EditorManager): FocusManager;

    isEditorUIElement(elm: Element): Boolean;
  }

  export interface Formatter {

    new (ed: Editor): Editor;

    apply(name: String, vars?: Object, node?: html.Node): void;

    canApply(name: String): boolean;

    formatChanged(formats: String, callback: () => void, similar: Boolean): void;

    get(name?: String): Array<any> | Object;

    getCssText(format: String): String;

    match(name: String, vars?: Object, node?: html.Node): boolean;

    matchAll(names: Array<any>, vars?: Object): Array<any>;

    matchNode(node: html.Node, name: String, vars: Object, similar: Boolean): Object;

    register(name: Object, format?: Object): void;

    remove(name: String, vars?: Object, node?: html.Node): void;

    toggle(name: String, vars?: Object, node?: html.Node): void;

    unregister(name: String): void;
  }

  export interface Plugin { }

  export interface Shortcuts {

    add(pattern: String, desc: String, cmdFunc: String | Function, scope?: Object): Boolean;

    remove(pattern: String): Boolean;
  }

  export interface Theme {

    renderUI(obj: Object): Object;
  }

  export interface UndoManager {

    add(level?: Object, event?: DocumentEvent): Object;

    beforeChange(): void;

    clear(): void;

    extra(callback1: Function, callback2: Function): void;

    hasRedo(): Boolean;

    hasUndo(): Boolean;

    redo(): Object;

    transact(callback: Function): Object;

    undo(): Object;
  }

  export interface WindowManager {

    alert(message: String, callback: Function, scope?: Object): void;

    close(): void;

    confirm(message: String, callback: Function, scope?: Object): void;

    getParams(): Object;

    getWindows(): Array<Window>;

    open(args: Object, params: Object): void;

    setParams(params: Object): void;
  }

  export interface notificationManager {

    close(): void;

    getNotifications(): Array<Object>;

    open(args?: Object): void;
  }

  export namespace dom {

    export interface BookmarkManager {

      new (selection: Selection): BookmarkManager;

      getBookmark(type?: Number, normalized?: Boolean): Object;

      isBookmarkNode(node: HTMLElement): Boolean;

      moveToBookmark(bookmark: Object): Boolean;
    }

    export interface ControlSelection { }

    export interface DOMUtils {

      new (doc: Document, settings?: Object): void;

      add<T>(parentElm: String, name: String, attrs?: Object, html?: String, create?: Boolean): Element | Array<T>;

      addClass<T>(elm: String, cls: String): String | Array<T>;

      addStyle(cssText: String): void;

      bind(target: Element, name: String, func: Function, scope?: Object): Function;

      create(name: String, attrs?: Object, html?: String): Element;

      createFragment(html: String): DocumentFragment;

      createHTML(name: String, attrs?: Object, html?: String): String;

      createRng(): Range;

      decode(s: String): String;

      destroy(): void;

      encode(text: String): String;

      findCommonAncestor(a: Element, b: Element): Element;

      fire(target: Node, name: String, evt: Object): Event;

      get(n: String): Element;

      getAttrib(elm: String, name: String, defaultVal: String): String;

      getAttribs(elm?: HTMLElement): NodeList;

      getNext(node: Node, selector: String): Node;

      getOuterHTML(elm: String): String;

      getParent(node: Node, selector: Function, root?: Node): Node;

      getParents<T>(node: Node, selector: Function, root?: Node): Array<T>;

      getPos(elm: Element, rootElm?: Element): Object;

      getPrev(node: Node, selector: String): Node;

      getRect(elm: Element): Object;

      getRoot(): Element;

      getSize(elm: Element): Object;

      getStyle(elm: String, name: String, computed: Boolean): String;

      getViewPort(win?: Window): Object;

      hasClass(elm: String, cls: String): Boolean;

      hide(elm: String): void;

      insertAfter<T>(node: Element, referenceNode: Element): Element | Array<T>;

      is(elm: Node, selector: String): void;

      isBlock(node: Node): Boolean;

      isEmpty(elements?: Object): Boolean;

      isHidden(elm: String): Boolean;

      loadCSS(url: String): void;

      nodeIndex(node: Node, normalized?: Boolean): Number;

      parseStyle(cssText: String): Object;

      remove<T>(node: String, keepChildren?: Boolean): Element | Array<T>;

      removeAllAttribs(e: Element): void;

      removeClass<T>(elm: String, cls: String): String | Array<T>;

      rename(elm: Element, name: String): Element;

      replace(newElm: Element, oldElm: Element, keepChildren?: Boolean): void;

      run<T>(elm: String, func: Function, scope?: Object): Object | Array<T>;

      select<T>(selector: String, scope?: Object): Array<T>;

      serializeStyle(styles: Object, name?: String): String;

      setAttrib(elm: Element, name: String, value: String): void;

      setAttribs(elm: Element, attrs: Object): void;

      setHTML(elm: Element, html: String): void;

      setOuterHTML(elm: Element, html: Object): void;

      setStyle(elm: String, name: String, value: String): void;

      setStyles(elm: Element, styles: Object): void;

      show(elm: String): void;

      split(parentElm: Element, splitElm: Element, replacementElm?: Element): Element;

      toHex(rgbVal: String): String;

      toggleClass(elm: Element, cls: String, state?: String): void;

      unbind<T>(target: Element, name: String, func: Function): Boolean | Array<T>;

      uniqueId(prefix?: String): String;
    }

    export interface DomQuery {

      new (selector?: String, context?: Document): DomQuery;

      add<T>(items: Array<T>, sort?: Boolean): DomQuery;

      addClass(className: String): DomQuery;

      after(content: String): DomQuery;

      append(content: String): DomQuery;

      appendTo(val: String): DomQuery;

      attr(name: String, value?: String): DomQuery | String;

      before(content: String): DomQuery;

      children(node: Element | String): DomQuery;

      clone(): DomQuery;

      closest(selector: String): DomQuery;

      contents(node: Element | String): DomQuery;

      css(name: String, value?: String): DomQuery | String;

      each(callback: Function): DomQuery;

      each(obj: Object, callback: Function): void;

      empty(): DomQuery;

      eq(index: Number): DomQuery;

      extend(target: Object, object: Object): Object;

      filter(selector: String): DomQuery;

      find(selector: String): DomQuery;

      first(): DomQuery;

      grep<T>(array: Array<T>, callback: Function): Array<T>;

      hasClass(className: String): Boolean;

      hide(): DomQuery;

      html(value?: String): DomQuery | String;

      inArray<T>(item: Object, array: Array<T>): Number;

      is(selector: String): Boolean;

      isArray(array: Object): Boolean;

      last(): DomQuery;

      makeArray<T>(object: Object): Array<T>;

      next(node: Element | String): DomQuery;

      nextUntil(node: Element | String, until: String): DomQuery;

      off(name?: String, callback?: Function): DomQuery;

      offset(offset?: Object): Object | DomQuery;

      on(name: String, callback: Function): DomQuery;

      parent(node: Element | String): DomQuery;

      parents(node: Element | String): DomQuery;

      parentsUntil(node: Element | String, until: String): DomQuery;

      prepend(content: String): DomQuery;

      prependTo(val: String): DomQuery;

      prev(node: Element | String): DomQuery;

      prevUntil(node: Element | String, until: String): DomQuery;

      remove(): DomQuery;

      removeAttr(name: String): DomQuery | String;

      removeClass(className: String): DomQuery;

      replaceWith(content: String): DomQuery;

      show(): DomQuery;

      slice(start: Number, end?: Number): DomQuery;

      text(value?: String): DomQuery | String;

      toArray<T>(): Array<T>;

      toggleClass(className: String, state?: Boolean): DomQuery;

      trigger(name: String): DomQuery;

      trim(str: String): String;

      unwrap(): DomQuery;

      wrap(content: String): DomQuery;

      wrapAll(content: String): DomQuery;

      wrapInner(content: String): DomQuery;
    }

    export interface EventUtils {

      bind(target: Object, names: String, callback: Function, scope: Object): Function;

      clean(target: Object): EventUtils;

      fire(target: Object, name: String, args?: Object): EventUtils;

      unbind(target: Object, names?: String, callback?: Function): EventUtils;
    }

    export interface RangeUtils {

      compareRanges(rng1: Range, rng2: Range): Boolean;

      getCaretRangeFromPoint(clientX: Number, clientY: Number, doc: Document): Range;
    }

    export interface ScriptLoader {

      add(url: String, success?: Function, scope?: Object, failure?: Function): void;

      isDone(url: String): Boolean;

      load(url: String, callback1?: Function, callback2?: Function): void;

      loadQueue(success?: Function, failure?: Function, scope?: Object): void;

      loadScripts(scripts: Array<String>, callback1?: Function, scope?: Object, callback2?: Function): void;

      markDone(url: string): void;
    }

    export interface Selection {

      new (dom: DOMUtils, win: Window, editor: Editor, serializer: Serializer): Selection;

      collapse(toStart?: Boolean): void;

      getBookmark(type?: Number, normalized?: Boolean): Object;

      getContent(args?: Object): String;

      getEnd(real?: Boolean): Element;

      getNode(): Element;

      getRng(w3c: Boolean): Range;

      getSel(): Selection;

      getStart(real?: Boolean): Element;

      isCollapsed(): Boolean;

      moveToBookmark(bookmark: Object): Boolean;

      select(node: Element, content?: Boolean): Element;

      selectorChanged(selector: String, callback: Function): void;

      setContent(content: String, args?: Object): void;

      setCursorLocation(node?: html.Node, offset?: Number): void;

      setNode(elm: Element): Element;

      setRng(rng: Range, forward?: Boolean): void;
    }

    export interface Serializer {

      new (settings: Object, editor?: Editor): Serializer;

      addAttributeFilter(callback: Function): void;

      addNodeFilter(callback: Function): void;

      addRules(rules: String): void;

      addTempAttr(name: String): void;

      serialize(node: HTMLElement, args: Object): void;

      setRules(rules: String): void;

    }

    export interface TreeWalker {

      new (startNode: html.Node, rootNode: html.Node): TreeWalker;

      current(): html.Node;

      next(): html.Node;

      prev(): html.Node;
    }
  }

  export namespace geom {

    export interface Rect {

      clamp(rect: Rect, clampRect: Rect, fixedSize: Boolean): Rect;

      create(x: Number, y: Number, w: Number, h: Number): Rect;

      findBestRelativePosition(rect: Rect, targetRect: Rect, constrainRect: Rect, rels: Array<any>): void;

      fromClientRect(clientRect: ClientRect): Rect;

      inflate(rect: Rect, w: Number, h: Number): Rect;

      intersect(rect: Rect, cropRect: Rect): Rect;

      relativePosition(rect: Rect, targetRect: Rect, rel: String): void;
    }
  }

  export namespace html {

    export interface DomParser {

      new (settings: Object, schema: TinyMce.html.Schema): DomParser;

      addAttributeFilter(attributes: string, callback: Function): void;

      addNodeFilter(attributes: string, callback: Function): void;

      filterNode(node: TinyMce.html.Node): TinyMce.html.Node;

      parse(html: String, args?: Object): TinyMce.html.Node;
    }

    export interface Entities {

      decode(text: String): String;

      encodeAllRaw(text: String): String;

      encodeNamed(text: String, attr?: Boolean, entities?: Object): String;

      encodeNumeric(text: String, attr?: Boolean): String;

      encodeRaw(text: String, attr?: Boolean): String;

      getEncodeFunc(name: String, entities?: String): Function;
    }

    export interface Node {

      new (name: String, type: Number): TinyMce.html.Node;

      append(node: TinyMce.html.Node): TinyMce.html.Node;

      attr(name: String, value?: String): String | TinyMce.html.Node;

      clone(): TinyMce.html.Node;

      create(name: String, attrs: Object): void;

      empty(): TinyMce.html.Node;

      getAll(name: String): Array<TinyMce.html.Node>;

      insert(node: TinyMce.html.Node, ref_node: TinyMce.html.Node, before?: Boolean): TinyMce.html.Node;

      isEmpty(elements: Object): Boolean;

      remove(): TinyMce.html.Node;

      replace(node: TinyMce.html.Node): TinyMce.html.Node;

      unwrap(): void;

      walk(prev?: Boolean): TinyMce.html.Node;

      wrap(wrapperNode: TinyMce.html.Node): TinyMce.html.Node;
    }

    export interface SaxParser {

      new (settings: Object, schema: TinyMce.html.Schema): SaxParser;

      parse(html: String): void;
    }

    export interface Schema {

      new (settings: Object): Schema;

      addCustomElements(custom_elements: String): void;

      addValidChildren(valid_children: String): void;

      addValidElements(valid_elements: String): void;

      getBlockElements(): Object;

      getBoolAttrs(): Object;

      getCustomElements(): Object;

      getElementRule(name: String): Object;

      getInvalidStyles(): void;

      getMoveCaretBeforeOnEnterElements(): Object;

      getNonEmptyElements(): Object;

      getSelfClosingElements(): Object;

      getShortEndedElements(): Object;

      getSpecialElements(): Object;

      getTextBlockElements(): Object;

      getTextInlineElements(): Object;

      getValidClasses(): void;

      getValidStyles(): void;

      getWhiteSpaceElements(): Object;

      isValid(name: String, attr?: String): Boolean;

      isValidChild(name: String, child: String): Boolean;

      setValidElements(valid_elements: String): void;
    }

    export interface Serializer {

      new (settings: Object, schema: TinyMce.html.Schema): Serializer;

      serialize(node: TinyMce.html.Node): String;
    }

    export interface Styles {

      parse(css: String): Object;

      serialize(styles: Object, elementName: String): String;

      toHex(color: String): String;
    }

    export interface Writer {

      new (settings: Object): Writer;

      cdata(text: String): void;

      doctype(text: String): void;

      end(name: String): void;

      getContent(): String;

      pi(name: String, text: String): void;

      reset(): void;

      start(name: String, attrs?: Array<any>, empty?: Boolean): void;

      text(text: String, raw: Boolean): void;
    }
  }

  export namespace ui {

    export interface AbsoluteLayout extends Layout {

      recalc(container: TinyMce.ui.Container): void;

      renderHtml(container: TinyMce.ui.Container): void;
    }

    export interface Button extends Widget {

      icon: String | TinyMce.ui.MenuButton;

      image: String;

      size: String;

      new (settings: Object): Button;

      renderHtml(): String;

      repaint(): void;
    }

    export interface ButtonGroup extends Control {

      renderHtml(): String;
    }

    export interface Checkbox extends Widget {

      checked: Boolean | TinyMce.ui.Checkbox;

      value: Boolean | TinyMce.ui.Checkbox

      new (settings: Object): Checkbox;

      renderHtml(): String;
    }

    export interface Collection<T> {

      new (items?: Array<T>): Collection<T>;

      active(): TinyMce.ui.Collection<T>;

      add(items: Array<T>): TinyMce.ui.Collection<T>;

      addClass(cls: String): TinyMce.ui.Collection<T>;

      disabled(): TinyMce.ui.Collection<T>;

      each(callback: Function): TinyMce.ui.Collection<T>;

      eq(index: Number): TinyMce.ui.Collection<T>;

      exec(name: String, args: Object): TinyMce.ui.Collection<T>;

      filter(selector: String): TinyMce.ui.Collection<T>;

      fire(name: String, args?: Object): TinyMce.ui.Collection<T>;

      hasClass(cls: String): Boolean;

      hide(): TinyMce.ui.Collection<T>;

      indexOf(ctrl: Control): Number;

      name(): TinyMce.ui.Collection<T>;

      off(name?: String, callback?: Function): TinyMce.ui.Collection<T>;

      on(name: String, callback: String): TinyMce.ui.Collection<T>;

      prop(name: String, value?: Object): TinyMce.ui.Collection<T>;

      remove(): TinyMce.ui.Collection<T>;

      removeClass(cls: String): TinyMce.ui.Collection<T>;

      reverse(): TinyMce.ui.Collection<T>;

      selected(): TinyMce.ui.Collection<T>;

      set(items: Array<T>): TinyMce.ui.Collection<T>;

      show(): TinyMce.ui.Collection<T>;

      slice(index: Number, len?: Number): TinyMce.ui.Collection<T>;

      text(): TinyMce.ui.Collection<T>;

      toArray(): Array<T>;

      visible(): TinyMce.ui.Collection<T>;

    }

    export interface ColorBox { }

    export interface ColorButton { }

    export interface ColorPicker { }

    export interface ComboBox { }

    export interface Container extends Control {

      defaults: Object;

      items: TinyMce.ui.Collection<any>;

      layout: String;

      (settings: Object): void;

      add<T>(items: Array<T>): TinyMce.ui.Collection<T>;

      append<T>(items: Array<T>): TinyMce.ui.Container;

      create<T>(items: Array<T>): Array<T>;

      find<T>(selector: String): TinyMce.ui.Collection<T>;

      focus<T>(keyboard?: Boolean): TinyMce.ui.Collection<T>;

      fromJSON(data: Object): TinyMce.ui.Container;

      initLayoutRect(): Object;

      insert<T>(items: Array<T>, index: Number, before: Boolean): void;

      postRender(): TinyMce.ui.Container;

      prepend<T>(items: Array<T>): TinyMce.ui.Container;

      recalc(): void;

      reflow(): TinyMce.ui.Container;

      renderHtml(): String;

      replace(oldItem: TinyMce.ui.Control, newItem: TinyMce.ui.Control): void;

      toJSON(): Object;

    }

    export interface Control {

      border: String;

      classes: String;

      disabled: Boolean;

      hidden: Boolean;

      margin: String;

      minHeight: Number;

      minWidth: Number;

      name: String;

      padding: String;

      role: String;

      style: String;

      new (settings: Object): Control;

      active(state: Boolean): Boolean | TinyMce.ui.Control;

      after<T>(items: Array<T>): TinyMce.ui.Control;

      aria(name: String, value: String): TinyMce.ui.Control;

      before<T>(items: Array<T>): TinyMce.ui.Control;

      blur(): TinyMce.ui.Control;

      encode(text: String, translate: Boolean): String;

      fire(name: String, args: Object, bubble: Boolean): Object;

      //focus(): TinyMce.ui.Control;

      getContainerElm(): Element;

      getEl(suffix: String): Element;

      getParentCtrl(elm: Element): TinyMce.ui.Control;

      hasEventListeners(name: String): Boolean;

      hide(): TinyMce.ui.Control;

      initLayoutRect(): Object;

      innerHtml(html: String): TinyMce.ui.Control;

      layoutRect(newRect?: Object): TinyMce.ui.Control | Object;

      next(): TinyMce.ui.Control;

      off(name: String, callback: Function): TinyMce.ui.Control;

      on(name: String, callback: String): TinyMce.ui.Control;

      parent(parent?: TinyMce.ui.Container): TinyMce.ui.Control;

      parents<T>(selector?: String): TinyMce.ui.Collection<T>;

      parentsAndSelf<T>(selector?: String): TinyMce.ui.Collection<T>;

      postRender(): TinyMce.ui.Control;

      prev(): TinyMce.ui.Control;

      reflow(): TinyMce.ui.Control;

      remove(): TinyMce.ui.Control;

      renderBefore(elm: Element): TinyMce.ui.Control;

      repaint(): void;

      scrollIntoView(align: String): TinyMce.ui.Control;

      show(): TinyMce.ui.Control;

      text(value: String): String | TinyMce.ui.Control;

      title(value: String): String | TinyMce.ui.Control;

      translate(text: String): String;

      visible(state: Boolean): Boolean | TinyMce.ui.Control;
    }

    export interface DragHelper { }

    export interface ElementPath { }

    export interface Factory { }

    export interface FieldSet { }

    export interface FilePicker { }

    export interface FitLayout { }

    export interface FlexLayout { }

    export interface FloatPanel { }

    export interface FlowLayout { }

    export interface Form { }

    export interface FormItem { }

    export interface FormatControls { }

    export interface GridLayout { }

    export interface Iframe { }

    export interface InfoBox { }

    export interface KeyboardNavigation { }

    export interface Label { }

    export interface Layout {

      new (settings: Object): Layout;

      postRender(container: TinyMce.ui.Container): void;

      preRender(container: TinyMce.ui.Container): void;

      recalc(container: TinyMce.ui.Container): void;

      renderHtml(container: TinyMce.ui.Container): void;
    }

    export interface ListBox { }

    export interface Menu { }

    export interface MenuBar { }

    export interface MenuButton { }

    export interface MenuItem { }

    export interface MessageBox { }

    export interface Movable { }

    export interface Notification { }

    export interface Panel { }

    export interface PanelButton { }

    export interface Path { }

    export interface Progress { }

    export interface Radio { }

    export interface ReflowQueue { }

    export interface Resizable { }

    export interface ResizeHandle { }

    export interface Scrollable { }

    export interface SelectBox { }

    export interface Selector { }

    export interface Slider { }

    export interface Spacer { }

    export interface SplitButton { }

    export interface StackLayout { }

    export interface TabPanel { }

    export interface TextBox { }

    export interface Throbber { }

    export interface ToolTip { }

    export interface Toolbar { }

    export interface Widget extends Control {

      autofocus: Boolean;

      tooltip: String | TinyMce.ui.ToolTip;

      new (settings: Object): Widget;

      remove(): TinyMce.ui.Control;
    }

    export interface Window { }
  }

  export namespace util {

    export interface Color {

      new (value: String | Object): Color;

      parse(value: Object): TinyMce.util.Color;

      toHex(): String;

      toHsv(): Object;

      toRgb(): Object;
    }

    export interface Delay {

      clearInterval(interval: Number): void;

      clearTimeout(timeout: Number): void;

      debounce(callback: Function, time: Number): Function;

      requestAnimationFrame(callback: Function, element?: HTMLElement): void;

      setEditorInterval(callback: Function, time: Number): Number;

      setEditorTimeout(editor: TinyMce.Editor, callback: Function, time: Number): Number;

      setInterval(callback: Function, time: Number): Number;

      setTimeout(callback: Function, time: Number): Number;
    }

    export interface EventDispatcher {

      fire(name: String, args?: Object): Object;

      has(name: String): Boolean;

      isNative(name: String): Boolean;

      off(name: String, callback?: Function): Object;

      on(name: String, callback: Function, first?: Boolean): Object;

      once(name: String, callback: Function, first: Boolean): Object;
    }

    export interface I18n {

      rtl: boolean;

      add(code: String, items: Array<Object>): void;

      getCode(): String;

      setCode(newCode: String): void;

      translate(text: String): String;
    }

    export interface JSON {

      parse(s: string): Object;

      serialize(obj: Object, quote?: String): string;
    }

    export interface JSONRequest {

      send(args: Object): void;

      sendRPC(o: Object): void;
    }

    export interface LocalStorage {

      length: Number;

      clear(): void;

      getItem(key: String): String;

      key(index: Number): String;

      removeItem(key: String): void;

      setItem(key: String, value: String): void;
    }

    export interface Observable {

      fire(name: String, args?: Object, bubble?: Boolean): Object;

      hasEventListeners(name: String): Boolean;

      off(name?: String, callback?: () => void): Object;

      on(name: String, callback: (event: any) => void, first?: Boolean): Object;

      once(name: String, callback: (event: any) => void): Object;
    }

    export interface Tools {

      create(s: String, p: Object, root?: Object): void;

      createNS(n: String, o?: Object): Object;

      each(o: Object, cb: Function, s?: Object): void;

      explode(s: String, d: String): void;

      grep<T>(a: Array<T>, f: Function): Array<T>;

      inArray<T>(item: T, arr: Array<T>): Number;

      is(obj: Object, type: String): Boolean;

      isArray(obj: Object): Boolean;

      makeMap<T>(items: Array<T>, delim?: String, map?: Object): Object;

      map<T, S>(array: Array<T>, callback: (c: T) => S): Array<S>;

      resolve(n: String, o?: Object): Object;

      toArray<T>(obj: Object): Array<T>;

      trim(s: String): String;

      walk(o: Object, f: Function, n?: String, s?: String): void;
    }

    export interface URI {

      new (url: String, settings?: Object): URI;

      getURI(noProtoHost: Boolean): URI;

      isSameOrigin(uri: TinyMce.util.URI): Boolean;

      setPath(path: String): void;

      toAbsPath(base: String, path: String): void;

      toAbsolute(uri: String, noHost: Boolean): String;

      toRelPath(base: String, path: String): void;

      toRelative(uri: String): String;
    }

    export interface XHR {

      fire(name: String, args?: Object, bubble?: Boolean): Object;

      hasEventListeners(name: String): Boolean;

      off(name?: String, callback?: Function): Object;

      on(name: String, callback: Function, first?: Boolean): Object;

      once(name: String, callback: Function): Object;

      send(settings: Object): void;
    }

    export interface Promise<T> { }
  }
}

declare var tinymce: TinyMce.Static;
