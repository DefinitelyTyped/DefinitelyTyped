// Type definitions for vis.js 4.18
// Project: https://github.com/almende/vis
// Definitions by: Michaël Bitard <https://github.com/MichaelBitard>
//                 MacLeod Broad <https://github.com/macleodbroad-wf>
//                 Adrian Caballero <https://github.com/adripanico>
//                 Severin <https://github.com/seveves>
//                 kaktus40 <https://github.com/kaktus40>
//                 Matthieu Maitre <https://github.com/mmaitre314>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export type IdType = string | number;
export type SubgroupType = IdType;
export type DateType = Date | number | string;
export type HeightWidthType = IdType;
export type TimelineTimeAxisScaleType = 'millisecond' | 'second' | 'minute' | 'hour' |
  'weekday' | 'day' | 'month' | 'year';
export type TimelineEventPropertiesResultWhatType = 'item' | 'background' | 'axis' |
  'group-label' | 'custom-time' | 'current-time';
export type TimelineEvents =
  'currentTimeTick' |
  'click' |
  'contextmenu' |
  'doubleClick' |
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

export interface DataGroup {
  className?: string;
  content: string;
  id: IdType;
  options?: DataGroupOptions;
  style?: string;
  subgroupOrder?: string | (() => void);
  title?: string;
  nestedGroups?: number[];
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
}

export interface TimelineGroupEditableOption {
  add?: boolean;
  remove?: boolean;
  order?: boolean;
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

export type TimelineOptionsConfigureFunction = (option: string, path: string[]) => boolean;
export type TimelineOptionsConfigureType = boolean | TimelineOptionsConfigureFunction;
export type TimelineOptionsDataAttributesType = boolean | string | string[];
export type TimelineOptionsEditableType = boolean | TimelineEditableOption;
export type TimelineOptionsGroupEditableType = boolean | TimelineGroupEditableOption;
export type TimelineOptionsGroupOrderType = string | (() => void); // TODO
export type TimelineOptionsGroupOrderSwapFunction = (fromGroup: any, toGroup: any, groups: DataSet<DataGroup>) => void;
export type TimelineOptionsMarginType = number | TimelineMarginOption;
export type TimelineOptionsOrientationType = string | TimelineOrientationOption;
export type TimelineOptionsSnapFunction = (date: Date, scale: string, step: number) => Date | number;

export interface TimelineOptions {
  align?: string;
  autoResize?: boolean;
  clickToUse?: boolean;
  configure?: TimelineOptionsConfigureType;
  dataAttributes?: TimelineOptionsDataAttributesType;
  editable?: TimelineOptionsEditableType;
  end?: DateType;
  format?: any; // TODO
  groupEditable?: TimelineOptionsGroupEditableType;
  groupOrder?: TimelineOptionsGroupOrderType;
  groupOrderSwap?: TimelineOptionsGroupOrderSwapFunction;
  groupTemplate?(item?: any, element?: any, data?: any): any;
  height?: HeightWidthType;
  hiddenDates?: any; // TODO
  horizontalScroll?: boolean;
  itemsAlwaysDraggable?: boolean;
  locale?: string;
  locales?: any; // TODO
  moment?(): void; // TODO
  margin?: TimelineOptionsMarginType;
  max?: DateType;
  maxHeight?: HeightWidthType;
  maxMinorChars?: number;
  min?: DateType;
  minHeight?: HeightWidthType;
  moveable?: boolean;
  multiselect?: boolean;
  multiselectPerGroup?: boolean;
  onAdd?(): void; // TODO
  onAddGroup?(): void; // TODO
  onUpdate?(): void; // TODO
  onMove?(): void; // TODO
  onMoveGroup?(): void; // TODO
  onMoving?(): void; // TODO
  onRemove?(): void; // TODO
  onRemoveGroup?(): void; // TODO
  order?(): void; // TODO
  orientation?: TimelineOptionsOrientationType;
  rollingMode?: any;
  selectable?: boolean;
  showCurrentTime?: boolean;
  showMajorLabels?: boolean;
  showMinorLabels?: boolean;
  stack?: boolean;
  snap?: TimelineOptionsSnapFunction;
  start?: DateType;
  template?(item?: any, element?: any, data?: any): any;
  throttleRedraw?: number;
  timeAxis?: TimelineTimeAxisOption;
  type?: string;
  tooltipOnItemUpdateTime?: boolean | { template(item: any): any };
  verticalScroll?: boolean;
  width?: HeightWidthType;
  zoomable?: boolean;
  zoomKey?: string;
  zoomMax?: number;
  zoomMin?: number;
}

export interface TimelineFitAnimation {
  duration?: number;
  easingFunction?: string;
}

export type TimelineFitAnimationType = boolean | TimelineFitAnimation;

export interface TimelineFitOptions {
  animation?: TimelineFitAnimationType;
}

export interface TimelineEventPropertiesResult {
  group?: number;
  item?: number;
  pageX: number;
  pageY: number;
  x: number;
  y: number;
  time: Date;
  snappedTime: Date;
  what?: TimelineEventPropertiesResultWhatType;
  event: Event;
}

/**
 * Options that can be passed to a DataSet.
 *
 * @interface DataSetOptions
 */
export interface DataSetOptions extends DataSetQueueOptions {
  /**
   * The name of the field containing the id of the items.
   * When data is fetched from a server which uses some specific field to identify items,
   * this field name can be specified in the DataSet using the option fieldId.
   * For example CouchDB uses the field "_id" to identify documents.
   *
   * @type {string}
   * @memberOf DataSetOptions
   */
  fieldId?: string;

