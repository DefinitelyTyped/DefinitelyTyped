/// <reference path="drupal.core.d.ts"/>
/// <reference path="drupal.core-dropbutton.d.ts"/>

(function (
    $: JQueryStatic,
    Drupal: drupal.DrupalStatic
) {

    'use strict';

    var myDropButton: drupal.Core.DropButton = new Drupal.DropButton(
        $('.my-drop-button'),
        {
            title: 'Foo'
        }
    );

    var themedDropButton: string = Drupal.theme.dropbuttonToggle({title: 'Foo'});

    Drupal.DropButton.dropbuttons.push(myDropButton);
    myDropButton.toggle(true);
    myDropButton.hoverIn();
    myDropButton.hoverOut();
    myDropButton.focusIn();
    myDropButton.focusOut();
    myDropButton.open();
    myDropButton.close();

}(jQuery, Drupal));
