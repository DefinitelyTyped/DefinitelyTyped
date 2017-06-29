import { isSupported, authenticate } from 'react-native-touch-id';

isSupported().then(() => {}).catch(() => {});

authenticate('reason').then(() => {}).catch(() => {});