  /**
   * An object containing field names as key, and data types as value.
   * By default, the type of the properties of items are left unchanged.
   * Item properties can be normalized by specifying a field type.
   * This is useful for example to automatically convert stringified dates coming
   * from a server into JavaScript Date objects.
   * The available data types are listed in section Data Types.
   *
   * @type {*}
   * @memberOf DataSetOptions
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
   *
   * @type {(any | boolean)}
   * @memberOf DataSetOptions
   */
  queue?: any | boolean;
}

export class DataSet<T extends DataItem | DataGroup | Node | Edge> {
  /**
   * Creates an instance of DataSet.
   *
   * @param {DataSetOptions} [options] DataSet options.
   *
   * @memberOf DataSet
   */
  constructor(options: DataSetOptions);

  /**
   * Creates an instance of DataSet.
   *
   * @param {T[]} [data] An Array with items.
   * @param {DataSetOptions} [options] DataSet options.
   *
   * @memberOf DataSet
   */
  constructor(data?: T[], options?: DataSetOptions);

  /**
   * The number of items in the DataSet.
   *
   * @type {number}
   * @memberOf DataSet
   */
  length: number;

  /**
   * Add one or multiple items to the DataSet.
   * Adding an item will fail when there already is an item with the same id.
   *
   * @param {(T | T[])} data data can be a single item or an array with items.
   * @param {IdType} [senderId] Optional sender id.
   * @returns {IdType[]} The function returns an array with the ids of the added items.
   *
   * @memberOf DataSet
   */
  add(data: T | T[], senderId?: IdType): IdType[];

  /**
   * Clear all data from the DataSet.
   *
   * @param {IdType} [senderId] Optional sender id.
   * @returns {IdType[]} The function returns an array with the ids of the removed items.
   *
   * @memberOf DataSet
   */
  clear(senderId?: IdType): IdType[];

  /**
   * Find all distinct values of a specified field.
   * If data items do not contain the specified field are ignored.
   *
   * @param {string} field The search term.
   * @returns {any[]} Returns an unordered array containing all distinct values.
   *
   * @memberOf DataSet
   */
  distinct(field: string): any[];

  /**
   * Flush queued changes.
   * Only available when the DataSet is configured with the option queue.
   *
   * @memberOf DataSet
   */
  flush(): void;

  /**
   * Execute a callback function for every item in the dataset.
   *
   * @param {(item: T, id: IdType) => void} callback The item callback.
   * @param {DataSelectionOptions<T>} [options] Optional options
   *
   * @memberOf DataSet
   */
  forEach(callback: (item: T, id: IdType) => void, options?: DataSelectionOptions<T>): void;

  /**
   * Get all items from the DataSet.
   *
   * @param {DataSelectionOptions<T>} [options] Optional options.
   * @returns {T[]} When no item is found, null is returned when a single item was requested,
   * and and empty Array is returned in case of multiple id's.
   *
   * @memberOf DataSet
   */
  get(options?: DataSelectionOptions<T>): T[];

  /**
   * Get a single item from the DataSet.
   *
   * @param {IdType} id The item id.
   * @param {DataSelectionOptions<T>} [options]
   * @returns {T} When no item is found, null is returned when a single item was requested,
   * and and empty Array is returned in case of multiple id's.
   *
   * @memberOf DataSet
   */
  get(id: IdType, options?: DataSelectionOptions<T>): T;

  /**
   * Get multiple items from the DataSet.
   *
   * @param {IdType[]} ids Array of item ids.
   * @param {DataSelectionOptions<T>} [options] Optional options.
   * @returns {T[]} When no item is found, null is returned when a single item was requested,
   * and and empty Array is returned in case of multiple id's.
   *
   * @memberOf DataSet
   */
  get(ids: IdType[], options?: DataSelectionOptions<T>): T[];

