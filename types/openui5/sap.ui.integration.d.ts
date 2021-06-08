// For Library Version: 1.90.0

declare module "sap/ui/integration/library" {
  import { URI } from "sap/ui/core/library";

  import { ButtonType } from "sap/m/library";

  /**
   * @EXPERIMENTAL (since 1.64)
   *
   * Enumeration of possible card action types.
   */
  export enum CardActionType {
    /**
     * @EXPERIMENTAL (since 1.76)
     *
     * Used for custom actions
     */
    Custom = "Custom",
    /**
     * Used for navigation actions
     */
    Navigation = "Navigation",
    /**
     * Used for submit actions
     */
    Submit = "Submit",
  }
  /**
   * @SINCE 1.86
   *
   * Defines the areas in a card.
   */
  export enum CardArea {
    /**
     * The content area.
     */
    Content = "Content",
    /**
     * The filters area.
     */
    Filters = "Filters",
    /**
     * The header.
     */
    Header = "Header",
  }
  /**
   * @SINCE 1.65
   * @EXPERIMENTAL (since 1.65)
   *
   * Possible data modes for `{@link sap.ui.integration.widgets.Card}`.
   */
  export enum CardDataMode {
    /**
     * When in this mode, the card can make requests.
     */
    Active = "Active",
    /**
     * When in this mode, the card starts processing the manifest when the card is in the viewport.
     */
    Auto = "Auto",
    /**
     * When in this mode, the card cannot make requests.
     */
    Inactive = "Inactive",
  }
  /**
   * @EXPERIMENTAL (since 1.79)
   *
   * An object type that represents card menu action properties.
   */
  export type CardMenuAction = {
    /**
     * The type of the action.
     */
    type: CardActionType | keyof typeof CardActionType;
    /**
     * The text of the action button.
     */
    text: string;
    /**
     * The icon of the action button.
     */
    icon: URI;
    /**
     * The tooltip of the action button.
     */
    tooltip: string;
    /**
     * The type of the action button.
     */
    buttonType: ButtonType | keyof typeof ButtonType;
    /**
     * If the action is enabled. Default value is `true`.
     */
    enabled: boolean | Function;
    /**
     * If the action is visible. Default value is `true`.
     */
    visible: boolean | Function;
    /**
     * The action function.
     */
    action: Function;
    /**
     * The parameters of the action.
     */
    parameters: object;
  };
}

declare module "sap/ui/integration/ActionDefinition" {
  import { default as UI5Element, $ElementSettings } from "sap/ui/core/Element";

  import { ButtonType } from "sap/m/library";

  import { URI } from "sap/ui/core/library";

  import ElementMetadata from "sap/ui/core/ElementMetadata";

  import { CardActionType } from "sap/ui/integration/library";

  import { PropertyBindingInfo } from "sap/ui/base/ManagedObject";

  /**
   * @SINCE 1.85
   * @EXPERIMENTAL (since 1.85)
   *
   * Represents an action, which appears in the header of {@link sap.ui.integration.widgets.Card}. Useful
   * in `Component` card and `Extension`.
   */
  export default class ActionDefinition extends UI5Element {
    /**
     * Constructor for a new `ActionDefinition`.
     *
     * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated
     * objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description
     * of the syntax of the settings object.
     */
    constructor(
      /**
       * Initial settings for the new ActionDefinition.
       */
      mSettings?: $ActionDefinitionSettings
    );
    /**
     * Constructor for a new `ActionDefinition`.
     *
     * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated
     * objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description
     * of the syntax of the settings object.
     */
    constructor(
      /**
       * ID for the new ActionDefinition, generated automatically if no ID is given.
       */
      sId?: string,
      /**
       * Initial settings for the new ActionDefinition.
       */
      mSettings?: $ActionDefinitionSettings
    );

    /**
     * Attaches event handler `fnFunction` to the {@link #event:press press} event of this `sap.ui.integration.ActionDefinition`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.integration.ActionDefinition` itself.
     *
     * Fired when the action button is pressed.
     */
    attachPress(
      /**
       * An application-specific payload object that will be passed to the event handler along with the event
       * object when firing the event
       */
      oData: object,
      /**
       * The function to be called when the event occurs
       */
      fnFunction: Function,
      /**
       * Context object to call the event handler with. Defaults to this `sap.ui.integration.ActionDefinition`
       * itself
       */
      oListener?: object
    ): this;
    /**
     * Detaches event handler `fnFunction` from the {@link #event:press press} event of this `sap.ui.integration.ActionDefinition`.
     *
     * The passed function and listener object must match the ones used for event registration.
     */
    detachPress(
      /**
       * The function to be called, when the event occurs
       */
      fnFunction: Function,
      /**
       * Context object on which the given function had to be called
       */
      oListener?: object
    ): this;
    /**
     * Creates a new subclass of class sap.ui.integration.ActionDefinition with name `sClassName` and enriches
     * it with the information contained in `oClassInfo`.
     *
     * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.core.Element.extend}.
     */
    static extend<T extends Record<string, unknown>>(
      /**
       * Name of the class being created
       */
      sClassName: string,
      /**
       * Object literal with information about the class
       */
      oClassInfo?: sap.ClassInfo<T, ActionDefinition>,
      /**
       * Constructor function for the metadata object; if not given, it defaults to the metadata implementation
       * used by this class
       */
      FNMetaImpl?: Function
    ): Function;
    /**
     * Fires event {@link #event:press press} to attached listeners.
     */
    firePress(
      /**
       * Parameters to pass along with the event
       */
      mParameters?: object
    ): this;
    /**
     * Gets current value of property {@link #getButtonType buttonType}.
     *
     * The type of the action button.
     *
     * Default value is `Transparent`.
     */
    getButtonType(): ButtonType | keyof typeof ButtonType;
    /**
     * Gets current value of property {@link #getEnabled enabled}.
     *
     * Indicates whether the user can interact with the action button or not. **Note**: Disabled controls cannot
     * be focused and they are out of the navigation tab-chain.
     *
     * Default value is `true`.
     */
    getEnabled(): boolean;
    /**
     * Gets current value of property {@link #getIcon icon}.
     *
     * The icon of the action button.
     */
    getIcon(): URI;
    /**
     * Returns a metadata object for class sap.ui.integration.ActionDefinition.
     */
    static getMetadata(): ElementMetadata;
    /**
     * Gets current value of property {@link #getParameters parameters}.
     *
     * The parameters of the action.
     */
    getParameters(): object;
    /**
     * Gets current value of property {@link #getText text}.
     *
     * The text of the action button.
     *
     * Default value is `empty string`.
     */
    getText(): string;
    /**
     * Gets current value of property {@link #getType type}.
     *
     * The type of the action.
     */
    getType(): CardActionType | keyof typeof CardActionType;
    /**
     * Gets current value of property {@link #getVisible visible}.
     *
     * Whether the action button should be visible on the screen.
     *
     * Default value is `true`.
     */
    getVisible(): boolean;
    /**
     * Sets a new value for property {@link #getButtonType buttonType}.
     *
     * The type of the action button.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `Transparent`.
     */
    setButtonType(
      /**
       * New value for property `buttonType`
       */
      sButtonType?: ButtonType | keyof typeof ButtonType
    ): this;
    /**
     * Sets a new value for property {@link #getEnabled enabled}.
     *
     * Indicates whether the user can interact with the action button or not. **Note**: Disabled controls cannot
     * be focused and they are out of the navigation tab-chain.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `true`.
     */
    setEnabled(
      /**
       * New value for property `enabled`
       */
      bEnabled?: boolean
    ): this;
    /**
     * Sets a new value for property {@link #getIcon icon}.
     *
     * The icon of the action button.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     */
    setIcon(
      /**
       * New value for property `icon`
       */
      sIcon: URI
    ): this;
    /**
     * Sets a new value for property {@link #getParameters parameters}.
     *
     * The parameters of the action.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     */
    setParameters(
      /**
       * New value for property `parameters`
       */
      oParameters: object
    ): this;
    /**
     * Sets a new value for property {@link #getText text}.
     *
     * The text of the action button.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `empty string`.
     */
    setText(
      /**
       * New value for property `text`
       */
      sText?: string
    ): this;
    /**
     * Sets a new value for property {@link #getType type}.
     *
     * The type of the action.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     */
    setType(
      /**
       * New value for property `type`
       */
      sType: CardActionType | keyof typeof CardActionType
    ): this;
    /**
     * Sets a new value for property {@link #getVisible visible}.
     *
     * Whether the action button should be visible on the screen.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `true`.
     */
    setVisible(
      /**
       * New value for property `visible`
       */
      bVisible?: boolean
    ): this;
    /**
     * Attaches event handler `fnFunction` to the {@link #event:press press} event of this `sap.ui.integration.ActionDefinition`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.integration.ActionDefinition` itself.
     *
     * Fired when the action button is pressed.
     */
    attachPress(
      /**
       * The function to be called when the event occurs
       */
      fnFunction: Function,
      /**
       * Context object to call the event handler with. Defaults to this `sap.ui.integration.ActionDefinition`
       * itself
       */
      oListener?: object
    ): this;
  }

