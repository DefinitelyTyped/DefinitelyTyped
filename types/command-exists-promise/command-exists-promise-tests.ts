import commandExists from "command-exists-promise";

(async (): Promise<void> => {
    // $ExpectType boolean
    await commandExists("ls");

    // @ts-expect-error
    await commandExists();
})();
