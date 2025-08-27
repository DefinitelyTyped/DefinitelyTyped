declare function kakaoPixel(id: string): kakao.Pixel.Event;

declare namespace kakao.Pixel {
    interface Event {
        pageView(tag?: string): void;
        completeRegistration(tag?: string): void;
        search(parameters?: SearchParameters): void;
        viewContent(parameters?: ViewContentParameters): void;
        addToCart(parameters?: AddToCartParameters): void;
        addToWishList(parameters?: AddWishListParameters): void;
        viewCart(tag?: string): void;
        purchase(parameters?: PurchaseParameters): void;
        participation(tag?: string): void;
        signUp(tag?: string): void;
    }

    interface SearchParameters {
        keyword?: string;
        tag?: string;
    }

    interface ViewContentParameters {
        id?: string;
        tag?: string;
    }

    interface AddToCartParameters {
        id?: string;
        tag?: string;
    }

    interface AddWishListParameters {
        id?: string;
        tag?: string;
    }

    interface PurchaseParameters {
        total_quantity?: string;
        total_price?: string;
        currency?: Currency;
        products?: Product[];
        tag?: string;
    }

    interface Product {
        id: string;
        name: string;
        quantity: string;
        price: string;
    }

    type Currency =
        | "AED"
        | "AFN"
        | "ALL"
        | "AMD"
        | "ANG"
        | "AOA"
        | "ARS"
        | "AUD"
        | "AWG"
        | "AZN"
        | "BAM"
        | "BBD"
        | "BDT"
        | "BGN"
        | "BHD"
        | "BIF"
        | "BMD"
        | "BND"
        | "BOB"
        | "BOV"
        | "BRL"
        | "BSD"
        | "BTN"
        | "BWP"
        | "BYR"
        | "BZD"
        | "CAD"
        | "CDF"
        | "CHE"
        | "CHF"
        | "CHW"
        | "CLF"
        | "CLP"
        | "CNY"
        | "COP"
        | "COU"
        | "CRC"
        | "CUC"
        | "CUP"
        | "CVE"
        | "CZK"
        | "DJF"
        | "DKK"
        | "DOP"
        | "DZD"
        | "EGP"
        | "ERN"
        | "ETB"
        | "EUR"
        | "FJD"
        | "FKP"
        | "GBP"
        | "GEL"
        | "GHS"
        | "GIP"
        | "GMD"
        | "GNF"
        | "GTQ"
        | "GYD"
        | "HKD"
        | "HNL"
        | "HRK"
        | "HTG"
        | "HUF"
        | "IDR"
        | "ILS"
        | "INR"
        | "IQD"
        | "IRR"
        | "ISK"
        | "JMD"
        | "JOD"
        | "JPY"
        | "KES"
        | "KGS"
        | "KHR"
        | "KMF"
        | "KPW"
        | "KRW"
        | "KWD"
        | "KYD"
        | "KZT"
        | "LAK"
        | "LBP"
        | "LKR"
        | "LRD"
        | "LSL"
        | "LTL"
        | "LVL"
        | "LYD"
        | "MAD"
        | "MDL"
        | "MGA"
        | "MKD"
        | "MMK"
        | "MNT"
        | "MOP"
        | "MRO"
        | "MUR"
        | "MVR"
        | "MWK"
        | "MXN"
        | "MXV"
        | "MYR"
        | "MZN"
        | "NAD"
        | "NGN"
        | "NIO"
        | "NOK"
        | "NPR"
        | "NZD"
        | "OMR"
        | "PAB"
        | "PEN"
        | "PGK"
        | "PHP"
        | "PKR"
        | "PLN"
        | "PYG"
        | "QAR"
        | "RON"
        | "RSD"
        | "RUB"
        | "RWF"
        | "SAR"
        | "SBD"
        | "SCR"
        | "SDG"
        | "SEK"
        | "SGD"
        | "SHP"
        | "SLL"
        | "SOS"
        | "SRD"
        | "SSP"
        | "STD"
        | "SYP"
        | "SZL"
        | "THB"
        | "TJS"
        | "TMT"
        | "TND"
        | "TOP"
        | "TRY"
        | "TTD"
        | "TWD"
        | "TZS"
        | "UAH"
        | "UGX"
        | "USD"
        | "USN"
        | "USS"
        | "UYI"
        | "UYU"
        | "UZS"
        | "VEF"
        | "VND"
        | "VUV"
        | "WST"
        | "XAF"
        | "XAG"
        | "XAU"
        | "XBA"
        | "XBB"
        | "XBC"
        | "XBD"
        | "XCD"
        | "XDR"
        | "XOF"
        | "XPD"
        | "XPF"
        | "XPT"
        | "XTS"
        | "XXX"
        | "YER"
        | "ZAR"
        | "ZMW";
}
