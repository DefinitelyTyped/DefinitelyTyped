/**
 * Copyright (c) 2017-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 */

'use strict';
const {Content, DeliveryCategory} = require('facebook-nodejs-business-sdk');


describe('Content', function() {
    describe('normalize', function() {
        test('normalizes the fields', function() {
            const id = 'id-0',
            quantity = 1,
            item_price = 2.50,
            title = 'title-3',
            description = 'description-4',
            brand = 'brand-5',
            category = 'category-6',
            delivery_category = DeliveryCategory.IN_STORE;
            const content = (new Content())
                .setId(id)
                .setQuantity(quantity)
                .setItemPrice(item_price)
                .setTitle(title)
                .setDescription(description)
                .setBrand(brand)
                .setCategory(category)
                .setDeliveryCategory(delivery_category);

            expect(content.normalize()).toEqual({
                id,
                quantity,
                item_price,
                title,
                description,
                brand,
                category,
                delivery_category,
            });
        });

        test('throws exception on invalid delivery_category', function() {
            const delivery_category = 'unsupported-delivery-category';
            const content = (new Content())
                .setDeliveryCategory(delivery_category);

            expect(() => content.normalize()).toThrow(Error);
        });
    });
});
