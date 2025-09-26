/* These are the schema definitions stipulated by the Data Standards Body for the energy api. */

/**
 * Australian address formatted according to the file format defined by the [PAF file format](https://auspost.com.au/content/dam/auspost_corp/media/documents/australia-post-data-guide.pdf). Required if _addressUType_ is set to `paf`.
 */
export interface CommonPAFAddress {
    /**
     * Building/Property name 1.
     */
    buildingName1?: string | null;
    /**
     * Building/Property name 2.
     */
    buildingName2?: string | null;
    /**
     * Unique identifier for an address as defined by Australia Post. Also known as Delivery Point Identifier.
     */
    dpid?: string | null;
    /**
     * Unit number (including suffix, if applicable).
     */
    flatUnitNumber?: string | null;
    /**
     * Type of flat or unit for the address.
     */
    flatUnitType?: string | null;
    /**
     * Floor or level number (including alpha characters).
     */
    floorLevelNumber?: string | null;
    /**
     * Type of floor or level for the address.
     */
    floorLevelType?: string | null;
    /**
     * Full name of locality.
     */
    localityName: string;
    /**
     * Allotment number for the address.
     */
    lotNumber?: string | null;
    /**
     * Postal delivery number if the address is a postal delivery type.
     */
    postalDeliveryNumber?: number | null;
    /**
     * Postal delivery number prefix related to the postal delivery number.
     */
    postalDeliveryNumberPrefix?: string | null;
    /**
     * Postal delivery number suffix related to the postal delivery number.
     */
    postalDeliveryNumberSuffix?: string | null;
    /**
     * Postal delivery type. (e.g., PO BOX). Valid enumeration defined by Australia Post PAF code file.
     */
    postalDeliveryType?: string | null;
    /**
     * Postcode for the locality.
     */
    postcode: string;
    /**
     * State in which the address belongs. Valid enumeration defined by Australia Post PAF code file [State Type Abbreviation](https://auspost.com.au/content/dam/auspost_corp/media/documents/australia-post-data-guide.pdf). `NSW`, `QLD`, `VIC`, `NT`, `WA`, `SA`, `TAS`, `ACT`, `AAT`.
     */
    state: string;
    /**
     * The name of the street.
     */
    streetName?: string | null;
    /**
     * The street type suffix. Valid enumeration defined by Australia Post PAF code file.
     */
    streetSuffix?: string | null;
    /**
     * The street type. Valid enumeration defined by Australia Post PAF code file.
     */
    streetType?: string | null;
    /**
     * Thoroughfare number for a property (first number in a property ranged address).
     */
    thoroughfareNumber1?: number | null;
    /**
     * Suffix for the thoroughfare number. Only relevant if _thoroughfareNumber1_ is populated.
     */
    thoroughfareNumber1Suffix?: string | null;
    /**
     * Second thoroughfare number (only used if the property has a ranged address e.g., 23-25).
     */
    thoroughfareNumber2?: number | null;
    /**
     * Suffix for the second thoroughfare number. Only relevant if _thoroughfareNumber2_ is populated.
     */
    thoroughfareNumber2Suffix?: string | null;
}
/* These are the schema definitions stipulated by the Data Standards Body for the energy api. */

export interface CommonPhysicalAddress {
    /**
     * The type of address object present.
     */
    addressUType: "paf" | "simple";
    paf?: CommonPAFAddress;
    simple?: CommonSimpleAddress;
}
/* These are the schema definitions stipulated by the Data Standards Body for the energy api. */

/**
 * Required if _addressUType_ is set to `simple`.
 */
export interface CommonSimpleAddress {
    /**
     * First line of the standard address object.
     */
    addressLine1: string;
    /**
     * Second line of the standard address object.
     */
    addressLine2?: string | null;
    /**
     * Third line of the standard address object.
     */
    addressLine3?: string | null;
    /**
     * Name of the city or locality.
     */
    city: string;
    /**
     * A valid [ISO 3166 Alpha-3](https://www.iso.org/iso-3166-country-codes.html) country code. Australia (`AUS`) is assumed if country is not present.
     */
    country?: string | null;
    /**
     * Name of the individual or business formatted for inclusion in an address used for physical mail.
     */
    mailingName?: string | null;
    /**
     * Mandatory for Australian addresses.
     */
    postcode?: string | null;
    /**
     * Free text if the country is not Australia. If country is Australia then must be one of the values defined by the [State Type Abbreviation](https://auspost.com.au/content/dam/auspost_corp/media/documents/australia-post-data-guide.pdf) in the PAF file format. `NSW`, `QLD`, `VIC`, `NT`, `WA`, `SA`, `TAS`, `ACT`, `AAT`.
     */
    state: string;
}
/* These are the schema definitions stipulated by the Data Standards Body for the energy api. */

export interface EnergyAccountBaseV2 {
    /**
     * Unique identifier for the account.
     */
    accountId: string;
    /**
     * Optional identifier of the account as defined by the data holder. This must be the value presented on physical statements (if it exists) and must not be used for the value of _accountId_.
     */
    accountNumber?: string | null;
    /**
     * The date that the account was created or opened. Mandatory if _openStatus_ is `OPEN`.
     */
    creationDate?: string | null;
    /**
     * An optional display name for the account if one exists or can be derived. The content of this field is at the discretion of the data holder.
     */
    displayName?: string | null;
    /**
     * Open or closed status for the account. If not present then `OPEN` is assumed.
     */
    openStatus?: ("CLOSED" | "OPEN") | null;
}
/* These are the schema definitions stipulated by the Data Standards Body for the energy api. */

export interface EnergyAccountDetailResponseV3 {
    data: EnergyAccountBaseV2 & {
        /**
         * The array of plans containing service points and associated plan details
         */
        plans: {
            /**
             * Optional display name for the plan provided by the customer to help differentiate multiple plans
             */
            nickname?: string;
            /**
             * An array of servicePointIds, representing NMIs, that this account is linked to
             */
            servicePointIds: string[];
            /**
             * Mandatory if openStatus is OPEN
             */
            planOverview?: {
                /**
                 * The name of the plan if one exists
                 */
                displayName?: string;
                /**
                 * The start date of the applicability of this plan
                 */
                startDate: string;
                /**
                 * The end date of the applicability of this plan
                 */
                endDate?: string;
            };
            /**
             * Detail on the plan applicable to this account. Mandatory if openStatus is OPEN
             */
            planDetail?: {
                /**
                 * The fuel types covered by the plan
                 */
                fuelType: "ELECTRICITY" | "GAS" | "DUAL";
                /**
                 * Flag that indicates that the plan is contingent on the customer taking up an alternate fuel plan from the same retailer (for instance, if the fuelType is ELECTRICITY then a GAS plan from the same retailer must be taken up). Has no meaning if the plan has a fuelType of DUAL. If absent the value is assumed to be false
                 */
                isContingentPlan?: boolean;
                /**
                 * Charges for metering included in the plan
                 */
                meteringCharges?: {
                    /**
                     * Display name of the charge
                     */
                    displayName: string;
                    /**
                     * Description of the charge
                     */
                    description?: string;
                    /**
                     * Minimum value of the charge if the charge is a range or the absolute value of the charge if no range is specified
                     */
                    minimumValue: string;
                    /**
                     * The upper limit of the charge if the charge could occur in a range
                     */
                    maximumValue?: string;
                    /**
                     * The charges that occur on a schedule indicates the frequency. Formatted according to [ISO 8601 Durations](https://en.wikipedia.org/wiki/ISO_8601#Durations) (excludes recurrence syntax)
                     */
                    period?: string;
                }[];
                gasContract?: EnergyPlanContractV2;
                electricityContract?: EnergyPlanContractV2;
            };
            /**
             * An array of additional contacts that are authorised to act on this account
             */
            authorisedContacts?: {
                /**
                 * For people with single names this field need not be present. The single name should be in the lastName field
                 */
                firstName?: string;
                /**
                 * For people with single names the single name should be in this field
                 */
                lastName: string;
                /**
                 * Field is mandatory but array may be empty
                 */
                middleNames?: string[];
                /**
                 * Also known as title or salutation. The prefix to the name (e.g. Mr, Mrs, Ms, Miss, Sir, etc)
                 */
                prefix?: string;
                /**
                 * Used for a trailing suffix to the name (e.g. Jr)
                 */
                suffix?: string;
            }[];
        }[];
    };
    links: Links;
    meta?: Meta;
}
/* These are the schema definitions stipulated by the Data Standards Body for the energy api. */

export interface EnergyAccountDetailResponseV4 {
    data: EnergyAccountBaseV2 & {
        /**
         * The array of plans containing service points and associated plan details.
         */
        plans: {
            /**
             * Optional display name for the plan provided by the customer to help differentiate multiple plans.
             */
            nickname?: string;
            /**
             * An array of _servicePointId_ values, representing NMIs, that this account is linked to.
             */
            servicePointIds: string[];
            /**
             * Mandatory if _openStatus_ is `OPEN`.
             */
            planOverview?: {
                /**
                 * The name of the plan if one exists.
                 */
                displayName?: string;
                /**
                 * The start date of the applicability of this plan.
                 */
                startDate: string;
                /**
                 * The end date of the applicability of this plan.
                 */
                endDate?: string;
            };
            /**
             * Detail on the plan applicable to this account. Mandatory if _openStatus_ is `OPEN`.
             */
            planDetail?: {
                /**
                 * The fuel types covered by the plan.
                 */
                fuelType: "ELECTRICITY" | "GAS" | "DUAL";
                /**
                 * Flag that indicates that the plan is contingent on the customer taking up an alternate fuel plan from the same retailer (for instance, if the _fuelType_ is `ELECTRICITY` then a `GAS` plan from the same retailer must be taken up). Has no meaning if the plan has a _fuelType_ of `DUAL`. If absent the value is assumed to be `false`.
                 */
                isContingentPlan?: boolean;
                /**
                 * Charges for metering included in the plan.
                 */
                meteringCharges?: {
                    /**
                     * Display name of the charge.
                     */
                    displayName: string;
                    /**
                     * Description of the charge.
                     */
                    description?: string;
                    /**
                     * Minimum value of the charge if the charge is a range or the absolute value of the charge if no range is specified.
                     */
                    minimumValue: string;
                    /**
                     * The upper limit of the charge if the charge could occur in a range.
                     */
                    maximumValue?: string;
                    /**
                     * The charges that occur on a schedule indicates the frequency. Formatted according to [ISO 8601 Durations](https://en.wikipedia.org/wiki/ISO_8601#Durations) (excludes recurrence syntax).
                     */
                    period?: string;
                }[];
                /**
                 * The details of the terms for the supply of electricity under this plan. Is mandatory if _fuelType_ is set to `GAS` or `DUAL`.
                 */
                gasContract?: EnergyPlanContractV3;
                /**
                 * The details of the terms for the supply of electricity under this plan. Is mandatory if _fuelType_ is set to `ELECTRICITY` or `DUAL`.
                 */
                electricityContract?: EnergyPlanContractV3;
            };
            /**
             * An array of additional contacts that are authorised to act on this account.
             */
            authorisedContacts?: {
                /**
                 * For people with single names this field need not be present. The single name should be in the _lastName_ field.
                 */
                firstName?: string;
                /**
                 * For people with single names the single name should be in this field.
                 */
                lastName: string;
                /**
                 * Field is mandatory but array may be empty.
                 */
                middleNames?: string[];
                /**
                 * Also known as title or salutation. The prefix to the name (e.g., Mr, Mrs, Ms, Miss, Sir, etc.)
                 */
                prefix?: string;
                /**
                 * Used for a trailing suffix to the name (e.g., Jr.)
                 */
                suffix?: string;
            }[];
        }[];
    };
    links: Links;
    meta?: Meta;
}
/* These are the schema definitions stipulated by the Data Standards Body for the energy api. */

export type EnergyAccountDetailV3 = EnergyAccountBaseV2 & {
    /**
     * The array of plans containing service points and associated plan details
     */
    plans: {
        /**
         * Optional display name for the plan provided by the customer to help differentiate multiple plans
         */
        nickname?: string;
        /**
         * An array of servicePointIds, representing NMIs, that this account is linked to
         */
        servicePointIds: string[];
        /**
         * Mandatory if openStatus is OPEN
         */
        planOverview?: {
            /**
             * The name of the plan if one exists
             */
            displayName?: string;
            /**
             * The start date of the applicability of this plan
             */
            startDate: string;
            /**
             * The end date of the applicability of this plan
             */
            endDate?: string;
        };
        /**
         * Detail on the plan applicable to this account. Mandatory if openStatus is OPEN
         */
        planDetail?: {
            /**
             * The fuel types covered by the plan
             */
            fuelType: "ELECTRICITY" | "GAS" | "DUAL";
            /**
             * Flag that indicates that the plan is contingent on the customer taking up an alternate fuel plan from the same retailer (for instance, if the fuelType is ELECTRICITY then a GAS plan from the same retailer must be taken up). Has no meaning if the plan has a fuelType of DUAL. If absent the value is assumed to be false
             */
            isContingentPlan?: boolean;
            /**
             * Charges for metering included in the plan
             */
            meteringCharges?: {
                /**
                 * Display name of the charge
                 */
                displayName: string;
                /**
                 * Description of the charge
                 */
                description?: string;
                /**
                 * Minimum value of the charge if the charge is a range or the absolute value of the charge if no range is specified
                 */
                minimumValue: string;
                /**
                 * The upper limit of the charge if the charge could occur in a range
                 */
                maximumValue?: string;
                /**
                 * The charges that occur on a schedule indicates the frequency. Formatted according to [ISO 8601 Durations](https://en.wikipedia.org/wiki/ISO_8601#Durations) (excludes recurrence syntax)
                 */
                period?: string;
            }[];
            gasContract?: EnergyPlanContractV2;
            electricityContract?: EnergyPlanContractV2;
        };
        /**
         * An array of additional contacts that are authorised to act on this account
         */
        authorisedContacts?: {
            /**
             * For people with single names this field need not be present. The single name should be in the lastName field
             */
            firstName?: string;
            /**
             * For people with single names the single name should be in this field
             */
            lastName: string;
            /**
             * Field is mandatory but array may be empty
             */
            middleNames?: string[];
            /**
             * Also known as title or salutation. The prefix to the name (e.g. Mr, Mrs, Ms, Miss, Sir, etc)
             */
            prefix?: string;
            /**
             * Used for a trailing suffix to the name (e.g. Jr)
             */
            suffix?: string;
        }[];
    }[];
};
/* These are the schema definitions stipulated by the Data Standards Body for the energy api. */

export type EnergyAccountDetailV4 = EnergyAccountBaseV2 & {
    /**
     * The array of plans containing service points and associated plan details.
     */
    plans: {
        /**
         * Optional display name for the plan provided by the customer to help differentiate multiple plans.
         */
        nickname?: string;
        /**
         * An array of _servicePointId_ values, representing NMIs, that this account is linked to.
         */
        servicePointIds: string[];
        /**
         * Mandatory if _openStatus_ is `OPEN`.
         */
        planOverview?: {
            /**
             * The name of the plan if one exists.
             */
            displayName?: string;
            /**
             * The start date of the applicability of this plan.
             */
            startDate: string;
            /**
             * The end date of the applicability of this plan.
             */
            endDate?: string;
        };
        /**
         * Detail on the plan applicable to this account. Mandatory if _openStatus_ is `OPEN`.
         */
        planDetail?: {
            /**
             * The fuel types covered by the plan.
             */
            fuelType: "ELECTRICITY" | "GAS" | "DUAL";
            /**
             * Flag that indicates that the plan is contingent on the customer taking up an alternate fuel plan from the same retailer (for instance, if the _fuelType_ is `ELECTRICITY` then a `GAS` plan from the same retailer must be taken up). Has no meaning if the plan has a _fuelType_ of `DUAL`. If absent the value is assumed to be `false`.
             */
            isContingentPlan?: boolean;
            /**
             * Charges for metering included in the plan.
             */
            meteringCharges?: {
                /**
                 * Display name of the charge.
                 */
                displayName: string;
                /**
                 * Description of the charge.
                 */
                description?: string;
                /**
                 * Minimum value of the charge if the charge is a range or the absolute value of the charge if no range is specified.
                 */
                minimumValue: string;
                /**
                 * The upper limit of the charge if the charge could occur in a range.
                 */
                maximumValue?: string;
                /**
                 * The charges that occur on a schedule indicates the frequency. Formatted according to [ISO 8601 Durations](https://en.wikipedia.org/wiki/ISO_8601#Durations) (excludes recurrence syntax).
                 */
                period?: string;
            }[];
            /**
             * The details of the terms for the supply of electricity under this plan. Is mandatory if _fuelType_ is set to `GAS` or `DUAL`.
             */
            gasContract?: EnergyPlanContractV3;
            /**
             * The details of the terms for the supply of electricity under this plan. Is mandatory if _fuelType_ is set to `ELECTRICITY` or `DUAL`.
             */
            electricityContract?: EnergyPlanContractV3;
        };
        /**
         * An array of additional contacts that are authorised to act on this account.
         */
        authorisedContacts?: {
            /**
             * For people with single names this field need not be present. The single name should be in the _lastName_ field.
             */
            firstName?: string;
            /**
             * For people with single names the single name should be in this field.
             */
            lastName: string;
            /**
             * Field is mandatory but array may be empty.
             */
            middleNames?: string[];
            /**
             * Also known as title or salutation. The prefix to the name (e.g., Mr, Mrs, Ms, Miss, Sir, etc.)
             */
            prefix?: string;
            /**
             * Used for a trailing suffix to the name (e.g., Jr.)
             */
            suffix?: string;
        }[];
    }[];
};
/* These are the schema definitions stipulated by the Data Standards Body for the energy api. */

/**
 * A unique identifier for an Energy account, generated according to [CDR ID Permanence](#id-permanence) requirements.
 */
export type EnergyAccountId = string;
/* These are the schema definitions stipulated by the Data Standards Body for the energy api. */

export interface EnergyAccountListResponseV2 {
    data: {
        /**
         * Array of accounts.
         */
        accounts: (EnergyAccountBaseV2 & {
            /**
             * The array of plans containing service points and associated plan details.
             */
            plans: {
                /**
                 * Optional display name for the plan provided by the customer to help differentiate multiple plans.
                 */
                nickname?: string;
                /**
                 * An array of _servicePointId_ values, representing NMIs, that this plan is linked to. If there are no service points allocated to this plan then an empty array would be expected.
                 */
                servicePointIds: string[];
                /**
                 * Mandatory if _openStatus_ is `OPEN`.
                 */
                planOverview?: {
                    /**
                     * The name of the plan if one exists.
                     */
                    displayName?: string;
                    /**
                     * The start date of the applicability of this plan.
                     */
                    startDate: string;
                    /**
                     * The end date of the applicability of this plan.
                     */
                    endDate?: string;
                };
            }[];
        })[];
    };
    links: LinksPaginated;
    meta: MetaPaginated;
}
/* These are the schema definitions stipulated by the Data Standards Body for the energy api. */

