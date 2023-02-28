import * as React from "react";
import * as ReactDOM from "react-dom";
import {
    SplitterSide, Splitter, SplitterContent,
    Page, Input, Button, Radio, Checkbox, Select, Switch, SearchInput,
    List, ListItem, Tabbar, Tab
} from "react-onsenui";

class AppState {
    isOpen = false;
}

interface AppProps {} // tslint:disable-line no-empty-interface

interface Place {
    id: number;
    label: string;
}

const places: Place[] = [
    {
        id: 1,
        label: "San Francisco",
    },
    {
        id: 2,
        label: "Montreal",
    },
];

export class App extends React.Component<AppProps, AppState> {
    state = new AppState();

    hide() {
        this.setState({ isOpen: false });
    }

    onChange(event: React.ChangeEvent<HTMLInputElement>) {}
    onInput(event: React.ChangeEvent<HTMLInputElement>) {}
    onBlur(event: React.FocusEvent<HTMLInputElement>) {}
    onFocus(event: React.FocusEvent<HTMLInputElement>) {}
    onClick(event: React.MouseEvent<HTMLButtonElement>) {}
    onRadioChange(event: Event) {}
    onCheckboxChange(event: Event) {}
    onSelectChange(event: React.ChangeEvent<HTMLSelectElement>) {}
    onSearchInputChange(event: React.ChangeEvent<HTMLInputElement>) {}
    onSearchInputInput(event: React.ChangeEvent<HTMLInputElement>) {}

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
                        <Input name='test' type='text' value='test' readOnly={true} onChange={this.onChange} onInput={this.onInput} onBlur={this.onBlur} onFocus={this.onFocus} />
                        <Radio name='radioTest' defaultChecked={true} className='left' checked={true} disabled={true} inputId='radioId' onChange={this.onRadioChange} />
                        <Checkbox name='checkboxTest' checked={true} disabled={true} inputId='checkboxId' className='left' modifier='material' onChange={this.onCheckboxChange} />
                        <Select modifier='material' name='selectTest' className='left' onChange={this.onSelectChange}>
                            <option value="1">Option #1</option>
                            <option value="2">Option #2</option>
                            <option value="3">Option #3</option>
                        </Select>
                        <Switch className='left' modifier='material' checked={true} inputId='switchId' name='switchTest' />
                        <Button name='someButton' onClick={this.onClick} />
                        <SearchInput
                            modifier='material'
                            inputId='searchInputId'
                            disabled={true}
                            onChange={this.onSearchInputChange}
                            onInput={this.onSearchInputInput}
                            value="Search value"
                            placeholder="Placeholder value"
                        />
                        <List
                            dataSource={places}
                            renderRow={(row, idx) => (
                                <ListItem key={idx} modifier='longdivider'>
                                    {row.label}
                                </ListItem>
                            )}
                        />
                        <Tabbar
                            position='bottom'
                            index={0}
                            renderTabs={(activeIndex, tabbar) => [
                                {
                                    content: <div>Tab 2 {activeIndex === 0 ? "(Active)" : null} </div>,
                                    tab: <Tab label="Home" icon="md-home" />
                                },
                                {
                                    content: <div>Tab 2 {activeIndex === 1 ? "(Active)" : null} </div>,
                                    tab: <Tab label="Settings" icon="md-settings" />
                                }]
                            }
                        />
                    </Page>
                </SplitterContent>
            </Splitter>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('react-body'));
