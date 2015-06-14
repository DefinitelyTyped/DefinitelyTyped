/// <reference path="drupal.core.d.ts"/>
/// <reference path="drupal.core-ajax.d.ts"/>

(function (
    Drupal: drupal.DrupalStatic
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

    Drupal.AjaxCommands['restripe'](
        ajax,
        new XMLHttpRequest(),
        false
    );

}(Drupal));