export type EnergyAccountV2 = EnergyAccountBaseV2 & {
    /**
     * The array of plans containing service points and associated plan details.
     */
    plans: {
        /**
         * Optional display name for the plan provided by the customer to help differentiate multiple plans.
         */
        nickname?: string;
        /**
         * An array of _servicePointId_ values, representing NMIs, that this plan is linked to. If there are no service points allocated to this plan then an empty array would be expected.
         */
        servicePointIds: string[];
        /**
         * Mandatory if _openStatus_ is `OPEN`.
         */
        planOverview?: {
            /**
             * The name of the plan if one exists.
             */
            displayName?: string;
            /**
             * The start date of the applicability of this plan.
             */
            startDate: string;
            /**
             * The end date of the applicability of this plan.
             */
            endDate?: string;
        };
    }[];
};
/* These are the schema definitions stipulated by the Data Standards Body for the energy api. */

export interface EnergyBalanceListResponse {
    data: {
        /**
         * Array of account balances.
         */
        balances: {
            /**
             * Unique identifier for the account.
             */
            accountId: string;
            /**
             * The current balance of the account. A positive value indicates that amount is owing to be paid. A negative value indicates that the account is in credit.
             */
            balance: string;
        }[];
    };
    links: LinksPaginated;
    meta: MetaPaginated;
}
/* These are the schema definitions stipulated by the Data Standards Body for the energy api. */

export interface EnergyBalanceResponse {
    data: {
        /**
         * The current balance of the account. A positive value indicates that amount is owing to be paid. A negative value indicates that the account is in credit.
         */
        balance: string;
    };
    links: Links;
    meta?: Meta;
}
/* These are the schema definitions stipulated by the Data Standards Body for the energy api. */

export interface EnergyBillingDemandTransactionV2 {
    /**
     * Optional array of adjustments arising for this transaction
     */
    adjustments?:
        | {
            /**
             * The amount of the adjustment
             */
            amount: string;
            /**
             * A free text description of the adjustment
             */
            description: string;
        }[]
        | null;
    /**
     * The amount charged or credited for this transaction prior to any adjustments being applied.  A negative value indicates a credit
     */
    amount: string;
    /**
     * Additional calculation factors that inform the transaction
     */
    calculationFactors?:
        | {
            /**
             * The type of the calculation factor
             */
            type: "DLF" | "MLF";
            /**
             * The value of the calculation factor
             */
            value: number;
        }[]
        | null;
    /**
     * Optional description of the transaction that can be used for display purposes
     */
    description?: string | null;
    /**
     * Date and time when the demand period ends
     */
    endDate: string;
    /**
     * The number of the invoice in which this transaction is included if it has been issued
     */
    invoiceNumber?: string | null;
    /**
     * Flag indicating if the usage is estimated or actual.  True indicates estimate.  False or absent indicates actual
     */
    isEstimate?: boolean | null;
    /**
     * The rate for the demand charge in kVA.  A negative value indicates power generated
     */
    rate: number;
    /**
     * The ID of the service point to which this transaction applies if any
     */
    servicePointId?: string | null;
    /**
     * Date and time when the demand period starts
     */
    startDate: string;
    /**
     * The time of use type that the transaction applies to
     */
    timeOfUseType:
        | "PEAK"
        | "OFF_PEAK"
        | "OFF_PEAK_DEMAND_CHARGE"
        | "SHOULDER"
        | "SHOULDER1"
        | "SHOULDER2"
        | "CONTROLLED_LOAD"
        | "SOLAR"
        | "AGGREGATE"
        | "ALL_DAY"
        | "EXCESS";
}
/* These are the schema definitions stipulated by the Data Standards Body for the energy api. */

export interface EnergyBillingDemandTransactionV3 {
    /**
     * Optional array of adjustments arising for this transaction.
     */
    adjustments?:
        | {
            /**
             * The amount of the adjustment.
             */
            amount: string;
            /**
             * A free text description of the adjustment.
             */
            description: string;
        }[]
        | null;
    /**
     * The amount charged or credited for this transaction prior to any adjustments being applied. A negative value indicates a credit.
     */
    amount: string;
    /**
     * Additional calculation factors that inform the transaction.
     */
    calculationFactors?:
        | {
            /**
             * The type of the calculation factor.
             */
            type: "DLF" | "MLF";
            /**
             * The value of the calculation factor.
             */
            value: number;
        }[]
        | null;
    /**
     * Optional description of the transaction that can be used for display purposes.
     */
    description?: string | null;
    /**
     * Date and time when the demand period ends.
     */
    endDate: string;
    /**
     * The number of the invoice in which this transaction is included if it has been issued.
     */
    invoiceNumber?: string | null;
    /**
     * Flag indicating if the usage is estimated or actual. `true` indicates estimate. `false` or absent indicates actual.
     */
    isEstimate?: boolean | null;
    /**
     * The measurement unit of rate. Assumed to be `KVA` if absent.
     */
    measureUnit?: ("KWH" | "KVA" | "KVAR" | "KVARH" | "KW" | "DAYS" | "METER" | "MONTH") & (string | null);
    /**
     * The rate for the demand charge in _measureUnit_. Assumed to be `KVA` if _measureUnit_ not provided. A negative value indicates power generated.
     */
    rate: number;
    /**
     * Unique identifier for the service point.
     */
    servicePointId?: string;
    /**
     * Date and time when the demand period starts.
     */
    startDate: string;
    /**
     * The time of use type that the transaction applies to.
     */
    timeOfUseType:
        | "PEAK"
        | "OFF_PEAK"
        | "OFF_PEAK_DEMAND_CHARGE"
        | "SHOULDER"
        | "SHOULDER1"
        | "SHOULDER2"
        | "CONTROLLED_LOAD"
        | "SOLAR"
        | "AGGREGATE"
        | "ALL_DAY"
        | "EXCESS";
}
/* These are the schema definitions stipulated by the Data Standards Body for the energy api. */

export interface EnergyBillingListResponseV2 {
    data: {
        /**
         * Array of transactions sorted by date and time in descending order
         */
        transactions: EnergyBillingTransactionV2[];
    };
    links: LinksPaginated;
    meta: MetaPaginated;
}
/* These are the schema definitions stipulated by the Data Standards Body for the energy api. */

export interface EnergyBillingListResponseV3 {
    data: {
        /**
         * Array of transactions sorted by date and time in descending order.
         */
        transactions: EnergyBillingTransactionV3[];
    };
    links: LinksPaginated;
    meta: MetaPaginated;
}
/* These are the schema definitions stipulated by the Data Standards Body for the energy api. */

export interface EnergyBillingOnceOffTransaction {
    /**
     * The amount of the charge or credit. A positive value indicates a charge and a negative value indicates a credit.
     */
    amount: string;
    /**
     * A free text description of the item.
     */
    description: string;
    /**
     * The number of the invoice in which this transaction is included if it has been issued.
     */
    invoiceNumber?: string | null;
    /**
     * Unique identifier for the service point.
     */
    servicePointId?: string;
}
/* These are the schema definitions stipulated by the Data Standards Body for the energy api. */

export interface EnergyBillingOtherTransaction {
    /**
     * Optional array of adjustments arising for this transaction.
     */
    adjustments?:
        | {
            /**
             * The amount of the adjustment.
             */
            amount: string;
            /**
             * A free text description of the adjustment.
             */
            description: string;
        }[]
        | null;
    /**
     * The amount of the charge.
     */
    amount: string;
    /**
     * Additional calculation factors that inform the transaction.
     */
    calculationFactors?:
        | {
            /**
             * The type of the calculation factor.
             */
            type: "DLF" | "MLF";
            /**
             * The value of the calculation factor.
             */
            value: number;
        }[]
        | null;
    /**
     * A free text description of the item.
     */
    description: string;
    /**
     * Optional end date for the application of the charge.
     */
    endDate?: string | null;
    /**
     * The number of the invoice in which this transaction is included if it has been issued.
     */
    invoiceNumber?: string | null;
    /**
     * Unique identifier for the service point.
     */
    servicePointId?: string;
    /**
     * Optional start date for the application of the charge.
     */
    startDate?: string | null;
    /**
     * Type of charge. Assumed to be `OTHER` if absent.
     */
    type?: ("ENVIRONMENTAL" | "REGULATED" | "NETWORK" | "METERING" | "RETAIL_SERVICE" | "RCTI" | "OTHER") | null;
}
/* These are the schema definitions stipulated by the Data Standards Body for the energy api. */

export interface EnergyBillingPaymentTransaction {
    /**
     * The amount paid.
     */
    amount: string;
    /**
     * The method of payment.
     */
    method: "DIRECT_DEBIT" | "CARD" | "TRANSFER" | "BPAY" | "CASH" | "CHEQUE" | "OTHER";
}
/* These are the schema definitions stipulated by the Data Standards Body for the energy api. */

export interface EnergyBillingTransactionV2 {
    /**
     * The ID of the account for which transaction applies
     */
    accountId: string;
    demand?: EnergyBillingDemandTransactionV2;
    /**
     * The date and time that the transaction occurred
     */
    executionDateTime: string;
    /**
     * The GST incurred in the transaction.  Should not be included for credits or payments.  If absent zero is assumed
     */
    gst?: string | null;
    onceOff?: EnergyBillingOnceOffTransaction;
    otherCharges?: EnergyBillingOtherTransaction;
    payment?: EnergyBillingPaymentTransaction;
    /**
     * Indicator of the type of transaction object present in this record
     */
    transactionUType: "usage" | "demand" | "onceOff" | "otherCharges" | "payment";
    usage?: EnergyBillingUsageTransactionV2;
}
/* These are the schema definitions stipulated by the Data Standards Body for the energy api. */

export interface EnergyBillingTransactionV3 {
    /**
     * Unique identifier for the account.
     */
    accountId: string;
    /**
     * Represents a demand charge or generation credit. Mandatory if _transactionUType_ is equal to `demand`.
     */
    demand?: EnergyBillingDemandTransactionV3;
    /**
     * The date and time that the transaction occurred.
     */
    executionDateTime: string;
    /**
     * The GST incurred in the transaction. Should not be included for credits or payments. If absent then zero is assumed.
     */
    gst?: string | null;
    /**
     * Represents a once off charge or credit. Mandatory if _transactionUType_ is equal to `onceOff`.
     */
    onceOff?: EnergyBillingOnceOffTransaction;
    /**
     * Represents charge other than usage and once off. Mandatory if _transactionUType_ is equal to `otherCharges`.
     */
    otherCharges?: EnergyBillingOtherTransaction;
    /**
     * Represents a payment to the account. Mandatory if _transactionUType_ is equal to `payment`.
     */
    payment?: EnergyBillingPaymentTransaction;
    /**
     * Indicator of the type of transaction object present in this record.
     */
    transactionUType: "usage" | "demand" | "onceOff" | "otherCharges" | "payment";
    /**
     * Represents a usage charge or generation credit. Mandatory if _transactionUType_ is equal to `usage`.
     */
    usage?: EnergyBillingUsageTransactionV2;
}
/* These are the schema definitions stipulated by the Data Standards Body for the energy api. */

export interface EnergyBillingUsageTransactionV2 {
    /**
     * Optional array of adjustments arising for this transaction.
     */
    adjustments?:
        | {
            /**
             * The amount of the adjustment.
             */
            amount: string;
            /**
             * A free text description of the adjustment.
             */
            description: string;
        }[]
        | null;
    /**
     * The amount charged or credited for this transaction prior to any adjustments being applied. A negative value indicates a credit.
     */
    amount: string;
    /**
     * Additional calculation factors that inform the transaction.
     */
    calculationFactors?:
        | {
            /**
             * The type of the calculation factor.
             */
            type: "DLF" | "MLF";
            /**
             * The value of the calculation factor.
             */
            value: number;
        }[]
        | null;
    /**
     * Optional description of the transaction that can be used for display purposes.
     */
    description?: string | null;
    /**
     * Date and time when the usage period ends.
     */
    endDate: string;
    /**
     * The number of the invoice in which this transaction is included if it has been issued.
     */
    invoiceNumber?: string | null;
    /**
     * Flag indicating if the usage is estimated or actual. `true` indicates estimate. `false` or absent indicates actual.
     */
    isEstimate?: boolean | null;
    /**
     * The measurement unit of rate. Assumed to be `KWH` if absent.
     */
    measureUnit?: ("KWH" | "KVA" | "KVAR" | "KVARH" | "KW" | "DAYS" | "METER" | "MONTH") & (string | null);
    /**
     * Unique identifier for the service point.
     */
    servicePointId?: string;
    /**
     * Date and time when the usage period starts.
     */
    startDate: string;
    /**
     * The time of use type that the transaction applies to.
     */
    timeOfUseType:
        | "PEAK"
        | "OFF_PEAK"
        | "OFF_PEAK_DEMAND_CHARGE"
        | "SHOULDER"
        | "SHOULDER1"
        | "SHOULDER2"
        | "CONTROLLED_LOAD"
        | "SOLAR"
        | "AGGREGATE"
        | "ALL_DAY";
    /**
     * The usage for the period in measure unit. A negative value indicates power generated.
     */
    usage: number;
}
/* These are the schema definitions stipulated by the Data Standards Body for the energy api. */

export interface EnergyConcession {
    /**
     * Display text providing more information on the concession. Mandatory if _type_ is `VARIABLE`.
     */
    additionalInfo?: string | null;
    /**
     * Optional link to additional information regarding the concession.
     */
    additionalInfoUri?: string | null;
    /**
     * Conditional attribute for the amount of discount for the concession- required if type is `FIXED_AMOUNT`.
     */
    amount?: string | null;
    /**
     * Array of ENUMs to specify what the concession applies to. Multiple ENUM values can be provided. If absent, `USAGE` is assumed.
     */
    appliedTo?: ("INVOICE" | "USAGE" | "SERVICE_CHARGE" | "CONTROLLED_LOAD")[] | null;
    /**
     * Conditional attribute for frequency at which a concession is applied. Required if type is `FIXED_AMOUNT` or `FIXED_PERCENTAGE`. Formatted according to [ISO 8601 Durations](https://en.wikipedia.org/wiki/ISO_8601#Durations) (excludes recurrence syntax).
     */
    discountFrequency?: string | null;
    /**
     * The display name of the concession.
     */
    displayName: string;
    /**
     * Optional end date for the application of the concession.
     */
    endDate?: string | null;
    /**
     * Conditional attribute for the percentage of discount of concession - required if type is `FIXED_PERCENTAGE`.
     */
    percentage?: string | null;
    /**
     * Optional start date for the application of the concession.
     */
    startDate?: string | null;
    /**
     * Indicator of the method of concession calculation.
     */
    type: "FIXED_AMOUNT" | "FIXED_PERCENTAGE" | "VARIABLE";
}
/* These are the schema definitions stipulated by the Data Standards Body for the energy api. */

export interface EnergyConcessionsResponse {
    data: {
        /**
         * Array may be empty if no concessions exist.
         */
        concessions: EnergyConcession[];
    };
    links: Links;
    meta?: Meta;
}
/* These are the schema definitions stipulated by the Data Standards Body for the energy api. */

export type EnergyDaysEnum = "SUN" | "MON" | "TUE" | "WED" | "THU" | "FRI" | "SAT" | "PUBLIC_HOLIDAYS";
/* These are the schema definitions stipulated by the Data Standards Body for the energy api. */

export interface EnergyDerDetailResponse {
    data: EnergyDerRecord;
    links: Links;
    meta?: Meta;
}
/* These are the schema definitions stipulated by the Data Standards Body for the energy api. */

export interface EnergyDerListResponse {
    data: {
        /**
         * Array of meter reads.
         */
        derRecords: EnergyDerRecord[];
    };
    links: LinksPaginated;
    meta: MetaPaginated;
}
/* These are the schema definitions stipulated by the Data Standards Body for the energy api. */

