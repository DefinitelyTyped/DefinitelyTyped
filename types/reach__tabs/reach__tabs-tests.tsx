import { Tabs, TabList, Tab, TabPanels, TabPanel } from '@reach/tabs';

import * as React from 'react';
import { render } from 'react-dom';

const BasicTabs = () => {
    return (
        <>
            <Tabs>
                <TabList>
                    <Tab>One</Tab>
                    <Tab>Two</Tab>
                </TabList>

                <TabPanels>
                    <TabPanel>
                        <p>one!</p>
                    </TabPanel>
                    <TabPanel>
                        <p>two!</p>
                    </TabPanel>
                </TabPanels>
            </Tabs>
        </>
    );
};

const TabsWithProps = () => {
    const [tabIndex, setTabIndex] = React.useState(0);

    return (
        <Tabs onChange={setTabIndex} defaultIndex={0} index={1} as="button">
            <TabList as="span">
                <Tab disabled={true}>Foo</Tab>
                <Tab as="span">Bar</Tab>
                <Tab isSelected={false}>Baz</Tab>
                <Tab>Bat</Tab>
            </TabList>
            <TabPanels as="span">
                <TabPanel as="span">{tabIndex}</TabPanel>
                <TabPanel>Bar</TabPanel>
                <TabPanel>Baz</TabPanel>
                <TabPanel>Bat</TabPanel>
            </TabPanels>
        </Tabs>
    );
};

render(<BasicTabs />, document.getElementById('app'));
render(<TabsWithProps />, document.getElementById('app'));
render(<TabList />, document.getElementById('app'));
render(<Tab />, document.getElementById('app'));
render(<TabPanels />, document.getElementById('app'));
render(<TabPanel />, document.getElementById('app'));

// $ExpectError
render(<Tabs />, document.getElementById('app'));
