// Type definitions for vis.js 4.21
// Project: https://github.com/almende/vis
// Definitions by: Michaël Bitard <https://github.com/MichaelBitard>
//                 MacLeod Broad <https://github.com/macleodbroad-wf>
//                 Adrian Caballero <https://github.com/adripanico>
//                 Severin <https://github.com/seveves>
//                 kaktus40 <https://github.com/kaktus40>
//                 Matthieu Maitre <https://github.com/mmaitre314>
//                 Adam Lewis <https://github.com/supercargo>
//                 Alex Soh <https://github.com/takato1314>
//                 Oleksii Kachura <https://github.com/alex-kachura>
//                 dcop <https://github.com/dcop>
//                 Avraham Essoudry <https://github.com/avrahamcool>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import { MomentInput, MomentFormatSpecification, Moment } from 'moment';
export type MomentConstructor1 =
  (inp?: MomentInput, format?: MomentFormatSpecification, strict?: boolean) => Moment;
export type MomentConstructor2 =
  (inp?: MomentInput, format?: MomentFormatSpecification, language?: string, strict?: boolean) => Moment;

export type MomentConstructor = MomentConstructor1 | MomentConstructor2;

export type IdType = string | number;
export type SubgroupType = IdType;
export type DateType = Date | number | string;
export type HeightWidthType = IdType;
export type TimelineItemType = 'box' | 'point' | 'range' | 'background';
export type TimelineAlignType = 'auto' | 'center' | 'left' | 'right';
export type TimelineTimeAxisScaleType = 'millisecond' | 'second' | 'minute' | 'hour' |
  'weekday' | 'day' | 'month' | 'year';
export type TimelineEventPropertiesResultWhatType = 'item' | 'background' | 'axis' |
  'group-label' | 'custom-time' | 'current-time';
export type TimelineEvents =
  'currentTimeTick' |
  'click' |
  'contextmenu' |
  'doubleClick' |
  'drop' |
  'mouseOver' |
  'mouseDown' |
  'mouseUp' |
  'mouseMove' |
  'groupDragged' |
  'changed' |
  'rangechange' |
  'rangechanged' |
  'select' |
  'itemover' |
  'itemout' |
  'timechange' |
  'timechanged';
export type Graph2dStyleType = 'line' | 'bar' | 'points';
export type Graph2dBarChartAlign = 'left' | 'center' | 'right';
export type Graph2dDrawPointsStyle = 'square' | 'circle';
export type LegendPositionType = 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left';
export type ParametrizationInterpolationType = 'centripetal' | 'chordal' | 'uniform' | 'disabled';
export type TopBottomEnumType = 'top' | 'bottom';
export type RightLeftEnumType = 'right' | 'left';

export interface LegendPositionOptions {
  visible?: boolean;
  position?: LegendPositionType;
}

export interface LegendOptions {
  enabled?: boolean;
  icons?: boolean;
  iconSize?: number;
  iconSpacing?: number;
  left?: LegendPositionOptions;
  right?: LegendPositionOptions;
}

export interface DataItem {
  className?: string;
  content: string;
  end?: DateType;
  group?: any;
  id?: IdType;
  start: DateType;
  style?: string;
  subgroup?: SubgroupType;
  title?: string;
  type?: string;
  editable?: boolean;
}

export interface PointItem extends DataItem {
  x: string;
  y: number;
}

export interface SubGroupStackOptions {
  [name: string]: boolean;
}

export interface DataGroup {
  className?: string;
  content: string;
  id: IdType;
  options?: DataGroupOptions;
  style?: string;
  subgroupOrder?: string | (() => void);
  title?: string;
  nestedGroups?: number[];
  subgroupStack?: SubGroupStackOptions | boolean;
}

export interface DataGroupOptions {
  drawPoints?: Graph2dDrawPointsOption | (() => void); // TODO
  excludeFromLegend?: boolean;
  interpolation?: boolean | InterpolationOptions;
  shaded?: Graph2dShadedOption;
  style?: string;
  yAxisOrientation?: RightLeftEnumType;
}

export interface InterpolationOptions {
  parametrization: ParametrizationInterpolationType;
}

export interface TimelineEditableOption {
  add?: boolean;
  remove?: boolean;
  updateGroup?: boolean;
  updateTime?: boolean;
  overrideItems?: boolean;
}

export type TimelineFormatLabelsFunction = (date: Date, scale: string, step: number) => string;

export interface TimelineFormatLabelsOption {
  millisecond?: string;
  second?: string;
  minute?: string;
  hour?: string;
  weekday?: string;
  day?: string;
  week?: string;
  month?: string;
  year?: string;
}

export interface TimelineFormatOption {
  minorLabels?: TimelineFormatLabelsOption | TimelineFormatLabelsFunction;
  majorLabels?: TimelineFormatLabelsOption | TimelineFormatLabelsFunction;
}

export interface TimelineGroupEditableOption {
  add?: boolean;
  remove?: boolean;
  order?: boolean;
}

export interface TimelineHiddenDateOption {
  start: DateType;
  end: DateType;
  repeat?: 'daily' | 'weekly' | 'monthly' | 'yearly';
}

export interface TimelineItemsAlwaysDraggableOption {
  item?: boolean;
  range?: boolean;
}

export interface TimelineMarginItem {
  horizontal?: number;
  vertical?: number;
}

export type TimelineMarginItemType = number | TimelineMarginItem;

export interface TimelineMarginOption {
  axis?: number;
  item?: TimelineMarginItemType;
}

export interface TimelineOrientationOption {
  axis?: string;
  item?: string;
}

export interface TimelineTimeAxisOption {
  scale?: TimelineTimeAxisScaleType;
  step?: number;
}

export interface TimelineRollingModeOption {
  follow?: boolean;
  offset?: number;
}

export interface TimelineTooltipOption {
  followMouse: boolean;
  overflowMethod: 'cap' | 'flip';
}

export type TimelineOptionsConfigureFunction = (option: string, path: string[]) => boolean;
export type TimelineOptionsConfigureType = boolean | TimelineOptionsConfigureFunction;
export type TimelineOptionsDataAttributesType = boolean | string | string[];
export type TimelineOptionsEditableType = boolean | TimelineEditableOption;
export type TimelineOptionsItemCallbackFunction = (item: TimelineItem, callback: (item: TimelineItem | null) => void) => void;
export type TimelineOptionsGroupCallbackFunction = (group: TimelineGroup, callback: (group: TimelineGroup | null) => void) => void;
export type TimelineOptionsGroupEditableType = boolean | TimelineGroupEditableOption;
export type TimelineOptionsGroupOrderType = string | TimelineOptionsComparisonFunction;
export type TimelineOptionsGroupOrderSwapFunction = (fromGroup: any, toGroup: any, groups: DataSet<DataGroup>) => void;
export type TimelineOptionsHiddenDatesType = TimelineHiddenDateOption | TimelineHiddenDateOption[];
export type TimelineOptionsItemsAlwaysDraggableType = boolean | TimelineItemsAlwaysDraggableOption;
export type TimelineOptionsMarginType = number | TimelineMarginOption;
export type TimelineOptionsOrientationType = string | TimelineOrientationOption;
export type TimelineOptionsSnapFunction = (date: Date, scale: string, step: number) => Date | number;
export type TimelineOptionsTemplateFunction = (item?: any, element?: any, data?: any) => string;
export type TimelineOptionsComparisonFunction = (a: any, b: any) => number;

