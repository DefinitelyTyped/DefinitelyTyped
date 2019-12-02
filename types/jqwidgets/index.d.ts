/*
   jQWidgets TypeScript definitions

   Copyright (c) 2011-2019 jQWidgets.
   License: http://jqwidgets.com/license/
*/

interface JQueryStatic {
    jqx: any;
}

declare var generatedata: any;
declare var jqx: any;

declare module jqwidgets {
    export function createInstance(selector: string, widgetName: string, params?: any): any;
    
    export class widget
    {
        constructor(selector: string, options?: Object);
        refresh(): void;
        destroy(): void;
        getInstance(): any;
        addEventHandler(event: string, funcEventHandler: (any: any) => void): void;
        removeEventHandler(event: string): void;
        setOptions(params?: any): any;
    }


    export interface BarGaugeLabelsFont {
        // BarGaugeLabelsFont properties
        color?: string;
        size?: number | string;
        family?: string;
    }// BarGaugeLabelsFont

    export interface BarGaugeLabels {
        // BarGaugeLabels properties
        connectorColor?: string;
        connectorWidth?: number;
        font?: BarGaugeLabelsFont;
        formatFunction?: (value: number, index?: number) => string;
        indent?: number;
        precision?: number;
        visible?: boolean;
    }// BarGaugeLabels

    export interface BarGaugeTextFont {
        // BarGaugeTextFont properties
        color?: string;
        family?: string;
        opacity?: number;
        size?: number | string;
        weight?: number;
    }// BarGaugeTextFont

    export interface BarGaugeTitleMargin {
        // BarGaugeTitleMargin properties
        bottom?: number;
        left?: number;
        right?: number;
        top?: number;
    }// BarGaugeTitleMargin

    export interface BarGaugeTitleSubtitle {
        // BarGaugeTitleSubtitle properties
        text?: string;
        font?: BarGaugeTextFont;
    }// BarGaugeTitleSubtitle

    export interface BarGaugeTitle {
        // BarGaugeTitle properties
        text?: string;
        font?: BarGaugeTextFont;
        horizontalAlignment?: string;
        margin?: BarGaugeTitleMargin;
        subtitle?: BarGaugeTitleSubtitle;
        verticalAlignment?: string;
    }// BarGaugeTitle

    export interface BarGaugeTooltip {
        // BarGaugeTooltip properties
        classname?: string;
        formatFunction?: (value: string, index?: number, color?: string) => string;
        visible?: boolean;
        precision?: number;
    }// BarGaugeTooltip

    export interface BarGaugeCustomColorScheme {
        // BarGaugeCustomColorScheme properties
        name: string;
        colors: Array<string>;
    }// BarGaugeCustomColorScheme

    export interface BarGaugeOptions {
        // BarGaugeOptions properties
        animationDuration?: number;
        backgroundColor?: string;
        barSpacing?: number;
        baseValue?: number;
        colorScheme?: string;
        customColorScheme?: BarGaugeCustomColorScheme;
        disabled?: boolean;
        endAngle?: number;
        formatFunction?: (value: number, index?: number, color?: string) => string;
        height?: string | number;
        labels?: BarGaugeLabels;
        max?: number | string;
        min?: number;
        relativeInnerRadius?: number | string;
        rendered?: () => void;
        startAngle?: number;
        title?: BarGaugeTitle;
        tooltip?: BarGaugeTooltip;
        useGradient?: boolean;
        values?: Array<number>;
        width?: string | number;
    }// BarGaugeOptions

    export interface jqxBarGauge extends widget, BarGaugeOptions {

        // jqxBarGauge functions
        refresh(): void;
        render(): void;
        val(value: Array<number>): Array<number>;
    }// jqxBarGauge

    export interface BulletChartLabelsFormatFunction {
        // BulletChartLabelsFormatFunction properties
        value?: string;
        position?: string;
    }// BulletChartLabelsFormatFunction

    export interface BulletChartTooltipFormatFunction {
        // BulletChartTooltipFormatFunction properties
        pointerValue?: number;
        targetValue?: number;
    }// BulletChartTooltipFormatFunction

    export interface BulletChartPointer {
        // BulletChartPointer properties
        value?: number;
        label?: string;
        size?: number | string;
        color?: string;
    }// BulletChartPointer

    export interface BulletChartRanges {
        // BulletChartRanges properties
        startValue: number;
        endValue: number;
        opacity?: number;
        color?: string;
    }// BulletChartRanges

    export interface BulletChartTicks {
        // BulletChartTicks properties
        position?: string;
        interval?: number;
        size?: number | string;
    }// BulletChartTicks

    export interface BulletChartOptions {
        // BulletChartOptions properties
        animationDuration?: number;
        barSize?: number | string;
        description?: string;
        disabled?: boolean;
        height?: string | number;
        labelsFormat?: string;
        labelsFormatFunction?: (value?: BulletChartLabelsFormatFunction['value'], position?: BulletChartLabelsFormatFunction['position']) => any;
        orientation?: string;
        pointer?: BulletChartPointer;
        rtl?: boolean;
        ranges?: Array<BulletChartRanges>;
        showTooltip?: boolean;
        target?: BulletChartPointer;
        ticks?: BulletChartTicks;
        title?: string;
        tooltipFormatFunction?: (pointerValue?: BulletChartTooltipFormatFunction['pointerValue'], targetValue?: BulletChartTooltipFormatFunction['targetValue']) => string;
        width?: string | number;
    }// BulletChartOptions

    export interface jqxBulletChart extends widget, BulletChartOptions {

        // jqxBulletChart functions
        destroy(): void;
        render(): void;
        refresh(): void;
        val(value: number): number;
    }// jqxBulletChart

    export interface ButtonGroupOptions {
        // ButtonGroupOptions properties
        disabled?: boolean;
        enableHover?: boolean;
        mode?: string;
        rtl?: boolean;
        template?: string;
        theme?: string;
    }// ButtonGroupOptions

    export interface jqxButtonGroup extends widget, ButtonGroupOptions {

        // jqxButtonGroup functions
        disableAt(index: number): void;
        disable(): void;
        destroy(): void;
        enable(): void;
        enableAt(index: number): void;
        getSelection(): any;
        render(): void;
        setSelection(index: number): void;
    }// jqxButtonGroup

    export interface ButtonOptions {
        // ButtonOptions properties
        disabled?: boolean;
        height?: number | string;
        imgSrc?: string;
        imgWidth?: number | string;
        imgHeight?: number | string;
        imgPosition?: string;
        roundedCorners?: string;
        rtl?: boolean;
        enableDefault?: boolean;
        cursor?: boolean;
        textPosition?: string;
        textImageRelation?: string;
        theme?: string;
        template?: string;
        width?: number | string;
        value?: string;
    }// ButtonOptions

    export interface jqxButton extends widget, ButtonOptions {

        // jqxButton functions
        destroy(): void;
        focus(): void;
        render(): void;
        val(value: string): string;
    }// jqxButton

    export interface CalendarOptions {
        // CalendarOptions properties
        backText?: string;
        columnHeaderHeight?: number;
        clearString?: string;
        culture?: string;
        dayNameFormat?: string;
        disabled?: boolean;
        enableWeekend?: boolean;
        enableViews?: boolean;
        enableOtherMonthDays?: boolean;
        enableFastNavigation?: boolean;
        enableHover?: boolean;
        enableAutoNavigation?: boolean;
        enableTooltips?: boolean;
        forwardText?: string;
        firstDayOfWeek?: number;
        height?: string | number;
        min?: any;
        max?: any;
        navigationDelay?: number;
        rowHeaderWidth?: number | string;
        readOnly?: boolean;
        restrictedDates?: Array<Date>;
        rtl?: boolean;
        stepMonths?: number;
        showWeekNumbers?: boolean;
        showDayNames?: boolean;
        showOtherMonthDays?: boolean;
        showFooter?: boolean;
        selectionMode?: string;
        specialDates?: Array<any>;
        theme?: string;
        titleHeight?: number;
        titleFormat?: string;
        todayString?: string;
        value?: Date;
        width?: string | number;
    }// CalendarOptions

    export interface jqxCalendar extends widget, CalendarOptions {

        // jqxCalendar functions
        clear(): void;
        destroy(): void;
        focus(): void;
        addSpecialDate(date: any, specialDateClass: any, text: any): void;
        getMinDate(): any;
        getMaxDate(): any;
        getDate(): any;
        getRange(): any;
        navigateForward(months: number): void;
        navigateBackward(months: number): void;
        render(): void;
        refresh(): void;
        setMinDate(date: any): void;
        setMaxDate(date: any): void;
        setDate(date: any): void;
        setRange(date: any, date2: any): void;
        today(): void;
        val(value: Date | string, value2: Date | string): Date | string;
    }// jqxCalendar

    export interface ChartDraw {
        // ChartDraw properties
        renderer?: any;
        rect?: any;
    }// ChartDraw

    export interface ChartDrawBefore {
        // ChartDrawBefore properties
        renderer?: any;
        rect?: any;
    }// ChartDrawBefore

    export interface ChartOffset {
        // ChartOffset properties
        x: number;
        y: number;
    }// ChartOffset

    export interface ChartRect {
        // ChartRect properties
        x: number;
        y: number;
        width: number | string;
        height: number | string;
    }// ChartRect

    export interface ChartPadding {
        // ChartPadding properties
        left: number;
        right: number;
        top: number;
        bottom: number;
    }// ChartPadding

    export interface ChartTickMarks {
        // ChartTickMarks properties
        visible?: any;
        color?: string;
        step?: number;
        dashStyle?: string;
        lineWidth?: number;
        size?: number | string;
        interval?: any;
        custom?: Array<ChartCustomOffset>;
    }// ChartTickMarks

    export interface ChartGridLines {
        // ChartGridLines properties
        visible?: any;
        color?: string;
        step?: number;
        dashStyle?: string;
        lineWidth?: number;
        interval?: any;
        custom?: Array<ChartCustomOffset>;
    }// ChartGridLines

    export interface ChartAxisLine {
        // ChartAxisLine properties
        visible?: any;
        color?: string;
        dashStyle?: string;
        lineWidth?: number;
    }// ChartAxisLine

    export interface ChartCustomOffset {
        // ChartCustomOffset properties
        value?: any;
        offset?: number;
    }// ChartCustomOffset

    export interface ChartAxisLabels {
        // ChartAxisLabels properties
        visible?: any;
        class?: string;
        step?: number;
        angle?: number;
        rotationPoint?: string;
        horizontalAlignment?: string;
        verticalAlignment?: string;
        offset?: ChartOffset;
        custom?: Array<ChartCustomOffset>;
        formatSettings?: ChartFormatSettings;
        formatFunction?: (value: any, itemIndex?: number, serieIndex?: number, groupIndex?: number, xAxisValue?: any, xAxis?: ChartXAxis) => string;
        autoRotate?: boolean;
    }// ChartAxisLabels

    export interface ChartFormatSettings {
        // ChartFormatSettings properties
        prefix?: string;
        sufix?: string;
        decimalSeparator?: string;
        thousandsSeparator?: string;
        decimalPlaces?: number;
        negativeWithBrackets?: boolean;
        dateFormat?: string;
    }// ChartFormatSettings

    export interface ChartSeriesLabels {
        // ChartSeriesLabels properties
        visible?: boolean;
        class?: string;
        angle?: number;
        horizontalAlignment?: string;
        verticalAlignment?: string;
        offset?: ChartOffset;
        backgroundColor?: string;
        backgroundOpacity?: number;
        borderColor?: string;
        borderOpacity?: number;
        padding?: ChartPadding;
        linesEnabled?: boolean;
        linesAngles?: boolean;
        autoRotate?: boolean;
        radius?: any;
    }// ChartSeriesLabels

    export interface ChartAxisTitle {
        // ChartAxisTitle properties
        visible?: boolean;
        text?: string;
        class?: string;
        horizontalAlignment?: string;
        verticalAlignment?: string;
        angle?: number;
        rotationPoint?: string;
        offset?: ChartOffset;
    }// ChartAxisTitle

    export interface ChartColorBand {
        // ChartColorBand properties
        minValue?: number;
        maxValue?: number;
        fillColor?: string;
        opacity?: number;
        lineColor?: string;
        lineWidth?: number;
        dashStyle?: string;
    }// ChartColorBand

    export interface ChartXAxis {
        // ChartXAxis properties
        visible?: boolean;
        unitInterval?: number;
        dataField?: string;
        displayText?: string;
        type?: string;
        baseUnit?: string;
        valuesOnTicks?: boolean;
        dateFormat?: string;
        axisSize?: number | string;
        customDraw?: boolean;
        flip?: boolean;
        position?: string;
        padding?: ChartPadding;
        title?: ChartAxisTitle;
        tickMarks?: ChartTickMarks;
        gridLines?: ChartGridLines;
        line?: ChartAxisLine;
        labels?: ChartAxisLabels;
        logarithmicScale?: boolean;
        logarithmicScaleBase?: number;
        minValue?: any;
        maxValue?: any;
        bands?: Array<ChartColorBand>;
        alternatingBackgroundColor?: string;
        alternatingBackgroundColor2?: string;
        alternatingBackgroundOpacity?: number;
        formatSettings?: any;
        formatFunction?: any;
        toolTipFormatSettings?: ChartFormatSettings;
        toolTipFormatFunction?: any;
        rangeSelector?: any;
        textRotationAngle?: number;
    }// ChartXAxis

    export interface ChartSerie {
        // ChartSerie properties
        dataField?: string;
        displayText?: string;
        dataFieldFrom?: string;
        displayTextFrom?: string;
        dataFieldTo?: string;
        displayTextTo?: string;
        dataFieldOpen?: string;
        displayTextOpen?: string;
        dataFieldLow?: string;
        displayTextLow?: string;
        dataFieldHigh?: string;
        displayTextHigh?: string;
        dataFieldClose?: string;
        displayTextClose?: string;
        lineWidth?: number;
        dashStyle?: string;
        symbolType?: string;
        symbolSize?: number;
        symbolSizeSelected?: number;
        emptyPointsDisplay?: string;
        linesUnselectMode?: string;
        opacity?: number;
        useGradientColors?: boolean;
        greyScale?: boolean;
        lineColor?: string;
        lineColorSelected?: string;
        fillColor?: string;
        fillColorSelected?: string;
        lineColorSymbol?: string;
        lineColorSymbolSelected?: string;
        fillColorSymbol?: string;
        fillColorSymbolSelected?: string;
        fillColorAlt?: string;
        fillColorAltSelected?: string;
        colorFunction?: (dataValue: any, itemIndex?: number, serie?: any, group?: any) => any;
        labels?: ChartSeriesLabels;
        formatSettings?: ChartFormatSettings;
        formatFunction?: (value: any, itemIndex?: number, serieIndex?: number, groupIndex?: number, xAxisValue?: any, xAxis?: ChartXAxis) => string;
        legendFormatSettings?: ChartFormatSettings;
        legendFormatFunction?: (value: any, itemIndex?: number, serieIndex?: number, groupIndex?: number, xAxisValue?: any, xAxis?: ChartXAxis) => string;
        legendLineColor?: string;
        legnedFillColor?: string;
        toolTipFormatSettings?: ChartFormatSettings;
        toolTipFormatFunction?: (value: any, itemIndex?: number, serieIndex?: number, groupIndex?: number, xAxisValue?: any, xAxis?: ChartXAxis) => string;
        toolTipLineColor?: string;
        toolTipBackground?: string;
        toolTipClass?: string;
        radius?: any;
        innerRadius?: any;
        startAngle?: number;
        endAngle?: number;
        offsetX?: number;
        offsetY?: number;
        hiddenPointsDisplay?: boolean;
        enableSeriesToggle?: boolean;
        enableSelection?: boolean;
        radiusDataField?: string;
        minRadius?: any;
        maxRadius?: any;
        summary?: string;
        labelRadius?: any;
        initialAngle?: number;
        centerOffset?: number;
    }// ChartSerie

    export interface ChartValueAxis {
        // ChartValueAxis properties
        visible?: boolean;
        flip?: boolean;
        position?: string;
        axisSize?: any;
        minValue?: number;
        maxValue?: number;
        baselineValue?: number;
        logarithmicScale?: boolean;
        logarithmicScaleBase?: number;
        valuesOnTicks?: boolean;
        unitInterval?: number;
        title?: ChartAxisTitle;
        labels?: ChartAxisLabels;
        gridLines?: ChartGridLines;
        tickMarks?: ChartTickMarks;
        padding?: ChartPadding;
        bands?: Array<ChartColorBand>;
        alternatingBackgroundColor?: string;
        alternatingBackgroundColor2?: string;
        alternatingBackgroundOpacity?: number;
        toolTipFormatSettings?: ChartFormatSettings;
        formatFunction?: any;
    }// ChartValueAxis

    export interface ChartSeriesGroup {
        // ChartSeriesGroup properties
        type: string;
        orientation?: string;
        valueAxis?: ChartValueAxis;
        series: Array<ChartSerie>;
        formatSettings?: ChartFormatSettings;
        toolTipFormatFunction?: any;
        columnsGapPercent?: number;
        seriesGapPercent?: number;
        columnsMinWidth?: number;
        columnsMaxWidth?: number;
        columnsTopWidthPercent?: number;
        columnsBottomWidthPercent?: number;
        skipOverlappingPoints?: boolean;
        polar?: boolean;
        spider?: boolean;
        radius?: any;
        startAngle?: number;
        endAngle?: number;
        offsetX?: number;
        offsetY?: number;
        source?: any;
        xAxis?: ChartXAxis;
        colorScheme?: string;
        showLabels?: boolean;
        alignEndPointsWithIntervals?: boolean;
        annotations?: any;
    }// ChartSeriesGroup

    export interface ChartLegendLayout {
        // ChartLegendLayout properties
        left: number;
        top: number;
        width: number | string;
        height: number | string;
        flow: string;
    }// ChartLegendLayout

    export interface ChartOptions {
        // ChartOptions properties
        title?: string;
        description?: string;
        source?: any;
        showBorderLine?: boolean;
        borderLineColor?: string;
        borderLineWidth?: number;
        backgroundColor?: string;
        backgroundImage?: string;
        showLegend?: boolean;
        legendLayout?: ChartLegendLayout;
        padding?: ChartPadding;
        titlePadding?: ChartPadding;
        colorScheme?: string;
        greyScale?: boolean;
        showToolTips?: boolean;
        toolTipShowDelay?: number;
        toolTipHideDelay?: number;
        toolTipMoveDuration?: number;
        drawBefore?: (renderer?: ChartDrawBefore['renderer'], rect?: ChartDrawBefore['rect']) => void;
        draw?: (renderer?: ChartDraw['renderer'], rect?: ChartDraw['rect']) => void;
        rtl?: boolean;
        enableCrosshairs?: boolean;
        crosshairsColor?: string;
        crosshairsDashStyle?: string;
        crosshairsLineWidth?: number;
        columnSeriesOverlap?: boolean;
        enabled?: boolean;
        enableAnimations?: boolean;
        animationDuration?: number;
        enableAxisTextAnimation?: boolean;
        renderEngine?: string;
        xAxis?: ChartXAxis;
        valueAxis?: ChartValueAxis;
        categoryAxis?: any;
        seriesGroups: Array<ChartSeriesGroup>;
    }// ChartOptions

