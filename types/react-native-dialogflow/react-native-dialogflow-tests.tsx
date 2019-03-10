import * as React from 'react';
import { View } from 'react-native';
import {
    Dialogflow,
    Dialogflow_V2,
} from 'react-native-dialogflow';

const accessToken = 'accessToken';
const eventName = 'event';
const eventData = {};
const query = '';
const serviceAccount = '_@_.iam.gserviceaccount.com';
const privateKey = '-----BEGIN PRIVATE KEY-----\n_\n-----END PRIVATE KEY-----';
const projectId = 'projectId';

class Screen1 extends React.Component<any> {
    componentDidMount() {
        Dialogflow.setConfiguration(accessToken, Dialogflow.LANG_ENGLISH);
        Dialogflow.setEntities([]);
        Dialogflow.startListening(() => {}, () => {});
        Dialogflow.finishListening();
        Dialogflow.requestEvent(eventName, eventData, () => {}, () => {});
        Dialogflow.requestQuery(query, () => {}, () => {});
        Dialogflow.onListeningStarted(() => {});
        Dialogflow.onListeningFinished(() => {});
        Dialogflow.onAudioLevel(() => {});
        Dialogflow.setContexts([]);
        Dialogflow.resetContexts(() => {}, () => {});
        Dialogflow.setPermanentContexts([]);

        Dialogflow_V2.setConfiguration(serviceAccount, privateKey, Dialogflow_V2.LANG_ENGLISH, projectId);
        Dialogflow_V2.startListening(() => {}, () => {});
        Dialogflow_V2.finishListening();
        Dialogflow_V2.requestEvent(eventName, eventData, () => {}, () => {});
        Dialogflow_V2.requestQuery(query, () => {}, () => {});
        Dialogflow_V2.onListeningStarted(() => {});
        Dialogflow_V2.onListeningFinished(() => {});
        Dialogflow_V2.onAudioLevel(() => {});
        Dialogflow_V2.setContexts([]);
        Dialogflow_V2.resetContexts(() => {}, () => {});
        Dialogflow_V2.setPermanentContexts([]);
    }

    render() {
        return (
            <View />
        );
    }
}
