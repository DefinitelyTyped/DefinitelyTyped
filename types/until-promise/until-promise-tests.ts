import pollUntil from "until-promise";

pollUntil(
    async () => Promise.resolve(true),
    (value) => value,
    {
        duration: 1000,
        wait: 10,
        retries: 10,
    },
).catch((error) => {
    throw error;
});

pollUntil(
    () => false,
    (value) => value,
    {
        duration: 1000,
        wait: 10,
        retries: 10,
    },
).catch((error) => {
    throw error;
});

pollUntil(
    () => false,
    (value) => value,
).catch((error) => {
    throw error;
});