  /**
   * Get the DataSet itself.
   * In case of a DataView, this function does not return the DataSet
   * to which the DataView is connected.
   *
   * @returns {DataSet<T>} The DataSet itself.
   *
   * @memberOf DataSet
   */
  getDataSet(): DataSet<T>;

  /**
   * Get ids of all items or of a filtered set of items.
   *
   * @param {DataSelectionOptions<T>} [options]
   * @returns {IdType[]} ids of all items or of a filtered set of items.
   *
   * @memberOf DataSet
   */
  getIds(options?: DataSelectionOptions<T>): IdType[];

  /**
   * Map every item in the DataSet.
   *
   * @param {(item: T, id: IdType) => T} callback The mapping callback.
   * @param {DataSelectionOptions<T>} [options] Optional options.
   * @returns {T[]} The mapped items.
   *
   * @memberOf DataSet
   */
  map(callback: (item: T, id: IdType) => any, options?: DataSelectionOptions<T>): any[];

  /**
   * Find the item with maximum value of specified field.
   *
   * @param {string} field
   * @returns {T} Returns null if no item is found.
   *
   * @memberOf DataSet
   */
  max(field: string): T;

  /**
   * Find the item with minimum value of specified field.
   *
   * @param {string} field
   * @returns {T} Returns null if no item is found.
   *
   * @memberOf DataSet
   */
  min(field: string): T;

  /**
   * Subscribe from an event.
   *
   * @param {string} event The event name.
   * @param {((event: string, properties: any, senderId: IdType) => void)} callback
   * a callback function which will be called each time the event occurs.
   *
   * @memberOf DataSet
   */
  on(event: string, callback: (event: string, properties: any, senderId: IdType) => void): void;

  /**
   * Unsubscribe to an event.
   *
   * @param {string} event The event name.
   * @param {((event: string, properties: any, senderId: IdType) => void)} callback
   * The exact same callback that was used when calling 'on'.
   *
   * @memberOf DataSet
   */
  off(event: string, callback: (event: string, properties: any, senderId: IdType) => void): void;

  /**
   * Remove one or more items by id.
   *
   * @param {IdType} id The item id.
   * @param {IdType} [senderId] The sender id.
   * @returns {IdType[]} Returns an array with the ids of the removed items.
   *
   * @memberOf DataSet
   */
  remove(id: IdType | IdType[], senderId?: IdType): IdType[];

  /**
   * Set options for the DataSet.
   *
   * @param {DataSetQueueOptions} [options]
   *
   * @memberOf DataSet
   */
  setOptions(options?: DataSetQueueOptions): void;

  /**
   * Update one or multiple existing items.
   * When an item doesn't exist, it will be created.
   *
   * @param {(T | T[])} data a single item or an array with items.
   * @param {IdType} [senderId]
   * @returns {IdType[]} Returns an array with the ids of the updated items.
   *
   * @memberOf DataSet
   */
  update(data: T | T[], senderId?: IdType): IdType[];
}

/**
 * The DataSet contains functionality to format, filter, and sort data retrieved
 * via the methods get, getIds, forEach, and map.
 * These methods can have these options as a parameter.
 *
 * @interface DataSelectionOptions
 */
export interface DataSelectionOptions<T> {
  /**
   * An array with field names, or an object with current field name
   * and new field name that the field is returned as.
   * By default, all properties of the items are emitted.
   * When fields is defined, only the properties whose name is specified
   * in fields will be included in the returned items.
   *
   * @type {(string[] | any)}
   * @memberOf DataSelectionOptions
   */
  fields?: string[] | any;

  /**
   * An object containing field names as key, and data types as value.
   * By default, the type of the properties of an item are left unchanged.
   * When a field type is specified, this field in the items will be converted to the specified type.
   * This can be used for example to convert ISO strings containing a date to a JavaScript Date object,
   * or convert strings to numbers or vice versa. The available data types are listed in section Data Types.
   *
   * @type {*}
   * @memberOf DataSelectionOptions
   */
  type?: any;

  /**
   * Items can be filtered on specific properties by providing a filter function.
   * A filter function is executed for each of the items in the DataSet,
   * and is called with the item as parameter.
   * The function must return a boolean.
   * All items for which the filter function returns true will be emitted.
   * See section Data Filtering.
   *
   * @memberOf DataSelectionOptions
   */
  filter?(item: T): boolean;

  /**
   * Order the items by a field name or custom sort function.
   *
   * @type {(string | any)}
   * @memberOf DataSelectionOptions
   */
  order?: string | any;

