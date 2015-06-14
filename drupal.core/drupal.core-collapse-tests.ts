/// <reference path="drupal.core.d.ts"/>
/// <reference path="drupal.core-collapse.d.ts"/>

(function (
    $: JQueryStatic,
    Drupal: drupal.IDrupalStatic
) {

    'use strict';

    var collapsibleDetails: drupal.Core.ICollapsibleDetails
        = new Drupal.CollapsibleDetails($('details').get(0));

    var callbackNoneVoid = function (): void {};
    var callbackEventVoid = function (e: Event): void {};

    Drupal.CollapsibleDetails.instances.push(collapsibleDetails);
    collapsibleDetails.setupSummary = callbackNoneVoid;
    collapsibleDetails.setupLegend = callbackNoneVoid;
    collapsibleDetails.onLegendClick = callbackEventVoid;
    collapsibleDetails.onSummaryUpdated = callbackNoneVoid;
    collapsibleDetails.toggle = callbackNoneVoid;

}(jQuery, Drupal));
