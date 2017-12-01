import * as React from "react";
import AlertContainer, { AlertContainerProps, AlertShowOptions } from "react-alert";

export class ReactAlertTest extends React.Component {
    private _alert: AlertContainer;
    render() {
        const props: AlertContainerProps = {
            offset: 14,
            position: "bottom left",
            theme: "dark",
            time: 5000,
            transition: "scale"
        };

        return (
            <div>
                <AlertContainer ref={a => this._alert = a as AlertContainer} {...props} />
            </div>
        );
    }

    private _testMethods(): void {
        const options: AlertShowOptions = {
            time: 5000,
            type: "info",
            onClose: this._onAlertClosed,
            icon: <img src="path/to/some/image/32x32.png" />
        };

        let alertId: string;
        alertId = this._alert.show("show without options");
        alertId = this._alert.show("show with options", options);

        alertId = this._alert.error("error without options");
        alertId = this._alert.error("error with options", options);

        alertId = this._alert.info("info without options");
        alertId = this._alert.info("info with options", options);

        alertId = this._alert.success("success without options");
        alertId = this._alert.success("success with options", options);

        this._alert.remove(alertId);
        this._alert.removeAll();
    }

    private _onAlertClosed(): void { }
}
