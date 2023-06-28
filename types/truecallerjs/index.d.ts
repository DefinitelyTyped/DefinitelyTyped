// Type definitions for truecallerjs 2.1
// Project: https://github.com/sumithemmadi/truecallerjs#readme
// Definitions by: Sumith Emmadi <https://github.com/sumithemmadi>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace truecallerjs {
    /**
     * Response object returned by the login function.
     */
    interface LoginResponse {
      status: number;
      message: string;
      domain: string;
      parsedPhoneNumber: number;
      parsedCountryCode: string;
      requestId: string;
      method: string;
      tokenTtl: number;
    }

    /**
     * Logs in to Truecaller.
     *
     * @param phoneNumber - Phone number in international format.
     * @returns A Promise that resolves to the login response containing the requestId used for OTP verification.
     */
    function login(phoneNumber: string): Promise<LoginResponse>;

    /**
     * Verifies a mobile number with OTP.
     *
     * @param phoneNumber - Phone number in international format.
     * @param jsonData - JSON response of the login function.
     * @param otp - 6-digit OTP.
     * @returns A Promise that resolves to a JSON object containing the installationId.
     */
    function verifyOtp(
      phoneNumber: string,
      jsonData: LoginResponse,
      otp: string
    ): Promise<object>;

    /**
     * Address details.
     */
    interface Address {
      city: string;
      countryCode: string;
      timeZone: string;
      type: string;
    }

    /**
     * Internet address details.
     */
    interface InternetAddress {
      id: string;
      service: string;
      caption: string;
      type: string;
    }

    /**
     * Country details.
     */
    interface CountryDetails {
      name: string;
      native: string;
      phone: number[];
      continent: string;
      capital: string;
      currency: string[];
      languages: string[];
      flag: string;
      flagURL: string;
    }

    /**
     * Data object containing information about a phone number.
     */
    interface Data {
      name?: string;
      altName?: string;
      addresses?: Address[];
      internetAddresses?: InternetAddress[];
    }

    /**
     * Search data object used for searching a phone number.
     */
    interface SearchData {
      number: string;
      countryCode: string;
      installationId: string;
    }

    /**
     * Response data object containing an array of Data objects.
     */
    interface ResponseData {
      data: Data[];
    }

    /**
     * Format class for formatting response data.
     */
    class Format {
      constructor(data: ResponseData);
      json(color?: boolean): ResponseData;
      xml(color?: boolean): string;
      yaml(color?: boolean): string;
      text(color?: boolean, space?: boolean): string;
      getName(): string;
      getAlternateName(): string;
      getAddresses(): Address[];
      getEmailId(): string;
      getCountryDetails(): CountryDetails;
    }

    /**
     * Searches for a phone number on Truecaller.
     *
     * @param searchData - Search data object containing the number, countryCode, and installationId.
     * @returns A Promise that resolves to a Format object containing details of the phone number.
     */
    function search(searchData: SearchData): Promise<Format>;

    /**
     * Performs bulk search for multiple phone numbers on Truecaller.
     *
     * @param phoneNumbers - Phone numbers separated by commas.
     * @param countryCode - Country code to use by default if any phone number is not in E.164 format (international format).
     * @param installationId - 6-digit OTP.
     * @returns A Promise that resolves to a ResponseData object containing phone number information in an array.
     */
    function bulkSearch(
      phoneNumbers: string,
      countryCode: string,
      installationId: string
    ): Promise<ResponseData>;
  }

  declare module 'truecallerjs' {
    export = truecallerjs;
  }
