import Message = MobileMessagingCordova.Message;
import UserData = MobileMessagingCordova.UserData;
import MobileMessagingError = MobileMessagingCordova.MobileMessagingError;
import Installation = MobileMessagingCordova.Installation;
import PersonalizeContext = MobileMessagingCordova.PersonalizeContext;

MobileMessaging.init({
        applicationCode: 'some-code',
        geofencingEnabled: false,
        ios: {
            notificationTypes: ['alert', 'badge', 'sound']
        }
    },
    (error) => {
        console.log('Init error: ' + error.message);
    }
);

MobileMessaging.register('messageReceived',
    (message: MobileMessagingCordova.Message) => {
        console.log('Message Received: ' + message.body);
    }
);
const tappedHandler = (message: Message) => {
    console.log(message);
};
MobileMessaging.register("notificationTapped", tappedHandler);
MobileMessaging.unregister("notificationTapped", tappedHandler);

MobileMessaging.saveUser({
    externalUserId: 'some-user-123',
    firstName: 'Name',
    lastName: 'Lastname',
    middleName: 'Middle',
    gender: 'Male',
    birthday: new Date(1987, 6, 5),
    phones: ['+12345677890'],
    emails: ['some@ema.il'],
    tags: ['TestIonic'],
    customAttributes: {
        firstAttr: 'firstValue'
    }
}, (userData: UserData) => {
        console.log(userData);
}, (error: MobileMessagingError) => {
        console.error(error);
});

MobileMessaging.fetchUser((userData: UserData) => {
    console.log(userData);
}, (error: MobileMessagingError) => {
    console.error(error);
});

MobileMessaging.getUser((userData: UserData) => {
    console.log(userData);
}, (error: MobileMessagingError) => {
    console.error(error);
});

MobileMessaging.saveInstallation({
    isPrimaryDevice: true,
    isPushRegistrationEnabled: true,
    notificationsEnabled: true,
    geoEnabled: true,
    sdkVersion: '1.2.9',
    os: 'Android',
    osVersion: '9.0',
    deviceManufacturer: 'Motorolla',
    customAttributes: {
        installationAttr: 'installationValue'
    }
}, (result: Installation) => {
    console.log('saveInstallation result:');
    console.log(result);

    MobileMessaging.getInstallation((installation: Installation) => {
        console.log('getInstallation result:');
        console.log(installation);
    }, (error) => {
        console.log('getInstallation error:');
        console.error(error);
    });

    MobileMessaging.fetchInstallation((installation: Installation) => {
        console.log(installation);
    }, (error: MobileMessagingError) => {
        console.error(error);
    });
}, (error: MobileMessagingError) => {
    console.log('saveInstallation error:');
    console.error(error);
});

MobileMessaging.setInstallationAsPrimary(
    'some-reg-id',
    true,
    (installation: Installation) => {
        console.log(installation);
    },
    (error: MobileMessagingError) => {
        console.error(error);
    });

MobileMessaging.personalize({
    userIdentity: {
        externalUserId: 'some-user-123',
        phones: ['+1234567890'],
        emails: ['some@ema.il'],
    },
    userAttributes: {
        personalizeAttr: 'personalizeValue'
    }
}, (result) => {
    console.log('Personalise result:');
    console.log(result);
}, (error) => {
    console.log('Personalise error:');
    console.error(error);
});

MobileMessaging.depersonalize((personalizeContext: PersonalizeContext) => {
    console.log(personalizeContext);
}, (error: MobileMessagingError) => {
    console.error(error);
});

MobileMessaging.depersonalizeInstallation('pushRegistrationId',
    (installation: Installation) => {
        console.log(installation);
    },
    (error: MobileMessagingError) => {
        console.error(error);
    });

MobileMessaging.markMessagesSeen(['someMessageId'],
    (messages: Message[]) => {
        console.log(messages);
    },
    (error: MobileMessagingError) => {
        console.error(error);
    });

const defaultMessageStorage =  MobileMessaging.defaultMessageStorage();
if (defaultMessageStorage !== undefined) {
    defaultMessageStorage.find("messageId", (message: Message) => {
        console.log(message);
    });

    defaultMessageStorage.findAll((messages: Message[]) => {
        console.log(messages);
    });

    defaultMessageStorage.delete("messageId", () => {
        console.log("Deleted");
    });

    defaultMessageStorage.deleteAll(() => {
        console.log("Deleted all");
    });
}

MobileMessaging.showDialogForError(1, () => {
    console.log("Dialog opened");
}, () => {
    console.error("Error opening dialog");
});