  export interface $ActionDefinitionSettings extends $ElementSettings {
    /**
     * The type of the action.
     */
    type?: (CardActionType | keyof typeof CardActionType) | PropertyBindingInfo;

    /**
     * The text of the action button.
     */
    text?: string | PropertyBindingInfo;

    /**
     * The icon of the action button.
     */
    icon?: URI | PropertyBindingInfo;

    /**
     * The type of the action button.
     */
    buttonType?: (ButtonType | keyof typeof ButtonType) | PropertyBindingInfo;

    /**
     * Indicates whether the user can interact with the action button or not. **Note**: Disabled controls cannot
     * be focused and they are out of the navigation tab-chain.
     */
    enabled?: boolean | PropertyBindingInfo;

    /**
     * Whether the action button should be visible on the screen.
     */
    visible?: boolean | PropertyBindingInfo;

    /**
     * The parameters of the action.
     */
    parameters?: object | PropertyBindingInfo;

    /**
     * Fired when the action button is pressed.
     */
    press?: Function;
  }
}

declare module "sap/ui/integration/Designtime" {
  import {
    default as ManagedObject,
    $ManagedObjectSettings,
  } from "sap/ui/base/ManagedObject";

  import { CardFacade } from "sap/ui/integration/widgets/Card";

  import ManagedObjectMetadata from "sap/ui/base/ManagedObjectMetadata";

  /**
   * @SINCE 1.75
   * @EXPERIMENTAL (since 1.75)
   *
   * Brings JavaScript capabilities for an {@link sap.ui.integration.widgets.Card} where custom logic can
   * be implemented.
   */
  export default class Designtime extends ManagedObject {
    /**
     * Constructor for a new `Designtime`.
     *
     * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated
     * objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description
     * of the syntax of the settings object.
     *
     * This class does not have its own settings, but all settings applicable to the base type {@link sap.ui.base.ManagedObject#constructor
     * sap.ui.base.ManagedObject} can be used.
     */
    constructor(
      /**
       * Initial settings for the new Designtime.
       */
      mSettings?: $DesigntimeSettings
    );
    /**
     * Constructor for a new `Designtime`.
     *
     * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated
     * objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description
     * of the syntax of the settings object.
     *
     * This class does not have its own settings, but all settings applicable to the base type {@link sap.ui.base.ManagedObject#constructor
     * sap.ui.base.ManagedObject} can be used.
     */
    constructor(
      /**
       * ID for the new Designtime, generated automatically if no ID is given.
       */
      sId?: string,
      /**
       * Initial settings for the new Designtime.
       */
      mSettings?: $DesigntimeSettings
    );

    /**
     * Creates a new subclass of class sap.ui.integration.Designtime with name `sClassName` and enriches it
     * with the information contained in `oClassInfo`.
     *
     * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.base.ManagedObject.extend}.
     */
    static extend<T extends Record<string, unknown>>(
      /**
       * Name of the class being created
       */
      sClassName: string,
      /**
       * Object literal with information about the class
       */
      oClassInfo?: sap.ClassInfo<T, Designtime>,
      /**
       * Constructor function for the metadata object; if not given, it defaults to the metadata implementation
       * used by this class
       */
      FNMetaImpl?: Function
    ): Function;
    /**
     * Returns an interface to the card, which uses this extension.
     */
    getCard(): CardFacade;
    /**
     * Returns a metadata object for class sap.ui.integration.Designtime.
     */
    static getMetadata(): ManagedObjectMetadata;
  }

  export interface $DesigntimeSettings extends $ManagedObjectSettings {}
}

declare module "sap/ui/integration/designtime/baseEditor/validator/IsBoolean" {
  /**
   * @SINCE 1.81
   * @EXPERIMENTAL
   *
   * Validates if the provided value is a boolean or binding string.
   */
  interface IsBoolean {
    /**
     * Validator function
     */
    validate(
      /**
       * Value to validate
       */
      vValue: boolean | string
    ): boolean;
  }
  const IsBoolean: IsBoolean;
  export default IsBoolean;
}

declare module "sap/ui/integration/designtime/baseEditor/validator/IsDate" {
  /**
   * @SINCE 1.81
   * @EXPERIMENTAL
   *
   * Validates if the provided value can be parsed to a valid date.
   */
  interface IsDate {
    /**
     * Validator function
     */
    validate(
      /**
       * Date string to validate
       */
      sDateString: string
    ): boolean;
  }
  const IsDate: IsDate;
  export default IsDate;
}

declare module "sap/ui/integration/designtime/baseEditor/validator/IsInteger" {
  /**
   * @SINCE 1.81
   * @EXPERIMENTAL
   *
   * Validates if the provided value is an integer or binding string.
   */
  interface IsInteger {
    /**
     * Validator function
     */
    validate(
      /**
       * Value to validate
       */
      vValue: number | string
    ): boolean;
  }
  const IsInteger: IsInteger;
  export default IsInteger;
}

declare module "sap/ui/integration/designtime/baseEditor/validator/IsNumber" {
  /**
   * @SINCE 1.81
   * @EXPERIMENTAL
   *
   * Validates if the provided value is a number or binding string.
   */
  interface IsNumber {
    /**
     * Validator function
     */
    validate(
      /**
       * Value to validate
       */
      vValue: number | string
    ): boolean;
  }
  const IsNumber: IsNumber;
  export default IsNumber;
}

declare module "sap/ui/integration/designtime/baseEditor/validator/IsSelectedKey" {
  /**
   * @SINCE 1.81
   * @EXPERIMENTAL
   *
   * Validates if the provided value is one of the given keys.
   */
  interface IsSelectedKey {
    /**
     * Validator function
     */
    validate(
      /**
       * Key to validate
       */
      sValue: string,
      /**
       * Validator config
       */
      oConfig: {
        /**
         * Available keys
         */
        keys: string[];
      }
    ): boolean;
  }
  const IsSelectedKey: IsSelectedKey;
  export default IsSelectedKey;
}

declare module "sap/ui/integration/designtime/baseEditor/validator/IsStringList" {
  /**
   * @SINCE 1.81
   * @EXPERIMENTAL
   *
   * Validates if none of the provided values is an invalid binding.
   */
  interface IsStringList {
    /**
     * Validator function
     */
    validate(
      /**
       * Strings to validate
       */
      aValue: string[]
    ): boolean;
  }
  const IsStringList: IsStringList;
  export default IsStringList;
}

declare module "sap/ui/integration/designtime/baseEditor/validator/IsUniqueKey" {
  /**
   * @SINCE 1.81
   * @EXPERIMENTAL
   *
   * Validates if the provided key is unique in a list of given keys.
   */
  interface IsUniqueKey {
    /**
     * Validator function
     */
    validate(
      /**
       * New key value to validate
       */
      sValue: string,
      /**
       * Validator config
       */
      oConfig: {
        /**
         * Existing keys
         */
        keys: string[];
        /**
         * Previous key value
         */
        currentKey: string;
      }
    ): boolean;
  }
  const IsUniqueKey: IsUniqueKey;
  export default IsUniqueKey;
}

declare module "sap/ui/integration/designtime/baseEditor/validator/IsUniqueList" {
  /**
   * @SINCE 1.81
   * @EXPERIMENTAL
   *
   * Validates if the provided list contains no duplicates.
   */
  interface IsUniqueList {
    /**
     * Validator function
     */
    validate(
      /**
       * List to validate
       */
      aValue: string
    ): boolean;
  }
  const IsUniqueList: IsUniqueList;
  export default IsUniqueList;
}

declare module "sap/ui/integration/designtime/baseEditor/validator/IsValidBinding" {
  /**
   * @SINCE 1.81
   * @EXPERIMENTAL
   *
   * Validates if the provided value is a valid binding.
   */
  interface IsValidBinding {
    /**
     * Validator function
     */
    validate(
      /**
       * Value to validate
       */
      sValue: string,
      /**
       * Validator config
       */
      oConfig: {
        /**
         * Whether strings which don't contain a binding are allowed, default is false
         */
        allowPlainStrings: boolean;
      }
    ): boolean;
  }
  const IsValidBinding: IsValidBinding;
  export default IsValidBinding;
}

declare module "sap/ui/integration/designtime/baseEditor/validator/MaxLength" {
  /**
   * @SINCE 1.81
   * @EXPERIMENTAL
   *
   * Validates if the provided value doesn't exceed the maximum length.
   */
  interface MaxLength {
    /**
     * Validator function
     */
    validate(
      /**
       * Value to validate
       */
      vValue: boolean | string
    ): boolean;
  }
  const MaxLength: MaxLength;
  export default MaxLength;
}

