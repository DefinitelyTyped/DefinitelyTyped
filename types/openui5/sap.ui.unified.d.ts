// For Library Version: 1.91.0

declare module "sap/ui/unified/library" {
  /**
   * @SINCE 1.80.0
   *
   * Types of a calendar appointment display mode
   */
  export enum CalendarAppointmentHeight {
    /**
     * Automatic display mode.
     */
    Automatic = "Automatic",
    /**
     * HalfSize display mode.
     */
    HalfSize = "HalfSize",
    /**
     * Large display mode.
     */
    Large = "Large",
    /**
     * Regular display mode.
     */
    Regular = "Regular",
  }
  /**
   * @SINCE 1.81.0
   * @EXPERIMENTAL (since 1.81.0)
   *
   * Types of a calendar appointment display mode
   */
  export enum CalendarAppointmentRoundWidth {
    /**
     * Visually rounds the appointment to half a column.
     */
    HalfColumn = "HalfColumn",
    /**
     * No rounding is used.
     */
    None = "None",
  }
  /**
   * @SINCE 1.40.0
   *
   * Visualization types for {@link sap.ui.unified.CalendarAppointment}.
   */
  export enum CalendarAppointmentVisualization {
    /**
     * Visualization with fill color depending on the used theme.
     */
    Filled = "Filled",
    /**
     * Standard visualization with no fill color.
     */
    Standard = "Standard",
  }
  /**
   * @SINCE 1.24.0
   *
   * Types of a calendar day used for visualization.
   */
  export enum CalendarDayType {
    /**
     * No special type is used.
     */
    None = "None",
    /**
     * Non-working dates.
     */
    NonWorking = "NonWorking",
    /**
     * The semantic meaning must be defined by the app. It can be displayed in a legend.
     */
    Type01 = "Type01",
    /**
     * The semantic meaning must be defined by the app. It can be displayed in a legend.
     */
    Type02 = "Type02",
    /**
     * The semantic meaning must be defined by the app. It can be displayed in a legend.
     */
    Type03 = "Type03",
    /**
     * The semantic meaning must be defined by the app. It can be displayed in a legend.
     */
    Type04 = "Type04",
    /**
     * The semantic meaning must be defined by the app. It can be displayed in a legend.
     */
    Type05 = "Type05",
    /**
     * The semantic meaning must be defined by the app. It can be displayed in a legend.
     */
    Type06 = "Type06",
    /**
     * The semantic meaning must be defined by the app. It can be displayed in a legend.
     */
    Type07 = "Type07",
    /**
     * The semantic meaning must be defined by the app. It can be displayed in a legend.
     */
    Type08 = "Type08",
    /**
     * The semantic meaning must be defined by the app. It can be displayed in a legend.
     */
    Type09 = "Type09",
    /**
     * The semantic meaning must be defined by the app. It can be displayed in a legend.
     */
    Type10 = "Type10",
    /**
     * @SINCE 1.50
     *
     * The semantic meaning must be defined by the app. It can be displayed in a legend.
     */
    Type11 = "Type11",
    /**
     * @SINCE 1.50
     *
     * The semantic meaning must be defined by the app. It can be displayed in a legend.
     */
    Type12 = "Type12",
    /**
     * @SINCE 1.50
     *
     * The semantic meaning must be defined by the app. It can be displayed in a legend.
     */
    Type13 = "Type13",
    /**
     * @SINCE 1.50
     *
     * The semantic meaning must be defined by the app. It can be displayed in a legend.
     */
    Type14 = "Type14",
    /**
     * @SINCE 1.50
     *
     * The semantic meaning must be defined by the app. It can be displayed in a legend.
     */
    Type15 = "Type15",
    /**
     * @SINCE 1.50
     *
     * The semantic meaning must be defined by the app. It can be displayed in a legend.
     */
    Type16 = "Type16",
    /**
     * @SINCE 1.50
     *
     * The semantic meaning must be defined by the app. It can be displayed in a legend.
     */
    Type17 = "Type17",
    /**
     * @SINCE 1.50
     *
     * The semantic meaning must be defined by the app. It can be displayed in a legend.
     */
    Type18 = "Type18",
    /**
     * @SINCE 1.50
     *
     * The semantic meaning must be defined by the app. It can be displayed in a legend.
     */
    Type19 = "Type19",
    /**
     * @SINCE 1.50
     *
     * The semantic meaning must be defined by the app. It can be displayed in a legend.
     */
    Type20 = "Type20",
  }
  /**
   * @SINCE 1.34.0
   *
   * Interval types in a `CalendarRow`.
   */
  export enum CalendarIntervalType {
    /**
     * Intervals have the size of one day.
     */
    Day = "Day",
    /**
     * Intervals have the size of one hour.
     */
    Hour = "Hour",
    /**
     * Intervals have the size of one month.
     */
    Month = "Month",
  }
  /**
   * different styles for a ColorPicker.
   */
  export enum ColorPickerMode {
    /**
     * Color picker works with HSL values.
     */
    HSL = "HSL",
    /**
     * Color picker works with HSV values.
     */
    HSV = "HSV",
  }
  /**
   * @SINCE 1.16.0
   * @EXPERIMENTAL (since 1.16.0)
   *
   * Predefined animations for the ContentSwitcher
   */
  export enum ContentSwitcherAnimation {
    /**
     * Content is faded (opacity change).
     */
    Fade = "Fade",
    /**
     * No animation. Content is switched instantly.
     */
    None = "None",
    /**
     * The new content rotates in. (Just like one of those old newspaper-animations.)
     */
    Rotate = "Rotate",
    /**
     * The new content slides in from the left while the old content slides out to the left at the same time.
     */
    SlideOver = "SlideOver",
    /**
     * The new slides in from the left (to the right).
     */
    SlideRight = "SlideRight",
    /**
     * The new content is "zoomed in" from the center and grows to fill the full content area.
     */
    ZoomIn = "ZoomIn",
    /**
     * The old content is "zoomed out", i.e. shrinks to a point at the center of the content area.
     */
    ZoomOut = "ZoomOut",
  }
  /**
   * @SINCE 1.81.0
   *
   * Types of HTTP request methods.
   */
  export enum FileUploaderHttpRequestMethod {
    /**
     * HTTP request POST method.
     */
    Post = "POST",
    /**
     * HTTP request PUT method.
     */
    Put = "PUT",
  }
  /**
   * @SINCE 1.48.0
   *
   * Types of display mode for overlapping appointments.
   */
  export enum GroupAppointmentsMode {
    /**
     * Overlapping appointments are displayed as a collapsed group appointment.
     */
    Collapsed = "Collapsed",
    /**
     * Overlapping appointments are displayed individually (expanded from a group).
     */
    Expanded = "Expanded",
  }
  /**
   * Marker interface for controls that process instances of `window.Blob`, such as `window.File`. The implementation
   * of this Interface should implement the following Interface methods:
   * 	 - `getProcessedBlobsFromArray`
   */
  export interface IProcessableBlobs {
    __implements__sap_ui_unified_IProcessableBlobs: boolean;

    /**
     * @SINCE 1.52
     *
     * Allows to process Blobs before they get uploaded. This API can be used to create custom Blobs and upload
     * these custom Blobs instead of the received/initials Blobs in the parameter `aBlobs`. One use case could
     * be to create and upload zip archives based on the passed Blobs. The default implementation of this API
     * should simply resolve with the received Blobs (parameter `aBlobs`).
     */
    getProcessedBlobsFromArray(
      /**
       * The initial Blobs which can be used to determine a new array of Blobs for further processing.
       */
      aBlobs: Blob[]
    ): Promise<any>;
  }

  /**
   * @SINCE 1.50
   *
   * Standard day types visualized in a {@link sap.m.PlanningCalendarLegend}, which correspond to days in
   * a {@link sap.ui.unified.Calendar}.
   */
  export enum StandardCalendarLegendItem {
    /**
     * Type used for visualization of the non-working days.
     */
    NonWorkingDay = "NonWorkingDay",
    /**
     * Type used for visualization of the currently selected day.
     */
    Selected = "Selected",
    /**
     * Type used for visualization of the current date.
     */
    Today = "Today",
    /**
     * Type used for visualization of the regular work days.
     */
    WorkingDay = "WorkingDay",
  }
}

declare module "sap/ui/unified/Calendar" {
  import { default as Control, $ControlSettings } from "sap/ui/core/Control";

  import { ID, CSSSize } from "sap/ui/core/library";

  import DateRange from "sap/ui/unified/DateRange";

  import DateTypeRange from "sap/ui/unified/DateTypeRange";

  import ElementMetadata from "sap/ui/core/ElementMetadata";

  import CalendarType from "sap/ui/core/CalendarType";

  import CalendarLegend from "sap/ui/unified/CalendarLegend";

  import {
    PropertyBindingInfo,
    AggregationBindingInfo,
  } from "sap/ui/base/ManagedObject";

  /**
   * @SINCE 1.22.0
   *
   * Basic Calendar. This calendar is used for DatePickers
   */
  export default class Calendar extends Control {
    /**
     * Constructor for a new Calendar.
     *
     * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated
     * objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description
     * of the syntax of the settings object.
     */
    constructor(
      /**
       * initial settings for the new control
       */
      mSettings?: $CalendarSettings
    );
    /**
     * Constructor for a new Calendar.
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
      mSettings?: $CalendarSettings
    );

    /**
     * @SINCE 1.28.0
     *
     * Adds some ariaLabelledBy into the association {@link #getAriaLabelledBy ariaLabelledBy}.
     */
    addAriaLabelledBy(
      /**
       * The ariaLabelledBy to add; if empty, nothing is inserted
       */
      vAriaLabelledBy: ID | Control
    ): this;
    /**
     * @SINCE 1.38.0
     *
     * Adds some disabledDate to the aggregation {@link #getDisabledDates disabledDates}.
     */
    addDisabledDate(
      /**
       * The disabledDate to add; if empty, nothing is inserted
       */
      oDisabledDate: DateRange
    ): this;
    /**
     * Adds some selectedDate to the aggregation {@link #getSelectedDates selectedDates}.
     */
    addSelectedDate(
      /**
       * The selectedDate to add; if empty, nothing is inserted
       */
      oSelectedDate: DateRange
    ): this;
    /**
     * @SINCE 1.24.0
     *
     * Adds some specialDate to the aggregation {@link #getSpecialDates specialDates}.
     */
    addSpecialDate(
      /**
       * The specialDate to add; if empty, nothing is inserted
       */
      oSpecialDate: DateTypeRange
    ): this;
    /**
     * Attaches event handler `fnFunction` to the {@link #event:cancel cancel} event of this `sap.ui.unified.Calendar`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.unified.Calendar` itself.
     *
     * Date selection was cancelled
     */
    attachCancel(
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
       * Context object to call the event handler with. Defaults to this `sap.ui.unified.Calendar` itself
       */
      oListener?: object
    ): this;
    /**
     * Attaches event handler `fnFunction` to the {@link #event:select select} event of this `sap.ui.unified.Calendar`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.unified.Calendar` itself.
     *
     * Date selection changed
     */
    attachSelect(
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
       * Context object to call the event handler with. Defaults to this `sap.ui.unified.Calendar` itself
       */
      oListener?: object
    ): this;
    /**
     * @SINCE 1.34.0
     *
     * Attaches event handler `fnFunction` to the {@link #event:startDateChange startDateChange} event of this
     * `sap.ui.unified.Calendar`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.unified.Calendar` itself.
     *
     * `startDate` was changed while navigation in `Calendar`
     *
     * Use `getStartDate` function to determine the current start date
     */
    attachStartDateChange(
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
       * Context object to call the event handler with. Defaults to this `sap.ui.unified.Calendar` itself
       */
      oListener?: object
    ): this;
    /**
     * @SINCE 1.56
     *
     * Attaches event handler `fnFunction` to the {@link #event:weekNumberSelect weekNumberSelect} event of
     * this `sap.ui.unified.Calendar`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.unified.Calendar` itself.
     *
     * Week number selection changed. By default, clicking on the week number will select the corresponding
     * week. If the week has already been selected, clicking the week number will deselect it.
     *
     * The default behavior can be prevented using the `preventDefault` method.
     *
     * **Note** Works for Gregorian calendars only and when `intervalSelection` is set to 'true'.
     */
    attachWeekNumberSelect(
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
       * Context object to call the event handler with. Defaults to this `sap.ui.unified.Calendar` itself
       */
      oListener?: object
    ): this;
    /**
     * @SINCE 1.38.0
     *
     * Destroys all the disabledDates in the aggregation {@link #getDisabledDates disabledDates}.
     */
    destroyDisabledDates(): this;
    /**
     * Destroys all the selectedDates in the aggregation {@link #getSelectedDates selectedDates}.
     */
    destroySelectedDates(): this;
    /**
     * @SINCE 1.24.0
     *
     * Destroys all the specialDates in the aggregation {@link #getSpecialDates specialDates}.
     */
    destroySpecialDates(): this;
    /**
     * Detaches event handler `fnFunction` from the {@link #event:cancel cancel} event of this `sap.ui.unified.Calendar`.
     *
     * The passed function and listener object must match the ones used for event registration.
     */
    detachCancel(
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
     * Detaches event handler `fnFunction` from the {@link #event:select select} event of this `sap.ui.unified.Calendar`.
     *
     * The passed function and listener object must match the ones used for event registration.
     */
    detachSelect(
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
     * @SINCE 1.34.0
     *
     * Detaches event handler `fnFunction` from the {@link #event:startDateChange startDateChange} event of
     * this `sap.ui.unified.Calendar`.
     *
     * The passed function and listener object must match the ones used for event registration.
     */
    detachStartDateChange(
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
     * @SINCE 1.56
     *
     * Detaches event handler `fnFunction` from the {@link #event:weekNumberSelect weekNumberSelect} event of
     * this `sap.ui.unified.Calendar`.
     *
     * The passed function and listener object must match the ones used for event registration.
     */
    detachWeekNumberSelect(
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
     * @SINCE 1.28.0
     *
     * Displays a date in the calendar but doesn't set the focus.
     */
    displayDate(
      /**
       * JavaScript date object for focused date.
       */
      oDate: Object
    ): this;
    /**
     * Creates a new subclass of class sap.ui.unified.Calendar with name `sClassName` and enriches it with the
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
      oClassInfo?: sap.ClassInfo<T, Calendar>,
      /**
       * Constructor function for the metadata object; if not given, it defaults to the metadata implementation
       * used by this class
       */
      FNMetaImpl?: Function
    ): Function;
    /**
     * Fires event {@link #event:cancel cancel} to attached listeners.
     */
    fireCancel(
      /**
       * Parameters to pass along with the event
       */
      mParameters?: object
    ): this;
    /**
     * Fires event {@link #event:select select} to attached listeners.
     */
    fireSelect(
      /**
       * Parameters to pass along with the event
       */
      mParameters?: object
    ): this;
    /**
     * @SINCE 1.34.0
     *
     * Fires event {@link #event:startDateChange startDateChange} to attached listeners.
     */
    fireStartDateChange(
      /**
       * Parameters to pass along with the event
       */
      mParameters?: object
    ): this;
    /**
     * @SINCE 1.56
     *
     * Fires event {@link #event:weekNumberSelect weekNumberSelect} to attached listeners.
     *
     * Listeners may prevent the default action of this event by calling the `preventDefault` method on the
     * event object. The return value of this method indicates whether the default action should be executed.
     */
    fireWeekNumberSelect(
      /**
       * Parameters to pass along with the event
       */
      mParameters?: {
        /**
         * The selected week number.
         */
        weekNumber?: int;
        /**
         * The days of the corresponding week that are selected or deselected.
         */
        weekDays?: DateRange;
      }
    ): boolean;
    /**
     * Sets the focused date of the calendar.
     */
    focusDate(
      /**
       * JavaScript date object for focused date.
       */
      oDate: Object
    ): this;
    /**
     * @SINCE 1.28.0
     *
     * Returns array of IDs of the elements which are the current targets of the association {@link #getAriaLabelledBy
     * ariaLabelledBy}.
     */
    getAriaLabelledBy(): ID[];
    /**
     * @SINCE 1.38.0
     *
     * Gets content of aggregation {@link #getDisabledDates disabledDates}.
     *
     * Dates or date ranges for disabled dates.
     *
     * To set a single date (instead of a range), set only the `startDate` property of the {@link sap.ui.unified.DateRange}
     * class.
     */
    getDisabledDates(): DateRange[];
    /**
     * @SINCE 1.28.9
     *
     * Gets current value of property {@link #getFirstDayOfWeek firstDayOfWeek}.
     *
     * If set, the first day of the displayed week is this day. Valid values are 0 to 6. If not a valid value
     * is set, the default of the used locale is used.
     *
     * Default value is `-1`.
     */
    getFirstDayOfWeek(): int;
    /**
     * Gets current value of property {@link #getIntervalSelection intervalSelection}.
     *
     * If set, interval selection is allowed
     *
     * Default value is `false`.
     */
    getIntervalSelection(): boolean;
    /**
     * @SINCE 1.38.5
     *
     * ID of the element which is the current target of the association {@link #getLegend legend}, or `null`.
     */
    getLegend(): ID;
    /**
     * @SINCE 1.38.0
     *
     * Gets current value of property {@link #getMaxDate maxDate}.
     *
     * Maximum date that can be shown and selected in the Calendar. This must be a JavaScript date object.
     *
     * **Note:** if the date is inside of a month the complete month is displayed, but dates outside the valid
     * range can not be selected.
     *
     * **Note:** If the `maxDate` is set to be before the `minDate`, the `minDate` is set to the begin of the
     * month of the `maxDate`.
     */
    getMaxDate(): object;
    /**
     * Returns a metadata object for class sap.ui.unified.Calendar.
     */
    static getMetadata(): ElementMetadata;
    /**
     * @SINCE 1.38.0
     *
     * Gets current value of property {@link #getMinDate minDate}.
     *
     * Minimum date that can be shown and selected in the Calendar. This must be a JavaScript date object.
     *
     * **Note:** if the date is inside of a month the complete month is displayed, but dates outside the valid
     * range can not be selected.
     *
     * **Note:** If the `minDate` is set to be after the `maxDate`, the `maxDate` is set to the end of the month
     * of the `minDate`.
     */
    getMinDate(): object;
    /**
     * @SINCE 1.28.0
     *
     * Gets current value of property {@link #getMonths months}.
     *
     * Determines the number of months displayed.
     *
     * As of version 1.50, the duplicated dates are not displayed if there are multiple months.
     *
     * **Note:** On phones, only one month is displayed.
     *
     * Default value is `1`.
     */
    getMonths(): int;
    /**
     * @SINCE 1.28.9
     *
     * Gets current value of property {@link #getNonWorkingDays nonWorkingDays}.
     *
     * If set, the provided weekdays are displayed as non-working days. Valid values inside the array are 0
     * to 6. If not set, the weekend defined in the locale settings is displayed as non-working days.
     *
     * **Note:** Keep in mind that this property sets only weekly-recurring days as non-working. If you need
     * specific dates or dates ranges, such as national holidays, use the `specialDates` aggregation to set
     * them. Both the non-working days (from property) and dates (from aggregation) are visualized the same.
     */
    getNonWorkingDays(): int[];
    /**
     * @SINCE 1.34.0
     *
     * Gets current value of property {@link #getPrimaryCalendarType primaryCalendarType}.
     *
     * If set, the calendar type is used for display. If not set, the calendar type of the global configuration
     * is used.
     */
    getPrimaryCalendarType(): CalendarType | keyof typeof CalendarType;
    /**
     * @SINCE 1.34.0
     *
     * Gets current value of property {@link #getSecondaryCalendarType secondaryCalendarType}.
     *
     * If set, the days are also displayed in this calendar type If not set, the dates are only displayed in
     * the primary calendar type
     */
    getSecondaryCalendarType(): CalendarType | keyof typeof CalendarType;
    /**
     * Gets content of aggregation {@link #getSelectedDates selectedDates}.
     *
     * Dates or date ranges for selected dates.
     *
     * To set a single date (instead of a range), set only the `startDate` property of the {@link sap.ui.unified.DateRange}
     * class.
     */
    getSelectedDates(): DateRange[];
    /**
     * @SINCE 1.48
     *
     * Gets current value of property {@link #getShowWeekNumbers showWeekNumbers}.
     *
     * Determines whether the week numbers in the months are displayed.
     *
     * **Note:** For Islamic calendars, the week numbers are not displayed regardless of what is set to this
     * property.
     *
     * Default value is `true`.
     */
    getShowWeekNumbers(): boolean;
    /**
     * Gets current value of property {@link #getSingleSelection singleSelection}.
     *
     * If set, only a single date or interval, if intervalSelection is enabled, can be selected
     *
     * Default value is `true`.
     */
    getSingleSelection(): boolean;
    /**
     * @SINCE 1.24.0
     *
     * Gets content of aggregation {@link #getSpecialDates specialDates}.
     *
     * Dates or date ranges with type, to visualize special days in the `Calendar`. If one day is assigned to
     * more than one Type, only the first one will be used.
     *
     * To set a single date (instead of a range), set only the `startDate` property of the {@link sap.ui.unified.DateRange}
     * class.
     *
     * **Note:** Keep in mind that the `NonWorking` type is for marking specific dates or date ranges as non-working,
     * where if you need a weekly-reccuring non-working days (weekend), you should use the `nonWorkingDays`
     * property. Both the non-working days (from property) and dates (from aggregation) are visualized the same.
     */
    getSpecialDates(): DateTypeRange[];
    /**
     * @SINCE 1.34.1
     *
     * Returns the first day of the displayed month.
     *
     * There might be some days of the previous month shown, but they can not be focused.
     */
    getStartDate(): Object;
    /**
     * @SINCE 1.38.0
     *
     * Gets current value of property {@link #getWidth width}.
     *
     * Width of Calendar
     *
     * **Note:** There is a theme depending minimum width, so the calendar can not be set smaller.
     */
    getWidth(): CSSSize;
    /**
     * @SINCE 1.38.0
     *
     * Checks for the provided `sap.ui.unified.DateRange` in the aggregation {@link #getDisabledDates disabledDates}.
     * and returns its index if found or -1 otherwise.
     */
    indexOfDisabledDate(
      /**
       * The disabledDate whose index is looked for
       */
      oDisabledDate: DateRange
    ): int;
    /**
     * Checks for the provided `sap.ui.unified.DateRange` in the aggregation {@link #getSelectedDates selectedDates}.
     * and returns its index if found or -1 otherwise.
     */
    indexOfSelectedDate(
      /**
       * The selectedDate whose index is looked for
       */
      oSelectedDate: DateRange
    ): int;
    /**
     * @SINCE 1.24.0
     *
     * Checks for the provided `sap.ui.unified.DateTypeRange` in the aggregation {@link #getSpecialDates specialDates}.
     * and returns its index if found or -1 otherwise.
     */
    indexOfSpecialDate(
      /**
       * The specialDate whose index is looked for
       */
      oSpecialDate: DateTypeRange
    ): int;
    /**
     * @SINCE 1.38.0
     *
     * Inserts a disabledDate into the aggregation {@link #getDisabledDates disabledDates}.
     */
    insertDisabledDate(
      /**
       * The disabledDate to insert; if empty, nothing is inserted
       */
      oDisabledDate: DateRange,
      /**
       * The `0`-based index the disabledDate should be inserted at; for a negative value of `iIndex`, the disabledDate
       * is inserted at position 0; for a value greater than the current size of the aggregation, the disabledDate
       * is inserted at the last position
       */
      iIndex: int
    ): this;
    /**
     * Inserts a selectedDate into the aggregation {@link #getSelectedDates selectedDates}.
     */
    insertSelectedDate(
      /**
       * The selectedDate to insert; if empty, nothing is inserted
       */
      oSelectedDate: DateRange,
      /**
       * The `0`-based index the selectedDate should be inserted at; for a negative value of `iIndex`, the selectedDate
       * is inserted at position 0; for a value greater than the current size of the aggregation, the selectedDate
       * is inserted at the last position
       */
      iIndex: int
    ): this;
    /**
     * @SINCE 1.24.0
     *
     * Inserts a specialDate into the aggregation {@link #getSpecialDates specialDates}.
     */
    insertSpecialDate(
      /**
       * The specialDate to insert; if empty, nothing is inserted
       */
      oSpecialDate: DateTypeRange,
      /**
       * The `0`-based index the specialDate should be inserted at; for a negative value of `iIndex`, the specialDate
       * is inserted at position 0; for a value greater than the current size of the aggregation, the specialDate
       * is inserted at the last position
       */
      iIndex: int
    ): this;
    /**
     * @SINCE 1.28.0
     *
     * Removes all the controls in the association named {@link #getAriaLabelledBy ariaLabelledBy}.
     */
    removeAllAriaLabelledBy(): ID[];
    /**
     * @SINCE 1.38.0
     *
     * Removes all the controls from the aggregation {@link #getDisabledDates disabledDates}.
     *
     * Additionally, it unregisters them from the hosting UIArea.
     */
    removeAllDisabledDates(): DateRange[];
    /**
     * Removes all the controls from the aggregation {@link #getSelectedDates selectedDates}.
     *
     * Additionally, it unregisters them from the hosting UIArea.
     */
    removeAllSelectedDates(): DateRange[];
    /**
     * @SINCE 1.24.0
     *
     * Removes all the controls from the aggregation {@link #getSpecialDates specialDates}.
     *
     * Additionally, it unregisters them from the hosting UIArea.
     */
    removeAllSpecialDates(): DateTypeRange[];
    /**
     * @SINCE 1.28.0
     *
     * Removes an ariaLabelledBy from the association named {@link #getAriaLabelledBy ariaLabelledBy}.
     */
    removeAriaLabelledBy(
      /**
       * The ariaLabelledBy to be removed or its index or ID
       */
      vAriaLabelledBy: int | ID | Control
    ): ID;
    /**
     * @SINCE 1.38.0
     *
     * Removes a disabledDate from the aggregation {@link #getDisabledDates disabledDates}.
     */
    removeDisabledDate(
      /**
       * The disabledDate to remove or its index or id
       */
      vDisabledDate: int | string | DateRange
    ): DateRange;
    /**
     * Removes a selectedDate from the aggregation {@link #getSelectedDates selectedDates}.
     */
    removeSelectedDate(
      /**
       * The selectedDate to remove or its index or id
       */
      vSelectedDate: int | string | DateRange
    ): DateRange;
    /**
     * @SINCE 1.24.0
     *
     * Removes a specialDate from the aggregation {@link #getSpecialDates specialDates}.
     */
    removeSpecialDate(
      /**
       * The specialDate to remove or its index or id
       */
      vSpecialDate: int | string | DateTypeRange
    ): DateTypeRange;
    /**
     * @SINCE 1.28.9
     *
     * Sets a new value for property {@link #getFirstDayOfWeek firstDayOfWeek}.
     *
     * If set, the first day of the displayed week is this day. Valid values are 0 to 6. If not a valid value
     * is set, the default of the used locale is used.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `-1`.
     */
    setFirstDayOfWeek(
      /**
       * New value for property `firstDayOfWeek`
       */
      iFirstDayOfWeek?: int
    ): this;
    /**
     * Sets a new value for property {@link #getIntervalSelection intervalSelection}.
     *
     * If set, interval selection is allowed
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `false`.
     */
    setIntervalSelection(
      /**
       * New value for property `intervalSelection`
       */
      bIntervalSelection?: boolean
    ): this;
    /**
     * @SINCE 1.38.5
     *
     * Sets the associated {@link #getLegend legend}.
     */
    setLegend(
      /**
       * ID of an element which becomes the new target of this legend association; alternatively, an element instance
       * may be given
       */
      oLegend: ID | CalendarLegend
    ): this;
    /**
     * Sets a maximum date for the calendar.
     */
    setMaxDate(
      /**
       * a JavaScript date
       */
      oDate: Date
    ): this;
    /**
     * Sets a minimum date for the calendar.
     */
    setMinDate(
      /**
       * a JavaScript date
       */
      oDate: Date
    ): this;
    /**
     * @SINCE 1.28.0
     *
     * Sets a new value for property {@link #getMonths months}.
     *
     * Determines the number of months displayed.
     *
     * As of version 1.50, the duplicated dates are not displayed if there are multiple months.
     *
     * **Note:** On phones, only one month is displayed.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `1`.
     */
    setMonths(
      /**
       * New value for property `months`
       */
      iMonths?: int
    ): this;
    /**
     * @SINCE 1.28.9
     *
     * Sets a new value for property {@link #getNonWorkingDays nonWorkingDays}.
     *
     * If set, the provided weekdays are displayed as non-working days. Valid values inside the array are 0
     * to 6. If not set, the weekend defined in the locale settings is displayed as non-working days.
     *
     * **Note:** Keep in mind that this property sets only weekly-recurring days as non-working. If you need
     * specific dates or dates ranges, such as national holidays, use the `specialDates` aggregation to set
     * them. Both the non-working days (from property) and dates (from aggregation) are visualized the same.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     */
    setNonWorkingDays(
      /**
       * New value for property `nonWorkingDays`
       */
      sNonWorkingDays?: int[]
    ): this;
    /**
     * @SINCE 1.34.0
     *
     * Sets a new value for property {@link #getPrimaryCalendarType primaryCalendarType}.
     *
     * If set, the calendar type is used for display. If not set, the calendar type of the global configuration
     * is used.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     */
    setPrimaryCalendarType(
      /**
       * New value for property `primaryCalendarType`
       */
      sPrimaryCalendarType?: CalendarType | keyof typeof CalendarType
    ): this;
    /**
     * @SINCE 1.34.0
     *
     * Sets a new value for property {@link #getSecondaryCalendarType secondaryCalendarType}.
     *
     * If set, the days are also displayed in this calendar type If not set, the dates are only displayed in
     * the primary calendar type
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     */
    setSecondaryCalendarType(
      /**
       * New value for property `secondaryCalendarType`
       */
      sSecondaryCalendarType?: CalendarType | keyof typeof CalendarType
    ): this;
    /**
     * @SINCE 1.48
     *
     * Sets a new value for property {@link #getShowWeekNumbers showWeekNumbers}.
     *
     * Determines whether the week numbers in the months are displayed.
     *
     * **Note:** For Islamic calendars, the week numbers are not displayed regardless of what is set to this
     * property.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `true`.
     */
    setShowWeekNumbers(
      /**
       * New value for property `showWeekNumbers`
       */
      bShowWeekNumbers?: boolean
    ): this;
    /**
     * Sets a new value for property {@link #getSingleSelection singleSelection}.
     *
     * If set, only a single date or interval, if intervalSelection is enabled, can be selected
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `true`.
     */
    setSingleSelection(
      /**
       * New value for property `singleSelection`
       */
      bSingleSelection?: boolean
    ): this;
    /**
     * @SINCE 1.38.0
     *
     * Sets a new value for property {@link #getWidth width}.
     *
     * Width of Calendar
     *
     * **Note:** There is a theme depending minimum width, so the calendar can not be set smaller.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     */
    setWidth(
      /**
       * New value for property `width`
       */
      sWidth?: CSSSize
    ): this;
    /**
     * Attaches event handler `fnFunction` to the {@link #event:cancel cancel} event of this `sap.ui.unified.Calendar`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.unified.Calendar` itself.
     *
     * Date selection was cancelled
     */
    attachCancel(
      /**
       * The function to be called when the event occurs
       */
      fnFunction: Function,
      /**
       * Context object to call the event handler with. Defaults to this `sap.ui.unified.Calendar` itself
       */
      oListener?: object
    ): this;
    /**
     * Attaches event handler `fnFunction` to the {@link #event:select select} event of this `sap.ui.unified.Calendar`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.unified.Calendar` itself.
     *
     * Date selection changed
     */
    attachSelect(
      /**
       * The function to be called when the event occurs
       */
      fnFunction: Function,
      /**
       * Context object to call the event handler with. Defaults to this `sap.ui.unified.Calendar` itself
       */
      oListener?: object
    ): this;
    /**
     * @SINCE 1.34.0
     *
     * Attaches event handler `fnFunction` to the {@link #event:startDateChange startDateChange} event of this
     * `sap.ui.unified.Calendar`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.unified.Calendar` itself.
     *
     * `startDate` was changed while navigation in `Calendar`
     *
     * Use `getStartDate` function to determine the current start date
     */
    attachStartDateChange(
      /**
       * The function to be called when the event occurs
       */
      fnFunction: Function,
      /**
       * Context object to call the event handler with. Defaults to this `sap.ui.unified.Calendar` itself
       */
      oListener?: object
    ): this;
    /**
     * @SINCE 1.56
     *
     * Attaches event handler `fnFunction` to the {@link #event:weekNumberSelect weekNumberSelect} event of
     * this `sap.ui.unified.Calendar`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.unified.Calendar` itself.
     *
     * Week number selection changed. By default, clicking on the week number will select the corresponding
     * week. If the week has already been selected, clicking the week number will deselect it.
     *
     * The default behavior can be prevented using the `preventDefault` method.
     *
     * **Note** Works for Gregorian calendars only and when `intervalSelection` is set to 'true'.
     */
    attachWeekNumberSelect(
      /**
       * The function to be called when the event occurs
       */
      fnFunction: Function,
      /**
       * Context object to call the event handler with. Defaults to this `sap.ui.unified.Calendar` itself
       */
      oListener?: object
    ): this;
  }

  export interface $CalendarSettings extends $ControlSettings {
    /**
     * If set, interval selection is allowed
     */
    intervalSelection?: boolean | PropertyBindingInfo;

    /**
     * If set, only a single date or interval, if intervalSelection is enabled, can be selected
     */
    singleSelection?: boolean | PropertyBindingInfo;

    /**
     * @SINCE 1.28.0
     *
     * Determines the number of months displayed.
     *
     * As of version 1.50, the duplicated dates are not displayed if there are multiple months.
     *
     * **Note:** On phones, only one month is displayed.
     */
    months?: int | PropertyBindingInfo;

    /**
     * @SINCE 1.28.9
     *
     * If set, the first day of the displayed week is this day. Valid values are 0 to 6. If not a valid value
     * is set, the default of the used locale is used.
     */
    firstDayOfWeek?: int | PropertyBindingInfo;

    /**
     * @SINCE 1.28.9
     *
     * If set, the provided weekdays are displayed as non-working days. Valid values inside the array are 0
     * to 6. If not set, the weekend defined in the locale settings is displayed as non-working days.
     *
     * **Note:** Keep in mind that this property sets only weekly-recurring days as non-working. If you need
     * specific dates or dates ranges, such as national holidays, use the `specialDates` aggregation to set
     * them. Both the non-working days (from property) and dates (from aggregation) are visualized the same.
     */
    nonWorkingDays?: int[] | PropertyBindingInfo;

    /**
     * @SINCE 1.34.0
     *
     * If set, the calendar type is used for display. If not set, the calendar type of the global configuration
     * is used.
     */
    primaryCalendarType?:
      | (CalendarType | keyof typeof CalendarType)
      | PropertyBindingInfo;

    /**
     * @SINCE 1.34.0
     *
     * If set, the days are also displayed in this calendar type If not set, the dates are only displayed in
     * the primary calendar type
     */
    secondaryCalendarType?:
      | (CalendarType | keyof typeof CalendarType)
      | PropertyBindingInfo;

    /**
     * @SINCE 1.38.0
     *
     * Width of Calendar
     *
     * **Note:** There is a theme depending minimum width, so the calendar can not be set smaller.
     */
    width?: CSSSize | PropertyBindingInfo;

    /**
     * @SINCE 1.38.0
     *
     * Minimum date that can be shown and selected in the Calendar. This must be a JavaScript date object.
     *
     * **Note:** if the date is inside of a month the complete month is displayed, but dates outside the valid
     * range can not be selected.
     *
     * **Note:** If the `minDate` is set to be after the `maxDate`, the `maxDate` is set to the end of the month
     * of the `minDate`.
     */
    minDate?: object | PropertyBindingInfo;

    /**
     * @SINCE 1.38.0
     *
     * Maximum date that can be shown and selected in the Calendar. This must be a JavaScript date object.
     *
     * **Note:** if the date is inside of a month the complete month is displayed, but dates outside the valid
     * range can not be selected.
     *
     * **Note:** If the `maxDate` is set to be before the `minDate`, the `minDate` is set to the begin of the
     * month of the `maxDate`.
     */
    maxDate?: object | PropertyBindingInfo;

    /**
     * @SINCE 1.48
     *
     * Determines whether the week numbers in the months are displayed.
     *
     * **Note:** For Islamic calendars, the week numbers are not displayed regardless of what is set to this
     * property.
     */
    showWeekNumbers?: boolean | PropertyBindingInfo;

    /**
     * Dates or date ranges for selected dates.
     *
     * To set a single date (instead of a range), set only the `startDate` property of the {@link sap.ui.unified.DateRange}
     * class.
     */
    selectedDates?: DateRange[] | DateRange | AggregationBindingInfo;

    /**
     * @SINCE 1.24.0
     *
     * Dates or date ranges with type, to visualize special days in the `Calendar`. If one day is assigned to
     * more than one Type, only the first one will be used.
     *
     * To set a single date (instead of a range), set only the `startDate` property of the {@link sap.ui.unified.DateRange}
     * class.
     *
     * **Note:** Keep in mind that the `NonWorking` type is for marking specific dates or date ranges as non-working,
     * where if you need a weekly-reccuring non-working days (weekend), you should use the `nonWorkingDays`
     * property. Both the non-working days (from property) and dates (from aggregation) are visualized the same.
     */
    specialDates?: DateTypeRange[] | DateTypeRange | AggregationBindingInfo;

    /**
     * @SINCE 1.38.0
     *
     * Dates or date ranges for disabled dates.
     *
     * To set a single date (instead of a range), set only the `startDate` property of the {@link sap.ui.unified.DateRange}
     * class.
     */
    disabledDates?: DateRange[] | DateRange | AggregationBindingInfo;

    /**
     * @SINCE 1.28.0
     *
     * Association to controls / ids which label this control (see WAI-ARIA attribute aria-labelledby).
     */
    ariaLabelledBy?: Array<Control | string>;

    /**
     * @SINCE 1.38.5
     *
     * Association to the `CalendarLegend` explaining the colors of the `specialDates`.
     *
     * **Note** The legend does not have to be rendered but must exist, and all required types must be assigned.
     */
    legend?: CalendarLegend | string;

    /**
     * Date selection changed
     */
    select?: Function;

    /**
     * Date selection was cancelled
     */
    cancel?: Function;

    /**
     * @SINCE 1.34.0
     *
     * `startDate` was changed while navigation in `Calendar`
     *
     * Use `getStartDate` function to determine the current start date
     */
    startDateChange?: Function;

    /**
     * @SINCE 1.56
     *
     * Week number selection changed. By default, clicking on the week number will select the corresponding
     * week. If the week has already been selected, clicking the week number will deselect it.
     *
     * The default behavior can be prevented using the `preventDefault` method.
     *
     * **Note** Works for Gregorian calendars only and when `intervalSelection` is set to 'true'.
     */
    weekNumberSelect?: Function;
  }
}

declare module "sap/ui/unified/calendar/DatesRow" {
  import {
    default as Month,
    $MonthSettings,
  } from "sap/ui/unified/calendar/Month";

  import ElementMetadata from "sap/ui/core/ElementMetadata";

  import { PropertyBindingInfo } from "sap/ui/base/ManagedObject";

  /**
   * @SINCE 1.30.0
   *
   * renders a row of days with ItemNavigation This is used inside the calendar. Not for stand alone usage
   * If used inside the calendar the properties and aggregation are directly taken from the parent (To not
   * duplicate and sync DateRanges and so on...)
   */
  export default class DatesRow extends Month {
    /**
     * Constructor for a new calendar/DatesRow.
     *
     * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated
     * objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description
     * of the syntax of the settings object.
     */
    constructor(
      /**
       * initial settings for the new control
       */
      mSettings?: $DatesRowSettings
    );
    /**
     * Constructor for a new calendar/DatesRow.
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
      mSettings?: $DatesRowSettings
    );

    /**
     * displays the a given date without setting the focus
     *
     * Property `date` date to be focused or displayed. It must be in the displayed date range beginning with
     * `startDate` and `days` days So set this properties before setting the date.
     */
    displayDate(
      /**
       * JavaScript date object for focused date.
       */
      oDate: object
    ): this;
    /**
     * Creates a new subclass of class sap.ui.unified.calendar.DatesRow with name `sClassName` and enriches
     * it with the information contained in `oClassInfo`.
     *
     * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.unified.calendar.Month.extend}.
     */
    static extend<T extends Record<string, unknown>>(
      /**
       * Name of the class being created
       */
      sClassName: string,
      /**
       * Object literal with information about the class
       */
      oClassInfo?: sap.ClassInfo<T, DatesRow>,
      /**
       * Constructor function for the metadata object; if not given, it defaults to the metadata implementation
       * used by this class
       */
      FNMetaImpl?: Function
    ): Function;
    /**
     * Gets current value of property {@link #getDays days}.
     *
     * number of days displayed
     *
     * Default value is `7`.
     */
    getDays(): int;
    /**
     * Returns a metadata object for class sap.ui.unified.calendar.DatesRow.
     */
    static getMetadata(): ElementMetadata;
    /**
     * @SINCE 1.34.0
     *
     * Gets current value of property {@link #getShowDayNamesLine showDayNamesLine}.
     *
     * If set the day names are shown in a separate line. If not set the day names are shown inside the single
     * days.
     *
     * Default value is `true`.
     */
    getShowDayNamesLine(): boolean;
    /**
     * Gets current value of property {@link #getStartDate startDate}.
     *
     * Start date of the row If in rendering phase the date property is not in the range startDate + days, it
     * is set to the start date So after setting the start date the date should be set to be in the range of
     * the start date
     */
    getStartDate(): object;
    /**
     * Setter for property `date`.
     *
     * Property `date` date to be focused or displayed. It must be in the displayed date range beginning with
     * `startDate` and `days` days So set this properties before setting the date.
     */
    setDate(
      /**
       * JavaScript date object for start date.
       */
      oDate: object
    ): this;
    /**
     * Sets a new value for property {@link #getDays days}.
     *
     * number of days displayed
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `7`.
     */
    setDays(
      /**
       * New value for property `days`
       */
      iDays?: int
    ): this;
    /**
     * Setter for property `firstDayOfWeek`.
     *
     * Property `firstDayOfWeek` is not supported in `sap.ui.unified.calendar.DatesRow` control.
     */
    setFirstDayOfWeek(
      /**
       * The first day of the week
       */
      iFirstDayOfWeek: int
    ): this;
    /**
     * @SINCE 1.34.0
     *
     * Sets a new value for property {@link #getShowDayNamesLine showDayNamesLine}.
     *
     * If set the day names are shown in a separate line. If not set the day names are shown inside the single
     * days.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `true`.
     */
    setShowDayNamesLine(
      /**
       * New value for property `showDayNamesLine`
       */
      bShowDayNamesLine?: boolean
    ): this;
    /**
     * Sets a new value for property {@link #getStartDate startDate}.
     *
     * Start date of the row If in rendering phase the date property is not in the range startDate + days, it
     * is set to the start date So after setting the start date the date should be set to be in the range of
     * the start date
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     */
    setStartDate(
      /**
       * New value for property `startDate`
       */
      oStartDate: object
    ): this;
  }

  export interface $DatesRowSettings extends $MonthSettings {
    /**
     * Start date of the row If in rendering phase the date property is not in the range startDate + days, it
     * is set to the start date So after setting the start date the date should be set to be in the range of
     * the start date
     */
    startDate?: object | PropertyBindingInfo;

    /**
     * number of days displayed
     */
    days?: int | PropertyBindingInfo;

    /**
     * @SINCE 1.34.0
     *
     * If set the day names are shown in a separate line. If not set the day names are shown inside the single
     * days.
     */
    showDayNamesLine?: boolean | PropertyBindingInfo;
  }
}

declare module "sap/ui/unified/calendar/Header" {
  import { default as Control, $ControlSettings } from "sap/ui/core/Control";

  import ElementMetadata from "sap/ui/core/ElementMetadata";

  import { PropertyBindingInfo } from "sap/ui/base/ManagedObject";

  /**
   * @SINCE 1.28.0
   *
   * renders a calendar header
   *
   * The calendar header consists of 3 buttons where the text can be set and a previous and a next button.
   * In the normal calendar the first button contains the displayed day, the second button the displayed month
   * and the third button the displayed year.
   *
   * **Note:** This is used inside the calendar. Not for standalone usage
   */
  export default class Header extends Control {
    /**
     * Constructor for a new Header.
     *
     * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated
     * objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description
     * of the syntax of the settings object.
     */
    constructor(
      /**
       * Initial settings for the new control
       */
      mSettings?: $HeaderSettings
    );
    /**
     * Constructor for a new Header.
     *
     * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated
     * objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description
     * of the syntax of the settings object.
     */
    constructor(
      /**
       * ID for the new control, generated automatically if no ID is given
       */
      sId?: string,
      /**
       * Initial settings for the new control
       */
      mSettings?: $HeaderSettings
    );

    /**
     * @SINCE 1.32.0
     *
     * Attaches event handler `fnFunction` to the {@link #event:pressButton0 pressButton0} event of this `sap.ui.unified.calendar.Header`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.unified.calendar.Header` itself.
     *
     * First button pressed (normally day)
     */
    attachPressButton0(
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
       * Context object to call the event handler with. Defaults to this `sap.ui.unified.calendar.Header` itself
       */
      oListener?: object
    ): this;
    /**
     * Attaches event handler `fnFunction` to the {@link #event:pressButton1 pressButton1} event of this `sap.ui.unified.calendar.Header`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.unified.calendar.Header` itself.
     *
     * Second button pressed (normally month)
     */
    attachPressButton1(
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
       * Context object to call the event handler with. Defaults to this `sap.ui.unified.calendar.Header` itself
       */
      oListener?: object
    ): this;
    /**
     * Attaches event handler `fnFunction` to the {@link #event:pressButton2 pressButton2} event of this `sap.ui.unified.calendar.Header`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.unified.calendar.Header` itself.
     *
     * Third button pressed (normally year)
     */
    attachPressButton2(
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
       * Context object to call the event handler with. Defaults to this `sap.ui.unified.calendar.Header` itself
       */
      oListener?: object
    ): this;
    /**
     * Attaches event handler `fnFunction` to the {@link #event:pressNext pressNext} event of this `sap.ui.unified.calendar.Header`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.unified.calendar.Header` itself.
     *
     * Next button pressed
     */
    attachPressNext(
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
       * Context object to call the event handler with. Defaults to this `sap.ui.unified.calendar.Header` itself
       */
      oListener?: object
    ): this;
    /**
     * Attaches event handler `fnFunction` to the {@link #event:pressPrevious pressPrevious} event of this `sap.ui.unified.calendar.Header`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.unified.calendar.Header` itself.
     *
     * Previous button pressed
     */
    attachPressPrevious(
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
       * Context object to call the event handler with. Defaults to this `sap.ui.unified.calendar.Header` itself
       */
      oListener?: object
    ): this;
    /**
     * @SINCE 1.32.0
     *
     * Detaches event handler `fnFunction` from the {@link #event:pressButton0 pressButton0} event of this `sap.ui.unified.calendar.Header`.
     *
     * The passed function and listener object must match the ones used for event registration.
     */
    detachPressButton0(
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
     * Detaches event handler `fnFunction` from the {@link #event:pressButton1 pressButton1} event of this `sap.ui.unified.calendar.Header`.
     *
     * The passed function and listener object must match the ones used for event registration.
     */
    detachPressButton1(
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
     * Detaches event handler `fnFunction` from the {@link #event:pressButton2 pressButton2} event of this `sap.ui.unified.calendar.Header`.
     *
     * The passed function and listener object must match the ones used for event registration.
     */
    detachPressButton2(
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
     * Detaches event handler `fnFunction` from the {@link #event:pressNext pressNext} event of this `sap.ui.unified.calendar.Header`.
     *
     * The passed function and listener object must match the ones used for event registration.
     */
    detachPressNext(
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
     * Detaches event handler `fnFunction` from the {@link #event:pressPrevious pressPrevious} event of this
     * `sap.ui.unified.calendar.Header`.
     *
     * The passed function and listener object must match the ones used for event registration.
     */
    detachPressPrevious(
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
     * Creates a new subclass of class sap.ui.unified.calendar.Header with name `sClassName` and enriches it
     * with the information contained in `oClassInfo`.
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
      oClassInfo?: sap.ClassInfo<T, Header>,
      /**
       * Constructor function for the metadata object; if not given, it defaults to the metadata implementation
       * used by this class
       */
      FNMetaImpl?: Function
    ): Function;
    /**
     * @SINCE 1.32.0
     *
     * Fires event {@link #event:pressButton0 pressButton0} to attached listeners.
     */
    firePressButton0(
      /**
       * Parameters to pass along with the event
       */
      mParameters?: object
    ): this;
    /**
     * Fires event {@link #event:pressButton1 pressButton1} to attached listeners.
     */
    firePressButton1(
      /**
       * Parameters to pass along with the event
       */
      mParameters?: object
    ): this;
    /**
     * Fires event {@link #event:pressButton2 pressButton2} to attached listeners.
     */
    firePressButton2(
      /**
       * Parameters to pass along with the event
       */
      mParameters?: object
    ): this;
    /**
     * Fires event {@link #event:pressNext pressNext} to attached listeners.
     */
    firePressNext(
      /**
       * Parameters to pass along with the event
       */
      mParameters?: object
    ): this;
    /**
     * Fires event {@link #event:pressPrevious pressPrevious} to attached listeners.
     */
    firePressPrevious(
      /**
       * Parameters to pass along with the event
       */
      mParameters?: object
    ): this;
    /**
     * @SINCE 1.34.0
     *
     * Gets current value of property {@link #getAdditionalTextButton0 additionalTextButton0}.
     *
     * Additional text of the first button (normally day)
     */
    getAdditionalTextButton0(): string;
    /**
     * @SINCE 1.34.0
     *
     * Gets current value of property {@link #getAdditionalTextButton1 additionalTextButton1}.
     *
     * Additional text of the second button (normally month)
     */
    getAdditionalTextButton1(): string;
    /**
     * @SINCE 1.34.0
     *
     * Gets current value of property {@link #getAdditionalTextButton2 additionalTextButton2}.
     *
     * Additional text of the third button (normally year)
     */
    getAdditionalTextButton2(): string;
    /**
     * @SINCE 1.32.0
     *
     * Gets current value of property {@link #getAriaLabelButton0 ariaLabelButton0}.
     *
     * aria-label of the first button (normally day)
     */
    getAriaLabelButton0(): string;
    /**
     * Gets current value of property {@link #getAriaLabelButton1 ariaLabelButton1}.
     *
     * aria-label of the second button (normally month)
     */
    getAriaLabelButton1(): string;
    /**
     * Gets current value of property {@link #getAriaLabelButton2 ariaLabelButton2}.
     *
     * aria-label of the third button (normally year)
     */
    getAriaLabelButton2(): string;
    /**
     * Gets current value of property {@link #getEnabledNext enabledNext}.
     *
     * Enables the Next button
     *
     * Default value is `true`.
     */
    getEnabledNext(): boolean;
    /**
     * Gets current value of property {@link #getEnabledPrevious enabledPrevious}.
     *
     * Enables the previous button
     *
     * Default value is `true`.
     */
    getEnabledPrevious(): boolean;
    /**
     * Returns a metadata object for class sap.ui.unified.calendar.Header.
     */
    static getMetadata(): ElementMetadata;
    /**
     * @SINCE 1.32.0
     *
     * Gets current value of property {@link #getTextButton0 textButton0}.
     *
     * Text of the first button (normally day)
     */
    getTextButton0(): string;
    /**
     * Gets current value of property {@link #getTextButton1 textButton1}.
     *
     * Text of the second button (normally month)
     */
    getTextButton1(): string;
    /**
     * Gets current value of property {@link #getTextButton2 textButton2}.
     *
     * Text of the third button (normally year)
     */
    getTextButton2(): string;
    /**
     * @SINCE 1.32.0
     *
     * Gets current value of property {@link #getVisibleButton0 visibleButton0}.
     *
     * If set, the first button will be displayed
     *
     * **Note:** The default is set to false to be compatible to older versions
     *
     * Default value is `false`.
     */
    getVisibleButton0(): boolean;
    /**
     * @SINCE 1.32.0
     *
     * Gets current value of property {@link #getVisibleButton1 visibleButton1}.
     *
     * If set, the second button will be displayed
     *
     * Default value is `true`.
     */
    getVisibleButton1(): boolean;
    /**
     * @SINCE 1.32.0
     *
     * Gets current value of property {@link #getVisibleButton2 visibleButton2}.
     *
     * If set, the third button will be displayed
     *
     * Default value is `true`.
     */
    getVisibleButton2(): boolean;
    /**
     * @SINCE 1.34.0
     *
     * Sets a new value for property {@link #getAdditionalTextButton0 additionalTextButton0}.
     *
     * Additional text of the first button (normally day)
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     */
    setAdditionalTextButton0(
      /**
       * New value for property `additionalTextButton0`
       */
      sAdditionalTextButton0: string
    ): this;
    /**
     * @SINCE 1.34.0
     *
     * Sets a new value for property {@link #getAdditionalTextButton1 additionalTextButton1}.
     *
     * Additional text of the second button (normally month)
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     */
    setAdditionalTextButton1(
      /**
       * New value for property `additionalTextButton1`
       */
      sAdditionalTextButton1: string
    ): this;
    /**
     * @SINCE 1.34.0
     *
     * Sets a new value for property {@link #getAdditionalTextButton2 additionalTextButton2}.
     *
     * Additional text of the third button (normally year)
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     */
    setAdditionalTextButton2(
      /**
       * New value for property `additionalTextButton2`
       */
      sAdditionalTextButton2: string
    ): this;
    /**
     * @SINCE 1.32.0
     *
     * Sets a new value for property {@link #getAriaLabelButton0 ariaLabelButton0}.
     *
     * aria-label of the first button (normally day)
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     */
    setAriaLabelButton0(
      /**
       * New value for property `ariaLabelButton0`
       */
      sAriaLabelButton0: string
    ): this;
    /**
     * Sets a new value for property {@link #getAriaLabelButton1 ariaLabelButton1}.
     *
     * aria-label of the second button (normally month)
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     */
    setAriaLabelButton1(
      /**
       * New value for property `ariaLabelButton1`
       */
      sAriaLabelButton1: string
    ): this;
    /**
     * Sets a new value for property {@link #getAriaLabelButton2 ariaLabelButton2}.
     *
     * aria-label of the third button (normally year)
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     */
    setAriaLabelButton2(
      /**
       * New value for property `ariaLabelButton2`
       */
      sAriaLabelButton2: string
    ): this;
    /**
     * Sets a new value for property {@link #getEnabledNext enabledNext}.
     *
     * Enables the Next button
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `true`.
     */
    setEnabledNext(
      /**
       * New value for property `enabledNext`
       */
      bEnabledNext?: boolean
    ): this;
    /**
     * Sets a new value for property {@link #getEnabledPrevious enabledPrevious}.
     *
     * Enables the previous button
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `true`.
     */
    setEnabledPrevious(
      /**
       * New value for property `enabledPrevious`
       */
      bEnabledPrevious?: boolean
    ): this;
    /**
     * @SINCE 1.32.0
     *
     * Sets a new value for property {@link #getTextButton0 textButton0}.
     *
     * Text of the first button (normally day)
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     */
    setTextButton0(
      /**
       * New value for property `textButton0`
       */
      sTextButton0: string
    ): this;
    /**
     * Sets a new value for property {@link #getTextButton1 textButton1}.
     *
     * Text of the second button (normally month)
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     */
    setTextButton1(
      /**
       * New value for property `textButton1`
       */
      sTextButton1: string
    ): this;
    /**
     * Sets a new value for property {@link #getTextButton2 textButton2}.
     *
     * Text of the third button (normally year)
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     */
    setTextButton2(
      /**
       * New value for property `textButton2`
       */
      sTextButton2: string
    ): this;
    /**
     * @SINCE 1.32.0
     *
     * Sets a new value for property {@link #getVisibleButton0 visibleButton0}.
     *
     * If set, the first button will be displayed
     *
     * **Note:** The default is set to false to be compatible to older versions
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `false`.
     */
    setVisibleButton0(
      /**
       * New value for property `visibleButton0`
       */
      bVisibleButton0?: boolean
    ): this;
    /**
     * @SINCE 1.32.0
     *
     * Sets a new value for property {@link #getVisibleButton1 visibleButton1}.
     *
     * If set, the second button will be displayed
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `true`.
     */
    setVisibleButton1(
      /**
       * New value for property `visibleButton1`
       */
      bVisibleButton1?: boolean
    ): this;
    /**
     * @SINCE 1.32.0
     *
     * Sets a new value for property {@link #getVisibleButton2 visibleButton2}.
     *
     * If set, the third button will be displayed
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `true`.
     */
    setVisibleButton2(
      /**
       * New value for property `visibleButton2`
       */
      bVisibleButton2?: boolean
    ): this;
    /**
     * @SINCE 1.32.0
     *
     * Attaches event handler `fnFunction` to the {@link #event:pressButton0 pressButton0} event of this `sap.ui.unified.calendar.Header`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.unified.calendar.Header` itself.
     *
     * First button pressed (normally day)
     */
    attachPressButton0(
      /**
       * The function to be called when the event occurs
       */
      fnFunction: Function,
      /**
       * Context object to call the event handler with. Defaults to this `sap.ui.unified.calendar.Header` itself
       */
      oListener?: object
    ): this;
    /**
     * Attaches event handler `fnFunction` to the {@link #event:pressButton1 pressButton1} event of this `sap.ui.unified.calendar.Header`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.unified.calendar.Header` itself.
     *
     * Second button pressed (normally month)
     */
    attachPressButton1(
      /**
       * The function to be called when the event occurs
       */
      fnFunction: Function,
      /**
       * Context object to call the event handler with. Defaults to this `sap.ui.unified.calendar.Header` itself
       */
      oListener?: object
    ): this;
    /**
     * Attaches event handler `fnFunction` to the {@link #event:pressButton2 pressButton2} event of this `sap.ui.unified.calendar.Header`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.unified.calendar.Header` itself.
     *
     * Third button pressed (normally year)
     */
    attachPressButton2(
      /**
       * The function to be called when the event occurs
       */
      fnFunction: Function,
      /**
       * Context object to call the event handler with. Defaults to this `sap.ui.unified.calendar.Header` itself
       */
      oListener?: object
    ): this;
    /**
     * Attaches event handler `fnFunction` to the {@link #event:pressNext pressNext} event of this `sap.ui.unified.calendar.Header`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.unified.calendar.Header` itself.
     *
     * Next button pressed
     */
    attachPressNext(
      /**
       * The function to be called when the event occurs
       */
      fnFunction: Function,
      /**
       * Context object to call the event handler with. Defaults to this `sap.ui.unified.calendar.Header` itself
       */
      oListener?: object
    ): this;
    /**
     * Attaches event handler `fnFunction` to the {@link #event:pressPrevious pressPrevious} event of this `sap.ui.unified.calendar.Header`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.unified.calendar.Header` itself.
     *
     * Previous button pressed
     */
    attachPressPrevious(
      /**
       * The function to be called when the event occurs
       */
      fnFunction: Function,
      /**
       * Context object to call the event handler with. Defaults to this `sap.ui.unified.calendar.Header` itself
       */
      oListener?: object
    ): this;
  }

  export interface $HeaderSettings extends $ControlSettings {
    /**
     * @SINCE 1.32.0
     *
     * Text of the first button (normally day)
     */
    textButton0?: string | PropertyBindingInfo;

    /**
     * @SINCE 1.34.0
     *
     * Additional text of the first button (normally day)
     */
    additionalTextButton0?: string | PropertyBindingInfo;

    /**
     * @SINCE 1.32.0
     *
     * aria-label of the first button (normally day)
     */
    ariaLabelButton0?: string | PropertyBindingInfo;

    /**
     * @SINCE 1.32.0
     *
     * If set, the first button will be displayed
     *
     * **Note:** The default is set to false to be compatible to older versions
     */
    visibleButton0?: boolean | PropertyBindingInfo;

    /**
     * Text of the second button (normally month)
     */
    textButton1?: string | PropertyBindingInfo;

    /**
     * @SINCE 1.34.0
     *
     * Additional text of the second button (normally month)
     */
    additionalTextButton1?: string | PropertyBindingInfo;

    /**
     * aria-label of the second button (normally month)
     */
    ariaLabelButton1?: string | PropertyBindingInfo;

    /**
     * @SINCE 1.32.0
     *
     * If set, the second button will be displayed
     */
    visibleButton1?: boolean | PropertyBindingInfo;

    /**
     * Text of the third button (normally year)
     */
    textButton2?: string | PropertyBindingInfo;

    /**
     * @SINCE 1.34.0
     *
     * Additional text of the third button (normally year)
     */
    additionalTextButton2?: string | PropertyBindingInfo;

    /**
     * aria-label of the third button (normally year)
     */
    ariaLabelButton2?: string | PropertyBindingInfo;

    /**
     * @SINCE 1.32.0
     *
     * If set, the third button will be displayed
     */
    visibleButton2?: boolean | PropertyBindingInfo;

    /**
     * Enables the previous button
     */
    enabledPrevious?: boolean | PropertyBindingInfo;

    /**
     * Enables the Next button
     */
    enabledNext?: boolean | PropertyBindingInfo;

    /**
     * Previous button pressed
     */
    pressPrevious?: Function;

    /**
     * Next button pressed
     */
    pressNext?: Function;

    /**
     * @SINCE 1.32.0
     *
     * First button pressed (normally day)
     */
    pressButton0?: Function;

    /**
     * Second button pressed (normally month)
     */
    pressButton1?: Function;

    /**
     * Third button pressed (normally year)
     */
    pressButton2?: Function;
  }
}

declare module "sap/ui/unified/calendar/Month" {
  import { default as Control, $ControlSettings } from "sap/ui/core/Control";

  import { ID, CSSSize } from "sap/ui/core/library";

  import DateRange from "sap/ui/unified/DateRange";

  import DateTypeRange from "sap/ui/unified/DateTypeRange";

  import ElementMetadata from "sap/ui/core/ElementMetadata";

  import CalendarType from "sap/ui/core/CalendarType";

  import CalendarLegend from "sap/ui/unified/CalendarLegend";

  import {
    PropertyBindingInfo,
    AggregationBindingInfo,
  } from "sap/ui/base/ManagedObject";

  /**
   * @SINCE 1.28.0
   *
   * renders a month with ItemNavigation This is used inside the calendar. Not for stand alone usage If used
   * inside the calendar the properties and aggregation are directly taken from the parent (To not duplicate
   * and sync DateRanges and so on...)
   */
  export default class Month extends Control {
    /**
     * Constructor for a new calendar/Month.
     *
     * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated
     * objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description
     * of the syntax of the settings object.
     */
    constructor(
      /**
       * initial settings for the new control
       */
      mSettings?: $MonthSettings
    );
    /**
     * Constructor for a new calendar/Month.
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
      mSettings?: $MonthSettings
    );

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
     * @SINCE 1.38.0
     *
     * Adds some disabledDate to the aggregation {@link #getDisabledDates disabledDates}.
     */
    addDisabledDate(
      /**
       * The disabledDate to add; if empty, nothing is inserted
       */
      oDisabledDate: DateRange
    ): this;
    /**
     * Adds some selectedDate to the aggregation {@link #getSelectedDates selectedDates}.
     */
    addSelectedDate(
      /**
       * The selectedDate to add; if empty, nothing is inserted
       */
      oSelectedDate: DateRange
    ): this;
    /**
     * Adds some specialDate to the aggregation {@link #getSpecialDates specialDates}.
     */
    addSpecialDate(
      /**
       * The specialDate to add; if empty, nothing is inserted
       */
      oSpecialDate: DateTypeRange
    ): this;
    /**
     * Attaches event handler `fnFunction` to the {@link #event:focus focus} event of this `sap.ui.unified.calendar.Month`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.unified.calendar.Month` itself.
     *
     * Date focus changed
     */
    attachFocus(
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
       * Context object to call the event handler with. Defaults to this `sap.ui.unified.calendar.Month` itself
       */
      oListener?: object
    ): this;
    /**
     * Attaches event handler `fnFunction` to the {@link #event:select select} event of this `sap.ui.unified.calendar.Month`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.unified.calendar.Month` itself.
     *
     * Date selection changed
     */
    attachSelect(
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
       * Context object to call the event handler with. Defaults to this `sap.ui.unified.calendar.Month` itself
       */
      oListener?: object
    ): this;
    /**
     * @SINCE 1.60
     *
     * Attaches event handler `fnFunction` to the {@link #event:weekNumberSelect weekNumberSelect} event of
     * this `sap.ui.unified.calendar.Month`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.unified.calendar.Month` itself.
     *
     * Fired when a week number selection is changed. By default, choosing the week number will select the corresponding
     * week. If the week has already been selected, choosing the week number will deselect it.
     *
     * The default behavior can be prevented using the `preventDefault` method.
     *
     * **Note:** Works for Gregorian calendars only and when `intervalSelection` is set to `true`.
     */
    attachWeekNumberSelect(
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
       * Context object to call the event handler with. Defaults to this `sap.ui.unified.calendar.Month` itself
       */
      oListener?: object
    ): this;
    /**
     * checks if a date is focusable in the current rendered output. So if not rendered or in other month it
     * is not focusable.
     */
    checkDateFocusable(
      /**
       * JavaScript date object for focused date.
       */
      oDate: object
    ): boolean;
    /**
     * @SINCE 1.38.0
     *
     * Destroys all the disabledDates in the aggregation {@link #getDisabledDates disabledDates}.
     */
    destroyDisabledDates(): this;
    /**
     * Destroys all the selectedDates in the aggregation {@link #getSelectedDates selectedDates}.
     */
    destroySelectedDates(): this;
    /**
     * Destroys all the specialDates in the aggregation {@link #getSpecialDates specialDates}.
     */
    destroySpecialDates(): this;
    /**
     * Detaches event handler `fnFunction` from the {@link #event:focus focus} event of this `sap.ui.unified.calendar.Month`.
     *
     * The passed function and listener object must match the ones used for event registration.
     */
    detachFocus(
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
     * Detaches event handler `fnFunction` from the {@link #event:select select} event of this `sap.ui.unified.calendar.Month`.
     *
     * The passed function and listener object must match the ones used for event registration.
     */
    detachSelect(
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
     * @SINCE 1.60
     *
     * Detaches event handler `fnFunction` from the {@link #event:weekNumberSelect weekNumberSelect} event of
     * this `sap.ui.unified.calendar.Month`.
     *
     * The passed function and listener object must match the ones used for event registration.
     */
    detachWeekNumberSelect(
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
     * displays the month of a given date without setting the focus
     */
    displayDate(
      /**
       * JavaScript date object for focused date.
       */
      oDate: object
    ): this;
    /**
     * Creates a new subclass of class sap.ui.unified.calendar.Month with name `sClassName` and enriches it
     * with the information contained in `oClassInfo`.
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
      oClassInfo?: sap.ClassInfo<T, Month>,
      /**
       * Constructor function for the metadata object; if not given, it defaults to the metadata implementation
       * used by this class
       */
      FNMetaImpl?: Function
    ): Function;
    /**
     * Fires event {@link #event:focus focus} to attached listeners.
     */
    fireFocus(
      /**
       * Parameters to pass along with the event
       */
      mParameters?: {
        /**
         * focused date
         */
        date?: object;
        /**
         * focused date is in an other month than the displayed one
         */
        otherMonth?: boolean;
        /**
         * focused date is set to the same as before (date in other month clicked)
         */
        restoreOldDate?: boolean;
      }
    ): this;
    /**
     * Fires event {@link #event:select select} to attached listeners.
     */
    fireSelect(
      /**
       * Parameters to pass along with the event
       */
      mParameters?: object
    ): this;
    /**
     * @SINCE 1.60
     *
     * Fires event {@link #event:weekNumberSelect weekNumberSelect} to attached listeners.
     *
     * Listeners may prevent the default action of this event by calling the `preventDefault` method on the
     * event object. The return value of this method indicates whether the default action should be executed.
     */
    fireWeekNumberSelect(
      /**
       * Parameters to pass along with the event
       */
      mParameters?: {
        /**
         * The selected week number.
         */
        weekNumber?: int;
        /**
         * The days of the corresponding week that are selected or deselected.
         *
         * **Note:** Will be set to `null` if that week is being deselected.
         */
        weekDays?: DateRange;
      }
    ): boolean;
    /**
     * Returns array of IDs of the elements which are the current targets of the association {@link #getAriaLabelledBy
     * ariaLabelledBy}.
     */
    getAriaLabelledBy(): ID[];
    /**
     * Gets current value of property {@link #getDate date}.
     *
     * A date as JavaScript Date object. The month including this date is rendered and this date is focused
     * initially (if no other focus is set).
     */
    getDate(): object;
    /**
     * @SINCE 1.38.0
     *
     * Gets content of aggregation {@link #getDisabledDates disabledDates}.
     *
     * Date Ranges for disabled dates
     */
    getDisabledDates(): DateRange[];
    /**
     * @SINCE 1.28.9
     *
     * Gets current value of property {@link #getFirstDayOfWeek firstDayOfWeek}.
     *
     * If set, the first day of the displayed week is this day. Valid values are 0 to 6. If not a valid value
     * is set, the default of the used locale is used.
     *
     * Default value is `-1`.
     */
    getFirstDayOfWeek(): int;
    /**
     * Gets current value of property {@link #getIntervalSelection intervalSelection}.
     *
     * If set, interval selection is allowed
     *
     * Default value is `false`.
     */
    getIntervalSelection(): boolean;
    /**
     * @SINCE 1.38.5
     *
     * ID of the element which is the current target of the association {@link #getLegend legend}, or `null`.
     */
    getLegend(): ID;
    /**
     * Returns a metadata object for class sap.ui.unified.calendar.Month.
     */
    static getMetadata(): ElementMetadata;
    /**
     * @SINCE 1.28.9
     *
     * Gets current value of property {@link #getNonWorkingDays nonWorkingDays}.
     *
     * If set, the provided weekdays are displayed as non-working days. Valid values inside the array are 0
     * to 6. If not set, the weekend defined in the locale settings is displayed as non-working days.
     */
    getNonWorkingDays(): int[];
    /**
     * @SINCE 1.34.0
     *
     * Gets current value of property {@link #getPrimaryCalendarType primaryCalendarType}.
     *
     * If set, the calendar type is used for display. If not set, the calendar type of the global configuration
     * is used.
     */
    getPrimaryCalendarType(): CalendarType | keyof typeof CalendarType;
    /**
     * @SINCE 1.34.0
     *
     * Gets current value of property {@link #getSecondaryCalendarType secondaryCalendarType}.
     *
     * If set, the days are also displayed in this calendar type If not set, the dates are only displayed in
     * the primary calendar type
     */
    getSecondaryCalendarType(): CalendarType | keyof typeof CalendarType;
    /**
     * Gets content of aggregation {@link #getSelectedDates selectedDates}.
     *
     * Date Ranges for selected dates of the DatePicker
     */
    getSelectedDates(): DateRange[];
    /**
     * Gets current value of property {@link #getShowHeader showHeader}.
     *
     * If set, a header with the month name is shown
     *
     * Default value is `false`.
     */
    getShowHeader(): boolean;
    /**
     * @SINCE 1.48
     *
     * Gets current value of property {@link #getShowWeekNumbers showWeekNumbers}.
     *
     * Determines whether the week numbers in the months are displayed.
     *
     * **Note:** For Islamic calendars, the week numbers are not displayed regardless of what is set to this
     * property.
     *
     * Default value is `true`.
     */
    getShowWeekNumbers(): boolean;
    /**
     * Gets current value of property {@link #getSingleSelection singleSelection}.
     *
     * If set, only a single date or interval, if intervalSelection is enabled, can be selected
     *
     * Default value is `true`.
     */
    getSingleSelection(): boolean;
    /**
     * Gets content of aggregation {@link #getSpecialDates specialDates}.
     *
     * `DateRange` with type to visualize special days in the Calendar.
     *
     * **Note:** If one day is assigned to more than one DateTypeRange, only the first one will be used. The
     * only exception is when one of the types is `NonWorking`, then you can have both `NonWorking` and the
     * other type. For example, you can have `NonWorking` + `Type01` but you can't have `Type01` + `Type02`.
     */
    getSpecialDates(): DateTypeRange[];
    /**
     * @SINCE 1.38.0
     *
     * Gets current value of property {@link #getWidth width}.
     *
     * Width of Month
     */
    getWidth(): CSSSize;
    /**
     * @SINCE 1.38.0
     *
     * Checks for the provided `sap.ui.unified.DateRange` in the aggregation {@link #getDisabledDates disabledDates}.
     * and returns its index if found or -1 otherwise.
     */
    indexOfDisabledDate(
      /**
       * The disabledDate whose index is looked for
       */
      oDisabledDate: DateRange
    ): int;
    /**
     * Checks for the provided `sap.ui.unified.DateRange` in the aggregation {@link #getSelectedDates selectedDates}.
     * and returns its index if found or -1 otherwise.
     */
    indexOfSelectedDate(
      /**
       * The selectedDate whose index is looked for
       */
      oSelectedDate: DateRange
    ): int;
    /**
     * Checks for the provided `sap.ui.unified.DateTypeRange` in the aggregation {@link #getSpecialDates specialDates}.
     * and returns its index if found or -1 otherwise.
     */
    indexOfSpecialDate(
      /**
       * The specialDate whose index is looked for
       */
      oSpecialDate: DateTypeRange
    ): int;
    /**
     * @SINCE 1.38.0
     *
     * Inserts a disabledDate into the aggregation {@link #getDisabledDates disabledDates}.
     */
    insertDisabledDate(
      /**
       * The disabledDate to insert; if empty, nothing is inserted
       */
      oDisabledDate: DateRange,
      /**
       * The `0`-based index the disabledDate should be inserted at; for a negative value of `iIndex`, the disabledDate
       * is inserted at position 0; for a value greater than the current size of the aggregation, the disabledDate
       * is inserted at the last position
       */
      iIndex: int
    ): this;
    /**
     * Inserts a selectedDate into the aggregation {@link #getSelectedDates selectedDates}.
     */
    insertSelectedDate(
      /**
       * The selectedDate to insert; if empty, nothing is inserted
       */
      oSelectedDate: DateRange,
      /**
       * The `0`-based index the selectedDate should be inserted at; for a negative value of `iIndex`, the selectedDate
       * is inserted at position 0; for a value greater than the current size of the aggregation, the selectedDate
       * is inserted at the last position
       */
      iIndex: int
    ): this;
    /**
     * Inserts a specialDate into the aggregation {@link #getSpecialDates specialDates}.
     */
    insertSpecialDate(
      /**
       * The specialDate to insert; if empty, nothing is inserted
       */
      oSpecialDate: DateTypeRange,
      /**
       * The `0`-based index the specialDate should be inserted at; for a negative value of `iIndex`, the specialDate
       * is inserted at position 0; for a value greater than the current size of the aggregation, the specialDate
       * is inserted at the last position
       */
      iIndex: int
    ): this;
    /**
     * Removes all the controls in the association named {@link #getAriaLabelledBy ariaLabelledBy}.
     */
    removeAllAriaLabelledBy(): ID[];
    /**
     * @SINCE 1.38.0
     *
     * Removes all the controls from the aggregation {@link #getDisabledDates disabledDates}.
     *
     * Additionally, it unregisters them from the hosting UIArea.
     */
    removeAllDisabledDates(): DateRange[];
    /**
     * Removes all the controls from the aggregation {@link #getSelectedDates selectedDates}.
     *
     * Additionally, it unregisters them from the hosting UIArea.
     */
    removeAllSelectedDates(): DateRange[];
    /**
     * Removes all the controls from the aggregation {@link #getSpecialDates specialDates}.
     *
     * Additionally, it unregisters them from the hosting UIArea.
     */
    removeAllSpecialDates(): DateTypeRange[];
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
     * @SINCE 1.38.0
     *
     * Removes a disabledDate from the aggregation {@link #getDisabledDates disabledDates}.
     */
    removeDisabledDate(
      /**
       * The disabledDate to remove or its index or id
       */
      vDisabledDate: int | string | DateRange
    ): DateRange;
    /**
     * Removes a selectedDate from the aggregation {@link #getSelectedDates selectedDates}.
     */
    removeSelectedDate(
      /**
       * The selectedDate to remove or its index or id
       */
      vSelectedDate: int | string | DateRange
    ): DateRange;
    /**
     * Removes a specialDate from the aggregation {@link #getSpecialDates specialDates}.
     */
    removeSpecialDate(
      /**
       * The specialDate to remove or its index or id
       */
      vSpecialDate: int | string | DateTypeRange
    ): DateTypeRange;
    /**
     * Sets a new value for property {@link #getDate date}.
     *
     * A date as JavaScript Date object. The month including this date is rendered and this date is focused
     * initially (if no other focus is set).
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     */
    setDate(
      /**
       * New value for property `date`
       */
      oDate: object
    ): this;
    /**
     * @SINCE 1.28.9
     *
     * Sets a new value for property {@link #getFirstDayOfWeek firstDayOfWeek}.
     *
     * If set, the first day of the displayed week is this day. Valid values are 0 to 6. If not a valid value
     * is set, the default of the used locale is used.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `-1`.
     */
    setFirstDayOfWeek(
      /**
       * New value for property `firstDayOfWeek`
       */
      iFirstDayOfWeek?: int
    ): this;
    /**
     * Sets a new value for property {@link #getIntervalSelection intervalSelection}.
     *
     * If set, interval selection is allowed
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `false`.
     */
    setIntervalSelection(
      /**
       * New value for property `intervalSelection`
       */
      bIntervalSelection?: boolean
    ): this;
    /**
     * @SINCE 1.38.5
     *
     * Sets the associated {@link #getLegend legend}.
     */
    setLegend(
      /**
       * ID of an element which becomes the new target of this legend association; alternatively, an element instance
       * may be given
       */
      oLegend: ID | CalendarLegend
    ): this;
    /**
     * @SINCE 1.28.9
     *
     * Sets a new value for property {@link #getNonWorkingDays nonWorkingDays}.
     *
     * If set, the provided weekdays are displayed as non-working days. Valid values inside the array are 0
     * to 6. If not set, the weekend defined in the locale settings is displayed as non-working days.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     */
    setNonWorkingDays(
      /**
       * New value for property `nonWorkingDays`
       */
      sNonWorkingDays?: int[]
    ): this;
    /**
     * @SINCE 1.34.0
     *
     * Sets a new value for property {@link #getPrimaryCalendarType primaryCalendarType}.
     *
     * If set, the calendar type is used for display. If not set, the calendar type of the global configuration
     * is used.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     */
    setPrimaryCalendarType(
      /**
       * New value for property `primaryCalendarType`
       */
      sPrimaryCalendarType: CalendarType | keyof typeof CalendarType
    ): this;
    /**
     * @SINCE 1.34.0
     *
     * Sets a new value for property {@link #getSecondaryCalendarType secondaryCalendarType}.
     *
     * If set, the days are also displayed in this calendar type If not set, the dates are only displayed in
     * the primary calendar type
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     */
    setSecondaryCalendarType(
      /**
       * New value for property `secondaryCalendarType`
       */
      sSecondaryCalendarType: CalendarType | keyof typeof CalendarType
    ): this;
    /**
     * Sets a new value for property {@link #getShowHeader showHeader}.
     *
     * If set, a header with the month name is shown
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `false`.
     */
    setShowHeader(
      /**
       * New value for property `showHeader`
       */
      bShowHeader?: boolean
    ): this;
    /**
     * @SINCE 1.48
     *
     * Sets a new value for property {@link #getShowWeekNumbers showWeekNumbers}.
     *
     * Determines whether the week numbers in the months are displayed.
     *
     * **Note:** For Islamic calendars, the week numbers are not displayed regardless of what is set to this
     * property.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `true`.
     */
    setShowWeekNumbers(
      /**
       * New value for property `showWeekNumbers`
       */
      bShowWeekNumbers?: boolean
    ): this;
    /**
     * Sets a new value for property {@link #getSingleSelection singleSelection}.
     *
     * If set, only a single date or interval, if intervalSelection is enabled, can be selected
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `true`.
     */
    setSingleSelection(
      /**
       * New value for property `singleSelection`
       */
      bSingleSelection?: boolean
    ): this;
    /**
     * @SINCE 1.38.0
     *
     * Sets a new value for property {@link #getWidth width}.
     *
     * Width of Month
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     */
    setWidth(
      /**
       * New value for property `width`
       */
      sWidth?: CSSSize
    ): this;
    /**
     * Attaches event handler `fnFunction` to the {@link #event:focus focus} event of this `sap.ui.unified.calendar.Month`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.unified.calendar.Month` itself.
     *
     * Date focus changed
     */
    attachFocus(
      /**
       * The function to be called when the event occurs
       */
      fnFunction: Function,
      /**
       * Context object to call the event handler with. Defaults to this `sap.ui.unified.calendar.Month` itself
       */
      oListener?: object
    ): this;
    /**
     * Attaches event handler `fnFunction` to the {@link #event:select select} event of this `sap.ui.unified.calendar.Month`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.unified.calendar.Month` itself.
     *
     * Date selection changed
     */
    attachSelect(
      /**
       * The function to be called when the event occurs
       */
      fnFunction: Function,
      /**
       * Context object to call the event handler with. Defaults to this `sap.ui.unified.calendar.Month` itself
       */
      oListener?: object
    ): this;
    /**
     * @SINCE 1.60
     *
     * Attaches event handler `fnFunction` to the {@link #event:weekNumberSelect weekNumberSelect} event of
     * this `sap.ui.unified.calendar.Month`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.unified.calendar.Month` itself.
     *
     * Fired when a week number selection is changed. By default, choosing the week number will select the corresponding
     * week. If the week has already been selected, choosing the week number will deselect it.
     *
     * The default behavior can be prevented using the `preventDefault` method.
     *
     * **Note:** Works for Gregorian calendars only and when `intervalSelection` is set to `true`.
     */
    attachWeekNumberSelect(
      /**
       * The function to be called when the event occurs
       */
      fnFunction: Function,
      /**
       * Context object to call the event handler with. Defaults to this `sap.ui.unified.calendar.Month` itself
       */
      oListener?: object
    ): this;
  }

  export interface $MonthSettings extends $ControlSettings {
    /**
     * A date as JavaScript Date object. The month including this date is rendered and this date is focused
     * initially (if no other focus is set).
     */
    date?: object | PropertyBindingInfo;

    /**
     * If set, interval selection is allowed
     */
    intervalSelection?: boolean | PropertyBindingInfo;

    /**
     * If set, only a single date or interval, if intervalSelection is enabled, can be selected
     */
    singleSelection?: boolean | PropertyBindingInfo;

    /**
     * If set, a header with the month name is shown
     */
    showHeader?: boolean | PropertyBindingInfo;

    /**
     * @SINCE 1.28.9
     *
     * If set, the first day of the displayed week is this day. Valid values are 0 to 6. If not a valid value
     * is set, the default of the used locale is used.
     */
    firstDayOfWeek?: int | PropertyBindingInfo;

    /**
     * @SINCE 1.28.9
     *
     * If set, the provided weekdays are displayed as non-working days. Valid values inside the array are 0
     * to 6. If not set, the weekend defined in the locale settings is displayed as non-working days.
     */
    nonWorkingDays?: int[] | PropertyBindingInfo;

    /**
     * @SINCE 1.34.0
     *
     * If set, the calendar type is used for display. If not set, the calendar type of the global configuration
     * is used.
     */
    primaryCalendarType?:
      | (CalendarType | keyof typeof CalendarType)
      | PropertyBindingInfo;

    /**
     * @SINCE 1.34.0
     *
     * If set, the days are also displayed in this calendar type If not set, the dates are only displayed in
     * the primary calendar type
     */
    secondaryCalendarType?:
      | (CalendarType | keyof typeof CalendarType)
      | PropertyBindingInfo;

    /**
     * @SINCE 1.38.0
     *
     * Width of Month
     */
    width?: CSSSize | PropertyBindingInfo;

    /**
     * @SINCE 1.48
     *
     * Determines whether the week numbers in the months are displayed.
     *
     * **Note:** For Islamic calendars, the week numbers are not displayed regardless of what is set to this
     * property.
     */
    showWeekNumbers?: boolean | PropertyBindingInfo;

    /**
     * Date Ranges for selected dates of the DatePicker
     */
    selectedDates?: DateRange[] | DateRange | AggregationBindingInfo;

    /**
     * `DateRange` with type to visualize special days in the Calendar.
     *
     * **Note:** If one day is assigned to more than one DateTypeRange, only the first one will be used. The
     * only exception is when one of the types is `NonWorking`, then you can have both `NonWorking` and the
     * other type. For example, you can have `NonWorking` + `Type01` but you can't have `Type01` + `Type02`.
     */
    specialDates?: DateTypeRange[] | DateTypeRange | AggregationBindingInfo;

    /**
     * @SINCE 1.38.0
     *
     * Date Ranges for disabled dates
     */
    disabledDates?: DateRange[] | DateRange | AggregationBindingInfo;

    /**
     * Association to controls / ids which label this control (see WAI-ARIA attribute aria-labelledby).
     */
    ariaLabelledBy?: Array<Control | string>;

    /**
     * @SINCE 1.38.5
     *
     * Association to the `CalendarLegend` explaining the colors of the `specialDates`.
     *
     * **Note** The legend does not have to be rendered but must exist, and all required types must be assigned.
     */
    legend?: CalendarLegend | string;

    /**
     * Date selection changed
     */
    select?: Function;

    /**
     * Date focus changed
     */
    focus?: Function;

    /**
     * @SINCE 1.60
     *
     * Fired when a week number selection is changed. By default, choosing the week number will select the corresponding
     * week. If the week has already been selected, choosing the week number will deselect it.
     *
     * The default behavior can be prevented using the `preventDefault` method.
     *
     * **Note:** Works for Gregorian calendars only and when `intervalSelection` is set to `true`.
     */
    weekNumberSelect?: Function;
  }
}

declare module "sap/ui/unified/calendar/MonthPicker" {
  import { default as Control, $ControlSettings } from "sap/ui/core/Control";

  import DateRange from "sap/ui/unified/DateRange";

  import ElementMetadata from "sap/ui/core/ElementMetadata";

  import CalendarType from "sap/ui/core/CalendarType";

  import {
    PropertyBindingInfo,
    AggregationBindingInfo,
  } from "sap/ui/base/ManagedObject";

  /**
   * @SINCE 1.28.0
   *
   * renders a MonthPicker with ItemNavigation This is used inside the calendar. Not for stand alone usage
   */
  export default class MonthPicker extends Control {
    /**
     * Constructor for a new MonthPicker.
     *
     * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated
     * objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description
     * of the syntax of the settings object.
     */
    constructor(
      /**
       * initial settings for the new control
       */
      mSettings?: $MonthPickerSettings
    );
    /**
     * Constructor for a new MonthPicker.
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
      mSettings?: $MonthPickerSettings
    );

    /**
     * @SINCE 1.74
     *
     * Adds some selectedDate to the aggregation {@link #getSelectedDates selectedDates}.
     */
    addSelectedDate(
      /**
       * The selectedDate to add; if empty, nothing is inserted
       */
      oSelectedDate: DateRange
    ): this;
    /**
     * @SINCE 1.38.0
     *
     * Attaches event handler `fnFunction` to the {@link #event:pageChange pageChange} event of this `sap.ui.unified.calendar.MonthPicker`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.unified.calendar.MonthPicker` itself.
     *
     * If less than 12 months are displayed the `pageChange` event is fired if the displayed months are changed
     * by user navigation.
     */
    attachPageChange(
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
       * Context object to call the event handler with. Defaults to this `sap.ui.unified.calendar.MonthPicker`
       * itself
       */
      oListener?: object
    ): this;
    /**
     * Attaches event handler `fnFunction` to the {@link #event:select select} event of this `sap.ui.unified.calendar.MonthPicker`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.unified.calendar.MonthPicker` itself.
     *
     * Month selection changed
     */
    attachSelect(
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
       * Context object to call the event handler with. Defaults to this `sap.ui.unified.calendar.MonthPicker`
       * itself
       */
      oListener?: object
    ): this;
    /**
     * @SINCE 1.74
     *
     * Destroys all the selectedDates in the aggregation {@link #getSelectedDates selectedDates}.
     */
    destroySelectedDates(): this;
    /**
     * @SINCE 1.38.0
     *
     * Detaches event handler `fnFunction` from the {@link #event:pageChange pageChange} event of this `sap.ui.unified.calendar.MonthPicker`.
     *
     * The passed function and listener object must match the ones used for event registration.
     */
    detachPageChange(
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
     * Detaches event handler `fnFunction` from the {@link #event:select select} event of this `sap.ui.unified.calendar.MonthPicker`.
     *
     * The passed function and listener object must match the ones used for event registration.
     */
    detachSelect(
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
     * Creates a new subclass of class sap.ui.unified.calendar.MonthPicker with name `sClassName` and enriches
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
      oClassInfo?: sap.ClassInfo<T, MonthPicker>,
      /**
       * Constructor function for the metadata object; if not given, it defaults to the metadata implementation
       * used by this class
       */
      FNMetaImpl?: Function
    ): Function;
    /**
     * @SINCE 1.38.0
     *
     * Fires event {@link #event:pageChange pageChange} to attached listeners.
     */
    firePageChange(
      /**
       * Parameters to pass along with the event
       */
      mParameters?: object
    ): this;
    /**
     * Fires event {@link #event:select select} to attached listeners.
     */
    fireSelect(
      /**
       * Parameters to pass along with the event
       */
      mParameters?: object
    ): this;
    /**
     * @SINCE 1.30.0
     *
     * Gets current value of property {@link #getColumns columns}.
     *
     * number of months in each row The value must be between 0 and 12 (0 means just to have all months in one
     * row, independent of the number)
     *
     * Default value is `3`.
     */
    getColumns(): int;
    /**
     * @SINCE 1.74
     *
     * Gets current value of property {@link #getIntervalSelection intervalSelection}.
     *
     * If set, interval selection is allowed
     *
     * Default value is `false`.
     */
    getIntervalSelection(): boolean;
    /**
     * Returns a metadata object for class sap.ui.unified.calendar.MonthPicker.
     */
    static getMetadata(): ElementMetadata;
    /**
     * Gets current value of property {@link #getMonth month}.
     *
     * The month is initial focused and selected The value must be between 0 and 11
     *
     * Default value is `0`.
     */
    getMonth(): int;
    /**
     * @SINCE 1.30.0
     *
     * Gets current value of property {@link #getMonths months}.
     *
     * number of displayed months The value must be between 1 and 12
     *
     * Default value is `12`.
     */
    getMonths(): int;
    /**
     * @SINCE 1.34.0
     *
     * Gets current value of property {@link #getPrimaryCalendarType primaryCalendarType}.
     *
     * If set, the calendar type is used for display. If not set, the calendar type of the global configuration
     * is used.
     */
    getPrimaryCalendarType(): CalendarType | keyof typeof CalendarType;
    /**
     * @SINCE 1.74
     *
     * Gets content of aggregation {@link #getSelectedDates selectedDates}.
     *
     * Date Ranges for selected dates of the MonthPicker
     */
    getSelectedDates(): DateRange[];
    /**
     * @SINCE 1.74
     *
     * Checks for the provided `sap.ui.unified.DateRange` in the aggregation {@link #getSelectedDates selectedDates}.
     * and returns its index if found or -1 otherwise.
     */
    indexOfSelectedDate(
      /**
       * The selectedDate whose index is looked for
       */
      oSelectedDate: DateRange
    ): int;
    /**
     * @SINCE 1.74
     *
     * Inserts a selectedDate into the aggregation {@link #getSelectedDates selectedDates}.
     */
    insertSelectedDate(
      /**
       * The selectedDate to insert; if empty, nothing is inserted
       */
      oSelectedDate: DateRange,
      /**
       * The `0`-based index the selectedDate should be inserted at; for a negative value of `iIndex`, the selectedDate
       * is inserted at position 0; for a value greater than the current size of the aggregation, the selectedDate
       * is inserted at the last position
       */
      iIndex: int
    ): this;
    /**
     * displays the next page
     */
    nextPage(): this;
    /**
     * displays the previous page
     */
    previousPage(): this;
    /**
     * @SINCE 1.74
     *
     * Removes all the controls from the aggregation {@link #getSelectedDates selectedDates}.
     *
     * Additionally, it unregisters them from the hosting UIArea.
     */
    removeAllSelectedDates(): DateRange[];
    /**
     * @SINCE 1.74
     *
     * Removes a selectedDate from the aggregation {@link #getSelectedDates selectedDates}.
     */
    removeSelectedDate(
      /**
       * The selectedDate to remove or its index or id
       */
      vSelectedDate: int | string | DateRange
    ): DateRange;
    /**
     * @SINCE 1.30.0
     *
     * Sets a new value for property {@link #getColumns columns}.
     *
     * number of months in each row The value must be between 0 and 12 (0 means just to have all months in one
     * row, independent of the number)
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `3`.
     */
    setColumns(
      /**
       * New value for property `columns`
       */
      iColumns?: int
    ): this;
    /**
     * @SINCE 1.74
     *
     * Sets a new value for property {@link #getIntervalSelection intervalSelection}.
     *
     * If set, interval selection is allowed
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `false`.
     */
    setIntervalSelection(
      /**
       * New value for property `intervalSelection`
       */
      bIntervalSelection?: boolean
    ): this;
    /**
     * sets a minimum and maximum month
     */
    setMinMax(
      /**
       * minimum month as integer (starting with 0)
       */
      iMin?: int,
      /**
       * maximum month as integer (starting with 0)
       */
      iMax?: int
    ): this;
    /**
     * Sets a new value for property {@link #getMonth month}.
     *
     * The month is initial focused and selected The value must be between 0 and 11
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `0`.
     */
    setMonth(
      /**
       * New value for property `month`
       */
      iMonth?: int
    ): this;
    /**
     * @SINCE 1.30.0
     *
     * Sets a new value for property {@link #getMonths months}.
     *
     * number of displayed months The value must be between 1 and 12
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `12`.
     */
    setMonths(
      /**
       * New value for property `months`
       */
      iMonths?: int
    ): this;
    /**
     * @SINCE 1.34.0
     *
     * Sets a new value for property {@link #getPrimaryCalendarType primaryCalendarType}.
     *
     * If set, the calendar type is used for display. If not set, the calendar type of the global configuration
     * is used.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     */
    setPrimaryCalendarType(
      /**
       * New value for property `primaryCalendarType`
       */
      sPrimaryCalendarType: CalendarType | keyof typeof CalendarType
    ): this;
    /**
     * @SINCE 1.38.0
     *
     * Attaches event handler `fnFunction` to the {@link #event:pageChange pageChange} event of this `sap.ui.unified.calendar.MonthPicker`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.unified.calendar.MonthPicker` itself.
     *
     * If less than 12 months are displayed the `pageChange` event is fired if the displayed months are changed
     * by user navigation.
     */
    attachPageChange(
      /**
       * The function to be called when the event occurs
       */
      fnFunction: Function,
      /**
       * Context object to call the event handler with. Defaults to this `sap.ui.unified.calendar.MonthPicker`
       * itself
       */
      oListener?: object
    ): this;
    /**
     * Attaches event handler `fnFunction` to the {@link #event:select select} event of this `sap.ui.unified.calendar.MonthPicker`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.unified.calendar.MonthPicker` itself.
     *
     * Month selection changed
     */
    attachSelect(
      /**
       * The function to be called when the event occurs
       */
      fnFunction: Function,
      /**
       * Context object to call the event handler with. Defaults to this `sap.ui.unified.calendar.MonthPicker`
       * itself
       */
      oListener?: object
    ): this;
  }

  export interface $MonthPickerSettings extends $ControlSettings {
    /**
     * The month is initial focused and selected The value must be between 0 and 11
     */
    month?: int | PropertyBindingInfo;

    /**
     * @SINCE 1.30.0
     *
     * number of displayed months The value must be between 1 and 12
     */
    months?: int | PropertyBindingInfo;

    /**
     * @SINCE 1.74
     *
     * If set, interval selection is allowed
     */
    intervalSelection?: boolean | PropertyBindingInfo;

    /**
     * @SINCE 1.30.0
     *
     * number of months in each row The value must be between 0 and 12 (0 means just to have all months in one
     * row, independent of the number)
     */
    columns?: int | PropertyBindingInfo;

    /**
     * @SINCE 1.34.0
     *
     * If set, the calendar type is used for display. If not set, the calendar type of the global configuration
     * is used.
     */
    primaryCalendarType?:
      | (CalendarType | keyof typeof CalendarType)
      | PropertyBindingInfo;

    /**
     * @SINCE 1.74
     *
     * Date Ranges for selected dates of the MonthPicker
     */
    selectedDates?: DateRange[] | DateRange | AggregationBindingInfo;

    /**
     * Month selection changed
     */
    select?: Function;

    /**
     * @SINCE 1.38.0
     *
     * If less than 12 months are displayed the `pageChange` event is fired if the displayed months are changed
     * by user navigation.
     */
    pageChange?: Function;
  }
}

declare module "sap/ui/unified/calendar/MonthsRow" {
  import { default as Control, $ControlSettings } from "sap/ui/core/Control";

  import { ID } from "sap/ui/core/library";

  import DateRange from "sap/ui/unified/DateRange";

  import DateTypeRange from "sap/ui/unified/DateTypeRange";

  import ElementMetadata from "sap/ui/core/ElementMetadata";

  import CalendarLegend from "sap/ui/unified/CalendarLegend";

  import {
    PropertyBindingInfo,
    AggregationBindingInfo,
  } from "sap/ui/base/ManagedObject";

  /**
   * @SINCE 1.32.0
   *
   * Renders a row of months using ItemNavigation. There is no paging or navigation outside the rendered area
   * implemented. This is done inside the CalendarMonthInterval. If used inside the CalendarMonthInterval
   * the properties and aggregation are directly taken from the parent (to not duplicate and synchronize DateRanges
   * and so on...).
   *
   * The MontsRow works with JavaScript Date objects, but only the month and the year are used to display
   * and interact. As representation for a month, the 1st of the month will always be returned in the API.
   */
  export default class MonthsRow extends Control {
    /**
     * Constructor for a new `MonthsRow`. It shows a calendar with month granularity
     *
     * **Note:** This is used inside the CalendarMonthInterval, not for standalone usage.
     *
     * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated
     * objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description
     * of the syntax of the settings object.
     */
    constructor(
      /**
       * Initial settings for the new control
       */
      mSettings?: $MonthsRowSettings
    );
    /**
     * Constructor for a new `MonthsRow`. It shows a calendar with month granularity
     *
     * **Note:** This is used inside the CalendarMonthInterval, not for standalone usage.
     *
     * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated
     * objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description
     * of the syntax of the settings object.
     */
    constructor(
      /**
       * ID for the new control, generated automatically if no ID is given
       */
      sId?: string,
      /**
       * Initial settings for the new control
       */
      mSettings?: $MonthsRowSettings
    );

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
     * Adds some selectedDate to the aggregation {@link #getSelectedDates selectedDates}.
     */
    addSelectedDate(
      /**
       * The selectedDate to add; if empty, nothing is inserted
       */
      oSelectedDate: DateRange
    ): this;
    /**
     * Adds some specialDate to the aggregation {@link #getSpecialDates specialDates}.
     */
    addSpecialDate(
      /**
       * The specialDate to add; if empty, nothing is inserted
       */
      oSpecialDate: DateTypeRange
    ): this;
    /**
     * Attaches event handler `fnFunction` to the {@link #event:focus focus} event of this `sap.ui.unified.calendar.MonthsRow`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.unified.calendar.MonthsRow` itself.
     *
     * Month focus changed
     */
    attachFocus(
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
       * Context object to call the event handler with. Defaults to this `sap.ui.unified.calendar.MonthsRow` itself
       */
      oListener?: object
    ): this;
    /**
     * Attaches event handler `fnFunction` to the {@link #event:select select} event of this `sap.ui.unified.calendar.MonthsRow`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.unified.calendar.MonthsRow` itself.
     *
     * Month selection changed
     */
    attachSelect(
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
       * Context object to call the event handler with. Defaults to this `sap.ui.unified.calendar.MonthsRow` itself
       */
      oListener?: object
    ): this;
    /**
     * Checks if a date is focusable in the current rendered output. This means that if it is not rendered,
     * it is not focusable.
     */
    checkDateFocusable(
      /**
       * JavaScript Date object for focused date.
       */
      oDateTime: object
    ): boolean;
    /**
     * Destroys all the selectedDates in the aggregation {@link #getSelectedDates selectedDates}.
     */
    destroySelectedDates(): this;
    /**
     * Destroys all the specialDates in the aggregation {@link #getSpecialDates specialDates}.
     */
    destroySpecialDates(): this;
    /**
     * Detaches event handler `fnFunction` from the {@link #event:focus focus} event of this `sap.ui.unified.calendar.MonthsRow`.
     *
     * The passed function and listener object must match the ones used for event registration.
     */
    detachFocus(
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
     * Detaches event handler `fnFunction` from the {@link #event:select select} event of this `sap.ui.unified.calendar.MonthsRow`.
     *
     * The passed function and listener object must match the ones used for event registration.
     */
    detachSelect(
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
     * Displays the month of a given date without setting the focus
     */
    displayDate(
      /**
       * JavaScript Date object for focused date.
       */
      oDate: object
    ): this;
    /**
     * Creates a new subclass of class sap.ui.unified.calendar.MonthsRow with name `sClassName` and enriches
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
      oClassInfo?: sap.ClassInfo<T, MonthsRow>,
      /**
       * Constructor function for the metadata object; if not given, it defaults to the metadata implementation
       * used by this class
       */
      FNMetaImpl?: Function
    ): Function;
    /**
     * Fires event {@link #event:focus focus} to attached listeners.
     */
    fireFocus(
      /**
       * Parameters to pass along with the event
       */
      mParameters?: {
        /**
         * First date, as JavaScript Date object, of the month that is focused.
         */
        date?: object;
        /**
         * If set, the focused date is not rendered yet. (This happens by navigating out of the visible area.)
         */
        notVisible?: boolean;
      }
    ): this;
    /**
     * Fires event {@link #event:select select} to attached listeners.
     */
    fireSelect(
      /**
       * Parameters to pass along with the event
       */
      mParameters?: object
    ): this;
    /**
     * Returns array of IDs of the elements which are the current targets of the association {@link #getAriaLabelledBy
     * ariaLabelledBy}.
     */
    getAriaLabelledBy(): ID[];
    /**
     * Gets current value of property {@link #getDate date}.
     *
     * A date as JavaScript Date object. The month including this date is rendered and this date is focused
     * initially (if no other focus is set). If the date property is not in the range `startDate` + `months`
     * in the rendering phase, it is set to the `startDate`. So after setting the `startDate` the date should
     * be set to be in the visible range.
     */
    getDate(): object;
    /**
     * Gets current value of property {@link #getIntervalSelection intervalSelection}.
     *
     * If set, interval selection is allowed
     *
     * Default value is `false`.
     */
    getIntervalSelection(): boolean;
    /**
     * @SINCE 1.38.5
     *
     * ID of the element which is the current target of the association {@link #getLegend legend}, or `null`.
     */
    getLegend(): ID;
    /**
     * Returns a metadata object for class sap.ui.unified.calendar.MonthsRow.
     */
    static getMetadata(): ElementMetadata;
    /**
     * Gets current value of property {@link #getMonths months}.
     *
     * Number of months displayed
     *
     * Default value is `12`.
     */
    getMonths(): int;
    /**
     * Gets content of aggregation {@link #getSelectedDates selectedDates}.
     *
     * Date ranges for selected dates. If `singleSelection` is set, only the first entry is used.
     *
     * **Note:** Even if only one day is selected, the whole corresponding month is selected.
     */
    getSelectedDates(): DateRange[];
    /**
     * Gets current value of property {@link #getShowHeader showHeader}.
     *
     * If set, a header with the years is shown to visualize what month belongs to what year.
     *
     * Default value is `false`.
     */
    getShowHeader(): boolean;
    /**
     * Gets current value of property {@link #getSingleSelection singleSelection}.
     *
     * If set, only a single month or interval, if intervalSelection is enabled, can be selected
     *
     * **Note:** Selection of multiple intervals is not supported in the current version.
     *
     * Default value is `true`.
     */
    getSingleSelection(): boolean;
    /**
     * Gets content of aggregation {@link #getSpecialDates specialDates}.
     *
     * Date ranges with type to visualize special months in the row. If one day is assigned to more than one
     * type, only the first one will be used.
     *
     * **Note:** Even if only one day is set as a special day, the whole corresponding month is displayed in
     * this way.
     */
    getSpecialDates(): DateTypeRange[];
    /**
     * Gets current value of property {@link #getStartDate startDate}.
     *
     * Start date, as JavaScript Date object, of the row. The month of this date is the first month of the displayed
     * row.
     */
    getStartDate(): object;
    /**
     * Checks for the provided `sap.ui.unified.DateRange` in the aggregation {@link #getSelectedDates selectedDates}.
     * and returns its index if found or -1 otherwise.
     */
    indexOfSelectedDate(
      /**
       * The selectedDate whose index is looked for
       */
      oSelectedDate: DateRange
    ): int;
    /**
     * Checks for the provided `sap.ui.unified.DateTypeRange` in the aggregation {@link #getSpecialDates specialDates}.
     * and returns its index if found or -1 otherwise.
     */
    indexOfSpecialDate(
      /**
       * The specialDate whose index is looked for
       */
      oSpecialDate: DateTypeRange
    ): int;
    /**
     * Inserts a selectedDate into the aggregation {@link #getSelectedDates selectedDates}.
     */
    insertSelectedDate(
      /**
       * The selectedDate to insert; if empty, nothing is inserted
       */
      oSelectedDate: DateRange,
      /**
       * The `0`-based index the selectedDate should be inserted at; for a negative value of `iIndex`, the selectedDate
       * is inserted at position 0; for a value greater than the current size of the aggregation, the selectedDate
       * is inserted at the last position
       */
      iIndex: int
    ): this;
    /**
     * Inserts a specialDate into the aggregation {@link #getSpecialDates specialDates}.
     */
    insertSpecialDate(
      /**
       * The specialDate to insert; if empty, nothing is inserted
       */
      oSpecialDate: DateTypeRange,
      /**
       * The `0`-based index the specialDate should be inserted at; for a negative value of `iIndex`, the specialDate
       * is inserted at position 0; for a value greater than the current size of the aggregation, the specialDate
       * is inserted at the last position
       */
      iIndex: int
    ): this;
    /**
     * Removes all the controls in the association named {@link #getAriaLabelledBy ariaLabelledBy}.
     */
    removeAllAriaLabelledBy(): ID[];
    /**
     * Removes all the controls from the aggregation {@link #getSelectedDates selectedDates}.
     *
     * Additionally, it unregisters them from the hosting UIArea.
     */
    removeAllSelectedDates(): DateRange[];
    /**
     * Removes all the controls from the aggregation {@link #getSpecialDates specialDates}.
     *
     * Additionally, it unregisters them from the hosting UIArea.
     */
    removeAllSpecialDates(): DateTypeRange[];
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
     * Removes a selectedDate from the aggregation {@link #getSelectedDates selectedDates}.
     */
    removeSelectedDate(
      /**
       * The selectedDate to remove or its index or id
       */
      vSelectedDate: int | string | DateRange
    ): DateRange;
    /**
     * Removes a specialDate from the aggregation {@link #getSpecialDates specialDates}.
     */
    removeSpecialDate(
      /**
       * The specialDate to remove or its index or id
       */
      vSpecialDate: int | string | DateTypeRange
    ): DateTypeRange;
    /**
     * Sets a new value for property {@link #getIntervalSelection intervalSelection}.
     *
     * If set, interval selection is allowed
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `false`.
     */
    setIntervalSelection(
      /**
       * New value for property `intervalSelection`
       */
      bIntervalSelection?: boolean
    ): this;
    /**
     * @SINCE 1.38.5
     *
     * Sets the associated {@link #getLegend legend}.
     */
    setLegend(
      /**
       * ID of an element which becomes the new target of this legend association; alternatively, an element instance
       * may be given
       */
      oLegend: ID | CalendarLegend
    ): this;
    /**
     * Sets a new value for property {@link #getMonths months}.
     *
     * Number of months displayed
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `12`.
     */
    setMonths(
      /**
       * New value for property `months`
       */
      iMonths?: int
    ): this;
    /**
     * Sets a new value for property {@link #getShowHeader showHeader}.
     *
     * If set, a header with the years is shown to visualize what month belongs to what year.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `false`.
     */
    setShowHeader(
      /**
       * New value for property `showHeader`
       */
      bShowHeader?: boolean
    ): this;
    /**
     * Sets a new value for property {@link #getSingleSelection singleSelection}.
     *
     * If set, only a single month or interval, if intervalSelection is enabled, can be selected
     *
     * **Note:** Selection of multiple intervals is not supported in the current version.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `true`.
     */
    setSingleSelection(
      /**
       * New value for property `singleSelection`
       */
      bSingleSelection?: boolean
    ): this;
    /**
     * Sets a new value for property {@link #getStartDate startDate}.
     *
     * Start date, as JavaScript Date object, of the row. The month of this date is the first month of the displayed
     * row.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     */
    setStartDate(
      /**
       * New value for property `startDate`
       */
      oStartDate: object
    ): this;
    /**
     * Attaches event handler `fnFunction` to the {@link #event:focus focus} event of this `sap.ui.unified.calendar.MonthsRow`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.unified.calendar.MonthsRow` itself.
     *
     * Month focus changed
     */
    attachFocus(
      /**
       * The function to be called when the event occurs
       */
      fnFunction: Function,
      /**
       * Context object to call the event handler with. Defaults to this `sap.ui.unified.calendar.MonthsRow` itself
       */
      oListener?: object
    ): this;
    /**
     * Attaches event handler `fnFunction` to the {@link #event:select select} event of this `sap.ui.unified.calendar.MonthsRow`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.unified.calendar.MonthsRow` itself.
     *
     * Month selection changed
     */
    attachSelect(
      /**
       * The function to be called when the event occurs
       */
      fnFunction: Function,
      /**
       * Context object to call the event handler with. Defaults to this `sap.ui.unified.calendar.MonthsRow` itself
       */
      oListener?: object
    ): this;
  }

  export interface $MonthsRowSettings extends $ControlSettings {
    /**
     * A date as JavaScript Date object. The month including this date is rendered and this date is focused
     * initially (if no other focus is set). If the date property is not in the range `startDate` + `months`
     * in the rendering phase, it is set to the `startDate`. So after setting the `startDate` the date should
     * be set to be in the visible range.
     */
    date?: object | PropertyBindingInfo;

    /**
     * Start date, as JavaScript Date object, of the row. The month of this date is the first month of the displayed
     * row.
     */
    startDate?: object | PropertyBindingInfo;

    /**
     * Number of months displayed
     */
    months?: int | PropertyBindingInfo;

    /**
     * If set, interval selection is allowed
     */
    intervalSelection?: boolean | PropertyBindingInfo;

    /**
     * If set, only a single month or interval, if intervalSelection is enabled, can be selected
     *
     * **Note:** Selection of multiple intervals is not supported in the current version.
     */
    singleSelection?: boolean | PropertyBindingInfo;

    /**
     * If set, a header with the years is shown to visualize what month belongs to what year.
     */
    showHeader?: boolean | PropertyBindingInfo;

    /**
     * Date ranges for selected dates. If `singleSelection` is set, only the first entry is used.
     *
     * **Note:** Even if only one day is selected, the whole corresponding month is selected.
     */
    selectedDates?: DateRange[] | DateRange | AggregationBindingInfo;

    /**
     * Date ranges with type to visualize special months in the row. If one day is assigned to more than one
     * type, only the first one will be used.
     *
     * **Note:** Even if only one day is set as a special day, the whole corresponding month is displayed in
     * this way.
     */
    specialDates?: DateTypeRange[] | DateTypeRange | AggregationBindingInfo;

    /**
     * Association to controls / IDs which label this control (see WAI-ARIA attribute aria-labelledby).
     */
    ariaLabelledBy?: Array<Control | string>;

    /**
     * @SINCE 1.38.5
     *
     * Association to the `CalendarLegend` explaining the colors of the `specialDates`.
     *
     * **Note** The legend does not have to be rendered but must exist, and all required types must be assigned.
     */
    legend?: CalendarLegend | string;

    /**
     * Month selection changed
     */
    select?: Function;

    /**
     * Month focus changed
     */
    focus?: Function;
  }
}

declare module "sap/ui/unified/calendar/TimesRow" {
  import { default as Control, $ControlSettings } from "sap/ui/core/Control";

  import { ID } from "sap/ui/core/library";

  import DateRange from "sap/ui/unified/DateRange";

  import DateTypeRange from "sap/ui/unified/DateTypeRange";

  import ElementMetadata from "sap/ui/core/ElementMetadata";

  import CalendarLegend from "sap/ui/unified/CalendarLegend";

  import {
    PropertyBindingInfo,
    AggregationBindingInfo,
  } from "sap/ui/base/ManagedObject";

  /**
   * @SINCE 1.32.0
   *
   * Renders a row of time items using ItemNavigation. There is no paging or navigation outside the rendered
   * area implemented. This is done inside the CalendarTimeInterval. If used inside the CalendarTimeInterval
   * the properties and aggregation are directly taken from the parent (to not duplicate and synchronize DateRanges
   * and so on...).
   *
   * The TimesRow works with JavaScript Date objects.
   */
  export default class TimesRow extends Control {
    /**
     * Constructor for a new `TimesRow`. It shows a calendar with time granularity (normally hours)
     *
     * **Note:** This is used inside the CalendarTimeInterval, not for standalone usage.
     *
     * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated
     * objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description
     * of the syntax of the settings object.
     */
    constructor(
      /**
       * Initial settings for the new control
       */
      mSettings?: $TimesRowSettings
    );
    /**
     * Constructor for a new `TimesRow`. It shows a calendar with time granularity (normally hours)
     *
     * **Note:** This is used inside the CalendarTimeInterval, not for standalone usage.
     *
     * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated
     * objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description
     * of the syntax of the settings object.
     */
    constructor(
      /**
       * ID for the new control, generated automatically if no ID is given
       */
      sId?: string,
      /**
       * Initial settings for the new control
       */
      mSettings?: $TimesRowSettings
    );

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
     * Adds some selectedDate to the aggregation {@link #getSelectedDates selectedDates}.
     */
    addSelectedDate(
      /**
       * The selectedDate to add; if empty, nothing is inserted
       */
      oSelectedDate: DateRange
    ): this;
    /**
     * Adds some specialDate to the aggregation {@link #getSpecialDates specialDates}.
     */
    addSpecialDate(
      /**
       * The specialDate to add; if empty, nothing is inserted
       */
      oSpecialDate: DateTypeRange
    ): this;
    /**
     * Attaches event handler `fnFunction` to the {@link #event:focus focus} event of this `sap.ui.unified.calendar.TimesRow`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.unified.calendar.TimesRow` itself.
     *
     * Time focus changed
     */
    attachFocus(
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
       * Context object to call the event handler with. Defaults to this `sap.ui.unified.calendar.TimesRow` itself
       */
      oListener?: object
    ): this;
    /**
     * Attaches event handler `fnFunction` to the {@link #event:select select} event of this `sap.ui.unified.calendar.TimesRow`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.unified.calendar.TimesRow` itself.
     *
     * Time selection changed
     */
    attachSelect(
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
       * Context object to call the event handler with. Defaults to this `sap.ui.unified.calendar.TimesRow` itself
       */
      oListener?: object
    ): this;
    /**
     * Checks if a date is focusable in the current rendered output. This means that if it is not rendered,
     * it is not focusable.
     */
    checkDateFocusable(
      /**
       * JavaScript Date object for focused date.
       */
      oDate: object
    ): boolean;
    /**
     * Destroys all the selectedDates in the aggregation {@link #getSelectedDates selectedDates}.
     */
    destroySelectedDates(): this;
    /**
     * Destroys all the specialDates in the aggregation {@link #getSpecialDates specialDates}.
     */
    destroySpecialDates(): this;
    /**
     * Detaches event handler `fnFunction` from the {@link #event:focus focus} event of this `sap.ui.unified.calendar.TimesRow`.
     *
     * The passed function and listener object must match the ones used for event registration.
     */
    detachFocus(
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
     * Detaches event handler `fnFunction` from the {@link #event:select select} event of this `sap.ui.unified.calendar.TimesRow`.
     *
     * The passed function and listener object must match the ones used for event registration.
     */
    detachSelect(
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
     * Displays the given date without setting the focus
     */
    displayDate(
      /**
       * JavaScript Date object for focused date.
       */
      oDate: object
    ): this;
    /**
     * Creates a new subclass of class sap.ui.unified.calendar.TimesRow with name `sClassName` and enriches
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
      oClassInfo?: sap.ClassInfo<T, TimesRow>,
      /**
       * Constructor function for the metadata object; if not given, it defaults to the metadata implementation
       * used by this class
       */
      FNMetaImpl?: Function
    ): Function;
    /**
     * Fires event {@link #event:focus focus} to attached listeners.
     */
    fireFocus(
      /**
       * Parameters to pass along with the event
       */
      mParameters?: {
        /**
         * date, as JavaScript Date object, of the focused time.
         */
        date?: object;
        /**
         * If set, the focused date is not rendered yet. (This happens by navigating out of the visible area.)
         */
        notVisible?: boolean;
      }
    ): this;
    /**
     * Fires event {@link #event:select select} to attached listeners.
     */
    fireSelect(
      /**
       * Parameters to pass along with the event
       */
      mParameters?: object
    ): this;
    /**
     * Returns array of IDs of the elements which are the current targets of the association {@link #getAriaLabelledBy
     * ariaLabelledBy}.
     */
    getAriaLabelledBy(): ID[];
    /**
     * Gets current value of property {@link #getDate date}.
     *
     * A date as JavaScript Date object. The month including this date is rendered and this date is focused
     * initially (if no other focus is set). If the date property is not in the range `startDate` + `items`
     * in the rendering phase, it is set to the `startDate`. So after setting the `startDate` the date should
     * be set to be in the visible range.
     */
    getDate(): object;
    /**
     * Gets current value of property {@link #getIntervalMinutes intervalMinutes}.
     *
     * Size of on time interval in minutes, default is 60 minutes.
     *
     * **Note:** the start of the interval calculation is always `startDat` at 00:00.
     *
     * An interval longer than 720 minutes is not allowed. Please use the `DatesRow` instead.
     *
     * A day must be divisible by this interval size. One interval must not include more than one day.
     *
     * Default value is `60`.
     */
    getIntervalMinutes(): int;
    /**
     * Gets current value of property {@link #getIntervalSelection intervalSelection}.
     *
     * If set, interval selection is allowed
     *
     * Default value is `false`.
     */
    getIntervalSelection(): boolean;
    /**
     * Gets current value of property {@link #getItems items}.
     *
     * Number of time items displayed
     *
     * Default value is `12`.
     */
    getItems(): int;
    /**
     * @SINCE 1.38.5
     *
     * ID of the element which is the current target of the association {@link #getLegend legend}, or `null`.
     */
    getLegend(): ID;
    /**
     * Returns a metadata object for class sap.ui.unified.calendar.TimesRow.
     */
    static getMetadata(): ElementMetadata;
    /**
     * Gets content of aggregation {@link #getSelectedDates selectedDates}.
     *
     * Date ranges for selected dates. If `singleSelection` is set, only the first entry is used.
     */
    getSelectedDates(): DateRange[];
    /**
     * Gets current value of property {@link #getShowHeader showHeader}.
     *
     * If set, a header with the years is shown to visualize what month belongs to what year.
     *
     * Default value is `false`.
     */
    getShowHeader(): boolean;
    /**
     * Gets current value of property {@link #getSingleSelection singleSelection}.
     *
     * If set, only a single month or interval, if intervalSelection is enabled, can be selected
     *
     * **Note:** Selection of multiple intervals is not supported in the current version.
     *
     * Default value is `true`.
     */
    getSingleSelection(): boolean;
    /**
     * Gets content of aggregation {@link #getSpecialDates specialDates}.
     *
     * Date ranges with type to visualize special item in the row. If one day is assigned to more than one type,
     * only the first one will be used.
     */
    getSpecialDates(): DateTypeRange[];
    /**
     * Gets current value of property {@link #getStartDate startDate}.
     *
     * Start date, as JavaScript Date object, of the row.
     */
    getStartDate(): object;
    /**
     * Checks for the provided `sap.ui.unified.DateRange` in the aggregation {@link #getSelectedDates selectedDates}.
     * and returns its index if found or -1 otherwise.
     */
    indexOfSelectedDate(
      /**
       * The selectedDate whose index is looked for
       */
      oSelectedDate: DateRange
    ): int;
    /**
     * Checks for the provided `sap.ui.unified.DateTypeRange` in the aggregation {@link #getSpecialDates specialDates}.
     * and returns its index if found or -1 otherwise.
     */
    indexOfSpecialDate(
      /**
       * The specialDate whose index is looked for
       */
      oSpecialDate: DateTypeRange
    ): int;
    /**
     * Inserts a selectedDate into the aggregation {@link #getSelectedDates selectedDates}.
     */
    insertSelectedDate(
      /**
       * The selectedDate to insert; if empty, nothing is inserted
       */
      oSelectedDate: DateRange,
      /**
       * The `0`-based index the selectedDate should be inserted at; for a negative value of `iIndex`, the selectedDate
       * is inserted at position 0; for a value greater than the current size of the aggregation, the selectedDate
       * is inserted at the last position
       */
      iIndex: int
    ): this;
    /**
     * Inserts a specialDate into the aggregation {@link #getSpecialDates specialDates}.
     */
    insertSpecialDate(
      /**
       * The specialDate to insert; if empty, nothing is inserted
       */
      oSpecialDate: DateTypeRange,
      /**
       * The `0`-based index the specialDate should be inserted at; for a negative value of `iIndex`, the specialDate
       * is inserted at position 0; for a value greater than the current size of the aggregation, the specialDate
       * is inserted at the last position
       */
      iIndex: int
    ): this;
    /**
     * Removes all the controls in the association named {@link #getAriaLabelledBy ariaLabelledBy}.
     */
    removeAllAriaLabelledBy(): ID[];
    /**
     * Removes all the controls from the aggregation {@link #getSelectedDates selectedDates}.
     *
     * Additionally, it unregisters them from the hosting UIArea.
     */
    removeAllSelectedDates(): DateRange[];
    /**
     * Removes all the controls from the aggregation {@link #getSpecialDates specialDates}.
     *
     * Additionally, it unregisters them from the hosting UIArea.
     */
    removeAllSpecialDates(): DateTypeRange[];
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
     * Removes a selectedDate from the aggregation {@link #getSelectedDates selectedDates}.
     */
    removeSelectedDate(
      /**
       * The selectedDate to remove or its index or id
       */
      vSelectedDate: int | string | DateRange
    ): DateRange;
    /**
     * Removes a specialDate from the aggregation {@link #getSpecialDates specialDates}.
     */
    removeSpecialDate(
      /**
       * The specialDate to remove or its index or id
       */
      vSpecialDate: int | string | DateTypeRange
    ): DateTypeRange;
    /**
     * Sets a new value for property {@link #getDate date}.
     *
     * A date as JavaScript Date object. The month including this date is rendered and this date is focused
     * initially (if no other focus is set). If the date property is not in the range `startDate` + `items`
     * in the rendering phase, it is set to the `startDate`. So after setting the `startDate` the date should
     * be set to be in the visible range.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     */
    setDate(
      /**
       * New value for property `date`
       */
      oDate: object
    ): this;
    /**
     * Sets a new value for property {@link #getIntervalMinutes intervalMinutes}.
     *
     * Size of on time interval in minutes, default is 60 minutes.
     *
     * **Note:** the start of the interval calculation is always `startDat` at 00:00.
     *
     * An interval longer than 720 minutes is not allowed. Please use the `DatesRow` instead.
     *
     * A day must be divisible by this interval size. One interval must not include more than one day.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `60`.
     */
    setIntervalMinutes(
      /**
       * New value for property `intervalMinutes`
       */
      iIntervalMinutes?: int
    ): this;
    /**
     * Sets a new value for property {@link #getIntervalSelection intervalSelection}.
     *
     * If set, interval selection is allowed
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `false`.
     */
    setIntervalSelection(
      /**
       * New value for property `intervalSelection`
       */
      bIntervalSelection?: boolean
    ): this;
    /**
     * Sets a new value for property {@link #getItems items}.
     *
     * Number of time items displayed
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `12`.
     */
    setItems(
      /**
       * New value for property `items`
       */
      iItems?: int
    ): this;
    /**
     * @SINCE 1.38.5
     *
     * Sets the associated {@link #getLegend legend}.
     */
    setLegend(
      /**
       * ID of an element which becomes the new target of this legend association; alternatively, an element instance
       * may be given
       */
      oLegend: ID | CalendarLegend
    ): this;
    /**
     * Sets a new value for property {@link #getShowHeader showHeader}.
     *
     * If set, a header with the years is shown to visualize what month belongs to what year.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `false`.
     */
    setShowHeader(
      /**
       * New value for property `showHeader`
       */
      bShowHeader?: boolean
    ): this;
    /**
     * Sets a new value for property {@link #getSingleSelection singleSelection}.
     *
     * If set, only a single month or interval, if intervalSelection is enabled, can be selected
     *
     * **Note:** Selection of multiple intervals is not supported in the current version.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `true`.
     */
    setSingleSelection(
      /**
       * New value for property `singleSelection`
       */
      bSingleSelection?: boolean
    ): this;
    /**
     * Sets a new value for property {@link #getStartDate startDate}.
     *
     * Start date, as JavaScript Date object, of the row.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     */
    setStartDate(
      /**
       * New value for property `startDate`
       */
      oStartDate: object
    ): this;
    /**
     * Attaches event handler `fnFunction` to the {@link #event:focus focus} event of this `sap.ui.unified.calendar.TimesRow`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.unified.calendar.TimesRow` itself.
     *
     * Time focus changed
     */
    attachFocus(
      /**
       * The function to be called when the event occurs
       */
      fnFunction: Function,
      /**
       * Context object to call the event handler with. Defaults to this `sap.ui.unified.calendar.TimesRow` itself
       */
      oListener?: object
    ): this;
    /**
     * Attaches event handler `fnFunction` to the {@link #event:select select} event of this `sap.ui.unified.calendar.TimesRow`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.unified.calendar.TimesRow` itself.
     *
     * Time selection changed
     */
    attachSelect(
      /**
       * The function to be called when the event occurs
       */
      fnFunction: Function,
      /**
       * Context object to call the event handler with. Defaults to this `sap.ui.unified.calendar.TimesRow` itself
       */
      oListener?: object
    ): this;
  }

  export interface $TimesRowSettings extends $ControlSettings {
    /**
     * A date as JavaScript Date object. The month including this date is rendered and this date is focused
     * initially (if no other focus is set). If the date property is not in the range `startDate` + `items`
     * in the rendering phase, it is set to the `startDate`. So after setting the `startDate` the date should
     * be set to be in the visible range.
     */
    date?: object | PropertyBindingInfo;

    /**
     * Start date, as JavaScript Date object, of the row.
     */
    startDate?: object | PropertyBindingInfo;

    /**
     * Number of time items displayed
     */
    items?: int | PropertyBindingInfo;

    /**
     * Size of on time interval in minutes, default is 60 minutes.
     *
     * **Note:** the start of the interval calculation is always `startDat` at 00:00.
     *
     * An interval longer than 720 minutes is not allowed. Please use the `DatesRow` instead.
     *
     * A day must be divisible by this interval size. One interval must not include more than one day.
     */
    intervalMinutes?: int | PropertyBindingInfo;

    /**
     * If set, interval selection is allowed
     */
    intervalSelection?: boolean | PropertyBindingInfo;

    /**
     * If set, only a single month or interval, if intervalSelection is enabled, can be selected
     *
     * **Note:** Selection of multiple intervals is not supported in the current version.
     */
    singleSelection?: boolean | PropertyBindingInfo;

    /**
     * If set, a header with the years is shown to visualize what month belongs to what year.
     */
    showHeader?: boolean | PropertyBindingInfo;

    /**
     * Date ranges for selected dates. If `singleSelection` is set, only the first entry is used.
     */
    selectedDates?: DateRange[] | DateRange | AggregationBindingInfo;

    /**
     * Date ranges with type to visualize special item in the row. If one day is assigned to more than one type,
     * only the first one will be used.
     */
    specialDates?: DateTypeRange[] | DateTypeRange | AggregationBindingInfo;

    /**
     * Association to controls / IDs which label this control (see WAI-ARIA attribute aria-labelledby).
     */
    ariaLabelledBy?: Array<Control | string>;

    /**
     * @SINCE 1.38.5
     *
     * Association to the `CalendarLegend` explaining the colors of the `specialDates`.
     *
     * **Note** The legend does not have to be rendered but must exist, and all required types must be assigned.
     */
    legend?: CalendarLegend | string;

    /**
     * Time selection changed
     */
    select?: Function;

    /**
     * Time focus changed
     */
    focus?: Function;
  }
}

declare module "sap/ui/unified/calendar/YearPicker" {
  import { default as Control, $ControlSettings } from "sap/ui/core/Control";

  import DateRange from "sap/ui/unified/DateRange";

  import ElementMetadata from "sap/ui/core/ElementMetadata";

  import CalendarType from "sap/ui/core/CalendarType";

  import {
    PropertyBindingInfo,
    AggregationBindingInfo,
  } from "sap/ui/base/ManagedObject";

  /**
   * @SINCE 1.28.0
   *
   * renders a YearPicker with ItemNavigation This is used inside the calendar. Not for stand alone usage.
   * As in all date-time controls, all pubic JS Date objects that are given (e.g. `setDate()`) or read (e.g.
   * `getFirstRenderedDate`) with values which are considered as date objects in browser(local) timezone.
   */
  export default class YearPicker extends Control {
    /**
     * Constructor for a new YearPicker.
     *
     * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated
     * objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description
     * of the syntax of the settings object.
     */
    constructor(
      /**
       * initial settings for the new control
       */
      mSettings?: $YearPickerSettings
    );
    /**
     * Constructor for a new YearPicker.
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
      mSettings?: $YearPickerSettings
    );

    /**
     * @SINCE 1.74
     *
     * Adds some selectedDate to the aggregation {@link #getSelectedDates selectedDates}.
     */
    addSelectedDate(
      /**
       * The selectedDate to add; if empty, nothing is inserted
       */
      oSelectedDate: DateRange
    ): this;
    /**
     * @SINCE 1.38.0
     *
     * Attaches event handler `fnFunction` to the {@link #event:pageChange pageChange} event of this `sap.ui.unified.calendar.YearPicker`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.unified.calendar.YearPicker` itself.
     *
     * The `pageChange` event is fired if the displayed years are changed by user navigation.
     */
    attachPageChange(
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
       * Context object to call the event handler with. Defaults to this `sap.ui.unified.calendar.YearPicker`
       * itself
       */
      oListener?: object
    ): this;
    /**
     * Attaches event handler `fnFunction` to the {@link #event:select select} event of this `sap.ui.unified.calendar.YearPicker`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.unified.calendar.YearPicker` itself.
     *
     * Year selection changed
     */
    attachSelect(
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
       * Context object to call the event handler with. Defaults to this `sap.ui.unified.calendar.YearPicker`
       * itself
       */
      oListener?: object
    ): this;
    /**
     * @SINCE 1.74
     *
     * Destroys all the selectedDates in the aggregation {@link #getSelectedDates selectedDates}.
     */
    destroySelectedDates(): this;
    /**
     * @SINCE 1.38.0
     *
     * Detaches event handler `fnFunction` from the {@link #event:pageChange pageChange} event of this `sap.ui.unified.calendar.YearPicker`.
     *
     * The passed function and listener object must match the ones used for event registration.
     */
    detachPageChange(
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
     * Detaches event handler `fnFunction` from the {@link #event:select select} event of this `sap.ui.unified.calendar.YearPicker`.
     *
     * The passed function and listener object must match the ones used for event registration.
     */
    detachSelect(
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
     * Creates a new subclass of class sap.ui.unified.calendar.YearPicker with name `sClassName` and enriches
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
      oClassInfo?: sap.ClassInfo<T, YearPicker>,
      /**
       * Constructor function for the metadata object; if not given, it defaults to the metadata implementation
       * used by this class
       */
      FNMetaImpl?: Function
    ): Function;
    /**
     * @SINCE 1.38.0
     *
     * Fires event {@link #event:pageChange pageChange} to attached listeners.
     */
    firePageChange(
      /**
       * Parameters to pass along with the event
       */
      mParameters?: object
    ): this;
    /**
     * Fires event {@link #event:select select} to attached listeners.
     */
    fireSelect(
      /**
       * Parameters to pass along with the event
       */
      mParameters?: object
    ): this;
    /**
     * @SINCE 1.30.0
     *
     * Gets current value of property {@link #getColumns columns}.
     *
     * number of years in each row 0 means just to have all years in one row, independent of the number
     *
     * Default value is `4`.
     */
    getColumns(): int;
    /**
     * @SINCE 1.34.0
     *
     * Gets current value of property {@link #getDate date}.
     *
     * Date as JavaScript Date object. For this date a `YearPicker` is rendered. If a Year is selected the date
     * is updated with the start date of the selected year (depending on the calendar type).
     */
    getDate(): object;
    /**
     * @SINCE 1.38.0
     *
     * return the first date of the first rendered year **Note:** If the YearPicker is not rendered no date
     * is returned
     */
    getFirstRenderedDate(): object;
    /**
     * @SINCE 1.74
     *
     * Gets current value of property {@link #getIntervalSelection intervalSelection}.
     *
     * If set, interval selection is allowed
     *
     * Default value is `false`.
     */
    getIntervalSelection(): boolean;
    /**
     * Returns a metadata object for class sap.ui.unified.calendar.YearPicker.
     */
    static getMetadata(): ElementMetadata;
    /**
     * @SINCE 1.34.0
     *
     * Gets current value of property {@link #getPrimaryCalendarType primaryCalendarType}.
     *
     * If set, the calendar type is used for display. If not set, the calendar type of the global configuration
     * is used.
     */
    getPrimaryCalendarType(): CalendarType | keyof typeof CalendarType;
    /**
     * @SINCE 1.74
     *
     * Gets content of aggregation {@link #getSelectedDates selectedDates}.
     *
     * Date Ranges for selected dates of the YearPicker
     */
    getSelectedDates(): DateRange[];
    /**
     * @deprecated (since 1.34.0) - replaced by `date` property
     *
     * Gets current value of property {@link #getYear year}.
     *
     * The year is initial focused and selected The value must be between 0 and 9999
     *
     * Default value is `2000`.
     */
    getYear(): int;
    /**
     * @SINCE 1.30.0
     *
     * Gets current value of property {@link #getYears years}.
     *
     * number of displayed years
     *
     * Default value is `20`.
     */
    getYears(): int;
    /**
     * @SINCE 1.74
     *
     * Checks for the provided `sap.ui.unified.DateRange` in the aggregation {@link #getSelectedDates selectedDates}.
     * and returns its index if found or -1 otherwise.
     */
    indexOfSelectedDate(
      /**
       * The selectedDate whose index is looked for
       */
      oSelectedDate: DateRange
    ): int;
    /**
     * @SINCE 1.74
     *
     * Inserts a selectedDate into the aggregation {@link #getSelectedDates selectedDates}.
     */
    insertSelectedDate(
      /**
       * The selectedDate to insert; if empty, nothing is inserted
       */
      oSelectedDate: DateRange,
      /**
       * The `0`-based index the selectedDate should be inserted at; for a negative value of `iIndex`, the selectedDate
       * is inserted at position 0; for a value greater than the current size of the aggregation, the selectedDate
       * is inserted at the last position
       */
      iIndex: int
    ): this;
    /**
     * displays the next page
     */
    nextPage(): this;
    /**
     * displays the previous page
     */
    previousPage(): this;
    /**
     * @SINCE 1.74
     *
     * Removes all the controls from the aggregation {@link #getSelectedDates selectedDates}.
     *
     * Additionally, it unregisters them from the hosting UIArea.
     */
    removeAllSelectedDates(): DateRange[];
    /**
     * @SINCE 1.74
     *
     * Removes a selectedDate from the aggregation {@link #getSelectedDates selectedDates}.
     */
    removeSelectedDate(
      /**
       * The selectedDate to remove or its index or id
       */
      vSelectedDate: int | string | DateRange
    ): DateRange;
    /**
     * @SINCE 1.30.0
     *
     * Sets a new value for property {@link #getColumns columns}.
     *
     * number of years in each row 0 means just to have all years in one row, independent of the number
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `4`.
     */
    setColumns(
      /**
       * New value for property `columns`
       */
      iColumns?: int
    ): this;
    /**
     * @SINCE 1.74
     *
     * Sets a new value for property {@link #getIntervalSelection intervalSelection}.
     *
     * If set, interval selection is allowed
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `false`.
     */
    setIntervalSelection(
      /**
       * New value for property `intervalSelection`
       */
      bIntervalSelection?: boolean
    ): this;
    /**
     * @SINCE 1.34.0
     *
     * Sets a new value for property {@link #getPrimaryCalendarType primaryCalendarType}.
     *
     * If set, the calendar type is used for display. If not set, the calendar type of the global configuration
     * is used.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     */
    setPrimaryCalendarType(
      /**
       * New value for property `primaryCalendarType`
       */
      sPrimaryCalendarType: CalendarType | keyof typeof CalendarType
    ): this;
    /**
     * @deprecated (since 1.34.0) - replaced by `date` property
     *
     * Sets a new value for property {@link #getYear year}.
     *
     * The year is initial focused and selected The value must be between 0 and 9999
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `2000`.
     */
    setYear(
      /**
       * New value for property `year`
       */
      iYear?: int
    ): this;
    /**
     * @SINCE 1.30.0
     *
     * Sets a new value for property {@link #getYears years}.
     *
     * number of displayed years
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `20`.
     */
    setYears(
      /**
       * New value for property `years`
       */
      iYears?: int
    ): this;
    /**
     * @SINCE 1.38.0
     *
     * Attaches event handler `fnFunction` to the {@link #event:pageChange pageChange} event of this `sap.ui.unified.calendar.YearPicker`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.unified.calendar.YearPicker` itself.
     *
     * The `pageChange` event is fired if the displayed years are changed by user navigation.
     */
    attachPageChange(
      /**
       * The function to be called when the event occurs
       */
      fnFunction: Function,
      /**
       * Context object to call the event handler with. Defaults to this `sap.ui.unified.calendar.YearPicker`
       * itself
       */
      oListener?: object
    ): this;
    /**
     * Attaches event handler `fnFunction` to the {@link #event:select select} event of this `sap.ui.unified.calendar.YearPicker`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.unified.calendar.YearPicker` itself.
     *
     * Year selection changed
     */
    attachSelect(
      /**
       * The function to be called when the event occurs
       */
      fnFunction: Function,
      /**
       * Context object to call the event handler with. Defaults to this `sap.ui.unified.calendar.YearPicker`
       * itself
       */
      oListener?: object
    ): this;
  }

  export interface $YearPickerSettings extends $ControlSettings {
    /**
     * @deprecated (since 1.34.0) - replaced by `date` property
     *
     * The year is initial focused and selected The value must be between 0 and 9999
     */
    year?: int | PropertyBindingInfo;

    /**
     * @SINCE 1.30.0
     *
     * number of displayed years
     */
    years?: int | PropertyBindingInfo;

    /**
     * @SINCE 1.74
     *
     * If set, interval selection is allowed
     */
    intervalSelection?: boolean | PropertyBindingInfo;

    /**
     * @SINCE 1.30.0
     *
     * number of years in each row 0 means just to have all years in one row, independent of the number
     */
    columns?: int | PropertyBindingInfo;

    /**
     * @SINCE 1.34.0
     *
     * Date as JavaScript Date object. For this date a `YearPicker` is rendered. If a Year is selected the date
     * is updated with the start date of the selected year (depending on the calendar type).
     */
    date?: object | PropertyBindingInfo;

    /**
     * @SINCE 1.34.0
     *
     * If set, the calendar type is used for display. If not set, the calendar type of the global configuration
     * is used.
     */
    primaryCalendarType?:
      | (CalendarType | keyof typeof CalendarType)
      | PropertyBindingInfo;

    /**
     * @SINCE 1.74
     *
     * Date Ranges for selected dates of the YearPicker
     */
    selectedDates?: DateRange[] | DateRange | AggregationBindingInfo;

    /**
     * Year selection changed
     */
    select?: Function;

    /**
     * @SINCE 1.38.0
     *
     * The `pageChange` event is fired if the displayed years are changed by user navigation.
     */
    pageChange?: Function;
  }
}

declare module "sap/ui/unified/CalendarAppointment" {
  import {
    default as DateTypeRange,
    $DateTypeRangeSettings,
  } from "sap/ui/unified/DateTypeRange";

  import { CSSColor, URI } from "sap/ui/core/library";

  import ElementMetadata from "sap/ui/core/ElementMetadata";

  import { PropertyBindingInfo } from "sap/ui/base/ManagedObject";

  /**
   * @SINCE 1.34.0
   *
   * An appointment for use in a `PlanningCalendar` or similar. The rendering must be done in the Row collecting
   * the appointments. (Because there are different visualizations possible.)
   *
   * Applications could inherit from this element to add own fields.
   */
  export default class CalendarAppointment extends DateTypeRange {
    /**
     * Constructor for a new `CalendarAppointment`.
     *
     * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated
     * objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description
     * of the syntax of the settings object.
     */
    constructor(
      /**
       * Initial settings for the new control
       */
      mSettings?: $CalendarAppointmentSettings
    );
    /**
     * Constructor for a new `CalendarAppointment`.
     *
     * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated
     * objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description
     * of the syntax of the settings object.
     */
    constructor(
      /**
       * ID for the new control, generated automatically if no ID is given
       */
      sId?: string,
      /**
       * Initial settings for the new control
       */
      mSettings?: $CalendarAppointmentSettings
    );

    /**
     * Creates a new subclass of class sap.ui.unified.CalendarAppointment with name `sClassName` and enriches
     * it with the information contained in `oClassInfo`.
     *
     * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.unified.DateTypeRange.extend}.
     */
    static extend<T extends Record<string, unknown>>(
      /**
       * Name of the class being created
       */
      sClassName: string,
      /**
       * Object literal with information about the class
       */
      oClassInfo?: sap.ClassInfo<T, CalendarAppointment>,
      /**
       * Constructor function for the metadata object; if not given, it defaults to the metadata implementation
       * used by this class
       */
      FNMetaImpl?: Function
    ): Function;
    /**
     * @SINCE 1.46.0
     *
     * Gets current value of property {@link #getColor color}.
     *
     * Overrides the color derived from the `type` property. This property will work only with full hex color
     * with pound symbol, e.g.: #FF0000.
     */
    getColor(): CSSColor;
    /**
     * @SINCE 1.81.0
     *
     * Gets current value of property {@link #getDescription description}.
     *
     * Description of the appointment.
     */
    getDescription(): string;
    /**
     * Gets current value of property {@link #getIcon icon}.
     *
     * Icon of the Appointment. (e.g. picture of the person)
     *
     * URI of an image or an icon registered in sap.ui.core.IconPool.
     */
    getIcon(): URI;
    /**
     * Gets current value of property {@link #getKey key}.
     *
     * Can be used as identifier of the appointment
     */
    getKey(): string;
    /**
     * Returns a metadata object for class sap.ui.unified.CalendarAppointment.
     */
    static getMetadata(): ElementMetadata;
    /**
     * Gets current value of property {@link #getSelected selected}.
     *
     * Indicates if the icon is selected.
     *
     * Default value is `false`.
     */
    getSelected(): boolean;
    /**
     * Gets current value of property {@link #getTentative tentative}.
     *
     * Indicates if the icon is tentative.
     *
     * Default value is `false`.
     */
    getTentative(): boolean;
    /**
     * Gets current value of property {@link #getText text}.
     *
     * Text of the appointment.
     */
    getText(): string;
    /**
     * Gets current value of property {@link #getTitle title}.
     *
     * Title of the appointment.
     */
    getTitle(): string;
    /**
     * @SINCE 1.46.0
     *
     * Sets a new value for property {@link #getColor color}.
     *
     * Overrides the color derived from the `type` property. This property will work only with full hex color
     * with pound symbol, e.g.: #FF0000.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     */
    setColor(
      /**
       * New value for property `color`
       */
      sColor?: CSSColor
    ): this;
    /**
     * @SINCE 1.81.0
     *
     * Sets a new value for property {@link #getDescription description}.
     *
     * Description of the appointment.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     */
    setDescription(
      /**
       * New value for property `description`
       */
      sDescription: string
    ): this;
    /**
     * Sets a new value for property {@link #getIcon icon}.
     *
     * Icon of the Appointment. (e.g. picture of the person)
     *
     * URI of an image or an icon registered in sap.ui.core.IconPool.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     */
    setIcon(
      /**
       * New value for property `icon`
       */
      sIcon?: URI
    ): this;
    /**
     * Sets a new value for property {@link #getKey key}.
     *
     * Can be used as identifier of the appointment
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     */
    setKey(
      /**
       * New value for property `key`
       */
      sKey?: string
    ): this;
    /**
     * Sets a new value for property {@link #getSelected selected}.
     *
     * Indicates if the icon is selected.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `false`.
     */
    setSelected(
      /**
       * New value for property `selected`
       */
      bSelected?: boolean
    ): this;
    /**
     * Sets a new value for property {@link #getTentative tentative}.
     *
     * Indicates if the icon is tentative.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `false`.
     */
    setTentative(
      /**
       * New value for property `tentative`
       */
      bTentative?: boolean
    ): this;
    /**
     * Sets a new value for property {@link #getText text}.
     *
     * Text of the appointment.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     */
    setText(
      /**
       * New value for property `text`
       */
      sText: string
    ): this;
    /**
     * Sets a new value for property {@link #getTitle title}.
     *
     * Title of the appointment.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     */
    setTitle(
      /**
       * New value for property `title`
       */
      sTitle: string
    ): this;
  }

  export interface $CalendarAppointmentSettings extends $DateTypeRangeSettings {
    /**
     * Title of the appointment.
     */
    title?: string | PropertyBindingInfo;

    /**
     * Text of the appointment.
     */
    text?: string | PropertyBindingInfo;

    /**
     * @SINCE 1.81.0
     *
     * Description of the appointment.
     */
    description?: string | PropertyBindingInfo;

    /**
     * Icon of the Appointment. (e.g. picture of the person)
     *
     * URI of an image or an icon registered in sap.ui.core.IconPool.
     */
    icon?: URI | PropertyBindingInfo;

    /**
     * Indicates if the icon is tentative.
     */
    tentative?: boolean | PropertyBindingInfo;

    /**
     * Indicates if the icon is selected.
     */
    selected?: boolean | PropertyBindingInfo;

    /**
     * Can be used as identifier of the appointment
     */
    key?: string | PropertyBindingInfo;

    /**
     * @SINCE 1.46.0
     *
     * Overrides the color derived from the `type` property. This property will work only with full hex color
     * with pound symbol, e.g.: #FF0000.
     */
    color?: CSSColor | PropertyBindingInfo;
  }
}

declare module "sap/ui/unified/CalendarDateInterval" {
  import {
    default as Calendar,
    $CalendarSettings,
  } from "sap/ui/unified/Calendar";

  import ElementMetadata from "sap/ui/core/ElementMetadata";

  import { PropertyBindingInfo } from "sap/ui/base/ManagedObject";

  /**
   * @SINCE 1.30.0
   *
   * `CalendarDateInterval` only visualizes the dates in a one-line interval and allows the selection of a
   * single day.
   */
  export default class CalendarDateInterval extends Calendar {
    /**
     * Constructor for a new `CalendarDateInterval`.
     *
     * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated
     * objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description
     * of the syntax of the settings object.
     */
    constructor(
      /**
       * initial settings for the new control
       */
      mSettings?: $CalendarDateIntervalSettings
    );
    /**
     * Constructor for a new `CalendarDateInterval`.
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
      mSettings?: $CalendarDateIntervalSettings
    );

    /**
     * If more than this number of days are displayed, start and end month are displayed on the button.
     */
    _getDaysLarge(): int;
    /**
     * Creates a new subclass of class sap.ui.unified.CalendarDateInterval with name `sClassName` and enriches
     * it with the information contained in `oClassInfo`.
     *
     * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.unified.Calendar.extend}.
     */
    static extend<T extends Record<string, unknown>>(
      /**
       * Name of the class being created
       */
      sClassName: string,
      /**
       * Object literal with information about the class
       */
      oClassInfo?: sap.ClassInfo<T, CalendarDateInterval>,
      /**
       * Constructor function for the metadata object; if not given, it defaults to the metadata implementation
       * used by this class
       */
      FNMetaImpl?: Function
    ): Function;
    /**
     * Gets current value of property {@link #getDays days}.
     *
     * number of days displayed on phones the maximum rendered number of days is 8.
     *
     * Default value is `7`.
     */
    getDays(): int;
    /**
     * Returns a metadata object for class sap.ui.unified.CalendarDateInterval.
     */
    static getMetadata(): ElementMetadata;
    /**
     * @SINCE 1.34.0
     *
     * Gets current value of property {@link #getPickerPopup pickerPopup}.
     *
     * If set, the month- and yearPicker opens on a popup
     *
     * Default value is `false`.
     */
    getPickerPopup(): boolean;
    /**
     * @SINCE 1.34.0
     *
     * Gets current value of property {@link #getShowDayNamesLine showDayNamesLine}.
     *
     * If set the day names are shown in a separate line. If not set the day names are shown inside the single
     * days.
     *
     * Default value is `true`.
     */
    getShowDayNamesLine(): boolean;
    /**
     * Gets current value of property {@link #getStartDate startDate}.
     *
     * Start date of the Interval
     */
    getStartDate(): object;
    /**
     * Sets a new value for property {@link #getDays days}.
     *
     * number of days displayed on phones the maximum rendered number of days is 8.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `7`.
     */
    setDays(
      /**
       * New value for property `days`
       */
      iDays?: int
    ): this;
    /**
     * Setter for property `firstDayOfWeek`.
     *
     * Property `firstDayOfWeek` is not supported in `sap.ui.unified.CalendarDateInterval` control.
     */
    setFirstDayOfWeek(
      /**
       * First day of the week
       */
      iFirstDayOfWeek?: int
    ): this;
    /**
     * Setter for property `months`.
     *
     * Property `months` is not supported in `sap.ui.unified.CalendarDateInterval` control.
     */
    setMonths(
      /**
       * How many months to be displayed
       */
      iMonths: int
    ): this;
    /**
     * @SINCE 1.34.0
     *
     * Sets a new value for property {@link #getPickerPopup pickerPopup}.
     *
     * If set, the month- and yearPicker opens on a popup
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `false`.
     */
    setPickerPopup(
      /**
       * New value for property `pickerPopup`
       */
      bPickerPopup?: boolean
    ): this;
    /**
     * @SINCE 1.34.0
     *
     * Sets a new value for property {@link #getShowDayNamesLine showDayNamesLine}.
     *
     * If set the day names are shown in a separate line. If not set the day names are shown inside the single
     * days.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `true`.
     */
    setShowDayNamesLine(
      /**
       * New value for property `showDayNamesLine`
       */
      bShowDayNamesLine?: boolean
    ): this;
    /**
     * Sets a new value for property {@link #getStartDate startDate}.
     *
     * Start date of the Interval
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     */
    setStartDate(
      /**
       * New value for property `startDate`
       */
      oStartDate: object
    ): this;
  }

  export interface $CalendarDateIntervalSettings extends $CalendarSettings {
    /**
     * Start date of the Interval
     */
    startDate?: object | PropertyBindingInfo;

    /**
     * number of days displayed on phones the maximum rendered number of days is 8.
     */
    days?: int | PropertyBindingInfo;

    /**
     * @SINCE 1.34.0
     *
     * If set the day names are shown in a separate line. If not set the day names are shown inside the single
     * days.
     */
    showDayNamesLine?: boolean | PropertyBindingInfo;

    /**
     * @SINCE 1.34.0
     *
     * If set, the month- and yearPicker opens on a popup
     */
    pickerPopup?: boolean | PropertyBindingInfo;
  }
}

declare module "sap/ui/unified/CalendarLegend" {
  import { default as Control, $ControlSettings } from "sap/ui/core/Control";

  import CalendarLegendItem from "sap/ui/unified/CalendarLegendItem";

  import { CSSSize } from "sap/ui/core/library";

  import ElementMetadata from "sap/ui/core/ElementMetadata";

  import {
    PropertyBindingInfo,
    AggregationBindingInfo,
  } from "sap/ui/base/ManagedObject";

  /**
   * @SINCE 1.24.0
   *
   * A legend for the Calendar Control. Displays special dates colors with their corresponding description.
   * The aggregation specialDates can be set herefor.
   */
  export default class CalendarLegend extends Control {
    /**
     * Constructor for a new CalendarLegend.
     *
     * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated
     * objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description
     * of the syntax of the settings object.
     */
    constructor(
      /**
       * initial settings for the new control
       */
      mSettings?: $CalendarLegendSettings
    );
    /**
     * Constructor for a new CalendarLegend.
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
      mSettings?: $CalendarLegendSettings
    );

    /**
     * Adds some item to the aggregation {@link #getItems items}.
     */
    addItem(
      /**
       * The item to add; if empty, nothing is inserted
       */
      oItem: CalendarLegendItem
    ): this;
    /**
     * Destroys all the items in the aggregation {@link #getItems items}.
     */
    destroyItems(): this;
    /**
     * Creates a new subclass of class sap.ui.unified.CalendarLegend with name `sClassName` and enriches it
     * with the information contained in `oClassInfo`.
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
      oClassInfo?: sap.ClassInfo<T, CalendarLegend>,
      /**
       * Constructor function for the metadata object; if not given, it defaults to the metadata implementation
       * used by this class
       */
      FNMetaImpl?: Function
    ): Function;
    /**
     * Gets current value of property {@link #getColumnWidth columnWidth}.
     *
     * Defines the width of the created columns in which the items are arranged.
     *
     * Default value is `'120px'`.
     */
    getColumnWidth(): CSSSize;
    /**
     * Gets content of aggregation {@link #getItems items}.
     *
     * Items to be displayed.
     */
    getItems(): CalendarLegendItem[];
    /**
     * Returns a metadata object for class sap.ui.unified.CalendarLegend.
     */
    static getMetadata(): ElementMetadata;
    /**
     * @SINCE 1.54
     *
     * Gets current value of property {@link #getStandardItems standardItems}.
     *
     * Determines the standard items related to the calendar days, such as, today, selected, working and non-working.
     * Values must be one of `sap.ui.unified.StandardCalendarLegendItem`. Note: for versions 1.50 and 1.52,
     * this property was defined in the subclass `sap.m.PlanningCalendarLegend`
     *
     * Default value is `['Today', 'Selected', 'WorkingDay', 'NonWorkingDay']`.
     */
    getStandardItems(): string[];
    /**
     * Checks for the provided `sap.ui.unified.CalendarLegendItem` in the aggregation {@link #getItems items}.
     * and returns its index if found or -1 otherwise.
     */
    indexOfItem(
      /**
       * The item whose index is looked for
       */
      oItem: CalendarLegendItem
    ): int;
    /**
     * Inserts a item into the aggregation {@link #getItems items}.
     */
    insertItem(
      /**
       * The item to insert; if empty, nothing is inserted
       */
      oItem: CalendarLegendItem,
      /**
       * The `0`-based index the item should be inserted at; for a negative value of `iIndex`, the item is inserted
       * at position 0; for a value greater than the current size of the aggregation, the item is inserted at
       * the last position
       */
      iIndex: int
    ): this;
    /**
     * Removes all the controls from the aggregation {@link #getItems items}.
     *
     * Additionally, it unregisters them from the hosting UIArea.
     */
    removeAllItems(): CalendarLegendItem[];
    /**
     * Removes a item from the aggregation {@link #getItems items}.
     */
    removeItem(
      /**
       * The item to remove or its index or id
       */
      vItem: int | string | CalendarLegendItem
    ): CalendarLegendItem;
    /**
     * Sets a new value for property {@link #getColumnWidth columnWidth}.
     *
     * Defines the width of the created columns in which the items are arranged.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `'120px'`.
     */
    setColumnWidth(
      /**
       * New value for property `columnWidth`
       */
      sColumnWidth?: CSSSize
    ): this;
    /**
     * @SINCE 1.54
     *
     * Sets a new value for property {@link #getStandardItems standardItems}.
     *
     * Determines the standard items related to the calendar days, such as, today, selected, working and non-working.
     * Values must be one of `sap.ui.unified.StandardCalendarLegendItem`. Note: for versions 1.50 and 1.52,
     * this property was defined in the subclass `sap.m.PlanningCalendarLegend`
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `['Today', 'Selected', 'WorkingDay', 'NonWorkingDay']`.
     */
    setStandardItems(
      /**
       * New value for property `standardItems`
       */
      sStandardItems?: string[]
    ): this;
  }

  export interface $CalendarLegendSettings extends $ControlSettings {
    /**
     * @SINCE 1.54
     *
     * Determines the standard items related to the calendar days, such as, today, selected, working and non-working.
     * Values must be one of `sap.ui.unified.StandardCalendarLegendItem`. Note: for versions 1.50 and 1.52,
     * this property was defined in the subclass `sap.m.PlanningCalendarLegend`
     */
    standardItems?: string[] | PropertyBindingInfo;

    /**
     * Defines the width of the created columns in which the items are arranged.
     */
    columnWidth?: CSSSize | PropertyBindingInfo;

    /**
     * Items to be displayed.
     */
    items?: CalendarLegendItem[] | CalendarLegendItem | AggregationBindingInfo;
  }
}

declare module "sap/ui/unified/CalendarLegendItem" {
  import { default as UI5Element, $ElementSettings } from "sap/ui/core/Element";

  import { CSSColor } from "sap/ui/core/library";

  import ElementMetadata from "sap/ui/core/ElementMetadata";

  import { CalendarDayType } from "sap/ui/unified/library";

  import { PropertyBindingInfo } from "sap/ui/base/ManagedObject";

  /**
   * @SINCE 1.24.0
   *
   * Item to be displayed in a CalendarLegend.
   */
  export default class CalendarLegendItem extends UI5Element {
    /**
     * Constructor for a new CalendarLegendItem.
     *
     * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated
     * objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description
     * of the syntax of the settings object.
     */
    constructor(
      /**
       * initial settings for the new control
       */
      mSettings?: $CalendarLegendItemSettings
    );
    /**
     * Constructor for a new CalendarLegendItem.
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
      mSettings?: $CalendarLegendItemSettings
    );

    /**
     * Creates a new subclass of class sap.ui.unified.CalendarLegendItem with name `sClassName` and enriches
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
      oClassInfo?: sap.ClassInfo<T, CalendarLegendItem>,
      /**
       * Constructor function for the metadata object; if not given, it defaults to the metadata implementation
       * used by this class
       */
      FNMetaImpl?: Function
    ): Function;
    /**
     * @SINCE 1.46.0
     *
     * Gets current value of property {@link #getColor color}.
     *
     * Overrides the color derived from the `type` property.
     */
    getColor(): CSSColor;
    /**
     * Returns a metadata object for class sap.ui.unified.CalendarLegendItem.
     */
    static getMetadata(): ElementMetadata;
    /**
     * Gets current value of property {@link #getText text}.
     *
     * Text to be displayed for the item.
     */
    getText(): string;
    /**
     * @SINCE 1.28.9
     *
     * Gets current value of property {@link #getType type}.
     *
     * Type of the item. If not set the type is automatically determined from the order of the items in the
     * CalendarLegend.
     *
     * Default value is `None`.
     */
    getType(): CalendarDayType | keyof typeof CalendarDayType;
    /**
     * @SINCE 1.46.0
     *
     * Sets a new value for property {@link #getColor color}.
     *
     * Overrides the color derived from the `type` property.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     */
    setColor(
      /**
       * New value for property `color`
       */
      sColor?: CSSColor
    ): this;
    /**
     * Sets a new value for property {@link #getText text}.
     *
     * Text to be displayed for the item.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     */
    setText(
      /**
       * New value for property `text`
       */
      sText?: string
    ): this;
    /**
     * @SINCE 1.28.9
     *
     * Sets a new value for property {@link #getType type}.
     *
     * Type of the item. If not set the type is automatically determined from the order of the items in the
     * CalendarLegend.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `None`.
     */
    setType(
      /**
       * New value for property `type`
       */
      sType?: CalendarDayType | keyof typeof CalendarDayType
    ): this;
  }

  export interface $CalendarLegendItemSettings extends $ElementSettings {
    /**
     * Text to be displayed for the item.
     */
    text?: string | PropertyBindingInfo;

    /**
     * @SINCE 1.28.9
     *
     * Type of the item. If not set the type is automatically determined from the order of the items in the
     * CalendarLegend.
     */
    type?:
      | (CalendarDayType | keyof typeof CalendarDayType)
      | PropertyBindingInfo;

    /**
     * @SINCE 1.46.0
     *
     * Overrides the color derived from the `type` property.
     */
    color?: CSSColor | PropertyBindingInfo;
  }
}

declare module "sap/ui/unified/CalendarMonthInterval" {
  import { default as Control, $ControlSettings } from "sap/ui/core/Control";

  import { ID, CSSSize } from "sap/ui/core/library";

  import DateRange from "sap/ui/unified/DateRange";

  import DateTypeRange from "sap/ui/unified/DateTypeRange";

  import Calendar from "sap/ui/unified/Calendar";

  import ElementMetadata from "sap/ui/core/ElementMetadata";

  import CalendarLegend from "sap/ui/unified/CalendarLegend";

  import {
    PropertyBindingInfo,
    AggregationBindingInfo,
  } from "sap/ui/base/ManagedObject";

  /**
   * @SINCE 1.32.0
   *
   * Calendar with granularity of months displayed in one line.
   *
   * **Note:** JavaScript Date objects are used to set and return the months, mark them as selected or as
   * a special type. But the date part of the Date object is not used. If a Date object is returned the date
   * will be set to the 1st of the corresponding month.
   */
  export default class CalendarMonthInterval extends Control {
    /**
     * Constructor for a new `CalendarMonthInterval`.
     *
     * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated
     * objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description
     * of the syntax of the settings object.
     */
    constructor(
      /**
       * Initial settings for the new control
       */
      mSettings?: $CalendarMonthIntervalSettings
    );
    /**
     * Constructor for a new `CalendarMonthInterval`.
     *
     * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated
     * objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description
     * of the syntax of the settings object.
     */
    constructor(
      /**
       * ID for the new control, generated automatically if no ID is given
       */
      sId?: string,
      /**
       * Initial settings for the new control
       */
      mSettings?: $CalendarMonthIntervalSettings
    );

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
     * Adds some selectedDate to the aggregation {@link #getSelectedDates selectedDates}.
     */
    addSelectedDate(
      /**
       * The selectedDate to add; if empty, nothing is inserted
       */
      oSelectedDate: DateRange
    ): this;
    /**
     * Adds some specialDate to the aggregation {@link #getSpecialDates specialDates}.
     */
    addSpecialDate(
      /**
       * The specialDate to add; if empty, nothing is inserted
       */
      oSpecialDate: DateTypeRange
    ): this;
    /**
     * Attaches event handler `fnFunction` to the {@link #event:cancel cancel} event of this `sap.ui.unified.CalendarMonthInterval`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.unified.CalendarMonthInterval` itself.
     *
     * Month selection was cancelled
     */
    attachCancel(
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
       * Context object to call the event handler with. Defaults to this `sap.ui.unified.CalendarMonthInterval`
       * itself
       */
      oListener?: object
    ): this;
    /**
     * Attaches event handler `fnFunction` to the {@link #event:select select} event of this `sap.ui.unified.CalendarMonthInterval`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.unified.CalendarMonthInterval` itself.
     *
     * Month selection changed
     */
    attachSelect(
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
       * Context object to call the event handler with. Defaults to this `sap.ui.unified.CalendarMonthInterval`
       * itself
       */
      oListener?: object
    ): this;
    /**
     * @SINCE 1.34.0
     *
     * Attaches event handler `fnFunction` to the {@link #event:startDateChange startDateChange} event of this
     * `sap.ui.unified.CalendarMonthInterval`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.unified.CalendarMonthInterval` itself.
     *
     * `startDate` was changed while navigation in `CalendarMonthInterval`
     */
    attachStartDateChange(
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
       * Context object to call the event handler with. Defaults to this `sap.ui.unified.CalendarMonthInterval`
       * itself
       */
      oListener?: object
    ): this;
    /**
     * Destroys all the selectedDates in the aggregation {@link #getSelectedDates selectedDates}.
     */
    destroySelectedDates(): this;
    /**
     * Destroys all the specialDates in the aggregation {@link #getSpecialDates specialDates}.
     */
    destroySpecialDates(): this;
    /**
     * Detaches event handler `fnFunction` from the {@link #event:cancel cancel} event of this `sap.ui.unified.CalendarMonthInterval`.
     *
     * The passed function and listener object must match the ones used for event registration.
     */
    detachCancel(
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
     * Detaches event handler `fnFunction` from the {@link #event:select select} event of this `sap.ui.unified.CalendarMonthInterval`.
     *
     * The passed function and listener object must match the ones used for event registration.
     */
    detachSelect(
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
     * @SINCE 1.34.0
     *
     * Detaches event handler `fnFunction` from the {@link #event:startDateChange startDateChange} event of
     * this `sap.ui.unified.CalendarMonthInterval`.
     *
     * The passed function and listener object must match the ones used for event registration.
     */
    detachStartDateChange(
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
     * Displays a month in the `CalendarMonthInterval` but doesn't set the focus.
     */
    displayDate(
      /**
       * JavaScript date object for displayed date. (The month of this date will be displayed.)
       */
      oDatetime: Object
    ): this;
    /**
     * Creates a new subclass of class sap.ui.unified.CalendarMonthInterval with name `sClassName` and enriches
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
      oClassInfo?: sap.ClassInfo<T, CalendarMonthInterval>,
      /**
       * Constructor function for the metadata object; if not given, it defaults to the metadata implementation
       * used by this class
       */
      FNMetaImpl?: Function
    ): Function;
    /**
     * Fires event {@link #event:cancel cancel} to attached listeners.
     */
    fireCancel(
      /**
       * Parameters to pass along with the event
       */
      mParameters?: object
    ): this;
    /**
     * Fires event {@link #event:select select} to attached listeners.
     */
    fireSelect(
      /**
       * Parameters to pass along with the event
       */
      mParameters?: object
    ): this;
    /**
     * @SINCE 1.34.0
     *
     * Fires event {@link #event:startDateChange startDateChange} to attached listeners.
     */
    fireStartDateChange(
      /**
       * Parameters to pass along with the event
       */
      mParameters?: object
    ): this;
    /**
     * Sets the focused month of the `CalendarMonthInterval`.
     */
    focusDate(
      /**
       * JavaScript date object for focused date. (The month of this date will be focused.)
       */
      oDatetime: Object
    ): Calendar;
    /**
     * Returns array of IDs of the elements which are the current targets of the association {@link #getAriaLabelledBy
     * ariaLabelledBy}.
     */
    getAriaLabelledBy(): ID[];
    /**
     * Gets current value of property {@link #getIntervalSelection intervalSelection}.
     *
     * If set, interval selection is allowed
     *
     * Default value is `false`.
     */
    getIntervalSelection(): boolean;
    /**
     * @SINCE 1.38.5
     *
     * ID of the element which is the current target of the association {@link #getLegend legend}, or `null`.
     */
    getLegend(): ID;
    /**
     * @SINCE 1.38.0
     *
     * Gets current value of property {@link #getMaxDate maxDate}.
     *
     * Maximum date that can be shown and selected in the Calendar. This must be a JavaScript date object.
     *
     * **Note:** If the `maxDate` is set to be before the `minDate`, the `minDate` is set to the begin of the
     * month of the `maxDate`.
     */
    getMaxDate(): object;
    /**
     * Returns a metadata object for class sap.ui.unified.CalendarMonthInterval.
     */
    static getMetadata(): ElementMetadata;
    /**
     * @SINCE 1.38.0
     *
     * Gets current value of property {@link #getMinDate minDate}.
     *
     * Minimum date that can be shown and selected in the Calendar. This must be a JavaScript date object.
     *
     * **Note:** If the `minDate` is set to be after the `maxDate`, the `maxDate` is set to the end of the month
     * of the `minDate`.
     */
    getMinDate(): object;
    /**
     * Gets current value of property {@link #getMonths months}.
     *
     * Number of months displayed
     *
     * **Note:** On phones, the maximum number of months displayed in the row is always 6.
     *
     * Default value is `12`.
     */
    getMonths(): int;
    /**
     * @SINCE 1.34.0
     *
     * Gets current value of property {@link #getPickerPopup pickerPopup}.
     *
     * If set, the yearPicker opens on a popup
     *
     * Default value is `false`.
     */
    getPickerPopup(): boolean;
    /**
     * Gets content of aggregation {@link #getSelectedDates selectedDates}.
     *
     * Date ranges for selected dates of the `CalendarMonthInterval`.
     *
     * If `singleSelection` is set, only the first entry is used.
     *
     * **Note:** Even if only one day is selected, the whole corresponding month is selected.
     */
    getSelectedDates(): DateRange[];
    /**
     * Gets current value of property {@link #getSingleSelection singleSelection}.
     *
     * If set, only a single date or interval, if `intervalSelection` is enabled, can be selected
     *
     * **Note:** Selection of multiple intervals is not supported in the current version.
     *
     * Default value is `true`.
     */
    getSingleSelection(): boolean;
    /**
     * Gets content of aggregation {@link #getSpecialDates specialDates}.
     *
     * Date ranges with type to visualize special months in the `CalendarMonthInterval`. If one day is assigned
     * to more than one type, only the first one will be used.
     *
     * **Note:** Even if only one day is set as a special day, the whole corresponding month is displayed in
     * this way.
     */
    getSpecialDates(): DateTypeRange[];
    /**
     * Gets current value of property {@link #getStartDate startDate}.
     *
     * Start date of the Interval as JavaScript Date object. The month of this Date will be the first month
     * in the displayed row.
     */
    getStartDate(): object;
    /**
     * Gets current value of property {@link #getWidth width}.
     *
     * Width of the `CalendarMonthInterval`. The width of the single months depends on this width.
     */
    getWidth(): CSSSize;
    /**
     * Checks for the provided `sap.ui.unified.DateRange` in the aggregation {@link #getSelectedDates selectedDates}.
     * and returns its index if found or -1 otherwise.
     */
    indexOfSelectedDate(
      /**
       * The selectedDate whose index is looked for
       */
      oSelectedDate: DateRange
    ): int;
    /**
     * Checks for the provided `sap.ui.unified.DateTypeRange` in the aggregation {@link #getSpecialDates specialDates}.
     * and returns its index if found or -1 otherwise.
     */
    indexOfSpecialDate(
      /**
       * The specialDate whose index is looked for
       */
      oSpecialDate: DateTypeRange
    ): int;
    /**
     * Inserts a selectedDate into the aggregation {@link #getSelectedDates selectedDates}.
     */
    insertSelectedDate(
      /**
       * The selectedDate to insert; if empty, nothing is inserted
       */
      oSelectedDate: DateRange,
      /**
       * The `0`-based index the selectedDate should be inserted at; for a negative value of `iIndex`, the selectedDate
       * is inserted at position 0; for a value greater than the current size of the aggregation, the selectedDate
       * is inserted at the last position
       */
      iIndex: int
    ): this;
    /**
     * Inserts a specialDate into the aggregation {@link #getSpecialDates specialDates}.
     */
    insertSpecialDate(
      /**
       * The specialDate to insert; if empty, nothing is inserted
       */
      oSpecialDate: DateTypeRange,
      /**
       * The `0`-based index the specialDate should be inserted at; for a negative value of `iIndex`, the specialDate
       * is inserted at position 0; for a value greater than the current size of the aggregation, the specialDate
       * is inserted at the last position
       */
      iIndex: int
    ): this;
    /**
     * Removes all the controls in the association named {@link #getAriaLabelledBy ariaLabelledBy}.
     */
    removeAllAriaLabelledBy(): ID[];
    /**
     * Removes all the controls from the aggregation {@link #getSelectedDates selectedDates}.
     *
     * Additionally, it unregisters them from the hosting UIArea.
     */
    removeAllSelectedDates(): DateRange[];
    /**
     * Removes all the controls from the aggregation {@link #getSpecialDates specialDates}.
     *
     * Additionally, it unregisters them from the hosting UIArea.
     */
    removeAllSpecialDates(): DateTypeRange[];
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
     * Removes a selectedDate from the aggregation {@link #getSelectedDates selectedDates}.
     */
    removeSelectedDate(
      /**
       * The selectedDate to remove or its index or id
       */
      vSelectedDate: int | string | DateRange
    ): DateRange;
    /**
     * Removes a specialDate from the aggregation {@link #getSpecialDates specialDates}.
     */
    removeSpecialDate(
      /**
       * The specialDate to remove or its index or id
       */
      vSpecialDate: int | string | DateTypeRange
    ): DateTypeRange;
    /**
     * Sets a new value for property {@link #getIntervalSelection intervalSelection}.
     *
     * If set, interval selection is allowed
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `false`.
     */
    setIntervalSelection(
      /**
       * New value for property `intervalSelection`
       */
      bIntervalSelection?: boolean
    ): this;
    /**
     * @SINCE 1.38.5
     *
     * Sets the associated {@link #getLegend legend}.
     */
    setLegend(
      /**
       * ID of an element which becomes the new target of this legend association; alternatively, an element instance
       * may be given
       */
      oLegend: ID | CalendarLegend
    ): this;
    /**
     * @SINCE 1.38.0
     *
     * Sets a new value for property {@link #getMaxDate maxDate}.
     *
     * Maximum date that can be shown and selected in the Calendar. This must be a JavaScript date object.
     *
     * **Note:** If the `maxDate` is set to be before the `minDate`, the `minDate` is set to the begin of the
     * month of the `maxDate`.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     */
    setMaxDate(
      /**
       * New value for property `maxDate`
       */
      oMaxDate?: object
    ): this;
    /**
     * @SINCE 1.38.0
     *
     * Sets a new value for property {@link #getMinDate minDate}.
     *
     * Minimum date that can be shown and selected in the Calendar. This must be a JavaScript date object.
     *
     * **Note:** If the `minDate` is set to be after the `maxDate`, the `maxDate` is set to the end of the month
     * of the `minDate`.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     */
    setMinDate(
      /**
       * New value for property `minDate`
       */
      oMinDate?: object
    ): this;
    /**
     * Sets a new value for property {@link #getMonths months}.
     *
     * Number of months displayed
     *
     * **Note:** On phones, the maximum number of months displayed in the row is always 6.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `12`.
     */
    setMonths(
      /**
       * New value for property `months`
       */
      iMonths?: int
    ): this;
    /**
     * @SINCE 1.34.0
     *
     * Sets a new value for property {@link #getPickerPopup pickerPopup}.
     *
     * If set, the yearPicker opens on a popup
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `false`.
     */
    setPickerPopup(
      /**
       * New value for property `pickerPopup`
       */
      bPickerPopup?: boolean
    ): this;
    /**
     * Sets a new value for property {@link #getSingleSelection singleSelection}.
     *
     * If set, only a single date or interval, if `intervalSelection` is enabled, can be selected
     *
     * **Note:** Selection of multiple intervals is not supported in the current version.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `true`.
     */
    setSingleSelection(
      /**
       * New value for property `singleSelection`
       */
      bSingleSelection?: boolean
    ): this;
    /**
     * Sets a new value for property {@link #getWidth width}.
     *
     * Width of the `CalendarMonthInterval`. The width of the single months depends on this width.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     */
    setWidth(
      /**
       * New value for property `width`
       */
      sWidth?: CSSSize
    ): this;
    /**
     * Attaches event handler `fnFunction` to the {@link #event:cancel cancel} event of this `sap.ui.unified.CalendarMonthInterval`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.unified.CalendarMonthInterval` itself.
     *
     * Month selection was cancelled
     */
    attachCancel(
      /**
       * The function to be called when the event occurs
       */
      fnFunction: Function,
      /**
       * Context object to call the event handler with. Defaults to this `sap.ui.unified.CalendarMonthInterval`
       * itself
       */
      oListener?: object
    ): this;
    /**
     * Attaches event handler `fnFunction` to the {@link #event:select select} event of this `sap.ui.unified.CalendarMonthInterval`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.unified.CalendarMonthInterval` itself.
     *
     * Month selection changed
     */
    attachSelect(
      /**
       * The function to be called when the event occurs
       */
      fnFunction: Function,
      /**
       * Context object to call the event handler with. Defaults to this `sap.ui.unified.CalendarMonthInterval`
       * itself
       */
      oListener?: object
    ): this;
    /**
     * @SINCE 1.34.0
     *
     * Attaches event handler `fnFunction` to the {@link #event:startDateChange startDateChange} event of this
     * `sap.ui.unified.CalendarMonthInterval`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.unified.CalendarMonthInterval` itself.
     *
     * `startDate` was changed while navigation in `CalendarMonthInterval`
     */
    attachStartDateChange(
      /**
       * The function to be called when the event occurs
       */
      fnFunction: Function,
      /**
       * Context object to call the event handler with. Defaults to this `sap.ui.unified.CalendarMonthInterval`
       * itself
       */
      oListener?: object
    ): this;
  }

  export interface $CalendarMonthIntervalSettings extends $ControlSettings {
    /**
     * Width of the `CalendarMonthInterval`. The width of the single months depends on this width.
     */
    width?: CSSSize | PropertyBindingInfo;

    /**
     * Start date of the Interval as JavaScript Date object. The month of this Date will be the first month
     * in the displayed row.
     */
    startDate?: object | PropertyBindingInfo;

    /**
     * If set, interval selection is allowed
     */
    intervalSelection?: boolean | PropertyBindingInfo;

    /**
     * If set, only a single date or interval, if `intervalSelection` is enabled, can be selected
     *
     * **Note:** Selection of multiple intervals is not supported in the current version.
     */
    singleSelection?: boolean | PropertyBindingInfo;

    /**
     * Number of months displayed
     *
     * **Note:** On phones, the maximum number of months displayed in the row is always 6.
     */
    months?: int | PropertyBindingInfo;

    /**
     * @SINCE 1.34.0
     *
     * If set, the yearPicker opens on a popup
     */
    pickerPopup?: boolean | PropertyBindingInfo;

    /**
     * @SINCE 1.38.0
     *
     * Minimum date that can be shown and selected in the Calendar. This must be a JavaScript date object.
     *
     * **Note:** If the `minDate` is set to be after the `maxDate`, the `maxDate` is set to the end of the month
     * of the `minDate`.
     */
    minDate?: object | PropertyBindingInfo;

    /**
     * @SINCE 1.38.0
     *
     * Maximum date that can be shown and selected in the Calendar. This must be a JavaScript date object.
     *
     * **Note:** If the `maxDate` is set to be before the `minDate`, the `minDate` is set to the begin of the
     * month of the `maxDate`.
     */
    maxDate?: object | PropertyBindingInfo;

    /**
     * Date ranges for selected dates of the `CalendarMonthInterval`.
     *
     * If `singleSelection` is set, only the first entry is used.
     *
     * **Note:** Even if only one day is selected, the whole corresponding month is selected.
     */
    selectedDates?: DateRange[] | DateRange | AggregationBindingInfo;

    /**
     * Date ranges with type to visualize special months in the `CalendarMonthInterval`. If one day is assigned
     * to more than one type, only the first one will be used.
     *
     * **Note:** Even if only one day is set as a special day, the whole corresponding month is displayed in
     * this way.
     */
    specialDates?: DateTypeRange[] | DateTypeRange | AggregationBindingInfo;

    /**
     * Association to controls / IDs which label this control (see WAI-ARIA attribute aria-labelledby).
     */
    ariaLabelledBy?: Array<Control | string>;

    /**
     * @SINCE 1.38.5
     *
     * Association to the `CalendarLegend` explaining the colors of the `specialDates`.
     *
     * **Note** The legend does not have to be rendered but must exist, and all required types must be assigned.
     */
    legend?: CalendarLegend | string;

    /**
     * Month selection changed
     */
    select?: Function;

    /**
     * Month selection was cancelled
     */
    cancel?: Function;

    /**
     * @SINCE 1.34.0
     *
     * `startDate` was changed while navigation in `CalendarMonthInterval`
     */
    startDateChange?: Function;
  }
}

declare module "sap/ui/unified/CalendarRow" {
  import { default as Control, $ControlSettings } from "sap/ui/core/Control";

  import CalendarAppointment from "sap/ui/unified/CalendarAppointment";

  import { ID, CSSSize } from "sap/ui/core/library";

  import {
    CalendarAppointmentHeight,
    CalendarAppointmentRoundWidth,
    CalendarAppointmentVisualization,
    GroupAppointmentsMode,
    CalendarIntervalType,
  } from "sap/ui/unified/library";

  import ElementMetadata from "sap/ui/core/ElementMetadata";

  import CalendarLegend from "sap/ui/unified/CalendarLegend";

  import {
    PropertyBindingInfo,
    AggregationBindingInfo,
  } from "sap/ui/base/ManagedObject";

  /**
   * @SINCE 1.34.0
   *
   * A calendar row with a header and appointments. The Appointments will be placed in the defined interval.
   */
  export default class CalendarRow extends Control {
    /**
     * Constructor for a new `CalendarRow`.
     *
     * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated
     * objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description
     * of the syntax of the settings object.
     */
    constructor(
      /**
       * Initial settings for the new control
       */
      mSettings?: $CalendarRowSettings
    );
    /**
     * Constructor for a new `CalendarRow`.
     *
     * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated
     * objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description
     * of the syntax of the settings object.
     */
    constructor(
      /**
       * ID for the new control, generated automatically if no ID is given
       */
      sId?: string,
      /**
       * Initial settings for the new control
       */
      mSettings?: $CalendarRowSettings
    );

    /**
     * Adds some appointment to the aggregation {@link #getAppointments appointments}.
     */
    addAppointment(
      /**
       * The appointment to add; if empty, nothing is inserted
       */
      oAppointment: CalendarAppointment
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
     * Adds some intervalHeader to the aggregation {@link #getIntervalHeaders intervalHeaders}.
     */
    addIntervalHeader(
      /**
       * The intervalHeader to add; if empty, nothing is inserted
       */
      oIntervalHeader: CalendarAppointment
    ): this;
    /**
     * @SINCE 1.38.0
     *
     * Attaches event handler `fnFunction` to the {@link #event:intervalSelect intervalSelect} event of this
     * `sap.ui.unified.CalendarRow`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.unified.CalendarRow` itself.
     *
     * Fired if an interval was selected
     */
    attachIntervalSelect(
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
       * Context object to call the event handler with. Defaults to this `sap.ui.unified.CalendarRow` itself
       */
      oListener?: object
    ): this;
    /**
     * Attaches event handler `fnFunction` to the {@link #event:leaveRow leaveRow} event of this `sap.ui.unified.CalendarRow`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.unified.CalendarRow` itself.
     *
     * The `CalendarRow` should be left while navigating. (Arrow up or arrow down.) The caller should determine
     * the next control to be focused
     */
    attachLeaveRow(
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
       * Context object to call the event handler with. Defaults to this `sap.ui.unified.CalendarRow` itself
       */
      oListener?: object
    ): this;
    /**
     * Attaches event handler `fnFunction` to the {@link #event:select select} event of this `sap.ui.unified.CalendarRow`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.unified.CalendarRow` itself.
     *
     * Fired if an appointment was selected
     */
    attachSelect(
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
       * Context object to call the event handler with. Defaults to this `sap.ui.unified.CalendarRow` itself
       */
      oListener?: object
    ): this;
    /**
     * Attaches event handler `fnFunction` to the {@link #event:startDateChange startDateChange} event of this
     * `sap.ui.unified.CalendarRow`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.unified.CalendarRow` itself.
     *
     * `startDate` was changed while navigating in `CalendarRow`
     */
    attachStartDateChange(
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
       * Context object to call the event handler with. Defaults to this `sap.ui.unified.CalendarRow` itself
       */
      oListener?: object
    ): this;
    /**
     * Destroys all the appointments in the aggregation {@link #getAppointments appointments}.
     */
    destroyAppointments(): this;
    /**
     * Destroys all the intervalHeaders in the aggregation {@link #getIntervalHeaders intervalHeaders}.
     */
    destroyIntervalHeaders(): this;
    /**
     * @SINCE 1.38.0
     *
     * Detaches event handler `fnFunction` from the {@link #event:intervalSelect intervalSelect} event of this
     * `sap.ui.unified.CalendarRow`.
     *
     * The passed function and listener object must match the ones used for event registration.
     */
    detachIntervalSelect(
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
     * Detaches event handler `fnFunction` from the {@link #event:leaveRow leaveRow} event of this `sap.ui.unified.CalendarRow`.
     *
     * The passed function and listener object must match the ones used for event registration.
     */
    detachLeaveRow(
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
     * Detaches event handler `fnFunction` from the {@link #event:select select} event of this `sap.ui.unified.CalendarRow`.
     *
     * The passed function and listener object must match the ones used for event registration.
     */
    detachSelect(
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
     * Detaches event handler `fnFunction` from the {@link #event:startDateChange startDateChange} event of
     * this `sap.ui.unified.CalendarRow`.
     *
     * The passed function and listener object must match the ones used for event registration.
     */
    detachStartDateChange(
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
     * Creates a new subclass of class sap.ui.unified.CalendarRow with name `sClassName` and enriches it with
     * the information contained in `oClassInfo`.
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
      oClassInfo?: sap.ClassInfo<T, CalendarRow>,
      /**
       * Constructor function for the metadata object; if not given, it defaults to the metadata implementation
       * used by this class
       */
      FNMetaImpl?: Function
    ): Function;
    /**
     * @SINCE 1.38.0
     *
     * Fires event {@link #event:intervalSelect intervalSelect} to attached listeners.
     */
    fireIntervalSelect(
      /**
       * Parameters to pass along with the event
       */
      mParameters?: {
        /**
         * Interval start date as JavaScript date object
         */
        startDate?: object;
        /**
         * Interval end date as JavaScript date object
         */
        endDate?: object;
        /**
         * If set, the selected interval is a subinterval
         */
        subInterval?: boolean;
      }
    ): this;
    /**
     * Fires event {@link #event:leaveRow leaveRow} to attached listeners.
     */
    fireLeaveRow(
      /**
       * Parameters to pass along with the event
       */
      mParameters?: {
        /**
         * The type of the event that triggers this `leaveRow`
         */
        type?: string;
      }
    ): this;
    /**
     * Fires event {@link #event:select select} to attached listeners.
     */
    fireSelect(
      /**
       * Parameters to pass along with the event
       */
      mParameters?: {
        /**
         * selected appointment
         */
        appointment?: CalendarAppointment;
        /**
         * selected appointments in case a group appointment is selected
         */
        appointments?: CalendarAppointment[];
        /**
         * If set, the appointment was selected by multiple selection (e.g. shift + mouse click). So more than the
         * current appointment could be selected.
         */
        multiSelect?: boolean;
        /**
         * Gives the ID of the DOM element of the clicked appointment
         */
        domRefId?: string;
      }
    ): this;
    /**
     * Fires event {@link #event:startDateChange startDateChange} to attached listeners.
     */
    fireStartDateChange(
      /**
       * Parameters to pass along with the event
       */
      mParameters?: object
    ): this;
    /**
     * Focus the given `CalendarAppointment` in the `CalendarRow`.
     */
    focusAppointment(
      /**
       * Appointment to be focused.
       */
      oAppointment: CalendarAppointment
    ): this;
    /**
     * Focus the `CalendarAppointment` in the `CalendarRow` that is nearest to the given date.
     */
    focusNearestAppointment(
      /**
       * Javascript Date object.
       */
      oDate: object
    ): this;
    /**
     * @SINCE 1.81.0
     *
     * Gets current value of property {@link #getAppointmentHeight appointmentHeight}.
     *
     * Defines the height of the CalendarAppoinment
     *
     * Default value is `Regular`.
     */
    getAppointmentHeight():
      | CalendarAppointmentHeight
      | keyof typeof CalendarAppointmentHeight;
    /**
     * @SINCE 1.81.0
     * @EXPERIMENTAL (since 1.81.0)
     *
     * Gets current value of property {@link #getAppointmentRoundWidth appointmentRoundWidth}.
     *
     * Defines rounding of the width of CalendarAppoinment **Note:** This property is applied, when
     * the calendar interval type is day and the view shows more than 20 days
     *
     * Default value is `None`.
     */
    getAppointmentRoundWidth():
      | CalendarAppointmentRoundWidth
      | keyof typeof CalendarAppointmentRoundWidth;
    /**
     * Gets content of aggregation {@link #getAppointments appointments}.
     *
     * Appointments to be displayed in the row. Appointments outside the visible time frame are not rendered.
     *
     * **Note:** For performance reasons, only appointments in the visible time range or nearby should be assigned.
     */
    getAppointments(): CalendarAppointment[];
    /**
     * @SINCE 1.38.0
     * @deprecated (since 1.81) - Please use the `appointmentHeight` with value "Automatic" property instead.
     *
     * Gets current value of property {@link #getAppointmentsReducedHeight appointmentsReducedHeight}.
     *
     * If set the appointments without text (only title) are rendered with a smaller height.
     *
     * **Note:** On phone devices this property is ignored, appointments are always rendered in full height
     * to allow touching.
     *
     * Default value is `false`.
     */
    getAppointmentsReducedHeight(): boolean;
    /**
     * @SINCE 1.40.0
     *
     * Gets current value of property {@link #getAppointmentsVisualization appointmentsVisualization}.
     *
     * Defines the visualization of the `CalendarAppoinment`
     *
     * **Note:** The real visualization depends on the used theme.
     *
     * Default value is `Standard`.
     */
    getAppointmentsVisualization():
      | CalendarAppointmentVisualization
      | keyof typeof CalendarAppointmentVisualization;
    /**
     * Returns array of IDs of the elements which are the current targets of the association {@link #getAriaLabelledBy
     * ariaLabelledBy}.
     */
    getAriaLabelledBy(): ID[];
    /**
     * Gets current value of property {@link #getCheckResize checkResize}.
     *
     * If set, the `CalendarRow` checks for resize by itself.
     *
     * If a lot of `CalendarRow` controls are used in one container control (like `PlanningCalendar`). the resize
     * checks should be done only by this container control. Then the container control should call `handleResize`
     * of the `CalendarRow` if a resize happens.
     *
     * Default value is `true`.
     */
    getCheckResize(): boolean;
    /**
     * Returns the focused `CalendarAppointment` of the `CalendarRow`.
     *
     * The focus must not really be on the `CalendarAppointment`, it have just to be the one that has the focus
     * when the `CalendarRow` was focused last time.
     */
    getFocusedAppointment(): CalendarAppointment;
    /**
     * Gets current value of property {@link #getGroupAppointmentsMode groupAppointmentsMode}.
     *
     * Defines the mode in which the overlapping appointments are displayed.
     *
     * **Note:** This property takes effect, only if the `intervalType` of the current calendar view is set
     * to `sap.ui.unified.CalendarIntervalType.Month`. On phone devices this property is ignored, and the default
     * value is applied.
     *
     * Default value is `Collapsed`.
     */
    getGroupAppointmentsMode():
      | GroupAppointmentsMode
      | keyof typeof GroupAppointmentsMode;
    /**
     * Gets current value of property {@link #getHeight height}.
     *
     * Height of the row
     */
    getHeight(): CSSSize;
    /**
     * Gets content of aggregation {@link #getIntervalHeaders intervalHeaders}.
     *
     * Appointments to be displayed in the top of the intervals. The `intervalHeaders` are used to visualize
     * public holidays and similar things.
     *
     * Appointments outside the visible time frame are not rendered.
     *
     * The `intervalHeaders` always fill whole intervals. If they are shorter than one interval, they are not
     * displayed.
     *
     * **Note:** For performance reasons, only appointments in the visible time range or nearby should be assigned.
     */
    getIntervalHeaders(): CalendarAppointment[];
    /**
     * Gets current value of property {@link #getIntervals intervals}.
     *
     * Number of displayed intervals. The size of the intervals is defined with `intervalType`
     *
     * Default value is `12`.
     */
    getIntervals(): int;
    /**
     * Gets current value of property {@link #getIntervalType intervalType}.
     *
     * Type of the intervals of the row. The default is one hour.
     *
     * Default value is `Hour`.
     */
    getIntervalType(): CalendarIntervalType;
    /**
     * @SINCE 1.40.0
     *
     * ID of the element which is the current target of the association {@link #getLegend legend}, or `null`.
     */
    getLegend(): ID;
    /**
     * Returns a metadata object for class sap.ui.unified.CalendarRow.
     */
    static getMetadata(): ElementMetadata;
    /**
     * Gets current value of property {@link #getNonWorkingDays nonWorkingDays}.
     *
     * If set, the provided weekdays are displayed as non-working days. Valid values inside the array are 0
     * to 6. (Other values will just be ignored.)
     *
     * If not set, the weekend defined in the locale settings is displayed as non-working days.
     *
     * **Note:** The non working days are only visualized if `intervalType` is set to day.
     */
    getNonWorkingDays(): int[];
    /**
     * Gets current value of property {@link #getNonWorkingHours nonWorkingHours}.
     *
     * If set, the provided hours are displayed as non-working hours. Valid values inside the array are 0 to
     * 23. (Other values will just be ignored.)
     *
     * **Note:** The non working hours are only visualized if `intervalType` is set to hour.
     */
    getNonWorkingHours(): int[];
    /**
     * @SINCE 1.38.0
     *
     * Gets current value of property {@link #getShowEmptyIntervalHeaders showEmptyIntervalHeaders}.
     *
     * If set, interval headers are shown even if no `intervalHeaders` are assigned to the visible time frame.
     *
     * If not set, no interval headers are shown if no `intervalHeaders` are assigned.
     *
     * **Note:** This property is only used if `showIntervalHeaders` is set to true.
     *
     * Default value is `true`.
     */
    getShowEmptyIntervalHeaders(): boolean;
    /**
     * Gets current value of property {@link #getShowIntervalHeaders showIntervalHeaders}.
     *
     * If set, interval headers are shown like specified in `showEmptyIntervalHeaders`.
     *
     * If not set, no interval headers are shown even if `intervalHeaders` are assigned.
     *
     * Default value is `true`.
     */
    getShowIntervalHeaders(): boolean;
    /**
     * Gets current value of property {@link #getShowSubIntervals showSubIntervals}.
     *
     * If set, subintervals are shown.
     *
     * If the interval type is `Hour`, quarter hours are shown.
     *
     * If the interval type is `Day`, hours are shown.
     *
     * If the interval type is `Month`, days are shown.
     *
     * Default value is `false`.
     */
    getShowSubIntervals(): boolean;
    /**
     * Gets current value of property {@link #getStartDate startDate}.
     *
     * Start date, as JavaScript Date object, of the row. As default, the current date is used.
     */
    getStartDate(): object;
    /**
     * Gets current value of property {@link #getUpdateCurrentTime updateCurrentTime}.
     *
     * If set the `CalendarRow` triggers a periodic update to visualize the current time.
     *
     * If a lot of `CalendarRow` controls are used in one container control (like `PlanningCalendar`) the periodic
     * update should be triggered only by this container control. Then the container control should call `updateCurrentTimeVisualization`
     * of the `CalendarRow` to update the visualization.
     *
     * Default value is `true`.
     */
    getUpdateCurrentTime(): boolean;
    /**
     * Gets current value of property {@link #getWidth width}.
     *
     * Width of the row
     */
    getWidth(): CSSSize;
    /**
     * After a resize of the `CalendarRow`, some calculations for appointment sizes are needed.
     *
     * For this, each `CalendarRow` can trigger the resize check for it's own DOM. But if multiple `CalendarRow`s
     * are used in one container (e.g. `PlanningCalendar`), it is better if the container triggers the resize
     * check once and then calls this function of each `CalendarRow`.
     */
    handleResize(
      /**
       * The event object of the resize handler.
       */
      oEvent: jQuery.Event
    ): this;
    /**
     * Checks for the provided `sap.ui.unified.CalendarAppointment` in the aggregation {@link #getAppointments
     * appointments}. and returns its index if found or -1 otherwise.
     */
    indexOfAppointment(
      /**
       * The appointment whose index is looked for
       */
      oAppointment: CalendarAppointment
    ): int;
    /**
     * Checks for the provided `sap.ui.unified.CalendarAppointment` in the aggregation {@link #getIntervalHeaders
     * intervalHeaders}. and returns its index if found or -1 otherwise.
     */
    indexOfIntervalHeader(
      /**
       * The intervalHeader whose index is looked for
       */
      oIntervalHeader: CalendarAppointment
    ): int;
    /**
     * Inserts a appointment into the aggregation {@link #getAppointments appointments}.
     */
    insertAppointment(
      /**
       * The appointment to insert; if empty, nothing is inserted
       */
      oAppointment: CalendarAppointment,
      /**
       * The `0`-based index the appointment should be inserted at; for a negative value of `iIndex`, the appointment
       * is inserted at position 0; for a value greater than the current size of the aggregation, the appointment
       * is inserted at the last position
       */
      iIndex: int
    ): this;
    /**
     * Inserts a intervalHeader into the aggregation {@link #getIntervalHeaders intervalHeaders}.
     */
    insertIntervalHeader(
      /**
       * The intervalHeader to insert; if empty, nothing is inserted
       */
      oIntervalHeader: CalendarAppointment,
      /**
       * The `0`-based index the intervalHeader should be inserted at; for a negative value of `iIndex`, the intervalHeader
       * is inserted at position 0; for a value greater than the current size of the aggregation, the intervalHeader
       * is inserted at the last position
       */
      iIndex: int
    ): this;
    /**
     * Removes all the controls from the aggregation {@link #getAppointments appointments}.
     *
     * Additionally, it unregisters them from the hosting UIArea.
     */
    removeAllAppointments(): CalendarAppointment[];
    /**
     * Removes all the controls in the association named {@link #getAriaLabelledBy ariaLabelledBy}.
     */
    removeAllAriaLabelledBy(): ID[];
    /**
     * Removes all the controls from the aggregation {@link #getIntervalHeaders intervalHeaders}.
     *
     * Additionally, it unregisters them from the hosting UIArea.
     */
    removeAllIntervalHeaders(): CalendarAppointment[];
    /**
     * Removes a appointment from the aggregation {@link #getAppointments appointments}.
     */
    removeAppointment(
      /**
       * The appointment to remove or its index or id
       */
      vAppointment: int | string | CalendarAppointment
    ): CalendarAppointment;
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
     * Removes a intervalHeader from the aggregation {@link #getIntervalHeaders intervalHeaders}.
     */
    removeIntervalHeader(
      /**
       * The intervalHeader to remove or its index or id
       */
      vIntervalHeader: int | string | CalendarAppointment
    ): CalendarAppointment;
    /**
     * @SINCE 1.81.0
     *
     * Sets a new value for property {@link #getAppointmentHeight appointmentHeight}.
     *
     * Defines the height of the CalendarAppoinment
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `Regular`.
     */
    setAppointmentHeight(
      /**
       * New value for property `appointmentHeight`
       */
      sAppointmentHeight?:
        | CalendarAppointmentHeight
        | keyof typeof CalendarAppointmentHeight
    ): this;
    /**
     * @SINCE 1.81.0
     * @EXPERIMENTAL (since 1.81.0)
     *
     * Sets a new value for property {@link #getAppointmentRoundWidth appointmentRoundWidth}.
     *
     * Defines rounding of the width of CalendarAppoinment **Note:** This property is applied, when
     * the calendar interval type is day and the view shows more than 20 days
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `None`.
     */
    setAppointmentRoundWidth(
      /**
       * New value for property `appointmentRoundWidth`
       */
      sAppointmentRoundWidth?:
        | CalendarAppointmentRoundWidth
        | keyof typeof CalendarAppointmentRoundWidth
    ): this;
    /**
     * @SINCE 1.38.0
     * @deprecated (since 1.81) - Please use the `appointmentHeight` with value "Automatic" property instead.
     *
     * Sets a new value for property {@link #getAppointmentsReducedHeight appointmentsReducedHeight}.
     *
     * If set the appointments without text (only title) are rendered with a smaller height.
     *
     * **Note:** On phone devices this property is ignored, appointments are always rendered in full height
     * to allow touching.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `false`.
     */
    setAppointmentsReducedHeight(
      /**
       * New value for property `appointmentsReducedHeight`
       */
      bAppointmentsReducedHeight?: boolean
    ): this;
    /**
     * @SINCE 1.40.0
     *
     * Sets a new value for property {@link #getAppointmentsVisualization appointmentsVisualization}.
     *
     * Defines the visualization of the `CalendarAppoinment`
     *
     * **Note:** The real visualization depends on the used theme.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `Standard`.
     */
    setAppointmentsVisualization(
      /**
       * New value for property `appointmentsVisualization`
       */
      sAppointmentsVisualization?:
        | CalendarAppointmentVisualization
        | keyof typeof CalendarAppointmentVisualization
    ): this;
    /**
     * Sets a new value for property {@link #getCheckResize checkResize}.
     *
     * If set, the `CalendarRow` checks for resize by itself.
     *
     * If a lot of `CalendarRow` controls are used in one container control (like `PlanningCalendar`). the resize
     * checks should be done only by this container control. Then the container control should call `handleResize`
     * of the `CalendarRow` if a resize happens.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `true`.
     */
    setCheckResize(
      /**
       * New value for property `checkResize`
       */
      bCheckResize?: boolean
    ): this;
    /**
     * Sets a new value for property {@link #getGroupAppointmentsMode groupAppointmentsMode}.
     *
     * Defines the mode in which the overlapping appointments are displayed.
     *
     * **Note:** This property takes effect, only if the `intervalType` of the current calendar view is set
     * to `sap.ui.unified.CalendarIntervalType.Month`. On phone devices this property is ignored, and the default
     * value is applied.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `Collapsed`.
     */
    setGroupAppointmentsMode(
      /**
       * New value for property `groupAppointmentsMode`
       */
      sGroupAppointmentsMode?:
        | GroupAppointmentsMode
        | keyof typeof GroupAppointmentsMode
    ): this;
    /**
     * Sets a new value for property {@link #getHeight height}.
     *
     * Height of the row
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     */
    setHeight(
      /**
       * New value for property `height`
       */
      sHeight?: CSSSize
    ): this;
    /**
     * Sets a new value for property {@link #getIntervals intervals}.
     *
     * Number of displayed intervals. The size of the intervals is defined with `intervalType`
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `12`.
     */
    setIntervals(
      /**
       * New value for property `intervals`
       */
      iIntervals?: int
    ): this;
    /**
     * Sets a new value for property {@link #getIntervalType intervalType}.
     *
     * Type of the intervals of the row. The default is one hour.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `Hour`.
     */
    setIntervalType(
      /**
       * New value for property `intervalType`
       */
      sIntervalType?: CalendarIntervalType
    ): this;
    /**
     * @SINCE 1.40.0
     *
     * Sets the associated {@link #getLegend legend}.
     */
    setLegend(
      /**
       * ID of an element which becomes the new target of this legend association; alternatively, an element instance
       * may be given
       */
      oLegend: ID | CalendarLegend
    ): this;
    /**
     * Sets a new value for property {@link #getNonWorkingDays nonWorkingDays}.
     *
     * If set, the provided weekdays are displayed as non-working days. Valid values inside the array are 0
     * to 6. (Other values will just be ignored.)
     *
     * If not set, the weekend defined in the locale settings is displayed as non-working days.
     *
     * **Note:** The non working days are only visualized if `intervalType` is set to day.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     */
    setNonWorkingDays(
      /**
       * New value for property `nonWorkingDays`
       */
      sNonWorkingDays?: int[]
    ): this;
    /**
     * Sets a new value for property {@link #getNonWorkingHours nonWorkingHours}.
     *
     * If set, the provided hours are displayed as non-working hours. Valid values inside the array are 0 to
     * 23. (Other values will just be ignored.)
     *
     * **Note:** The non working hours are only visualized if `intervalType` is set to hour.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     */
    setNonWorkingHours(
      /**
       * New value for property `nonWorkingHours`
       */
      sNonWorkingHours?: int[]
    ): this;
    /**
     * @SINCE 1.38.0
     *
     * Sets a new value for property {@link #getShowEmptyIntervalHeaders showEmptyIntervalHeaders}.
     *
     * If set, interval headers are shown even if no `intervalHeaders` are assigned to the visible time frame.
     *
     * If not set, no interval headers are shown if no `intervalHeaders` are assigned.
     *
     * **Note:** This property is only used if `showIntervalHeaders` is set to true.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `true`.
     */
    setShowEmptyIntervalHeaders(
      /**
       * New value for property `showEmptyIntervalHeaders`
       */
      bShowEmptyIntervalHeaders?: boolean
    ): this;
    /**
     * Sets a new value for property {@link #getShowIntervalHeaders showIntervalHeaders}.
     *
     * If set, interval headers are shown like specified in `showEmptyIntervalHeaders`.
     *
     * If not set, no interval headers are shown even if `intervalHeaders` are assigned.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `true`.
     */
    setShowIntervalHeaders(
      /**
       * New value for property `showIntervalHeaders`
       */
      bShowIntervalHeaders?: boolean
    ): this;
    /**
     * Sets a new value for property {@link #getShowSubIntervals showSubIntervals}.
     *
     * If set, subintervals are shown.
     *
     * If the interval type is `Hour`, quarter hours are shown.
     *
     * If the interval type is `Day`, hours are shown.
     *
     * If the interval type is `Month`, days are shown.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `false`.
     */
    setShowSubIntervals(
      /**
       * New value for property `showSubIntervals`
       */
      bShowSubIntervals?: boolean
    ): this;
    /**
     * Sets a new value for property {@link #getStartDate startDate}.
     *
     * Start date, as JavaScript Date object, of the row. As default, the current date is used.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     */
    setStartDate(
      /**
       * New value for property `startDate`
       */
      oStartDate: object
    ): this;
    /**
     * Sets a new value for property {@link #getUpdateCurrentTime updateCurrentTime}.
     *
     * If set the `CalendarRow` triggers a periodic update to visualize the current time.
     *
     * If a lot of `CalendarRow` controls are used in one container control (like `PlanningCalendar`) the periodic
     * update should be triggered only by this container control. Then the container control should call `updateCurrentTimeVisualization`
     * of the `CalendarRow` to update the visualization.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `true`.
     */
    setUpdateCurrentTime(
      /**
       * New value for property `updateCurrentTime`
       */
      bUpdateCurrentTime?: boolean
    ): this;
    /**
     * Sets a new value for property {@link #getWidth width}.
     *
     * Width of the row
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     */
    setWidth(
      /**
       * New value for property `width`
       */
      sWidth?: CSSSize
    ): this;
    /**
     * If the current time is in the visible output of the `CalendarRow`, the indicator for the current time
     * must be positioned.
     *
     * For this, each `CalendarRow` can trigger a timer. But if multiple `CalendarRow`s are used in one container
     * (e.G. `PlanningCalendar`), it is better if the container triggers the interval once and then calls this
     * function of each `CalendarRow`.
     */
    updateCurrentTimeVisualization(): this;
    /**
     * @SINCE 1.38.0
     *
     * Attaches event handler `fnFunction` to the {@link #event:intervalSelect intervalSelect} event of this
     * `sap.ui.unified.CalendarRow`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.unified.CalendarRow` itself.
     *
     * Fired if an interval was selected
     */
    attachIntervalSelect(
      /**
       * The function to be called when the event occurs
       */
      fnFunction: Function,
      /**
       * Context object to call the event handler with. Defaults to this `sap.ui.unified.CalendarRow` itself
       */
      oListener?: object
    ): this;
    /**
     * Attaches event handler `fnFunction` to the {@link #event:leaveRow leaveRow} event of this `sap.ui.unified.CalendarRow`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.unified.CalendarRow` itself.
     *
     * The `CalendarRow` should be left while navigating. (Arrow up or arrow down.) The caller should determine
     * the next control to be focused
     */
    attachLeaveRow(
      /**
       * The function to be called when the event occurs
       */
      fnFunction: Function,
      /**
       * Context object to call the event handler with. Defaults to this `sap.ui.unified.CalendarRow` itself
       */
      oListener?: object
    ): this;
    /**
     * Attaches event handler `fnFunction` to the {@link #event:select select} event of this `sap.ui.unified.CalendarRow`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.unified.CalendarRow` itself.
     *
     * Fired if an appointment was selected
     */
    attachSelect(
      /**
       * The function to be called when the event occurs
       */
      fnFunction: Function,
      /**
       * Context object to call the event handler with. Defaults to this `sap.ui.unified.CalendarRow` itself
       */
      oListener?: object
    ): this;
    /**
     * Attaches event handler `fnFunction` to the {@link #event:startDateChange startDateChange} event of this
     * `sap.ui.unified.CalendarRow`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.unified.CalendarRow` itself.
     *
     * `startDate` was changed while navigating in `CalendarRow`
     */
    attachStartDateChange(
      /**
       * The function to be called when the event occurs
       */
      fnFunction: Function,
      /**
       * Context object to call the event handler with. Defaults to this `sap.ui.unified.CalendarRow` itself
       */
      oListener?: object
    ): this;
  }

  export interface $CalendarRowSettings extends $ControlSettings {
    /**
     * Start date, as JavaScript Date object, of the row. As default, the current date is used.
     */
    startDate?: object | PropertyBindingInfo;

    /**
     * Number of displayed intervals. The size of the intervals is defined with `intervalType`
     */
    intervals?: int | PropertyBindingInfo;

    /**
     * Type of the intervals of the row. The default is one hour.
     */
    intervalType?: CalendarIntervalType | PropertyBindingInfo;

    /**
     * If set, subintervals are shown.
     *
     * If the interval type is `Hour`, quarter hours are shown.
     *
     * If the interval type is `Day`, hours are shown.
     *
     * If the interval type is `Month`, days are shown.
     */
    showSubIntervals?: boolean | PropertyBindingInfo;

    /**
     * If set, interval headers are shown like specified in `showEmptyIntervalHeaders`.
     *
     * If not set, no interval headers are shown even if `intervalHeaders` are assigned.
     */
    showIntervalHeaders?: boolean | PropertyBindingInfo;

    /**
     * @SINCE 1.38.0
     *
     * If set, interval headers are shown even if no `intervalHeaders` are assigned to the visible time frame.
     *
     * If not set, no interval headers are shown if no `intervalHeaders` are assigned.
     *
     * **Note:** This property is only used if `showIntervalHeaders` is set to true.
     */
    showEmptyIntervalHeaders?: boolean | PropertyBindingInfo;

    /**
     * If set, the provided weekdays are displayed as non-working days. Valid values inside the array are 0
     * to 6. (Other values will just be ignored.)
     *
     * If not set, the weekend defined in the locale settings is displayed as non-working days.
     *
     * **Note:** The non working days are only visualized if `intervalType` is set to day.
     */
    nonWorkingDays?: int[] | PropertyBindingInfo;

    /**
     * If set, the provided hours are displayed as non-working hours. Valid values inside the array are 0 to
     * 23. (Other values will just be ignored.)
     *
     * **Note:** The non working hours are only visualized if `intervalType` is set to hour.
     */
    nonWorkingHours?: int[] | PropertyBindingInfo;

    /**
     * Width of the row
     */
    width?: CSSSize | PropertyBindingInfo;

    /**
     * Height of the row
     */
    height?: CSSSize | PropertyBindingInfo;

    /**
     * If set, the `CalendarRow` checks for resize by itself.
     *
     * If a lot of `CalendarRow` controls are used in one container control (like `PlanningCalendar`). the resize
     * checks should be done only by this container control. Then the container control should call `handleResize`
     * of the `CalendarRow` if a resize happens.
     */
    checkResize?: boolean | PropertyBindingInfo;

    /**
     * If set the `CalendarRow` triggers a periodic update to visualize the current time.
     *
     * If a lot of `CalendarRow` controls are used in one container control (like `PlanningCalendar`) the periodic
     * update should be triggered only by this container control. Then the container control should call `updateCurrentTimeVisualization`
     * of the `CalendarRow` to update the visualization.
     */
    updateCurrentTime?: boolean | PropertyBindingInfo;

    /**
     * Defines the mode in which the overlapping appointments are displayed.
     *
     * **Note:** This property takes effect, only if the `intervalType` of the current calendar view is set
     * to `sap.ui.unified.CalendarIntervalType.Month`. On phone devices this property is ignored, and the default
     * value is applied.
     */
    groupAppointmentsMode?:
      | (GroupAppointmentsMode | keyof typeof GroupAppointmentsMode)
      | PropertyBindingInfo;

    /**
     * @SINCE 1.38.0
     * @deprecated (since 1.81) - Please use the `appointmentHeight` with value "Automatic" property instead.
     *
     * If set the appointments without text (only title) are rendered with a smaller height.
     *
     * **Note:** On phone devices this property is ignored, appointments are always rendered in full height
     * to allow touching.
     */
    appointmentsReducedHeight?: boolean | PropertyBindingInfo;

    /**
     * @SINCE 1.40.0
     *
     * Defines the visualization of the `CalendarAppoinment`
     *
     * **Note:** The real visualization depends on the used theme.
     */
    appointmentsVisualization?:
      | (
          | CalendarAppointmentVisualization
          | keyof typeof CalendarAppointmentVisualization
        )
      | PropertyBindingInfo;

    /**
     * @SINCE 1.81.0
     *
     * Defines the height of the CalendarAppoinment
     */
    appointmentHeight?:
      | (CalendarAppointmentHeight | keyof typeof CalendarAppointmentHeight)
      | PropertyBindingInfo;

    /**
     * @SINCE 1.81.0
     * @EXPERIMENTAL (since 1.81.0)
     *
     * Defines rounding of the width of CalendarAppoinment **Note:** This property is applied, when
     * the calendar interval type is day and the view shows more than 20 days
     */
    appointmentRoundWidth?:
      | (
          | CalendarAppointmentRoundWidth
          | keyof typeof CalendarAppointmentRoundWidth
        )
      | PropertyBindingInfo;

    /**
     * Appointments to be displayed in the row. Appointments outside the visible time frame are not rendered.
     *
     * **Note:** For performance reasons, only appointments in the visible time range or nearby should be assigned.
     */
    appointments?:
      | CalendarAppointment[]
      | CalendarAppointment
      | AggregationBindingInfo;

    /**
     * Appointments to be displayed in the top of the intervals. The `intervalHeaders` are used to visualize
     * public holidays and similar things.
     *
     * Appointments outside the visible time frame are not rendered.
     *
     * The `intervalHeaders` always fill whole intervals. If they are shorter than one interval, they are not
     * displayed.
     *
     * **Note:** For performance reasons, only appointments in the visible time range or nearby should be assigned.
     */
    intervalHeaders?:
      | CalendarAppointment[]
      | CalendarAppointment
      | AggregationBindingInfo;

    /**
     * Association to controls / IDs which label this control (see WAI-ARIA attribute aria-labelledby).
     *
     * **Note** These labels are also assigned to the appointments.
     */
    ariaLabelledBy?: Array<Control | string>;

    /**
     * @SINCE 1.40.0
     *
     * Association to the `CalendarLegend` explaining the colors of the `Appointments`.
     *
     * **Note** The legend does not have to be rendered but must exist, and all required types must be assigned.
     */
    legend?: CalendarLegend | string;

    /**
     * Fired if an appointment was selected
     */
    select?: Function;

    /**
     * `startDate` was changed while navigating in `CalendarRow`
     */
    startDateChange?: Function;

    /**
     * The `CalendarRow` should be left while navigating. (Arrow up or arrow down.) The caller should determine
     * the next control to be focused
     */
    leaveRow?: Function;

    /**
     * @SINCE 1.38.0
     *
     * Fired if an interval was selected
     */
    intervalSelect?: Function;
  }
}

declare module "sap/ui/unified/CalendarTimeInterval" {
  import { default as Control, $ControlSettings } from "sap/ui/core/Control";

  import { ID, CSSSize } from "sap/ui/core/library";

  import DateRange from "sap/ui/unified/DateRange";

  import DateTypeRange from "sap/ui/unified/DateTypeRange";

  import Calendar from "sap/ui/unified/Calendar";

  import ElementMetadata from "sap/ui/core/ElementMetadata";

  import CalendarLegend from "sap/ui/unified/CalendarLegend";

  import {
    PropertyBindingInfo,
    AggregationBindingInfo,
  } from "sap/ui/base/ManagedObject";

  /**
   * @SINCE 1.32.0
   *
   * Calendar with granularity of time items displayed in one line.
   */
  export default class CalendarTimeInterval extends Control {
    /**
     * Constructor for a new `CalendarTimeInterval`.
     *
     * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated
     * objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description
     * of the syntax of the settings object.
     */
    constructor(
      /**
       * Initial settings for the new control
       */
      mSettings?: $CalendarTimeIntervalSettings
    );
    /**
     * Constructor for a new `CalendarTimeInterval`.
     *
     * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated
     * objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description
     * of the syntax of the settings object.
     */
    constructor(
      /**
       * ID for the new control, generated automatically if no ID is given
       */
      sId?: string,
      /**
       * Initial settings for the new control
       */
      mSettings?: $CalendarTimeIntervalSettings
    );

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
     * Adds some selectedDate to the aggregation {@link #getSelectedDates selectedDates}.
     */
    addSelectedDate(
      /**
       * The selectedDate to add; if empty, nothing is inserted
       */
      oSelectedDate: DateRange
    ): this;
    /**
     * Adds some specialDate to the aggregation {@link #getSpecialDates specialDates}.
     */
    addSpecialDate(
      /**
       * The specialDate to add; if empty, nothing is inserted
       */
      oSpecialDate: DateTypeRange
    ): this;
    /**
     * Attaches event handler `fnFunction` to the {@link #event:cancel cancel} event of this `sap.ui.unified.CalendarTimeInterval`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.unified.CalendarTimeInterval` itself.
     *
     * Time selection was cancelled
     */
    attachCancel(
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
       * Context object to call the event handler with. Defaults to this `sap.ui.unified.CalendarTimeInterval`
       * itself
       */
      oListener?: object
    ): this;
    /**
     * Attaches event handler `fnFunction` to the {@link #event:select select} event of this `sap.ui.unified.CalendarTimeInterval`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.unified.CalendarTimeInterval` itself.
     *
     * Time selection changed
     */
    attachSelect(
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
       * Context object to call the event handler with. Defaults to this `sap.ui.unified.CalendarTimeInterval`
       * itself
       */
      oListener?: object
    ): this;
    /**
     * @SINCE 1.34.0
     *
     * Attaches event handler `fnFunction` to the {@link #event:startDateChange startDateChange} event of this
     * `sap.ui.unified.CalendarTimeInterval`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.unified.CalendarTimeInterval` itself.
     *
     * `startDate` was changed while navigation in `CalendarTimeInterval`
     */
    attachStartDateChange(
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
       * Context object to call the event handler with. Defaults to this `sap.ui.unified.CalendarTimeInterval`
       * itself
       */
      oListener?: object
    ): this;
    /**
     * Destroys all the selectedDates in the aggregation {@link #getSelectedDates selectedDates}.
     */
    destroySelectedDates(): this;
    /**
     * Destroys all the specialDates in the aggregation {@link #getSpecialDates specialDates}.
     */
    destroySpecialDates(): this;
    /**
     * Detaches event handler `fnFunction` from the {@link #event:cancel cancel} event of this `sap.ui.unified.CalendarTimeInterval`.
     *
     * The passed function and listener object must match the ones used for event registration.
     */
    detachCancel(
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
     * Detaches event handler `fnFunction` from the {@link #event:select select} event of this `sap.ui.unified.CalendarTimeInterval`.
     *
     * The passed function and listener object must match the ones used for event registration.
     */
    detachSelect(
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
     * @SINCE 1.34.0
     *
     * Detaches event handler `fnFunction` from the {@link #event:startDateChange startDateChange} event of
     * this `sap.ui.unified.CalendarTimeInterval`.
     *
     * The passed function and listener object must match the ones used for event registration.
     */
    detachStartDateChange(
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
     * Displays an item in the `CalendarTimeInterval` but doesn't set the focus.
     */
    displayDate(
      /**
       * JavaScript date object for displayed item.
       */
      oDate: object
    ): Calendar;
    /**
     * Creates a new subclass of class sap.ui.unified.CalendarTimeInterval with name `sClassName` and enriches
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
      oClassInfo?: sap.ClassInfo<T, CalendarTimeInterval>,
      /**
       * Constructor function for the metadata object; if not given, it defaults to the metadata implementation
       * used by this class
       */
      FNMetaImpl?: Function
    ): Function;
    /**
     * Fires event {@link #event:cancel cancel} to attached listeners.
     */
    fireCancel(
      /**
       * Parameters to pass along with the event
       */
      mParameters?: object
    ): this;
    /**
     * Fires event {@link #event:select select} to attached listeners.
     */
    fireSelect(
      /**
       * Parameters to pass along with the event
       */
      mParameters?: object
    ): this;
    /**
     * @SINCE 1.34.0
     *
     * Fires event {@link #event:startDateChange startDateChange} to attached listeners.
     */
    fireStartDateChange(
      /**
       * Parameters to pass along with the event
       */
      mParameters?: object
    ): this;
    /**
     * Sets the focused item of the `CalendarTimeInterval`.
     */
    focusDate(
      /**
       * JavaScript date object for focused item.
       */
      oDate: object
    ): Calendar;
    /**
     * Returns array of IDs of the elements which are the current targets of the association {@link #getAriaLabelledBy
     * ariaLabelledBy}.
     */
    getAriaLabelledBy(): ID[];
    /**
     * Gets current value of property {@link #getIntervalMinutes intervalMinutes}.
     *
     * Size of on time interval in minutes, default is 60 minutes.
     *
     * **Note:** the start of the interval calculation is always on the corresponding date at 00:00.
     *
     * An interval longer than 720 minutes is not allowed. Please use the `CalendarDateInterval` instead.
     *
     * A day must be divisible by this interval size. One interval must not include more than one day.
     *
     * Default value is `60`.
     */
    getIntervalMinutes(): int;
    /**
     * Gets current value of property {@link #getIntervalSelection intervalSelection}.
     *
     * If set, interval selection is allowed
     *
     * Default value is `false`.
     */
    getIntervalSelection(): boolean;
    /**
     * Gets current value of property {@link #getItems items}.
     *
     * Number of time items displayed. Default is 12.
     *
     * **Note:** On phones, the maximum number of items displayed in the row is always 6.
     *
     * Default value is `12`.
     */
    getItems(): int;
    /**
     * @SINCE 1.38.5
     *
     * ID of the element which is the current target of the association {@link #getLegend legend}, or `null`.
     */
    getLegend(): ID;
    /**
     * @SINCE 1.38.0
     *
     * Gets current value of property {@link #getMaxDate maxDate}.
     *
     * Maximum date that can be shown and selected in the Calendar. This must be a JavaScript date object.
     *
     * **Note:** If the `maxDate` is set to be before the `minDate`, the `minDate` is set to the begin of the
     * month of the `maxDate`.
     */
    getMaxDate(): object;
    /**
     * Returns a metadata object for class sap.ui.unified.CalendarTimeInterval.
     */
    static getMetadata(): ElementMetadata;
    /**
     * @SINCE 1.38.0
     *
     * Gets current value of property {@link #getMinDate minDate}.
     *
     * Minimum date that can be shown and selected in the Calendar. This must be a JavaScript date object.
     *
     * **Note:** If the `minDate` is set to be after the `maxDate`, the `maxDate` is set to the end of the month
     * of the `minDate`.
     */
    getMinDate(): object;
    /**
     * @SINCE 1.34.0
     *
     * Gets current value of property {@link #getPickerPopup pickerPopup}.
     *
     * If set, the day-, month- and yearPicker opens on a popup
     *
     * Default value is `false`.
     */
    getPickerPopup(): boolean;
    /**
     * Gets content of aggregation {@link #getSelectedDates selectedDates}.
     *
     * Date ranges for selected items of the `CalendarTimeInterval`.
     *
     * If `singleSelection` is set, only the first entry is used.
     */
    getSelectedDates(): DateRange[];
    /**
     * Gets current value of property {@link #getSingleSelection singleSelection}.
     *
     * If set, only a single date or interval, if `intervalSelection` is enabled, can be selected
     *
     * **Note:** Selection of multiple intervals is not supported in the current version.
     *
     * Default value is `true`.
     */
    getSingleSelection(): boolean;
    /**
     * Gets content of aggregation {@link #getSpecialDates specialDates}.
     *
     * Date ranges with type to visualize special items in the `CalendarTimeInterval`. If one interval is assigned
     * to more than one type, only the first one will be used.
     */
    getSpecialDates(): DateTypeRange[];
    /**
     * Gets current value of property {@link #getStartDate startDate}.
     *
     * Start date of the Interval as JavaScript Date object. The time interval corresponding to this Date and
     * `items` and `intervalMinutes` will be the first time in the displayed row.
     */
    getStartDate(): object;
    /**
     * Gets current value of property {@link #getWidth width}.
     *
     * Width of the `CalendarTimeInterval`. The width of the single months depends on this width.
     */
    getWidth(): CSSSize;
    /**
     * Checks for the provided `sap.ui.unified.DateRange` in the aggregation {@link #getSelectedDates selectedDates}.
     * and returns its index if found or -1 otherwise.
     */
    indexOfSelectedDate(
      /**
       * The selectedDate whose index is looked for
       */
      oSelectedDate: DateRange
    ): int;
    /**
     * Checks for the provided `sap.ui.unified.DateTypeRange` in the aggregation {@link #getSpecialDates specialDates}.
     * and returns its index if found or -1 otherwise.
     */
    indexOfSpecialDate(
      /**
       * The specialDate whose index is looked for
       */
      oSpecialDate: DateTypeRange
    ): int;
    /**
     * Inserts a selectedDate into the aggregation {@link #getSelectedDates selectedDates}.
     */
    insertSelectedDate(
      /**
       * The selectedDate to insert; if empty, nothing is inserted
       */
      oSelectedDate: DateRange,
      /**
       * The `0`-based index the selectedDate should be inserted at; for a negative value of `iIndex`, the selectedDate
       * is inserted at position 0; for a value greater than the current size of the aggregation, the selectedDate
       * is inserted at the last position
       */
      iIndex: int
    ): this;
    /**
     * Inserts a specialDate into the aggregation {@link #getSpecialDates specialDates}.
     */
    insertSpecialDate(
      /**
       * The specialDate to insert; if empty, nothing is inserted
       */
      oSpecialDate: DateTypeRange,
      /**
       * The `0`-based index the specialDate should be inserted at; for a negative value of `iIndex`, the specialDate
       * is inserted at position 0; for a value greater than the current size of the aggregation, the specialDate
       * is inserted at the last position
       */
      iIndex: int
    ): this;
    /**
     * Removes all the controls in the association named {@link #getAriaLabelledBy ariaLabelledBy}.
     */
    removeAllAriaLabelledBy(): ID[];
    /**
     * Removes all the controls from the aggregation {@link #getSelectedDates selectedDates}.
     *
     * Additionally, it unregisters them from the hosting UIArea.
     */
    removeAllSelectedDates(): DateRange[];
    /**
     * Removes all the controls from the aggregation {@link #getSpecialDates specialDates}.
     *
     * Additionally, it unregisters them from the hosting UIArea.
     */
    removeAllSpecialDates(): DateTypeRange[];
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
     * Removes a selectedDate from the aggregation {@link #getSelectedDates selectedDates}.
     */
    removeSelectedDate(
      /**
       * The selectedDate to remove or its index or id
       */
      vSelectedDate: int | string | DateRange
    ): DateRange;
    /**
     * Removes a specialDate from the aggregation {@link #getSpecialDates specialDates}.
     */
    removeSpecialDate(
      /**
       * The specialDate to remove or its index or id
       */
      vSpecialDate: int | string | DateTypeRange
    ): DateTypeRange;
    /**
     * Sets a new value for property {@link #getIntervalMinutes intervalMinutes}.
     *
     * Size of on time interval in minutes, default is 60 minutes.
     *
     * **Note:** the start of the interval calculation is always on the corresponding date at 00:00.
     *
     * An interval longer than 720 minutes is not allowed. Please use the `CalendarDateInterval` instead.
     *
     * A day must be divisible by this interval size. One interval must not include more than one day.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `60`.
     */
    setIntervalMinutes(
      /**
       * New value for property `intervalMinutes`
       */
      iIntervalMinutes?: int
    ): this;
    /**
     * Sets a new value for property {@link #getIntervalSelection intervalSelection}.
     *
     * If set, interval selection is allowed
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `false`.
     */
    setIntervalSelection(
      /**
       * New value for property `intervalSelection`
       */
      bIntervalSelection?: boolean
    ): this;
    /**
     * Sets a new value for property {@link #getItems items}.
     *
     * Number of time items displayed. Default is 12.
     *
     * **Note:** On phones, the maximum number of items displayed in the row is always 6.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `12`.
     */
    setItems(
      /**
       * New value for property `items`
       */
      iItems?: int
    ): this;
    /**
     * @SINCE 1.38.5
     *
     * Sets the associated {@link #getLegend legend}.
     */
    setLegend(
      /**
       * ID of an element which becomes the new target of this legend association; alternatively, an element instance
       * may be given
       */
      oLegend: ID | CalendarLegend
    ): this;
    /**
     * @SINCE 1.38.0
     *
     * Sets a new value for property {@link #getMaxDate maxDate}.
     *
     * Maximum date that can be shown and selected in the Calendar. This must be a JavaScript date object.
     *
     * **Note:** If the `maxDate` is set to be before the `minDate`, the `minDate` is set to the begin of the
     * month of the `maxDate`.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     */
    setMaxDate(
      /**
       * New value for property `maxDate`
       */
      oMaxDate?: object
    ): this;
    /**
     * @SINCE 1.38.0
     *
     * Sets a new value for property {@link #getMinDate minDate}.
     *
     * Minimum date that can be shown and selected in the Calendar. This must be a JavaScript date object.
     *
     * **Note:** If the `minDate` is set to be after the `maxDate`, the `maxDate` is set to the end of the month
     * of the `minDate`.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     */
    setMinDate(
      /**
       * New value for property `minDate`
       */
      oMinDate?: object
    ): this;
    /**
     * @SINCE 1.34.0
     *
     * Sets a new value for property {@link #getPickerPopup pickerPopup}.
     *
     * If set, the day-, month- and yearPicker opens on a popup
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `false`.
     */
    setPickerPopup(
      /**
       * New value for property `pickerPopup`
       */
      bPickerPopup?: boolean
    ): this;
    /**
     * Sets a new value for property {@link #getSingleSelection singleSelection}.
     *
     * If set, only a single date or interval, if `intervalSelection` is enabled, can be selected
     *
     * **Note:** Selection of multiple intervals is not supported in the current version.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `true`.
     */
    setSingleSelection(
      /**
       * New value for property `singleSelection`
       */
      bSingleSelection?: boolean
    ): this;
    /**
     * Sets a new value for property {@link #getStartDate startDate}.
     *
     * Start date of the Interval as JavaScript Date object. The time interval corresponding to this Date and
     * `items` and `intervalMinutes` will be the first time in the displayed row.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     */
    setStartDate(
      /**
       * New value for property `startDate`
       */
      oStartDate: object
    ): this;
    /**
     * Sets a new value for property {@link #getWidth width}.
     *
     * Width of the `CalendarTimeInterval`. The width of the single months depends on this width.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     */
    setWidth(
      /**
       * New value for property `width`
       */
      sWidth?: CSSSize
    ): this;
    /**
     * Attaches event handler `fnFunction` to the {@link #event:cancel cancel} event of this `sap.ui.unified.CalendarTimeInterval`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.unified.CalendarTimeInterval` itself.
     *
     * Time selection was cancelled
     */
    attachCancel(
      /**
       * The function to be called when the event occurs
       */
      fnFunction: Function,
      /**
       * Context object to call the event handler with. Defaults to this `sap.ui.unified.CalendarTimeInterval`
       * itself
       */
      oListener?: object
    ): this;
    /**
     * Attaches event handler `fnFunction` to the {@link #event:select select} event of this `sap.ui.unified.CalendarTimeInterval`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.unified.CalendarTimeInterval` itself.
     *
     * Time selection changed
     */
    attachSelect(
      /**
       * The function to be called when the event occurs
       */
      fnFunction: Function,
      /**
       * Context object to call the event handler with. Defaults to this `sap.ui.unified.CalendarTimeInterval`
       * itself
       */
      oListener?: object
    ): this;
    /**
     * @SINCE 1.34.0
     *
     * Attaches event handler `fnFunction` to the {@link #event:startDateChange startDateChange} event of this
     * `sap.ui.unified.CalendarTimeInterval`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.unified.CalendarTimeInterval` itself.
     *
     * `startDate` was changed while navigation in `CalendarTimeInterval`
     */
    attachStartDateChange(
      /**
       * The function to be called when the event occurs
       */
      fnFunction: Function,
      /**
       * Context object to call the event handler with. Defaults to this `sap.ui.unified.CalendarTimeInterval`
       * itself
       */
      oListener?: object
    ): this;
  }

  export interface $CalendarTimeIntervalSettings extends $ControlSettings {
    /**
     * Width of the `CalendarTimeInterval`. The width of the single months depends on this width.
     */
    width?: CSSSize | PropertyBindingInfo;

    /**
     * Start date of the Interval as JavaScript Date object. The time interval corresponding to this Date and
     * `items` and `intervalMinutes` will be the first time in the displayed row.
     */
    startDate?: object | PropertyBindingInfo;

    /**
     * If set, interval selection is allowed
     */
    intervalSelection?: boolean | PropertyBindingInfo;

    /**
     * If set, only a single date or interval, if `intervalSelection` is enabled, can be selected
     *
     * **Note:** Selection of multiple intervals is not supported in the current version.
     */
    singleSelection?: boolean | PropertyBindingInfo;

    /**
     * Number of time items displayed. Default is 12.
     *
     * **Note:** On phones, the maximum number of items displayed in the row is always 6.
     */
    items?: int | PropertyBindingInfo;

    /**
     * Size of on time interval in minutes, default is 60 minutes.
     *
     * **Note:** the start of the interval calculation is always on the corresponding date at 00:00.
     *
     * An interval longer than 720 minutes is not allowed. Please use the `CalendarDateInterval` instead.
     *
     * A day must be divisible by this interval size. One interval must not include more than one day.
     */
    intervalMinutes?: int | PropertyBindingInfo;

    /**
     * @SINCE 1.34.0
     *
     * If set, the day-, month- and yearPicker opens on a popup
     */
    pickerPopup?: boolean | PropertyBindingInfo;

    /**
     * @SINCE 1.38.0
     *
     * Minimum date that can be shown and selected in the Calendar. This must be a JavaScript date object.
     *
     * **Note:** If the `minDate` is set to be after the `maxDate`, the `maxDate` is set to the end of the month
     * of the `minDate`.
     */
    minDate?: object | PropertyBindingInfo;

    /**
     * @SINCE 1.38.0
     *
     * Maximum date that can be shown and selected in the Calendar. This must be a JavaScript date object.
     *
     * **Note:** If the `maxDate` is set to be before the `minDate`, the `minDate` is set to the begin of the
     * month of the `maxDate`.
     */
    maxDate?: object | PropertyBindingInfo;

    /**
     * Date ranges for selected items of the `CalendarTimeInterval`.
     *
     * If `singleSelection` is set, only the first entry is used.
     */
    selectedDates?: DateRange[] | DateRange | AggregationBindingInfo;

    /**
     * Date ranges with type to visualize special items in the `CalendarTimeInterval`. If one interval is assigned
     * to more than one type, only the first one will be used.
     */
    specialDates?: DateTypeRange[] | DateTypeRange | AggregationBindingInfo;

    /**
     * Association to controls / IDs which label this control (see WAI-ARIA attribute aria-labelledby).
     */
    ariaLabelledBy?: Array<Control | string>;

    /**
     * @SINCE 1.38.5
     *
     * Association to the `CalendarLegend` explaining the colors of the `specialDates`.
     *
     * **Note** The legend does not have to be rendered but must exist, and all required types must be assigned.
     */
    legend?: CalendarLegend | string;

    /**
     * Time selection changed
     */
    select?: Function;

    /**
     * Time selection was cancelled
     */
    cancel?: Function;

    /**
     * @SINCE 1.34.0
     *
     * `startDate` was changed while navigation in `CalendarTimeInterval`
     */
    startDateChange?: Function;
  }
}

declare module "sap/ui/unified/ColorPicker" {
  import { default as Control, $ControlSettings } from "sap/ui/core/Control";

  import ColorPickerDisplayMode from "sap/ui/unified/ColorPickerDisplayMode";

  import ElementMetadata from "sap/ui/core/ElementMetadata";

  import { ColorPickerMode } from "sap/ui/unified/library";

  import { PropertyBindingInfo } from "sap/ui/base/ManagedObject";

  /**
   * @SINCE 1.48.0
   *
   * Enables the user to select a color. The color can be defined using HEX, RGB, or HSV values or a CSS color
   * name.
   *
   * **Note:** Keep in mind that this control needs either `sap.m` or `sap.ui.commons` library to be loaded
   * in order to work as it depends on controls available in one or the other library.
   */
  export default class ColorPicker extends Control {
    /**
     * Constructor for a new `ColorPicker`.
     *
     * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated
     * objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description
     * of the syntax of the settings object.
     */
    constructor(
      /**
       * Initial settings for the new control
       */
      mSettings?: $ColorPickerSettings
    );
    /**
     * Constructor for a new `ColorPicker`.
     *
     * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated
     * objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description
     * of the syntax of the settings object.
     */
    constructor(
      /**
       * ID for the new control, generated automatically if no ID is given
       */
      sId?: string,
      /**
       * Initial settings for the new control
       */
      mSettings?: $ColorPickerSettings
    );

    /**
     * @SINCE 1.48.0
     *
     * Attaches event handler `fnFunction` to the {@link #event:change change} event of this `sap.ui.unified.ColorPicker`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.unified.ColorPicker` itself.
     *
     * Fired when the value is changed by user action.
     *
     * **Note:** When the user action is mouse dragging, the `change` event fires on the mouseup event.
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
      fnFunction: Function,
      /**
       * Context object to call the event handler with. Defaults to this `sap.ui.unified.ColorPicker` itself
       */
      oListener?: object
    ): this;
    /**
     * @SINCE 1.48.0
     *
     * Attaches event handler `fnFunction` to the {@link #event:liveChange liveChange} event of this `sap.ui.unified.ColorPicker`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.unified.ColorPicker` itself.
     *
     * Fired when the value is changed during the mouse move.
     *
     * **Note:** When the user action is mouse move, the `liveChange` event is fired during the mousedown event.
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
      fnFunction: Function,
      /**
       * Context object to call the event handler with. Defaults to this `sap.ui.unified.ColorPicker` itself
       */
      oListener?: object
    ): this;
    /**
     * @SINCE 1.48.0
     *
     * Detaches event handler `fnFunction` from the {@link #event:change change} event of this `sap.ui.unified.ColorPicker`.
     *
     * The passed function and listener object must match the ones used for event registration.
     */
    detachChange(
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
     * @SINCE 1.48.0
     *
     * Detaches event handler `fnFunction` from the {@link #event:liveChange liveChange} event of this `sap.ui.unified.ColorPicker`.
     *
     * The passed function and listener object must match the ones used for event registration.
     */
    detachLiveChange(
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
     * Creates a new subclass of class sap.ui.unified.ColorPicker with name `sClassName` and enriches it with
     * the information contained in `oClassInfo`.
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
      oClassInfo?: sap.ClassInfo<T, ColorPicker>,
      /**
       * Constructor function for the metadata object; if not given, it defaults to the metadata implementation
       * used by this class
       */
      FNMetaImpl?: Function
    ): Function;
    /**
     * @SINCE 1.48.0
     *
     * Fires event {@link #event:change change} to attached listeners.
     */
    fireChange(
      /**
       * Parameters to pass along with the event
       */
      mParameters?: {
        /**
         * Parameter containing the RED value (0-255).
         */
        r?: int;
        /**
         * Parameter containing the GREEN value (0-255).
         */
        g?: int;
        /**
         * Parameter containing the BLUE value (0-255).
         */
        b?: int;
        /**
         * Parameter containing the HUE value (0-360).
         */
        h?: int;
        /**
         * Parameter containing the SATURATION value (0-100).
         */
        s?: int;
        /**
         * Parameter containing the VALUE value (0-100).
         */
        v?: int;
        /**
         * Parameter containing the LIGHTNESS value (0-100).
         */
        l?: int;
        /**
         * Parameter containing the Hexadecimal string (#FFFFFF).
         */
        hex?: string;
        /**
         * Parameter containing the alpha value (transparency).
         */
        alpha?: string;
      }
    ): this;
    /**
     * @SINCE 1.48.0
     *
     * Fires event {@link #event:liveChange liveChange} to attached listeners.
     */
    fireLiveChange(
      /**
       * Parameters to pass along with the event
       */
      mParameters?: {
        /**
         * Parameter containing the RED value (0-255).
         */
        r?: int;
        /**
         * Parameter containing the GREEN value (0-255).
         */
        g?: int;
        /**
         * Parameter containing the BLUE value (0-255).
         */
        b?: int;
        /**
         * Parameter containing the HUE value (0-360).
         */
        h?: int;
        /**
         * Parameter containing the SATURATION value (0-100).
         */
        s?: int;
        /**
         * Parameter containing the VALUE value (0-100).
         */
        v?: int;
        /**
         * Parameter containing the LIGHTNESS value (0-100).
         */
        l?: int;
        /**
         * Parameter containing the Hexadecimal string (#FFFFFF).
         */
        hex?: string;
        /**
         * Parameter containing the alpha value (transparency).
         */
        alpha?: string;
      }
    ): this;
    /**
     * @SINCE 1.48.0
     *
     * Gets current value of property {@link #getColorString colorString}.
     *
     * Determines the input parameter that can be a string of type HEX, RGB, HSV, or a CSS color name:
     *
     * 	 - HEX - #FFFFFF
     * 	 - RGB - rgb(255,255,255)
     * 	 - HSV - hsv(360,100,100)
     * 	 - CSS - red  **Note:** The output parameter is an RGB string of the current color.
     */
    getColorString(): string;
    /**
     * @SINCE 1.58
     *
     * Gets current value of property {@link #getDisplayMode displayMode}.
     *
     * Determines the display mode of the `ColorPicker` among three types - Default, Large and Simplified
     *
     * Default value is `Default`.
     */
    getDisplayMode():
      | ColorPickerDisplayMode
      | keyof typeof ColorPickerDisplayMode;
    /**
     * Returns a metadata object for class sap.ui.unified.ColorPicker.
     */
    static getMetadata(): ElementMetadata;
    /**
     * @SINCE 1.48.0
     *
     * Gets current value of property {@link #getMode mode}.
     *
     * Determines the color representation mode the ColorPicker works with - Hue, Saturation, and Value (HSV)
     * or Hue, Saturation, and Lightness (HSL).
     *
     * **Note:** The `ColorPickerMode.HSV` is set by default. For color composing with alpha values, please
     * set the mode to `ColorPickerMode.HSL`
     *
     * Default value is `HSV`.
     */
    getMode(): ColorPickerMode | keyof typeof ColorPickerMode;
    /**
     * @SINCE 1.48.0
     *
     * Gets current RGB values.
     */
    getRGB(): object;
    /**
     * @SINCE 1.48.0
     *
     * Checks the validity of the CSS color string.
     */
    isColor(
      /**
       * CSS color string to be validated
       */
      sColorString: string
    ): boolean;
    /**
     * @SINCE 1.48.0
     *
     * Sets a new value for property {@link #getColorString colorString}.
     *
     * Determines the input parameter that can be a string of type HEX, RGB, HSV, or a CSS color name:
     *
     * 	 - HEX - #FFFFFF
     * 	 - RGB - rgb(255,255,255)
     * 	 - HSV - hsv(360,100,100)
     * 	 - CSS - red  **Note:** The output parameter is an RGB string of the current color.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     */
    setColorString(
      /**
       * New value for property `colorString`
       */
      sColorString?: string
    ): this;
    /**
     * Setter for `displayMode` property.
     */
    setDisplayMode(
      /**
       * control displayMode enum
       */
      sDisplayMode: ColorPickerDisplayMode | keyof typeof ColorPickerDisplayMode
    ): void;
    /**
     * Setter for `mode` property.
     */
    setMode(
      /**
       * control mode enum
       */
      sMode: ColorPickerMode | keyof typeof ColorPickerMode,
      /**
       * should control invalidation be suppressed
       */
      bSuppressInvalidate: boolean
    ): void;
    /**
     * @SINCE 1.48.0
     *
     * Attaches event handler `fnFunction` to the {@link #event:change change} event of this `sap.ui.unified.ColorPicker`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.unified.ColorPicker` itself.
     *
     * Fired when the value is changed by user action.
     *
     * **Note:** When the user action is mouse dragging, the `change` event fires on the mouseup event.
     */
    attachChange(
      /**
       * The function to be called when the event occurs
       */
      fnFunction: Function,
      /**
       * Context object to call the event handler with. Defaults to this `sap.ui.unified.ColorPicker` itself
       */
      oListener?: object
    ): this;
    /**
     * @SINCE 1.48.0
     *
     * Attaches event handler `fnFunction` to the {@link #event:liveChange liveChange} event of this `sap.ui.unified.ColorPicker`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.unified.ColorPicker` itself.
     *
     * Fired when the value is changed during the mouse move.
     *
     * **Note:** When the user action is mouse move, the `liveChange` event is fired during the mousedown event.
     */
    attachLiveChange(
      /**
       * The function to be called when the event occurs
       */
      fnFunction: Function,
      /**
       * Context object to call the event handler with. Defaults to this `sap.ui.unified.ColorPicker` itself
       */
      oListener?: object
    ): this;
  }

  export interface $ColorPickerSettings extends $ControlSettings {
    /**
     * @SINCE 1.48.0
     *
     * Determines the input parameter that can be a string of type HEX, RGB, HSV, or a CSS color name:
     *
     * 	 - HEX - #FFFFFF
     * 	 - RGB - rgb(255,255,255)
     * 	 - HSV - hsv(360,100,100)
     * 	 - CSS - red  **Note:** The output parameter is an RGB string of the current color.
     */
    colorString?: string | PropertyBindingInfo;

    /**
     * @SINCE 1.48.0
     *
     * Determines the color representation mode the ColorPicker works with - Hue, Saturation, and Value (HSV)
     * or Hue, Saturation, and Lightness (HSL).
     *
     * **Note:** The `ColorPickerMode.HSV` is set by default. For color composing with alpha values, please
     * set the mode to `ColorPickerMode.HSL`
     */
    mode?:
      | (ColorPickerMode | keyof typeof ColorPickerMode)
      | PropertyBindingInfo;

    /**
     * @SINCE 1.58
     *
     * Determines the display mode of the `ColorPicker` among three types - Default, Large and Simplified
     */
    displayMode?:
      | (ColorPickerDisplayMode | keyof typeof ColorPickerDisplayMode)
      | PropertyBindingInfo;

    /**
     * @SINCE 1.48.0
     *
     * Fired when the value is changed by user action.
     *
     * **Note:** When the user action is mouse dragging, the `change` event fires on the mouseup event.
     */
    change?: Function;

    /**
     * @SINCE 1.48.0
     *
     * Fired when the value is changed during the mouse move.
     *
     * **Note:** When the user action is mouse move, the `liveChange` event is fired during the mousedown event.
     */
    liveChange?: Function;
  }
}

declare module "sap/ui/unified/ColorPickerDisplayMode" {
  /**
   * @SINCE 1.58.0
   *
   * Types of a color picker display mode
   */
  enum ColorPickerDisplayMode {
    /**
     * Default display mode.
     */
    Default = "Default",
    /**
     * Large display mode.
     */
    Large = "Large",
    /**
     * Simplified display mode.
     */
    Simplified = "Simplified",
  }
  export default ColorPickerDisplayMode;
}

declare module "sap/ui/unified/ColorPickerPopover" {
  import { default as Control, $ControlSettings } from "sap/ui/core/Control";

  import ColorPickerDisplayMode from "sap/ui/unified/ColorPickerDisplayMode";

  import ElementMetadata from "sap/ui/core/ElementMetadata";

  import { ColorPickerMode } from "sap/ui/unified/library";

  import { PropertyBindingInfo } from "sap/ui/base/ManagedObject";

  /**
   * @SINCE 1.60
   *
   * A thin wrapper over {@link sap.ui.unified.ColorPicker} allowing the latter to be used in a popover.
   */
  export default class ColorPickerPopover extends Control {
    /**
     * Constructor for a new `ColorPickerPopover`.
     *
     * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated
     * objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description
     * of the syntax of the settings object.
     */
    constructor(
      /**
       * Initial settings for the new control
       */
      mSettings?: $ColorPickerPopoverSettings
    );
    /**
     * Constructor for a new `ColorPickerPopover`.
     *
     * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated
     * objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description
     * of the syntax of the settings object.
     */
    constructor(
      /**
       * ID for the new control, generated automatically if no ID is given
       */
      sId?: string,
      /**
       * Initial settings for the new control
       */
      mSettings?: $ColorPickerPopoverSettings
    );

    /**
     * @SINCE 1.60.0
     *
     * Attaches event handler `fnFunction` to the {@link #event:change change} event of this `sap.ui.unified.ColorPickerPopover`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.unified.ColorPickerPopover` itself.
     *
     * Fired when the submit button of the popover is clicked.
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
      fnFunction: Function,
      /**
       * Context object to call the event handler with. Defaults to this `sap.ui.unified.ColorPickerPopover` itself
       */
      oListener?: object
    ): this;
    /**
     * @SINCE 1.85
     *
     * Attaches event handler `fnFunction` to the {@link #event:liveChange liveChange} event of this `sap.ui.unified.ColorPickerPopover`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.unified.ColorPickerPopover` itself.
     *
     * Fired when the value is changed by user interaction in the internal ColorPicker
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
      fnFunction: Function,
      /**
       * Context object to call the event handler with. Defaults to this `sap.ui.unified.ColorPickerPopover` itself
       */
      oListener?: object
    ): this;
    /**
     * Closes the `ColorPickerPopover`.
     */
    close(): Control;
    /**
     * @SINCE 1.60.0
     *
     * Detaches event handler `fnFunction` from the {@link #event:change change} event of this `sap.ui.unified.ColorPickerPopover`.
     *
     * The passed function and listener object must match the ones used for event registration.
     */
    detachChange(
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
     * @SINCE 1.85
     *
     * Detaches event handler `fnFunction` from the {@link #event:liveChange liveChange} event of this `sap.ui.unified.ColorPickerPopover`.
     *
     * The passed function and listener object must match the ones used for event registration.
     */
    detachLiveChange(
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
     * Creates a new subclass of class sap.ui.unified.ColorPickerPopover with name `sClassName` and enriches
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
      oClassInfo?: sap.ClassInfo<T, ColorPickerPopover>,
      /**
       * Constructor function for the metadata object; if not given, it defaults to the metadata implementation
       * used by this class
       */
      FNMetaImpl?: Function
    ): Function;
    /**
     * @SINCE 1.60.0
     *
     * Fires event {@link #event:change change} to attached listeners.
     */
    fireChange(
      /**
       * Parameters to pass along with the event
       */
      mParameters?: {
        /**
         * Parameter containing the RED value (0-255).
         */
        r?: int;
        /**
         * Parameter containing the GREEN value (0-255).
         */
        g?: int;
        /**
         * Parameter containing the BLUE value (0-255).
         */
        b?: int;
        /**
         * Parameter containing the HUE value (0-360).
         */
        h?: int;
        /**
         * Parameter containing the SATURATION value (0-100).
         */
        s?: int;
        /**
         * Parameter containing the VALUE value (0-100).
         */
        v?: int;
        /**
         * Parameter containing the LIGHTNESS value (0-100).
         */
        l?: int;
        /**
         * Parameter containing the Hexadecimal string (#FFFFFF).
         */
        hex?: string;
        /**
         * Parameter containing the alpha value (transparency).
         */
        alpha?: string;
      }
    ): this;
    /**
     * @SINCE 1.85
     *
     * Fires event {@link #event:liveChange liveChange} to attached listeners.
     */
    fireLiveChange(
      /**
       * Parameters to pass along with the event
       */
      mParameters?: {
        /**
         * Parameter containing the RED value (0-255).
         */
        r?: int;
        /**
         * Parameter containing the GREEN value (0-255).
         */
        g?: int;
        /**
         * Parameter containing the BLUE value (0-255).
         */
        b?: int;
        /**
         * Parameter containing the HUE value (0-360).
         */
        h?: int;
        /**
         * Parameter containing the SATURATION value (0-100).
         */
        s?: int;
        /**
         * Parameter containing the VALUE value (0-100).
         */
        v?: int;
        /**
         * Parameter containing the LIGHTNESS value (0-100).
         */
        l?: int;
        /**
         * Parameter containing the Hexadecimal string (#FFFFFF).
         */
        hex?: string;
        /**
         * Parameter containing the alpha value (transparency).
         */
        alpha?: string;
      }
    ): this;
    /**
     * @SINCE 1.60.0
     *
     * Gets current value of property {@link #getColorString colorString}.
     *
     * Determines the input parameter that can be a string of type HEX, RGB, HSV, or a CSS color name:
     *
     * 	 - HEX - #FFFFFF
     * 	 - RGB - rgb(255,255,255)
     * 	 - HSV - hsv(360,100,100)
     * 	 - CSS - red  **Note:** The output parameter is an RGB string of the current color.
     */
    getColorString(): string;
    /**
     * @SINCE 1.60.0
     *
     * Gets current value of property {@link #getDisplayMode displayMode}.
     *
     * Determines the display mode of the `ColorPicker` among three types - Default, Large and Simplified
     *
     * Default value is `Default`.
     */
    getDisplayMode():
      | ColorPickerDisplayMode
      | keyof typeof ColorPickerDisplayMode;
    /**
     * Returns a metadata object for class sap.ui.unified.ColorPickerPopover.
     */
    static getMetadata(): ElementMetadata;
    /**
     * @SINCE 1.60.0
     *
     * Gets current value of property {@link #getMode mode}.
     *
     * Determines the color mode of the `ColorPicker`.
     *
     * Default value is `HSV`.
     */
    getMode(): ColorPickerMode | keyof typeof ColorPickerMode;
    /**
     * Opens the `ColorPickerPopover`. The popover is positioned relative to the control parameter on tablet
     * or desktop and is full screen on phone. Therefore the openBy parameter is only used on tablet or desktop
     * and is ignored on phone.
     */
    openBy(
      /**
       * When this control is displayed on tablet or desktop, the `ColorPickerPopover` is positioned relative
       * to this control
       */
      openBy: Object
    ): Object;
    /**
     * @SINCE 1.60.0
     *
     * Sets a new value for property {@link #getColorString colorString}.
     *
     * Determines the input parameter that can be a string of type HEX, RGB, HSV, or a CSS color name:
     *
     * 	 - HEX - #FFFFFF
     * 	 - RGB - rgb(255,255,255)
     * 	 - HSV - hsv(360,100,100)
     * 	 - CSS - red  **Note:** The output parameter is an RGB string of the current color.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     */
    setColorString(
      /**
       * New value for property `colorString`
       */
      sColorString?: string
    ): this;
    /**
     * @SINCE 1.60.0
     *
     * Sets a new value for property {@link #getDisplayMode displayMode}.
     *
     * Determines the display mode of the `ColorPicker` among three types - Default, Large and Simplified
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `Default`.
     */
    setDisplayMode(
      /**
       * New value for property `displayMode`
       */
      sDisplayMode?:
        | ColorPickerDisplayMode
        | keyof typeof ColorPickerDisplayMode
    ): this;
    /**
     * @SINCE 1.60.0
     *
     * Sets a new value for property {@link #getMode mode}.
     *
     * Determines the color mode of the `ColorPicker`.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `HSV`.
     */
    setMode(
      /**
       * New value for property `mode`
       */
      sMode?: ColorPickerMode | keyof typeof ColorPickerMode
    ): this;
    /**
     * @SINCE 1.60.0
     *
     * Attaches event handler `fnFunction` to the {@link #event:change change} event of this `sap.ui.unified.ColorPickerPopover`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.unified.ColorPickerPopover` itself.
     *
     * Fired when the submit button of the popover is clicked.
     */
    attachChange(
      /**
       * The function to be called when the event occurs
       */
      fnFunction: Function,
      /**
       * Context object to call the event handler with. Defaults to this `sap.ui.unified.ColorPickerPopover` itself
       */
      oListener?: object
    ): this;
    /**
     * @SINCE 1.85
     *
     * Attaches event handler `fnFunction` to the {@link #event:liveChange liveChange} event of this `sap.ui.unified.ColorPickerPopover`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.unified.ColorPickerPopover` itself.
     *
     * Fired when the value is changed by user interaction in the internal ColorPicker
     */
    attachLiveChange(
      /**
       * The function to be called when the event occurs
       */
      fnFunction: Function,
      /**
       * Context object to call the event handler with. Defaults to this `sap.ui.unified.ColorPickerPopover` itself
       */
      oListener?: object
    ): this;
  }

  export interface $ColorPickerPopoverSettings extends $ControlSettings {
    /**
     * @SINCE 1.60.0
     *
     * Determines the input parameter that can be a string of type HEX, RGB, HSV, or a CSS color name:
     *
     * 	 - HEX - #FFFFFF
     * 	 - RGB - rgb(255,255,255)
     * 	 - HSV - hsv(360,100,100)
     * 	 - CSS - red  **Note:** The output parameter is an RGB string of the current color.
     */
    colorString?: string | PropertyBindingInfo;

    /**
     * @SINCE 1.60.0
     *
     * Determines the color mode of the `ColorPicker`.
     */
    mode?:
      | (ColorPickerMode | keyof typeof ColorPickerMode)
      | PropertyBindingInfo;

    /**
     * @SINCE 1.60.0
     *
     * Determines the display mode of the `ColorPicker` among three types - Default, Large and Simplified
     */
    displayMode?:
      | (ColorPickerDisplayMode | keyof typeof ColorPickerDisplayMode)
      | PropertyBindingInfo;

    /**
     * @SINCE 1.60.0
     *
     * Fired when the submit button of the popover is clicked.
     */
    change?: Function;

    /**
     * @SINCE 1.85
     *
     * Fired when the value is changed by user interaction in the internal ColorPicker
     */
    liveChange?: Function;
  }
}

declare module "sap/ui/unified/ContentSwitcher" {
  import { default as Control, $ControlSettings } from "sap/ui/core/Control";

  import ElementMetadata from "sap/ui/core/ElementMetadata";

  import {
    PropertyBindingInfo,
    AggregationBindingInfo,
  } from "sap/ui/base/ManagedObject";

  /**
   * @SINCE 1.16.0
   * @deprecated (since 1.44.0)
   * @EXPERIMENTAL (since 1.16.0)
   *
   * Switches between two control areas and animates it via CSS transitions
   */
  export default class ContentSwitcher extends Control {
    /**
     * Constructor for a new ContentSwitcher.
     *
     * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated
     * objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description
     * of the syntax of the settings object.
     */
    constructor(
      /**
       * initial settings for the new control
       */
      mSettings?: $ContentSwitcherSettings
    );
    /**
     * Constructor for a new ContentSwitcher.
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
      mSettings?: $ContentSwitcherSettings
    );

    /**
     * Adds some content1 to the aggregation {@link #getContent1 content1}.
     */
    addContent1(
      /**
       * The content1 to add; if empty, nothing is inserted
       */
      oContent1: Control
    ): this;
    /**
     * Adds some content2 to the aggregation {@link #getContent2 content2}.
     */
    addContent2(
      /**
       * The content2 to add; if empty, nothing is inserted
       */
      oContent2: Control
    ): this;
    /**
     * Destroys all the content1 in the aggregation {@link #getContent1 content1}.
     */
    destroyContent1(): this;
    /**
     * Destroys all the content2 in the aggregation {@link #getContent2 content2}.
     */
    destroyContent2(): this;
    /**
     * Creates a new subclass of class sap.ui.unified.ContentSwitcher with name `sClassName` and enriches it
     * with the information contained in `oClassInfo`.
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
      oClassInfo?: sap.ClassInfo<T, ContentSwitcher>,
      /**
       * Constructor function for the metadata object; if not given, it defaults to the metadata implementation
       * used by this class
       */
      FNMetaImpl?: Function
    ): Function;
    /**
     * Gets current value of property {@link #getActiveContent activeContent}.
     *
     * The number of the currently active content (1 or 2).
     *
     * Default value is `1`.
     */
    getActiveContent(): int;
    /**
     * Gets current value of property {@link #getAnimation animation}.
     *
     * Set the used animation when changing content. This just sets a CSS-class named "sapUiUnifiedACSwitcherAnimation"
     * + this value on the root element of the control. The animation has to be implemented in CSS. This also
     * enables applications to implement their own animations via CSS by reacting to the parent class. See the
     * types sap.ui.unified.ContentSwitcherAnimation for default implementations.
     *
     * Default value is `'None'`.
     */
    getAnimation(): string;
    /**
     * Gets content of aggregation {@link #getContent1 content1}.
     *
     * The controls that should be shown in the first content
     */
    getContent1(): Control[];
    /**
     * Gets content of aggregation {@link #getContent2 content2}.
     *
     * The controls that should be shown in the second content
     */
    getContent2(): Control[];
    /**
     * Returns a metadata object for class sap.ui.unified.ContentSwitcher.
     */
    static getMetadata(): ElementMetadata;
    /**
     * Checks for the provided `sap.ui.core.Control` in the aggregation {@link #getContent1 content1}. and returns
     * its index if found or -1 otherwise.
     */
    indexOfContent1(
      /**
       * The content1 whose index is looked for
       */
      oContent1: Control
    ): int;
    /**
     * Checks for the provided `sap.ui.core.Control` in the aggregation {@link #getContent2 content2}. and returns
     * its index if found or -1 otherwise.
     */
    indexOfContent2(
      /**
       * The content2 whose index is looked for
       */
      oContent2: Control
    ): int;
    /**
     * Inserts a content1 into the aggregation {@link #getContent1 content1}.
     */
    insertContent1(
      /**
       * The content1 to insert; if empty, nothing is inserted
       */
      oContent1: Control,
      /**
       * The `0`-based index the content1 should be inserted at; for a negative value of `iIndex`, the content1
       * is inserted at position 0; for a value greater than the current size of the aggregation, the content1
       * is inserted at the last position
       */
      iIndex: int
    ): this;
    /**
     * Inserts a content2 into the aggregation {@link #getContent2 content2}.
     */
    insertContent2(
      /**
       * The content2 to insert; if empty, nothing is inserted
       */
      oContent2: Control,
      /**
       * The `0`-based index the content2 should be inserted at; for a negative value of `iIndex`, the content2
       * is inserted at position 0; for a value greater than the current size of the aggregation, the content2
       * is inserted at the last position
       */
      iIndex: int
    ): this;
    /**
     * Removes all the controls from the aggregation {@link #getContent1 content1}.
     *
     * Additionally, it unregisters them from the hosting UIArea.
     */
    removeAllContent1(): Control[];
    /**
     * Removes all the controls from the aggregation {@link #getContent2 content2}.
     *
     * Additionally, it unregisters them from the hosting UIArea.
     */
    removeAllContent2(): Control[];
    /**
     * Removes a content1 from the aggregation {@link #getContent1 content1}.
     */
    removeContent1(
      /**
       * The content1 to remove or its index or id
       */
      vContent1: int | string | Control
    ): Control;
    /**
     * Removes a content2 from the aggregation {@link #getContent2 content2}.
     */
    removeContent2(
      /**
       * The content2 to remove or its index or id
       */
      vContent2: int | string | Control
    ): Control;
    /**
     * Sets a new value for property {@link #getActiveContent activeContent}.
     *
     * The number of the currently active content (1 or 2).
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `1`.
     */
    setActiveContent(
      /**
       * New value for property `activeContent`
       */
      iActiveContent?: int
    ): this;
    /**
     * Sets a new value for property {@link #getAnimation animation}.
     *
     * Set the used animation when changing content. This just sets a CSS-class named "sapUiUnifiedACSwitcherAnimation"
     * + this value on the root element of the control. The animation has to be implemented in CSS. This also
     * enables applications to implement their own animations via CSS by reacting to the parent class. See the
     * types sap.ui.unified.ContentSwitcherAnimation for default implementations.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `'None'`.
     */
    setAnimation(
      /**
       * New value for property `animation`
       */
      sAnimation?: string
    ): this;
    /**
     * Changes the currently active content to the other one. If content 1 is active, content 2 will be activated
     * and the other way around.
     */
    switchContent(): void;
  }

  export interface $ContentSwitcherSettings extends $ControlSettings {
    /**
     * Set the used animation when changing content. This just sets a CSS-class named "sapUiUnifiedACSwitcherAnimation"
     * + this value on the root element of the control. The animation has to be implemented in CSS. This also
     * enables applications to implement their own animations via CSS by reacting to the parent class. See the
     * types sap.ui.unified.ContentSwitcherAnimation for default implementations.
     */
    animation?: string | PropertyBindingInfo;

    /**
     * The number of the currently active content (1 or 2).
     */
    activeContent?: int | PropertyBindingInfo;

    /**
     * The controls that should be shown in the first content
     */
    content1?: Control[] | Control | AggregationBindingInfo;

    /**
     * The controls that should be shown in the second content
     */
    content2?: Control[] | Control | AggregationBindingInfo;
  }
}

declare module "sap/ui/unified/Currency" {
  import { default as Control, $ControlSettings } from "sap/ui/core/Control";

  import ElementMetadata from "sap/ui/core/ElementMetadata";

  import { PropertyBindingInfo } from "sap/ui/base/ManagedObject";

  /**
   * @SINCE 1.21.1
   *
   * A text view which displays currency values and aligns them at the decimal point.
   *
   * Overview:
   *
   * The currency control consists of an amount, which is formatted automatically according to the user’s
   * locale (using delimiter symbols for the decimal point and thousand separators) and to the currency set
   * for this specific number (number of decimal places).
   *
   * The currency is expressed as a three-letter code.
   *
   * Usage:
   *
   * When to use
   * 	 - To display amounts with different currencies in a vertical layout, such as in a table, list, or form,
   * 			and it is important that the user is able to compare the amounts.
   *
   * When not to use
   * 	 - To display amounts with the same currency in a table. Use the {@link sap.m.ObjectNumber} instead.
   *
   * 	 - to display a number with a unit of measurement that is not a currency. Use the {@link sap.m.ObjectNumber}
   * 			instead.
   * 	 - To display an amount in a structure other than a list, table, or form.
   *
   * Responsive behavior:
   *
   * The control supports amounts smaller than 100 trillion, which still fit on a phone screen in portrait
   * mode. For larger amounts, the unit of measurement wraps to the next line, which makes it difficult to
   * compare the amounts.
   */
  export default class Currency extends Control {
    /**
     * Constructor for a new `Currency`.
     *
     * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated
     * objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description
     * of the syntax of the settings object.
     */
    constructor(
      /**
       * Initial settings for the new control
       */
      mSettings?: $CurrencySettings
    );
    /**
     * Constructor for a new `Currency`.
     *
     * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated
     * objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description
     * of the syntax of the settings object.
     */
    constructor(
      /**
       * ID for the new control, generated automatically if no ID is given
       */
      sId?: string,
      /**
       * Initial settings for the new control
       */
      mSettings?: $CurrencySettings
    );

    /**
     * Creates a new subclass of class sap.ui.unified.Currency with name `sClassName` and enriches it with the
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
      oClassInfo?: sap.ClassInfo<T, Currency>,
      /**
       * Constructor function for the metadata object; if not given, it defaults to the metadata implementation
       * used by this class
       */
      FNMetaImpl?: Function
    ): Function;
    /**
     * See:
     * 	sap.ui.core.Control#getAccessibilityInfo
     */
    getAccessibilityInfo(): Object;
    /**
     * Gets current value of property {@link #getCurrency currency}.
     *
     * Determines the displayed currency code (ISO 4217).
     *
     * **Note:** If a * character is set instead of currency code, only the character itself will be rendered,
     * ignoring the `value` property.
     */
    getCurrency(): string;
    /**
     * Get symbol of the currency, if available.
     */
    getCurrencySymbol(): string;
    /**
     * @SINCE 1.89
     *
     * Gets current value of property {@link #getEmptyIndicatorMode emptyIndicatorMode}.
     *
     * Specifies if an empty indicator should be displayed when there is no text.
     *
     * Default value is `Off`.
     */
    getEmptyIndicatorMode(): any;
    /**
     * The formatted value.
     */
    getFormattedValue(): string;
    /**
     * Gets current value of property {@link #getMaxPrecision maxPrecision}.
     *
     * Defines the space that is available for the precision of the various currencies.
     */
    getMaxPrecision(): int;
    /**
     * Returns a metadata object for class sap.ui.unified.Currency.
     */
    static getMetadata(): ElementMetadata;
    /**
     * @SINCE 1.54
     *
     * Gets current value of property {@link #getStringValue stringValue}.
     *
     * Determines the currency value as a string.
     *
     * String value is useful if you want to store really big values. If there are more than 21 digits before
     * the decimal point or if the number starts with “0.” followed by more than five zeros, it is represented
     * in exponential form. In these cases use the `stringValue` property to keep the number in decimal format.
     *
     * **Note:** If set, it will take precedence over the `value` property.
     */
    getStringValue(): string;
    /**
     * Gets current value of property {@link #getUseSymbol useSymbol}.
     *
     * Displays the currency symbol instead of the ISO currency code.
     *
     * Default value is `true`.
     */
    getUseSymbol(): boolean;
    /**
     * Gets current value of property {@link #getValue value}.
     *
     * Determines the currency value.
     *
     * Default value is `0`.
     */
    getValue(): float;
    /**
     * Initializes the control.
     */
    init(): void;
    /**
     * @SINCE 1.89
     *
     * Sets a new value for property {@link #getEmptyIndicatorMode emptyIndicatorMode}.
     *
     * Specifies if an empty indicator should be displayed when there is no text.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `Off`.
     */
    setEmptyIndicatorMode(
      /**
       * New value for property `emptyIndicatorMode`
       */
      sEmptyIndicatorMode?: any
    ): this;
    /**
     * @SINCE 1.54
     *
     * Sets a new value for property {@link #getStringValue stringValue}.
     *
     * Determines the currency value as a string.
     *
     * String value is useful if you want to store really big values. If there are more than 21 digits before
     * the decimal point or if the number starts with “0.” followed by more than five zeros, it is represented
     * in exponential form. In these cases use the `stringValue` property to keep the number in decimal format.
     *
     * **Note:** If set, it will take precedence over the `value` property.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     */
    setStringValue(
      /**
       * New value for property `stringValue`
       */
      sStringValue?: string
    ): this;
  }

  export interface $CurrencySettings extends $ControlSettings {
    /**
     * Determines the currency value.
     */
    value?: float | PropertyBindingInfo;

    /**
     * @SINCE 1.54
     *
     * Determines the currency value as a string.
     *
     * String value is useful if you want to store really big values. If there are more than 21 digits before
     * the decimal point or if the number starts with “0.” followed by more than five zeros, it is represented
     * in exponential form. In these cases use the `stringValue` property to keep the number in decimal format.
     *
     * **Note:** If set, it will take precedence over the `value` property.
     */
    stringValue?: string | PropertyBindingInfo;

    /**
     * Determines the displayed currency code (ISO 4217).
     *
     * **Note:** If a * character is set instead of currency code, only the character itself will be rendered,
     * ignoring the `value` property.
     */
    currency?: string | PropertyBindingInfo;

    /**
     * Defines the space that is available for the precision of the various currencies.
     */
    maxPrecision?: int | PropertyBindingInfo;

    /**
     * Displays the currency symbol instead of the ISO currency code.
     */
    useSymbol?: boolean | PropertyBindingInfo;

    /**
     * @SINCE 1.89
     *
     * Specifies if an empty indicator should be displayed when there is no text.
     */
    emptyIndicatorMode?: any | PropertyBindingInfo;
  }
}

declare module "sap/ui/unified/DateRange" {
  import { default as UI5Element, $ElementSettings } from "sap/ui/core/Element";

  import ElementMetadata from "sap/ui/core/ElementMetadata";

  import { PropertyBindingInfo } from "sap/ui/base/ManagedObject";

  /**
   * @SINCE 1.22.0
   *
   * Date range for use in DatePicker
   */
  export default class DateRange extends UI5Element {
    /**
     * Constructor for a new DateRange.
     *
     * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated
     * objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description
     * of the syntax of the settings object.
     */
    constructor(
      /**
       * initial settings for the new control
       */
      mSettings?: $DateRangeSettings
    );
    /**
     * Constructor for a new DateRange.
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
      mSettings?: $DateRangeSettings
    );

    /**
     * Creates a new subclass of class sap.ui.unified.DateRange with name `sClassName` and enriches it with
     * the information contained in `oClassInfo`.
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
      oClassInfo?: sap.ClassInfo<T, DateRange>,
      /**
       * Constructor function for the metadata object; if not given, it defaults to the metadata implementation
       * used by this class
       */
      FNMetaImpl?: Function
    ): Function;
    /**
     * Gets current value of property {@link #getEndDate endDate}.
     *
     * End date for a date range. If empty only a single date is presented by this DateRange element. This must
     * be a JavaScript date object.
     */
    getEndDate(): object;
    /**
     * Returns a metadata object for class sap.ui.unified.DateRange.
     */
    static getMetadata(): ElementMetadata;
    /**
     * Gets current value of property {@link #getStartDate startDate}.
     *
     * Start date for a date range. This must be a JavaScript date object.
     */
    getStartDate(): object;
    /**
     * Sets a new value for property {@link #getEndDate endDate}.
     *
     * End date for a date range. If empty only a single date is presented by this DateRange element. This must
     * be a JavaScript date object.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     */
    setEndDate(
      /**
       * New value for property `endDate`
       */
      oEndDate?: object
    ): this;
    /**
     * Sets a new value for property {@link #getStartDate startDate}.
     *
     * Start date for a date range. This must be a JavaScript date object.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     */
    setStartDate(
      /**
       * New value for property `startDate`
       */
      oStartDate?: object
    ): this;
  }

  export interface $DateRangeSettings extends $ElementSettings {
    /**
     * Start date for a date range. This must be a JavaScript date object.
     */
    startDate?: object | PropertyBindingInfo;

    /**
     * End date for a date range. If empty only a single date is presented by this DateRange element. This must
     * be a JavaScript date object.
     */
    endDate?: object | PropertyBindingInfo;
  }
}

declare module "sap/ui/unified/DateTypeRange" {
  import {
    default as DateRange,
    $DateRangeSettings,
  } from "sap/ui/unified/DateRange";

  import { CSSColor } from "sap/ui/core/library";

  import ElementMetadata from "sap/ui/core/ElementMetadata";

  import { CalendarDayType } from "sap/ui/unified/library";

  import { PropertyBindingInfo } from "sap/ui/base/ManagedObject";

  /**
   * @SINCE 1.24.0
   *
   * Date range with calendar day type information. Used to visualize special days in the Calendar.
   */
  export default class DateTypeRange extends DateRange {
    /**
     * Constructor for a new DateTypeRange.
     *
     * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated
     * objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description
     * of the syntax of the settings object.
     */
    constructor(
      /**
       * initial settings for the new control
       */
      mSettings?: $DateTypeRangeSettings
    );
    /**
     * Constructor for a new DateTypeRange.
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
      mSettings?: $DateTypeRangeSettings
    );

    /**
     * Creates a new subclass of class sap.ui.unified.DateTypeRange with name `sClassName` and enriches it with
     * the information contained in `oClassInfo`.
     *
     * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.unified.DateRange.extend}.
     */
    static extend<T extends Record<string, unknown>>(
      /**
       * Name of the class being created
       */
      sClassName: string,
      /**
       * Object literal with information about the class
       */
      oClassInfo?: sap.ClassInfo<T, DateTypeRange>,
      /**
       * Constructor function for the metadata object; if not given, it defaults to the metadata implementation
       * used by this class
       */
      FNMetaImpl?: Function
    ): Function;
    /**
     * @SINCE 1.76.0
     *
     * Gets current value of property {@link #getColor color}.
     *
     * Background color of the `Calendar` `specialDates` aggregation. If set, this color will override the default
     * background color defined in `Calendar` `specialDates` aggregation
     */
    getColor(): CSSColor;
    /**
     * Returns a metadata object for class sap.ui.unified.DateTypeRange.
     */
    static getMetadata(): ElementMetadata;
    /**
     * @SINCE 1.81.0
     *
     * Gets current value of property {@link #getSecondaryType secondaryType}.
     *
     * Applies secondary `CalendarDayType` combined with the `CalendarDayType` type chosen. Allows `specialDates`
     * to be also a `NonWorkingDay`. The secondary day type can only be used for `NonWorkingDay` or `None` calendar
     * day types. In other cases it will not be visible.
     *
     * Default value is `None`.
     */
    getSecondaryType(): CalendarDayType | keyof typeof CalendarDayType;
    /**
     * Gets current value of property {@link #getType type}.
     *
     * Type of the date range.
     *
     * Default value is `Type01`.
     */
    getType(): CalendarDayType | keyof typeof CalendarDayType;
    /**
     * @SINCE 1.76.0
     *
     * Sets a new value for property {@link #getColor color}.
     *
     * Background color of the `Calendar` `specialDates` aggregation. If set, this color will override the default
     * background color defined in `Calendar` `specialDates` aggregation
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     */
    setColor(
      /**
       * New value for property `color`
       */
      sColor?: CSSColor
    ): this;
    /**
     * @SINCE 1.81.0
     *
     * Sets a new value for property {@link #getSecondaryType secondaryType}.
     *
     * Applies secondary `CalendarDayType` combined with the `CalendarDayType` type chosen. Allows `specialDates`
     * to be also a `NonWorkingDay`. The secondary day type can only be used for `NonWorkingDay` or `None` calendar
     * day types. In other cases it will not be visible.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `None`.
     */
    setSecondaryType(
      /**
       * New value for property `secondaryType`
       */
      sSecondaryType?: CalendarDayType | keyof typeof CalendarDayType
    ): this;
    /**
     * Sets a new value for property {@link #getType type}.
     *
     * Type of the date range.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `Type01`.
     */
    setType(
      /**
       * New value for property `type`
       */
      sType?: CalendarDayType | keyof typeof CalendarDayType
    ): this;
  }

  export interface $DateTypeRangeSettings extends $DateRangeSettings {
    /**
     * Type of the date range.
     */
    type?:
      | (CalendarDayType | keyof typeof CalendarDayType)
      | PropertyBindingInfo;

    /**
     * @SINCE 1.81.0
     *
     * Applies secondary `CalendarDayType` combined with the `CalendarDayType` type chosen. Allows `specialDates`
     * to be also a `NonWorkingDay`. The secondary day type can only be used for `NonWorkingDay` or `None` calendar
     * day types. In other cases it will not be visible.
     */
    secondaryType?:
      | (CalendarDayType | keyof typeof CalendarDayType)
      | PropertyBindingInfo;

    /**
     * @SINCE 1.76.0
     *
     * Background color of the `Calendar` `specialDates` aggregation. If set, this color will override the default
     * background color defined in `Calendar` `specialDates` aggregation
     */
    color?: CSSColor | PropertyBindingInfo;
  }
}

declare module "sap/ui/unified/FileUploader" {
  import { default as Control, $ControlSettings } from "sap/ui/core/Control";

  import {
    IFormContent,
    ID,
    URI,
    ValueState,
    CSSSize,
  } from "sap/ui/core/library";

  import {
    IProcessableBlobs,
    FileUploaderHttpRequestMethod,
  } from "sap/ui/unified/library";

  import FileUploaderParameter from "sap/ui/unified/FileUploaderParameter";

  import ElementMetadata from "sap/ui/core/ElementMetadata";

  import FileUploaderXHRSettings from "sap/ui/unified/FileUploaderXHRSettings";

  import {
    PropertyBindingInfo,
    AggregationBindingInfo,
  } from "sap/ui/base/ManagedObject";

  /**
   * The framework generates an input field and a button with text "Browse ...". The API supports features
   * such as on change uploads (the upload starts immediately after a file has been selected), file uploads
   * with explicit calls, adjustable control sizes, text display after uploads, or tooltips containing complete
   * file paths.
   */
  export default class FileUploader
    extends Control
    implements IFormContent, IProcessableBlobs {
    __implements__sap_ui_core_IFormContent: boolean;
    __implements__sap_ui_unified_IProcessableBlobs: boolean;
    /**
     * Constructor for a new `FileUploader`.
     *
     * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated
     * objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description
     * of the syntax of the settings object.
     * See:
     * 	{@link fiori:https://experience.sap.com/fiori-design-web/upload-collection/ Upload Collection}
     */
    constructor(
      /**
       * Initial settings for the new control
       */
      mSettings?: $FileUploaderSettings
    );
    /**
     * Constructor for a new `FileUploader`.
     *
     * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated
     * objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description
     * of the syntax of the settings object.
     * See:
     * 	{@link fiori:https://experience.sap.com/fiori-design-web/upload-collection/ Upload Collection}
     */
    constructor(
      /**
       * ID for the new control, generated automatically if no ID is given
       */
      sId?: string,
      /**
       * Initial settings for the new control
       */
      mSettings?: $FileUploaderSettings
    );

    /**
     * @SINCE 1.24.0
     *
     * Aborts the currently running upload.
     */
    abort(
      /**
       * The name of the parameter within the `headerParameters` aggregation to be checked.
       *
       * **Note:** aborts the request, sent with a header parameter with the provided name. The parameter is taken
       * into account if the sHeaderParameterValue parameter is provided too.
       */
      sHeaderParameterName: string,
      /**
       * The value of the parameter within the `headerParameters` aggregation to be checked.
       *
       * **Note:** aborts the request, sent with a header parameter with the provided value. The parameter is
       * taken into account if the sHeaderParameterName parameter is provided too.
       */
      sHeaderParameterValue: string
    ): void;
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
     * Adds some headerParameter to the aggregation {@link #getHeaderParameters headerParameters}.
     */
    addHeaderParameter(
      /**
       * The headerParameter to add; if empty, nothing is inserted
       */
      oHeaderParameter: FileUploaderParameter
    ): this;
    /**
     * @SINCE 1.12.2
     *
     * Adds some parameter to the aggregation {@link #getParameters parameters}.
     */
    addParameter(
      /**
       * The parameter to add; if empty, nothing is inserted
       */
      oParameter: FileUploaderParameter
    ): this;
    /**
     * Attaches event handler `fnFunction` to the {@link #event:change change} event of this `sap.ui.unified.FileUploader`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.unified.FileUploader` itself.
     *
     * Event is fired when the value of the file path has been changed.
     *
     * **Note:** Keep in mind that because of the HTML input element of type file, the event is also fired in
     * Chrome browser when the Cancel button of the uploads window is pressed.
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
      fnFunction: Function,
      /**
       * Context object to call the event handler with. Defaults to this `sap.ui.unified.FileUploader` itself
       */
      oListener?: object
    ): this;
    /**
     * Attaches event handler `fnFunction` to the {@link #event:fileAllowed fileAllowed} event of this `sap.ui.unified.FileUploader`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.unified.FileUploader` itself.
     *
     * Event is fired when the file is allowed for upload on client side.
     */
    attachFileAllowed(
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
       * Context object to call the event handler with. Defaults to this `sap.ui.unified.FileUploader` itself
       */
      oListener?: object
    ): this;
    /**
     * Attaches event handler `fnFunction` to the {@link #event:fileEmpty fileEmpty} event of this `sap.ui.unified.FileUploader`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.unified.FileUploader` itself.
     *
     * Event is fired when the size of the file is 0
     */
    attachFileEmpty(
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
       * Context object to call the event handler with. Defaults to this `sap.ui.unified.FileUploader` itself
       */
      oListener?: object
    ): this;
    /**
     * @SINCE 1.24.0
     *
     * Attaches event handler `fnFunction` to the {@link #event:filenameLengthExceed filenameLengthExceed} event
     * of this `sap.ui.unified.FileUploader`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.unified.FileUploader` itself.
     *
     * Event is fired, if the filename of a chosen file is longer than the value specified with the `maximumFilenameLength`
     * property.
     */
    attachFilenameLengthExceed(
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
       * Context object to call the event handler with. Defaults to this `sap.ui.unified.FileUploader` itself
       */
      oListener?: object
    ): this;
    /**
     * Attaches event handler `fnFunction` to the {@link #event:fileSizeExceed fileSizeExceed} event of this
     * `sap.ui.unified.FileUploader`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.unified.FileUploader` itself.
     *
     * Event is fired when the size of a file is above the `maximumFileSize` property. This event is not supported
     * by Internet Explorer 9 (same restriction as for the property `maximumFileSize`).
     */
    attachFileSizeExceed(
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
       * Context object to call the event handler with. Defaults to this `sap.ui.unified.FileUploader` itself
       */
      oListener?: object
    ): this;
    /**
     * Attaches event handler `fnFunction` to the {@link #event:typeMissmatch typeMissmatch} event of this `sap.ui.unified.FileUploader`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.unified.FileUploader` itself.
     *
     * Event is fired when the type of a file does not match the `mimeType` or `fileType` property.
     */
    attachTypeMissmatch(
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
       * Context object to call the event handler with. Defaults to this `sap.ui.unified.FileUploader` itself
       */
      oListener?: object
    ): this;
    /**
     * @SINCE 1.24.0
     *
     * Attaches event handler `fnFunction` to the {@link #event:uploadAborted uploadAborted} event of this `sap.ui.unified.FileUploader`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.unified.FileUploader` itself.
     *
     * Event is fired after the current upload has been aborted.
     *
     * This event is only supported with property `sendXHR` set to true, i.e. the event is not supported in
     * Internet Explorer 9.
     */
    attachUploadAborted(
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
       * Context object to call the event handler with. Defaults to this `sap.ui.unified.FileUploader` itself
       */
      oListener?: object
    ): this;
    /**
     * Attaches event handler `fnFunction` to the {@link #event:uploadComplete uploadComplete} event of this
     * `sap.ui.unified.FileUploader`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.unified.FileUploader` itself.
     *
     * Event is fired as soon as the upload request is completed (either successful or unsuccessful).
     *
     * To see if the upload request was successful, check the `status` parameter for a value 2xx. The actual
     * progress of the upload can be monitored by listening to the `uploadProgress` event. However, this covers
     * only the client side of the upload process and does not give any success status from the server.
     */
    attachUploadComplete(
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
       * Context object to call the event handler with. Defaults to this `sap.ui.unified.FileUploader` itself
       */
      oListener?: object
    ): this;
    /**
     * @SINCE 1.24.0
     *
     * Attaches event handler `fnFunction` to the {@link #event:uploadProgress uploadProgress} event of this
     * `sap.ui.unified.FileUploader`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.unified.FileUploader` itself.
     *
     * Event is fired after the upload has started and before the upload is completed.
     *
     * It contains progress information related to the running upload. Depending on file size, band width and
     * used browser the event is fired once or multiple times.
     *
     * This event is only supported with property `sendXHR` set to true, i.e. the event is not supported in
     * Internet Explorer 9.
     */
    attachUploadProgress(
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
       * Context object to call the event handler with. Defaults to this `sap.ui.unified.FileUploader` itself
       */
      oListener?: object
    ): this;
    /**
     * @SINCE 1.30.0
     *
     * Attaches event handler `fnFunction` to the {@link #event:uploadStart uploadStart} event of this `sap.ui.unified.FileUploader`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.unified.FileUploader` itself.
     *
     * Event is fired before an upload is started.
     */
    attachUploadStart(
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
       * Context object to call the event handler with. Defaults to this `sap.ui.unified.FileUploader` itself
       */
      oListener?: object
    ): this;
    /**
     * Checks if the chosen file is readable.
     */
    checkFileReadable(): Promise<any>;
    /**
     * @SINCE 1.25.0
     *
     * Clears the content of the `FileUploader`.
     *
     * **Note:** The attached additional data however is retained.
     */
    clear(): this;
    /**
     * Destroys all the headerParameters in the aggregation {@link #getHeaderParameters headerParameters}.
     */
    destroyHeaderParameters(): this;
    /**
     * @SINCE 1.12.2
     *
     * Destroys all the parameters in the aggregation {@link #getParameters parameters}.
     */
    destroyParameters(): this;
    /**
     * @SINCE 1.52
     *
     * Destroys the xhrSettings in the aggregation {@link #getXhrSettings xhrSettings}.
     */
    destroyXhrSettings(): this;
    /**
     * Detaches event handler `fnFunction` from the {@link #event:change change} event of this `sap.ui.unified.FileUploader`.
     *
     * The passed function and listener object must match the ones used for event registration.
     */
    detachChange(
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
     * Detaches event handler `fnFunction` from the {@link #event:fileAllowed fileAllowed} event of this `sap.ui.unified.FileUploader`.
     *
     * The passed function and listener object must match the ones used for event registration.
     */
    detachFileAllowed(
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
     * Detaches event handler `fnFunction` from the {@link #event:fileEmpty fileEmpty} event of this `sap.ui.unified.FileUploader`.
     *
     * The passed function and listener object must match the ones used for event registration.
     */
    detachFileEmpty(
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
     * @SINCE 1.24.0
     *
     * Detaches event handler `fnFunction` from the {@link #event:filenameLengthExceed filenameLengthExceed}
     * event of this `sap.ui.unified.FileUploader`.
     *
     * The passed function and listener object must match the ones used for event registration.
     */
    detachFilenameLengthExceed(
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
     * Detaches event handler `fnFunction` from the {@link #event:fileSizeExceed fileSizeExceed} event of this
     * `sap.ui.unified.FileUploader`.
     *
     * The passed function and listener object must match the ones used for event registration.
     */
    detachFileSizeExceed(
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
     * Detaches event handler `fnFunction` from the {@link #event:typeMissmatch typeMissmatch} event of this
     * `sap.ui.unified.FileUploader`.
     *
     * The passed function and listener object must match the ones used for event registration.
     */
    detachTypeMissmatch(
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
     * @SINCE 1.24.0
     *
     * Detaches event handler `fnFunction` from the {@link #event:uploadAborted uploadAborted} event of this
     * `sap.ui.unified.FileUploader`.
     *
     * The passed function and listener object must match the ones used for event registration.
     */
    detachUploadAborted(
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
     * Detaches event handler `fnFunction` from the {@link #event:uploadComplete uploadComplete} event of this
     * `sap.ui.unified.FileUploader`.
     *
     * The passed function and listener object must match the ones used for event registration.
     */
    detachUploadComplete(
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
     * @SINCE 1.24.0
     *
     * Detaches event handler `fnFunction` from the {@link #event:uploadProgress uploadProgress} event of this
     * `sap.ui.unified.FileUploader`.
     *
     * The passed function and listener object must match the ones used for event registration.
     */
    detachUploadProgress(
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
     * @SINCE 1.30.0
     *
     * Detaches event handler `fnFunction` from the {@link #event:uploadStart uploadStart} event of this `sap.ui.unified.FileUploader`.
     *
     * The passed function and listener object must match the ones used for event registration.
     */
    detachUploadStart(
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
     * Creates a new subclass of class sap.ui.unified.FileUploader with name `sClassName` and enriches it with
     * the information contained in `oClassInfo`.
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
      oClassInfo?: sap.ClassInfo<T, FileUploader>,
      /**
       * Constructor function for the metadata object; if not given, it defaults to the metadata implementation
       * used by this class
       */
      FNMetaImpl?: Function
    ): Function;
    /**
     * Fires event {@link #event:change change} to attached listeners.
     */
    fireChange(
      /**
       * Parameters to pass along with the event
       */
      mParameters?: {
        /**
         * New file path value.
         */
        newValue?: string;
        /**
         * Files.
         */
        files?: object[];
      }
    ): this;
    /**
     * Fires event {@link #event:fileAllowed fileAllowed} to attached listeners.
     */
    fireFileAllowed(
      /**
       * Parameters to pass along with the event
       */
      mParameters?: object
    ): this;
    /**
     * Fires event {@link #event:fileEmpty fileEmpty} to attached listeners.
     */
    fireFileEmpty(
      /**
       * Parameters to pass along with the event
       */
      mParameters?: {
        /**
         * The name of the file to be uploaded.
         */
        fileName?: string;
      }
    ): this;
    /**
     * @SINCE 1.24.0
     *
     * Fires event {@link #event:filenameLengthExceed filenameLengthExceed} to attached listeners.
     */
    fireFilenameLengthExceed(
      /**
       * Parameters to pass along with the event
       */
      mParameters?: {
        /**
         * The filename, which is longer than specified by the value of the property `maximumFilenameLength`.
         */
        fileName?: string;
      }
    ): this;
    /**
     * Fires event {@link #event:fileSizeExceed fileSizeExceed} to attached listeners.
     */
    fireFileSizeExceed(
      /**
       * Parameters to pass along with the event
       */
      mParameters?: {
        /**
         * The name of a file to be uploaded.
         */
        fileName?: string;
        /**
         * The size in MB of a file to be uploaded.
         */
        fileSize?: string;
      }
    ): this;
    /**
     * Fires event {@link #event:typeMissmatch typeMissmatch} to attached listeners.
     */
    fireTypeMissmatch(
      /**
       * Parameters to pass along with the event
       */
      mParameters?: {
        /**
         * The name of a file to be uploaded.
         */
        fileName?: string;
        /**
         * The file ending of a file to be uploaded.
         */
        fileType?: string;
        /**
         * The MIME type of a file to be uploaded.
         */
        mimeType?: string;
      }
    ): this;
    /**
     * @SINCE 1.24.0
     *
     * Fires event {@link #event:uploadAborted uploadAborted} to attached listeners.
     */
    fireUploadAborted(
      /**
       * Parameters to pass along with the event
       */
      mParameters?: {
        /**
         * The name of a file to be uploaded.
         */
        fileName?: string;
        /**
         * Http-Request-Headers.
         *
         * Required for receiving `requestHeader` is to set the property `sendXHR` to true. This property is not
         * supported by Internet Explorer 9.
         */
        requestHeaders?: object[];
      }
    ): this;
    /**
     * Fires event {@link #event:uploadComplete uploadComplete} to attached listeners.
     */
    fireUploadComplete(
      /**
       * Parameters to pass along with the event
       */
      mParameters?: {
        /**
         * The name of a file to be uploaded.
         */
        fileName?: string;
        /**
         * Response message which comes from the server.
         *
         * On the server side this response has to be put within the "body" tags of the response document
         * of the iFrame. It can consist of a return code and an optional message. This does not work in cross-domain
         * scenarios.
         */
        response?: string;
        /**
         * ReadyState of the XHR request.
         *
         * Required for receiving a `readyStateXHR` is to set the property `sendXHR` to true. This property is not
         * supported by Internet Explorer 9.
         */
        readyStateXHR?: string;
        /**
         * Status of the XHR request.
         *
         * Required for receiving a `status` is to set the property `sendXHR` to true. This property is not supported
         * by Internet Explorer 9.
         */
        status?: string;
        /**
         * Http-Response which comes from the server.
         *
         * Required for receiving `responseRaw` is to set the property `sendXHR` to true.
         *
         * This property is not supported by Internet Explorer 9.
         */
        responseRaw?: string;
        /**
         * Http-Response-Headers which come from the server.
         *
         * Provided as a JSON-map, i.e. each header-field is reflected by a property in the `headers` object, with
         * the property value reflecting the header-field's content.
         *
         * Required for receiving `headers` is to set the property `sendXHR` to true. This property is not supported
         * by Internet Explorer 9.
         */
        headers?: object;
        /**
         * Http-Request-Headers.
         *
         * Required for receiving `requestHeaders` is to set the property `sendXHR` to true. This property is not
         * supported by Internet Explorer 9.
         */
        requestHeaders?: object[];
      }
    ): this;
    /**
     * @SINCE 1.24.0
     *
     * Fires event {@link #event:uploadProgress uploadProgress} to attached listeners.
     */
    fireUploadProgress(
      /**
       * Parameters to pass along with the event
       */
      mParameters?: {
        /**
         * Indicates whether or not the relative upload progress can be calculated out of loaded and total.
         */
        lengthComputable?: boolean;
        /**
         * The number of bytes of the file which have been uploaded by the time the event was fired.
         */
        loaded?: float;
        /**
         * The total size of the file to be uploaded in bytes.
         */
        total?: float;
        /**
         * The name of a file to be uploaded.
         */
        fileName?: string;
        /**
         * Http-Request-Headers.
         *
         * Required for receiving `requestHeaders` is to set the property `sendXHR` to true. This property is not
         * supported by Internet Explorer 9.
         */
        requestHeaders?: object[];
      }
    ): this;
    /**
     * @SINCE 1.30.0
     *
     * Fires event {@link #event:uploadStart uploadStart} to attached listeners.
     */
    fireUploadStart(
      /**
       * Parameters to pass along with the event
       */
      mParameters?: {
        /**
         * The name of a file to be uploaded.
         */
        fileName?: string;
        /**
         * Http-Request-Headers.
         *
         * Required for receiving `requestHeaders` is to set the property `sendXHR` to true. This property is not
         * supported by Internet Explorer 9.
         */
        requestHeaders?: object[];
      }
    ): this;
    /**
     * Gets current value of property {@link #getAdditionalData additionalData}.
     *
     * Additional data that is sent to the back end service.
     *
     * Data will be transmitted as value of a hidden input where the name is derived from the `name` property
     * with suffix "-data".
     */
    getAdditionalData(): string;
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
     * Gets current value of property {@link #getButtonOnly buttonOnly}.
     *
     * If set to "true", the `FileUploader` will be rendered as Button only, without showing the input field.
     *
     * Default value is `false`.
     */
    getButtonOnly(): boolean;
    /**
     * Gets current value of property {@link #getButtonText buttonText}.
     *
     * The button's text can be overwritten using this property.
     */
    getButtonText(): string;
    /**
     * Gets current value of property {@link #getEnabled enabled}.
     *
     * Disabled controls have different colors, depending on customer settings.
     *
     * Default value is `true`.
     */
    getEnabled(): boolean;
    /**
     * Gets current value of property {@link #getFileType fileType}.
     *
     * The chosen files will be checked against an array of file types.
     *
     * If at least one file does not fit the file type restriction, the upload is prevented. **Note:** This
     * property is not supported by Microsoft Edge.
     *
     * Example: `["jpg", "png", "bmp"]`.
     */
    getFileType(): string[];
    /**
     * Gets content of aggregation {@link #getHeaderParameters headerParameters}.
     *
     * The header parameters for the `FileUploader` which are only submitted with XHR requests. Header parameters
     * are not supported by Internet Explorer 9.
     */
    getHeaderParameters(): FileUploaderParameter[];
    /**
     * @SINCE 1.81.0
     *
     * Gets current value of property {@link #getHttpRequestMethod httpRequestMethod}.
     *
     * Chosen HTTP request method for file upload.
     *
     * Default value is `Post`.
     */
    getHttpRequestMethod(): FileUploaderHttpRequestMethod;
    /**
     * @SINCE 1.26.0
     *
     * Gets current value of property {@link #getIcon icon}.
     *
     * Icon to be displayed as graphical element within the button.
     *
     * This can be a URI to an image or an icon font URI.
     *
     * Default value is `empty string`.
     */
    getIcon(): URI;
    /**
     * @SINCE 1.26.0
     *
     * Gets current value of property {@link #getIconFirst iconFirst}.
     *
     * If set to true (default), the display sequence is 1. icon 2. control text.
     *
     * Default value is `true`.
     */
    getIconFirst(): boolean;
    /**
     * @SINCE 1.26.0
     *
     * Gets current value of property {@link #getIconHovered iconHovered}.
     *
     * Icon to be displayed as graphical element within the button when it is hovered (only if also a base icon
     * was specified).
     *
     * If not specified, the base icon is used. If an icon font icon is used, this property is ignored.
     *
     * Default value is `empty string`.
     */
    getIconHovered(): URI;
    /**
     * @SINCE 1.26.0
     *
     * Gets current value of property {@link #getIconOnly iconOnly}.
     *
     * If set to true, the button is displayed without any text.
     *
     * Default value is `false`.
     */
    getIconOnly(): boolean;
    /**
     * @SINCE 1.26.0
     *
     * Gets current value of property {@link #getIconSelected iconSelected}.
     *
     * Icon to be displayed as graphical element within the button when it is selected (only if also a base
     * icon was specified).
     *
     * If not specified, the base or hovered icon is used. If an icon font icon is used, this property is ignored.
     *
     * Default value is `empty string`.
     */
    getIconSelected(): URI;
    /**
     * @SINCE 1.24.0
     *
     * Gets current value of property {@link #getMaximumFilenameLength maximumFilenameLength}.
     *
     * The maximum length of a filename which the `FileUploader` will accept.
     *
     * If the maximum filename length is exceeded, the corresponding event `filenameLengthExceed` is fired.
     */
    getMaximumFilenameLength(): int;
    /**
     * Gets current value of property {@link #getMaximumFileSize maximumFileSize}.
     *
     * A file size limit in megabytes which prevents the upload if at least one file exceeds it.
     *
     * This property is not supported by Internet Explorer 9.
     */
    getMaximumFileSize(): float;
    /**
     * Returns a metadata object for class sap.ui.unified.FileUploader.
     */
    static getMetadata(): ElementMetadata;
    /**
     * Gets current value of property {@link #getMimeType mimeType}.
     *
     * The chosen files will be checked against an array of MIME types defined in this property.
     *
     * If at least one file does not fit the MIME type restriction, the upload is prevented.
     *
     * **Note:** This property is not supported by Internet Explorer. It is only reliable for common file types
     * like images, audio, video, plain text and HTML documents. File types that are not recognized by the browser
     * result in `file.type` to be returned as an empty string. In this case the verification could not be performed.
     * The file upload is not prevented and the validation based on file type is left to the receiving backend
     * side.
     *
     * Example: `["image/png", "image/jpeg"]`.
     */
    getMimeType(): string[];
    /**
     * Gets current value of property {@link #getMultiple multiple}.
     *
     * Allows multiple files to be chosen and uploaded from the same folder.
     *
     * This property is not supported by Internet Explorer 9.
     *
     * **Note:** Keep in mind that the various operating systems for mobile devices can react differently to
     * the property so that fewer upload functions may be available in some cases.
     *
     * Default value is `false`.
     */
    getMultiple(): boolean;
    /**
     * Gets current value of property {@link #getName name}.
     *
     * Unique control name for identification on the server side after sending data to the server.
     */
    getName(): string;
    /**
     * @SINCE 1.12.2
     *
     * Gets content of aggregation {@link #getParameters parameters}.
     *
     * The parameters for the `FileUploader` which are rendered as a hidden input field.
     */
    getParameters(): FileUploaderParameter[];
    /**
     * Gets current value of property {@link #getPlaceholder placeholder}.
     *
     * Placeholder for the text field.
     */
    getPlaceholder(): string;
    /**
     * @SINCE 1.52
     *
     * Allows to process Blobs before they get uploaded. This API can be used to create custom Blobs and upload
     * these custom Blobs instead of the received/initials Blobs in the parameter `aBlobs`. One use case could
     * be to create and upload zip archives based on the passed Blobs. The default implementation of this API
     * should simply resolve with the received Blobs (parameter `aBlobs`).
     *
     * This API is only supported in case `sendXHR` is `true`. This means only IE10+ is supported, while IE9
     * and below is not.
     *
     * This is a default implementation of the interface `sap.ui.unified.IProcessableBlobs`.
     */
    getProcessedBlobsFromArray(
      /**
       * The initial Blobs which can be used to determine/calculate a new array of Blobs for further processing.
       */
      aBlobs: Blob[]
    ): Promise<any>;
    /**
     * Gets current value of property {@link #getSameFilenameAllowed sameFilenameAllowed}.
     *
     * If the FileUploader is configured to upload the file directly after the file is selected, it is not allowed
     * to upload a file with the same name again. If a user should be allowed to upload a file with the same
     * name again this parameter has to be "true".
     *
     * A typical use case would be if the files have different paths.
     *
     * Default value is `false`.
     */
    getSameFilenameAllowed(): boolean;
    /**
     * Gets current value of property {@link #getSendXHR sendXHR}.
     *
     * If set to "true", the request will be sent as XHR request instead of a form submit.
     *
     * This property is not supported by Internet Explorer 9.
     *
     * Default value is `false`.
     */
    getSendXHR(): boolean;
    /**
     * Gets current value of property {@link #getStyle style}.
     *
     * Style of the button.
     *
     * Values "Transparent, "Accept", "Reject", or "Emphasized" are allowed.
     */
    getStyle(): string;
    /**
     * Gets current value of property {@link #getUploadOnChange uploadOnChange}.
     *
     * If set to "true", the upload immediately starts after file selection. With the default setting, the upload
     * needs to be explicitly triggered.
     *
     * Default value is `false`.
     */
    getUploadOnChange(): boolean;
    /**
     * Gets current value of property {@link #getUploadUrl uploadUrl}.
     *
     * Used when URL address is on a remote server.
     *
     * Default value is `empty string`.
     */
    getUploadUrl(): URI;
    /**
     * Gets current value of property {@link #getUseMultipart useMultipart}.
     *
     * If set to "false", the request will be sent as file only request instead of a multipart/form-data request.
     *
     * Only one file could be uploaded using this type of request. Required for sending such a request is to
     * set the property `sendXHR` to "true". This property is not supported by Internet Explorer 9.
     *
     * Default value is `true`.
     */
    getUseMultipart(): boolean;
    /**
     * Gets current value of property {@link #getValue value}.
     *
     * Value of the path for file upload.
     *
     * Default value is `empty string`.
     */
    getValue(): string;
    /**
     * @SINCE 1.24.0
     *
     * Gets current value of property {@link #getValueState valueState}.
     *
     * Visualizes warnings or errors related to the text field.
     *
     * Possible values: Warning, Error, Success, None.
     *
     * Default value is `None`.
     */
    getValueState(): ValueState | keyof typeof ValueState;
    /**
     * @SINCE 1.52
     *
     * Gets current value of property {@link #getValueStateText valueStateText}.
     *
     * Custom text for the value state message pop-up.
     *
     * **Note:** If not specified, a default text, based on the value state type, will be used instead.
     */
    getValueStateText(): string;
    /**
     * Gets current value of property {@link #getWidth width}.
     *
     * Specifies the displayed control width.
     *
     * Default value is `empty string`.
     */
    getWidth(): CSSSize;
    /**
     * @SINCE 1.52
     *
     * Gets content of aggregation {@link #getXhrSettings xhrSettings}.
     *
     * Settings for the `XMLHttpRequest` object. **Note:** This aggregation is only used when the `sendXHR`
     * property is set to `true`.
     */
    getXhrSettings(): FileUploaderXHRSettings;
    /**
     * Checks for the provided `sap.ui.unified.FileUploaderParameter` in the aggregation {@link #getHeaderParameters
     * headerParameters}. and returns its index if found or -1 otherwise.
     */
    indexOfHeaderParameter(
      /**
       * The headerParameter whose index is looked for
       */
      oHeaderParameter: FileUploaderParameter
    ): int;
    /**
     * @SINCE 1.12.2
     *
     * Checks for the provided `sap.ui.unified.FileUploaderParameter` in the aggregation {@link #getParameters
     * parameters}. and returns its index if found or -1 otherwise.
     */
    indexOfParameter(
      /**
       * The parameter whose index is looked for
       */
      oParameter: FileUploaderParameter
    ): int;
    /**
     * Inserts a headerParameter into the aggregation {@link #getHeaderParameters headerParameters}.
     */
    insertHeaderParameter(
      /**
       * The headerParameter to insert; if empty, nothing is inserted
       */
      oHeaderParameter: FileUploaderParameter,
      /**
       * The `0`-based index the headerParameter should be inserted at; for a negative value of `iIndex`, the
       * headerParameter is inserted at position 0; for a value greater than the current size of the aggregation,
       * the headerParameter is inserted at the last position
       */
      iIndex: int
    ): this;
    /**
     * @SINCE 1.12.2
     *
     * Inserts a parameter into the aggregation {@link #getParameters parameters}.
     */
    insertParameter(
      /**
       * The parameter to insert; if empty, nothing is inserted
       */
      oParameter: FileUploaderParameter,
      /**
       * The `0`-based index the parameter should be inserted at; for a negative value of `iIndex`, the parameter
       * is inserted at position 0; for a value greater than the current size of the aggregation, the parameter
       * is inserted at the last position
       */
      iIndex: int
    ): this;
    /**
     * Removes all the controls in the association named {@link #getAriaDescribedBy ariaDescribedBy}.
     */
    removeAllAriaDescribedBy(): ID[];
    /**
     * Removes all the controls in the association named {@link #getAriaLabelledBy ariaLabelledBy}.
     */
    removeAllAriaLabelledBy(): ID[];
    /**
     * Removes all the controls from the aggregation {@link #getHeaderParameters headerParameters}.
     *
     * Additionally, it unregisters them from the hosting UIArea.
     */
    removeAllHeaderParameters(): FileUploaderParameter[];
    /**
     * @SINCE 1.12.2
     *
     * Removes all the controls from the aggregation {@link #getParameters parameters}.
     *
     * Additionally, it unregisters them from the hosting UIArea.
     */
    removeAllParameters(): FileUploaderParameter[];
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
     * Removes a headerParameter from the aggregation {@link #getHeaderParameters headerParameters}.
     */
    removeHeaderParameter(
      /**
       * The headerParameter to remove or its index or id
       */
      vHeaderParameter: int | string | FileUploaderParameter
    ): FileUploaderParameter;
    /**
     * @SINCE 1.12.2
     *
     * Removes a parameter from the aggregation {@link #getParameters parameters}.
     */
    removeParameter(
      /**
       * The parameter to remove or its index or id
       */
      vParameter: int | string | FileUploaderParameter
    ): FileUploaderParameter;
    /**
     * Sets a new value for property {@link #getAdditionalData additionalData}.
     *
     * Additional data that is sent to the back end service.
     *
     * Data will be transmitted as value of a hidden input where the name is derived from the `name` property
     * with suffix "-data".
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     */
    setAdditionalData(
      /**
       * New value for property `additionalData`
       */
      sAdditionalData?: string
    ): this;
    /**
     * Sets a new value for property {@link #getButtonOnly buttonOnly}.
     *
     * If set to "true", the `FileUploader` will be rendered as Button only, without showing the input field.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `false`.
     */
    setButtonOnly(
      /**
       * New value for property `buttonOnly`
       */
      bButtonOnly?: boolean
    ): this;
    /**
     * Sets a new value for property {@link #getButtonText buttonText}.
     *
     * The button's text can be overwritten using this property.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     */
    setButtonText(
      /**
       * New value for property `buttonText`
       */
      sButtonText?: string
    ): this;
    /**
     * Sets a new value for property {@link #getEnabled enabled}.
     *
     * Disabled controls have different colors, depending on customer settings.
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
     * Sets a new value for property {@link #getFileType fileType}.
     *
     * The chosen files will be checked against an array of file types.
     *
     * If at least one file does not fit the file type restriction, the upload is prevented. **Note:** This
     * property is not supported by Microsoft Edge.
     *
     * Example: `["jpg", "png", "bmp"]`.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     */
    setFileType(
      /**
       * New value for property `fileType`
       */
      sFileType?: string[]
    ): this;
    /**
     * @SINCE 1.81.0
     *
     * Sets a new value for property {@link #getHttpRequestMethod httpRequestMethod}.
     *
     * Chosen HTTP request method for file upload.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `Post`.
     */
    setHttpRequestMethod(
      /**
       * New value for property `httpRequestMethod`
       */
      sHttpRequestMethod?: FileUploaderHttpRequestMethod
    ): this;
    /**
     * @SINCE 1.26.0
     *
     * Sets a new value for property {@link #getIcon icon}.
     *
     * Icon to be displayed as graphical element within the button.
     *
     * This can be a URI to an image or an icon font URI.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `empty string`.
     */
    setIcon(
      /**
       * New value for property `icon`
       */
      sIcon?: URI
    ): this;
    /**
     * @SINCE 1.26.0
     *
     * Sets a new value for property {@link #getIconFirst iconFirst}.
     *
     * If set to true (default), the display sequence is 1. icon 2. control text.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `true`.
     */
    setIconFirst(
      /**
       * New value for property `iconFirst`
       */
      bIconFirst?: boolean
    ): this;
    /**
     * @SINCE 1.26.0
     *
     * Sets a new value for property {@link #getIconHovered iconHovered}.
     *
     * Icon to be displayed as graphical element within the button when it is hovered (only if also a base icon
     * was specified).
     *
     * If not specified, the base icon is used. If an icon font icon is used, this property is ignored.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `empty string`.
     */
    setIconHovered(
      /**
       * New value for property `iconHovered`
       */
      sIconHovered?: URI
    ): this;
    /**
     * @SINCE 1.26.0
     *
     * Sets a new value for property {@link #getIconOnly iconOnly}.
     *
     * If set to true, the button is displayed without any text.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `false`.
     */
    setIconOnly(
      /**
       * New value for property `iconOnly`
       */
      bIconOnly?: boolean
    ): this;
    /**
     * @SINCE 1.26.0
     *
     * Sets a new value for property {@link #getIconSelected iconSelected}.
     *
     * Icon to be displayed as graphical element within the button when it is selected (only if also a base
     * icon was specified).
     *
     * If not specified, the base or hovered icon is used. If an icon font icon is used, this property is ignored.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `empty string`.
     */
    setIconSelected(
      /**
       * New value for property `iconSelected`
       */
      sIconSelected?: URI
    ): this;
    /**
     * @SINCE 1.24.0
     *
     * Sets a new value for property {@link #getMaximumFilenameLength maximumFilenameLength}.
     *
     * The maximum length of a filename which the `FileUploader` will accept.
     *
     * If the maximum filename length is exceeded, the corresponding event `filenameLengthExceed` is fired.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     */
    setMaximumFilenameLength(
      /**
       * New value for property `maximumFilenameLength`
       */
      iMaximumFilenameLength?: int
    ): this;
    /**
     * Sets a new value for property {@link #getMaximumFileSize maximumFileSize}.
     *
     * A file size limit in megabytes which prevents the upload if at least one file exceeds it.
     *
     * This property is not supported by Internet Explorer 9.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     */
    setMaximumFileSize(
      /**
       * New value for property `maximumFileSize`
       */
      fMaximumFileSize?: float
    ): this;
    /**
     * Sets a new value for property {@link #getMimeType mimeType}.
     *
     * The chosen files will be checked against an array of MIME types defined in this property.
     *
     * If at least one file does not fit the MIME type restriction, the upload is prevented.
     *
     * **Note:** This property is not supported by Internet Explorer. It is only reliable for common file types
     * like images, audio, video, plain text and HTML documents. File types that are not recognized by the browser
     * result in `file.type` to be returned as an empty string. In this case the verification could not be performed.
     * The file upload is not prevented and the validation based on file type is left to the receiving backend
     * side.
     *
     * Example: `["image/png", "image/jpeg"]`.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     */
    setMimeType(
      /**
       * New value for property `mimeType`
       */
      sMimeType?: string[]
    ): this;
    /**
     * Sets a new value for property {@link #getMultiple multiple}.
     *
     * Allows multiple files to be chosen and uploaded from the same folder.
     *
     * This property is not supported by Internet Explorer 9.
     *
     * **Note:** Keep in mind that the various operating systems for mobile devices can react differently to
     * the property so that fewer upload functions may be available in some cases.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `false`.
     */
    setMultiple(
      /**
       * New value for property `multiple`
       */
      bMultiple?: boolean
    ): this;
    /**
     * Sets a new value for property {@link #getName name}.
     *
     * Unique control name for identification on the server side after sending data to the server.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     */
    setName(
      /**
       * New value for property `name`
       */
      sName?: string
    ): this;
    /**
     * Sets a new value for property {@link #getPlaceholder placeholder}.
     *
     * Placeholder for the text field.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     */
    setPlaceholder(
      /**
       * New value for property `placeholder`
       */
      sPlaceholder?: string
    ): this;
    /**
     * Sets a new value for property {@link #getSameFilenameAllowed sameFilenameAllowed}.
     *
     * If the FileUploader is configured to upload the file directly after the file is selected, it is not allowed
     * to upload a file with the same name again. If a user should be allowed to upload a file with the same
     * name again this parameter has to be "true".
     *
     * A typical use case would be if the files have different paths.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `false`.
     */
    setSameFilenameAllowed(
      /**
       * New value for property `sameFilenameAllowed`
       */
      bSameFilenameAllowed?: boolean
    ): this;
    /**
     * Sets a new value for property {@link #getSendXHR sendXHR}.
     *
     * If set to "true", the request will be sent as XHR request instead of a form submit.
     *
     * This property is not supported by Internet Explorer 9.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `false`.
     */
    setSendXHR(
      /**
       * New value for property `sendXHR`
       */
      bSendXHR?: boolean
    ): this;
    /**
     * Sets a new value for property {@link #getStyle style}.
     *
     * Style of the button.
     *
     * Values "Transparent, "Accept", "Reject", or "Emphasized" are allowed.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     */
    setStyle(
      /**
       * New value for property `style`
       */
      sStyle?: string
    ): this;
    /**
     * Sets a new value for property {@link #getUploadOnChange uploadOnChange}.
     *
     * If set to "true", the upload immediately starts after file selection. With the default setting, the upload
     * needs to be explicitly triggered.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `false`.
     */
    setUploadOnChange(
      /**
       * New value for property `uploadOnChange`
       */
      bUploadOnChange?: boolean
    ): this;
    /**
     * Sets a new value for property {@link #getUploadUrl uploadUrl}.
     *
     * Used when URL address is on a remote server.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `empty string`.
     */
    setUploadUrl(
      /**
       * New value for property `uploadUrl`
       */
      sUploadUrl?: URI
    ): this;
    /**
     * Sets a new value for property {@link #getUseMultipart useMultipart}.
     *
     * If set to "false", the request will be sent as file only request instead of a multipart/form-data request.
     *
     * Only one file could be uploaded using this type of request. Required for sending such a request is to
     * set the property `sendXHR` to "true". This property is not supported by Internet Explorer 9.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `true`.
     */
    setUseMultipart(
      /**
       * New value for property `useMultipart`
       */
      bUseMultipart?: boolean
    ): this;
    /**
     * Sets a new value for property {@link #getValue value}.
     *
     * Value of the path for file upload.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `empty string`.
     */
    setValue(
      /**
       * New value for property `value`
       */
      sValue?: string
    ): this;
    /**
     * @SINCE 1.24.0
     *
     * Sets a new value for property {@link #getValueState valueState}.
     *
     * Visualizes warnings or errors related to the text field.
     *
     * Possible values: Warning, Error, Success, None.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `None`.
     */
    setValueState(
      /**
       * New value for property `valueState`
       */
      sValueState?: ValueState | keyof typeof ValueState
    ): this;
    /**
     * @SINCE 1.52
     *
     * Sets a new value for property {@link #getValueStateText valueStateText}.
     *
     * Custom text for the value state message pop-up.
     *
     * **Note:** If not specified, a default text, based on the value state type, will be used instead.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     */
    setValueStateText(
      /**
       * New value for property `valueStateText`
       */
      sValueStateText?: string
    ): this;
    /**
     * Sets a new value for property {@link #getWidth width}.
     *
     * Specifies the displayed control width.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `empty string`.
     */
    setWidth(
      /**
       * New value for property `width`
       */
      sWidth?: CSSSize
    ): this;
    /**
     * @SINCE 1.52
     *
     * Sets the aggregated {@link #getXhrSettings xhrSettings}.
     */
    setXhrSettings(
      /**
       * The xhrSettings to set
       */
      oXhrSettings: FileUploaderXHRSettings
    ): this;
    /**
     * Starts the upload (as defined by uploadUrl).
     */
    upload(
      /**
       * Set to `true` to allow pre-processing of the files before sending the request. As a result, the `upload`
       * method becomes asynchronous. See {@link sap.ui.unified.IProcessableBlobs} for more information. **Note:**
       * This parameter is only taken into account when `sendXHR` is set to `true`.
       */
      bPreProcessFiles?: boolean
    ): void;
    /**
     * Attaches event handler `fnFunction` to the {@link #event:change change} event of this `sap.ui.unified.FileUploader`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.unified.FileUploader` itself.
     *
     * Event is fired when the value of the file path has been changed.
     *
     * **Note:** Keep in mind that because of the HTML input element of type file, the event is also fired in
     * Chrome browser when the Cancel button of the uploads window is pressed.
     */
    attachChange(
      /**
       * The function to be called when the event occurs
       */
      fnFunction: Function,
      /**
       * Context object to call the event handler with. Defaults to this `sap.ui.unified.FileUploader` itself
       */
      oListener?: object
    ): this;
    /**
     * Attaches event handler `fnFunction` to the {@link #event:fileAllowed fileAllowed} event of this `sap.ui.unified.FileUploader`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.unified.FileUploader` itself.
     *
     * Event is fired when the file is allowed for upload on client side.
     */
    attachFileAllowed(
      /**
       * The function to be called when the event occurs
       */
      fnFunction: Function,
      /**
       * Context object to call the event handler with. Defaults to this `sap.ui.unified.FileUploader` itself
       */
      oListener?: object
    ): this;
    /**
     * Attaches event handler `fnFunction` to the {@link #event:fileEmpty fileEmpty} event of this `sap.ui.unified.FileUploader`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.unified.FileUploader` itself.
     *
     * Event is fired when the size of the file is 0
     */
    attachFileEmpty(
      /**
       * The function to be called when the event occurs
       */
      fnFunction: Function,
      /**
       * Context object to call the event handler with. Defaults to this `sap.ui.unified.FileUploader` itself
       */
      oListener?: object
    ): this;
    /**
     * @SINCE 1.24.0
     *
     * Attaches event handler `fnFunction` to the {@link #event:filenameLengthExceed filenameLengthExceed} event
     * of this `sap.ui.unified.FileUploader`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.unified.FileUploader` itself.
     *
     * Event is fired, if the filename of a chosen file is longer than the value specified with the `maximumFilenameLength`
     * property.
     */
    attachFilenameLengthExceed(
      /**
       * The function to be called when the event occurs
       */
      fnFunction: Function,
      /**
       * Context object to call the event handler with. Defaults to this `sap.ui.unified.FileUploader` itself
       */
      oListener?: object
    ): this;
    /**
     * Attaches event handler `fnFunction` to the {@link #event:fileSizeExceed fileSizeExceed} event of this
     * `sap.ui.unified.FileUploader`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.unified.FileUploader` itself.
     *
     * Event is fired when the size of a file is above the `maximumFileSize` property. This event is not supported
     * by Internet Explorer 9 (same restriction as for the property `maximumFileSize`).
     */
    attachFileSizeExceed(
      /**
       * The function to be called when the event occurs
       */
      fnFunction: Function,
      /**
       * Context object to call the event handler with. Defaults to this `sap.ui.unified.FileUploader` itself
       */
      oListener?: object
    ): this;
    /**
     * Attaches event handler `fnFunction` to the {@link #event:typeMissmatch typeMissmatch} event of this `sap.ui.unified.FileUploader`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.unified.FileUploader` itself.
     *
     * Event is fired when the type of a file does not match the `mimeType` or `fileType` property.
     */
    attachTypeMissmatch(
      /**
       * The function to be called when the event occurs
       */
      fnFunction: Function,
      /**
       * Context object to call the event handler with. Defaults to this `sap.ui.unified.FileUploader` itself
       */
      oListener?: object
    ): this;
    /**
     * @SINCE 1.24.0
     *
     * Attaches event handler `fnFunction` to the {@link #event:uploadAborted uploadAborted} event of this `sap.ui.unified.FileUploader`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.unified.FileUploader` itself.
     *
     * Event is fired after the current upload has been aborted.
     *
     * This event is only supported with property `sendXHR` set to true, i.e. the event is not supported in
     * Internet Explorer 9.
     */
    attachUploadAborted(
      /**
       * The function to be called when the event occurs
       */
      fnFunction: Function,
      /**
       * Context object to call the event handler with. Defaults to this `sap.ui.unified.FileUploader` itself
       */
      oListener?: object
    ): this;
    /**
     * Attaches event handler `fnFunction` to the {@link #event:uploadComplete uploadComplete} event of this
     * `sap.ui.unified.FileUploader`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.unified.FileUploader` itself.
     *
     * Event is fired as soon as the upload request is completed (either successful or unsuccessful).
     *
     * To see if the upload request was successful, check the `status` parameter for a value 2xx. The actual
     * progress of the upload can be monitored by listening to the `uploadProgress` event. However, this covers
     * only the client side of the upload process and does not give any success status from the server.
     */
    attachUploadComplete(
      /**
       * The function to be called when the event occurs
       */
      fnFunction: Function,
      /**
       * Context object to call the event handler with. Defaults to this `sap.ui.unified.FileUploader` itself
       */
      oListener?: object
    ): this;
    /**
     * @SINCE 1.24.0
     *
     * Attaches event handler `fnFunction` to the {@link #event:uploadProgress uploadProgress} event of this
     * `sap.ui.unified.FileUploader`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.unified.FileUploader` itself.
     *
     * Event is fired after the upload has started and before the upload is completed.
     *
     * It contains progress information related to the running upload. Depending on file size, band width and
     * used browser the event is fired once or multiple times.
     *
     * This event is only supported with property `sendXHR` set to true, i.e. the event is not supported in
     * Internet Explorer 9.
     */
    attachUploadProgress(
      /**
       * The function to be called when the event occurs
       */
      fnFunction: Function,
      /**
       * Context object to call the event handler with. Defaults to this `sap.ui.unified.FileUploader` itself
       */
      oListener?: object
    ): this;
    /**
     * @SINCE 1.30.0
     *
     * Attaches event handler `fnFunction` to the {@link #event:uploadStart uploadStart} event of this `sap.ui.unified.FileUploader`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.unified.FileUploader` itself.
     *
     * Event is fired before an upload is started.
     */
    attachUploadStart(
      /**
       * The function to be called when the event occurs
       */
      fnFunction: Function,
      /**
       * Context object to call the event handler with. Defaults to this `sap.ui.unified.FileUploader` itself
       */
      oListener?: object
    ): this;
  }

  export interface $FileUploaderSettings extends $ControlSettings {
    /**
     * Value of the path for file upload.
     */
    value?: string | PropertyBindingInfo;

    /**
     * Disabled controls have different colors, depending on customer settings.
     */
    enabled?: boolean | PropertyBindingInfo;

    /**
     * Used when URL address is on a remote server.
     */
    uploadUrl?: URI | PropertyBindingInfo;

    /**
     * Unique control name for identification on the server side after sending data to the server.
     */
    name?: string | PropertyBindingInfo;

    /**
     * Specifies the displayed control width.
     */
    width?: CSSSize | PropertyBindingInfo;

    /**
     * If set to "true", the upload immediately starts after file selection. With the default setting, the upload
     * needs to be explicitly triggered.
     */
    uploadOnChange?: boolean | PropertyBindingInfo;

    /**
     * Additional data that is sent to the back end service.
     *
     * Data will be transmitted as value of a hidden input where the name is derived from the `name` property
     * with suffix "-data".
     */
    additionalData?: string | PropertyBindingInfo;

    /**
     * If the FileUploader is configured to upload the file directly after the file is selected, it is not allowed
     * to upload a file with the same name again. If a user should be allowed to upload a file with the same
     * name again this parameter has to be "true".
     *
     * A typical use case would be if the files have different paths.
     */
    sameFilenameAllowed?: boolean | PropertyBindingInfo;

    /**
     * The button's text can be overwritten using this property.
     */
    buttonText?: string | PropertyBindingInfo;

    /**
     * The chosen files will be checked against an array of file types.
     *
     * If at least one file does not fit the file type restriction, the upload is prevented. **Note:** This
     * property is not supported by Microsoft Edge.
     *
     * Example: `["jpg", "png", "bmp"]`.
     */
    fileType?: string[] | PropertyBindingInfo;

    /**
     * Allows multiple files to be chosen and uploaded from the same folder.
     *
     * This property is not supported by Internet Explorer 9.
     *
     * **Note:** Keep in mind that the various operating systems for mobile devices can react differently to
     * the property so that fewer upload functions may be available in some cases.
     */
    multiple?: boolean | PropertyBindingInfo;

    /**
     * A file size limit in megabytes which prevents the upload if at least one file exceeds it.
     *
     * This property is not supported by Internet Explorer 9.
     */
    maximumFileSize?: float | PropertyBindingInfo;

    /**
     * The chosen files will be checked against an array of MIME types defined in this property.
     *
     * If at least one file does not fit the MIME type restriction, the upload is prevented.
     *
     * **Note:** This property is not supported by Internet Explorer. It is only reliable for common file types
     * like images, audio, video, plain text and HTML documents. File types that are not recognized by the browser
     * result in `file.type` to be returned as an empty string. In this case the verification could not be performed.
     * The file upload is not prevented and the validation based on file type is left to the receiving backend
     * side.
     *
     * Example: `["image/png", "image/jpeg"]`.
     */
    mimeType?: string[] | PropertyBindingInfo;

    /**
     * If set to "true", the request will be sent as XHR request instead of a form submit.
     *
     * This property is not supported by Internet Explorer 9.
     */
    sendXHR?: boolean | PropertyBindingInfo;

    /**
     * @SINCE 1.81.0
     *
     * Chosen HTTP request method for file upload.
     */
    httpRequestMethod?: FileUploaderHttpRequestMethod | PropertyBindingInfo;

    /**
     * Placeholder for the text field.
     */
    placeholder?: string | PropertyBindingInfo;

    /**
     * Style of the button.
     *
     * Values "Transparent, "Accept", "Reject", or "Emphasized" are allowed.
     */
    style?: string | PropertyBindingInfo;

    /**
     * If set to "true", the `FileUploader` will be rendered as Button only, without showing the input field.
     */
    buttonOnly?: boolean | PropertyBindingInfo;

    /**
     * If set to "false", the request will be sent as file only request instead of a multipart/form-data request.
     *
     * Only one file could be uploaded using this type of request. Required for sending such a request is to
     * set the property `sendXHR` to "true". This property is not supported by Internet Explorer 9.
     */
    useMultipart?: boolean | PropertyBindingInfo;

    /**
     * @SINCE 1.24.0
     *
     * The maximum length of a filename which the `FileUploader` will accept.
     *
     * If the maximum filename length is exceeded, the corresponding event `filenameLengthExceed` is fired.
     */
    maximumFilenameLength?: int | PropertyBindingInfo;

    /**
     * @SINCE 1.24.0
     *
     * Visualizes warnings or errors related to the text field.
     *
     * Possible values: Warning, Error, Success, None.
     */
    valueState?: (ValueState | keyof typeof ValueState) | PropertyBindingInfo;

    /**
     * @SINCE 1.52
     *
     * Custom text for the value state message pop-up.
     *
     * **Note:** If not specified, a default text, based on the value state type, will be used instead.
     */
    valueStateText?: string | PropertyBindingInfo;

    /**
     * @SINCE 1.26.0
     *
     * Icon to be displayed as graphical element within the button.
     *
     * This can be a URI to an image or an icon font URI.
     */
    icon?: URI | PropertyBindingInfo;

    /**
     * @SINCE 1.26.0
     *
     * Icon to be displayed as graphical element within the button when it is hovered (only if also a base icon
     * was specified).
     *
     * If not specified, the base icon is used. If an icon font icon is used, this property is ignored.
     */
    iconHovered?: URI | PropertyBindingInfo;

    /**
     * @SINCE 1.26.0
     *
     * Icon to be displayed as graphical element within the button when it is selected (only if also a base
     * icon was specified).
     *
     * If not specified, the base or hovered icon is used. If an icon font icon is used, this property is ignored.
     */
    iconSelected?: URI | PropertyBindingInfo;

    /**
     * @SINCE 1.26.0
     *
     * If set to true (default), the display sequence is 1. icon 2. control text.
     */
    iconFirst?: boolean | PropertyBindingInfo;

    /**
     * @SINCE 1.26.0
     *
     * If set to true, the button is displayed without any text.
     */
    iconOnly?: boolean | PropertyBindingInfo;

    /**
     * @SINCE 1.12.2
     *
     * The parameters for the `FileUploader` which are rendered as a hidden input field.
     */
    parameters?:
      | FileUploaderParameter[]
      | FileUploaderParameter
      | AggregationBindingInfo;

    /**
     * The header parameters for the `FileUploader` which are only submitted with XHR requests. Header parameters
     * are not supported by Internet Explorer 9.
     */
    headerParameters?:
      | FileUploaderParameter[]
      | FileUploaderParameter
      | AggregationBindingInfo;

    /**
     * @SINCE 1.52
     *
     * Settings for the `XMLHttpRequest` object. **Note:** This aggregation is only used when the `sendXHR`
     * property is set to `true`.
     */
    xhrSettings?: FileUploaderXHRSettings;

    /**
     * Association to controls / IDs which describe this control (see WAI-ARIA attribute `aria-describedby`).
     */
    ariaDescribedBy?: Array<Control | string>;

    /**
     * Association to controls / IDs which label this control (see WAI-ARIA attribute `aria-labelledby`).
     */
    ariaLabelledBy?: Array<Control | string>;

    /**
     * Event is fired when the value of the file path has been changed.
     *
     * **Note:** Keep in mind that because of the HTML input element of type file, the event is also fired in
     * Chrome browser when the Cancel button of the uploads window is pressed.
     */
    change?: Function;

    /**
     * Event is fired as soon as the upload request is completed (either successful or unsuccessful).
     *
     * To see if the upload request was successful, check the `status` parameter for a value 2xx. The actual
     * progress of the upload can be monitored by listening to the `uploadProgress` event. However, this covers
     * only the client side of the upload process and does not give any success status from the server.
     */
    uploadComplete?: Function;

    /**
     * Event is fired when the type of a file does not match the `mimeType` or `fileType` property.
     */
    typeMissmatch?: Function;

    /**
     * Event is fired when the size of a file is above the `maximumFileSize` property. This event is not supported
     * by Internet Explorer 9 (same restriction as for the property `maximumFileSize`).
     */
    fileSizeExceed?: Function;

    /**
     * Event is fired when the size of the file is 0
     */
    fileEmpty?: Function;

    /**
     * Event is fired when the file is allowed for upload on client side.
     */
    fileAllowed?: Function;

    /**
     * @SINCE 1.24.0
     *
     * Event is fired after the upload has started and before the upload is completed.
     *
     * It contains progress information related to the running upload. Depending on file size, band width and
     * used browser the event is fired once or multiple times.
     *
     * This event is only supported with property `sendXHR` set to true, i.e. the event is not supported in
     * Internet Explorer 9.
     */
    uploadProgress?: Function;

    /**
     * @SINCE 1.24.0
     *
     * Event is fired after the current upload has been aborted.
     *
     * This event is only supported with property `sendXHR` set to true, i.e. the event is not supported in
     * Internet Explorer 9.
     */
    uploadAborted?: Function;

    /**
     * @SINCE 1.24.0
     *
     * Event is fired, if the filename of a chosen file is longer than the value specified with the `maximumFilenameLength`
     * property.
     */
    filenameLengthExceed?: Function;

    /**
     * @SINCE 1.30.0
     *
     * Event is fired before an upload is started.
     */
    uploadStart?: Function;
  }
}

declare module "sap/ui/unified/FileUploaderParameter" {
  import { default as UI5Element, $ElementSettings } from "sap/ui/core/Element";

  import ElementMetadata from "sap/ui/core/ElementMetadata";

  import { PropertyBindingInfo } from "sap/ui/base/ManagedObject";

  /**
   * Represents a parameter for the FileUploader which is rendered as a hidden inputfield.
   */
  export default class FileUploaderParameter extends UI5Element {
    /**
     * Constructor for a new FileUploaderParameter.
     *
     * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated
     * objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description
     * of the syntax of the settings object.
     */
    constructor(
      /**
       * initial settings for the new control
       */
      mSettings?: $FileUploaderParameterSettings
    );
    /**
     * Constructor for a new FileUploaderParameter.
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
      mSettings?: $FileUploaderParameterSettings
    );

    /**
     * Creates a new subclass of class sap.ui.unified.FileUploaderParameter with name `sClassName` and enriches
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
      oClassInfo?: sap.ClassInfo<T, FileUploaderParameter>,
      /**
       * Constructor function for the metadata object; if not given, it defaults to the metadata implementation
       * used by this class
       */
      FNMetaImpl?: Function
    ): Function;
    /**
     * Returns a metadata object for class sap.ui.unified.FileUploaderParameter.
     */
    static getMetadata(): ElementMetadata;
    /**
     * @SINCE 1.12.2
     *
     * Gets current value of property {@link #getName name}.
     *
     * The name of the hidden inputfield.
     */
    getName(): string;
    /**
     * @SINCE 1.12.2
     *
     * Gets current value of property {@link #getValue value}.
     *
     * The value of the hidden inputfield.
     */
    getValue(): string;
    /**
     * @SINCE 1.12.2
     *
     * Sets a new value for property {@link #getName name}.
     *
     * The name of the hidden inputfield.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     */
    setName(
      /**
       * New value for property `name`
       */
      sName?: string
    ): this;
    /**
     * @SINCE 1.12.2
     *
     * Sets a new value for property {@link #getValue value}.
     *
     * The value of the hidden inputfield.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     */
    setValue(
      /**
       * New value for property `value`
       */
      sValue?: string
    ): this;
  }

  export interface $FileUploaderParameterSettings extends $ElementSettings {
    /**
     * @SINCE 1.12.2
     *
     * The name of the hidden inputfield.
     */
    name?: string | PropertyBindingInfo;

    /**
     * @SINCE 1.12.2
     *
     * The value of the hidden inputfield.
     */
    value?: string | PropertyBindingInfo;
  }
}

declare module "sap/ui/unified/FileUploaderXHRSettings" {
  import { default as UI5Element, $ElementSettings } from "sap/ui/core/Element";

  import ElementMetadata from "sap/ui/core/ElementMetadata";

  import { PropertyBindingInfo } from "sap/ui/base/ManagedObject";

  /**
   * @SINCE 1.52
   *
   * Properties for the `XMLHttpRequest` object used for file uploads.
   */
  export default class FileUploaderXHRSettings extends UI5Element {
    /**
     * Constructor for a new FileUploaderXHRSettings.
     *
     * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated
     * objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description
     * of the syntax of the settings object.
     */
    constructor(
      /**
       * initial settings for the new control
       */
      mSettings?: $FileUploaderXHRSettingsSettings
    );
    /**
     * Constructor for a new FileUploaderXHRSettings.
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
      mSettings?: $FileUploaderXHRSettingsSettings
    );

    /**
     * Creates a new subclass of class sap.ui.unified.FileUploaderXHRSettings with name `sClassName` and enriches
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
      oClassInfo?: sap.ClassInfo<T, FileUploaderXHRSettings>,
      /**
       * Constructor function for the metadata object; if not given, it defaults to the metadata implementation
       * used by this class
       */
      FNMetaImpl?: Function
    ): Function;
    /**
     * Returns a metadata object for class sap.ui.unified.FileUploaderXHRSettings.
     */
    static getMetadata(): ElementMetadata;
    /**
     * @SINCE 1.52
     *
     * Gets current value of property {@link #getWithCredentials withCredentials}.
     *
     * Determines the value of the `XMLHttpRequest.withCredentials` property
     *
     * Default value is `false`.
     */
    getWithCredentials(): boolean;
    /**
     * @SINCE 1.52
     *
     * Sets a new value for property {@link #getWithCredentials withCredentials}.
     *
     * Determines the value of the `XMLHttpRequest.withCredentials` property
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `false`.
     */
    setWithCredentials(
      /**
       * New value for property `withCredentials`
       */
      bWithCredentials?: boolean
    ): this;
  }

  export interface $FileUploaderXHRSettingsSettings extends $ElementSettings {
    /**
     * @SINCE 1.52
     *
     * Determines the value of the `XMLHttpRequest.withCredentials` property
     */
    withCredentials?: boolean | PropertyBindingInfo;
  }
}

declare module "sap/ui/unified/Menu" {
  import { default as Control, $ControlSettings } from "sap/ui/core/Control";

  import { IContextMenu, ID, Dock, Collision } from "sap/ui/core/library";

  import MenuItemBase from "sap/ui/unified/MenuItemBase";

  import ElementMetadata from "sap/ui/core/ElementMetadata";

  import UI5Element from "sap/ui/core/Element";

  import {
    PropertyBindingInfo,
    AggregationBindingInfo,
  } from "sap/ui/base/ManagedObject";

  /**
   * @SINCE 1.21.0
   *
   * A menu is an interactive element which provides a choice of different actions to the user. These actions
   * (items) can also be organized in submenus. Like other dialog-like controls, the menu is not rendered
   * within the control hierarchy. Instead it can be opened at a specified position via a function call.
   */
  export default class Menu extends Control implements IContextMenu {
    __implements__sap_ui_core_IContextMenu: boolean;
    /**
     * Constructor for a new Menu control.
     *
     * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated
     * objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description
     * of the syntax of the settings object.
     */
    constructor(
      /**
       * Initial settings for the new control
       */
      mSettings?: $MenuSettings
    );
    /**
     * Constructor for a new Menu control.
     *
     * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated
     * objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description
     * of the syntax of the settings object.
     */
    constructor(
      /**
       * Id for the new control, generated automatically if no id is given
       */
      sId?: string,
      /**
       * Initial settings for the new control
       */
      mSettings?: $MenuSettings
    );

    /**
     * @SINCE 1.26.3
     *
     * Adds some ariaLabelledBy into the association {@link #getAriaLabelledBy ariaLabelledBy}.
     */
    addAriaLabelledBy(
      /**
       * The ariaLabelledBy to add; if empty, nothing is inserted
       */
      vAriaLabelledBy: ID | Control
    ): this;
    /**
     * Adds some item to the aggregation {@link #getItems items}.
     */
    addItem(
      /**
       * The item to add; if empty, nothing is inserted
       */
      oItem: MenuItemBase
    ): this;
    /**
     * Attaches event handler `fnFunction` to the {@link #event:itemSelect itemSelect} event of this `sap.ui.unified.Menu`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.unified.Menu` itself.
     *
     * Fired on the root menu of a menu hierarchy whenever a user selects an item within the menu or within
     * one of its direct or indirect submenus. **Note:** There is also a select event available for each single
     * menu item. This event and the event of the menu items are redundant.
     */
    attachItemSelect(
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
       * Context object to call the event handler with. Defaults to this `sap.ui.unified.Menu` itself
       */
      oListener?: object
    ): this;
    /**
     * Closes the menu.
     */
    close(): void;
    /**
     * Destroys all the items in the aggregation {@link #getItems items}.
     */
    destroyItems(): this;
    /**
     * Detaches event handler `fnFunction` from the {@link #event:itemSelect itemSelect} event of this `sap.ui.unified.Menu`.
     *
     * The passed function and listener object must match the ones used for event registration.
     */
    detachItemSelect(
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
     * Creates a new subclass of class sap.ui.unified.Menu with name `sClassName` and enriches it with the information
     * contained in `oClassInfo`.
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
      oClassInfo?: sap.ClassInfo<T, Menu>,
      /**
       * Constructor function for the metadata object; if not given, it defaults to the metadata implementation
       * used by this class
       */
      FNMetaImpl?: Function
    ): Function;
    /**
     * Fires event {@link #event:itemSelect itemSelect} to attached listeners.
     */
    fireItemSelect(
      /**
       * Parameters to pass along with the event
       */
      mParameters?: {
        /**
         * The action (item) which was selected by the user.
         */
        item?: MenuItemBase;
      }
    ): this;
    /**
     * @deprecated (since 1.27.0) - replaced by `ariaLabelledBy` association
     *
     * Gets current value of property {@link #getAriaDescription ariaDescription}.
     *
     * Accessible label / description of the menu for assistive technologies like screenreaders.
     */
    getAriaDescription(): string;
    /**
     * @SINCE 1.26.3
     *
     * Returns array of IDs of the elements which are the current targets of the association {@link #getAriaLabelledBy
     * ariaLabelledBy}.
     */
    getAriaLabelledBy(): ID[];
    /**
     * Gets current value of property {@link #getEnabled enabled}.
     *
     * When a menu is disabled none of its items can be selected by the user. The enabled property of an item
     * (@link sap.ui.unified.MenuItemBase#getEnabled) has no effect when the menu of the item is disabled.
     *
     * Default value is `true`.
     */
    getEnabled(): boolean;
    /**
     * Gets content of aggregation {@link #getItems items}.
     *
     * The available actions to be displayed as items of the menu.
     */
    getItems(): MenuItemBase[];
    /**
     * Gets current value of property {@link #getMaxVisibleItems maxVisibleItems}.
     *
     * The maximum number of items which are displayed before an overflow mechanism takes effect. A value smaller
     * than 1 means an infinite number of visible items. The overall height of the menu is limited by the height
     * of the screen. If the maximum possible height is reached, an overflow takes effect, even if the maximum
     * number of visible items is not yet reached.
     *
     * Default value is `0`.
     */
    getMaxVisibleItems(): int;
    /**
     * Returns a metadata object for class sap.ui.unified.Menu.
     */
    static getMetadata(): ElementMetadata;
    /**
     * @SINCE 1.25.0
     *
     * Gets current value of property {@link #getPageSize pageSize}.
     *
     * The keyboard can be used to navigate through the items of a menu. Beside the arrow keys for single steps
     * and the Home / End keys for jumping to the first / last item, the Page Up / Page
     * Down keys can be used to jump an arbitrary number of items up or down. This number can be defined
     * via the `pageSize` property. For values smaller than 1, paging behaves in a similar way to when using
     * the Home / End keys. If the value equals 1, the paging behavior is similar to that of the
     * arrow keys.
     *
     * Default value is `5`.
     */
    getPageSize(): int;
    /**
     * Checks for the provided `sap.ui.unified.MenuItemBase` in the aggregation {@link #getItems items}. and
     * returns its index if found or -1 otherwise.
     */
    indexOfItem(
      /**
       * The item whose index is looked for
       */
      oItem: MenuItemBase
    ): int;
    /**
     * Inserts a item into the aggregation {@link #getItems items}.
     */
    insertItem(
      /**
       * The item to insert; if empty, nothing is inserted
       */
      oItem: MenuItemBase,
      /**
       * The `0`-based index the item should be inserted at; for a negative value of `iIndex`, the item is inserted
       * at position 0; for a value greater than the current size of the aggregation, the item is inserted at
       * the last position
       */
      iIndex: int
    ): this;
    /**
     * Opens the menu at the specified position.
     *
     * The position of the menu is defined relative to an element in the visible DOM by specifying the docking
     * location of the menu and of the related element.
     *
     * See {@link sap.ui.core.Popup#open Popup#open} for further details about popup positioning.
     */
    open(
      /**
       * Indicates whether or not the first item shall be highlighted when the menu is opened (keyboard case)
       */
      bWithKeyboard: boolean,
      /**
       * The element which will get the focus back again after the menu was closed
       */
      oOpenerRef: UI5Element | Element,
      /**
       * The reference docking location of the menu for positioning the menu on the screen
       */
      my: Dock,
      /**
       * The 'of' element's reference docking location for positioning the menu on the screen
       */
      at: Dock,
      /**
       * The menu is positioned relatively to this element based on the given dock locations
       */
      of: UI5Element | Element,
      /**
       * The offset relative to the docking point, specified as a string with space-separated pixel values (e.g.
       * "10 0" to move the popup 10 pixels to the right)
       */
      offset?: string,
      /**
       * The collision defines how the position of the menu should be adjusted in case it overflows the window
       * in some direction
       */
      collision?: Collision
    ): void;
    /**
     * Opens the menu as a context menu.
     */
    openAsContextMenu(
      /**
       * The event object or an object containing offsetX, offsetY values and left, top values of the element's
       * position
       */
      oEvent: jQuery.Event | object,
      /**
       * Might be UI5 Element or DOM Element
       */
      oOpenerRef: UI5Element | HTMLElement
    ): void;
    /**
     * @SINCE 1.26.3
     *
     * Removes all the controls in the association named {@link #getAriaLabelledBy ariaLabelledBy}.
     */
    removeAllAriaLabelledBy(): ID[];
    /**
     * Removes all the controls from the aggregation {@link #getItems items}.
     *
     * Additionally, it unregisters them from the hosting UIArea.
     */
    removeAllItems(): MenuItemBase[];
    /**
     * @SINCE 1.26.3
     *
     * Removes an ariaLabelledBy from the association named {@link #getAriaLabelledBy ariaLabelledBy}.
     */
    removeAriaLabelledBy(
      /**
       * The ariaLabelledBy to be removed or its index or ID
       */
      vAriaLabelledBy: int | ID | Control
    ): ID;
    /**
     * Removes a item from the aggregation {@link #getItems items}.
     */
    removeItem(
      /**
       * The item to remove or its index or id
       */
      vItem: int | string | MenuItemBase
    ): MenuItemBase;
    /**
     * @deprecated (since 1.27.0) - replaced by `ariaLabelledBy` association
     *
     * Sets a new value for property {@link #getAriaDescription ariaDescription}.
     *
     * Accessible label / description of the menu for assistive technologies like screenreaders.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     */
    setAriaDescription(
      /**
       * New value for property `ariaDescription`
       */
      sAriaDescription?: string
    ): this;
    /**
     * Sets a new value for property {@link #getEnabled enabled}.
     *
     * When a menu is disabled none of its items can be selected by the user. The enabled property of an item
     * (@link sap.ui.unified.MenuItemBase#getEnabled) has no effect when the menu of the item is disabled.
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
     * Sets a new value for property {@link #getMaxVisibleItems maxVisibleItems}.
     *
     * The maximum number of items which are displayed before an overflow mechanism takes effect. A value smaller
     * than 1 means an infinite number of visible items. The overall height of the menu is limited by the height
     * of the screen. If the maximum possible height is reached, an overflow takes effect, even if the maximum
     * number of visible items is not yet reached.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `0`.
     */
    setMaxVisibleItems(
      /**
       * New value for property `maxVisibleItems`
       */
      iMaxVisibleItems?: int
    ): this;
    /**
     * @SINCE 1.25.0
     *
     * Sets a new value for property {@link #getPageSize pageSize}.
     *
     * The keyboard can be used to navigate through the items of a menu. Beside the arrow keys for single steps
     * and the Home / End keys for jumping to the first / last item, the Page Up / Page
     * Down keys can be used to jump an arbitrary number of items up or down. This number can be defined
     * via the `pageSize` property. For values smaller than 1, paging behaves in a similar way to when using
     * the Home / End keys. If the value equals 1, the paging behavior is similar to that of the
     * arrow keys.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `5`.
     */
    setPageSize(
      /**
       * New value for property `pageSize`
       */
      iPageSize?: int
    ): this;
    /**
     * Attaches event handler `fnFunction` to the {@link #event:itemSelect itemSelect} event of this `sap.ui.unified.Menu`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.unified.Menu` itself.
     *
     * Fired on the root menu of a menu hierarchy whenever a user selects an item within the menu or within
     * one of its direct or indirect submenus. **Note:** There is also a select event available for each single
     * menu item. This event and the event of the menu items are redundant.
     */
    attachItemSelect(
      /**
       * The function to be called when the event occurs
       */
      fnFunction: Function,
      /**
       * Context object to call the event handler with. Defaults to this `sap.ui.unified.Menu` itself
       */
      oListener?: object
    ): this;
  }

  export interface $MenuSettings extends $ControlSettings {
    /**
     * When a menu is disabled none of its items can be selected by the user. The enabled property of an item
     * (@link sap.ui.unified.MenuItemBase#getEnabled) has no effect when the menu of the item is disabled.
     */
    enabled?: boolean | PropertyBindingInfo;

    /**
     * @deprecated (since 1.27.0) - replaced by `ariaLabelledBy` association
     *
     * Accessible label / description of the menu for assistive technologies like screenreaders.
     */
    ariaDescription?: string | PropertyBindingInfo;

    /**
     * The maximum number of items which are displayed before an overflow mechanism takes effect. A value smaller
     * than 1 means an infinite number of visible items. The overall height of the menu is limited by the height
     * of the screen. If the maximum possible height is reached, an overflow takes effect, even if the maximum
     * number of visible items is not yet reached.
     */
    maxVisibleItems?: int | PropertyBindingInfo;

    /**
     * @SINCE 1.25.0
     *
     * The keyboard can be used to navigate through the items of a menu. Beside the arrow keys for single steps
     * and the Home / End keys for jumping to the first / last item, the Page Up / Page
     * Down keys can be used to jump an arbitrary number of items up or down. This number can be defined
     * via the `pageSize` property. For values smaller than 1, paging behaves in a similar way to when using
     * the Home / End keys. If the value equals 1, the paging behavior is similar to that of the
     * arrow keys.
     */
    pageSize?: int | PropertyBindingInfo;

    /**
     * The available actions to be displayed as items of the menu.
     */
    items?: MenuItemBase[] | MenuItemBase | AggregationBindingInfo;

    /**
     * @SINCE 1.26.3
     *
     * Reference to accessible labels (ids of existing DOM elements or controls) for assistive technologies
     * like screenreaders.
     */
    ariaLabelledBy?: Array<Control | string>;

    /**
     * Fired on the root menu of a menu hierarchy whenever a user selects an item within the menu or within
     * one of its direct or indirect submenus. **Note:** There is also a select event available for each single
     * menu item. This event and the event of the menu items are redundant.
     */
    itemSelect?: Function;
  }
}

declare module "sap/ui/unified/MenuItem" {
  import {
    default as MenuItemBase,
    $MenuItemBaseSettings,
  } from "sap/ui/unified/MenuItemBase";

  import { ID, URI } from "sap/ui/core/library";

  import Control from "sap/ui/core/Control";

  import ElementMetadata from "sap/ui/core/ElementMetadata";

  import { PropertyBindingInfo } from "sap/ui/base/ManagedObject";

  /**
   * @SINCE 1.21.0
   *
   * Standard item to be used inside a menu. A menu item represents an action which can be selected by the
   * user in the menu or it can provide a submenu to organize the actions hierarchically.
   */
  export default class MenuItem extends MenuItemBase {
    /**
     * Constructor for a new MenuItem element.
     *
     * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated
     * objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description
     * of the syntax of the settings object.
     */
    constructor(
      /**
       * Initial settings for the new control
       */
      mSettings?: $MenuItemSettings
    );
    /**
     * Constructor for a new MenuItem element.
     *
     * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated
     * objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description
     * of the syntax of the settings object.
     */
    constructor(
      /**
       * Id for the new control, generated automatically if no id is given
       */
      sId?: string,
      /**
       * Initial settings for the new control
       */
      mSettings?: $MenuItemSettings
    );

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
     * Creates a new subclass of class sap.ui.unified.MenuItem with name `sClassName` and enriches it with the
     * information contained in `oClassInfo`.
     *
     * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.unified.MenuItemBase.extend}.
     */
    static extend<T extends Record<string, unknown>>(
      /**
       * Name of the class being created
       */
      sClassName: string,
      /**
       * Object literal with information about the class
       */
      oClassInfo?: sap.ClassInfo<T, MenuItem>,
      /**
       * Constructor function for the metadata object; if not given, it defaults to the metadata implementation
       * used by this class
       */
      FNMetaImpl?: Function
    ): Function;
    /**
     * Returns array of IDs of the elements which are the current targets of the association {@link #getAriaLabelledBy
     * ariaLabelledBy}.
     */
    getAriaLabelledBy(): ID[];
    /**
     * Gets current value of property {@link #getIcon icon}.
     *
     * Defines the icon of the {@link sap.ui.core.IconPool sap.ui.core.IconPool} or an image which should be
     * displayed on the item.
     *
     * Default value is `empty string`.
     */
    getIcon(): URI;
    /**
     * Returns a metadata object for class sap.ui.unified.MenuItem.
     */
    static getMetadata(): ElementMetadata;
    /**
     * Gets current value of property {@link #getText text}.
     *
     * Defines the text which should be displayed on the item.
     *
     * Default value is `empty string`.
     */
    getText(): string;
    /**
     * Removes all the controls in the association named {@link #getAriaLabelledBy ariaLabelledBy}.
     */
    removeAllAriaLabelledBy(): ID[];
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
     * Sets a new value for property {@link #getIcon icon}.
     *
     * Defines the icon of the {@link sap.ui.core.IconPool sap.ui.core.IconPool} or an image which should be
     * displayed on the item.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `empty string`.
     */
    setIcon(
      /**
       * New value for property `icon`
       */
      sIcon?: URI
    ): this;
    /**
     * Sets a new value for property {@link #getText text}.
     *
     * Defines the text which should be displayed on the item.
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
  }

  export interface $MenuItemSettings extends $MenuItemBaseSettings {
    /**
     * Defines the text which should be displayed on the item.
     */
    text?: string | PropertyBindingInfo;

    /**
     * Defines the icon of the {@link sap.ui.core.IconPool sap.ui.core.IconPool} or an image which should be
     * displayed on the item.
     */
    icon?: URI | PropertyBindingInfo;

    /**
     * Association to controls / IDs which label this control (see WAI-ARIA attribute aria-labelledby).
     */
    ariaLabelledBy?: Array<Control | string>;
  }
}

declare module "sap/ui/unified/MenuItemBase" {
  import { default as UI5Element, $ElementSettings } from "sap/ui/core/Element";

  import ElementMetadata from "sap/ui/core/ElementMetadata";

  import Menu from "sap/ui/unified/Menu";

  import RenderManager from "sap/ui/core/RenderManager";

  import { PropertyBindingInfo } from "sap/ui/base/ManagedObject";

  /**
   * @SINCE 1.21.0
   *
   * Abstract base class for menu item which provides common properties and events for all concrete item implementations.
   */
  export default class MenuItemBase extends UI5Element {
    /**
     * Abstract base class `MenuItemBase` for menu item elements. Please use concrete subclasses.
     *
     * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated
     * objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description
     * of the syntax of the settings object.
     */
    constructor(
      /**
       * Initial settings for the new control
       */
      mSettings?: $MenuItemBaseSettings
    );
    /**
     * Abstract base class `MenuItemBase` for menu item elements. Please use concrete subclasses.
     *
     * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated
     * objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description
     * of the syntax of the settings object.
     */
    constructor(
      /**
       * Id for the new control, generated automatically if no id is given
       */
      sId?: string,
      /**
       * Initial settings for the new control
       */
      mSettings?: $MenuItemBaseSettings
    );

    /**
     * Attaches event handler `fnFunction` to the {@link #event:select select} event of this `sap.ui.unified.MenuItemBase`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.unified.MenuItemBase` itself.
     *
     * Fired when the item is selected by the user. **Note:** The event is also available for items which have
     * a submenu. In general, applications must not handle event in this case because the user selection opens
     * the sub menu.
     */
    attachSelect(
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
       * Context object to call the event handler with. Defaults to this `sap.ui.unified.MenuItemBase` itself
       */
      oListener?: object
    ): this;
    /**
     * Destroys the submenu in the aggregation {@link #getSubmenu submenu}.
     */
    destroySubmenu(): this;
    /**
     * Detaches event handler `fnFunction` from the {@link #event:select select} event of this `sap.ui.unified.MenuItemBase`.
     *
     * The passed function and listener object must match the ones used for event registration.
     */
    detachSelect(
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
     * Creates a new subclass of class sap.ui.unified.MenuItemBase with name `sClassName` and enriches it with
     * the information contained in `oClassInfo`.
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
      oClassInfo?: sap.ClassInfo<T, MenuItemBase>,
      /**
       * Constructor function for the metadata object; if not given, it defaults to the metadata implementation
       * used by this class
       */
      FNMetaImpl?: Function
    ): Function;
    /**
     * Fires event {@link #event:select select} to attached listeners.
     */
    fireSelect(
      /**
       * Parameters to pass along with the event
       */
      mParameters?: {
        /**
         * The current item
         */
        item?: MenuItemBase;
      }
    ): this;
    /**
     * Gets current value of property {@link #getEnabled enabled}.
     *
     * When an item is disabled the item can not be selected by the user. The enabled property of the item has
     * no effect when the menu of the item is disabled ({@link sap.ui.unified.Menu#getEnabled Menu#getEnabled}).
     *
     * Default value is `true`.
     */
    getEnabled(): boolean;
    /**
     * Returns a metadata object for class sap.ui.unified.MenuItemBase.
     */
    static getMetadata(): ElementMetadata;
    /**
     * Gets current value of property {@link #getStartsSection startsSection}.
     *
     * Defines whether a visual separator should be rendered before the item. **Note:** If an item is invisible
     * also the separator of this item is not shown.
     *
     * Default value is `false`.
     */
    getStartsSection(): boolean;
    /**
     * Gets content of aggregation {@link #getSubmenu submenu}.
     *
     * An optional submenu of the item which is opened when the item is selected by the user.
     */
    getSubmenu(): Menu;
    /**
     * Gets current value of property {@link #getVisible visible}.
     *
     * Invisible items do not appear in the menu.
     *
     * Default value is `true`.
     */
    getVisible(): boolean;
    /**
     * Changes the visual hover state of the menu item.
     *
     * Subclasses may override this function.
     */
    hover(
      /**
       * Specifies whether the item is currently hovered or not.
       */
      bHovered: boolean,
      /**
       * The menu to which this item belongs
       */
      oMenu: Menu
    ): void;
    /**
     * Informs the item that the item HTML is now applied to the DOM.
     *
     * Subclasses may override this function.
     */
    onAfterRendering(): void;
    /**
     * Event handler which is called whenever the submenu of the item is opened or closed.
     *
     * Subclasses may override this function.
     */
    onSubmenuToggle(
      /**
       * Specifies whether the submenu of the item is opened or closed
       */
      bOpened: boolean
    ): void;
    /**
     * Produces the HTML of an item and writes it to render-output-buffer during the rendering of the corresponding
     * menu.
     *
     * Subclasses may override this function.
     */
    render(
      /**
       * The `RenderManager` that can be used for writing to the render-output-buffer
       */
      oRenderManager: RenderManager,
      /**
       * The item which should be rendered
       */
      oItem: MenuItemBase,
      /**
       * The menu to which this item belongs
       */
      oMenu: Menu
    ): void;
    /**
     * Sets a new value for property {@link #getEnabled enabled}.
     *
     * When an item is disabled the item can not be selected by the user. The enabled property of the item has
     * no effect when the menu of the item is disabled ({@link sap.ui.unified.Menu#getEnabled Menu#getEnabled}).
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
     * Sets a new value for property {@link #getStartsSection startsSection}.
     *
     * Defines whether a visual separator should be rendered before the item. **Note:** If an item is invisible
     * also the separator of this item is not shown.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `false`.
     */
    setStartsSection(
      /**
       * New value for property `startsSection`
       */
      bStartsSection?: boolean
    ): this;
    /**
     * Sets the aggregated {@link #getSubmenu submenu}.
     */
    setSubmenu(
      /**
       * The submenu to set
       */
      oSubmenu: Menu
    ): this;
    /**
     * Sets a new value for property {@link #getVisible visible}.
     *
     * Invisible items do not appear in the menu.
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
     * Attaches event handler `fnFunction` to the {@link #event:select select} event of this `sap.ui.unified.MenuItemBase`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.unified.MenuItemBase` itself.
     *
     * Fired when the item is selected by the user. **Note:** The event is also available for items which have
     * a submenu. In general, applications must not handle event in this case because the user selection opens
     * the sub menu.
     */
    attachSelect(
      /**
       * The function to be called when the event occurs
       */
      fnFunction: Function,
      /**
       * Context object to call the event handler with. Defaults to this `sap.ui.unified.MenuItemBase` itself
       */
      oListener?: object
    ): this;
  }

  export interface $MenuItemBaseSettings extends $ElementSettings {
    /**
     * When an item is disabled the item can not be selected by the user. The enabled property of the item has
     * no effect when the menu of the item is disabled ({@link sap.ui.unified.Menu#getEnabled Menu#getEnabled}).
     */
    enabled?: boolean | PropertyBindingInfo;

    /**
     * Invisible items do not appear in the menu.
     */
    visible?: boolean | PropertyBindingInfo;

    /**
     * Defines whether a visual separator should be rendered before the item. **Note:** If an item is invisible
     * also the separator of this item is not shown.
     */
    startsSection?: boolean | PropertyBindingInfo;

    /**
     * An optional submenu of the item which is opened when the item is selected by the user.
     */
    submenu?: Menu;

    /**
     * Fired when the item is selected by the user. **Note:** The event is also available for items which have
     * a submenu. In general, applications must not handle event in this case because the user selection opens
     * the sub menu.
     */
    select?: Function;
  }
}

declare module "sap/ui/unified/MenuTextFieldItem" {
  import {
    default as MenuItemBase,
    $MenuItemBaseSettings,
  } from "sap/ui/unified/MenuItemBase";

  import { URI, ValueState } from "sap/ui/core/library";

  import ElementMetadata from "sap/ui/core/ElementMetadata";

  import Menu from "sap/ui/unified/Menu";

  import { PropertyBindingInfo } from "sap/ui/base/ManagedObject";

  /**
   * @SINCE 1.21.0
   *
   * Special menu item which contains a label and a text field. This menu item is e.g. helpful for filter
   * implementations. The aggregation `submenu` (inherited from parent class) is not supported for this type
   * of menu item.
   */
  export default class MenuTextFieldItem extends MenuItemBase {
    /**
     * Constructor for a new MenuTextFieldItem element.
     *
     * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated
     * objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description
     * of the syntax of the settings object.
     */
    constructor(
      /**
       * Initial settings for the new control
       */
      mSettings?: $MenuTextFieldItemSettings
    );
    /**
     * Constructor for a new MenuTextFieldItem element.
     *
     * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated
     * objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description
     * of the syntax of the settings object.
     */
    constructor(
      /**
       * Id for the new control, generated automatically if no id is given
       */
      sId?: string,
      /**
       * Initial settings for the new control
       */
      mSettings?: $MenuTextFieldItemSettings
    );

    /**
     * @deprecated (since 1.21) - the aggregation `submenu` (inherited from parent class) is not supported for
     * this type of menu item.
     *
     * The aggregation `submenu` (inherited from parent class) is not supported for this type of menu item.
     */
    destroySubmenu(): this;
    /**
     * Creates a new subclass of class sap.ui.unified.MenuTextFieldItem with name `sClassName` and enriches
     * it with the information contained in `oClassInfo`.
     *
     * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.unified.MenuItemBase.extend}.
     */
    static extend<T extends Record<string, unknown>>(
      /**
       * Name of the class being created
       */
      sClassName: string,
      /**
       * Object literal with information about the class
       */
      oClassInfo?: sap.ClassInfo<T, MenuTextFieldItem>,
      /**
       * Constructor function for the metadata object; if not given, it defaults to the metadata implementation
       * used by this class
       */
      FNMetaImpl?: Function
    ): Function;
    /**
     * Gets current value of property {@link #getIcon icon}.
     *
     * Defines the icon of the {@link sap.ui.core.IconPool sap.ui.core.IconPool} or an image which should be
     * displayed on the item.
     */
    getIcon(): URI;
    /**
     * Gets current value of property {@link #getLabel label}.
     *
     * Defines the label of the text field of the item.
     */
    getLabel(): string;
    /**
     * Returns a metadata object for class sap.ui.unified.MenuTextFieldItem.
     */
    static getMetadata(): ElementMetadata;
    /**
     * @deprecated (since 1.21) - the aggregation `submenu` (inherited from parent class) is not supported for
     * this type of menu item.
     *
     * The aggregation `submenu` (inherited from parent class) is not supported for this type of menu item.
     */
    getSubmenu(): Menu;
    /**
     * Gets current value of property {@link #getValue value}.
     *
     * Defines the value of the text field of the item.
     */
    getValue(): string;
    /**
     * Gets current value of property {@link #getValueState valueState}.
     *
     * Defines the value state of the text field of the item. This allows you to visualize e.g. warnings or
     * errors.
     *
     * Default value is `None`.
     */
    getValueState(): ValueState | keyof typeof ValueState;
    /**
     * Sets a new value for property {@link #getIcon icon}.
     *
     * Defines the icon of the {@link sap.ui.core.IconPool sap.ui.core.IconPool} or an image which should be
     * displayed on the item.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     */
    setIcon(
      /**
       * New value for property `icon`
       */
      sIcon?: URI
    ): this;
    /**
     * Sets a new value for property {@link #getLabel label}.
     *
     * Defines the label of the text field of the item.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     */
    setLabel(
      /**
       * New value for property `label`
       */
      sLabel?: string
    ): this;
    /**
     * @deprecated (since 1.21) - the aggregation `submenu` (inherited from parent class) is not supported for
     * this type of menu item.
     *
     * The aggregation `submenu` (inherited from parent class) is not supported for this type of menu item.
     */
    setSubmenu(
      /**
       * The menu to which the sap.ui.unified.Submenu should be set
       */
      oMenu: Menu
    ): this;
    /**
     * Sets a new value for property {@link #getValue value}.
     *
     * Defines the value of the text field of the item.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     */
    setValue(
      /**
       * New value for property `value`
       */
      sValue?: string
    ): this;
    /**
     * Sets a new value for property {@link #getValueState valueState}.
     *
     * Defines the value state of the text field of the item. This allows you to visualize e.g. warnings or
     * errors.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `None`.
     */
    setValueState(
      /**
       * New value for property `valueState`
       */
      sValueState?: ValueState | keyof typeof ValueState
    ): this;
  }

  export interface $MenuTextFieldItemSettings extends $MenuItemBaseSettings {
    /**
     * Defines the label of the text field of the item.
     */
    label?: string | PropertyBindingInfo;

    /**
     * Defines the icon of the {@link sap.ui.core.IconPool sap.ui.core.IconPool} or an image which should be
     * displayed on the item.
     */
    icon?: URI | PropertyBindingInfo;

    /**
     * Defines the value of the text field of the item.
     */
    value?: string | PropertyBindingInfo;

    /**
     * Defines the value state of the text field of the item. This allows you to visualize e.g. warnings or
     * errors.
     */
    valueState?: (ValueState | keyof typeof ValueState) | PropertyBindingInfo;
  }
}

declare module "sap/ui/unified/Shell" {
  import {
    default as ShellLayout,
    $ShellLayoutSettings,
  } from "sap/ui/unified/ShellLayout";

  import Control from "sap/ui/core/Control";

  import ShellHeadItem from "sap/ui/unified/ShellHeadItem";

  import { URI } from "sap/ui/core/library";

  import ElementMetadata from "sap/ui/core/ElementMetadata";

  import ShellHeadUserItem from "sap/ui/unified/ShellHeadUserItem";

  import {
    PropertyBindingInfo,
    AggregationBindingInfo,
  } from "sap/ui/base/ManagedObject";

  /**
   * @SINCE 1.15.1
   * @deprecated (since 1.44.0)
   *
   * The shell control is meant as root control (full-screen) of an application. It was build as root control
   * of the Fiori Launchpad application and provides the basic capabilities for this purpose. Do not use this
   * control within applications which run inside the Fiori Lauchpad and do not use it for other scenarios
   * than the root control usecase.
   */
  export default class Shell extends ShellLayout {
    /**
     * Constructor for a new Shell.
     *
     * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated
     * objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description
     * of the syntax of the settings object.
     */
    constructor(
      /**
       * initial settings for the new control
       */
      mSettings?: $ShellSettings
    );
    /**
     * Constructor for a new Shell.
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
      mSettings?: $ShellSettings
    );

    /**
     * Adds some curtainContent to the aggregation {@link #getCurtainContent curtainContent}.
     */
    addCurtainContent(
      /**
       * The curtainContent to add; if empty, nothing is inserted
       */
      oCurtainContent: Control
    ): this;
    /**
     * Adds some curtainPaneContent to the aggregation {@link #getCurtainPaneContent curtainPaneContent}.
     */
    addCurtainPaneContent(
      /**
       * The curtainPaneContent to add; if empty, nothing is inserted
       */
      oCurtainPaneContent: Control
    ): this;
    /**
     * Adds some headEndItem to the aggregation {@link #getHeadEndItems headEndItems}.
     */
    addHeadEndItem(
      /**
       * The headEndItem to add; if empty, nothing is inserted
       */
      oHeadEndItem: ShellHeadItem
    ): this;
    /**
     * Adds some headItem to the aggregation {@link #getHeadItems headItems}.
     */
    addHeadItem(
      /**
       * The headItem to add; if empty, nothing is inserted
       */
      oHeadItem: ShellHeadItem
    ): this;
    /**
     * Destroys all the curtainContent in the aggregation {@link #getCurtainContent curtainContent}.
     */
    destroyCurtainContent(): this;
    /**
     * Destroys all the curtainPaneContent in the aggregation {@link #getCurtainPaneContent curtainPaneContent}.
     */
    destroyCurtainPaneContent(): this;
    /**
     * Destroys all the headEndItems in the aggregation {@link #getHeadEndItems headEndItems}.
     */
    destroyHeadEndItems(): this;
    /**
     * Destroys the header in the aggregation named `header`, but only if a custom header is set. The default
     * header can not be destroyed.
     */
    destroyHeader(): this;
    /**
     * Destroys all the headItems in the aggregation {@link #getHeadItems headItems}.
     */
    destroyHeadItems(): this;
    /**
     * Destroys the search in the aggregation {@link #getSearch search}.
     */
    destroySearch(): this;
    /**
     * @SINCE 1.22.0
     *
     * Destroys the user in the aggregation {@link #getUser user}.
     */
    destroyUser(): this;
    /**
     * Creates a new subclass of class sap.ui.unified.Shell with name `sClassName` and enriches it with the
     * information contained in `oClassInfo`.
     *
     * `oClassInfo` might contain the same kind of information as described in {@link sap.ui.unified.ShellLayout.extend}.
     */
    static extend<T extends Record<string, unknown>>(
      /**
       * Name of the class being created
       */
      sClassName: string,
      /**
       * Object literal with information about the class
       */
      oClassInfo?: sap.ClassInfo<T, Shell>,
      /**
       * Constructor function for the metadata object; if not given, it defaults to the metadata implementation
       * used by this class
       */
      FNMetaImpl?: Function
    ): Function;
    /**
     * Gets content of aggregation {@link #getCurtainContent curtainContent}.
     *
     * The content to appear in the curtain area.
     */
    getCurtainContent(): Control[];
    /**
     * Gets content of aggregation {@link #getCurtainPaneContent curtainPaneContent}.
     *
     * The content to appear in the pane area of the curtain.
     */
    getCurtainPaneContent(): Control[];
    /**
     * Gets content of aggregation {@link #getHeadEndItems headEndItems}.
     *
     * The buttons shown in the end (right in left-to-right case) of the Shell header. Currently max. 3 visible
     * buttons are supported (when user is set only 1). If a custom header is set this aggregation has no effect.
     */
    getHeadEndItems(): ShellHeadItem[];
    /**
     * Gets content of aggregation {@link #getHeadItems headItems}.
     *
     * The buttons shown in the begin (left in left-to-right case) of the Shell header. Currently max. 3 visible
     * buttons are supported. If a custom header is set this aggregation has no effect.
     */
    getHeadItems(): ShellHeadItem[];
    /**
     * Gets current value of property {@link #getIcon icon}.
     *
     * The application icon. If a custom header is set this property has no effect.
     */
    getIcon(): URI;
    /**
     * Returns a metadata object for class sap.ui.unified.Shell.
     */
    static getMetadata(): ElementMetadata;
    /**
     * Gets content of aggregation {@link #getSearch search}.
     *
     * Experimental (This aggregation might change in future!): The search control which should be displayed
     * in the shell header. If a custom header is set this aggregation has no effect.
     */
    getSearch(): Control;
    /**
     * @SINCE 1.18
     *
     * Gets current value of property {@link #getSearchVisible searchVisible}.
     *
     * If set to false, the search area (aggregation 'search') is hidden. If a custom header is set this property
     * has no effect.
     *
     * Default value is `true`.
     */
    getSearchVisible(): boolean;
    /**
     * @deprecated (since 1.16.3) - Curtain is deprecated and replaced by ShellOverlay mechanism.
     *
     * Gets current value of property {@link #getShowCurtain showCurtain}.
     *
     * Shows / Hides the curtain.
     */
    getShowCurtain(): boolean;
    /**
     * @deprecated (since 1.16.3) - Curtain is deprecated and replaced by ShellOverlay mechanism.
     *
     * Gets current value of property {@link #getShowCurtainPane showCurtainPane}.
     *
     * Shows / Hides the side pane on the curtain.
     */
    getShowCurtainPane(): boolean;
    /**
     * @SINCE 1.22.0
     *
     * Gets content of aggregation {@link #getUser user}.
     *
     * The user item which is rendered in the shell header beside the items. If a custom header is set this
     * aggregation has no effect.
     */
    getUser(): ShellHeadUserItem;
    /**
     * Checks for the provided `sap.ui.core.Control` in the aggregation {@link #getCurtainContent curtainContent}.
     * and returns its index if found or -1 otherwise.
     */
    indexOfCurtainContent(
      /**
       * The curtainContent whose index is looked for
       */
      oCurtainContent: Control
    ): int;
    /**
     * Checks for the provided `sap.ui.core.Control` in the aggregation {@link #getCurtainPaneContent curtainPaneContent}.
     * and returns its index if found or -1 otherwise.
     */
    indexOfCurtainPaneContent(
      /**
       * The curtainPaneContent whose index is looked for
       */
      oCurtainPaneContent: Control
    ): int;
    /**
     * Checks for the provided `sap.ui.unified.ShellHeadItem` in the aggregation {@link #getHeadEndItems headEndItems}.
     * and returns its index if found or -1 otherwise.
     */
    indexOfHeadEndItem(
      /**
       * The headEndItem whose index is looked for
       */
      oHeadEndItem: ShellHeadItem
    ): int;
    /**
     * Checks for the provided `sap.ui.unified.ShellHeadItem` in the aggregation {@link #getHeadItems headItems}.
     * and returns its index if found or -1 otherwise.
     */
    indexOfHeadItem(
      /**
       * The headItem whose index is looked for
       */
      oHeadItem: ShellHeadItem
    ): int;
    /**
     * Inserts a curtainContent into the aggregation {@link #getCurtainContent curtainContent}.
     */
    insertCurtainContent(
      /**
       * The curtainContent to insert; if empty, nothing is inserted
       */
      oCurtainContent: Control,
      /**
       * The `0`-based index the curtainContent should be inserted at; for a negative value of `iIndex`, the curtainContent
       * is inserted at position 0; for a value greater than the current size of the aggregation, the curtainContent
       * is inserted at the last position
       */
      iIndex: int
    ): this;
    /**
     * Inserts a curtainPaneContent into the aggregation {@link #getCurtainPaneContent curtainPaneContent}.
     */
    insertCurtainPaneContent(
      /**
       * The curtainPaneContent to insert; if empty, nothing is inserted
       */
      oCurtainPaneContent: Control,
      /**
       * The `0`-based index the curtainPaneContent should be inserted at; for a negative value of `iIndex`, the
       * curtainPaneContent is inserted at position 0; for a value greater than the current size of the aggregation,
       * the curtainPaneContent is inserted at the last position
       */
      iIndex: int
    ): this;
    /**
     * Inserts a headEndItem into the aggregation {@link #getHeadEndItems headEndItems}.
     */
    insertHeadEndItem(
      /**
       * The headEndItem to insert; if empty, nothing is inserted
       */
      oHeadEndItem: ShellHeadItem,
      /**
       * The `0`-based index the headEndItem should be inserted at; for a negative value of `iIndex`, the headEndItem
       * is inserted at position 0; for a value greater than the current size of the aggregation, the headEndItem
       * is inserted at the last position
       */
      iIndex: int
    ): this;
    /**
     * Inserts a headItem into the aggregation {@link #getHeadItems headItems}.
     */
    insertHeadItem(
      /**
       * The headItem to insert; if empty, nothing is inserted
       */
      oHeadItem: ShellHeadItem,
      /**
       * The `0`-based index the headItem should be inserted at; for a negative value of `iIndex`, the headItem
       * is inserted at position 0; for a value greater than the current size of the aggregation, the headItem
       * is inserted at the last position
       */
      iIndex: int
    ): this;
    /**
     * Removes all the controls from the aggregation {@link #getCurtainContent curtainContent}.
     *
     * Additionally, it unregisters them from the hosting UIArea.
     */
    removeAllCurtainContent(): Control[];
    /**
     * Removes all the controls from the aggregation {@link #getCurtainPaneContent curtainPaneContent}.
     *
     * Additionally, it unregisters them from the hosting UIArea.
     */
    removeAllCurtainPaneContent(): Control[];
    /**
     * Removes all the controls from the aggregation {@link #getHeadEndItems headEndItems}.
     *
     * Additionally, it unregisters them from the hosting UIArea.
     */
    removeAllHeadEndItems(): ShellHeadItem[];
    /**
     * Removes all the controls from the aggregation {@link #getHeadItems headItems}.
     *
     * Additionally, it unregisters them from the hosting UIArea.
     */
    removeAllHeadItems(): ShellHeadItem[];
    /**
     * Removes a curtainContent from the aggregation {@link #getCurtainContent curtainContent}.
     */
    removeCurtainContent(
      /**
       * The curtainContent to remove or its index or id
       */
      vCurtainContent: int | string | Control
    ): Control;
    /**
     * Removes a curtainPaneContent from the aggregation {@link #getCurtainPaneContent curtainPaneContent}.
     */
    removeCurtainPaneContent(
      /**
       * The curtainPaneContent to remove or its index or id
       */
      vCurtainPaneContent: int | string | Control
    ): Control;
    /**
     * Removes a headEndItem from the aggregation {@link #getHeadEndItems headEndItems}.
     */
    removeHeadEndItem(
      /**
       * The headEndItem to remove or its index or id
       */
      vHeadEndItem: int | string | ShellHeadItem
    ): ShellHeadItem;
    /**
     * Removes a headItem from the aggregation {@link #getHeadItems headItems}.
     */
    removeHeadItem(
      /**
       * The headItem to remove or its index or id
       */
      vHeadItem: int | string | ShellHeadItem
    ): ShellHeadItem;
    /**
     * Setter for the aggregated `header`.
     */
    setHeader(
      /**
       * The Control which should be rendered within the Shell header or `null` to render the default Shell header.
       */
      oHeader: Control
    ): this;
    /**
     * Sets a new value for property {@link #getIcon icon}.
     *
     * The application icon. If a custom header is set this property has no effect.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     */
    setIcon(
      /**
       * New value for property `icon`
       */
      sIcon?: URI
    ): this;
    /**
     * Sets the aggregated {@link #getSearch search}.
     */
    setSearch(
      /**
       * The search to set
       */
      oSearch: Control
    ): this;
    /**
     * @SINCE 1.18
     *
     * Sets a new value for property {@link #getSearchVisible searchVisible}.
     *
     * If set to false, the search area (aggregation 'search') is hidden. If a custom header is set this property
     * has no effect.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `true`.
     */
    setSearchVisible(
      /**
       * New value for property `searchVisible`
       */
      bSearchVisible?: boolean
    ): this;
    /**
     * @deprecated (since 1.16.3) - Curtain is deprecated and replaced by ShellOverlay mechanism.
     *
     * Sets a new value for property {@link #getShowCurtain showCurtain}.
     *
     * Shows / Hides the curtain.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     */
    setShowCurtain(
      /**
       * New value for property `showCurtain`
       */
      bShowCurtain?: boolean
    ): this;
    /**
     * @deprecated (since 1.16.3) - Curtain is deprecated and replaced by ShellOverlay mechanism.
     *
     * Sets a new value for property {@link #getShowCurtainPane showCurtainPane}.
     *
     * Shows / Hides the side pane on the curtain.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     */
    setShowCurtainPane(
      /**
       * New value for property `showCurtainPane`
       */
      bShowCurtainPane?: boolean
    ): this;
    /**
     * @SINCE 1.22.0
     *
     * Sets the aggregated {@link #getUser user}.
     */
    setUser(
      /**
       * The user to set
       */
      oUser: ShellHeadUserItem
    ): this;
  }

  export interface $ShellSettings extends $ShellLayoutSettings {
    /**
     * The application icon. If a custom header is set this property has no effect.
     */
    icon?: URI | PropertyBindingInfo;

    /**
     * @deprecated (since 1.16.3) - Curtain is deprecated and replaced by ShellOverlay mechanism.
     *
     * Shows / Hides the curtain.
     */
    showCurtain?: boolean | PropertyBindingInfo;

    /**
     * @deprecated (since 1.16.3) - Curtain is deprecated and replaced by ShellOverlay mechanism.
     *
     * Shows / Hides the side pane on the curtain.
     */
    showCurtainPane?: boolean | PropertyBindingInfo;

    /**
     * @SINCE 1.18
     *
     * If set to false, the search area (aggregation 'search') is hidden. If a custom header is set this property
     * has no effect.
     */
    searchVisible?: boolean | PropertyBindingInfo;

    /**
     * The content to appear in the curtain area.
     */
    curtainContent?: Control[] | Control | AggregationBindingInfo;

    /**
     * The content to appear in the pane area of the curtain.
     */
    curtainPaneContent?: Control[] | Control | AggregationBindingInfo;

    /**
     * The buttons shown in the begin (left in left-to-right case) of the Shell header. Currently max. 3 visible
     * buttons are supported. If a custom header is set this aggregation has no effect.
     */
    headItems?: ShellHeadItem[] | ShellHeadItem | AggregationBindingInfo;

    /**
     * The buttons shown in the end (right in left-to-right case) of the Shell header. Currently max. 3 visible
     * buttons are supported (when user is set only 1). If a custom header is set this aggregation has no effect.
     */
    headEndItems?: ShellHeadItem[] | ShellHeadItem | AggregationBindingInfo;

    /**
     * Experimental (This aggregation might change in future!): The search control which should be displayed
     * in the shell header. If a custom header is set this aggregation has no effect.
     */
    search?: Control;

    /**
     * @SINCE 1.22.0
     *
     * The user item which is rendered in the shell header beside the items. If a custom header is set this
     * aggregation has no effect.
     */
    user?: ShellHeadUserItem;
  }
}

declare module "sap/ui/unified/ShellHeadItem" {
  import { default as UI5Element, $ElementSettings } from "sap/ui/core/Element";

  import { ID, URI } from "sap/ui/core/library";

  import Control from "sap/ui/core/Control";

  import ElementMetadata from "sap/ui/core/ElementMetadata";

  import { PropertyBindingInfo } from "sap/ui/base/ManagedObject";

  /**
   * @SINCE 1.15.1
   * @deprecated (since 1.44.0)
   *
   * Header Action item of the Shell.
   */
  export default class ShellHeadItem extends UI5Element {
    /**
     * Constructor for a new ShellHeadItem.
     *
     * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated
     * objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description
     * of the syntax of the settings object.
     */
    constructor(
      /**
       * initial settings for the new control
       */
      mSettings?: $ShellHeadItemSettings
    );
    /**
     * Constructor for a new ShellHeadItem.
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
      mSettings?: $ShellHeadItemSettings
    );

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
     * Attaches event handler `fnFunction` to the {@link #event:press press} event of this `sap.ui.unified.ShellHeadItem`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.unified.ShellHeadItem` itself.
     *
     * Event is fired when the user presses the item.
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
       * Context object to call the event handler with. Defaults to this `sap.ui.unified.ShellHeadItem` itself
       */
      oListener?: object
    ): this;
    /**
     * Detaches event handler `fnFunction` from the {@link #event:press press} event of this `sap.ui.unified.ShellHeadItem`.
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
     * Creates a new subclass of class sap.ui.unified.ShellHeadItem with name `sClassName` and enriches it with
     * the information contained in `oClassInfo`.
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
      oClassInfo?: sap.ClassInfo<T, ShellHeadItem>,
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
     * Returns array of IDs of the elements which are the current targets of the association {@link #getAriaLabelledBy
     * ariaLabelledBy}.
     */
    getAriaLabelledBy(): ID[];
    /**
     * Gets current value of property {@link #getIcon icon}.
     *
     * The icon of the item, either defined in the sap.ui.core.IconPool or a URI to a custom image. An icon
     * must be set.
     */
    getIcon(): URI;
    /**
     * Returns a metadata object for class sap.ui.unified.ShellHeadItem.
     */
    static getMetadata(): ElementMetadata;
    /**
     * Gets current value of property {@link #getSelected selected}.
     *
     * Defines the toggle state in case the item represents a toggle button (see also property `toggleEnabled`).
     *
     * Default value is `false`.
     */
    getSelected(): boolean;
    /**
     * @deprecated (since 1.18) - Markers should not be used anymore.
     *
     * Gets current value of property {@link #getShowMarker showMarker}.
     *
     * If set to true, a theme dependent marker is shown on the item.
     *
     * Default value is `false`.
     */
    getShowMarker(): boolean;
    /**
     * @SINCE 1.22.5
     *
     * Gets current value of property {@link #getShowSeparator showSeparator}.
     *
     * If set to true, a separator is displayed after the item.
     *
     * Default value is `true`.
     */
    getShowSeparator(): boolean;
    /**
     * @deprecated (since 1.18) - Dividers are not supported anymore.
     *
     * Gets current value of property {@link #getStartsSection startsSection}.
     *
     * If set to true, a divider is displayed before the item.
     *
     * Default value is `false`.
     */
    getStartsSection(): boolean;
    /**
     * @SINCE 1.34.3
     *
     * Gets current value of property {@link #getToggleEnabled toggleEnabled}.
     *
     * If set to true, the item represents a toggle button. The `selected` property can the be used to define
     * the toggle state. Otherwise the item is displayed as action button. In this case the `selected` property
     * is ignored.
     *
     * Default value is `true`.
     */
    getToggleEnabled(): boolean;
    /**
     * @SINCE 1.18
     *
     * Gets current value of property {@link #getVisible visible}.
     *
     * Invisible items are not shown on the UI.
     *
     * Default value is `true`.
     */
    getVisible(): boolean;
    /**
     * Removes all the controls in the association named {@link #getAriaLabelledBy ariaLabelledBy}.
     */
    removeAllAriaLabelledBy(): ID[];
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
     * Sets a new value for property {@link #getIcon icon}.
     *
     * The icon of the item, either defined in the sap.ui.core.IconPool or a URI to a custom image. An icon
     * must be set.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     */
    setIcon(
      /**
       * New value for property `icon`
       */
      sIcon?: URI
    ): this;
    /**
     * Sets a new value for property {@link #getSelected selected}.
     *
     * Defines the toggle state in case the item represents a toggle button (see also property `toggleEnabled`).
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `false`.
     */
    setSelected(
      /**
       * New value for property `selected`
       */
      bSelected?: boolean
    ): this;
    /**
     * @deprecated (since 1.18) - Markers should not be used anymore.
     *
     * Sets a new value for property {@link #getShowMarker showMarker}.
     *
     * If set to true, a theme dependent marker is shown on the item.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `false`.
     */
    setShowMarker(
      /**
       * New value for property `showMarker`
       */
      bShowMarker?: boolean
    ): this;
    /**
     * @SINCE 1.22.5
     *
     * Sets a new value for property {@link #getShowSeparator showSeparator}.
     *
     * If set to true, a separator is displayed after the item.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `true`.
     */
    setShowSeparator(
      /**
       * New value for property `showSeparator`
       */
      bShowSeparator?: boolean
    ): this;
    /**
     * @deprecated (since 1.18) - Dividers are not supported anymore.
     *
     * Sets a new value for property {@link #getStartsSection startsSection}.
     *
     * If set to true, a divider is displayed before the item.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `false`.
     */
    setStartsSection(
      /**
       * New value for property `startsSection`
       */
      bStartsSection?: boolean
    ): this;
    /**
     * @SINCE 1.34.3
     *
     * Sets a new value for property {@link #getToggleEnabled toggleEnabled}.
     *
     * If set to true, the item represents a toggle button. The `selected` property can the be used to define
     * the toggle state. Otherwise the item is displayed as action button. In this case the `selected` property
     * is ignored.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `true`.
     */
    setToggleEnabled(
      /**
       * New value for property `toggleEnabled`
       */
      bToggleEnabled?: boolean
    ): this;
    /**
     * @SINCE 1.18
     *
     * Sets a new value for property {@link #getVisible visible}.
     *
     * Invisible items are not shown on the UI.
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
     * Attaches event handler `fnFunction` to the {@link #event:press press} event of this `sap.ui.unified.ShellHeadItem`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.unified.ShellHeadItem` itself.
     *
     * Event is fired when the user presses the item.
     */
    attachPress(
      /**
       * The function to be called when the event occurs
       */
      fnFunction: Function,
      /**
       * Context object to call the event handler with. Defaults to this `sap.ui.unified.ShellHeadItem` itself
       */
      oListener?: object
    ): this;
  }

  export interface $ShellHeadItemSettings extends $ElementSettings {
    /**
     * @deprecated (since 1.18) - Dividers are not supported anymore.
     *
     * If set to true, a divider is displayed before the item.
     */
    startsSection?: boolean | PropertyBindingInfo;

    /**
     * @SINCE 1.22.5
     *
     * If set to true, a separator is displayed after the item.
     */
    showSeparator?: boolean | PropertyBindingInfo;

    /**
     * Defines the toggle state in case the item represents a toggle button (see also property `toggleEnabled`).
     */
    selected?: boolean | PropertyBindingInfo;

    /**
     * @SINCE 1.34.3
     *
     * If set to true, the item represents a toggle button. The `selected` property can the be used to define
     * the toggle state. Otherwise the item is displayed as action button. In this case the `selected` property
     * is ignored.
     */
    toggleEnabled?: boolean | PropertyBindingInfo;

    /**
     * @deprecated (since 1.18) - Markers should not be used anymore.
     *
     * If set to true, a theme dependent marker is shown on the item.
     */
    showMarker?: boolean | PropertyBindingInfo;

    /**
     * The icon of the item, either defined in the sap.ui.core.IconPool or a URI to a custom image. An icon
     * must be set.
     */
    icon?: URI | PropertyBindingInfo;

    /**
     * @SINCE 1.18
     *
     * Invisible items are not shown on the UI.
     */
    visible?: boolean | PropertyBindingInfo;

    /**
     * Association to controls / ids which label this control (see WAI-ARIA attribute aria-labelledby).
     */
    ariaLabelledBy?: Array<Control | string>;

    /**
     * Event is fired when the user presses the item.
     */
    press?: Function;
  }
}

declare module "sap/ui/unified/ShellHeadUserItem" {
  import { default as UI5Element, $ElementSettings } from "sap/ui/core/Element";

  import { ID, URI } from "sap/ui/core/library";

  import Control from "sap/ui/core/Control";

  import ElementMetadata from "sap/ui/core/ElementMetadata";

  import { PropertyBindingInfo } from "sap/ui/base/ManagedObject";

  /**
   * @SINCE 1.22.0
   * @deprecated (since 1.44.0)
   *
   * User Header Action Item of the Shell.
   */
  export default class ShellHeadUserItem extends UI5Element {
    /**
     * Constructor for a new ShellHeadUserItem.
     *
     * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated
     * objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description
     * of the syntax of the settings object.
     */
    constructor(
      /**
       * initial settings for the new control
       */
      mSettings?: $ShellHeadUserItemSettings
    );
    /**
     * Constructor for a new ShellHeadUserItem.
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
      mSettings?: $ShellHeadUserItemSettings
    );

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
     * Attaches event handler `fnFunction` to the {@link #event:press press} event of this `sap.ui.unified.ShellHeadUserItem`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.unified.ShellHeadUserItem` itself.
     *
     * Event is fired when the user presses the button.
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
       * Context object to call the event handler with. Defaults to this `sap.ui.unified.ShellHeadUserItem` itself
       */
      oListener?: object
    ): this;
    /**
     * Detaches event handler `fnFunction` from the {@link #event:press press} event of this `sap.ui.unified.ShellHeadUserItem`.
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
     * Creates a new subclass of class sap.ui.unified.ShellHeadUserItem with name `sClassName` and enriches
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
      oClassInfo?: sap.ClassInfo<T, ShellHeadUserItem>,
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
     * Returns array of IDs of the elements which are the current targets of the association {@link #getAriaLabelledBy
     * ariaLabelledBy}.
     */
    getAriaLabelledBy(): ID[];
    /**
     * Gets current value of property {@link #getImage image}.
     *
     * An image of the user, normally a URI to an image but also an icon from the sap.ui.core.IconPool is possible.
     */
    getImage(): URI;
    /**
     * Returns a metadata object for class sap.ui.unified.ShellHeadUserItem.
     */
    static getMetadata(): ElementMetadata;
    /**
     * @SINCE 1.27.0
     *
     * Gets current value of property {@link #getShowPopupIndicator showPopupIndicator}.
     *
     * The user item is intended to be used for user settings. Normally these settings are done via a Menu or
     * Dialog. If this property is set to true an indicator for such a popup mechanismn is shown in the item.
     *
     * Default value is `true`.
     */
    getShowPopupIndicator(): boolean;
    /**
     * Gets current value of property {@link #getUsername username}.
     *
     * The name of the user.
     *
     * Default value is `empty string`.
     */
    getUsername(): string;
    /**
     * Removes all the controls in the association named {@link #getAriaLabelledBy ariaLabelledBy}.
     */
    removeAllAriaLabelledBy(): ID[];
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
     * Sets a new value for property {@link #getImage image}.
     *
     * An image of the user, normally a URI to an image but also an icon from the sap.ui.core.IconPool is possible.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     */
    setImage(
      /**
       * New value for property `image`
       */
      sImage?: URI
    ): this;
    /**
     * @SINCE 1.27.0
     *
     * Sets a new value for property {@link #getShowPopupIndicator showPopupIndicator}.
     *
     * The user item is intended to be used for user settings. Normally these settings are done via a Menu or
     * Dialog. If this property is set to true an indicator for such a popup mechanismn is shown in the item.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `true`.
     */
    setShowPopupIndicator(
      /**
       * New value for property `showPopupIndicator`
       */
      bShowPopupIndicator?: boolean
    ): this;
    /**
     * Sets a new value for property {@link #getUsername username}.
     *
     * The name of the user.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `empty string`.
     */
    setUsername(
      /**
       * New value for property `username`
       */
      sUsername?: string
    ): this;
    /**
     * Attaches event handler `fnFunction` to the {@link #event:press press} event of this `sap.ui.unified.ShellHeadUserItem`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.unified.ShellHeadUserItem` itself.
     *
     * Event is fired when the user presses the button.
     */
    attachPress(
      /**
       * The function to be called when the event occurs
       */
      fnFunction: Function,
      /**
       * Context object to call the event handler with. Defaults to this `sap.ui.unified.ShellHeadUserItem` itself
       */
      oListener?: object
    ): this;
  }

  export interface $ShellHeadUserItemSettings extends $ElementSettings {
    /**
     * The name of the user.
     */
    username?: string | PropertyBindingInfo;

    /**
     * @SINCE 1.27.0
     *
     * The user item is intended to be used for user settings. Normally these settings are done via a Menu or
     * Dialog. If this property is set to true an indicator for such a popup mechanismn is shown in the item.
     */
    showPopupIndicator?: boolean | PropertyBindingInfo;

    /**
     * An image of the user, normally a URI to an image but also an icon from the sap.ui.core.IconPool is possible.
     */
    image?: URI | PropertyBindingInfo;

    /**
     * Association to controls / ids which label this control (see WAI-ARIA attribute aria-labelledby).
     */
    ariaLabelledBy?: Array<Control | string>;

    /**
     * Event is fired when the user presses the button.
     */
    press?: Function;
  }
}

declare module "sap/ui/unified/ShellLayout" {
  import { default as Control, $ControlSettings } from "sap/ui/core/Control";

  import ElementMetadata from "sap/ui/core/ElementMetadata";

  import {
    PropertyBindingInfo,
    AggregationBindingInfo,
  } from "sap/ui/base/ManagedObject";

  /**
   * @SINCE 1.25.0
   * @deprecated (since 1.44.0)
   *
   * The shell layout is the base for the shell control which is meant as root control (full-screen) of an
   * application. It was build as root control of the Fiori Launchpad application and provides the basic capabilities
   * for this purpose. Do not use this control within applications which run inside the Fiori Lauchpad and
   * do not use it for other scenarios than the root control usecase.
   */
  export default class ShellLayout extends Control {
    /**
     * Constructor for a new ShellLayout.
     *
     * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated
     * objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description
     * of the syntax of the settings object.
     */
    constructor(
      /**
       * initial settings for the new control
       */
      mSettings?: $ShellLayoutSettings
    );
    /**
     * Constructor for a new ShellLayout.
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
      mSettings?: $ShellLayoutSettings
    );

    /**
     * Adds some content to the aggregation {@link #getContent content}.
     */
    addContent(
      /**
       * The content to add; if empty, nothing is inserted
       */
      oContent: Control
    ): this;
    /**
     * Adds some paneContent to the aggregation {@link #getPaneContent paneContent}.
     */
    addPaneContent(
      /**
       * The paneContent to add; if empty, nothing is inserted
       */
      oPaneContent: Control
    ): this;
    /**
     * Destroys all the content in the aggregation {@link #getContent content}.
     */
    destroyContent(): this;
    /**
     * Destroys the header in the aggregation {@link #getHeader header}.
     */
    destroyHeader(): this;
    /**
     * Destroys all the paneContent in the aggregation {@link #getPaneContent paneContent}.
     */
    destroyPaneContent(): this;
    /**
     * Creates a new subclass of class sap.ui.unified.ShellLayout with name `sClassName` and enriches it with
     * the information contained in `oClassInfo`.
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
      oClassInfo?: sap.ClassInfo<T, ShellLayout>,
      /**
       * Constructor function for the metadata object; if not given, it defaults to the metadata implementation
       * used by this class
       */
      FNMetaImpl?: Function
    ): Function;
    /**
     * Gets content of aggregation {@link #getContent content}.
     *
     * The content to appear in the main canvas.
     */
    getContent(): Control[];
    /**
     * Gets content of aggregation {@link #getHeader header}.
     *
     * The control to appear in the header area.
     */
    getHeader(): Control;
    /**
     * Gets current value of property {@link #getHeaderHiding headerHiding}.
     *
     * Whether the header can be hidden (manually or automatically). This feature is only available when touch
     * events are supported.
     *
     * Default value is `false`.
     */
    getHeaderHiding(): boolean;
    /**
     * Gets current value of property {@link #getHeaderVisible headerVisible}.
     *
     * If set to false, no header (and no items, search, ...) is shown.
     *
     * Default value is `true`.
     */
    getHeaderVisible(): boolean;
    /**
     * Returns a metadata object for class sap.ui.unified.ShellLayout.
     */
    static getMetadata(): ElementMetadata;
    /**
     * Gets content of aggregation {@link #getPaneContent paneContent}.
     *
     * The content to appear in the pane area.
     */
    getPaneContent(): Control[];
    /**
     * Gets current value of property {@link #getShowPane showPane}.
     *
     * Shows / Hides the side pane.
     *
     * Default value is `false`.
     */
    getShowPane(): boolean;
    /**
     * Checks for the provided `sap.ui.core.Control` in the aggregation {@link #getContent content}. and returns
     * its index if found or -1 otherwise.
     */
    indexOfContent(
      /**
       * The content whose index is looked for
       */
      oContent: Control
    ): int;
    /**
     * Checks for the provided `sap.ui.core.Control` in the aggregation {@link #getPaneContent paneContent}.
     * and returns its index if found or -1 otherwise.
     */
    indexOfPaneContent(
      /**
       * The paneContent whose index is looked for
       */
      oPaneContent: Control
    ): int;
    /**
     * Inserts a content into the aggregation {@link #getContent content}.
     */
    insertContent(
      /**
       * The content to insert; if empty, nothing is inserted
       */
      oContent: Control,
      /**
       * The `0`-based index the content should be inserted at; for a negative value of `iIndex`, the content
       * is inserted at position 0; for a value greater than the current size of the aggregation, the content
       * is inserted at the last position
       */
      iIndex: int
    ): this;
    /**
     * Inserts a paneContent into the aggregation {@link #getPaneContent paneContent}.
     */
    insertPaneContent(
      /**
       * The paneContent to insert; if empty, nothing is inserted
       */
      oPaneContent: Control,
      /**
       * The `0`-based index the paneContent should be inserted at; for a negative value of `iIndex`, the paneContent
       * is inserted at position 0; for a value greater than the current size of the aggregation, the paneContent
       * is inserted at the last position
       */
      iIndex: int
    ): this;
    /**
     * Removes all the controls from the aggregation {@link #getContent content}.
     *
     * Additionally, it unregisters them from the hosting UIArea.
     */
    removeAllContent(): Control[];
    /**
     * Removes all the controls from the aggregation {@link #getPaneContent paneContent}.
     *
     * Additionally, it unregisters them from the hosting UIArea.
     */
    removeAllPaneContent(): Control[];
    /**
     * Removes a content from the aggregation {@link #getContent content}.
     */
    removeContent(
      /**
       * The content to remove or its index or id
       */
      vContent: int | string | Control
    ): Control;
    /**
     * Removes a paneContent from the aggregation {@link #getPaneContent paneContent}.
     */
    removePaneContent(
      /**
       * The paneContent to remove or its index or id
       */
      vPaneContent: int | string | Control
    ): Control;
    /**
     * Sets the aggregated {@link #getHeader header}.
     */
    setHeader(
      /**
       * The header to set
       */
      oHeader: Control
    ): this;
    /**
     * Sets a new value for property {@link #getHeaderHiding headerHiding}.
     *
     * Whether the header can be hidden (manually or automatically). This feature is only available when touch
     * events are supported.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `false`.
     */
    setHeaderHiding(
      /**
       * New value for property `headerHiding`
       */
      bHeaderHiding?: boolean
    ): this;
    /**
     * Sets a new value for property {@link #getHeaderVisible headerVisible}.
     *
     * If set to false, no header (and no items, search, ...) is shown.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `true`.
     */
    setHeaderVisible(
      /**
       * New value for property `headerVisible`
       */
      bHeaderVisible?: boolean
    ): this;
    /**
     * Sets a new value for property {@link #getShowPane showPane}.
     *
     * Shows / Hides the side pane.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `false`.
     */
    setShowPane(
      /**
       * New value for property `showPane`
       */
      bShowPane?: boolean
    ): this;
  }

  export interface $ShellLayoutSettings extends $ControlSettings {
    /**
     * Shows / Hides the side pane.
     */
    showPane?: boolean | PropertyBindingInfo;

    /**
     * Whether the header can be hidden (manually or automatically). This feature is only available when touch
     * events are supported.
     */
    headerHiding?: boolean | PropertyBindingInfo;

    /**
     * If set to false, no header (and no items, search, ...) is shown.
     */
    headerVisible?: boolean | PropertyBindingInfo;

    /**
     * The content to appear in the main canvas.
     */
    content?: Control[] | Control | AggregationBindingInfo;

    /**
     * The content to appear in the pane area.
     */
    paneContent?: Control[] | Control | AggregationBindingInfo;

    /**
     * The control to appear in the header area.
     */
    header?: Control;
  }
}

declare module "sap/ui/unified/ShellOverlay" {
  import { default as Control, $ControlSettings } from "sap/ui/core/Control";

  import { ID } from "sap/ui/core/library";

  import ElementMetadata from "sap/ui/core/ElementMetadata";

  import ShellLayout from "sap/ui/unified/ShellLayout";

  import { AggregationBindingInfo } from "sap/ui/base/ManagedObject";

  /**
   * @SINCE 1.16.3
   * @deprecated (since 1.44.0)
   *
   * ShellOverlay to be opened in front of an sap.ui.unified.Shell
   */
  export default class ShellOverlay extends Control {
    /**
     * Constructor for a new ShellOverlay.
     *
     * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated
     * objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description
     * of the syntax of the settings object.
     */
    constructor(
      /**
       * initial settings for the new control
       */
      mSettings?: $ShellOverlaySettings
    );
    /**
     * Constructor for a new ShellOverlay.
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
      mSettings?: $ShellOverlaySettings
    );

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
     * Adds some content to the aggregation {@link #getContent content}.
     */
    addContent(
      /**
       * The content to add; if empty, nothing is inserted
       */
      oContent: Control
    ): this;
    /**
     * Attaches event handler `fnFunction` to the {@link #event:closed closed} event of this `sap.ui.unified.ShellOverlay`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.unified.ShellOverlay` itself.
     *
     * Fired when the overlay was closed.
     */
    attachClosed(
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
       * Context object to call the event handler with. Defaults to this `sap.ui.unified.ShellOverlay` itself
       */
      oListener?: object
    ): this;
    /**
     * Closes the ShellOverlay.
     */
    close(): void;
    /**
     * Destroys all the content in the aggregation {@link #getContent content}.
     */
    destroyContent(): this;
    /**
     * Destroys the search in the aggregation {@link #getSearch search}.
     */
    destroySearch(): this;
    /**
     * Detaches event handler `fnFunction` from the {@link #event:closed closed} event of this `sap.ui.unified.ShellOverlay`.
     *
     * The passed function and listener object must match the ones used for event registration.
     */
    detachClosed(
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
     * Creates a new subclass of class sap.ui.unified.ShellOverlay with name `sClassName` and enriches it with
     * the information contained in `oClassInfo`.
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
      oClassInfo?: sap.ClassInfo<T, ShellOverlay>,
      /**
       * Constructor function for the metadata object; if not given, it defaults to the metadata implementation
       * used by this class
       */
      FNMetaImpl?: Function
    ): Function;
    /**
     * Fires event {@link #event:closed closed} to attached listeners.
     */
    fireClosed(
      /**
       * Parameters to pass along with the event
       */
      mParameters?: object
    ): this;
    /**
     * Returns array of IDs of the elements which are the current targets of the association {@link #getAriaLabelledBy
     * ariaLabelledBy}.
     */
    getAriaLabelledBy(): ID[];
    /**
     * Gets content of aggregation {@link #getContent content}.
     *
     * The content to appear in the overlay.
     */
    getContent(): Control[];
    /**
     * Returns a metadata object for class sap.ui.unified.ShellOverlay.
     */
    static getMetadata(): ElementMetadata;
    /**
     * Gets content of aggregation {@link #getSearch search}.
     *
     * Experimental (This aggregation might change in future!): The search control which should be displayed
     * in the overlay header.
     */
    getSearch(): Control;
    /**
     * ID of the element which is the current target of the association {@link #getShell shell}, or `null`.
     */
    getShell(): ID;
    /**
     * Checks for the provided `sap.ui.core.Control` in the aggregation {@link #getContent content}. and returns
     * its index if found or -1 otherwise.
     */
    indexOfContent(
      /**
       * The content whose index is looked for
       */
      oContent: Control
    ): int;
    /**
     * Inserts a content into the aggregation {@link #getContent content}.
     */
    insertContent(
      /**
       * The content to insert; if empty, nothing is inserted
       */
      oContent: Control,
      /**
       * The `0`-based index the content should be inserted at; for a negative value of `iIndex`, the content
       * is inserted at position 0; for a value greater than the current size of the aggregation, the content
       * is inserted at the last position
       */
      iIndex: int
    ): this;
    /**
     * Opens the ShellOverlay.
     */
    open(): void;
    /**
     * Removes all the controls in the association named {@link #getAriaLabelledBy ariaLabelledBy}.
     */
    removeAllAriaLabelledBy(): ID[];
    /**
     * Removes all the controls from the aggregation {@link #getContent content}.
     *
     * Additionally, it unregisters them from the hosting UIArea.
     */
    removeAllContent(): Control[];
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
     * Removes a content from the aggregation {@link #getContent content}.
     */
    removeContent(
      /**
       * The content to remove or its index or id
       */
      vContent: int | string | Control
    ): Control;
    /**
     * Sets the aggregated {@link #getSearch search}.
     */
    setSearch(
      /**
       * The search to set
       */
      oSearch: Control
    ): this;
    /**
     * Sets the associated {@link #getShell shell}.
     */
    setShell(
      /**
       * ID of an element which becomes the new target of this shell association; alternatively, an element instance
       * may be given
       */
      oShell: ID | ShellLayout
    ): this;
    /**
     * Attaches event handler `fnFunction` to the {@link #event:closed closed} event of this `sap.ui.unified.ShellOverlay`.
     *
     * When called, the context of the event handler (its `this`) will be bound to `oListener` if specified,
     * otherwise it will be bound to this `sap.ui.unified.ShellOverlay` itself.
     *
     * Fired when the overlay was closed.
     */
    attachClosed(
      /**
       * The function to be called when the event occurs
       */
      fnFunction: Function,
      /**
       * Context object to call the event handler with. Defaults to this `sap.ui.unified.ShellOverlay` itself
       */
      oListener?: object
    ): this;
  }

  export interface $ShellOverlaySettings extends $ControlSettings {
    /**
     * The content to appear in the overlay.
     */
    content?: Control[] | Control | AggregationBindingInfo;

    /**
     * Experimental (This aggregation might change in future!): The search control which should be displayed
     * in the overlay header.
     */
    search?: Control;

    /**
     * Reference to the sap.ui.unified.Shell or sap.ui.unified.ShellLayout control.
     */
    shell?: ShellLayout | string;

    /**
     * Association to controls / ids which label this control (see WAI-ARIA attribute aria-labelledby).
     */
    ariaLabelledBy?: Array<Control | string>;

    /**
     * Fired when the overlay was closed.
     */
    closed?: Function;
  }
}

declare module "sap/ui/unified/SplitContainer" {
  import { default as Control, $ControlSettings } from "sap/ui/core/Control";

  import ElementMetadata from "sap/ui/core/ElementMetadata";

  import { Orientation, CSSSize } from "sap/ui/core/library";

  import {
    PropertyBindingInfo,
    AggregationBindingInfo,
  } from "sap/ui/base/ManagedObject";

  /**
   * @SINCE 1.15.0
   * @deprecated (since 1.44.0)
   * @EXPERIMENTAL (since 1.15.0)
   *
   * Provides a main content and a secondary content area
   */
  export default class SplitContainer extends Control {
    /**
     * Constructor for a new SplitContainer.
     *
     * Accepts an object literal `mSettings` that defines initial property values, aggregated and associated
     * objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description
     * of the syntax of the settings object.
     */
    constructor(
      /**
       * initial settings for the new control
       */
      mSettings?: $SplitContainerSettings
    );
    /**
     * Constructor for a new SplitContainer.
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
      mSettings?: $SplitContainerSettings
    );

    /**
     * Adds some content to the aggregation {@link #getContent content}.
     */
    addContent(
      /**
       * The content to add; if empty, nothing is inserted
       */
      oContent: Control
    ): this;
    /**
     * Adds some secondaryContent to the aggregation {@link #getSecondaryContent secondaryContent}.
     */
    addSecondaryContent(
      /**
       * The secondaryContent to add; if empty, nothing is inserted
       */
      oSecondaryContent: Control
    ): this;
    /**
     * Destroys all the content in the aggregation {@link #getContent content}.
     */
    destroyContent(): this;
    /**
     * Destroys all the secondaryContent in the aggregation {@link #getSecondaryContent secondaryContent}.
     */
    destroySecondaryContent(): this;
    /**
     * Creates a new subclass of class sap.ui.unified.SplitContainer with name `sClassName` and enriches it
     * with the information contained in `oClassInfo`.
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
      oClassInfo?: sap.ClassInfo<T, SplitContainer>,
      /**
       * Constructor function for the metadata object; if not given, it defaults to the metadata implementation
       * used by this class
       */
      FNMetaImpl?: Function
    ): Function;
    /**
     * Gets content of aggregation {@link #getContent content}.
     *
     * The content to appear in the main area.
     */
    getContent(): Control[];
    /**
     * Returns a metadata object for class sap.ui.unified.SplitContainer.
     */
    static getMetadata(): ElementMetadata;
    /**
     * @SINCE 1.22.0
     *
     * Gets current value of property {@link #getOrientation orientation}.
     *
     * Whether to show the secondary content on the left ("Horizontal", default) or on the top ("Vertical").
     *
     * Default value is `Horizontal`.
     */
    getOrientation(): Orientation | keyof typeof Orientation;
    /**
     * Gets content of aggregation {@link #getSecondaryContent secondaryContent}.
     *
     * The content to appear in the secondary area.
     */
    getSecondaryContent(): Control[];
    /**
     * Gets current value of property {@link #getSecondaryContentSize secondaryContentSize}.
     *
     * The width if the secondary content. The height is always 100%.
     *
     * Default value is `'250px'`.
     */
    getSecondaryContentSize(): CSSSize;
    /**
     * @deprecated (since 1.22) - Only available for backwards compatibility.
     *
     * Gets current value of property {@link #getSecondaryContentWidth secondaryContentWidth}.
     *
     * Do not use. Use secondaryContentSize instead.
     *
     * Default value is `'250px'`.
     */
    getSecondaryContentWidth(): CSSSize;
    /**
     * Gets current value of property {@link #getShowSecondaryContent showSecondaryContent}.
     *
     * Shows / Hides the secondary area.
     */
    getShowSecondaryContent(): boolean;
    /**
     * Checks for the provided `sap.ui.core.Control` in the aggregation {@link #getContent content}. and returns
     * its index if found or -1 otherwise.
     */
    indexOfContent(
      /**
       * The content whose index is looked for
       */
      oContent: Control
    ): int;
    /**
     * Checks for the provided `sap.ui.core.Control` in the aggregation {@link #getSecondaryContent secondaryContent}.
     * and returns its index if found or -1 otherwise.
     */
    indexOfSecondaryContent(
      /**
       * The secondaryContent whose index is looked for
       */
      oSecondaryContent: Control
    ): int;
    /**
     * Inserts a content into the aggregation {@link #getContent content}.
     */
    insertContent(
      /**
       * The content to insert; if empty, nothing is inserted
       */
      oContent: Control,
      /**
       * The `0`-based index the content should be inserted at; for a negative value of `iIndex`, the content
       * is inserted at position 0; for a value greater than the current size of the aggregation, the content
       * is inserted at the last position
       */
      iIndex: int
    ): this;
    /**
     * Inserts a secondaryContent into the aggregation {@link #getSecondaryContent secondaryContent}.
     */
    insertSecondaryContent(
      /**
       * The secondaryContent to insert; if empty, nothing is inserted
       */
      oSecondaryContent: Control,
      /**
       * The `0`-based index the secondaryContent should be inserted at; for a negative value of `iIndex`, the
       * secondaryContent is inserted at position 0; for a value greater than the current size of the aggregation,
       * the secondaryContent is inserted at the last position
       */
      iIndex: int
    ): this;
    /**
     * Removes all the controls from the aggregation {@link #getContent content}.
     *
     * Additionally, it unregisters them from the hosting UIArea.
     */
    removeAllContent(): Control[];
    /**
     * Removes all the controls from the aggregation {@link #getSecondaryContent secondaryContent}.
     *
     * Additionally, it unregisters them from the hosting UIArea.
     */
    removeAllSecondaryContent(): Control[];
    /**
     * Removes a content from the aggregation {@link #getContent content}.
     */
    removeContent(
      /**
       * The content to remove or its index or id
       */
      vContent: int | string | Control
    ): Control;
    /**
     * Removes a secondaryContent from the aggregation {@link #getSecondaryContent secondaryContent}.
     */
    removeSecondaryContent(
      /**
       * The secondaryContent to remove or its index or id
       */
      vSecondaryContent: int | string | Control
    ): Control;
    /**
     * @SINCE 1.22.0
     *
     * Sets a new value for property {@link #getOrientation orientation}.
     *
     * Whether to show the secondary content on the left ("Horizontal", default) or on the top ("Vertical").
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `Horizontal`.
     */
    setOrientation(
      /**
       * New value for property `orientation`
       */
      sOrientation?: Orientation | keyof typeof Orientation
    ): this;
    /**
     * Sets a new value for property {@link #getSecondaryContentSize secondaryContentSize}.
     *
     * The width if the secondary content. The height is always 100%.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `'250px'`.
     */
    setSecondaryContentSize(
      /**
       * New value for property `secondaryContentSize`
       */
      sSecondaryContentSize?: CSSSize
    ): this;
    /**
     * @deprecated (since 1.22) - Only available for backwards compatibility.
     *
     * Sets a new value for property {@link #getSecondaryContentWidth secondaryContentWidth}.
     *
     * Do not use. Use secondaryContentSize instead.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     *
     * Default value is `'250px'`.
     */
    setSecondaryContentWidth(
      /**
       * New value for property `secondaryContentWidth`
       */
      sSecondaryContentWidth?: CSSSize
    ): this;
    /**
     * Sets a new value for property {@link #getShowSecondaryContent showSecondaryContent}.
     *
     * Shows / Hides the secondary area.
     *
     * When called with a value of `null` or `undefined`, the default value of the property will be restored.
     */
    setShowSecondaryContent(
      /**
       * New value for property `showSecondaryContent`
       */
      bShowSecondaryContent?: boolean
    ): this;
  }

  export interface $SplitContainerSettings extends $ControlSettings {
    /**
     * Shows / Hides the secondary area.
     */
    showSecondaryContent?: boolean | PropertyBindingInfo;

    /**
     * The width if the secondary content. The height is always 100%.
     */
    secondaryContentSize?: CSSSize | PropertyBindingInfo;

    /**
     * @deprecated (since 1.22) - Only available for backwards compatibility.
     *
     * Do not use. Use secondaryContentSize instead.
     */
    secondaryContentWidth?: CSSSize | PropertyBindingInfo;

    /**
     * @SINCE 1.22.0
     *
     * Whether to show the secondary content on the left ("Horizontal", default) or on the top ("Vertical").
     */
    orientation?:
      | (Orientation | keyof typeof Orientation)
      | PropertyBindingInfo;

    /**
     * The content to appear in the main area.
     */
    content?: Control[] | Control | AggregationBindingInfo;

    /**
     * The content to appear in the secondary area.
     */
    secondaryContent?: Control[] | Control | AggregationBindingInfo;
  }
}

declare namespace sap {
  interface IUI5DefineDependencyNames {
    "sap/ui/unified/Calendar": undefined;

    "sap/ui/unified/calendar/CalendarUtils": undefined;

    "sap/ui/unified/calendar/DatesRow": undefined;

    "sap/ui/unified/calendar/Header": undefined;

    "sap/ui/unified/calendar/Month": undefined;

    "sap/ui/unified/calendar/MonthPicker": undefined;

    "sap/ui/unified/calendar/MonthsRow": undefined;

    "sap/ui/unified/calendar/TimesRow": undefined;

    "sap/ui/unified/calendar/YearPicker": undefined;

    "sap/ui/unified/CalendarAppointment": undefined;

    "sap/ui/unified/CalendarDateInterval": undefined;

    "sap/ui/unified/CalendarLegend": undefined;

    "sap/ui/unified/CalendarLegendItem": undefined;

    "sap/ui/unified/CalendarMonthInterval": undefined;

    "sap/ui/unified/CalendarRow": undefined;

    "sap/ui/unified/CalendarTimeInterval": undefined;

    "sap/ui/unified/ColorPicker": undefined;

    "sap/ui/unified/ColorPickerDisplayMode": undefined;

    "sap/ui/unified/ColorPickerPopover": undefined;

    "sap/ui/unified/ContentSwitcher": undefined;

    "sap/ui/unified/Currency": undefined;

    "sap/ui/unified/DateRange": undefined;

    "sap/ui/unified/DateTypeRange": undefined;

    "sap/ui/unified/FileUploader": undefined;

    "sap/ui/unified/FileUploaderParameter": undefined;

    "sap/ui/unified/FileUploaderXHRSettings": undefined;

    "sap/ui/unified/library": undefined;

    "sap/ui/unified/Menu": undefined;

    "sap/ui/unified/MenuItem": undefined;

    "sap/ui/unified/MenuItemBase": undefined;

    "sap/ui/unified/MenuTextFieldItem": undefined;

    "sap/ui/unified/Shell": undefined;

    "sap/ui/unified/ShellHeadItem": undefined;

    "sap/ui/unified/ShellHeadUserItem": undefined;

    "sap/ui/unified/ShellLayout": undefined;

    "sap/ui/unified/ShellOverlay": undefined;

    "sap/ui/unified/SplitContainer": undefined;
  }
}
