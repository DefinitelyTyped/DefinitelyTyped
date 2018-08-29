/// <reference types='ojs/ojdvt-base'/>
/// <reference types='ojs/ojdataprovider'/>
declare namespace oj {  
  class ojNBox<K, D> extends dvtBaseComponent<ojNBoxSettableProperties<K, D>> {
    animationOnDataChange: 'auto'|'none';
    animationOnDisplay: 'auto'|'none';
    as: string;
    cellContent: 'counts'|'auto';
    cellMaximize: 'off'|'on';
    cells: Promise<Array<oj.ojNBox.Cell>>|null;
    columns: Promise<Array<oj.ojNBox.Column>>|null;
    columnsTitle: string;
    countLabel: ((context: oj.ojNBox.CountLabelContext) => (string|null));
    data: oj.DataProvider<K, D>|null;
    groupAttributes: 'color'|'indicatorColor'|'indicatorIconColor'|'indicatorIconPattern'|'indicatorIconShape';
    groupBehavior: 'acrossCells'|'none'|'withinCell';
    hiddenCategories: Array<string>;
    highlightMatch: 'any'|'all';
    highlightedCategories: Array<string>;
    hoverBehavior: 'dim'|'none';
    labelTruncation: 'ifRequired'|'on';
    maximizedColumn: string;
    maximizedRow: string;
    otherColor: string;
    otherThreshold: number;
    rows: Promise<Array<oj.ojNBox.Row>>|null;
    rowsTitle: string;
    selection: Array<K>;
    selectionMode: 'none'|'single'|'multiple';
    styleDefaults: {animationDuration: number, cellDefaults: {labelHalign: 'center'|'end'|'start', labelStyle: object, maximizedSvgStyle: object, minimizedSvgStyle: object, showCount: 'on'|'off'|'auto', svgStyle: object}, columnLabelStyle: object, columnsTitleStyle: object, hoverBehaviorDelay: number, nodeDefaults: {borderColor: string, borderWidth: number, color: string, iconDefaults: {borderColor: string, borderRadius: string, borderWidth: number, color: string, height: number, opacity: number, pattern: 'smallChecker'|'smallCrosshatch'|'smallDiagonalLeft'|'smallDiagonalRight'|'smallDiamond'|'smallTriangle'|'largeChecker'|'largeCrosshatch'|'largeDiagonalLeft'|'largeDiagonalRight'|'largeDiamond'|'largeTriangle'|'none', shape: 'circle'|'ellipse'|'square'|'plus'|'diamond'|'triangleUp'|'triangleDown'|'human'|'rectangle'|'star', source: string, width: number}, indicatorColor: string, indicatorIconDefaults: {borderColor: string, borderRadius: string, borderWidth: number, color: string, height: number, opacity: number, pattern: 'smallChecker'|'smallCrosshatch'|'smallDiagonalLeft'|'smallDiagonalRight'|'smallDiamond'|'smallTriangle'|'largeChecker'|'largeCrosshatch'|'largeDiagonalLeft'|'largeDiagonalRight'|'largeDiamond'|'largeTriangle'|'none', shape: 'circle'|'ellipse'|'square'|'plus'|'diamond'|'triangleUp'|'triangleDown'|'human'|'rectangle'|'star', source: string, width: number}, labelStyle: object, secondaryLabelStyle: object}, rowLabelStyle: object, rowsTitleStyle: object};
    tooltip: {renderer: ((context: oj.ojNBox.TooltipContext<K>) => ({insert: Element|string}|{preventDefault: boolean}))|null};
    touchResponse: 'touchStart'|'auto';
    translations: {componentName?: string, highlightedCount?: string, labelAdditionalData?: string, labelAndValue?: string, labelClearSelection?: string, labelCountWithTotal?: string, labelDataVisualization?: string, labelGroup?: string, labelInvalidData?: string, labelNoData?: string, labelOther?: string, labelSize?: string, stateCollapsed?: string, stateDrillable?: string, stateExpanded?: string, stateHidden?: string, stateIsolated?: string, stateMaximized?: string, stateMinimized?: string, stateSelected?: string, stateUnselected?: string, stateVisible?: string};
    onAnimationOnDataChangeChanged: (event: CustomEvent)=> any;
    onAnimationOnDisplayChanged: (event: CustomEvent)=> any;
    onAsChanged: (event: CustomEvent)=> any;
    onCellContentChanged: (event: CustomEvent)=> any;
    onCellMaximizeChanged: (event: CustomEvent)=> any;
    onCellsChanged: (event: CustomEvent)=> any;
    onColumnsChanged: (event: CustomEvent)=> any;
    onColumnsTitleChanged: (event: CustomEvent)=> any;
    onCountLabelChanged: (event: CustomEvent)=> any;
    onDataChanged: (event: CustomEvent)=> any;
    onGroupAttributesChanged: (event: CustomEvent)=> any;
    onGroupBehaviorChanged: (event: CustomEvent)=> any;
    onHiddenCategoriesChanged: (event: CustomEvent)=> any;
    onHighlightMatchChanged: (event: CustomEvent)=> any;
    onHighlightedCategoriesChanged: (event: CustomEvent)=> any;
    onHoverBehaviorChanged: (event: CustomEvent)=> any;
    onLabelTruncationChanged: (event: CustomEvent)=> any;
    onMaximizedColumnChanged: (event: CustomEvent)=> any;
    onMaximizedRowChanged: (event: CustomEvent)=> any;
    onOtherColorChanged: (event: CustomEvent)=> any;
    onOtherThresholdChanged: (event: CustomEvent)=> any;
    onRowsChanged: (event: CustomEvent)=> any;
    onRowsTitleChanged: (event: CustomEvent)=> any;
    onSelectionChanged: (event: CustomEvent)=> any;
    onSelectionModeChanged: (event: CustomEvent)=> any;
    onStyleDefaultsChanged: (event: CustomEvent)=> any;
    onTooltipChanged: (event: CustomEvent)=> any;
    onTouchResponseChanged: (event: CustomEvent)=> any;