export interface TimelineOptions {
  align?: TimelineAlignType;
  autoResize?: boolean;
  clickToUse?: boolean;
  configure?: TimelineOptionsConfigureType;
  dataAttributes?: TimelineOptionsDataAttributesType;
  editable?: TimelineOptionsEditableType;
  end?: DateType;
  format?: TimelineFormatOption;
  groupEditable?: TimelineOptionsGroupEditableType;
  groupOrder?: TimelineOptionsGroupOrderType;
  groupOrderSwap?: TimelineOptionsGroupOrderSwapFunction;
  groupTemplate?: TimelineOptionsTemplateFunction;
  height?: HeightWidthType;
  hiddenDates?: TimelineOptionsHiddenDatesType;
  horizontalScroll?: boolean;
  itemsAlwaysDraggable?: TimelineOptionsItemsAlwaysDraggableType;
  locale?: string;
  locales?: any; // TODO
  moment?: MomentConstructor;
  margin?: TimelineOptionsMarginType;
  max?: DateType;
  maxHeight?: HeightWidthType;
  maxMinorChars?: number;
  min?: DateType;
  minHeight?: HeightWidthType;
  moveable?: boolean;
  multiselect?: boolean;
  multiselectPerGroup?: boolean;
  onAdd?: TimelineOptionsItemCallbackFunction;
  onAddGroup?: TimelineOptionsGroupCallbackFunction;
  onUpdate?: TimelineOptionsItemCallbackFunction;
  onMove?: TimelineOptionsItemCallbackFunction;
  onMoveGroup?: TimelineOptionsGroupCallbackFunction;
  onMoving?: TimelineOptionsItemCallbackFunction;
  onRemove?: TimelineOptionsItemCallbackFunction;
  onRemoveGroup?: TimelineOptionsGroupCallbackFunction;
  order?: TimelineOptionsComparisonFunction;
  orientation?: TimelineOptionsOrientationType;
  rollingMode?: TimelineRollingModeOption;
  rtl?: boolean;
  selectable?: boolean;
  showCurrentTime?: boolean;
  showMajorLabels?: boolean;
  showMinorLabels?: boolean;
  showTooltips?: boolean;
  stack?: boolean;
  stackSubgroups?: boolean;
  snap?: TimelineOptionsSnapFunction;
  start?: DateType;
  template?: TimelineOptionsTemplateFunction;
  visibleFrameTemplate?: TimelineOptionsTemplateFunction;
  throttleRedraw?: number;
  timeAxis?: TimelineTimeAxisOption;
  type?: string;
  tooltip?: TimelineTooltipOption;
  tooltipOnItemUpdateTime?: boolean | { template(item: any): any };
  verticalScroll?: boolean;
  width?: HeightWidthType;
  zoomable?: boolean;
  zoomKey?: string;
  zoomMax?: number;
  zoomMin?: number;
}

/**
 * If true (default) or an Object, the range is animated smoothly to the new window.
 * An object can be provided to specify duration and easing function.
 * Default duration is 500 ms, and default easing function is 'easeInOutQuad'.
 */
export type TimelineAnimationType = boolean | AnimationOptions;

export interface TimelineAnimationOptions {
  animation?: TimelineAnimationType;
}

export interface TimelineEventPropertiesResult {
  /**
   *  The id of the clicked group
   */
  group?: number | null;

  /**
   * The id of the clicked item.
   */
  item?: IdType | null;

  /**
   * Absolute horizontal position of the click event.
   */
  pageX: number;

  /**
   * Absolute vertical position of the click event.
   */
  pageY: number;

  /**
   * Relative horizontal position of the click event.
   */
  x: number;

  /**
   * Relative vertical position of the click event.
   */
  y: number;

  /**
   *  Date of the clicked event.
   */
  time: Date;

  /**
   * Date of the clicked event, snapped to a nice value.
   */
  snappedTime: Date;

  /**
   * Name of the clicked thing.
   */
  what?: TimelineEventPropertiesResultWhatType;

  /**
   * The original click event.
   */
  event: Event;
}

/**
 * Options that can be passed to a DataSet.
 */
export interface DataSetOptions extends DataSetQueueOptions {
  /**
   * The name of the field containing the id of the items.
   * When data is fetched from a server which uses some specific field to identify items,
   * this field name can be specified in the DataSet using the option fieldId.
   * For example CouchDB uses the field "_id" to identify documents.
   */
  fieldId?: string;

  /**
   * An object containing field names as key, and data types as value.
   * By default, the type of the properties of items are left unchanged.
   * Item properties can be normalized by specifying a field type.
   * This is useful for example to automatically convert stringified dates coming
   * from a server into JavaScript Date objects.
   * The available data types are listed in section Data Types.
   */
  type?: any;
}

export interface DataSetQueueOptions {
  /**
   * Queue data changes ('add', 'update', 'remove') and flush them at once.
   * The queue can be flushed manually by calling DataSet.flush(),
   * or can be flushed after a configured delay or maximum number of entries.
   * When queue is true, a queue is created with default options.
   * Options can be specified by providing an object:
   * delay: number - The queue will be flushed automatically after an inactivity of this delay in milliseconds. Default value is null.
   * Default value is null.
   * max: number - When the queue exceeds the given maximum number of entries, the queue is flushed automatically. Default value is Infinity.
   * Default value is Infinity.
   */
  queue?: any | boolean;
}

export class DataSet<T extends DataItem | DataGroup | Node | Edge> {
  /**
   * Creates an instance of DataSet.
   *
   * @param [options] DataSet options.
   */
  constructor(options: DataSetOptions);

  /**
   * Creates an instance of DataSet.
   *
   * @param [data] An Array with items.
   * @param [options] DataSet options.
   */
  constructor(data?: T[], options?: DataSetOptions);

  /**
   * The number of items in the DataSet.
   */
  length: number;

  /**
   * Add one or multiple items to the DataSet.
   * Adding an item will fail when there already is an item with the same id.
   *
   * @param data data can be a single item or an array with items.
   * @param [senderId] Optional sender id.
   * @returns The function returns an array with the ids of the added items.
   */
  add(data: T | T[], senderId?: IdType): IdType[];

  /**
   * Clear all data from the DataSet.
   *
   * @param [senderId] Optional sender id.
   * @returns The function returns an array with the ids of the removed items.
   */
  clear(senderId?: IdType): IdType[];

  /**
   * Find all distinct values of a specified field.
   * If data items do not contain the specified field are ignored.
   *
   * @param field The search term.
   * @returns Returns an unordered array containing all distinct values.
   */
  distinct(field: string): any[];

