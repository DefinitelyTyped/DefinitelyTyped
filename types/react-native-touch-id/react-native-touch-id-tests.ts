import { isSupported, authenticate, TouchIDError } from 'react-native-touch-id';

isSupported().then((isOk: boolean) => {}).catch((error: TouchIDError) => {});

authenticate('reason').then((isOk: boolean) => {}).catch((error: TouchIDError) => {});

authenticate('reason', {
    title: 'Authentication Required',
    color: '#1306ff'
}).then((isOk: boolean) => {}).catch((error: TouchIDError) => {});
