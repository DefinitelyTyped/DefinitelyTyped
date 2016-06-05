// Type definitions for argv
// Project: https://www.npmjs.com/package/argv
// Definitions by: Hookclaw <https://github.com/hookclaw>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
declare module "argv" {
    // argv module
    type args = {
        targets:string[],
        options:{[key:string]:any}
    };

    type helpOption = {
        name: string,
        type: string,
        short?: string,
        description?: string,
        example?: string
    };

    type module = {
        mod: string,
        description: string,
        options: {[key:string]:helpOption}
    };
    
    type typeFunction = (value:any, ...arglist:any[]) => any;
    
    type argv = {
        
        // Runs the arguments parser
        run: ( argv?:string[] ) => args,
        
        // Adding options to definitions list
        option: ( mod:helpOption|helpOption[] ) => argv,

        // Creating module
        mod: ( object:module|module[] ) => argv,

        // Creates custom type function
        type: ( name:string|{[key:string]:typeFunction}, callback?:typeFunction ) => any,

        // Setting version number, and auto setting version option
        version: ( v:string ) => argv,

        // Description setup
        info: ( mod:string, description?:module ) => argv,

        // Cleans out current options
        clear: () => argv,

        // Prints out the help doc
        help: ( mod?:string ) => argv

    };

    var argv:argv;
    
    export = argv;
}
