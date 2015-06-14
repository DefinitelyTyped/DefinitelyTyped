/// <reference path="../drupal.core/drupal.core.d.ts"/>
/// <reference path="../jquery/jquery.d.ts"/>
/// <reference path="drupal.file.d.ts"/>

(function (
    Drupal: drupal.IDrupalStatic
) {

    'use strict';

    $('body').click(function (event: JQueryEventObject) {
        Drupal.file.validateExtension(event);
        Drupal.file.triggerUploadButton(event);
        Drupal.file.disableFields(event);
        Drupal.file.progressBar(event);
        Drupal.file.openInNewWindow(event);
    });


}(Drupal));
