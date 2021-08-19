export interface BankingProductBundle {
  name: string;
  description: string;
  additionalInfo?: string;
  additionalInfoUri?: string;
  productIds?: string[] | null;
}
