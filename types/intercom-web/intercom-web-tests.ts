/*
  From
  - https://developers.intercom.com/installing-intercom/docs/intercom-javascript
  - https://developers.intercom.com/installing-intercom/docs/javascript-api-attributes-objects
*/
intercomSettings = {
    email: 'example@example.com',
    name: 'John Doe',
    user_id: '123',
    created_at: 1234567890,
    app_id: 'YOUR_APP_ID',
    api_base: 'https://api-iam.eu.intercom.io',
    custom_launcher_selector: '#Intercom',
    avatar: {
        type: 'avatar',
        image_url: 'https://example.com',
    },
    companies: [
        {
            company_id: '6',
            created_at: 1394531169,
            name: 'Blue Sun',
            monthly_spend: 49,
            plan: 'Pro',
            size: 85,
            website: 'http://example.com',
            industry: 'Manufacturing',
        },
    ],
};

Intercom('boot', intercomSettings);
Intercom('shutdown');
Intercom('update');
Intercom('update', intercomSettings);
Intercom('hide');
Intercom('show');
Intercom('showMessages');
Intercom('showNewMessage');
Intercom('showNewMessage', 'pre-populated content');
Intercom('startTour', 123);
Intercom('showArticle', 123);
Intercom('startSurvey', 123);
Intercom('onHide', () => {
    /* Do stuff */
});
Intercom('onUnreadCountChange', (unreadCount: number) => {
    /* Do stuff */
});
Intercom('onActivatorClick', () => {
    /* Do stuff */
});
Intercom('trackEvent', 'invited-friend');

const visitorId = Intercom('getVisitorId');

Intercom.booted;

const metadata = {
    invitee_email: 'pi@example.org',
    invite_code: 'ADDAFRIEND',
};
Intercom('trackEvent', 'invited-friend', metadata);

/*
  From https://docs.intercom.io/configure-intercom-for-your-product-or-site/
         customize-intercom-to-be-about-your-users/
         group-your-users-by-company
*/
intercomSettings = {
    email: 'example@example.com',
    created_at: 1457552104,
    app_id: 'pi3243fa',
    company: {
        id: '123',
        name: 'Intercorp',
        created_at: 1234567890,
        plan: 'pro',
        monthly_spend: 10,
    },
};

/*
  From https://developers.intercom.com/installing-intercom/
         docs/javascript-api-attributes-objects#section-company-object
*/
intercomSettings = {
    app_id: 'pi3243fa',
    user_id: '12345',
    company: {
        company_id: '6',
        created_at: 1394531169,
        name: 'Blue Sun',
        monthly_spend: 49,
        plan: 'Pro',
        size: 85,
        website: 'http://example.com',
        industry: 'Manufacturing',
    },
};

/*
  From https://docs.intercom.io/configure-intercom-for-your-product-or-site/
         staying-secure/enable-secure-mode-on-your-web-product
*/
intercomSettings = {
    app_id: 'pi3243fa',
    user_id: '12345',
    user_hash: '775c502lcc1087d12398571837c',
};

/*
  From https://docs.intercom.com/configure-intercom-for-your-product-or-site/
         customize-the-intercom-messenger/
         customize-the-intercom-messenger-technical
*/
intercomSettings = {
    app_id: 'pi3243fa',
    alignment: 'left',
    horizontal_padding: 20,
    vertical_padding: 20,
};

/*
From https://www.intercom.com/help/en/articles
        /179-send-custom-user-attributes-to-intercom
*/
intercomSettings = {
    email: 'bob@example.com',
    user_id: '123',
    app_id: 'abc1234',
    created_at: 1234567890,
    subdomain: 'intercom',
    teammates: 4,
    active_accounts: 12,
    last_order_at: 1350466020,
    custom_domain: null,
};

// @ts-expect-error
Intercom('update', { some: { value: 'invalid properties' } });
