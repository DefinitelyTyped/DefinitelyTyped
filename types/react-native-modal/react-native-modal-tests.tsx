import * as React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import Modal, { ReactNativeModal } from 'react-native-modal';

interface State {
    isModalVisible: boolean;
}
class ModalTester extends React.Component<{}, State> {
    modal: ReactNativeModal;
    state = {
        isModalVisible: false,
    };

    private showModal = () => this.setState({ isModalVisible: true });

    private hideModal = () => this.setState({ isModalVisible: false });

    close = () => {
        this.modal._close();
    }

    storeRef: React.Ref<any> = ref => {
        this.modal = ref;
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <TouchableOpacity onPress={this.showModal}>
                    <Text>Show Modal</Text>
                </TouchableOpacity>
                <Modal
                    ref={this.storeRef}
                    isVisible={this.state.isModalVisible}
                >
                    <View style={{ flex: 1 }}>
                        <Text>Hello!</Text>
                    </View>
                </Modal>
            </View>
        );
    }
}
