/// <reference path="../drupal.core/drupal.core.d.ts"/>
/// <reference path="drupal.block.d.ts"/>

(function (
    Drupal: drupal.IDrupalStatic
) {

    'use strict';

    var behavior: drupal.Core.IBehavior;

    behavior = Drupal.behaviors.blockContentDetailsSummaries;
    behavior = Drupal.behaviors.blockDrag;
    behavior = Drupal.behaviors.blockFilterByText;
    behavior = Drupal.behaviors.blockHighlightPlacement;
    behavior = Drupal.behaviors.blockSettingsSummary;

}(Drupal));
