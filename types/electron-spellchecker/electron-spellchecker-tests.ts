import {
  SpellCheckHandler,
  ContextMenuListener,
  ContextMenuBuilder
} from "electron-spellchecker";

const spellCheckHandler = new SpellCheckHandler();
spellCheckHandler.attachToInput();

spellCheckHandler.switchLanguage("en-US");

const contextMenuBuilder = new ContextMenuBuilder(spellCheckHandler);
const contextMenuListener = new ContextMenuListener(info => {
  contextMenuBuilder.showPopupMenu(info);
});
