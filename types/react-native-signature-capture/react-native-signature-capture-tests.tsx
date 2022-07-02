import * as React from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TouchableHighlight,
} from 'react-native';
import SignatureCapture, {
    SaveEventParams,
} from 'react-native-signature-capture';

class RNSignatureExample extends React.Component {
    private readonly signatureRef = React.createRef<SignatureCapture>();

    render() {
        return (
            <View style={{ flex: 1, flexDirection: 'column' }}>
                <Text
                    style={{ alignItems: 'center', justifyContent: 'center' }}
                >
                    Signature Capture Extended{' '}
                </Text>
                <SignatureCapture
                    style={[{ flex: 1 }, styles.signature]}
                    ref={this.signatureRef}
                    onSaveEvent={this._onSaveEvent}
                    onDragEvent={this._onDragEvent}
                    saveImageFileInExtStorage={false}
                    showNativeButtons={false}
                    showTitleLabel={false}
                    viewMode={'portrait'}
                />

                <View style={{ flex: 1, flexDirection: 'row' }}>
                    <TouchableHighlight
                        style={styles.buttonStyle}
                        onPress={() => {
                            this.saveSign();
                        }}
                    >
                        <Text>Save</Text>
                    </TouchableHighlight>

                    <TouchableHighlight
                        style={styles.buttonStyle}
                        onPress={() => {
                            this.resetSign();
                        }}
                    >
                        <Text>Reset</Text>
                    </TouchableHighlight>
                </View>
            </View>
        );
    }

    saveSign() {
        if (this.signatureRef.current) {
            this.signatureRef.current.saveImage();
        }
    }

    resetSign() {
        if (this.signatureRef.current) {
            this.signatureRef.current.resetImage();
        }
    }

    _onSaveEvent(result: SaveEventParams) {
        // result.encoded - for the base64 encoded png
        // result.pathName - for the file path name
        console.log(result);
    }
    _onDragEvent() {
        // This callback will be called when the user enters signature
        console.log('dragged');
    }
}

const styles = StyleSheet.create({
    signature: {
        flex: 1,
        borderColor: '#000033',
        borderWidth: 1,
    },
    buttonStyle: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        height: 50,
        backgroundColor: '#eeeeee',
        margin: 10,
    },
});
