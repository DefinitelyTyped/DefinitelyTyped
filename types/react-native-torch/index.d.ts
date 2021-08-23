// Type definitions for react-native-torch 1.1
// Project: https://github.com/ludo/react-native-torch#readme
// Definitions by: Ben Lorantfy <https://github.com/BenLorantfy>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare const Torch: {
    /**
     * Used to turn on or off the torch. Pass `true` to turn on and `false` to
     * turn off
     *
     * @example
     *  Torch.switchState(true); // Turn ON
     *  Torch.switchState(false); // Turn OFF
     *
     * @param newState `true` for on or `false` for off
     */
    switchState(newState: boolean): void;

    /**
     * On android, we need to ask for permissions before being able to turn on/off
     * the torch
     *
     * @example
     *  if (Platform.OS === 'ios') {
     *    Torch.switchState(this.isTorchOn);
     *  } else {
     *    const cameraAllowed = await Torch.requestCameraPermission(
     *      'Camera Permissions', // dialog title
     *      'We require camera permissions to use the torch on the back of your phone.' // dialog body
     *    );
     *
     *    if (cameraAllowed) {
     *      Torch.switchState(this.isTorchOn);
     *    }
     *  }
     *
     * @param dialogTitle The title of the permissions dialog
     * @param dialogBody The body text of the permissions dialog
     */
    requestCameraPermission(dialogTitle: string, dialogBody: string): Promise<boolean>;
};

export default Torch;