    export interface jqxChart extends widget, ChartOptions {

        // jqxChart functions
        getInstance(): any;
        refresh(): void;
        update(): void;
        destroy(): void;
        addColorScheme(schemeName: string, colors: Array<string>): void;
        removeColorScheme(schemeName: string): void;
        getItemsCount(groupIndex: number, serieIndex: number): number;
        getItemCoord(groupIndex: number, serieIndex: number, itemIndex: number): any;
        getXAxisRect(groupIndex: number): ChartRect;
        getXAxisLabels(groupIndex: number): Array<any>;
        getValueAxisRect(groupIndex: number): ChartRect;
        getValueAxisLabels(groupIndex: number): Array<any>;
        getColorScheme(colorScheme: string): Array<string>;
        hideSerie(groupIndex: number, serieIndex: number, itemIndex?: number): void;
        showSerie(groupIndex: number, serieIndex: number, itemIndex?: number): void;
        hideToolTip(hideDelay: number): void;
        showToolTip(groupIndex: number, serieIndex: number, itemIndex: number, showDelay?: number, hideDelay?: number): void;
        saveAsJPEG(fileName: string, exportServerUrl?: string): void;
        saveAsPNG(fileName: string, exportServerUrl?: string): void;
        saveAsPDF(fileName: string, exportServerUrl?: string): void;
        getXAxisValue(offset: number, groupIndex: number): any;
        getValueAxisValue(offset: number, groupIndex: number): any;
    }// jqxChart

    export interface CheckBoxOptions {
        // CheckBoxOptions properties
        animationShowDelay?: number;
        animationHideDelay?: number;
        boxSize?: number | string;
        checked?: boolean | null;
        disabled?: boolean;
        enableContainerClick?: boolean;
        groupName?: string;
        height?: number | string;
        hasThreeStates?: boolean;
        locked?: boolean;
        rtl?: boolean;
        theme?: string;
        width?: number | string;
    }// CheckBoxOptions

    export interface jqxCheckBox extends widget, CheckBoxOptions {

        // jqxCheckBox functions
        check(): void;
        disable(): void;
        destroy(): void;
        enable(): void;
        focus(): void;
        indeterminate(): void;
        render(): void;
        toggle(): void;
        uncheck(): void;
        val(value: boolean): boolean;
    }// jqxCheckBox

    export interface ColorPickerOptions {
        // ColorPickerOptions properties
        color?: string;
        colorMode?: string;
        disabled?: boolean;
        height?: string | number;
        showTransparent?: boolean;
        width?: string | number;
    }// ColorPickerOptions

    export interface jqxColorPicker extends widget, ColorPickerOptions {

        // jqxColorPicker functions
        getColor(): any;
        setColor(color: any): void;
    }// jqxColorPicker

    export interface ComboBoxRenderer {
        // ComboBoxRenderer properties
        index?: number;
        label?: number | string;
        value?: number | string;
    }// ComboBoxRenderer

    export interface ComboBoxRenderSelectedItem {
        // ComboBoxRenderSelectedItem properties
        index?: number;
        item?: any;
    }// ComboBoxRenderSelectedItem

    export interface ComboBoxSearch {
        // ComboBoxSearch properties
        searchString?: string;
    }// ComboBoxSearch

    export interface ComboBoxValidateSelection {
        // ComboBoxValidateSelection properties
        itemValue?: string;
    }// ComboBoxValidateSelection

    export interface ComboBoxOptions {
        // ComboBoxOptions properties
        animationType?: string;
        autoComplete?: boolean;
        autoOpen?: boolean;
        autoItemsHeight?: boolean;
        autoDropDownHeight?: boolean;
        closeDelay?: number;
        checkboxes?: boolean;
        disabled?: boolean;
        displayMember?: string;
        dropDownHorizontalAlignment?: string;
        dropDownVerticalAlignment?: string;
        dropDownHeight?: number | string;
        dropDownWidth?: number | string;
        enableHover?: boolean;
        enableSelection?: boolean;
        enableBrowserBoundsDetection?: boolean;
        height?: string | number;
        itemHeight?: number;
        multiSelect?: boolean;
        minLength?: number;
        openDelay?: number;
        popupZIndex?: number;
        placeHolder?: string;
        remoteAutoComplete?: boolean;
        remoteAutoCompleteDelay?: number;
        renderer?: (index?: ComboBoxRenderer['index'], label?: ComboBoxRenderer['label'], value?: ComboBoxRenderer['value']) => string;
        renderSelectedItem?: (index?: ComboBoxRenderSelectedItem['index'], item?: ComboBoxRenderSelectedItem['item']) => string;
        rtl?: boolean;
        selectedIndex?: number;
        showArrow?: boolean;
        showCloseButtons?: boolean;
        searchMode?: string;
        search?: (searchString?: ComboBoxSearch['searchString']) => void;
        source?: any;
        scrollBarSize?: number | string;
        template?: string;
        theme?: string;
        validateSelection?: (itemValue?: ComboBoxValidateSelection['itemValue']) => boolean;
        valueMember?: string;
        width?: string | number;
    }// ComboBoxOptions

    export interface jqxComboBox extends widget, ComboBoxOptions {

        // jqxComboBox functions
        addItem(item: any): boolean;
        clearSelection(): void;
        clear(): void;
        close(): void;
        checkIndex(index: number): void;
        checkItem(item: any): void;
        checkAll(): void;
        destroy(): void;
        disableItem(item: any): void;
        disableAt(index: number): void;
        enableItem(item: any): void;
        enableAt(index: number): void;
        ensureVisible(index: number): void;
        focus(): void;
        getItem(index: number): any;
        getItemByValue(value: string): any;
        getVisibleItems(): Array<any>;
        getItems(): Array<any>;
        getCheckedItems(): Array<any>;
        getSelectedItem(): any;
        getSelectedItems(): Array<any>;
        getSelectedIndex(): number;
        insertAt(item: any, index: number): boolean;
        isOpened(): boolean;
        indeterminateIndex(index: number): void;
        indeterminateItem(item: any): void;
        loadFromSelect(selectTagId: string): void;
        open(): void;
        removeItem(item: any): boolean;
        removeAt(index: number): boolean;
        selectIndex(index: number): void;
        selectItem(item: any): void;
        searchString(): string;
        updateItem(item: any, itemValue: string): void;
        updateAt(item: any, index: any): void;
        unselectIndex(index: number): void;
        unselectItem(item: any): void;
        uncheckIndex(index: number): void;
        uncheckItem(item: any): void;
        uncheckAll(): void;
        val(value: string): string;
    }// jqxComboBox

    export interface ComplexInputOptions {
        // ComplexInputOptions properties
        decimalNotation?: string;
        disabled?: boolean;
        height?: string | number;
        placeHolder?: string;
        roundedCorners?: boolean;
        rtl?: boolean;
        spinButtons?: boolean;
        spinButtonsStep?: number;
        template?: string;
        theme?: string;
        value?: string;
        width?: string | number;
    }// ComplexInputOptions

    export interface jqxComplexInput extends widget, ComplexInputOptions {

        // jqxComplexInput functions
        destroy(): void;
        getDecimalNotation(part: string, decimalNotation: string): string;
        getReal(complexnumber: number): number;
        getImaginary(complexnumber: number): number;
        render(): void;
        refresh(): void;
        val(value: any): string;
    }// jqxComplexInput

    export interface DataTableColumns {
        // DataTableColumns properties
        text: string;
        dataField: string;
        displayField?: string;
        sortable?: boolean;
        filterable?: boolean;
        hidden?: boolean;
        columnGroup ?: string;
        autoCellHeight?: boolean;
        renderer?: (text:string, align?:string, height?: string | number) => string;
        rendered?: (element:any, align?:string, height?: string | number) => boolean;
        cellsRenderer?: (row:number, column?:any, value?: any, rowData?:any) => string;
        columnType?: string;
        validation?: (cell:number, value?:any) => any;
        initEditor?: (row:number, cellValue?:any, editor?:any, cellText?:string, width?:string | number, height?:string | number) => void;
        createEditor?: (row:number, cellValue?:any, editor?:any, cellText?:string, width?:string | number, height?:string | number) => void;
        getEditorValue?: (row:number, cellValue?:any, editor?:any) => void;
        cellsFormat?: string;
        aggregates?: Array<any>;
        aggregatesRenderer?: (aggregates?: any, column?: any, element?: any) => string;
        align?: string;
        cellsAlign?: string;
        width?: number | string;
        minWidth?: number | string;
        maxWidth?: number | string;
        resizable?: boolean;
        draggable?: boolean;
        editable?: boolean;
        className?: string;
        cellClassName?: any;
        pinned?: boolean;
    }// DataTableColumns

    export interface DataTableColumnGroups {
        // DataTableColumnGroups properties
        text?: string;
        parentGroup?: string;
        align?: string;
        name?: string;
    }// DataTableColumnGroups

    export interface DataTableGroupsRenderer {
        // DataTableGroupsRenderer properties
        value?: string;
        rowdata?: any;
        level?: number;
    }// DataTableGroupsRenderer

    export interface DataTableInitRowDetails {
        // DataTableInitRowDetails properties
        id?: number;
        row?: number;
        element?: any;
        rowinfo?: any;
    }// DataTableInitRowDetails

    export interface DataTableRenderToolbar {
        // DataTableRenderToolbar properties
        toolbar?: any;
    }// DataTableRenderToolbar

    export interface DataTableRenderStatusBar {
        // DataTableRenderStatusBar properties
        statusbar?: any;
    }// DataTableRenderStatusBar

    export interface DataTableEditSettings {
        // DataTableEditSettings properties
        saveOnPageChange?: boolean;
        saveOnBlur?: boolean;
        saveOnSelectionChange?: boolean;
        cancelOnEsc?: boolean;
        saveOnEnter?: boolean;
        editSingleCell?: boolean;
        editOnDoubleClick?: boolean;
        editOnF2?: boolean;
    }// DataTableEditSettings

    export interface DataTableExportSettings {
        // DataTableExportSettings properties
        columnsHeader?: boolean;
        hiddenColumns?: boolean;
        serverURL?: any;
        characterSet?: any;
        recordsInView?: boolean;
        fileName?: string;
    }// DataTableExportSettings

    export interface DataTableOptions {
        // DataTableOptions properties
        altRows?: boolean;
        autoRowHeight?: boolean;
        aggregatesHeight?: number;
        autoShowLoadElement?: boolean;
        columnsHeight?: number;
        columns?: Array<DataTableColumns>;
        columnGroups?: Array<DataTableColumnGroups>;
        columnsResize?: boolean;
        columnsReorder?: boolean;
        disabled?: boolean;
        editable?: boolean;
        editSettings?: DataTableEditSettings;
        exportSettings?: DataTableExportSettings;
        enableHover?: boolean;
        enableBrowserSelection?: boolean;
        filterable?: boolean;
        filterHeight?: number;
        filterMode?: string;
        groups?: Array<any>;
        groupsRenderer?: (value?:DataTableGroupsRenderer['value'], rowData?:DataTableGroupsRenderer['rowdata'], level?:DataTableGroupsRenderer['level']) => string;
        height?: number | string;
        initRowDetails?: (id?:DataTableInitRowDetails['id'], row?:DataTableInitRowDetails['row'], element?:DataTableInitRowDetails['element'], rowInfo?:DataTableInitRowDetails['rowinfo']) => void;
        incrementalSearch?: boolean;
        localization?: any;
        pagerHeight?: number;
        pageSize?: number;
        pageSizeOptions?: Array<string | number>;
        pageable?: boolean;
        pagerPosition?: string;
        pagerMode?: string;
        pagerButtonsCount?: number;
        pagerRenderer?: () => any;
        ready?: () => void;
        rowDetails?: boolean;
        renderToolbar?: (toolbar?:DataTableRenderToolbar['toolbar']) => void;
        renderStatusBar?: (statusbar?:DataTableRenderStatusBar['statusbar']) => void;
        rendering?: () => void;
        rendered?: () => void;
        rtl?: boolean;
        source?: any;
        sortable?: boolean;
        showAggregates?: boolean;
        showToolbar?: boolean;
        showStatusbar?: boolean;
        statusBarHeight?: number;
        scrollBarSize?: number | string;
        selectionMode?: string;
        serverProcessing?: boolean;
        showHeader?: boolean;
        theme?: string;
        toolbarHeight?: number;
        width?: string | number;
    }// DataTableOptions

    export interface jqxDataTable extends widget, DataTableOptions {

        // jqxDataTable functions
        addRow(rowIndex: number, rowData: any, rowPosition: any): void;
        addFilter(dataField: string, filerGroup: any): void;
        applyFilters(): void;
        beginUpdate(): void;
        beginRowEdit(rowIndex: number): void;
        beginCellEdit(rowIndex: number, dataField: string): void;
        clearSelection(): void;
        clearFilters(): void;
        clear(): void;
        destroy(): void;
        deleteRow(rowIndex: number): void;
        endUpdate(): void;
        ensureRowVisible(rowIndex: number): void;
        endRowEdit(rowIndex: number, cancelChanges: boolean): void;
        endCellEdit(rowIndex: number, dataField: string): void;
        exportData(exportDataType: any): any;
        focus(): void;
        getColumnProperty(dataField: string, propertyName: string): any;
        goToPage(pageIndex: number): void;
        goToPrevPage(): void;
        goToNextPage(): void;
        getSelection(): Array<any>;
        getRows(): Array<any>;
        getView(): Array<any>;
        getCellValue(rowIndex: number, dataField: string): any;
        hideColumn(dataField: string): void;
        hideDetails(rowIndex: boolean): void;
        isBindingCompleted(): boolean;
        lockRow(rowIndex: number): void;
        refresh(): void;
        render(): void;
        removeFilter(dataField: string): void;
        scrollOffset(top: number, left: number): void;
        setColumnProperty(dataField: string, propertyName: string, propertyValue: any): void;
        showColumn(dataField: string): void;
        selectRow(rowIndex: number): void;
        showDetails(rowIndex: number): void;
        setCellValue(rowIndex: number, dataField: string, value: any): void;
        sortBy(dataField: string, sortOrder: any): void;
        updating(): boolean;
        updateBoundData(): void;
        unselectRow(rowIndex: number): void;
        updateRow(rowIndex: number, rowData: any): void;
        unlockRow(rowIndex: number): void;
    }// jqxDataTable

    export interface DateTimeInputOptions {
        // DateTimeInputOptions properties
        animationType?: string;
        allowNullDate?: boolean;
        allowKeyboardDelete?: boolean;
        clearString?: string;
        culture?: string;
        closeDelay?: number;
        closeCalendarAfterSelection?: boolean;
        dropDownHorizontalAlignment?: string;
        dropDownVerticalAlignment?: string;
        disabled?: boolean;
        enableBrowserBoundsDetection?: boolean;
        enableAbsoluteSelection?: boolean;
        firstDayOfWeek?: number;
        formatString?: string;
        height?: string | number;
        min?: Date;
        max?: Date;
        openDelay?: number;
        placeHolder?: string;
        popupZIndex?: number;
        rtl?: boolean;
        readonly?: boolean;
        showFooter?: boolean;
        selectionMode?: string;
        showWeekNumbers?: boolean;
        showTimeButton?: boolean;
        showCalendarButton?: boolean;
        theme?: string;
        template?: string;
        textAlign?: string;
        todayString?: string;
        value?: Date | null;
        width?: string | number;
    }// DateTimeInputOptions

    export interface jqxDateTimeInput extends widget, DateTimeInputOptions {

        // jqxDateTimeInput functions
        close(): void;
        destroy(): void;
        focus(): void;
        getRange(): any;
        getText(): string;
        getDate(): any;
        getMaxDate(): any;
        getMinDate(): any;
        open(): void;
        setRange(date: any, date2: any): void;
        setMinDate(date: any): void;
        setMaxDate(date: any): void;
        setDate(date: any): void;
        val(value: any, value2: any): any;
    }// jqxDateTimeInput

    export interface DockingCookieOptions {
        // DockingCookieOptions properties
        domain?: string;
        expires?: number;
    }// DockingCookieOptions

    export interface DockingOptions {
        // DockingOptions properties
        cookies?: boolean;
        cookieOptions?: DockingCookieOptions;
        disabled?: boolean;
        floatingWindowOpacity?: number;
        height?: number | string;
        keyboardNavigation?: boolean;
        mode?: string;
        orientation?: string;
        rtl?: boolean;
        theme?: string;
        width?: number | string;
        windowsMode?: object;
        windowsOffset?: number;
    }// DockingOptions

    export interface jqxDocking extends widget, DockingOptions {

        // jqxDocking functions
        addWindow(windowId: string, mode: any, panel: number, position: any): void;
        closeWindow(windowId: string): void;
        collapseWindow(windowId: string): void;
        destroy(): void;
        disableWindowResize(windowId: string): void;
        disable(): void;
        exportLayout(): string;
        enable(): void;
        expandWindow(windowId: string): void;
        enableWindowResize(windowId: string): void;
        focus(): void;
        hideAllCloseButtons(): void;
        hideAllCollapseButtons(): void;
        hideCollapseButton(windowId: string): void;
        hideCloseButton(windowId: string): void;
        importLayout(Json: string): void;
        move(windowId: string, panel: number, position: number): void;
        pinWindow(windowId: string): void;
        setWindowMode(windowId: string, mode: any): void;
        showCloseButton(windowId: string): void;
        showCollapseButton(windowId: string): void;
        setWindowPosition(windowId: string, top: any, left: number): void;
        showAllCloseButtons(): void;
        showAllCollapseButtons(): void;
        unpinWindow(windowId: string): void;
    }// jqxDocking

    export interface DockingLayoutLayout {
        // DockingLayoutLayout properties
        type: string;
        alignment?: string;
        allowClose?: boolean;
        allowPin?: boolean;
        allowUnpin?: boolean;
        contentContainer?: string;
        height?: number | string;
        initContent?: () => void;
        minHeight?: number | string;
        minWidth?: number | string;
        orientation?: string;
        pinnedHeight?: number | string;
        pinnedWidth?: number | string;
        position?: DockingLayoutLayoutPosition;
        selected?: boolean;
        title?: string;
        unpinnedHeight?: number | string;
        unpinnedWidth?: number | string;
        width?: number | string;
        items?: Array<DockingLayoutLayout>;
    }// DockingLayoutLayout

    export interface DockingLayoutLayoutPosition {
        // DockingLayoutLayoutPosition properties
        x: number;
        y: number;
    }// DockingLayoutLayoutPosition

