import { CommonOrganisation, CommonOrganisationDetail, CommonPerson, CommonPersonDetail, DiscoveryOutage, Links, Meta } from ".";
import { CustomerUType, DiscoveryStatusType } from "./enums";

declare namespace CdsCommonHttpResponse {
    interface ResponseCommonCustomer {
        data: ResponseCommonCustomer;
        links: Links;
        meta?: Meta;
    }
    interface ResponseCommonCustomer {
        customerUType: CustomerUType;
        person?: CommonPerson;
        organisation?: CommonOrganisation;
    }
    interface ResponseCommonCustomerDetail {
        data: ResponseCommonCustomerDetail;
        links: Links;
        meta?: Meta;
    }

    interface ResponseCommonCustomerDetail {
        customerUType: CustomerUType;
        person: CommonPersonDetail;
        organisation: CommonOrganisationDetail;
    }
    interface ResponseCommonDiscoveryStatus {
        data: ResponseCommonDiscoveryStatusData;
        links: Links;
        meta?: Meta;
    }
    interface ResponseCommonDiscoveryStatusData {
        status: DiscoveryStatusType;
        explanation?: string;
        detectionTime?: string;
        expectedResolutionTime?: string;
        updateTime: string;
    }
    interface ResponseDiscoveryOutagesList {
        data: ResponseDiscoveryOutagesList;
        links: Links;
        meta?: Meta;
    }
    interface ResponseDiscoveryOutagesList {
        outages: DiscoveryOutage[] | null;
    }

    interface ResponseErrorListV2 {
        errors?: ErrorsEntity[] | null;
    }

    interface ErrorsEntity {
        code: string;
        title: string;
        detail: string;
        meta?: Meta;
    }

}

export = CdsCommonHttpResponse;