    addEventListener<T extends keyof ojNBoxEventMap>(type: T, listener: (this: HTMLElement, ev: ojNBoxEventMap[T]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, useCapture?: boolean): void;
    
    getCell(rowValue: string, columnValue: string): object|null;
    getColumn(columnValue: string): object|null;
    getColumnCount(): number;
    getColumnsTitle(): string;
    getContextByNode(node: Element): object|null;
    getDialog(): object|null;
    getGroupBehavior(): string;
    getGroupNode(groupCategory: string): object|null;
    getRow(rowValue: string): object|null;
    getRowCount(): number;
    getRowsTitle(): string;
  }
  interface ojNBoxEventMap extends oj.dvtBaseComponentEventMap {
    'animationOnDataChangeChanged': CustomEvent;
    'animationOnDisplayChanged': CustomEvent;
    'asChanged': CustomEvent;
    'cellContentChanged': CustomEvent;
    'cellMaximizeChanged': CustomEvent;
    'cellsChanged': CustomEvent;
    'columnsChanged': CustomEvent;
    'columnsTitleChanged': CustomEvent;
    'countLabelChanged': CustomEvent;
    'dataChanged': CustomEvent;
    'groupAttributesChanged': CustomEvent;
    'groupBehaviorChanged': CustomEvent;
    'hiddenCategoriesChanged': CustomEvent;
    'highlightMatchChanged': CustomEvent;
    'highlightedCategoriesChanged': CustomEvent;
    'hoverBehaviorChanged': CustomEvent;
    'labelTruncationChanged': CustomEvent;
    'maximizedColumnChanged': CustomEvent;
    'maximizedRowChanged': CustomEvent;
    'otherColorChanged': CustomEvent;
    'otherThresholdChanged': CustomEvent;
    'rowsChanged': CustomEvent;
    'rowsTitleChanged': CustomEvent;
    'selectionChanged': CustomEvent;
    'selectionModeChanged': CustomEvent;
    'styleDefaultsChanged': CustomEvent;
    'tooltipChanged': CustomEvent;
    'touchResponseChanged': CustomEvent;
  }
  interface ojNBoxSettableProperties<K, D> extends dvtBaseComponentSettableProperties {
    animationOnDataChange: 'auto'|'none';
    animationOnDisplay: 'auto'|'none';
    as: string;
    cellContent: 'counts'|'auto';
    cellMaximize: 'off'|'on';
    cells: Array<oj.ojNBox.Cell>|Promise<Array<oj.ojNBox.Cell>>|null;
    columns: Array<oj.ojNBox.Column>|Promise<Array<oj.ojNBox.Column>>|null;
    columnsTitle: string;
    countLabel: ((context: oj.ojNBox.CountLabelContext) => (string|null));
    data: oj.DataProvider<K, D>|null;
    groupAttributes: 'color'|'indicatorColor'|'indicatorIconColor'|'indicatorIconPattern'|'indicatorIconShape';
    groupBehavior: 'acrossCells'|'none'|'withinCell';
    hiddenCategories: Array<string>;
    highlightMatch: 'any'|'all';
    highlightedCategories: Array<string>;
    hoverBehavior: 'dim'|'none';
    labelTruncation: 'ifRequired'|'on';
    maximizedColumn: string;
    maximizedRow: string;
    otherColor: string;
    otherThreshold: number;
    rows: Array<oj.ojNBox.Row>|Promise<Array<oj.ojNBox.Row>>|null;
    rowsTitle: string;
    selection: Array<K>;
    selectionMode: 'none'|'single'|'multiple';
    styleDefaults: {animationDuration: number, cellDefaults: {labelHalign: 'center'|'end'|'start', labelStyle: object, maximizedSvgStyle: object, minimizedSvgStyle: object, showCount: 'on'|'off'|'auto', svgStyle: object}, columnLabelStyle: object, columnsTitleStyle: object, hoverBehaviorDelay: number, nodeDefaults: {borderColor: string, borderWidth: number, color: string, iconDefaults: {borderColor: string, borderRadius: string, borderWidth: number, color: string, height: number, opacity: number, pattern: 'smallChecker'|'smallCrosshatch'|'smallDiagonalLeft'|'smallDiagonalRight'|'smallDiamond'|'smallTriangle'|'largeChecker'|'largeCrosshatch'|'largeDiagonalLeft'|'largeDiagonalRight'|'largeDiamond'|'largeTriangle'|'none', shape: 'circle'|'ellipse'|'square'|'plus'|'diamond'|'triangleUp'|'triangleDown'|'human'|'rectangle'|'star', source: string, width: number}, indicatorColor: string, indicatorIconDefaults: {borderColor: string, borderRadius: string, borderWidth: number, color: string, height: number, opacity: number, pattern: 'smallChecker'|'smallCrosshatch'|'smallDiagonalLeft'|'smallDiagonalRight'|'smallDiamond'|'smallTriangle'|'largeChecker'|'largeCrosshatch'|'largeDiagonalLeft'|'largeDiagonalRight'|'largeDiamond'|'largeTriangle'|'none', shape: 'circle'|'ellipse'|'square'|'plus'|'diamond'|'triangleUp'|'triangleDown'|'human'|'rectangle'|'star', source: string, width: number}, labelStyle: object, secondaryLabelStyle: object}, rowLabelStyle: object, rowsTitleStyle: object};
    tooltip: {renderer: ((context: oj.ojNBox.TooltipContext<K>) => ({insert: Element|string}|{preventDefault: boolean}))|null};
    touchResponse: 'touchStart'|'auto';
    translations: {componentName?: string, highlightedCount?: string, labelAdditionalData?: string, labelAndValue?: string, labelClearSelection?: string, labelCountWithTotal?: string, labelDataVisualization?: string, labelGroup?: string, labelInvalidData?: string, labelNoData?: string, labelOther?: string, labelSize?: string, stateCollapsed?: string, stateDrillable?: string, stateExpanded?: string, stateHidden?: string, stateIsolated?: string, stateMaximized?: string, stateMinimized?: string, stateSelected?: string, stateUnselected?: string, stateVisible?: string}; 
  }
  namespace ojNBox {
    type Cell =
    {
      label?: string, column: string, labelHalign?: string, labelStyle?: object, svgClassName?: string, svgStyle?: object, maximizedSvgStyle?: object, maximizedSvgClassName?: string, minimizedSvgStyle?: object, minimizedSvgClassName?: string, row: string, showCount?: 'on'|'off'|'auto'|string, shortDesc?: string
    }
  }
  namespace ojNBox {
    type Column =
    {
      id: string, label?: string, labelStyle?: object
    }
  }
  namespace ojNBox {
    type CountLabelContext =
    {
      row: string, column: string, nodeCount: number, totalNodeCount: number, highlightedNodeCount: number
    }
  }
  namespace ojNBox {
    type Row =
    {
      id: string, label?: string, labelStyle?: object
    }
  }
  namespace ojNBox {
    type TooltipContext<K> =
    {
      parentElement: Element, id: K, label: string, secondaryLabel: string, row: string, column: string, color: string, indicatorColor: string, componentElement: Element
    }
  }

}
declare namespace oj {  
  class ojNBoxNode extends JetElement<ojNBoxNodeSettableProperties> {
    borderColor: string;
    borderWidth: number;
    categories: Array<string>;
    color?: string;
    column: string;
    groupCategory?: string;
    icon?: {borderColor?: string, borderRadius?: string, borderWidth: number, color?: string, height?: number|null, opacity: number, pattern?: 'largeChecker'|'largeCrosshatch'|'largeDiagonalLeft'|'largeDiagonalRight'|'largeDiamond'|'largeTriangle'|'none'|'mallChecker'|'smallCrosshatch'|'smallDiagonalLeft'|'smallDiagonalRight'|'smallDiamond'|'smallTriangle', shape?: 'circle'|'diamond'|'ellipse'|'human'|'plus'|'rectangle'|'square'|'star'|'triangleDown'|'triangleUp'|string, source?: string, svgClassName: string, svgStyle?: object, width?: number|null};
    indicatorColor?: string;
    indicatorIcon?: {borderColor?: string, borderRadius?: string, borderWidth: number, color?: string, height?: number|null, opacity: number, pattern?: 'largeChecker'|'largeCrosshatch'|'largeDiagonalLeft'|'largeDiagonalRight'|'largeDiamond'|'largeTriangle'|'none'|'smallChecker'|'smallCrosshatch'|'smallDiagonalLeft'|'smallDiagonalRight'|'smallDiamond'|'smallTriangle', shape?: 'circle'|'diamond'|'ellipse'|'human'|'plus'|'rectangle'|'square'|'star'|'triangleDown'|'triangleUp'|string, source?: string|null, svgClassName: string, svgStyle?: object|null, width?: number|null};
    label: string;
    row: string;
    secondaryLabel: string;
    shortDesc: string;
    svgClassName: string;
    svgStyle: object|null;
    xPercentage?: number|null;
    yPercentage?: number|null;
    onBorderColorChanged: (event: CustomEvent)=> any;
    onBorderWidthChanged: (event: CustomEvent)=> any;
    onCategoriesChanged: (event: CustomEvent)=> any;
    onColorChanged: (event: CustomEvent)=> any;
    onColumnChanged: (event: CustomEvent)=> any;
    onGroupCategoryChanged: (event: CustomEvent)=> any;
    onIconChanged: (event: CustomEvent)=> any;
    onIndicatorColorChanged: (event: CustomEvent)=> any;
    onIndicatorIconChanged: (event: CustomEvent)=> any;
    onLabelChanged: (event: CustomEvent)=> any;
    onRowChanged: (event: CustomEvent)=> any;
    onSecondaryLabelChanged: (event: CustomEvent)=> any;
    onShortDescChanged: (event: CustomEvent)=> any;
    onSvgClassNameChanged: (event: CustomEvent)=> any;
    onSvgStyleChanged: (event: CustomEvent)=> any;
    onXPercentageChanged: (event: CustomEvent)=> any;
    onYPercentageChanged: (event: CustomEvent)=> any;

