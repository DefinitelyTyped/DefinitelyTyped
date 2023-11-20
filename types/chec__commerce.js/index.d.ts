import { Cart, RequestMethod } from "./features/cart";
import { Categories } from "./features/categories";
import { Checkout } from "./features/checkout";
import { Customer } from "./features/customer";
import { Merchants } from "./features/merchants";
import { Products } from "./features/products";
import { Services } from "./features/services";

export = Commerce;

declare class Commerce {
    constructor(publicKey: string, debug?: boolean, config?: Commerce.CommerceConfig);

    cart: Cart;
    categories: Categories;
    checkout: Checkout;
    customer: Customer;
    merchants: Merchants;
    products: Products;
    services: Services;

    error: (response: any) => void | number[];
    request: (
        endpoint: string,
        method?: RequestMethod,
        data?: object,
        extraHeaders?: any,
        returnFullResponse?: boolean,
    ) => any;
}

declare namespace Commerce {
    interface CommerceConfig {
        disableStorage?: boolean | undefined;
        cartLifetime?: number | undefined;
        timeoutMs?: number | undefined;
        axiosConfig?: any;
    }
}
