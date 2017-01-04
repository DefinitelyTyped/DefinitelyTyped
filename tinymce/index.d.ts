// Type definitions for TinyMCE (WIP)
// Project: https://github.com/tinymce/tinymce
// Definitions by: Martin Duparc <https://github.com/martinduparc/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

interface TinyMceObservable {
  off: (name?: string, callback?: Function) => Object;
  on: (name: string, callback: Function) => Object;
  fire: (name: string, args?: Object, bubble?: Boolean) => Event;
}

interface TinyMceEditor extends TinyMceObservable {
  destroy: (automatic: boolean) => void;
  remove: () => void;
  hide: () => void;
  show: () => void;
  getContent: (args?: Object) => string;
  setContent: (content: string, args?: Object) => string;
  focus: (skip_focus?: Boolean) => void;
  undoManager: TinyMceUndoManager;
  settings: Object;
  getDoc: () => Document;
  editorUpload: any;
}

interface TinyMceUndoManager {
  undo: () => Object;
  clear: () => void;
  hasUndo: () => Boolean;
}

interface TinyMceEvent {

}

interface TinyMceStatic extends TinyMceObservable {
  init: (settings: Object) => void;
  execCommand: (c: string, u: Boolean, v: string) => Boolean;
  activeEditor: TinyMceEditor;
  get: (id: String) => TinyMceEditor;
  triggerSave: () => void;
}

declare var tinymce: TinyMceStatic;
