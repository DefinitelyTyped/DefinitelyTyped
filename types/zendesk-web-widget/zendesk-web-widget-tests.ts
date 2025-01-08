/// <reference types="zendesk-web-widget" />

zE(
    "messenger",
    "loginUser",
    function jwtCallback(callback) {
        callback("new-jwt-for-user");
    },
    function loginCallback(error) {
        if (error) {
            // Example error handling
            const { type, reason, message } = error;
        }
    },
);

declare function fetchJwtToken(): Promise<string>;

zE("messenger", "loginUser", function(callback) {
    fetchJwtToken().then(token => {
        callback(token);
    }).catch(error => {
        // console.error("Failed to fetch new JWT:", error);
        // Optional: Log the user out or notify them
    });
});

zE("messenger", "logoutUser");

zE("messenger:on", "close", function() {
});

zE("messenger:on", "unreadMessages", function(count) {
    count; // $ExpectType number
});

zE("messenger:set", "locale", "es");

zE("messenger:set", "zIndex", 123);

zE("messenger:set", "cookies", "all");

zE("messenger:set", "conversationFields", [{ id: "123456789", value: 100.50 }]);
const openWidget = () => {
    // your function to trigger messaging Web Widget to open
};
zE("messenger:set", "conversationFields", [{ id: "123456789", value: 100.50 }], openWidget);
zE("messenger:set", "conversationTags", ["sales", "computer_accessories"]);
