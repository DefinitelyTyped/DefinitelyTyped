// For Library Version: 1.138.0

declare module "sap/ui/rta/api/startAdaptation" {
  import Control from "sap/ui/core/Control";

  import UIComponent from "sap/ui/core/UIComponent";

  /**
   * Starts UI adaptation, initiated for an application at the passed root control instance. With this API
   * you are also able to modify the UI adaptation plugins list and or add some event handler functions to
   * be called on start, failed and stop events. CAUTION: In the key user layer (CUSTOMER) the adaptation
   * mode starts automatically after a reload triggered by the adaptation mode (e.g. due to personalization
   * changes or versioning). In this case the RuntimeAuthoring class will be started with default parameters.
   *
   * @since 1.83
   *
   * @returns Resolves when UI adaptation was successfully started
   */
  export default function startAdaptation(
    /**
     * Object with properties
     */
    mOptions: {
      /**
       * Control instance to get the AppComponent. This then is used to start UI adaptation.
       */
      rootControl: Control | UIComponent;
      /**
       * Map with flex-related settings
       */
      flexSettings?: {
        /**
         * The Layer in which RTA should be started. Default: "CUSTOMER"
         */
        layer?: string;
        /**
         * Whether RTA is started in developerMode mode. Default: `false`
         */
        developerMode?: boolean;
      };
    },
    /**
     * Callback function that enables the modification of the default plugin list of UI adaptation. UI adaptation
     * is passed to this function
     */
    loadPlugins?: Function,
    /**
     * Event handler function called on start event
     */
    onStart?: Function,
    /**
     * Event handler function called on failed event
     */
    onFailed?: Function,
    /**
     * Event handler function called on stop event
     */
    onStop?: Function
  ): Promise<any>;
}

declare module "sap/ui/rta/api/startKeyUserAdaptation" {
  import Control from "sap/ui/core/Control";

  import UIComponent from "sap/ui/core/UIComponent";

  /**
   * Starts key user adaptation, initiated for an application at the passed root control instance. It subsequently
   * extends to all valid child controls.
   *
   * @since 1.71
   *
   * @returns Resolves when UI adaptation was successfully started
   */
  export default function startKeyUserAdaptation(
    /**
     * Object with properties
     */
    mPropertyBag: {
      /**
       * Control instance to get the AppComponent. This then is used to start UI adaptation.
       */
      rootControl: Control | UIComponent;
    }
  ): Promise<any>;
}

declare module "sap/ui/rta/enablement/TestDelegate" {
  /**
   * sap.ui.fl Delegate to be used in elementActionTests.
   *
   * @since 1.77
   */
  interface TestDelegate {}
  const TestDelegate: TestDelegate;
  export default TestDelegate;
}

declare module "sap/ui/rta/plugin/annotations/AnnotationChangeDialog" {
  /**
   * Annotation change definition
   */
  export type AnnotationChangeDefinition = {
    /**
     * Change type
     */
    annotationChangeType: string;
    /**
     * Url of the OData service
     */
    serviceUrl: string;
    /**
     * Change content
     */
    content: {
      /**
       * Path of the property
       */
      annotationPath: string;
      /**
       * New value
       */
      value: string;
      /**
       * New value as translatable text. If given, the value is ignored
       */
      text: string;
      /**
       * Object template to construct a return object. If given the applyChange function will return an object
       * as value, which is parsed from the template string.
       */
      objectTemplateInfo?: {
        /**
         * Stringified template to be used for constructing the return object
         */
        templateAsString?: string;
        /**
         * Placeholder in the template string. Will be replaced by the new value
         */
        placeholder?: string;
      };
    };
  };

  /**
   * Annotation change info
   */
  export type AnnotationChangeInfo = {
    /**
     * Url of the OData service
     */
    serviceUrl: string;
    /**
     * Array of properties
     */
    properties: Array<{
      /**
       * Path of the property
       */
      annotationPath: string;
      /**
       * Name of the property
       */
      propertyName: string;
      /**
       * Current value of the property
       */
      currentValue: string;
      /**
       * Label of the property. If not given, the property name is used
       */
      label?: string;
      /**
       * Tooltip of the property
       */
      tooltip?: string;
    }>;
    /**
     * Array of possible values for value list type properties
     */
    possibleValues: Array<{
      /**
       * Key of the option
       */
      key: string;
      /**
       * Text of the option
       */
      text: string;
    }>;
    /**
     * Name of the property that should be filtered for initially
     */
    preSelectedProperty?: string;
  };

  export type getAnnotationChangeInfo = () => AnnotationChangeInfo;
}

declare namespace sap {
  interface IUI5DefineDependencyNames {
    "sap/ui/rta/api/startAdaptation": undefined;

    "sap/ui/rta/api/startKeyUserAdaptation": undefined;

    "sap/ui/rta/Client": undefined;

    "sap/ui/rta/enablement/TestDelegate": undefined;

    "sap/ui/rta/plugin/annotations/AnnotationChangeDialog": undefined;

    "sap/ui/rta/service/Action": undefined;

    "sap/ui/rta/service/ControllerExtension": undefined;

    "sap/ui/rta/service/Outline": undefined;

    "sap/ui/rta/service/Property": undefined;

    "sap/ui/rta/service/Selection": undefined;

    "sap/ui/rta/service/SupportTools": undefined;

    "sap/ui/rta/util/ReloadManager": undefined;
  }
}