    export interface DockingLayoutOptions {
        // DockingLayoutOptions properties
        contextMenu?: boolean;
        height?: string | number;
        layout?: Array<DockingLayoutLayout>;
        minGroupHeight?: number | string;
        minGroupWidth?: number | string;
        resizable?: boolean;
        rtl?: boolean;
        theme?: string;
        width?: string | number;
    }// DockingLayoutOptions

    export interface jqxDockingLayout extends widget, DockingLayoutOptions {

        // jqxDockingLayout functions
        addFloatGroup(width: number | string, height: number | string, position: DockingLayoutLayoutPosition, panelType: string, title: string, content: string, initContent: any): void;
        destroy(): void;
        loadLayout(layout: any): void;
        refresh(): void;
        render(): void;
        saveLayout(): any;
    }// jqxDockingLayout

    export interface DockPanelOptions {
        // DockPanelOptions properties
        disabled?: boolean;
        height?: string | number;
        lastchildfill?: boolean;
        width?: string | number;
    }// DockPanelOptions

    export interface jqxDockPanel extends widget, DockPanelOptions {

        // jqxDockPanel functions
        refresh(): void;
    }// jqxDockPanel

    export interface DragDropOnDrag {
        // DragDropOnDrag properties
        data?: any;
        position?: object;
    }// DragDropOnDrag

    export interface DragDropOnDragStart {
        // DragDropOnDragStart properties
        position?: object;
    }// DragDropOnDragStart

    export interface DragDropOnTargetDrop {
        // DragDropOnTargetDrop properties
        data?: any;
    }// DragDropOnTargetDrop

    export interface DragDropOnDropTargetLeave {
        // DragDropOnDropTargetLeave properties
        data?: any;
    }// DragDropOnDropTargetLeave

    export interface DragDropOptions {
        // DragDropOptions properties
        appendTo?: string;
        disabled?: boolean;
        distance?: number;
        data?: any;
        dropAction?: string;
        dropTarget?: any;
        dragZIndex?: number;
        feedback?: string;
        initFeedback?: (feedback?:any) => void;
        opacity?: number;
        onDragEnd?: () => void;
        onDrag?: (data?: DragDropOnDrag['data'], position?: DragDropOnDrag['position']) => void;
        onDragStart?: (position?: DragDropOnDragStart['position']) => void;
        onTargetDrop?: (data?: DragDropOnTargetDrop['data']) => void;
        onDropTargetEnter?: () => void;
        onDropTargetLeave?: (data?: DragDropOnDropTargetLeave['data']) => void;
        restricter?: string | object;
        revert?: boolean;
        revertDuration?: number;
        tolerance?: string;
    }// DragDropOptions

    export interface jqxDragDrop extends widget, DragDropOptions {

        // jqxDragDrop functions

    }// jqxDragDrop

    export interface DrawOptions {
        // DrawOptions properties
        renderEngine?: string;
    }// DrawOptions

    export interface jqxDraw extends widget, DrawOptions {

        // jqxDraw functions
        attr(element: any, attributes: any): void;
        circle(cx: number, cy: number, r: number, attributes: any): any;
        clear(): void;
        getAttr(element: any, attributes: any): string;
        getSize(): any;
        line(x1: number, y1: number, x2: number, y2: number, attributes: any): any;
        measureText(text: string, angle: number, attributes: any): any;
        on(element: any, event: string, func: any): void;
        off(element: any, event: string, func: any): void;
        path(path: string, attributes: any): any;
        pieslice(cx: number, xy: number, innerRadius: any, outerRadius: any, fromAngle: number, endAngle: number, centerOffset: number, attributes: any): any;
        refresh(): void;
        rect(x: number, y: number, width: number | string, height: number | string, attributes: any): any;
        saveAsJPEG(image: string, url: string): void;
        saveAsPNG(image: string, url: string): void;
        text(text: string, x: number, y: number, width: number | string, height: number | string, angle: number, attributes: any, clip: boolean, halign: string, valign: string, rotateAround: string): any;
    }// jqxDraw

    export interface DropDownButtonOptions {
        // DropDownButtonOptions properties
        animationType?: string;
        arrowSize?: number;
        autoOpen?: boolean;
        closeDelay?: number;
        disabled?: boolean;
        dropDownHorizontalAlignment?: string;
        dropDownVerticalAlignment?: string;
        dropDownWidth?: number | string;
        enableBrowserBoundsDetection?: boolean;
        height?: string | number;
        initContent?: () => void;
        openDelay?: number;
        popupZIndex?: number;
        rtl?: boolean;
        template?: string;
        theme?: string;
        width?: string | number;
    }// DropDownButtonOptions

    export interface jqxDropDownButton extends widget, DropDownButtonOptions {

        // jqxDropDownButton functions
        close(): void;
        destroy(): void;
        focus(): void;
        getContent(): any;
        isOpened(): boolean;
        open(): void;
        setContent(content: string): void;
    }// jqxDropDownButton

    export interface DropDownListItem {
        // DropDownListItem properties
        label?: string;
        value?: any;
        disabled?: boolean;
        checked?: any;
        hasThreeStates?: boolean;
        html?: string;
        group?: string;
    }// DropDownListItem

    export interface DropDownListRenderer {
        // DropDownListRenderer properties
        index?: number;
        label?: string;
        value?: string;
    }// DropDownListRenderer

    export interface DropDownListSelectionRenderer {
        // DropDownListSelectionRenderer properties
        element?: any;
        index?: number;
        label?: string;
        value?: any;
    }// DropDownListSelectionRenderer

    export interface DropDownListOptions {
        // DropDownListOptions properties
        autoOpen?: boolean;
        autoDropDownHeight?: boolean;
        animationType?: string;
        checkboxes?: boolean;
        closeDelay?: number;
        disabled?: boolean;
        displayMember?: string;
        dropDownHorizontalAlignment?: string;
        dropDownVerticalAlignment?: string;
        dropDownHeight?: number | string;
        dropDownWidth?: number | string;
        enableSelection?: boolean;
        enableBrowserBoundsDetection?: boolean;
        enableHover?: boolean;
        filterable?: boolean;
        filterHeight?: number;
        filterDelay?: number;
        filterPlaceHolder?: string;
        height?: number | string;
        incrementalSearch?: boolean;
        incrementalSearchDelay?: number;
        itemHeight?: number;
        openDelay?: number;
        placeHolder?: string;
        popupZIndex?: number;
        rtl?: boolean;
        renderer?: (index?: DropDownListRenderer['index'], label?: DropDownListRenderer['label'], value?: DropDownListRenderer['value']) => string;
        selectionRenderer?: (element?: DropDownListSelectionRenderer['element'], index?: DropDownListSelectionRenderer['index'], label?: DropDownListSelectionRenderer['label'], value?: DropDownListSelectionRenderer['value']) => string;
        searchMode?: string;
        source?: Array<any>;
        selectedIndex?: number;
        theme?: string;
        template?: string;
        valueMember?: string;
        width?: number | string;
    }// DropDownListOptions

    export interface jqxDropDownList extends widget, DropDownListOptions {

        // jqxDropDownList functions
        addItem(item: DropDownListItem): boolean;
        clearSelection(): void;
        clear(): void;
        close(): void;
        checkIndex(index: number): void;
        checkItem(item: any): void;
        checkAll(): void;
        clearFilter(): void;
        destroy(): void;
        disableItem(item: any): void;
        disableAt(index: number): void;
        enableItem(item: any): void;
        enableAt(index: number): void;
        ensureVisible(index: number): void;
        focus(): void;
        getItem(index: number): DropDownListItem;
        getItemByValue(itemValue: string): DropDownListItem;
        getItems(): Array<DropDownListItem>;
        getCheckedItems(): Array<DropDownListItem>;
        getSelectedItem(): DropDownListItem;
        getSelectedIndex(): number;
        insertAt(item: DropDownListItem, index: number): void;
        isOpened(): boolean;
        indeterminateIndex(index: number): void;
        indeterminateItem(item: any): void;
        loadFromSelect(arg: string): void;
        open(): void;
        removeItem(item: any): void;
        removeAt(index: number): void;
        selectIndex(index: number): void;
        selectItem(item: DropDownListItem): void;
        setContent(content: string): void;
        updateItem(newItem: DropDownListItem, item: any): void;
        updateAt(item: DropDownListItem, index: number): void;
        unselectIndex(index: number): void;
        unselectItem(item: any): void;
        uncheckIndex(index: number): void;
        uncheckItem(item: any): void;
        uncheckAll(): void;
        val(value: string): string;
    }// jqxDropDownList

    export interface EditorLocalization {
        // EditorLocalization properties
        bold?: string;
        italic?: string;
        underline?: string;
        format?: string;
        size?: number | string;
        font?: string;
        html?: string;
        color?: string;
        background?: string;
        left?: string;
        center?: string;
        right?: string;
        outdent?: string;
        indent?: string;
        ul?: string;
        ol?: string;
        image?: string;
        link?: string;
        clean?: string;
    }// EditorLocalization

    export interface EditorCreateCommand {
        // EditorCreateCommand properties
        name?: string;
    }// EditorCreateCommand

    export interface EditorOptions {
        // EditorOptions properties
        createCommand?: (name:EditorCreateCommand['name']) => void;
        disabled?: boolean;
        editable?: boolean;
        height?: string  | number;
        lineBreak?: string;
        localization?: EditorLocalization;
        pasteMode?: string;
        rtl?: boolean;
        stylesheets?: Array<any>;
        theme?: string;
        toolbarPosition?: string;
        tools?: string;
        width?: string | number;
    }// EditorOptions

    export interface jqxEditor extends widget, EditorOptions {

        // jqxEditor functions
        destroy(): void;
        focus(): void;
        print(): void;
        setMode(mode: boolean): void;
        val(value: string): string;
    }// jqxEditor

    export interface ExpanderOptions {
        // ExpanderOptions properties
        animationType?: string;
        arrowPosition?: string;
        collapseAnimationDuration?: number;
        disabled?: boolean;
        expanded?: boolean;
        expandAnimationDuration?: number;
        height?: number | string;
        headerPosition?: string;
        initContent?: () => void;
        rtl?: boolean;
        showArrow?: boolean;
        theme?: string;
        toggleMode?: string;
        width?: number | string;
    }// ExpanderOptions

    export interface jqxExpander extends widget, ExpanderOptions {

        // jqxExpander functions
        collapse(): void;
        disable(): void;
        destroy(): void;
        enable(): void;
        expand(): void;
        focus(): void;
        getContent(): string;
        getHeaderContent(): string;
        invalidate(): void;
        refresh(): void;
        render(): void;
        setHeaderContent(headerContent: string): void;
        setContent(content: string): void;
    }// jqxExpander

    export interface FileUploadLocalization {
        // FileUploadLocalization properties
        browseButton?: string;
        uploadButton?: string;
        cancelButton?: string;
        uploadFileTooltip?: string;
        cancelFileTooltip?: string;
    }// FileUploadLocalization

    export interface FileUploadRenderFiles {
        // FileUploadRenderFiles properties
        fileName?: string;
    }// FileUploadRenderFiles

    export interface FileUploadOptions {
        // FileUploadOptions properties
        autoUpload?: boolean;
        accept?: string;
        browseTemplate?: string;
        cancelTemplate?: string;
        disabled?: boolean;
        fileInputName?: string;
        height?: number | string;
        localization?: FileUploadLocalization;
        multipleFilesUpload?: boolean;
        renderFiles?: (filename:FileUploadRenderFiles['fileName']) => void;
        rtl?: boolean;
        theme?: string;
        uploadUrl?: string;
        uploadTemplate?: string;
        width?: string | number;
    }// FileUploadOptions

    export interface jqxFileUpload extends widget, FileUploadOptions {

        // jqxFileUpload functions
        browse(): void;
        cancelFile(fileIndex: number): void;
        cancelAll(): void;
        destroy(): void;
        render(): void;
        refresh(): void;
        uploadFile(fileIndex: number): void;
        uploadAll(): void;
    }// jqxFileUpload

    export interface FormPadding {
        // FormPadding properties
        left: number | string;
        right: number | string;
        top: number | string;
        bottom: number | string;
    }// FormPadding

    export interface FormTemplateItem {
        // FormTemplateItem properties
        name?: string;
        text?: string;
        type?: string;
        bind?: string;
        submit?: boolean;
        required?: boolean;
        requiredPosition?: string;
        info?: string;
        infoPosition?: string;
        component?: string;
        init?: (value: any) => void;
        label?: string;
        labelPosition?: string;
        labelAlign?: string;
        align?: string;
        valign?: string;
        labelValign?: string;
        height?: number | string;
        rowHeight?: number | string;
        width?: number | string;
        columnWidth?: number | string;
        labelWidth?: number | string;
        labelHeight?: number | string;
        padding?: FormPadding;
        labelPadding?: FormPadding;
        columns?: Array<FormTemplateItem>;
        optionsLayout?: string;
        options?: Array<any>;
    }// FormTemplateItem

    export interface FormOptions {
        // FormOptions properties
        padding?: FormPadding;
        backgroundColor?: string;
        borderColor?: string;
        value?: any;
        template: Array<FormTemplateItem>;
    }// FormOptions

    export interface jqxForm extends widget, FormOptions {

        // jqxForm functions
        getInstance(): any;
        refresh(): void;
        destroy(): void;
        hideComponent(name: string): void;
        showComponent(name: string): void;
        val(value?: any): any;
        submit(action?: string, target?: string, method?: string): void;
        getComponentByName(name?: string): any;
    }// jqxForm

    export interface FormattedInputOptions {
        // FormattedInputOptions properties
        disabled?: boolean;
        decimalNotation?: string;
        dropDown?: boolean;
        dropDownWidth?: number | string;
        height?: number | string;
        min?: number | string;
        max?: number | string;
        placeHolder?: string;
        popupZIndex?: number;
        roundedCorners?: boolean;
        rtl?: boolean;
        radix?: number | string;
        spinButtons?: boolean;
        spinButtonsStep?: number;
        template?: string;
        theme?: string;
        upperCase?: boolean;
        value?: any;
        width?: number | string;
    }// FormattedInputOptions

    export interface jqxFormattedInput extends widget, FormattedInputOptions {

        // jqxFormattedInput functions
        close(): void;
        destroy(): void;
        focus(): void;
        open(): void;
        render(): void;
        refresh(): void;
        selectAll(): void;
        selectFirst(): void;
        selectLast(): void;
        val(value: number | string): any;
    }// jqxFormattedInput

    export interface GaugeStyle {
        // GaugeStyle properties
        fill?: string;
        stroke?: string;
    }// GaugeStyle

    export interface GaugeBorder {
        // GaugeBorder properties
        size?: number | string;
        visible?: boolean;
        style?: GaugeStyle;
        showGradient?: boolean;
    }// GaugeBorder

    export interface GaugeCaption {
        // GaugeCaption properties
        value?: string;
        position?: string;
        offset?: Array<number>;
        visible?: boolean;
    }// GaugeCaption

    export interface GaugeCap {
        // GaugeCap properties
        size?: number | string;
        visible?: boolean;
        style?: GaugeStyle;
    }// GaugeCap

    export interface GaugeLabels {
        // GaugeLabels properties
        distance?: string;
        position?: string;
        interval?: number | string;
        offset?: Array<number>;
        visible?: boolean;
        formatValue?: (value?: number) => string;
    }// GaugeLabels

    export interface GaugePointer {
        // GaugePointer properties
        pointerType?: string;
        style?: GaugeStyle;
        width?: number | string;
        length?: number | string;
        visible?: boolean;
    }// GaugePointer

    export interface GaugeRanges {
        // GaugeRanges properties
        startValue: number | string;
        endValue: number | string;
        startWidth: number | string;
        endWidth: number | string;
        startDistance?: number | string;
        endDistance?: number | string;
        style: GaugeStyle;
    }// GaugeRanges

    export interface GaugeTicks {
        // GaugeTicks properties
        size: number | string;
        interval: number | string;
        visible?: boolean;
        style?: GaugeStyle;
    }// GaugeTicks

    export interface GaugeOptions {
        // GaugeOptions properties
        animationDuration?: string | number;
        border?: GaugeBorder;
        caption?: GaugeCaption;
        cap?: GaugeCap;
        colorScheme?: string;
        disabled?: boolean;
        easing?: string;
        endAngle?: number | string;
        height?: number | string;
        int64?: boolean;
        labels?: GaugeLabels;
        min?: number;
        max?: number | string;
        pointer?: GaugePointer;
        radius?: number | string;
        ranges?: Array<GaugeRanges>;
        startAngle?: number | string;
        showRanges?: boolean;
        styles?: GaugeStyle;
        ticksMajor?: GaugeTicks;
        ticksMinor?: GaugeTicks;
        ticksDistance?: string;
        value?: number;
        width?: number | string;
    }// GaugeOptions

    export interface jqxGauge extends widget, GaugeOptions {

        // jqxGauge functions
        disable(): void;
        enable(): void;
        val(value: number): number;
    }// jqxGauge

    export interface ValidationResult {
        // ValidationResult properties
        result: boolean;
        message?: string;
    }// ValidationResult

    export interface GridColumn {
        // GridColumn properties
        text?: string;
        datafield?: string;
        displayfield?: string;
        threestatecheckbox?: boolean;
        sortable?: boolean;
        filterable?: boolean;
        filter?: (cellValue?: any, rowData?: any, dataField?: string, filterGroup?: any, defaultFilterResult?: any) => any;
        buttonclick?: (row: number) => void;
        hideable?: boolean;
        hidden?: boolean;
        groupable?: boolean;
        menu?: boolean;
        exportable?: boolean;
        columngroup?: string;
        enabletooltips?: boolean;
        columntype?: string;
        renderer?: (defaultText?: string, alignment?: string, height?: number) => string;
        rendered?: (columnHeaderElement?: any) => void;
        cellsrenderer?: (row?: number, columnfield?: string, value?: any, defaulthtml?: string, columnproperties?: any, rowdata?: any) => string;
        aggregatesrenderer?: (aggregates?: any, column?: any, element?: any, summaryData?: any)  => string;
        validation?: (cell?: any, value?: number) => any;
        createwidget?: (row: any, column: any, value: string, cellElement: any) => void;
        initwidget?: (row: number, column: string, value: string, cellElement: any) => void;
        createfilterwidget?: (column: any, htmlElement: HTMLElement, editor: any) => void;
        createfilterpanel?: (datafield: string, filterPanel: any) => void;
        initeditor?: (row: number, cellvalue: any, editor: any, celltext: any, pressedChar: string, callback: any) => void;
        createeditor?: (row: number, cellvalue: any, editor: any, celltext: any, cellwidth: any, cellheight: any) => void;
        destroyeditor?: (row: number, callback: any) => void;
        geteditorvalue?: (row: number, cellvalue:any, editor:any) => any;
        cellbeginedit?: (row: number, datafield: string, columntype: string, value: any) => boolean;
        cellendedit?: (row: number, datafield: string, columntype: string, oldvalue: any, newvalue: any) => boolean;
        cellvaluechanging?: (row: number, datafield: string, columntype: string, oldvalue: any, newvalue: any) => string | void;
        createeverpresentrowwidget?: (datafield: string, htmlElement: HTMLElement, popup: any, addRowCallback: any) => any;
        initeverpresentrowwidget?: (datafield: string, htmlElement: HTMLElement, popup: any) => void;
        reseteverpresentrowwidgetvalue?: (datafield: string, htmlElement: HTMLElement) => void;
        geteverpresentrowwidgetvalue?: (datafield: string, htmlElement: HTMLElement) => any;
        destroyeverpresentrowwidget?: (htmlElement: HTMLElement) => void;
        validateeverpresentrowwidgetvalue?: (datafield: string, value: any, rowValues: any) => boolean | object;
        cellsformat?: string;
        cellclassname?: any;
        aggregates?: any;
        align?: string;
        cellsalign?: string;
        width?: number | string;
        minwidth?: any;
        maxwidth?: any;
        resizable?: boolean;
        draggable?: boolean;
        editable?: boolean;
        classname?: string;
        pinned?: boolean;
        nullable?: boolean;
        filteritems?: any;
        filterdelay?: number;
        filtertype?: string;
        filtercondition?: string;
    }// GridColumn

