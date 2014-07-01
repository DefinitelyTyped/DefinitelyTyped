// Type definitions for Dojo v1.9
// Project: http://dojotoolkit.org
// Definitions by: Michael Van Sickle <https://github.com/vansimke>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

declare module dojox {

    /**
     * Permalink: http://dojotoolkit.org/api/1.9/dojox/validate.html
     *
     * Deprecated.  Should require dojox/validate modules directly rather than trying to access them through
     * this module.
     * 
     */
    interface validate {
    }
    module validate {
        /**
         * Permalink: http://dojotoolkit.org/api/1.9/dojox/validate/_base.html
         *
         * 
         */
        interface _base {
            /**
             * validates user input of an HTML form based on input profile
             * returns an object that contains several methods summarizing the results of the validation
             * 
             * @param form form to be validated             
             * @param profile specifies how the form fields are to be validated{trim:Array, uppercase:Array, lowercase:Array, ucfirst:Array, digit:Array,required:Array, dependencies:Object, constraints:Object, confirm:Object}             
             */
            check(form: HTMLFormElement, profile: Object): void;
            /**
             * Generate the DV code (checksum part) for a Cnpj number
             * 
             * @param value The CGC number in ##.###.###/#### or ############ format             
             */
            computeCnpjDv(value: String): void;
            /**
             * Generate the DV code (checksum part) for a CPF number
             * 
             * @param value The CPF number in ######### format             
             */
            computeCpfDv(value: String): void;
            /**
             * Evaluates dojo.validate.check() constraints that are specified as array
             * arguments
             * The arrays are expected to be in the format of:
             * 
             * constraints:{
             *         fieldName: [functionToCall, param1, param2, etc.],
             *         fieldName: [[functionToCallFirst, param1],[functionToCallSecond,param2]]
             * }
             * This function evaluates a single array function in the format of:
             * [functionName, argument1, argument2, etc]
             * 
             * The function will be parsed out and evaluated against the incoming parameters.
             * 
             * @param profile The dojo.validate.check() profile that this evaluation is against.             
             * @param constraint The single [] array of function and arguments for the function.             
             * @param fieldName The form dom name of the field being validated.             
             * @param elem The form element field.             
             */
            evaluateConstraint(profile: any, constraint: any[], fieldName: any, elem: any): void;
            /**
             * Check if value is an email address list. If an empty list
             * is returned, the value didn't pass the test or it was empty.
             * 
             * @param value             
             * @param flags               OptionalAn object (same as dojo.validate.isEmailAddressList)             
             */
            getEmailAddressList(value: String, flags: Object): void;
            /**
             * Checks if a string could be a valid email address
             * 
             * @param value             
             * @param flags               Optionalflags.allowCruft  Allow address like <mailto:foo@yahoo.com>.  Default is false.flags in regexp.host can be applied.flags in regexp.ipAddress can be applied.flags in regexp.tld can be applied.             
             */
            isEmailAddress(value: String, flags: Object): void;
            /**
             * Checks if a string could be a valid email address list.
             * 
             * @param value             
             * @param flags               Optionalflags.listSeparator  The character used to separate email addresses.  Default is ";", ",", "\n" or " ".flags in regexp.emailAddress can be applied.flags in regexp.host can be applied.flags in regexp.ipAddress can be applied.flags in regexp.tld can be applied.             
             */
            isEmailAddressList(value: String, flags: Object): void;
            /**
             * Validates whether a string denoting a number
             * is between a max and min.
             * 
             * @param value             
             * @param flags               Optional{max:Number, min:Number, decimal:String}flags.max  A number, which the value must be less than or equal to for the validation to be true.flags.min  A number, which the value must be greater than or equal to for the validation to be true.flags.decimal  The character used for the decimal point.  Default is ".".             
             */
            isInRange(value: String, flags: Object): void;
            /**
             * Validates an IP address
             * Supports 5 formats for IPv4: dotted decimal, dotted hex, dotted octal, decimal and hexadecimal.
             * Supports 2 formats for Ipv6.
             * 
             * @param value             
             * @param flags               OptionalAll flags are boolean with default = true.flags.allowDottedDecimal  Example, 207.142.131.235.  No zero padding.flags.allowDottedHex  Example, 0x18.0x11.0x9b.0x28.  Case insensitive.  Zero padding allowed.flags.allowDottedOctal  Example, 0030.0021.0233.0050.  Zero padding allowed.flags.allowDecimal  Example, 3482223595.  A decimal number between 0-4294967295.flags.allowHex  Example, 0xCF8E83EB.  Hexadecimal number between 0x0-0xFFFFFFFF.Case insensitive.  Zero padding allowed.flags.allowIPv6   IPv6 address written as eight groups of four hexadecimal digits.flags.allowHybrid   IPv6 address written as six groups of four hexadecimal digitsfollowed by the usual 4 dotted decimal digit notation of IPv4. x:x:x:x:x:x:d.d.d.d             
             */
            isIpAddress(value: String, flags: Object): void;
            /**
             * Validates any sort of number based format
             * Validates any sort of number based format. Use it for phone numbers,
             * social security numbers, zip-codes, etc. The value can be validated
             * against one format or one of multiple formats.
             * 
             * Format Definition
             * 
             * #        Stands for a digit, 0-9.
             * ?        Stands for an optional digit, 0-9 or nothing.
             * All other characters must appear literally in the expression.
             * 
             * @param value             
             * @param flags               Optionalflags.format  A string or an Array of strings for multiple formats.             
             */
            isNumberFormat(value: String, flags: Object): any;
            /**
             * Validates 10 US digit phone number for several common formats
             * 
             * @param value The telephone number string             
             */
            isPhoneNumber(value: String): boolean;
            /**
             * Validates social security number
             * 
             * @param value             
             */
            isSocialSecurityNumber(value: String): void;
            /**
             * Validates US state and territory abbreviations.
             * 
             * @param value A two character string             
             * @param flags               Optionalflags.allowTerritories  Allow Guam, Puerto Rico, etc.  Default is true.flags.allowMilitary  Allow military 'states', e.g. Armed Forces Europe (AE).  Default is true.             
             */
            isState(value: String, flags: Object): void;
            /**
             * Checks if a string has non whitespace characters.
             * Parameters allow you to constrain the length.
             * 
             * @param value             
             * @param flags               Optional{length: Number, minlength: Number, maxlength: Number}flags.length  If set, checks if there are exactly flags.length number of characters.flags.minlength  If set, checks if there are at least flags.minlength number of characters.flags.maxlength  If set, checks if there are at most flags.maxlength number of characters.             
             */
            isText(value: String, flags: Object): void;
            /**
             * Checks if a string could be a valid URL
             * 
             * @param value             
             * @param flags               Optionalflags.scheme  Can be true, false, or [true, false].This means: required, not allowed, or either.flags in regexp.host can be applied.flags in regexp.ipAddress can be applied.flags in regexp.tld can be applied.             
             */
            isUrl(value: String, flags: Object): void;
            /**
             * Validates a CNPJ/CGC number
             * 
             * @param value The CNPJ/CGC number in ##.###.###/####-##, ########/####-##,######-## or ############## format             
             */
            isValidCnpj(value: String): void;
            /**
             * Validates a CPF number
             * 
             * @param value The CPF number in #########-## or ###########,format             
             */
            isValidCpf(value: String): void;
            /**
             * Validate a credit card number by type with Luhn checking.
             * Checks if a credit card type matches the # scheme in a passed value, and if
             * the Luhn checksum is accurate (unless its an Enroute card, in which case
             * the checkSum is skipped), returning a Boolean to check against.
             * 
             * @param value A Value (credit card number) to validate             
             * @param ccType A credit-card abbreviation.             
             */
            isValidCreditCard(value: String, ccType: String): void;
            /**
             * Validate a credit card number by type with Luhn checking.
             * Checks if a credit card type matches the # scheme in a passed value, and if
             * the Luhn checksum is accurate (unless its an Enroute card, in which case
             * the checkSum is skipped), returning a Boolean to check against.
             * 
             * @param value A Value (credit card number) to validate             
             * @param ccType A credit-card abbreviation.             
             */
            isValidCreditCard(value: number, ccType: String): void;
            /**
             * Checks if value matches the pattern for that card or any card types if none is specified
             * 
             * @param value CC #, white spaces and dashes are ignored             
             * @param ccType               OptionalOne of the abbreviation values in dojox.validate._cardInfo --if Omitted, function returns a | delimited string of matching card types,or false if no matches found.             
             */
            isValidCreditCardNumber(value: String, ccType: String): void;
            /**
             * Checks if value matches the pattern for that card or any card types if none is specified
             * 
             * @param value CC #, white spaces and dashes are ignored             
             * @param ccType               OptionalOne of the abbreviation values in dojox.validate._cardInfo --if Omitted, function returns a | delimited string of matching card types,or false if no matches found.             
             */
            isValidCreditCardNumber(value: number, ccType: String): void;
            /**
             * Validate the security code (CCV) for a passed credit-card type.
             * 
             * @param value             
             * @param ccType             
             */
            isValidCvv(value: String, ccType: String): void;
            /**
             * Validate the security code (CCV) for a passed credit-card type.
             * 
             * @param value             
             * @param ccType             
             */
            isValidCvv(value: number, ccType: String): void;
            /**
             * Validate ISBN-10 or ISBN-13 based on the length of value
             * 
             * @param value An ISBN to validate             
             */
            isValidIsbn(value: String): boolean;
            /**
             * Validate a String value against the Luhn algorithm.
             * Validate a String value against the Luhn algorithm to verify
             * its integrity.
             * 
             * @param value             
             */
            isValidLuhn(value: String): void;
            /**
             * Validates U.S. zip-code
             * 
             * @param value             
             */
            isZipCode(value: String): void;
        }
        module _base {
            /**
             * Permalink: http://dojotoolkit.org/api/1.9/dojox/validate/_base._cardInfo.html
             *
             * A dictionary list of credit card abbreviations
             * A hash of valid CC abbreviations and regular expressions
             * 
             * mc: Mastercard
             * ec: Eurocard
             * vi: Visa
             * ax: American Express
             * dc: Diners Club
             * bl: Carte Blanch
             * di: Discover
             * jcb: JCB
             * er: Enroute
             * 
             */
            interface _cardInfo {
                /**
                 * 
                 */
                ax: string;
                /**
                 * 
                 */
                bl: string;
                /**
                 * 
                 */
                dc: string;
                /**
                 * 
                 */
                di: string;
                /**
                 * 
                 */
                ec: string;
                /**
                 * 
                 */
                er: string;
                /**
                 * 
                 */
                jcb: string;
                /**
                 * 
                 */
                mc: string;
                /**
                 * 
                 */
                vi: string;
            }
            /**
             * Permalink: http://dojotoolkit.org/api/1.9/dojox/validate/_base._isInRangeCache.html
             *
             * 
             */
            interface _isInRangeCache {
            }
        }