  /**
   * Determine the type of output of the get function.
   * Allowed values are 'Array' | 'Object'.
   * The default returnType is an Array.
   * The Object type will return a JSON object with the ID's as keys.
   *
   * @type {string}
   * @memberOf DataSelectionOptions
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
  moment?(): void; // TODO
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
  fit(options?: TimelineFitOptions): void;
  focus(ids: IdType | IdType[], options?: TimelineFitOptions): void;
  getCurrentTime(): Date;
  getCustomTime(id?: IdType): Date;
  getEventProperties(event: Event): TimelineEventPropertiesResult;
  getItemRange(): any; // TODO
  getSelection(): IdType[];
  getVisibleItems(): IdType[];
  getWindow(): { start: Date, end: Date };
  moveTo(time: DateType, options?: TimelineFitOptions): void;
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
  setWindow(start: DateType, end: DateType, options?: TimelineFitOptions): void;
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

  addCustomTime(time: DateType, id?: IdType): IdType;
  destroy(): void;
  fit(options?: TimelineFitOptions): void;
  focus(ids: IdType | IdType[], options?: TimelineFitOptions): void;
  getCurrentTime(): Date;
  getCustomTime(id?: IdType): Date;
  getEventProperties(event: Event): TimelineEventPropertiesResult;
  getItemRange(): any; // TODO
  getSelection(): IdType[];
  getVisibleItems(): IdType[];
  getWindow(): { start: Date, end: Date };
  moveTo(time: DateType, options?: TimelineFitOptions): void;
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
  setWindow(start: DateType, end: DateType, options?: TimelineFitOptions): void;
}

export interface TimelineStatic {
  new (id: HTMLElement, data: any, options?: any): vis.Timeline;
}

export interface Timeline {
  setGroups(groups?: TimelineGroup[]): void;
  setItems(items?: TimelineItem[]): void;
  getWindow(): TimelineWindow;
  setWindow(start: any, date: any): void;
  focus(selection: any): void;
  on(event?: string, callback?: (properties: any) => void): void;
}

export interface TimelineWindow {
  start: Date;
  end: Date;
}

export interface TimelineItem {
  id: number;
  content: string;
  group?: number;
  start: number;
  end?: number;
  editable?: boolean;
}

export interface TimelineGroup {
  id: number;
  content: string;
  style?: string;
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
 *
 * @export
 * @class Network
 * @implements {INetwork}
 */
export class Network {
  /**
   * Creates an instance of Network.
   *
   * @param {HTMLElement} container the HTML element representing the network container
   * @param {IData} data network data
   * @param {IOptions} [options] optional network options
   *
   * @memberOf Network
   */
  constructor(container: HTMLElement, data: Data, options?: Options);

  /**
   * 	Remove the network from the DOM and remove all Hammer bindings and references.
   *
   * @memberOf Network
   */
  destroy(): void;

  /**
   * Override all the data in the network.
   * If stabilization is enabled in the physics module,
   * the network will stabilize again.
   * This method is also performed when first initializing the network.
   *
   * @param {IData} data network data
   *
   * @memberOf Network
   */
  setData(data: Data): void;

  /**
   * Set the options.
   * All available options can be found in the modules above.
   * Each module requires it's own container with the module name to contain its options.
   *
   * @param {IOptions} options network options
   *
   * @memberOf Network
   */
  setOptions(options: Options): void;

  /**
   * Set an event listener.
   * Depending on the type of event you get different parameters for the callback function.
   *
   * @param {string} eventName the name of the event, f.e. 'click'
   * @param {(params?: any) => void} callback the callback function that will be raised
   *
   * @memberOf Network
   */
  on(eventName: NetworkEvents, callback: (params?: any) => void): void;

  /**
   * Remove an event listener.
   * The function you supply has to be the exact same as the one you used in the on function.
   * If no function is supplied, all listeners will be removed.
   *
   * @param {string} eventName the name of the event, f.e. 'click'
   * @param {(params?: any) => void} [callback] the exact same callback function that was used when calling 'on'
   *
   * @memberOf Network
   */
  off(eventName: NetworkEvents, callback?: (params?: any) => void): void;

  /**
   * Set an event listener only once.
   * After it has taken place, the event listener will be removed.
   * Depending on the type of event you get different parameters for the callback function.
   *
   * @param {string} eventName the name of the event, f.e. 'click'
   * @param {(params?: any) => void} callback the callback function that will be raised once
   *
   * @memberOf Network
   */
  once(eventName: NetworkEvents, callback: (params?: any) => void): void;

  /**
   * This function converts canvas coordinates to coordinates on the DOM.
   * Input and output are in the form of {x:Number, y:Number} (IPosition interface).
   * The DOM values are relative to the network container.
   *
   * @param {IPosition} position the canvas coordinates
   * @returns {IPosition} the DOM coordinates
   *
   * @memberOf Network
   */
  canvasToDOM(position: Position): Position;

