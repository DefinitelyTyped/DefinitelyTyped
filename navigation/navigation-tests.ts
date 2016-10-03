/// <reference path="navigation.d.ts" />

namespace NavigationTests {
	// History Manager
	class LogHistoryManager extends Navigation.HashHistoryManager  {
	    addHistory(url: string) {
			console.log('add history');
			super.addHistory(url, false);
	    }
	}
	
	// Configuration
	var config = [
        { key: 'people', route: ['people/{page}', 'people/{page}/sort/{sort}'], defaults: { page: 1 }, help: 'people.htm' },
        { key: 'person', route: 'person/{id}', trackTypes: false, defaultTypes: { id: 'number' }, trackCrumbTrail: true }
	];
    var stateNavigator = new Navigation.StateNavigator(config);
    stateNavigator.configure(config, new LogHistoryManager());
	
	// States
	var states = stateNavigator.states;
	var people = states['people'];
	var person = states['person'];
    var help = people['help'];
	var pageDefault = people.defaults.page;
	var idDefaultType = person.defaultTypes.id;
	
	// State Controller
	people.dispose = () => {};
	people.navigating = (data, url, navigate) => {
		navigate([]);
	};
	people.navigated = (data, asyncData) => {};
	person.navigating = (data, url, navigate) => {
		navigate();
	};
	person.navigated = (data) => {};
    person.urlEncode = function urlEncode(state: Navigation.State, key: string, val: string, queryString: boolean): string {
        return queryString ? val.replace(/\s/g, '+') : encodeURIComponent(val);
    };
    person.urlDecode = function urlDecode(state: Navigation.State, key: string, val: string, queryString: boolean): string {
        return queryString ? val.replace(/\+/g, ' ') : decodeURIComponent(val);
    };
	person.validate = (data: any) => data.id > 0;
	
	// Navigation Event
	var navigationListener = (oldState: Navigation.State, state: Navigation.State, data: any, asyncData: any) => {
		stateNavigator.offNavigate(navigationListener);
	};
	stateNavigator.onNavigate(navigationListener);
	
	// Navigation
	stateNavigator.navigate('people');
	stateNavigator.navigate('people', null, 'add');
	stateNavigator.refresh();
	stateNavigator.refresh({ page: 3 });
	stateNavigator.refresh({ page: 2 }, 'replace');
	stateNavigator.navigate('person', { id: 10 });
	var canGoBack: boolean = stateNavigator.canNavigateBack(1);
	stateNavigator.navigateBack(1);
	stateNavigator.stateContext.clear();
	
	// Navigation Link
	var link = stateNavigator.getNavigationLink('people');
	link = stateNavigator.getRefreshLink();
	link = stateNavigator.getRefreshLink({ page: 2 });
	stateNavigator.navigateLink(link);
	link = stateNavigator.getNavigationLink('person', { id: 10 });
	stateNavigator.navigateLink(link, 'replace');
	link = stateNavigator.getNavigationBackLink(1);
	var crumb = stateNavigator.stateContext.crumbs[0];
	link = crumb.url;
	stateNavigator.navigateLink(link, 'none', true);
	
	// State Context
	var state: Navigation.State = stateNavigator.stateContext.state;
	var url: string = stateNavigator.stateContext.url;
	var title: string = stateNavigator.stateContext.title;
	var page: number = stateNavigator.stateContext.data.page;
	state = stateNavigator.stateContext.oldState;
	page = stateNavigator.stateContext.oldData.page;
	state = stateNavigator.stateContext.previousState;
	page = stateNavigator.stateContext.previousData.page;
	
	// Navigation Data
	var data = stateNavigator.stateContext.includeCurrentData({ sort: 'name' }, ['page']);
	stateNavigator.refresh(data);
	var data = stateNavigator.stateContext.includeCurrentData({ pageSize: 10 });
	stateNavigator.refresh(data);
}
