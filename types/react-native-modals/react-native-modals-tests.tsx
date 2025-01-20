import * as React from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import Modal, {
    FadeAnimation,
    ModalButton,
    ModalContent,
    ModalFooter,
    ModalPortal,
    ModalTitle,
    ScaleAnimation,
    SlideAnimation,
} from "react-native-modals";

const slideAnimation = new SlideAnimation({ slideFrom: "bottom" });
const scaleAnimation = new ScaleAnimation({});
const fadeAnimation = new FadeAnimation({ animationDuration: 150 });

const FakeModalContent = () => <View></View>;
class ImperativeUsageTest extends React.Component<any> {
    constructor(props: any) {
        super(props);
        this.state = {
            showModal: false,
        };
    }

    fadingPopupModal: Modal;
    scalingPopupModal: Modal;
    slidingPopupModal: Modal;

    componentDidMount() {
        this.fadingPopupModal = ModalPortal.show(<FakeModalContent />, {
            visible: false,
            modalTitle: <ModalTitle title="Popup Modal - Fade Animation" />,
            modalAnimation: fadeAnimation,
        });
        this.scalingPopupModal = ModalPortal.show(<FakeModalContent />, {
            visible: false,
            modalTitle: <ModalTitle title="Popup Modal - Scale Animation" />,
            modalAnimation: scaleAnimation,
            footer: (
                <ModalFooter>
                    <ModalButton
                        text="CLOSE"
                        onPress={() => this.dismissPopupModal(this.scalingPopupModal)}
                        textStyle={{ color: "red" }}
                        bordered
                        key="button-1"
                    />
                    <ModalButton text="OK" onPress={() => {}} key="button-2" />
                </ModalFooter>
            ),
        });
        this.slidingPopupModal = ModalPortal.show(<ModalContent></ModalContent>, {
            modalTitle: <ModalTitle title="Popup Modal - Slide Animation" />,
            width: 300,
            height: 300,
            modalAnimation: slideAnimation,
            modalStyle: styles.testStyle,
            animationDuration: 150,
            overlayPointerEvents: "auto",
            overlayBackgroundColor: "white",
            overlayOpacity: 0.5,
            hasOverlay: true,
            visible: true,
            onShow: () => console.log("onShow"),
            onDismiss: () => console.log("onDismiss"),
            onTouchOutside: () => console.log("onTouchOutside"),
            onHardwareBackPress: () => true,
        });
    }

    showPopupModal(popupModal: Modal) {
        if (popupModal !== null) {
            ModalPortal.update(popupModal, { visible: true });
        }
    }

    dismissPopupModal(popupModal: Modal) {
        if (popupModal !== null) {
            ModalPortal.update(popupModal, { visible: false });
        }
    }

    render() {
        return (
            <View>
                <Button onPress={() => this.showPopupModal(this.fadingPopupModal)} title="Show Fading Modal" />
                <Button onPress={() => this.showPopupModal(this.scalingPopupModal)} title="Show Scaling Modal" />
                <Button onPress={() => this.showPopupModal(this.slidingPopupModal)} title="Show Sliding Modal" />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    testStyle: {
        paddingTop: 10,
    },
});

// basic usage

interface State {
    showModal: boolean;
}

class BasicUsageTest extends React.Component<{}, State> {
    constructor(props: any) {
        super(props);
        this.state = {
            showModal: false,
        };
    }
    render() {
        return (
            <ModalPortal>
                <View>
                    <Button
                        onPress={() =>
                            this.setState({
                                showModal: true,
                            })}
                        title="Show Fading Modal"
                    />
                </View>

                <Modal
                    visible={this.state.showModal}
                    modalTitle={<ModalTitle title="Popup Modal - Slide Animation" />}
                    footer={
                        <ModalFooter>
                            <ModalButton
                                text="CLOSE"
                                onPress={() =>
                                    this.setState({
                                        showModal: false,
                                    })}
                                textStyle={{ color: "red" }}
                                bordered
                                key="button-1"
                            />
                            <ModalButton text="OK" onPress={() => {}} key="button-2" />
                        </ModalFooter>
                    }
                    modalAnimation={new SlideAnimation({
                        slideFrom: "top",
                    })}
                >
                    <ModalContent>
                        <Text>content of the modal</Text>
                    </ModalContent>
                </Modal>
            </ModalPortal>
        );
    }
}
