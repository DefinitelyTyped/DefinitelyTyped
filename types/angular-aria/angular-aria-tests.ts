const app = angular.module('testModule', ['ngAria']);

app.config(($ariaProvider: angular.aria.IAriaProvider) => {
    $ariaProvider.config({
        ariaChecked: true,
        ariaDisabled: true,
        ariaHidden: true,
        ariaInvalid: true,
        ariaReadonly: true,
        ariaRequired: true,
        ariaValue: true,
        bindKeydown: true,
        bindRoleForClick: true,
        tabindex: true,
    });
});