export interface EnergyDerRecord {
    acConnections: {
        /**
         * The date that the DER installation is commissioned.
         */
        commissioningDate: string;
        /**
         * AC Connection ID as defined in the DER register. Does not align with CDR ID permanence standards.
         */
        connectionIdentifier: number;
        /**
         * Number of AC Connections in the group. For the suite of AC Connections to be considered as a group, all of the AC Connections included must have the same attributes.
         */
        count: number;
        derDevices: {
            /**
             * Number of devices in the group of DER devices.
             */
            count: number;
            /**
             * Unique identifier for a single DER device or a group of DER devices with the same attributes. Does not align with CDR ID permanence standards.
             */
            deviceIdentifier: number;
            /**
             * The name of the device manufacturer. If absent then assumed to be "unknown".
             */
            manufacturer?: string;
            /**
             * The model number of the device. If absent then assumed to be "unknown".
             */
            modelNumber?: string;
            /**
             * Maximum output in kVA that is listed in the product specification by the manufacturer. This refers to the capacity of each unit within the device group. Default is `0` if value not known.
             */
            nominalRatedCapacity: number;
            /**
             * Maximum storage capacity in kVAh. This refers to the capacity of each storage module within the device group. Mandatory if type is equal to `STORAGE`. Default is `0` if value not known.
             */
            nominalStorageCapacity?: number;
            /**
             * Code used to indicate the status of the device. This will be used to identify if an inverter is active or inactive or decommissioned.
             */
            status?: "ACTIVE" | "INACTIVE" | "DECOMMISSIONED";
            /**
             * Used to indicate the primary technology used in the DER device. This field is also used to record for example the battery chemistry, or the type of PV panel. It is also used to record if a battery is contained in an electric vehicle connected in a vehicle-to-grid arrangement. If absent then assumed to be "other".
             */
            subtype?: string;
            /**
             * Used to indicate the primary technology used in the DER device.
             */
            type: "FOSSIL" | "HYDRO" | "WIND" | "SOLAR_PV" | "RENEWABLE" | "GEOTHERMAL" | "STORAGE" | "OTHER";
        }[];
        /**
         * Indicates whether the DER device is connected via an inverter (and what category of inverter it is) or not (e.g., rotating machine). If absent, assume equipment type to be `OTHER`.
         */
        equipmentType?: "INVERTER" | "OTHER";
        /**
         * The rated AC output power that is listed in the product specified by the manufacturer. Mandatory if _equipmentType_ is `INVERTER`. Default is `0` if value not known.
         */
        inverterDeviceCapacity?: number;
        /**
         * The inverter model number. Mandatory if _equipmentType_ is `INVERTER`.
         */
        inverterModelNumber?: string;
        /**
         * The inverter series. Mandatory if _equipmentType_ is `INVERTER`.
         */
        inverterSeries?: string;
        /**
         * The name of the inverter manufacturer. Mandatory if _equipmentType_ is `INVERTER`.
         */
        manufacturerName?: string;
        /**
         * Code used to indicate the status of the Inverter. This will be used to identify if an inverter is active or inactive or decommissioned.
         */
        status: "ACTIVE" | "INACTIVE" | "DECOMMISSIONED";
    }[];
    /**
     * Approved small generating unit capacity as agreed with NSP in the connection agreement, expressed in kVA. Value of `0` indicates no DER record exists for the given _servicePointId_.
     */
    approvedCapacity: number;
    /**
     * The number of phases available for the installation of DER. Acceptable values are `0`, `1`, `2` or `3`. Value of `0` indicates no DER record exists for the given _servicePointId_.
     */
    availablePhasesCount: number;
    /**
     * For DER installations where NSPs specify the need for additional forms of protection above those inbuilt in an inverter. If absent then assumed to be `false`.
     */
    hasCentralProtectionControl?: boolean | null;
    /**
     * The number of phases that DER is connected to. Acceptable values are `0`, `1`, `2` or `3`. Value of `0` indicates no DER record exists for the given _servicePointId_.
     */
    installedPhasesCount: number;
    /**
     * For identification of small generating units designed with the ability to operate in an islanded mode.
     */
    islandableInstallation: boolean;
    /**
     * Required only when the _hasCentralProtectionControl_ flag is set to `true`. One or more of the object fields will be provided to describe the protection modes in place.
     */
    protectionMode?: {
        /**
         * Maximum amount of power (kVA) that may be exported from a connection point to the grid, as monitored by a control/relay function. An absent value indicates no limit.
         */
        exportLimitKva?: number | null;
        /**
         * Rate of change of frequency trip point (Hz/s).
         */
        frequencyRateOfChange?: number | null;
        /**
         * Description of the form of inter-trip (e.g., 'from local substation').
         */
        interTripScheme?: string | null;
        /**
         * Trip voltage.
         */
        neutralVoltageDisplacement?: number | null;
        /**
         * Protective function limit in Hz.
         */
        overFrequencyProtection?: number | null;
        /**
         * Trip delay time in seconds.
         */
        overFrequencyProtectionDelay?: number | null;
        /**
         * Protective function limit in V.
         */
        overVoltageProtection?: number | null;
        /**
         * Trip delay time in seconds.
         */
        overVoltageProtectionDelay?: number | null;
        /**
         * Sustained over voltage.
         */
        sustainedOverVoltage?: number | null;
        /**
         * Sustained Over voltage protection delay in seconds.
         */
        sustainedOverVoltageDelay?: number | null;
        /**
         * Protective function limit in Hz.
         */
        underFrequencyProtection?: number | null;
        /**
         * Trip delay time in seconds.
         */
        underFrequencyProtectionDelay?: number | null;
        /**
         * Protective function limit in V.
         */
        underVoltageProtection?: number | null;
        /**
         * Trip delay time in seconds.
         */
        underVoltageProtectionDelay?: number | null;
        /**
         * Trip angle in degrees.
         */
        voltageVectorShift?: number | null;
    } | null;
    /**
     * Unique identifier for the service point.
     */
    servicePointId: string;
}
/* These are the schema definitions stipulated by the Data Standards Body for the energy api. */

export interface EnergyInvoice {
    accountCharges?: EnergyInvoiceAccountCharges;
    /**
     * Unique identifier for the account.
     */
    accountId: string;
    /**
     * The account balance at the time the invoice was issued.
     */
    balanceAtIssue: string;
    /**
     * The date that the invoice is due to be paid.
     */
    dueDate?: string | null;
    /**
     * Object containing charges and credits related to electricity usage.
     */
    electricity?: EnergyInvoiceElectricityUsageCharges;
    /**
     * Object containing charges and credits related to gas usage.
     */
    gas?: EnergyInvoiceGasUsageCharges;
    /**
     * The total GST amount for this invoice. If absent then zero is assumed.
     */
    gstAmount?: string | null;
    /**
     * The net amount due for this invoice regardless of previous balance.
     */
    invoiceAmount?: string | null;
    /**
     * The number assigned to this invoice by the energy Retailer.
     */
    invoiceNumber: string;
    /**
     * The date that the invoice was actually issued (as opposed to generated or calculated).
     */
    issueDate: string;
    /**
     * A discount for on time payment.
     */
    payOnTimeDiscount?: {
        /**
         * The date by which the invoice must be paid to receive the pay on time discount.
         */
        date: string;
        /**
         * The amount that will be discounted if the invoice is paid by the date specified.
         */
        discountAmount: string;
        /**
         * The GST amount that will be discounted if the invoice is paid by the date specified. If absent then zero is assumed.
         */
        gstAmount?: string | null;
    } | null;
    /**
     * Indicator of the payment status for the invoice.
     */
    paymentStatus: "PAID" | "PARTIALLY_PAID" | "NOT_PAID";
    /**
     * Object containing the start and end date for the period covered by the invoice. Mandatory if any usage or demand based charges are included in the invoice.
     */
    period?: {
        /**
         * The end date of the period covered by this invoice.
         */
        endDate: string;
        /**
         * The start date of the period covered by this invoice.
         */
        startDate: string;
    } | null;
    /**
     * Array of service point IDs to which this invoice applies. May be empty if the invoice contains no electricity usage related charges.
     */
    servicePoints: string[];
}
/* These are the schema definitions stipulated by the Data Standards Body for the energy api. */

/**
 * Object contains account level charges and credits related to electricity usage.
 */
export interface EnergyInvoiceAccountCharges {
    /**
     * The aggregate total of account level charges for the period covered by the invoice.
     */
    totalCharges: string;
    /**
     * The aggregate total of account level discounts or credits for the period covered by the invoice.
     */
    totalDiscounts: string;
    /**
     * The total GST for all account level charges. If absent then zero is assumed.
     */
    totalGst?: string | null;
}
/* These are the schema definitions stipulated by the Data Standards Body for the energy api. */

export interface EnergyInvoiceElectricityUsageCharges {
    /**
     * Optional array of charges that may be part of the invoice (for e.g., environmental charges for C&I consumers) (exclusive of GST).
     */
    otherCharges?:
        | {
            /**
             * The aggregate total of charges for this item (exclusive of GST).
             */
            amount: string;
            /**
             * A free text description of the type of charge.
             */
            description: string;
            /**
             * Type of charge. Assumed to be `OTHER` if absent.
             */
            type?: "ENVIRONMENTAL" | "REGULATED" | "NETWORK" | "METERING" | "RETAIL_SERVICE" | "RCTI" | "OTHER";
        }[]
        | null;
    /**
     * The aggregate total of generation credits for the period covered by the invoice (exclusive of GST).
     */
    totalGenerationCredits: string;
    /**
     * The total GST for all electricity usage charges. If absent then zero is assumed.
     */
    totalGst?: string | null;
    /**
     * The aggregate total of any once off charges arising from electricity usage for the period covered by the invoice (exclusive of GST).
     */
    totalOnceOffCharges: string;
    /**
     * The aggregate total of any once off discounts or credits arising from electricity usage for the period covered by the invoice (exclusive of GST).
     */
    totalOnceOffDiscounts: string;
    /**
     * The aggregate total of usage charges for the period covered by the invoice (exclusive of GST).
     */
    totalUsageCharges: string;
}
/* These are the schema definitions stipulated by the Data Standards Body for the energy api. */

export interface EnergyInvoiceGasUsageCharges {
    /**
     * Optional array of charges that may be part of the invoice (for e.g., environmental charges for C&I consumers) (exclusive of GST).
     */
    otherCharges?:
        | {
            /**
             * The aggregate total of charges for this item (exclusive of GST).
             */
            amount: string;
            /**
             * A free text description of the type of charge.
             */
            description: string;
            /**
             * Type of charge. Assumed to be `OTHER` if absent.
             */
            type?: "ENVIRONMENTAL" | "REGULATED" | "NETWORK" | "METERING" | "RETAIL_SERVICE" | "RCTI" | "OTHER";
        }[]
        | null;
    /**
     * The aggregate total of generation credits for the period covered by the invoice (exclusive of GST).
     */
    totalGenerationCredits: string;
    /**
     * The total GST for all gas usage charges. If absent then zero is assumed.
     */
    totalGst?: string | null;
    /**
     * The aggregate total of any once off charges arising from gas usage for the period covered by the invoice (exclusive of GST).
     */
    totalOnceOffCharges: string;
    /**
     * The aggregate total of any once off discounts or credits arising from gas usage for the period covered by the invoice (exclusive of GST).
     */
    totalOnceOffDiscounts: string;
    /**
     * The aggregate total of usage charges for the period covered by the invoice (exclusive of GST).
     */
    totalUsageCharges: string;
}
/* These are the schema definitions stipulated by the Data Standards Body for the energy api. */

export interface EnergyInvoiceListResponse {
    data: {
        /**
         * Array of invoices sorted by issue date in descending order.
         */
        invoices: EnergyInvoice[];
    };
    links: LinksPaginated;
    meta: MetaPaginated;
}
/* These are the schema definitions stipulated by the Data Standards Body for the energy api. */

export interface EnergyPaymentSchedule {
    /**
     * Optional payment amount indicating that a constant payment amount is scheduled to be paid (used in bill smoothing scenarios).
     */
    amount?: string | null;
    /**
     * Represents a regular credit card payment schedule. Mandatory if _paymentScheduleUType_ is set to `cardDebit`.
     */
    cardDebit?: {
        /**
         * The mechanism by which the payment amount is calculated. Explanation of values are as follows:<br/><ul><li>`STATIC`: Indicates a consistent, static amount, per payment</li><li>`BALANCE`: Indicates that the outstanding balance for the account is paid per period</li><li>`CALCULATED`: Indicates that the payment amount is variable and calculated using a pre-defined algorithm.</li></ul>
         */
        calculationType: "STATIC" | "BALANCE" | "CALCULATED";
        /**
         * The type of credit card held on file.
         */
        cardScheme: "VISA" | "MASTERCARD" | "AMEX" | "DINERS" | "OTHER" | "UNKNOWN";
        /**
         * The frequency that payments will occur. Formatted according to [ISO 8601 Durations](https://en.wikipedia.org/wiki/ISO_8601#Durations) (excludes recurrence syntax).
         */
        paymentFrequency: string;
    } | null;
    /**
     * Represents a regular payment from a digital wallet. Mandatory if _paymentScheduleUType_ is set to `digitalWallet`.
     */
    digitalWallet?: {
        /**
         * The mechanism by which the payment amount is calculated. Explanation of values are as follows:<br/><ul><li>`STATIC`: Indicates a consistent, static amount, per payment</li><li>`BALANCE`: Indicates that the outstanding balance for the account is paid per period</li><li>`CALCULATED`: Indicates that the payment amount is variable and calculated using a pre-defined algorithm.</li></ul>
         */
        calculationType: "STATIC" | "BALANCE" | "CALCULATED";
        /**
         * The identifier of the digital wallet (dependent on type).
         */
        identifier: string;
        /**
         * The display name of the wallet as given by the customer, else a default value defined by the data holder.
         */
        name: string;
        /**
         * The frequency that payments will occur. Formatted according to [ISO 8601 Durations](https://en.wikipedia.org/wiki/ISO_8601#Durations) (excludes recurrence syntax).
         */
        paymentFrequency: string;
        /**
         * The provider of the digital wallet.
         */
        provider: "PAYPAL_AU" | "OTHER";
        /**
         * The type of the digital wallet identifier.
         */
        type: "EMAIL" | "CONTACT_NAME" | "TELEPHONE";
    } | null;
    /**
     * Represents a regular direct debit from a specified bank account. Mandatory if _paymentScheduleUType_ is set to `directDebit`.
     */
    directDebit?: {
        /**
         * The unmasked account number for the account to be debited. Is expected to be formatted as digits only with leading zeros included and no punctuation or spaces. Is required if _isTokenised_ is absent or `false`.
         */
        accountNumber?: string | null;
        /**
         * The unmasked BSB for the account to be debited. Is expected to be formatted as digits only with leading zeros included and no punctuation or spaces. Is required if _isTokenised_ is absent or `false`.
         */
        bsb?: string | null;
        /**
         * The mechanism by which the payment amount is calculated. Explanation of values are as follows:<br/><ul><li>`STATIC`: Indicates a consistent, static amount, per payment</li><li>`BALANCE`: Indicates that the outstanding balance for the account is paid per period</li><li>`CALCULATED`: Indicates that the payment amount is variable and calculated using a pre-defined algorithm.</li></ul>
         */
        calculationType: "STATIC" | "BALANCE" | "CALCULATED";
        /**
         * Flag indicating that the account details are tokenised, or held in a closed system, and is not accessible through any other channels. `false` if absent.
         */
        isTokenised?: boolean | null;
        /**
         * The frequency that payments will occur. Formatted according to [ISO 8601 Durations](https://en.wikipedia.org/wiki/ISO_8601#Durations) (excludes recurrence syntax).
         */
        paymentFrequency: string;
    } | null;
    /**
     * Represents a manual payment schedule where the customer pays in response to a delivered statement. Mandatory if _paymentScheduleUType_ is set to `manualPayment`.
     */
    manualPayment?: {
        /**
         * The frequency with which a bill will be issued. Formatted according to [ISO 8601 Durations](https://en.wikipedia.org/wiki/ISO_8601#Durations) (excludes recurrence syntax).
         */
        billFrequency: string;
    } | null;
    /**
     * The type of object present in this response.
     */
    paymentScheduleUType: "cardDebit" | "directDebit" | "manualPayment" | "digitalWallet";
}
/* These are the schema definitions stipulated by the Data Standards Body for the energy api. */

export interface EnergyPaymentScheduleResponse {
    data: {
        /**
         * Array may be empty if no payment schedules exist.
         */
        paymentSchedules: EnergyPaymentSchedule[];
    };
    links: Links;
    meta?: Meta;
}
/* These are the schema definitions stipulated by the Data Standards Body for the energy api. */

export interface EnergyPlan {
    /**
     * Object that contains links to additional information on specific topics.
     */
    additionalInformation?: {
        /**
         * A link to detail on bundles that this plan can be a part of.
         */
        bundleUri?: string | null;
        /**
         * A link to detail on eligibility criteria for the plan.
         */
        eligibilityUri?: string | null;
        /**
         * A link to a general overview of the plan.
         */
        overviewUri?: string | null;
        /**
         * A link to detail on pricing for the plan.
         */
        pricingUri?: string | null;
        /**
         * A link to terms and conditions for the plan.
         */
        termsUri?: string | null;
    } | null;
    /**
     * A link to an application web page where this plan can be applied for.
     */
    applicationUri?: string | null;
    /**
     * The ID of the brand under which this plan is offered.
     */
    brand: string;
    /**
     * The display name of the brand under which this plan is offered.
     */
    brandName: string;
    /**
     * The type of customer that the plan is offered to. If absent then the plan is available to all customers.
     */
    customerType?: ("RESIDENTIAL" | "BUSINESS") | null;
    /**
     * A description of the plan.
     */
    description?: string | null;
    /**
     * The display name of the plan.
     */
    displayName?: string | null;
    /**
     * The date and time from which this plan is effective (i.e. is available for origination). Used to enable the articulation of products to the regime before they are available for customers to originate.
     */
    effectiveFrom?: string | null;
    /**
     * The date and time at which this plan will be retired and will no longer be offered. Used to enable the managed deprecation of plans.
     */
    effectiveTo?: string | null;
    /**
     * The fuel types covered by the plan.
     */
    fuelType: "ELECTRICITY" | "GAS" | "DUAL";
    /**
     * Describes the geographical area that the plan is available for. If absent then it is assumed the plan is not geographically limited.
     */
    geography?: {
        /**
         * Array of distributors for the plan. Must have at least one entry.
         */
        distributors: string[];
        /**
         * Array of valid Australian postcodes that are specifically excluded from the plan. Each element is a single four digit postcode (e.g., `3000`) or a range of postcodes defined by two four digit postcodes and a hyphen (e.g., `3000-3999`).
         */
        excludedPostcodes?: string[] | null;
        /**
         * Array of valid Australian postcodes that are included from the plan. If absent defaults to all non-excluded postcodes. Each element is a single four digit postcode (e.g., `3000`) or a range of postcodes defined by two four digit postcodes and a hyphen (e.g., `3000-3999`).
         */
        includedPostcodes?: string[] | null;
    } | null;
    /**
     * The last date and time that the information for this plan was changed (or the creation date for the plan if it has never been altered).
     */
    lastUpdated: string;
    /**
     * The unique identifier for the Energy plan.
     */
    planId: string;
    /**
     * The type of the plan.
     */
    type: "STANDING" | "MARKET" | "REGULATED";
}
/* These are the schema definitions stipulated by the Data Standards Body for the energy api. */

export type EnergyPlanContractFullV2 = EnergyPlanContractV2 & {
    /**
     * The term for the contract.  If absent assumes no specified term
     */
    termType?: "1_YEAR" | "2_YEAR" | "3_YEAR" | "4_YEAR" | "5_YEAR" | "ONGOING" | "OTHER";
    /**
     * Description of the benefit period.  Should only be present if termType has the value ONGOING
     */
    benefitPeriod?: string;
    /**
     * Free text description of the terms for the contract
     */
    terms?: string;
    /**
     * An array of the meter types that this contract is available for
     */
    meterTypes?: string[];
    /**
     * Number of days in the cooling off period for the contract.  Mandatory for plans with type of MARKET
     */
    coolingOffDays?: number;
    /**
     * An array of the available billing schedules for this contract. Formatted according to [ISO 8601 Durations](https://en.wikipedia.org/wiki/ISO_8601#Durations) (excludes recurrence syntax)
     */
    billFrequency: string[];
};
/* These are the schema definitions stipulated by the Data Standards Body for the energy api. */

export type EnergyPlanContractFullV3 = EnergyPlanContractV3 & {
    /**
     * The term for the contract. If absent assumes no specified term.
     */
    termType?: "1_YEAR" | "2_YEAR" | "3_YEAR" | "4_YEAR" | "5_YEAR" | "ONGOING" | "OTHER";
    /**
     * Description of the benefit period. Should only be present if _termType_ has the value `ONGOING`.
     */
    benefitPeriod?: string;
    /**
     * Free text description of the terms for the contract.
     */
    terms?: string;
    /**
     * An array of the meter types that this contract is available for.
     */
    meterTypes?: string[];
    /**
     * Number of days in the cooling off period for the contract. Mandatory for plans with type of `MARKET`.
     */
    coolingOffDays?: number;
    /**
     * An array of the available billing schedules for this contract. Formatted according to [ISO 8601 Durations](https://en.wikipedia.org/wiki/ISO_8601#Durations) (excludes recurrence syntax).
     */
    billFrequency: string[];
};
/* These are the schema definitions stipulated by the Data Standards Body for the energy api. */