  /**
   * Flush queued changes.
   * Only available when the DataSet is configured with the option queue.
   */
  flush(): void;

  /**
   * Execute a callback function for every item in the dataset.
   *
   * @param callback The item callback.
   * @param [options] Optional options
   */
  forEach(callback: (item: T, id: IdType) => void, options?: DataSelectionOptions<T>): void;

  /**
   * Get all items from the DataSet.
   *
   * @param [options] Optional options.
   * @returns When no item is found, null is returned when a single item was requested,
   * and and empty Array is returned in case of multiple id's.
   */
  get(options?: DataSelectionOptions<T>): T[];

  /**
   * Get a single item from the DataSet.
   *
   * @param id The item id.
   * @returns When no item is found, null is returned when a single item was requested,
   * and and empty Array is returned in case of multiple id's.
   */
  get(id: IdType, options?: DataSelectionOptions<T>): T;

  /**
   * Get multiple items from the DataSet.
   *
   * @param ids Array of item ids.
   * @param [options] Optional options.
   * @returns When no item is found, null is returned when a single item was requested,
   * and and empty Array is returned in case of multiple id's.
   */
  get(ids: IdType[], options?: DataSelectionOptions<T>): T[];

  /**
   * Get the DataSet itself.
   * In case of a DataView, this function does not return the DataSet
   * to which the DataView is connected.
   *
   * @returns The DataSet itself.
   */
  getDataSet(): DataSet<T>;

  /**
   * Get ids of all items or of a filtered set of items.
   *
   * @returns ids of all items or of a filtered set of items.
   */
  getIds(options?: DataSelectionOptions<T>): IdType[];

  /**
   * Map every item in the DataSet.
   *
   * @param callback The mapping callback.
   * @param [options] Optional options.
   * @returns The mapped items.
   */
  map(callback: (item: T, id: IdType) => any, options?: DataSelectionOptions<T>): any[];

  /**
   * Find the item with maximum value of specified field.
   *
   * @returns Returns null if no item is found.
   */
  max(field: string): T;

  /**
   * Find the item with minimum value of specified field.
   *
   * @returns Returns null if no item is found.
   */
  min(field: string): T;

  /**
   * Subscribe from an event.
   *
   * @param event The event name.
   * @param callback
   * a callback function which will be called each time the event occurs.
   */
  on(event: string, callback: (event: string, properties: any, senderId: IdType) => void): void;

  /**
   * Unsubscribe to an event.
   *
   * @param event The event name.
   * @param callback
   * The exact same callback that was used when calling 'on'.
   */
  off(event: string, callback: (event: string, properties: any, senderId: IdType) => void): void;

  /**
   * Remove one or more items by id.
   *
   * @param id The item id.
   * @param [senderId] The sender id.
   * @returns Returns an array with the ids of the removed items.
   */
  remove(id: IdType | IdType[], senderId?: IdType): IdType[];

  /**
   * Set options for the DataSet.
   */
  setOptions(options?: DataSetQueueOptions): void;

  /**
   * Update one or multiple existing items.
   * When an item doesn't exist, it will be created.
   *
   * @param data a single item or an array with items.
   * @returns Returns an array with the ids of the updated items.
   */
  update(data: T | T[], senderId?: IdType): IdType[];
}

/**
 * The DataSet contains functionality to format, filter, and sort data retrieved
 * via the methods get, getIds, forEach, and map.
 * These methods can have these options as a parameter.
 */
export interface DataSelectionOptions<T> {
  /**
   * An array with field names, or an object with current field name
   * and new field name that the field is returned as.
   * By default, all properties of the items are emitted.
   * When fields is defined, only the properties whose name is specified
   * in fields will be included in the returned items.
   */
  fields?: string[] | any;

  /**
   * An object containing field names as key, and data types as value.
   * By default, the type of the properties of an item are left unchanged.
   * When a field type is specified, this field in the items will be converted to the specified type.
   * This can be used for example to convert ISO strings containing a date to a JavaScript Date object,
   * or convert strings to numbers or vice versa. The available data types are listed in section Data Types.
   */
  type?: any;

  /**
   * Items can be filtered on specific properties by providing a filter function.
   * A filter function is executed for each of the items in the DataSet,
   * and is called with the item as parameter.
   * The function must return a boolean.
   * All items for which the filter function returns true will be emitted.
   * See section Data Filtering.
   */
  filter?(item: T): boolean;

  /**
   * Order the items by a field name or custom sort function.
   */
  order?: string | any;

  /**
   * Determine the type of output of the get function.
   * Allowed values are 'Array' | 'Object'.
   * The default returnType is an Array.
   * The Object type will return a JSON object with the ID's as keys.
   */
  returnType?: string;
}

export class DataView<T extends DataItem | DataGroup> {
  length: number;
  constructor(items: T[]);
}

export type DataItemCollectionType = DataItem[] | DataSet<DataItem> | DataView<DataItem>;
export type DataGroupCollectionType = DataGroup[] | DataSet<DataGroup> | DataView<DataGroup>;

export interface TitleOption {
  text?: string;
  style?: string;
}

export interface RangeType {
  min: IdType;
  max: IdType;
}

export interface DataAxisSideOption {
  range?: RangeType;
  format?(): string;
  title?: TitleOption;
}

export interface Graph2dBarChartOption {
  width?: number;
  minWidth?: number;
  sideBySide?: boolean;
  align?: Graph2dBarChartAlign;
}

export interface Graph2dDataAxisOption {
  orientation?: TimelineOptionsOrientationType;
  showMinorLabels?: boolean;
  showMajorLabels?: boolean;
  majorLinesOffset?: number;
  minorLinesOffset?: number;
  labelOffsetX?: number;
  labelOffsetY?: number;
  iconWidth?: number;
  width?: string;
  icons?: boolean;
  visible?: boolean;
  alignZeros?: boolean;
  left?: DataAxisSideOption;
  right?: DataAxisSideOption;
}

export interface Graph2dDrawPointsOption {
  enabled?: boolean;
  onRender?(): boolean; // TODO
  size?: number;
  style: Graph2dDrawPointsStyle;
}

export interface Graph2dShadedOption {
  orientation?: TopBottomEnumType;
  groupid?: IdType;
}

export type Graph2dOptionBarChart = number | Graph2dBarChartOption;
export type Graph2dOptionDataAxis = boolean | Graph2dDataAxisOption;
export type Graph2dOptionDrawPoints = boolean | Graph2dDrawPointsOption;
export type Graph2dLegendOption = boolean | LegendOptions;

