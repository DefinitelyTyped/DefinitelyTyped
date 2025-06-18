import fetchMeta from "fetch-meta-tags";

(async () => {
    // $ExpectType fetchedMeta<"https://alessandrorabitti.com/">
    const data1 = await fetchMeta("https://alessandrorabitti.com/");

    // $ExpectType fetchedMeta<"https://alessandrorabitti.com/">
    const data2 = await fetchMeta("https://alessandrorabitti.com/", { cache: "no-cache" });

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