        /**
         * Permalink: http://dojotoolkit.org/api/1.9/dojox/validate/br.html
         *
         * 
         */
        interface br {
            /**
             * validates user input of an HTML form based on input profile
             * returns an object that contains several methods summarizing the results of the validation
             * 
             * @param form form to be validated             
             * @param profile specifies how the form fields are to be validated{trim:Array, uppercase:Array, lowercase:Array, ucfirst:Array, digit:Array,required:Array, dependencies:Object, constraints:Object, confirm:Object}             
             */
            check(form: HTMLFormElement, profile: Object): void;
            /**
             * Generate the DV code (checksum part) for a Cnpj number
             * 
             * @param value The CGC number in ##.###.###/#### or ############ format             
             */
            computeCnpjDv(value: String): void;
            /**
             * Generate the DV code (checksum part) for a CPF number
             * 
             * @param value The CPF number in ######### format             
             */
            computeCpfDv(value: String): void;
            /**
             * Evaluates dojo.validate.check() constraints that are specified as array
             * arguments
             * The arrays are expected to be in the format of:
             * 
             * constraints:{
             *         fieldName: [functionToCall, param1, param2, etc.],
             *         fieldName: [[functionToCallFirst, param1],[functionToCallSecond,param2]]
             * }
             * This function evaluates a single array function in the format of:
             * [functionName, argument1, argument2, etc]
             * 
             * The function will be parsed out and evaluated against the incoming parameters.
             * 
             * @param profile The dojo.validate.check() profile that this evaluation is against.             
             * @param constraint The single [] array of function and arguments for the function.             
             * @param fieldName The form dom name of the field being validated.             
             * @param elem The form element field.             
             */
            evaluateConstraint(profile: any, constraint: any[], fieldName: any, elem: any): void;
            /**
             * Check if value is an email address list. If an empty list
             * is returned, the value didn't pass the test or it was empty.
             * 
             * @param value             
             * @param flags               OptionalAn object (same as dojo.validate.isEmailAddressList)             
             */
            getEmailAddressList(value: String, flags: Object): void;
            /**
             * Checks if a string could be a valid email address
             * 
             * @param value             
             * @param flags               Optionalflags.allowCruft  Allow address like <mailto:foo@yahoo.com>.  Default is false.flags in regexp.host can be applied.flags in regexp.ipAddress can be applied.flags in regexp.tld can be applied.             
             */
            isEmailAddress(value: String, flags: Object): void;
            /**
             * Checks if a string could be a valid email address list.
             * 
             * @param value             
             * @param flags               Optionalflags.listSeparator  The character used to separate email addresses.  Default is ";", ",", "\n" or " ".flags in regexp.emailAddress can be applied.flags in regexp.host can be applied.flags in regexp.ipAddress can be applied.flags in regexp.tld can be applied.             
             */
            isEmailAddressList(value: String, flags: Object): void;
            /**
             * Validates whether a string denoting a number
             * is between a max and min.
             * 
             * @param value             
             * @param flags               Optional{max:Number, min:Number, decimal:String}flags.max  A number, which the value must be less than or equal to for the validation to be true.flags.min  A number, which the value must be greater than or equal to for the validation to be true.flags.decimal  The character used for the decimal point.  Default is ".".             
             */
            isInRange(value: String, flags: Object): void;
            /**
             * Validates an IP address
             * Supports 5 formats for IPv4: dotted decimal, dotted hex, dotted octal, decimal and hexadecimal.
             * Supports 2 formats for Ipv6.
             * 
             * @param value             
             * @param flags               OptionalAll flags are boolean with default = true.flags.allowDottedDecimal  Example, 207.142.131.235.  No zero padding.flags.allowDottedHex  Example, 0x18.0x11.0x9b.0x28.  Case insensitive.  Zero padding allowed.flags.allowDottedOctal  Example, 0030.0021.0233.0050.  Zero padding allowed.flags.allowDecimal  Example, 3482223595.  A decimal number between 0-4294967295.flags.allowHex  Example, 0xCF8E83EB.  Hexadecimal number between 0x0-0xFFFFFFFF.Case insensitive.  Zero padding allowed.flags.allowIPv6   IPv6 address written as eight groups of four hexadecimal digits.flags.allowHybrid   IPv6 address written as six groups of four hexadecimal digitsfollowed by the usual 4 dotted decimal digit notation of IPv4. x:x:x:x:x:x:d.d.d.d             
             */
            isIpAddress(value: String, flags: Object): void;
            /**
             * Validates any sort of number based format
             * Validates any sort of number based format. Use it for phone numbers,
             * social security numbers, zip-codes, etc. The value can be validated
             * against one format or one of multiple formats.
             * 
             * Format Definition
             * 
             * #        Stands for a digit, 0-9.
             * ?        Stands for an optional digit, 0-9 or nothing.
             * All other characters must appear literally in the expression.
             * 
             * @param value             
             * @param flags               Optionalflags.format  A string or an Array of strings for multiple formats.             
             */
            isNumberFormat(value: String, flags: Object): any;
            /**
             * Validates 10 US digit phone number for several common formats
             * 
             * @param value The telephone number string             
             */
            isPhoneNumber(value: String): boolean;
            /**
             * Validates social security number
             * 
             * @param value             
             */
            isSocialSecurityNumber(value: String): void;
            /**
             * Validates US state and territory abbreviations.
             * 
             * @param value A two character string             
             * @param flags               Optionalflags.allowTerritories  Allow Guam, Puerto Rico, etc.  Default is true.flags.allowMilitary  Allow military 'states', e.g. Armed Forces Europe (AE).  Default is true.             
             */
            isState(value: String, flags: Object): void;
            /**
             * Checks if a string has non whitespace characters.
             * Parameters allow you to constrain the length.
             * 
             * @param value             
             * @param flags               Optional{length: Number, minlength: Number, maxlength: Number}flags.length  If set, checks if there are exactly flags.length number of characters.flags.minlength  If set, checks if there are at least flags.minlength number of characters.flags.maxlength  If set, checks if there are at most flags.maxlength number of characters.             
             */
            isText(value: String, flags: Object): void;
            /**
             * Checks if a string could be a valid URL
             * 
             * @param value             
             * @param flags               Optionalflags.scheme  Can be true, false, or [true, false].This means: required, not allowed, or either.flags in regexp.host can be applied.flags in regexp.ipAddress can be applied.flags in regexp.tld can be applied.             
             */
            isUrl(value: String, flags: Object): void;
            /**
             * Validates a CNPJ/CGC number
             * 
             * @param value The CNPJ/CGC number in ##.###.###/####-##, ########/####-##,######-## or ############## format             
             */
            isValidCnpj(value: String): void;
            /**
             * Validates a CPF number
             * 
             * @param value The CPF number in #########-## or ###########,format             
             */
            isValidCpf(value: String): void;
            /**
             * Validate a credit card number by type with Luhn checking.
             * Checks if a credit card type matches the # scheme in a passed value, and if
             * the Luhn checksum is accurate (unless its an Enroute card, in which case
             * the checkSum is skipped), returning a Boolean to check against.
             * 
             * @param value A Value (credit card number) to validate             
             * @param ccType A credit-card abbreviation.             
             */
            isValidCreditCard(value: String, ccType: String): void;
            /**
             * Validate a credit card number by type with Luhn checking.
             * Checks if a credit card type matches the # scheme in a passed value, and if
             * the Luhn checksum is accurate (unless its an Enroute card, in which case
             * the checkSum is skipped), returning a Boolean to check against.
             * 
             * @param value A Value (credit card number) to validate             
             * @param ccType A credit-card abbreviation.             
             */
            isValidCreditCard(value: number, ccType: String): void;
            /**
             * Checks if value matches the pattern for that card or any card types if none is specified
             * 
             * @param value CC #, white spaces and dashes are ignored             
             * @param ccType               OptionalOne of the abbreviation values in dojox.validate._cardInfo --if Omitted, function returns a | delimited string of matching card types,or false if no matches found.             
             */
            isValidCreditCardNumber(value: String, ccType: String): void;
            /**
             * Checks if value matches the pattern for that card or any card types if none is specified
             * 
             * @param value CC #, white spaces and dashes are ignored             
             * @param ccType               OptionalOne of the abbreviation values in dojox.validate._cardInfo --if Omitted, function returns a | delimited string of matching card types,or false if no matches found.             
             */
            isValidCreditCardNumber(value: number, ccType: String): void;
            /**
             * Validate the security code (CCV) for a passed credit-card type.
             * 
             * @param value             
             * @param ccType             
             */
            isValidCvv(value: String, ccType: String): void;
            /**
             * Validate the security code (CCV) for a passed credit-card type.
             * 
             * @param value             
             * @param ccType             
             */
            isValidCvv(value: number, ccType: String): void;
            /**
             * Validate ISBN-10 or ISBN-13 based on the length of value
             * 
             * @param value An ISBN to validate             
             */
            isValidIsbn(value: String): boolean;
            /**
             * Validate a String value against the Luhn algorithm.
             * Validate a String value against the Luhn algorithm to verify
             * its integrity.
             * 
             * @param value             
             */
            isValidLuhn(value: String): void;
            /**
             * Validates U.S. zip-code
             * 
             * @param value             
             */
            isZipCode(value: String): void;
        }
        module br {
            /**
             * Permalink: http://dojotoolkit.org/api/1.9/dojox/validate/br._cardInfo.html
             *
             * A dictionary list of credit card abbreviations
             * A hash of valid CC abbreviations and regular expressions
             * 
             * mc: Mastercard
             * ec: Eurocard
             * vi: Visa
             * ax: American Express
             * dc: Diners Club
             * bl: Carte Blanch
             * di: Discover
             * jcb: JCB
             * er: Enroute
             * 
             */
            interface _cardInfo {
                /**
                 * 
                 */
                ax: string;
                /**
                 * 
                 */
                bl: string;
                /**
                 * 
                 */
                dc: string;
                /**
                 * 
                 */
                di: string;
                /**
                 * 
                 */
                ec: string;
                /**
                 * 
                 */
                er: string;
                /**
                 * 
                 */
                jcb: string;
                /**
                 * 
                 */
                mc: string;
                /**
                 * 
                 */
                vi: string;
            }
            /**
             * Permalink: http://dojotoolkit.org/api/1.9/dojox/validate/br._isInRangeCache.html
             *
             * 
             */
            interface _isInRangeCache {
            }
        }

