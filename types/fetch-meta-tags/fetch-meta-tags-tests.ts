import fetchMeta from "fetch-meta-tags";

(async () => {
    // $ExpectType fetchedMeta<"https://alessandrorabitti.com/">
    const data = await fetchMeta("https://alessandrorabitti.com/");

    // @ts-expect-error
    await fetchMeta(true);

    // @ts-expect-error
    await fetchMeta(false);

    // @ts-expect-error
    await fetchMeta(1983);

    // @ts-expect-error
    await fetchMeta(undefined);

    // @ts-expect-error
    await fetchMeta({});
})();