declare module "sap/ui/integration/designtime/baseEditor/validator/NotABinding" {
  /**
   * @SINCE 1.81
   * @EXPERIMENTAL
   *
   * Validates if the provided value doesn't contain a binding.
   */
  interface NotABinding {
    /**
     * Validator function
     */
    validate(
      /**
       * Value to validate
       */
      sValue: string
    ): boolean;
  }
  const NotABinding: NotABinding;
  export default NotABinding;
}

declare module "sap/ui/integration/Extension" {
  import {
    default as ManagedObject,
    $ManagedObjectSettings,
    PropertyBindingInfo,
  } from "sap/ui/base/ManagedObject";

  import Control from "sap/ui/core/Control";

  import { CardActionType, CardMenuAction } from "sap/ui/integration/library";

  import { CardFacade } from "sap/ui/integration/widgets/Card";

  import ManagedObjectMetadata from "sap/ui/base/ManagedObjectMetadata";

  /**
   * @SINCE 1.75
   *
   * Brings JavaScript capabilities for an {@link sap.ui.integration.widgets.Card} where custom logic can
   * be implemented.
   */
  export default class Extension extends ManagedObject {
    /**
     * Constructor for a new `Extension`.
     *
     * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated
     * objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description
     * of the syntax of the settings object.
     */
    constructor(
      /**
       * Initial settings for the new extension.
       */
      mSettings?: $ExtensionSettings
    );
    /**
     * Constructor for a new `Extension`.
     *
     * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated
     * objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description
     * of the syntax of the settings object.
     */
    constructor(
      /**
       * ID for the new extension, generated automatically if no ID is given.
       */
      sId?: string,
      /**
       * Initial settings for the new extension.
       */
      mSettings?: $ExtensionSettings
    );

    /**
     * @EXPERIMENTAL (since 1.75)
     *
     * Attaches event handler `fnFunction` to the {@link #event:action action} event of this `sap.ui.integration.Extension`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.integration.Extension` itself.
     *
     * Fired when an action is triggered in the card.
     */
    attachAction(
      /**
       * An application-specific payload object that will be passed to the event handler along with the event
       * object when firing the event
       */
      oData: object,
      /**
       * The function to be called when the event occurs
       */
      fnFunction: Function,
      /**
       * Context object to call the event handler with. Defaults to this `sap.ui.integration.Extension` itself
       */
      oListener?: object
    ): this;
    /**
     * @EXPERIMENTAL (since 1.75)
     *
     * Detaches event handler `fnFunction` from the {@link #event:action action} event of this `sap.ui.integration.Extension`.
     *
     * The passed function and listener object must match the ones used for event registration.
     */
    detachAction(
      /**
       * The function to be called, when the event occurs
       */
      fnFunction: Function,
      /**
       * Context object on which the given function had to be called
       */
      oListener?: object
    ): this;
    /**
     * Creates a new subclass of class sap.ui.integration.Extension with name `sClassName` and enriches it with
     * the information contained in `oClassInfo`.
     *
     * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.base.ManagedObject.extend}.
     */
    static extend<T extends Record<string, unknown>>(
      /**
       * Name of the class being created
       */
      sClassName: string,
      /**
       * Object literal with information about the class
       */
      oClassInfo?: sap.ClassInfo<T, Extension>,
      /**
       * Constructor function for the metadata object; if not given, it defaults to the metadata implementation
       * used by this class
       */
      FNMetaImpl?: Function
    ): Function;
    /**
     * @EXPERIMENTAL (since 1.75)
     *
     * Fires event {@link #event:action action} to attached listeners.
     *
     * Listeners may prevent the default action of this event by calling the `preventDefault` method on the
     * event object. The return value of this method indicates whether the default action should be executed.
     */
    fireAction(
      /**
       * Parameters to pass along with the event
       */
      mParameters?: {
        /**
         * The card the action is fired from.
         */
        card?: Control;
        /**
         * The action configuration.
         */
        actionConfig?: object;
        /**
         * The action source.
         */
        actionSource?: Control;
        /**
         * The parameters related to the triggered action.
         */
        parameters?: object;
        /**
         * The type of the action.
         */
        type?: CardActionType | keyof typeof CardActionType;
      }
    ): boolean;
    /**
     * @deprecated (since 1.85) - This property is replaced by the `actions` aggregation of the card;
     * @EXPERIMENTAL (since 1.75)
     *
     * Gets current value of property {@link #getActions actions}.
     *
     * The actions configuration.
     */
    getActions(): CardMenuAction[];
    /**
     * Returns an interface to the card, which uses this extension.
     */
    getCard(): CardFacade;
    /**
     * @EXPERIMENTAL (since 1.79)
     *
     * Gets current value of property {@link #getFormatters formatters}.
     *
     * The formatters, which can be used in the manifest.
     */
    getFormatters(): object;
    /**
     * Returns a metadata object for class sap.ui.integration.Extension.
     */
    static getMetadata(): ManagedObjectMetadata;
    /**
     * Called when the card is ready.
     */
    onCardReady(): void;
    /**
     * @EXPERIMENTAL (since 1.75)
     *
     * Attaches event handler `fnFunction` to the {@link #event:action action} event of this `sap.ui.integration.Extension`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.integration.Extension` itself.
     *
     * Fired when an action is triggered in the card.
     */
    attachAction(
      /**
       * The function to be called when the event occurs
       */
      fnFunction: Function,
      /**
       * Context object to call the event handler with. Defaults to this `sap.ui.integration.Extension` itself
       */
      oListener?: object
    ): this;
  }

  export interface $ExtensionSettings extends $ManagedObjectSettings {
    /**
     * @deprecated (since 1.85) - This property is replaced by the `actions` aggregation of the card;
     * @EXPERIMENTAL (since 1.75)
     *
     * The actions configuration.
     */
    actions?: CardMenuAction[] | PropertyBindingInfo;

    /**
     * @EXPERIMENTAL (since 1.79)
     *
     * The formatters, which can be used in the manifest.
     */
    formatters?: object | PropertyBindingInfo;

    /**
     * @EXPERIMENTAL (since 1.75)
     *
     * Fired when an action is triggered in the card.
     */
    action?: Function;
  }
}

declare module "sap/ui/integration/Host" {
  import { default as UI5Element, $ElementSettings } from "sap/ui/core/Element";

  import Control from "sap/ui/core/Control";

  import { CardActionType, CardMenuAction } from "sap/ui/integration/library";

  import ElementMetadata from "sap/ui/core/ElementMetadata";

  import { PropertyBindingInfo } from "sap/ui/base/ManagedObject";

  /**
   * @SINCE 1.75
   * @EXPERIMENTAL (since 1.75)
   *
   * Provides application-level functions and services to an integration card.
   *
   * Examples may include, but are not limited to options like: share a card, remove a card.
   */
  export default class Host extends UI5Element {
    /**
     * Constructor for a new `Host`.
     *
     * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated
     * objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description
     * of the syntax of the settings object.
     */
    constructor(
      /**
       * Initial settings for the new host.
       */
      mSettings?: $HostSettings
    );
    /**
     * Constructor for a new `Host`.
     *
     * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated
     * objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description
     * of the syntax of the settings object.
     */
    constructor(
      /**
       * ID for the new host, generated automatically if no ID is given.
       */
      sId?: string,
      /**
       * Initial settings for the new host.
       */
      mSettings?: $HostSettings
    );

