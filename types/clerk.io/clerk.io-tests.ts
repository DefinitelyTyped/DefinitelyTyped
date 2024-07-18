// @ts-expect-error
window.Clerk("click", 1);

// @ts-expect-error
window.Clerk("call", "test");

(async () => {
    if (!window.Clerk) {
        return;
    }

    // $ExpectType ClerkResponseSearchPredictive
    const response = await window.Clerk("call", "search/predictive", {
        query: "predictive",
        limit: 5,
    });

    // @ts-expect-error
    response.results;

    // $ExpectType number[]
    response.result;

    const searchResponse = await window.Clerk("call", "search/search", {
        query: "test",
        limit: 10,
    });

    // $ExpectType string
    searchResponse.query;
});
