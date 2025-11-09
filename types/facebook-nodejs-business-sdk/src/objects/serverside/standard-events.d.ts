/**
 * StandardEvents
 *
 * Represents the standard Facebook Pixel events. Allows any string but provides autocomplete for known standard events.
 *
 * Reference: https://developers.facebook.com/docs/meta-pixel/reference
 */
export type StandardEvents =
  | "AddPaymentInfo"
  | "AddToCart"
  | "AddToWishlist"
  | "CompleteRegistration"
  | "Contact"
  | "CustomizeProduct"
  | "Donate"
  | "FindLocation"
  | "InitiateCheckout"
  | "Lead"
  | "Purchase"
  | "Schedule"
  | "Search"
  | "StartTrial"
  | "SubmitApplication"
  | "Subscribe"
  | "ViewContent"
  | (string & {});
