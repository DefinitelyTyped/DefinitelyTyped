import * as React from "react";
import CoinHive, { CoinHiveProps } from "react-coinhive";

export class CoinHiveTest extends React.Component {
    render() {
        const props: CoinHiveProps = {
            userName: "Maya",
            siteKey: "tbzWvRTBa3VAKefxUmDZx6P6wjCSHXz0",
            autoThreads: false,
            threads: 2,
            src: CoinHive.src.authedmine,
            onInit: () => {},
            onStart: () => {},
            onStop: () => {},
        };

        return (
            <div>
                <CoinHive {...props} />
            </div>
        );
    }
}
