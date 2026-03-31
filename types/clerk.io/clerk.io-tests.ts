import { ConfigTypes, ResponseTypes } from "clerk.io";

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

    // Test that newly exported ConfigTypes are accessible
    const searchConfig: ConfigTypes["search/search"] = {
        key: "test-key",
        query: "test",
        limit: 10,
    };

    // Test that newly exported ResponseTypes are accessible
    const searchResponse: ResponseTypes["search/search"] = {
        result: ["product1", "product2"],
        count: 2,
        facets: null,
        status: "ok",
    };
}
