/// <reference path="../drupal.core/drupal.core.d.ts"/>
/// <reference path="drupal.core-dialog.d.ts"/>

(function (
    $: JQueryStatic,
   Drupal: drupal.DrupalStatic,
   drupalSettings: drupal.DrupalSettings
) {

    'use strict';

    var behavior: drupal.Core.BehaviorDialog;

    behavior = Drupal.behaviors.dialog;

    var buttonDefinitions: drupal.Core.DialogButtonDefinition[];
    buttonDefinitions = behavior.prepareDialogButtons($('#foo'));
    buttonDefinitions[0].text = 'foo';
    buttonDefinitions[0].class = 'foo';
    $('#bar').click(buttonDefinitions[0].click);

    var dialogHandler: drupal.Core.DialogHandler;
    var element: HTMLElement = document.getElementById('foo');
    var dialogOptions: drupal.Core.DrupalSettingsDialog;

    dialogOptions = {
        autoResize: true,
        maxHeight: 100
    };
    dialogOptions.buttonClass = 'foo';
    dialogOptions.buttonPrimaryClass = 'foo';

    dialogHandler = Drupal.dialog(element, dialogOptions);
    dialogHandler.open = true;
    dialogHandler.returnValue = true;
    dialogHandler.returnValue = 42;
    dialogHandler.show();
    dialogHandler.showModal();
    dialogHandler.close(false);
    dialogHandler.close(42);

    var ajaxCommand: drupal.Core.AjaxCommand;

    ajaxCommand = Drupal.AjaxCommands.openDialog;
    ajaxCommand = Drupal.AjaxCommands.closeDialog;
    ajaxCommand = Drupal.AjaxCommands.setDialogOption;

    dialogOptions = drupalSettings.dialog;

}(jQuery, Drupal, drupalSettings));
