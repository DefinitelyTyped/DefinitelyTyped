// For Library Version: 1.90.0

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
     * Adds some ariaDescribedBy into the association {@link #getAriaDescribedBy ariaDescribedBy}.
     */
    addAriaDescribedBy(
      /**
       * The ariaDescribedBy to add; if empty, nothing is inserted
       */
      vAriaDescribedBy: ID | Control
    ): this;
    /**
     * Adds some ariaLabelledBy into the association {@link #getAriaLabelledBy ariaLabelledBy}.
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
       * Context object to call the event handler with. Defaults to this `sap.ui.suite.TaskCircle` itself
       */
      oListener?: object
    ): this;
    /**
     * Detaches event handler `fnFunction` from the {@link #event:press press} event of this `sap.ui.suite.TaskCircle`.
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
     * Creates a new subclass of class sap.ui.suite.TaskCircle with name `sClassName` and enriches it with the
     * information contained in `oClassInfo`.
     *
     * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.core.Control.extend}.
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
     * Fires event {@link #event:press press} to attached listeners.
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
     */
    getColor(): TaskCircleColor | keyof typeof TaskCircleColor;
    /**
     * Gets current value of property {@link #getMaxValue maxValue}.
     *
     * Upper limit of the displayed values. Default is 100.
     *
     * Default value is `100`.
     */
    getMaxValue(): int;
    /**
     * Returns a metadata object for class sap.ui.suite.TaskCircle.
     */
    static getMetadata(): ElementMetadata;
    /**
     * Gets current value of property {@link #getMinValue minValue}.
     *
     * Lower limit of the displayed values. Default is 0.
     *
     * Default value is `0`.
     */
    getMinValue(): int;
    /**
     * Gets current value of property {@link #getValue value}.
     *
     * Current value of the task circle to be displayed. In dependency of the parameters maxValue and minValue
     * it controls the size of the circle.
     *
     * Default value is `0`.
     */
    getValue(): int;
    /**
     * Removes all the controls in the association named {@link #getAriaDescribedBy ariaDescribedBy}.
     */
    removeAllAriaDescribedBy(): ID[];
    /**
     * Removes all the controls in the association named {@link #getAriaLabelledBy ariaLabelledBy}.
     */
    removeAllAriaLabelledBy(): ID[];
    /**
     * Removes an ariaDescribedBy from the association named {@link #getAriaDescribedBy ariaDescribedBy}.
     */
    removeAriaDescribedBy(
      /**
       * The ariaDescribedBy to be removed or its index or ID
       */
      vAriaDescribedBy: int | ID | Control
    ): ID;
    /**
     * Removes an ariaLabelledBy from the association named {@link #getAriaLabelledBy ariaLabelledBy}.
     */
    removeAriaLabelledBy(
      /**
       * The ariaLabelledBy to be removed or its index or ID
       */
      vAriaLabelledBy: int | ID | Control
    ): ID;
    /**
     * Sets a new value for property {@link #getColor color}.
     *
     * Color of the circle. The default color is red.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `Gray`.
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
     */
    setValue(
      /**
       * New value for property `value`
       */
      iValue?: int
    ): this;
    /**
     * Attaches event handler `fnFunction` to the {@link #event:press press} event of this `sap.ui.suite.TaskCircle`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.suite.TaskCircle` itself.
     *
     * Event is fired when the user clicks the control.
     */
    attachPress(
      /**
       * The function to be called when the event occurs
       */
      fnFunction: Function,
      /**
       * Context object to call the event handler with. Defaults to this `sap.ui.suite.TaskCircle` itself
       */
      oListener?: object
    ): this;
  }

  export interface $TaskCircleSettings extends $ControlSettings {
    /**
     * Current value of the task circle to be displayed. In dependency of the parameters maxValue and minValue
     * it controls the size of the circle.
     */
    value?: int | PropertyBindingInfo;

    /**
     * Upper limit of the displayed values. Default is 100.
     */
    maxValue?: int | PropertyBindingInfo;

    /**
     * Lower limit of the displayed values. Default is 0.
     */
    minValue?: int | PropertyBindingInfo;

    /**
     * Color of the circle. The default color is red.
     */
    color?:
      | (TaskCircleColor | keyof typeof TaskCircleColor)
      | PropertyBindingInfo;

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
    press?: Function;
  }
}

