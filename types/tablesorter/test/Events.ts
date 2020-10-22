import { TablesorterEventHandler, ConfigEventHandler, FilterEventHandler, CommonEventHandler, PagerEventHandler } from "tablesorter";

/**
 * Provides tests for the events.
 */
export class TestEvents<T extends HTMLElement> {
    /**
     * Tests for the events.
     */
    Test() {
        const table = $<T>("#myTable");
        const eventHandler: TablesorterEventHandler<T> = (eventArgs, table) => {
            // $ExpectType TriggeredEvent<T, null, T, T>
            eventArgs;
            // $ExpectType T
            table;
        };

        const configEventHandler: ConfigEventHandler<T> = (eventArgs, config) => {
            // $ExpectType TriggeredEvent<T, null, T, T>
            eventArgs;
            // $ExpectType TablesorterConfigurationStore<T>
            config;
        };

        const filterEventHandler: FilterEventHandler<T> = (eventArgs, filters) => {
            // $ExpectType TriggeredEvent<T, null, T, T>
            eventArgs;
            // $ExpectType string[]
            filters;
        };

        const commonEventHandler: CommonEventHandler<T> = (eventArgs) => {
            // $ExpectType TriggeredEvent<T, null, T, T>
            eventArgs;
        };

        const pagerEventHandler: PagerEventHandler<T> = (eventArgs, options) => {
            // $ExpectType TriggeredEvent<T, null, T, T>
            eventArgs;
            // $ExpectType TablesorterConfigurationStore<T> | PagerConfigurationStore<T>
            options;
        };

        /**
         * Binding to events
         */
        table.bind("refreshComplete", eventHandler);
        table.bind("sortBegin", eventHandler);
        table.bind("sortEnd", eventHandler);
        table.bind("sortStart", eventHandler);
        table.bind("tablesorter-initialized", eventHandler);
        table.bind("tablesorter-ready", eventHandler);
        table.bind("updateComplete", eventHandler);
        table.bind("filterEnd", configEventHandler);
        table.bind("filterInit", configEventHandler);
        table.bind("filterStart", filterEventHandler);
        table.bind("stickyHeadersInit", commonEventHandler);
        table.bind("widgetRemoveEnd", eventHandler);
        table.bind("pageMoved", pagerEventHandler);
        table.bind("pagerBeforeInitialized", pagerEventHandler);
        table.bind("pagerChange", pagerEventHandler);
        table.bind("pagerComplete", pagerEventHandler);
        table.bind("pagerInitialized", pagerEventHandler);
    }
}
