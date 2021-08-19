export interface CommonPAFAddress {
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
