import {addWheelListener, removeWheelListener} from "wheel";

const wheelListener = (event: WheelEvent) => {
    event.preventDefault();
    removeWheelListener(document, wheelListener);
};

addWheelListener(document, wheelListener);
