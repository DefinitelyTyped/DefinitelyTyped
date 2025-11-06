// For Library Version: 1.142.0

declare module "sap/ui/dt/library" {
  export namespace designtime {
    namespace DesignTimeMetadata {
      /**
       * Object containing the aggregation configuration
       */
      type Aggregation = {
        /**
         * Used to ignore the aggregation (and all its children) at design time. For example, this can be used to
         * ignore deprecated or duplicated aggregations as well as aggregations irrelevant during the design time
         * (such as dependents). If the value is true, then no overlays will be created for the aggregation and
         * its children. For more options on how to disable actions in design time please refer to the UI5 Demo
         * Kit.
         */
        ignore?: boolean | Function;
        /**
         * Defines the DOM reference of the aggregation. The DOM reference is used to calculate the dimension of
         * the aggregation at design time. This is needed, for instance, to make drag&drop possible. If no domRef
         * property is given, a heuristic is used to calculate the dimension of the aggregation from its children
         * during the design time.
         */
        domRef?: string | Function;
        /**
         * Provide or compute name for the controls inside the aggregation which is understandable for the key user.
         * This is needed for the "addODataProperty" and "createContainer" action to show the names in the context
         * menu (Add , Available ). Name the control based on the general UI concept and follow
         * the guidance from https://experience.sap.com/fiori-design/. The key user doesn't care about the difference
         * between a smart, mobile, or responsive version of a form, it's just a form.
         */
        childNames?:
          | {
              /**
               * i18n key from library's design-time resource bundle or function returning the translated text
               */
              singular: string | Function;
              /**
               * i18n key from library's design-time resource bundle or function returning the translated text
               */
              plural: string | Function;
            }
          | Function;
        /**
         * Actions that can be performed on the aggregation (e.g. move).
         */
        actions?: object;
        /**
         * Returns DesignTime-Metadata object which extends or overrides existing metadata of a successor control.
         * In the negative case it returns the boolean "false" value. The propagateMetadata function gets 2 parameters
         * passed through during execution: oControl and oRelevantContainerControl. The second parameter is the
         * control which has defined this propagation function. It can be used if you need to know the relevantContainer
         * during the execution of the function.
         */
        propagateMetadata?: Function;
        /**
         * Defines the relevant container control for the actions which belong to successor controls.
         */
        propagateRelevantContainer?: boolean | Function;
      };

      /**
       * Object containing the association configuration
       */
      type Association = {
        /**
         * Can be used to tell the design time that it should follow the association hierarchy. This is used by
         * controls like e.g. the componentContainer that should allow to follow the association component, which
         * defines the control hierarchy but is not a real aggregation (more isolation, regarding model propagation/rendering/eventing/...).
         */
        aggregationLike: boolean;
      };

      /**
       * Object containing the aggregation configuration
       */
      type Property = {
        /**
         * Used to ignore the property at design time. For example, this can be used to ignore deprecated properties
         * or properties that shall not be changed during design time.
         */
        ignore?: boolean | Function;
      };
    }

    /**
     * Object containing a sample design time configuration
     */
    type DesignTimeMetadata = {
      /**
       * Specify or calculate a speaking name for the control (which is understandable to key users). This is
       * needed for the "reveal" action to show the names in the context menu (Add  and Available
       * ). Name your control based on the general UI concept and follow the guidance from https://experience.sap.com/fiori-design/.
       * Example: Key users don't care about the difference between a smart, mobile or responsive version of a
       * form, it's just a form.
       */
      name:
        | {
            /**
             * i18n key from library's design-time resource bundle or function returning the translated text
             */
            singular: string | Function;
            /**
             * i18n key from library's design-time resource bundle or function returning the translated text
             */
            plural: string | Function;
          }
        | Function;
      /**
       * Allows to provide a customized getter for the control label that is used in outlines, context menus and
       * actions like "reveal" or "rename". The default implementation tries to get the following properties in
       * that order: `text`, `labelText`, `label`, `title`, `heading`, `dataSourceLabel`
       */
      getLabel?: Function;
      /**
       * Defines the DOM reference of the control
       */
      domRef?: string | Function;
      /**
       * Needed for Elements that are not derived from sap.ui.core.Control. The function should return the visibility
       * of the Element as a boolean (true = visible). This function can be called before the DOM is ready.
       */
      isVisible: Function;
      /**
       * Palette settings for the control.
       */
      palette:
        | {
            /**
             * Possible values: "ACTION", "DISPLAY", "LAYOUT", "LIST", "INPUT", "CONTAINER", "CHART", "TILE"
             */
            group: string | Function;
            /**
             * Preferable as SVG as this icon scales
             */
            icon: string | Function;
          }
        | Function;
      /**
       * Create template will not be inherited, they are special to the current type.
       */
      templates: {
        /**
         * Path to the template file
         */
        create: string;
      };
      /**
       * RTA specific actions that can be performed on the control.
       */
      actions: object;
      /**
       * Configuration for the properties of the control. See sap.ui.dt.DesignTimeMetadata.Property
       */
      properties: object;
      /**
       * Configuration for the aggregations of the control. See sap.ui.dt.DesignTimeMetadata.Aggregation
       */
      aggregations: object;
      /**
       * Describes the associations of the control. Per default no association is followed as overlays should
       * match the control hierarchy. No actions are supported for associations. See sap.ui.dt.DesignTimeMetadata.Association
       */
      associations: object;
      /**
       * Describes the OData annotations that are actively used by your control. This section needs to be filled
       * for controls evaluating annotations. It can be used for documentation purposes, but is also evaluated
       * by UI adaptation at design time.
       */
      annotations: object;
      /**
       * Describes the scroll containers of the control. This is needed when there are more than one aggregation
       * in one scroll container (e.g. ObjectPageLayout: Header + Sections).
       */
      scrollContainers: Array<{
        /**
         * Defines the DOM reference for the scroll wrapper
         */
        domRef: string | Function;
        /**
         * Names of the aggregations inside the scroll wrapper. Two arguments are passed to the function: the control
         * instance and an update function that can be called if the aggregations change.
         */
        aggregations: string[] | Function;
      }>;
      /**
       * This object defines hooks that are being called when a tool, e.g. Runtime Adaptation, is started and
       * stopped. The functions are being called with the control instance as parameter.
       */
      tool: {
        /**
         * Called when the tool is started
         */
        start: Function;
        /**
         * Called when the tool is stopped
         */
        stop: Function;
      };
    };
  }
}

declare namespace sap {
  interface IUI5DefineDependencyNames {
    "sap/ui/dt/library": undefined;
  }
}
