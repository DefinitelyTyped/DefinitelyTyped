// Type definitions for TinyMCE 4.5
// Project: https://github.com/tinymce/tinymce
// Definitions by: Martin Duparc <https://github.com/martinduparc/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

// Work In Progress

declare namespace TinyMCE {
  export interface Observable {
    off: (name?: string, callback?: () => void) => any;
    on: (name: string, callback: () => void) => any;
    fire: (name: string, args?: any, bubble?: boolean) => Event;
  }

  export interface Editor extends Observable {
    destroy: (automatic: boolean) => void;
    remove: () => void;
    hide: () => void;
    show: () => void;
    getContent: (args?: any) => string;
    setContent: (content: string, args?: any) => string;
    focus: (skip_focus?: boolean) => void;
    undoManager: UndoManager;
    settings: any;
    getDoc: () => Document;
    editorUpload: any;
  }

  export interface UndoManager {
    undo: () => any;
    clear: () => void;
    hasUndo: () => boolean;
  }

  export interface Static extends Observable {
    init: (settings: any) => void;
    execCommand: (c: string, u: boolean, v: string) => boolean;
    activeEditor: Editor;
    get: (id: string) => Editor;
    triggerSave: () => void;
  }
}

declare var tinymce: TinyMCE.Static;
