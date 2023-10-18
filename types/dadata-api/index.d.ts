export namespace DaDataApi {
    type Nullable<T> = T | null;
    interface Suggestion<T> {
        value: string;
        unrestricted_value: string;
        data: T;
    }
    interface AddressMetro {
        name: string;
        line: string;
        distance: number;
    }
    type AddressBeltwayHit = "IN_MKAD" | "OUT_MKAD" | "IN_KAD" | "OUT_KAD";

    interface Address {
        area: Nullable<string>;
        area_fias_id: Nullable<string>;
        area_kladr_id: Nullable<string>;
        area_type: Nullable<string>;
        area_type_full: Nullable<string>;
        area_with_type: Nullable<string>;
        beltway_distance: Nullable<string>;
        beltway_hit: Nullable<AddressBeltwayHit>;
        block: Nullable<string>;
        block_type: Nullable<string>;
        block_type_full: Nullable<string>;
        federal_district: Nullable<string>;
        capital_marker: "0" | "1" | "2" | "3" | "4";
        city: Nullable<string>;
        city_area: Nullable<string>;
        city_district: Nullable<string>;
        city_district_fias_id: Nullable<string>;
        city_district_kladr_id: Nullable<string>;
        city_district_type: Nullable<string>;
        city_district_type_full: Nullable<string>;
        city_district_with_type: Nullable<string>;
        city_fias_id: Nullable<string>;
        city_kladr_id: Nullable<string>;
        city_type: Nullable<string>;
        city_type_full: Nullable<string>;
        city_with_type: Nullable<string>;
        country: string;
        country_iso_code: string;
        fias_id: string;
        fias_level: string;
        flat: Nullable<string>;
        flat_area: Nullable<string>;
        flat_price: null;
        flat_type: Nullable<string>;
        flat_type_full: Nullable<string>;
        flat_fias_id?: Nullable<string>;
        flat_cadnum?: null;
        geo_lat: Nullable<string>;
        geo_lon: Nullable<string>;
        geoname_id: Nullable<string>;
        history_values: Nullable<string[]>;
        house: Nullable<string>;
        house_fias_id: Nullable<string>;
        house_kladr_id: Nullable<string>;
        house_type: Nullable<string>;
        house_type_full: Nullable<string>;
        house_cadnum?: null;
        entrance?: null;
        floor?: null;
        kladr_id: string;
        okato: Nullable<string>;
        oktmo: Nullable<string>;
        postal_box: Nullable<string>;
        postal_code: Nullable<string>;
        qc: null;
        qc_complete: null;
        qc_geo: Nullable<"0" | "1" | "2" | "3" | "4" | "5">;
        qc_house: null;
        region: string;
        region_fias_id: string;
        region_kladr_id: string;
        region_type: string;
        region_type_full: string;
        region_with_type: string;
        settlement: Nullable<string>;
        settlement_fias_id: Nullable<string>;
        settlement_kladr_id: Nullable<string>;
        settlement_type: Nullable<string>;
        settlement_type_full: Nullable<string>;
        settlement_with_type: Nullable<string>;
        source: Nullable<string>;
        square_meter_price?: Nullable<string>;
        street: Nullable<string>;
        street_fias_id: Nullable<string>;
        street_kladr_id: Nullable<string>;
        street_type: Nullable<string>;
        street_type_full: Nullable<string>;
        street_with_type: Nullable<string>;
        stead?: Nullable<string>;
        stead_fias_id?: Nullable<string>;
        stead_kladr_id?: Nullable<string>;
        stead_type?: Nullable<string>;
        stead_type_full?: Nullable<string>;
        stead_cadnum?: null;
        tax_office: Nullable<string>;
        tax_office_legal: Nullable<string>;
        timezone: Nullable<string>;
        unparsed_parts: null;
        fias_code: string;
        region_iso_code: string;
        fias_actuality_state: string;
        metro: Nullable<AddressMetro[]>;
        divisions?: unknown;
    }

    type AddressBounds = "country" | "region" | "area" | "city" | "settlement" | "street" | "houses";

    type PartyType = "LEGAL" | "INDIVIDUAL";

    type PartyBranchType = "MAIN" | "BRANCH";

    type PartyStatus = "ACTIVE" | "LIQUIDATING" | "LIQUIDATED" | "REORGANIZING" | "BANKRUPT";

    interface PartyAddress extends Omit<Address, "qc" | "house_cadnum" | "stead_kladr_id" | "floor" | "flat_price"> {
        qc: "0" | "1" | "3";
        house_cadnum: Nullable<string>;
        floor: Nullable<string>;
        flat_price: Nullable<string>;
    }

    interface Party {
        inn: string;
        kpp: string;
        ogrn: string;
        ogrn_date: number;
        hid: string;
        capital: Nullable<string>;
        type: PartyType;
        name: {
            full_with_opf: string;
            short_with_opf: string;
            latin: Nullable<string>;
            full: string;
            short: string;
        };
        okpo: Nullable<string>;
        okato: Nullable<string>;
        oktmo: Nullable<string>;
        okogu: Nullable<string>;
        okfs: Nullable<string>;
        okved: string;
        okved_type: string;
        okveds: Nullable<string[]>;
        authorities: null;
        documents: null;
        licenses: null;
        phones: null;
        emails: null;
        employee_count: Nullable<string>;
        finance: Nullable<{
            tax_system: Nullable<string>;
            income: Nullable<string>;
            expense: Nullable<string>;
            debt: Nullable<string>;
            penalty: Nullable<string>;
            year: Nullable<string>;
        }>;
        opf: {
            code: string;
            type: string;
            full: string;
            short: string;
        };
        management?: Nullable<{
            name: string;
            post: string;
            disqualified: Nullable<string>;
        }>;
        founders: Nullable<string[]>;
        managers: Nullable<string[]>;
        predecessors: Nullable<string[]>;
        successors: Nullable<string[]>;
        branch_count?: number;
        branch_type?: PartyBranchType;
        address: Suggestion<PartyAddress>;
        state: {
            actuality_date: number;
            registration_date: number;
            liquidation_date: Nullable<number>;
            status: PartyStatus;
            code: Nullable<string>;
        };
        source: null;
        qc: null;
    }

    type BankType = "BANK" | "BANK_BRANCH" | "NKO" | "NKO_BRANCH" | "RKC" | "OTHER";

    type BankStatus = "ACTIVE" | "LIQUIDATING" | "LIQUIDATED";

    interface DaDataBank {
        bic: string;
        swift: string;
        inn: string;
        kpp: string;
        registration_number: string;
        correspondent_account: string;
        name: {
            payment: string;
            full: null;
            short: string;
        };
        payment_city: string;
        opf: {
            type: BankType;
            full: null;
            short: null;
        };
        address: Suggestion<Address>;
        state: {
            actuality_date: number;
            registration_date: number;
            liquidation_date: Nullable<number>;
            status: BankStatus;
        };
        okpo: null;
        phone: number;
        rkc: number;
    }

    type Gender = "MALE" | "FEMALE" | "UNKNOWN";

    interface Fio {
        surname: Nullable<string>;
        name: Nullable<string>;
        patronymic: Nullable<string>;
        gender: Gender;
        qc: "0" | "1";
        source: null;
    }

    interface Email {
        local: Nullable<string>;
        domain: Nullable<string>;
        type: null;
        qc: null;
        source: null;
    }
}
