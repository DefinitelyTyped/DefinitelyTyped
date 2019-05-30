import "jquery";
import { TestMethods } from "./Methods";

/**
 * Provides tests for the triggers.
 */
export class TestTriggers<T extends HTMLElement> extends TestMethods<T> {
    /**
     * Tests for the triggers.
     */
    Test() {
        /**
         * Invoking Methods through events
         */
        this.table.trigger("addRows", [$(), true]);
        this.table.trigger("addRows", [$(), true, this.triggerCallback]);
        this.table.trigger("addRows", [$(), this.sorting]);
        this.table.trigger("addRows", [$(), this.sorting, this.triggerCallback]);
        this.table.trigger("addRows", ["", true]);
        this.table.trigger("addRows", ["", true, this.triggerCallback]);
        this.table.trigger("addRows", ["", this.sorting]);
        this.table.trigger("addRows", ["", this.sorting, this.triggerCallback]);

        this.table.trigger("appendCache");

        this.table.trigger("applyWidgetId", "zebra");

        this.table.trigger("applyWidgets");
        this.table.trigger("applyWidgets", this.triggerCallback);

        this.table.trigger("destroy");
        this.table.trigger("destroy", [true]);
        this.table.trigger("destroy", [true, this.triggerCallback]);

        this.table.trigger("refreshWidgets");
        this.table.trigger("refreshWidgets", []);
        this.table.trigger("refreshWidgets", [true]);
        this.table.trigger("refreshWidgets", [true, true]);

        this.table.trigger("removeWidget", true);
        this.table.trigger("removeWidget", "zebra");
        this.table.trigger("removeWidget", ["zebra", "filter"]);

        this.table.trigger("resetToLoadState");

        this.table.find("th:eq(3)").trigger("sort");

        this.table.trigger("sorton", [this.sorting]);
        this.table.trigger("sorton", [this.sorting, this.triggerCallback]);
        this.table.trigger("sorton", [this.relativeSorting]);
        this.table.trigger("sorton", [this.relativeSorting, this.triggerCallback]);
        this.table.trigger("sorton", [this.mixedSorting]);
        this.table.trigger("sorton", [this.mixedSorting, this.triggerCallback]);

        this.table.trigger("sortReset");
        this.table.trigger("sortReset", []);
        this.table.trigger("sortReset", [this.triggerCallback]);

        this.table.trigger("update");
        this.table.trigger("update", [true]);
        this.table.trigger("update", [true, this.triggerCallback]);
        this.table.trigger("update", [this.sorting]);
        this.table.trigger("update", [this.sorting, this.triggerCallback]);
        this.table.trigger("updateRows");
        this.table.trigger("updateRows", [true]);
        this.table.trigger("updateRows", [true, this.triggerCallback]);
        this.table.trigger("updateRows", [this.sorting]);
        this.table.trigger("updateRows", [this.sorting, this.triggerCallback]);

        this.table.trigger("updateAll");
        this.table.trigger("updateAll", []);
        this.table.trigger("updateAll", [true]);
        this.table.trigger("updateAll", [true, this.triggerCallback]);
        this.table.trigger("updateAll", [this.sorting]);
        this.table.trigger("updateAll", [this.sorting, this.triggerCallback]);

        this.table.trigger("updateCache");
        this.table.trigger("updateCache", []);
        this.table.trigger("updateCache", [this.triggerCallback]);
        this.table.trigger("updateCache", [this.triggerCallback, $()]);

        this.table.trigger("updateCell", [$()]);
        this.table.trigger("updateCell", [$(), true]);
        this.table.trigger("updateCell", [$(), true, this.triggerCallback]);
        this.table.trigger("updateCell", [$(), this.sorting]);
        this.table.trigger("updateCell", [$(), this.sorting, this.triggerCallback]);

        this.table.trigger("updateHeaders");
        this.table.trigger("updateHeaders", this.triggerCallback);

        this.table.trigger("filterAndSortReset");

        this.table.trigger("filterReset");

        this.table.trigger("filterResetSaved");

        this.table.trigger("saveSortReset");

        this.table.trigger("search");
        this.table.trigger("search", true);
        this.table.trigger("search", [["this", "is", "a", "test"]]);

        this.table.trigger("destroyPager");

        this.table.trigger("disablePager");

        this.table.trigger("enablePager");

        this.table.trigger("pageAndSize", [3, 20]);

        this.table.trigger("pagerUpdate");
        this.table.trigger("pagerUpdate", 3);

        this.table.trigger("pageSet", 3);

        this.table.trigger("pageSize", 20);
    }
}
