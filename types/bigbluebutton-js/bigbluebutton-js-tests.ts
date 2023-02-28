import BigbluebuttonJs = require('bigbluebutton-js');

const BBBApi = BigbluebuttonJs.api('host', 'salt', {});
const createURL = BBBApi.administration.create('meetingName', 'meetingId', {});

async function f() {
  await BigbluebuttonJs.http(createURL);
}
