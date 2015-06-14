/// <reference path="drupal.core.d.ts"/>
/// <reference path="drupal.core-machine_name.d.ts"/>

(function (
    drupalSettings: drupal.DrupalSettings
) {

    'use strict';

    var myMachineName: drupal.Core.DrupalSettingsMachineNameEntry;
    myMachineName = drupalSettings.machineName['foo'];
    myMachineName.target = 'Foo';
    myMachineName.suffix = 'Foo';
    myMachineName.label = 'Foo';
    myMachineName.replace_pattern = 'Foo';
    myMachineName.replace = 'Foo';
    myMachineName.standalone = false;
    myMachineName.field_prefix = 'Foo';
    myMachineName.field_suffix = 'Foo';
    myMachineName.maxlength = 42;

}(drupalSettings));
