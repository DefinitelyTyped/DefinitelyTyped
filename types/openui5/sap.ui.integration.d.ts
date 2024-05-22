// For Library Version: 1.124.0

declare module "sap/ui/integration/library" {
  import { URI } from "sap/ui/core/library";

  import { ButtonType } from "sap/m/library";

  /**
   * Defines the layout type of the List card attributes.
   *
   * This enum is part of the 'sap/ui/integration/library' module export and must be accessed by the property
   * 'AttributesLayoutType'.
   *
   * @since 1.96
   */
  export enum AttributesLayoutType {
    /**
     * One column.
     */
    OneColumn = "OneColumn",
    /**
     * Two columns.
     */
    TwoColumns = "TwoColumns",
  }
  /**
   * Enumeration of possible card action types.
   *
   * This enum is part of the 'sap/ui/integration/library' module export and must be accessed by the property
   * 'CardActionType'.
   *
   * @experimental (since 1.64) - Disclaimer: this property is in a beta state - incompatible API changes
   * may be done before its official public release. Use at your own discretion.
   */
  export enum CardActionType {
    /**
     * Used for custom actions.
     *
     * @experimental (since 1.76)
     */
    Custom = "Custom",
    /**
     * Date selection. Available only for Calendar cards.
     *
     * @experimental (since 1.87)
     */
    DateChange = "DateChange",
    /**
     * Used for hiding the appeared details about the card.
     *
     * @experimental (since 1.100)
     */
    HideCard = "HideCard",
    /**
     * Month selection. Available only for Calendar cards.
     *
     * @experimental (since 1.87)
     */
    MonthChange = "MonthChange",
    /**
     * Used for navigation actions.
     */
    Navigation = "Navigation",
    /**
     * Used for showing more details about the card.
     *
     * @experimental (since 1.100)
     */
    ShowCard = "ShowCard",
    /**
     * Used for submit actions.
     */
    Submit = "Submit",
  }
  /**
   * Defines the areas in a card.
   *
   * This enum is part of the 'sap/ui/integration/library' module export and must be accessed by the property
   * 'CardArea'.
   *
   * @since 1.86
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
   * Card blocking message types.
   *
   * This enum is part of the 'sap/ui/integration/library' module export and must be accessed by the property
   * 'CardBlockingMessageType'.
   *
   * @experimental (since 1.114)
   */
  export enum CardBlockingMessageType {
    /**
     * An error ocurred in the card.
     */
    Error = "Error",
    /**
     * Information message.
     */
    Information = "Information",
    /**
     * There is no data to be displayed.
     */
    NoData = "NoData",
  }
  /**
   * Possible data modes for `{@link sap.ui.integration.widgets.Card}`.
   *
   * This enum is part of the 'sap/ui/integration/library' module export and must be accessed by the property
   * 'CardDataMode'.
   *
   * @since 1.65
   * @experimental (since 1.65)
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
   * Possible designs for `{@link sap.ui.integration.widgets.Card}`.
   *
   * This enum is part of the 'sap/ui/integration/library' module export and must be accessed by the property
   * 'CardDesign'.
   *
   * @since 1.109
   * @experimental (since 1.109)
   */
  export enum CardDesign {
    /**
     * When in this mode, the card has a solid background.
     */
    Solid = "Solid",
    /**
     * When in this mode, the card background is transparent.
     */
    Transparent = "Transparent",
  }
  /**
   * Possible variants for `{@link sap.ui.integration.widgets.Card}` rendering and behavior.
   *
   * This enum is part of the 'sap/ui/integration/library' module export and must be accessed by the property
   * 'CardDisplayVariant'.
   *
   * @since 1.118
   * @experimental (since 1.118) - For usage only by Work Zone.
   */
  export enum CardDisplayVariant {
    /**
     * The standard card variant.
     */
    Standard = "Standard",
    /**
     * Card renders and behaves like a tile of size 2x1.
     */
    TileFlat = "TileFlat",
    /**
     * Card renders and behaves like a tile of size 4x1.
     */
    TileFlatWide = "TileFlatWide",
    /**
     * Card renders and behaves like a tile of size 2x2.
     */
    TileStandard = "TileStandard",
    /**
     * Card renders and behaves like a tile of size 4x2.
     */
    TileStandardWide = "TileStandardWide",
  }
  /**
   * An object type that represents card menu action properties.
   *
   * @experimental (since 1.79)
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

  /**
   * Preview modes for `{@link sap.ui.integration.widgets.Card}`. Helpful in scenarios when the end user is
   * choosing or configuring a card.
   *
   * This enum is part of the 'sap/ui/integration/library' module export and must be accessed by the property
   * 'CardPreviewMode'.
   *
   * @since 1.112
   * @experimental (since 1.112)
   */
  export enum CardPreviewMode {
    /**
     * Card displays abstract preview. No data requests are made.
     */
    Abstract = "Abstract",
    /**
     * Card displays mocked data, loaded using a data request as configured in the manifest.
     */
    MockData = "MockData",
    /**
     * Card displays real data.
     */
    Off = "Off",
  }
}

declare module "sap/ui/integration/ActionDefinition" {
  import { default as UI5Element, $ElementSettings } from "sap/ui/core/Element";

  import Event from "sap/ui/base/Event";

  import { ButtonType } from "sap/m/library";

  import { URI } from "sap/ui/core/library";

  import ElementMetadata from "sap/ui/core/ElementMetadata";

  import { CardActionType } from "sap/ui/integration/library";

  import { PropertyBindingInfo } from "sap/ui/base/ManagedObject";

  /**
   * Represents an action, which appears in the header of {@link sap.ui.integration.widgets.Card}. Useful
   * in `Component` card and `Extension`.
   *
   * @since 1.85
   * @experimental (since 1.85) - Disclaimer: this class is in a beta state - incompatible API changes may
   * be done before its official public release. Use at your own discretion.
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
     * Creates a new subclass of class sap.ui.integration.ActionDefinition with name `sClassName` and enriches
     * it with the information contained in `oClassInfo`.
     *
     * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.core.Element.extend}.
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
      oClassInfo?: sap.ClassInfo<T, ActionDefinition>,
      /**
       * Constructor function for the metadata object; if not given, it defaults to the metadata implementation
       * used by this class
       */
      FNMetaImpl?: Function
    ): Function;
    /**
     * Returns a metadata object for class sap.ui.integration.ActionDefinition.
     *
     *
     * @returns Metadata object describing this class
     */
    static getMetadata(): ElementMetadata;
    /**
     * Attaches event handler `fnFunction` to the {@link #event:press press} event of this `sap.ui.integration.ActionDefinition`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.integration.ActionDefinition` itself.
     *
     * Fired when the action button is pressed.
     *
     *
     * @returns Reference to `this` in order to allow method chaining
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
      fnFunction: (p1: Event) => void,
      /**
       * Context object to call the event handler with. Defaults to this `sap.ui.integration.ActionDefinition`
       * itself
       */
      oListener?: object
    ): this;
    /**
     * Attaches event handler `fnFunction` to the {@link #event:press press} event of this `sap.ui.integration.ActionDefinition`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.integration.ActionDefinition` itself.
     *
     * Fired when the action button is pressed.
     *
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    attachPress(
      /**
       * The function to be called when the event occurs
       */
      fnFunction: (p1: Event) => void,
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
     *
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    detachPress(
      /**
       * The function to be called, when the event occurs
       */
      fnFunction: (p1: Event) => void,
      /**
       * Context object on which the given function had to be called
       */
      oListener?: object
    ): this;
    /**
     * Fires event {@link #event:press press} to attached listeners.
     *
     * @ui5-protected Do not call from applications (only from related classes in the framework)
     *
     * @returns Reference to `this` in order to allow method chaining
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
     *
     *
     * @returns Value of property `buttonType`
     */
    getButtonType(): ButtonType | keyof typeof ButtonType;
    /**
     * Gets current value of property {@link #getEnabled enabled}.
     *
     * Indicates whether the user can interact with the action button or not. **Note**: Disabled controls cannot
     * be focused and they are out of the navigation tab-chain.
     *
     * Default value is `true`.
     *
     *
     * @returns Value of property `enabled`
     */
    getEnabled(): boolean;
    /**
     * Gets current value of property {@link #getIcon icon}.
     *
     * The icon of the action button.
     *
     *
     * @returns Value of property `icon`
     */
    getIcon(): URI;
    /**
     * Gets current value of property {@link #getParameters parameters}.
     *
     * The parameters of the action.
     *
     *
     * @returns Value of property `parameters`
     */
    getParameters(): object;
    /**
     * Gets current value of property {@link #getText text}.
     *
     * The text of the action button.
     *
     * Default value is `empty string`.
     *
     *
     * @returns Value of property `text`
     */
    getText(): string;
    /**
     * Gets current value of property {@link #getType type}.
     *
     * The type of the action.
     *
     *
     * @returns Value of property `type`
     */
    getType(): CardActionType | keyof typeof CardActionType;
    /**
     * Gets current value of property {@link #getVisible visible}.
     *
     * Whether the action button should be visible on the screen.
     *
     * Default value is `true`.
     *
     *
     * @returns Value of property `visible`
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
     *
     *
     * @returns Reference to `this` in order to allow method chaining
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
     *
     *
     * @returns Reference to `this` in order to allow method chaining
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
     *
     *
     * @returns Reference to `this` in order to allow method chaining
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
     *
     *
     * @returns Reference to `this` in order to allow method chaining
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
     *
     *
     * @returns Reference to `this` in order to allow method chaining
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
     *
     *
     * @returns Reference to `this` in order to allow method chaining
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
     *
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setVisible(
      /**
       * New value for property `visible`
       */
      bVisible?: boolean
    ): this;
  }
  /**
   * Describes the settings that can be provided to the ActionDefinition constructor.
   *
   * @experimental (since 1.85) - Disclaimer: this class is in a beta state - incompatible API changes may
   * be done before its official public release. Use at your own discretion.
   */
  export interface $ActionDefinitionSettings extends $ElementSettings {
    /**
     * The type of the action.
     */
    type?:
      | (CardActionType | keyof typeof CardActionType)
      | PropertyBindingInfo
      | `{${string}}`;

    /**
     * The text of the action button.
     */
    text?: string | PropertyBindingInfo;

    /**
     * The icon of the action button.
     */
    icon?: URI | PropertyBindingInfo | `{${string}}`;

    /**
     * The type of the action button.
     */
    buttonType?:
      | (ButtonType | keyof typeof ButtonType)
      | PropertyBindingInfo
      | `{${string}}`;

    /**
     * Indicates whether the user can interact with the action button or not. **Note**: Disabled controls cannot
     * be focused and they are out of the navigation tab-chain.
     */
    enabled?: boolean | PropertyBindingInfo | `{${string}}`;

    /**
     * Whether the action button should be visible on the screen.
     */
    visible?: boolean | PropertyBindingInfo | `{${string}}`;

    /**
     * The parameters of the action.
     */
    parameters?: object | PropertyBindingInfo | `{${string}}`;

    /**
     * Fired when the action button is pressed.
     */
    press?: (oEvent: Event) => void;
  }

  /**
   * Parameters of the ActionDefinition#press event.
   */
  export interface ActionDefinition$PressEventParameters {}

  /**
   * Event object of the ActionDefinition#press event.
   */
  export type ActionDefinition$PressEvent = Event<
    ActionDefinition$PressEventParameters,
    ActionDefinition
  >;
}

declare module "sap/ui/integration/widgets/Card" {
  import {
    CardBlockingMessageType,
    CardDataMode,
    CardDesign,
    CardDisplayVariant,
    CardPreviewMode,
    CardArea,
    CardActionType,
  } from "sap/ui/integration/library";

  import IllustratedMessageType from "sap/m/IllustratedMessageType";

  import IllustratedMessageSize from "sap/m/IllustratedMessageSize";

  import { default as CardBase, $CardBaseSettings } from "sap/f/CardBase";

  import ActionDefinition from "sap/ui/integration/ActionDefinition";

  import Event from "sap/ui/base/Event";

  import { URI, ID, MessageType } from "sap/ui/core/library";

  import Host from "sap/ui/integration/Host";

  import ElementMetadata from "sap/ui/core/ElementMetadata";

  import Control from "sap/ui/core/Control";

  import {
    PropertyBindingInfo,
    AggregationBindingInfo,
  } from "sap/ui/base/ManagedObject";

