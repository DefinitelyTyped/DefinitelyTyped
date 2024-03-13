export type Validate = {
  cardNumber: (cardNumber: string | number) => boolean;
  cardType: (cardNumber: string | number, partial: boolean) => boolean;
  expiry: (month: string | number, year: string | number) => boolean;
  cvv: (cvv: string | number) => boolean;
};
