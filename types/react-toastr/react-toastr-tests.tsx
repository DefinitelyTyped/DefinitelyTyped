import * as React from 'react';
import { ToastContainer, ToastMessageAnimated } from 'react-toastr';

const toastMessageFactory = React.createFactory(ToastMessageAnimated);

class Test extends React.Component {
    ref: ToastContainer | null = null;

    toastRef = (ref: ToastContainer | null) => {
        this.ref = ref;
    }

    render() {
        return (
            <ToastContainer
                ref={this.toastRef}
                toastMessageFactory={toastMessageFactory}
                className="toast-top-right"
            />
        );
    }
}
