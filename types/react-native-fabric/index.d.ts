// Type definitions for react-native-fabric 0.5
// Project: https://github.com/corymsmith/react-native-fabric
// Definitions by: Joseph Roque <https://github.com/josephroque>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export interface CustomAttributes {
    [key: string]: any;
}

export namespace Answers {
    function logCustom(eventName: string, customAttributes?: CustomAttributes): void;
    function logInvite(method: string, customAttributes?: CustomAttributes): void;
    function logLevelStart(levelName: string, customAttributes?: CustomAttributes): void;
    function logLevelEnd(levelName: string, customAttributes?: CustomAttributes): void;
    function logLogin(method: string, success: boolean, customAttributes?: CustomAttributes): void;
    function logSearch(query: string, customAttributes?: CustomAttributes): void;
    function logSignUp(method: string, success: boolean, customAttributes?: CustomAttributes): void;
    function logShare(
        method: string,
        contentName: string,
        contentType: string,
        contentId: string,
        customAttributes?: CustomAttributes): void;
    function logStartCheckout(
        totalPrice: number,
        count: number,
        currency: string,
        customAttributes?: CustomAttributes): void;
    function logAddToCart(
        itemPrice: number,
        currency: string,
        itemName: string,
        itemType: string,
        itemId: string,
        customAttributes?: CustomAttributes): void;
    function logPurchase(
        itemPrice: number,
        currency: string,
        success: boolean,
        itemName: string,
        itemType: string,
        itemId: string,
        customAttributes?: CustomAttributes): void;
    function logContentView(
        contentName: string,
        contentType: string,
        contentId: string,
        customAttributes?: CustomAttributes): void;
    function logRating(
        rating: number,
        contentId: string,
        contentType: string,
        contentName: string,
        customAttributes?: CustomAttributes): void;
}

export namespace Crashlytics {
    function crash(): void;
    function throwException(): void;
    function recordError(error: any): void;
    function logException(value: string): void;
    function log(message: string): void;
    function setUserEmail(email: string): void;
    function setUserIdentifier(id: string): void;
    function setUserName(userName: string): void;
    function setBool(key: string, value: boolean): void;
    function setNumber(key: string, value: number): void;
    function setString(key: string, value: string): void;
    function recordCustomExceptionName(name: string, reason: string, stack?: any[]): void;
}