export interface Graph2dOptions {
  autoResize?: boolean;
  barChart?: Graph2dOptionBarChart;
  clickToUse?: boolean;
  configure?: TimelineOptionsConfigureType;
  dataAxis?: Graph2dOptionDataAxis;
  defaultGroup?: string;
  drawPoints?: Graph2dOptionDrawPoints;
  end?: DateType;
  format?: any; // TODO
  graphHeight?: HeightWidthType;
  height?: HeightWidthType;
  hiddenDates?: any; // TODO
  legend?: Graph2dLegendOption;
  locale?: string;
  locales?: any; // TODO
  moment?: MomentConstructor;
  max?: DateType;
  maxHeight?: HeightWidthType;
  maxMinorChars?: number;
  min?: DateType;
  minHeight?: HeightWidthType;
  moveable?: boolean;
  multiselect?: boolean;
  orientation?: string;
  sampling?: boolean;
  showCurrentTime?: boolean;
  showMajorLabels?: boolean;
  showMinorLabels?: boolean;
  sort?: boolean;
  stack?: boolean;
  start?: DateType;
  style?: Graph2dStyleType;
  throttleRedraw?: number;
  timeAxis?: TimelineTimeAxisOption;
  width?: HeightWidthType;
  yAxisOrientation?: RightLeftEnumType;
  zoomable?: boolean;
  zoomKey?: string;
  zoomMax?: number;
  zoomMin?: number;
  zIndex?: number;
}

export class Graph2d {
  constructor(
    container: HTMLElement,
    items: DataItemCollectionType,
    groups: DataGroupCollectionType,
    options?: Graph2dOptions
  );
  constructor(
    container: HTMLElement,
    items: DataItemCollectionType,
    options?: Graph2dOptions
  );

  addCustomTime(time: DateType, id?: IdType): IdType;
  destroy(): void;
  fit(options?: TimelineAnimationOptions): void;
  focus(ids: IdType | IdType[], options?: TimelineAnimationOptions): void;
  getCurrentTime(): Date;
  getCustomTime(id?: IdType): Date;
  getEventProperties(event: Event): TimelineEventPropertiesResult;
  getItemRange(): any; // TODO
  getSelection(): IdType[];
  getVisibleItems(): IdType[];
  getWindow(): { start: Date, end: Date };
  moveTo(time: DateType, options?: TimelineAnimationOptions): void;
  on(event: TimelineEvents, callback: () => void): void;
  off(event: TimelineEvents, callback: () => void): void;
  redraw(): void;
  removeCustomTime(id: IdType): void;
  setCurrentTime(time: DateType): void;
  setCustomTime(time: DateType, id?: IdType): void;
  setCustomTimeTitle(title: string, id?: IdType): void;
  setData(data: { groups?: DataGroupCollectionType; items?: DataItemCollectionType }): void;
  setGroups(groups?: DataGroupCollectionType): void;
  setItems(items: DataItemCollectionType): void;
  setOptions(options: TimelineOptions): void;
  setSelection(ids: IdType | IdType[]): void;
  setWindow(start: DateType, end: DateType, options?: TimelineAnimationOptions): void;
}

export interface Graph2d {
  setGroups(groups?: TimelineGroup[]): void;
  setItems(items?: TimelineItem[]): void;
  getLegend(): TimelineWindow;
  getWindow(): TimelineWindow;
  setWindow(start: any, date: any): void;
  focus(selection: any): void;
  on(event?: string, callback?: (properties: any) => void): void;
}

export class Timeline {
  constructor(
    container: HTMLElement,
    items: DataItemCollectionType,
    groups: DataGroupCollectionType,
    options?: TimelineOptions
  );

  constructor(
    container: HTMLElement,
    items: DataItemCollectionType,
    options?: TimelineOptions
  );

  /**
   * Add new vertical bar representing a custom time that can be dragged by the user. Parameter time can be a Date, Number, or String, and is new Date() by default.
   * Parameter id can be Number or String and is undefined by default. The id is added as CSS class name of the custom time bar, allowing to style multiple time bars differently.
   * The method returns id of the created bar.
   */
  addCustomTime(time: DateType, id?: IdType): IdType;

  /**
   * Destroy the Timeline. The timeline is removed from memory. all DOM elements and event listeners are cleaned up.
   */
  destroy(): void;

  /**
   * Adjust the visible window such that it fits all items. See also focus(id).
   */
  fit(options?: TimelineAnimationOptions): void;

  /**
   * Adjust the visible window such that the selected item (or multiple items) are centered on screen. See also function fit()
   */
  focus(ids: IdType | IdType[], options?: TimelineAnimationOptions): void;

  /**
   * Get the current time. Only applicable when option showCurrentTime is true.
   */
  getCurrentTime(): Date;

  /**
   * Retrieve the custom time from the custom time bar with given id.
   * @param id Id is undefined by default.
   */
  getCustomTime(id?: IdType): Date;

  getEventProperties(event: Event): TimelineEventPropertiesResult;

  /**
   * Get the range of all the items as an object containing min date and max date
   */
  getItemRange(): { min: Date, max: Date };

  /**
   * Get an array with the ids of the currently selected items
   */
  getSelection(): IdType[];

  /**
   * Get an array with the ids of the currently visible items.
   */
  getVisibleItems(): IdType[];

  /**
   * Get the current visible window.
   */
  getWindow(): TimelineWindow;

  /**
   * Move the window such that given time is centered on screen.
   */
  moveTo(time: DateType, options?: TimelineAnimationOptions, callback?: (properties?: any) => void): void;

  /**
   * Create an event listener. The callback function is invoked every time the event is triggered.
   */
  on(event: TimelineEvents, callback?: (properties?: any) => void): void;

  /**
   * Remove an event listener created before via function on(event[, callback]).
   */
  off(event: TimelineEvents, callback?: (properties?: any) => void): void;

  /**
   * Force a redraw of the Timeline. The size of all items will be recalculated.
   * Can be useful to manually redraw when option autoResize=false and the window has been resized, or when the items CSS has been changed.
   */
  redraw(): void;

  /**
   * Remove vertical bars previously added to the timeline via addCustomTime method.
   * @param id ID of the custom vertical bar returned by addCustomTime method.
   */
  removeCustomTime(id: IdType): void;

  /**
   * Set a current time. This can be used for example to ensure that a client's time is synchronized with a shared server time. Only applicable when option showCurrentTime is true.
   */
  setCurrentTime(time: DateType): void;

  /**
   * Adjust the time of a custom time bar.
   * @param time The time the custom time bar should point to
   * @param id Id of the custom time bar, and is undefined by default.
   */
  setCustomTime(time: DateType, id?: IdType): void;

  /**
   * Adjust the title attribute of a custom time bar.
   * @param title The title shown when hover over time bar
   * @param id Id of the custom time bar, and is undefined by default.
   */
  setCustomTimeTitle(title: string, id?: IdType): void;

  /**
   * Set both groups and items at once. Both properties are optional.
   * This is a convenience method for individually calling both setItems(items) and setGroups(groups).
   * Both items and groups can be an Array with Objects, a DataSet (offering 2 way data binding), or a DataView (offering 1 way data binding).
   */
  setData(data: { groups?: DataGroupCollectionType; items?: DataItemCollectionType }): void;

  /**
   * Set a data set with groups for the Timeline.
   */
  setGroups(groups?: DataGroupCollectionType): void;

  /**
   * Set a data set with items for the Timeline.
   */
  setItems(items: DataItemCollectionType): void;