export interface EnergyPlanContractV2 {
    /**
     * Free text field containing additional information of the fees for this contract
     */
    additionalFeeInformation?: string | null;
    controlledLoad?: EnergyPlanControlledLoad;
    discounts?: EnergyPlanDiscounts;
    eligibility?: EnergyPlanEligibility;
    fees?: EnergyPlanFees;
    greenPowerCharges?: EnergyPlanGreenPowerCharges;
    incentives?: EnergyPlanIncentives;
    /**
     * Describes intrinsic green power for the plan.  If present then the plan includes a percentage of green power in the base plan. Should not be present for gas contracts
     */
    intrinsicGreenPower?: {
        /**
         * Percentage of green power intrinsically included in the plan
         */
        greenPercentage: string;
    } | null;
    /**
     * Flag indicating whether prices are fixed or variable
     */
    isFixed: boolean;
    /**
     * Free text field that describes what will occur on or prior to expiry of the fixed contract term or benefit period
     */
    onExpiryDescription?: string | null;
    /**
     * Payment options for this contract
     */
    paymentOption: ("PAPER_BILL" | "CREDIT_CARD" | "DIRECT_DEBIT" | "BPAY" | "OTHER")[];
    /**
     * The pricing model for the contract.  Contracts for gas must use SINGLE_RATE.  Note that the detail for the enumeration values are:<ul><li>**SINGLE_RATE** - all energy usage is charged at a single unit rate no matter when it is consumed. Multiple unit rates may exist that correspond to varying volumes of usage i.e. a ‘block’ or ‘step’ tariff (first 50kWh @ X cents, next 50kWh at Y cents etc.</li><li>**SINGLE_RATE_CONT_LOAD** - as above, but with an additional, separate unit rate charged for all energy usage from a controlled load i.e. separately metered appliance like hot water service, pool pump etc.</li><li>**TIME_OF_USE** - energy usage is charged at unit rates that vary dependent on time of day and day of week that the energy is consumed</li><li>**TIME_OF_USE_CONT_LOAD** - as above, but with an additional, separate unit rate charged for all energy usage from a controlled load i.e. separately metered appliance like hot water service, pool pump etc.</li><li>**FLEXIBLE** - energy usage is charged at unit rates that vary based on external factors</li><li>**FLEXIBLE_CONT_LOAD** - as above, but with an additional, separate unit rate charged for all energy usage from a controlled load i.e. separately metered appliance like hot water service, pool pump etc.</li><li>**QUOTA** - all energy usage is charged at a single fixed rate, up to a specified usage quota/allowance. All excess usage beyond the allowance is then charged at a single unit rate (may not be the best way to explain it but it is essentially a ‘subscription’ or telco style product i.e. $50/month for up to 150kWh included usage</li></ul>
     */
    pricingModel:
        | "SINGLE_RATE"
        | "SINGLE_RATE_CONT_LOAD"
        | "TIME_OF_USE"
        | "TIME_OF_USE_CONT_LOAD"
        | "FLEXIBLE"
        | "FLEXIBLE_CONT_LOAD"
        | "QUOTA";
    solarFeedInTariff?: EnergyPlanSolarFeedInTariffV2;
    tariffPeriod: EnergyPlanTariffPeriod;
    /**
     * Required if pricingModel is set to TIME_OF_USE.  Defines the time zone to use for calculation of the time of use thresholds. Defaults to AEST if absent
     */
    timeZone?: ("LOCAL" | "AEST") | null;
    /**
     * Free text description of price variation policy and conditions for the contract.  Mandatory if `isFixed` is false
     */
    variation?: string | null;
}
/* These are the schema definitions stipulated by the Data Standards Body for the energy api. */

export interface EnergyPlanContractV3 {
    /**
     * Free text field containing additional information of the fees for this contract.
     */
    additionalFeeInformation?: string | null;
    /**
     * Required if pricing model is `SINGLE_RATE_CONT_LOAD` or `TIME_OF_USE_CONT_LOAD` or `FLEXIBLE_CONT_LOAD`.
     */
    controlledLoad?: EnergyPlanControlledLoadV2[] | null;
    /**
     * Optional list of discounts available for the contract.
     */
    discounts?: EnergyPlanDiscounts[] | null;
    /**
     * Eligibility restrictions or requirements.
     */
    eligibility?: EnergyPlanEligibility[] | null;
    /**
     * An array of fees applicable to the plan.
     */
    fees?: EnergyPlanFees[] | null;
    /**
     * Optional list of charges applicable to green power.
     */
    greenPowerCharges?: EnergyPlanGreenPowerCharges[] | null;
    /**
     * Optional list of incentives available for the contract.
     */
    incentives?: EnergyPlanIncentives[] | null;
    /**
     * Describes intrinsic green power for the plan. If present then the plan includes a percentage of green power in the base plan. Should not be present for gas contracts.
     */
    intrinsicGreenPower?: {
        /**
         * Percentage of green power intrinsically included in the plan.
         */
        greenPercentage: string;
    } | null;
    /**
     * Flag indicating whether prices are fixed or variable.
     */
    isFixed: boolean;
    /**
     * Free text field that describes what will occur on or prior to expiry of the fixed contract term or benefit period.
     */
    onExpiryDescription?: string | null;
    /**
     * Payment options for this contract.
     */
    paymentOption: ("PAPER_BILL" | "CREDIT_CARD" | "DIRECT_DEBIT" | "BPAY" | "OTHER")[];
    /**
     * The pricing model for the contract. Contracts for gas must use `SINGLE_RATE`. Note that the detail for the enumeration values are:<ul><li>`SINGLE_RATE`: all energy usage is charged at a single unit rate no matter when it is consumed. Multiple unit rates may exist that correspond to varying volumes of usage i.e. a 'block' or 'step' tariff (first 50kWh @ X cents, next 50kWh at Y cents etc.)</li><li>`SINGLE_RATE_CONT_LOAD`: as above, but with an additional, separate unit rate charged for all energy usage from a controlled load i.e. separately metered appliance like hot water service, pool pump etc.</li><li>`TIME_OF_USE`: energy usage is charged at unit rates that vary dependent on time of day and day of week that the energy is consumed</li><li>`TIME_OF_USE_CONT_LOAD`: as above, but with an additional, separate unit rate charged for all energy usage from a controlled load i.e. separately metered appliance like hot water service, pool pump etc.</li><li>`FLEXIBLE`: energy usage is charged at unit rates that vary based on external factors</li><li>`FLEXIBLE_CONT_LOAD`: as above, but with an additional, separate unit rate charged for all energy usage from a controlled load i.e. separately metered appliance like hot water service, pool pump etc.</li><li>`QUOTA`: all energy usage is charged at a single fixed rate, up to a specified usage quota/allowance. All excess usage beyond the allowance is then charged at a single unit rate. i.e. $50/month for up to 150kWh included usage.</li></ul>
     */
    pricingModel:
        | "SINGLE_RATE"
        | "SINGLE_RATE_CONT_LOAD"
        | "TIME_OF_USE"
        | "TIME_OF_USE_CONT_LOAD"
        | "FLEXIBLE"
        | "FLEXIBLE_CONT_LOAD"
        | "QUOTA";
    /**
     * Array of feed in tariffs for solar power.
     */
    solarFeedInTariff?: EnergyPlanSolarFeedInTariffV3[] | null;
    /**
     * Array of tariffs that apply to periods throughout the year.
     */
    tariffPeriod: EnergyPlanTariffPeriodV2[];
    /**
     * Required if _pricingModel_ is set to `TIME_OF_USE`. Defines the time zone to use for calculation of the time of use thresholds. Defaults to `AEST` if absent.
     */
    timeZone?: ("LOCAL" | "AEST") | null;
    /**
     * Free text description of price variation policy and conditions for the contract. Mandatory if _isFixed_ is `false`.
     */
    variation?: string | null;
}
/* These are the schema definitions stipulated by the Data Standards Body for the energy api. */

/**
 * Required if pricing model is SINGLE_RATE_CONT_LOAD or TIME_OF_USE_CONT_LOAD or FLEXIBLE_CONT_LOAD
 */
export type EnergyPlanControlledLoad = {
    /**
     * A display name for the controlled load
     */
    displayName: string;
    /**
     * Optional end date of the application of the controlled load rate
     */
    endDate?: string;
    /**
     * Specifies the type of controlloed load rate
     */
    rateBlockUType: "singleRate" | "timeOfUseRates";
    /**
     * Object representing a single controlled load rate.  Required if rateBlockUType is singleRate
     */
    singleRate?: {
        /**
         * The daily supply charge (exclusive of GST) for this controlled load tier
         */
        dailySupplyCharge?: string;
        /**
         * Description of the controlled load rate
         */
        description?: string;
        /**
         * Display name of the controlled load rate
         */
        displayName: string;
        /**
         * Array of controlled load rates in order of usage volume
         */
        rates: {
            /**
             * The measurement unit of rate. Assumed to be KWH if absent
             */
            measureUnit?: "KWH" | "KVA" | "KVAR" | "KVARH" | "KW" | "DAYS" | "METER" | "MONTH";
            /**
             * Unit price of usage per  measure unit (exclusive of GST)
             */
            unitPrice: string;
            /**
             * Volume in kWh that this rate applies to.  Only applicable for ‘stepped’ rates where different rates apply for different volumes of usage in a period
             */
            volume?: number;
        }[];
    };
    /**
     * Optional start date of the application of the controlled load rate
     */
    startDate?: string;
    /**
     * Array of objects representing time of use rates.  Required if rateBlockUType is timeOfUseRates
     */
    timeOfUseRates?: {
        /**
         * The daily supply charge (exclusive of GST) for this controlled load tier
         */
        dailySupplyCharge?: string;
        /**
         * Description of the controlled load rate
         */
        description?: string;
        /**
         * Display name of the controlled load rate
         */
        displayName: string;
        /**
         * Array of controlled load rates in order of usage volume
         */
        rates: {
            /**
             * The measurement unit of rate. Assumed to be KWH if absent
             */
            measureUnit?: "KWH" | "KVA" | "KVAR" | "KVARH" | "KW" | "DAYS" | "METER" | "MONTH";
            /**
             * Unit price of usage per  measure unit (exclusive of GST)
             */
            unitPrice: string;
            /**
             * Volume in kWh that this rate applies to.  Only applicable for ‘stepped’ rates where different rates apply for different volumes of usage in a period
             */
            volume?: number;
        }[];
        /**
         * Array of times of use.
         */
        timeOfUse: {
            /**
             * Display text providing more information on the contrlled load, for e.g. controlled load availability if specific day/time is not known. Required if startTime and endTime absent or if additionalInfoUri provided
             */
            additionalInfo?: string;
            /**
             * Optional link to additional information regarding the controlled load
             */
            additionalInfoUri?: string;
            /**
             * The days that the rate applies to
             */
            days?: ("SUN" | "MON" | "TUE" | "WED" | "THU" | "FRI" | "SAT" | "PUBLIC_HOLIDAYS")[];
            /**
             * The end of the time period per day for which the controlled load rate applies. Required if startTime provided
             */
            endTime?: string;
            /**
             * The beginning of the time period per day for which the controlled load rate applies. Required if endTime provided
             */
            startTime?: string;
        }[];
        /**
         * The type of usage that the rate applies to
         */
        type: "PEAK" | "OFF_PEAK" | "SHOULDER" | "SOLAR_SPONGE";
    }[];
}[];
/* These are the schema definitions stipulated by the Data Standards Body for the energy api. */

export interface EnergyPlanControlledLoadV2 {
    /**
     * A display name for the controlled load.
     */
    displayName: string;
    /**
     * Optional end date of the application of the controlled load rate.
     */
    endDate?: string | null;
    /**
     * Specifies the type of controlled load rate.
     */
    rateBlockUType: "singleRate" | "timeOfUseRates";
    /**
     * Object representing a single controlled load rate. Required if _rateBlockUType_ is `singleRate`.
     */
    singleRate?: {
        /**
         * The daily supply charge (exclusive of GST) for this controlled load tier.
         */
        dailySupplyCharge?: string | null;
        /**
         * Description of the controlled load rate.
         */
        description?: string | null;
        /**
         * Display name of the controlled load rate.
         */
        displayName: string;
        /**
         * Usage period for which the block rate applies. Formatted according to [ISO 8601 Durations](https://en.wikipedia.org/wiki/ISO_8601#Durations) (excludes recurrence syntax). Defaults to `P1Y` if absent.
         */
        period?: string | null;
        /**
         * Array of controlled load rates in order of usage volume.
         */
        rates: {
            /**
             * The measurement unit of rate. Assumed to be `KWH` if absent.
             */
            measureUnit?: ("KWH" | "KVA" | "KVAR" | "KVARH" | "KW" | "DAYS" | "METER" | "MONTH") & string;
            /**
             * Unit price of usage per measure unit (exclusive of GST).
             */
            unitPrice: string;
            /**
             * Volume in kWh that this rate applies to. Only applicable for 'stepped' rates where different rates apply for different volumes of usage in a period.
             */
            volume?: number;
        }[];
    } | null;
    /**
     * Optional start date of the application of the controlled load rate.
     */
    startDate?: string | null;
    /**
     * Array of objects representing time of use rates. Required if _rateBlockUType_ is `timeOfUseRates`.
     */
    timeOfUseRates?:
        | {
            /**
             * The daily supply charge (exclusive of GST) for this controlled load tier.
             */
            dailySupplyCharge?: string;
            /**
             * Description of the controlled load rate.
             */
            description?: string;
            /**
             * Display name of the controlled load rate.
             */
            displayName: string;
            /**
             * Usage period for which the block rate applies. Formatted according to [ISO 8601 Durations](https://en.wikipedia.org/wiki/ISO_8601#Durations) (excludes recurrence syntax). Defaults to `P1Y` if absent.
             */
            period?: string;
            /**
             * Array of controlled load rates in order of usage volume.
             */
            rates: {
                /**
                 * The measurement unit of rate. Assumed to be `KWH` if absent.
                 */
                measureUnit?: ("KWH" | "KVA" | "KVAR" | "KVARH" | "KW" | "DAYS" | "METER" | "MONTH") & string;
                /**
                 * Unit price of usage per measure unit (exclusive of GST).
                 */
                unitPrice: string;
                /**
                 * Volume in kWh that this rate applies to. Only applicable for 'stepped' rates where different rates apply for different volumes of usage in a period.
                 */
                volume?: number;
            }[];
            /**
             * Array of time windows for which this time of use rate applies.
             */
            timeOfUse: {
                /**
                 * Display text providing more information on the controlled load, for e.g., controlled load availability if specific day/time is not known. Required if _startTime_ and _endTime_ absent or if _additionalInfoUri_ provided.
                 */
                additionalInfo?: string;
                /**
                 * Optional link to additional information regarding the controlled load.
                 */
                additionalInfoUri?: string;
                /**
                 * The days that this time window applies to.
                 */
                days?: ("SUN" | "MON" | "TUE" | "WED" | "THU" | "FRI" | "SAT" | "PUBLIC_HOLIDAYS")[];
                /**
                 * The end of the time window per day for which the controlled load rate applies. Required if _startTime_ provided. Formatted according to [ISO 8601 Times](https://en.wikipedia.org/wiki/ISO_8601#Times). If the time is provided without a UTC offset, the time zone will be determined by the value of EnergyPlanContract.timeZone.
                 */
                endTime?: string;
                /**
                 * The beginning of the time window per day for which the controlled load rate applies. Required if _endTime_ provided. Formatted according to [ISO 8601 Times](https://en.wikipedia.org/wiki/ISO_8601#Times). If the time is provided without a UTC offset, the time zone will be determined by the value of EnergyPlanContract.timeZone.
                 */
                startTime?: string;
            }[];
            /**
             * The type of usage that the rate applies to.
             */
            type: "PEAK" | "OFF_PEAK" | "SHOULDER" | "SOLAR_SPONGE";
        }[]
        | null;
}
/* These are the schema definitions stipulated by the Data Standards Body for the energy api. */

export type EnergyPlanDetailV2 = EnergyPlan & {
    /**
     * Charges for metering included in the plan
     */
    meteringCharges?: {
        /**
         * Display name of the charge
         */
        displayName: string;
        /**
         * Description of the charge
         */
        description?: string;
        /**
         * Minimum value of the charge if the charge is a range or the absolute value of the charge if no range is specified
         */
        minimumValue: string;
        /**
         * The upper limit of the charge if the charge could occur in a range
         */
        maximumValue?: string;
        /**
         * The charges that occur on a schedule indicates the frequency. Formatted according to [ISO 8601 Durations](https://en.wikipedia.org/wiki/ISO_8601#Durations) (excludes recurrence syntax)
         */
        period?: string;
    }[];
    /**
     * The details of the terms for the supply of electricity under this plan.  Is mandatory if fuelType is set to GAS or DUAL
     */
    gasContract?: EnergyPlanContractV2 & {
        /**
         * The term for the contract.  If absent assumes no specified term
         */
        termType?: "1_YEAR" | "2_YEAR" | "3_YEAR" | "4_YEAR" | "5_YEAR" | "ONGOING" | "OTHER";
        /**
         * Description of the benefit period.  Should only be present if termType has the value ONGOING
         */
        benefitPeriod?: string;
        /**
         * Free text description of the terms for the contract
         */
        terms?: string;
        /**
         * An array of the meter types that this contract is available for
         */
        meterTypes?: string[];
        /**
         * Number of days in the cooling off period for the contract.  Mandatory for plans with type of MARKET
         */
        coolingOffDays?: number;
        /**
         * An array of the available billing schedules for this contract. Formatted according to [ISO 8601 Durations](https://en.wikipedia.org/wiki/ISO_8601#Durations) (excludes recurrence syntax)
         */
        billFrequency: string[];
    };
    /**
     * The details of the terms for the supply of electricity under this plan.  Is mandatory if fuelType is set to ELECTRICITY or DUAL
     */
    electricityContract?: EnergyPlanContractV2 & {
        /**
         * The term for the contract.  If absent assumes no specified term
         */
        termType?: "1_YEAR" | "2_YEAR" | "3_YEAR" | "4_YEAR" | "5_YEAR" | "ONGOING" | "OTHER";
        /**
         * Description of the benefit period.  Should only be present if termType has the value ONGOING
         */
        benefitPeriod?: string;
        /**
         * Free text description of the terms for the contract
         */
        terms?: string;
        /**
         * An array of the meter types that this contract is available for
         */
        meterTypes?: string[];
        /**
         * Number of days in the cooling off period for the contract.  Mandatory for plans with type of MARKET
         */
        coolingOffDays?: number;
        /**
         * An array of the available billing schedules for this contract. Formatted according to [ISO 8601 Durations](https://en.wikipedia.org/wiki/ISO_8601#Durations) (excludes recurrence syntax)
         */
        billFrequency: string[];
    };
};
/* These are the schema definitions stipulated by the Data Standards Body for the energy api. */

