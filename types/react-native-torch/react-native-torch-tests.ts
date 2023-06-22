import Torch from 'react-native-torch';

Torch.switchState(true);
Torch.switchState(false);
// @ts-expect-error
Torch.switchState(123);

Torch.requestCameraPermission('a', 'b'); // $ExpectType Promise<boolean>
// @ts-expect-error
Torch.requestCameraPermission('a');
// @ts-expect-error
Torch.requestCameraPermission(1, 2);
