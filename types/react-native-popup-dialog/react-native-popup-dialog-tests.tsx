import * as React from 'react';
import { StyleSheet, View, Button } from 'react-native';
import Dialog, {
    DialogTitle,
    DialogContent,
    DialogButton,
    SlideAnimation,
    ScaleAnimation,
    FadeAnimation,
    DialogFooter,
} from 'react-native-popup-dialog';

const slideAnimation = new SlideAnimation({ slideFrom: 'bottom' });
const scaleAnimation = new ScaleAnimation();
const fadeAnimation = new FadeAnimation({ animationDuration: 150 });

class Test extends React.Component<any> {
    fadingPopupDialog: Dialog | null;
    scalingPopupDialog: Dialog | null;
    slidingPopupDialog: Dialog | null;

    showPopupDialog(popupDialog: Dialog | null) {
        if (popupDialog !== null) {
            popupDialog.show(() => console.log('show callback'));
        }
    }

    dismissPopupDialog(popupDialog: Dialog | null) {
        if (popupDialog !== null) {
            popupDialog.dismiss(() => console.log('dismiss callback'));
        }
    }

    render() {
        return (
            <View>
                <Button
                    onPress={() => this.showPopupDialog(this.fadingPopupDialog)}
                    title="Show Fading Dialog" />
                <Button
                    onPress={() => this.showPopupDialog(this.scalingPopupDialog)}
                    title="Show Scaling Dialog" />
                <Button
                    onPress={() => this.showPopupDialog(this.slidingPopupDialog)}
                    title="Show Sliding Dialog" />

                <Dialog ref={(popupDialog) => this.fadingPopupDialog = popupDialog}
                    dialogTitle={<DialogTitle title="Popup Dialog - Fade Animation" />}
                    dialogAnimation={fadeAnimation}
                />
                <Dialog ref={(popupDialog) => this.scalingPopupDialog = popupDialog}
                    dialogTitle={<DialogTitle title="Popup Dialog - Scale Animation" />}
                    dialogAnimation={scaleAnimation}
                    footer={
                        <DialogFooter>
                            <DialogButton
                                text="CLOSE"
                                onPress={(event) => this.dismissPopupDialog(this.scalingPopupDialog)}
                                textStyle={{ color: "red" }}
                                bordered
                                key="button-1"
                            />
                            <DialogButton
                                text="OK"
                                onPress={() => {}}
                                key="button-2"
                            />
                        </DialogFooter>
                    }
                />
                <Dialog ref={(popupDialog) => this.slidingPopupDialog = popupDialog}
                    dialogTitle={<DialogTitle title="Popup Dialog - Slide Animation" />}
                    width={300}
                    height={300}
                    dialogAnimation={slideAnimation}
                    containerStyle={styles.testStyle}
                    dialogStyle={styles.testStyle}
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
                <DialogContent>

                </DialogContent>
                </Dialog>
            </View>);
    }
}

const styles = StyleSheet.create({
    testStyle: {
        paddingTop: 10,
    }
});
