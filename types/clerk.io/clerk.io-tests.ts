// @ts-expect-error
window.Clerk("click", 1);

// @ts-expect-error
window.Clerk("call", "test");

(async () => {
    if (!window.Clerk) {
        return;
    }

    // $ExpectType Promise<ClerkResponseSearchPredictive>
    window.Clerk("call", "search/predictive", {
        query: "predictive",
        limit: 5,
    });
});
