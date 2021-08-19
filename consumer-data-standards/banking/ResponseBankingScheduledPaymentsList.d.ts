import { BankingScheduledPayment } from "./BankingScheduledPayment";
import { LinksPaginated, MetaPaginated } from "./Shared";

export interface ResponseBankingScheduledPaymentsList {
  data: RespPaymentList;
  links: LinksPaginated;
  meta: MetaPaginated;
}
interface RespPaymentList {
  scheduledPayments?: BankingScheduledPayment[] | null;
}