    export interface GridSourceDataFields {
        // GridSourceDataFields properties
        name: string;
        type?: string;
        format?: string;
        map?: string;
        id?: string;
        text?: string;
        source?: Array<any>;
    }// GridSourceDataFields

    export interface GridSource {
        // GridSource properties
        url?: string;
        data?: any;
        localdata?: any;
        datatype?: string;
        type?: string;
        id?: string;
        root?: string;
        record?: string;
        datafields?: Array<GridSourceDataFields>;
        pagenum?: number;
        pagesize?: number;
        pager?: (pagenum?: number, pagesize?: number, oldpagenum?: number) => any;
        sortcolumn?: string;
        sortdirection?: string;
        sort?: (column?: any, direction?: any) => void;
        filter?: (filters?: any, recordsArray?: any) => void;
        addrow?: (rowid?: any, rowdata?: any, position?: any, commit?: boolean) => void;
        deleterow?: (rowid?: any, commit?: boolean) => void;
        updaterow?: (rowid?: any, newdata?: any, commit? : any) => void;
        processdata?: (data: any) => void;
        formatdata?: (data: any) => any;
        async?: boolean;
        totalrecords?: number;
        unboundmode?: boolean;
    }// GridSource

    export interface GridGetColumn {
        // GridGetColumn properties
        datafield?: string;
        displayfield?: string;
        text?: string;
        sortable?: boolean;
        filterable?: boolean;
        exportable?: boolean;
        editable?: boolean;
        groupable?: boolean;
        resizable?: boolean;
        draggable?: boolean;
        classname?: string;
        cellclassname?: any;
        width?: number | string;
        menu?: boolean;
    }// GridGetColumn

    export interface GridGetDataInformation {
        // GridGetDataInformation properties
        rowscount?: string;
        sortinformation?: any;
        sortcolumn?: any;
        sortdirection?: any;
        paginginformation?: any;
        pagenum?: any;
        pagesize?: any;
        pagescount?: any;
    }// GridGetDataInformation

    export interface GridGetSortInformation {
        // GridGetSortInformation properties
        sortcolumn?: string;
        sortdirection?: any;
    }// GridGetSortInformation

    export interface GridGetPagingInformation {
        // GridGetPagingInformation properties
        pagenum?: string;
        pagesize?: any;
        pagescount?: any;
    }// GridGetPagingInformation

    export interface GridDateNaming {
        // GridDateNaming properties
        names?: Array<string>;
        namesAbbr?: Array<string>;
        namesShort?: Array<string>;
    }// GridDateNaming

    export interface GridLocalizationobject {
        // GridLocalizationobject properties
        filterstringcomparisonoperators?: any;
        filternumericcomparisonoperators?: any;
        filterdatecomparisonoperators?: any;
        filterbooleancomparisonoperators?: any;
        pagergotopagestring?: string;
        pagershowrowsstring?: string;
        pagerrangestring?: string;
        pagernextbuttonstring?: string;
        pagerpreviousbuttonstring?: string;
        sortascendingstring?: string;
        sortdescendingstring?: string;
        sortremovestring?: string;
        firstDay?: number;
        percentsymbol?: string;
        currencysymbol?: string;
        currencysymbolposition?: string;
        decimalseparator?: string;
        thousandsseparator?: string;
        days?: GridDateNaming;
        months?: GridDateNaming;
        addrowstring?: string;
        updaterowstring?: string;
        deleterowstring?: string;
        resetrowstring?: string;
        everpresentrowplaceholder?: string;
        emptydatastring?: string;
    }// GridLocalizationobject

    export interface GridScrollPosition {
        // GridScrollPosition properties
        top?: number;
        left?: number;
    }// GridScrollPosition

    export interface GridGetGroup {
        // GridGetGroup properties
        group?: number;
        level?: number;
        expanded?: number;
        subgroups?: number;
        subrows?: number;
    }// GridGetGroup

    export interface GridGetCell {
        // GridGetCell properties
        value?: number;
        row?: number;
        column?: number;
    }// GridGetCell

    export interface GridGetSelectedCell {
        // GridGetSelectedCell properties
        rowindex?: number;
        datafield?: string;
    }// GridGetSelectedCell

    export interface GridGetStateColumns {
        // GridGetStateColumns properties
        width?: number | string;
        hidden?: boolean;
        index?: number;
        pinned?: boolean;
        groupable?: boolean;
        resizable?: boolean;
        draggable?: boolean;
        text?: string;
        align?: string;
        cellsalign?: string;
    }// GridGetStateColumns

    export interface GridGetState {
        // GridGetState properties
        width?: number | string;
        height?: number | string;
        pagenum?: number;
        pagesize?: number;
        pagesizeoptions?: Array<string>;
        sortcolumn?: any;
        sortdirection?: any;
        filters?: any;
        groups?: any;
        columns?: GridGetStateColumns;
    }// GridGetState

    export interface GridColumnmenuopening {
        // GridColumnmenuopening properties
        menu?: any;
        datafield?: any;
        height?: any;
    }// GridColumnmenuopening

    export interface GridColumnmenuclosing {
        // GridColumnmenuclosing properties
        menu?: any;
        datafield?: any;
        height?: any;
    }// GridColumnmenuclosing

    export interface GridCellhover {
        // GridCellhover properties
        cellhtmlElement?: any;
        x?: any;
        y?: any;
    }// GridCellhover

    export interface GridGroupsrenderer {
        // GridGroupsrenderer properties
        text?: string;
        group?: number;
        expanded?: boolean;
        data?: object;
    }// GridGroupsrenderer

    export interface GridGroupcolumnrenderer {
        // GridGroupcolumnrenderer properties
        text?: any;
    }// GridGroupcolumnrenderer

    export interface GridHandlekeyboardnavigation  {
        // GridHandlekeyboardnavigation  properties
        event?: any;
    }// GridHandlekeyboardnavigation 

    export interface GridScrollfeedback {
        // GridScrollfeedback properties
        row?: any;
    }// GridScrollfeedback

    export interface GridFilter {
        // GridFilter properties
        cellValue?: any;
        rowData?: any;
        dataField?: string;
        filterGroup?: any;
        defaultFilterResult?: boolean;
    }// GridFilter

    export interface GridRendertoolbar {
        // GridRendertoolbar properties
        toolbar?: any;
    }// GridRendertoolbar

    export interface GridRenderstatusbar {
        // GridRenderstatusbar properties
        statusbar?: any;
    }// GridRenderstatusbar

    export interface GridOptions {
        // GridOptions properties
        altrows?: boolean;
        altstart?: number;
        altstep?: number;
        autoshowloadelement?: boolean;
        autoshowfiltericon?: boolean;
        autoshowcolumnsmenubutton?: boolean;
        showcolumnlines?: boolean;
        showrowlines?: boolean;
        showcolumnheaderlines?: boolean;
        adaptive?: boolean;
        adaptivewidth?: number;
        clipboard?: boolean;
        closeablegroups?: boolean;
        columnsmenuwidth?: number;
        columnmenuopening?: (menu?: GridColumnmenuopening['menu'], datafield?: GridColumnmenuopening['datafield'], height?: GridColumnmenuopening['height']) => boolean | void;
        columnmenuclosing?: (menu?: GridColumnmenuclosing['menu'], datafield?: GridColumnmenuclosing['datafield'], height?: GridColumnmenuclosing['height']) => boolean;
        cellhover?: (cellhtmlElement?: GridCellhover['cellhtmlElement'], x?: GridCellhover['x'], y?: GridCellhover['y']) => void;
        enablekeyboarddelete?: boolean;
        enableellipsis?: boolean;
        enablemousewheel?: boolean;
        enableanimations?: boolean;
        enabletooltips?: boolean;
        enablehover?: boolean;
        enablebrowserselection?: boolean;
        everpresentrowposition?: string;
        everpresentrowheight?: number;
        everpresentrowactions?: string;
        everpresentrowactionsmode?: string;
        filterrowheight?: number;
        filtermode?: string;
        groupsrenderer?: (text?: GridGroupsrenderer['text'], group?: GridGroupsrenderer['group'], expanded?: GridGroupsrenderer['expanded'], data?: GridGroupsrenderer['data']) => string;
        groupcolumnrenderer?: (text?: GridGroupcolumnrenderer['text']) => string;
        groupsexpandedbydefault?: boolean;
        handlekeyboardnavigation?: (event: GridHandlekeyboardnavigation['event']) => boolean;
        pagerrenderer?: () => any[];
        rtl?: boolean;
        showdefaultloadelement?: boolean;
        showfiltercolumnbackground?: boolean;
        showfiltermenuitems?: boolean;
        showpinnedcolumnbackground?: boolean;
        showsortcolumnbackground?: boolean;
        showsortmenuitems?: boolean;
        showgroupmenuitems?: boolean;
        showrowdetailscolumn?: boolean;
        showheader?: boolean;
        showgroupsheader?: boolean;
        showaggregates?: boolean;
        showgroupaggregates?: boolean;
        showeverpresentrow?: boolean;
        showfilterrow?: boolean;
        showemptyrow?: boolean;
        showstatusbar?: boolean;
        statusbarheight?: number;
        showtoolbar?: boolean;
        selectionmode?: string;
        updatefilterconditions?: (type?: string, defaultconditions?: any) => any;
        updatefilterpanel?: (filtertypedropdown1?: any, filtertypedropdown2?: any, filteroperatordropdown?: any, filterinputfield1?: any, filterinputfield2?: any, filterbutton?: any, clearbutton?: any, columnfilter?: any, filtertype?: any, filterconditions?: any) => any;
        theme?: string;
        toolbarheight?: number;
        autoheight?: boolean;
        autorowheight?: boolean;
        columnsheight?: number;
        deferreddatafields?: Array<string>;
        groupsheaderheight?: number;
        groupindentwidth?: number;
        height?: number | string;
        pagerheight?: number | string;
        rowsheight?: number;
        scrollbarsize?: number | string;
        scrollmode?: string;
        scrollfeedback?: (row: GridScrollfeedback['row']) => string;
        width?: string | number;
        autosavestate?: boolean;
        autoloadstate?: boolean;
        columns?: GridColumn[];
        columngroups?: Array<any>;
        columnsmenu?: boolean;
        columnsresize?: boolean;
        columnsautoresize?: boolean;
        columnsreorder?: boolean;
        disabled?: boolean;
        editable?: boolean;
        editmode?: string;
        filter?: (cellValue?: GridFilter['cellValue'], rowData?: GridFilter['rowData'], dataField?: GridFilter['dataField'], filterGroup?: GridFilter['filterGroup'], defaultFilterResult?: GridFilter['defaultFilterResult']) => any;
        filterable?: boolean;
        groupable?: boolean;
        groups?: Array<string>;
        horizontalscrollbarstep?: number;
        horizontalscrollbarlargestep?: number;
        initrowdetails?: (index?: number, parentElement?: any, gridElement?: any, datarecord?: any) => void;
        keyboardnavigation?: boolean;
        localization?: GridLocalizationobject;
        pagesize?: number;
        pagesizeoptions?: Array<number | string>;
        pagermode?: 'simple' | 'default';
        pagerbuttonscount?: number;
        pageable?: boolean;
        rowdetails?: boolean;
        rowdetailstemplate?: any;
        ready?: () => void;
        rendered?: (type: any) => void;
        renderstatusbar?: (statusbar?: GridRenderstatusbar['statusbar']) => void;
        rendertoolbar?: (toolbar?: GridRendertoolbar['toolbar']) => void;
        rendergridrows?: (params?: any) => any;
        sortable?: boolean;
        sortmode?: string;
        selectedrowindex?: number;
        selectedrowindexes?: Array<number>;
        source?: GridSource;
        sorttogglestates?: string;
        updatedelay?: number;
        virtualmode?: boolean;
        verticalscrollbarstep?: number;
        verticalscrollbarlargestep?: number;
    }// GridOptions

    export interface jqxGrid extends widget, GridOptions {

        // jqxGrid functions
        autoresizecolumns(type: string): void;
        autoresizecolumn(dataField: string, type: string): void;
        beginupdate(): void;
        clear(): void;
        destroy(): void;
        endupdate(): void;
        ensurerowvisible(rowBoundIndex: number): void;
        focus(): void;
        getcolumnindex(dataField: string): number;
        getcolumn(dataField: string): GridGetColumn;
        getcolumnproperty(dataField: string, propertyName: string): any;
        getrowid(rowBoundIndex: number): string;
        getrowdata(rowBoundIndex: number): any;
        getrowdatabyid(rowID: string): any;
        getrowboundindexbyid(rowID: string): number;
        getrowboundindex(rowDisplayIndex: number): number;
        getrows(): Array<any>;
        getboundrows(): Array<any>;
        getdisplayrows(): Array<any>;
        getdatainformation(): GridGetDataInformation;
        getsortinformation(): GridGetSortInformation;
        getpaginginformation(): GridGetPagingInformation;
        hidecolumn(dataField: string): void;
        hideloadelement(): void;
        hiderowdetails(rowBoundIndex: number): void;
        iscolumnvisible(dataField: string): boolean;
        iscolumnpinned(dataField: string): boolean;
        localizestrings(localizationobject: GridLocalizationobject): void;
        pincolumn(dataField: string): void;
        refreshdata(): void;
        refresh(): void;
        render(): void;
        scrolloffset(top: number, left: number): void;
        scrollposition(): GridScrollPosition;
        showloadelement(): void;
        showrowdetails(rowBoundIndex: number): void;
        setcolumnindex(dataField: string, index: number): void;
        setcolumnproperty(dataField: string, propertyName: any, propertyValue: any): void;
        showcolumn(dataField: string): void;
        unpincolumn(dataField: string): void;
        updatebounddata(type: any): void;
        updating(): boolean;
        getsortcolumn(): string;
        removesort(): void;
        sortby(dataField: string, sortOrder: string): void;
        addgroup(dataField: string): void;
        cleargroups(): void;
        collapsegroup(group: number | string): void;
        collapseallgroups(): void;
        expandallgroups(): void;
        expandgroup(group: number | string): void;
        getrootgroupscount(): number;
        getgroup(groupIndex: number): GridGetGroup;
        insertgroup(groupIndex: number, dataField: string): void;
        iscolumngroupable(): boolean;
        removegroupat(groupIndex: number): void;
        removegroup(dataField: string): void;
        addfilter(dataField: string, filterGroup: any, refreshGrid: boolean): void;
        applyfilters(): void;
        clearfilters(): void;
        getfilterinformation(): any;
        getcolumnat(index: number): any;
        removefilter(dataField: string, refreshGrid: boolean): void;
        refreshfilterrow(): void;
        gotopage(pagenumber: number): void;
        gotoprevpage(): void;
        gotonextpage(): void;
        addrow(rowIds: any, data: any, rowPosition: any): void;
        begincelledit(rowBoundIndex: number, dataField: string): void;
        beginrowedit(rowBoundIndex: number): void;
        closemenu(): void;
        deleterow(rowIds: string | number | Array<number | string>): void;
        endcelledit(rowBoundIndex: number, dataField: string, confirmChanges: boolean): void;
        endrowedit(rowBoundIndex: number, confirmChanges: boolean): void;
        getcell(rowBoundIndex: number, datafield: string): GridGetCell;
        getcellatposition(left: number, top: number): GridGetCell;
        getcelltext(rowBoundIndex: number, dataField: string): string;
        getcelltextbyid(rowID: string, dataField: string): string;
        getcellvaluebyid(rowID: string, dataField: string): any;
        getcellvalue(rowBoundIndex: number, dataField: string): any;
        isBindingCompleted(): boolean;
        openmenu(dataField: string): void;
        setcellvalue(rowBoundIndex: number, dataField: string, value: any): void;
        setcellvaluebyid(rowID: string, dataField: string, value: any): void;
        showvalidationpopup(rowBoundIndex: number, dataField: string, validationMessage: string): void;
        updaterow(rowIds: string | number | Array<number | string>, data: any): void;
        clearselection(): void;
        getselectedrowindex(): number;
        getselectedrowindexes(): Array<number>;
        getselectedcell(): GridGetSelectedCell;
        getselectedcells(): Array<GridGetSelectedCell>;
        selectcell(rowBoundIndex: number, dataField: string): void;
        selectallrows(): void;
        selectrow(rowBoundIndex: number): void;
        unselectrow(rowBoundIndex: number): void;
        unselectcell(rowBoundIndex: number, dataField: string): void;
        getcolumnaggregateddata(dataField: string, aggregates: Array<any>): string;
        refreshaggregates(): void;
        renderaggregates(): void;
        exportdata(dataType: string, fileName: string, exportHeader: boolean, rows: Array<number>, exportHiddenColumns: boolean, serverURL: string, charSet: string): any;
        getstate(): GridGetState;
        loadstate(stateobject: any): void;
        savestate(): GridGetState;
    }// jqxGrid

    export interface InputOptions {
        // InputOptions properties
        disabled?: boolean;
        dropDownWidth?: number | string;
        displayMember?: string;
        height?: string | number;
        items?: number;
        minLength?: number;
        maxLength?: number;
        opened?: boolean;
        placeHolder?: string;
        popupZIndex?: number;
        query?: string;
        renderer?: (itemValue?: string, inputValue?: string) => string;
        rtl?: boolean;
        searchMode?: string;
        source?: any;
        theme?: string;
        valueMember?: string;
        width?: string | number;
        value?: number | string;
    }// InputOptions

    export interface jqxInput extends widget, InputOptions {

