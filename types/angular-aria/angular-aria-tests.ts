function testProvider($ariaProvider: angular.aria.IAriaProvider): void {
    // $ExpectType void
    $ariaProvider.config({ariaHidden: true});

    // $ExpectType void
    $ariaProvider.config({ariaChecked: true, ariaReadonly: false});

    // @ts-expect-error
    $ariaProvider.config({ariaDisabled: 44});

    // @ts-expect-error
    $ariaProvider.config({unknownkey: false});
}

function testService($aria: angular.aria.IAriaService): void {
    // $ExpectType boolean
    $aria.config('tabindex');

    // @ts-expect-error
    $aria.config('unknown-string');
}
