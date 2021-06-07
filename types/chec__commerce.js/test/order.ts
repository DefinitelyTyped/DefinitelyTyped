import Order = require('@chec/commerce.js/types/order');

// From: https://api.chec.io/v1/customers/<customer>/orders/<order>>
const order: Order.Order = {
  version: "v1.5",
  sandbox: false,
  id: "ord_",
  checkout_token_id: "chkt_",
  cart_id: "cart_",
  customer_reference: "ANY-1234",
  created: 1622591923,
  status_payment: "paid",
  status_fulfillment: "not_fulfilled",
  currency: {
    code: "CAD",
    symbol: "$"
  },
  order_value: {
    raw: 0,
    formatted: "0.00",
    formatted_with_symbol: "$0.00",
    formatted_with_code: "0.00 CAD"
  },
  conditionals: {
    collected_fullname: true,
    collected_shipping_address: true,
    collected_billing_address: true,
    collected_extra_fields: true,
    collected_tax: false,
    collected_eu_vat_moss_evidence: false,
    has_physical_fulfillment: true,
    has_digital_fulfillment: false,
    has_extend_fulfillment: false,
    has_webhook_fulfillment: false,
    has_extend_apps: false,
    has_pay_what_you_want: false,
    has_discounts: true,
    has_subscription_items: false,
    is_free: true,
    is_fulfilled: false
  },
  fraud: [],
  meta: [],
  redirect: false,
  collected: {
    fullname: true,
    shipping_address: true,
    billing_address: true,
    extra_fields: true,
    tax: false,
    eu_vat_moss_evidence: false
  },
  has: {
    physical_fulfillment: true,
    digital_fulfillment: false,
    extend_fulfillment: false,
    webhook_fulfillment: false,
    extend_apps: false,
    pay_what_you_want: false,
    discounts: true,
    subscription_items: false
  },
  is: {
    free: true,
    fulfilled: false
  },
  order: {
    subtotal: {
      raw: 32,
      formatted: "32.00",
      formatted_with_symbol: "$32.00",
      formatted_with_code: "32.00 CAD"
    },
    total: {
      raw: 0,
      formatted: "0.00",
      formatted_with_symbol: "$0.00",
      formatted_with_code: "0.00 CAD"
    },
    total_with_tax: {
      raw: 0,
      formatted: "0.00",
      formatted_with_symbol: "$0.00",
      formatted_with_code: "0.00 CAD"
    },
    total_paid: {
      raw: 0,
      formatted: "0.00",
      formatted_with_symbol: "$0.00",
      formatted_with_code: "0.00 CAD"
    },
    pay_what_you_want: {
      enabled: false,
      minimum: null,
      customer_set_price: null
    },
    shipping: {
      id: "ship_",
      description: "Local Pickup",
      provider: "chec",
      price: {
        raw: 0,
        formatted: "0.00",
        formatted_with_symbol: "$0.00",
        formatted_with_code: "0.00 CAD"
      }
    },
    line_items: [
      {
        id: "item_",
        product_id: "prod_",
        product_name: "Something",
        product_sku: null,
        quantity: 1,
        price: {
          raw: 32,
          formatted: "32.00",
          formatted_with_symbol: "$32.00",
          formatted_with_code: "32.00 CAD"
        },
        line_total: {
          raw: 32,
          formatted: "32.00",
          formatted_with_symbol: "$32.00",
          formatted_with_code: "32.00 CAD"
        },
        line_total_with_tax: {
          raw: 32,
          formatted: "32.00",
          formatted_with_symbol: "$32.00",
          formatted_with_code: "32.00 CAD"
        },
        variant: [],
        selected_options: [],
        tax: {
          is_taxable: true,
          amount: {
            raw: 0,
            formatted: "0.00",
            formatted_with_symbol: "$0.00",
            formatted_with_code: "0.00 CAD"
          },
          taxable_amount: {
            raw: 32,
            formatted: "32.00",
            formatted_with_symbol: "$32.00",
            formatted_with_code: "32.00 CAD"
          },
          rate: 0.13,
          rate_percentage: "13%",
          breakdown: [
            {
              amount: {
                raw: 0,
                formatted: "0.00",
                formatted_with_symbol: "$0.00",
                formatted_with_code: "0.00 CAD"
              },
              rate: 0.13,
              rate_percentage: "13%",
              type: "regional_tax"
            }
          ]
        }
      }
    ],
    discount: {
      type: "percentage",
      code: "ANYTHINGYOUWANT",
      value: 100,
      amount_saved: {
        raw: 32,
        formatted: "32.00",
        formatted_with_symbol: "$32.00",
        formatted_with_code: "32.00 CAD"
      }
    },
    giftcard: []
  },
  shipping: {
    name: "John Doe",
    street: '123 Fake St',
    street_2: null,
    town_city: "Toronto",
    postal_zip_code: "M4C0A0",
    county_state: "ON",
    country: "CA",
    meta: null
  },
  billing: {
    name: "John Doe",
    street: '123 Fake St',
    street_2: null,
    town_city: "Toronto",
    postal_zip_code: "M4C0A0",
    county_state: "ON",
    country: "CA",
    meta: null
  },
  transactions: [],
  fulfillment: {
    physical: {
      items: [
        {
          id: "ful_",
          shipping_method_id: "ship_",
          line_item_id: "item_",
          product_id: "prod_",
          shipping_description: "Local Pickup",
          provider: "chec",
          provider_type: "native_shipping",
          product_name: "Something",
          status: "not_fulfilled",
          quantity: {
            total: 1,
            fulfilled: 0,
            remaining: 1
          },
          quantity_fulfilled: 0,
          quantity_remaining: 1,
          last_updated: 1622591924,
          linked_shipments: [],
          selected_options: []
        }
      ],
      shipments: []
    },
    digital: {
      downloads: []
    }
  },
  customer: {
    id: "cstmr_",
    external_id: null,
    firstname: "John",
    lastname: "Doe",
    email: "john.doe@example.com",
    phone: null,
    meta: [],
    created: 1621784891,
    updated: 1621784891
  },
  extra_fields: [
    {
      id: "extr_",
      name: "Note",
      type: "text",
      required: false,
      value: "TEST ORDER."
    }
  ],
  client_details: [],
  tax: {
    amount: {
      raw: 0,
      formatted: "0.00",
      formatted_with_symbol: "$0.00",
      formatted_with_code: "0.00 CAD"
    },
    included_in_price: false,
    provider: "chec",
    provider_type: "native",
    breakdown: [
      {
        amount: {
          raw: 0,
          formatted: "0.00",
          formatted_with_symbol: "$0.00",
          formatted_with_code: "0.00 CAD"
        },
        type: "regional_tax"
      }
    ],
    zone: {
      country: "CA",
      region: "ON",
      postal_zip_code: "M4C 0A0",
      ip_address: null
    }
  }
};