  /**
   * Settings for blocking message that ocurred in a {@link sap.ui.integration.widgets.Card}
   *
   * @experimental (since 1.114)
   */
  export type BlockingMessageSettings = {
    /**
     * Blocking message type
     */
    type: CardBlockingMessageType | keyof typeof CardBlockingMessageType;
    /**
     * Illustration type
     */
    illustrationType: IllustratedMessageType;
    /**
     * Illustration size
     */
    illustrationSize?:
      | IllustratedMessageSize
      | keyof typeof IllustratedMessageSize;
    /**
     * Title
     */
    title: string;
    /**
     * Description
     */
    description?: string;
    /**
     * Response object in case of a network error
     */
    httpResponse?: Response;
    /**
     * A list of buttons placed below the description as additional content. Experimental since 1.121
     */
    additionalContent?: any[];
  };

  /**
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
   * **You can learn more about integration cards in the {@link demo:sap/ui/integration/demokit/cardExplorer/index.html Card Explorer}**
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
   *
   * @since 1.62
   */
  export default class Card extends CardBase {
    /**
     * Constructor for a new `Card`.
     *
     * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated
     * objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description
     * of the syntax of the settings object.
     * See:
     * 	{@link https://ui5.sap.com/#/topic/5b46b03f024542ba802d99d67bc1a3f4 Cards}
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
     * 	{@link https://ui5.sap.com/#/topic/5b46b03f024542ba802d99d67bc1a3f4 Cards}
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
     * Creates a new subclass of class sap.ui.integration.widgets.Card with name `sClassName` and enriches it
     * with the information contained in `oClassInfo`.
     *
     * `oClassInfo` might contain the same kind of information as described in {@link sap.f.CardBase.extend}.
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
      oClassInfo?: sap.ClassInfo<T, Card>,
      /**
       * Constructor function for the metadata object; if not given, it defaults to the metadata implementation
       * used by this class
       */
      FNMetaImpl?: Function
    ): Function;
    /**
     * Returns a metadata object for class sap.ui.integration.widgets.Card.
     *
     *
     * @returns Metadata object describing this class
     */
    static getMetadata(): ElementMetadata;
    /**
     * Adds some actionDefinition to the aggregation {@link #getActionDefinitions actionDefinitions}.
     *
     * @since 1.85
     * @experimental (since 1.85) - Disclaimer: this aggregation is in a beta state - incompatible API changes
     * may be done before its official public release. Use at your own discretion.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    addActionDefinition(
      /**
       * The actionDefinition to add; if empty, nothing is inserted
       */
      oActionDefinition: ActionDefinition
    ): this;
    /**
     * Attaches event handler `fnFunction` to the {@link #event:action action} event of this `sap.ui.integration.widgets.Card`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.integration.widgets.Card` itself.
     *
     * Fired when an action is triggered on the card.
     *
     * When an action is triggered in the card it can be handled on several places by "action" event handlers.
     * In consecutive order those places are: `Extension`, `Card`, `Host`. Each of them can prevent the next
     * one to handle the action by calling `oEvent.preventDefault()`.
     *
     * @experimental (since 1.64) - Disclaimer: this event is in a beta state - incompatible API changes may
     * be done before its official public release. Use at your own discretion.
     *
     * @returns Reference to `this` in order to allow method chaining
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
      fnFunction: (p1: Card$ActionEvent) => void,
      /**
       * Context object to call the event handler with. Defaults to this `sap.ui.integration.widgets.Card` itself
       */
      oListener?: object
    ): this;
    /**
     * Attaches event handler `fnFunction` to the {@link #event:action action} event of this `sap.ui.integration.widgets.Card`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.integration.widgets.Card` itself.
     *
     * Fired when an action is triggered on the card.
     *
     * When an action is triggered in the card it can be handled on several places by "action" event handlers.
     * In consecutive order those places are: `Extension`, `Card`, `Host`. Each of them can prevent the next
     * one to handle the action by calling `oEvent.preventDefault()`.
     *
     * @experimental (since 1.64) - Disclaimer: this event is in a beta state - incompatible API changes may
     * be done before its official public release. Use at your own discretion.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    attachAction(
      /**
       * The function to be called when the event occurs
       */
      fnFunction: (p1: Card$ActionEvent) => void,
      /**
       * Context object to call the event handler with. Defaults to this `sap.ui.integration.widgets.Card` itself
       */
      oListener?: object
    ): this;
    /**
     * Attaches event handler `fnFunction` to the {@link #event:configurationChange configurationChange} event
     * of this `sap.ui.integration.widgets.Card`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.integration.widgets.Card` itself.
     *
     * Fired when some configuration settings are changed as a result of user interaction. For example - filter
     * value is changed.
     *
     * @experimental (since 1.96)
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    attachConfigurationChange(
      /**
       * An application-specific payload object that will be passed to the event handler along with the event
       * object when firing the event
       */
      oData: object,
      /**
       * The function to be called when the event occurs
       */
      fnFunction: (p1: Card$ConfigurationChangeEvent) => void,
      /**
       * Context object to call the event handler with. Defaults to this `sap.ui.integration.widgets.Card` itself
       */
      oListener?: object
    ): this;
    /**
     * Attaches event handler `fnFunction` to the {@link #event:configurationChange configurationChange} event
     * of this `sap.ui.integration.widgets.Card`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.integration.widgets.Card` itself.
     *
     * Fired when some configuration settings are changed as a result of user interaction. For example - filter
     * value is changed.
     *
     * @experimental (since 1.96)
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    attachConfigurationChange(
      /**
       * The function to be called when the event occurs
       */
      fnFunction: (p1: Card$ConfigurationChangeEvent) => void,
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
     *
     *
     * @returns Reference to `this` in order to allow method chaining
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
      fnFunction: (p1: Event) => void,
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
     *
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    attachManifestApplied(
      /**
       * The function to be called when the event occurs
       */
      fnFunction: (p1: Event) => void,
      /**
       * Context object to call the event handler with. Defaults to this `sap.ui.integration.widgets.Card` itself
       */
      oListener?: object
    ): this;
    /**
     * Attaches event handler `fnFunction` to the {@link #event:manifestReady manifestReady} event of this `sap.ui.integration.widgets.Card`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.integration.widgets.Card` itself.
     *
     * Fired when the manifest is loaded.
     *
     * @experimental (since 1.72)
     *
     * @returns Reference to `this` in order to allow method chaining
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
      fnFunction: (p1: Event) => void,
      /**
       * Context object to call the event handler with. Defaults to this `sap.ui.integration.widgets.Card` itself
       */
      oListener?: object
    ): this;
    /**
     * Attaches event handler `fnFunction` to the {@link #event:manifestReady manifestReady} event of this `sap.ui.integration.widgets.Card`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.integration.widgets.Card` itself.
     *
     * Fired when the manifest is loaded.
     *
     * @experimental (since 1.72)
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    attachManifestReady(
      /**
       * The function to be called when the event occurs
       */
      fnFunction: (p1: Event) => void,
      /**
       * Context object to call the event handler with. Defaults to this `sap.ui.integration.widgets.Card` itself
       */
      oListener?: object
    ): this;
    /**
     * Attaches event handler `fnFunction` to the {@link #event:stateChanged stateChanged} event of this `sap.ui.integration.widgets.Card`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.integration.widgets.Card` itself.
     *
     * Fired when the state of the card is changed. For example - the card is ready, new page is selected, a
     * filter is changed or data is refreshed.
     *
     * @experimental (since 1.107)
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    attachStateChanged(
      /**
       * An application-specific payload object that will be passed to the event handler along with the event
       * object when firing the event
       */
      oData: object,
      /**
       * The function to be called when the event occurs
       */
      fnFunction: (p1: Event) => void,
      /**
       * Context object to call the event handler with. Defaults to this `sap.ui.integration.widgets.Card` itself
       */
      oListener?: object
    ): this;
    /**
     * Attaches event handler `fnFunction` to the {@link #event:stateChanged stateChanged} event of this `sap.ui.integration.widgets.Card`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.integration.widgets.Card` itself.
     *
     * Fired when the state of the card is changed. For example - the card is ready, new page is selected, a
     * filter is changed or data is refreshed.
     *
     * @experimental (since 1.107)
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    attachStateChanged(
      /**
       * The function to be called when the event occurs
       */
      fnFunction: (p1: Event) => void,
      /**
       * Context object to call the event handler with. Defaults to this `sap.ui.integration.widgets.Card` itself
       */
      oListener?: object
    ): this;
    /**
     * Destroys all the actionDefinitions in the aggregation {@link #getActionDefinitions actionDefinitions}.
     *
     * @since 1.85
     * @experimental (since 1.85) - Disclaimer: this aggregation is in a beta state - incompatible API changes
     * may be done before its official public release. Use at your own discretion.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    destroyActionDefinitions(): this;
    /**
     * Detaches event handler `fnFunction` from the {@link #event:action action} event of this `sap.ui.integration.widgets.Card`.
     *
     * The passed function and listener object must match the ones used for event registration.
     *
     * @experimental (since 1.64) - Disclaimer: this event is in a beta state - incompatible API changes may
     * be done before its official public release. Use at your own discretion.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    detachAction(
      /**
       * The function to be called, when the event occurs
       */
      fnFunction: (p1: Card$ActionEvent) => void,
      /**
       * Context object on which the given function had to be called
       */
      oListener?: object
    ): this;
    /**
     * Detaches event handler `fnFunction` from the {@link #event:configurationChange configurationChange} event
     * of this `sap.ui.integration.widgets.Card`.
     *
     * The passed function and listener object must match the ones used for event registration.
     *
     * @experimental (since 1.96)
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    detachConfigurationChange(
      /**
       * The function to be called, when the event occurs
       */
      fnFunction: (p1: Card$ConfigurationChangeEvent) => void,
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
     *
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    detachManifestApplied(
      /**
       * The function to be called, when the event occurs
       */
      fnFunction: (p1: Event) => void,
      /**
       * Context object on which the given function had to be called
       */
      oListener?: object
    ): this;
    /**
     * Detaches event handler `fnFunction` from the {@link #event:manifestReady manifestReady} event of this
     * `sap.ui.integration.widgets.Card`.
     *
     * The passed function and listener object must match the ones used for event registration.
     *
     * @experimental (since 1.72)
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    detachManifestReady(
      /**
       * The function to be called, when the event occurs
       */
      fnFunction: (p1: Event) => void,
      /**
       * Context object on which the given function had to be called
       */
      oListener?: object
    ): this;
    /**
     * Detaches event handler `fnFunction` from the {@link #event:stateChanged stateChanged} event of this `sap.ui.integration.widgets.Card`.
     *
     * The passed function and listener object must match the ones used for event registration.
     *
     * @experimental (since 1.107)
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    detachStateChanged(
      /**
       * The function to be called, when the event occurs
       */
      fnFunction: (p1: Event) => void,
      /**
       * Context object on which the given function had to be called
       */
      oListener?: object
    ): this;
    /**
     * Fires event {@link #event:action action} to attached listeners.
     *
     * Listeners may prevent the default action of this event by calling the `preventDefault` method on the
     * event object. The return value of this method indicates whether the default action should be executed.
     *
     * @experimental (since 1.64) - Disclaimer: this event is in a beta state - incompatible API changes may
     * be done before its official public release. Use at your own discretion.
     * @ui5-protected Do not call from applications (only from related classes in the framework)
     *
     * @returns Whether or not to prevent the default action
     */
    fireAction(
      /**
       * Parameters to pass along with the event
       */
      mParameters?: Card$ActionEventParameters
    ): boolean;
    /**
     * Fires event {@link #event:configurationChange configurationChange} to attached listeners.
     *
     * @experimental (since 1.96)
     * @ui5-protected Do not call from applications (only from related classes in the framework)
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    fireConfigurationChange(
      /**
       * Parameters to pass along with the event
       */
      mParameters?: Card$ConfigurationChangeEventParameters
    ): this;
    /**
     * Fires event {@link #event:manifestApplied manifestApplied} to attached listeners.
     *
     * @ui5-protected Do not call from applications (only from related classes in the framework)
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    fireManifestApplied(
      /**
       * Parameters to pass along with the event
       */
      mParameters?: object
    ): this;
    /**
     * Fires event {@link #event:manifestReady manifestReady} to attached listeners.
     *
     * @experimental (since 1.72)
     * @ui5-protected Do not call from applications (only from related classes in the framework)
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    fireManifestReady(
      /**
       * Parameters to pass along with the event
       */
      mParameters?: object
    ): this;
    /**
     * Fires event {@link #event:stateChanged stateChanged} to attached listeners.
     *
     * @experimental (since 1.107)
     * @ui5-protected Do not call from applications (only from related classes in the framework)
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    fireStateChanged(
      /**
       * Parameters to pass along with the event
       */
      mParameters?: object
    ): this;
    /**
     * Gets content of aggregation {@link #getActionDefinitions actionDefinitions}.
     *
     * Actions definitions from which actions in the header menu of the card are created. **Note**: This aggregation
     * is destroyed when the property `manifest` changes.
     *
     * @since 1.85
     * @experimental (since 1.85) - Disclaimer: this aggregation is in a beta state - incompatible API changes
     * may be done before its official public release. Use at your own discretion.
     */
    getActionDefinitions(): ActionDefinition[];
    /**
     * Gets current value of property {@link #getBaseUrl baseUrl}.
     *
     * Defines the base URL of the card manifest. It should be used when manifest property is an object instead
     * of a URL. If both manifest URL and base URL are defined - the base URL will be used for loading dependencies.
     * If both manifest URL and base URL are not defined - relative resources might not be loaded correctly.
     *
     * @since 1.70
     * @experimental (since 1.70)
     *
     * @returns Value of property `baseUrl`
     */
    getBaseUrl(): URI;
    /**
     * Get information about the blocking message in the card.
     *
     * @experimental (since 1.114)
     *
     * @returns Information about the message or `null`, if such isn't shown.
     */
    getBlockingMessage(): BlockingMessageSettings | null;
    /**
     * Gets values of manifest parameters combined with the parameters from `parameters` property.
     *
     * **Notes**
     *
     * - Use this method when the manifest is ready. Check `manifestReady` event.
     *
     * - Use when developing a Component card.
     *
     * @experimental (since 1.77)
     *
     * @returns Object containing parameters in format `{parameterKey: parameterValue}`.
     */
    getCombinedParameters(): Record<string, any>;
    /**
     * Gets current value of property {@link #getDataMode dataMode}.
     *
     * Defines the state of the `Card`. When set to `Inactive`, the `Card` doesn't make requests.
     *
     * Default value is `Auto`.
     *
     * @since 1.65
     * @experimental (since 1.65)
     *
     * @returns Value of property `dataMode`
     */
    getDataMode(): CardDataMode | keyof typeof CardDataMode;
    /**
     * Gets current value of property {@link #getDesign design}.
     *
     * Defines the design of the `Card`.
     *
     * Default value is `Solid`.
     *
     * @since 1.109
     * @experimental (since 1.109)
     *
     * @returns Value of property `design`
     */
    getDesign(): CardDesign | keyof typeof CardDesign;
    /**
     * Gets current value of property {@link #getDisplayVariant displayVariant}.
     *
     * Defines the display variant for card rendering and behavior.
     *
     * Default value is `Standard`.
     *
     * @since 1.118
     * @experimental (since 1.118) - For usage only by Work Zone.
     *
     * @returns Value of property `displayVariant`
     */
    getDisplayVariant(): CardDisplayVariant | keyof typeof CardDisplayVariant;
    /**
     * Returns the DOM Element that should get the focus.
     *
     * @ui5-protected Do not call from applications (only from related classes in the framework)
     *
     * @returns Returns the DOM Element that should get the focus
     */
    getFocusDomRef(): Element;
    /**
     * ID of the element which is the current target of the association {@link #getHost host}, or `null`.
     */
    getHost(): ID | null;
    /**
     * Gets the instance of the `host` association.
     *
     * @experimental (since 1.77)
     *
     * @returns The host object associated with this card.
     */
    getHostInstance(): Host;
    /**
     * Overwrites getter for card manifest.
     *
     *
     * @returns Cloned of the parameters.
     */
    getManifest(): string | Object;
    /**
     * Gets current value of property {@link #getManifestChanges manifestChanges}.
     *
     * Defines a list of configuration settings, which will be merged into the original manifest.
     *
     * This can be a list of flexibility changes generated during designtime.
     *
     * Each item in the array represents a separate level of changes. For example, the first item might be created
     * by an administrator, the second by a page administrator and the third by the end user.
     *
     * The order of the items is the order in which the changes will be merged on top of each other. So the
     * last item will overwrite the previous items where the paths match.
     *
     * Example:
     * ```javascript
     *
     * [
     * 	{
     * 		// Administrator
     * 		"/sap.card/header/title": "My Configured Title in Default Language",
     * 		"/sap.card/content/maxItems": 10,
     * 		"texts": {
     * 			"en-US": {
     * 				"/sap.card/header/title": "My Configured Title in US-English"
     * 			}
     * 		}
     * 	},
     * 	{
     * 		// Page administrator
     * 		"/sap.card/content/maxItems": 5
     * 	},
     * 	{
     * 		// End user
     *      "/sap.card/header/title": "Title by End User",
     * 		"/sap.card/content/maxItems": 8
     * 	}
     * ]
     * ```
     *
     *
     * @since 1.76
     * @experimental (since 1.76) - This API might be removed when a permanent solution for flexibility changes
     * is implemented.
     *
     * @returns Value of property `manifestChanges`
     */
    getManifestChanges(): object[];
    /**
     * Returns a value from the Manifest based on the specified path.
     *
     * **Note** Use this method when the manifest is ready. Check `manifestReady` event.
     *
     * @experimental (since 1.77)
     *
     * @returns The value at the specified path.
     */
    getManifestEntry(
      /**
       * The path to return a value for.
       */
      sPath: string
    ): any;
    /**
     * Gets current value of property {@link #getPreviewMode previewMode}.
     *
     * Preview mode of the `Card`. Helpful in scenarios when the end user is choosing or configuring a card.
     *
     * 	 - When set to "MockData", the card data is loaded, using a data request, as configured in the "data/mockData"
     *     in the manifest. If such configuration is missing, then the Abstract mode will be used instead.
     * 	 - When set to "Abstract", the card shows abstract placeholder without loading data.
     * 	 - When set to "Off", the card displays real data.
     *
     * Default value is `Off`.
     *
     * @since 1.112
     * @experimental (since 1.112)
     *
     * @returns Value of property `previewMode`
     */
    getPreviewMode(): CardPreviewMode | keyof typeof CardPreviewMode;
    /**
     * Gets current value of property {@link #getReferenceId referenceId}.
     *
     * Optional property which can be used by the host to reference the card. It will be forwarded to any children
     * cards. Does not affect the card behavior.
     *
     * Default value is `empty string`.
     *
     *
     * @returns Value of property `referenceId`
     */
    getReferenceId(): string;
    /**
     * Gets translated text from the i18n properties files configured for this card.
     *
     * For more details see {@link module:sap/base/i18n/ResourceBundle#getText}.
     *
     * @experimental (since 1.83) - The API might change.
     *
     * @returns The value belonging to the key, if found; otherwise the key itself or `undefined` depending
     * on `bIgnoreKeyFallback`.
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
     * Hide the blocking message that is shown in the card by `showBlockingMessage` call.
     *
     * @experimental (since 1.114)
     */
    hideBlockingMessage(): void;
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
     * Hides the message previously shown by showMessage.
     *
     * @experimental (since 1.117)
     */
    hideMessage(): void;
    /**
     * Checks for the provided `sap.ui.integration.ActionDefinition` in the aggregation {@link #getActionDefinitions actionDefinitions}.
     * and returns its index if found or -1 otherwise.
     *
     * @since 1.85
     * @experimental (since 1.85) - Disclaimer: this aggregation is in a beta state - incompatible API changes
     * may be done before its official public release. Use at your own discretion.
     *
     * @returns The index of the provided control in the aggregation if found, or -1 otherwise
     */
    indexOfActionDefinition(
      /**
       * The actionDefinition whose index is looked for
       */
      oActionDefinition: ActionDefinition
    ): int;
    /**
     * Inserts a actionDefinition into the aggregation {@link #getActionDefinitions actionDefinitions}.
     *
     * @since 1.85
     * @experimental (since 1.85) - Disclaimer: this aggregation is in a beta state - incompatible API changes
     * may be done before its official public release. Use at your own discretion.
     *
     * @returns Reference to `this` in order to allow method chaining
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
     * @experimental (since 1.65) - The API might change.
     *
     * @returns If the card is ready or not.
     */
    isReady(): boolean;
    /**
     * Loads the module designtime/Card.designtime or the module given in "sap.card": { "designtime": "designtime/Own.designtime"
     * } This file should contain the designtime configuration for the card.
     *
     * Returns a promise that resolves with an object { designtime: the designtime modules response manifest:
     * the complete manifest json } The promise is rejected if the module cannot be loaded with an object: {
     * error: "Card.designtime not found" }
     *
     * @experimental (since 1.73)
     *
     * @returns Promise resolves after the designtime configuration is loaded.
     */
    loadDesigntime(): Promise<object>;
    /**
     * Refreshes the card by re-applying the manifest settings and triggering all data requests.
     *
     * @experimental (since 1.65) - The API might change.
     */
    refresh(): void;
    /**
     * Refreshes the card data by triggering all data requests.
     *
     * @since 1.95
     */
    refreshData(): void;
    /**
     * Removes a actionDefinition from the aggregation {@link #getActionDefinitions actionDefinitions}.
     *
     * @since 1.85
     * @experimental (since 1.85) - Disclaimer: this aggregation is in a beta state - incompatible API changes
     * may be done before its official public release. Use at your own discretion.
     *
     * @returns The removed actionDefinition or `null`
     */
    removeActionDefinition(
      /**
       * The actionDefinition to remove or its index or id
       */
      vActionDefinition: int | string | ActionDefinition
    ): ActionDefinition | null;
    /**
     * Removes all the controls from the aggregation {@link #getActionDefinitions actionDefinitions}.
     *
     * Additionally, it unregisters them from the hosting UIArea.
     *
     * @since 1.85
     * @experimental (since 1.85) - Disclaimer: this aggregation is in a beta state - incompatible API changes
     * may be done before its official public release. Use at your own discretion.
     *
     * @returns An array of the removed elements (might be empty)
     */
    removeAllActionDefinitions(): ActionDefinition[];
    /**
     * Performs an HTTP request using the given configuration.
     *
     * @experimental (since 1.79)
     *
     * @returns Resolves when the request is successful, rejects otherwise.
     */
    request(
      /**
       * The configuration of the request.
       */
      oConfiguration: {
        /**
         * The URL of the resource.
         */
        url: string;
        /**
         * The mode of the request. Possible values are "cors", "no-cors", "same-origin".
         */
        mode?: string;
        /**
         * The HTTP method. Possible values are "GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS", and "HEAD".
         */
        method?: string;
        /**
         * The request parameters. If the HTTP method is "POST", "PUT", "PATCH", or "DELETE" the parameters will
         * be put as key/value pairs into the body of the request.
         */
        parameters?: object;
        /**
         * Deprecated. Use the correct Accept headers and correct Content-Type header in the response.
         */
        dataType?: string;
        /**
         * The HTTP headers of the request.
         */
        headers?: object;
        /**
         * Indicates whether cross-site requests should be made using credentials.
         */
        withCredentials?: boolean;
      }
    ): Promise<any>;
    /**
     * Resolves the destination and returns its URL.
     *
     *
     * @returns A promise which resolves with the URL of the destination.
     */
    resolveDestination(
      /**
       * The destination's key used in the configuration.
       */
      sKey: string
    ): Promise<string>;
    /**
     * Sets a new value for property {@link #getBaseUrl baseUrl}.
     *
     * Defines the base URL of the card manifest. It should be used when manifest property is an object instead
     * of a URL. If both manifest URL and base URL are defined - the base URL will be used for loading dependencies.
     * If both manifest URL and base URL are not defined - relative resources might not be loaded correctly.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * @since 1.70
     * @experimental (since 1.70)
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setBaseUrl(
      /**
       * New value for property `baseUrl`
       */
      sBaseUrl?: URI
    ): this;
    /**
     * Sets a new value for the `dataMode` property.
     *
     * @since 1.65
     * @experimental (since 1.65) - API might change.
     *
     * @returns Pointer to the control instance to allow method chaining.
     */
    setDataMode(
      /**
       * The mode to set to the Card.
       */
      sMode: CardDataMode | keyof typeof CardDataMode
    ): this;
    /**
     * Sets a new value for property {@link #getDesign design}.
     *
     * Defines the design of the `Card`.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `Solid`.
     *
     * @since 1.109
     * @experimental (since 1.109)
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setDesign(
      /**
       * New value for property `design`
       */
      sDesign?: CardDesign | keyof typeof CardDesign
    ): this;
    /**
     * Sets a new value for property {@link #getDisplayVariant displayVariant}.
     *
     * Defines the display variant for card rendering and behavior.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `Standard`.
     *
     * @since 1.118
     * @experimental (since 1.118) - For usage only by Work Zone.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setDisplayVariant(
      /**
       * New value for property `displayVariant`
       */
      sDisplayVariant?: CardDisplayVariant | keyof typeof CardDisplayVariant
    ): this;
    /**
     * Sets the associated {@link #getHost host}.
     *
     *
     * @returns Reference to `this` in order to allow method chaining
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
     *
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setManifest(
      /**
       * New value for property `manifest`
       */
      oManifest?: any
    ): this;
    /**
     * Sets a new value for property {@link #getManifestChanges manifestChanges}.
     *
     * Defines a list of configuration settings, which will be merged into the original manifest.
     *
     * This can be a list of flexibility changes generated during designtime.
     *
     * Each item in the array represents a separate level of changes. For example, the first item might be created
     * by an administrator, the second by a page administrator and the third by the end user.
     *
     * The order of the items is the order in which the changes will be merged on top of each other. So the
     * last item will overwrite the previous items where the paths match.
     *
     * Example:
     * ```javascript
     *
     * [
     * 	{
     * 		// Administrator
     * 		"/sap.card/header/title": "My Configured Title in Default Language",
     * 		"/sap.card/content/maxItems": 10,
     * 		"texts": {
     * 			"en-US": {
     * 				"/sap.card/header/title": "My Configured Title in US-English"
     * 			}
     * 		}
     * 	},
     * 	{
     * 		// Page administrator
     * 		"/sap.card/content/maxItems": 5
     * 	},
     * 	{
     * 		// End user
     *      "/sap.card/header/title": "Title by End User",
     * 		"/sap.card/content/maxItems": 8
     * 	}
     * ]
     * ```
     *
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * @since 1.76
     * @experimental (since 1.76) - This API might be removed when a permanent solution for flexibility changes
     * is implemented.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setManifestChanges(
      /**
       * New value for property `manifestChanges`
       */
      sManifestChanges: object[]
    ): this;
    /**
     * Sets a new value for property {@link #getParameters parameters}.
     *
     * Overrides the default values of the parameters, which are defined in the manifest. The value is an object
     * containing parameters in format `{parameterKey: parameterValue}`.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * @experimental (since 1.65) - This property might be changed in future.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setParameters(
      /**
       * New value for property `parameters`
       */
      oParameters?: object
    ): this;
    /**
     * Sets a new value for property {@link #getPreviewMode previewMode}.
     *
     * Preview mode of the `Card`. Helpful in scenarios when the end user is choosing or configuring a card.
     *
     * 	 - When set to "MockData", the card data is loaded, using a data request, as configured in the "data/mockData"
     *     in the manifest. If such configuration is missing, then the Abstract mode will be used instead.
     * 	 - When set to "Abstract", the card shows abstract placeholder without loading data.
     * 	 - When set to "Off", the card displays real data.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `Off`.
     *
     * @since 1.112
     * @experimental (since 1.112)
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setPreviewMode(
      /**
       * New value for property `previewMode`
       */
      sPreviewMode?: CardPreviewMode | keyof typeof CardPreviewMode
    ): this;
    /**
     * Sets a new value for property {@link #getReferenceId referenceId}.
     *
     * Optional property which can be used by the host to reference the card. It will be forwarded to any children
     * cards. Does not affect the card behavior.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `empty string`.
     *
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setReferenceId(
      /**
       * New value for property `referenceId`
       */
      sReferenceId?: string
    ): this;
    /**
     * Show blocking message in the card's content area. Should be used after the `manifestApplied` event or
     * after the `cardReady` lifecycle hook in Component cards and Extensions.
     *
     * @experimental (since 1.114)
     */
    showBlockingMessage(
      /**
       * Blocking message settings
       */
      oSettings: BlockingMessageSettings
    ): void;
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
     * Displays a message strip above the content with the given text. There can be only 1 message displayed.
     * If there is a previous message, it is removed. Can be used only after the `manifestApplied` event is
     * fired.
     *
     * @experimental (since 1.81)
     */
    showMessage(
      /**
       * The message.
       */
      sMessage: string,
      /**
       * Type of the message.
       */
      sType: MessageType
    ): void;
    /**
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
     *
     *
     * @experimental (since 1.84)
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
     * Causes all of the controls within the Card that support validation to validate their data.
     *
     * @experimental
     *
     * @returns if all of the controls validated successfully; otherwise, false
     */
    validateControls(): boolean;
  }
  /**
   * Facade of the {@link sap.ui.integration.widgets.Card} control.
   *
   * @experimental (since 1.79)
   */
  export interface CardFacade {
    __implements__sap_ui_integration_widgets_CardFacade: boolean;

    /**
     * Adds some actionDefinition to the aggregation {@link #getActionDefinitions actionDefinitions}.
     *
     * @since 1.85
     * @experimental (since 1.85) - Disclaimer: this aggregation is in a beta state - incompatible API changes
     * may be done before its official public release. Use at your own discretion.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    addActionDefinition(
      /**
       * The actionDefinition to add; if empty, nothing is inserted
       */
      oActionDefinition: ActionDefinition
    ): this;
    /**
     * Gets current value of property {@link #getBaseUrl baseUrl}.
     *
     * Defines the base URL of the card manifest. It should be used when manifest property is an object instead
     * of a URL. If both manifest URL and base URL are defined - the base URL will be used for loading dependencies.
     * If both manifest URL and base URL are not defined - relative resources might not be loaded correctly.
     *
     * @since 1.70
     * @experimental (since 1.70)
     *
     * @returns Value of property `baseUrl`
     */
    getBaseUrl(): URI;
    /**
     * Get information about the blocking message in the card.
     *
     * @experimental (since 1.114)
     *
     * @returns Information about the message or `null`, if such isn't shown.
     */
    getBlockingMessage(): BlockingMessageSettings | null;
    /**
     * Gets values of manifest parameters combined with the parameters from `parameters` property.
     *
     * **Notes**
     *
     * - Use this method when the manifest is ready. Check `manifestReady` event.
     *
     * - Use when developing a Component card.
     *
     * @experimental (since 1.77)
     *
     * @returns Object containing parameters in format `{parameterKey: parameterValue}`.
     */
    getCombinedParameters(): Record<string, any>;
    /**
     * Returns a value from the Manifest based on the specified path.
     *
     * **Note** Use this method when the manifest is ready. Check `manifestReady` event.
     *
     * @experimental (since 1.77)
     *
     * @returns The value at the specified path.
     */
    getManifestEntry(
      /**
       * The path to return a value for.
       */
      sPath: string
    ): any;
    /**
     * Gets current value of property {@link #getParameters parameters}.
     *
     * Overrides the default values of the parameters, which are defined in the manifest. The value is an object
     * containing parameters in format `{parameterKey: parameterValue}`.
     *
     * @experimental (since 1.65) - This property might be changed in future.
     *
     * @returns Value of property `parameters`
     */
    getParameters(): object;
    /**
     * Gets translated text from the i18n properties files configured for this card.
     *
     * For more details see {@link module:sap/base/i18n/ResourceBundle#getText}.
     *
     * @experimental (since 1.83) - The API might change.
     *
     * @returns The value belonging to the key, if found; otherwise the key itself or `undefined` depending
     * on `bIgnoreKeyFallback`.
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
     * Hide the blocking message that is shown in the card by `showBlockingMessage` call.
     *
     * @experimental (since 1.114)
     */
    hideBlockingMessage(): void;
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
     * Hides the message previously shown by showMessage.
     *
     * @experimental (since 1.117)
     */
    hideMessage(): void;
    /**
     * Checks for the provided `sap.ui.integration.ActionDefinition` in the aggregation {@link #getActionDefinitions actionDefinitions}.
     * and returns its index if found or -1 otherwise.
     *
     * @since 1.85
     * @experimental (since 1.85) - Disclaimer: this aggregation is in a beta state - incompatible API changes
     * may be done before its official public release. Use at your own discretion.
     *
     * @returns The index of the provided control in the aggregation if found, or -1 otherwise
     */
    indexOfActionDefinition(
      /**
       * The actionDefinition whose index is looked for
       */
      oActionDefinition: ActionDefinition
    ): int;
    /**
     * Inserts a actionDefinition into the aggregation {@link #getActionDefinitions actionDefinitions}.
     *
     * @since 1.85
     * @experimental (since 1.85) - Disclaimer: this aggregation is in a beta state - incompatible API changes
     * may be done before its official public release. Use at your own discretion.
     *
     * @returns Reference to `this` in order to allow method chaining
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
     * Refreshes the card by re-applying the manifest settings and triggering all data requests.
     *
     * @experimental (since 1.65) - The API might change.
     */
    refresh(): void;
    /**
     * Refreshes the card data by triggering all data requests.
     *
     * @since 1.95
     */
    refreshData(): void;
    /**
     * Removes a actionDefinition from the aggregation {@link #getActionDefinitions actionDefinitions}.
     *
     * @since 1.85
     * @experimental (since 1.85) - Disclaimer: this aggregation is in a beta state - incompatible API changes
     * may be done before its official public release. Use at your own discretion.
     *
     * @returns The removed actionDefinition or `null`
     */
    removeActionDefinition(
      /**
       * The actionDefinition to remove or its index or id
       */
      vActionDefinition: int | string | ActionDefinition
    ): ActionDefinition | null;
    /**
     * Performs an HTTP request using the given configuration.
     *
     * @experimental (since 1.79)
     *
     * @returns Resolves when the request is successful, rejects otherwise.
     */
    request(
      /**
       * The configuration of the request.
       */
      oConfiguration: {
        /**
         * The URL of the resource.
         */
        url: string;
        /**
         * The mode of the request. Possible values are "cors", "no-cors", "same-origin".
         */
        mode?: string;
        /**
         * The HTTP method. Possible values are "GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS", and "HEAD".
         */
        method?: string;
        /**
         * The request parameters. If the HTTP method is "POST", "PUT", "PATCH", or "DELETE" the parameters will
         * be put as key/value pairs into the body of the request.
         */
        parameters?: object;
        /**
         * Deprecated. Use the correct Accept headers and correct Content-Type header in the response.
         */
        dataType?: string;
        /**
         * The HTTP headers of the request.
         */
        headers?: object;
        /**
         * Indicates whether cross-site requests should be made using credentials.
         */
        withCredentials?: boolean;
      }
    ): Promise<any>;
    /**
     * Resolves the destination and returns its URL.
     *
     *
     * @returns A promise which resolves with the URL of the destination.
     */
    resolveDestination(
      /**
       * The destination's key used in the configuration.
       */
      sKey: string
    ): Promise<string>;
    /**
     * Show blocking message in the card's content area. Should be used after the `manifestApplied` event or
     * after the `cardReady` lifecycle hook in Component cards and Extensions.
     *
     * @experimental (since 1.114)
     */
    showBlockingMessage(
      /**
       * Blocking message settings
       */
      oSettings: BlockingMessageSettings
    ): void;
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
     * Displays a message strip above the content with the given text. There can be only 1 message displayed.
     * If there is a previous message, it is removed. Can be used only after the `manifestApplied` event is
     * fired.
     *
     * @experimental (since 1.81)
     */
    showMessage(
      /**
       * The message.
       */
      sMessage: string,
      /**
       * Type of the message.
       */
      sType: MessageType
    ): void;
    /**
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
     *
     *
     * @experimental (since 1.84)
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
     * Causes all of the controls within the Card that support validation to validate their data.
     *
     * @experimental
     *
     * @returns if all of the controls validated successfully; otherwise, false
     */
    validateControls(): boolean;
  }

  /**
   * Describes the settings that can be provided to the Card constructor.
   */
  export interface $CardSettings extends $CardBaseSettings {
    /**
     * Optional property which can be used by the host to reference the card. It will be forwarded to any children
     * cards. Does not affect the card behavior.
     */
    referenceId?: string | PropertyBindingInfo;

    /**
     * The URL of the manifest or an object.
     */
    manifest?: any | PropertyBindingInfo | `{${string}}`;

    /**
     * Overrides the default values of the parameters, which are defined in the manifest. The value is an object
     * containing parameters in format `{parameterKey: parameterValue}`.
     *
     * @experimental (since 1.65) - This property might be changed in future.
     */
    parameters?: object | PropertyBindingInfo | `{${string}}`;

    /**
     * Defines the state of the `Card`. When set to `Inactive`, the `Card` doesn't make requests.
     *
     * @since 1.65
     * @experimental (since 1.65)
     */
    dataMode?:
      | (CardDataMode | keyof typeof CardDataMode)
      | PropertyBindingInfo
      | `{${string}}`;

    /**
     * Defines the base URL of the card manifest. It should be used when manifest property is an object instead
     * of a URL. If both manifest URL and base URL are defined - the base URL will be used for loading dependencies.
     * If both manifest URL and base URL are not defined - relative resources might not be loaded correctly.
     *
     * @since 1.70
     * @experimental (since 1.70)
     */
    baseUrl?: URI | PropertyBindingInfo | `{${string}}`;

    /**
     * Defines a list of configuration settings, which will be merged into the original manifest.
     *
     * This can be a list of flexibility changes generated during designtime.
     *
     * Each item in the array represents a separate level of changes. For example, the first item might be created
     * by an administrator, the second by a page administrator and the third by the end user.
     *
     * The order of the items is the order in which the changes will be merged on top of each other. So the
     * last item will overwrite the previous items where the paths match.
     *
     * Example:
     * ```javascript
     *
     * [
     * 	{
     * 		// Administrator
     * 		"/sap.card/header/title": "My Configured Title in Default Language",
     * 		"/sap.card/content/maxItems": 10,
     * 		"texts": {
     * 			"en-US": {
     * 				"/sap.card/header/title": "My Configured Title in US-English"
     * 			}
     * 		}
     * 	},
     * 	{
     * 		// Page administrator
     * 		"/sap.card/content/maxItems": 5
     * 	},
     * 	{
     * 		// End user
     *      "/sap.card/header/title": "Title by End User",
     * 		"/sap.card/content/maxItems": 8
     * 	}
     * ]
     * ```
     *
     *
     * @since 1.76
     * @experimental (since 1.76) - This API might be removed when a permanent solution for flexibility changes
     * is implemented.
     */
    manifestChanges?: object[] | PropertyBindingInfo | `{${string}}`;

    /**
     * Defines the design of the `Card`.
     *
     * @since 1.109
     * @experimental (since 1.109)
     */
    design?:
      | (CardDesign | keyof typeof CardDesign)
      | PropertyBindingInfo
      | `{${string}}`;

    /**
     * Defines the display variant for card rendering and behavior.
     *
     * @since 1.118
     * @experimental (since 1.118) - For usage only by Work Zone.
     */
    displayVariant?:
      | (CardDisplayVariant | keyof typeof CardDisplayVariant)
      | PropertyBindingInfo
      | `{${string}}`;

    /**
     * Preview mode of the `Card`. Helpful in scenarios when the end user is choosing or configuring a card.
     *
     * 	 - When set to "MockData", the card data is loaded, using a data request, as configured in the "data/mockData"
     *     in the manifest. If such configuration is missing, then the Abstract mode will be used instead.
     * 	 - When set to "Abstract", the card shows abstract placeholder without loading data.
     * 	 - When set to "Off", the card displays real data.
     *
     * @since 1.112
     * @experimental (since 1.112)
     */
    previewMode?:
      | (CardPreviewMode | keyof typeof CardPreviewMode)
      | PropertyBindingInfo
      | `{${string}}`;

    /**
     * Actions definitions from which actions in the header menu of the card are created. **Note**: This aggregation
     * is destroyed when the property `manifest` changes.
     *
     * @since 1.85
     * @experimental (since 1.85) - Disclaimer: this aggregation is in a beta state - incompatible API changes
     * may be done before its official public release. Use at your own discretion.
     */
    actionDefinitions?:
      | ActionDefinition[]
      | ActionDefinition
      | AggregationBindingInfo
      | `{${string}}`;

    /**
     * The host.
     */
    host?: Control | string;

    /**
     * Fired when an action is triggered on the card.
     *
     * When an action is triggered in the card it can be handled on several places by "action" event handlers.
     * In consecutive order those places are: `Extension`, `Card`, `Host`. Each of them can prevent the next
     * one to handle the action by calling `oEvent.preventDefault()`.
     *
     * @experimental (since 1.64) - Disclaimer: this event is in a beta state - incompatible API changes may
     * be done before its official public release. Use at your own discretion.
     */
    action?: (oEvent: Card$ActionEvent) => void;

    /**
     * Fired when some configuration settings are changed as a result of user interaction. For example - filter
     * value is changed.
     *
     * @experimental (since 1.96)
     */
    configurationChange?: (oEvent: Card$ConfigurationChangeEvent) => void;

    /**
     * Fired when the manifest is loaded.
     *
     * @experimental (since 1.72)
     */
    manifestReady?: (oEvent: Event) => void;

    /**
     * Fired when card utilities (like `DataProviderFactory`) and the card elements (like header) are created
     * and initialized.
     *
     * Note: The card's content may not be available yet because it may depend on other resources to load.
     */
    manifestApplied?: (oEvent: Event) => void;

    /**
     * Fired when the state of the card is changed. For example - the card is ready, new page is selected, a
     * filter is changed or data is refreshed.
     *
     * @experimental (since 1.107)
     */
    stateChanged?: (oEvent: Event) => void;
  }

  /**
   * Parameters of the Card#action event.
   *
   * @experimental (since 1.64) - Disclaimer: this event is in a beta state - incompatible API changes may
   * be done before its official public release. Use at your own discretion.
   */
  export interface Card$ActionEventParameters {
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

  /**
   * Event object of the Card#action event.
   *
   * @experimental (since 1.64) - Disclaimer: this event is in a beta state - incompatible API changes may
   * be done before its official public release. Use at your own discretion.
   */
  export type Card$ActionEvent = Event<Card$ActionEventParameters, Card>;

  /**
   * Parameters of the Card#configurationChange event.
   *
   * @experimental (since 1.96)
   */
  export interface Card$ConfigurationChangeEventParameters {
    /**
     * Changed configuration settings.
     *
     * Example:
     * ```javascript
     *
     *  {
     *     "/sap.card/configuration/filters/shipper/value": "key3",
     *     "/sap.card/configuration/filters/item/value": "key2",
     *  }
     * ```
     */
    changes?: object;
  }

  /**
   * Event object of the Card#configurationChange event.
   *
   * @experimental (since 1.96)
   */
  export type Card$ConfigurationChangeEvent = Event<
    Card$ConfigurationChangeEventParameters,
    Card
  >;

  /**
   * Parameters of the Card#manifestApplied event.
   */
  export interface Card$ManifestAppliedEventParameters {}

  /**
   * Event object of the Card#manifestApplied event.
   */
  export type Card$ManifestAppliedEvent = Event<
    Card$ManifestAppliedEventParameters,
    Card
  >;

  /**
   * Parameters of the Card#manifestReady event.
   *
   * @experimental (since 1.72)
   */
  export interface Card$ManifestReadyEventParameters {}

  /**
   * Event object of the Card#manifestReady event.
   *
   * @experimental (since 1.72)
   */
  export type Card$ManifestReadyEvent = Event<
    Card$ManifestReadyEventParameters,
    Card
  >;

  /**
   * Parameters of the Card#stateChanged event.
   *
   * @experimental (since 1.107)
   */
  export interface Card$StateChangedEventParameters {}

  /**
   * Event object of the Card#stateChanged event.
   *
   * @experimental (since 1.107)
   */
  export type Card$StateChangedEvent = Event<
    Card$StateChangedEventParameters,
    Card
  >;
}