export type EnergyPlanDetailV3 = EnergyPlan & {
    /**
     * Charges for metering included in the plan.
     */
    meteringCharges?: {
        /**
         * Display name of the charge.
         */
        displayName: string;
        /**
         * Description of the charge.
         */
        description?: string;
        /**
         * Minimum value of the charge if the charge is a range or the absolute value of the charge if no range is specified.
         */
        minimumValue: string;
        /**
         * The upper limit of the charge if the charge could occur in a range.
         */
        maximumValue?: string;
        /**
         * The charges that occur on a schedule indicates the frequency. Formatted according to [ISO 8601 Durations](https://en.wikipedia.org/wiki/ISO_8601#Durations) (excludes recurrence syntax).
         */
        period?: string;
    }[];
    /**
     * The details of the terms for the supply of electricity under this plan. Is mandatory if _fuelType_ is set to `GAS` or `DUAL`.
     */
    gasContract?: EnergyPlanContractV3 & {
        /**
         * The term for the contract. If absent assumes no specified term.
         */
        termType?: "1_YEAR" | "2_YEAR" | "3_YEAR" | "4_YEAR" | "5_YEAR" | "ONGOING" | "OTHER";
        /**
         * Description of the benefit period. Should only be present if _termType_ has the value `ONGOING`.
         */
        benefitPeriod?: string;
        /**
         * Free text description of the terms for the contract.
         */
        terms?: string;
        /**
         * An array of the meter types that this contract is available for.
         */
        meterTypes?: string[];
        /**
         * Number of days in the cooling off period for the contract. Mandatory for plans with type of `MARKET`.
         */
        coolingOffDays?: number;
        /**
         * An array of the available billing schedules for this contract. Formatted according to [ISO 8601 Durations](https://en.wikipedia.org/wiki/ISO_8601#Durations) (excludes recurrence syntax).
         */
        billFrequency: string[];
    };
    /**
     * The details of the terms for the supply of electricity under this plan. Is mandatory if _fuelType_ is set to `ELECTRICITY` or `DUAL`.
     */
    electricityContract?: EnergyPlanContractV3 & {
        /**
         * The term for the contract. If absent assumes no specified term.
         */
        termType?: "1_YEAR" | "2_YEAR" | "3_YEAR" | "4_YEAR" | "5_YEAR" | "ONGOING" | "OTHER";
        /**
         * Description of the benefit period. Should only be present if _termType_ has the value `ONGOING`.
         */
        benefitPeriod?: string;
        /**
         * Free text description of the terms for the contract.
         */
        terms?: string;
        /**
         * An array of the meter types that this contract is available for.
         */
        meterTypes?: string[];
        /**
         * Number of days in the cooling off period for the contract. Mandatory for plans with type of `MARKET`.
         */
        coolingOffDays?: number;
        /**
         * An array of the available billing schedules for this contract. Formatted according to [ISO 8601 Durations](https://en.wikipedia.org/wiki/ISO_8601#Durations) (excludes recurrence syntax).
         */
        billFrequency: string[];
    };
};
/* These are the schema definitions stipulated by the Data Standards Body for the energy api. */

export interface EnergyPlanDiscounts {
    /**
     * The type of the discount. Mandatory if the discount _type_ is `CONDITIONAL`.
     */
    category?: ("PAY_ON_TIME" | "DIRECT_DEBIT" | "GUARANTEED_DISCOUNT" | "OTHER") | null;
    /**
     * The description of the discount.
     */
    description?: string | null;
    /**
     * The display name of the discount.
     */
    displayName: string;
    /**
     * Optional end date for the discount after which the discount is no longer available.
     */
    endDate?: string | null;
    /**
     * Required if _methodUType_ is `fixedAmount`.
     */
    fixedAmount?: {
        /**
         * The amount of the discount.
         */
        amount: string;
    } | null;
    /**
     * The method of calculation of the discount.
     */
    methodUType: "percentOfBill" | "percentOfUse" | "fixedAmount" | "percentOverThreshold";
    /**
     * Required if _methodUType_ is `percentOfBill`.
     */
    percentOfBill?: {
        /**
         * The rate of the discount applied to the bill amount.
         */
        rate: string;
    } | null;
    /**
     * Required if _methodUType_ is `percentOfUse`.
     */
    percentOfUse?: {
        /**
         * The rate of the discount applied to the _usageamount_.
         */
        rate: string;
    } | null;
    /**
     * Required if _methodUType_ is `percentOverThreshold`.
     */
    percentOverThreshold?: {
        /**
         * The rate of the discount over the usage amount.
         */
        rate: string;
        /**
         * The usage amount threshold above which the discount applies.
         */
        usageAmount: string;
    } | null;
    /**
     * The type of the discount.
     */
    type: "CONDITIONAL" | "GUARANTEED" | "OTHER";
}
/* These are the schema definitions stipulated by the Data Standards Body for the energy api. */

export interface EnergyPlanEligibility {
    /**
     * A description of the eligibility restriction.
     */
    description?: string | null;
    /**
     * Information of the eligibility restriction specific to the type of the restriction.
     */
    information: string;
    /**
     * The type of the eligibility restriction.<br/>The `CONTINGENT_PLAN` value indicates that the plan is contingent on the customer taking up an alternate fuel plan from the same retailer (for instance, if the _fuelType_ is `ELECTRICITY` then a `GAS` plan from the same retailer must be taken up).
     */
    type:
        | "EXISTING_CUST"
        | "EXISTING_POOL"
        | "EXISTING_SOLAR"
        | "EXISTING_BATTERY"
        | "EXISTING_SMART_METER"
        | "EXISTING_BASIC_METER"
        | "SENIOR_CARD"
        | "SMALL_BUSINESS"
        | "NO_SOLAR_FIT"
        | "NEW_CUSTOMER"
        | "ONLINE_ONLY"
        | "REQ_EQUIP_SUPPLIER"
        | "THIRD_PARTY_ONLY"
        | "SPORT_CLUB_MEMBER"
        | "ORG_MEMBER"
        | "SPECIFIC_LOCATION"
        | "MINIMUM_USAGE"
        | "LOYALTY_MEMBER"
        | "GROUP_BUY_MEMBER"
        | "CONTINGENT_PLAN"
        | "OTHER";
}
/* These are the schema definitions stipulated by the Data Standards Body for the energy api. */

export interface EnergyPlanFees {
    /**
     * The fee amount. Required if _term_ is not `PERCENT_OF_BILL`.
     */
    amount?: string | null;
    /**
     * A description of the fee.
     */
    description?: string | null;
    /**
     * The fee rate. Required if _term_ is `PERCENT_OF_BILL`.
     */
    rate?: string | null;
    /**
     * The term of the fee.
     */
    term:
        | "FIXED"
        | "1_YEAR"
        | "2_YEAR"
        | "3_YEAR"
        | "4_YEAR"
        | "5_YEAR"
        | "PERCENT_OF_BILL"
        | "ANNUAL"
        | "DAILY"
        | "WEEKLY"
        | "MONTHLY"
        | "BIANNUAL"
        | "VARIABLE";
    /**
     * The type of the fee.
     */
    type:
        | "EXIT"
        | "ESTABLISHMENT"
        | "LATE_PAYMENT"
        | "DISCONNECTION"
        | "DISCONNECT_MOVE_OUT"
        | "DISCONNECT_NON_PAY"
        | "RECONNECTION"
        | "CONNECTION"
        | "PAYMENT_PROCESSING"
        | "CC_PROCESSING"
        | "CHEQUE_DISHONOUR"
        | "DD_DISHONOUR"
        | "MEMBERSHIP"
        | "CONTRIBUTION"
        | "PAPER_BILL"
        | "OTHER";
}
/* These are the schema definitions stipulated by the Data Standards Body for the energy api. */

export interface EnergyPlanGreenPowerCharges {
    /**
     * The description of the charge.
     */
    description?: string | null;
    /**
     * The display name of the charge.
     */
    displayName: string;
    /**
     * The applicable green power scheme.
     */
    scheme: "GREENPOWER" | "OTHER";
    /**
     * Array of charge tiers based on the percentage of green power used for the period implied by the type. Array is in order of increasing percentage of green power.
     */
    tiers: {
        /**
         * The amount of the charge if the type implies the application of a fixed amount.
         */
        amount?: string;
        /**
         * The upper percentage of green power used applicable for this tier.
         */
        percentGreen: string;
        /**
         * The rate of the charge if the type implies the application of a rate.
         */
        rate?: string;
    }[];
    /**
     * The type of charge.
     */
    type:
        | "FIXED_PER_DAY"
        | "FIXED_PER_WEEK"
        | "FIXED_PER_MONTH"
        | "FIXED_PER_UNIT"
        | "PERCENT_OF_USE"
        | "PERCENT_OF_BILL";
}
/* These are the schema definitions stipulated by the Data Standards Body for the energy api. */

/**
 * The unique identifier for the Energy plan.
 */
export type EnergyPlanId = string;
/* These are the schema definitions stipulated by the Data Standards Body for the energy api. */

export interface EnergyPlanIncentives {
    /**
     * The type of the incentive.
     */
    category: "GIFT" | "ACCOUNT_CREDIT" | "OTHER";
    /**
     * The description of the incentive.
     */
    description: string;
    /**
     * The display name of the incentive.
     */
    displayName: string;
    /**
     * A display message outlining an eligibility criteria that may apply.
     */
    eligibility?: string | null;
}
/* These are the schema definitions stipulated by the Data Standards Body for the energy api. */

export interface EnergyPlanListResponse {
    data: {
        /**
         * Array of plans.
         */
        plans: EnergyPlan[];
    };
    links: LinksPaginated;
    meta: MetaPaginated;
}
/* These are the schema definitions stipulated by the Data Standards Body for the energy api. */

export interface EnergyPlanResponseV2 {
    data: EnergyPlan & {
        /**
         * Charges for metering included in the plan
         */
        meteringCharges?: {
            /**
             * Display name of the charge
             */
            displayName: string;
            /**
             * Description of the charge
             */
            description?: string;
            /**
             * Minimum value of the charge if the charge is a range or the absolute value of the charge if no range is specified
             */
            minimumValue: string;
            /**
             * The upper limit of the charge if the charge could occur in a range
             */
            maximumValue?: string;
            /**
             * The charges that occur on a schedule indicates the frequency. Formatted according to [ISO 8601 Durations](https://en.wikipedia.org/wiki/ISO_8601#Durations) (excludes recurrence syntax)
             */
            period?: string;
        }[];
        /**
         * The details of the terms for the supply of electricity under this plan.  Is mandatory if fuelType is set to GAS or DUAL
         */
        gasContract?: EnergyPlanContractV2 & {
            /**
             * The term for the contract.  If absent assumes no specified term
             */
            termType?: "1_YEAR" | "2_YEAR" | "3_YEAR" | "4_YEAR" | "5_YEAR" | "ONGOING" | "OTHER";
            /**
             * Description of the benefit period.  Should only be present if termType has the value ONGOING
             */
            benefitPeriod?: string;
            /**
             * Free text description of the terms for the contract
             */
            terms?: string;
            /**
             * An array of the meter types that this contract is available for
             */
            meterTypes?: string[];
            /**
             * Number of days in the cooling off period for the contract.  Mandatory for plans with type of MARKET
             */
            coolingOffDays?: number;
            /**
             * An array of the available billing schedules for this contract. Formatted according to [ISO 8601 Durations](https://en.wikipedia.org/wiki/ISO_8601#Durations) (excludes recurrence syntax)
             */
            billFrequency: string[];
        };
        /**
         * The details of the terms for the supply of electricity under this plan.  Is mandatory if fuelType is set to ELECTRICITY or DUAL
         */
        electricityContract?: EnergyPlanContractV2 & {
            /**
             * The term for the contract.  If absent assumes no specified term
             */
            termType?: "1_YEAR" | "2_YEAR" | "3_YEAR" | "4_YEAR" | "5_YEAR" | "ONGOING" | "OTHER";
            /**
             * Description of the benefit period.  Should only be present if termType has the value ONGOING
             */
            benefitPeriod?: string;
            /**
             * Free text description of the terms for the contract
             */
            terms?: string;
            /**
             * An array of the meter types that this contract is available for
             */
            meterTypes?: string[];
            /**
             * Number of days in the cooling off period for the contract.  Mandatory for plans with type of MARKET
             */
            coolingOffDays?: number;
            /**
             * An array of the available billing schedules for this contract. Formatted according to [ISO 8601 Durations](https://en.wikipedia.org/wiki/ISO_8601#Durations) (excludes recurrence syntax)
             */
            billFrequency: string[];
        };
    };
    links: Links;
    meta?: Meta;
}
/* These are the schema definitions stipulated by the Data Standards Body for the energy api. */

export interface EnergyPlanResponseV3 {
    data: EnergyPlan & {
        /**
         * Charges for metering included in the plan.
         */
        meteringCharges?: {
            /**
             * Display name of the charge.
             */
            displayName: string;
            /**
             * Description of the charge.
             */
            description?: string;
            /**
             * Minimum value of the charge if the charge is a range or the absolute value of the charge if no range is specified.
             */
            minimumValue: string;
            /**
             * The upper limit of the charge if the charge could occur in a range.
             */
            maximumValue?: string;
            /**
             * The charges that occur on a schedule indicates the frequency. Formatted according to [ISO 8601 Durations](https://en.wikipedia.org/wiki/ISO_8601#Durations) (excludes recurrence syntax).
             */
            period?: string;
        }[];
        /**
         * The details of the terms for the supply of electricity under this plan. Is mandatory if _fuelType_ is set to `GAS` or `DUAL`.
         */
        gasContract?: EnergyPlanContractV3 & {
            /**
             * The term for the contract. If absent assumes no specified term.
             */
            termType?: "1_YEAR" | "2_YEAR" | "3_YEAR" | "4_YEAR" | "5_YEAR" | "ONGOING" | "OTHER";
            /**
             * Description of the benefit period. Should only be present if _termType_ has the value `ONGOING`.
             */
            benefitPeriod?: string;
            /**
             * Free text description of the terms for the contract.
             */
            terms?: string;
            /**
             * An array of the meter types that this contract is available for.
             */
            meterTypes?: string[];
            /**
             * Number of days in the cooling off period for the contract. Mandatory for plans with type of `MARKET`.
             */
            coolingOffDays?: number;
            /**
             * An array of the available billing schedules for this contract. Formatted according to [ISO 8601 Durations](https://en.wikipedia.org/wiki/ISO_8601#Durations) (excludes recurrence syntax).
             */
            billFrequency: string[];
        };
        /**
         * The details of the terms for the supply of electricity under this plan. Is mandatory if _fuelType_ is set to `ELECTRICITY` or `DUAL`.
         */
        electricityContract?: EnergyPlanContractV3 & {
            /**
             * The term for the contract. If absent assumes no specified term.
             */
            termType?: "1_YEAR" | "2_YEAR" | "3_YEAR" | "4_YEAR" | "5_YEAR" | "ONGOING" | "OTHER";
            /**
             * Description of the benefit period. Should only be present if _termType_ has the value `ONGOING`.
             */
            benefitPeriod?: string;
            /**
             * Free text description of the terms for the contract.
             */
            terms?: string;
            /**
             * An array of the meter types that this contract is available for.
             */
            meterTypes?: string[];
            /**
             * Number of days in the cooling off period for the contract. Mandatory for plans with type of `MARKET`.
             */
            coolingOffDays?: number;
            /**
             * An array of the available billing schedules for this contract. Formatted according to [ISO 8601 Durations](https://en.wikipedia.org/wiki/ISO_8601#Durations) (excludes recurrence syntax).
             */
            billFrequency: string[];
        };
    };
    links: Links;
    meta?: Meta;
}
/* These are the schema definitions stipulated by the Data Standards Body for the energy api. */

/**
 * Array of feed in tariffs for solar power
 */
export type EnergyPlanSolarFeedInTariffV2 = {
    /**
     * A description of the tariff
     */
    description?: string;
    /**
     * The name of the tariff
     */
    displayName: string;
    /**
     * The end date of the application of the feed in tariff
     */
    endDate?: string;
    /**
     * The type of the payer
     */
    payerType: "GOVERNMENT" | "RETAILER";
    /**
     * The applicable scheme
     */
    scheme: "PREMIUM" | "OTHER";
    /**
     * Represents a constant tariff.  Mandatory if tariffUType is set to singleTariff
     */
    singleTariff?: {
        /**
         * Array of feed in rates
         */
        rates: {
            /**
             * The measurement unit of rate. Assumed to be KWH if absent
             */
            measureUnit?: "KWH" | "KVA" | "KVAR" | "KVARH" | "KW" | "DAYS" | "METER" | "MONTH";
            /**
             * Unit price of usage per measure unit (exclusive of GST)
             */
            unitPrice: string;
            /**
             * Volume that this rate applies to. Only applicable for ‘stepped’ rates where different rates apply for different volumes of usage in a period
             */
            volume?: number;
        }[];
    };
    /**
     * The start date of the application of the feed in tariff
     */
    startDate?: string;
    /**
     * The type of the payer
     */
    tariffUType: "singleTariff" | "timeVaryingTariffs";
    /**
     * Represents a tariff based on time.  Mandatory if tariffUType is set to timeVaryingTariffs
     */
    timeVaryingTariffs?: {
        /**
         * Array of feed in rates
         */
        rates?: {
            /**
             * The measurement unit of rate. Assumed to be KWH if absent
             */
            measureUnit?: "KWH" | "KVA" | "KVAR" | "KVARH" | "KW" | "DAYS" | "METER" | "MONTH";
            /**
             * Unit price of usage per measure unit (exclusive of GST)
             */
            unitPrice: string;
            /**
             * Volume that this rate applies to. Only applicable for ‘stepped’ rates where different rates apply for different volumes of usage in a period
             */
            volume?: number;
        }[];
        /**
         * Array of time periods for which this tariff is applicable
         */
        timeVariations: {
            /**
             * The days that the tariff applies to. At least one entry required
             */
            days: ("SUN" | "MON" | "TUE" | "WED" | "THU" | "FRI" | "SAT" | "PUBLIC_HOLIDAYS")[];
            /**
             * The end of the time period per day for which the tariff applies.  If absent assumes end of day (ie. one second before midnight)
             */
            endTime?: string;
            /**
             * The beginning of the time period per day for which the tariff applies.  If absent assumes start of day (ie. midnight)
             */
            startTime?: string;
        }[];
        /**
         * The type of the charging time period. If absent applies to all periods
         */
        type?: "PEAK" | "OFF_PEAK" | "SHOULDER";
    };
}[];
/* These are the schema definitions stipulated by the Data Standards Body for the energy api. */

