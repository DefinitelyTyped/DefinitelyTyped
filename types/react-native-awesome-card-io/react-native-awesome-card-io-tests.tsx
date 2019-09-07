import * as React from 'react';
import { CardIOView, CardDetails, CardIOUtilities } from 'react-native-awesome-card-io';
import { Platform } from 'react-native';

export default class CardIOExample extends React.Component {
    componentWillMount() {
        if (Platform.OS === 'ios') {
            CardIOUtilities.preload();
        }
    }

    didScanCard(card: CardDetails) {
        console.log(card);
    }

    render() {
        return (
            <CardIOView
                didScanCard={(card: CardDetails) => {
                    console.log(card);
                }}
            ></CardIOView>
        );
    }
}
