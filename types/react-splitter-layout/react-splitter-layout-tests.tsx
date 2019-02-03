import * as React from "react";
import SplitterLayout, { SplitterLayoutProps } from "react-splitter-layout";

export class SplitterLayoutTest extends React.PureComponent {
    render(): JSX.Element {
        const props: SplitterLayoutProps = {
            percentage: true,
            secondaryInitialSize: 40,
        };
        return (
            <SplitterLayout {...props}>
                <div>1st</div>
                <div>2nd</div>
            </SplitterLayout>
        );
    }
}
