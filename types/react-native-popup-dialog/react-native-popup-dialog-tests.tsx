import * as React from 'react';
import { StyleSheet, View } from 'react-native';
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
    render() {
        return (
            <View>
                <PopupDialog
                    dialogTitle={<DialogTitle title="Popup Dialog - Fade Animation" />}
                    dialogAnimation={fadeAnimation}
                />
                <PopupDialog
                    dialogTitle={<DialogTitle title="Popup Dialog - Scale Animation" />}
                    dialogAnimation={scaleAnimation}
                    actions={[
                        <DialogButton
                            text="CLOSE"
                            onPress={(event) => { }}
                            textStyle={{ color: "red" }}
                            key="button-1"
                        />,
                    ]}
                />
                <PopupDialog
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
