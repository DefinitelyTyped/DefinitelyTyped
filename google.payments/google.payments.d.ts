// Type definitions for Google Payments (Wallet)
// Project: https://developers.google.com/wallet/digital/docs/jsreference
// Definitions by: Joshua Strobl <https://github.com/JoshStrobl>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

interface googleInterface{
	payments : paymentsInterface;
}

interface paymentsInterface{
	inapp: inappInterface;
}

interface inappInterface{
	buy(args : buyVariableObject) : void; // Initiates the purchase flow.
}

interface buyVariableObject{
	jwt : string; // Required JSON Web Token (A JSON object encoded as a Json Web Token string)
	success ?: (response : InAppSuccessObject) => any;
	failure ?: (response : InAppFailureObject) => any;
}

/* Success Handler Object / Interfaces */

interface InAppSuccessObject extends Object{
	request : Object; // The same fields and values as the request object that was passed to buy() (in the jwt parameter).
	response : InAppSuccessResponseObject;
	jwt : string;
}

interface InAppSuccessResponseObject extends Object{
	orderId : string; // Order identifier from Google
}

/* End of Success Handler Object / Interfaces */

/* Failure Handler Object / Interfaces */

interface InAppFailureObject extends Object{
	request : Object;  // Either an empty object or an object with the same fields and values as the request object that was passed to buy() (in the jwt parameter).
	response : InAppFailureResponseObject;
}

interface InAppFailureResponseObject extends Object{
	errorType : string;
}

/* End of Failure Handler Object / Interfaces */

declare module "google" {
	export = googleInterface;
}

declare var google : googleInterface;