    /**
     * @EXPERIMENTAL (since 1.75)
     *
     * Attaches event handler `fnFunction` to the {@link #event:action action} event of this `sap.ui.integration.Host`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.integration.Host` itself.
     *
     * Fired when an action is triggered.
     */
    attachAction(
      /**
       * An application-specific payload object that will be passed to the event handler along with the event
       * object when firing the event
       */
      oData: object,
      /**
       * The function to be called when the event occurs
       */
      fnFunction: Function,
      /**
       * Context object to call the event handler with. Defaults to this `sap.ui.integration.Host` itself
       */
      oListener?: object
    ): this;
    /**
     * @EXPERIMENTAL (since 1.75)
     *
     * Detaches event handler `fnFunction` from the {@link #event:action action} event of this `sap.ui.integration.Host`.
     *
     * The passed function and listener object must match the ones used for event registration.
     */
    detachAction(
      /**
       * The function to be called, when the event occurs
       */
      fnFunction: Function,
      /**
       * Context object on which the given function had to be called
       */
      oListener?: object
    ): this;
    /**
     * Creates a new subclass of class sap.ui.integration.Host with name `sClassName` and enriches it with the
     * information contained in `oClassInfo`.
     *
     * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.core.Element.extend}.
     */
    static extend<T extends Record<string, unknown>>(
      /**
       * Name of the class being created
       */
      sClassName: string,
      /**
       * Object literal with information about the class
       */
      oClassInfo?: sap.ClassInfo<T, Host>,
      /**
       * Constructor function for the metadata object; if not given, it defaults to the metadata implementation
       * used by this class
       */
      FNMetaImpl?: Function
    ): Function;
    /**
     * @EXPERIMENTAL (since 1.75)
     *
     * Fires event {@link #event:action action} to attached listeners.
     *
     * Listeners may prevent the default action of this event by calling the `preventDefault` method on the
     * event object. The return value of this method indicates whether the default action should be executed.
     */
    fireAction(
      /**
       * Parameters to pass along with the event
       */
      mParameters?: {
        /**
         * The card the action is fired from.
         */
        card?: Control;
        /**
         * The action configuration.
         */
        actionConfig?: object;
        /**
         * The action source.
         */
        actionSource?: Control;
        /**
         * The parameters related to the triggered action.
         */
        parameters?: object;
        /**
         * The type of the action.
         */
        type?: CardActionType | keyof typeof CardActionType;
      }
    ): boolean;
    /**
     * @EXPERIMENTAL (since 1.75)
     *
     * Gets current value of property {@link #getActions actions}.
     *
     * The actions configuration.
     */
    getActions(): CardMenuAction[];
    /**
     * @SINCE 1.83
     *
     * Returns the context object for the Card Editor design-time environment Contexts can be used to configure
     * Cards with information available in the host environment. Each entry in the list should contain design-time
     * information. A label, placeholder, and description should be provided.
     *
     * Example Context Structure: { "sap.workzone": { "currentUser: { "id": { "label": "Id of the Work Zone
     * user", "placeholder": "Work Zone user id", "description": "The value will change based on the logged
     * on user" } } } ... }
     *
     * The context information and texts should be translated as they appear in the design-time UI of the Card
     * Editor.
     */
    getContexts(): Promise<any>;
    /**
     * @SINCE 1.83
     *
     * Resolves the value for a given path in the context of the host Contexts can be used to configure Cards
     * with information available in the host environment.
     *
     * Example Context Structure: { "sap.workzone": { "currentUser: { "id": { "label": "Id of the Work Zone
     * user", "placeholder": "Work Zone user id", "description": "The value will change based on the logged
     * on user" } } } ... }
     *
     * Example path to the current user id of the context sPath = "sap.workzone/currentUser/id" parameter: {
     * userId: { value: "{context>sap.workzone/currentUser/id}" resolves to UserId } }
     */
    getContextValue(
      /**
       * The path to a context
       */
      sPath: string
    ): Promise<any>;
    /**
     * Resolves the destination and returns its URL.
     */
    getDestination(
      /**
       * The name of the destination. Most often the name which is used in the SAP Cloud Platform.
       */
      sDestinationName: string
    ): Promise<any>;
    /**
     * @SINCE 1.83
     *
     * Returns the list of destinations for the Card Editor design-time environment List entries are objects
     * that contain at least the name. { "name": "DestinationName" }
     */
    getDestinations(): Promise<any>;
    /**
     * Returns a metadata object for class sap.ui.integration.Host.
     */
    static getMetadata(): ElementMetadata;
    /**
     * Gets current value of property {@link #getResolveDestination resolveDestination}.
     *
     * A function that resolves the given destination name to a URL.
     *
     * The Card calls this function when it needs to send a request to a destination. Function returns the URL
     * to which the request is sent.
     *
     * If a card depends on a destination, but this callback is not implemented, an error will be logged.
     *
     * The callback receives `destinationName` as parameter and returns a string with the URL. Or alternatively
     * the callback may return a `Promise` with the URL as an argument.
     */
    getResolveDestination(): Function;
    /**
     * @EXPERIMENTAL (since 1.75)
     *
     * Sets a new value for property {@link #getActions actions}.
     *
     * The actions configuration.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     */
    setActions(
      /**
       * New value for property `actions`
       */
      sActions: CardMenuAction[]
    ): this;
    /**
     * Sets a new value for property {@link #getResolveDestination resolveDestination}.
     *
     * A function that resolves the given destination name to a URL.
     *
     * The Card calls this function when it needs to send a request to a destination. Function returns the URL
     * to which the request is sent.
     *
     * If a card depends on a destination, but this callback is not implemented, an error will be logged.
     *
     * The callback receives `destinationName` as parameter and returns a string with the URL. Or alternatively
     * the callback may return a `Promise` with the URL as an argument.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     */
    setResolveDestination(
      /**
       * New value for property `resolveDestination`
       */
      fnResolveDestination: Function
    ): this;
    /**
     * @EXPERIMENTAL (since 1.75)
     *
     * Attaches event handler `fnFunction` to the {@link #event:action action} event of this `sap.ui.integration.Host`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.integration.Host` itself.
     *
     * Fired when an action is triggered.
     */
    attachAction(
      /**
       * The function to be called when the event occurs
       */
      fnFunction: Function,
      /**
       * Context object to call the event handler with. Defaults to this `sap.ui.integration.Host` itself
       */
      oListener?: object
    ): this;
  }

  export interface $HostSettings extends $ElementSettings {
    /**
     * @EXPERIMENTAL (since 1.75)
     *
     * The actions configuration.
     */
    actions?: CardMenuAction[] | PropertyBindingInfo;

    /**
     * A function that resolves the given destination name to a URL.
     *
     * The Card calls this function when it needs to send a request to a destination. Function returns the URL
     * to which the request is sent.
     *
     * If a card depends on a destination, but this callback is not implemented, an error will be logged.
     *
     * The callback receives `destinationName` as parameter and returns a string with the URL. Or alternatively
     * the callback may return a `Promise` with the URL as an argument.
     */
    resolveDestination?: Function | PropertyBindingInfo;

    /**
     * @EXPERIMENTAL (since 1.75)
     *
     * Fired when an action is triggered.
     */
    action?: Function;
  }
}

declare module "sap/ui/integration/widgets/Card" {
  import { default as CardBase, $CardBaseSettings } from "sap/f/CardBase";

  import ActionDefinition from "sap/ui/integration/ActionDefinition";

  import Control from "sap/ui/core/Control";

  import {
    CardActionType,
    CardDataMode,
    CardArea,
  } from "sap/ui/integration/library";

  import { URI, ID, MessageType } from "sap/ui/core/library";

  import { cards } from "sap/f/library";

  import Host from "sap/ui/integration/Host";

  import ElementMetadata from "sap/ui/core/ElementMetadata";

  import {
    PropertyBindingInfo,
    AggregationBindingInfo,
  } from "sap/ui/base/ManagedObject";

  /**
   * @SINCE 1.62
   *
   * A control that represents a container with a header and content.
   *
   * Overview: Cards are small user interface elements which provide the most important information from an
   * app, related to a specific role or task. The information is represented in a compact manner, allowing
   * for actions to be executed. Cards can be described as small representations of an app which can be integrated
   * in different systems.
   *
   * The integration card is defined in a declarative way, using a manifest.json to be:
   * 	 - Easily integrated into apps
   * 	 - Easily reused across apps
   * 	 - Understandable by other technologies
   * 	 - Self-contained (has a built-in functionality and doesn't need external configuration)
   * 	 - Dynamic parameter handling
   * 	 - Clear separation of the roles of the card and app developers
   *
   * The role of the card developer is to describe the card in a manifest.json file and define:
   * 	 - Header
   * 	 - Content
   * 	 - Data source
   * 	 - Possible actions
   *
   * The role of the app developer is to integrate the card into the app and define:
   * 	 - The dimensions of the card inside a layout of choice, using the `width` and `height` properties
   * 	 - The behavior for the actions described in the manifest.json file, using the action event
   *
   * **You can learn more about integration cards in the Card
   * Explorer**
   *
   * When to use
   * 	 - When you want to reuse the card across apps.
   * 	 - When you need easy integration and configuration.
   *
   * When not to use
   * 	 - When you need more header and content flexibility.
   * 	 - When you have to achieve simple card visualization. For such cases, use: {@link sap.f.Card sap.f.Card}.
   *
   * 	 - When you have to use an application model. For such cases, use: {@link sap.f.Card sap.f.Card}.
   * 	 - When you need complex behavior. For such cases, use: {@link sap.f.Card sap.f.Card}.
   */
  export default class Card extends CardBase {
    /**
     * Constructor for a new `Card`.
     *
     * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated
     * objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description
     * of the syntax of the settings object.
     * See:
     * 	{@link topic:5b46b03f024542ba802d99d67bc1a3f4 Cards}
     */
    constructor(
      /**
       * Initial settings for the new control
       */
      mSettings?: $CardSettings
    );
    /**
     * Constructor for a new `Card`.
     *
     * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated
     * objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description
     * of the syntax of the settings object.
     * See:
     * 	{@link topic:5b46b03f024542ba802d99d67bc1a3f4 Cards}
     */
    constructor(
      /**
       * ID for the new control, generated automatically if no ID is given
       */
      sId?: string,
      /**
       * Initial settings for the new control
       */
      mSettings?: $CardSettings
    );