  /**
   * Set or update options. It is possible to change any option of the timeline at any time. You can for example switch orientation on the fly.
   */
  setOptions(options: TimelineOptions): void;

  /**
   * Select one or multiple items by their id. The currently selected items will be unselected. To unselect all selected items, call `setSelection([])`.
   */
  setSelection(ids: IdType | IdType[], options?: { focus: boolean, animation: TimelineAnimationOptions }): void;

  /**
   * Set the current visible window.
   * @param start If the parameter value of start is null, the parameter will be left unchanged.
   * @param end If the parameter value of end is null, the parameter will be left unchanged.
   * @param options Timeline animation options. See {@link TimelineAnimationOptions}
   * @param callback The callback function
   */
  setWindow(start: DateType, end: DateType, options?: TimelineAnimationOptions, callback?: () => void): void;

  /**
   * Toggle rollingMode.
   */
  toggleRollingMode(): void;

  /**
   * Zoom in the current visible window.
   * @param percentage A number and must be between 0 and 1. If null, the window will be left unchanged.
   * @param options Timeline animation options. See {@link TimelineAnimationOptions}
   * @param callback The callback function
   */
  zoomIn(percentage: number, options?: TimelineAnimationOptions, callback?: () => void): void;

  /**
   * Zoom out the current visible window.
   * @param percentage A number and must be between 0 and 1. If null, the window will be left unchanged.
   * @param options Timeline animation options. See {@link TimelineAnimationOptions}
   * @param callback The callback function
   */
  zoomOut(percentage: number, options?: TimelineAnimationOptions, callback?: () => void): void;
}

export interface TimelineStatic {
  new(id: HTMLElement, data: any, options?: any): vis.Timeline;
}

export interface Timeline {
  setGroups(groups?: TimelineGroup[]): void;
  setItems(items?: TimelineItem[]): void;
  getWindow(): TimelineWindow;
  setWindow(start: any, date: any): void;
  focus(selection: any): void;
  on(event?: string, callback?: (properties: any) => void): void;
  off(event: string, callback?: (properties?: any) => void): void;
}

export interface TimelineWindow {
  start: Date;
  end: Date;
}

export interface TimelineItemEditableOption {
  remove?: boolean;
  updateGroup?: boolean;
  updateTime?: boolean;
}

export type TimelineItemEditableType = boolean | TimelineItemEditableOption;

export interface TimelineItem {
  className?: string;
  align?: TimelineAlignType;
  content: string;
  end?: DateType;
  group?: IdType;
  id: IdType;
  start: DateType;
  style?: string;
  subgroup?: IdType;
  title?: string;
  type?: TimelineItemType;
  editable?: TimelineItemEditableType;
}

export interface TimelineGroup {
  className?: string;
  content: string | HTMLElement;
  id: IdType;
  style?: string;
  order?: number;
  subgroupOrder?: TimelineOptionsGroupOrderType;
  title?: string;
  visible?: boolean;
  nestedGroups?: IdType[];
  showNested?: boolean;
}

export interface VisSelectProperties {
  items: number[];
}

export type NetworkEvents =
  'click' |
  'doubleClick' |
  'oncontext' |
  'hold' |
  'release' |
  'select' |
  'selectNode' |
  'selectEdge' |
  'deselectNode' |
  'deselectEdge' |
  'dragStart' |
  'dragging' |
  'dragEnd' |
  'hoverNode' |
  'blurNode' |
  'hoverEdge' |
  'blurEdge' |
  'zoom' |
  'showPopup' |
  'hidePopup' |
  'startStabilizing' |
  'stabilizationProgress' |
  'stabilizationIterationsDone' |
  'stabilized' |
  'resize' |
  'initRedraw' |
  'beforeDrawing' |
  'afterDrawing' |
  'animationFinished' |
  'configChange';

/**
 * Network is a visualization to display networks and networks consisting of nodes and edges.
 * The visualization is easy to use and supports custom shapes, styles, colors, sizes, images, and more.
 * The network visualization works smooth on any modern browser for up to a few thousand nodes and edges.
 * To handle a larger amount of nodes, Network has clustering support. Network uses HTML canvas for rendering.
 */
export class Network {
  /**
   * Creates an instance of Network.
   *
   * @param container the HTML element representing the network container
   * @param data network data
   * @param [options] optional network options
   */
  constructor(container: HTMLElement, data: Data, options?: Options);

  /**
   * 	Remove the network from the DOM and remove all Hammer bindings and references.
   */
  destroy(): void;

  /**
   * Override all the data in the network.
   * If stabilization is enabled in the physics module,
   * the network will stabilize again.
   * This method is also performed when first initializing the network.
   *
   * @param data network data
   */
  setData(data: Data): void;

  /**
   * Set the options.
   * All available options can be found in the modules above.
   * Each module requires it's own container with the module name to contain its options.
   *
   * @param options network options
   */
  setOptions(options: Options): void;

  /**
   * Set an event listener.
   * Depending on the type of event you get different parameters for the callback function.
   *
   * @param eventName the name of the event, f.e. 'click'
   * @param callback the callback function that will be raised
   */
  on(eventName: NetworkEvents, callback: (params?: any) => void): void;

  /**
   * Remove an event listener.
   * The function you supply has to be the exact same as the one you used in the on function.
   * If no function is supplied, all listeners will be removed.
   *
   * @param eventName the name of the event, f.e. 'click'
   * @param [callback] the exact same callback function that was used when calling 'on'
   */
  off(eventName: NetworkEvents, callback?: (params?: any) => void): void;

  /**
   * Set an event listener only once.
   * After it has taken place, the event listener will be removed.
   * Depending on the type of event you get different parameters for the callback function.
   *
   * @param eventName the name of the event, f.e. 'click'
   * @param callback the callback function that will be raised once
   */
  once(eventName: NetworkEvents, callback: (params?: any) => void): void;

  /**
   * This function converts canvas coordinates to coordinates on the DOM.
   * Input and output are in the form of {x:Number, y:Number} (IPosition interface).
   * The DOM values are relative to the network container.
   *
   * @param position the canvas coordinates
   * @returns the DOM coordinates
   */
  canvasToDOM(position: Position): Position;

  /**
   * This function converts DOM coordinates to coordinates on the canvas.
   * Input and output are in the form of {x:Number,y:Number} (IPosition interface).
   * The DOM values are relative to the network container.
   *
   * @param position the DOM coordinates
   * @returns the canvas coordinates
   */
  DOMtoCanvas(position: Position): Position;

  /**
   * Redraw the network.
   */
  redraw(): void;

  /**
   * Set the size of the canvas.
   * This is automatically done on a window resize.
   *
   * @param width width in a common format, f.e. '100px'
   * @param height height in a common format, f.e. '100px'
   */
  setSize(width: string, height: string): void;

  /**
   * The joinCondition function is presented with all nodes.
   */
  cluster(options?: ClusterOptions): void;