declare module "sap/ui/integration/Designtime" {
  import {
    default as ManagedObject,
    $ManagedObjectSettings,
  } from "sap/ui/base/ManagedObject";

  import { CardFacade } from "sap/ui/integration/widgets/Card";

  import ManagedObjectMetadata from "sap/ui/base/ManagedObjectMetadata";

  /**
   * Brings JavaScript capabilities for an {@link sap.ui.integration.widgets.Card} where custom logic can
   * be implemented.
   *
   * @since 1.75
   * @experimental (since 1.75)
   */
  export default class Designtime extends ManagedObject {
    /**
     * Constructor for a new `Designtime`.
     *
     * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated
     * objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description
     * of the syntax of the settings object.
     *
     * This class does not have its own settings, but all settings applicable to the base type {@link sap.ui.base.ManagedObject#constructor sap.ui.base.ManagedObject }
     * can be used.
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
     * This class does not have its own settings, but all settings applicable to the base type {@link sap.ui.base.ManagedObject#constructor sap.ui.base.ManagedObject }
     * can be used.
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
      oClassInfo?: sap.ClassInfo<T, Designtime>,
      /**
       * Constructor function for the metadata object; if not given, it defaults to the metadata implementation
       * used by this class
       */
      FNMetaImpl?: Function
    ): Function;
    /**
     * Returns a metadata object for class sap.ui.integration.Designtime.
     *
     *
     * @returns Metadata object describing this class
     */
    static getMetadata(): ManagedObjectMetadata;
    /**
     * Returns an interface to the card, which uses this extension.
     *
     *
     * @returns An interface to the card.
     */
    getCard(): CardFacade;
  }
  /**
   * Describes the settings that can be provided to the Designtime constructor.
   *
   * @experimental (since 1.75)
   */
  export interface $DesigntimeSettings extends $ManagedObjectSettings {}
}

