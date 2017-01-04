// Type definitions for TinyMCE 4.5
// Project: https://github.com/tinymce/tinymce
// Definitions by: Martin Duparc <https://github.com/martinduparc/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

// Work In Progress

declare namespace TinyMCE {
  export interface Observable {
    off: (name?: string, callback?: Function) => Object;
    on: (name: string, callback: Function) => Object;
    fire: (name: string, args?: Object, bubble?: Boolean) => Event;
  }

  export interface Editor extends Observable {
    destroy: (automatic: boolean) => void;
    remove: () => void;
    hide: () => void;
    show: () => void;
    getContent: (args?: Object) => string;
    setContent: (content: string, args?: Object) => string;
    focus: (skip_focus?: Boolean) => void;
    undoManager: UndoManager;
    settings: Object;
    getDoc: () => Document;
    editorUpload: any;
  }

  export interface UndoManager {
    undo: () => Object;
    clear: () => void;
    hasUndo: () => Boolean;
  }

  export interface Static extends Observable {
    init: (settings: Object) => void;
    execCommand: (c: string, u: Boolean, v: string) => Boolean;
    activeEditor: Editor;
    get: (id: String) => Editor;
    triggerSave: () => void;
  }
}

declare var tinymce: TinyMCE.Static;
