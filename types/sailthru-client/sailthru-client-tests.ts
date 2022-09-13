import { createSailthruClient } from "sailthru-client";

// create client instance
const sailthru = createSailthruClient('api_key', 'api_secret');

// enable and disable logging
sailthru.enableLogging();
sailthru.disableLogging();

// send GET request
sailthru.apiGet('purchase', {
    purchase_id: '5520b3b39759105e4aa4e69f',
    purchase_key: 'sid'
}, (err, response) => {
    // handle response
});

// send POST request
sailthru.apiPost('blast', {
    copy_blast: 123,
    name: 'my copy'
}, (err, response) => {
    // handle response
});

// send DELETE request
const data = {
    id: "559a8fc63c8aa934460f227d"
};
sailthru.apiDelete('feed', data, (err, response) => {
    // handle response
});

// get rate limit information
const rateLimitInfo = sailthru.getLastRateLimitInfo('send', 'POST');
const limitResetTime = rateLimitInfo.reset;

// send single message
sailthru.send('Abandoned Cart Reminder', 'example@example.com', (err, response) => {
    // handle response
});
const welcomeOptions = {vars: {color: 'blue'}, schedule_time: 'tomorrow 5pm'};
sailthru.send('Welcome', 'example@example.com', welcomeOptions, (err, response) => {
    // handle response
});

// send message to multiple emails
sailthru.multiSend('Abandoned Cart Reminder', 'example1@example.com,example2@example.com', (err, response) => {
    // handle response
});
const emails = ['example1@example.com', 'example2@example.com'];
const options = { evars: {
    'example1@example.com': {color: 'blue'},
    'example2@example.com': {color: 'red'}
}};
sailthru.multiSend('Welcome', emails, options, (err, response) => {
    // handle response
});

// check delivery status
sailthru.getSend('V-WWJIO6iCcAi0Vo', (e, r) => {
    // handle response
});

// cancel scheduled send
sailthru.cancelSend('V-WWJIO6iCcAi0Vo', (e, r) => {
    // handle response
});

// get status of particular job
sailthru.getJobStatus('575b100f83ba8830008b4568', (err, response) => {
    // handle response
});

// get user by Sailthru ID
sailthru.getUserBySid('57e54ddc83ba8895008b4567', (e, r) => {
    // handle response
});

// get user by looking up via given key and ID
sailthru.getUserByKey('example@example.com', 'email', (e, r) => {
    // handle response
});

const fields = {lists: 1};
sailthru.getUserByKey('example@example.com', 'email', fields, (err, response) => {
    // handle response
});

// add var to user profile
const userData = {vars: {def: 123}};
sailthru.saveUserBySid('57e54ddc83ba8895008b4567', userData, (err, response) => {
    // handle response
});

const userData2 = {vars: {abc: 456}};
sailthru.saveUserByKey('example@example.com', 'email', userData2, (err, response) => {
    // handle response
});

// run Jobs
const exportOptions = { list: 'VIP Users' };
sailthru.processJob('export_list_data', exportOptions, (err, response) => {
    // handle response
});

const importOptions = { list: 'New List', file: '/path/to/new_users.csv' };
const report_email = 'report@example.com';
const postback_url = 'http://example.com/postback.php';
const binary_data_params = ['file'];
sailthru.processJob('import', importOptions, report_email, postback_url, binary_data_params, (err, response) => {
    // handle response
});

// Look up a blast by blast_id
sailthru.getBlast(123, (e, r) => {
    // handle response
});

// Delete a previously created blast by blast_id
sailthru.deleteBlast(123, (e, r) => {
    // handle response
});

// Unschedule a previously scheduled blast by blast_id
sailthru.unscheduleBlast(123, (e, r) => {
    // handle response
});

// Pause a currently sending campaign by blast_id
sailthru.pauseBlast(123, (e, r) => {
    // handle response
});

// Resume a previously paused campaign by blast_id
sailthru.resumeBlast(123, (e, r) => {
    // handle response
});

// Cancel a sending blast by blast_id
sailthru.cancelBlast(123, (e, r) => {
    // handle response
});

// Enable link tracking on a campaign
const blastOptions = {
    is_link_tracking: 1
};
sailthru.updateBlast(123, blastOptions, (err, response) => {
    // Handle response
});

