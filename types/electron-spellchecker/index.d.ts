// Type definitions for electron-spellchecker 1.1
// Project: https://github.com/electron-userland/electron-spellchecker
// Definitions by: Daniel Perez Alvarez <https://github.com/unindented>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.2

/// <reference types="electron"/>

export type ContextMenuFormatter = (options: { word: string }) => string;

export class SpellCheckHandler {
  currentSpellchecker: this;

  attachToInput(): void;
  autoUnloadDictionariesOnBlur(): void;
  provideHintText(inputText: string): void;
  switchLanguage(language: string): void;
  getCorrectionsForMisspelling(misspelledWord: string): Promise<string[]>;
  addToDictionary(text: string): void;

  unsubscribe(): void;
}

export class ContextMenuBuilder {
  constructor(
    spellCheckHandler?: SpellCheckHandler,
    target?: Electron.BrowserWindow | Electron.WebviewTag | null,
    debugMode?: boolean,
    processMenu?: (menu: Electron.Menu) => Electron.Menu
  );

  setAlternateStringFormatter(formatter: {
    [key: string]: ContextMenuFormatter;
  }): void;

  showPopupMenu: (info: Electron.ContextMenuParams) => void;
}

export class ContextMenuListener {
  constructor(
    handler: (info: Electron.ContextMenuParams) => void,
    target?: Electron.BrowserWindow | Electron.WebviewTag | null
  );

  unsubscribe(): void;
}
