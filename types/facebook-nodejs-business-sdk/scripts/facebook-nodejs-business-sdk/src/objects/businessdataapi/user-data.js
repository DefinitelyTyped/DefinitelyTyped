/**
 * Copyright (c) 2017-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 * @flow
 */

/**
 * UserData represents the User Data Parameters(user_data) of a Business Data Event Request.
 */

export default class UserData {
    _email: string;
    _phone: string;
    _first_name: string;
    _last_name: string;
    _date_of_birth: string;
    _city: string;
    _state: string;
    _country: string;
    _zip: string;
    _external_id: string;
    _address: string;

    /**
     * @param {String} email An email address, in lowercase.
     * @param {String} phone A phone number. Include only digits with country code, area code, and number.
     * @param {String} first_name A first name in lowercase.
     * @param {String} last_name A last name in lowercase.
     * @param {String} date_of_birth A date of birth given as year, month, and day in YYYYMMDD format.
     * @param {String} city A city in lower-case without spaces or punctuation.
     * @param {String} state A two-letter state code in lowercase.
     * @param {String} country A two-letter country code in lowercase.
     * @param {String} zip Postal code of the city in your country standard.
     * @param {String} external_id Any unique ID from the business.
     * @param {String} address An physical address.
     */
    constructor(email: string, phone: string, first_name: string, last_name: string, date_of_birth: string,
        city: string, state: string, zip: string, country: string, external_id: string, address: string) {
        this._email = email;
        this._phone = phone;
        this._first_name = first_name;
        this._last_name = last_name;
        this._date_of_birth = date_of_birth;
        this._city = city;
        this._state = state;
        this._country = country;
        this._zip = zip;
        this._external_id = external_id;
        this._address = address;
    }

    /**
     * Gets the email address for the user data field.
     * An email address, in lowercase.
     * Example: joe@eg.com
     */
    get email(): string {
        return this._email;
    }

    /**
     * Sets the email address for the user data field.
     * @param email An email address, in lowercase.
     * Example: joe@eg.com
     */
    set email(email: string) {
        this._email = email;
    }

    /**
     * Sets the email address for the user data field.
     * @param {String} email An email address, in lowercase.
     * Example: joe@eg.com
     */
    setEmail(email: string): UserData {
        this._email = email;
        return this;
    }

    /**
     * Gets the phone number for the user data.
     * A phone number. Include only digits with country code, area code, and number.
     * Example: 16505551212
     */
    get phone(): string {
        return this._phone;
    }

    /**
     * Sets the phone number for the user data.
     * @param phone A phone number. Include only digits with country code, area code, and number.
     * Example: 16505551212
     */
    set phone(phone: string) {
        this._phone = phone;
    }

    /**
     * Sets the phone number for the user data.
     * @param {String} phone A phone number. Include only digits with country code, area code, and number.
     * Example: 16505551212
     */
    setPhone(phone: string): UserData {
        this._phone = phone;
        return this;
    }

    /**
     * Gets the date of birth for the user data.
     * A date of birth given as year, month, and day in the Format YYYYMMDD
     * Example: 19971226 for December 26, 1997.
     */
    get date_of_birth(): string {
        return this._date_of_birth;
    }

    /**
     * Sets the date of birth for the user data.
     * @param date_of_birth A date of birth given as year, month, and day in the Format YYYYMMDD
     * Example: 19971226 for December 26, 1997.
     */
    set date_of_birth(date_of_birth: string) {
        this._date_of_birth = date_of_birth;
    }

    /**
     * Sets the date of birth for the user data.
     * @param {String} date_of_birth A date of birth given as year, month, and day in the Format YYYYMMDD
     * Example: 19971226 for December 26, 1997.
     */
    setDateOfBirth(date_of_birth: string): UserData {
        this._date_of_birth = date_of_birth;
        return this;
    }

    /**
     * Gets the last name for the user data.
     * last_name is the last name in lowercase.
     * Example: smith
     */
    get last_name(): string {
        return this._last_name;
    }

    /**
     * Sets the last name for the user data.
     * @param last_name is last name in lowercase.
     * Example: smith
     */
    set last_name(last_name: string) {
        this._last_name = last_name;
    }

    /**
     * Sets the last name for the user data.
     * @param {String} last_name is last name in lowercase.
     * Example: smith
     */
    setLastName(last_name: string): UserData {
        this._last_name = last_name;
        return this;
    }

