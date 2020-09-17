import * as React from 'react';
import { StyleSheet, View, Button } from 'react-native';
import Modal, {
    ModalTitle,
    ModalContent,
    ModalButton,
    SlideAnimation,
    ScaleAnimation,
    FadeAnimation,
    ModalFooter
} from 'react-native-modals';

const slideAnimation = new SlideAnimation({ slideFrom: 'bottom' });
const scaleAnimation = new ScaleAnimation();
const fadeAnimation = new FadeAnimation({ animationDuration: 150 });

class Test extends React.Component<any> {
    fadingPopupModal: Modal | null;
    scalingPopupModal: Modal | null;
    slidingPopupModal: Modal | null;

    showPopupModal(popupModal: Modal | null) {
        if (popupModal !== null) {
            popupModal.show();
        }
    }

    dismissPopupModal(popupModal: Modal | null) {
        if (popupModal !== null) {
            popupModal.dismiss();
        }
    }

    render() {
        return (
            <View>
                <Button
                    onPress={() => this.showPopupModal(this.fadingPopupModal)}
                    title="Show Fading Modal" />
                <Button
                    onPress={() => this.showPopupModal(this.scalingPopupModal)}
                    title="Show Scaling Modal" />
                <Button
                    onPress={() => this.showPopupModal(this.slidingPopupModal)}
                    title="Show Sliding Modal" />

                <Modal visible ref={(popupModal) => this.fadingPopupModal = popupModal}
                    modalTitle={<ModalTitle title="Popup Modal - Fade Animation" />}
                    modalAnimation={fadeAnimation}
                />
                <Modal visible ref={(popupModal) => this.scalingPopupModal = popupModal}
                    modalTitle={<ModalTitle title="Popup Modal - Scale Animation" />}
                    modalAnimation={scaleAnimation}
                    footer={
                        <ModalFooter>
                            <ModalButton
                                text="CLOSE"
                                onPress={() => this.dismissPopupModal(this.scalingPopupModal)}
                                textStyle={{ color: "red" }}
                                bordered
                                key="button-1"
                            />
                            <ModalButton
                                text="OK"
                                onPress={() => {}}
                                key="button-2"
                            />
                        </ModalFooter>
                    }
                />
                <Modal ref={(popupModal) => this.slidingPopupModal = popupModal}
                    modalTitle={<ModalTitle title="Popup Modal - Slide Animation" />}
                    width={300}
                    height={300}
                    modalAnimation={slideAnimation}
                    modalStyle={styles.testStyle}
                    animationDuration={150}
                    overlayPointerEvents='auto'
                    overlayBackgroundColor='white'
                    overlayOpacity={0.5}
                    hasOverlay={true}
                    visible={true}
                    onShow={() => { console.log('onShow'); }}
                    onDismiss={() => { console.log('onDismiss'); }}
                    onTouchOutside={() => { console.log('onTouchOutside'); }}
                    onHardwareBackPress={() => true }
                >
                <ModalContent>

                </ModalContent>
                </Modal>
            </View>);
    }
}

const styles = StyleSheet.create({
    testStyle: {
        paddingTop: 10,
    }
});
