import * as React from 'react';
import { StyleSheet, View, Button } from 'react-native';
import PopupDialog, {
    DialogTitle,
    DialogButton,
    SlideAnimation,
    ScaleAnimation,
    FadeAnimation,
} from 'react-native-popup-dialog';

const slideAnimation = new SlideAnimation({ slideFrom: 'bottom' });
const scaleAnimation = new ScaleAnimation();
const fadeAnimation = new FadeAnimation({ animationDuration: 150 });

class Test extends React.Component<any> {
    fadingPopupDialog: PopupDialog | null;
    scalingPopupDialog: PopupDialog | null;
    slidingPopupDialog: PopupDialog | null;

    showPopupDialog(popupDialog: PopupDialog | null) {
        if (popupDialog !== null) {
            popupDialog.show(() => console.log('show callback'));
        }
    }

    dismissPopupDialog(popupDialog: PopupDialog | null) {
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

                <PopupDialog ref={(popupDialog) => this.fadingPopupDialog = popupDialog}
                    dialogTitle={<DialogTitle title="Popup Dialog - Fade Animation" />}
                    dialogAnimation={fadeAnimation}
                />
                <PopupDialog ref={(popupDialog) => this.scalingPopupDialog = popupDialog}
                    dialogTitle={<DialogTitle title="Popup Dialog - Scale Animation" />}
                    dialogAnimation={scaleAnimation}
                    actions={[
                        <DialogButton
                            text="CLOSE"
                            onPress={(event) => this.dismissPopupDialog(this.scalingPopupDialog)}
                            textStyle={{ color: "red" }}
                            key="button-1"
                        />,
                    ]}
                />
                <PopupDialog ref={(popupDialog) => this.slidingPopupDialog = popupDialog}
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
                    dismissOnTouchOutside={false}
                    dismissOnHardwareBackPress={false}
                    haveOverlay={true}
                    show={true}
                    onShown={() => { console.log('onShown'); }}
                    onDismissed={() => { console.log('onDismissed'); }}
                />
            </View>);
    }
}

const styles = StyleSheet.create({
    testStyle: {
        paddingTop: 10,
    }
});
