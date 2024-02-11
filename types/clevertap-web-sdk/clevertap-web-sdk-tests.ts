import clevertap = require("clevertap-web-sdk");

clevertap.privacy.push({ optOut: false }); // Set the flag to true, if the user of the device opts out of sharing their data
clevertap.privacy.push({ useIP: false }); // Set the flag to true, if the user agrees to share their IP data
clevertap.init("ACCOUNT_ID", "us1", "TARGET_DOMAIN"); // Replace with values applicable to you. Refer below
clevertap.spa = true;
clevertap.enablePersonalization = true;
clevertap.dismissSpamControl = true;
clevertap.raiseNotificationClicked = () => {
    // callback for notification clicked
};
// event without properties
clevertap.event.push("Product viewed");
// event with properties
clevertap.event.push("Product viewed", {
    "Product name": "Casio Chronograph Watch",
    Category: "Mens Accessories",
    Price: 59.99,
    Date: new Date(),
});
const productViewedDetails = clevertap.event.getDetails("Product viewed");
// each of the below mentioned fields are optional
// if set, these populate demographic information in the Dashboard

clevertap.profile.push({
    Site: {
        Name: "Jack Montana", // String
        Identity: 61026032, // String or number
        Email: "jack@gmail.com", // Email address of the user
        Phone: "+14155551234", // Phone (with the country code)
        Gender: "M", // Can be either M or F
        DOB: new Date(), // Date of Birth. Javascript Date object
        Photo: "www.foobar.com/image.jpeg", // URL to the Image
        price: 10,

        // optional fields. controls whether the user will be sent email, push etc.
        "MSG-email": false, // Disable email notifications
        "MSG-push": true, // Enable push notifications
        "MSG-sms": true, // Enable sms notifications
        "MSG-whatsapp": true, // Enable whatsapp notifications
    },
});
const profileValue = clevertap.profile.getAttribute("Name");
// with the exception of one of Identity, Email, or FBID
// each of the following fields is optional
clevertap.onUserLogin.push({
    Site: {
        Name: "Jack Montana", // String
        Identity: 61026032, // String or number
        Email: "jack@gmail.com", // Email address of the user
        Phone: "+14155551234", // Phone (with the country code)
        Gender: "M", // Can be either M or F
        DOB: new Date(), // Date of Birth. Date object
        // optional fields. controls whether the user will be sent email, push etc.
        "MSG-email": false, // Disable email notifications
        "MSG-push": true, // Enable push notifications
        "MSG-sms": true, // Enable sms notifications
        "MSG-whatsapp": true, // Enable WhatsApp notifications
    },
});
const LOG_LEVEL = 0;
clevertap.setLogLevel(LOG_LEVEL);
// Here Log Levels is an integer that can be any of the folowing:
//  0: disable all logs
//  1: display only errors
//  2: display errors and info
//  3: display all logs
const ctid = clevertap.getCleverTapID();
const accountId = clevertap.getAccountID();
clevertap.logout();
clevertap.clear();
clevertap.pageChanged();
clevertap.notifications.push({
    apnsWebPushId: "<apple web push id>",
    apnsWebPushServiceUrl: "<safari package service url>",
    titleText: "Would you like to receive Push Notifications?",
    bodyText: "We promise to only send you relevant content and give you updates on your transactions",
    okButtonText: "Sign me up!",
    rejectButtonText: "No thanks",
    okButtonColor: "#F28046",
    askAgainTimeInSeconds: 5,
    serviceWorkerPath: "/foo/my_sw.js", // path to your custom service worker file
});
clevertap.renderNotificationClicked({
    msgId: "232",
    kv: 1212,
    msgCTkv: "sdsdsa",
    pivotId: "asdasasd",
    wzrk_slideNo: 232323,
});
clevertap.renderNotificationViewed({
    msgId: "232",
    kv: 1212,
    msgCTkv: "sdsdsa",
    pivotId: "asdasasd",
    wzrk_slideNo: 232323,
});
clevertap.setOffline(true);
clevertap.setOffline(false);
clevertap.notifications.push("Title", "Body", "Ok", "Cancel");
const totalVisits = clevertap.user.getTotalVisits();
const lastVisit = clevertap.user.getLastVisit();
const timeElapsed = clevertap.session.getTimeElapsed();
const pageCount = clevertap.session.getPageCount();
// WebInbox
// Get Inbox Message Count
clevertap.getInboxMessageCount();
// Get Inbox Unread Message Count
clevertap.getInboxMessageUnreadCount();
// Get All Inbox messages
clevertap.getAllInboxMessages();
// Get only Unread messages
clevertap.getUnreadInboxMessages();
// Get message object belonging to the given message id only. Message id should be a String
clevertap.getInboxMessageForId("1687446482_1687781900740");
// Delete message from the Inbox. Message id should be a String
clevertap.deleteInboxMessage("1687446482_1687781900740");
// Mark Message as Read. Message id should be a String
clevertap.markReadInboxMessage("1687446482_1687781900740");
// Mark Messages as Read.The method takes and array fo message Ids. Message id should be a String
clevertap.markReadInboxMessagesForIds(["1688382277_1706170861769"]);
// Mark all messages as read
clevertap.markReadAllInboxMessage();

clevertap.setMultiValuesForKey("stuff", ["bag", "shoes"]);
clevertap.addMultiValueForKey("stuff", "coat");
clevertap.addMultiValuesForKey("stuff", ["cap", "belt"]);
clevertap.removeMultiValueForKey("stuff", "belt");
clevertap.removeMultiValuesForKey("stuff", ["bag", "cap"]);
clevertap.removeValueForKey("stuff");

clevertap.handleIncrementValue("price", 10);
clevertap.handleDecrementValue("price", 10);

clevertap.getLocation(21, 79);