    /**
     * @SINCE 1.85
     * @EXPERIMENTAL (since 1.85)
     *
     * Adds some actionDefinition to the aggregation {@link #getActionDefinitions actionDefinitions}.
     */
    addActionDefinition(
      /**
       * The actionDefinition to add; if empty, nothing is inserted
       */
      oActionDefinition: ActionDefinition
    ): this;
    /**
     * @EXPERIMENTAL (since 1.64)
     *
     * Attaches event handler `fnFunction` to the {@link #event:action action} event of this `sap.ui.integration.widgets.Card`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.integration.widgets.Card` itself.
     *
     * Fired when an action is triggered on the card.
     */
    attachAction(
      /**
       * An application-specific payload object that will be passed to the event handler along with the event
       * object when firing the event
       */
      oData: object,
      /**
       * The function to be called when the event occurs
       */
      fnFunction: Function,
      /**
       * Context object to call the event handler with. Defaults to this `sap.ui.integration.widgets.Card` itself
       */
      oListener?: object
    ): this;
    /**
     * Attaches event handler `fnFunction` to the {@link #event:manifestApplied manifestApplied} event of this
     * `sap.ui.integration.widgets.Card`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.integration.widgets.Card` itself.
     *
     * Fired when card utilities (like `DataProviderFactory`) and the card elements (like header) are created
     * and initialized.
     *
     * Note: The card's content may not be available yet because it may depend on other resources to load.
     */
    attachManifestApplied(
      /**
       * An application-specific payload object that will be passed to the event handler along with the event
       * object when firing the event
       */
      oData: object,
      /**
       * The function to be called when the event occurs
       */
      fnFunction: Function,
      /**
       * Context object to call the event handler with. Defaults to this `sap.ui.integration.widgets.Card` itself
       */
      oListener?: object
    ): this;
    /**
     * @EXPERIMENTAL (since 1.72)
     *
     * Attaches event handler `fnFunction` to the {@link #event:manifestReady manifestReady} event of this `sap.ui.integration.widgets.Card`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.integration.widgets.Card` itself.
     *
     * Fired when the manifest is loaded.
     */
    attachManifestReady(
      /**
       * An application-specific payload object that will be passed to the event handler along with the event
       * object when firing the event
       */
      oData: object,
      /**
       * The function to be called when the event occurs
       */
      fnFunction: Function,
      /**
       * Context object to call the event handler with. Defaults to this `sap.ui.integration.widgets.Card` itself
       */
      oListener?: object
    ): this;
    /**
     * @SINCE 1.85
     * @EXPERIMENTAL (since 1.85)
     *
     * Destroys all the actionDefinitions in the aggregation {@link #getActionDefinitions actionDefinitions}.
     */
    destroyActionDefinitions(): this;
    /**
     * @EXPERIMENTAL (since 1.64)
     *
     * Detaches event handler `fnFunction` from the {@link #event:action action} event of this `sap.ui.integration.widgets.Card`.
     *
     * The passed function and listener object must match the ones used for event registration.
     */
    detachAction(
      /**
       * The function to be called, when the event occurs
       */
      fnFunction: Function,
      /**
       * Context object on which the given function had to be called
       */
      oListener?: object
    ): this;
    /**
     * Detaches event handler `fnFunction` from the {@link #event:manifestApplied manifestApplied} event of
     * this `sap.ui.integration.widgets.Card`.
     *
     * The passed function and listener object must match the ones used for event registration.
     */
    detachManifestApplied(
      /**
       * The function to be called, when the event occurs
       */
      fnFunction: Function,
      /**
       * Context object on which the given function had to be called
       */
      oListener?: object
    ): this;
    /**
     * @EXPERIMENTAL (since 1.72)
     *
     * Detaches event handler `fnFunction` from the {@link #event:manifestReady manifestReady} event of this
     * `sap.ui.integration.widgets.Card`.
     *
     * The passed function and listener object must match the ones used for event registration.
     */
    detachManifestReady(
      /**
       * The function to be called, when the event occurs
       */
      fnFunction: Function,
      /**
       * Context object on which the given function had to be called
       */
      oListener?: object
    ): this;
    /**
     * Creates a new subclass of class sap.ui.integration.widgets.Card with name `sClassName` and enriches it
     * with the information contained in `oClassInfo`.
     *
     * `oClassInfo` might contain the same kind of information as described in {@link sap.f.CardBase.extend}.
     */
    static extend<T extends Record<string, unknown>>(
      /**
       * Name of the class being created
       */
      sClassName: string,
      /**
       * Object literal with information about the class
       */
      oClassInfo?: sap.ClassInfo<T, Card>,
      /**
       * Constructor function for the metadata object; if not given, it defaults to the metadata implementation
       * used by this class
       */
      FNMetaImpl?: Function
    ): Function;
    /**
     * @EXPERIMENTAL (since 1.64)
     *
     * Fires event {@link #event:action action} to attached listeners.
     *
     * Listeners may prevent the default action of this event by calling the `preventDefault` method on the
     * event object. The return value of this method indicates whether the default action should be executed.
     */
    fireAction(
      /**
       * Parameters to pass along with the event
       */
      mParameters?: {
        /**
         * The action source.
         */
        actionSource?: Control;
        /**
         * The manifest parameters related to the triggered action.
         */
        manifestParameters?: object;
        /**
         * The parameters related to the triggered action.
         */
        parameters?: object;
        /**
         * The type of the action.
         */
        type?: CardActionType | keyof typeof CardActionType;
      }
    ): boolean;
    /**
     * Fires event {@link #event:manifestApplied manifestApplied} to attached listeners.
     */
    fireManifestApplied(
      /**
       * Parameters to pass along with the event
       */
      mParameters?: object
    ): this;
    /**
     * @EXPERIMENTAL (since 1.72)
     *
     * Fires event {@link #event:manifestReady manifestReady} to attached listeners.
     */
    fireManifestReady(
      /**
       * Parameters to pass along with the event
       */
      mParameters?: object
    ): this;
    /**
     * @SINCE 1.85
     * @EXPERIMENTAL (since 1.85)
     *
     * Gets content of aggregation {@link #getActionDefinitions actionDefinitions}.
     *
     * Actions definitions from which actions in the header menu of the card are created. **Note**: This aggregation
     * is destroyed when the property `manifest` changes.
     */
    getActionDefinitions(): ActionDefinition[];
    /**
     * @SINCE 1.70
     * @EXPERIMENTAL (since 1.70)
     *
     * Gets current value of property {@link #getBaseUrl baseUrl}.
     *
     * Defines the base URL of the Card Manifest. It should be used when manifest property is an object instead
     * of a URL.
     */
    getBaseUrl(): URI;
    /**
     * Implements sap.f.ICard interface.
     */
    getCardContent(): Control;
    /**
     * Implements sap.f.ICard interface.
     */
    getCardHeader(): cards.IHeader;
    /**
     * Implements sap.f.ICard interface.
     */
    getCardHeaderPosition():
      | cards.HeaderPosition
      | keyof typeof cards.HeaderPosition;
    /**
     * @EXPERIMENTAL (since 1.77)
     *
     * Gets values of manifest parameters combined with the parameters from `parameters` property.
     *
     * **Notes**
     *
     * - Use this method when the manifest is ready. Check `manifestReady` event.
     *
     * - Use when developing a Component card.
     */
    getCombinedParameters(): Record<string, any>;
    /**
     * @SINCE 1.65
     * @EXPERIMENTAL (since 1.65)
     *
     * Gets current value of property {@link #getDataMode dataMode}.
     *
     * Defines the state of the `Card`. When set to `Inactive`, the `Card` doesn't make requests.
     *
     * Default value is `Active`.
     */
    getDataMode(): CardDataMode | keyof typeof CardDataMode;
    /**
     * Returns the DOM Element that should get the focus.
     */
    getFocusDomRef(): Element;
    /**
     * ID of the element which is the current target of the association {@link #getHost host}, or `null`.
     */
    getHost(): ID;
    /**
     * @EXPERIMENTAL (since 1.77)
     *
     * Gets the instance of the `host` association.
     */
    getHostInstance(): Host;
    /**
     * Overwrites getter for card manifest.
     */
    getManifest(): string | Object;
    /**
     * @SINCE 1.76
     * @EXPERIMENTAL (since 1.76)
     *
     * Gets current value of property {@link #getManifestChanges manifestChanges}.
     *
     * Defines a list of configuration settings, which will be merged into the original manifest.
     *
     * This can be a list of flexibility changes generated during designtime.
     *
     * Each level of changes is an item in the list. The change has property "content" which contains the configuration,
     * which will be merged on top of the original `sap.card` section.
     *
     * Example:
     * ```javascript
     *
     * [
     *     {"content": {"header": {"title": "My title"}}},
     *     {"content": {"header": {"title": "My new title"}}}
     * ]
     * ```
     */
    getManifestChanges(): object[];
    /**
     * @EXPERIMENTAL (since 1.77)
     *
     * Returns a value from the Manifest based on the specified path.
     *
     * **Note** Use this method when the manifest is ready. Check `manifestReady` event.
     */
    getManifestEntry(
      /**
       * The path to return a value for.
       */
      sPath: string
    ): Object;
    /**
     * Returns a metadata object for class sap.ui.integration.widgets.Card.
     */
    static getMetadata(): ElementMetadata;
    /**
     * @EXPERIMENTAL (since 1.83)
     *
     * Gets translated text from the i18n properties files configured for this card.
     *
     * For more details see {@link module:sap/base/i18n/ResourceBundle#getText}.
     */
    getTranslatedText(
      /**
       * Key to retrieve the text for
       */
      sKey: string,
      /**
       * List of parameter values which should replace the placeholders "{n}" (n is the index) in
       * the found locale-specific string value. Note that the replacement is done whenever `aArgs` is given,
       * no matter whether the text contains placeholders or not and no matter whether `aArgs` contains a value
       * for n or not.
       */
      aArgs?: string[],
      /**
       * If set, `undefined` is returned instead of the key string, when the key is not found in any bundle or
       * fallback bundle.
       */
      bIgnoreKeyFallback?: boolean
    ): string;
    /**
     * Hides the loading placeholders on the whole card, or a particular section of the card.
     */
    hideLoadingPlaceholders(
      /**
       * Area of the card to show the loading placeholders on. Possible options are 'Header', 'Content', 'Filters'.
       * Leave empty to hide loading placeholders on all areas of the card.
       */
      eCardArea?: CardArea | keyof typeof CardArea
    ): void;
    /**
     * @SINCE 1.85
     * @EXPERIMENTAL (since 1.85)
     *
     * Checks for the provided `sap.ui.integration.ActionDefinition` in the aggregation {@link #getActionDefinitions
     * actionDefinitions}. and returns its index if found or -1 otherwise.
     */
    indexOfActionDefinition(
      /**
       * The actionDefinition whose index is looked for
       */
      oActionDefinition: ActionDefinition
    ): int;
    /**
     * @SINCE 1.85
     * @EXPERIMENTAL (since 1.85)
     *
     * Inserts a actionDefinition into the aggregation {@link #getActionDefinitions actionDefinitions}.
     */
    insertActionDefinition(
      /**
       * The actionDefinition to insert; if empty, nothing is inserted
       */
      oActionDefinition: ActionDefinition,
      /**
       * The `0`-based index the actionDefinition should be inserted at; for a negative value of `iIndex`, the
       * actionDefinition is inserted at position 0; for a value greater than the current size of the aggregation,
       * the actionDefinition is inserted at the last position
       */
      iIndex: int
    ): this;
    /**
     * @EXPERIMENTAL (since 1.65)
     */
    isReady(): boolean;
    /**
     * @EXPERIMENTAL (since 1.73)
     *
     * Loads the module designtime/Card.designtime or the module given in "sap.card": { "designtime": "designtime/Own.designtime"
     * } This file should contain the designtime configuration for the card.
     *
     * Returns a promise that resolves with an object { designtime: the designtime modules response manifest:
     * the complete manifest json } The promise is rejected if the module cannot be loaded with an object: {
     * error: "Card.designtime not found" }
     */
    loadDesigntime(): Promise<any>;
    /**
     * @EXPERIMENTAL (since 1.65)
     *
     * Refreshes the card by re-applying the manifest settings and triggering all data requests.
     */
    refresh(): void;
    /**
     * @SINCE 1.85
     * @EXPERIMENTAL (since 1.85)
     *
     * Removes a actionDefinition from the aggregation {@link #getActionDefinitions actionDefinitions}.
     */
    removeActionDefinition(
      /**
       * The actionDefinition to remove or its index or id
       */
      vActionDefinition: int | string | ActionDefinition
    ): ActionDefinition;
    /**
     * @SINCE 1.85
     * @EXPERIMENTAL (since 1.85)
     *
     * Removes all the controls from the aggregation {@link #getActionDefinitions actionDefinitions}.
     *
     * Additionally, it unregisters them from the hosting UIArea.
     */
    removeAllActionDefinitions(): ActionDefinition[];
    /**
     * @EXPERIMENTAL (since 1.79)
     *
     * Performs an HTTP request using the given configuration.
     */
    request(
      /**
       * The configuration of the request.
       */
      oConfiguration: {
        /**
         * The URL of the resource.
         */
        URL: string;
        /**
         * The mode of the request. Possible values are "cors", "no-cors", "same-origin".
         */
        mode?: string;
        /**
         * The HTTP method. Possible values are "GET", "POST".
         */
        method?: string;
        /**
         * The request parameters. If the method is "POST" the parameters will be put as key/value pairs into the
         * body of the request.
         */
        parameters?: Object;
        /**
         * The expected Content-Type of the response. Possible values are "xml", "json", "text", "script", "html",
         * "jsonp". Note: Complex Binding is not supported when a dataType is provided. Serialization of the response
         * to an object is up to the developer.
         */
        dataType?: Object;
        /**
         * The HTTP headers of the request.
         */
        headers?: Object;
        /**
         * Indicates whether cross-site requests should be made using credentials.
         */
        withCredentials?: boolean;
      }
    ): Promise<any>;
    /**
     * @SINCE 1.70
     * @EXPERIMENTAL (since 1.70)
     *
     * Sets a new value for property {@link #getBaseUrl baseUrl}.
     *
     * Defines the base URL of the Card Manifest. It should be used when manifest property is an object instead
     * of a URL.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     */
    setBaseUrl(
      /**
       * New value for property `baseUrl`
       */
      sBaseUrl?: URI
    ): this;
    /**
     * @SINCE 1.65
     * @EXPERIMENTAL (since 1.65)
     *
     * Sets a new value for the `dataMode` property.
     */
    setDataMode(
      /**
       * The mode to set to the Card.
       */
      sMode: CardDataMode | keyof typeof CardDataMode
    ): this;
    /**
     * Sets the associated {@link #getHost host}.
     */
    setHost(
      /**
       * ID of an element which becomes the new target of this host association; alternatively, an element instance
       * may be given
       */
      oHost: ID | Control
    ): this;
    /**
     * Sets a new value for property {@link #getManifest manifest}.
     *
     * The URL of the manifest or an object.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `empty string`.
     */
    setManifest(
      /**
       * New value for property `manifest`
       */
      oManifest?: any
    ): this;
    /**
     * @SINCE 1.76
     * @EXPERIMENTAL (since 1.76)
     *
     * Sets a new value for property {@link #getManifestChanges manifestChanges}.
     *
     * Defines a list of configuration settings, which will be merged into the original manifest.
     *
     * This can be a list of flexibility changes generated during designtime.
     *
     * Each level of changes is an item in the list. The change has property "content" which contains the configuration,
     * which will be merged on top of the original `sap.card` section.
     *
     * Example:
     * ```javascript
     *
     * [
     *     {"content": {"header": {"title": "My title"}}},
     *     {"content": {"header": {"title": "My new title"}}}
     * ]
     * ```
     *
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     */
    setManifestChanges(
      /**
       * New value for property `manifestChanges`
       */
      sManifestChanges: object[]
    ): this;
    /**
     * Displays the loading placeholders on the whole card, or a particular area of the card. **Note:** Only
     * areas that contain binding will receive a loading placeholder.
     */
    showLoadingPlaceholders(
      /**
       * Area of the card to show the loading placeholders on. Possible options are 'Header', 'Content', 'Filters'.
       * Leave empty to show loading placeholders on all areas of the card.
       */
      eCardArea?: CardArea | keyof typeof CardArea
    ): void;
    /**
     * @EXPERIMENTAL (since 1.81)
     *
     * Displays a message strip on top of the content with the given text.
     *
     * **Note** Currently only available for an Adaptive Card.
     */
    showMessage(
      /**
       * The message.
       */
      sMessage: string,
      /**
       * Type of the message.
       */
      sType: MessageType | keyof typeof MessageType
    ): void;
    /**
     * @EXPERIMENTAL (since 1.84)
     *
     * Triggers an action inside the card.
     *
     * Use this method if you need to trigger an action programmatically from inside an `Extension` or from
     * a Component card.
     *
     * For other use cases use the manifest to define the actions. See {@link https://ui5.sap.com/test-resources/sap/ui/integration/demokit/cardExplorer/webapp/index.html#/learn/features/cardActions}
     *
     * Example:
     * ```javascript
     *
     * oCard.triggerAction({
     *     type: "Navigation",
     *     parameters: {
     *         url: "...",
     *         target: "_blank"
     *     }
     * });
     * ```
     */
    triggerAction(
      /**
       * The settings of the action.
       */
      oAction: {
        /**
         * The type of the action.
         */
        type: CardActionType | keyof typeof CardActionType;
        /**
         * Additional parameters which will be used by the action handler to perform the action.
         */
        parameters?: object;
      }
    ): void;
    /**
     * @EXPERIMENTAL (since 1.64)
     *
     * Attaches event handler `fnFunction` to the {@link #event:action action} event of this `sap.ui.integration.widgets.Card`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.integration.widgets.Card` itself.
     *
     * Fired when an action is triggered on the card.
     */
    attachAction(
      /**
       * The function to be called when the event occurs
       */
      fnFunction: Function,
      /**
       * Context object to call the event handler with. Defaults to this `sap.ui.integration.widgets.Card` itself
       */
      oListener?: object
    ): this;
    /**
     * Attaches event handler `fnFunction` to the {@link #event:manifestApplied manifestApplied} event of this
     * `sap.ui.integration.widgets.Card`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.integration.widgets.Card` itself.
     *
     * Fired when card utilities (like `DataProviderFactory`) and the card elements (like header) are created
     * and initialized.
     *
     * Note: The card's content may not be available yet because it may depend on other resources to load.
     */
    attachManifestApplied(
      /**
       * The function to be called when the event occurs
       */
      fnFunction: Function,
      /**
       * Context object to call the event handler with. Defaults to this `sap.ui.integration.widgets.Card` itself
       */
      oListener?: object
    ): this;
    /**
     * @EXPERIMENTAL (since 1.72)
     *
     * Attaches event handler `fnFunction` to the {@link #event:manifestReady manifestReady} event of this `sap.ui.integration.widgets.Card`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.integration.widgets.Card` itself.
     *
     * Fired when the manifest is loaded.
     */
    attachManifestReady(
      /**
       * The function to be called when the event occurs
       */
      fnFunction: Function,
      /**
       * Context object to call the event handler with. Defaults to this `sap.ui.integration.widgets.Card` itself
       */
      oListener?: object
    ): this;
  }
  /**
   * @EXPERIMENTAL (since 1.79)
   *
   * Facade of the {@link sap.ui.integration.widgets.Card} control.
   */
  export interface CardFacade {
    __implements__sap_ui_integration_widgets_CardFacade: boolean;

