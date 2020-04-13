/**
 * Converted from:
 *  <https://github.com/matrix-org/matrix-js-sdk/blob/develop/examples/node/app.js>
 *
 * Huan <zixia@zixia.net> Feb 2020
 */
import sdk from 'matrix-js-sdk';

const myUserId      = "@example:localhost";
const myAccessToken = "QGV4YW1wbGU6bG9jYWxob3N0.qPEvLuYfNBjxikiCjP";

const matrixClient = sdk.createClient({
  baseUrl: "http://localhost:8008",
  accessToken: myAccessToken,
  userId: myUserId,
});

matrixClient.startClient(10);  // messages for each room.
