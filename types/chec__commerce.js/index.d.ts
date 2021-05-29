// Type definitions for @chec/commerce.js 2.6
// Project: https://github.com/chec/commerce.js#readme
// Definitions by: Robbie Averill <https://github.com/robbieaverill>
//                 Paito Anderson <https://github.com/PaitoAnderson>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import { Cart } from './features/cart';
import { Categories } from './features/categories';
import { Checkout } from './features/checkout';
import { Customer } from './features/customer';
import { Merchants } from './features/merchants';
import { Products } from './features/products';
import { Services } from './features/services';

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
}

declare namespace Commerce {
    interface CommerceConfig {
        disableStorage?: boolean;
        timeoutMs?: number;
        axiosConfig?: any;
    }
}