    /**
     * @SINCE 1.85
     * @EXPERIMENTAL (since 1.85)
     *
     * Adds some actionDefinition to the aggregation {@link #getActionDefinitions actionDefinitions}.
     */
    addActionDefinition(
      /**
       * The actionDefinition to add; if empty, nothing is inserted
       */
      oActionDefinition: ActionDefinition
    ): this;
    /**
     * @SINCE 1.70
     * @EXPERIMENTAL (since 1.70)
     *
     * Gets current value of property {@link #getBaseUrl baseUrl}.
     *
     * Defines the base URL of the Card Manifest. It should be used when manifest property is an object instead
     * of a URL.
     */
    getBaseUrl(): URI;
    /**
     * @EXPERIMENTAL (since 1.77)
     *
     * Gets values of manifest parameters combined with the parameters from `parameters` property.
     *
     * **Notes**
     *
     * - Use this method when the manifest is ready. Check `manifestReady` event.
     *
     * - Use when developing a Component card.
     */
    getCombinedParameters(): Record<string, any>;
    /**
     * @EXPERIMENTAL (since 1.77)
     *
     * Returns a value from the Manifest based on the specified path.
     *
     * **Note** Use this method when the manifest is ready. Check `manifestReady` event.
     */
    getManifestEntry(
      /**
       * The path to return a value for.
       */
      sPath: string
    ): Object;
    /**
     * @EXPERIMENTAL (since 1.65)
     *
     * Gets current value of property {@link #getParameters parameters}.
     *
     * Overrides the default values of the parameters, which are defined in the manifest. The value is an object
     * containing parameters in format `{parameterKey: parameterValue}`.
     */
    getParameters(): object;
    /**
     * @EXPERIMENTAL (since 1.83)
     *
     * Gets translated text from the i18n properties files configured for this card.
     *
     * For more details see {@link module:sap/base/i18n/ResourceBundle#getText}.
     */
    getTranslatedText(
      /**
       * Key to retrieve the text for
       */
      sKey: string,
      /**
       * List of parameter values which should replace the placeholders "{n}" (n is the index) in
       * the found locale-specific string value. Note that the replacement is done whenever `aArgs` is given,
       * no matter whether the text contains placeholders or not and no matter whether `aArgs` contains a value
       * for n or not.
       */
      aArgs?: string[],
      /**
       * If set, `undefined` is returned instead of the key string, when the key is not found in any bundle or
       * fallback bundle.
       */
      bIgnoreKeyFallback?: boolean
    ): string;
    /**
     * Hides the loading placeholders on the whole card, or a particular section of the card.
     */
    hideLoadingPlaceholders(
      /**
       * Area of the card to show the loading placeholders on. Possible options are 'Header', 'Content', 'Filters'.
       * Leave empty to hide loading placeholders on all areas of the card.
       */
      eCardArea?: CardArea | keyof typeof CardArea
    ): void;
    /**
     * @SINCE 1.85
     * @EXPERIMENTAL (since 1.85)
     *
     * Checks for the provided `sap.ui.integration.ActionDefinition` in the aggregation {@link #getActionDefinitions
     * actionDefinitions}. and returns its index if found or -1 otherwise.
     */
    indexOfActionDefinition(
      /**
       * The actionDefinition whose index is looked for
       */
      oActionDefinition: ActionDefinition
    ): int;
    /**
     * @SINCE 1.85
     * @EXPERIMENTAL (since 1.85)
     *
     * Inserts a actionDefinition into the aggregation {@link #getActionDefinitions actionDefinitions}.
     */
    insertActionDefinition(
      /**
       * The actionDefinition to insert; if empty, nothing is inserted
       */
      oActionDefinition: ActionDefinition,
      /**
       * The `0`-based index the actionDefinition should be inserted at; for a negative value of `iIndex`, the
       * actionDefinition is inserted at position 0; for a value greater than the current size of the aggregation,
       * the actionDefinition is inserted at the last position
       */
      iIndex: int
    ): this;
    /**
     * @SINCE 1.85
     * @EXPERIMENTAL (since 1.85)
     *
     * Removes a actionDefinition from the aggregation {@link #getActionDefinitions actionDefinitions}.
     */
    removeActionDefinition(
      /**
       * The actionDefinition to remove or its index or id
       */
      vActionDefinition: int | string | ActionDefinition
    ): ActionDefinition;
    /**
     * @EXPERIMENTAL (since 1.79)
     *
     * Performs an HTTP request using the given configuration.
     */
    request(
      /**
       * The configuration of the request.
       */
      oConfiguration: {
        /**
         * The URL of the resource.
         */
        URL: string;
        /**
         * The mode of the request. Possible values are "cors", "no-cors", "same-origin".
         */
        mode?: string;
        /**
         * The HTTP method. Possible values are "GET", "POST".
         */
        method?: string;
        /**
         * The request parameters. If the method is "POST" the parameters will be put as key/value pairs into the
         * body of the request.
         */
        parameters?: Object;
        /**
         * The expected Content-Type of the response. Possible values are "xml", "json", "text", "script", "html",
         * "jsonp". Note: Complex Binding is not supported when a dataType is provided. Serialization of the response
         * to an object is up to the developer.
         */
        dataType?: Object;
        /**
         * The HTTP headers of the request.
         */
        headers?: Object;
        /**
         * Indicates whether cross-site requests should be made using credentials.
         */
        withCredentials?: boolean;
      }
    ): Promise<any>;
    /**
     * Displays the loading placeholders on the whole card, or a particular area of the card. **Note:** Only
     * areas that contain binding will receive a loading placeholder.
     */
    showLoadingPlaceholders(
      /**
       * Area of the card to show the loading placeholders on. Possible options are 'Header', 'Content', 'Filters'.
       * Leave empty to show loading placeholders on all areas of the card.
       */
      eCardArea?: CardArea | keyof typeof CardArea
    ): void;
    /**
     * @EXPERIMENTAL (since 1.81)
     *
     * Displays a message strip on top of the content with the given text.
     *
     * **Note** Currently only available for an Adaptive Card.
     */
    showMessage(
      /**
       * The message.
       */
      sMessage: string,
      /**
       * Type of the message.
       */
      sType: MessageType | keyof typeof MessageType
    ): void;
    /**
     * @EXPERIMENTAL (since 1.84)
     *
     * Triggers an action inside the card.
     *
     * Use this method if you need to trigger an action programmatically from inside an `Extension` or from
     * a Component card.
     *
     * For other use cases use the manifest to define the actions. See {@link https://ui5.sap.com/test-resources/sap/ui/integration/demokit/cardExplorer/webapp/index.html#/learn/features/cardActions}
     *
     * Example:
     * ```javascript
     *
     * oCard.triggerAction({
     *     type: "Navigation",
     *     parameters: {
     *         url: "...",
     *         target: "_blank"
     *     }
     * });
     * ```
     */
    triggerAction(
      /**
       * The settings of the action.
       */
      oAction: {
        /**
         * The type of the action.
         */
        type: CardActionType | keyof typeof CardActionType;
        /**
         * Additional parameters which will be used by the action handler to perform the action.
         */
        parameters?: object;
      }
    ): void;
  }