declare module "sap/ui/integration/designtime/baseEditor/validator/IsBoolean" {
  /**
   * Validates if the provided value is a boolean or binding string.
   *
   * @since 1.81
   * @experimental - 1.81
   */
  interface IsBoolean {
    /**
     * Validator function
     *
     *
     * @returns Validation result
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
   * Validates if the provided value can be parsed to a valid date.
   *
   * @since 1.81
   * @experimental - 1.81
   */
  interface IsDate {
    /**
     * Validator function
     *
     *
     * @returns Validation result
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
   * Validates if the provided value is an integer or binding string.
   *
   * @since 1.81
   * @experimental - 1.81
   */
  interface IsInteger {
    /**
     * Validator function
     *
     *
     * @returns Validation result
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
   * Validates if the provided value is a number or binding string.
   *
   * @since 1.81
   * @experimental - 1.81
   */
  interface IsNumber {
    /**
     * Validator function
     *
     *
     * @returns Validation result
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
   * Validates if the provided value is one of the given keys.
   *
   * @since 1.81
   * @experimental - 1.81
   */
  interface IsSelectedKey {
    /**
     * Validator function
     *
     *
     * @returns Validation result
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
   * Validates if none of the provided values is an invalid binding.
   *
   * @since 1.81
   * @experimental - 1.81
   */
  interface IsStringList {
    /**
     * Validator function
     *
     *
     * @returns Validation result
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
   * Validates if the provided key is unique in a list of given keys.
   *
   * @since 1.81
   * @experimental - 1.81
   */
  interface IsUniqueKey {
    /**
     * Validator function
     *
     *
     * @returns Validation result
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
   * Validates if the provided list contains no duplicates.
   *
   * @since 1.81
   * @experimental - 1.81
   */
  interface IsUniqueList {
    /**
     * Validator function
     *
     *
     * @returns Validation result
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
   * Validates if the provided value is a valid binding.
   *
   * @since 1.81
   * @experimental - 1.81
   */
  interface IsValidBinding {
    /**
     * Validator function
     *
     *
     * @returns Validation result
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
   * Validates if the provided value doesn't exceed the maximum length.
   *
   * @since 1.81
   * @experimental - 1.81
   */
  interface MaxLength {
    /**
     * Validator function
     *
     *
     * @returns Validation result
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
   * Validates if the provided value doesn't contain a binding.
   *
   * @since 1.81
   * @experimental - 1.81
   */
  interface NotABinding {
    /**
     * Validator function
     *
     *
     * @returns Validation result
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

declare module "sap/ui/integration/editor/Editor" {
  /**
   * Facade of the {@link sap.ui.integration.editor.Editor} control.
   *
   * @experimental (since 1.94)
   */
  export interface EditorFacade {
    __implements__sap_ui_integration_editor_EditorFacade: boolean;

