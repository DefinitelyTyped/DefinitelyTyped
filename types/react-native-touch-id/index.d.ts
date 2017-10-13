// Type definitions for react-native-touch-id 3.0.0
// Project: https://github.com/naoufal/react-native-touch-id
// Definitions by: huhuanming <https://github.com/huhuanming>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare module 'react-native-touch-id' {

  class TouchIDError {
    name: 'LAErrorAuthenticationFailed' | 'LAErrorUserCancel' | 'LAErrorUserFallback' | 'LAErrorSystemCancel'
          | 'LAErrorPasscodeNotSet' | 'LAErrorTouchIDNotAvailable' | 'LAErrorTouchIDNotEnrolled'
          | 'LAErrorTouchIDNotEnrolled' | 'RCTTouchIDUnknownError' | 'RCTTouchIDNotSupported';
    message: string;
    details: any;
  }

  export const isSupported: () => Promise<boolean | TouchIDError>;
  export const authenticate: (reason: string) => Promise<boolean | TouchIDError>;
}