  export interface $CardSettings extends $CardBaseSettings {
    /**
     * The URL of the manifest or an object.
     */
    manifest?: any | PropertyBindingInfo;

    /**
     * @EXPERIMENTAL (since 1.65)
     *
     * Overrides the default values of the parameters, which are defined in the manifest. The value is an object
     * containing parameters in format `{parameterKey: parameterValue}`.
     */
    parameters?: object | PropertyBindingInfo;

    /**
     * @SINCE 1.65
     * @EXPERIMENTAL (since 1.65)
     *
     * Defines the state of the `Card`. When set to `Inactive`, the `Card` doesn't make requests.
     */
    dataMode?: (CardDataMode | keyof typeof CardDataMode) | PropertyBindingInfo;

    /**
     * @SINCE 1.70
     * @EXPERIMENTAL (since 1.70)
     *
     * Defines the base URL of the Card Manifest. It should be used when manifest property is an object instead
     * of a URL.
     */
    baseUrl?: URI | PropertyBindingInfo;

    /**
     * @SINCE 1.76
     * @EXPERIMENTAL (since 1.76)
     *
     * Defines a list of configuration settings, which will be merged into the original manifest.
     *
     * This can be a list of flexibility changes generated during designtime.
     *
     * Each level of changes is an item in the list. The change has property "content" which contains the configuration,
     * which will be merged on top of the original `sap.card` section.
     *
     * Example:
     * ```javascript
     *
     * [
     *     {"content": {"header": {"title": "My title"}}},
     *     {"content": {"header": {"title": "My new title"}}}
     * ]
     * ```
     */
    manifestChanges?: object[] | PropertyBindingInfo;

