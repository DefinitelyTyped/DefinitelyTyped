/// <reference path="angular-growl-v2.d.ts" />

var app = angular.module("ag", ["pascalprecht.translate", "$httpProvider"]);

app.config((growlProvider:angular.growl.IGrowlProvider, $httpProvider:angular.IHttpProvider) => {
    var ttl:angular.growl.IGrowlTTLConfig = {
        success: 5000,
        error: 4000
    };

    growlProvider.globalTimeToLive(ttl);
    growlProvider.globalTimeToLive(5000);
    growlProvider.globalDisableCloseButton(true);
    growlProvider.globalDisableIcons(true);
    growlProvider.globalReversedOrder(false);
    growlProvider.globalDisableCountDown(true);
    growlProvider.messageVariableKey("someKey");
    growlProvider.globalInlineMessages(false);
    growlProvider.globalPosition("top-center");
    growlProvider.messagesKey("someKey");
    growlProvider.messageTextKey("someKey");
    growlProvider.messageTitleKey("someKey");
    growlProvider.messageSeverityKey("someKey");
    growlProvider.onlyUniqueMessages(false);

    $httpProvider.interceptors.push(growlProvider.serverMessagesInterceptor);
});

app.controller("Ctrl", ($scope:angular.IScope, growl:angular.growl.IGrowlService) => {
    var config:angular.growl.IGrowlMessageConfig = {
        ttl: 5000,
        disableCountDown: true,
        disableCloseButton: true
    };

    var message = "Some message";

    growl.warning(message);
    growl.warning(message, config);
    growl.error(message);
    growl.error(message, config);
    growl.info(message);
    growl.info(message, config);
    growl.success(message);
    growl.success(message, config);
    growl.general(message);
    growl.general(message, config);
    growl.general(message, config, "error");
    growl.onlyUnique();
    growl.reverseOrder();
    growl.inlineMessages();
    growl.position();
});
