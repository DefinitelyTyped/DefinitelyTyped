// Type definitions for @survicate/react-native-survicate 1.0
// Project: https://github.com/Survicate/react-native-survicate#readme
// Definitions by: Ian Mobley <https://github.com/iMobs>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace Survicate {
    function initialize(): void;
    function invokeEvent(eventName: string): void;
    function enterScreen(screenName: string): void;
    function leaveScreen(screenName: string): void;
    function setUserId(screenName: string): void;
    function setUserTrait(traitName: string, traitValue: string): void;
    function reset(): void;
}

export default Survicate;
