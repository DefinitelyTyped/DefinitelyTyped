import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {
    Tabs,
    TabsProps,
    TabList,
    TabListProps,
    Tab,
    TabProps,
    TabPanel,
    TabPanelProps,
    resetIdCounter,
} from 'react-tabs';

resetIdCounter();

interface TestTabProps extends TabProps {}
interface TestTabListProps extends TabListProps {}
interface TestTabPanelProps extends TabPanelProps {}
interface TestTabsProps extends TabsProps {}

class TestApp extends React.Component {
    onSelect = (index: number, last: number, event: Event) => {
        console.log('selected tab: ' + index.toString());
        console.log('last tab: ' + last.toString());
        console.log('event: ' + event.type);
    }
    private readonly tabsRef = React.createRef<Tabs>();

    render() {
        return (
            <Tabs onSelect={this.onSelect} selectedIndex={1} defaultFocus name="Tabs" autoFocus ref={this.tabsRef}>
                <TabList className="test-class">
                    <Tab disabled>Tab1</Tab>
                    <Tab selectedClassName="active">Tab2</Tab>
                    <Tab>Tab3</Tab>
                    <TabPanel>
                        <h2>Content1</h2>
                    </TabPanel>
                    <TabPanel>
                        <h2>Content2</h2>
                    </TabPanel>
                    <TabPanel>
                        <h2>Content3</h2>
                    </TabPanel>
                </TabList>
            </Tabs>
        );
    }
}

ReactDOM.render(React.createElement(TestApp, {}), document.getElementById('test-app'));
