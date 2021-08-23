import Torch from 'react-native-torch';

Torch.switchState(true);
Torch.switchState(false);
Torch.switchState(123); // $ExpectError

Torch.requestCameraPermission('a', 'b'); // $ExpectType Promise<boolean>
Torch.requestCameraPermission('a'); // $ExpectError
Torch.requestCameraPermission(1, 2); // $ExpectError
