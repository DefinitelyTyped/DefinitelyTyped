/// <reference path="navigation.d.ts" />

module NavigationTests {
	// History Manager
	class LogHistoryManager extends Navigation.HashHistoryManager  {
	    addHistory(state: Navigation.State, url: string) {
			console.log('add history');
			super.addHistory(state, url);
	    }
	}
	
	// Crumb Trail Persister
	class LogCrumbTrailPersister extends Navigation.CrumbTrailPersister {
		load(crumbTrail: string): string {
			console.log('load');
			return crumbTrail;
		}
		
		save(crumbTrail: string): string {
			console.log('save');
			return crumbTrail;
		}
	}
	
	// State Router
	class LogStateRouter extends Navigation.StateRouter {
	    getData(route: string): { state: Navigation.State; data: any } {
			console.log('get data');
			return super.getData(route);
	    }
	}
	
	// Settings
	Navigation.settings.router = new LogStateRouter();
	Navigation.settings.historyManager = new LogHistoryManager();
	Navigation.settings.crumbTrailPersister = new LogCrumbTrailPersister();
	Navigation.settings.stateIdKey = 'state';
	
	// Configuration
	Navigation.StateInfoConfig.build([
		{ key: 'home', initial: 'page', help: 'home.htm', states: [
			{ key: 'page', route: '', help: 'page.htm' }
		]},
		{ key: 'person', initial: 'list', states: [
			{ key: 'list', route: ['people/{page}', 'people/{page}/sort/{sort}'], transitions: [
				{ key: 'select', to: 'details' }
			], defaults: { page: 1 }, trackCrumbTrail: false },
			{ key: 'details', route: 'person/{id}', trackTypes: false, defaultTypes: { id: 'number' } }
		]}
	]);
	
	// StateInfo
	var dialogs = Navigation.StateInfoConfig.dialogs;
	var home = dialogs['home'];
	var homePage = home.states['page'];
	var homeKey = home.key;
	var homePageKey = homePage.key;
	homePage = home.initial;
	var person = dialogs['person'];
	var personList = person.states['list'];
	var personDetails = person.states['details'];
	var personListSelect = personList.transitions['select'];
	personList = personListSelect.parent;
	personDetails = personListSelect.to;
	var pageDefault = personList.defaults.page;
	var idDefaultType = personDetails.defaultTypes.id;
	
	// StateNavigator
	personList.dispose = () => {};
	personList.navigating = (data, url, navigate) => {
		navigate([]);
	};
	personList.navigated = (data, asyncData) => {};
	personDetails.navigating = (data, url, navigate) => {
		navigate();
	};
	personDetails.navigated = (data) => {};
	
	// State Handler
	class LogStateHandler extends Navigation.StateHandler {
		getNavigationLink(state: Navigation.State, data: any): string {
			console.log('get navigation link');
			return super.getNavigationLink(state, data, { ids: [] });
		}
	    getNavigationData(state: Navigation.State, url: string): any {
			console.log('get navigation data');
			super.getNavigationData(state, url, {});
	    }
        urlEncode(state: Navigation.State, key: string, val: string, queryString: boolean): string {
            return queryString ? val.replace(/\s/g, '+') : super.urlEncode(state, key, val, queryString);
        }
        urlDecode(state: Navigation.State, key: string, val: string, queryString: boolean): string {
            return queryString ? val.replace(/\+/g, ' ') : super.urlDecode(state, key, val, queryString);
        }
	}
	homePage.stateHandler = new LogStateHandler();
	personList.stateHandler = new LogStateHandler();
	personDetails.stateHandler = new LogStateHandler();
	
	// Navigation Event
	var navigationListener = 
	(oldState: Navigation.State, state: Navigation.State, data: any) => {
		Navigation.StateController.offNavigate(navigationListener);
	};
	Navigation.StateController.onNavigate(navigationListener);
	
	// Navigation
	Navigation.start('home');
	Navigation.StateController.navigate('person');
	Navigation.StateController.navigate('person', null, Navigation.HistoryAction.Add);
	Navigation.StateController.refresh();
	Navigation.StateController.refresh({ page: 3 });
	Navigation.StateController.refresh({ page: 2 }, Navigation.HistoryAction.Replace);
	Navigation.StateController.navigate('select', { id: 10 });
	var canGoBack: boolean = Navigation.StateController.canNavigateBack(1);
	Navigation.StateController.navigateBack(1);
	Navigation.StateController.clearStateContext();
	
	// Navigation Link
	var link = Navigation.StateController.getNavigationLink('person');
	link = Navigation.StateController.getRefreshLink();
	link = Navigation.StateController.getRefreshLink({ page: 2 });
	Navigation.StateController.navigateLink(link);
	link = Navigation.StateController.getNavigationLink('select', { id: 10 });
	var nextDialog = Navigation.StateController.getNextState('select').parent;
	person = nextDialog;
	Navigation.StateController.navigateLink(link, false);
	link = Navigation.StateController.getNavigationBackLink(1);
	var crumb = Navigation.StateController.crumbs[0];
	link = crumb.navigationLink;
	Navigation.StateController.navigateLink(link, true, Navigation.HistoryAction.None);
	
	// StateContext
	Navigation.StateController.navigate('home');
	Navigation.StateController.navigate('person');
	home = Navigation.StateContext.previousDialog;
	homePage = Navigation.StateContext.previousState;
	person === Navigation.StateContext.dialog;
	personList === Navigation.StateContext.state;
	var url: string = Navigation.StateContext.url;
	var title: string = Navigation.StateContext.title;
	var page: number = Navigation.StateContext.data.page;
	Navigation.StateController.refresh({ page: 2 });
	person = Navigation.StateContext.oldDialog;
	personList = Navigation.StateContext.oldState;
	page = Navigation.StateContext.oldData.page;
	page = Navigation.StateContext.previousData.page;
	
	// Navigation Data
	var data = Navigation.StateContext.includeCurrentData({ sort: 'name' }, ['page']);
	Navigation.StateController.refresh(data);
	Navigation.StateContext.clear('sort');
	var data = Navigation.StateContext.includeCurrentData({ pageSize: 10 });
	Navigation.StateController.refresh(data);
	Navigation.StateContext.clear();
	Navigation.StateController.refresh();
}