    /**
     * Performs an HTTP request using the given configuration.
     *
     * @experimental (since 1.94)
     *
     * @returns Resolves when the request is successful, rejects otherwise.
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
  }
}

declare module "sap/ui/integration/editor/Extension" {
  import {
    default as Extension1,
    $ExtensionSettings as $ExtensionSettings1,
  } from "sap/ui/integration/Extension";

  import { CardFacade } from "sap/ui/integration/widgets/Card";

  /**
   * Brings JavaScript capabilities for an {@link sap.ui.integration.editor.Editor} where custom logic can
   * be implemented.
   *
   * @since 1.94
   */
  export default class Extension extends Extension1 {
    /**
     * Constructor for a new `Extension`.
     */
    constructor(
      /**
       * Initial settings for the new extension.
       */
      mSettings?: $ExtensionSettings
    );
    /**
     * Constructor for a new `Extension`.
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
     * Returns an interface to the editor, which uses this extension.
     *
     *
     * @returns An interface to the card.
     */
    getEditor(): CardFacade;
    /**
     * Called when the editor is ready.
     */
    onEditorReady(): void;
  }
  /**
   * Describes the settings that can be provided to the Extension constructor.
   */
  export interface $ExtensionSettings extends $ExtensionSettings1 {}
}

declare module "sap/ui/integration/Extension" {
  import {
    default as ManagedObject,
    $ManagedObjectSettings,
    PropertyBindingInfo,
  } from "sap/ui/base/ManagedObject";

