// Type definitions for TinyMCE 4.5
// Project: https://github.com/tinymce/tinymce
// Definitions by: Martin Duparc <https://github.com/martinduparc/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

// Work In Progress

declare namespace TinyMCE {
  export interface Observable {
    off(name?: string, callback ?: () => void): void;
    on(name: string, callback: () => void): void;
    fire(name: string, args?: any, bubble?: boolean): Event;
  }

  export interface Editor extends Observable {
    $: any;
    iframeElement: string;
    selection: Selection;
    undoManager: UndoManager;
    formatter: Formatter;
    shortcuts: Shortcuts;
    dom: DOMUtils;
    notificationManager: NotificationManager;
    focus(): void;
    getContent(args?: any): string;
    isDirty(): boolean;
    insertContent(content: string, args?: any): any;
    setContent(content: string, args?: any): any;
    reset(): any;
    execCommand(command: string, ui?: boolean, value?: any, args?: any): boolean;
    remove(): any;
    destroy(state?: boolean): void;
    getElement(): Element;
    getDoc(): Document;
    queryCommandSupported(cmd: string): boolean;
    getBody(): Element;
    setDirty(dirty: boolean): void;
    on(eventName: string, handler: () => void): void;
    addShortcut(pattern: string, desc: string, cmdFunc: string, scope?: any ): boolean;
    addButton(name: string, settings: any): void;
    addMenuItem(name: string, settings: any): void;
    menuItems: any;
    initialized: boolean;
  }

  export interface Formatter {
    remove(name: string): any;
    apply(name: string): any;
    toggle(name: string): any;
    match(name: string, vars?: any, node?: Node): boolean;
    matchAll(names: [string], vars?: any): [string];
  }

  export interface UndoManager {
    transact(callback: () => void): any;
    undo(): any;
    redo(): any;
    hasRedo(): boolean;
    hasUndo(): boolean;
  }

  export interface DOMUtils {
    DOM: any;
    getParent(n: Node, s: string): Node;
    setStyle(n: any, na: string, v: string): void;
    select(pattern: string, scope ?: Element): Element[];
    getAttrib(elm: string, name: string, defaultVal ?: string): string;
    isEmpty(elements: any): boolean;
  }

  export interface NotificationManager {
    getNotifications(): any[];
    open(args: any): any;
    close(): any;
  }

  export interface Shortcuts {
    addShortcut(pattern: string, desc: string, cmdFunc: string, scope?: any): boolean;
    remove(pattern: string): boolean;
  }

  export interface Collection {
    active(): Collection;
  }

  export interface Container {
    add(items: any): Collection;
    items(): Collection;
  }

  export interface Tooltip {
    repaint(): void;
  }

  export interface Control {
    renderTo(node?: Node): void;
    innerHtml(html: string): Control;
    $el: any;
    show(): void;
    hide(): void;
    visible(state ?: boolean): boolean;
    disabled(state: boolean): boolean;
    active(state: boolean): boolean;
    on(name: string, callback: () => void): Control;
    parent(parent ?: any): Control;
    settings: any;
    text(text: string): void;
    tooltip(): Tooltip;
  }

  export interface Moveable {
    moveRel(elm: Node, rel: string): Control;
  }

  export interface FloatPanel extends Control, Moveable {

  }

  export interface Menu extends FloatPanel, Control, Container {

  }

  export interface Factory {
    create(settings: any): Control;
  }

  export interface Tools {
    grep(array: any, f: () => void): any;
    each(o: any, cb: () => void, s?: any): void;
  }

  export interface UI {
    Factory: Factory;
    Control: Control;
    FloatPanel: FloatPanel;
  }

  export interface util {
    Tools: Tools;
  }

  export interface Selection {
    getContent(args?: any): string;
    getNode(): any;
    getRng(): Range;
    collapse(toStart?: boolean): any;
    select(node: any, body: boolean): any;
    getStart(): any;
    getEnd(real ?: boolean): void;
    selectorChanged(selector: string, handler: any): void;
    getSel(): any;
  }

  export interface FocusManager {
    isEditorUIElement(elm: Node): boolean;
  }

  export interface UI {
    Factory: Factory;
    Control: Control;
    FloatPanel: FloatPanel;
  }

  export interface Static extends Observable {
    init(settings: any): void;
    execCommand(c: string, u: boolean, v: string): boolean;
    activeEditor: Editor;
    FocusManager: FocusManager;
    get(id: string): Editor;
    triggerSave(): void;
    ui: UI;
    util: util;
  }
}

declare var tinymce: TinyMCE.Static;
