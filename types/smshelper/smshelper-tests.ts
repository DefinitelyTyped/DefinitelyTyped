import * as smshelper from 'smshelper';

const charCount = smshelper.count('MY_RANDOM_MESSAGE');

const encoding = smshelper.detectEncoding('MY_RANDOM_MESSAGE');

const smsCount = smshelper.parts('MY_RANDOM_MESSAGE');
