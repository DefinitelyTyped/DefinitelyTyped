let app: angular.IModule = angular.module('at', ['blockUI']);

app.config((blockUIConfig: angular.blockUI.BlockUIConfig) => {
    blockUIConfig.message = 'Please stop clicking!';
    blockUIConfig.delay = 100;
    blockUIConfig.template = '<pre><code>{{ state | json }}</code></pre>';
    blockUIConfig.templateUrl = 'my-templates/block-ui-overlay.html';
    blockUIConfig.autoBlock = false;
    blockUIConfig.resetOnException = false;
    blockUIConfig.autoInjectBodyBlock = false;
    blockUIConfig.cssClass = 'block-ui my-custom-class';
    blockUIConfig.blockBrowserNavigation = true;

    blockUIConfig.requestFilter = (config) => {
        if (config.url.match(/^\/api\/quote($|\/).*/)) {
            return false;
        }
        return true;
    };

    blockUIConfig.requestFilter = (config) => {
        if (config.url.match(/^\/api\/quote($|\/).*/)) {
            return 'Hello World';
        }
        return 'Loading...';
    };
});

app.controller('Ctrl', ($scope: ng.IScope, blockUI: angular.blockUI.BlockUIService) => {
    blockUI.start();
    blockUI.start('Hello');
    blockUI.start({});
    blockUI.start({message: 'World'});
    blockUI.start({delay: 100});

    blockUI.stop();
    blockUI.reset();
    blockUI.message("Hello Types");
    blockUI.done(() => {
        console.log("blockUI stopped");
    });
    const b: boolean = blockUI.isBlocking();

    const myBlockUI = blockUI.instances.get("myBlockUI");
    myBlockUI.start();
    myBlockUI.reset();
    myBlockUI.stop();
});
