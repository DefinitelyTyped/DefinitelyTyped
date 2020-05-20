import { getStatusBarHeight } from 'react-native-status-bar-height';

getStatusBarHeight(); // $ExpectType number
getStatusBarHeight(false); // $ExpectType number
getStatusBarHeight(true); // $ExpectType number
