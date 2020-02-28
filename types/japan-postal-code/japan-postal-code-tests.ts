import JapanPostalCode from "japan-postal-code";

JapanPostalCode.get('1000001', (addressData: JapanPostalCode.AddressData) => {
  console.log(addressData.prefecture);
  console.log(addressData.city);
  console.log(addressData.area);
  console.log(addressData.street);
});
