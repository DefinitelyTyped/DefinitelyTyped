if (navigator.install) {
    // $ExpectType Promise<string>
    navigator.install();

    // $ExpectType Promise<string>
    navigator.install("https://foo.com");

    // $ExpectType Promise<string>
    navigator.install("https://foo.com", "manifest-id");

    // @ts-expect-error
    navigator.install(45);
}
