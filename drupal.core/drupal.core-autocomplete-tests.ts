/// <reference path="drupal.core.d.ts"/>
/// <reference path="drupal.core-autocomplete.d.ts"/>

(function (
    Drupal: drupal.IDrupalStatic
) {

    'use strict';

    var dataToCache: any = 'Foo:Bar';

    Drupal.autocomplete.cache = dataToCache;

    var fragments: string[] = Drupal.autocomplete.splitValues(dataToCache.toString());
    fragments.push(Drupal.autocomplete.extractLastTerm('foo:bar'));

    Drupal.autocomplete.options.firstCharacterBlacklist = fragments[0];

}(Drupal));