        // jqxInput functions
        destroy(): void;
        focus(): void;
        selectAll(): void;
        val(value: number | string): string;
    }// jqxInput

    export interface KanbanColumns {
        // KanbanColumns properties
        text?: string;
        dataField?: string;
        maxItems?: number;
        collapsible?: boolean;
        collapseDirection?: string;
        headerElement?: any;
        collapsedHeaderElement?: any;
        iconClassName?: string;
    }// KanbanColumns

    export interface KanbanColumnRenderer {
        // KanbanColumnRenderer properties
        element?: any;
        collapsedElement?: any;
        column?: any;
    }// KanbanColumnRenderer

    export interface KanbanItemRenderer {
        // KanbanItemRenderer properties
        element?: any;
        item?: any;
        resource?: any;
    }// KanbanItemRenderer

    export interface KanbanSource {
        // KanbanSource properties
        id?: number;
        status?: string;
        text?: string;
        content?: any;
        tags?: string;
        color?: string;
        resourceId?: any;
        className?: string;
    }// KanbanSource

    export interface KanbanUpdateItem {
        // KanbanUpdateItem properties
        status?: string;
        text?: string;
        content?: any;
        tags?: string;
        color?: string;
        resourceId?: any;
        className?: string;
    }// KanbanUpdateItem

    export interface KanbanOptions {
        // KanbanOptions properties
        columnRenderer?: (element?: KanbanColumnRenderer['element'], collapsedElement?: KanbanColumnRenderer['collapsedElement'], column?: KanbanColumnRenderer['column']) => void;
        columns?: Array<KanbanColumns>;
        connectWith?: string;
        headerHeight?: number | string;
        headerWidth?: number;
        height?: string | number;
        itemRenderer?: (element?: KanbanItemRenderer['element'], item?: KanbanItemRenderer['item'], resource?: KanbanItemRenderer['resource']) => void;
        ready?: () => void;
        rtl?: boolean;
        source?: any;
        resources?: any;
        template?: string;
        templateContent?: any;
        theme?: string;
        width?: string | number;
    }// KanbanOptions

    export interface jqxKanban extends widget, KanbanOptions {

        // jqxKanban functions
        addItem(newItem: any): void;
        destroy(): void;
        getColumn(dataField: string): KanbanColumns;
        getColumnItems(dataField: string): Array<KanbanSource>;
        getItems(): KanbanSource;
        removeItem(itemId: string): void;
        updateItem(itemId: string, newContent: KanbanUpdateItem): void;
    }// jqxKanban

    export interface KnobChanging {
        // KnobChanging properties
        oldValue?: number;
        newValue?: number;
    }// KnobChanging

    export interface KnobLabelsFormatFunction {
        // KnobLabelsFormatFunction properties
        formatFunction?: (label: string | number) => string | number;
    }// KnobLabelsFormatFunction

    export interface KnobMarks {
        // KnobMarks properties
        colorProgress?: any;
        colorRemaining?: any;
        drawAboveProgressBar?: boolean;
        minorInterval?: number;
        majorInterval?: number;
        majorSize?: number | string;
        offset?: string;
        rotate?: boolean;
        size?: number | string;
        type?: string;
        thickness?: number;
        visible?: boolean;
    }// KnobMarks

    export interface KnobDial {
        // KnobDial properties
        innerRadius?: any;
        outerRadius?: any;
        style?: any;
        startAngle?: number;
        endAngle?: number;
    }// KnobDial

    export interface KnobLabels {
        // KnobLabels properties
        rotate?: any;
        offset?: number | string;
        visible?: boolean;
        step?: number;
        style?: any;
        formatFunction?: KnobLabelsFormatFunction['formatFunction'];
    }// KnobLabels

    export interface KnobProgressBar {
        // KnobProgressBar properties
        offset?: number | string;
        style?: any;
        size?: number | string;
        background?: any;
        ranges?: Array<any>;
    }// KnobProgressBar

    export interface KnobPointer {
        // KnobPointer properties
        offset?: number | string;
        type?: string;
        style?: any;
        size?: number | string;
        thickness?: number;
        visible?: boolean;
    }// KnobPointer

    export interface KnobSpinner {
        // KnobSpinner properties
        innerRadius?: any;
        outerRadius?: any;
        style?: any;
        marks?: KnobMarks;
    }// KnobSpinner

    export interface KnobStyle {
        // KnobStyle properties
        fill?: any;
        stroke?: string;
        strokeWidth?: number;
    }// KnobStyle

    export interface KnobOptions {
        // KnobOptions properties
        allowValueChangeOnClick?: boolean;
        allowValueChangeOnDrag?: boolean;
        allowValueChangeOnMouseWheel?: boolean;
        changing?: (oldValue: KnobChanging['oldValue'] | KnobChanging['oldValue'][], newValue: KnobChanging['newValue'] | KnobChanging['newValue'][]) => boolean;
        dragEndAngle?: number;
        dragStartAngle?: number;
        disabled?: boolean;
        dial?: KnobDial;
        endAngle?: number;
        height?: number | string;
        labels?: KnobLabels;
        marks?: KnobMarks;
        min?: number;
        max?: number;
        progressBar?: KnobProgressBar;
        pointer?: KnobPointer | KnobPointer[];
        pointerGrabAction?: string;
        rotation?: string;
        startAngle?: number;
        spinner?: KnobSpinner;
        styles?: KnobStyle;
        step?: number | string;
        snapToStep?: boolean;
        value?: any;
        width?: number | string;
    }// KnobOptions

    export interface jqxKnob extends widget, KnobOptions {

        // jqxKnob functions
        destroy(): void;
        val(value: number | string): number;
    }// jqxKnob

    export interface Layout {
        // Layout properties
        type: string;
        alignment?: string;
        allowClose?: boolean;
        allowPin?: boolean;
        allowUnpin?: boolean;
        contentContainer?: string;
        height?: number | string;
        initContent?: () => void;
        minHeight?: number | string;
        minWidth?: number | string;
        orientation?: string;
        pinnedHeight?: number | string;
        pinnedWidth?: number | string;
        selected?: boolean;
        title?: number | string;
        unpinnedHeight?: number | string;
        unpinnedWidth?: number | string;
        width?: number | string;
        items?: Array<Layout>;
    }// Layout

    export interface LayoutOptions {
        // LayoutOptions properties
        contextMenu?: boolean;
        height?: string | number;
        layout?: Array<Layout>;
        minGroupHeight?: number | string;
        minGroupWidth?: number | string;
        resizable?: boolean;
        rtl?: boolean;
        theme?: string;
        width?: string | number;
    }// LayoutOptions

    export interface jqxLayout extends widget, LayoutOptions {

        // jqxLayout functions
        destroy(): void;
        loadLayout(Layout: any): void;
        refresh(): void;
        render(): void;
        saveLayout(): any;
    }// jqxLayout

    export interface LinearGaugeRanges {
        // LinearGaugeRanges properties
        startValue?: number;
        endValue?: number;
        style?: any;
    }// LinearGaugeRanges

    export interface LinearGaugeBackground {
        // LinearGaugeBackground properties
        borderType?: string;
        borderRadius?: any;
        visible?: boolean;
        style?: any;
        showGradient?: boolean;
    }// LinearGaugeBackground

    export interface LinearGaugeLabels {
        // LinearGaugeLabels properties
        position?: string;
        style?: any;
        interval?: number;
        offset?: number;
        formatValue?: (value:any, position:string) => any;
        visible?: boolean;
    }// LinearGaugeLabels

    export interface LinearGaugePointer {
        // LinearGaugePointer properties
        pointerType?: string;
        style?: any;
        size?: number | string;
        offset?: number;
        visible?: boolean;
    }// LinearGaugePointer

    export interface LinearGaugeTicks {
        // LinearGaugeTicks properties
        size?: number | string;
        interval?: number;
        visible?: boolean;
        style?: any;
    }// LinearGaugeTicks

    export interface LinearGaugeOptions {
        // LinearGaugeOptions properties
        animationDuration?: number;
        background?: LinearGaugeBackground;
        colorScheme?: string;
        disabled?: boolean;
        easing?: string;
        height?: number | string;
        int64?: boolean;
        labels?: LinearGaugeLabels | LinearGaugeLabels[];
        min?: number;
        max?: number;
        orientation?: string;
        pointer?: LinearGaugePointer;
        rangesOffset?: number;
        rangeSize?: number | string;
        ranges?: Array<LinearGaugeRanges>;
        showRanges?: boolean;
        scaleStyle?: any;
        scaleLength?: number | string;
        ticksOffset?: Array<number | string>;
        ticksPosition?: string;
        ticksMinor?: LinearGaugeTicks;
        ticksMajor?: LinearGaugeTicks;
        value?: number;
        width?: number | string;
    }// LinearGaugeOptions

    export interface jqxLinearGauge extends widget, LinearGaugeOptions {

        // jqxLinearGauge functions
        disable(): void;
        enable(): void;
        val(value: number | string): number;
    }// jqxLinearGauge

    export interface LinkButtonOptions {
        // LinkButtonOptions properties
        disabled?: boolean;
        height?: string | number;
        rtl?: boolean;
        theme?: string;
        width?: string | number;
    }// LinkButtonOptions

    export interface jqxLinkButton extends widget, LinkButtonOptions {

    }// jqxLinkButton

    export interface ListBoxDragStart {
        // ListBoxDragStart properties
        item?: object;
    }// ListBoxDragStart

    export interface ListBoxDragEnd {
        // ListBoxDragEnd properties
        dragItem?: object;
        dropItem?: object;
    }// ListBoxDragEnd

    export interface ListBoxRenderer {
        // ListBoxRenderer properties
        index?: number;
        label?: string | number;
        value?: string | number;
    }// ListBoxRenderer

    export interface ListBoxOptions {
        // ListBoxOptions properties
        autoHeight?: boolean;
        allowDrag?: boolean;
        allowDrop?: boolean;
        checkboxes?: boolean;
        disabled?: boolean;
        displayMember?: number | string;
        dropAction?: string;
        dragStart?: (item:ListBoxDragStart['item']) => boolean;
        dragEnd?: (dragItem: ListBoxDragEnd['dragItem'], dropItem: ListBoxDragEnd['dropItem']) => boolean;
        enableHover?: boolean;
        enableSelection?: boolean;
        equalItemsWidth?: boolean;
        filterable?: boolean;
        filterHeight?: number;
        filterDelay?: number | string;
        filterPlaceHolder?: number | string;
        height?: string | number;
        hasThreeStates?: boolean;
        itemHeight?: number;
        incrementalSearch?: boolean;
        incrementalSearchDelay?: number | string;
        multiple?: boolean;
        multipleextended?: boolean;
        renderer?: (index: ListBoxRenderer['index'], label: ListBoxRenderer['label'], value: ListBoxRenderer['value']) => string;
        rendered?: () => any;
        rtl?: boolean;
        selectedIndex?: number | string;
        selectedIndexes?: any;
        source?: Array<any>;
        scrollBarSize?: number;
        searchMode?: string;
        theme?: string;
        valueMember?: number | string;
        width?: string | number;
    }// ListBoxOptions

    export interface jqxListBox extends widget, ListBoxOptions {

        // jqxListBox functions
        addItem(Item: any): boolean;
        beginUpdate(): void;
        clear(): void;
        clearSelection(): void;
        checkIndex(Index: number): void;
        checkItem(Item: any): void;
        checkAll(): void;
        clearFilter(): void;
        destroy(): void;
        disableItem(Item: any): void;
        disableAt(Index: number): void;
        enableItem(Item: any): void;
        enableAt(Index: number | string): void;
        ensureVisible(item: any): void;
        endUpdate(): void;
        focus(): void;
        getItems(): Array<any>;
        getSelectedItems(): Array<any>;
        getCheckedItems(): Array<any>;
        getItem(Index: number): any;
        getItemByValue(Item: any): any;
        getSelectedItem(): any;
        getSelectedIndex(): number;
        insertAt(Item: any, Index: number | string): void;
        invalidate(): void;
        indeterminateItem(Item: any): void;
        indeterminateIndex(Index: number): void;
        loadFromSelect(selector: string): void;
        removeItem(Item: any): void;
        removeAt(Index: number | string): void;
        render(): void;
        refresh(): void;
        selectItem(Item: any): void;
        selectIndex(Index: number | string): void;
        updateItem(Item: any, Value: number | string): void;
        updateAt(item: any, index: number | string): void;
        unselectIndex(index: number | string): void;
        unselectItem(item: any): void;
        uncheckIndex(index: number | string): void;
        uncheckItem(item: any): void;
        uncheckAll(): void;
        val(value: number | string): string;
    }// jqxListBox

    export interface ListMenuFilterCallback {
        // ListMenuFilterCallback properties
        text?: string;
        searchValue?: string | number;
    }// ListMenuFilterCallback

    export interface ListMenuOptions {
        // ListMenuOptions properties
        alwaysShowNavigationArrows?: boolean;
        animationType?: string;
        animationDuration?: number | string;
        autoSeparators?: boolean;
        backLabel?: number | string;
        disabled?: boolean;
        enableScrolling?: boolean;
        filterCallback?: (text:ListMenuFilterCallback['text'], searchValue:ListMenuFilterCallback['searchValue']) => boolean;
        height?: number | string;
        headerAnimationDuration?: number | string;
        placeHolder?: number | string;
        readOnly?: boolean;
        rtl?: boolean;
        roundedCorners?: boolean;
        showNavigationArrows?: boolean;
        showFilter?: boolean;
        showHeader?: boolean;
        showBackButton?: boolean;
        theme?: string;
        width?: string | number;
    }// ListMenuOptions

    export interface jqxListMenu extends widget, ListMenuOptions {

        // jqxListMenu functions
        back(): void;
        changePage(Item: any): void;
        destroy(): void;
    }// jqxListMenu

    export interface LoaderOptions {
        // LoaderOptions properties
        autoOpen?: boolean;
        height?: string | number;
        html?: string;
        isModal?: boolean;
        imagePosition?: string;
        rtl?: boolean;
        text?: number | string;
        textPosition?: string;
        theme?: string;
        width?: string | number;
    }// LoaderOptions

    export interface jqxLoader extends widget, LoaderOptions {

        // jqxLoader functions
        close(): void;
        open(left: number | string, top: number | string): void;
    }// jqxLoader

    export interface MaskedInputOptions {
        // MaskedInputOptions properties
        disabled?: boolean;
        height?: string | number;
        mask?: string;
        promptChar?: number | string;
        readOnly?: boolean;
        rtl?: boolean;
        theme?: string;
        textAlign?: string;
        value?: number | string;
        width?: string | number;
    }// MaskedInputOptions

    export interface jqxMaskedInput extends widget, MaskedInputOptions {

        // jqxMaskedInput functions
        clear(): void;
        destroy(): void;
        focus(): void;
        val(value: number | string): string;
    }// jqxMaskedInput

    export interface MenuOptions {
        // MenuOptions properties
        animationShowDuration?: number;
        animationHideDuration?: number;
        animationHideDelay?: number;
        animationShowDelay?: number;
        autoCloseInterval?: number;
        autoSizeMainItems?: boolean;
        autoCloseOnClick?: boolean;
        autoOpenPopup?: boolean;
        autoOpen?: boolean;
        autoCloseOnMouseLeave?: boolean;
        clickToOpen?: boolean;
        disabled?: boolean;
        enableHover?: boolean;
        easing?: string;
        height?: string | number;
        keyboardNavigation?: boolean;
        minimizeWidth?: number | string;
        mode?: string;
        popupZIndex?: number | string;
        rtl?: boolean;
        showTopLevelArrows?: boolean;
        source?: any;
        theme?: string;
        width?: string | number;
    }// MenuOptions

    export interface jqxMenu extends widget, MenuOptions {

        // jqxMenu functions
        closeItem(itemID: number | string): void;
        close(): void;
        disable(itemID: number | string, value: boolean): void;
        destroy(): void;
        focus(): void;
        minimize(): void;
        open(left: number, top: number): void;
        openItem(itemID: number | string): void;
        restore(): void;
        setItemOpenDirection(item: number | string, horizontaldirection: string, verticaldirection: string): void;
    }// jqxMenu

    export interface NavBarOptions {
        // NavBarOptions properties
        columns?: Array<string>;
        disabled?: boolean;
        height?: string | number;
        minimized?: boolean;
        minimizeButtonPosition?: string;
        minimizedHeight?: number | string;
        minimizedTitle?: number | string;
        orientation?: string;
        popupAnimationDelay?: number;
        rtl?: boolean;
        selection?: boolean;
        selectedItem?: number | string;
        theme?: string;
        width?: string | number;
    }// NavBarOptions

    export interface jqxNavBar extends widget, NavBarOptions {

        // jqxNavBar functions
        close(): void;
        destroy(): void;
        getSelectedIndex(): number;
        open(): void;
        selectAt(index: number | string): void;
    }// jqxNavBar

    export interface NavigationBarOptions {
        // NavigationBarOptions properties
        animationType?: string;
        arrowPosition?: string;
        collapseAnimationDuration?: number;
        disabled?: boolean;
        expandAnimationDuration?: number;
        expandMode?: string;
        expandedIndexes?: Array<number>;
        height?: string | number;
        initContent?: (index:number) => void;
        rtl?: boolean;
        showArrow?: boolean;
        theme?: string;
        toggleMode?: string;
        width?: string | number;
    }// NavigationBarOptions

    export interface jqxNavigationBar extends widget, NavigationBarOptions {

        // jqxNavigationBar functions
        add(header: number | string, content: number | string): void;
        collapseAt(index: number | string): void;
        disableAt(index: number | string): void;
        disable(): void;
        destroy(): void;
        expandAt(index: number | string): void;
        enableAt(index: number | string): void;
        enable(): void;
        focus(): void;
        getHeaderContentAt(index: number | string): string;
        getContentAt(index: number | string): string;
        hideArrowAt(index: number | string): void;
        invalidate(): void;
        insert(Index: number, header: number | string, content: number | string): void;
        refresh(): void;
        render(): void;
        remove(index: number | string): void;
        setContentAt(index: number, item: number | string): void;
        setHeaderContentAt(index: number, item: number | string): void;
        showArrowAt(index: number | string): void;
        update(index: number, header: number | string, content: number | string): void;
        val(value: number | string): string | number;
    }// jqxNavigationBar

    export interface NotificationIcon {
        // NotificationIcon properties
        width?: number | string;
        height?: number | string;
        url?: string;
        padding?: number | string;
    }// NotificationIcon

    export interface NotificationOptions {
        // NotificationOptions properties
        appendContainer?: string;
        autoOpen?: boolean;
        animationOpenDelay?: number;
        animationCloseDelay?: number;
        autoClose?: boolean;
        autoCloseDelay?: number | string;
        blink?: boolean;
        browserBoundsOffset?: number;
        closeOnClick?: boolean;
        disabled?: boolean;
        height?: number | string;
        hoverOpacity?: number;
        icon?: NotificationIcon;
        notificationOffset?: number;
        opacity?: number;
        position?: string;
        rtl?: boolean;
        showCloseButton?: boolean;
        template?: string;
        theme?: string;
        width?: string | number;
    }// NotificationOptions