  /**
   * 	This method looks at the provided node and makes a cluster of it and all it's connected nodes.
   * The behaviour can be customized by proving the options object.
   * All options of this object are explained below.
   * The joinCondition is only presented with the connected nodes.
   *
   * @param nodeId the id of the node
   * @param [options] the cluster options
   */
  clusterByConnection(nodeId: string, options?: ClusterOptions): void;

  /**
   * This method checks all nodes in the network and those with a equal or higher
   * amount of edges than specified with the hubsize qualify.
   * If a hubsize is not defined, the hubsize will be determined as the average
   * value plus two standard deviations.
   * For all qualifying nodes, clusterByConnection is performed on each of them.
   * The options object is described for clusterByConnection and does the same here.
   *
   * @param [hubsize] optional hubsize
   * @param [options] optional cluster options
   */
  clusterByHubsize(hubsize?: number, options?: ClusterOptions): void;

  /**
   * This method will cluster all nodes with 1 edge with their respective connected node.
   *
   * @param [options] optional cluster options
   */
  clusterOutliers(options?: ClusterOptions): void;

  /**
   * Nodes can be in clusters.
   * Clusters can also be in clusters.
   * This function returns an array of nodeIds showing where the node is.
   *
   * Example:
   * cluster 'A' contains cluster 'B', cluster 'B' contains cluster 'C',
   * cluster 'C' contains node 'fred'.
   *
   * network.clustering.findNode('fred') will return ['A','B','C','fred'].
   *
   * @param nodeId the node id.
   * @returns an array of nodeIds showing where the node is
   */
  findNode(nodeId: IdType): IdType[];

  /**
   * Similar to findNode in that it returns all the edge ids that were
   * created from the provided edge during clustering.
   *
   * @param baseEdgeId the base edge id
   * @returns an array of edgeIds
   */
  getClusteredEdges(baseEdgeId: IdType): IdType[];

  /**
   * When a clusteredEdgeId is available, this method will return the original
   * baseEdgeId provided in data.edges ie.
   * After clustering the 'SelectEdge' event is fired but provides only the clustered edge.
   * This method can then be used to return the baseEdgeId.
   */
  getBaseEdge(clusteredEdgeId: IdType): IdType;

  /**
   * Visible edges between clustered nodes are not the same edge as the ones provided
   * in data.edges passed on network creation. With each layer of clustering, copies of
   * the edges between clusters are created and the previous edges are hidden,
   * until the cluster is opened. This method takes an edgeId (ie. a base edgeId from data.edges)
   * and applys the options to it and any edges that were created from it while clustering.
   */
  updateEdge(startEdgeId: IdType, options?: EdgeOptions): void;

  /**
   * Clustered Nodes when created are not contained in the original data.nodes
   * passed on network creation. This method updates the cluster node.
   */
  updateClusteredNode(clusteredNodeId: IdType, options?: NodeOptions): void;

  /**
   * Returns true if the node whose ID has been supplied is a cluster.
   *
   * @param nodeId the node id.
   */
  isCluster(nodeId: IdType): boolean;

  /**
   * Returns an array of all nodeIds of the nodes that
   * would be released if you open the cluster.
   *
   * @param clusterNodeId the id of the cluster node
   */
  getNodesInCluster(clusterNodeId: IdType): IdType[];

  /**
   * Opens the cluster, releases the contained nodes and edges,
   * removing the cluster node and cluster edges.
   * The options object is optional and currently supports one option,
   * releaseFunction, which is a function that can be used to manually
   * position the nodes after the cluster is opened.
   *
   * @param nodeId the node id
   * @param [options] optional open cluster options
   */
  openCluster(nodeId: IdType, options?: OpenClusterOptions): void;

  /**
   * If you like the layout of your network
   * and would like it to start in the same way next time,
   * ask for the seed using this method and put it in the layout.randomSeed option.
   *
   * @returns the current seed of the network.
   */
  getSeed(): number;

  /**
   * 	Programatically enable the edit mode.
   * Similar effect to pressing the edit button.
   */
  enableEditMode(): void;

  /**
   * Programatically disable the edit mode.
   * Similar effect to pressing the close icon (small cross in the corner of the toolbar).
   */
  disableEditMode(): void;

  /**
   * 	Go into addNode mode. Having edit mode or manipulation enabled is not required.
   * To get out of this mode, call disableEditMode().
   * The callback functions defined in handlerFunctions still apply.
   * To use these methods without having the manipulation GUI, make sure you set enabled to false.
   */
  addNodeMode(): void;

  /**
   * Edit the selected node.
   * The explaination from addNodeMode applies here as well.
   */
  editNode(): void;

  /**
   * Go into addEdge mode.
   * The explaination from addNodeMode applies here as well.
   */
  addEdgeMode(): void;

  /**
   * Go into editEdge mode.
   * The explaination from addNodeMode applies here as well.
   */
  editEdgeMode(): void;

  /**
   * Delete selected.
   * Having edit mode or manipulation enabled is not required.
   */
  deleteSelected(): void;

  /**
   * Returns the x y positions in canvas space of the nodes with the supplied nodeIds as an object.
   *
   * Alternative inputs are a String containing a nodeId or nothing.
   * When a String is supplied, the position of the node corresponding to the ID is returned.
   * When nothing is supplied, the positions of all nodes are returned.
   */
  getPositions(nodeIds?: IdType[]): { [nodeId: string]: Position };
  getPositions(nodeId: IdType): Position;

  /**
   * 	When using the vis.DataSet to load your nodes into the network,
   * this method will put the X and Y positions of all nodes into that dataset.
   * If you're loading your nodes from a database and have this dynamically coupled with the DataSet,
   * you can use this to stablize your network once, then save the positions in that database
   * through the DataSet so the next time you load the nodes, stabilization will be near instantaneous.
   *
   * If the nodes are still moving and you're using dynamic smooth edges (which is on by default),
   * you can use the option stabilization.onlyDynamicEdges in the physics module to improve initialization time.
   *
   * This method does not support clustering.
   * At the moment it is not possible to cache positions when using clusters since
   * they cannot be correctly initialized from just the positions.
   */
  storePositions(): void;

  /**
   * You can use this to programatically move a node.
   * The supplied x and y positions have to be in canvas space!
   *
   * @param nodeId the node that will be moved
   * @param x new canvas space x position
   * @param y new canvas space y position
   */
  moveNode(nodeId: IdType, x: number, y: number): void;

  /**
   * Returns a bounding box for the node including label.
   *
   */
  getBoundingBox(nodeId: IdType): BoundingBox;

  /**
   * Returns an array of nodeIds of the all the nodes that are directly connected to this node.
   * If you supply an edgeId, vis will first match the id to nodes.
   * If no match is found, it will search in the edgelist and return an array: [fromId, toId].
   *
   * @param nodeOrEdgeId a node or edge id
   */
  getConnectedNodes(nodeOrEdgeId: IdType): IdType[] | Array<{ fromId: IdType, toId: IdType }>;

  /**
   * Returns an array of edgeIds of the edges connected to this node.
   *
   * @param nodeId the node id
   */
  getConnectedEdges(nodeId: IdType): IdType[];

