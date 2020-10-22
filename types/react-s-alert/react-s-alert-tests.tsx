import * as React from "react";
import Alert from "react-s-alert";

const config = {
    position: "top",
    offset: 100,
    stack: {
        limit: 3,
        spacing: 50,
    },
    effect: "genie",
    beep: {
        info: "beep.mp3",
        error: "beep.mp3",
        warning: "beep.mp3",
        success: "beep.mp3",
    },
    timeout: 1000,
    html: true,
    onClose: () => {},
    onShow: () => {},
    customFields: {},
};

class Test extends React.Component {
    render() {
        return (
          <div>
              <Alert />
              <Alert
                  {...config}
              />
          </div>
        );
    }
}

Alert.info("I am a info message.", config);
Alert.error("I am an error message.", config);
Alert.warning("I am a warning message.", config);
Alert.success("I am a success message", config);

const index = Alert.info("Hello");
Alert.close(index);

Alert.closeAll();
