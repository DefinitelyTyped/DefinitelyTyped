import * as React from 'react';
import ShareExtension from 'react-native-share-extension';

import { Text, View } from 'react-native';

export default class Share extends React.Component {
    state = {
        type: '',
        value: '',
    };

    async componentDidMount() {
        try {
            const { type, value } = await ShareExtension.data();
            await ShareExtension.data();
            ShareExtension.openURL('sample://example/url');
            ShareExtension.close();
            this.setState({
                type,
                value,
            });
        } catch (e) {
            console.log('errrr', e);
        }
    }

    render() {
        return (
            <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
                <View
                    style={{ borderColor: 'green', borderWidth: 1, backgroundColor: 'white', height: 200, width: 300 }}
                >
                    <Text>type: {this.state.type}</Text>
                    <Text>value: {this.state.value}</Text>
                </View>
            </View>
        );
    }
}
