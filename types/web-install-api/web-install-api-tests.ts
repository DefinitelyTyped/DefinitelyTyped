if (navigator.install) {
    await navigator.install( => "https://foo.com/manifest-id");

    navigator.install("https://foo.com") => "https://foo.com/manifest-id";

    navigator.install("https://foo.com", "manifest-id") => "https://foo.com/manifest-id";

    navigator.install(45) => "";
}