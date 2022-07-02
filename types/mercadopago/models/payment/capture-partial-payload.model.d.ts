export interface CapturePartialPaymentPayload {
    /** Payment id. */
    id: number;

    /** New amount. */
    transaction_amount?: number | undefined;
  }
