import * as React from "react";
import LoadingOverlay, { LoadingOverlayProps } from "react-loading-overlay";

export class LoadingOverlayTest extends React.PureComponent {
    render(): React.JSX.Element {
        const props: LoadingOverlayProps = {
            active: true,
            spinner: true,
            text: <p>Hello</p>,
            onClick: (event) => event.preventDefault(),
            className: "foo",
            classNamePrefix: "bar",
            fadeSpeed: 1000,
            styles: {
                wrapper: (base) => ({
                    ...base,
                    background: "rgba(255, 0, 0, 0.5)",
                }),
                overlay: (base) => ({
                    ...base,
                    background: "rgba(255, 0, 0, 0.5)",
                }),
                content: (base) => ({
                    ...base,
                    background: "rgba(255, 0, 0, 0.5)",
                }),
                spinner: (base) => ({
                    ...base,
                    background: "rgba(255, 0, 0, 0.5)",
                }),
            },
        };

        return (
            <>
                default:
                <LoadingOverlay />
                some props:
                <LoadingOverlay {...props}>
                    <p>Some content or children or something.</p>
                </LoadingOverlay>
            </>
        );
    }
}