// Modify a campaign with data copied from “Welcome” template and send in 2 hours
const blastList = 'clicked';
sailthru.scheduleBlastFromTemplate(123, 'Welcome', blastList, '+2 hours', (err, response) => {
    // Handle response
});

// Modify a campaign with data copied from “Welcome” template and send in 2 hours, while also setting a report email
const blastOptions2 = {
    report_email: 'example@example.com'
};
sailthru.scheduleBlastFromTemplate(123, 'Welcome', blastList, '+2 hours', blastOptions2, (err, response) => {
    // Handle response
});

// Schedule an existing campaign to send now
sailthru.scheduleBlastFromBlast(123, 'now', (err, response) => {
    // Handle response
});

// Schedule a campaign to send now while also setting the suppress_list using options object
const blastOptions3 = {
    suppress_list: ['100users', 'domain']
};
sailthru.scheduleBlastFromBlast(123, 'now', blastOptions3, (err, response) => {
    // Handle response
});

// Delete a template called “test template”
sailthru.deleteTemplate('test template', (e, r) => {
    // handle response
});

// Return all lists in your account
sailthru.getLists((e, r) => {
    // handle response
});

// Delete a list called “test list”
sailthru.deleteList('test list', (e, r) => {
    // handle response
});

// Schedule a campaign without using the optional options object
const name = 'my campaign';
const list = 'clicked';
const scheduleTime = '+2 hours';
const fromName = 'Example User';
const fromEmail = 'example@example.com';
const subject = 'my test send';
const contentHtml = '<p>This is a test</p>{beacon}';
const contentText = 'this is a test';
const scheduleBlastOptions = {
    suppress_list: ['100users', 'domain']
};
sailthru.scheduleBlast(name, list, scheduleTime, fromName, fromEmail, subject, contentHtml, contentText, (err, response) => {
    // Handle response
});

// Schedule a campaign using the options object
sailthru.scheduleBlast(name, list, scheduleTime, fromName, fromEmail, subject, contentHtml, contentText, scheduleBlastOptions, (err, response) => {
    // Handle response
});

// Create a new content item
const title = 'my new content';
const url = 'http://test.com/my-new-content';
sailthru.pushContent(title, url, (err, response) => {
    // handle response
});

// Create a new content item with certain tags
const contentOptions = {
    tags: ['new', 'exciting', 'shoes']
};
sailthru.pushContent(title, url, contentOptions, (err, response) => {
    // handle response
});

// Register a purchase for a single product, without any extra options
const items = [
    {
        qty: 1,
        title: "product1",
        url: "https://www.example.com/product1",
        price: 10000,
        id: "id1"
    }
];
sailthru.purchase('example@example.com', items, (err, response) => {
    // handle response
});

// Register a purchase for two products, including a coupon code var
const newItems = [
    {
        qty: 2,
        title: "Water Bottle",
        price: 1099,
        id: 1234,
        url: "https://example.com/1234/water_bottle"
    },
    {
        qty: 1,
        title: "product1",
        url: "https://www.example.com/product1",
        price: 10000,
        id: "id1"
    }
];
const purchaseOptions = {
    vars: { coupon_code: 'xyz' }
};
sailthru.purchase('example@example.com', newItems, purchaseOptions, (err, response) => {
    // handle response
});

// Get stats for the performance of the “Welcome” template over a certain month
const statsData = {
    stat: 'send',
    template: 'Welcome',
    start_date: '2016-10-01',
    end_date: '2016-10-31'
};
sailthru.stats(statsData, (err, response) => {
    console.log(response);
});

// Get stats for the performance of the “clicked” list on a certain day
const statsOptions = {date: '2016-04-15', list: 'clicked'};
sailthru.statsList(statsOptions, (err, response) => {
    // handle response
});

// Get stats for the engagement level performance of campaigns over a certain month
const statsOptions2 = {start_date: '-3 months', end_date: 'today', engagement: 1};
sailthru.statsBlast(statsOptions2, (err, response) => {
    // handle response
});

// Get subject line performance for a particular campaign
const statsOptions3 = {blast_id: 225, subject: 1};
sailthru.statsBlast(statsOptions3, (err, response) => {
    console.log(err);
    console.log(response);
});