        /**
         * Permalink: http://dojotoolkit.org/api/1.9/dojox/validate/ca.html
         *
         * Module which includes Canadian-specific methods for dojox.validate
         * 
         */
        interface ca {
            /**
             * Validates Canadian 10-digit phone number for several common formats
             * 
             * @param value             
             */
            isPhoneNumber(value: String): any;
            /**
             * Validates Canadian 6 digit postal code
             * Validates Canadian 6 digit postal code.
             * Canadian postal codes are in the format ANA NAN,
             * where A is a letter and N is a digit, with a space
             * separating the third and fourth characters.
             * 
             * @param value             
             */
            isPostalCode(value: any): any;
            /**
             * Validates Canadian province abbreviations (2 characters)
             * 
             * @param value             
             */
            isProvince(value: String): any;
            /**
             * Validates Canadian 9 digit social insurance number for several
             * common formats
             * Validates Canadian 9 digit social insurance number for several
             * common formats. This routine only pattern matches and does not
             * use the Luhn Algorithm to validate number.
             * 
             * @param value             
             */
            isSocialInsuranceNumber(value: String): any;
        }
        /**
         * Permalink: http://dojotoolkit.org/api/1.9/dojox/validate/creditCard.html
         *
         * Module provides validation functions for Credit Cards, using account number
         * rules in conjunction with the Luhn algorigthm, with a pluggable card info database.
         * 
         */
        interface creditCard {
        }
        /**
         * Permalink: http://dojotoolkit.org/api/1.9/dojox/validate/regexp.html
         *
         * 
         */
        interface regexp {
            /**
             * 
             */
            ca: Object;
            /**
             * 
             */
            us: Object;
            /**
             * Builds a regular expression that matches an email address
             * 
             * @param flags               Optionalflags.allowCruft  Allow address like <mailto:foo@yahoo.com>.  Default is false.flags in regexp.host can be applied.flags in regexp.ipAddress can be applied.             
             */
            emailAddress(flags: Object): String;
            /**
             * Builds a regular expression that matches a list of email addresses.
             * 
             * @param flags               Optionalflags.listSeparator  The character used to separate email addresses.  Default is ";", ",", "\n" or " ".flags in regexp.emailAddress can be applied.flags in regexp.host can be applied.flags in regexp.ipAddress can be applied.             
             */
            emailAddressList(flags: Object): String;
            /**
             * Builds a RE that matches a host
             * A host is a named host (A-z0-9_- but not starting with -), a domain name or an IP address, possibly followed by a port number.
             * 
             * @param flags               Optionalflags.allowNamed Allow a named host for local networks. Default is false.flags.allowIP  Allow an IP address for hostname.  Default is true.flags.allowLocal  Allow the host to be "localhost".  Default is false.flags.allowPort  Allow a port number to be present.  Default is true.flags in regexp.ipAddress can be applied.             
             */
            host(flags: Object): String;
            /**
             * Builds a RE that matches an IP Address
             * Supports 5 formats for IPv4: dotted decimal, dotted hex, dotted octal, decimal and hexadecimal.
             * Supports 2 formats for Ipv6.
             * 
             * @param flags               OptionalAll flags are boolean with default = true.flags.allowDottedDecimal  Example, 207.142.131.235.  No zero padding.flags.allowDottedHex  Example, 0x18.0x11.0x9b.0x28.  Case insensitive.  Zero padding allowed.flags.allowDottedOctal  Example, 0030.0021.0233.0050.  Zero padding allowed.flags.allowDecimal  Example, 3482223595.  A decimal number between 0-4294967295.flags.allowHex  Example, 0xCF8E83EB.  Hexadecimal number between 0x0-0xFFFFFFFF.Case insensitive.  Zero padding allowed.flags.allowIPv6   IPv6 address written as eight groups of four hexadecimal digits.             
             */
            ipAddress(flags: Object): String;
            /**
             * Builds a regular expression to match any sort of number based format
             * Use this method for phone numbers, social security numbers, zip-codes, etc.
             * The RE can match one format or one of multiple formats.
             * 
             * Format:
             * 
             * Stands for a digit, 0-9.
             * ?        Stands for an optional digit, 0-9 or nothing.
             * All other characters must appear literally in the expression.
             * 
             * @param flags               Optionalflags.format  A string or an Array of strings for multiple formats.             
             */
            numberFormat(flags: Object): any;
            /**
             * Builds a regular expression that matches a URL
             * 
             * @param flags               Optionalflags.scheme  Can be true, false, or [true, false].This means: required, not allowed, or match either one.flags in regexp.host can be applied.flags in regexp.ipAddress can be applied.             
             */
            url(flags: Object): String;
        }
        module regexp {
            /**
             * Permalink: http://dojotoolkit.org/api/1.9/dojox/validate/regexp.ca.html
             *
             * 
             */
            interface ca {
                /**
                 * String regular Express to match Canadain Postal Codes
                 * 
                 */
                postalCode(): String;
                /**
                 * a regular expression to match Canadian Province Abbreviations
                 * 
                 */
                province(): String;
            }
            /**
             * Permalink: http://dojotoolkit.org/api/1.9/dojox/validate/regexp.us.html
             *
             * 
             */
            interface us {
                /**
                 * A regular expression to match US state and territory abbreviations
                 * 
                 * @param flags               Optionalflags.allowTerritories  Allow Guam, Puerto Rico, etc.  Default is true.flags.allowMilitary  Allow military 'states', e.g. Armed Forces Europe (AE).  Default is true.             
                 */
                state(flags: Object): String;
            }
        }

