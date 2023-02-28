// For Library Version: 1.109.0

declare module "sap/ui/rta/api/startAdaptation" {
  import Control from "sap/ui/core/Control";

  import UIComponent from "sap/ui/core/UIComponent";

  /**
   * @SINCE 1.83
   * @EXPERIMENTAL (since 1.83)
   *
   * Starts UI adaptation, initiated for an application at the passed root control instance. With this API
   * you are also able to modify the UI adaptation plugins list and or add some event handler functions to
   * be called on start, failed and stop events.
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
   * @SINCE 1.71
   * @EXPERIMENTAL (since 1.71)
   *
   * Starts key user adaptation, initiated for an application at the passed root control instance. It subsequently
   * extends to all valid child controls.
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
   * @SINCE 1.77
   * @EXPERIMENTAL (since 1.77)
   *
   * sap.ui.fl Delegate to be used in elementActionTests.
   */
  interface TestDelegate {}
  const TestDelegate: TestDelegate;
  export default TestDelegate;
}

declare namespace sap {
  interface IUI5DefineDependencyNames {
    "sap/ui/rta/api/startAdaptation": undefined;

    "sap/ui/rta/api/startKeyUserAdaptation": undefined;

    "sap/ui/rta/Client": undefined;

    "sap/ui/rta/enablement/TestDelegate": undefined;

    "sap/ui/rta/service/Action": undefined;

    "sap/ui/rta/service/ControllerExtension": undefined;

    "sap/ui/rta/service/Outline": undefined;

    "sap/ui/rta/service/Property": undefined;

    "sap/ui/rta/service/Selection": undefined;

    "sap/ui/rta/service/SupportTools": undefined;

    "sap/ui/rta/util/ReloadManager": undefined;
  }
}
