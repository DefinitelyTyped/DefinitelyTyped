/// <reference path="../drupal.core/drupal.core.d.ts"/>
/// <reference path="drupal.core-dialog.d.ts"/>

(function (
    $: JQueryStatic,
   Drupal: drupal.IDrupalStatic,
   drupalSettings: drupal.IDrupalSettings
) {

    'use strict';

    var behavior: drupal.Core.IBehaviorDialog;

    behavior = Drupal.behaviors.dialog;

    var buttonDefinitions: drupal.Core.IDialogButtonDefinition[];
    buttonDefinitions = behavior.prepareDialogButtons($('#foo'));
    buttonDefinitions[0].text = 'foo';
    buttonDefinitions[0].class = 'foo';
    $('#bar').click(buttonDefinitions[0].click);

    var dialogHandler: drupal.Core.IDialogHandler;
    var element: HTMLElement = document.getElementById('foo');
    var dialogOptions: drupal.Core.IDrupalSettingsDialog;

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

    var ajaxCommand: drupal.Core.IAjaxCommand;

    ajaxCommand = Drupal.AjaxCommands.openDialog;
    ajaxCommand = Drupal.AjaxCommands.closeDialog;
    ajaxCommand = Drupal.AjaxCommands.setDialogOption;

    dialogOptions = drupalSettings.dialog;

}(jQuery, Drupal, drupalSettings));
