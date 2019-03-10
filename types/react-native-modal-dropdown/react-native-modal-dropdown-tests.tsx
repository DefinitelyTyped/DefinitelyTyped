import * as React from 'react';
import ModalDropdown from "react-native-modal-dropdown";

class Test extends React.Component<any> {
    render() {
        return (
            <ModalDropdown options={["option 1", "option 2"]}/>
        );
    }
}
