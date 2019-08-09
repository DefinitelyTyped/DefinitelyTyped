import * as splunk from 'splunk-sdk';

export function test(service: splunk.Service) {
  service.log('descripton', {
    index: '_internal', // $ExpectType string
  });
}