declare module "sap/ui/suite/VerticalProgressIndicator" {
  import { default as Control, $ControlSettings } from "sap/ui/core/Control";

  import { ID } from "sap/ui/core/library";

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
     * Adds some ariaDescribedBy into the association {@link #getAriaDescribedBy ariaDescribedBy}.
     */
    addAriaDescribedBy(
      /**
       * The ariaDescribedBy to add; if empty, nothing is inserted
       */
      vAriaDescribedBy: ID | Control
    ): this;
    /**
     * Adds some ariaLabelledBy into the association {@link #getAriaLabelledBy ariaLabelledBy}.
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
       * Context object to call the event handler with. Defaults to this `sap.ui.suite.VerticalProgressIndicator`
       * itself
       */
      oListener?: object
    ): this;
    /**
     * Detaches event handler `fnFunction` from the {@link #event:press press} event of this `sap.ui.suite.VerticalProgressIndicator`.
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
     * Creates a new subclass of class sap.ui.suite.VerticalProgressIndicator with name `sClassName` and enriches
     * it with the information contained in `oClassInfo`.
     *
     * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.core.Control.extend}.
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
     * Fires event {@link #event:press press} to attached listeners.
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
     * Returns a metadata object for class sap.ui.suite.VerticalProgressIndicator.
     */
    static getMetadata(): ElementMetadata;
    /**
     * Gets current value of property {@link #getPercentage percentage}.
     *
     * The numerical value between 0 and 100 which determines the height of the vertical bar. Values higher
     * than 100 will be displayed as 100%, values lower than zero will be displayed as 0%.
     */
    getPercentage(): int;
    /**
     * Removes all the controls in the association named {@link #getAriaDescribedBy ariaDescribedBy}.
     */
    removeAllAriaDescribedBy(): ID[];
    /**
     * Removes all the controls in the association named {@link #getAriaLabelledBy ariaLabelledBy}.
     */
    removeAllAriaLabelledBy(): ID[];
    /**
     * Removes an ariaDescribedBy from the association named {@link #getAriaDescribedBy ariaDescribedBy}.
     */
    removeAriaDescribedBy(
      /**
       * The ariaDescribedBy to be removed or its index or ID
       */
      vAriaDescribedBy: int | ID | Control
    ): ID;
    /**
     * Removes an ariaLabelledBy from the association named {@link #getAriaLabelledBy ariaLabelledBy}.
     */
    removeAriaLabelledBy(
      /**
       * The ariaLabelledBy to be removed or its index or ID
       */
      vAriaLabelledBy: int | ID | Control
    ): ID;
    /**
     * Property setter for the Percentage, which determines the height of the vertical bar. Values higher than
     * 100 will be displayed as 100%, values lower than zero will be displayed as 0%. A new rendering is not
     * necessary, only the bar will be moved
     */
    setPercentage(iPercentage: int): this;
    /**
     * Attaches event handler `fnFunction` to the {@link #event:press press} event of this `sap.ui.suite.VerticalProgressIndicator`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.suite.VerticalProgressIndicator` itself.
     *
     * Event is fired when the user clicks the control.
     */
    attachPress(
      /**
       * The function to be called when the event occurs
       */
      fnFunction: Function,
      /**
       * Context object to call the event handler with. Defaults to this `sap.ui.suite.VerticalProgressIndicator`
       * itself
       */
      oListener?: object
    ): this;
  }

  export interface $VerticalProgressIndicatorSettings extends $ControlSettings {
    /**
     * The numerical value between 0 and 100 which determines the height of the vertical bar. Values higher
     * than 100 will be displayed as 100%, values lower than zero will be displayed as 0%.
     */
    percentage?: int | PropertyBindingInfo;

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
    press?: Function;
  }
}

declare namespace sap {
  interface IUI5DefineDependencyNames {
    "sap/ui/suite/library": undefined;

    "sap/ui/suite/TaskCircle": undefined;

    "sap/ui/suite/VerticalProgressIndicator": undefined;
  }
}