export interface EnergyPlanSolarFeedInTariffV3 {
    /**
     * A description of the tariff.
     */
    description?: string | null;
    /**
     * The name of the tariff.
     */
    displayName: string;
    /**
     * The end date of the application of the feed in tariff.
     */
    endDate?: string | null;
    /**
     * The type of the payer.
     */
    payerType: "GOVERNMENT" | "RETAILER";
    /**
     * The applicable scheme.
     */
    scheme: "PREMIUM" | "CURRENT" | "VARIABLE" | "OTHER";
    /**
     * Represents a constant tariff. Mandatory if _tariffUType_ is set to `singleTariff`.
     */
    singleTariff?: {
        /**
         * Usage period for which the block rate applies. Formatted according to [ISO 8601 Durations](https://en.wikipedia.org/wiki/ISO_8601#Durations) (excludes recurrence syntax). Defaults to `P1Y` if absent.
         */
        period?: string | null;
        /**
         * Array of feed in rates.
         */
        rates: {
            /**
             * The measurement unit of rate. Assumed to be `KWH` if absent.
             */
            measureUnit?: ("KWH" | "KVA" | "KVAR" | "KVARH" | "KW" | "DAYS" | "METER" | "MONTH") & string;
            /**
             * Unit price of usage per measure unit (exclusive of GST).
             */
            unitPrice: string;
            /**
             * Volume that this rate applies to. Only applicable for 'stepped' rates where different rates apply for different volumes of usage in a period.
             */
            volume?: number;
        }[];
    } | null;
    /**
     * The start date of the application of the feed in tariff.
     */
    startDate?: string | null;
    /**
     * Reference to the applicable tariff structure.
     */
    tariffUType: "singleTariff" | "timeVaryingTariffs";
    /**
     * Represents a tariff based on time of day. Mandatory if _tariffUType_ is set to `timeVaryingTariffs`.
     */
    timeVaryingTariffs?:
        | {
            /**
             * Display name of the tariff.
             */
            displayName: string;
            /**
             * Usage period for which the block rate applies. Formatted according to [ISO 8601 Durations](https://en.wikipedia.org/wiki/ISO_8601#Durations) (excludes recurrence syntax). Defaults to `P1Y` if absent.
             */
            period?: string;
            /**
             * Array of feed in rates.
             */
            rates?: {
                /**
                 * The measurement unit of rate. Assumed to be `KWH` if absent.
                 */
                measureUnit?: ("KWH" | "KVA" | "KVAR" | "KVARH" | "KW" | "DAYS" | "METER" | "MONTH") & string;
                /**
                 * Unit price of usage per measure unit (exclusive of GST).
                 */
                unitPrice: string;
                /**
                 * Volume that this rate applies to. Only applicable for 'stepped' rates where different rates apply for different volumes of usage in a period.
                 */
                volume?: number;
            }[];
            /**
             * Array of time windows for which this tariff is applicable.
             */
            timeVariations: {
                /**
                 * The days that this time window applies to. At least one entry required.
                 */
                days: ("SUN" | "MON" | "TUE" | "WED" | "THU" | "FRI" | "SAT" | "PUBLIC_HOLIDAYS")[];
                /**
                 * The end of the time window per day for which the tariff applies. If absent assumes end of day (i.e. one second before midnight). Formatted according to [ISO 8601 Times](https://en.wikipedia.org/wiki/ISO_8601#Times). If the time is provided without a UTC offset, the time zone will be determined by the value of EnergyPlanContract.timeZone.
                 */
                endTime?: string;
                /**
                 * The beginning of the time window per day for which the tariff applies. If absent assumes start of day (i.e. midnight). Formatted according to [ISO 8601 Times](https://en.wikipedia.org/wiki/ISO_8601#Times). If the time is provided without a UTC offset, the time zone will be determined by the value of EnergyPlanContract.timeZone.
                 */
                startTime?: string;
            }[];
            /**
             * The type of the charging time period. If absent applies to all periods.
             */
            type?: "PEAK" | "OFF_PEAK" | "SHOULDER";
        }[]
        | null;
}
/* These are the schema definitions stipulated by the Data Standards Body for the energy api. */

/**
 * Array of tariff periods
 */
export type EnergyPlanTariffPeriod = {
    /**
     * The amount of access charge for the tariff period, in dollars per day exclusive of GST.
     */
    dailySupplyCharges?: string;
    /**
     * Array of demand charges.  Required if rateBlockUType is demandCharges
     */
    demandCharges?: {
        /**
         * The charge amount per  measure unit exclusive of GST
         */
        amount: string;
        /**
         * Charge period for the demand tariff
         */
        chargePeriod: "DAY" | "MONTH" | "TARIFF_PERIOD";
        /**
         * The days that the demand tariff applies to
         */
        days?: ("SUN" | "MON" | "TUE" | "WED" | "THU" | "FRI" | "SAT" | "PUBLIC_HOLIDAYS")[];
        /**
         * Description of the charge
         */
        description?: string;
        /**
         * Display name of the charge
         */
        displayName: string;
        /**
         * End of the period
         */
        endTime: string;
        /**
         * Maximum demand for this demand tariff in kW.  If present, must be higher than the value of the minDemand field
         */
        maxDemand?: string;
        /**
         * The measurement unit of charge amount. Assumed to be KWH if absent
         */
        measureUnit?: "KWH" | "KVA" | "KVAR" | "KVARH" | "KW" | "DAYS" | "METER" | "MONTH";
        /**
         * Application period for the demand tariff
         */
        measurementPeriod: "DAY" | "MONTH" | "TARIFF_PERIOD";
        /**
         * Minimum demand for this demand tariff in kW.  If absent then 0 is assumed
         */
        minDemand?: string;
        /**
         * Start of the period
         */
        startTime: string;
    }[];
    /**
     * The name of the tariff period
     */
    displayName: string;
    /**
     * The end date of the tariff period in a calendar year.  Formatted in mm-dd format
     */
    endDate: string;
    /**
     * Specifies the type of rate applicable to this tariff period
     */
    rateBlockUType: "singleRate" | "timeOfUseRates" | "demandCharges";
    /**
     * Object representing a single rate.  Required if rateBlockUType is singleRate
     */
    singleRate?: {
        /**
         * Description of the rate
         */
        description?: string;
        /**
         * Display name of the rate
         */
        displayName: string;
        /**
         * The block rate (unit price) for any usage above the included fixed usage, in dollars per kWh inclusive of GST.  Only required if pricingModel field is ‘QUOTA’
         */
        generalUnitPrice?: string;
        /**
         * Usage period for which the block rate applies. Formatted according to [ISO 8601 Durations](https://en.wikipedia.org/wiki/ISO_8601#Durations) (excludes recurrence syntax)
         */
        period?: string;
        /**
         * Array of controlled load rates in order of usage volume
         */
        rates: {
            /**
             * The measurement unit of rate. Assumed to be KWH if absent
             */
            measureUnit?: "KWH" | "KVA" | "KVAR" | "KVARH" | "KW" | "DAYS" | "METER" | "MONTH";
            /**
             * Unit price of usage per measure unit (exclusive of GST)
             */
            unitPrice: string;
            /**
             * Volume in kWh that this rate applies to.  Only applicable for ‘stepped’ rates where different rates apply for different volumes of usage in a period
             */
            volume?: number;
        }[];
    };
    /**
     * The start date of the tariff period in a calendar year.  Formatted in mm-dd format
     */
    startDate: string;
    /**
     * Array of objects representing time of use rates.  Required if rateBlockUType is timeOfUseRates
     */
    timeOfUseRates?: {
        /**
         * Description of the rate
         */
        description?: string;
        /**
         * Display name of the rate
         */
        displayName: string;
        /**
         * Array of controlled load rates in order of usage volume
         */
        rates: {
            /**
             * The measurement unit of rate. Assumed to be KWH if absent
             */
            measureUnit?: "KWH" | "KVA" | "KVAR" | "KVARH" | "KW" | "DAYS" | "METER" | "MONTH";
            /**
             * Unit price of usage per  measure unit (exclusive of GST)
             */
            unitPrice: string;
            /**
             * Volume in kWh that this rate applies to.  Only applicable for ‘stepped’ rates where different rates apply for different volumes of usage in a period
             */
            volume?: number;
        }[];
        /**
         * Array of times of use
         */
        timeOfUse: {
            /**
             * The days that the rate applies to
             */
            days: ("SUN" | "MON" | "TUE" | "WED" | "THU" | "FRI" | "SAT" | "PUBLIC_HOLIDAYS")[];
            /**
             * End of the period
             */
            endTime: string;
            /**
             * Start of the period
             */
            startTime: string;
        }[];
        /**
         * The type of usage that the rate applies to
         */
        type: "PEAK" | "OFF_PEAK" | "SHOULDER" | "SHOULDER1" | "SHOULDER2";
    }[];
    /**
     * Specifies the charge specific time zone for calculation of the time of use thresholds. If absent, timezone value in EnergyPlanContract is assumed.
     */
    timeZone?: "LOCAL" | "AEST";
    /**
     * Type of charge. Assumed to be other if absent
     */
    type?: "ENVIRONMENTAL" | "REGULATED" | "NETWORK" | "METERING" | "RETAIL_SERVICE" | "RCTI" | "OTHER";
}[];
/* These are the schema definitions stipulated by the Data Standards Body for the energy api. */

export interface EnergyPlanTariffPeriodV2 {
    /**
     * Array representing banded daily supply charge rates. Mandatory if _dailySupplyChargeType_ is `BAND`.
     */
    bandedDailySupplyCharges?:
        | {
            /**
             * The measurement unit of rate. Assumed to be `DAYS` if absent.
             */
            measureUnit?: ("KWH" | "KVA" | "KVAR" | "KVARH" | "KW" | "DAYS" | "METER" | "MONTH") & string;
            /**
             * The amount of daily supply charge for the band, in dollars per day exclusive of GST.
             */
            unitPrice: string;
            /**
             * Volume the charge applies to.
             */
            volume?: number;
        }[]
        | null;
    /**
     * The amount of access charge for the tariff period, in dollars per day exclusive of GST. Mandatory if _dailySupplyChargeType_ is `SINGLE`.
     */
    dailySupplyCharge?: string | null;
    /**
     * Specifies if daily supply charge is single or banded.
     */
    dailySupplyChargeType?: ("SINGLE" | "BAND") | null;
    /**
     * Array of demand charges. Required if _rateBlockUType_ is `demandCharges`.
     */
    demandCharges?:
        | {
            /**
             * The charge amount per measure unit exclusive of GST.
             */
            amount: string;
            /**
             * Charge period for the demand tariff.
             */
            chargePeriod: "DAY" | "MONTH" | "TARIFF_PERIOD";
            /**
             * The days that the demand tariff applies to.
             */
            days?: ("SUN" | "MON" | "TUE" | "WED" | "THU" | "FRI" | "SAT" | "PUBLIC_HOLIDAYS")[];
            /**
             * Description of the charge.
             */
            description?: string;
            /**
             * Display name of the charge.
             */
            displayName: string;
            /**
             * End of the period. Formatted according to [ISO 8601 Times](https://en.wikipedia.org/wiki/ISO_8601#Times). If the time is provided without a UTC offset, the time zone will be determined by the value of EnergyPlanContract.timeZone.
             */
            endTime: string;
            /**
             * Maximum demand for this demand tariff in kW. If present, must be higher than the value of the _minDemand_ field.
             */
            maxDemand?: string;
            /**
             * The measurement unit of charge amount. Assumed to be `KWH` if absent.
             */
            measureUnit?: ("KWH" | "KVA" | "KVAR" | "KVARH" | "KW" | "DAYS" | "METER" | "MONTH") & string;
            /**
             * Application period for the demand tariff.
             */
            measurementPeriod: "DAY" | "MONTH" | "TARIFF_PERIOD";
            /**
             * Minimum demand for this demand tariff in kW. If absent then `0.00` is assumed.
             */
            minDemand?: string;
            /**
             * Start of the period. Formatted according to [ISO 8601 Times](https://en.wikipedia.org/wiki/ISO_8601#Times). If the time is provided without a UTC offset, the time zone will be determined by the value of EnergyPlanContract.timeZone.
             */
            startTime: string;
        }[]
        | null;
    /**
     * The name of the tariff period.
     */
    displayName: string;
    /**
     * The end date of the tariff period in a calendar year. Formatted in mm-dd format.
     */
    endDate: string;
    /**
     * Specifies the type of rate applicable to this tariff period.
     */
    rateBlockUType: "singleRate" | "timeOfUseRates" | "demandCharges";
    /**
     * Object representing a single rate. Required if _rateBlockUType_ is `singleRate`.
     */
    singleRate?: {
        /**
         * Description of the rate.
         */
        description?: string | null;
        /**
         * Display name of the rate.
         */
        displayName: string;
        /**
         * The block rate (unit price) for any usage above the included fixed usage, in dollars per kWh inclusive of GST. Only required if _pricingModel_ field is `QUOTA`.
         */
        generalUnitPrice?: string | null;
        /**
         * Usage period for which the block rate applies. Formatted according to [ISO 8601 Durations](https://en.wikipedia.org/wiki/ISO_8601#Durations) (excludes recurrence syntax).
         */
        period?: string | null;
        /**
         * Array of rates in order of usage volume.
         */
        rates: {
            /**
             * The measurement unit of rate. Assumed to be `KWH` if absent.
             */
            measureUnit?: ("KWH" | "KVA" | "KVAR" | "KVARH" | "KW" | "DAYS" | "METER" | "MONTH") & string;
            /**
             * Unit price of usage per measure unit (exclusive of GST).
             */
            unitPrice: string;
            /**
             * Volume in kWh that this rate applies to. Only applicable for 'stepped' rates where different rates apply for different volumes of usage in a period.
             */
            volume?: number;
        }[];
    } | null;
    /**
     * The start date of the tariff period in a calendar year. Formatted in mm-dd format.
     */
    startDate: string;
    /**
     * Array of objects representing time of use rates that apply throughout the _tariffPeriod_. Required if _rateBlockUType_ is `timeOfUseRates`.
     */
    timeOfUseRates?:
        | {
            /**
             * Description of the rate.
             */
            description?: string;
            /**
             * Display name of the rate.
             */
            displayName: string;
            /**
             * Usage period for which the block rate applies. Formatted according to [ISO 8601 Durations](https://en.wikipedia.org/wiki/ISO_8601#Durations) (excludes recurrence syntax). Defaults to `P1Y` if absent.
             */
            period?: string;
            /**
             * Array of rates in order of usage volume.
             */
            rates: {
                /**
                 * The measurement unit of rate. Assumed to be `KWH` if absent.
                 */
                measureUnit?: ("KWH" | "KVA" | "KVAR" | "KVARH" | "KW" | "DAYS" | "METER" | "MONTH") & string;
                /**
                 * Unit price of usage per measure unit (exclusive of GST).
                 */
                unitPrice: string;
                /**
                 * Volume in kWh that this rate applies to. Only applicable for 'stepped' rates where different rates apply for different volumes of usage in a period.
                 */
                volume?: number;
            }[];
            /**
             * Array of time windows for which this time of use rate applies.
             */
            timeOfUse: {
                /**
                 * The days that this time window applies to.
                 */
                days: ("SUN" | "MON" | "TUE" | "WED" | "THU" | "FRI" | "SAT" | "PUBLIC_HOLIDAYS")[];
                /**
                 * The end of the time window per day for which the rate applies. Formatted according to [ISO 8601 Times](https://en.wikipedia.org/wiki/ISO_8601#Times). If the time is provided without a UTC offset, the time zone will be determined by the value of EnergyPlanContract.timeZone.
                 */
                endTime: string;
                /**
                 * The beginning of the time window per day for which the rate applies. Formatted according to [ISO 8601 Times](https://en.wikipedia.org/wiki/ISO_8601#Times). If the time is provided without a UTC offset, the time zone will be determined by the value of EnergyPlanContract.timeZone.
                 */
                startTime: string;
            }[];
            /**
             * The type of usage that the rate applies to.
             */
            type: "PEAK" | "OFF_PEAK" | "SHOULDER" | "SHOULDER1" | "SHOULDER2";
        }[]
        | null;
    /**
     * Specifies the charge specific time zone for calculation of the time of use thresholds. If absent, timezone value in EnergyPlanContract is assumed.
     */
    timeZone?: ("LOCAL" | "AEST") | null;
    /**
     * Type of charge. Assumed to be `OTHER` if absent.
     */
    type?: ("ENVIRONMENTAL" | "REGULATED" | "NETWORK" | "METERING" | "RETAIL_SERVICE" | "RCTI" | "OTHER") | null;
}
/* These are the schema definitions stipulated by the Data Standards Body for the energy api. */

