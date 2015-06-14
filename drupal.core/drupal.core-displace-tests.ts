/// <reference path="drupal.core.d.ts"/>
/// <reference path="drupal.core-displace.d.ts"/>

(function (
    Drupal: drupal.IDrupalStatic
) {

    'use strict';

    var behavior: drupal.Core.IBehavior;
    behavior = Drupal.behaviors.drupalDisplace;

    var offset: drupal.Core.IOffsets = Drupal.displace(true);
    offset.top = 42;
    offset.left = 42;
    offset.bottom = 42;
    offset.right = 42;

    var myDisplace = new Drupal.displace();
    myDisplace.offsets.top = myDisplace.calculateOffset('top');

}(Drupal));
