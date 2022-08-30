import { Settings } from './Settings';

export interface CurrencyConvertParams {
    currencies: Array<{ from: string; to: string }>;
}

export type DataType =
    | 'AccountingReferenceType'
    | 'AccountingRemarkType'
    | 'Airport'
    | 'AirAndRailMiscType'
    | 'AirAndRailSupplierType'
    | 'BusinessType'
    | 'Carrier'
    | 'City'
    | 'CityAirport'
    | 'Country'
    | 'Currency'
    | 'EmailType'
    | 'Equipment'
    | 'FulfillmentType'
    | 'GeoPoliticalArea'
    | 'HotelAmenities'
    | 'HotelMealPlans'
    | 'HotelMiscType'
    | 'HotelRateCategory'
    | 'HotelRoomViewType'
    | 'HotelSupplierType'
    | 'HotelTaxType'
    | 'TRMLocation'
    | 'MerchandisingOfferType'
    | 'PassengerTypeCode'
    | 'PaymentFormatType'
    | 'PaymentType'
    | 'PosChannel'
    | 'PersonGenderType'
    | 'ReferencePointSearch'
    | 'ResourceCategoryType'
    | 'RoleCategoryType'
    | 'SsrType'
    | 'State'
    | 'StateProvince'
    | 'SupplierType'
    | 'TaxCategory'
    | 'Title'
    | 'VehicleMiscType'
    | 'VehicleSpecialEquipment'
    | 'VehicleSupplierType';

export interface ReferenceDataParams {
    dataType: DataType;
    TraceId: string;
}

export function createUtilsService(settings: Settings): {
    currencyConvert: (params: CurrencyConvertParams) => Promise<any>;
    referenceData: (params: ReferenceDataParams) => Promise<any>;
};
