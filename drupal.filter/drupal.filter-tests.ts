/// <reference path="../drupal.core/drupal.core.d.ts"/>
/// <reference path="drupal.filter.d.ts"/>

(function (
    Drupal: drupal.DrupalStatic
) {

    'use strict';

    var behavior: drupal.Core.Behavior;

    behavior = Drupal.behaviors.filterFilterHtmlUpdating;
    behavior = Drupal.behaviors.filterGuidelines;
    behavior = Drupal.behaviors.filterStatus;

}(Drupal));