  import { CardMenuAction, CardActionType } from "sap/ui/integration/library";

  import { CardFacade } from "sap/ui/integration/widgets/Card";

  import ManagedObjectMetadata from "sap/ui/base/ManagedObjectMetadata";

  import Control from "sap/ui/core/Control";

  import Event from "sap/ui/base/Event";

  /**
   * Brings JavaScript capabilities for an {@link sap.ui.integration.widgets.Card} where custom logic can
   * be implemented.
   *
   * @since 1.75
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
     * Creates a new subclass of class sap.ui.integration.Extension with name `sClassName` and enriches it with
     * the information contained in `oClassInfo`.
     *
     * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.base.ManagedObject.extend}.
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
      oClassInfo?: sap.ClassInfo<T, Extension>,
      /**
       * Constructor function for the metadata object; if not given, it defaults to the metadata implementation
       * used by this class
       */
      FNMetaImpl?: Function
    ): Function;
    /**
     * Returns a metadata object for class sap.ui.integration.Extension.
     *
     *
     * @returns Metadata object describing this class
     */
    static getMetadata(): ManagedObjectMetadata;
    /**
     * Attaches event handler `fnFunction` to the {@link #event:action action} event of this `sap.ui.integration.Extension`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.integration.Extension` itself.
     *
     * Fired when an action is triggered in the card.
     *
     * When an action is triggered in the card it can be handled on several places by "action" event handlers.
     * In consecutive order those places are: `Extension`, `Card`, `Host`. Each of them can prevent the next
     * one to handle the action by calling `oEvent.preventDefault()`.
     *
     * @experimental (since 1.75) - Disclaimer: this event is in a beta state - incompatible API changes may
     * be done before its official public release. Use at your own discretion.
     *
     * @returns Reference to `this` in order to allow method chaining
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
      fnFunction: (p1: Extension$ActionEvent) => void,
      /**
       * Context object to call the event handler with. Defaults to this `sap.ui.integration.Extension` itself
       */
      oListener?: object
    ): this;
    /**
     * Attaches event handler `fnFunction` to the {@link #event:action action} event of this `sap.ui.integration.Extension`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.integration.Extension` itself.
     *
     * Fired when an action is triggered in the card.
     *
     * When an action is triggered in the card it can be handled on several places by "action" event handlers.
     * In consecutive order those places are: `Extension`, `Card`, `Host`. Each of them can prevent the next
     * one to handle the action by calling `oEvent.preventDefault()`.
     *
     * @experimental (since 1.75) - Disclaimer: this event is in a beta state - incompatible API changes may
     * be done before its official public release. Use at your own discretion.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    attachAction(
      /**
       * The function to be called when the event occurs
       */
      fnFunction: (p1: Extension$ActionEvent) => void,
      /**
       * Context object to call the event handler with. Defaults to this `sap.ui.integration.Extension` itself
       */
      oListener?: object
    ): this;
    /**
     * Detaches event handler `fnFunction` from the {@link #event:action action} event of this `sap.ui.integration.Extension`.
     *
     * The passed function and listener object must match the ones used for event registration.
     *
     * @experimental (since 1.75) - Disclaimer: this event is in a beta state - incompatible API changes may
     * be done before its official public release. Use at your own discretion.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    detachAction(
      /**
       * The function to be called, when the event occurs
       */
      fnFunction: (p1: Extension$ActionEvent) => void,
      /**
       * Context object on which the given function had to be called
       */
      oListener?: object
    ): this;
    /**
     * Starts the process of fetching a resource from the network, returning a promise that is fulfilled once
     * the response is available. Use this method to override the default behavior when fetching network resources.
     * Mimics the browser native Fetch API.
     *
     * @experimental (since 1.113) - The API might change.
     *
     * @returns A `Promise` that resolves to a `Response` object.
     */
    fetch(
      /**
       * This defines the resource that you wish to fetch.
       */
      sResource: string,
      /**
       * An object containing any custom settings that you want to apply to the request.
       */
      mOptions: object,
      /**
       * The map of request settings defined in the card manifest. Use this only for reading, they can not be
       * modified.
       */
      mRequestSettings: object
    ): Promise<Response>;
    /**
     * Fires event {@link #event:action action} to attached listeners.
     *
     * Listeners may prevent the default action of this event by calling the `preventDefault` method on the
     * event object. The return value of this method indicates whether the default action should be executed.
     *
     * @experimental (since 1.75) - Disclaimer: this event is in a beta state - incompatible API changes may
     * be done before its official public release. Use at your own discretion.
     * @ui5-protected Do not call from applications (only from related classes in the framework)
     *
     * @returns Whether or not to prevent the default action
     */
    fireAction(
      /**
       * Parameters to pass along with the event
       */
      mParameters?: Extension$ActionEventParameters
    ): boolean;
    /**
     * Gets current value of property {@link #getActions actions}.
     *
     * The actions configuration.
     *
     * @deprecated (since 1.85) - This property is replaced by the `actions` aggregation of the card;
     * @experimental (since 1.75) - Disclaimer: this property is in a beta state - incompatible API changes
     * may be done before its official public release. Use at your own discretion.
     *
     * @returns Value of property `actions`
     */
    getActions(): CardMenuAction[];
    /**
     * Returns an interface to the card, which uses this extension.
     *
     *
     * @returns An interface to the card.
     */
    getCard(): CardFacade;
    /**
     * Gets current value of property {@link #getFormatters formatters}.
     *
     * The formatters that can be used in the manifest.
     *
     *
     * @returns Value of property `formatters`
     */
    getFormatters(): Record<string, () => void> | undefined;
    /**
     * Override this method to lazy load dependencies for the extension.
     *
     * @experimental (since 1.108)
     *
     * @returns Returns a promise. The card will wait for this promise to be resolved before continuing with
     * the initialization.
     */
    loadDependencies(): Promise<any>;
    /**
     * Called after the card is initialized.
     */
    onCardReady(): void;
    /**
     * Sets a new value for property {@link #getActions actions}.
     *
     * The actions configuration.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * @deprecated (since 1.85) - This property is replaced by the `actions` aggregation of the card;
     * @experimental (since 1.75) - Disclaimer: this property is in a beta state - incompatible API changes
     * may be done before its official public release. Use at your own discretion.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setActions(
      /**
       * New value for property `actions`
       */
      sActions: CardMenuAction[]
    ): this;
    /**
     * Sets current value of property {@link #setFormatters formatters}.
     *
     * The formatters that can be used in the manifest. When called with a value of `null` or `undefined`, the
     * default value of the property will be restored.
     *
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setFormatters(
      /**
       * New value of property `formatters`
       */
      aFormatters?: Record<string, Function>
    ): this;
  }
  /**
   * Describes the settings that can be provided to the Extension constructor.
   */
  export interface $ExtensionSettings extends $ManagedObjectSettings {
    /**
     * The actions configuration.
     *
     * @deprecated (since 1.85) - This property is replaced by the `actions` aggregation of the card;
     * @experimental (since 1.75) - Disclaimer: this property is in a beta state - incompatible API changes
     * may be done before its official public release. Use at your own discretion.
     */
    actions?: CardMenuAction[] | PropertyBindingInfo | `{${string}}`;

    /**
     * The formatters that can be used in the manifest.
     *
     * @experimental (since 1.79)
     */
    formatters?: object | PropertyBindingInfo | `{${string}}`;

    /**
     * Fired when an action is triggered in the card.
     *
     * When an action is triggered in the card it can be handled on several places by "action" event handlers.
     * In consecutive order those places are: `Extension`, `Card`, `Host`. Each of them can prevent the next
     * one to handle the action by calling `oEvent.preventDefault()`.
     *
     * @experimental (since 1.75) - Disclaimer: this event is in a beta state - incompatible API changes may
     * be done before its official public release. Use at your own discretion.
     */
    action?: (oEvent: Extension$ActionEvent) => void;
  }

  /**
   * Parameters of the Extension#action event.
   *
   * @experimental (since 1.75) - Disclaimer: this event is in a beta state - incompatible API changes may
   * be done before its official public release. Use at your own discretion.
   */
  export interface Extension$ActionEventParameters {
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

  /**
   * Event object of the Extension#action event.
   *
   * @experimental (since 1.75) - Disclaimer: this event is in a beta state - incompatible API changes may
   * be done before its official public release. Use at your own discretion.
   */
  export type Extension$ActionEvent = Event<
    Extension$ActionEventParameters,
    Extension
  >;
}

declare module "sap/ui/integration/Host" {
  import { default as UI5Element, $ElementSettings } from "sap/ui/core/Element";

  import { CardMenuAction, CardActionType } from "sap/ui/integration/library";

  import Card from "sap/ui/integration/widgets/Card";

  import ElementMetadata from "sap/ui/core/ElementMetadata";

  import { PropertyBindingInfo } from "sap/ui/base/ManagedObject";

  import Control from "sap/ui/core/Control";

  import Event from "sap/ui/base/Event";

