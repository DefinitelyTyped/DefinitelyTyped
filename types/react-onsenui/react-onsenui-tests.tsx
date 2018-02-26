import * as React from "react";
import * as ReactDOM from "react-dom";
import {
    SplitterSide, Splitter, SplitterContent,
    Page, Input, Button,
} from "react-onsenui";

class AppState {
    isOpen = false;
}

interface AppProps {} // tslint:disable-line no-empty-interface

export class App extends React.Component<AppProps, AppState> {
    constructor(props: AppProps) {
        super(props);
        this.state = new AppState();
    }

    hide() {
        this.setState({ isOpen: false });
    }

    onChange(event: React.ChangeEvent<HTMLInputElement>) {}
    onClick(event: React.MouseEvent<HTMLButtonElement>) {}

    render() {
        return (
            <Splitter>
                <SplitterSide
                    className='left'
                    side='left'
                    collapse={true}
                    isOpen={this.state.isOpen}
                    onClose={() => this.hide()}
                    swipeable>
                    <Page>
                        Menu content
                    </Page>
                </SplitterSide>
                <SplitterContent>
                    <Page>
                        Test page
                        <Input name='test' type='text' value='test' onChange={this.onChange} />
                        <Button onClick={this.onClick} />
					</Page>
                </SplitterContent>
            </Splitter>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('react-body'));
