import { application } from 'tizen-common-web';
import { ApplicationControlLaunchMode, ApplicationInformation, ApplicationControl } from 'tizen-common-web/application';
import { WebAPIError } from 'tizen-common-web/tizen';

const app = application.getCurrentApplication();
const watchId = app.addEventListener({ appId: app.appInfo.id, name: 'custom_user_event' }, (event, data) => {
    console.log('Data: ' + JSON.stringify(data));
    // Do something.
});

ApplicationControlLaunchMode.GROUP;
ApplicationControlLaunchMode.SINGLE;

const appControl = new ApplicationControl('http://tizen.org/appcontrol/operation/pick', 'null', 'image/jpeg', 'null');

function successCB(appInfos: ApplicationInformation[], appControl: ApplicationControl) {
    // appControl is same object with the value passed as first parameter to findAppControl().
    const appControlReplyCallback = {
        // Callee sent a reply.
        onsuccess: () => {
            // for (var i = 0; i < data.length; i++) {
            //     if (
            //         data[i].key ==
            //         'http://tizen.org/appcontrol/data/selected'
            //     ) {
            //         console.log(
            //             'Selected image is ' + data[i].value[0]
            //         );
            //     }
            // }
            console.log('[222]success');
        },
        // Callee returned failure.
        onfailure: () => {
            console.log('The launch application control failed');
        },
    };

    const appId = appInfos[0].id; // Select first app's id.

    application.launchAppControl(
        appControl,
        appId,
        () => {
            console.log('Launch application control succeed');
        },
        (e: WebAPIError) => {
            console.log('Launch application control failed, reason: ' + e.message);
        },
        appControlReplyCallback,
    );
}

application.findAppControl(appControl, successCB);