  /**
   * Provides application-level functions and services to an integration card.
   *
   * Examples may include, but are not limited to options like: share a card, remove a card.
   *
   * @since 1.75
   * @experimental (since 1.75)
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
     * Creates a new subclass of class sap.ui.integration.Host with name `sClassName` and enriches it with the
     * information contained in `oClassInfo`.
     *
     * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.core.Element.extend}.
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
      oClassInfo?: sap.ClassInfo<T, Host>,
      /**
       * Constructor function for the metadata object; if not given, it defaults to the metadata implementation
       * used by this class
       */
      FNMetaImpl?: Function
    ): Function;
    /**
     * Returns a metadata object for class sap.ui.integration.Host.
     *
     *
     * @returns Metadata object describing this class
     */
    static getMetadata(): ElementMetadata;
    /**
     * Attaches event handler `fnFunction` to the {@link #event:action action} event of this `sap.ui.integration.Host`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.integration.Host` itself.
     *
     * Fired when an action is triggered.
     *
     * When an action is triggered in the card it can be handled on several places by "action" event handlers.
     * In consecutive order those places are: `Extension`, `Card`, `Host`. Each of them can prevent the next
     * one to handle the action by calling `oEvent.preventDefault()`.
     *
     * @experimental (since 1.75) - Disclaimer: this event is in a beta state - incompatible API changes may
     * be done before its official public release. Use at your own discretion.
     *
     * @returns Reference to `this` in order to allow method chaining
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
      fnFunction: (p1: Host$ActionEvent) => void,
      /**
       * Context object to call the event handler with. Defaults to this `sap.ui.integration.Host` itself
       */
      oListener?: object
    ): this;
    /**
     * Attaches event handler `fnFunction` to the {@link #event:action action} event of this `sap.ui.integration.Host`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.integration.Host` itself.
     *
     * Fired when an action is triggered.
     *
     * When an action is triggered in the card it can be handled on several places by "action" event handlers.
     * In consecutive order those places are: `Extension`, `Card`, `Host`. Each of them can prevent the next
     * one to handle the action by calling `oEvent.preventDefault()`.
     *
     * @experimental (since 1.75) - Disclaimer: this event is in a beta state - incompatible API changes may
     * be done before its official public release. Use at your own discretion.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    attachAction(
      /**
       * The function to be called when the event occurs
       */
      fnFunction: (p1: Host$ActionEvent) => void,
      /**
       * Context object to call the event handler with. Defaults to this `sap.ui.integration.Host` itself
       */
      oListener?: object
    ): this;
    /**
     * Attaches event handler `fnFunction` to the {@link #event:cardConfigurationChange cardConfigurationChange }
     * event of this `sap.ui.integration.Host`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.integration.Host` itself.
     *
     * Fired when some card configuration settings are changed as a result of user interaction. For example
     * - filter value is changed.
     *
     * @experimental (since 1.96)
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    attachCardConfigurationChange(
      /**
       * An application-specific payload object that will be passed to the event handler along with the event
       * object when firing the event
       */
      oData: object,
      /**
       * The function to be called when the event occurs
       */
      fnFunction: (p1: Host$CardConfigurationChangeEvent) => void,
      /**
       * Context object to call the event handler with. Defaults to this `sap.ui.integration.Host` itself
       */
      oListener?: object
    ): this;
    /**
     * Attaches event handler `fnFunction` to the {@link #event:cardConfigurationChange cardConfigurationChange }
     * event of this `sap.ui.integration.Host`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.integration.Host` itself.
     *
     * Fired when some card configuration settings are changed as a result of user interaction. For example
     * - filter value is changed.
     *
     * @experimental (since 1.96)
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    attachCardConfigurationChange(
      /**
       * The function to be called when the event occurs
       */
      fnFunction: (p1: Host$CardConfigurationChangeEvent) => void,
      /**
       * Context object to call the event handler with. Defaults to this `sap.ui.integration.Host` itself
       */
      oListener?: object
    ): this;
    /**
     * Attaches event handler `fnFunction` to the {@link #event:cardInitialized cardInitialized} event of this
     * `sap.ui.integration.Host`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.integration.Host` itself.
     *
     * Fired when the card is initially ready for the first time. Will not be fired for consecutive refreshes
     * or data changes.
     *
     * @experimental (since 1.116)
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    attachCardInitialized(
      /**
       * An application-specific payload object that will be passed to the event handler along with the event
       * object when firing the event
       */
      oData: object,
      /**
       * The function to be called when the event occurs
       */
      fnFunction: (p1: Host$CardInitializedEvent) => void,
      /**
       * Context object to call the event handler with. Defaults to this `sap.ui.integration.Host` itself
       */
      oListener?: object
    ): this;
    /**
     * Attaches event handler `fnFunction` to the {@link #event:cardInitialized cardInitialized} event of this
     * `sap.ui.integration.Host`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.integration.Host` itself.
     *
     * Fired when the card is initially ready for the first time. Will not be fired for consecutive refreshes
     * or data changes.
     *
     * @experimental (since 1.116)
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    attachCardInitialized(
      /**
       * The function to be called when the event occurs
       */
      fnFunction: (p1: Host$CardInitializedEvent) => void,
      /**
       * Context object to call the event handler with. Defaults to this `sap.ui.integration.Host` itself
       */
      oListener?: object
    ): this;
    /**
     * Attaches event handler `fnFunction` to the {@link #event:cardStateChanged cardStateChanged} event of
     * this `sap.ui.integration.Host`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.integration.Host` itself.
     *
     * Fired when the state of a card is changed. For example - the card is ready, new page is selected inside
     * the card, a filter is changed or data is refreshed.
     *
     * @experimental (since 1.107)
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    attachCardStateChanged(
      /**
       * An application-specific payload object that will be passed to the event handler along with the event
       * object when firing the event
       */
      oData: object,
      /**
       * The function to be called when the event occurs
       */
      fnFunction: (p1: Host$CardStateChangedEvent) => void,
      /**
       * Context object to call the event handler with. Defaults to this `sap.ui.integration.Host` itself
       */
      oListener?: object
    ): this;
    /**
     * Attaches event handler `fnFunction` to the {@link #event:cardStateChanged cardStateChanged} event of
     * this `sap.ui.integration.Host`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.integration.Host` itself.
     *
     * Fired when the state of a card is changed. For example - the card is ready, new page is selected inside
     * the card, a filter is changed or data is refreshed.
     *
     * @experimental (since 1.107)
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    attachCardStateChanged(
      /**
       * The function to be called when the event occurs
       */
      fnFunction: (p1: Host$CardStateChangedEvent) => void,
      /**
       * Context object to call the event handler with. Defaults to this `sap.ui.integration.Host` itself
       */
      oListener?: object
    ): this;
    /**
     * Attaches event handler `fnFunction` to the {@link #event:message message} event of this `sap.ui.integration.Host`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.integration.Host` itself.
     *
     * Fired when a message from channels like navigator.serviceWorker is received.
     *
     * @experimental (since 1.91)
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    attachMessage(
      /**
       * An application-specific payload object that will be passed to the event handler along with the event
       * object when firing the event
       */
      oData: object,
      /**
       * The function to be called when the event occurs
       */
      fnFunction: (p1: Host$MessageEvent) => void,
      /**
       * Context object to call the event handler with. Defaults to this `sap.ui.integration.Host` itself
       */
      oListener?: object
    ): this;
    /**
     * Attaches event handler `fnFunction` to the {@link #event:message message} event of this `sap.ui.integration.Host`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.integration.Host` itself.
     *
     * Fired when a message from channels like navigator.serviceWorker is received.
     *
     * @experimental (since 1.91)
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    attachMessage(
      /**
       * The function to be called when the event occurs
       */
      fnFunction: (p1: Host$MessageEvent) => void,
      /**
       * Context object to call the event handler with. Defaults to this `sap.ui.integration.Host` itself
       */
      oListener?: object
    ): this;
    /**
     * This function is called when a CSRF token has expired.
     *
     * @deprecated (since 1.120.0) - the concept has been discarded.
     * @experimental (since 1.97)
     */
    csrfTokenExpired(
      /**
       * The CSRF token configuration.
       */
      mCSRFTokenConfig: {
        data: object;
      }
    ): void;
    /**
     * This function is called when a CSRF token is fetched.
     *
     * @deprecated (since 1.120.0) - the concept has been discarded.
     * @experimental (since 1.97)
     */
    csrfTokenFetched(
      /**
       * The CSRF token configuration.
       */
      mCSRFTokenConfig: {
        data: object;
      },
      /**
       * A promise which resolves the CSRF token to its value.
       */
      pCSRFTokenValuePromise: Promise<string>
    ): void;
    /**
     * Detaches event handler `fnFunction` from the {@link #event:action action} event of this `sap.ui.integration.Host`.
     *
     * The passed function and listener object must match the ones used for event registration.
     *
     * @experimental (since 1.75) - Disclaimer: this event is in a beta state - incompatible API changes may
     * be done before its official public release. Use at your own discretion.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    detachAction(
      /**
       * The function to be called, when the event occurs
       */
      fnFunction: (p1: Host$ActionEvent) => void,
      /**
       * Context object on which the given function had to be called
       */
      oListener?: object
    ): this;
    /**
     * Detaches event handler `fnFunction` from the {@link #event:cardConfigurationChange cardConfigurationChange }
     * event of this `sap.ui.integration.Host`.
     *
     * The passed function and listener object must match the ones used for event registration.
     *
     * @experimental (since 1.96)
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    detachCardConfigurationChange(
      /**
       * The function to be called, when the event occurs
       */
      fnFunction: (p1: Host$CardConfigurationChangeEvent) => void,
      /**
       * Context object on which the given function had to be called
       */
      oListener?: object
    ): this;
    /**
     * Detaches event handler `fnFunction` from the {@link #event:cardInitialized cardInitialized} event of
     * this `sap.ui.integration.Host`.
     *
     * The passed function and listener object must match the ones used for event registration.
     *
     * @experimental (since 1.116)
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    detachCardInitialized(
      /**
       * The function to be called, when the event occurs
       */
      fnFunction: (p1: Host$CardInitializedEvent) => void,
      /**
       * Context object on which the given function had to be called
       */
      oListener?: object
    ): this;
    /**
     * Detaches event handler `fnFunction` from the {@link #event:cardStateChanged cardStateChanged} event of
     * this `sap.ui.integration.Host`.
     *
     * The passed function and listener object must match the ones used for event registration.
     *
     * @experimental (since 1.107)
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    detachCardStateChanged(
      /**
       * The function to be called, when the event occurs
       */
      fnFunction: (p1: Host$CardStateChangedEvent) => void,
      /**
       * Context object on which the given function had to be called
       */
      oListener?: object
    ): this;
    /**
     * Detaches event handler `fnFunction` from the {@link #event:message message} event of this `sap.ui.integration.Host`.
     *
     * The passed function and listener object must match the ones used for event registration.
     *
     * @experimental (since 1.91)
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    detachMessage(
      /**
       * The function to be called, when the event occurs
       */
      fnFunction: (p1: Host$MessageEvent) => void,
      /**
       * Context object on which the given function had to be called
       */
      oListener?: object
    ): this;
    /**
     * Fires event {@link #event:action action} to attached listeners.
     *
     * Listeners may prevent the default action of this event by calling the `preventDefault` method on the
     * event object. The return value of this method indicates whether the default action should be executed.
     *
     * @experimental (since 1.75) - Disclaimer: this event is in a beta state - incompatible API changes may
     * be done before its official public release. Use at your own discretion.
     * @ui5-protected Do not call from applications (only from related classes in the framework)
     *
     * @returns Whether or not to prevent the default action
     */
    fireAction(
      /**
       * Parameters to pass along with the event
       */
      mParameters?: Host$ActionEventParameters
    ): boolean;
    /**
     * Fires event {@link #event:cardConfigurationChange cardConfigurationChange} to attached listeners.
     *
     * @experimental (since 1.96)
     * @ui5-protected Do not call from applications (only from related classes in the framework)
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    fireCardConfigurationChange(
      /**
       * Parameters to pass along with the event
       */
      mParameters?: Host$CardConfigurationChangeEventParameters
    ): this;
    /**
     * Fires event {@link #event:cardInitialized cardInitialized} to attached listeners.
     *
     * @experimental (since 1.116)
     * @ui5-protected Do not call from applications (only from related classes in the framework)
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    fireCardInitialized(
      /**
       * Parameters to pass along with the event
       */
      mParameters?: Host$CardInitializedEventParameters
    ): this;
    /**
     * Fires event {@link #event:cardStateChanged cardStateChanged} to attached listeners.
     *
     * @experimental (since 1.107)
     * @ui5-protected Do not call from applications (only from related classes in the framework)
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    fireCardStateChanged(
      /**
       * Parameters to pass along with the event
       */
      mParameters?: Host$CardStateChangedEventParameters
    ): this;
    /**
     * Fires event {@link #event:message message} to attached listeners.
     *
     * @experimental (since 1.91)
     * @ui5-protected Do not call from applications (only from related classes in the framework)
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    fireMessage(
      /**
       * Parameters to pass along with the event
       */
      mParameters?: Host$MessageEventParameters
    ): this;
    /**
     * Gets current value of property {@link #getActions actions}.
     *
     * The actions configuration.
     *
     * @experimental (since 1.75) - Disclaimer: this property is in a beta state - incompatible API changes
     * may be done before its official public release. Use at your own discretion.
     *
     * @returns Value of property `actions`
     */
    getActions(): CardMenuAction[];
    /**
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
     *
     * @since 1.83
     *
     * @returns A promise which contains the context structure.
     */
    getContexts(): Promise<object>;
    /**
     * Resolves the value for a given path in the context of the host Contexts can be used to configure Cards
     * with information available in the host environment.
     *
     * Example Context Structure: { "sap.workzone": { "currentUser: { "id": { "label": "Id of the Work Zone
     * user", "placeholder": "Work Zone user id", "description": "The value will change based on the logged
     * on user" } } } ... }
     *
     * Example path to the current user id of the context sPath = "sap.workzone/currentUser/id" parameter: {
     * userId: { value: "{context>sap.workzone/currentUser/id}" resolves to UserId } }
     *
     * @since 1.83
     *
     * @returns A promise which resolves with the value of this context.
     */
    getContextValue(
      /**
       * The path to a context
       */
      sPath: string
    ): Promise<null>;
    /**
     * Resolves the value of a CSRF token. Subclasses of Host can override this method to take over the default
     * CSRF token resolving. Applications must not call this method directly, it is called by the framework.
     *
     * @deprecated (since 1.120.0) - the concept has been discarded.
     * @experimental (since 1.97)
     * @ui5-protected Do not call from applications (only from related classes in the framework)
     *
     * @returns A promise which resolves the CSRF token to its value.
     */
    getCsrfToken(
      /**
       * The CSRF token configuration.
       */
      csrfTokenConfig: {
        data: object;
      }
    ): Promise<string>;
    /**
     * Resolves the destination and returns its URL.
     *
     *
     * @returns A promise which resolves with the URL of the destination.
     */
    getDestination(
      /**
       * The name of the destination.
       */
      sDestinationName: string,
      /**
       * The card that depends on the destination.
       */
      oCard: Card
    ): Promise<string>;
    /**
     * Returns the list of destinations for the Card Editor design-time environment List entries are objects
     * that contain at least the name. { "name": "DestinationName" }
     *
     * @since 1.83
     *
     * @returns A promise which resolves with the list of destinations.
     */
    getDestinations(): Promise<object[]>;
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
     *
     *
     * @returns Value of property `resolveDestination`
     */
    getResolveDestination():
      | ((p1: string, p2: Card) => string | Promise<string>)
      | undefined;
    /**
     * Sets a new value for property {@link #getActions actions}.
     *
     * The actions configuration.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * @experimental (since 1.75) - Disclaimer: this property is in a beta state - incompatible API changes
     * may be done before its official public release. Use at your own discretion.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setActions(
      /**
       * New value for property `actions`
       */
      sActions: CardMenuAction[]
    ): this;
    /**
     * Sets a new value for property {@link #setResolveDestination resolveDestination}.
     *
     * A function that resolves the given destination name to a URL. The Card calls this function when it needs
     * to send a request to a destination. Function returns the URL to which the request is sent. If a card
     * depends on a destination, but this callback is not implemented, an error will be logged. The callback
     * receives `destinationName` as parameter and returns a string with the URL. Or alternatively the callback
     * may return a `Promise` with the URL as an argument.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setResolveDestination(
      /**
       * New value for property `resolveDestination`
       */
      fnResolveDestination?: (p1: string, p2: Card) => string | Promise<string>
    ): this;
  }
  /**
   * Describes the settings that can be provided to the Host constructor.
   *
   * @experimental (since 1.75)
   */
  export interface $HostSettings extends $ElementSettings {
    /**
     * The actions configuration.
     *
     * @experimental (since 1.75) - Disclaimer: this property is in a beta state - incompatible API changes
     * may be done before its official public release. Use at your own discretion.
     */
    actions?: CardMenuAction[] | PropertyBindingInfo | `{${string}}`;

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
    resolveDestination?: Function | PropertyBindingInfo | `{${string}}`;

    /**
     * Fired when an action is triggered.
     *
     * When an action is triggered in the card it can be handled on several places by "action" event handlers.
     * In consecutive order those places are: `Extension`, `Card`, `Host`. Each of them can prevent the next
     * one to handle the action by calling `oEvent.preventDefault()`.
     *
     * @experimental (since 1.75) - Disclaimer: this event is in a beta state - incompatible API changes may
     * be done before its official public release. Use at your own discretion.
     */
    action?: (oEvent: Host$ActionEvent) => void;

    /**
     * Fired when some card configuration settings are changed as a result of user interaction. For example
     * - filter value is changed.
     *
     * @experimental (since 1.96)
     */
    cardConfigurationChange?: (
      oEvent: Host$CardConfigurationChangeEvent
    ) => void;

    /**
     * Fired when the state of a card is changed. For example - the card is ready, new page is selected inside
     * the card, a filter is changed or data is refreshed.
     *
     * @experimental (since 1.107)
     */
    cardStateChanged?: (oEvent: Host$CardStateChangedEvent) => void;

    /**
     * Fired when the card is initially ready for the first time. Will not be fired for consecutive refreshes
     * or data changes.
     *
     * @experimental (since 1.116)
     */
    cardInitialized?: (oEvent: Host$CardInitializedEvent) => void;

    /**
     * Fired when a message from channels like navigator.serviceWorker is received.
     *
     * @experimental (since 1.91)
     */
    message?: (oEvent: Host$MessageEvent) => void;
  }

  /**
   * Parameters of the Host#action event.
   *
   * @experimental (since 1.75) - Disclaimer: this event is in a beta state - incompatible API changes may
   * be done before its official public release. Use at your own discretion.
   */
  export interface Host$ActionEventParameters {
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

  /**
   * Event object of the Host#action event.
   *
   * @experimental (since 1.75) - Disclaimer: this event is in a beta state - incompatible API changes may
   * be done before its official public release. Use at your own discretion.
   */
  export type Host$ActionEvent = Event<Host$ActionEventParameters, Host>;

  /**
   * Parameters of the Host#cardConfigurationChange event.
   *
   * @experimental (since 1.96)
   */
  export interface Host$CardConfigurationChangeEventParameters {
    /**
     * The card the changes are fired from.
     */
    card?: Control;

    /**
     * Changed configuration settings.
     *
     * Example:
     * ```javascript
     *
     *  {
     *     "/sap.card/configuration/filters/shipper/value": "key3",
     *     "/sap.card/configuration/filters/item/value": "key2"
     *  }
     * ```
     */
    changes?: object;
  }

  /**
   * Event object of the Host#cardConfigurationChange event.
   *
   * @experimental (since 1.96)
   */
  export type Host$CardConfigurationChangeEvent = Event<
    Host$CardConfigurationChangeEventParameters,
    Host
  >;

  /**
   * Parameters of the Host#cardInitialized event.
   *
   * @experimental (since 1.116)
   */
  export interface Host$CardInitializedEventParameters {
    /**
     * The card.
     */
    card?: Control;
  }

  /**
   * Event object of the Host#cardInitialized event.
   *
   * @experimental (since 1.116)
   */
  export type Host$CardInitializedEvent = Event<
    Host$CardInitializedEventParameters,
    Host
  >;

  /**
   * Parameters of the Host#cardStateChanged event.
   *
   * @experimental (since 1.107)
   */
  export interface Host$CardStateChangedEventParameters {
    /**
     * The card the changes are fired from.
     */
    card?: Control;
  }

  /**
   * Event object of the Host#cardStateChanged event.
   *
   * @experimental (since 1.107)
   */
  export type Host$CardStateChangedEvent = Event<
    Host$CardStateChangedEventParameters,
    Host
  >;

  /**
   * Parameters of the Host#message event.
   *
   * @experimental (since 1.91)
   */
  export interface Host$MessageEventParameters {
    data?: object;
  }

  /**
   * Event object of the Host#message event.
   *
   * @experimental (since 1.91)
   */
  export type Host$MessageEvent = Event<Host$MessageEventParameters, Host>;
}

