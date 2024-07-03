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
    console.log(response.results);

    // $ExpectType number
    console.log(response.result);
});
