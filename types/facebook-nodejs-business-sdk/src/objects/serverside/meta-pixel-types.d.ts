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


/**
 * Represents the origin of a conversion event.
 * Must be one of the listed values.
 * 
 * Reference: https://developers.facebook.com/docs/marketing-api/conversions-api/parameters/server-event#
 */
export type ActionSource =
  | "email"
  | "website"
  | "app"
  | "phone_call"
  | "chat"
  | "physical_store"
  | "system_generated"
  | "business_messaging"
  | "other";