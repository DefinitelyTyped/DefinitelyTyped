declare module executors {
    /** 
     * Creates a command executor that uses WebDriver's JSON wire protocol. 
     * @param url The server's URL, or a promise that will resolve to that URL. 
     * @returns {!webdriver.CommandExecutor} The new command executor. 
     */
    function createExecutor(url: string): webdriver.CommandExecutor;
    function createExecutor(url: webdriver.promise.Promise<string>): webdriver.CommandExecutor; 
}
 
declare module 'selenium-webdriver/executors' {
    export = executors;
} 
