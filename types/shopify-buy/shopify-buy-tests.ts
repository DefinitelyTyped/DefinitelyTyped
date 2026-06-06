import ShopifyBuy = require("shopify-buy");

declare const collection: ShopifyBuy.Collection;
declare const checkout: ShopifyBuy.Checkout;
declare const product: ShopifyBuy.Product;
declare const productVariant: ShopifyBuy.ProductVariant;
declare const shop: ShopifyBuy.Shop;

// Initializing a client to return content in the store's primary language
const client = ShopifyBuy.buildClient({
    domain: "your-shop-name.myshopify.com",
    storefrontAccessToken: "your-storefront-access-token",
    language: "en-US",
    apiVersion: "1.0",
    source: "source",
});

// Fetch all products in your shop
client.product.fetchAll().then(products => {
    // $ExpectType Product[]
    products;

    client.fetchNextPage(products).then(products => {
        // $ExpectType Product[]
        products;
    });
});

// Fetch a single product by ID
const productId = "gid://shopify/Product/7857989384";

client.product.fetch(productId).then(product => {
    // $ExpectType Product
    product;

    client.fetchNextPage(product.variants).then(variants => {
        // $ExpectType ProductVariant[]
        variants;
    });

    // $ExpectType ProductVariant
    const variant = product.variants[0];

    // $ExpectType Image
    variant.image;

    // $ExpectType string
    client.image.helpers.imageForSize(variant.image, { maxWidth: 50, maxHeight: 50 });
});

// Fetch a single product by Handle
const handle = "product-handle";

client.product.fetchByHandle(handle).then(product => {
    // $ExpectType Product
    product;
});

// Fetch all collections, including their products
client.collection.fetchAllWithProducts().then(collections => {
    // $ExpectType Collection[]
    collections;
    // $ExpectType Product[]
    collections[0].products;

    client.fetchNextPage(collections).then(collections => {
        // $ExpectType Collection[]
        collections;
    });
});

// Fetch a single collection by ID, including its products
const collectionId = "gid://shopify/Collection/369312584";
// Set a parameter for first x products, defaults to 20 if you don't provide a param

client.collection.fetchWithProducts(collectionId, { productsFirst: 10 }).then(collection => {
    // $ExpectType Collection
    collection;
    // $ExpectType Product[]
    collection.products;
});

// Create an empty checkout
client.checkout.create().then(checkout => {
    // $ExpectType Checkout
    checkout;
});

const checkoutId = "gid://shopify/Checkout/e3bd71f7248c806f33725a53e33931ef?key=47092e448529068d1be52e5051603af8";

// Updating checkout attributes
client.checkout
    .updateAttributes(checkoutId, {
        customAttributes: [{ key: "MyKey", value: "MyValue" }],
    })
    .then(checkout => {
        // $ExpectType Checkout
        checkout;
    });

// Add an item to the checkout
client.checkout
    .addLineItems(checkoutId, [
        {
            variantId: "gid://shopify/ProductVariant/29106064584",
            quantity: 5,
            customAttributes: [{ key: "MyKey", value: "MyValue" }],
        },
    ])
    .then(checkout => {
        // $ExpectType Checkout
        checkout;
        // $ExpectType CheckoutLineItem[]
        checkout.lineItems;
    });

// Update the line item on the checkout (change the quantity or variant)
client.checkout
    .updateLineItems(checkoutId, [
        {
            variantId: "gid://shopify/CheckoutLineItem/194677729198640?checkout=e3bd71f7248c806f33725a53e33931ef",
            quantity: 2,
        },
    ])
    .then(checkout => {
        // $ExpectType Checkout
        checkout;
        // $ExpectType CheckoutLineItem[]
        checkout.lineItems;
    });

// Remove an item from the checkout
client.checkout
    .removeLineItems(checkoutId, [
        "gid://shopify/CheckoutLineItem/194677729198640?checkout=e3bd71f7248c806f33725a53e33931ef",
    ])
    .then(checkout => {
        // $ExpectType Checkout
        checkout;
        // $ExpectType CheckoutLineItem[]
        checkout.lineItems;
    });

client.checkout.fetch(checkoutId).then(checkout => {
    // $ExpectType Checkout
    checkout;
    // $ExpectType CheckoutLineItem[]
    checkout.lineItems;
});

// Add a discount code to the checkout
client.checkout.addDiscount(checkoutId, "best-discount-ever").then(checkout => {
    // $ExpectType Checkout
    checkout;
    // $ExpectType CheckoutLineItem[]
    checkout.lineItems;
});

// Removes the applied discount from an existing checkout.
client.checkout.removeDiscount(checkoutId).then(checkout => {
    // $ExpectType Checkout
    checkout;
    // $ExpectType CheckoutLineItem[]
    checkout.lineItems;
});

// Update the shipping address for an existing checkout.
client.checkout
    .updateShippingAddress(checkoutId, {
        address1: "Chestnut Street 92",
        address2: "Apartment 2",
        city: "Louisville",
        company: null,
        country: "United States",
        firstName: "Bob",
        lastName: "Norman",
        phone: "555-625-1199",
        province: "Kentucky",
        zip: "40202",
    })
    .then(checkout => {
        // $ExpectType Checkout
        checkout;
        // $ExpectType CheckoutLineItem[]
        checkout.lineItems;
    });

client.shop.fetchInfo().then(shop => {
    // $ExpectType Shop
    shop;
});

client.shop.fetchPolicies().then(shop => {
    // $ExpectType Shop
    shop;
});
