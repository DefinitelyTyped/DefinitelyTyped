/// <reference path="drupal.core.d.ts"/>
/// <reference path="drupal.core-announce.d.ts"/>

(function (
    Drupal: drupal.DrupalStatic
) {

    'use strict';

    var foo: any = Drupal.announce('foo', 'high');

}(Drupal));