    addEventListener<T extends keyof ojNBoxNodeEventMap>(type: T, listener: (this: HTMLElement, ev: ojNBoxNodeEventMap[T]) => any, useCapture?: boolean): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, useCapture?: boolean): void;
    
  }
  interface ojNBoxNodeEventMap extends oj.JetElementEventMap {
    'borderColorChanged': CustomEvent;
    'borderWidthChanged': CustomEvent;
    'categoriesChanged': CustomEvent;
    'colorChanged': CustomEvent;
    'columnChanged': CustomEvent;
    'groupCategoryChanged': CustomEvent;
    'iconChanged': CustomEvent;
    'indicatorColorChanged': CustomEvent;
    'indicatorIconChanged': CustomEvent;
    'labelChanged': CustomEvent;
    'rowChanged': CustomEvent;
    'secondaryLabelChanged': CustomEvent;
    'shortDescChanged': CustomEvent;
    'svgClassNameChanged': CustomEvent;
    'svgStyleChanged': CustomEvent;
    'xPercentageChanged': CustomEvent;
    'yPercentageChanged': CustomEvent;
  }
  interface ojNBoxNodeSettableProperties extends JetSettableProperties {
    borderColor: string;
    borderWidth: number;
    categories: Array<string>;
    color?: string;
    column: string;
    groupCategory?: string;
    icon?: {borderColor?: string, borderRadius?: string, borderWidth: number, color?: string, height?: number|null, opacity: number, pattern?: 'largeChecker'|'largeCrosshatch'|'largeDiagonalLeft'|'largeDiagonalRight'|'largeDiamond'|'largeTriangle'|'none'|'mallChecker'|'smallCrosshatch'|'smallDiagonalLeft'|'smallDiagonalRight'|'smallDiamond'|'smallTriangle', shape?: 'circle'|'diamond'|'ellipse'|'human'|'plus'|'rectangle'|'square'|'star'|'triangleDown'|'triangleUp'|string, source?: string, svgClassName: string, svgStyle?: object, width?: number|null};
    indicatorColor?: string;
    indicatorIcon?: {borderColor?: string, borderRadius?: string, borderWidth: number, color?: string, height?: number|null, opacity: number, pattern?: 'largeChecker'|'largeCrosshatch'|'largeDiagonalLeft'|'largeDiagonalRight'|'largeDiamond'|'largeTriangle'|'none'|'smallChecker'|'smallCrosshatch'|'smallDiagonalLeft'|'smallDiagonalRight'|'smallDiamond'|'smallTriangle', shape?: 'circle'|'diamond'|'ellipse'|'human'|'plus'|'rectangle'|'square'|'star'|'triangleDown'|'triangleUp'|string, source?: string|null, svgClassName: string, svgStyle?: object|null, width?: number|null};
    label: string;
    row: string;
    secondaryLabel: string;
    shortDesc: string;
    svgClassName: string;
    svgStyle: object|null;
    xPercentage?: number|null;
    yPercentage?: number|null; 
  }

}
