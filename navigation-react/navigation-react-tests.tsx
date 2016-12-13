import { StateNavigator } from 'navigation';
import { NavigationBackLink, NavigationLink, RefreshLink } from 'navigation-react';
import * as React from 'react';

var stateNavigator = new StateNavigator([
    { key: 'people', route: 'people/{page}' },
    { key: 'person', route: 'person/{id}', trackCrumbTrail: true }
]);

// Refresh Link
var RefreshLinkTest = function() {
    return <RefreshLink>People</RefreshLink>;
}

RefreshLinkTest = function() {
    return (
        <RefreshLink
            navigationData={{ page: 2 }}
            includeCurrentData={true}
            currentDataKeys="sort"
            activeCssClass="active"
            disableActive={true}
            lazy={false}
            historyAction="replace"
            navigating= {(e: MouseEvent, domId: string, link: string) => true} 
            stateNavigator={stateNavigator}
            target="_blank"
            aria-label="Go to the second page of people">
            People
        </RefreshLink>
    );
}

// Navigation Link
var NavigationLinkTest = function() {
    return <NavigationLink stateKey="person">Person</NavigationLink>;
}

NavigationLinkTest = function() {
    return (
        <NavigationLink
            stateKey="person"
            navigationData={{ id: 12 }}
            includeCurrentData={false}
            currentDataKeys=""
            activeCssClass=""
            disableActive={false}
            lazy={false}
            historyAction="add"
            navigating= {(e: MouseEvent, domId: string, link: string) => true} 
            stateNavigator={stateNavigator}
            target="_blank"
            aria-label="View the person's details">
            Person
        </NavigationLink>
    );
}

// Navigation Back Link
var NavigationBackLinkTest = function() {
    return <NavigationBackLink distance={1}>People</NavigationBackLink>;
}

NavigationBackLinkTest = function() {
    return (
        <NavigationBackLink
            distance={1}
            lazy={false}
            historyAction="none"
            navigating= {(e: MouseEvent, domId: string, link: string) => true} 
            stateNavigator={stateNavigator}
            target="_blank"
            aria-label="Go back to the list of people">
            People
        </NavigationBackLink>
    );
}