    export interface jqxNotification extends widget, NotificationOptions {

        // jqxNotification functions
        closeAll(): void;
        closeLast(): void;
        destroy(): void;
        open(): void;
        refresh(): void;
        render(): void;
    }// jqxNotification

    export interface NumberInputOptions {
        // NumberInputOptions properties
        allowNull?: boolean;
        decimal?: number | string;
        disabled?: boolean;
        decimalDigits?: number | string;
        decimalSeparator?: number | string;
        digits?: number | string;
        groupSeparator?: string;
        groupSize?: number | string;
        height?: string | number;
        inputMode?: string;
        min?: number | string;
        max?: number | string;
        negativeSymbol?: string;
        placeHolder?: number | string;
        promptChar?: string;
        rtl?: boolean;
        readOnly?: boolean;
        spinMode?: string;
        spinButtons?: boolean;
        spinButtonsWidth?: number;
        spinButtonsStep?: number | string;
        symbol?: string;
        symbolPosition?: string;
        textAlign?: string;
        template?: string;
        theme?: string;
        value?: number | string;
        width?: string | number;
    }// NumberInputOptions

    export interface jqxNumberInput extends widget, NumberInputOptions {

        // jqxNumberInput functions
        clear(): void;
        destroy(): void;
        focus(): void;
        getDecimal(): number;
        setDecimal(index: number | string): void;
        val(value: number | string): number;
    }// jqxNumberInput

    export interface PanelOptions {
        // PanelOptions properties
        autoUpdate?: boolean;
        disabled?: boolean;
        height?: string | number;
        rtl?: boolean;
        sizeMode?: string;
        scrollBarSize?: number | string;
        theme?: string;
        width?: string | number;
    }// PanelOptions

    export interface jqxPanel extends widget, PanelOptions {

        // jqxPanel functions
        append(HTMLElement: any): void;
        clearcontent(): void;
        destroy(): void;
        focus(): void;
        getScrollHeight(): number;
        getVScrollPosition(): number;
        getScrollWidth(): number;
        getHScrollPosition(): number;
        prepend(HTMLElement: any): void;
        remove(HTMLElement: any): void;
        scrollTo(left: number | string, top: number | string): void;
    }// jqxPanel

    export interface PasswordInputLocalization {
        // PasswordInputLocalization properties
        passwordStrengthString?: string;
        tooShort?: string;
        weak?: string;
        fair?: string;
        good?: string;
        strong?: string;
    }// PasswordInputLocalization

    export interface PasswordInputStrengthColors {
        // PasswordInputStrengthColors properties
        tooShort?: string;
        weak?: string;
        fair?: string;
        good?: string;
        strong?: string;
    }// PasswordInputStrengthColors

    export interface PasswordInputPasswordStrength {
        // PasswordInputPasswordStrength properties
        password?: any;
        characters?: any;
        defaultStrength?: string;
    }// PasswordInputPasswordStrength

    export interface PasswordInputStrengthTypeRenderer {
        // PasswordInputStrengthTypeRenderer properties
        password?: any;
        characters?: any;
        defaultStrength?: string;
    }// PasswordInputStrengthTypeRenderer

    export interface PasswordInputOptions {
        // PasswordInputOptions properties
        disabled?: boolean;
        height?: string | number;
        localization?: PasswordInputLocalization;
        maxLength?: number | string;
        placeHolder?: number | string;
        passwordStrength?: (password:PasswordInputPasswordStrength['password'], characters:PasswordInputPasswordStrength['characters'], defaultStrength:PasswordInputPasswordStrength['defaultStrength']) => string;
        rtl?: boolean;
        strengthColors?: PasswordInputStrengthColors;
        showStrength?: boolean;
        showStrengthPosition?: string;
        strengthTypeRenderer?: (password:PasswordInputStrengthTypeRenderer['password'], characters:PasswordInputStrengthTypeRenderer['characters'], defaultStrength:PasswordInputStrengthTypeRenderer['defaultStrength']) => string;
        showPasswordIcon?: boolean;
        theme?: string;
        width?: string | number;
    }// PasswordInputOptions

    export interface jqxPasswordInput extends widget, PasswordInputOptions {

        // jqxPasswordInput functions
        render(): void;
        refresh(): void;
        val(value: string): string;
    }// jqxPasswordInput

    export interface PivotDesignerOptions {
        // PivotDesignerOptions properties
        type?: string;
        target: any;
    }// PivotDesignerOptions

    export interface jqxPivotDesigner extends widget, PivotDesignerOptions {

        // jqxPivotDesigner functions
        refresh(): void;
    }// jqxPivotDesigner

    export interface PivotGridItemsRenderer {
        // PivotGridItemsRenderer properties
        pivotItem?: any;
    }// PivotGridItemsRenderer

    export interface PivotGridCellsRenderer {
        // PivotGridCellsRenderer properties
        pivotCell?: any;
    }// PivotGridCellsRenderer

    export class PivotGridDesigner {
        // PivotGridDesigner properties
        type: string;
        target: any;
        // PivotGridDesigner functions
        refresh(): void;
    }// PivotGridDesigner

    export interface PivotGridCell {
        // PivotGridCell properties
        pivotRow: PivotGridItem;
        pivotColumn: PivotGridItem;
    }// PivotGridCell

    export interface PivotGridCellFormatting {
        // PivotGridCellFormatting properties
        prefix?: string;
        sufix?: string;
        decimalSeparator?: string;
        thousandsSeparator?: string;
        decimalPlaces?: number;
        negativeWithBrackets?: boolean;
    }// PivotGridCellFormatting

    export interface PivotGridCells {
        // PivotGridCells properties

        // PivotGridCells functions
        hitTest(point: PivotGridPoint): any;
        clear(): void;
        setCellValue(pivotRow: PivotGridItem, pivotColumn: PivotGridItem, value: any): void;
        getCellValue(pivotRow: PivotGridItem, pivotColumn: PivotGridItem): any;
        drillThroughCell(pivotRow: PivotGridItem, pivotColumn: PivotGridItem): Array<any>;
        selectCell(pivotRow: PivotGridItem, pivotColumn: PivotGridItem): void;
        unselectCell(pivotRow: PivotGridItem, pivotColumn: PivotGridItem): void;
        clearSelection(): void;
        isCellSelected(pivotRow: PivotGridItem, pivotColumn: PivotGridItem): boolean;
        getSelectedCellsCount(): number;
        getSelectedCells(): Array<PivotGridCell>;
        getNextCell(pivotCell: PivotGridCell, position: string): any;
    }// PivotGridCells

    export interface PivotGridColumns {
        // PivotGridColumns properties
        resizable: boolean;
        sortable: boolean;
        showExpandCollapseButtons: boolean;
        parentPivotGrid: object;
        items: Array<PivotGridItem>;
        valueItems: Array<PivotGridItem>;
        isHidden: boolean;
        // PivotGridColumns functions
        show(): void;
        hide(): void;
        refresh(): void;
        getHierarchyDepth(): number;
        autoResize(autoResizeMode: string): void;
        getSortItem(): any;
        getSortOrder(): any;
        sortBy(pivotItem: PivotGridItem, order: string): void;
        removeSort(): void;
        selectItem(pivotItem: PivotGridItem): void;
        unselectItem(pivotItem: PivotGridItem): void;
        clearSelection(): void;
        getSelectedItems(): Array<any>;
    }// PivotGridColumns

    export interface PivotGridField {
        // PivotGridField properties
        dataField: string;
        text?: string;
        align?: string;
        className?: string;
        classNameSelected?: string;
    }// PivotGridField

    export interface PivotGridFilterField {
        // PivotGridFilterField properties
        dataField: string;
        text?: string;
        filterFunction: (value: any) => boolean;
    }// PivotGridFilterField

    export interface PivotGridItem {
        // PivotGridItem properties
        isExpanded: boolean;
        isHidden: boolean;
        isSelected: boolean;
        parentItem: PivotGridItem;
        hierarchy: any;
        parentPivotGrid: object;
        items: Array<PivotGridItem>;
        valueItems: Array<PivotGridItem>;
        // PivotGridItem functions
        getWidth(): number;
        getDisplayWidth(): number;
        autoResize(): void;
        getHeight(): number;
        getDisplayHeight(): number;
        setHeight(height: number): void;
        expand(): void;
        collapse(): void;
    }// PivotGridItem

    export interface PivotGridRows {
        // PivotGridRows properties
        resizable: boolean;
        sortable: boolean;
        showExpandCollapseButtons: boolean;
        parentPivotGrid: object;
        items: Array<PivotGridItem>;
        valueItems: Array<PivotGridItem>;
        isHidden?: boolean;
        // PivotGridRows functions
        show(): void;
        hide(): void;
        refresh(): void;
        getHierarchyDepth(): number;
        autoResize(autoResizeMode: string): void;
        getSortItem(): any;
        getSortOrder(): any;
        sortBy(pivotItem: PivotGridItem, sortOrder: string): void;
        removeSort(): void;
        selectItem(pivotItem: PivotGridItem): void;
        unselectItem(pivotItem: PivotGridItem): void;
        clearSelection(): void;
        getSelectedItems(): Array<any>;
    }// PivotGridRows

    export interface PivotGridSettings {
        // PivotGridSettings properties
        pivotValuesOnRows?: boolean;
        rows: Array<PivotGridField>;
        columns: Array<PivotGridField>;
        values: Array<PivotGridValueField>;
        filters?: Array<PivotGridFilterField>;
        theme?: string;
    }// PivotGridSettings

    export interface PivotGridValueField {
        // PivotGridValueField properties
        dataField: string;
        function: any;
        text?: string;
        align?: string;
        className?: string;
        classNameSelected?: string;
        cellsClassName?: string;
        cellsClassNameSelected?: string;
        formatSettings?: PivotGridCellFormatting;
    }// PivotGridValueField

    export interface PivotGridPoint {
        // PivotGridPoint properties
        x: number;
        y: number;
    }// PivotGridPoint

    export interface PivotGridOptions {
        // PivotGridOptions properties
        source: any;
        localization?: any;
        scrollBarsEnabled?: boolean;
        selectionEnabled?: boolean;
        multipleSelectionEnabled?: boolean;
        treeStyleRows?: boolean;
        autoResize?: boolean;
        itemsRenderer?: (pivotItem: PivotGridItemsRenderer['pivotItem']) => string;
        cellsRenderer?: (pivotCell: PivotGridCellsRenderer['pivotCell']) => string;
    }// PivotGridOptions

    export interface jqxPivotGrid extends widget, PivotGridOptions {

        // jqxPivotGrid functions
        getInstance(): any;
        refresh(): void;
        getPivotRows(): PivotGridRows;
        getPivotColumns(): PivotGridColumns;
        getPivotCells(): PivotGridCells;
    }// jqxPivotGrid

    export interface PopoverOptions {
        // PopoverOptions properties
        arrowOffsetValue?: number;
        animationOpenDelay?: number | string;
        animationCloseDelay?: number | string;
        autoClose?: boolean;
        animationType?: string;
        height?: number | string;
        initContent?: () => void;
        isModal?: boolean;
        offset?: any;
        position?: string;
        rtl?: boolean;
        selector?: string;
        showArrow?: boolean;
        showCloseButton?: boolean;
        width?: number | string;
        title?: string | number;
        theme?: string;
    }// PopoverOptions

    export interface jqxPopover extends widget, PopoverOptions {

        // jqxPopover functions
        close(): void;
        destroy(): void;
        open(): void;
    }// jqxPopover

    export interface ProgressBarColorRanges {
        // ProgressBarColorRanges properties
        stop: number | string;
        color: string;
    }// ProgressBarColorRanges

    export interface ProgressBarRenderText {
        // ProgressBarRenderText properties
        text?: string;
        value?: number;
    }// ProgressBarRenderText

    export interface ProgressBarOptions {
        // ProgressBarOptions properties
        animationDuration?: number;
        colorRanges?: Array<ProgressBarColorRanges>;
        disabled?: boolean;
        height?: string  | number;
        layout?: string;
        max?: string  | number;
        min?: number | string;
        orientation?: string;
        rtl?: boolean;
        renderText?: (text?: ProgressBarRenderText['text'], value?: ProgressBarRenderText['value']) => string;
        showText?: boolean;
        template?: string;
        theme?: string;
        value?: string | number;
        width?: string | number;
    }// ProgressBarOptions

    export interface jqxProgressBar extends widget, ProgressBarOptions {

        // jqxProgressBar functions
        actualValue(value: number | string): void;
        destroy(): void;
        val(value: number | string): number;
    }// jqxProgressBar

    export interface RadioButtonOptions {
        // RadioButtonOptions properties
        animationShowDelay?: number;
        animationHideDelay?: number;
        boxSize?: number | string;
        checked?: boolean;
        disabled?: boolean;
        enableContainerClick?: boolean;
        groupName?: string;
        hasThreeStates?: boolean;
        height?: string | number;
        rtl?: boolean;
        theme?: string;
        width?: string | number;
    }// RadioButtonOptions

    export interface jqxRadioButton extends widget, RadioButtonOptions {

        // jqxRadioButton functions
        check(): void;
        disable(): void;
        destroy(): void;
        enable(): void;
        focus(): void;
        render(): void;
        uncheck(): void;
        val(value: boolean): boolean;
    }// jqxRadioButton

    export interface RangeSelectorRange {
        // RangeSelectorRange properties
        from?: number | string | Date;
        to?: number | string | Date;
        min?: number | string | object;
        max?: number | string | object;
    }// RangeSelectorRange

    export interface RangeSelectorGetRange {
        // RangeSelectorGetRange properties
        from?: number | string;
        to?: number | string;
    }// RangeSelectorGetRange

    export interface RangeSelectorLabelsFormatFunction {
        // RangeSelectorLabelsFormatFunction properties
        value?: number | string;
    }// RangeSelectorLabelsFormatFunction

    export interface RangeSelectorMarkersFormatFunction {
        // RangeSelectorMarkersFormatFunction properties
        value?: number | string;
        position?: string;
    }// RangeSelectorMarkersFormatFunction

    export interface RangeSelectorGroupLabelsFormatFunction {
        // RangeSelectorGroupLabelsFormatFunction properties
        value?: string;
        date?: any;
    }// RangeSelectorGroupLabelsFormatFunction

    export interface RangeSelectorOptions {
        // RangeSelectorOptions properties
        disabled?: boolean;
        groupLabelsFormatFunction?: (value: RangeSelectorGroupLabelsFormatFunction['value'], date: RangeSelectorGroupLabelsFormatFunction['date']) => string;
        height?: string | number;
        labelsFormat?: string;
        labelsFormatFunction?: (value: RangeSelectorLabelsFormatFunction['value']) => string;
        labelsOnTicks?: boolean;
        markersFormat?: string;
        markersFormatFunction?: (value: RangeSelectorMarkersFormatFunction['value'], position: RangeSelectorMarkersFormatFunction['position']) => string;
        majorTicksInterval?: any;
        minorTicksInterval?: any;
        max?: any;
        min?: any;
        moveOnClick?: boolean;
        padding?: number | string;
        range?: RangeSelectorRange;
        resizable?: boolean;
        rtl?: boolean;
        showGroupLabels?: boolean;
        showMinorTicks?: boolean;
        snapToTicks?: boolean;
        showMajorLabels?: boolean;
        showMarkers?: boolean;
        theme?: string;
        width?: string | number;
    }// RangeSelectorOptions

    export interface jqxRangeSelector extends widget, RangeSelectorOptions {

        // jqxRangeSelector functions
        destroy(): void;
        getRange(): RangeSelectorGetRange;
        render(): void;
        refresh(): void;
        setRange(from: any, to: any): void;
    }// jqxRangeSelector

    export interface RatingOptions {
        // RatingOptions properties
        count?: number;
        disabled?: boolean;
        height?: string | number;
        itemHeight?: number;
        itemWidth?: number;
        precision?: number;
        singleVote?: boolean;
        value?: number;
        width?: string | number;
    }// RatingOptions

    export interface jqxRating extends widget, RatingOptions {

        // jqxRating functions
        disable(): void;
        enable(): void;
        getValue(): number;
        setValue(value: number): void;
        val(value: number): number;
    }// jqxRating

    export interface RepeatButtonOptions {
        // RepeatButtonOptions properties
        delay?: number;
        disabled?: boolean;
        height?: number | string;
        imgSrc?: string;
        imgWidth?: number | string;
        imgHeight?: number | string;
        imgPosition?: string;
        roundedCorners?: string;
        rtl?: boolean;
        textPosition?: string;
        textImageRelation?: string;
        theme?: string;
        template?: string;
        toggled?: boolean;
        width?: string | number;
        value?: string;
    }// RepeatButtonOptions

    export interface jqxRepeatButton extends widget, RepeatButtonOptions {

        // jqxRepeatButton functions
        destroy(): void;
        focus(): void;
        render(): void;
        val(value: string): string;
    }// jqxRepeatButton

    export interface ResponsivePanelOptions {
        // ResponsivePanelOptions properties
        animationDirection?: string;
        animationHideDelay?: number | string;
        animationShowDelay?: number | string;
        animationType?: string;
        autoClose?: boolean;
        collapseBreakpoint?: number;
        collapseWidth?: number;
        height?: string | number;
        initContent?: () => void;
        theme?: string;
        toggleButton?: string | any;
        toggleButtonSize?: number | string;
        width?: string | number;
    }// ResponsivePanelOptions

    export interface jqxResponsivePanel extends widget, ResponsivePanelOptions {

        // jqxResponsivePanel functions
        close(): void;
        destroy(): void;
        isCollapsed(): boolean;
        isOpened(): boolean;
        open(): void;
        refresh(): void;
        render(): void;
    }// jqxResponsivePanel

    export interface RibbonItem {

    }// RibbonItem

    export interface RibbonOptions {
        // RibbonOptions properties
        animationType?: string;
        animationDelay?: number | string;
        disabled?: boolean;
        height?: number | string;
        initContent?: (index: any) => void;
        mode?: string;
        popupCloseMode?: string;
        position?: string;
        reorder?: boolean;
        rtl?: boolean;
        selectedIndex?: number;
        selectionMode?: string;
        scrollPosition?: string;
        scrollStep?: number;
        scrollDelay?: number;
        theme?: string;
        width?: string | number;
    }// RibbonOptions

    export interface jqxRibbon extends widget, RibbonOptions {

        // jqxRibbon functions
        addAt(index: number, item: RibbonItem): void;
        clearSelection(): void;
        disableAt(index: number): void;
        destroy(): void;
        enableAt(index: number): void;
        hideAt(index: number): void;
        removeAt(index: number): void;
        render(): void;
        refresh(): void;
        selectAt(index: number): void;
        showAt(index: number): void;
        setPopupLayout(index: number, layout: any, width: number | string, height: number | string): void;
        updateAt(index: number, item: RibbonItem): void;
        val(value: string): string;
    }// jqxRibbon

