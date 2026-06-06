/**
 * Prints hosting instructions after the project is built.
 */
declare function printHostingInstructions(
    appPackage: object,
    publicUrl: string,
    publicPath: string,
    buildFolder: string,
    useYarn: boolean,
): void;

export = printHostingInstructions;
