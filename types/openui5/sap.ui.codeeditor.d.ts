// For Library Version: 1.124.0

declare module "sap/ui/codeeditor/library" {}

declare module "sap/ui/codeeditor/CodeEditor" {
  import { default as Control, $ControlSettings } from "sap/ui/core/Control";

  import { CSSSize } from "sap/ui/core/library";

  import ElementMetadata from "sap/ui/core/ElementMetadata";

  import { PropertyBindingInfo } from "sap/ui/base/ManagedObject";

  import Event from "sap/ui/base/Event";

  /**
   * Allows to visualize source code of various types with syntax highlighting, line numbers in editable and
   * read only mode. Use this control in scenarios where the user should be able to inspect and edit source
   * code. The control currently uses the third-party code editor Ace.
   *
   * @since 1.46
   */
  export default class CodeEditor extends Control {
    /**
     * Constructor for a new CodeEditor.
     *
     * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated
     * objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description
     * of the syntax of the settings object.
     */
    constructor(
      /**
       * initial settings for the new control
       */
      mSettings?: $CodeEditorSettings
    );
    /**
     * Constructor for a new CodeEditor.
     *
     * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated
     * objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description
     * of the syntax of the settings object.
     */
    constructor(
      /**
       * id for the new control, generated automatically if no id is given
       */
      sId?: string,
      /**
       * initial settings for the new control
       */
      mSettings?: $CodeEditorSettings
    );