  /**
   * This function converts DOM coordinates to coordinates on the canvas.
   * Input and output are in the form of {x:Number,y:Number} (IPosition interface).
   * The DOM values are relative to the network container.
   *
   * @param {IPosition} position the DOM coordinates
   * @returns {IPosition} the canvas coordinates
   *
   * @memberOf Network
   */
  DOMtoCanvas(position: Position): Position;

  /**
   * Redraw the network.
   *
   * @memberOf Network
   */
  redraw(): void;

  /**
   * Set the size of the canvas.
   * This is automatically done on a window resize.
   *
   * @param {string} width width in a common format, f.e. '100px'
   * @param {string} height height in a common format, f.e. '100px'
   *
   * @memberOf Network
   */
  setSize(width: string, height: string): void;

  /**
   * The joinCondition function is presented with all nodes.
   *
   * @param {IClusterOptions} [options]
   *
   * @memberOf Network
   */
  cluster(options?: ClusterOptions): void;

  /**
   * 	This method looks at the provided node and makes a cluster of it and all it's connected nodes.
   * The behaviour can be customized by proving the options object.
   * All options of this object are explained below.
   * The joinCondition is only presented with the connected nodes.
   *
   * @param {string} nodeId the id of the node
   * @param {IClusterOptions} [options] the cluster options
   *
   * @memberOf Network
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
   * @param {number} [hubsize] optional hubsize
   * @param {IClusterOptions} [options] optional cluster options
   *
   * @memberOf Network
   */
  clusterByHubsize(hubsize?: number, options?: ClusterOptions): void;

  /**
   * This method will cluster all nodes with 1 edge with their respective connected node.
   *
   * @param {IClusterOptions} [options] optional cluster options
   *
   * @memberOf Network
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
   * @param {IdType} nodeId the node id.
   * @returns {IdType[]} an array of nodeIds showing where the node is
   *
   * @memberOf Network
   */
  findNode(nodeId: IdType): IdType[];

  /**
   * Similar to findNode in that it returns all the edge ids that were
   * created from the provided edge during clustering.
   *
   * @param {IdType} baseEdgeId the base edge id
   * @returns {IdType[]} an array of edgeIds
   */
  getClusteredEdges(baseEdgeId: IdType): IdType[];

  /**
   * When a clusteredEdgeId is available, this method will return the original
   * baseEdgeId provided in data.edges ie.
   * After clustering the 'SelectEdge' event is fired but provides only the clustered edge.
   * This method can then be used to return the baseEdgeId.
   *
   * @param {IdType} clusteredEdgeId
   * @returns {IdType}
   */
  getBaseEdge(clusteredEdgeId: IdType): IdType;

  /**
   * Visible edges between clustered nodes are not the same edge as the ones provided
   * in data.edges passed on network creation. With each layer of clustering, copies of
   * the edges between clusters are created and the previous edges are hidden,
   * until the cluster is opened. This method takes an edgeId (ie. a base edgeId from data.edges)
   * and applys the options to it and any edges that were created from it while clustering.
   *
   * @param {IdType} startEdgeId
   * @param {IEdgeOptions} [options]
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
   * @param {IdType} nodeId the node id.
   * @returns {boolean}
   *
   * @memberOf Network
   */
  isCluster(nodeId: IdType): boolean;

  /**
   * Returns an array of all nodeIds of the nodes that
   * would be released if you open the cluster.
   *
   * @param {IdType} clusterNodeId the id of the cluster node
   * @returns {IdType[]}
   *
   * @memberOf Network
   */
  getNodesInCluster(clusterNodeId: IdType): IdType[];

  /**
   * Opens the cluster, releases the contained nodes and edges,
   * removing the cluster node and cluster edges.
   * The options object is optional and currently supports one option,
   * releaseFunction, which is a function that can be used to manually
   * position the nodes after the cluster is opened.
   *
   * @param {IdType} nodeId the node id
   * @param {IOpenClusterOptions} [options] optional open cluster options
   *
   * @memberOf Network
   */
  openCluster(nodeId: IdType, options?: OpenClusterOptions): void;

  /**
   * If you like the layout of your network
   * and would like it to start in the same way next time,
   * ask for the seed using this method and put it in the layout.randomSeed option.
   *
   * @returns {number} the current seed of the network.
   *
   * @memberOf Network
   */
  getSeed(): number;

  /**
   * 	Programatically enable the edit mode.
   * Similar effect to pressing the edit button.
   *
   * @memberOf Network
   */
  enableEditMode(): void;

  /**
   * Programatically disable the edit mode.
   * Similar effect to pressing the close icon (small cross in the corner of the toolbar).
   *
   * @memberOf Network
   */
  disableEditMode(): void;