  /**
   * Start the physics simulation.
   * This is normally done whenever needed and is only really useful
   * if you stop the simulation yourself and wish to continue it afterwards.
   */
  startSimulation(): void;

  /**
   * This stops the physics simulation and triggers a stabilized event.
   * Tt can be restarted by dragging a node,
   * altering the dataset or calling startSimulation().
   */
  stopSimulation(): void;

  /**
   * You can manually call stabilize at any time.
   * All the stabilization options above are used.
   * You can optionally supply the number of iterations it should do.
   *
   * @param [iterations] the number of iterations it should do
   */
  stabilize(iterations?: number): void;

  /**
   * Returns an object with selected nodes and edges ids.
   *
   */
  getSelection(): { nodes: IdType[], edges: IdType[] };

  /**
   * Returns an array of selected node ids like so:
   * [nodeId1, nodeId2, ..].
   *
   */
  getSelectedNodes(): IdType[];

  /**
   * Returns an array of selected edge ids like so:
   * [edgeId1, edgeId2, ..].
   *
   */
  getSelectedEdges(): IdType[];

  /**
   * Returns a nodeId or undefined.
   * The DOM positions are expected to be in pixels from the top left corner of the canvas.
   *
   */
  getNodeAt(position: Position): IdType;

  /**
   * Returns a edgeId or undefined.
   * The DOM positions are expected to be in pixels from the top left corner of the canvas.
   *
   */
  getEdgeAt(position: Position): IdType;

  /**
   * Selects the nodes corresponding to the id's in the input array.
   * If highlightEdges is true or undefined, the neighbouring edges will also be selected.
   * This method unselects all other objects before selecting its own objects. Does not fire events.
   *
   */
  selectNodes(nodeIds: IdType[], highlightEdges?: boolean): void;

  /**
   * Selects the edges corresponding to the id's in the input array.
   * This method unselects all other objects before selecting its own objects.
   * Does not fire events.
   *
   */
  selectEdges(edgeIds: IdType[]): void;

  /**
   * Sets the selection.
   * You can also pass only nodes or edges in selection object.
   *
   */
  setSelection(selection: { nodes: IdType[], edges: IdType[] }, options?: SelectionOptions): void;

  /**
   * Unselect all objects.
   * Does not fire events.
   */
  unselectAll(): void;

  /**
   * Returns the current scale of the network.
   * 1.0 is comparible to 100%, 0 is zoomed out infinitely.
   *
   * @returns the current scale of the network
   */
  getScale(): number;

  /**
   * Returns the current central focus point of the view in the form: { x: {Number}, y: {Number} }
   *
   * @returns the view position;
   */
  getViewPosition(): Position;

  /**
   * Zooms out so all nodes fit on the canvas.
   *
   * @param [options] All options are optional for the fit method
   */
  fit(options?: FitOptions): void;

  /**
   * You can focus on a node with this function.
   * What that means is the view will lock onto that node, if it is moving, the view will also move accordingly.
   * If the view is dragged by the user, the focus is broken. You can supply options to customize the effect.
   *
   */
  focus(nodeId: IdType, options?: FocusOptions): void;

  /**
   * You can animate or move the camera using the moveTo method.
   *
   */
  moveTo(options: MoveToOptions): void;

  /**
   * Programatically release the focussed node.
   */
  releaseNode(): void;

  /**
   * If you use the configurator, you can call this method to get an options object that contains
   * all differences from the default options caused by users interacting with the configurator.
   *
   */
  getOptionsFromConfigurator(): any;
}

/**
 * Options interface for focus function.
 */
export interface FocusOptions extends ViewPortOptions {
  /**
   * Locked denotes whether or not the view remains locked to
   * the node once the zoom-in animation is finished.
   * Default value is true.
   */
  locked?: boolean;
}

/**
 * Base options interface for some viewport functions.
 */
export interface ViewPortOptions {
  /**
   * The scale is the target zoomlevel.
   * Default value is 1.0.
   */
  scale?: number;

  /**
   * The offset (in DOM units) is how many pixels from the center the view is focussed.
   * Default value is {x:0,y:0}
   */
  offset?: Position;

  /**
   * For animation you can either use a Boolean to use it with the default options or
   * disable it or you can define the duration (in milliseconds) and easing function manually.
   */
  animation?: AnimationOptions | boolean;
}

/**
 * You will have to define at least a scale, position or offset.
 * Otherwise, there is nothing to move to.
 */
export interface MoveToOptions extends ViewPortOptions {
  /**
   * The position (in canvas units!) is the position of the central focus point of the camera.
   */
  position?: Position;
}

/**
 * Animation options interface.
 */
export interface AnimationOptions {
  /**
   * The duration (in milliseconds).
   */
  duration: number;
  /**
   * The easing function.
   *
   * Available are:
   * linear, easeInQuad, easeOutQuad, easeInOutQuad, easeInCubic,
   * easeOutCubic, easeInOutCubic, easeInQuart, easeOutQuart, easeInOutQuart,
   * easeInQuint, easeOutQuint, easeInOutQuint.
   */
  easingFunction: EasingFunction;
}

export type EasingFunction =
  'linear' |
  'easeInQuad' |
  'easeOutQuad' |
  'easeInOutQuad' |
  'easeInCubic' |
  'easeOutCubic' |
  'easeInOutCubic' |
  'easeInQuart' |
  'easeOutQuart' |
  'easeInOutQuart' |
  'easeInQuint' |
  'easeOutQuint' |
  'easeInOutQuint';

/**
 * Optional options for the fit method.
 */
export interface FitOptions {
  /**
   * The nodes can be used to zoom to fit only specific nodes in the view.
   */
  nodes?: string[];

  /**
   * For animation you can either use a Boolean to use it with the default options or
   * disable it or you can define the duration (in milliseconds) and easing function manually.
   */
  animation: TimelineAnimationType;
}

export interface SelectionOptions {
  unselectAll?: boolean;
  highlightEdges?: boolean;
}

/**
 * These values are in canvas space.
 */
export interface BoundingBox {
  top: number;
  left: number;
  right: number;
  bottom: number;
}

/**
 * Cluster methods options interface.
 */
export interface ClusterOptions {
  /**
   * Optional for all but the cluster method.
   * The cluster module loops over all nodes that are selected to be in the cluster
   * and calls this function with their data as argument. If this function returns true,
   * this node will be added to the cluster. You have access to all options (including the default)
   * as well as any custom fields you may have added to the node to determine whether or not to include it in the cluster.
   */
  joinCondition?(nodeOptions: any): boolean;

  /**
   * Optional.
   * Before creating the new cluster node, this (optional) function will be called with the properties
   * supplied by you (clusterNodeProperties), all contained nodes and all contained edges.
   * You can use this to update the properties of the cluster based on which items it contains.
   * The function should return the properties to create the cluster node.
   */
  processProperties?(clusterOptions: any, childNodesOptions: any[], childEdgesOptions: any[]): any;

