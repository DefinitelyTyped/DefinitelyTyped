import * as React from 'react';

import { NavTab, RoutedTabs } from 'react-router-tabs';

const NavTabTest: React.FC = () => {
    return (
        <div>
            <NavTab to="/home">Home</NavTab>
        </div>
    );
};

const RoutedTabsTest: React.FC = () => {
    return (
        <RoutedTabs startPathWith="/testbed">
            <NavTab to="/home">Home</NavTab>
            <NavTab to="/about">About</NavTab>
            <NavTab to="/contact">Contact</NavTab>
        </RoutedTabs>
    );
};

export { NavTabTest, RoutedTabsTest };
