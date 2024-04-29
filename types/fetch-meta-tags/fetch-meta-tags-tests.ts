import fetchMeta from "fetch-meta-tags";

// $ExpectType fetchedMeta
const data = fetchMeta("https://alessandrorabitti.com/");

// @ts-expect-error
fetchMeta(true);

// @ts-expect-error
fetchMeta(false);

// @ts-expect-error
fetchMeta(1983);

// @ts-expect-error
fetchMeta(undefined);

// @ts-expect-error
fetchMeta({});
