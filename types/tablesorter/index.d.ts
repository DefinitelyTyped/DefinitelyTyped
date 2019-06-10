// Type definitions for tablesorter 2.31
// Project: https://mottie.github.io/tablesorter/
// Definitions by: Manuel Thalmann <https://github.com/manuth>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.2

import "jqueryui";
import { CoreTheme } from "./Design/CoreTheme";
import { Theme } from "./Design/Theme";
import { ThemeCollection } from "./Design/ThemeCollection";
import { ColumnFilter } from "./Filtering/ColumnFilter";
import { FilterBox } from "./Filtering/FilterBox";
import { FilterEventHandler } from "./Filtering/FilterEventHandler";
import { FilterFunction } from "./Filtering/FilterFunction";
import { FilterFunctionCollection } from "./Filtering/FilterFunctionCollection";
import { FilterPlaceholders } from "./Filtering/FilterPlaceholders";
import { FilterStatic } from "./Filtering/FilterStatic";
import { FilterControlFactory } from "./Filtering/Formatter/FilterControlFactory";
import { FilterFormatter } from "./Filtering/Formatter/FilterFormatter";
import { ComparableOptions } from "./Filtering/Formatter/Options/ComparableOptions";
import { ControlOptions } from "./Filtering/Formatter/Options/ControlOptions";
import { DateOptions } from "./Filtering/Formatter/Options/DateOptions";
import { DefaultValueOptions } from "./Filtering/Formatter/Options/DefaultValueOptions";
import { DelayableOptions } from "./Filtering/Formatter/Options/DelayableOptions";
import { Html5ColorOptions } from "./Filtering/Formatter/Options/Html5ColorOptions";
import { Html5NumberOptions } from "./Filtering/Formatter/Options/Html5NumberOptions";
import { Html5RangeOptions } from "./Filtering/Formatter/Options/Html5RangeOptions";
import { IntervalOptions } from "./Filtering/Formatter/Options/IntervalOptions";
import { NumericOptions } from "./Filtering/Formatter/Options/NumericOptions";
import { PreviewableOptions } from "./Filtering/Formatter/Options/PreviewableOptions";
import { RangeOptions } from "./Filtering/Formatter/Options/RangeOptions";
import { Select2Options } from "./Filtering/Formatter/Options/Select2Options";
import { StrictOptions } from "./Filtering/Formatter/Options/StrictOptions";
import { TestableOptions } from "./Filtering/Formatter/Options/TestableOptions";
import { ToggleableOptions } from "./Filtering/Formatter/Options/ToggleableOptions";
import { UIDateCompareOptions } from "./Filtering/Formatter/Options/UIDateCompareOptions";
import { UIDateRangeOptions } from "./Filtering/Formatter/Options/UIDateRangeOptions";
import { UIRangeOptions } from "./Filtering/Formatter/Options/UIRangeOptions";
import { UISliderOptions } from "./Filtering/Formatter/Options/UISliderOptions";
import { UISpinnerOptions } from "./Filtering/Formatter/Options/UISpinnerOptions";
import { FunctionSelectSource } from "./Filtering/FunctionSelectSource";
import { MatchType } from "./Filtering/MatchType";
import { MatchTypeSettings } from "./Filtering/MatchTypeSettings";
import { SelectSource } from "./Filtering/SelectSource";
import { SelectSources } from "./Filtering/SelectSources";
import { GlobalizeSettings } from "./Globalization/GlobalizeSettings";
import { AjaxDataProcessor } from "./Paging/AjaxDataProcessor";
import { AjaxErrorHandler } from "./Paging/AjaxErrorHandler";
import { AjaxUrlProcessor } from "./Paging/AjaxUrlProcessor";
import { PagerClasses } from "./Paging/PagerClasses";
import { PagerConfiguration } from "./Paging/PagerConfiguration";
import { PagerConfigurationStore } from "./Paging/PagerConfigurationStore";
import { PagerDataPart } from "./Paging/PagerDataPart";
import { PagerEventHandler } from "./Paging/PagerEventHandler";
import { PagerEventMap } from "./Paging/PagerEventMap";
import { PagerInitialRows } from "./Paging/PagerInitialRows";
import { PagerMemory } from "./Paging/PagerMemory";
import { PagerOutputProcessor } from "./Paging/PagerOutputProcessor";
import { PagerSelectors } from "./Paging/PagerSelectors";
import { PageSize } from "./Paging/PageSize";
import { ParsedCell } from "./Parsing/ParsedCell";
import { ParsedData } from "./Parsing/ParsedData";
import { ParsedOption } from "./Parsing/ParsedOption";
import { Parser } from "./Parsing/Parser";
import { ParserType } from "./Parsing/ParserType";
import { TextExtractor } from "./Parsing/TextExtractor";
import { EmptySorting } from "./Sorting/EmptySorting";
import { NumberSorter } from "./Sorting/NumberSorter";
import { RelativeSortDefinition } from "./Sorting/RelativeSortDefinition";
import { RelativeSorting } from "./Sorting/RelativeSorting";
import { SortDefinition } from "./Sorting/SortDefinition";
import { SortDefinitionOrder } from "./Sorting/SortDefinitionOrder";
import { SortInitiator } from "./Sorting/SortInitiator";
import { SortOrder } from "./Sorting/SortOrder";
import { StringSorting } from "./Sorting/StringSorting";
import { TableSorting } from "./Sorting/TableSorting";
import { TextSorter } from "./Sorting/TextSorter";
import { StorageConfiguration } from "./Storage/StorageConfiguration";
import { StorageType } from "./Storage/StorageType";
import { CommonEventHandler } from "./System/CommonEventHandler";
import { ConfigEventHandler } from "./System/ConfigEventHandler";
import { ConfigEventMap } from "./System/ConfigEventMap";
import { EventMap } from "./System/EventMap";
import { HeaderResizeOptions } from "./System/HeaderResizeOptions";
import { InitializationEventHandler } from "./System/InitializationEventHandler";
import { Locale } from "./System/Locale";
import { MappedSettings } from "./System/MappedSettings";
import { ParameterlessTriggerNameMap } from "./System/ParameterlessTriggerNameMap";
import { RenderHeaderEventHandler } from "./System/RenderHeaderEventHandler";
import { RenderTemplateEventHandler } from "./System/RenderTemplateEventHandler";
import { TablesorterCache } from "./System/TablesorterCache";
import { TablesorterConfiguration } from "./System/TablesorterConfiguration";
import { TablesorterConfigurationStore } from "./System/TablesorterConfigurationStore";
import { TablesorterEventHandler } from "./System/TablesorterEventHandler";
import { TablesorterHeading } from "./System/TablesorterHeading";
import { TriggerCallbackHandler } from "./System/TriggerCallbackHandler";
import { TriggerNameMap } from "./System/TriggerNameMap";
import { Tablesorter } from "./Tablesorter";
import { Widget } from "./Widgets/Widget";
import { WidgetOptions } from "./Widgets/WidgetOptions";
import { WidgetOptionStore } from "./Widgets/WidgetOptionStore";

