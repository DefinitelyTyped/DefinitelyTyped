/// <reference path="drupal.core.d.ts"/>
/// <reference path="drupal.core-form.d.ts"/>

(function (
    $: JQueryStatic
) {

    'use strict';

    var summaryGetter = function (element: HTMLElement): string {
        return 'My summary 02';
    };

    var summary01: string = 'My summary 01';

    var summary02: string = $('input.foo-1')
        .drupalSetSummary(summary01)
        .drupalGetSummary();

    $('input.foo-2').drupalSetSummary(summaryGetter);

}(jQuery));
