/// <reference path="../drupal.core/drupal.core.d.ts"/>
/// <reference path="drupal.simpletest.d.ts"/>

(function (Drupal: drupal.DrupalStatic) {

    'use strict';

    var behavior: drupal.Core.Behavior;

    behavior = Drupal.behaviors.simpleTestGroupCollapse;
    behavior = Drupal.behaviors.simpleTestSelectAll;
    behavior = Drupal.behaviors.simpletestTableFilterByText;

}(Drupal));
