// For Library Version: 1.107.0

declare module "sap/ui/suite/library" {
  /**
   * Defined color values for the Task Circle Control
   */
  export enum TaskCircleColor {
    /**
     * Default value
     */
    Gray = "Gray",
    /**
     * Green
     */
    Green = "Green",
    /**
     * Red
     */
    Red = "Red",
    /**
     * Yellow
     */
    Yellow = "Yellow",
  }
}

declare module "sap/ui/suite/TaskCircle" {
  import { default as Control, $ControlSettings } from "sap/ui/core/Control";

  import { ID } from "sap/ui/core/library";

  import Event from "sap/ui/base/Event";

  import { TaskCircleColor } from "sap/ui/suite/library";

  import ElementMetadata from "sap/ui/core/ElementMetadata";

  import { PropertyBindingInfo } from "sap/ui/base/ManagedObject";

  /**
   * @EXPERIMENTAL (since 1.2)
   *
   * This control shows a circle which radius and color depends on the given parameters
   */
  export default class TaskCircle extends Control {
    /**
     * Constructor for a new TaskCircle.
     *
     * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated
     * objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description
     * of the syntax of the settings object.
     */
    constructor(
      /**
       * initial settings for the new control
       */
      mSettings?: $TaskCircleSettings
    );
    /**
     * Constructor for a new TaskCircle.
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
      mSettings?: $TaskCircleSettings
    );

    /**
     * Creates a new subclass of class sap.ui.suite.TaskCircle with name `sClassName` and enriches it with the
     * information contained in `oClassInfo`.
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
      oClassInfo?: sap.ClassInfo<T, TaskCircle>,
      /**
       * Constructor function for the metadata object; if not given, it defaults to the metadata implementation
       * used by this class
       */
      FNMetaImpl?: Function
    ): Function;
    /**
     * Returns a metadata object for class sap.ui.suite.TaskCircle.
     *
     * @returns Metadata object describing this class
     */
    static getMetadata(): ElementMetadata;
    /**
     * Adds some ariaDescribedBy into the association {@link #getAriaDescribedBy ariaDescribedBy}.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    addAriaDescribedBy(
      /**
       * The ariaDescribedBy to add; if empty, nothing is inserted
       */
      vAriaDescribedBy: ID | Control
    ): this;
    /**
     * Adds some ariaLabelledBy into the association {@link #getAriaLabelledBy ariaLabelledBy}.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    addAriaLabelledBy(
      /**
       * The ariaLabelledBy to add; if empty, nothing is inserted
       */
      vAriaLabelledBy: ID | Control
    ): this;
    /**
     * Attaches event handler `fnFunction` to the {@link #event:press press} event of this `sap.ui.suite.TaskCircle`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.suite.TaskCircle` itself.
     *
     * Event is fired when the user clicks the control.
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
       * Context object to call the event handler with. Defaults to this `sap.ui.suite.TaskCircle` itself
       */
      oListener?: object
    ): this;
    /**
     * Attaches event handler `fnFunction` to the {@link #event:press press} event of this `sap.ui.suite.TaskCircle`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.suite.TaskCircle` itself.
     *
     * Event is fired when the user clicks the control.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    attachPress(
      /**
       * The function to be called when the event occurs
       */
      fnFunction: (p1: Event) => void,
      /**
       * Context object to call the event handler with. Defaults to this `sap.ui.suite.TaskCircle` itself
       */
      oListener?: object
    ): this;
    /**
     * Detaches event handler `fnFunction` from the {@link #event:press press} event of this `sap.ui.suite.TaskCircle`.
     *
     * The passed function and listener object must match the ones used for event registration.
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
     * @returns Reference to `this` in order to allow method chaining
     */
    firePress(
      /**
       * Parameters to pass along with the event
       */
      mParameters?: object
    ): this;
    /**
     * Puts the focus to the control.
     */
    focus(): void;
    /**
     * Returns array of IDs of the elements which are the current targets of the association {@link #getAriaDescribedBy
     * ariaDescribedBy}.
     */
    getAriaDescribedBy(): ID[];
    /**
     * Returns array of IDs of the elements which are the current targets of the association {@link #getAriaLabelledBy
     * ariaLabelledBy}.
     */
    getAriaLabelledBy(): ID[];
    /**
     * Gets current value of property {@link #getColor color}.
     *
     * Color of the circle. The default color is red.
     *
     * Default value is `Gray`.
     *
     * @returns Value of property `color`
     */
    getColor(): TaskCircleColor | keyof typeof TaskCircleColor;
    /**
     * Gets current value of property {@link #getMaxValue maxValue}.
     *
     * Upper limit of the displayed values. Default is 100.
     *
     * Default value is `100`.
     *
     * @returns Value of property `maxValue`
     */
    getMaxValue(): int;
    /**
     * Gets current value of property {@link #getMinValue minValue}.
     *
     * Lower limit of the displayed values. Default is 0.
     *
     * Default value is `0`.
     *
     * @returns Value of property `minValue`
     */
    getMinValue(): int;
    /**
     * Gets current value of property {@link #getValue value}.
     *
     * Current value of the task circle to be displayed. In dependency of the parameters maxValue and minValue
     * it controls the size of the circle.
     *
     * Default value is `0`.
     *
     * @returns Value of property `value`
     */
    getValue(): int;
    /**
     * Removes all the controls in the association named {@link #getAriaDescribedBy ariaDescribedBy}.
     *
     * @returns An array of the removed elements (might be empty)
     */
    removeAllAriaDescribedBy(): ID[];
    /**
     * Removes all the controls in the association named {@link #getAriaLabelledBy ariaLabelledBy}.
     *
     * @returns An array of the removed elements (might be empty)
     */
    removeAllAriaLabelledBy(): ID[];
    /**
     * Removes an ariaDescribedBy from the association named {@link #getAriaDescribedBy ariaDescribedBy}.
     *
     * @returns The removed ariaDescribedBy or `null`
     */
    removeAriaDescribedBy(
      /**
       * The ariaDescribedBy to be removed or its index or ID
       */
      vAriaDescribedBy: int | ID | Control
    ): ID | null;
    /**
     * Removes an ariaLabelledBy from the association named {@link #getAriaLabelledBy ariaLabelledBy}.
     *
     * @returns The removed ariaLabelledBy or `null`
     */
    removeAriaLabelledBy(
      /**
       * The ariaLabelledBy to be removed or its index or ID
       */
      vAriaLabelledBy: int | ID | Control
    ): ID | null;
    /**
     * Sets a new value for property {@link #getColor color}.
     *
     * Color of the circle. The default color is red.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `Gray`.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setColor(
      /**
       * New value for property `color`
       */
      sColor?: TaskCircleColor | keyof typeof TaskCircleColor
    ): this;
    /**
     * Sets a new value for property {@link #getMaxValue maxValue}.
     *
     * Upper limit of the displayed values. Default is 100.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `100`.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setMaxValue(
      /**
       * New value for property `maxValue`
       */
      iMaxValue?: int
    ): this;
    /**
     * Sets a new value for property {@link #getMinValue minValue}.
     *
     * Lower limit of the displayed values. Default is 0.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `0`.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setMinValue(
      /**
       * New value for property `minValue`
       */
      iMinValue?: int
    ): this;
    /**
     * Sets a new value for property {@link #getValue value}.
     *
     * Current value of the task circle to be displayed. In dependency of the parameters maxValue and minValue
     * it controls the size of the circle.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `0`.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    setValue(
      /**
       * New value for property `value`
       */
      iValue?: int
    ): this;
  }

  export interface $TaskCircleSettings extends $ControlSettings {
    /**
     * Current value of the task circle to be displayed. In dependency of the parameters maxValue and minValue
     * it controls the size of the circle.
     */
    value?: int | PropertyBindingInfo | `{${string}}`;

    /**
     * Upper limit of the displayed values. Default is 100.
     */
    maxValue?: int | PropertyBindingInfo | `{${string}}`;

    /**
     * Lower limit of the displayed values. Default is 0.
     */
    minValue?: int | PropertyBindingInfo | `{${string}}`;

    /**
     * Color of the circle. The default color is red.
     */
    color?:
      | (TaskCircleColor | keyof typeof TaskCircleColor)
      | PropertyBindingInfo
      | `{${string}}`;

    /**
     * Association to controls / ids which label this control (see WAI-ARIA attribute aria-labelledby).
     */
    ariaLabelledBy?: Array<Control | string>;

    /**
     * Association to controls / ids which describe this control (see WAI-ARIA attribute aria-describedby).
     */
    ariaDescribedBy?: Array<Control | string>;

    /**
     * Event is fired when the user clicks the control.
     */
    press?: (oEvent: Event) => void;
  }
}