    /**
     * Creates a new subclass of class sap.ui.codeeditor.CodeEditor with name `sClassName` and enriches it with
     * the information contained in `oClassInfo`.
     *
     * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.core.Control.extend}.
     *
     *
     * @returns Created class / constructor function
     */
    static extend<T extends Record<string, unknown>>(
      /**
       * Name of the class being created
       */
      sClassName: string,
      /**
       * Object literal with information about the class
       */
      oClassInfo?: sap.ClassInfo<T, CodeEditor>,
      /**
       * Constructor function for the metadata object; if not given, it defaults to the metadata implementation
       * used by this class
       */
      FNMetaImpl?: Function
    ): Function;
    /**
     * Returns a metadata object for class sap.ui.codeeditor.CodeEditor.
     *
     *
     * @returns Metadata object describing this class
     */
    static getMetadata(): ElementMetadata;
    /**
     * Defines custom completer - object implementing a getCompletions method. The method has two parameters
     * - fnCallback method and context object. Context object provides details about oPos and sPrefix as provided
     * by the third-party code editor.
     *
     * @since 1.52
     */
    addCustomCompleter(
      /**
       * Object with getCompletions method
       */
      oCustomCompleter: {
        getCompletions: Function;
      }
    ): void;
    /**
     * Attaches event handler `fnFunction` to the {@link #event:change change} event of this `sap.ui.codeeditor.CodeEditor`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.codeeditor.CodeEditor` itself.
     *
     * Fired when the value has changed and the focus leaves the code editor.
     *
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    attachChange(
      /**
       * An application-specific payload object that will be passed to the event handler along with the event
       * object when firing the event
       */
      oData: object,
      /**
       * The function to be called when the event occurs
       */
      fnFunction: (p1: CodeEditor$ChangeEvent) => void,
      /**
       * Context object to call the event handler with. Defaults to this `sap.ui.codeeditor.CodeEditor` itself
       */
      oListener?: object
    ): this;
    /**
     * Attaches event handler `fnFunction` to the {@link #event:change change} event of this `sap.ui.codeeditor.CodeEditor`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.codeeditor.CodeEditor` itself.
     *
     * Fired when the value has changed and the focus leaves the code editor.
     *
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    attachChange(
      /**
       * The function to be called when the event occurs
       */
      fnFunction: (p1: CodeEditor$ChangeEvent) => void,
      /**
       * Context object to call the event handler with. Defaults to this `sap.ui.codeeditor.CodeEditor` itself
       */
      oListener?: object
    ): this;
    /**
     * Attaches event handler `fnFunction` to the {@link #event:liveChange liveChange} event of this `sap.ui.codeeditor.CodeEditor`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.codeeditor.CodeEditor` itself.
     *
     * Fired when the value is changed by user interaction - each keystroke, delete, paste, etc.
     *
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    attachLiveChange(
      /**
       * An application-specific payload object that will be passed to the event handler along with the event
       * object when firing the event
       */
      oData: object,
      /**
       * The function to be called when the event occurs
       */
      fnFunction: (p1: CodeEditor$LiveChangeEvent) => void,
      /**
       * Context object to call the event handler with. Defaults to this `sap.ui.codeeditor.CodeEditor` itself
       */
      oListener?: object
    ): this;
    /**
     * Attaches event handler `fnFunction` to the {@link #event:liveChange liveChange} event of this `sap.ui.codeeditor.CodeEditor`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.codeeditor.CodeEditor` itself.
     *
     * Fired when the value is changed by user interaction - each keystroke, delete, paste, etc.
     *
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    attachLiveChange(
      /**
       * The function to be called when the event occurs
       */
      fnFunction: (p1: CodeEditor$LiveChangeEvent) => void,
      /**
       * Context object to call the event handler with. Defaults to this `sap.ui.codeeditor.CodeEditor` itself
       */
      oListener?: object
    ): this;
    /**
     * Detaches event handler `fnFunction` from the {@link #event:change change} event of this `sap.ui.codeeditor.CodeEditor`.
     *
     * The passed function and listener object must match the ones used for event registration.
     *
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    detachChange(
      /**
       * The function to be called, when the event occurs
       */
      fnFunction: (p1: CodeEditor$ChangeEvent) => void,
      /**
       * Context object on which the given function had to be called
       */
      oListener?: object
    ): this;
    /**
     * Detaches event handler `fnFunction` from the {@link #event:liveChange liveChange} event of this `sap.ui.codeeditor.CodeEditor`.
     *
     * The passed function and listener object must match the ones used for event registration.
     *
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    detachLiveChange(
      /**
       * The function to be called, when the event occurs
       */
      fnFunction: (p1: CodeEditor$LiveChangeEvent) => void,
      /**
       * Context object on which the given function had to be called
       */
      oListener?: object
    ): this;
    /**
     * Fires event {@link #event:change change} to attached listeners.
     *
     * @ui5-protected Do not call from applications (only from related classes in the framework)
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    fireChange(
      /**
       * Parameters to pass along with the event
       */
      mParameters?: CodeEditor$ChangeEventParameters
    ): this;
    /**
     * Fires event {@link #event:liveChange liveChange} to attached listeners.
     *
     * @ui5-protected Do not call from applications (only from related classes in the framework)
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    fireLiveChange(
      /**
       * Parameters to pass along with the event
       */
      mParameters?: CodeEditor$LiveChangeEventParameters
    ): this;
    /**
     * Returns the internal instance of the third-party Ace code editor.
     *
     * **Note:** This control is based on third-party open-source software, and there might be incompatible
     * changes introduced by the code owner in their future releases.
     *
     * @since 1.121
     *
     * @returns the internal third-party Ace code editor instance
     */
    getAceEditor(): object;
    /**
     * Gets current value of property {@link #getColorTheme colorTheme}.
     *
     * Sets the editor color theme. Possible values are: default, hcb, hcb_bright, hcb_blue, theme-ambiance,
     * chaos, chrome, clouds, clouds_midnight, cobalt, crimson_editor, dawn, dreamweaver, eclipse, github, gob,
     * gruvbox, idle_fingers, iplastic, katzenmilch, kr_theme, kuroir, merbivore, merbivore_soft, mono_industrial,
     * monokai, pastel_on_dark, solarized_dark, solarized_light, sqlserver, terminal, textmate, tomorrow, tomorrow_night,
     * tomorrow_night_blue, tomorrow_night_bright, tomorrow_night_eighties, twilight, dracula vibrant_ink, xcode
     *
     * Default value is `"default"`.
     *
     *
     * @returns Value of property `colorTheme`
     */
    getColorTheme(): string;
    /**
     * Returns the current value of the code editor
     *
     *
     * @returns Returns the current value of the code editor
     */
    getCurrentValue(): string;
    /**
     * Gets current value of property {@link #getEditable editable}.
     *
     * Sets whether the code in the editor can be changed by the user.
     *
     * Default value is `true`.
     *
     *
     * @returns Value of property `editable`
     */
    getEditable(): boolean;
    /**
     * Gets current value of property {@link #getHeight height}.
     *
     * The height of the code editor. A minimal height of 3rem will be applied in case the height is less than
     * 20px.
     *
     * Default value is `"100%"`.
     *
     *
     * @returns Value of property `height`
     */
    getHeight(): CSSSize;
    /**
     * Returns the DOMNode ID to be used for the "labelFor" attribute of the label.
     *
     * By default, this is the ID of the control itself.
     *
     *
     * @returns ID to be used for the `labelFor`
     */
    getIdForLabel(): string;
    /**
     * Gets current value of property {@link #getLineNumbers lineNumbers}.
     *
     * Sets whether line numbers should be shown.
     *
     * Default value is `true`.
     *
     *
     * @returns Value of property `lineNumbers`
     */
    getLineNumbers(): boolean;
    /**
     * Gets current value of property {@link #getMaxLines maxLines}.
     *
     * Sets whether the editor height should auto expand to a maximum number of lines. After reaching the maximum
     * number of lines specified, the content of the `CodeEditor` will become scrollable.
     *
     * **Note:** Keep in mind that the auto expand `CodeEditor` behavior requires the `height` property to be
     * set to `auto`.
     *
     * Default value is `0`.
     *
     * @since 1.48.1
     *
     * @returns Value of property `maxLines`
     */
    getMaxLines(): int;
    /**
     * Gets current value of property {@link #getSyntaxHints syntaxHints}.
     *
     * Sets whether to show syntax hints in the editor. This flag is only available if line numbers are shown.
     *
     * Default value is `true`.
     *
     *
     * @returns Value of property `syntaxHints`
     */
    getSyntaxHints(): boolean;
    /**
     * Gets current value of property {@link #getType type}.
     *
     * The type of the code in the editor used for syntax highlighting. Possible types are: abap, abc, actionscript,
     * ada, apache_conf, applescript, asciidoc, assembly_x86, autohotkey, batchfile, bro, c9search, c_cpp, cirru,
     * clojure, cobol, coffee, coldfusion, csharp, css, curly, d, dart, diff, django, dockerfile, dot, drools,
     * eiffel, ejs, elixir, elm, erlang, forth, fortran, ftl, gcode, gherkin, gitignore, glsl, gobstones, golang,
     * groovy, haml, handlebars, haskell, haskell_cabal, haxe, hjson, html, html_elixir, html_ruby, ini, io,
     * jack, jade, java, javascript, json, jsoniq, jsp, jsx, julia, kotlin, latex, lean, less, liquid, lisp,
     * live_script, livescript, logiql, lsl, lua, luapage, lucene, makefile, markdown, mask, matlab, mavens_mate_log,
     * maze, mel, mips_assembler, mipsassembler, mushcode, mysql, nix, nsis, objectivec, ocaml, pascal, perl,
     * pgsql, php, plain_text, powershell, praat, prolog, properties, protobuf, python, r, razor, rdoc, rhtml,
     * rst, ruby, rust, sass, scad, scala, scheme, scss, sh, sjs, smarty, snippets, soy_template, space, sql,
     * sqlserver, stylus, svg, swift, swig, tcl, tex, text, textile, toml, tsx, twig, typescript, vala, vbscript,
     * velocity, verilog, vhdl, wollok, xml, xquery, yaml, terraform, slim, redshift, red, puppet, php_laravel_blade,
     * mixal, jssm, fsharp, edifact, csp, cssound_score, cssound_orchestra, cssound_document
     *
     * Default value is `"javascript"`.
     *
     *
     * @returns Value of property `type`
     */
    getType(): string;
    /**
     * Gets current value of property {@link #getValue value}.
     *
     * The value displayed in the code editor.
     *
     * Default value is `empty string`.
     *
     *
     * @returns Value of property `value`
     */
    getValue(): string;
    /**
     * Gets current value of property {@link #getValueSelection valueSelection}.
     *
     * Sets whether the code is automatically selected if a value is set.
     *
     * Default value is `false`.
     *
     *
     * @returns Value of property `valueSelection`
     */
    getValueSelection(): boolean;
    /**
     * Gets current value of property {@link #getWidth width}.
     *
     * The width of the code editor.
     *
     * Default value is `"100%"`.
     *
     *
     * @returns Value of property `width`
     */
    getWidth(): CSSSize;
    /**
     * Pretty-prints the content of the editor.
     *
     * **Note:** Works well for PHP. For other editor types (modes), the content might not be formatted well.
     * In such cases it is recommended to use your own formatting.
     *
     * @since 1.54.1
     */
    prettyPrint(): void;
    /**
     * Sets the color theme of the code editor
     *
     *
     * @returns Returns `this` to allow method chaining
     */
    setColorTheme(
      /**
       * See property documentation for accepted values
       */
      sTheme: string
    ): this;
    /**
     * Sets a new value for property {@link #getEditable editable}.
     *
     * Sets whether the code in the editor can be changed by the user.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `true`.
     *
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setEditable(
      /**
       * New value for property `editable`
       */
      bEditable?: boolean
    ): this;
    /**
     * Sets a new value for property {@link #getHeight height}.
     *
     * The height of the code editor. A minimal height of 3rem will be applied in case the height is less than
     * 20px.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `"100%"`.
     *
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setHeight(
      /**
       * New value for property `height`
       */
      sHeight?: CSSSize
    ): this;
    /**
     * Sets a new value for property {@link #getLineNumbers lineNumbers}.
     *
     * Sets whether line numbers should be shown.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `true`.
     *
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setLineNumbers(
      /**
       * New value for property `lineNumbers`
       */
      bLineNumbers?: boolean
    ): this;
    /**
     * Sets a new value for property {@link #getMaxLines maxLines}.
     *
     * Sets whether the editor height should auto expand to a maximum number of lines. After reaching the maximum
     * number of lines specified, the content of the `CodeEditor` will become scrollable.
     *
     * **Note:** Keep in mind that the auto expand `CodeEditor` behavior requires the `height` property to be
     * set to `auto`.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `0`.
     *
     * @since 1.48.1
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setMaxLines(
      /**
       * New value for property `maxLines`
       */
      iMaxLines?: int
    ): this;
    /**
     * Sets a new value for property {@link #getSyntaxHints syntaxHints}.
     *
     * Sets whether to show syntax hints in the editor. This flag is only available if line numbers are shown.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `true`.
     *
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setSyntaxHints(
      /**
       * New value for property `syntaxHints`
       */
      bSyntaxHints?: boolean
    ): this;
    /**
     * Sets a new value for property {@link #getType type}.
     *
     * The type of the code in the editor used for syntax highlighting. Possible types are: abap, abc, actionscript,
     * ada, apache_conf, applescript, asciidoc, assembly_x86, autohotkey, batchfile, bro, c9search, c_cpp, cirru,
     * clojure, cobol, coffee, coldfusion, csharp, css, curly, d, dart, diff, django, dockerfile, dot, drools,
     * eiffel, ejs, elixir, elm, erlang, forth, fortran, ftl, gcode, gherkin, gitignore, glsl, gobstones, golang,
     * groovy, haml, handlebars, haskell, haskell_cabal, haxe, hjson, html, html_elixir, html_ruby, ini, io,
     * jack, jade, java, javascript, json, jsoniq, jsp, jsx, julia, kotlin, latex, lean, less, liquid, lisp,
     * live_script, livescript, logiql, lsl, lua, luapage, lucene, makefile, markdown, mask, matlab, mavens_mate_log,
     * maze, mel, mips_assembler, mipsassembler, mushcode, mysql, nix, nsis, objectivec, ocaml, pascal, perl,
     * pgsql, php, plain_text, powershell, praat, prolog, properties, protobuf, python, r, razor, rdoc, rhtml,
     * rst, ruby, rust, sass, scad, scala, scheme, scss, sh, sjs, smarty, snippets, soy_template, space, sql,
     * sqlserver, stylus, svg, swift, swig, tcl, tex, text, textile, toml, tsx, twig, typescript, vala, vbscript,
     * velocity, verilog, vhdl, wollok, xml, xquery, yaml, terraform, slim, redshift, red, puppet, php_laravel_blade,
     * mixal, jssm, fsharp, edifact, csp, cssound_score, cssound_orchestra, cssound_document
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `"javascript"`.
     *
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setType(
      /**
       * New value for property `type`
       */
      sType?: string
    ): this;
    /**
     * Sets a new value for property {@link #getValue value}.
     *
     * The value displayed in the code editor.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `empty string`.
     *
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setValue(
      /**
       * New value for property `value`
       */
      sValue?: string
    ): this;
    /**
     * Sets a new value for property {@link #getValueSelection valueSelection}.
     *
     * Sets whether the code is automatically selected if a value is set.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `false`.
     *
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setValueSelection(
      /**
       * New value for property `valueSelection`
       */
      bValueSelection?: boolean
    ): this;
    /**
     * Sets a new value for property {@link #getWidth width}.
     *
     * The width of the code editor.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `"100%"`.
     *
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setWidth(
      /**
       * New value for property `width`
       */
      sWidth?: CSSSize
    ): this;
  }
  /**
   * Describes the settings that can be provided to the CodeEditor constructor.
   */
  export interface $CodeEditorSettings extends $ControlSettings {
    /**
     * The value displayed in the code editor.
     */
    value?: string | PropertyBindingInfo;

    /**
     * The type of the code in the editor used for syntax highlighting. Possible types are: abap, abc, actionscript,
     * ada, apache_conf, applescript, asciidoc, assembly_x86, autohotkey, batchfile, bro, c9search, c_cpp, cirru,
     * clojure, cobol, coffee, coldfusion, csharp, css, curly, d, dart, diff, django, dockerfile, dot, drools,
     * eiffel, ejs, elixir, elm, erlang, forth, fortran, ftl, gcode, gherkin, gitignore, glsl, gobstones, golang,
     * groovy, haml, handlebars, haskell, haskell_cabal, haxe, hjson, html, html_elixir, html_ruby, ini, io,
     * jack, jade, java, javascript, json, jsoniq, jsp, jsx, julia, kotlin, latex, lean, less, liquid, lisp,
     * live_script, livescript, logiql, lsl, lua, luapage, lucene, makefile, markdown, mask, matlab, mavens_mate_log,
     * maze, mel, mips_assembler, mipsassembler, mushcode, mysql, nix, nsis, objectivec, ocaml, pascal, perl,
     * pgsql, php, plain_text, powershell, praat, prolog, properties, protobuf, python, r, razor, rdoc, rhtml,
     * rst, ruby, rust, sass, scad, scala, scheme, scss, sh, sjs, smarty, snippets, soy_template, space, sql,
     * sqlserver, stylus, svg, swift, swig, tcl, tex, text, textile, toml, tsx, twig, typescript, vala, vbscript,
     * velocity, verilog, vhdl, wollok, xml, xquery, yaml, terraform, slim, redshift, red, puppet, php_laravel_blade,
     * mixal, jssm, fsharp, edifact, csp, cssound_score, cssound_orchestra, cssound_document
     */
    type?: string | PropertyBindingInfo;

    /**
     * The width of the code editor.
     */
    width?: CSSSize | PropertyBindingInfo | `{${string}}`;

    /**
     * The height of the code editor. A minimal height of 3rem will be applied in case the height is less than
     * 20px.
     */
    height?: CSSSize | PropertyBindingInfo | `{${string}}`;

    /**
     * Sets whether the code in the editor can be changed by the user.
     */
    editable?: boolean | PropertyBindingInfo | `{${string}}`;

    /**
     * Sets whether line numbers should be shown.
     */
    lineNumbers?: boolean | PropertyBindingInfo | `{${string}}`;

    /**
     * Sets whether the code is automatically selected if a value is set.
     */
    valueSelection?: boolean | PropertyBindingInfo | `{${string}}`;

    /**
     * Sets whether the editor height should auto expand to a maximum number of lines. After reaching the maximum
     * number of lines specified, the content of the `CodeEditor` will become scrollable.
     *
     * **Note:** Keep in mind that the auto expand `CodeEditor` behavior requires the `height` property to be
     * set to `auto`.
     *
     * @since 1.48.1
     */
    maxLines?: int | PropertyBindingInfo | `{${string}}`;

    /**
     * Sets the editor color theme. Possible values are: default, hcb, hcb_bright, hcb_blue, theme-ambiance,
     * chaos, chrome, clouds, clouds_midnight, cobalt, crimson_editor, dawn, dreamweaver, eclipse, github, gob,
     * gruvbox, idle_fingers, iplastic, katzenmilch, kr_theme, kuroir, merbivore, merbivore_soft, mono_industrial,
     * monokai, pastel_on_dark, solarized_dark, solarized_light, sqlserver, terminal, textmate, tomorrow, tomorrow_night,
     * tomorrow_night_blue, tomorrow_night_bright, tomorrow_night_eighties, twilight, dracula vibrant_ink, xcode
     */
    colorTheme?: string | PropertyBindingInfo;

    /**
     * Sets whether to show syntax hints in the editor. This flag is only available if line numbers are shown.
     */
    syntaxHints?: boolean | PropertyBindingInfo | `{${string}}`;

    /**
     * Fired when the value is changed by user interaction - each keystroke, delete, paste, etc.
     */
    liveChange?: (oEvent: CodeEditor$LiveChangeEvent) => void;

    /**
     * Fired when the value has changed and the focus leaves the code editor.
     */
    change?: (oEvent: CodeEditor$ChangeEvent) => void;
  }

  /**
   * Parameters of the CodeEditor#change event.
   */
  export interface CodeEditor$ChangeEventParameters {
    /**
     * The current value of the code editor.
     */
    value?: string;

    /**
     * The old value of the code editor.
     */
    oldValue?: string;
  }

  /**
   * Event object of the CodeEditor#change event.
   */
  export type CodeEditor$ChangeEvent = Event<
    CodeEditor$ChangeEventParameters,
    CodeEditor
  >;

  /**
   * Parameters of the CodeEditor#liveChange event.
   */
  export interface CodeEditor$LiveChangeEventParameters {
    /**
     * The current value of the code editor.
     */
    value?: string;

    /**
     * The underlying change event of the third-party code editor.
     */
    editorEvent?: object;
  }

  /**
   * Event object of the CodeEditor#liveChange event.
   */
  export type CodeEditor$LiveChangeEvent = Event<
    CodeEditor$LiveChangeEventParameters,
    CodeEditor
  >;
}

declare namespace sap {
  interface IUI5DefineDependencyNames {
    "sap/ui/codeeditor/CodeEditor": undefined;

    "sap/ui/codeeditor/library": undefined;
  }
}
