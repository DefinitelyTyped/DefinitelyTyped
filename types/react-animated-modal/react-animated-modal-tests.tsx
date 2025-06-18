import * as React from "react";
import Modal from "react-animated-modal";

export default class ReactAnimatedModalTests extends React.Component {
    state = { showModal: false };

    render() {
        return (
            <Modal
                closemodal={() => this.setState({ showModal: false })}
                visible={this.state.showModal}
                type="bounce"
            >
                Modal Content...
            </Modal>
        );
    }
}
