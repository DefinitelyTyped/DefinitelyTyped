import { BigbluebuttonJs } from 'bigbluebutton-js';

const BBBApi = BigbluebuttonJs.api('host', 'salt', {});
const createURL = BBBApi.administration.create('meetingName', 'meetingId', {});
