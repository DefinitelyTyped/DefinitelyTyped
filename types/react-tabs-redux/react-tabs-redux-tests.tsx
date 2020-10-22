import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {
    Tabs,
    TabLink,
    TabContent,
    TabsProps,
    TabLinkProps,
    TabContentProps
} from 'react-tabs-redux';

interface TestTabsProps extends TabsProps {
    handleSomething: () => void;
}
interface TestTabLinkProps extends TabLinkProps {
    link: string;
}
interface TestTabContentProps extends TabContentProps {
    tabIndex: number;
}

class TestApp extends React.Component {
    onChange = (selectedTab: string, name: string) => {
        console.log(`selectedTab: ${selectedTab}`);
        console.log(`namespace:  ${name}`);
    }

    onClick = (event: Event) => {
        console.log(`event: ${event.type}`);
    }

    render() {
        return (
            <Tabs onChange={this.onChange} renderActiveTabContentOnly>
                <TabLink to="tab1" onClick={this.onClick}>Tab1</TabLink>
                <TabLink to="tab2" default>Tab2</TabLink>
                <TabLink to="tab3" activeStyle={{color: 'blue'}}>Tab3</TabLink>

                <TabContent for="tab1" disableInlineStyles>Content1</TabContent>
                <TabContent for="tab2" className="test">Content2</TabContent>
                <TabContent for="tab3" isVisible={false}>Content3</TabContent>
            </Tabs>
        );
    }
}

ReactDOM.render(
    <TestApp/>,
    document.getElementById("test-app")
);
