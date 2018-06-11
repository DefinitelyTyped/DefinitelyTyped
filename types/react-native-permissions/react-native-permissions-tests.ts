import Permissions from 'react-native-permissions';

const firstType = Permissions.getTypes()[0];

Permissions.canOpenSettings().then();
Permissions.openSettings().then();
Permissions.check('geolocation').then();
Permissions.request('geolocation').then();
Permissions.checkMultiple(['geolocation', 'notification']).then();
