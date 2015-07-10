/// <reference path="drupal.core.d.ts"/>
/// <reference path="../jquery/jquery.d.ts"/>
/// <reference path="drupal.core-tableresponsive.d.ts"/>

(function (
    $: JQueryStatic,
    Drupal: drupal.DrupalStatic
) {

    'use strict';

    var myTable: drupal.Core.TableResponsive
        = new Drupal.TableResponsive($('table').get(0));

    Drupal.TableResponsive.tables.push(myTable);

    myTable.showText = 'Show';
    myTable.hideText = 'Hide';
    myTable.$headers = $('thead', myTable.table);
    myTable.$link = $('a');

    myTable.$table.click(myTable.eventhandlerEvaluateColumnVisibility);
    myTable.$table.click(myTable.eventhandlerToggleColumns);

}(jQuery, Drupal));
