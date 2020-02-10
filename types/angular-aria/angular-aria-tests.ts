function testProvider($ariaProvider: angular.aria.IAriaProvider): void {
    // $ExpectType void
    $ariaProvider.config({ariaHidden: true});

    // $ExpectError
    $ariaProvider.config({ariaDisabled: 44});

    // $ExpectError
    $ariaProvider.config({unknownkey: false});
}

function testService($aria: angular.aria.IAriaService): void {
    // $ExpectType boolean
    $aria.config('tabindex');

    // $ExpectError
    $aria.config('unknown-string');
}