    /**
     * @SINCE 1.85
     * @EXPERIMENTAL (since 1.85)
     *
     * Actions definitions from which actions in the header menu of the card are created. **Note**: This aggregation
     * is destroyed when the property `manifest` changes.
     */
    actionDefinitions?:
      | ActionDefinition[]
      | ActionDefinition
      | AggregationBindingInfo;

    /**
     * The host.
     */
    host?: Control | string;

    /**
     * @EXPERIMENTAL (since 1.64)
     *
     * Fired when an action is triggered on the card.
     */
    action?: Function;

    /**
     * @EXPERIMENTAL (since 1.72)
     *
     * Fired when the manifest is loaded.
     */
    manifestReady?: Function;

    /**
     * Fired when card utilities (like `DataProviderFactory`) and the card elements (like header) are created
     * and initialized.
     *
     * Note: The card's content may not be available yet because it may depend on other resources to load.
     */
    manifestApplied?: Function;
  }
}

declare namespace sap {
  namespace ui {
    /**
     * SAPUI5 library with controls specialized for SAP Fiori apps.
     */
    namespace integration {
      namespace designtime {
        namespace baseEditor {
          namespace propertyEditor {
            namespace iconEditor {
              /**
               * @SINCE 1.81
               * @EXPERIMENTAL
               *
               * Validates if the provided value belongs to the icon pool.
               */
              namespace IsInIconPool {
                /**
                 * Validator function
                 */
                function validate(
                  /**
                   * Value to validate
                   */
                  vValue: boolean | string
                ): boolean;
              }
            }
          }
        }
      }
    }
  }

  interface IUI5DefineDependencyNames {
    "sap/ui/integration/ActionDefinition": undefined;

    "sap/ui/integration/Designtime": undefined;

    "sap/ui/integration/designtime/baseEditor/BaseEditor": undefined;

    "sap/ui/integration/designtime/baseEditor/layout/Form": undefined;

    "sap/ui/integration/designtime/baseEditor/PropertyEditor": undefined;

    "sap/ui/integration/designtime/baseEditor/propertyEditor/arrayEditor/ArrayEditor": undefined;

    "sap/ui/integration/designtime/baseEditor/propertyEditor/BasePropertyEditor": undefined;

    "sap/ui/integration/designtime/baseEditor/propertyEditor/booleanEditor/BooleanEditor": undefined;

    "sap/ui/integration/designtime/baseEditor/propertyEditor/dateEditor/DateEditor": undefined;

    "sap/ui/integration/designtime/baseEditor/propertyEditor/dateTimeEditor/DateTimeEditor": undefined;

    "sap/ui/integration/designtime/baseEditor/propertyEditor/enumStringEditor/EnumStringEditor": undefined;

    "sap/ui/integration/designtime/baseEditor/propertyEditor/groupEditor/GroupEditor": undefined;

    "sap/ui/integration/designtime/baseEditor/propertyEditor/iconEditor/IconEditor": undefined;

    "sap/ui/integration/designtime/baseEditor/propertyEditor/iconEditor/IsInIconPool.validator": undefined;

    "sap/ui/integration/designtime/baseEditor/propertyEditor/integerEditor/IntegerEditor": undefined;

    "sap/ui/integration/designtime/baseEditor/propertyEditor/jsonEditor/JsonEditor": undefined;

    "sap/ui/integration/designtime/baseEditor/propertyEditor/listEditor/ListEditor": undefined;

    "sap/ui/integration/designtime/baseEditor/propertyEditor/mapEditor/MapEditor": undefined;

    "sap/ui/integration/designtime/baseEditor/propertyEditor/numberEditor/NumberEditor": undefined;

    "sap/ui/integration/designtime/baseEditor/propertyEditor/PropertyEditorFactory": undefined;

    "sap/ui/integration/designtime/baseEditor/propertyEditor/selectEditor/SelectEditor": undefined;

    "sap/ui/integration/designtime/baseEditor/propertyEditor/stringEditor/StringEditor": undefined;

    "sap/ui/integration/designtime/baseEditor/propertyEditor/textAreaEditor/TextAreaEditor": undefined;

    "sap/ui/integration/designtime/baseEditor/PropertyEditors": undefined;

    "sap/ui/integration/designtime/baseEditor/util/unset": undefined;

    "sap/ui/integration/designtime/baseEditor/validator/IsBoolean": undefined;

    "sap/ui/integration/designtime/baseEditor/validator/IsDate": undefined;

    "sap/ui/integration/designtime/baseEditor/validator/IsInteger": undefined;

    "sap/ui/integration/designtime/baseEditor/validator/IsNumber": undefined;

    "sap/ui/integration/designtime/baseEditor/validator/IsSelectedKey": undefined;

    "sap/ui/integration/designtime/baseEditor/validator/IsStringList": undefined;

    "sap/ui/integration/designtime/baseEditor/validator/IsUniqueKey": undefined;

    "sap/ui/integration/designtime/baseEditor/validator/IsUniqueList": undefined;

    "sap/ui/integration/designtime/baseEditor/validator/IsValidBinding": undefined;

    "sap/ui/integration/designtime/baseEditor/validator/MaxLength": undefined;

    "sap/ui/integration/designtime/baseEditor/validator/NotABinding": undefined;

    "sap/ui/integration/designtime/baseEditor/validator/ValidatorRegistry": undefined;

    "sap/ui/integration/designtime/cardEditor/propertyEditor/complexMapEditor/ComplexMapEditor": undefined;

    "sap/ui/integration/designtime/cardEditor/propertyEditor/destinationsEditor/DestinationsEditor": undefined;

    "sap/ui/integration/designtime/cardEditor/propertyEditor/iconEditor/IconEditor": undefined;

    "sap/ui/integration/designtime/cardEditor/propertyEditor/parametersEditor/ParametersEditor": undefined;

    "sap/ui/integration/designtime/editor/CardPreview": undefined;

    "sap/ui/integration/designtime/editor/CardResourceBundles": undefined;

    "sap/ui/integration/designtime/editor/fields/BaseField": undefined;

    "sap/ui/integration/designtime/editor/fields/BooleanField": undefined;

    "sap/ui/integration/designtime/editor/fields/DateField": undefined;

    "sap/ui/integration/designtime/editor/fields/DateTimeField": undefined;

    "sap/ui/integration/designtime/editor/fields/DestinationField": undefined;

    "sap/ui/integration/designtime/editor/fields/IntegerField": undefined;

    "sap/ui/integration/designtime/editor/fields/ListField": undefined;

    "sap/ui/integration/designtime/editor/fields/NumberField": undefined;

    "sap/ui/integration/designtime/editor/fields/Settings": undefined;

    "sap/ui/integration/designtime/editor/fields/StringField": undefined;

    "sap/ui/integration/designtime/editor/fields/viz/ColorSelect": undefined;

    "sap/ui/integration/designtime/editor/fields/viz/IconSelect": undefined;

    "sap/ui/integration/designtime/editor/fields/viz/ShapeSelect": undefined;

    "sap/ui/integration/Extension": undefined;

    "sap/ui/integration/Host": undefined;

    "sap/ui/integration/library": undefined;

    "sap/ui/integration/services/Service": undefined;

    "sap/ui/integration/widgets/Card": undefined;
  }
}