  /**
   * Optional.
   * This is an object containing the options for the cluster node.
   * All options described in the nodes module are allowed.
   * This allows you to style your cluster node any way you want.
   * This is also the style object that is provided in the processProperties function for fine tuning.
   * If undefined, default node options will be used.
   */
  clusterNodeProperties?: NodeOptions;

  /**
   * Optional.
   * This is an object containing the options for the edges connected to the cluster.
   * All options described in the edges module are allowed.
   * Using this, you can style the edges connecting to the cluster any way you want.
   * If none are provided, the options from the edges that are replaced are used.
   * If undefined, default edge options will be used.
   */
  clusterEdgeProperties?: EdgeOptions;
}

/**
 * Options for the openCluster function of Network.
 */
export interface OpenClusterOptions {
  /**
   * A function that can be used to manually position the nodes after the cluster is opened.
   * The containedNodesPositions contain the positions of the nodes in the cluster at the
   * moment they were clustered. This function is expected to return the newPositions,
   * which can be the containedNodesPositions (altered) or a new object.
   * This has to be an object with keys equal to the nodeIds that exist in the
   * containedNodesPositions and an {x:x,y:y} position object.
   *
   * For all nodeIds not listed in this returned object,
   * we will position them at the location of the cluster.
   * This is also the default behaviour when no releaseFunction is defined.
   */
  releaseFunction(
    clusterPosition: Position,
    containedNodesPositions: { [nodeId: string]: Position }): { [nodeId: string]: Position };
}

export interface Position {
  x: number;
  y: number;
}

export interface Properties {
  nodes: string[];

  edges: string[];

  event: string[];

  pointer: {
    DOM: Position;
    canvas: Position;
  };

  previousSelection?: {
    nodes: string[];
    edges: string[];
  };
}

export interface Callback {
  callback?(params?: any): void;
}

export interface Data {
  nodes?: Node[] | DataSet<Node>;
  edges?: Edge[] | DataSet<Edge>;
}

export interface Node extends NodeOptions {
  id?: IdType;
}

export interface Edge extends EdgeOptions {
  from?: IdType;
  to?: IdType;
  id?: IdType;
}

export interface Locales {
  [language: string]: LocaleMessages | undefined;
  en?: LocaleMessages;
  cn?: LocaleMessages;
  de?: LocaleMessages;
  es?: LocaleMessages;
  it?: LocaleMessages;
  nl?: LocaleMessages;
  'pt-br'?: LocaleMessages;
  ru?: LocaleMessages;
}

export interface LocaleMessages {
  edit: string;
  del: string;
  back: string;
  addNode: string;
  addEdge: string;
  editNode: string;
  editEdge: string;
  addDescription: string;
  edgeDescription: string;
  editEdgeDescription: string;
  createEdgeError: string;
  deleteClusterError: string;
  editClusterError: string;
}

export interface Options {
  autoResize?: boolean;

  width?: string;

  height?: string;

  locale?: string;

  locales?: Locales;

  clickToUse?: boolean;

  configure?: any; // http://visjs.org/docs/network/configure.html#

  edges?: EdgeOptions;

  nodes?: NodeOptions;

  groups?: any;

  layout?: any; // http://visjs.org/docs/network/layout.html

  interaction?: any; // visjs.org/docs/network/interaction.html?keywords=edges

  manipulation?: any; // http://visjs.org/docs/network/manipulation.html#

  physics?: any; // http://visjs.org/docs/network/physics.html#
}

export interface Image {
  unselected?: string;
  selected?: string;
}

export interface Color {
  border?: string;

  background?: string;

  highlight?: string | {
    border?: string;
    background?: string;
  };

  hover?: string | {
    border?: string;
    background?: string;
  };
}

export interface NodeOptions {
  borderWidth?: number;

  borderWidthSelected?: number;

  brokenImage?: string;

  color?: string | Color;

  fixed?: boolean | {
    x?: boolean,
    y?: boolean,
  };

  font?: string | {
    color?: string,
    size?: number, // px
    face?: string,
    background?: string,
    strokeWidth?: number, // px
    strokeColor?: string,
    align?: string,
    vadjust?: string,
    multi?: string,
    bold?: string | FontOptions,
    ital?: string | FontOptions,
    boldital?: string | FontOptions,
    mono?: string | FontOptions,
  };

  group?: string;

  hidden?: boolean;

  icon?: {
    face?: string,
    code?: string,
    size?: number,  // 50,
    color?: string,
  };

  image?: string | Image;

  label?: string;

  labelHighlightBold?: boolean;

  level?: number;

  mass?: number;

  physics?: boolean;

  scaling?: OptionsScaling;

  shadow?: boolean | OptionsShadow;

  shape?: string;

  shapeProperties?: {
    borderDashes: boolean | number[], // only for borders
    borderRadius: number,     // only for box shape
    interpolation: boolean,  // only for image and circularImage shapes
    useImageSize: boolean,  // only for image and circularImage shapes
    useBorderWithImage: boolean  // only for image shape
  };

  size?: number;

  title?: string;

  value?: number;

  x?: number;

  y?: number;
}

export interface EdgeOptions {
  arrows?: string | {
    to?: boolean | {
      enabled?: boolean,
      scaleFactor?: number,
    },
    middle?: boolean | {
      enabled?: boolean,
      scaleFactor?: number,
    },
    from?: boolean | {
      enabled?: boolean,
      scaleFactor?: number,
    }
  };

  arrowStrikethrough?: boolean;

  color?: string | {
    color?: string,
    highlight?: string,
    hover?: string,
    inherit?: boolean | string,
    opacity?: number,
  };

  dashes?: boolean | number[];

  font?: string | {
    color?: string,
    size?: number, // px
    face?: string,
    background?: string,
    strokeWidth?: number, // px
    strokeColor?: string,
    align?: string,
    vadjust?: string,
    multi?: string,
    bold?: string | FontOptions,
    ital?: string | FontOptions,
    boldital?: string | FontOptions,
    mono?: string | FontOptions,
  };

  hidden?: boolean;

  hoverWidth?: number; // please note, hoverWidth could be also a function. This case is not represented here

  label?: string;

  labelHighlightBold?: boolean;

  length?: number;

  physics?: boolean;

  scaling?: OptionsScaling;

  selectionWidth?: number; // please note, selectionWidth could be also a function. This case is not represented here

  selfReferenceSize?: number;

  shadow?: boolean | OptionsShadow;

  smooth?: boolean | {
    enabled: boolean,
    type: string,
    forceDirection?: string | boolean,
    roundness: number,
  };

  title?: string;

  value?: number;

  width?: number;
}

export interface FontOptions {
  color?: string;
  size?: number;
  face?: string;
  mod?: string;
  vadjust?: string;
}

export interface OptionsScaling {
  min?: number;
  max?: number;
  label?: boolean | {
    enabled?: boolean,
    min?: number,
    max?: number,
    maxVisible?: number,
    drawThreshold?: number
  };
  customScalingFunction?(min?: number, max?: number, total?: number, value?: number): number;
}

export interface OptionsShadow {
  enabled: boolean;
  color: string;
  size: number;
  x: number;
  y: number;
}

export as namespace vis;
