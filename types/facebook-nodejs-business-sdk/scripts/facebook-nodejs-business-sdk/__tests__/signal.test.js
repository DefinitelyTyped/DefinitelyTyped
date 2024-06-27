/**
 * Copyright (c) 2017-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 */

'use strict';
const { SignalUserData, SignalContent, SignalCustomData, SignalEvent, DeliveryCategory } = require('facebook-nodejs-business-sdk');
const sha256 = require('js-sha256');


describe('Signal Data', function() {
    describe('UserData', function() {
        test('UserData creation by set methods', function() {

            const email = 'xxx@gmail.com',
                phone = '1123456789',
                gender = 'f',
                first_name = 'chrissy',
                last_name = 'smith',
                date_of_birth = '19940919',
                city = 'seattle',
                state = 'wa',
                country = 'us',
                zip = '98121',
                external_id = 'chrissy001',
                client_ip_address = '127.0.0.1',
                client_user_agent = 'chrome',
                fbp = 'xxxfbp',
                fbc = 'xxxfbc',
                subscription_id = 'xxxsubscription',
                fb_login_id = 'xxxlogin',
                lead_id = 'xxxlead',
                dobd = '19',
                dobm = '09',
                doby = '94',
                f5first = 'chris',
                f5last = 'hoooo',
                fi = 'ch',
                address = '1000 westlake ave';

            const userData = (new SignalUserData())
                .setEmail(email)
                .setPhone(phone)
                .setFirstName(first_name)
                .setLastName(last_name)
                .setDateOfBirth(date_of_birth)
                .setCity(city)
                .setState(state)
                .setZip(zip)
                .setCountry(country)
                .setExternalId(external_id)
                .setGender(gender)
                .setClientIpAddress(client_ip_address)
                .setClientUserAgent(client_user_agent)
                .setFbp(fbp)
                .setFbc(fbc)
                .setSubscriptionId(subscription_id)
                .setFbLoginId(fb_login_id)
                .setLeadId(lead_id)
                .setDobd(dobd)
                .setDobm(dobm)
                .setDoby(doby)
                .setF5First(f5first)
                .setF5Last(f5last)
                .setFi(fi)
                .setAddress(address);


            // business data api user data
            expect(userData.email.business_data_api).toBe(email);
            expect(userData.phone.business_data_api).toBe(phone);
            expect(userData.first_name.business_data_api).toBe(first_name);
            expect(userData.last_name.business_data_api).toBe(last_name);
            expect(userData.date_of_birth.business_data_api).toBe(date_of_birth);
            expect(userData.city.business_data_api).toBe(city);
            expect(userData.state.business_data_api).toBe(state);
            expect(userData.country.business_data_api).toBe(country);
            expect(userData.zip.business_data_api).toBe(zip);
            expect(userData.external_id.business_data_api).toBe(external_id);
            expect(userData.address.business_data_api).toBe(address);

            // business data api user data
            expect(userData.business_data_user_data.email).toBe(email);

            // conversion api user data
            expect(userData.email.conversion_api).toBe(email);
            expect(userData.phone.conversion_api).toBe(phone);
            expect(userData.first_name.conversion_api).toBe(first_name);
            expect(userData.last_name.conversion_api).toBe(last_name);
            expect(userData.date_of_birth.conversion_api).toBe(date_of_birth);
            expect(userData.city.conversion_api).toBe(city);
            expect(userData.state.conversion_api).toBe(state);
            expect(userData.country.conversion_api).toBe(country);
            expect(userData.zip.conversion_api).toBe(zip);
            expect(userData.external_id.conversion_api).toBe(external_id);
            expect(userData.gender.conversion_api).toBe(gender);
            expect(userData.client_ip_address.conversion_api).toBe(client_ip_address);
            expect(userData.client_user_agent.conversion_api).toBe(client_user_agent);
            expect(userData.fbp.conversion_api).toBe(fbp);
            expect(userData.fbc.conversion_api).toBe(fbc);
            expect(userData.subscription_id.conversion_api).toBe(subscription_id);
            expect(userData.fb_login_id.conversion_api).toBe(fb_login_id);
            expect(userData.lead_id.conversion_api).toBe(lead_id);
            expect(userData.dobd.conversion_api).toBe(dobd);
            expect(userData.dobm.conversion_api).toBe(dobm);
            expect(userData.doby.conversion_api).toBe(doby);
            expect(userData.f5first.conversion_api).toBe(f5first);
            expect(userData.f5last.conversion_api).toBe(f5last);
            expect(userData.fi.conversion_api).toBe(fi);

            // conversion api user data
            expect(userData.server_user_data.email).toBe(email);

        });

        test('UserData creation by constructor', function() {

            const email = 'xxx@gmail.com',
                phone = '1123456789',
                gender = 'f',
                first_name = 'chrissy',
                last_name = 'smith',
                date_of_birth = '19940919',
                city = 'seattle',
                state = 'wa',
                country = 'us',
                zip = '98121',
                external_id = 'chrissy001',
                client_ip_address = '127.0.0.1',
                client_user_agent = 'chrome',
                fbp = 'xxxfbp',
                fbc = 'xxxfbc',
                subscription_id = 'xxxsubscription',
                fb_login_id = 'xxxlogin',
                lead_id = 'xxxlead',
                dobd = '19',
                dobm = '09',
                doby = '94',
                f5first = 'chris',
                f5last = 'hoooo',
                fi = 'ch',
                address = '1000 westlake ave';

            // not set state, client_ip_address, address,
            const userData = new SignalUserData(email, phone, first_name, last_name, date_of_birth, city, null, zip, country, external_id, gender,
                null, client_user_agent, fbp, fbc, subscription_id, fb_login_id, lead_id, dobd, dobm, doby, f5first, f5last, fi, null);

            // check business data api
            expect(userData.email.business_data_api).toBe(email);
            expect(userData.phone.business_data_api).toBe(phone);
            expect(userData.first_name.business_data_api).toBe(first_name);
            expect(userData.last_name.business_data_api).toBe(last_name);
            expect(userData.date_of_birth.business_data_api).toBe(date_of_birth);
            expect(userData.city.business_data_api).toBe(city);
            expect(userData.state.business_data_api).toBe(null);
            expect(userData.country.business_data_api).toBe(country);
            expect(userData.zip.business_data_api).toBe(zip);
            expect(userData.external_id.business_data_api).toBe(external_id);
            expect(userData.address.business_data_api).toBe(null);

            // check business data api
            expect(userData.business_data_user_data.email).toBe(email);

            // check conversion api
            expect(userData.email.conversion_api).toBe(email);
            expect(userData.phone.conversion_api).toBe(phone);
            expect(userData.first_name.conversion_api).toBe(first_name);
            expect(userData.last_name.conversion_api).toBe(last_name);
            expect(userData.date_of_birth.conversion_api).toBe(date_of_birth);
            expect(userData.city.conversion_api).toBe(city);
            expect(userData.state.conversion_api).toBe(null);
            expect(userData.country.conversion_api).toBe(country);
            expect(userData.zip.conversion_api).toBe(zip);
            expect(userData.external_id.conversion_api).toBe(external_id);
            expect(userData.gender.conversion_api).toBe(gender);
            expect(userData.client_ip_address.conversion_api).toBe(null);
            expect(userData.client_user_agent.conversion_api).toBe(client_user_agent);
            expect(userData.fbp.conversion_api).toBe(fbp);
            expect(userData.fbc.conversion_api).toBe(fbc);
            expect(userData.subscription_id.conversion_api).toBe(subscription_id);
            expect(userData.fb_login_id.conversion_api).toBe(fb_login_id);
            expect(userData.lead_id.conversion_api).toBe(lead_id);
            expect(userData.dobd.conversion_api).toBe(dobd);
            expect(userData.dobm.conversion_api).toBe(dobm);
            expect(userData.doby.conversion_api).toBe(doby);
            expect(userData.f5first.conversion_api).toBe(f5first);
            expect(userData.f5last.conversion_api).toBe(f5last);
            expect(userData.fi.conversion_api).toBe(fi);

            // check conversion api
            expect(userData.server_user_data.email).toBe(email);

        });
    });

    describe('Content Data', function() {
        test('Content creation', function() {

            const id = 'xxx',
                quantity = 2,
                price = 12.4,
                item_price = 5.2,
                title = 'Lettuce',
                description = 'California lettuce',
                brand = 'xxxx',
                category = 'xxxxx',
                delivery_category = DeliveryCategory.IN_STORE,
                tax = 2.0,
                external_content_id = 'xxxxxx';

            const content = new SignalContent()
                .setId(id)
                .setQuantity(quantity)
                .setPrice(price)
                .setItemPrice(item_price)
                .setTitle(title)
                .setDescription(description)
                .setBrand(brand)
                .setCategory(category)
                .setDeliveryCategory(delivery_category)
                .setTax(tax)
                .setExternalContentId(external_content_id);

            // check business data api
            expect(content.id.business_data_api).toBe(id);
            expect(content.quantity.business_data_api).toBe(quantity);
            expect(content.price.business_data_api).toBe(price);
            expect(content.title.business_data_api).toBe(title);
            expect(content.tax.business_data_api).toBe(tax);
            expect(content.external_content_id.business_data_api).toBe(external_content_id);

            // check business data api
            expect(content.business_data_content.id).toBe(id);

            // check converision api
            expect(content.id.conversion_api).toBe(id);
            expect(content.quantity.conversion_api).toBe(quantity);
            expect(content.item_price.conversion_api).toBe(item_price);
            expect(content.title.conversion_api).toBe(title);
            expect(content.description.conversion_api).toBe(description);
            expect(content.brand.conversion_api).toBe(brand);
            expect(content.category.conversion_api).toBe(category);
            expect(content.delivery_category.conversion_api).toBe(delivery_category);

            // check converision api
            expect(content.server_content.id).toBe(id);

        });
    });

    describe('Custom Data', function() {
        test('Custom Data creation', function() {
            const first_name = 'firstname';
            const content_id = 'contentid';
            const content_quantity = 2;
            const custom_prop = {
                'key': 'value'
            };
            const value = 1.0,
                currency = 'usd',
                contents = [{ 'id': content_id, 'quantity': content_quantity }],
                order_id = 'orderid',
                status = 'cancel',
                content_name = 'x',
                content_category = 'xx',
                content_ids = [1, 2, 3],
                content_type = 'xxxx',
                predicted_ltv = 12.0,
                num_items = 10,
                search_string = 'xxxx',
                item_number = 'xxx',
                delivery_category = DeliveryCategory.CURBSIDE,
                external_order_id = 'xxxx',
                original_order_id = 'xxxx',
                message = 'xxxxx';


            const content = (new SignalContent())
                .setId(content_id)
                .setQuantity(content_quantity);

            const billing_contact = (new SignalUserData())
                .setFirstName(first_name)

            const shipping_contact = (new SignalUserData())
                .setFirstName(first_name);

            const custom_data = (new SignalCustomData())
                .setValue(value)
                .setCurrency(currency)
                .setContents([content])
                .setOrderId(order_id)
                .setStatus(status)
                .setContentName(content_name)
                .setContentCategory(content_category)
                .setContentIds(content_ids)
                .setContentType(content_type)
                .setPredictedLtv(predicted_ltv)
                .setNumItems(num_items)
                .setSearchString(search_string)
                .setItemNumber(item_number)
                .setDeliveryCategory(delivery_category)
                .setCustomProperties(custom_prop)
                .setBillingContact(billing_contact)
                .setShippingContact(shipping_contact)
                .setExternalOrderId(external_order_id)
                .setOriginalOrderId(original_order_id)
                .setMessage(message);

            // check business data api
            expect(custom_data.value.business_data_api).toBe(value);
            expect(custom_data.currency.business_data_api).toBe(currency);
            expect(custom_data.order_id.business_data_api).toBe(order_id);
            expect(custom_data.status.business_data_api).toBe(status);
            expect(custom_data.external_order_id.business_data_api).toBe(external_order_id);
            expect(custom_data.original_order_id.business_data_api).toBe(original_order_id);
            expect(custom_data.message.business_data_api).toBe(message);
            expect(custom_data.contents.business_data_api[0].id).toBe(content_id);
            expect(custom_data.contents.business_data_api[0].quantity).toBe(content_quantity);
            expect(custom_data.billing_contact.business_data_api.first_name).toBe(first_name);
            expect(custom_data.shipping_contact.business_data_api.first_name).toBe(first_name);

            // check business data api
            expect(custom_data.business_data_custom_data.value).toBe(value);

            // check converision api
            expect(custom_data.value.conversion_api).toBe(value);
            expect(custom_data.currency.conversion_api).toBe(currency);
            expect(custom_data.order_id.conversion_api).toBe(order_id);
            expect(custom_data.status.conversion_api).toBe(status);
            expect(custom_data.content_name.conversion_api).toBe(content_name);
            expect(custom_data.content_category.conversion_api).toBe(content_category);
            expect(custom_data.content_ids.conversion_api).toBe(content_ids);
            expect(custom_data.content_type.conversion_api).toBe(content_type);
            expect(custom_data.predicted_ltv.conversion_api).toBe(predicted_ltv);
            expect(custom_data.num_items.conversion_api).toBe(num_items);
            expect(custom_data.search_string.conversion_api).toBe(search_string);
            expect(custom_data.item_number.conversion_api).toBe(item_number);
            expect(custom_data.delivery_category.conversion_api).toBe(delivery_category);
            expect(custom_data.custom_properties.conversion_api).toBe(custom_prop);
            expect(custom_data.contents.conversion_api[0].id).toBe(content_id);
            expect(custom_data.contents.conversion_api[0].quantity).toBe(content_quantity);

            // check converision api
            expect(custom_data.server_custom_data.value).toBe(value);
        });

    });
    describe('Event', function() {
        test('Event creation', function() {
            const event_name = 'Purchase',
                event_time = '123124125',
                event_source_url = 'xxxx',
                event_id = 'xxxx',
                action_source = 'xxxx',
                opt_out = false,
                data_processing_options = [],
                data_processing_options_country = 1,
                data_processing_options_state = 1000;

            const first_name = 'xxxx';
            const user_data = new SignalUserData()
                .setFirstName(first_name);
            const billing_contact = new SignalUserData()
                .setFirstName(first_name);
            const shipping_contact = new SignalUserData()
                .setFirstName(first_name);

            const content_id = 'contentid';
            const content = (new SignalContent())
                .setId(content_id);

            const value = 123;
            const custom_data = new SignalCustomData()
                .setValue(value)
                .setBillingContact(billing_contact)
                .setShippingContact(shipping_contact)
                .setContents([content]);

            const event = (new SignalEvent())
                .setEventName(event_name)
                .setEventTime(event_time)
                .setEventSourceUrl(event_source_url)
                .setEventId(event_id)
                .setActionSource(action_source)
                .setOptOut(opt_out)
                .setUserData(user_data)
                .setCustomData(custom_data)
                .setDataProcessingOptions(data_processing_options)
                .setDataProcessingOptionsCountry(data_processing_options_country)
                .setDataProcessingOptionsState(data_processing_options_state);

            // check business data api
            expect(event.event_name.business_data_api).toBe(event_name);
            expect(event.event_time.business_data_api).toBe(event_time);
            expect(event.event_id.business_data_api).toBe(event_id);
            expect(event.data_processing_options.business_data_api).toBe(data_processing_options);
            expect(event.data_processing_options_country.business_data_api).toBe(data_processing_options_country);
            expect(event.data_processing_options_state.business_data_api).toBe(data_processing_options_state);
            expect(event.user_data.business_data_api.first_name).toBe(first_name);
            expect(event.custom_data.business_data_api.value).toBe(value);
            expect(event.custom_data.business_data_api.billing_contact.first_name).toBe(first_name);
            expect(event.custom_data.business_data_api.shipping_contact.first_name).toBe(first_name);
            expect(event.custom_data.business_data_api.contents[0].id).toBe(content_id);

            // check conversion api
            expect(event.event_name.conversion_api).toBe(event_name);
            expect(event.event_time.conversion_api).toBe(event_time);
            expect(event.event_source_url.conversion_api).toBe(event_source_url);
            expect(event.event_id.conversion_api).toBe(event_id);
            expect(event.action_source.conversion_api).toBe(action_source);
            expect(event.opt_out.conversion_api).toBe(opt_out);
            expect(event.data_processing_options.conversion_api).toBe(data_processing_options);
            expect(event.data_processing_options_country.conversion_api).toBe(data_processing_options_country);
            expect(event.data_processing_options_state.conversion_api).toBe(data_processing_options_state);
            expect(event.user_data.conversion_api.first_name).toBe(first_name);
            expect(event.custom_data.conversion_api.value).toBe(value);
            expect(event.custom_data.conversion_api.contents[0].id).toBe(content_id);

        });
    });
});
