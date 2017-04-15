declare module brackets {
  /**
   * Resolves a module (no file extension!) from either core stuff,
   * installed extensions or local within the current extension.
   */
  function getModule(moduleName: string): any;

  function getModule(moduleName: 'command/CommandManager'): brackets.CommandManager;
  function getModule(moduleName: 'command/Menus'): brackets.Menus;
  function getModule(moduleName: 'command/KeyBindingManager'): brackets.KeyBindingManager;

  function getModule(moduleName: 'document/DocumentManager'): brackets.DocumentManager;

  function getModule(moduleName: 'editor/CodeHintManager'): brackets.CodeHintManager;
  function getModule(moduleName: 'editor/EditorManager'): brackets.EditorManager;
  function getModule(moduleName: 'language/LanguageManager'): brackets.LanguageManager;

  function getModule(moduleName: 'utils/AppInit'): brackets.AppInit;
  function getModule(moduleName: 'utils/Async'): brackets.Async;
  function getModule(moduleName: 'utils/StringUtils'): brackets.StringUtils;

  var appFileSystem: FileSystem; 

  interface AppInit {
    appReady(callback: () => void): void;
  }
  
  interface Async {
  }
  
  interface CodeHintManager {

    /**    
     * The method by which a CodeHintProvider registers its willingness to
     * providing hints for editors in a given language.
     *
     * @param provider
     * The hint provider to be registered, described below. 
     *
     * @param languageIds
     * The set of language ids for which the provider is capable of
     * providing hints. If the special language id name "all" is included then
     * the provider may be called for any language.
     *
     * @param priority
     * Used to break ties among hint providers for a particular language.
     * Providers with a higher number will be asked for hints before those
     * with a lower priority value. Defaults to zero.
     */
    registerHintProvider(
      provider: brackets.CodeHintProvider,
      languageIds: string[],
      priority?: number);

    /**
     *  Test if a hint popup is open.
     * @returns true if the hints are open, false otherwise.
     */
    isOpen(): boolean;

    handleKeyEvent;

    /**
     * Start a new implicit hinting session, or update the existing hint list. 
     * Called by the editor after handleKeyEvent, which is responsible for setting
     * the lastChar.
     */
    handleChange(editor: brackets.Editor, changeList: any);

    /**
     * Test whether the provider has an exclusion that is still the same as text after the cursor.
     *
     * @param exclusion - Text not to be overwritten when the provider inserts the selected hint.
     * @param textAfterCursor - Text that is immediately after the cursor position.
     * @return true if the exclusion is not null and is exactly the same as textAfterCursor,
     * false otherwise.
     */
    hasValidExclusion(exclusion: string, textAfterCursor: string): boolean;

    /**
     * Determines the default behavior of the CodeHintManager on tab key events.
     * setInsertHintOnTab(true) indicates that the currently selected code hint
     * should be inserted on tab key events. setInsertHintOnTab(false) indicates
     * that a tab character should be inserted into the editor on tab key events.
     * The default behavior can be overridden by individual providers.
     *
     * @param insertHintOnTab Indicates whether providers should insert the currently
     *      selected hint on tab key events.
     */
    setInsertHintOnTab(insertHintOnTab: boolean);

  }

  interface CodeHintProvider {

    /**
     * Indicates whether the CodeHintManager should request that the provider of 
     * the current session insert the currently selected hint on tab key events,
     * or if instead a tab character should be inserted into the editor. If omitted,
     * the fallback behavior is determined by the CodeHintManager. The default
     * behavior is to insert a tab character, but this can be changed with the
     * CodeHintManager.setInsertHintOnTab() method.
     */
    insertHintOnTab?: boolean;

    /**
     * The method by which a provider indicates intent to provide hints for a
     * given editor. The manager calls this method both when hints are
     * explicitly requested (via, e.g., Ctrl-Space) and when they may be
     * implicitly requested as a result of character insertion in the editor.
     * If the provider responds negatively then the manager may query other
     * providers for hints. Otherwise, a new hinting session begins with this
     * provider, during which the manager may repeatedly query the provider
     * for hints via the getHints method. Note that no other providers will be
     * queried until the hinting session ends.
     *
     * The implicitChar parameter is used to determine whether the hinting
     * request is explicit or implicit. If the string is null then hints were
     * explicitly requested and the provider should reply based on whether it
     * is possible to return hints for the given editor context. Otherwise,
     * the string contains just the last character inserted into the editor's
     * document and the request for hints is implicit. In this case, the
     * provider should determine whether it is both possible and appropriate
     * to show hints. Because implicit hints can be triggered by every
     * character insertion, hasHints may be called frequently; consequently,
     * the provider should endeavor to return a value as quickly as possible.
     * 
     * Because calls to hasHints imply that a hinting session is about to
     * begin, a provider may wish to clean up cached data from previous
     * sessions in this method. Similarly, if the provider returns true, it
     * may wish to prepare to cache data suitable for the current session. In
     * particular, it should keep a reference to the editor object so that it
     * can access the editor in future calls to getHints and insertHints.
     * param editor 
     * A non-null editor object for the active window.
     *
     * param implicitChar 
     * Either null, if the hinting request was explicit, or a single character
     * that represents the last insertion and that indicates an implicit
     * hinting request.
     *
     * @return 
     * Determines whether the current provider is able to provide hints for
     * the given editor context and, in case implicitChar is non- null,
     * whether it is appropriate to do so.
     */
    hasHints(
      editor: brackets.Editor,
      implicitChar: string): boolean;

    /**
     * The method by which a provider provides hints for the editor context
     * associated with the current session. The getHints method is called only
     * if the provider asserted its willingness to provide hints in an earlier
     * call to hasHints. The provider may return null or false, which indicates 
     * that the manager should end the current hinting session and close the hint
     * list window; or true, which indicates that the manager should end the 
     * current hinting session but immediately attempt to begin a new hinting
     * session by querying registered providers. Otherwise, the provider should
     * return a response object that contains the following properties:
     *
     *  1. hints, a sorted array hints that the provider could later insert
     *     into the editor;
     *  2. match, a string that the manager may use to emphasize substrings of
     *     hints in the hint list; and
     *  3. selectInitial, a boolean that indicates whether or not the the
     *     first hint in the list should be selected by default.
     *  4. handleWideResults, a boolean (or undefined) that indicates whether
     *     to allow result string to stretch width of display.
     *
     * If the array of
     * hints is empty, then the manager will render an empty list, but the
     * hinting session will remain open and the value of the selectInitial
     * property is irrelevant.
     *
     * Alternatively, the provider may return a jQuery.Deferred object
     * that resolves with an object with the structure described above. In
     * this case, the manager will initially render the hint list window with
     * a throbber and will render the actual list once the deferred object
     * resolves to a response object. If a hint list has already been rendered
     * (from an earlier call to getHints), then the old list will continue
     * to be displayed until the new deferred has resolved.
     *
     * Both the manager and the provider can reject the deferred object. The
     * manager will reject the deferred if the editor changes state (e.g., the
     * user types a character) or if the hinting session ends (e.g., the user
     * explicitly closes the hints by pressing escape). The provider can use
     * this event to, e.g., abort an expensive computation. Consequently, the
     * provider may assume that getHints will not be called again until the
     * deferred object from the current call has resolved or been rejected. If
     * the provider rejects the deferred, the manager will end the hinting
     * session.
     * 
     * The getHints method may be called by the manager repeatedly during a
     * hinting session. Providers may wish to cache information for efficiency
     * that may be useful throughout these sessions. The same editor context
     * will be used throughout a session, and will only change during the
     * session as a result of single-character insertions, deletions and
     * cursor navigations. The provider may assume that, throughout the
     * lifetime of the session, the getHints method will be called exactly
     * once for each such editor change. Consequently, the provider may also
     * assume that the document will not be changed outside of the editor
     * during a session.
     *
     * @param implicitChar
     * Either null, if the request to update the hint list was a result of
     * navigation, or a single character that represents the last insertion.
     *
     * @return
     * Null if the provider wishes to end the hinting session. Otherwise, a
     * response object, possibly deferred, that provides 1. a sorted array
     * hints that consists either of strings or jQuery objects; 2. a string
     * match, possibly null, that is used by the manager to emphasize
     * matching substrings when rendering the hint list; and 3. a boolean that
     * indicates whether the first result, if one exists, should be selected
     * by default in the hint list window. If match is non-null, then the
     * hints should be strings. 
     * 
     * If the match is null, the manager will not 
     * attempt to emphasize any parts of the hints when rendering the hint 
     * list; instead the provider may return strings or jQuery objects for 
     * which emphasis is self-contained. For example, the strings may contain
     * substrings that wrapped in bold tags. In this way, the provider can 
     * choose to let the manager handle emphasis for the simple and common case
     * of prefix matching, or can provide its own emphasis if it wishes to use 
     * a more sophisticated matching algorithm.
     */
    getHints(
      implicitChar: string): any;

    /**
     * The method by which a provider inserts a hint into the editor context
     * associated with the current session. The provider may assume that the
     * given hint was returned by the provider in some previous call in the
     * current session to getHints, but not necessarily the most recent call.
     * After the insertion has been performed, the current hinting session is
     * closed. The provider should return a boolean value to indicate whether
     * or not the end of the session should be immediately followed by a new
     * explicit hinting request, which may result in a new hinting session
     * being opened with some provider, but not necessarily the current one.
     *
     * @param hint 
     * The hint to be inserted into the editor context for the current session.
     * 
     * @return 
     * Indicates whether the manager should follow hint insertion with an
     * explicit hint request.
     */
    insertHint(
      hint: string): boolean;
  }
  
  module CodeHintProvider {
    interface Results {
      hints: any[]; // strings or jQuery objects
      match: string;
      selectInitial: boolean;
    }
  }

 /**
  * Manages global application commands that can be called from menu items, key bindings, or subparts
  * of the application.
  *
  * This module dispatches these event(s):
  *    - commandRegistered  -- when a new command is registered
  *    - beforeExecuteCommand -- before dispatching a command
  */
  interface CommandManager {
    /**
     * Registers a global command.
     * @param name - text that will be displayed in the UI to represent command
     * @param id - unique identifier for command.
     *      Core commands in Brackets use a simple command title as an id, for example "open.file".
     *      Extensions should use the following format: "author.myextension.mycommandname".
     *      For example, "lschmitt.csswizard.format.css".
     * @param commandFn - the function to call when the command is executed. Any arguments passed to
     *     execute() (after the id) are passed as arguments to the function. If the function is asynchronous,
     *     it must return a jQuery promise that is resolved when the command completes. Otherwise, the
     *     CommandManager will assume it is synchronous, and return a promise that is already resolved.
     */
    register(name: string, id: string, commandFn: Function): brackets.Command;

    registerInternal(id: string, commandFn: Function): brackets.Command;

    /**
     * Retrieves a Command object by id
     */
    get(id: string): brackets.Command;
    
    /**
     * Returns the ids of all registered commands
     */
    getAll(): string[];

    /**
     * Looks up and runs a global command. Additional arguments are passed to the command.
     *
     * @param id The ID of the command to run.
     * @return a jQuery promise that will be resolved when the command completes.
     */
    execute(id: string): JQueryPromise<any>;

  }

  /**
   * Events:
   *      enabledStateChange
   *      checkedStateChange
   *      keyBindingAdded
   *      keyBindingRemoved
   */
  interface Command {
    getId(): string;
    
    /**
     * Executes the command. Additional arguments are passed to the executing function
     *
     * @return a jQuery promise that will be resolved when the command completes.
     */
    execute(...args: any[]): JQueryPromise<any>;

    getEnabled(): boolean;

    /**
     * Sets enabled state of Command and dispatches "enabledStateChange"
     * when the enabled state changes.
     */
    setEnabled(enabled: boolean);

    getChecked(): boolean;
    
    /**
     * Sets enabled state of Command and dispatches "checkedStateChange"
     * when the enabled state changes.
     */
    setChecked(checked: boolean);

    getName(): string;

    /**
     * Sets the name of the Command and dispatches "nameChange" so that
     * UI that reflects the command name can update.
     *
     * Note, a Command name can appear in either HTML or native UI
     * so HTML tags should not be used. To add a Unicode character,
     * use \uXXXX instead of an HTML entity.
     */
    setName(name: string);

  }

  interface DocumentManager {
    /**
     * Returns the Document that is currently open in the editor UI. May be null.
     * When this changes, DocumentManager dispatches a "currentDocumentChange" event. The current
     * document always has a backing Editor (Document._masterEditor != null) and is thus modifiable.
     */
    getCurrentDocument(): brackets.Document;

    /**
     * Changes currentDocument to the given Document, firing currentDocumentChange, which in turn
     * causes this Document's main editor UI to be shown in the editor pane, updates the selection
     * in the file tree / working set UI, etc. This call may also add the item to the working set.
     * 
     * @param document  The Document to make current. May or may not already be in the
     *      working set.
     */
    setCurrentDocument(doc: brackets.Document);
    
    
    /**
     * Gets an existing open Document for the given file, or creates a new one if the Document is
     * not currently open ('open' means referenced by the UI somewhere). Always use this method to
     * get Documents; do not call the Document constructor directly. This method is safe to call
     * in parallel.
     *
     * If you are going to hang onto the Document for more than just the duration of a command - e.g.
     * if you are going to display its contents in a piece of UI - then you must addRef() the Document
     * and listen for changes on it. (Note: opening the Document in an Editor automatically manages
     * refs and listeners for that Editor UI).
     *
     * @return A promise object that will be resolved with the Document, or rejected
     *      with a NativeFileError if the file is not yet open and can't be read from disk.
     */
    getDocumentForPath(fullPath: string): JQueryPromise<brackets.Document>;

    /**
     * Returns the existing open Document for the given file, or null if the file is not open ('open'
     * means referenced by the UI somewhere). If you will hang onto the Document, you must addRef()
     * it; see {@link getDocumentForPath()} for details.
     */
    getOpenDocumentForPath(fullPath: string): brackets.Document;


    /**
     * Returns all Documents that are 'open' in the UI somewhere (for now, this means open in an
     * inline editor and/or a full-size editor). Only these Documents can be modified, and only
     * these Documents are synced with external changes on disk.
     */
    getAllOpenDocuments(): brackets.Document[];


    /**
     * Creates an untitled document. The associated FileEntry has a fullPath
     * looks like /some-random-string/Untitled-counter.fileExt.
     *
     * @param counter - used in the name of the new Document's FileEntry
     * @param fileExt - file extension of the new Document's FileEntry
     * @return a new untitled Document
     */
    createUntitledDocument(counter: number, fileExt: string): brackets.Document;

  }

  interface Document {
    /**
     * The FileEntry for this document. Need not lie within the project.
     * If Document is untitled, this is an InaccessibleFileEntry object.
     */
    file: FileEntry;

    /**
     * The Language for this document. Will be resolved by file extension in the constructor
     */
    language: brackets.Language;

    /**
     * Whether this document has unsaved changes or not.
     * When this changes on any Document, DocumentManager dispatches a "dirtyFlagChange" event.
     */
    isDirty: boolean;

    /**
     * What we expect the file's timestamp to be on disk. If the timestamp differs from this, then
     * it means the file was modified by an app other than Brackets.
     */
    diskTimestamp: Date;
    
    /** Add a ref to keep this Document alive */
    addRef();

    /** Remove a ref that was keeping this Document alive */
    releaseRef();
    
    /**
     * Returns the document's current contents; may not be saved to disk yet. Whenever this
     * value changes, the Document dispatches a "change" event.
     *
     * @param useOriginalLineEndings If true, line endings in the result depend on the
     *      Document's line endings setting (based on OS & the original text loaded from disk).
     *      If false, line endings are always \n (like all the other Document text getter methods).
     */
    getText(useOriginalLineEndings?: boolean): string;

    /**
     * Sets the contents of the document. Treated as an edit. Line endings will be rewritten to
     * match the document's current line-ending style.
     * @param text The text to replace the contents of the document with.
     */
    setText(text: string);

    /**
     * Sets the contents of the document. Treated as reloading the document from disk: the document
     * will be marked clean with a new timestamp, the undo/redo history is cleared, and we re-check
     * the text's line-ending style. CAN be called even if there is no backing editor.
     * @param text The text to replace the contents of the document with.
     * @param newTimestamp Timestamp of file at the time we read its new contents from disk.
     */
    refreshText(text: string, newTimestamp: Date);

    /**
     * Adds, replaces, or removes text. If a range is given, the text at that range is replaced with the
     * given new text; if text == "", then the entire range is effectively deleted. If 'end' is omitted,
     * then the new text is inserted at that point and all existing text is preserved. Line endings will
     * be rewritten to match the document's current line-ending style.
     * 
     * IMPORTANT NOTE: Because of #1688, do not use this in cases where you might be
     * operating on a linked document (like the main document for an inline editor) 
     * during an outer CodeMirror operation (like a key event that's handled by the
     * editor itself). A common case of this is code hints in inline editors. In
     * such cases, use `editor._codeMirror.replaceRange()` instead. This should be
     * fixed when we migrate to use CodeMirror's native document-linking functionality.
     *
     * @param text  Text to insert or replace the range with
     * @param start  Start of range, inclusive (if 'to' specified) or insertion point (if not)
     * @param end  End of range, exclusive; optional
     * @param origin  Optional string used to batch consecutive edits for undo.
     *     If origin starts with "+", then consecutive edits with the same origin will be batched for undo if 
     *     they are close enough together in time.
     *     If origin starts with "*", then all consecutive edit with the same origin will be batched for
     *     undo.
     *     Edits with origins starting with other characters will not be batched.
     *     (Note that this is a higher level of batching than batchOperation(), which already batches all
     *     edits within it for undo. Origin batching works across operations.)
     */
    replaceRange(
      text: string,
      start: {line:number; ch:number;},
      end?: {line:number; ch:number;},
      origin?: string);

    /**
     * Returns the characters in the given range. Line endings are normalized to '\n'.
     * @param start  Start of range, inclusive
     * @param end  End of range, exclusive
     */
    getRange(start: {line:number; ch:number;}, end: {line:number; ch:number;}): string;

    /**
     * Returns the text of the given line (excluding any line ending characters)
     * @param Zero-based line number
     */
    getLine(lineNum: number): string;

    /**
     * Batches a series of related Document changes. Repeated calls to replaceRange() should be wrapped in a
     * batch for efficiency. Begins the batch, calls doOperation(), ends the batch, and then returns.
     */
    batchOperation(doOperation: () => any);

    /**
     * Returns the language this document is written in.
     * The language returned is based on the file extension.
     * @return An object describing the language used in this document
     */
    getLanguage(): brackets.Language;

    /**
     * Is this an untitled document?
     * 
     * @return whether or not the document is untitled
     */
    isUntitled(): boolean;
    notifnotifySaved();

  }

  /**
   * EditorManager owns the UI for the editor area. This essentially mirrors the 'current document'
   * property maintained by DocumentManager's model.
   *
   * Note that there is a little bit of unusual overlap between EditorManager and DocumentManager:
   * because the Document state is actually stored in the CodeMirror editor UI, DocumentManager is
   * not a pure headless model. Each Document encapsulates an editor instance, and thus EditorManager
   * must have some knowledge about Document's internal state (we access its _editor property).
   *
   * This module dispatches the following events:
   *    - activeEditorChange --  Fires after the active editor (full or inline) changes and size/visibility
   *                             are complete. Doesn't fire when editor temporarily loses focus to a non-editor
   *                             control (e.g. search toolbar or modal dialog, or window deactivation). Does
   *                             fire when focus moves between inline editor and its full-size container.
   *                             This event tracks getActiveEditor() changes, while DocumentManager's
   *                             currentDocumentChange tracks getCurrentFullEditor() changes.
   *                             The 2nd arg to the listener is which Editor became active; the 3rd arg is
   *                             which Editor is deactivated as a result. Either one may be null.
   *                             NOTE (#1257): getFocusedEditor() sometimes lags behind this event. Listeners
   *                             should use the arguments or call getActiveEditor() to reliably see which Editor 
   *                             just gained focus.
   */
  interface EditorManager {

    /**
     * Flag for _onEditorAreaResize() to always force refresh.
     */
    REFRESH_FORCE: string;

    /**
     * Flag for _onEditorAreaResize() to never refresh.
     */
    REFRESH_SKIP: string;
    
    /**
     * Designates the DOM node that will contain the currently active editor instance. EditorManager
     * will own the content of this DOM node.
     * @param holder (jQueryObject)
     */
    setEditorHolder(holder: any);
    
    /** Returns the visible full-size Editor corresponding to DocumentManager.getCurrentDocument() */
    getCurrentFullEditor(): brackets.Editor;

    /**
     * Creates a new inline Editor instance for the given Document.
     * The editor is not yet visible or attached to a host editor.
     * @param doc  Document for the Editor's content
     * @param range  If specified, all lines outside the given
     *      range are hidden from the editor. Range is inclusive. Line numbers start at 0.
     * @param inlineContent
     * 
     * @return {{content:DOMElement, editor:Editor}}
     */
    createInlineEditorForDocument(doc: brackets.Document, range: {startLine: number; endLine: number;}, inlineContent: HTMLDivElement): { content: HTMLElement; editor: brackets.Editor; };
    createInlineEditorForDocument(doc: brackets.Document, inlineContent: HTMLDivElement): { content: HTMLElement; editor: brackets.Editor; };

    /** 
     * Returns focus to the last visible editor that had focus. If no editor visible, does nothing.
     * This function should be called to restore editor focus after it has been temporarily
     * removed. For example, after a dialog with editable text is closed.
     */
    focusEditor();

    /**
     * Returns the currently focused editor instance (full-sized OR inline editor).
     * This function is similar to getActiveEditor(), with one main difference: this
     * function will only return editors that currently have focus, whereas 
     * getActiveEditor() will return the last visible editor that was given focus (but
     * may not currently have focus because, for example, a dialog with editable text
     * is open).
     */
    getFocusedEditor(): brackets.Editor;

    /**
     * Returns the current active editor (full-sized OR inline editor). This editor may not 
     * have focus at the moment, but it is visible and was the last editor that was given 
     * focus. Returns null if no editors are active.
     * @see getFocusedEditor()
     */
    getActiveEditor(): brackets.Editor;

    /**
     * Returns the currently focused inline widget, if any.
     */
    getFocusedInlineWidget(): brackets.InlineWidget;

    /**
     * Must be called whenever the size/visibility of editor area siblings is changed without going through
     * PanelManager or Resizer. Resizable panels created via PanelManager do not require this manual call.
     */
    resizeEditor();

    /**
     * Registers a new inline editor provider. When Quick Edit is invoked each registered provider is
     * asked if it wants to provide an inline editor given the current editor and cursor location.
     * An optional priority parameter is used to give providers with higher priority an opportunity
     * to provide an inline editor before providers with lower priority.
     * 
     * The provider returns a promise that will be resolved with an InlineWidget, or returns null
     * to indicate the provider doesn't want to respond to this case.
     */
    registerInlineEditProvider(
      provider: (editor: brackets.Editor, position: {line:number;ch:number;}) => JQueryPromise<brackets.InlineWidget>,
      priority: number);

    /**
     * Registers a new inline docs provider. When Quick Docs is invoked each registered provider is
     * asked if it wants to provide inline docs given the current editor and cursor location.
     * An optional priority parameter is used to give providers with higher priority an opportunity
     * to provide an inline editor before providers with lower priority.
     * 
     * The provider returns a promise that will be resolved with an InlineWidget, or returns null
     * to indicate the provider doesn't want to respond to this case.
     */
    registerInlineDocsProvider(provider: (editor: brackets.Editor, position: {line:number;ch:number}) => JQueryPromise<brackets.InlineWidget>, priority: number);

    /**
     * Registers a new jump-to-definition provider. When jump-to-definition is invoked each
     * registered provider is asked if it wants to provide jump-to-definition results, given
     * the current editor and cursor location. 
     * The provider returns a promise that will be resolved with jump-to-definition results, or
     * returns null to indicate the provider doesn't want to respond to this case.
     */
    registerJumpToDefProvider(provider: (editor: brackets.Editor, position: {line:number;ch:number}) => JQueryPromise<brackets.InlineWidget>);

    getInlineEditors;

    /**
     * Removes the given widget UI from the given hostEditor (agnostic of what the widget's content
     * is). The widget's onClosed() callback will be run as a result.
     * @param hostEditor The editor containing the widget.
     * @param inlineWidget The inline widget to close.
     * @return A promise that's resolved when the widget is fully closed.
     */
    closeInlineWidget(hostEditor: brackets.Editor, inlineWidget: brackets.InlineWidget): JQueryPromise<any>;
  }

/**
 * Editor is a 1-to-1 wrapper for a CodeMirror editor instance. It layers on Brackets-specific
 * functionality and provides APIs that cleanly pass through the bits of CodeMirror that the rest
 * of our codebase may want to interact with. An Editor is always backed by a Document, and stays
 * in sync with its content; because Editor keeps the Document alive, it's important to always
 * destroy() an Editor that's going away so it can release its Document ref.
 *
 * For now, there's a distinction between the "master" Editor for a Document - which secretly acts
 * as the Document's internal model of the text state - and the multitude of "slave" secondary Editors
 * which, via Document, sync their changes to and from that master.
 *
 * For now, direct access to the underlying CodeMirror object is still possible via _codeMirror --
 * but this is considered deprecated and may go away.
 *  
 * The Editor object dispatches the following events:
 *    - keyEvent -- When any key event happens in the editor (whether it changes the text or not).
 *          Event handlers are passed ({Editor}, {KeyboardEvent}). The 2nd arg is the raw DOM event.
 *          Note: most listeners will only want to respond when event.type === "keypress".
 *    - cursorActivity -- When the user moves the cursor or changes the selection, or an edit occurs.
 *          Note: do not listen to this in order to be generally informed of edits--listen to the
 *          "change" event on Document instead.
 *    - scroll -- When the editor is scrolled, either by user action or programmatically.
 *    - lostContent -- When the backing Document changes in such a way that this Editor is no longer
 *          able to display accurate text. This occurs if the Document's file is deleted, or in certain
 *          Document->editor syncing edge cases that we do not yet support (the latter cause will
 *          eventually go away).
 *    - optionChange -- Triggered when an option for the editor is changed. The 2nd arg to the listener
 *          is a string containing the editor option that is changing. The 3rd arg, which can be any
 *          data type, is the new value for the editor option.
 *
 * The Editor also dispatches "change" events internally, but you should listen for those on
 * Documents, not Editors.
 *
 * These are jQuery events, so to listen for them you do something like this:
 *    $(editorInstance).on("eventname", handler);
 */
  interface Editor {

    document: brackets.Document;

    /**
     * Removes this editor from the DOM and detaches from the Document. If this is the "master"
     * Editor that is secretly providing the Document's backing state, then the Document reverts to
     * a read-only string-backed mode.
     */
    destroy();

    /** 
     * Selects all text and maintains the current scroll position.
     */
    selectAllNoScroll();

    /** @return True if editor is not showing the entire text of the document (i.e. an inline editor) */
    isTextSubset(): boolean;

    /**
     * Gets the current cursor position within the editor. If there is a selection, returns whichever
     * end of the range the cursor lies at.
     * @param expandTabs  If true, return the actual visual column number instead of the character offset in
     *      the "ch" property.
     */
    getCursorPos(expandTabs: boolean): {line: number;ch:number;};

    /**
     * Returns the display column (zero-based) for a given string-based pos. Differs from pos.ch only
     * when the line contains preceding \t chars. Result depends on the current tab size setting.
     */
    getColOffset(pos: {line:number;ch:number;}): number;

    /**
     * Sets the cursor position within the editor. Removes any selection.
     * @param line  The 0 based line number.
     * @param ch  The 0 based character position; treated as 0 if unspecified.
     * @param center  True if the view should be centered on the new cursor position.
     * @param expandTabs  If true, use the actual visual column number instead of the character offset as
     *      the "ch" parameter.
     */
    setCursorPos(line: number, ch: number, center: boolean, expandTabs: boolean);

    /**
     * Set the editor size in pixels or percentage
     * @param width (number|string)
     * @param height (number|string)
     */
    setSize(width: any, height: any);

    /**
     * Scrolls the editor viewport to vertically center the line with the cursor,
     * but only if the cursor is currently near the edges of the viewport or
     * entirely outside the viewport.
     *
     * This does not alter the horizontal scroll position.
     *
     * @param centerOptions Option value, or 0 for no options.
     */
    centerOnCursor(centerOptions: number);

    /**
     * Given a position, returns its index within the text (assuming \n newlines)
     * @param {!{line:number, ch:number}}
     * @return {number}
     */
    indexFromPos(coords: {line:number;ch:number;}): number;

    /**
     * Returns true if pos is between start and end (INclusive at start; EXclusive at end by default,
     * but overridable via the endInclusive flag).
     */
    posWithinRange(
      pos: {line:number;ch:number;},
      start: {line:number;ch:number;},
      end: {line:number;ch:number;},
      endInclusive: boolean);

    /**
     * @return True if there's a text selection; false if there's just an insertion point
     */
    hasSelection(): boolean;

    /**
     * Gets the current selection. Start is inclusive, end is exclusive. If there is no selection,
     * returns the current cursor position as both the start and end of the range (i.e. a selection
     * of length zero).
     */
    getSelection(): {start:{line:number;ch:number;}; end:{line:number;ch:number;};};

    /**
     * @return The currently selected text, or "" if no selection. Includes \n if the
     * selection spans multiple lines (does NOT reflect the Document's line-endings style).
     */
    getSelectedText(): string;

    /**
     * Sets the current selection. Start is inclusive, end is exclusive. Places the cursor at the
     * end of the selection range. Optionally centers the around the cursor after
     * making the selection
     * @param centerOptions Option value, or 0 for no options.
     */
    setSelection(
      start: {line:number;ch:number;},
      end: {line:number;ch:number;},
      center: boolean,
      centerOptions: number);

    /**
     * Selects word that the given pos lies within or adjacent to. If pos isn't touching a word
     * (e.g. within a token like "//"), moves the cursor to pos without selecting a range.
     * Adapted from selectWordAt() in CodeMirror v2.
     */
    selectWordAt(pos: {line:number;ch:number;});

    /**
     * Gets the total number of lines in the the document (includes lines not visible in the viewport)
     */
    lineCount(): number;

    /**
     * Deterines if line is fully visible.
     * @param line zero-based index of the line to test
     * @return true if the line is fully visible, false otherwise
     */
    isLineVisible(line: number): boolean;

    /**
     * Gets the number of the first visible line in the editor.
     * @returns The 0-based index of the first visible line.
     */
    getFirstVisibleLine(): number;

    /**
     * Gets the number of the last visible line in the editor.
     * @returns The 0-based index of the last visible line.
     */
    getLastVisibleLine(): number;

    /**
     * Gets the total height of the document in pixels (not the viewport)
     * @returns height in pixels
     */
    totalHeight(): number;

    /**
     * Gets the scroller element from the editor.
     */
    getScrollerElement(): HTMLDivElement;

    /**
     * Gets the root DOM node of the editor.
     * @returns The editor's root DOM node.
     */
    getRootElement(): HTMLDivElement;

    /**
     * Returns the current scroll position of the editor.
     * @returns The x,y scroll position in pixels
     */
    getScrollPos(): {x:number; y:number;};

    /**
     * Sets the current scroll position of the editor.
     * @param x scrollLeft position in pixels
     * @param y scrollTop position in pixels
     */
    setScrollPos(x: number, y: number);

    /*
     * Returns the current text height of the editor.
     * @returns Height of the text in pixels
     */
    getTextHeight(): number;

    /**
     * Adds an inline widget below the given line. If any inline widget was already open for that
     * line, it is closed without warning.
     * @param pos Position in text to anchor the inline.
     * @param inlineWidget The widget to add.
     * @param scrollLineIntoView Scrolls the associated line into view. Default true.
     * @return A promise object that is resolved when the widget has been added (but might
     *     still be animating open). Never rejected.
     */
    addInlineWidget(
      pos: {line:number;ch:number;},
      inlineWidget: brackets.InlineWidget,
      scrollLineIntoView: boolean): JQueryPromise<any>;

    /**
     * Removes all inline widgets
     */
    removeAllInlineWidgets();

    /**
     * Removes the given inline widget.
     * @param inlineWidget The widget to remove.
     * @return A promise that is resolved when the inline widget is fully closed and removed from the DOM.
     */
    removeInlineWidget(inlineWidget: brackets.InlineWidget): JQueryPromise<any>;

    /**
     * Removes all inline widgets for a given line
     * @param lineNum The line number to modify
     */
    removeAllInlineWidgetsForLine(lineNum: number);

    /**
     * Returns the offset of the top of the virtual scroll area relative to the browser window (not the editor
     * itself). Mainly useful for calculations related to scrollIntoView(), where you're starting with the
     * offset() of a child widget (relative to the browser window) and need to figure out how far down it is from
     * the top of the virtual scroll area (excluding the top padding).
     */
    getVirtualScrollAreaTop(): number;

    /**
     * Sets the height of an inline widget in this editor. 
     * @param inlineWidget The widget whose height should be set.
     * @param height The height of the widget.
     * @param ensureVisible Whether to scroll the entire widget into view.
     */
    setInlineWidgetHeight(inlineWidget: brackets.InlineWidget, height: number, ensureVisible: boolean);

    /** Gives focus to the editor control */
    focus();

    /** Returns true if the editor has focus */
    hasFocus(): boolean;
    
    /**
     * Re-renders the editor UI
     * @param handleResize true if this is in response to resizing the editor. Default false.
     */
    refresh(handleResize?: boolean);

    /**
     * Re-renders the editor, and all children inline editors.
     * @param handleResize true if this is in response to resizing the editor. Default false.
     */
    refreshAll(handleResize?: boolean);

    /** Undo the last edit. */
    undo();

    /** Redo the last un-done edit. */
    redo();

    /**
     * Returns true if the editor is fully visible--i.e., is in the DOM, all ancestors are
     * visible, and has a non-zero width/height.
     */
    isFullyVisible(): boolean;

    /**
     * Gets the syntax-highlighting mode for the current selection or cursor position. (The mode may
     * vary within one file due to embedded languages, e.g. JS embedded in an HTML script block).
     *
     * Returns null if the mode at the start of the selection differs from the mode at the end -
     * an *approximation* of whether the mode is consistent across the whole range (a pattern like
     * A-B-A would return A as the mode, not null).
     *
     * @return (Object|string) Name of syntax-highlighting mode, or object containing a "name" property
     *     naming the mode along with configuration options required by the mode. 
     *     See {@link LanguageManager#getLanguageForPath()} and {@link Language#getMode()}.
     */
    getModeForSelection(): any;

    /**
     * Gets the syntax-highlighting mode for the document.
     *
     * @return (Object|String) Object or Name of syntax-highlighting mode; see {@link LanguageManager#getLanguageForPath()} and {@link Language#getMode()}.
     */
    getModeForDocument();

  }

  module Editor {
    /**
     * Sets whether to use tab characters (vs. spaces) when inserting new text. Affects all Editors.
     */
    function setUseTabChar(value: boolean);

    /** Gets whether all Editors use tab characters (vs. spaces) when inserting new text */
    function getUseTabChar();

    /**
     * Sets tab character width. Affects all Editors.
     */
    function setTabSize(value: number);

    /** Get indent unit  */
    function getTabSize(): number;

    /**
     * Sets indentation width. Affects all Editors.
     */
    function setSpaceUnits(value: number);

    /** Get indentation width */
    function getSpaceUnits(): number;

    /**
     * Sets the auto close brackets. Affects all Editors.
     */
    function setCloseBrackets(value: boolean);

    /** Gets whether all Editors use auto close brackets */
    function getCloseBrackets(): boolean;

    /**
     * Sets show line numbers option and reapply it to all open editors.
     */
    function setShowLineNumbers(value: boolean);

        
    /** Returns true if show line numbers is enabled for all editors */
    function getShowLineNumbers(): boolean;

    /**
     * Sets show active line option and reapply it to all open editors.
     */
    function setShowActiveLine(value: boolean);

    /** Returns true if show active line is enabled for all editors */
    function getShowActiveLine(): boolean;

    /**
     * Sets word wrap option and reapply it to all open editors.
     */
    function setWordWrap(value: boolean);

    /** Returns true if word wrap is enabled for all editors */
    function getWordWrap(): boolean;

  }

  interface InlineWidget {
  }
  
  interface FileSystem {
  }

  interface KeyBindingManager {
    getKeymap;
    setEnabled;
    addBinding;
    removeBinding;
    formatKeyDescriptor;
    getKeyBindings;
    addGlobalKeydownHook;
    removeGlobalKeydownHook;

    /**
     * Use windows-specific bindings if no other are found (e.g. Linux).
     * Core Brackets modules that use key bindings should always define at
     * least a generic keybinding that is applied for all platforms. This
     * setting effectively creates a compatibility mode for third party
     * extensions that define explicit key bindings for Windows and Mac, but
     * not Linux.
     */
    useWindowsCompatibleBindings;
  }
  
  interface Language {
  }

  interface LanguageManager {
    defineLanguage(
      name: string,
      options: any);
  }

  interface Menus {
    /**
     * Brackets Application Menu Constants
     */
    AppMenuBar: {
      FILE_MENU: string;
      EDIT_MENU: string;
      VIEW_MENU: string;
      NAVIGATE_MENU: string;
      HELP_MENU: string;
    };

    /**
     * Brackets Context Menu Constants
     */
    ContextMenuIds: {
        EDITOR_MENU: string;
        INLINE_EDITOR_MENU: string;
        PROJECT_MENU: string;
        WORKING_SET_MENU: string;
    };

    /**
     * Brackets Application Menu Section Constants
     * It is preferred that plug-ins specify the location of new MenuItems
     * in terms of a menu section rather than a specific MenuItem. This provides
     * looser coupling to Bracket's internal MenuItems and makes menu organization
     * more semantic. 
     * Use these constants as the "relativeID" parameter when calling addMenuItem() and
     * specify a position of FIRST_IN_SECTION or LAST_IN_SECTION.
     *
     * Menu sections are denoted by dividers or the beginning/end of a menu
     */
    MenuSection: {
        // Menu Section                     Command ID to mark the section
        FILE_OPEN_CLOSE_COMMANDS: {sectionMarker: string; };
        FILE_SAVE_COMMANDS: {sectionMarker: string; };
        FILE_LIVE: {sectionMarker: string};
        FILE_EXTENSION_MANAGER: {sectionMarker: string; };

        EDIT_UNDO_REDO_COMMANDS: {sectionMarker: string; };
        EDIT_TEXT_COMMANDS: {sectionMarker: string; };
        EDIT_SELECTION_COMMANDS: {sectionMarker: string; };
        EDIT_FIND_COMMANDS: {sectionMarker: string; };
        EDIT_REPLACE_COMMANDS: {sectionMarker: string; };
        EDIT_MODIFY_SELECTION: {sectionMarker: string; };
        EDIT_COMMENT_SELECTION: {sectionMarker: string; };
        EDIT_CODE_HINTS_COMMANDS: {sectionMarker: string; };
        EDIT_TOGGLE_OPTIONS: {sectionMarker: string; };

        VIEW_HIDESHOW_COMMANDS: {sectionMarker: string; };
        VIEW_FONTSIZE_COMMANDS: {sectionMarker: string; };
        VIEW_TOGGLE_OPTIONS: {sectionMarker: string; };

        NAVIGATE_GOTO_COMMANDS: {sectionMarker: string; };
        NAVIGATE_DOCUMENTS_COMMANDS: {sectionMarker: string; };
        NAVIGATE_OS_COMMANDS: {sectionMarker: string; };
        NAVIGATE_QUICK_EDIT_COMMANDS: {sectionMarker: string; };
        NAVIGATE_QUICK_DOCS_COMMANDS: {sectionMarker: string; };
    };

    /**
     * Insertion position constants
     * Used by addMenu(), addMenuItem(), and addSubMenu() to
     * specify the relative position of a newly created menu object
     */
    BEFORE: string;
    AFTER: string;
    FIRST: string;
    LAST: string;
    FIRST_IN_SECTION: string;
    LAST_IN_SECTION: string;

    /**
     * Other constants
     */
    DIVIDER: string;

    /**
     * Error Codes from Brackets Shell
     */
    NO_ERROR: string;
    ERR_UNKNOWN: string;
    ERR_INVALID_PARAMS: string;
    ERR_NOT_FOUND: string;

    /**
     * Retrieves the Menu object for the corresponding id. 
     */
    getMenu(id: string): brackets.Menu;

    /**
     * Retrieves the map of all Menu objects.
     */
    getAllMenus(): { [name: string]: brackets.Menu; };

    /**
     * Retrieves the ContextMenu object for the corresponding id. 
     */
    getContextMenu(id: string): brackets.ContextMenu;

    /**
     * Retrieves the MenuItem object for the corresponding id. 
     */
    getMenuItem(id: string): brackets.MenuItem;

    /**
     * Closes all menus that are open
     */
    closeAll();

    /**
     * Adds a top-level menu to the application menu bar which may be native or HTML-based.
     *
     * @param name - display text for menu
     * @param id - unique identifier for a menu.
     *      Core Menus in Brackets use a simple  title as an id, for example "file-menu".
     *      Extensions should use the following format: "author.myextension.mymenuname". 
     * @param position - constant defining the position of new the Menu relative
     *  to other Menus. Default is LAST (see Insertion position constants).
     *      
     * @param relativeID - id of Menu the new Menu will be positioned relative to. Required
     *      when position is AFTER or BEFORE, ignored when position is FIRST or LAST
     * 
     * @return the newly created Menu
     */
    addMenu(name: string, id: string, position?: string, relativeID?: string): brackets.Menu;

    /**
     * Removes a top-level menu from the application menu bar which may be native or HTML-based.
     *
     * @param id - unique identifier for a menu.
     *      Core Menus in Brackets use a simple title as an id, for example "file-menu".
     *      Extensions should use the following format: "author.myextension.mymenuname".
     */
    removeMenu(id: string);

    /**
     * Registers new context menu with Brackets. 

     * Extensions should generally use the predefined context menus built into Brackets. Use this 
     * API to add a new context menu to UI that is specific to an extension.
     *
     * After registering  a new context menu clients should:
     *      - use addMenuItem() to add items to the context menu
     *      - call open() to show the context menu. 
     *      For example:
     *      $("#my_ID").contextmenu(function (e) {
     *          if (e.which === 3) {
     *              my_cmenu.open(e);
     *          }
     *      });
     *
     * To make menu items be contextual to things like selection, listen for the "beforeContextMenuOpen"
     * to make changes to Command objects before the context menu is shown. MenuItems are views of
     * Commands, which control a MenuItem's name, enabled state, and checked state.
     *
     * @param id - unique identifier for context menu.
     *      Core context menus in Brackets use a simple title as an id.
     *      Extensions should use the following format: "author.myextension.mycontextmenu name"
     * @return the newly created context menu
     */
    registerContextMenu(id: string): brackets.ContextMenu;

  }

  /**
   * Menu represents a top-level menu in the menu bar. A Menu may correspond to an HTML-based
   * menu or a native menu if Brackets is running in a native application shell. 
   * 
   * Since menus may have a native implementation clients should create Menus through 
   * addMenu() and should NOT construct a Menu object directly. 
   * Clients should also not access HTML content of a menu directly and instead use
   * the Menu API to query and modify menus.
   */
  interface Menu {
    /**
     * Removes the specified menu item from this Menu. Key bindings are unaffected; use KeyBindingManager
     * directly to remove key bindings if desired.
     * @param command - command the menu would execute if we weren't deleting it.
     */
    removeMenuItem(command: string);
    /**
     * Removes the specified menu item from this Menu. Key bindings are unaffected; use KeyBindingManager
     * directly to remove key bindings if desired.
     * @param command - command the menu would execute if we weren't deleting it.
     */
    removeMenuItem(command: brackets.Command);

    /**
     * Adds a new menu item with the specified id and display text. The insertion position is
     * specified via the relativeID and position arguments which describe a position 
     * relative to another MenuItem or MenuGroup. It is preferred that plug-ins 
     * insert new  MenuItems relative to a menu section rather than a specific 
     * MenuItem (see Menu Section Constants).
     *
     * TODO: Sub-menus are not yet supported, but when they are implemented this API will
     * allow adding new MenuItems to sub-menus as well.
     *
     * Note, keyBindings are bound to Command objects not MenuItems. The provided keyBindings
     *      will be bound to the supplied Command object rather than the MenuItem.
     * 
     * @param command - the command the menu will execute.
     *      Pass Menus.DIVIDER for a menu divider, or just call addMenuDivider() instead.
     * @param keyBindings - register one
     *      one or more key bindings to associate with the supplied command.
     * @param position - constant defining the position of new MenuItem relative to
     *      other MenuItems. Values:
     *          - With no relativeID, use Menus.FIRST or LAST (default is LAST)
     *          - Relative to a command id, use BEFORE or AFTER (required)
     *          - Relative to a MenuSection, use FIRST_IN_SECTION or LAST_IN_SECTION (required)
     * @param relativeID - command id OR one of the MenuSection.* constants. Required
     *      for all position constants except FIRST and LAST.
     *
     * @return the newly created MenuItem
     */
    addMenuItem(
      command: string,
      keyBindings: {key: string; platform: string; }[],
      position: string,
      relativeID: string): brackets.MenuItem;

    addMenuItem(
      command: brackets.Command,
      keyBindings: {key: string; platform: string; }[],
      position: string,
      relativeID: string): brackets.MenuItem;

    /**
     * Inserts divider item in menu.
     * @param position - constant defining the position of new the divider relative
     *      to other MenuItems. Default is LAST.  (see Insertion position constants). 
     * @param relativeID - id of menuItem, sub-menu, or menu section that the new 
     *      divider will be positioned relative to. Required for all position constants
     *      except FIRST and LAST
     * @return the newly created divider
     */
    addMenuDivider(position?: string, relativeID?: string): brackets.MenuItem;

    /**
     * Gets the Command associated with a MenuItem
     */
    getCommand(): brackets.Command;

    /**
     * Returns the parent Menu for this MenuItem
     */
    getParentMenu(): brackets.Menu;

  }

  /**
   * Represents a context menu that can open at a specific location in the UI. 
   *
   * Clients should not create this object directly and should instead use registerContextMenu()
   * to create new ContextMenu objects.
   *
   * Context menus in brackets may be HTML-based or native so clients should not reach into
   * the HTML and should instead manipulate ContextMenus through the API.
   *
   * Events:
   *      beforeContextMenuOpen
   */
  interface ContextMenu extends Menu {
    /**
     * Displays the ContextMenu at the specified location and dispatches the 
     * "beforeContextMenuOpen" event.The menu location may be adjusted to prevent
     * clipping by the browser window. All other menus and ContextMenus will be closed
     * bofore a new menu is shown.
     *
     * @param mouseOrLocation - pass a MouseEvent
     *      to display the menu near the mouse or pass in an object with page x/y coordinates
     *      for a specific location.
     */
    open(mouseOrLocation: MouseEvent);
    open(mouseOrLocation:{pageX:number; pageY:number;});

    /**
     * Closes the context menu.
     */
    close();
  }

  /**
   * MenuItem represents a single menu item that executes a Command or a menu divider. MenuItems
   * may have a sub-menu. A MenuItem may correspond to an HTML-based
   * menu item or a native menu item if Brackets is running in a native application shell
   *
   * Since MenuItems may have a native implementation clients should create MenuItems through 
   * addMenuItem() and should NOT construct a MenuItem object directly. 
   * Clients should also not access HTML content of a menu directly and instead use
   * the MenuItem API to query and modify menus items.
   *
   * MenuItems are views on to Command objects so modify the underlying Command to modify the
   * name, enabled, and checked state of a MenuItem. The MenuItem will update automatically
   */
  interface MenuItem {
    id: string;
    isDivider: boolean;

    /**
     * {string|Command} command - the Command this MenuItem will reflect.
     *                                   Use DIVIDER to specify a menu divider
     */
    command: any;
  }


  interface StringUtils {
  }

  
  interface NativeFileSystem {
  }

  interface FileEntry {
    fullPath: string;
  }
}
