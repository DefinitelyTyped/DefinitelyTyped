function ValdrMessageTests() {
    var valdrMessage: valdr.message.ValdrMessage;

    valdrMessage.templateUrl = 'valdrMesssageTemplate.html';
    valdrMessage.translateAvailable = true;
    valdrMessage.angularMessagesEnabled = true;
    valdrMessage.setTemplate('<div class="valdr-message">{{ violation.message }}</div>');
    valdrMessage.addMessages({
        'required': 'This field is required.',
        'number': 'Not a valid number.'
    });
    var message = valdrMessage.getMessage("person", "lastName", "required");
}

function ValdrMessageProviderTests() {
    var valdrMessageProvider: valdr.message.ValdrMessageProvider;
    valdrMessageProvider.setTemplate('<div class="valdr-message" > {{ violation.message }}</div>');
    valdrMessageProvider.setTemplateUrl('valdrMesssageTemplate.html');
    valdrMessageProvider.addMessages({
        'person.lastName.required': 'This last name is required.',
        'person.age.number': 'The age has to be a number.'
    });
    var message = valdrMessageProvider.getMessage("person", "lastName", "required");
}
