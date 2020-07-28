import Dialog from "react-native-dialog";
import { createRef, Component } from "react";

class Example extends Component {
    dynamicButtons() {
        const buttonFunc = () => console.log('click');
        const buttons = [
            { label: 'Button 1', action: buttonFunc },
            { label: 'Button 2', action: buttonFunc },
        ];
        return buttons.map(({ label , action }) =>
            <Dialog.Button
                label={label}
                onPress={action}
            />
        );
    }

    singleButton() {
        return <Dialog.Button label="Click" onPress={() => null} />;
    }

    render() {
        const ref = createRef();

        return (
            <Dialog.Container visible={true} style={{ marginLeft: 20, marginRight: 20 }} avoidKeyboard={true}>
                <Dialog.Title style={{ marginLeft: 20, marginRight: 20 }}>A nice title</Dialog.Title>
                <Dialog.Description>A good descr</Dialog.Description>
                <Dialog.Input textInputRef={ref} label="Cancel" />
                <Dialog.Button label="Cancel" onPress={() => console.log('test')} />
                <Dialog.Button label="Validate" onPress={() => console.log('test')} />
                {this.dynamicButtons()}
                {this.singleButton()}
            </Dialog.Container>
        );
    }
}
