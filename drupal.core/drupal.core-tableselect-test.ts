/// <reference path="drupal.core.d.ts"/>
/// <reference path="drupal.core-tableselect.d.ts"/>

(function (
    $: JQueryStatic,
    Drupal: drupal.DrupalStatic
) {

    'use strict';

    var $myTable: JQuery = $('table tr');

    Drupal.tableSelect();
    Drupal.tableSelectRange(
        <HTMLTableRowElement>$myTable.get(0),
        <HTMLTableRowElement>$myTable.get(42),
        false
    );

}(jQuery, Drupal));