export interface EnergyServicePoint {
    consumerProfile?: {
        /**
         * A code that defines the consumer class as defined in the National Energy Retail Regulations, or in overriding Jurisdictional instruments.
         */
        classification?: ("BUSINESS" | "RESIDENTIAL") | null;
        /**
         * A code that defines the consumption threshold as defined in the National Energy Retail Regulations, or in overriding Jurisdictional instruments. Note the details of enumeration values below: <ul><li>`LOW`: Consumption is less than the 'lower consumption threshold' as defined in the National Energy Retail Regulations</li><li>`MEDIUM`: Consumption is equal to or greater than the 'lower consumption threshold', but less than the 'upper consumption threshold', as defined in the National Energy Retail Regulations</li><li>`HIGH`: Consumption is equal to or greater than the 'upper consumption threshold' as defined in the National Energy Retail Regulations.</li></ul>
         */
        threshold?: "LOW" | "MEDIUM" | "HIGH";
    } | null;
    /**
     * This flag determines whether the energy at this connection point is to be treated as consumer load or as a generating unit (this may include generator auxiliary loads). If absent defaults to `false`. <br>**Note:** Only applicable for scheduled or semischeduled generators, does not indicate on site generation by consumer.
     */
    isGenerator?: boolean | null;
    /**
     * Jurisdiction code to which the service point belongs.This code defines the jurisdictional rules which apply to the service point. Note the details of enumeration values below:<ul><li>`ALL`: All Jurisdictions</li><li>`ACT`: Australian Capital Territory</li><li>`NEM`: National Electricity Market</li><li>`NSW`: New South Wales</li><li>`QLD`: Queensland</li><li>`SA`: South Australia</li><li>`TAS`: Tasmania</li><li>`VIC`: Victoria.</li></ul>
     */
    jurisdictionCode: "ALL" | "ACT" | "NEM" | "NSW" | "QLD" | "SA" | "TAS" | "VIC";
    /**
     * The date and time that the information for this service point was modified.
     */
    lastUpdateDateTime: string;
    /**
     * The independent ID of the service point, known in the industry as the NMI.
     */
    nationalMeteringId: string;
    /**
     * The classification of the service point as defined in MSATS procedures.
     */
    servicePointClassification:
        | "EXTERNAL_PROFILE"
        | "GENERATOR"
        | "LARGE"
        | "SMALL"
        | "WHOLESALE"
        | "NON_CONTEST_UNMETERED_LOAD"
        | "NON_REGISTERED_EMBEDDED_GENERATOR"
        | "DISTRIBUTION_WHOLESALE";
    /**
     * Tokenised ID of the service point to be used for referring to the service point in the CDR API suite. To be created in accordance with CDR ID permanence requirements.
     */
    servicePointId: string;
    /**
     * Code used to indicate the status of the service point. Note the details for the enumeration values below:<ul><li>`ACTIVE`: An active, energised, service point</li><li>`DE_ENERGISED`: The service point exists but is deenergised</li><li>`EXTINCT`: The service point has been permanently decommissioned</li><li>`GREENFIELD`: Applies to a service point that has never been energised</li><li>`OFF_MARKET`: Applies when the service point is no longer settled in the NEM.</li></ul>
     */
    servicePointStatus: "ACTIVE" | "DE_ENERGISED" | "EXTINCT" | "GREENFIELD" | "OFF_MARKET";
    /**
     * The latest start date from which the constituent data sets of this service point became valid.
     */
    validFromDate: string;
}
/* These are the schema definitions stipulated by the Data Standards Body for the energy api. */

export interface EnergyServicePointDetail {
    consumerProfile?: {
        /**
         * A code that defines the consumer class as defined in the National Energy Retail Regulations, or in overriding Jurisdictional instruments.
         */
        classification?: ("BUSINESS" | "RESIDENTIAL") | null;
        /**
         * A code that defines the consumption threshold as defined in the National Energy Retail Regulations, or in overriding Jurisdictional instruments. Note the details of enumeration values below: <ul><li>`LOW`: Consumption is less than the 'lower consumption threshold' as defined in the National Energy Retail Regulations</li><li>`MEDIUM`: Consumption is equal to or greater than the 'lower consumption threshold', but less than the 'upper consumption threshold', as defined in the National Energy Retail Regulations</li><li>`HIGH`: Consumption is equal to or greater than the 'upper consumption threshold' as defined in the National Energy Retail Regulations.</li></ul>
         */
        threshold?: "LOW" | "MEDIUM" | "HIGH";
    } | null;
    distributionLossFactor: {
        /**
         * A code used to identify data loss factor for the service point values. Refer to AEMO distribution loss factor documents for each financial year to interpret.
         */
        code: string;
        /**
         * Description of the data loss factor code and value.
         */
        description: string;
        /**
         * The value associated with the loss factor code.
         */
        lossValue: string;
    };
    /**
     * This flag determines whether the energy at this connection point is to be treated as consumer load or as a generating unit(this may include generator auxiliary loads). If absent defaults to `false`. <br>**Note:** Only applicable for scheduled or semischeduled generators, does not indicate on site generation by consumer.
     */
    isGenerator?: boolean | null;
    /**
     * Jurisdiction code to which the service point belongs.This code defines the jurisdictional rules which apply to the service point. Note the details of enumeration values below:<ul><li>`ALL`: All Jurisdictions</li><li>`ACT`: Australian Capital Territory</li><li>`NEM`: National Electricity Market</li><li>`NSW`: New South Wales</li><li>`QLD`: Queensland</li><li>`SA`: South Australia</li><li>`TAS`: Tasmania</li><li>`VIC`: Victoria.</li></ul>
     */
    jurisdictionCode: "ALL" | "ACT" | "NEM" | "NSW" | "QLD" | "SA" | "TAS" | "VIC";
    /**
     * The date and time that the information for this service point was modified.
     */
    lastUpdateDateTime: string;
    location: CommonPhysicalAddress;
    /**
     * The meters associated with the service point. This may be empty where there are no meters physically installed at the service point.
     */
    meters?:
        | {
            /**
             * The meter ID uniquely identifies a meter for a given service point. It is unique in the context of the service point. It is not globally unique.
             */
            meterId: string;
            /**
             * Usage data registers available from the meter. This may be empty where there are no meters physically installed at the service point.
             */
            registers?: {
                /**
                 * The energy delivered through a connection point or metering point over an extended period normalised to a 'per day' basis (kWh). This value is calculated annually.
                 */
                averagedDailyLoad?: number;
                /**
                 * Actual/Subtractive Indicator. Note the details of enumeration values below: <ul><li>`ACTUAL`: implies volume of energy actually metered between two dates</li><li>`CUMULATIVE`: indicates a meter reading for a specific date. A second Meter Reading is required to determine the consumption between those two Meter Reading dates.</li></ul>
                 */
                consumptionType?: "ACTUAL" | "CUMULATIVE";
                /**
                 * Indicates whether the energy recorded by this register is created under a Controlled Load regime.
                 */
                controlledLoad?: boolean;
                /**
                 * Multiplier required to take a register value and turn it into a value representing billable energy.
                 */
                multiplier?: number;
                /**
                 * The Network Tariff Code is a free text field containing a code supplied and published by the local network service provider.
                 */
                networkTariffCode?: string;
                /**
                 * Indicates the consumption type of register.
                 */
                registerConsumptionType:
                    | "INTERVAL"
                    | "BASIC"
                    | "PROFILE_DATA"
                    | "ACTIVE_IMPORT"
                    | "ACTIVE"
                    | "REACTIVE_IMPORT"
                    | "REACTIVE";
                /**
                 * Unique identifier of the register within this service point. Is not globally unique.
                 */
                registerId: string;
                /**
                 * Register suffix of the meter register where the meter reads are obtained.
                 */
                registerSuffix?: string;
                /**
                 * Code to identify the time validity of register contents.
                 */
                timeOfDay?:
                    | "ALLDAY"
                    | "INTERVAL"
                    | "PEAK"
                    | "BUSINESS"
                    | "SHOULDER"
                    | "EVENING"
                    | "OFFPEAK"
                    | "CONTROLLED"
                    | "DEMAND";
                /**
                 * The unit of measure for data held in this register.
                 */
                unitOfMeasure?: string;
            }[];
            /**
             * Technical characteristics of the meter.
             */
            specifications: {
                /**
                 * The metering Installation type code indicates whether the metering installation has to be manually read. Note the details of enumeration values below: <ul><li>`BASIC`: Accumulation Meter – Type 6</li><li>`COMMS1`: Interval Meter with communications – Type 1</li><li>`COMMS2`: Interval Meter with communications – Type 2</li><li>`COMMS3`: Interval Meter with communications – Type 3</li><li>`COMMS4`: Interval Meter with communications – Type 4</li><li>`COMMS4C`: CT connected metering installation that meets the minimum services specifications</li><li>`COMMS4D`: Whole current metering installation that meets the minimum services specifications</li><li>`MRAM`: Small customer metering installation – Type 4A</li><li>`MRIM`: Manually Read Interval Meter – Type 5</li><li>`UMCP`: Unmetered Supply – Type 7</li><li>`VICAMI`: A relevant metering installation as defined in clause 9.9C of the NER</li><li>`NCONUML`: Non-contestable unmeter load - Introduced as part of Global Settlement.</li></ul>
                 */
                installationType:
                    | "BASIC"
                    | "COMMS1"
                    | "COMMS2"
                    | "COMMS3"
                    | "COMMS4"
                    | "COMMS4C"
                    | "COMMS4D"
                    | "MRAM"
                    | "MRIM"
                    | "PROF"
                    | "SAMPLE"
                    | "UMCP"
                    | "VICAMI"
                    | "NCOLNUML";
                /**
                 * Free text field to identify the manufacturer of the installed meter.
                 */
                manufacturer?: string;
                /**
                 * Free text field to identify the meter manufacturer's designation for the meter model.
                 */
                model?: string;
                /**
                 * This date is the next scheduled meter read date (NSRD) if a manual Meter Reading is required.
                 */
                nextScheduledReadDate?: string;
                /**
                 * Code to denote the method and frequency of Meter Reading. The value is formatted as follows: <ul><li>First Character = Remote (`R`) or Manual (`M`)</li><li>Second Character = Mode: `T` = telephone, `W` = wireless, `P` = powerline, `I` = infra-red, `G` = galvanic, `V` = visual</li><li>Third Character = Frequency of Scheduled Meter Readings: `1` = Twelve times per year, `2` = Six times per year, `3` = Four times per year, `D` = Daily or weekly</li><li>Optional Fourth Character = to identify what interval length the meter is capable of reading. This includes five, 15 and 30 minute granularity as the following: `A` = 5 minute, `B` = 15 minute, `C` = 30 minute, `D` = Cannot convert to 5 minute (i.e. due to metering installation de-energised), `M` - Manually Read Accumulation Meter.</li></ul>For example, <ul><li>`MV3` = Manual, Visual, Quarterly</li><li>`MV3M` = Manual, Visual, Quarterly, Manually Read Accumulation Meter</li><li>`RWDC` = Remote, Wireless, Daily, 30 minutes interval.</li></ul>
                 */
                readType?: string;
                /**
                 * A code to denote the status of the meter. Note the details of enumeration values below: <ul><li>`CURRENT`: Applies when a meter is current and not disconnected</li><li>`DISCONNECTED`: Applies when a meter is present but has been remotely disconnected.</li></ul>
                 */
                status: "CURRENT" | "DISCONNECTED";
            };
        }[]
        | null;
    /**
     * The independent ID of the service point, known in the industry as the NMI.
     */
    nationalMeteringId: string;
    relatedParticipants: {
        /**
         * The name of the party/organisation related to this service point.
         */
        party: string;
        /**
         * The role performed by this participant in relation to the service point. Note the details of enumeration values below: <ul><li>`FRMP`: Financially Responsible Market Participant</li><li>`LNSP`: Local Network Service Provider or Embedded Network Manager for child connection points</li><li>`DRSP`: wholesale Demand Response and/or market ancillary Service Provider and note that where it is not relevant for a NMI it will not be included.</li></ul>
         */
        role: "FRMP" | "LNSP" | "DRSP";
    }[];
    /**
     * The classification of the service point as defined in MSATS procedures.
     */
    servicePointClassification:
        | "EXTERNAL_PROFILE"
        | "GENERATOR"
        | "LARGE"
        | "SMALL"
        | "WHOLESALE"
        | "NON_CONTEST_UNMETERED_LOAD"
        | "NON_REGISTERED_EMBEDDED_GENERATOR"
        | "DISTRIBUTION_WHOLESALE";
    /**
     * The tokenised ID of the service point for use in the CDR APIs. Created according to the CDR rules for ID permanence.
     */
    servicePointId: string;
    /**
     * Code used to indicate the status of the service point. Note the details for the enumeration values below:<ul><li>`ACTIVE`: An active, energised, service point</li><li>`DE_ENERGISED`: The service point exists but is deenergised</li><li>`EXTINCT`: The service point has been permanently decommissioned</li><li>`GREENFIELD`: Applies to a service point that has never been energised</li><li>`OFF_MARKET`: Applies when the service point is no longer settled in the NEM.</li></ul>
     */
    servicePointStatus: "ACTIVE" | "DE_ENERGISED" | "EXTINCT" | "GREENFIELD" | "OFF_MARKET";
    /**
     * The latest start date from which the constituent data sets of this service point became valid.
     */
    validFromDate: string;
}
/* These are the schema definitions stipulated by the Data Standards Body for the energy api. */

export interface EnergyServicePointDetailResponse {
    data: EnergyServicePointDetail;
    links: Links;
    meta?: Meta;
}
/* These are the schema definitions stipulated by the Data Standards Body for the energy api. */

export interface EnergyServicePointDetailResponseV2 {
    data: EnergyServicePointV2 & {
        distributionLossFactor: {
            /**
             * A code used to identify data loss factor for the service point values. Refer to AEMO distribution loss factor documents for each financial year to interpret.
             */
            code: string;
            /**
             * Description of the data loss factor code and value.
             */
            description: string;
            /**
             * The value associated with the loss factor code.
             */
            lossValue: string;
        };
        relatedParticipants: {
            /**
             * The name of the party/organisation related to this service point.
             */
            party: string;
            /**
             * The role performed by this participant in relation to the service point. Note the details of enumeration values below: <ul><li>`FRMP`: Financially Responsible Market Participant</li><li>`LNSP`: Local Network Service Provider or Embedded Network Manager for child connection points</li><li>`DRSP`: wholesale Demand Response and/or market ancillary Service Provider and note that where it is not relevant for a NMI it will not be included.</li></ul>
             */
            role: "FRMP" | "LNSP" | "DRSP";
        }[];
        /**
         * Location of the servicepoint.
         */
        location: CommonPhysicalAddress;
        /**
         * The meters associated with the service point. This may be empty where there are no meters physically installed at the service point.
         */
        meters?: {
            /**
             * The meter ID uniquely identifies a meter for a given service point. It is unique in the context of the service point. It is not globally unique.
             */
            meterId: string;
            /**
             * Technical characteristics of the meter.
             */
            specifications: {
                /**
                 * A code to denote the status of the meter. Note the details of enumeration values below: <ul><li>`CURRENT`: Applies when a meter is current and not disconnected</li><li>`DISCONNECTED`: Applies when a meter is present but has been remotely disconnected.</li></ul>
                 */
                status: "CURRENT" | "DISCONNECTED";
                /**
                 * The metering Installation type code indicates whether the metering installation has to be manually read. Note the details of enumeration values below: <ul><li>`BASIC`: Accumulation Meter – Type 6</li><li>`COMMS1`: Interval Meter with communications – Type 1</li><li>`COMMS2`: Interval Meter with communications – Type 2</li><li>`COMMS3`: Interval Meter with communications – Type 3</li><li>`COMMS4`: Interval Meter with communications – Type 4</li><li>`COMMS4C`: CT connected metering installation that meets the minimum services specifications</li><li>`COMMS4D`: Whole current metering installation that meets the minimum services specifications</li><li>`MRAM`: Small customer metering installation – Type 4A</li><li>`MRIM`: Manually Read Interval Meter – Type 5</li><li>`UMCP`: Unmetered Supply – Type 7</li><li>`VICAMI`: A relevant metering installation as defined in clause 9.9C of the NER</li><li>`NCONUML`: Non-contestable unmeter load - Introduced as part of Global Settlement.</li></ul>
                 */
                installationType:
                    | "BASIC"
                    | "COMMS1"
                    | "COMMS2"
                    | "COMMS3"
                    | "COMMS4"
                    | "COMMS4C"
                    | "COMMS4D"
                    | "MRAM"
                    | "MRIM"
                    | "PROF"
                    | "SAMPLE"
                    | "UMCP"
                    | "VICAMI"
                    | "NCOLNUML";
                /**
                 * Free text field to identify the manufacturer of the installed meter.
                 */
                manufacturer?: string;
                /**
                 * Free text field to identify the meter manufacturer's designation for the meter model.
                 */
                model?: string;
                /**
                 * Code to denote the method and frequency of Meter Reading. The value is formatted as follows: <ul><li>First Character = Remote (`R`) or Manual (`M`)</li><li>Second Character = Mode: `T` = telephone, `W` = wireless, `P` = powerline, `I` = infra-red, `G` = galvanic, `V` = visual</li><li>Third Character = Frequency of Scheduled Meter Readings: `1` = Twelve times per year, `2` = Six times per year, `3` = Four times per year, `D` = Daily or weekly</li><li>Optional Fourth Character = to identify what interval length the meter is capable of reading. This includes five, 15 and 30 minute granularity as the following: `A` = 5 minute, `B` = 15 minute, `C` = 30 minute, `D` = Cannot convert to 5 minute (i.e. due to metering installation de-energised), `M` = Manually Read Accumulation Meter.</li></ul>For example, <ul><li>`MV3` = Manual, Visual, Quarterly</li><li>`MV3M` = Manual, Visual, Quarterly, Manually Read Accumulation Meter</li><li>`RWDC` = Remote, Wireless, Daily, 30 minutes interval.</li></ul>
                 */
                readType?: string;
                /**
                 * This date is the next scheduled meter read date (NSRD) if a manual Meter Reading is required.
                 */
                nextScheduledReadDate?: string;
            };
            /**
             * Usage data registers available from the meter. This may be empty where there are no meters physically installed at the service point.
             */
            registers?: {
                /**
                 * Unique identifier of the register within this service point. Is not globally unique.
                 */
                registerId: string;
                /**
                 * Register suffix of the meter register where the meter reads are obtained.
                 */
                registerSuffix?: string;
                /**
                 * The energy delivered through a connection point or metering point over an extended period normalised to a 'per day' basis (kWh). This value is calculated annually.
                 */
                averagedDailyLoad?: number;
                /**
                 * Indicates the consumption type of register.
                 */
                registerConsumptionType:
                    | "INTERVAL"
                    | "BASIC"
                    | "PROFILE_DATA"
                    | "ACTIVE_IMPORT"
                    | "ACTIVE"
                    | "REACTIVE_IMPORT"
                    | "REACTIVE";
                /**
                 * The Network Tariff Code is a free text field containing a code supplied and published by the local network service provider.
                 */
                networkTariffCode?: string;
                /**
                 * The unit of measure for data held in this register.
                 */
                unitOfMeasure?: string;
                /**
                 * Code to identify the time validity of register contents.
                 */
                timeOfDay?:
                    | "ALLDAY"
                    | "INTERVAL"
                    | "PEAK"
                    | "BUSINESS"
                    | "SHOULDER"
                    | "EVENING"
                    | "OFFPEAK"
                    | "CONTROLLED"
                    | "DEMAND";
                /**
                 * Multiplier required to take a register value and turn it into a value representing billable energy.
                 */
                multiplier?: number;
                /**
                 * Indicates whether the energy recorded by this register is created under a Controlled Load regime.
                 */
                controlledLoad?: boolean;
                /**
                 * Actual/Subtractive Indicator. Note the details of enumeration values below: <ul><li>`ACTUAL`: implies volume of energy actually metered between two dates</li><li>`CUMULATIVE`: indicates a meter reading for a specific date. A second Meter Reading is required to determine the consumption between those two Meter Reading dates.</li></ul>
                 */
                consumptionType?: "ACTUAL" | "CUMULATIVE";
            }[];
        }[];
    };
    links: Links;
    meta?: Meta;
}
/* These are the schema definitions stipulated by the Data Standards Body for the energy api. */

