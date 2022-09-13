export interface UpdatePreApprovalPayload {
  /** PreApproval id. */
  id: number;

  /** PreApproval status. */
  status: 'pending' | 'paused' | 'cancelled';
}