  /**
   * 	Go into addNode mode. Having edit mode or manipulation enabled is not required.
   * To get out of this mode, call disableEditMode().
   * The callback functions defined in handlerFunctions still apply.
   * To use these methods without having the manipulation GUI, make sure you set enabled to false.
   *
   * @memberOf Network
   */
  addNodeMode(): void;

  /**
   * Edit the selected node.
   * The explaination from addNodeMode applies here as well.
   *
   * @memberOf Network
   */
  editNode(): void;

  /**
   * Go into addEdge mode.
   * The explaination from addNodeMode applies here as well.
   *
   * @memberOf Network
   */
  addEdgeMode(): void;

  /**
   * Go into editEdge mode.
   * The explaination from addNodeMode applies here as well.
   *
   * @memberOf Network
   */
  editEdgeMode(): void;

  /**
   * Delete selected.
   * Having edit mode or manipulation enabled is not required.
   *
   * @memberOf Network
   */
  deleteSelected(): void;

  /**
   * Returns the x y positions in canvas space of the nodes with the supplied nodeIds as an object.
   *
   * Alternative inputs are a String containing a nodeId or nothing.
   * When a String is supplied, the position of the node corresponding to the ID is returned.
   * When nothing is supplied, the positions of all nodes are returned.
   *
   * @param {string[]} nodeIds
   * @returns {{[nodeId: IdType]: IPosition}}
   *
   * @memberOf Network
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
   *
   * @memberOf Network
   */
  storePositions(): void;

  /**
   * You can use this to programatically move a node.
   * The supplied x and y positions have to be in canvas space!
   *
   * @param {IdType} nodeId the node that will be moved
   * @param {number} x new canvas space x position
   * @param {number} y new canvas space y position
   *
   * @memberOf Network
   */
  moveNode(nodeId: IdType, x: number, y: number): void;

  /**
   * Returns a bounding box for the node including label.
   *
   * @param {IdType} nodeId
   * @returns {IBoundingBox}
   *
   * @memberOf Network
   */
  getBoundingBox(nodeId: IdType): BoundingBox;

  /**
   * Returns an array of nodeIds of the all the nodes that are directly connected to this node.
   * If you supply an edgeId, vis will first match the id to nodes.
   * If no match is found, it will search in the edgelist and return an array: [fromId, toId].
   *
   * @param {IdType} nodeOrEdgeId a node or edge id
   * @returns {(IdType[] | {fromId: IdType, toId: IdType}[])}
   *
   * @memberOf Network
   */
  getConnectedNodes(nodeOrEdgeId: IdType): IdType[] | Array<{ fromId: IdType, toId: IdType }>;

  /**
   * Returns an array of edgeIds of the edges connected to this node.
   *
   * @param {IdType} nodeId the node id
   * @returns {IdType[]}
   *
   * @memberOf Network
   */
  getConnectedEdges(nodeId: IdType): IdType[];

  /**
   * Start the physics simulation.
   * This is normally done whenever needed and is only really useful
   * if you stop the simulation yourself and wish to continue it afterwards.
   *
   * @memberOf Network
   */
  startSimulation(): void;

  /**
   * This stops the physics simulation and triggers a stabilized event.
   * Tt can be restarted by dragging a node,
   * altering the dataset or calling startSimulation().
   *
   * @memberOf Network
   */
  stopSimulation(): void;

  /**
   * You can manually call stabilize at any time.
   * All the stabilization options above are used.
   * You can optionally supply the number of iterations it should do.
   *
   * @param {number} [iterations] the number of iterations it should do
   *
   * @memberOf Network
   */
  stabilize(iterations?: number): void;

  /**
   * Returns an object with selected nodes and edges ids.
   *
   * @returns {{ nodes: IdType[], edges: IdType[] }}
   *
   * @memberOf Network
   */
  getSelection(): { nodes: IdType[], edges: IdType[] };

  /**
   * Returns an array of selected node ids like so:
   * [nodeId1, nodeId2, ..].
   *
   * @returns {IdType[]}
   *
   * @memberOf Network
   */
  getSelectedNodes(): IdType[];

  /**
   * Returns an array of selected edge ids like so:
   * [edgeId1, edgeId2, ..].
   *
   * @returns {IdType[]}
   *
   * @memberOf Network
   */
  getSelectedEdges(): IdType[];

  /**
   * Returns a nodeId or undefined.
   * The DOM positions are expected to be in pixels from the top left corner of the canvas.
   *
   * @param {IPosition} position
   * @returns {IdType}
   *
   * @memberOf Network
   */
  getNodeAt(position: Position): IdType;

  /**
   * Returns a edgeId or undefined.
   * The DOM positions are expected to be in pixels from the top left corner of the canvas.
   *
   * @param {IPosition} position
   * @returns {IdType}
   *
   * @memberOf Network
   */
  getEdgeAt(position: Position): IdType;