declare namespace sap {
  namespace ui {
    /**
     * SAPUI5 library with controls specialized for SAP Fiori apps.
     *
     * @since 1.62
     */
    namespace integration {
      namespace designtime {
        namespace baseEditor {
          namespace propertyEditor {
            namespace iconEditor {
              /**
               * Validates if the provided value belongs to the icon pool.
               *
               * @since 1.81
               * @experimental - 1.81
               */
              namespace IsInIconPool {
                /**
                 * Validator function
                 *
                 *
                 * @returns Validation result
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

    "sap/ui/integration/designtime/baseEditor/propertyEditor/codeEditor/CodeEditor": undefined;

    "sap/ui/integration/designtime/baseEditor/propertyEditor/dateEditor/DateEditor": undefined;

    "sap/ui/integration/designtime/baseEditor/propertyEditor/dateTimeEditor/DateTimeEditor": undefined;

    "sap/ui/integration/designtime/baseEditor/propertyEditor/enumStringEditor/EnumStringEditor": undefined;

    "sap/ui/integration/designtime/baseEditor/propertyEditor/groupEditor/GroupEditor": undefined;

    "sap/ui/integration/designtime/baseEditor/propertyEditor/iconEditor/IconEditor": undefined;

    "sap/ui/integration/designtime/baseEditor/propertyEditor/integerEditor/IntegerEditor": undefined;

    "sap/ui/integration/designtime/baseEditor/propertyEditor/jsonEditor/JsonEditor": undefined;

    "sap/ui/integration/designtime/baseEditor/propertyEditor/listEditor/ListEditor": undefined;

    "sap/ui/integration/designtime/baseEditor/propertyEditor/mapEditor/MapEditor": undefined;

    "sap/ui/integration/designtime/baseEditor/propertyEditor/multiSelectEditor/MultiSelectEditor": undefined;

    "sap/ui/integration/designtime/baseEditor/propertyEditor/numberEditor/NumberEditor": undefined;

    "sap/ui/integration/designtime/baseEditor/propertyEditor/objectArrayEditor/ObjectArrayEditor": undefined;

    "sap/ui/integration/designtime/baseEditor/propertyEditor/PropertyEditorFactory": undefined;

    "sap/ui/integration/designtime/baseEditor/propertyEditor/selectEditor/SelectEditor": undefined;

    "sap/ui/integration/designtime/baseEditor/propertyEditor/separatorEditor/SeparatorEditor": undefined;

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

    "sap/ui/integration/designtime/cardEditor/propertyEditor/filtersEditor/FiltersEditor": undefined;

    "sap/ui/integration/designtime/cardEditor/propertyEditor/iconEditor/IconEditor": undefined;

    "sap/ui/integration/designtime/cardEditor/propertyEditor/parametersEditor/ParametersEditor": undefined;

    "sap/ui/integration/designtime/editor/CardPreview": undefined;

    "sap/ui/integration/editor/Editor": undefined;

    "sap/ui/integration/editor/Extension": undefined;

    "sap/ui/integration/editor/fields/BaseField": undefined;

    "sap/ui/integration/editor/fields/BooleanField": undefined;

    "sap/ui/integration/editor/fields/DateField": undefined;

    "sap/ui/integration/editor/fields/DateTimeField": undefined;

    "sap/ui/integration/editor/fields/DestinationField": undefined;

    "sap/ui/integration/editor/fields/fragment/Controller": undefined;

    "sap/ui/integration/editor/fields/GroupField": undefined;

    "sap/ui/integration/editor/fields/IntegerField": undefined;

    "sap/ui/integration/editor/fields/NumberField": undefined;

    "sap/ui/integration/editor/fields/ObjectField": undefined;

    "sap/ui/integration/editor/fields/ObjectListField": undefined;

    "sap/ui/integration/editor/fields/StringField": undefined;

    "sap/ui/integration/editor/fields/StringListField": undefined;

    "sap/ui/integration/editor/fields/viz/ColorSelect": undefined;

    "sap/ui/integration/editor/fields/viz/IconSelect": undefined;

    "sap/ui/integration/editor/fields/viz/ImageSelect": undefined;

    "sap/ui/integration/editor/fields/viz/ShapeSelect": undefined;

    "sap/ui/integration/editor/fields/viz/VizBase": undefined;

    "sap/ui/integration/editor/Settings": undefined;

    "sap/ui/integration/Extension": undefined;

    "sap/ui/integration/Host": undefined;

    "sap/ui/integration/library": undefined;

    "sap/ui/integration/services/Service": undefined;

    "sap/ui/integration/util/CsrfTokenHandler": undefined;

    "sap/ui/integration/util/DataProvider": undefined;

    "sap/ui/integration/util/DataProviderFactory": undefined;

    "sap/ui/integration/util/ManifestResolver": undefined;

    "sap/ui/integration/util/RequestDataProvider": undefined;

    "sap/ui/integration/util/SkeletonCard": undefined;

    "sap/ui/integration/widgets/Card": undefined;
  }
}
