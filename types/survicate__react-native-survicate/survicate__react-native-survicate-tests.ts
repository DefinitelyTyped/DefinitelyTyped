import Survicate from '@survicate/react-native-survicate';

Survicate.initialize();
Survicate.invokeEvent('test');
Survicate.enterScreen('test');
Survicate.leaveScreen('test');
Survicate.setUserId('test');
Survicate.setUserTrait('test', 'value');
Survicate.reset();
