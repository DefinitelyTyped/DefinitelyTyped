import { createBrowserHistory } from 'history';
import restoreScroll from 'redux-first-router-restore-scroll';

restoreScroll()(createBrowserHistory()); // $ExpectType object
