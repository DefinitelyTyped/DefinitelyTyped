function testConfig($aria: angular.aria.IAriaService): void {
    // $ExpectType void
    $aria.config('tabindex');

    // $ExpectError
    $aria.config('unknown-string');
}
