import * as React from "react";
import * as ReactDOM from "react-dom";
import {
    SplitterSide, Splitter, SplitterContent,
    Page, Input, Button, Radio, Checkbox, Select, Switch, SearchInput,
} from "react-onsenui";

class AppState {
    isOpen = false;
}

interface AppProps {} // tslint:disable-line no-empty-interface

export class App extends React.Component<AppProps, AppState> {
    state = new AppState();

    hide() {
        this.setState({ isOpen: false });
    }

    onChange(event: React.ChangeEvent<HTMLInputElement>) {}
    onBlur(event: React.FocusEvent<HTMLInputElement>) {}
    onFocus(event: React.FocusEvent<HTMLInputElement>) {}
    onClick(event: React.MouseEvent<HTMLButtonElement>) {}
    onRadioChange(event: Event) {}
    onCheckboxChange(event: Event) {}
    onSelectChange(event: React.ChangeEvent<HTMLSelectElement>) {}
    onSearchInputChange(event: Event) {}

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
                        <Input name='test' type='text' value='test' readOnly={true} onChange={this.onChange} onBlur={this.onBlur} onFocus={this.onFocus} />
                        <Radio name='radioTest' defaultChecked={true} className='left' checked={true} disabled={true} inputId='radioId' onChange={this.onRadioChange} />
                        <Checkbox name='checkboxTest' checked={true} disabled={true} inputId='checkboxId' className='left' modifier='material' onChange={this.onCheckboxChange} />
                        <Select modifier='material' name='selectTest' className='left' onChange={this.onSelectChange}>
                            <option value="1">Option #1</option>
                            <option value="2">Option #2</option>
                            <option value="3">Option #3</option>
                        </Select>
                        <Switch className='left' modifier='material' checked={true} inputId='switchId' name='switchTest' />
                        <Button name='someButton' onClick={this.onClick} />
                        <SearchInput modifier='material' inputId='searchInputId' disabled={true} onChange={this.onSearchInputChange} value="Search value" />
					</Page>
                </SplitterContent>
            </Splitter>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('react-body'));
