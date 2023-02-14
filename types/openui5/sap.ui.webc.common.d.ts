// For Library Version: 1.109.0

declare module "sap/ui/webc/common/library" {}

declare module "sap/ui/webc/common/WebComponent" {
  import { default as Control, $ControlSettings } from "sap/ui/core/Control";

  import WebComponentMetadata from "sap/ui/webc/common/WebComponentMetadata";

  /**
   * @SINCE 1.92.0
   * @EXPERIMENTAL (since 1.92.0) - The API might change. It is not intended for productive usage yet!
   *
   * Base Class for Web Components. Web Components are agnostic UI elements which can be integrated into the
   * UI5 programming model by using this wrapper control. This wrapper control takes care to propagate the
   * properties, the aggregations and the events. It also ensures to render the control and put the aggregated
   * controls in the dedicated slots of the Web Component.
   */
  export default class WebComponent extends Control {
    /**
     * Constructs and initializes a Web Component Wrapper with the given `sId` and settings.
     *
     * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated
     * objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description
     * of the syntax of the settings object.
     */
    constructor();

    /**
     * Creates a new subclass of class sap.ui.webc.common.WebComponent with name `sClassName` and enriches it
     * with the information contained in `oClassInfo`.
     *
     * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.core.Control.extend}.
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
      oClassInfo?: sap.ClassInfo<T, WebComponent>,
      /**
       * Constructor function for the metadata object; if not given, it defaults to the metadata implementation
       * used by this class
       */
      FNMetaImpl?: Function
    ): Function;
    /**
     * Returns a metadata object for class sap.ui.webc.common.WebComponent.
     *
     * @returns Metadata object describing this class
     */
    static getMetadata(): WebComponentMetadata;
  }

  export interface $WebComponentSettings extends $ControlSettings {}
}

declare module "sap/ui/webc/common/WebComponentMetadata" {
  import ElementMetadata from "sap/ui/core/ElementMetadata";

  /**
   * @SINCE 1.92.0
   * @EXPERIMENTAL (since 1.92.0) - The API might change. It is not intended for productive usage yet!
   */
  export default class WebComponentMetadata extends ElementMetadata {
    /**
     * Creates a new metadata object for a WebComponent Wrapper subclass.
     */
    constructor(
      /**
       * fully qualified name of the class that is described by this metadata object
       */
      sClassName: string,
      /**
       * static info to construct the metadata from
       */
      oClassInfo: object
    );

    /**
     * Returns the list of public getters, proxied by the Component Wrapper to the component itself
     */
    getGetters(): any[];
    /**
     * Returns the list of public methods, proxied by the Component Wrapper to the component itself
     */
    getMethods(): any[];
    /**
     * Retrieves the renderer for the described web component class. Note: this is always the default renderer
     * and Web Component wrappers should not define their own renderers.
     */
    getRenderer(): void;
    /**
     * Returns the tag, used to render the Component Wrapper
     */
    getTag(): string;
  }
}

declare namespace sap {
  interface IUI5DefineDependencyNames {
    "sap/ui/webc/common/library": undefined;

    "sap/ui/webc/common/WebComponent": undefined;

    "sap/ui/webc/common/WebComponentMetadata": undefined;
  }
}