export type EnergyServicePointDetailV2 = EnergyServicePointV2 & {
    distributionLossFactor: {
        /**
         * A code used to identify data loss factor for the service point values. Refer to AEMO distribution loss factor documents for each financial year to interpret.
         */
        code: string;
        /**
         * Description of the data loss factor code and value.
         */
        description: string;
        /**
         * The value associated with the loss factor code.
         */
        lossValue: string;
    };
    relatedParticipants: {
        /**
         * The name of the party/organisation related to this service point.
         */
        party: string;
        /**
         * The role performed by this participant in relation to the service point. Note the details of enumeration values below: <ul><li>`FRMP`: Financially Responsible Market Participant</li><li>`LNSP`: Local Network Service Provider or Embedded Network Manager for child connection points</li><li>`DRSP`: wholesale Demand Response and/or market ancillary Service Provider and note that where it is not relevant for a NMI it will not be included.</li></ul>
         */
        role: "FRMP" | "LNSP" | "DRSP";
    }[];
    /**
     * Location of the servicepoint.
     */
    location: CommonPhysicalAddress;
    /**
     * The meters associated with the service point. This may be empty where there are no meters physically installed at the service point.
     */
    meters?: {
        /**
         * The meter ID uniquely identifies a meter for a given service point. It is unique in the context of the service point. It is not globally unique.
         */
        meterId: string;
        /**
         * Technical characteristics of the meter.
         */
        specifications: {
            /**
             * A code to denote the status of the meter. Note the details of enumeration values below: <ul><li>`CURRENT`: Applies when a meter is current and not disconnected</li><li>`DISCONNECTED`: Applies when a meter is present but has been remotely disconnected.</li></ul>
             */
            status: "CURRENT" | "DISCONNECTED";
            /**
             * The metering Installation type code indicates whether the metering installation has to be manually read. Note the details of enumeration values below: <ul><li>`BASIC`: Accumulation Meter – Type 6</li><li>`COMMS1`: Interval Meter with communications – Type 1</li><li>`COMMS2`: Interval Meter with communications – Type 2</li><li>`COMMS3`: Interval Meter with communications – Type 3</li><li>`COMMS4`: Interval Meter with communications – Type 4</li><li>`COMMS4C`: CT connected metering installation that meets the minimum services specifications</li><li>`COMMS4D`: Whole current metering installation that meets the minimum services specifications</li><li>`MRAM`: Small customer metering installation – Type 4A</li><li>`MRIM`: Manually Read Interval Meter – Type 5</li><li>`UMCP`: Unmetered Supply – Type 7</li><li>`VICAMI`: A relevant metering installation as defined in clause 9.9C of the NER</li><li>`NCONUML`: Non-contestable unmeter load - Introduced as part of Global Settlement.</li></ul>
             */
            installationType:
                | "BASIC"
                | "COMMS1"
                | "COMMS2"
                | "COMMS3"
                | "COMMS4"
                | "COMMS4C"
                | "COMMS4D"
                | "MRAM"
                | "MRIM"
                | "PROF"
                | "SAMPLE"
                | "UMCP"
                | "VICAMI"
                | "NCOLNUML";
            /**
             * Free text field to identify the manufacturer of the installed meter.
             */
            manufacturer?: string;
            /**
             * Free text field to identify the meter manufacturer's designation for the meter model.
             */
            model?: string;
            /**
             * Code to denote the method and frequency of Meter Reading. The value is formatted as follows: <ul><li>First Character = Remote (`R`) or Manual (`M`)</li><li>Second Character = Mode: `T` = telephone, `W` = wireless, `P` = powerline, `I` = infra-red, `G` = galvanic, `V` = visual</li><li>Third Character = Frequency of Scheduled Meter Readings: `1` = Twelve times per year, `2` = Six times per year, `3` = Four times per year, `D` = Daily or weekly</li><li>Optional Fourth Character = to identify what interval length the meter is capable of reading. This includes five, 15 and 30 minute granularity as the following: `A` = 5 minute, `B` = 15 minute, `C` = 30 minute, `D` = Cannot convert to 5 minute (i.e. due to metering installation de-energised), `M` = Manually Read Accumulation Meter.</li></ul>For example, <ul><li>`MV3` = Manual, Visual, Quarterly</li><li>`MV3M` = Manual, Visual, Quarterly, Manually Read Accumulation Meter</li><li>`RWDC` = Remote, Wireless, Daily, 30 minutes interval.</li></ul>
             */
            readType?: string;
            /**
             * This date is the next scheduled meter read date (NSRD) if a manual Meter Reading is required.
             */
            nextScheduledReadDate?: string;
        };
        /**
         * Usage data registers available from the meter. This may be empty where there are no meters physically installed at the service point.
         */
        registers?: {
            /**
             * Unique identifier of the register within this service point. Is not globally unique.
             */
            registerId: string;
            /**
             * Register suffix of the meter register where the meter reads are obtained.
             */
            registerSuffix?: string;
            /**
             * The energy delivered through a connection point or metering point over an extended period normalised to a 'per day' basis (kWh). This value is calculated annually.
             */
            averagedDailyLoad?: number;
            /**
             * Indicates the consumption type of register.
             */
            registerConsumptionType:
                | "INTERVAL"
                | "BASIC"
                | "PROFILE_DATA"
                | "ACTIVE_IMPORT"
                | "ACTIVE"
                | "REACTIVE_IMPORT"
                | "REACTIVE";
            /**
             * The Network Tariff Code is a free text field containing a code supplied and published by the local network service provider.
             */
            networkTariffCode?: string;
            /**
             * The unit of measure for data held in this register.
             */
            unitOfMeasure?: string;
            /**
             * Code to identify the time validity of register contents.
             */
            timeOfDay?:
                | "ALLDAY"
                | "INTERVAL"
                | "PEAK"
                | "BUSINESS"
                | "SHOULDER"
                | "EVENING"
                | "OFFPEAK"
                | "CONTROLLED"
                | "DEMAND";
            /**
             * Multiplier required to take a register value and turn it into a value representing billable energy.
             */
            multiplier?: number;
            /**
             * Indicates whether the energy recorded by this register is created under a Controlled Load regime.
             */
            controlledLoad?: boolean;
            /**
             * Actual/Subtractive Indicator. Note the details of enumeration values below: <ul><li>`ACTUAL`: implies volume of energy actually metered between two dates</li><li>`CUMULATIVE`: indicates a meter reading for a specific date. A second Meter Reading is required to determine the consumption between those two Meter Reading dates.</li></ul>
             */
            consumptionType?: "ACTUAL" | "CUMULATIVE";
        }[];
    }[];
};
/* These are the schema definitions stipulated by the Data Standards Body for the energy api. */

/**
 * A unique identifier for an Energy service point, generated according to [CDR ID Permanence](#id-permanence) requirements.
 */
export type EnergyServicePointId = string;
/* These are the schema definitions stipulated by the Data Standards Body for the energy api. */

export interface EnergyServicePointListResponse {
    data: {
        servicePoints: EnergyServicePoint[];
    };
    links: LinksPaginated;
    meta: MetaPaginated;
}
/* These are the schema definitions stipulated by the Data Standards Body for the energy api. */

export interface EnergyServicePointListResponseV2 {
    data: {
        servicePoints: EnergyServicePointV2[];
    };
    links: LinksPaginated;
    meta: MetaPaginated;
}
/* These are the schema definitions stipulated by the Data Standards Body for the energy api. */

export interface EnergyServicePointV2 {
    consumerProfile?: {
        /**
         * A code that defines the consumer class as defined in the National Energy Retail Regulations, or in overriding Jurisdictional instruments.
         */
        classification?: ("BUSINESS" | "RESIDENTIAL") | null;
        /**
         * A code that defines the consumption threshold as defined in the National Energy Retail Regulations, or in overriding Jurisdictional instruments. Note the details of enumeration values below: <ul><li>`LOW`: Consumption is less than the 'lower consumption threshold' as defined in the National Energy Retail Regulations</li><li>`MEDIUM`: Consumption is equal to or greater than the 'lower consumption threshold', but less than the 'upper consumption threshold', as defined in the National Energy Retail Regulations</li><li>`HIGH`: Consumption is equal to or greater than the 'upper consumption threshold' as defined in the National Energy Retail Regulations.</li></ul>
         */
        threshold?: "LOW" | "MEDIUM" | "HIGH";
    } | null;
    /**
     * This flag determines whether the energy at this connection point is to be treated as consumer load or as a generating unit (this may include generator auxiliary loads). If absent defaults to `false`. <br>**Note:** Only applicable for scheduled or semischeduled generators, does not indicate on site generation by consumer.
     */
    isGenerator?: boolean | null;
    /**
     * Jurisdiction code to which the service point belongs.This code defines the jurisdictional rules which apply to the service point. Note the details of enumeration values below:<ul><li>`ALL`: All Jurisdictions</li><li>`ACT`: Australian Capital Territory</li><li>`NEM`: National Electricity Market</li><li>`NSW`: New South Wales</li><li>`QLD`: Queensland</li><li>`SA`: South Australia</li><li>`TAS`: Tasmania</li><li>`VIC`: Victoria.</li></ul>
     */
    jurisdictionCode: "ALL" | "ACT" | "NEM" | "NSW" | "QLD" | "SA" | "TAS" | "VIC";
    /**
     * The date the account holder changed for the NMI.
     */
    lastConsumerChangeDate?: string | null;
    /**
     * The date and time that the information for this service point was modified.
     */
    lastUpdateDateTime: string;
    /**
     * The independent ID of the service point, known in the industry as the NMI.
     */
    nationalMeteringId: string;
    /**
     * The classification of the service point as defined in MSATS procedures.
     */
    servicePointClassification:
        | "EXTERNAL_PROFILE"
        | "GENERATOR"
        | "LARGE"
        | "SMALL"
        | "WHOLESALE"
        | "NON_CONTEST_UNMETERED_LOAD"
        | "NON_REGISTERED_EMBEDDED_GENERATOR"
        | "DISTRIBUTION_WHOLESALE";
    /**
     * Unique identifier for the service point.
     */
    servicePointId: string;
    /**
     * Code used to indicate the status of the service point. Note the details for the enumeration values below:<ul><li>`ACTIVE`: An active, energised, service point</li><li>`DE_ENERGISED`: The service point exists but is deenergised</li><li>`EXTINCT`: The service point has been permanently decommissioned</li><li>`GREENFIELD`: Applies to a service point that has never been energised</li><li>`OFF_MARKET`: Applies when the service point is no longer settled in the NEM.</li></ul>
     */
    servicePointStatus: "ACTIVE" | "DE_ENERGISED" | "EXTINCT" | "GREENFIELD" | "OFF_MARKET";
    /**
     * The latest start date from which the constituent data sets of this service point became valid.
     */
    validFromDate: string;
}
/* These are the schema definitions stipulated by the Data Standards Body for the energy api. */

export interface EnergyUsageListResponse {
    data: {
        /**
         * Array of meter reads sorted by NMI in ascending order followed by _readStartDate_ in descending order.
         */
        reads: EnergyUsageRead[];
    };
    links: LinksPaginated;
    meta: MetaPaginated;
}
/* These are the schema definitions stipulated by the Data Standards Body for the energy api. */

export interface EnergyUsageRead {
    /**
     * Mandatory if _readUType_ is set to `basicRead`.
     */
    basicRead?: {
        /**
         * The quality of the read taken. If absent then assumed to be `ACTUAL`.
         */
        quality?: ("ACTUAL" | "SUBSTITUTE" | "FINAL_SUBSTITUTE") | null;
        /**
         * Meter read value. If positive then it means consumption, if negative it means export.
         */
        value: number;
    } | null;
    /**
     * Indicates whether the energy recorded by this register is created under a Controlled Load regime.
     */
    controlledLoad?: boolean | null;
    /**
     * Mandatory if _readUType_ is set to `intervalRead`.
     */
    intervalRead?: {
        /**
         * The aggregate sum of the interval read values. If positive then it means net consumption, if negative it means net export.
         */
        aggregateValue: number;
        /**
         * Array of Interval read values. If positive then it means consumption, if negative it means export. Required when _interval-reads_ query parameter equals `FULL` or `MIN_30`.<br>Each read value indicates the read for the interval specified by _readIntervalLength_ beginning at midnight of _readStartDate_ (for example 00:00 to 00:30 would be the first reading in a 30 minute Interval).
         */
        intervalReads?: number[] | null;
        /**
         * Read interval length in minutes. Required when _interval-reads_ query parameter equals `FULL` or `MIN_30`.
         */
        readIntervalLength?: number | null;
        /**
         *  Specifies quality of reads that are not `ACTUAL`. For read indices that are not specified, quality is assumed to be `ACTUAL`. If not present, all quality of all reads are assumed to be actual. Required when _interval-reads_ query parameter equals `FULL` or `MIN_30`.
         */
        readQualities?:
            | {
                /**
                 * End interval for read quality flag.
                 */
                endInterval: number;
                /**
                 * The quality of the read taken.
                 */
                quality: "SUBSTITUTE" | "FINAL_SUBSTITUTE";
                /**
                 * Start interval for read quality flag. First read begins at `1`.
                 */
                startInterval: number;
            }[]
            | null;
    } | null;
    /**
     * Meter id/serial number as it appears in customer's bill. ID permanence rules do not apply.
     */
    meterId?: string | null;
    /**
     * Date when the meter reads end in AEST. If absent then assumed to be equal to _readStartDate_. In this case the entry represents data for a single date specified by _readStartDate_.
     */
    readEndDate?: string | null;
    /**
     * Date when the meter reads start in AEST and assumed to start from 12:00am AEST.
     */
    readStartDate: string;
    /**
     * Specify the type of the meter read data.
     */
    readUType: "basicRead" | "intervalRead";
    /**
     * Register ID of the meter register where the meter reads are obtained.
     */
    registerId?: string | null;
    /**
     * Register suffix of the meter register where the meter reads are obtained.
     */
    registerSuffix: string;
    /**
     * Unique identifier for the service point.
     */
    servicePointId: string;
    /**
     * Unit of measure of the meter reads. Refer to Appendix B of <a href='https://www.aemo.com.au/-/media/files/stakeholder_consultation/consultations/nem-consultations/2019/5ms-metering-package-2/final-determination/mdff-specification-nem12-nem13-v21-final-determination-clean.pdf?la=en&hash=03FCBA0D60E091DE00F2361AE76206EA'>MDFF Specification NEM12 NEM13 v2.1</a> for a list of possible values.
     */
    unitOfMeasure?: string | null;
}
/* These are the schema definitions stipulated by the Data Standards Body for the energy api. */

export interface ErrorV2 {
    /**
     * The code of the error encountered. Where the error is specific to the respondent, an application-specific error code, expressed as a string value. If the error is application-specific, the URN code that the specific error extends must be provided in the _meta_ object. Otherwise, the value is the error code URN.
     */
    code: string;
    /**
     * A human-readable explanation specific to this occurrence of the problem.
     */
    detail: string;
    /**
     * Additional data for customised error codes.
     */
    meta?: {
        /**
         * The CDR error code URN which the application-specific error code extends. Mandatory if the error _code_ is an application-specific error rather than a standardised error code.
         */
        urn?: string | null;
    } | null;
    /**
     * A short, human-readable summary of the problem that **MUST NOT** change from occurrence to occurrence of the problem represented by the error code.
     */
    title: string;
}
/* These are the schema definitions stipulated by the Data Standards Body for the energy api. */

export interface Links {
    /**
     * Fully qualified link that generated the current response document.
     */
    self: string;
}
/* These are the schema definitions stipulated by the Data Standards Body for the energy api. */

export interface LinksPaginated {
    /**
     * URI to the first page of this set. Mandatory if this response is not the first page.
     */
    first?: string | null;
    /**
     * URI to the last page of this set. Mandatory if this response is not the last page.
     */
    last?: string | null;
    /**
     * URI to the next page of this set. Mandatory if this response is not the last page.
     */
    next?: string | null;
    /**
     * URI to the previous page of this set. Mandatory if this response is not the first page.
     */
    prev?: string | null;
    /**
     * Fully qualified link that generated the current response document.
     */
    self: string;
}
/* These are the schema definitions stipulated by the Data Standards Body for the energy api. */

export type MeasureUnitEnum = "KWH" | "KVA" | "KVAR" | "KVARH" | "KW" | "DAYS" | "METER" | "MONTH";
/* These are the schema definitions stipulated by the Data Standards Body for the energy api. */

export interface Meta {}
/* These are the schema definitions stipulated by the Data Standards Body for the energy api. */

export interface MetaPaginated {
    /**
     * The total number of pages in the full set. See [pagination](#pagination).
     */
    totalPages: number;
    /**
     * The total number of records in the full set. See [pagination](#pagination).
     */
    totalRecords: number;
}
/* These are the schema definitions stipulated by the Data Standards Body for the energy api. */

export type PrimaryErrorV1 = {
    /**
     * Indicates the error was propagated from a designated secondary data holder.
     */
    isSecondaryDataHolderError?: boolean;
} & ErrorV2;
/* These are the schema definitions stipulated by the Data Standards Body for the energy api. */

export interface PrimaryResponseErrorListV1 {
    /**
     * List of errors.
     */
    errors: PrimaryErrorV1[];
}
/* These are the schema definitions stipulated by the Data Standards Body for the energy api. */

export interface RequestAccountIdList {
    data: {
        /**
         * Array of specific _accountId_ values to obtain data for.
         */
        accountIds: string[];
    };
    meta?: Meta;
}
/* These are the schema definitions stipulated by the Data Standards Body for the energy api. */

export interface RequestAccountIdListV1 {
    data: {
        /**
         * Array of _accountId_ values to obtain data for.
         */
        accountIds: string[];
    };
    meta?: Meta;
}
/* These are the schema definitions stipulated by the Data Standards Body for the energy api. */

export interface RequestServicePointIdList {
    data: {
        /**
         * Array of specific _servicePointId_ values to obtain data for.
         */
        servicePointIds: string[];
    };
    meta?: Meta;
}
/* These are the schema definitions stipulated by the Data Standards Body for the energy api. */

export interface RequestServicePointIdListV1 {
    data: {
        /**
         * Array of _servicePointId_ values to obtain data for.
         */
        servicePointIds: string[];
    };
    meta?: Meta;
}
/* These are the schema definitions stipulated by the Data Standards Body for the energy api. */

export interface ResponseErrorListV2 {
    /**
     * List of errors.
     */
    errors: ErrorV2[];
}
