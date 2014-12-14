/// <reference path="selenium-webdriver.d.ts" />
/// <reference path="executors.d.ts" />

function TestExecutors() {
    var exec: webdriver.CommandExecutor = executors.createExecutor("url");
    exec = executors.createExecutor(new webdriver.promise.Promise<string>());
}
 