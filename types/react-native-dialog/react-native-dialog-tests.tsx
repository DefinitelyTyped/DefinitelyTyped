import Dialog from "react-native-dialog";
import { createRef, Component } from "react";

class Example extends Component {
    render() {
        const ref = createRef();

        return (
            <Dialog.Container
                visible={true}
                style={{ marginLeft: 20, marginRight: 20 }}
            >
                <Dialog.Title style={{ marginLeft: 20, marginRight: 20 }}>
                    A nice title
                </Dialog.Title>
                <Dialog.Description>A good descr</Dialog.Description>
                <Dialog.Input textInputRef={ref} label="Cancel" />
                <Dialog.Button
                    label="Cancel"
                    onPress={() => console.log("test")}
                />
                <Dialog.Button
                    label="Validate"
                    onPress={() => console.log("test")}
                />
            </Dialog.Container>
        );
    }
}
