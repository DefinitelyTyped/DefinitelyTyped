/// <reference path="../drupal.core/drupal.core.d.ts"/>
/// <reference path="../drupal.core/drupal.core-ajax.d.ts"/>
/// <reference path="drupal.views_ui.d.ts"/>

(function (
    $: JQueryStatic,
    Drupal: drupal.IDrupalStatic
) {

    'use strict';

    var ajax = new Drupal.Ajax(
        'foo',
        new HTMLElement(),
        {
            url: 'http://example.com',
            event: 'click',
            method: 'replace',
            dialog: {}
        }
    );

    Drupal.AjaxCommands.viewsHighlight(
        ajax,
        new XMLHttpRequest(),
        false
    );

    Drupal.AjaxCommands.viewsShowButtons(
        ajax,
        new XMLHttpRequest(),
        false
    );

    Drupal.AjaxCommands.viewsTriggerPreview(
        ajax,
        new XMLHttpRequest(),
        false
    );

    Drupal.AjaxCommands.viewsReplaceTitle(
        ajax,
        new XMLHttpRequest(),
        false
    );

}(jQuery, Drupal));
