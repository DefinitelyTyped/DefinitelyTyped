// For Library Version: 1.124.0

declare module "sap/ui/webc/common/library" {}

declare module "sap/ui/webc/common/WebComponent" {
  import {
    default as WebComponent1,
    MetadataOptions as MetadataOptions1,
    $WebComponentSettings as $WebComponentSettings1,
  } from "sap/ui/core/webc/WebComponent";

  import WebComponentMetadata from "sap/ui/webc/common/WebComponentMetadata";

  /**
   * Base Class for Web Components. Web Components are agnostic UI elements which can be integrated into the
   * UI5 programming model by using this wrapper control. This wrapper control takes care to propagate the
   * properties, the aggregations and the events. It also ensures to render the control and put the aggregated
   * controls in the dedicated slots of the Web Component.
   *
   * @since 1.92.0
   * @deprecated (since 1.118.0) - Use sap.ui.core.webc.WebComponent instead!
   * @experimental (since 1.92.0) - The API might change. It is not intended for productive usage yet!
   */
  export default class WebComponent extends WebComponent1 {
    /**
     * Constructs and initializes a Web Component Wrapper with the given `sId` and settings.
     */
    constructor(
      /**
       * Object with initial settings for the new control
       */
      mSettings?: $WebComponentSettings
    );
    /**
     * Constructs and initializes a Web Component Wrapper with the given `sId` and settings.
     */
    constructor(
      /**
       * Optional ID for the new control; generated automatically if no non-empty ID is given Note: this can be
       * omitted, no matter whether `mSettings` will be given or not!
       */
      sId?: string,
      /**
       * Object with initial settings for the new control
       */
      mSettings?: $WebComponentSettings
    );

    /**
     * Defines a new subclass of WebComponent with the name `sClassName` and enriches it with the information
     * contained in `oClassInfo`.
     *
     * `oClassInfo` can contain the same information that {@link sap.ui.base.ManagedObject.extend} already accepts,
     * plus the `dnd` property in the metadata object literal to configure drag-and-drop behavior (see {@link sap.ui.core.webc.WebComponent.MetadataOptions MetadataOptions }
     * for details). Objects describing aggregations can also have a `dnd` property when used for a class extending
     * `WebComponent` (see {@link sap.ui.base.ManagedObject.MetadataOptions.AggregationDnD AggregationDnD}).
     *
     * Example:
     * ```javascript
     *
     * WebComponent.extend('sap.mylib.MyElement', {
     *   metadata : {
     *     library : 'sap.mylib',
     *     tag : 'my-webcomponent',
     *     properties : {
     *       value : 'string',
     *       width : {
     *         type: 'sap.ui.core.CSSSize',
     *         mapping: 'style'
     *       }
     *     },
     *     defaultAggregation: "content",
     *     aggregations : {
     *       content : {
     *         type: 'sap.ui.core.Control',
     *         multiple : true
     *       },
     *       header : {
     *         type : 'sap.ui.core.Control',
     *         multiple : false,
     *         slot: 'header'
     *       }
     *     }
     *   }
     * });
     * ```
     *
     *
     *
     * @returns Created class / constructor function
     */
    static extend<T extends Record<string, unknown>>(
      /**
       * Name of the class to be created
       */
      sClassName: string,
      /**
       * Object literal with information about the class
       */
      oClassInfo?: sap.ClassInfo<T, WebComponent>,
      /**
       * Constructor function for the metadata object. If not given, it defaults to `sap.ui.core.ElementMetadata`.
       */
      FNMetaImpl?: Function
    ): Function;
    /**
     * Returns a metadata object for class sap.ui.webc.common.WebComponent.
     *
     *
     * @returns Metadata object describing this class
     */
    static getMetadata(): WebComponentMetadata;
  }
  /**
   * The structure of the "metadata" object which is passed when inheriting from sap.ui.core.Element using
   * its static "extend" method. See {@link sap.ui.core.Element.extend} for details on its usage.
   */
  export type MetadataOptions = MetadataOptions1;

  /**
   * Describes the settings that can be provided to the WebComponent constructor.
   *
   * @deprecated (since 1.118.0) - Use sap.ui.core.webc.WebComponent instead!
   * @experimental (since 1.92.0) - The API might change. It is not intended for productive usage yet!
   */
  export interface $WebComponentSettings extends $WebComponentSettings1 {}
}

declare module "sap/ui/webc/common/WebComponentMetadata" {
  import WebComponentMetadata1 from "sap/ui/core/webc/WebComponentMetadata";

  /**
   * @since 1.92.0
   * @deprecated (since 1.118.0) - Use sap.ui.core.webc.WebComponentMetadata instead!
   * @experimental (since 1.92.0) - The API might change. It is not intended for productive usage yet!
   */
  export default class WebComponentMetadata extends WebComponentMetadata1 {
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
  }
}

declare namespace sap {
  interface IUI5DefineDependencyNames {
    "sap/ui/webc/common/library": undefined;

    "sap/ui/webc/common/WebComponent": undefined;

    "sap/ui/webc/common/WebComponentMetadata": undefined;
  }
}