        /**
         * Permalink: http://dojotoolkit.org/api/1.9/dojox/validate/us.html
         *
         * 
         */
        interface us {
            /**
             * validates user input of an HTML form based on input profile
             * returns an object that contains several methods summarizing the results of the validation
             * 
             * @param form form to be validated             
             * @param profile specifies how the form fields are to be validated{trim:Array, uppercase:Array, lowercase:Array, ucfirst:Array, digit:Array,required:Array, dependencies:Object, constraints:Object, confirm:Object}             
             */
            check(form: HTMLFormElement, profile: Object): void;
            /**
             * Generate the DV code (checksum part) for a Cnpj number
             * 
             * @param value The CGC number in ##.###.###/#### or ############ format             
             */
            computeCnpjDv(value: String): void;
            /**
             * Generate the DV code (checksum part) for a CPF number
             * 
             * @param value The CPF number in ######### format             
             */
            computeCpfDv(value: String): void;
            /**
             * Evaluates dojo.validate.check() constraints that are specified as array
             * arguments
             * The arrays are expected to be in the format of:
             * 
             * constraints:{
             *         fieldName: [functionToCall, param1, param2, etc.],
             *         fieldName: [[functionToCallFirst, param1],[functionToCallSecond,param2]]
             * }
             * This function evaluates a single array function in the format of:
             * [functionName, argument1, argument2, etc]
             * 
             * The function will be parsed out and evaluated against the incoming parameters.
             * 
             * @param profile The dojo.validate.check() profile that this evaluation is against.             
             * @param constraint The single [] array of function and arguments for the function.             
             * @param fieldName The form dom name of the field being validated.             
             * @param elem The form element field.             
             */
            evaluateConstraint(profile: any, constraint: any[], fieldName: any, elem: any): void;
            /**
             * Check if value is an email address list. If an empty list
             * is returned, the value didn't pass the test or it was empty.
             * 
             * @param value             
             * @param flags               OptionalAn object (same as dojo.validate.isEmailAddressList)             
             */
            getEmailAddressList(value: String, flags: Object): void;
            /**
             * Checks if a string could be a valid email address
             * 
             * @param value             
             * @param flags               Optionalflags.allowCruft  Allow address like <mailto:foo@yahoo.com>.  Default is false.flags in regexp.host can be applied.flags in regexp.ipAddress can be applied.flags in regexp.tld can be applied.             
             */
            isEmailAddress(value: String, flags: Object): void;
            /**
             * Checks if a string could be a valid email address list.
             * 
             * @param value             
             * @param flags               Optionalflags.listSeparator  The character used to separate email addresses.  Default is ";", ",", "\n" or " ".flags in regexp.emailAddress can be applied.flags in regexp.host can be applied.flags in regexp.ipAddress can be applied.flags in regexp.tld can be applied.             
             */
            isEmailAddressList(value: String, flags: Object): void;
            /**
             * Validates whether a string denoting a number
             * is between a max and min.
             * 
             * @param value             
             * @param flags               Optional{max:Number, min:Number, decimal:String}flags.max  A number, which the value must be less than or equal to for the validation to be true.flags.min  A number, which the value must be greater than or equal to for the validation to be true.flags.decimal  The character used for the decimal point.  Default is ".".             
             */
            isInRange(value: String, flags: Object): void;
            /**
             * Validates an IP address
             * Supports 5 formats for IPv4: dotted decimal, dotted hex, dotted octal, decimal and hexadecimal.
             * Supports 2 formats for Ipv6.
             * 
             * @param value             
             * @param flags               OptionalAll flags are boolean with default = true.flags.allowDottedDecimal  Example, 207.142.131.235.  No zero padding.flags.allowDottedHex  Example, 0x18.0x11.0x9b.0x28.  Case insensitive.  Zero padding allowed.flags.allowDottedOctal  Example, 0030.0021.0233.0050.  Zero padding allowed.flags.allowDecimal  Example, 3482223595.  A decimal number between 0-4294967295.flags.allowHex  Example, 0xCF8E83EB.  Hexadecimal number between 0x0-0xFFFFFFFF.Case insensitive.  Zero padding allowed.flags.allowIPv6   IPv6 address written as eight groups of four hexadecimal digits.flags.allowHybrid   IPv6 address written as six groups of four hexadecimal digitsfollowed by the usual 4 dotted decimal digit notation of IPv4. x:x:x:x:x:x:d.d.d.d             
             */
            isIpAddress(value: String, flags: Object): void;
            /**
             * Validates any sort of number based format
             * Validates any sort of number based format. Use it for phone numbers,
             * social security numbers, zip-codes, etc. The value can be validated
             * against one format or one of multiple formats.
             * 
             * Format Definition
             * 
             * #        Stands for a digit, 0-9.
             * ?        Stands for an optional digit, 0-9 or nothing.
             * All other characters must appear literally in the expression.
             * 
             * @param value             
             * @param flags               Optionalflags.format  A string or an Array of strings for multiple formats.             
             */
            isNumberFormat(value: String, flags: Object): any;
            /**
             * Validates 10 US digit phone number for several common formats
             * 
             * @param value The telephone number string             
             */
            isPhoneNumber(value: String): boolean;
            /**
             * Validates social security number
             * 
             * @param value             
             */
            isSocialSecurityNumber(value: String): void;
            /**
             * Validates US state and territory abbreviations.
             * 
             * @param value A two character string             
             * @param flags               Optionalflags.allowTerritories  Allow Guam, Puerto Rico, etc.  Default is true.flags.allowMilitary  Allow military 'states', e.g. Armed Forces Europe (AE).  Default is true.             
             */
            isState(value: String, flags: Object): void;
            /**
             * Checks if a string has non whitespace characters.
             * Parameters allow you to constrain the length.
             * 
             * @param value             
             * @param flags               Optional{length: Number, minlength: Number, maxlength: Number}flags.length  If set, checks if there are exactly flags.length number of characters.flags.minlength  If set, checks if there are at least flags.minlength number of characters.flags.maxlength  If set, checks if there are at most flags.maxlength number of characters.             
             */
            isText(value: String, flags: Object): void;
            /**
             * Checks if a string could be a valid URL
             * 
             * @param value             
             * @param flags               Optionalflags.scheme  Can be true, false, or [true, false].This means: required, not allowed, or either.flags in regexp.host can be applied.flags in regexp.ipAddress can be applied.flags in regexp.tld can be applied.             
             */
            isUrl(value: String, flags: Object): void;
            /**
             * Validates a CNPJ/CGC number
             * 
             * @param value The CNPJ/CGC number in ##.###.###/####-##, ########/####-##,######-## or ############## format             
             */
            isValidCnpj(value: String): void;
            /**
             * Validates a CPF number
             * 
             * @param value The CPF number in #########-## or ###########,format             
             */
            isValidCpf(value: String): void;
            /**
             * Validate a credit card number by type with Luhn checking.
             * Checks if a credit card type matches the # scheme in a passed value, and if
             * the Luhn checksum is accurate (unless its an Enroute card, in which case
             * the checkSum is skipped), returning a Boolean to check against.
             * 
             * @param value A Value (credit card number) to validate             
             * @param ccType A credit-card abbreviation.             
             */
            isValidCreditCard(value: String, ccType: String): void;
            /**
             * Validate a credit card number by type with Luhn checking.
             * Checks if a credit card type matches the # scheme in a passed value, and if
             * the Luhn checksum is accurate (unless its an Enroute card, in which case
             * the checkSum is skipped), returning a Boolean to check against.
             * 
             * @param value A Value (credit card number) to validate             
             * @param ccType A credit-card abbreviation.             
             */
            isValidCreditCard(value: number, ccType: String): void;
            /**
             * Checks if value matches the pattern for that card or any card types if none is specified
             * 
             * @param value CC #, white spaces and dashes are ignored             
             * @param ccType               OptionalOne of the abbreviation values in dojox.validate._cardInfo --if Omitted, function returns a | delimited string of matching card types,or false if no matches found.             
             */
            isValidCreditCardNumber(value: String, ccType: String): void;
            /**
             * Checks if value matches the pattern for that card or any card types if none is specified
             * 
             * @param value CC #, white spaces and dashes are ignored             
             * @param ccType               OptionalOne of the abbreviation values in dojox.validate._cardInfo --if Omitted, function returns a | delimited string of matching card types,or false if no matches found.             
             */
            isValidCreditCardNumber(value: number, ccType: String): void;
            /**
             * Validate the security code (CCV) for a passed credit-card type.
             * 
             * @param value             
             * @param ccType             
             */
            isValidCvv(value: String, ccType: String): void;
            /**
             * Validate the security code (CCV) for a passed credit-card type.
             * 
             * @param value             
             * @param ccType             
             */
            isValidCvv(value: number, ccType: String): void;
            /**
             * Validate ISBN-10 or ISBN-13 based on the length of value
             * 
             * @param value An ISBN to validate             
             */
            isValidIsbn(value: String): boolean;
            /**
             * Validate a String value against the Luhn algorithm.
             * Validate a String value against the Luhn algorithm to verify
             * its integrity.
             * 
             * @param value             
             */
            isValidLuhn(value: String): void;
            /**
             * Validates U.S. zip-code
             * 
             * @param value             
             */
            isZipCode(value: String): void;
        }
        module us {
            /**
             * Permalink: http://dojotoolkit.org/api/1.9/dojox/validate/us._cardInfo.html
             *
             * A dictionary list of credit card abbreviations
             * A hash of valid CC abbreviations and regular expressions
             * 
             * mc: Mastercard
             * ec: Eurocard
             * vi: Visa
             * ax: American Express
             * dc: Diners Club
             * bl: Carte Blanch
             * di: Discover
             * jcb: JCB
             * er: Enroute
             * 
             */
            interface _cardInfo {
                /**
                 * 
                 */
                ax: string;
                /**
                 * 
                 */
                bl: string;
                /**
                 * 
                 */
                dc: string;
                /**
                 * 
                 */
                di: string;
                /**
                 * 
                 */
                ec: string;
                /**
                 * 
                 */
                er: string;
                /**
                 * 
                 */
                jcb: string;
                /**
                 * 
                 */
                mc: string;
                /**
                 * 
                 */
                vi: string;
            }
            /**
             * Permalink: http://dojotoolkit.org/api/1.9/dojox/validate/us._isInRangeCache.html
             *
             * 
             */
            interface _isInRangeCache {
            }
        }