  /**
   * Selects the nodes corresponding to the id's in the input array.
   * If highlightEdges is true or undefined, the neighbouring edges will also be selected.
   * This method unselects all other objects before selecting its own objects. Does not fire events.
   *
   * @param {IdType[]} nodeIds
   * @param {boolean} [highlightEdges]
   *
   * @memberOf Network
   */
  selectNodes(nodeIds: IdType[], highlightEdges?: boolean): void;

  /**
   * Selects the edges corresponding to the id's in the input array.
   * This method unselects all other objects before selecting its own objects.
   * Does not fire events.
   *
   * @param {IdType[]} edgeIds
   *
   * @memberOf Network
   */
  selectEdges(edgeIds: IdType[]): void;

  /**
   * Sets the selection.
   * You can also pass only nodes or edges in selection object.
   *
   * @param {{ nodes: IdType[], edges: IdType[] }} selection
   * @param {ISelectionOptions} [options]
   *
   * @memberOf Network
   */
  setSelection(selection: { nodes: IdType[], edges: IdType[] }, options?: SelectionOptions): void;

  /**
   * Unselect all objects.
   * Does not fire events.
   *
   * @memberOf Network
   */
  unselectAll(): void;

  /**
   * Returns the current scale of the network.
   * 1.0 is comparible to 100%, 0 is zoomed out infinitely.
   *
   * @returns {number} the current scale of the network
   *
   * @memberOf Network
   */
  getScale(): number;

  /**
   * Returns the current central focus point of the view in the form: { x: {Number}, y: {Number} }
   *
   * @returns {IPosition} the view position;
   *
   * @memberOf Network
   */
  getViewPosition(): Position;

  /**
   * Zooms out so all nodes fit on the canvas.
   *
   * @param {IFitOptions} [options] All options are optional for the fit method
   *
   * @memberOf Network
   */
  fit(options?: FitOptions): void;

  /**
   * You can focus on a node with this function.
   * What that means is the view will lock onto that node, if it is moving, the view will also move accordingly.
   * If the view is dragged by the user, the focus is broken. You can supply options to customize the effect.
   *
   * @param {IdType} nodeId
   * @param {IFocusOptions} [options]
   *
   * @memberOf Network
   */
  focus(nodeId: IdType, options?: FocusOptions): void;

  /**
   * You can animate or move the camera using the moveTo method.
   *
   * @param {IMoveToOptions} options
   *
   * @memberOf Network
   */
  moveTo(options: MoveToOptions): void;

  /**
   * Programatically release the focussed node.
   *
   * @memberOf Network
   */
  releaseNode(): void;

  /**
   * If you use the configurator, you can call this method to get an options object that contains
   * all differences from the default options caused by users interacting with the configurator.
   *
   * @returns {*}
   *
   * @memberOf Network
   */
  getOptionsFromConfigurator(): any;
}

/**
 * Options interface for focus function.
 *
 * @export
 * @interface IFocusOptions
 * @extends {IViewPortOptions}
 */
export interface FocusOptions extends ViewPortOptions {
  /**
   * Locked denotes whether or not the view remains locked to
   * the node once the zoom-in animation is finished.
   * Default value is true.
   *
   * @type {boolean}
   * @memberOf IFocusOptions
   */
  locked?: boolean;
}

/**
 * Base options interface for some viewport functions.
 *
 * @export
 * @interface IViewPortOptions
 */
export interface ViewPortOptions {
  /**
   * The scale is the target zoomlevel.
   * Default value is 1.0.
   *
   * @type {number} the scale.
   * @memberOf IFocusOptions
   */
  scale?: number;

  /**
   * The offset (in DOM units) is how many pixels from the center the view is focussed.
   * Default value is {x:0,y:0}
   *
   * @type {IPosition}
   * @memberOf IFocusOptions
   */
  offset?: Position;

  /**
   * For animation you can either use a Boolean to use it with the default options or
   * disable it or you can define the duration (in milliseconds) and easing function manually.
   *
   * @type {(IAnimationOptions | boolean)}
   * @memberOf IFitOptions
   */
  animation?: AnimationOptions | boolean;
}

/**
 * You will have to define at least a scale, position or offset.
 * Otherwise, there is nothing to move to.
 *
 * @export
 * @interface IMoveToOptions
 * @extends {IViewPortOptions}
 */
export interface MoveToOptions extends ViewPortOptions {
  /**
   * The position (in canvas units!) is the position of the central focus point of the camera.
   *
   * @type {IPosition}
   * @memberOf IMoveToOptions
   */
  position?: Position;
}

/**
 * Animation options interface.
 *
 * @export
 * @interface IAnimationOptions
 */
export interface AnimationOptions {
  /**
   * The duration (in milliseconds).
   *
   * @type {number}
   * @memberOf IAnimationOptions
   */
  duration: number;
  /**
   * The easing function.
   *
   * Available are:
   * linear, easeInQuad, easeOutQuad, easeInOutQuad, easeInCubic,
   * easeOutCubic, easeInOutCubic, easeInQuart, easeOutQuart, easeInOutQuart,
   * easeInQuint, easeOutQuint, easeInOutQuint.
   *
   * @type {string}
   * @memberOf IAnimationOptions
   */
  easingFunction: string;
}

/**
 * Optional options for the fit method.
 *
 * @export
 * @interface IFitOptions
 */
export interface FitOptions {
  /**
   * The nodes can be used to zoom to fit only specific nodes in the view.
   *
   * @type {string[]}
   * @memberOf IFitOptions
   */
  nodes?: string[];

