function testConfig($aria: angular.aria.IAriaService): void {
    // $ExpectType boolean
    $aria.config('tabindex');

    // $ExpectError
    $aria.config('unknown-string');
}