    export interface SchedulerAppointmentDataFields {
        // SchedulerAppointmentDataFields properties
        allDay?: boolean | string;
        background?: string;
        borderColor?: string;
        color?: string;
        description?: string;
        draggable?: boolean | string;
        from?: string;
        hidden?: boolean | string;
        id?: number | string;
        location?: string;
        recurrencePattern?: SchedulerRecurrencePattern | string;
        recurrenceException?: string;
        resizable?: boolean | string;
        resourceId?: number | string;
        readOnly?: boolean | string;
        subject?: string;
        style?: string;
        status?: string;
        to?: string;
        tooltip?: string;
        timeZone?: string;
    }// SchedulerAppointmentDataFields

    export interface SchedulerRecurrencePattern {
        // SchedulerRecurrencePattern properties
        FREQ?: string;
        COUNT?: number;
        UNTIL?: string;
        BYDAY?: string;
        BYMONTHDAY?: string;
        BYMONTH?: number;
        INTERVAL?: number;
    }// SchedulerRecurrencePattern

    export interface SchedulerChangedAppointments {
        // SchedulerChangedAppointments properties
        type?: string;
        appointment?: SchedulerAppointmentDataFields;
    }// SchedulerChangedAppointments

    export interface SchedulerContextMenuOpen {
        // SchedulerContextMenuOpen properties
        menu?: any;
        appointment?: any;
        event?: any;
    }// SchedulerContextMenuOpen

    export interface SchedulerContextMenuClose {
        // SchedulerContextMenuClose properties
        menu?: any;
        appointment?: any;
        event?: any;
    }// SchedulerContextMenuClose

    export interface SchedulerContextMenuItemClick {
        // SchedulerContextMenuItemClick properties
        menu?: any;
        appointment?: any;
        event?: any;
    }// SchedulerContextMenuItemClick

    export interface SchedulerContextMenuCreate {
        // SchedulerContextMenuCreate properties
        menu?: any;
        settings?: any;
    }// SchedulerContextMenuCreate

    export interface SchedulerEditDialogCreate {
        // SchedulerEditDialogCreate properties
        dialog?: any;
        fields?: any;
        editAppointment?: any;
    }// SchedulerEditDialogCreate

    export interface SchedulerEditDialogOpen {
        // SchedulerEditDialogOpen properties
        dialog?: any;
        fields?: any;
        editAppointment?: any;
    }// SchedulerEditDialogOpen

    export interface SchedulerEditDialogClose {
        // SchedulerEditDialogClose properties
        dialog?: any;
        fields?: any;
        editAppointment?: any;
    }// SchedulerEditDialogClose

    export interface SchedulerEditDialogKeyDown {
        // SchedulerEditDialogKeyDown properties
        dialog?: any;
        fields?: any;
        editAppointment?: any;
        event?: any;
    }// SchedulerEditDialogKeyDown

    export interface SchedulerExportSettings {
        // SchedulerExportSettings properties
        serverURL?: string;
        characterSet?: string;
        fileName?: string | null;
        dateTimeFormatString?: string;
        resourcesInMultipleICSFiles?: boolean;
    }// SchedulerExportSettings

    export interface SchedulerRenderAppointment {
        // SchedulerRenderAppointment properties
        data?: any;
    }// SchedulerRenderAppointment

    export interface SchedulerResources {
        // SchedulerResources properties
        source?: string;
        colorScheme?: string;
        orientation?: string;
        dataField?: string;
        resourceColumnWidth?: number | string;
        resourceRowHeight?: number;
    }// SchedulerResources

    export interface SchedulerStatuses {
        // SchedulerStatuses properties
        free?: string;
        tentative?: string;
        busy?: string;
        doNotDisturb?: string;
        outOfOffice?: string;
    }// SchedulerStatuses

    export interface SchedulerGetSelection {
        // SchedulerGetSelection properties
        from?: any;
        to?: any;
        ResourceId?: any;
    }// SchedulerGetSelection

    export interface SchedulerOptions {
        // SchedulerOptions properties
        appointmentOpacity?: number;
        appointmentsMinHeight?: number;
        appointmentDataFields?: SchedulerAppointmentDataFields;
        appointmentTooltips?: boolean;
        columnsHeight?: number;
        contextMenu?: boolean;
        contextMenuOpen?: (menu: SchedulerContextMenuOpen['menu'], appointment: SchedulerContextMenuOpen['appointment'], event: SchedulerContextMenuOpen['event']) => void;
        contextMenuClose?: (menu: SchedulerContextMenuClose['menu'], appointment: SchedulerContextMenuClose['appointment'], event: SchedulerContextMenuClose['event']) => void;
        contextMenuItemClick?: (menu: SchedulerContextMenuItemClick['menu'], appointment: SchedulerContextMenuItemClick['appointment'], event: SchedulerContextMenuItemClick['event']) => boolean;
        contextMenuCreate?: (menu: SchedulerContextMenuCreate['menu'], settings: SchedulerContextMenuCreate['settings']) => void;
        changedAppointments?: Array<SchedulerChangedAppointments>;
        disabled?: boolean;
        date?: any;
        dayNameFormat?: string;
        enableHover?: boolean;
        editDialog?: boolean;
        editDialogDateTimeFormatString?: string;
        editDialogDateFormatString?: string;
        editDialogOpen?: (dialog?: SchedulerEditDialogOpen['dialog'], fields?: SchedulerEditDialogOpen['fields'], editAppointment?: SchedulerEditDialogOpen['editAppointment']) => void;
        editDialogCreate?: (dialog?: SchedulerEditDialogCreate['dialog'], fields?: SchedulerEditDialogCreate['fields'], editAppointment?: SchedulerEditDialogCreate['editAppointment']) => void;
        editDialogKeyDown?: (dialog?: SchedulerEditDialogKeyDown['dialog'], fields?: SchedulerEditDialogKeyDown['fields'], editAppointment?: SchedulerEditDialogKeyDown['editAppointment'], event?: SchedulerEditDialogKeyDown['event']) => boolean;
        editDialogClose?: (dialog?: SchedulerEditDialogClose['dialog'], fields?: SchedulerEditDialogClose['fields'], editAppointment?: SchedulerEditDialogClose['editAppointment']) => void;
        exportSettings?: SchedulerExportSettings;
        height?: number | string;
        legendPosition?: string;
        legendHeight?: number;
        localization?: any;
        min?: any;
        max?: any;
        ready?: () => void;
        renderAppointment?: (data: SchedulerRenderAppointment['data']) => any;
        rendering?: () => void;
        rendered?: () => void;
        rtl?: boolean;
        resources?: SchedulerResources;
        rowsHeight?: number;
        showToolbar?: boolean;
        showLegend?: boolean;
        scrollBarSize?: number;
        source?: any;
        statuses?: SchedulerStatuses;
        touchRowsHeight?: number;
        theme?: string;
        touchAppointmentsMinHeight?: number;
        touchScrollBarSize?: number;
        timeZone?: string;
        touchDayNameFormat?: string;
        toolBarRangeFormat?: string;
        toolBarRangeFormatAbbr?: string;
        toolbarHeight?: number;
        views?: Array<any>;
        view?: string;
        width?: number | string;
    }// SchedulerOptions

    export interface jqxScheduler extends widget, SchedulerOptions {

        // jqxScheduler functions
        addAppointment(item: SchedulerAppointmentDataFields): void;
        beginAppointmentsUpdate(): void;
        clearAppointmentsSelection(): void;
        clearSelection(): void;
        closeMenu(): void;
        closeDialog(): void;
        deleteAppointment(appointmenId: string): void;
        destroy(): void;
        endAppointmentsUpdate(): void;
        ensureAppointmentVisible(id: string): void;
        ensureVisible(item: any, resourceId: string): void;
        exportData(format: string): any;
        focus(): void;
        getAppointmentProperty(appointmentId: string, name: string): any;
        getSelection(): SchedulerGetSelection;
        getAppointments(): Array<SchedulerAppointmentDataFields>;
        getDataAppointments(): Array<any>;
        hideAppointmentsByResource(resourcesId: string): void;
        openMenu(left: number, top: number): void;
        openDialog(left: number, top: number): void;
        selectAppointment(appointmentId: string): void;
        setAppointmentProperty(appointmentId: string, name: string, value: any): void;
        selectCell(date: any, allday: boolean, resourceId: string): void;
        showAppointmentsByResource(resourceId: string): void;
        scrollWidth(): number;
        scrollHeight(): number;
        scrollLeft(left: number): void;
        scrollTop(top: number): void;
    }// jqxScheduler

    export interface ScrollBarOptions {
        // ScrollBarOptions properties
        disabled?: boolean;
        height?: string | number;
        largestep?: number;
        min?: number;
        max?: number;
        rtl?: boolean;
        step?: number;
        showButtons?: boolean;
        thumbMinSize?: number;
        theme?: string;
        vertical?: boolean;
        value?: number;
        width?: string | number;
    }// ScrollBarOptions

    export interface jqxScrollBar extends widget, ScrollBarOptions {

        // jqxScrollBar functions
        destroy(): void;
        isScrolling(): boolean;
        setPosition(index: number): void;
    }// jqxScrollBar

    export interface ScrollViewOptions {
        // ScrollViewOptions properties
        animationDuration?: number;
        bounceEnabled?: boolean;
        buttonsOffset?: Array<number>;
        currentPage?: number;
        disabled?: boolean;
        height?: string | number;
        moveThreshold?: number;
        showButtons?: boolean;
        slideShow?: boolean;
        slideDuration?: number;
        theme?: string;
        width?: string | number;
    }// ScrollViewOptions

    export interface jqxScrollView extends widget, ScrollViewOptions {

        // jqxScrollView functions
        back(): void;
        changePage(index: number): void;
        forward(): void;
        refresh(): void;
    }// jqxScrollView

    export interface SliderTickLabelFormatFunction {
        // SliderTickLabelFormatFunction properties
        value?: number;
    }// SliderTickLabelFormatFunction

    export interface SliderTooltipFormatFunction {
        // SliderTooltipFormatFunction properties
        value?: number;
    }// SliderTooltipFormatFunction

    export interface SliderOptions {
        // SliderOptions properties
        buttonsPosition?: string;
        disabled?: boolean;
        height?: string | number;
        layout?: string;
        mode?: string;
        minorTicksFrequency?: number;
        minorTickSize?: number;
        max?: number;
        min?: number;
        orientation?: string;
        rangeSlider?: boolean;
        rtl?: boolean;
        step?: number;
        showTicks?: boolean;
        showMinorTicks?: boolean;
        showTickLabels?: boolean;
        showButtons?: boolean;
        showRange?: boolean;
        template?: string;
        theme?: string;
        ticksPosition?: string;
        ticksFrequency?: number;
        tickSize?: number;
        tickLabelFormatFunction?: (value: SliderTickLabelFormatFunction['value']) => string;
        tooltip?: boolean;
        tooltipHideDelay?: number;
        tooltipPosition?: string;
        tooltipFormatFunction?: (value: SliderTooltipFormatFunction['value']) => any;
        value?: any;
        values?: Array<number>;
        width?: number | string;
    }// SliderOptions

    export interface jqxSlider extends widget, SliderOptions {

        // jqxSlider functions
        destroy(): void;
        decrementValue(): void;
        disable(): void;
        enable(): void;
        focus(): void;
        getValue(): number;
        incrementValue(): void;
        setValue(index: number | number[]): void;
        val(value: string): string;
    }// jqxSlider

    export interface SortableCursorAt {
        // SortableCursorAt properties
        left?: number;
        top?: number;
        right?: number;
        bottom?: number;
    }// SortableCursorAt

    export interface SortableOptions {
        // SortableOptions properties
        appendTo?: string;
        axis?: number | string;
        cancel?: string;
        connectWith?: string | boolean;
        containment?: string | boolean;
        cursor?: string;
        cursorAt?: SortableCursorAt;
        delay?: number;
        disabled?: boolean;
        distance?: number;
        dropOnEmpty?: boolean;
        forceHelperSize?: boolean;
        forcePlaceholderSize?: boolean;
        grid?: Array<number>;
        handle?: string | boolean;
        helper?: (originalEvent?: any, content?: any) => void | 'original' | 'clone';
        items?: string;
        opacity?: number | boolean;
        placeholderShow?: string | boolean;
        revert?: number | boolean;
        scroll?: boolean;
        scrollSensitivity?: number;
        scrollSpeed?: number;
        tolerance?: string;
        zIndex?: number;
    }// SortableOptions

    export interface jqxSortable extends widget, SortableOptions {

        // jqxSortable functions
        cancelMethod(): void;
        destroy(): void;
        disable(): void;
        enable(): void;
        refresh(): void;
        refreshPositions(): void;
        serialize(object: any): string;
        toArray(): Array<any>;
    }// jqxSortable

    export interface SplitterPanel {
        // SplitterPanel properties
        size?: number | string;
        min?: number | string;
        collapsible?: boolean;
        collapsed?: boolean;
    }// SplitterPanel

    export interface SplitterOptions {
        // SplitterOptions properties
        disabled?: boolean;
        height?: string | number;
        orientation?: string;
        panels?: Array<SplitterPanel>;
        resizable?: boolean;
        splitBarSize?: number;
        showSplitBar?: boolean;
        theme?: string;
        width?: string | number;
    }// SplitterOptions

    export interface jqxSplitter extends widget, SplitterOptions {

        // jqxSplitter functions
        collapse(): void;
        destroy(): void;
        disable(): void;
        enable(): void;
        expand(): void;
        render(): void;
        refresh(): void;
    }// jqxSplitter

    export interface SwitchButtonOptions {
        // SwitchButtonOptions properties
        checked?: boolean;
        disabled?: boolean;
        height?: string | number;
        orientation?: string;
        onLabel?: string;
        offLabel?: string;
        thumbSize?: string;
        rtl?: boolean;
        width?: string | number;
    }// SwitchButtonOptions

    export interface jqxSwitchButton extends widget, SwitchButtonOptions {

        // jqxSwitchButton functions
        check(): void;
        disable(): void;
        enable(): void;
        toggle(): void;
        uncheck(): void;
        val(value: boolean): boolean;
    }// jqxSwitchButton

    export interface TabsOptions {
        // TabsOptions properties
        animationType?: string;
        autoHeight?: boolean;
        closeButtonSize?: number;
        collapsible?: boolean;
        contentTransitionDuration?: number;
        disabled?: boolean;
        enabledHover?: boolean;
        enableScrollAnimation?: boolean;
        enableDropAnimation?: boolean;
        height?: string | number;
        initTabContent?: (tab?: number) => void;
        keyboardNavigation?: boolean;
        next?: any;
        previous?: any;
        position?: string;
        reorder?: boolean;
        rtl?: boolean;
        scrollAnimationDuration?: number;
        selectedItem?: number;
        selectionTracker?: boolean;
        scrollable?: boolean;
        scrollPosition?: string;
        scrollStep?: number;
        showCloseButtons?: boolean;
        toggleMode?: string;
        theme?: string;
        width?: string | number;
    }// TabsOptions

    export interface jqxTabs extends widget, TabsOptions {

        // jqxTabs functions
        addAt(index: number, title: string, content: string): void;
        addFirst(htmlElement1: any, htmlElement2: any): void;
        addLast(htmlElement1: any, htmlElement2: any): void;
        collapse(): void;
        disable(): void;
        disableAt(index: number): void;
        destroy(): void;
        ensureVisible(index: number): void;
        enableAt(index: number): void;
        expand(): void;
        enable(): void;
        focus(): void;
        getTitleAt(index: number): string;
        getContentAt(index: number): any;
        getDisabledTabsCount(): any;
        hideCloseButtonAt(index: number): void;
        hideAllCloseButtons(): void;
        length(): number;
        removeAt(index: number): void;
        removeFirst(): void;
        removeLast(): void;
        select(index: number): void;
        setContentAt(index: number, htmlElement: string): void;
        setTitleAt(index: number, htmlElement: string): void;
        showCloseButtonAt(index: number): void;
        showAllCloseButtons(): void;
        val(value: string): string;
    }// jqxTabs

    export interface TagCloudTagRenderer {
        // TagCloudTagRenderer properties
        itemData?: any;
        minValue?: number;
        valueRange?: number;
    }// TagCloudTagRenderer

    export interface TagCloudSource {
        // TagCloudSource properties
        url?: string;
        data?: any;
        localdata?: string;
        datatype?: string;
        type?: string;
        id?: string;
        root?: string;
        record?: string;
    }// TagCloudSource

    export interface TagCloudOptions {
        // TagCloudOptions properties
        alterTextCase?: string;
        disabled?: boolean;
        displayLimit?: number;
        displayMember?: string;
        displayValue?: boolean;
        fontSizeUnit?: string;
        height?: number | string;
        maxColor?: string;
        maxFontSize?: number;
        maxValueToDisplay?: number;
        minColor?: string;
        minFontSize?: number;
        minValueToDisplay?: number;
        rtl?: boolean;
        sortBy?: string;
        sortOrder?: string;
        source?: TagCloudSource;
        tagRenderer?: (itemData: TagCloudTagRenderer['itemData'], minValue: TagCloudTagRenderer['minValue'], valueRange: TagCloudTagRenderer['valueRange']) => any;
        takeTopWeightedItems?: boolean;
        textColor?: string;
        urlBase?: string;
        urlMember?: string;
        valueMember?: string;
        width?: string | number;
    }// TagCloudOptions

    export interface jqxTagCloud extends widget, TagCloudOptions {

        // jqxTagCloud functions
        destroy(): void;
        findTagIndex(tag: string): number;
        getHiddenTagsList(): Array<any>;
        getRenderedTags(): Array<any>;
        getTagsList(): Array<any>;
        hideItem(index: number): void;
        insertAt(index: number, item: any): void;
        removeAt(index: number): void;
        updateAt(index: number, item: any): void;
        showItem(index: number): void;
    }// jqxTagCloud

    export interface ToggleButtonOptions {
        // ToggleButtonOptions properties
        disabled?: boolean;
        height?: number | string;
        imgSrc?: string;
        imgWidth?: number | string;
        imgHeight?: number | string;
        imgPosition?: string;
        roundedCorners?: string;
        rtl?: boolean;
        textPosition?: string;
        textImageRelation?: string;
        theme?: string;
        template?: string;
        toggled?: boolean;
        width?: string | number;
        value?: string;
    }// ToggleButtonOptions

    export interface jqxToggleButton extends widget, ToggleButtonOptions {

        // jqxToggleButton functions
        check(): void;
        destroy(): void;
        focus(): void;
        render(): void;
        toggle(): void;
        unCheck(): void;
        val(value: string): string;
    }// jqxToggleButton

