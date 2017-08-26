

var app = angular.module("ag", ["pascalprecht.translate", "$httpProvider"]);

app.config((growlProvider:angular.growl.IGrowlProvider, $httpProvider:angular.IHttpProvider) => {
    var ttl:angular.growl.IGrowlTTLConfig = {
        success: 5000,
        error: 4000
    };

    growlProvider.globalTimeToLive(ttl)
        .globalTimeToLive(5000)
        .globalDisableCloseButton(true)
        .globalDisableIcons(true)
        .globalReversedOrder(false)
        .globalDisableCountDown(true)
        .messageVariableKey("someKey")
        .globalInlineMessages(false)
        .globalPosition("top-center")
        .messagesKey("someKey")
        .messageTextKey("someKey")
        .messageTitleKey("someKey")
        .messageSeverityKey("someKey")
        .onlyUniqueMessages(false);

    $httpProvider.interceptors.push(growlProvider.serverMessagesInterceptor);
});

app.controller("Ctrl", ($scope:angular.IScope,
                        growl:angular.growl.IGrowlService,
                        growlMessages:angular.growl.IGrowlMessagesService) => {
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

    growlMessages.initDirective(1, 10);
    var messages:angular.growl.IGrowlMessage[] = growlMessages.getAllMessages(2);
    growlMessages.destroyAllMessages(0);
    growlMessages.addMessage(messages[0]);
    growlMessages.deleteMessage(messages[1]);
    
    var testMessage = growl.warning(message);
    testMessage.setText("Some other message");
    testMessage.destroy();
});
