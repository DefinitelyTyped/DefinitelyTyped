/**
 * Copyright (c) 2017-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 */

'use strict';
const {Content, CustomData, DeliveryCategory} = require('facebook-nodejs-business-sdk');


describe('CustomData', function() {
    describe('normalize', function() {
        test('normalizes the fields', function() {
            const expected = {
              'value': 1,
              'currency': 'usd',
              'content_name': 'content_name-2',
              'content_category': 'content_category-3',
              'content_ids': [4, 5, 6],
              'contents': [{'id': 'id-1', 'quantity': 2}],
              'content_type': 'content_type-7',
              'order_id': 'order_id-8',
              'predicted_ltv': 9.99,
              'num_items': 10,
              'search_string': 'search_string-11',
              'status': 'status-12',
              'item_number': 'item_number-13',
              'delivery_category': DeliveryCategory.CURBSIDE,
              'k1': 'v1',
              'k2': 'v2'
            };

            const content = (new Content())
                .setId('id-1')
                .setQuantity(2);
            const custom_data = (new CustomData())
              .setValue(expected['value'])
              .setCurrency('USD')
              .setContentName(expected['content_name'])
              .setContentCategory(expected['content_category'])
              .setContentIds(expected['content_ids'])
              .setContents([content])
              .setContentType(expected['content_type'])
              .setOrderId(expected['order_id'])
              .setPredictedLtv(expected['predicted_ltv'])
              .setNumItems(expected['num_items'])
              .setSearchString(expected['search_string'])
              .setStatus(expected['status'])
              .setItemNumber(expected['item_number'])
              .setDeliveryCategory(expected['delivery_category'])
              .setCustomProperties({
                    'k1': 'v1',
                    'k2': 'v2'
                });

            expect(custom_data.normalize()).toEqual(expected);
        });

        test('normalizes delivery_category values', function() {
          const delivery_category_cases = [
                [DeliveryCategory.CURBSIDE, 'curbside'],
                ['IN_STORE', 'in_store'],
                ['   HOME_DELIVERY  ', 'home_delivery'],
            ];

            delivery_category_cases.forEach(pair => {

              //Arrange
              const actual = pair[0];
              const expected = pair[1];

              //Act
              const custom_data = (new CustomData())
                .setDeliveryCategory(actual);
              const normalized = custom_data.normalize();

              //Assert
              expect(normalized['delivery_category']).toEqual(expected);
            });
          });

        test('normalizes value when it is 0', function() {
            const custom_data = (new CustomData()).setValue(0);
            const normalized = custom_data.normalize();

            expect(normalized['value']).toBe(0);
        });

        test('normalizes value it parses a number from string', function() {
            const custom_data = (new CustomData()).setValue('0.5');
            const normalized = custom_data.normalize();

            expect(normalized['value']).toBe(0.5);
        });

        test('normalizes value is set to the first number in an array', function() {
            const custom_data = (new CustomData()).setValue(['1.5', 3]);
            const normalized = custom_data.normalize();

            expect(normalized['value']).toBe(1.5);
        });

        test('normalize skips the value when it cannot be parsed to a float', function() {
            const custom_data1 = (new CustomData()).setValue(undefined);
            expect(Object.keys(custom_data1.normalize())).toEqual([]);

            const custom_data2 = (new CustomData()).setValue(['test']);
            expect(Object.keys(custom_data2.normalize())).toEqual([]);

            const custom_data3 = (new CustomData()).setValue({a: 'value'});
            expect(Object.keys(custom_data3.normalize())).toEqual([]);

            const custom_data4 = (new CustomData()).setValue(true);
            expect(Object.keys(custom_data4.normalize())).toEqual([]);

            const custom_data5 = (new CustomData()).setValue({'1.5': 3});
            expect(Object.keys(custom_data5.normalize())).toEqual([]);
        });

        test('throws exception on invalid delivery_category', function() {

            const test_delivery_category = 'invalid_delivery_category';

            const custom_data = (new CustomData())
              .setDeliveryCategory(test_delivery_category);

            expect(() => custom_data.normalize()).toThrow(Error);
        });
    })
});
