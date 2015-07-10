/// <reference path="../drupal.core/drupal.core.d.ts"/>
/// <reference path="drupal.history.d.ts"/>

(function (
    Drupal: drupal.DrupalStatic,
    drupalSettings: drupal.DrupalSettings
) {

    'use strict';

    var voidCallback = function (): void {};

    Drupal.history.fetchTimestamps(
        drupalSettings.history.nodesToMarkAsRead,
        voidCallback
    );

    Drupal.history.getLastRead(drupalSettings.history.lastReadTimestamps[42]);
    Drupal.history.markAsRead(42);
    var needCheck: boolean = Drupal.history.needsServerCheck(42, 42);


}(Drupal, drupalSettings));