declare module "sap/ui/suite/VerticalProgressIndicator" {
  import { default as Control, $ControlSettings } from "sap/ui/core/Control";

  import { ID } from "sap/ui/core/library";

  import Event from "sap/ui/base/Event";

  import ElementMetadata from "sap/ui/core/ElementMetadata";

  import { PropertyBindingInfo } from "sap/ui/base/ManagedObject";

  /**
   * @EXPERIMENTAL (since 1.2)
   *
   * This control shows a vertical progress bar in dependency of the given percentage. Only values between
   * 0 and 100 are valid.
   */
  export default class VerticalProgressIndicator extends Control {
    /**
     * Constructor for a new VerticalProgressIndicator.
     *
     * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated
     * objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description
     * of the syntax of the settings object.
     */
    constructor(
      /**
       * initial settings for the new control
       */
      mSettings?: $VerticalProgressIndicatorSettings
    );
    /**
     * Constructor for a new VerticalProgressIndicator.
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
      mSettings?: $VerticalProgressIndicatorSettings
    );

    /**
     * Creates a new subclass of class sap.ui.suite.VerticalProgressIndicator with name `sClassName` and enriches
     * it with the information contained in `oClassInfo`.
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
      oClassInfo?: sap.ClassInfo<T, VerticalProgressIndicator>,
      /**
       * Constructor function for the metadata object; if not given, it defaults to the metadata implementation
       * used by this class
       */
      FNMetaImpl?: Function
    ): Function;
    /**
     * Returns a metadata object for class sap.ui.suite.VerticalProgressIndicator.
     *
     * @returns Metadata object describing this class
     */
    static getMetadata(): ElementMetadata;
    /**
     * Adds some ariaDescribedBy into the association {@link #getAriaDescribedBy ariaDescribedBy}.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    addAriaDescribedBy(
      /**
       * The ariaDescribedBy to add; if empty, nothing is inserted
       */
      vAriaDescribedBy: ID | Control
    ): this;
    /**
     * Adds some ariaLabelledBy into the association {@link #getAriaLabelledBy ariaLabelledBy}.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    addAriaLabelledBy(
      /**
       * The ariaLabelledBy to add; if empty, nothing is inserted
       */
      vAriaLabelledBy: ID | Control
    ): this;
    /**
     * Attaches event handler `fnFunction` to the {@link #event:press press} event of this `sap.ui.suite.VerticalProgressIndicator`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.suite.VerticalProgressIndicator` itself.
     *
     * Event is fired when the user clicks the control.
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
       * Context object to call the event handler with. Defaults to this `sap.ui.suite.VerticalProgressIndicator`
       * itself
       */
      oListener?: object
    ): this;
    /**
     * Attaches event handler `fnFunction` to the {@link #event:press press} event of this `sap.ui.suite.VerticalProgressIndicator`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.suite.VerticalProgressIndicator` itself.
     *
     * Event is fired when the user clicks the control.
     *
     * @returns Reference to `this` in order to allow method chaining
     */
    attachPress(
      /**
       * The function to be called when the event occurs
       */
      fnFunction: (p1: Event) => void,
      /**
       * Context object to call the event handler with. Defaults to this `sap.ui.suite.VerticalProgressIndicator`
       * itself
       */
      oListener?: object
    ): this;
    /**
     * Detaches event handler `fnFunction` from the {@link #event:press press} event of this `sap.ui.suite.VerticalProgressIndicator`.
     *
     * The passed function and listener object must match the ones used for event registration.
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
     * @returns Reference to `this` in order to allow method chaining
     */
    firePress(
      /**
       * Parameters to pass along with the event
       */
      mParameters?: object
    ): this;
    /**
     * Puts the focus to the control.
     */
    focus(): void;
    /**
     * Returns array of IDs of the elements which are the current targets of the association {@link #getAriaDescribedBy
     * ariaDescribedBy}.
     */
    getAriaDescribedBy(): ID[];
    /**
     * Returns array of IDs of the elements which are the current targets of the association {@link #getAriaLabelledBy
     * ariaLabelledBy}.
     */
    getAriaLabelledBy(): ID[];
    /**
     * Gets current value of property {@link #getPercentage percentage}.
     *
     * The numerical value between 0 and 100 which determines the height of the vertical bar. Values higher
     * than 100 will be displayed as 100%, values lower than zero will be displayed as 0%.
     *
     * @returns Value of property `percentage`
     */
    getPercentage(): int;
    /**
     * Removes all the controls in the association named {@link #getAriaDescribedBy ariaDescribedBy}.
     *
     * @returns An array of the removed elements (might be empty)
     */
    removeAllAriaDescribedBy(): ID[];
    /**
     * Removes all the controls in the association named {@link #getAriaLabelledBy ariaLabelledBy}.
     *
     * @returns An array of the removed elements (might be empty)
     */
    removeAllAriaLabelledBy(): ID[];
    /**
     * Removes an ariaDescribedBy from the association named {@link #getAriaDescribedBy ariaDescribedBy}.
     *
     * @returns The removed ariaDescribedBy or `null`
     */
    removeAriaDescribedBy(
      /**
       * The ariaDescribedBy to be removed or its index or ID
       */
      vAriaDescribedBy: int | ID | Control
    ): ID | null;
    /**
     * Removes an ariaLabelledBy from the association named {@link #getAriaLabelledBy ariaLabelledBy}.
     *
     * @returns The removed ariaLabelledBy or `null`
     */
    removeAriaLabelledBy(
      /**
       * The ariaLabelledBy to be removed or its index or ID
       */
      vAriaLabelledBy: int | ID | Control
    ): ID | null;
    /**
     * Property setter for the Percentage, which determines the height of the vertical bar. Values higher than
     * 100 will be displayed as 100%, values lower than zero will be displayed as 0%. A new rendering is not
     * necessary, only the bar will be moved
     *
     * @returns `this` to allow method chaining
     */
    setPercentage(iPercentage: int): this;
  }

  export interface $VerticalProgressIndicatorSettings extends $ControlSettings {
    /**
     * The numerical value between 0 and 100 which determines the height of the vertical bar. Values higher
     * than 100 will be displayed as 100%, values lower than zero will be displayed as 0%.
     */
    percentage?: int | PropertyBindingInfo | `{${string}}`;

    /**
     * Association to controls / ids which label this control (see WAI-ARIA attribute aria-labelledby).
     */
    ariaLabelledBy?: Array<Control | string>;

    /**
     * Association to controls / ids which describe this control (see WAI-ARIA attribute aria-describedby).
     */
    ariaDescribedBy?: Array<Control | string>;

    /**
     * Event is fired when the user clicks the control.
     */
    press?: (oEvent: Event) => void;
  }
}

declare namespace sap {
  interface IUI5DefineDependencyNames {
    "sap/ui/suite/library": undefined;

    "sap/ui/suite/TaskCircle": undefined;

    "sap/ui/suite/VerticalProgressIndicator": undefined;
  }
}
