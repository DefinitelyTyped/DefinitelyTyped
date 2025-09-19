if (window.Clerk) {
    // @ts-expect-error
    window.Clerk("click", 1);

    // @ts-expect-error
    window.Clerk("call", "invalid-endpoint");

    // Test basic API calls
    window.Clerk("call", "search/predictive", {
        key: "test-key",
        query: "test",
        limit: 5,
    }, (response) => {
        response.result; // $ExpectType (string | number)[]
        response.query; // $ExpectType string
        // @ts-expect-error
        response.results;
    });

    // Test config
    window.Clerk("config", {
        key: "test-key",
        visitor: "auto",
    });

    // Test cart operations
    window.Clerk("cart", "add", "product-123");

    // Test event handling
    window.Clerk("on", "rendered", (content) => {
        content.element; // $ExpectType HTMLElement
        content.more(5);
    });
}
