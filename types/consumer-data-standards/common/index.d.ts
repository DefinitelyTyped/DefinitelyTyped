import { AddressPurposeType, IndustryCodeVersionType, OccupationCodeVersionType, OrganisationType, PhoneNumberType } from "./enums";

declare namespace CdsCommon {

    interface CommonEmailAddress {
        isPreferred?: boolean;
        purpose: string;
        address: string;
    }
    interface CommonOrganisation {
        lastUpdateTime?: string;
        agentFirstName?: string;
        agentLastName: string;
        agentRole: string;
        businessName: string;
        legalName?: string;
        shortName?: string;
        abn?: string;
        acn?: string;
        isACNCRegistered?: boolean | null;
        industryCode?: string | null;
        industryCodeVersion?: IndustryCodeVersionType;
        organisationType: OrganisationType;
        registeredCountry?: string;
        establishmentDate?: string;
    }
    interface CommonOrganisationDetail extends CommonOrganisation {
        physicalAddresses: CommonPhysicalAddressWithPurpose[] | null;
    }
    interface CommonPAFAddress {
        dpid?: string;
        thoroughfareNumber1?: number;
        thoroughfareNumber1Suffix?: string;
        thoroughfareNumber2?: number;
        thoroughfareNumber2Suffix?: string;
        flatUnitType?: string;
        flatUnitNumber?: string;
        floorLevelType?: string;
        floorLevelNumber?: string;
        lotNumber?: string;
        buildingName1?: string;
        buildingName2?: string;
        streetName?: string;
        streetType?: string;
        streetSuffix?: string;
        postalDeliveryType?: string;
        postalDeliveryNumber?: number;
        postalDeliveryNumberPrefix?: string;
        postalDeliveryNumberSuffix?: string;
        localityName: string;
        postcode: string;
        state: string;
    }
    interface CommonPerson {
        lastUpdateTime?: string;
        firstName?: string;
        lastName: string;
        middleNames: string[] | null;
        prefix?: string;
        suffix?: string;
        occupationCode?: string;
        occupationCodeVersion?: OccupationCodeVersionType;
    }
    interface CommonPersonDetail extends CommonPerson {
        phoneNumbers: CommonPhoneNumber[] | null;
        emailAddresses: CommonEmailAddress[] | null;
        physicalAddresses: CommonPhysicalAddressWithPurpose[] | null;
    }
    interface CommonPhoneNumber {
        isPreferred?: boolean;
        purpose: PhoneNumberType;
        countryCode?: string;
        areaCode?: string;
        number: string;
        extension?: string;
        fullNumber: string;
    }

    interface CommonPhysicalAddress {
        addressUType: string;
        simple?: CommonSimpleAddress;
        paf?: CommonPAFAddress;
    }
    interface CommonPhysicalAddress {
        addressUType: string;
        simple?: CommonSimpleAddress;
        paf?: CommonPAFAddress;
    }
    interface CommonPhysicalAddressWithPurpose extends CommonPhysicalAddress {
        purpose: AddressPurposeType;
    }
    interface CommonSimpleAddress {
        mailingName?: string;
        addressLine1: string;
        addressLine2: string;
        addressLine3: string;
        postcode?: string;
        city: string;
        state: string;
        country?: string;
    }
    interface DiscoveryOutage {
        outageTime: string;
        duration: string;
        isPartial?: boolean;
        explanation: string;
    }
    interface Meta {
    }

    interface MetaError {
        urn?: string;
    }


    interface MetaPaginated {
        totalRecords: number;
        totalPages: number;
    }


    interface Links {
        self: string;
    }

    interface LinksPaginated {
        self: string;
        first?: string;
        prev?: string;
        next?: string;
        last?: string;
    }
}

export = CdsCommon;