  /**
   * For animation you can either use a Boolean to use it with the default options or
   * disable it or you can define the duration (in milliseconds) and easing function manually.
   *
   * @type {(IAnimationOptions | boolean)}
   * @memberOf IFitOptions
   */
  animation: AnimationOptions | boolean;
}

export interface SelectionOptions {
  unselectAll?: boolean;
  highlightEdges?: boolean;
}

/**
 * These values are in canvas space.
 *
 * @export
 * @interface IBoundingBox
 */
export interface BoundingBox {
  top: number;
  left: number;
  right: number;
  bottom: number;
}

/**
 * Cluster methods options interface.
 *
 * @export
 * @interface IClusterOptions
 */
export interface ClusterOptions {
  /**
   * Optional for all but the cluster method.
   * The cluster module loops over all nodes that are selected to be in the cluster
   * and calls this function with their data as argument. If this function returns true,
   * this node will be added to the cluster. You have access to all options (including the default)
   * as well as any custom fields you may have added to the node to determine whether or not to include it in the cluster.
   *
   * @memberOf IClusterOptions
   */
  joinCondition?(nodeOptions: any): boolean;

  /**
   * Optional.
   * Before creating the new cluster node, this (optional) function will be called with the properties
   * supplied by you (clusterNodeProperties), all contained nodes and all contained edges.
   * You can use this to update the properties of the cluster based on which items it contains.
   * The function should return the properties to create the cluster node.
   *
   * @type {(clusterOptions: any, childNodesOptions: any[], childEdgesOptions: any[])}
   * @memberOf IClusterOptions
   */
  processProperties?(clusterOptions: any, childNodesOptions: any[], childEdgesOptions: any[]): any;

  /**
   * Optional.
   * This is an object containing the options for the cluster node.
   * All options described in the nodes module are allowed.
   * This allows you to style your cluster node any way you want.
   * This is also the style object that is provided in the processProperties function for fine tuning.
   * If undefined, default node options will be used.
   *
   * @type {INodeOptions}
   * @memberOf IClusterOptions
   */
  clusterNodeProperties?: NodeOptions;

  /**
   * Optional.
   * This is an object containing the options for the edges connected to the cluster.
   * All options described in the edges module are allowed.
   * Using this, you can style the edges connecting to the cluster any way you want.
   * If none are provided, the options from the edges that are replaced are used.
   * If undefined, default edge options will be used.
   *
   * @type {IEdgeOptions}
   * @memberOf IClusterOptions
   */
  clusterEdgeProperties?: EdgeOptions;
}

/**
 * Options for the openCluster function of Network.
 *
 * @export
 * @interface IOpenClusterOptions
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
   *
   * @memberOf IOpenClusterOptions
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

export interface Node {
  group?: string;
  id?: IdType;
  label?: string;
  x?: number;
  y?: number;
  fixed?: boolean;
  image?: string;
  shape?: string;
}

export interface Edge {
  from?: IdType;
  to?: IdType;
  id?: IdType;
}

export interface Options {
  autoResize?: boolean;

  width?: string;

  height?: string;

  locale?: string;

  locales?: string[];

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

export interface NodeOptions {
  borderWidth?: number;

  borderWidthSelected?: number;

  brokenImage?: string;

  color?: {
    border?: string,
    background?: string,
    highlight?: string | {
      border?: string,
      background?: string,
    },
    hover?: string | {
      border?: string,
      background?: string,
    }
  };

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
  };

  group?: string;

  hidden?: boolean;

  icon?: {
    face?: string,
    code?: string,
    size?: number,  // 50,
    color?: string,
  };

  id?: string;

  image?: string;

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
    from: boolean | {
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
  };

  from?: number | string;

  hidden?: boolean;

  hoverWidth?: number; // please note, hoverWidth could be also a function. This case is not represented here

  id?: string;

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

  to?: number | string;

  value?: number;

  width?: number;
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
