// Type definitions for nodots-backgammon-types
// Project: https://github.com/nodots/nodots-backgammon-types
// Definitions by: Ken Riley <https://github.com/nodots>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 4.5

interface Offer {
  offeringPlayerId: string
  offeredPlayerId: string
  kind: 'play' | 'double' | 'resign'
}
export interface OfferPlay extends Offer {
  kind: 'play'
  accepted: boolean
}
export interface OfferDouble extends Offer {
  kind: 'double'
  accepted: boolean
}
export interface OfferResign extends Offer {
  kind: 'resign'
  accepted: boolean
}
export type BackgammonOffer = OfferPlay | OfferDouble | OfferResign
export {}
