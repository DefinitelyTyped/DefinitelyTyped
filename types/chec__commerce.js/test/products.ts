import Commerce = require('@chec/commerce.js');
import Products = require('@chec/commerce.js/features/products');

const commerce = new Commerce('{your_public_key}');

const limit = 50;
const categorySlug = 'shoes';
const productId = 'prod_1ypbroE658n4ea';
const variantId = 'vrnt_Kvg9l6Apq51bB7';
const productPermalink = 'YfFoyi';

// Fetch all products
// $ExpectType Promise<ProductCollection>
commerce.products.list();

// Fetch products specifying some additional parameters
// $ExpectType Promise<ProductCollection>
commerce.products.list({
    limit,
    category_slug: categorySlug,
});

// Retrieve a product by it's ID
// $ExpectType Promise<Product>
commerce.products.retrieve(productId);

// Retrieve a product by it's permalink
// $ExpectType Promise<Product>
commerce.products.retrieve(productPermalink, { type: 'permalink' });

// $ExpectType Promise<VariantCollection>
commerce.products.getVariants(productId);

// $ExpectType Promise<Variant>
commerce.products.getVariant(productId, variantId);

// From: https://api.chec.io/v1/products
const products: Products.ProductCollection = {
    data: [
        {
            id: 'prod_31q0o3Za2wDdjR',
            created: 1588262435,
            updated: 1594409714,
            active: true,
            permalink: 'complexion-cream',
            name: 'Complexion Cream',
            description:
                '<p>Anti-aging complexion cream for medium to dry skin. Nourish your face with a natural vitamin burst for that perfectly balanced glow.</p>',
            price: {
                raw: 32,
                formatted: '32.00',
                formatted_with_symbol: '$32.00',
                formatted_with_code: '32.00 USD',
            },
            inventory: {
                managed: false,
                available: 0,
            },
            media: {
                type: 'image',
                source: 'https://cdn.chec.io/merchants/17851/assets/ISau419S4nHgwkVB|cream-3.jpg',
            },
            sku: null,
            sort_order: 2,
            seo: {
                title: null,
                description: null,
            },
            thank_you_url: null,
            meta: null,
            conditionals: {
                is_active: true,
                is_tax_exempt: false,
                is_pay_what_you_want: false,
                is_inventory_managed: false,
                is_sold_out: false,
                has_digital_delivery: false,
                has_physical_delivery: true,
                has_images: true,
                collects_fullname: false,
                collects_shipping_address: true,
                collects_billing_address: false,
                collects_extra_fields: false,
            },
            is: {
                active: true,
                tax_exempt: false,
                pay_what_you_want: false,
                inventory_managed: false,
                sold_out: false,
            },
            has: {
                digital_delivery: false,
                physical_delivery: true,
                images: true,
                video: false,
                rich_embed: false,
            },
            collects: {
                fullname: false,
                shipping_address: true,
                billing_address: false,
                extra_fields: false,
            },
            checkout_url: {
                checkout: 'https://checkout.chec.io/complexion-cream?checkout=true',
                display: 'https://checkout.chec.io/complexion-cream',
            },
            extra_fields: [],
            variant_groups: [
                {
                    id: 'vgrp_QG375v38xlrMOg',
                    name: 'Size',
                    meta: null,
                    created: null,
                    updated: null,
                    options: [
                        {
                            id: 'optn_NqKE50mGNldgBL',
                            name: '100ml',
                            price: {
                                raw: 0,
                                formatted: '0.00',
                                formatted_with_symbol: '$0.00',
                                formatted_with_code: '0.00 USD',
                            },
                            assets: [
                                'ast_bO6J5ag49wEjpK',
                            ],
                            meta: null,
                            created: 1594413988,
                            updated: 1605921891,
                        },
                    ],
                },
            ],
            categories: [
                {
                    id: 'cat_xA12JwrK8oPjnk',
                    slug: 'facial-products',
                    name: 'Facial Products',
                },
            ],
            assets: [
                {
                    id: 'ast_bO6J5ag49wEjpK',
                    url: 'https://cdn.chec.io/merchants/17851/assets/QoZTzBZBq5pOlfS4|cream-2.jpg',
                    description: null,
                    is_image: true,
                    filename: '',
                    file_size: 333854,
                    file_extension: 'jpeg',
                    image_dimensions: {
                        width: 2400,
                        height: 3596,
                    },
                    meta: [],
                    created_at: 1594413988,
                    updated_at: 1605921891,
                },
            ],
            image: {
                id: 'ast_bO6J5ag49wEjpK',
                url: 'https://cdn.chec.io/merchants/17851/assets/QoZTzBZBq5pOlfS4|cream-2.jpg',
                description: null,
                is_image: true,
                filename: '',
                file_size: 333854,
                file_extension: 'jpeg',
                image_dimensions: {
                    width: 2400,
                    height: 3596,
                },
                meta: [],
                created_at: 1594413988,
                updated_at: 1605921891,
            },
            attributes: [
                {
                    id: 'attr_mL1vOoZW5Ra8Ze',
                    meta: [],
                    name: 'Weight',
                    value: '2grams',
                },
                {
                    id: 'attr_YgnZO5kg57MNqG',
                    meta: [],
                    name: 'Product template',
                    value: [
                        {
                            label: 'Generic Template',
                            value: 'genericTemplate',
                        }
                    ],
                },
            ],
            related_products: [],
        },
    ],
    meta: {
        pagination: {
            total: 9,
            count: 9,
            per_page: 20,
            current_page: 1,
            total_pages: 1,
            links: {},
        },
    },
};

// From: https://api.chec.io/v1/products/<product>/variants
const variants: Products.VariantCollection = {
    data: [
        {
            id: 'vrnt_O3bR5XrO8wnzdj',
            sku: null,
            description: null,
            inventory: null,
            price: null,
            is_valid: true,
            invalid_reason_code: null,
            meta: null,
            created: 1617227299,
            updated: 1617227299,
            options: {
                vgrp_QG375v38xlrMOg: 'optn_NqKE50mGNldgBL',
            },
            assets: [],
        },
    ],
    meta: {
        pagination: {
            total: 1,
            count: 1,
            per_page: 100,
            current_page: 1,
            total_pages: 1,
            links: {},
        },
    },
};
