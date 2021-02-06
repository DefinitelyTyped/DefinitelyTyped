// Type definitions for Commangular Mock 0.9.0
// Project: http://commangular.org
// Definitions by: Hiraash Thawfeek <https://github.com/hiraash>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

declare module commangular {

    ///////////////////////////////////////////////////////////////////////////
    // Commangular Static
    // see http://commangular.org/docs/#commangular-namespace
    ///////////////////////////////////////////////////////////////////////////
    interface ICommAngularStatic {

        /**
         * Mock dispatch function for testing commands.
         */
        dispatch( ec: ICommandCall, callback: Function ): void;
    }

    interface ICommandCall {
        /**
         * Name of the command that needs to
         * execute
         */
        command: string;

        /**
         * Data that needs to be passed to the command
         */
        data?: any;
    }


    /**
     * Object type expected to be passed into the callback function
     * of the dispatch() function
     */
    interface ICommandInfo {
        /**
         * The data that was passed into the command
         * @param key The property name that is in the object that was passed
         */
        dataPassed( key : string ) : any;

        /**
         * The data that was returned by the command
         * @param key The result key that was defined in the command. If no result
         *         was defined use 'lastResult' as the key
         */
        resultKey( key: string ): any;

        /**
         * Indicates if the command execution was cancelled.
         */
        canceled( ): boolean;

        /**
         * Indicates if the command was executed????
         */
        commandExecuted( ): boolean;
    }

}


/**
* Mock dispatch function for testing commands.
* @param ec an ICommandCall object
* @param callback The function that will be called upon the completion of the command
*         function should expecte an ICommandInfo parameter.
*/
declare function dispatch( ec: commangular.ICommandCall, callback: Function ): void;
