import "./Tests";
import { SortDefinitionOrder, TriggerCallbackHandler, SortDefinition, RelativeSortDefinition, Parser, Widget, ParsedCell, TablesorterHeading, StorageConfiguration } from "tablesorter";
import { RelativeSorting } from "tablesorter/Sorting/RelativeSorting";
import { StorageType } from "tablesorter/Storage/StorageType";

/**
 * Provides tests for the methods.
 */
export class TestMethods<T extends HTMLElement> {
    /**
     * A jQuery-object for testing.
     */
    protected table = $<T>("");

    /**
     * A set of sort-definitions for testing.
     */
    protected sorting: ReadonlyArray<SortDefinition> = [[0, 1], [1, 0]];

    /**
     * A set of relative sort-definitions for testing.
     */
    protected relativeSorting: ReadonlyArray<RelativeSortDefinition> = [[0, "o"], [1, "s"]];

    /**
     * A set of mixed sort-definitions for testing.
     */
    protected mixedSorting: ReadonlyArray<SortDefinition | RelativeSortDefinition> = [
        [0, "d"],
        [1, "o"]];

    /**
     * A trigger-callback for testing.
     */
    protected triggerCallback: TriggerCallbackHandler<T> = (table) => {
        // $ExpectType T
        table;
    }

    /**
     * Tests for the methods.
     */
    Test() {
        const $: JQueryStatic<T> = {} as any;
        const tableElement = this.table[0];
        const config = this.table[0].config;
        const parser: Parser<T> = {} as any;
        const widget: Widget<T> = {} as any;
        const parsedCellCallback = (cell: ParsedCell): void => { };
        const ajaxSettings: JQuery.AjaxSettings = {} as any;
        const request: JQuery.jqXHR = {} as any;
        const storageConfig: StorageConfiguration = {
            group: "",
            id: "",
            page: "",
            storageType: "c",
            url: ""
        };

        /**
         * Methods
         * Invoking methods directly
         */
        $.tablesorter.addHeaderResizeEvent(this.table, true);
        $.tablesorter.addHeaderResizeEvent(this.table, true, { timer: 20 });
        $.tablesorter.addHeaderResizeEvent(tableElement, true);
        $.tablesorter.addHeaderResizeEvent(tableElement, true, { timer: 20 });

        $.tablesorter.addRows(config, $(), true);
        $.tablesorter.addRows(config, $(), true, this.triggerCallback);
        $.tablesorter.addRows(config, $(), this.sorting);
        $.tablesorter.addRows(config, $(), this.sorting, this.triggerCallback);
        $.tablesorter.addRows(config, "", true);
        $.tablesorter.addRows(config, "", true, this.triggerCallback);
        $.tablesorter.addRows(config, "", this.sorting);
        $.tablesorter.addRows(config, "", this.sorting, this.triggerCallback);

        $.tablesorter.addInstanceMethods({ hello: () => null });
        $.tablesorter.addInstanceMethods({ world() { } });

        $.tablesorter.addParser(parser);

        $.tablesorter.addWidget(widget);

        $.tablesorter.appendCache(config);

        $.tablesorter.applyWidget(this.table);
        $.tablesorter.applyWidget(this.table, true);
        $.tablesorter.applyWidget(this.table, true, this.triggerCallback);
        $.tablesorter.applyWidget(tableElement);
        $.tablesorter.applyWidget(tableElement, true);
        $.tablesorter.applyWidget(tableElement, true, this.triggerCallback);

        $.tablesorter.applyWidgetId(this.table, "zebra");
        $.tablesorter.applyWidgetId(tableElement, "zebra");

        $.tablesorter.bindEvents(this.table, $());
        $.tablesorter.bindEvents(tableElement, $());

        $.tablesorter.clearTableBody(this.table);
        $.tablesorter.clearTableBody(tableElement);

        $.tablesorter.computeColumnIndex($(), config);

        $.tablesorter.destroy(this.table);
        $.tablesorter.destroy(this.table, true);
        $.tablesorter.destroy(this.table, true, this.triggerCallback);
        $.tablesorter.destroy(tableElement);
        $.tablesorter.destroy(tableElement, true);
        $.tablesorter.destroy(tableElement, true, this.triggerCallback);

        $.tablesorter.fixColumnWidth(this.table);
        $.tablesorter.fixColumnWidth(tableElement);

        $.tablesorter.formatFloat("", this.table);
        $.tablesorter.formatFloat("", tableElement);

        // $ExpectType Widget<T>
        $.tablesorter.getColumnData(this.table, { 0: widget, "*": widget }, 0);
        // $ExpectType Widget<T>
        $.tablesorter.getColumnData(this.table, { 0: widget, "*": widget }, "*");
        // $ExpectType Widget<T>
        $.tablesorter.getColumnData(tableElement, { 0: widget, "*": widget }, 0);
        // $ExpectType Widget<T>
        $.tablesorter.getColumnData(tableElement, { 0: widget, "*": widget }, "*");

        $.tablesorter.getColumnText(this.table, 0);
        $.tablesorter.getColumnText(this.table, 0, parsedCellCallback);
        $.tablesorter.getColumnText(this.table, 0, parsedCellCallback, "*");
        $.tablesorter.getColumnText(this.table, 0, parsedCellCallback, $());
        $.tablesorter.getColumnText(this.table, 0, parsedCellCallback, $()[0]);
        $.tablesorter.getColumnText(
            this.table,
            0,
            parsedCellCallback,
            (index, element) => {
                // $ExpectType number
                index;
                // $ExpectType HTMLElement
                element;
                return true;
            });
        $.tablesorter.getColumnText(tableElement, 0);
        $.tablesorter.getColumnText(tableElement, 0, parsedCellCallback);
        $.tablesorter.getColumnText(tableElement, 0, parsedCellCallback, "*");
        $.tablesorter.getColumnText(tableElement, 0, parsedCellCallback, $());
        $.tablesorter.getColumnText(tableElement, 0, parsedCellCallback, $()[0]);
        $.tablesorter.getColumnText(
            tableElement,
            0,
            parsedCellCallback,
            (index, element) => {
                // $ExpectType number
                index;
                // $ExpectType HTMLElement
                element;
                return true;
            });

        // $ExpectType string | boolean | undefined
        $.tablesorter.getData($(), config.headers[0], "sorter");
        // $ExpectType string | boolean | undefined
        $.tablesorter.getData($()[0], config.headers[0], "sorter");
        // $ExpectType "top" | "bottom" | "zero" | "min" | "max" | undefined || "top" | "bottom" | "min" | "max" | "zero" | undefined
        $.tablesorter.getData($(), config.headers[0], "string");
        // $ExpectType "top" | "bottom" | "zero" | "min" | "max" | undefined || "top" | "bottom" | "min" | "max" | "zero" | undefined
        $.tablesorter.getData($()[0], config.headers[0], "string");

        // $ExpectType string[]
        $.tablesorter.getFilters(this.table);
        // $ExpectType string[]
        $.tablesorter.getFilters(this.table, true);
        // $ExpectType string[]
        $.tablesorter.getFilters(tableElement);
        // $ExpectType string[]
        $.tablesorter.getFilters(tableElement, true);

        // $ExpectType Widget<T>
        $.tablesorter.getWidgetById("");

        // $ExpectType boolean
        $.tablesorter.hasWidget(this.table, "");
        // $ExpectType boolean
        $.tablesorter.hasWidget(tableElement, "");

        // $ExpectType boolean
        $.tablesorter.isDigit("");

        $.tablesorter.isProcessing(this.table, true);
        $.tablesorter.isProcessing(this.table, true, $());
        $.tablesorter.isProcessing(tableElement, true);
        $.tablesorter.isProcessing(tableElement, true, $());

        // $ExpectType boolean
        $.tablesorter.isValueInArray(2, this.sorting);
        // $ExpectType boolean
        $.tablesorter.isValueInArray(2, [[0, "this.table"], [1, 2102311923084], [3, {}]]);

        // $ExpectType void
        $.tablesorter.processTbody(this.table, $());
        // $ExpectType void
        $.tablesorter.processTbody(this.table, $(), false);
        // $ExpectType JQuery<HTMLElement>
        $.tablesorter.processTbody(this.table, $(), true);
        // $ExpectType void
        $.tablesorter.processTbody(tableElement, $());
        // $ExpectType void
        $.tablesorter.processTbody(tableElement, $(), false);
        // $ExpectType JQuery<HTMLElement>
        $.tablesorter.processTbody(tableElement, $(), true);

        $.tablesorter.refreshWidgets(this.table);
        $.tablesorter.refreshWidgets(this.table, true);
        $.tablesorter.refreshWidgets(this.table, true, true);
        $.tablesorter.refreshWidgets(tableElement);
        $.tablesorter.refreshWidgets(tableElement, true);
        $.tablesorter.refreshWidgets(tableElement, true, true);

        $.tablesorter.removeWidget(this.table, true);
        $.tablesorter.removeWidget(this.table, true, true);
        $.tablesorter.removeWidget(this.table, "");
        $.tablesorter.removeWidget(this.table, "", true);
        $.tablesorter.removeWidget(this.table, ["", ""]);
        $.tablesorter.removeWidget(this.table, ["", ""], true);
        $.tablesorter.removeWidget(tableElement, true);
        $.tablesorter.removeWidget(tableElement, true, true);
        $.tablesorter.removeWidget(tableElement, "");
        $.tablesorter.removeWidget(tableElement, "", true);
        $.tablesorter.removeWidget(tableElement, ["", ""]);
        $.tablesorter.removeWidget(tableElement, ["", ""], true);

        // $ExpectType string
        $.tablesorter.replaceAccents("");

        $.tablesorter.resizableReset(this.table);
        $.tablesorter.resizableReset(this.table, true);
        $.tablesorter.resizableReset(tableElement);
        $.tablesorter.resizableReset(tableElement, true);

        $.tablesorter.restoreHeaders(this.table);
        $.tablesorter.restoreHeaders(tableElement);

        $.tablesorter.setFilters(this.table, [""]);
        $.tablesorter.setFilters(this.table, [""], true);
        $.tablesorter.setFilters(tableElement, [""]);
        $.tablesorter.setFilters(tableElement, [""], true);

        $.tablesorter.showError(this.table, "", ajaxSettings, "");
        $.tablesorter.showError(this.table, request, ajaxSettings, "");
        $.tablesorter.showError(tableElement, "", ajaxSettings, "");
        $.tablesorter.showError(tableElement, request, ajaxSettings, "");

        // $ExpectType number
        $.tablesorter.sortNatural("", "");

        // $ExpectType number
        $.tablesorter.sortText("", "");

        $.tablesorter.sortOn(config, this.sorting);
        $.tablesorter.sortOn(config, this.sorting, this.triggerCallback);
        $.tablesorter.sortOn(config, this.relativeSorting);
        $.tablesorter.sortOn(config, this.relativeSorting, this.triggerCallback);
        $.tablesorter.sortOn(config, this.mixedSorting);
        $.tablesorter.sortOn(config, this.mixedSorting, this.triggerCallback);

        $.tablesorter.sortReset(config);
        $.tablesorter.sortReset(config, this.triggerCallback);

        // $ExpectType any
        $.tablesorter.storage(this.table, "");
        // $ExpectType void
        $.tablesorter.storage(this.table, "", {});
        // $ExpectType void
        $.tablesorter.storage(this.table, "", {}, storageConfig);
        // $ExpectType any
        $.tablesorter.storage(tableElement, "");
        // $ExpectType void
        $.tablesorter.storage(tableElement, "", {});
        // $ExpectType void
        $.tablesorter.storage(tableElement, "", {}, storageConfig);

        $.tablesorter.update(config);
        $.tablesorter.update(config, true);
        $.tablesorter.update(config, true, this.triggerCallback);
        $.tablesorter.update(config, this.sorting);
        $.tablesorter.update(config, this.sorting, this.triggerCallback);
        $.tablesorter.updateRows(config);
        $.tablesorter.updateRows(config, true);
        $.tablesorter.updateRows(config, true, this.triggerCallback);
        $.tablesorter.updateRows(config, this.sorting);
        $.tablesorter.updateRows(config, this.sorting, this.triggerCallback);

        $.tablesorter.updateAll(config);
        $.tablesorter.updateAll(config, true);
        $.tablesorter.updateAll(config, true, this.triggerCallback);
        $.tablesorter.updateAll(config, this.sorting);
        $.tablesorter.updateAll(config, this.sorting, this.triggerCallback);

        $.tablesorter.updateCache(config);
        $.tablesorter.updateCache(config, this.triggerCallback);
        $.tablesorter.updateCache(config, this.triggerCallback, $());

        $.tablesorter.updateCell(config, $());
        $.tablesorter.updateCell(config, $(), true);
        $.tablesorter.updateCell(config, $(), true, this.triggerCallback);
        $.tablesorter.updateCell(config, $(), this.sorting);
        $.tablesorter.updateCell(config, $(), this.sorting, this.triggerCallback);

        $.tablesorter.updateHeaders(config);
        $.tablesorter.updateHeaders(config, this.triggerCallback);

        $.tablesorter.filter.bindSearch(this.table, $(), true);
        $.tablesorter.filter.bindSearch(tableElement, $(), true);

        $.tablesorter.filter.buildSelect(this.table, 0, [1, 2, 3, 4], true);
        $.tablesorter.filter.buildSelect(this.table, 0, [1, 2, 3, 4], true, true);
        $.tablesorter.filter.buildSelect(this.table, 0, "", true);
        $.tablesorter.filter.buildSelect(this.table, 0, "", true, true);
        $.tablesorter.filter.buildSelect(this.table, 0, $(), true);
        $.tablesorter.filter.buildSelect(this.table, 0, $(), true, true);
        $.tablesorter.filter.buildSelect(tableElement, 0, [1, 2, 3, 4], true);
        $.tablesorter.filter.buildSelect(tableElement, 0, [1, 2, 3, 4], true, true);
        $.tablesorter.filter.buildSelect(tableElement, 0, "", true);
        $.tablesorter.filter.buildSelect(tableElement, 0, "", true, true);
        $.tablesorter.filter.buildSelect(tableElement, 0, $(), true);
        $.tablesorter.filter.buildSelect(tableElement, 0, $(), true, true);

        // $ExpectType string[]
        $.tablesorter.filter.getOptions(this.table, 0);
        // $ExpectType string[]
        $.tablesorter.filter.getOptions(this.table, 0, true);
        // $ExpectType string[]
        $.tablesorter.filter.getOptions(tableElement, 0);
        // $ExpectType string[]
        $.tablesorter.filter.getOptions(tableElement, 0, true);

        // $ExpectType ParsedOption[]
        $.tablesorter.filter.getOptionSource(this.table, 0);
        // $ExpectType ParsedOption[]
        $.tablesorter.filter.getOptionSource(this.table, 0, true);
        // $ExpectType ParsedOption[]
        $.tablesorter.filter.getOptionSource(tableElement, 0);
        // $ExpectType ParsedOption[]
        $.tablesorter.filter.getOptionSource(tableElement, 0, true);

        // $ExpectType string[]
        $.tablesorter.filter.processOptions(this.table, 0, []);
        // $ExpectType string[]
        $.tablesorter.filter.processOptions(this.table, null, []);
    }
}