    /**
     * Gets the first name for the user data.
     * first_name is first name in lowercase.
     * Example: joe
     */
    get first_name(): string {
        return this._first_name;
    }

    /**
     * Sets the first name for the user data.
     * @param first_name is first name in lowercase.
     * Example: joe
     */
    set first_name(first_name: string) {
        this._first_name = first_name;
    }

    /**
     * Sets the first name for the user data.
     * @param {String} first_name is first name in lowercase.
     * Example: joe
     */
    setFirstName(first_name: string): UserData {
        this._first_name = first_name;
        return this;
    }

    /**
     * Gets the city for the user data.
     * city is city in lower-case without spaces or punctuation.
     * Example: menlopark
     */
    get city(): string {
        return this._city;
    }

    /**
     * Sets the city for the user data.
     * @param city is city in lower-case without spaces or punctuation.
     * Example: menlopark
     */
    set city(city: string) {
        this._city = city;
    }

    /**
     * Sets the city for the user data.
     * @param {String} city is city in lower-case without spaces or punctuation.
     * Example: menlopark
     */
    setCity(city: string): UserData {
        this._city = city;
        return this;
    }

    /**
     * Gets the zip/postal code for the user data.
     * zip is a five-digit zip code for United States.For other locations, follow each country's standards.
     * Example: 98121 (for United States zip code)
     */
    get zip(): string {
        return this._zip;
    }

    /**
     * Sets the zip/postal code for the user data.
     * @param zip is a five-digit zip code for United States.For other locations, follow each country's standards.
     * Example: 98121 (for United States zip code)
     */
    set zip(zip: string) {
        this._zip = zip;
    }

    /**
     * Sets the zip/postal code for the user data.
     * @param {String} zip is a five-digit zip code for United States.For other locations, follow each country's standards.
     * Example: 98121 (for United States zip code)
     */
    setZip(zip: string): UserData {
        this._zip = zip;
        return this;
    }

    /**
     * Gets the state for the user data.
     * state is state in lower-case without spaces or punctuation.
     * Example: ca
     */
    get state(): string {
        return this._state;
    }

    /**
     * Sets the state for the user data.
     * @param state is state in lower-case without spaces or punctuation.
     * Example: ca
     */
    set state(state: string) {
        this._state = state;
    }

    /**
     * Sets the state for the user data.
     * @param {String} state is state in lower-case without spaces or punctuation.
     * Example: ca
     */
    setState(state: string): UserData {
        this._state = state;
        return this;
    }

    /**
     * Gets the country for the user data.
     * country is A two-letter country code in lowercase.
     * Example: usa
     */
    get country(): string {
        return this._country;
    }

    /**
     * Sets the country for the user data.
     * @param country is A two-letter country code in lowercase.
     * Example: usa
     */
    set country(country: string) {
        this._country = country;
    }

    /**
     * Sets the country for the user data.
     * @param {String} country is A two-letter country code in lowercase.
     * Example: usa
     */
    setCountry(country: string): UserData {
        this._country = country;
        return this;
    }

    /**
     * Gets the external id for the user data.
     * external_id is a unique ID from the business, such as loyalty membership IDs, user IDs, and external cookie IDs.
     */
    get external_id(): string {
        return this._external_id;
    }

    /**
     * Sets the external id for the user data.
     * @param external_id is a unique ID from the business, such as loyalty membership IDs, user IDs, and external cookie IDs.
     */
    set external_id(external_id: string) {
        this._external_id = external_id;
    }

    /**
     * Sets the external id for the user data.
     * @param {String} external_id is a unique ID from the business, such as loyalty membership IDs, user IDs, and external cookie IDs.
     */
    setExternalId(external_id: string): UserData {
        this._external_id = external_id;
        return this;
    }

    /**
     * Gets the address for the user data.
     * address is a physical address
     */
    get address(): string {
        return this._address;
    }

    /**
     * Sets the address for the user data.
     * @param address is a physical address
     */
    set address(address: string) {
        this._address = address;
    }

    /**
     * Sets the address for the user data.
     * @param {String} address is a physical address
     */
    setAddress(address: string) {
        this._address = address;
    }

    /**
     * Convert to Json object for api call
     */
    toJson(): Object {
        return {
            'em': this._email,
            'ph': this._phone,
            'fn': this._first_name,
            'ln': this._last_name,
            'db': this._date_of_birth,
            'ct': this._city,
            'st': this._state,
            'country': this._country,
            'zp': this._zip,
            'external_id': this._external_id,
            'addr': this._address,
        }
    }
}
