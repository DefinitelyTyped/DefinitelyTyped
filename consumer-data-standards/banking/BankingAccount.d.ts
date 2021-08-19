import { BankingProductCategory } from "./enums";

interface BankingAccount {
    accountId: string;
    creationDate?: string;
    displayName: string;
    nickname?: string;
    openStatus?: string;
    isOwned?: boolean;
    maskedNumber: string;
    productCategory: BankingProductCategory;
    productName: string;
}






