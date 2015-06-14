/// <reference path="../drupal.core/drupal.core.d.ts"/>
/// <reference path="drupal.core-timezone.d.ts"/>

(function (
    Drupal: drupal.IDrupalStatic
) {

    'use strict';

    var behavior: drupal.Core.IBehavior;

    behavior = Drupal.behaviors.setTimezone;

}(Drupal));