        /**
         * Permalink: http://dojotoolkit.org/api/1.9/dojox/validate/web.html
         *
         * 
         */
        interface web {
            /**
             * validates user input of an HTML form based on input profile
             * returns an object that contains several methods summarizing the results of the validation
             * 
             * @param form form to be validated             
             * @param profile specifies how the form fields are to be validated{trim:Array, uppercase:Array, lowercase:Array, ucfirst:Array, digit:Array,required:Array, dependencies:Object, constraints:Object, confirm:Object}             
             */
            check(form: HTMLFormElement, profile: Object): void;
            /**
             * Generate the DV code (checksum part) for a Cnpj number
             * 
             * @param value The CGC number in ##.###.###/#### or ############ format             
             */
            computeCnpjDv(value: String): void;
            /**
             * Generate the DV code (checksum part) for a CPF number
             * 
             * @param value The CPF number in ######### format             
             */
            computeCpfDv(value: String): void;
            /**
             * Evaluates dojo.validate.check() constraints that are specified as array
             * arguments
             * The arrays are expected to be in the format of:
             * 
             * constraints:{
             *         fieldName: [functionToCall, param1, param2, etc.],
             *         fieldName: [[functionToCallFirst, param1],[functionToCallSecond,param2]]
             * }
             * This function evaluates a single array function in the format of:
             * [functionName, argument1, argument2, etc]
             * 
             * The function will be parsed out and evaluated against the incoming parameters.
             * 
             * @param profile The dojo.validate.check() profile that this evaluation is against.             
             * @param constraint The single [] array of function and arguments for the function.             
             * @param fieldName The form dom name of the field being validated.             
             * @param elem The form element field.             
             */
            evaluateConstraint(profile: any, constraint: any[], fieldName: any, elem: any): void;
            /**
             * Check if value is an email address list. If an empty list
             * is returned, the value didn't pass the test or it was empty.
             * 
             * @param value             
             * @param flags               OptionalAn object (same as dojo.validate.isEmailAddressList)             
             */
            getEmailAddressList(value: String, flags: Object): void;
            /**
             * Checks if a string could be a valid email address
             * 
             * @param value             
             * @param flags               Optionalflags.allowCruft  Allow address like <mailto:foo@yahoo.com>.  Default is false.flags in regexp.host can be applied.flags in regexp.ipAddress can be applied.flags in regexp.tld can be applied.             
             */
            isEmailAddress(value: String, flags: Object): void;
            /**
             * Checks if a string could be a valid email address list.
             * 
             * @param value             
             * @param flags               Optionalflags.listSeparator  The character used to separate email addresses.  Default is ";", ",", "\n" or " ".flags in regexp.emailAddress can be applied.flags in regexp.host can be applied.flags in regexp.ipAddress can be applied.flags in regexp.tld can be applied.             
             */
            isEmailAddressList(value: String, flags: Object): void;
            /**
             * Validates whether a string denoting a number
             * is between a max and min.
             * 
             * @param value             
             * @param flags               Optional{max:Number, min:Number, decimal:String}flags.max  A number, which the value must be less than or equal to for the validation to be true.flags.min  A number, which the value must be greater than or equal to for the validation to be true.flags.decimal  The character used for the decimal point.  Default is ".".             
             */
            isInRange(value: String, flags: Object): void;
            /**
             * Validates an IP address
             * Supports 5 formats for IPv4: dotted decimal, dotted hex, dotted octal, decimal and hexadecimal.
             * Supports 2 formats for Ipv6.
             * 
             * @param value             
             * @param flags               OptionalAll flags are boolean with default = true.flags.allowDottedDecimal  Example, 207.142.131.235.  No zero padding.flags.allowDottedHex  Example, 0x18.0x11.0x9b.0x28.  Case insensitive.  Zero padding allowed.flags.allowDottedOctal  Example, 0030.0021.0233.0050.  Zero padding allowed.flags.allowDecimal  Example, 3482223595.  A decimal number between 0-4294967295.flags.allowHex  Example, 0xCF8E83EB.  Hexadecimal number between 0x0-0xFFFFFFFF.Case insensitive.  Zero padding allowed.flags.allowIPv6   IPv6 address written as eight groups of four hexadecimal digits.flags.allowHybrid   IPv6 address written as six groups of four hexadecimal digitsfollowed by the usual 4 dotted decimal digit notation of IPv4. x:x:x:x:x:x:d.d.d.d             
             */
            isIpAddress(value: String, flags: Object): void;
            /**
             * Validates any sort of number based format
             * Validates any sort of number based format. Use it for phone numbers,
             * social security numbers, zip-codes, etc. The value can be validated
             * against one format or one of multiple formats.
             * 
             * Format Definition
             * 
             * #        Stands for a digit, 0-9.
             * ?        Stands for an optional digit, 0-9 or nothing.
             * All other characters must appear literally in the expression.
             * 
             * @param value             
             * @param flags               Optionalflags.format  A string or an Array of strings for multiple formats.             
             */
            isNumberFormat(value: String, flags: Object): any;
            /**
             * Validates 10 US digit phone number for several common formats
             * 
             * @param value The telephone number string             
             */
            isPhoneNumber(value: String): boolean;
            /**
             * Validates social security number
             * 
             * @param value             
             */
            isSocialSecurityNumber(value: String): void;
            /**
             * Validates US state and territory abbreviations.
             * 
             * @param value A two character string             
             * @param flags               Optionalflags.allowTerritories  Allow Guam, Puerto Rico, etc.  Default is true.flags.allowMilitary  Allow military 'states', e.g. Armed Forces Europe (AE).  Default is true.             
             */
            isState(value: String, flags: Object): void;
            /**
             * Checks if a string has non whitespace characters.
             * Parameters allow you to constrain the length.
             * 
             * @param value             
             * @param flags               Optional{length: Number, minlength: Number, maxlength: Number}flags.length  If set, checks if there are exactly flags.length number of characters.flags.minlength  If set, checks if there are at least flags.minlength number of characters.flags.maxlength  If set, checks if there are at most flags.maxlength number of characters.             
             */
            isText(value: String, flags: Object): void;
            /**
             * Checks if a string could be a valid URL
             * 
             * @param value             
             * @param flags               Optionalflags.scheme  Can be true, false, or [true, false].This means: required, not allowed, or either.flags in regexp.host can be applied.flags in regexp.ipAddress can be applied.flags in regexp.tld can be applied.             
             */
            isUrl(value: String, flags: Object): void;
            /**
             * Validates a CNPJ/CGC number
             * 
             * @param value The CNPJ/CGC number in ##.###.###/####-##, ########/####-##,######-## or ############## format             
             */
            isValidCnpj(value: String): void;
            /**
             * Validates a CPF number
             * 
             * @param value The CPF number in #########-## or ###########,format             
             */
            isValidCpf(value: String): void;
            /**
             * Validate a credit card number by type with Luhn checking.
             * Checks if a credit card type matches the # scheme in a passed value, and if
             * the Luhn checksum is accurate (unless its an Enroute card, in which case
             * the checkSum is skipped), returning a Boolean to check against.
             * 
             * @param value A Value (credit card number) to validate             
             * @param ccType A credit-card abbreviation.             
             */
            isValidCreditCard(value: String, ccType: String): void;
            /**
             * Validate a credit card number by type with Luhn checking.
             * Checks if a credit card type matches the # scheme in a passed value, and if
             * the Luhn checksum is accurate (unless its an Enroute card, in which case
             * the checkSum is skipped), returning a Boolean to check against.
             * 
             * @param value A Value (credit card number) to validate             
             * @param ccType A credit-card abbreviation.             
             */
            isValidCreditCard(value: number, ccType: String): void;
            /**
             * Checks if value matches the pattern for that card or any card types if none is specified
             * 
             * @param value CC #, white spaces and dashes are ignored             
             * @param ccType               OptionalOne of the abbreviation values in dojox.validate._cardInfo --if Omitted, function returns a | delimited string of matching card types,or false if no matches found.             
             */
            isValidCreditCardNumber(value: String, ccType: String): void;
            /**
             * Checks if value matches the pattern for that card or any card types if none is specified
             * 
             * @param value CC #, white spaces and dashes are ignored             
             * @param ccType               OptionalOne of the abbreviation values in dojox.validate._cardInfo --if Omitted, function returns a | delimited string of matching card types,or false if no matches found.             
             */
            isValidCreditCardNumber(value: number, ccType: String): void;
            /**
             * Validate the security code (CCV) for a passed credit-card type.
             * 
             * @param value             
             * @param ccType             
             */
            isValidCvv(value: String, ccType: String): void;
            /**
             * Validate the security code (CCV) for a passed credit-card type.
             * 
             * @param value             
             * @param ccType             
             */
            isValidCvv(value: number, ccType: String): void;
            /**
             * Validate ISBN-10 or ISBN-13 based on the length of value
             * 
             * @param value An ISBN to validate             
             */
            isValidIsbn(value: String): boolean;
            /**
             * Validate a String value against the Luhn algorithm.
             * Validate a String value against the Luhn algorithm to verify
             * its integrity.
             * 
             * @param value             
             */
            isValidLuhn(value: String): void;
            /**
             * Validates U.S. zip-code
             * 
             * @param value             
             */
            isZipCode(value: String): void;
        }
        module web {
            /**
             * Permalink: http://dojotoolkit.org/api/1.9/dojox/validate/web._isInRangeCache.html
             *
             * 
             */
            interface _isInRangeCache {
            }
            /**
             * Permalink: http://dojotoolkit.org/api/1.9/dojox/validate/web._cardInfo.html
             *
             * A dictionary list of credit card abbreviations
             * A hash of valid CC abbreviations and regular expressions
             * 
             * mc: Mastercard
             * ec: Eurocard
             * vi: Visa
             * ax: American Express
             * dc: Diners Club
             * bl: Carte Blanch
             * di: Discover
             * jcb: JCB
             * er: Enroute
             * 
             */
            interface _cardInfo {
                /**
                 * 
                 */
                ax: string;
                /**
                 * 
                 */
                bl: string;
                /**
                 * 
                 */
                dc: string;
                /**
                 * 
                 */
                di: string;
                /**
                 * 
                 */
                ec: string;
                /**
                 * 
                 */
                er: string;
                /**
                 * 
                 */
                jcb: string;
                /**
                 * 
                 */
                mc: string;
                /**
                 * 
                 */
                vi: string;
            }
        }

        /**
         * Permalink: http://dojotoolkit.org/api/1.9/dojox/validate/check.html
         *
         * validates user input of an HTML form based on input profile
         * returns an object that contains several methods summarizing the results of the validation
         * 
         * @param form form to be validated     
         * @param profile specifies how the form fields are to be validated{trim:Array, uppercase:Array, lowercase:Array, ucfirst:Array, digit:Array,required:Array, dependencies:Object, constraints:Object, confirm:Object}     
         */
        interface check { (form: HTMLFormElement, profile: Object): void }
        /**
         * Permalink: http://dojotoolkit.org/api/1.9/dojox/validate/isbn.html
         *
         * Validate ISBN-10 or ISBN-13 based on the length of value
         * 
         * @param value An ISBN to validate     
         */
        interface isbn { (value: String): void }
    }

}