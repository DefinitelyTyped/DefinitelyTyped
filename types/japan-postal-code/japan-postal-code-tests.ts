import postal_code = require("japan-postal-code");
import { AddressData, get } from "japan-postal-code";

postal_code.get("1000001", (address: AddressData) => {
    address.prefecture; // $ExpectType string
    address.city; // $ExpectType string
    address.area; // $ExpectType string
    address.street; // $ExpectType string
});
get("1000001", (address: AddressData) => {
    address.prefecture; // $ExpectType string
    address.city; // $ExpectType string
    address.area; // $ExpectType string
    address.street; // $ExpectType string
});
