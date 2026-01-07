import emssf from "@elliemae/em-ssf-guest";

// Basic usage
// $ExpectType void
emssf.connect();

// @ts-expect-error
emssf.getObject(12345); // Should fail, because the objectId must be a string

// You can await or then() since methods return Promises
(async function testGetObject() {
    const loanObj = await emssf.getObject("loan");
    loanObj.all().then(loanData => {
        loanData; // $ExpectType any
    });
})();

// Checking typed parameters
(async function testHttp() {
    const http = await emssf.getObject("http");
    const resp = await http.get("https://example.com"); // $ExpectType Promise<any>
})();

// Check event usage
const token = emssf.subscribe("loan", "open", eventData => {
    eventData; // $ExpectType any
});
emssf.unsubscribe("loan", "open", token); // $ExpectType void