    export interface TextAreaOptions {
        // TextAreaOptions properties
        disabled?: boolean;
        displayMember?: string;
        dropDownWidth?: number | string;
        height?: string | number;
        items?: number;
        maxLength?: number;
        minLength?: number;
        opened?: boolean;
        placeHolder?: string;
        popupZIndex?: number;
        query?: string;
        renderer?: (itemValue: any, inputValue: any) => any;
        roundedCorners?: boolean;
        rtl?: boolean;
        scrollBarSize?: number;
        searchMode?: string;
        source?: any;
        theme?: string;
        valueMember?: string;
        width?: string | number;
    }// TextAreaOptions

    export interface jqxTextArea extends widget, TextAreaOptions {

        // jqxTextArea functions
        destroy(): void;
        focus(): void;
        refresh(): void;
        render(): void;
        selectAll(): void;
        val(value: string): string;
    }// jqxTextArea

    export interface ToolBarToolItem {
        // ToolBarToolItem properties
        type?: string;
        tool?: any;
        separatorAfterWidget?: boolean;
        minimizable?: boolean;
        minimized?: boolean;
        menuTool?: any;
        menuSeparator?: any;
    }// ToolBarToolItem

    export interface ToolBarOptions {
        // ToolBarOptions properties
        disabled?: boolean;
        height?: string | number;
        initTools?: (type?: string, index?: number, tool?: any, menuToolIninitialization?: boolean) => void;
        minimizeWidth?: number;
        minWidth?: number | string;
        maxWidth?: number | string;
        rtl?: boolean;
        tools?: string;
        theme?: string;
        width?: string | number;
    }// ToolBarOptions

    export interface jqxToolBar extends widget, ToolBarOptions {

        // jqxToolBar functions
        addTool(type: string, position: string, separator: boolean, menuToolIninitialization: (type?: string, tool?: any, menuToolIninitialization?: boolean) => void): void;
        disableTool(index: number, disable: boolean): void;
        destroy(): void;
        destroyTool(index: number): void;
        getTools(): Array<ToolBarToolItem>;
        render(): void;
        refresh(): void;
    }// jqxToolBar

    export interface TooltipOptions {
        // TooltipOptions properties
        absolutePositionX?: number;
        absolutePositionY?: number;
        autoHide?: boolean;
        autoHideDelay?: number;
        animationShowDelay?: number | string;
        animationHideDelay?: number | string;
        content?: string;
        closeOnClick?: boolean;
        disabled?: boolean;
        enableBrowserBoundsDetection?: boolean;
        height?: number | string;
        left?: number;
        name?: string;
        opacity?: number;
        position?: string;
        rtl?: boolean;
        showDelay?: number;
        showArrow?: boolean;
        top?: number | string;
        trigger?: string;
        theme?: string;
        width?: number | string;
    }// TooltipOptions

    export interface jqxTooltip extends widget, TooltipOptions {

        // jqxTooltip functions
        close(index: number): void;
        destroy(): void;
        open(left: number, top: number): void;
        refresh(): void;
    }// jqxTooltip

    export interface TreeDragStart {
        // TreeDragStart properties
        item?: any;
    }// TreeDragStart

    export interface TreeDragEnd {
        // TreeDragEnd properties
        dragItem?: any;
        dropItem?: any;
        args?: any;
        dropPosition?: any;
        tree?: any;
    }// TreeDragEnd

    export interface TreeItem {
        // TreeItem properties
        label?: string;
        value?: string;
        disabled?: boolean;
        checked?: boolean;
        element?: any;
        parentElement?: any;
        isExpanded?: boolean;
        selected?: boolean;
    }// TreeItem

    export interface TreeOffset {
        // TreeOffset properties
        top?: number;
        left?: number;
    }// TreeOffset

    export interface TreeOptions {
        // TreeOptions properties
        animationShowDuration?: number;
        animationHideDuration?: number;
        allowDrag?: boolean;
        allowDrop?: boolean;
        checkboxes?: boolean;
        dragStart?: (item: TreeDragStart['item']) => boolean;
        dragEnd?: (dragItem?: TreeDragEnd['dragItem'], dropItem?: TreeDragEnd['dropItem'], args?: TreeDragEnd['args'], dropPosition?: TreeDragEnd['dropPosition'], tree?: TreeDragEnd['tree']) => boolean;
        disabled?: boolean;
        easing?: string;
        enableHover?: boolean;
        height?: number | string;
        hasThreeStates?: boolean;
        incrementalSearch?: boolean;
        keyboardNavigation?: boolean;
        rtl?: boolean;
        source?: any;
        toggleIndicatorSize?: number;
        toggleMode?: string;
        theme?: string;
        width?: string | number;
    }// TreeOptions

    export interface jqxTree extends widget, TreeOptions {

        // jqxTree functions
        addBefore(item: any, id: string): void;
        addAfter(item: any, id: string): void;
        addTo(item: any, id: string | null): void;
        clear(): void;
        checkAll(): void;
        checkItem(item: any, checked: boolean): void;
        collapseAll(): void;
        collapseItem(item: any): void;
        destroy(): void;
        disableItem(item: any): void;
        ensureVisible(item: any): void;
        enableItem(item: any): void;
        enableAll(): void;
        expandAll(): void;
        expandItem(item: any): void;
        focus(): void;
        getCheckedItems(): Array<TreeItem>;
        getUncheckedItems(): Array<TreeItem>;
        getItems(): Array<TreeItem>;
        getItem(element: any): TreeItem;
        getSelectedItem(): TreeItem;
        getPrevItem(item: any): TreeItem;
        getNextItem(item: any): TreeItem;
        hitTest(left: number, top: number): any;
        removeItem(item: any): void;
        render(): void;
        refresh(): void;
        selectItem(item: any): void;
        uncheckAll(): void;
        uncheckItem(item: any): void;
        updateItem(item: any, newItem: any): void;
        val(value: string): string;
    }// jqxTree

    export interface TreeGridEditSettings {
        // TreeGridEditSettings properties
        saveOnEnter?: boolean;
        saveOnPageChange?: boolean;
        saveOnBlur?: boolean;
        saveOnSelectionChange?: boolean;
        cancelOnEsc?: boolean;
        editSingleCell?: boolean;
        editOnDoubleClick?: boolean;
        editOnF2?: boolean;
    }// TreeGridEditSettings

    export interface TreeGridExportSettings {
        // TreeGridExportSettings properties
        columnsHeader?: boolean;
        hiddenColumns?: boolean;
        serverURL?: string | any;
        characterSet?: string;
        collapsedRecords?: boolean;
        recordsInView?: boolean;
        fileName?: string | null;
    }// TreeGridExportSettings

    export interface TreeGridGetRow {
        // TreeGridGetRow properties
        type?: string;
        checked?: boolean;
        expanded?: boolean;
        icon?: string;
        leaf?: boolean;
        level?: number;
        parent?: any;
        records?: Array<any>;
        selected?: boolean;
        uid?: number | string;
    }// TreeGridGetRow

    export interface TreeGridRowDetailsRenderer {
        // TreeGridRowDetailsRenderer properties
        key?: number;
        dataRow?: number;
    }// TreeGridRowDetailsRenderer

    export interface TreeGridRenderStatusBar {
        // TreeGridRenderStatusBar properties
        statusbar?: any;
    }// TreeGridRenderStatusBar

    export interface TreeGridRenderToolbar {
        // TreeGridRenderToolbar properties
        toolbar?: any;
    }// TreeGridRenderToolbar

    export interface TreeGridScrollOffset {
        // TreeGridScrollOffset properties
        top?: number;
        left?: number;
    }// TreeGridScrollOffset

    export interface TreeGridOptions {
        // TreeGridOptions properties
        altRows?: boolean;
        autoRowHeight?: boolean;
        aggregatesHeight?: number;
        autoShowLoadElement?: boolean;
        checkboxes?: boolean;
        columnsHeight?: number;
        columns?: Array<any>;
        columnGroups?: Array<any>;
        columnsResize?: boolean;
        columnsReorder?: boolean;
        disabled?: boolean;
        editable?: boolean;
        editSettings?: TreeGridEditSettings;
        exportSettings?: TreeGridExportSettings;
        enableHover?: boolean;
        enableBrowserSelection?: boolean;
        filterable?: boolean;
        filterHeight?: number;
        filterMode?: string;
        height?: number | string;
        hierarchicalCheckboxes?: boolean;
        icons?: any;
        incrementalSearch?: boolean;
        localization?: any;
        pagerHeight?: number;
        pageSize?: number;
        pageSizeOptions?: Array<number | string>;
        pageable?: boolean;
        pagerPosition?: string;
        pagerMode?: string;
        pageSizeMode?: string;
        pagerButtonsCount?: number;
        pagerRenderer?: () => any;
        ready?: () => void;
        rowDetails?: boolean;
        rowDetailsRenderer?: (key: TreeGridRowDetailsRenderer['key'], dataRow: TreeGridRowDetailsRenderer['dataRow']) => any;
        renderToolbar?: (toolBar?: TreeGridRenderToolbar['toolbar']) => void;
        renderStatusBar?: (statusBar?: TreeGridRenderStatusBar['statusbar']) => void;
        rendering?: () => void;
        rendered?: () => void;
        rtl?: boolean;
        source?: any;
        sortable?: boolean;
        showAggregates?: boolean;
        showSubAggregates?: boolean;
        showToolbar?: boolean;
        showStatusbar?: boolean;
        statusBarHeight?: number;
        scrollBarSize?: number;
        selectionMode?: string;
        showHeader?: boolean;
        theme?: string;
        toolbarHeight?: number;
        width?: string | number;
        virtualModeCreateRecords?: (expandedRecord?: any, done?: any) => void;
        virtualModeRecordCreating?: (record?: any) => any;
    }// TreeGridOptions

    export interface jqxTreeGrid extends widget, TreeGridOptions {

        // jqxTreeGrid functions
        addRow(rowKey: number | string | null, rowData: any, rowPosition: string, parent: string): void;
        addFilter(dataField: string, filerGroup: any): void;
        applyFilters(): void;
        beginUpdate(): void;
        beginRowEdit(rowKey: number | string): void;
        beginCellEdit(rowKey: number | string, dataField: string): void;
        clearSelection(): void;
        clearFilters(): void;
        clear(): void;
        checkRow(rowKey: number | string): void;
        collapseRow(rowKey: number | string): void;
        collapseAll(): void;
        destroy(): void;
        deleteRow(rowKey: string[] | string): void;
        expandRow(rowKey: Array<number | string> | string | number): void;
        expandAll(): void;
        endUpdate(): void;
        ensureRowVisible(rowKey: number | string): void;
        endRowEdit(rowKey: number | string, cancelChanges: boolean): void;
        endCellEdit(rowKey: number | string, dataField: string, cancelChanges: boolean): void;
        exportData(exportDataType: any): any;
        focus(): void;
        getColumnProperty(dataField: string, propertyName: string): any;
        goToPage(pageIndex: number): void;
        goToPrevPage(): void;
        goToNextPage(): void;
        getSelection(): Array<any>;
        getKey(row: any): string;
        getRow(rowKey: number | string): TreeGridGetRow;
        getRows(): Array<TreeGridGetRow>;
        getCheckedRows(): Array<TreeGridGetRow>;
        getView(): Array<TreeGridGetRow>;
        getCellValue(rowKey: number | string, dataField: string): any;
        hideColumn(dataField: string): void;
        isBindingCompleted(): boolean;
        lockRow(rowKey: string | number | Array<number | string>): void;
        refresh(): void;
        render(): void;
        removeFilter(dataField: string): void;
        scrollOffset(top: number, left: number): TreeGridScrollOffset;
        setColumnProperty(dataField: string, propertyName: string, propertyValue: any): void;
        showColumn(dataField: string): void;
        selectRow(rowId: string | number | Array<number | string>): void;
        setCellValue(rowId: string, dataField: string, cellValue: any): void;
        sortBy(dataField: number | string, sortOrder: 'asc' | 'desc' | null): void;
        updating(): boolean;
        updateBoundData(): void;
        unselectRow(rowId: string | number | Array<number | string>): void;
        uncheckRow(rowId: string): void;
        updateRow(rowId: number | string, data: any): void;
        unlockRow(rowId: string | number | Array<number | string>): void;
    }// jqxTreeGrid

    export interface TreeMapColorRanges {
        // TreeMapColorRanges properties
        color?: string;
        min?: number;
        max?: number;
    }// TreeMapColorRanges

    export interface TreeMapLegendPosition {
        // TreeMapLegendPosition properties
        x?: number | string;
        y?: number | string;
    }// TreeMapLegendPosition

    export interface TreeMapLegendScaleCallback {
        // TreeMapLegendScaleCallback properties
        v?: number;
    }// TreeMapLegendScaleCallback

    export interface TreeMapOptions {
        // TreeMapOptions properties
        baseColor?: string;
        colorRanges?: Array<TreeMapColorRanges>;
        colorRange?: number;
        colorMode?: string;
        displayMember?: string;
        height?: string | number;
        hoverEnabled?: boolean;
        headerHeight?: number;
        legendLabel?: string;
        legendPosition?: TreeMapLegendPosition;
        legendScaleCallback?: (v: TreeMapLegendScaleCallback['v']) => string | number;
        renderCallbacks?: any;
        selectionEnabled?: boolean;
        showLegend?: boolean;
        source?: any;
        theme?: string;
        valueMember?: string;
        width?: string | number;
    }// TreeMapOptions

    export interface jqxTreeMap extends widget, TreeMapOptions {

        // jqxTreeMap functions
        destroy(): void;
        render(): void;
    }// jqxTreeMap

    export interface ValidatorRule {
        // ValidatorRule properties
        input?: string;
        message?: string;
        action?: string;
        rule?: string | any;
        position?: string;
        hintRender?: any;
    }// ValidatorRule

    export interface ValidatorOptions {
        // ValidatorOptions properties
        arrow?: boolean;
        animation?: string;
        animationDuration?: number;
        closeOnClick?: boolean;
        focus?: boolean;
        hintType?: string;
        onError?: () => void;
        onSuccess?: () => void;
        position?: string;
        rules?: Array<ValidatorRule>;
        rtl?: boolean;
    }// ValidatorOptions

    export interface jqxValidator extends widget, ValidatorOptions {

        // jqxValidator functions
        hideHint(id: string): void;
        hide(): void;
        updatePosition(): void;
        validate(htmlElement: any): void;
        validateInput(id: string): void;
    }// jqxValidator

    export interface WindowDragArea {
        // WindowDragArea properties
        left: number;
        top: number;
        width: number | string;
        height: number | string;
    }// WindowDragArea

    export interface WindowOptions {
        // WindowOptions properties
        autoOpen?: boolean;
        animationType?: string;
        collapsed?: boolean;
        collapseAnimationDuration?: number;
        content?: string;
        closeAnimationDuration?: number;
        closeButtonSize?: number;
        closeButtonAction?: string;
        cancelButton?: any;
        dragArea?: WindowDragArea;
        draggable?: boolean;
        disabled?: boolean;
        height?: string | number;
        initContent?: () => void;
        isModal?: boolean;
        keyboardCloseKey?: number | string;
        keyboardNavigation?: boolean;
        minHeight?: string | number;
        maxHeight?: string | number;
        minWidth?: number | string;
        maxWidth?: number | string;
        modalOpacity?: any;
        modalZIndex?: number;
        modalBackgroundZIndex?: number;
        okButton?: any;
        position?: string | any;
        rtl?: boolean;
        resizable?: boolean;
        showAnimationDuration?: number;
        showCloseButton?: boolean;
        showCollapseButton?: boolean;
        theme?: string;
        title?: string;
        width?: string | number;
        zIndex?: number;
    }// WindowOptions

    export interface jqxWindow extends widget, WindowOptions {

        // jqxWindow functions
        bringToFront(): void;
        close(): void;
        collapse(): void;
        closeAll(): void;
        disable(): void;
        destroy(): void;
        enable(): void;
        expand(): void;
        focus(): void;
        isOpen(): boolean;
        move(top: number, left: number): void;
        open(): void;
        hide(): void;
        resize(top: number, left: number): void;
        setTitle(title: string): void;
        setContent(content: string): void;
    }// jqxWindow

    export interface HeatMapXAxis {
        // HeatMapXAxis properties
        labels?: any[];
        opposedPosition?: boolean;
        isInversed?: boolean;
        minimum?: any;
        maximum?: any;
        labelFormat?: string;
    }// HeatMapXAxis

    export interface HeatMapYAxis {
        // HeatMapYAxis properties
        labels?: any[];
        opposedPosition?: boolean;
        isInversed?: boolean;
    }// HeatMapYAxis

    export interface HeatMapPaletteSettings {
        // HeatMapPaletteSettings properties
        palette?: any[];
        type?: string;
        emptyPointColor?: string;
    }// HeatMapPaletteSettings

    export interface HeatMapPalette {
        // HeatMapPalette properties
        value: number;
        color: string;
        label?: string;
    }// HeatMapPalette

    export interface HeatMapLegendSettings {
        // HeatMapLegendSettings properties
        position?: string;
    }// HeatMapLegendSettings

    export interface HeatMapTooltipRender {
        // HeatMapTooltipRender properties
        xLabel?: any[];
        yLabel?: any[];
        value?: string;
        content?: string;
        date?: Date;
    }// HeatMapTooltipRender

    export interface HeatMapOptions {
        // HeatMapOptions properties
        xAxis?: HeatMapXAxis;
        yAxis?: HeatMapYAxis;
        paletteSettings?: HeatMapPaletteSettings;
        legendSettings?: HeatMapLegendSettings;
        source?: any[];
        title?: string;
        width?: number | string;
        tooltipRender?: (args: HeatMapTooltipRender) => void;
    }// HeatMapOptions

    export interface jqxHeatMap extends widget, HeatMapOptions {

        // jqxHeatMap functions
        destroy(): void;
        setLegendPosition(position: string): void;
        setOpposedXAxisPosition(opposedPosition: boolean): void;
        setOpposedYAxisPosition(opposedPosition: boolean): void;
        reverseXAxisPosition(isInversed: boolean): void;
        reverseYAxisPosition(isInversed: boolean): void;
        setPaletteType(type: string): void;
    }// jqxHeatMap

    export interface TimePickerOptions {
        // TimePickerOptions properties
        autoSwitchToMinutes?: boolean;
        disabled?: boolean;
        footer?: boolean;
        footerTemplate?: string;
        format?: string;
        height?: number | string;
        minuteInterval?: number;
        name?: string;
        readonly?: boolean;
        selection?: string;
        theme?: string;
        unfocusable?: boolean;
        value?: any;
        view?: string;
        width?: number | string;
    }// TimePickerOptions

    export interface jqxTimePicker extends widget, TimePickerOptions {

        // jqxTimePicker functions
        setHours(hours: number): void;
        setMinutes(minutes: number): void;
    }// jqxTimePicker



} // module jqwidgets