export {
    CoreTheme,
    Theme,
    ThemeCollection,
    ColumnFilter,
    FilterBox,
    FilterFunction,
    FilterEventHandler,
    FilterFunctionCollection,
    FilterPlaceholders,
    FilterStatic,
    FilterControlFactory,
    FilterFormatter,
    ComparableOptions,
    ControlOptions,
    DateOptions,
    DefaultValueOptions,
    DelayableOptions,
    Html5ColorOptions,
    Html5NumberOptions,
    Html5RangeOptions,
    IntervalOptions,
    NumericOptions,
    PreviewableOptions,
    RangeOptions,
    Select2Options,
    StrictOptions,
    TestableOptions,
    ToggleableOptions,
    UIDateCompareOptions,
    UIDateRangeOptions,
    UIRangeOptions,
    UISliderOptions,
    UISpinnerOptions,
    FunctionSelectSource,
    MatchType,
    MatchTypeSettings,
    SelectSource,
    SelectSources,
    GlobalizeSettings,
    AjaxDataProcessor,
    AjaxErrorHandler,
    AjaxUrlProcessor,
    PagerClasses,
    PagerConfiguration,
    PagerConfigurationStore,
    PagerDataPart,
    PagerEventHandler,
    PagerEventMap,
    PagerInitialRows,
    PagerMemory,
    PagerOutputProcessor,
    PagerSelectors,
    PageSize,
    ParsedCell,
    ParsedData,
    ParsedOption,
    Parser,
    ParserType,
    TextExtractor,
    EmptySorting,
    NumberSorter,
    RelativeSortDefinition,
    RelativeSorting,
    SortDefinition,
    SortDefinitionOrder,
    SortInitiator,
    SortOrder,
    StringSorting,
    TableSorting,
    TextSorter,
    StorageConfiguration,
    StorageType,
    CommonEventHandler,
    ConfigEventHandler,
    ConfigEventMap,
    EventMap,
    HeaderResizeOptions,
    InitializationEventHandler,
    Locale,
    MappedSettings,
    ParameterlessTriggerNameMap,
    RenderHeaderEventHandler,
    RenderTemplateEventHandler,
    TablesorterCache,
    TablesorterConfiguration,
    TablesorterConfigurationStore,
    TablesorterEventHandler,
    TablesorterHeading,
    TriggerCallbackHandler,
    TriggerNameMap,
    Tablesorter,
    Widget,
    WidgetOptions,
    WidgetOptionStore
};

declare global {
    interface HTMLElement {
        /**
         * A value indicating whether the tablesorter has initialized.
         */
        hasInitialized: boolean;

        /**
         * The configuration of the tablesorter.
         */
        config: TablesorterConfigurationStore<this>;
    }

    interface JQueryStatic<TElement = HTMLElement> {
        /**
         * The tablesorter.
         */
        tablesorter: Tablesorter<TElement>;
    }

    interface JQuery<TElement = HTMLElement> {
        /**
         * Initializes a new `tablesorter`.
         *
         * @param options
         * The options for the tablesorter.
         */
        tablesorter(options?: TablesorterConfiguration<TElement>): this;

        /**
         * Initializes a pager for a tablesorter.
         */
        tablesorterPager(options?: PagerConfiguration<TElement>): this;

        trigger<T extends keyof TriggerNameMap<TElement>>(name: T, extraParameters: TriggerNameMap<TElement>[T]): this;

        trigger(name: ParameterlessTriggerNameMap): this;

        bind(name: EventMap, callback: TablesorterEventHandler<TElement>): this;
        bind(name: ConfigEventMap, callback: ConfigEventHandler<TElement>): this;
        bind(name: "filterStart", callback: FilterEventHandler<TElement>): this;
        bind(name: PagerEventMap, callback: PagerEventHandler<TElement>): this;
        bind(name: "stickyHeadersInit", callback: CommonEventHandler<TElement>): this;
    }
}
