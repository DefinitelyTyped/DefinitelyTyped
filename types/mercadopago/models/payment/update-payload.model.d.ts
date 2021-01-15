export interface UpdatePaymentPayload {
  /** Payment id. */
  id: number;

  /** Payment status. */
  status: 'pending' | 'approved' | 'authorized' | 'in_process' | 'in_mediation' | 'rejected' | 'cancelled' | 'refunded' | 'charged_back';
}
