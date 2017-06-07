import * as React from "react";
import * as ReactDOM from "react-dom";
import { SplitterSide, Splitter, SplitterContent, Page } from "react-onsenui";

class AppState {
    isOpen: boolean = false;
}

interface AppProps {} // tslint:disable-line no-empty-interface

export class App extends React.Component<AppProps, AppState> {
    constructor(props?: AppProps) {
        super(props);
        this.state = new AppState();
    }

    hide() {
        this.setState({ isOpen: false });
    }

    render() {
        return (
            <Splitter>
                <SplitterSide
                    side='left'
                    collapse={true}
                    isOpen={this.state.isOpen}
                    onClose={() => this.hide()}
                    isSwipeable={true}>
                    <Page>
                        Menu content
					</Page>
                </SplitterSide>
                <SplitterContent>
                    <Page>
                        Test page
					</Page>
                </SplitterContent>
            </Splitter>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('react-body'));
