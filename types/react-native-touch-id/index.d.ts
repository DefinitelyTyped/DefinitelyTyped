// Type definitions for react-native-touch-id 4.0.0
// Project: https://github.com/naoufal/react-native-touch-id
// Definitions by: huhuanming <https://github.com/huhuanming>
//                 Nikolay Polukhin <https://github.com/gazaret>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare module 'react-native-touch-id' {

  class TouchIDError {
    name: 'LAErrorAuthenticationFailed' | 'LAErrorUserCancel' | 'LAErrorUserFallback' | 'LAErrorSystemCancel'
          | 'LAErrorPasscodeNotSet' | 'LAErrorTouchIDNotAvailable' | 'LAErrorTouchIDNotEnrolled'
          | 'LAErrorTouchIDNotEnrolled' | 'RCTTouchIDUnknownError' | 'RCTTouchIDNotSupported';
    message: string;
    details: any;
  }

  export interface AuthenticateConfig {
    title: string;
    color: string;
  }

  export const isSupported: () => Promise<boolean | string | TouchIDError>;
  export const authenticate: (reason: string, config?: AuthenticateConfig) => Promise<boolean | TouchIDError>;
}
