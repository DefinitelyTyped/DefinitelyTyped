import { RecurlyError } from './error';

export type GiftCardOptions = {
  code: string;
};

export type GiftCardResult = {
  currency: string;
  unit_amount: number;
};

export type Done = (error: RecurlyError, result: GiftCardResult) => void;

export type GiftCard = (giftCardOptions: GiftCardOptions, done: Done) => void;
