import commandExists from "command-exists-promise";

(async (): Promise<void> => {
    await commandExists("ls"); //$ExpectType boolean
})();
